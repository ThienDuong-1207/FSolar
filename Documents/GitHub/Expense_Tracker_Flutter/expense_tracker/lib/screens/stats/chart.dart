// Thư viện FL Chart để vẽ biểu đồ

import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'dart:math' as math;

/// Widget biểu đồ cột thể hiện dữ liệu (doanh thu, chi tiêu, thống kê,...).
/// - Tự tính bước chia trục Y theo quy tắc 1–2–5 × 10^n.
/// - maxY làm tròn lên bội số của step để nhãn đẹp, dễ đọc.
class MyChart extends StatefulWidget {
  const MyChart({super.key, required this.labels, required this.values});

  final List<String> labels; // dd/MM
  final List<double> values; // expense amounts per day

  @override
  State<MyChart> createState() => _MyChartState();
}

class _MyChartState extends State<MyChart> {
  @override
  Widget build(BuildContext context) {
    return BarChart(
      mainBarData(), // gọi hàm tạo dữ liệu chính cho biểu đồ
    );
  }

  // 🧱 Hàm tạo từng nhóm dữ liệu (mỗi cột trong biểu đồ)
  BarChartGroupData makeGroupData(int x, double y, double maxY) {
    final double clampedY = y > maxY ? maxY : y;
    return BarChartGroupData(
      x: x, // trục hoành (ví dụ: ngày)
      barRods: [
        BarChartRodData(
          toY: clampedY,
          color: Colors.blue, // giá trị chiều cao của cột
          width: 14, // độ rộng mỗi cột
          borderRadius: BorderRadius.circular(6), // bo góc cột
          // gradient: const LinearGradient(
          // 🌈 gradient màu cột
          // colors: [Color(0xFF00B2E7), Color(0xFFE064F7)],
          // begin: Alignment.bottomCenter,
          // end: Alignment.topCenter,
          // ),
          // Nền xám phía sau (thanh nền)
          backDrawRodData: BackgroundBarChartRodData(
            show: true,
            toY: maxY == 0 ? 1 : maxY, // chiều cao nền (max theo dữ liệu)
            color: Colors.grey.shade300,
          ),
        ),
      ],

      // 🔢 Hiển thị label giá trị trên đầu cột
      //showingTooltipIndicators: [0],
    );
  }

  // 📊 Danh sách cột dữ liệu sinh từ labels/values
  List<BarChartGroupData> showingGroup(double maxY) => List.generate(
        widget.values.length,
        (i) => makeGroupData(i, widget.values[i], maxY),
      );

  // ⚙️ Hàm cấu hình chính cho biểu đồ
  BarChartData mainBarData() {
    // Tính max động dựa trên dữ liệu và chọn bước chia "đẹp"
    final double dataMax =
        widget.values.isEmpty ? 0 : widget.values.reduce(math.max);
    final double step = _niceStep(dataMax <= 0 ? 1 : dataMax);
    final double maxY = dataMax <= 0
        ? step * 5
        : (dataMax / step).ceil() * step; // làm tròn lên bội số của step
    return BarChartData(
      alignment: BarChartAlignment.spaceAround, // căn đều các cột
      // 🎨 Thiết lập hiển thị trục
      titlesData: FlTitlesData(
        show: true,
        // !Ẩn trục phải và trục trên, phải
        rightTitles: const AxisTitles(
          sideTitles: SideTitles(showTitles: false),
        ),

        topTitles: const AxisTitles(sideTitles: SideTitles(showTitles: false)),

        // * Trục dưới (Bottom - hiển thị ngày)
        bottomTitles: AxisTitles(
          sideTitles: SideTitles(
            showTitles: true,
            reservedSize: 38,
            getTitlesWidget: getTitles, // gọi hàm để lấy label trục X
          ),
        ),

        // * Trục trái (Left - hiển thị giá trị 1K, 2K, 3K…)
        leftTitles: AxisTitles(
          sideTitles: SideTitles(
            showTitles: true,
            reservedSize: 38,
            getTitlesWidget: leftTitles,
            interval: step,
          ),
        ),
      ),
      // Ẩn đường viền quanh biểu đồ
      borderData: FlBorderData(show: false),
      // Ẩn lưới ngang/dọc
      gridData: const FlGridData(show: false),
      // 📦 Dữ liệu các nhóm cột
      barGroups: showingGroup(maxY),
      minY: 0,
      maxY: maxY,
    );
  }

  // Tính bước chia trục Y đẹp (1, 2, 5) * 10^n
  double _niceStep(double maxValue) {
    if (maxValue <= 0) return 1;
    final double target = maxValue / 5; // muốn khoảng 5 nhãn
    final double exponent = (math.log(target) / math.ln10).floorToDouble();
    final double base = math.pow(10, exponent).toDouble();
    final double fraction = target / base;
    double niceFraction;
    if (fraction <= 1) {
      niceFraction = 1;
    } else if (fraction <= 2) {
      niceFraction = 2;
    } else if (fraction <= 5) {
      niceFraction = 5;
    } else {
      niceFraction = 10;
    }
    return niceFraction * base;
  }

  // bottom axis
  Widget getTitles(double value, TitleMeta meta) {
    const style = TextStyle(
      color: Colors.grey,
      fontWeight: FontWeight.bold,
      fontSize: 14,
    );

    final idx = value.toInt();
    final text = (idx >= 0 && idx < widget.labels.length)
        ? Text(widget.labels[idx], style: style)
        : const Text('', style: style);

    return SideTitleWidget(
      space: 16,
      meta: meta, // BẮT BUỘC TRONG FL_CHART >= 1.0
      child: text,
    );
  }

  // 🏷 Trục trái (left axis) — hiển thị mức giá trị (1K, 2K, …)
  Widget leftTitles(double value, TitleMeta meta) {
    const style = TextStyle(
      color: Colors.grey,
      fontWeight: FontWeight.bold,
      fontSize: 14,
    );
    final double step = meta.appliedInterval ?? 1;
    final double maxY = meta.max;
    // Chỉ hiển thị các mốc bội số của step trong khoảng [0, maxY]
    if (value < 0 || value > maxY || (value % step).abs() > 0.0001) {
      return const SizedBox.shrink();
    }
    final int v = value.toInt();
    String text;
    if (v == 0) {
      text = '0';
    } else if (v >= 1000) {
      // 1k, 1.5k, 10k...
      text = (v % 1000 == 0)
          ? '${v ~/ 1000}k'
          : '${(v / 1000).toStringAsFixed(1)}k';
    } else {
      text = '$v';
    }
    return SideTitleWidget(
      space: 0,
      meta: meta,
      child: Text(text, style: style),
    );
  }
}
