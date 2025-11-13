import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

class IncomeExpensePie extends StatelessWidget {
  const IncomeExpensePie({super.key, required this.income, required this.expense});

  final double income;
  final double expense;

  @override
  Widget build(BuildContext context) {
    final double total = income + expense;
    if (total == 0) {
      return const Center(child: Text('No data'));
    }
    final double incomePct = (income / total) * 100;
    final double expensePct = (expense / total) * 100;

    return PieChart(
      PieChartData(
        sectionsSpace: 2,
        centerSpaceRadius: 40,
        sections: [
          PieChartSectionData(
            color: Colors.green,
            value: income,
            title: '${incomePct.toStringAsFixed(0)}%',
            radius: 60,
            titleStyle: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
          ),
          PieChartSectionData(
            color: Colors.red,
            value: expense,
            title: '${expensePct.toStringAsFixed(0)}%',
            radius: 60,
            titleStyle: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
          ),
        ],
      ),
    );
  }
}


