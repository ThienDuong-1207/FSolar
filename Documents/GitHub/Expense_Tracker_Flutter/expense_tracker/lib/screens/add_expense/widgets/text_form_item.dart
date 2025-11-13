import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

enum InputType { text, number, email, date }

/// 🧩 InputFormItem: widget nhập liệu đa năng, hỗ trợ:
/// - Các kiểu input (text, number, email, date)
/// - onTap tùy chỉnh (chọn ngày, mở danh mục, v.v.)
/// - prefix icon và suffix icon (dạng IconData hoặc Widget)
class InputFormItem extends StatefulWidget {
  final TextEditingController? controller;
  final String? hintText;
  final Function(String)? onChanged;
  final IconData? icon; // Icon ở đầu (prefix)
  final dynamic suffixIcon; // ✅ Có thể là IconData hoặc Widget
  final InputType type;
  final VoidCallback? onTap; // Hành động khi nhấn vào field
  final VoidCallback? onSuffixTap; // Hành động khi nhấn vào suffix icon
  final bool readOnly; // ✅ thêm dòng này
  // ✅ thêm tham số mới
  final InputDecoration? decoration;
  final Color? fillColor;
  final Widget? prefixIconWidget; // cho phép lớp con truyền màu nền riêng

  const InputFormItem({
    super.key,
    this.controller,
    this.hintText,
    this.onChanged,
    this.icon,
    this.suffixIcon,
    this.type = InputType.text,
    this.onTap,
    this.onSuffixTap,
    this.readOnly = false, // ✅ mặc định false -> user có thể input
    this.decoration,
    this.fillColor,
    this.prefixIconWidget,
  });

  @override
  State<InputFormItem> createState() => _InputFormItemState();
}

class _InputFormItemState extends State<InputFormItem> {
  late TextEditingController _controller;

  @override
  void initState() {
    super.initState();
    _controller = widget.controller ?? TextEditingController();
  }

  @override
  Widget build(BuildContext context) {
    final isDate = widget.type == InputType.date;

    return SizedBox(
      width: MediaQuery.of(context).size.width,
      child: TextFormField(
        controller: _controller,
        // ✅ Nếu widget được set readOnly (truyền vào true)
        //    hoặc kiểu nhập là date (InputType.date)
        //    hoặc có gán onTap tùy chỉnh (ví dụ mở "plus icon")
        // => thì TextFormField sẽ chỉ cho xem, KHÔNG cho nhập bàn phím.
        readOnly: widget.readOnly || isDate || widget.onTap != null,

        keyboardType: _getKeyboardType(widget.type),
        onTap: widget.onTap ?? (isDate ? _selectDate : null),
        onChanged: widget.onChanged,
        // ✅ Hợp nhất InputDecoration mặc định với decoration được truyền từ lớp con.
        // Nếu lớp con không truyền decoration → dùng InputDecoration() rỗng.
        decoration: (widget.decoration ?? const InputDecoration()).copyWith(
          // 🧱 filled: true => bật chế độ tô nền cho TextField (nếu không, nền trong suốt)
          filled: true,
          // 🎨 fillColor: màu nền cho vùng input (mặc định trắng)
          fillColor: widget.fillColor ?? Colors.white,
          hintText: widget.hintText ?? 'Input...',

          // 🔹 prefixIcon: icon hiển thị ở bên trái (nếu có)
          prefixIcon:
              widget.prefixIconWidget ??
              (widget.icon != null
                  ? Icon(widget.icon, size: 24, color: Colors.grey[700])
                  : null),

          // 🔹 suffixIcon: icon hiển thị ở bên phải (có thể là IconData hoặc Widget)
          // `_buildSuffixIcon()` xử lý logic để tự động hỗ trợ cả hai dạng.
          suffixIcon: _buildSuffixIcon(),
          // 🧩 border: khung viền của TextField
          // Ưu tiên border được truyền trong widget.decoration?.border nếu có (override từ lớp con)
          // Nếu không có, dùng OutlineInputBorder bo tròn 12px và không viền (BorderSide.none)
          border:
              widget.decoration?.border ??
              OutlineInputBorder(
                borderRadius: BorderRadius.circular(12),
                borderSide: BorderSide.none, // không viền (ẩn border line)
              ),
        ),
      ),
    );
  }

  // 🎯 Hàm xử lý loại icon ở bên phải (suffix)
  Widget? _buildSuffixIcon() {
    final icon = widget.suffixIcon;
    if (icon == null) return null;

    // Trường hợp truyền vào là Widget (IconButton, GestureDetector,...)
    if (icon is Widget) return icon;

    // Trường hợp truyền vào là IconData
    if (icon is IconData) {
      return GestureDetector(
        onTap: widget.onSuffixTap,
        child: Icon(icon, color: Colors.grey[700]),
      );
    }

    // Nếu sai kiểu -> bỏ qua
    return null;
  }

  // 📱 Xác định kiểu bàn phím
  TextInputType _getKeyboardType(InputType type) {
    switch (type) {
      case InputType.number:
        return TextInputType.number;
      case InputType.email:
        return TextInputType.emailAddress;
      default:
        return TextInputType.text;
    }
  }

  // 📅 Nếu là kiểu ngày -> mở DatePicker
  Future<void> _selectDate() async {
    final DateTime? picked = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(2000),
      lastDate: DateTime(2100),
    );
    if (picked != null) {
      final formattedDate = "${picked.day}/${picked.month}/${picked.year}";
      setState(() => _controller.text = formattedDate);
      widget.onChanged?.call(formattedDate);
    }
  }
}
