import 'package:expense_repository/expense_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'session_cubit.dart';
import 'package:flutter/material.dart';

class RegisterScreen extends StatefulWidget {
  RegisterScreen({super.key, required this.authRepository});

  final AuthRepository authRepository; // kept for consistency
  final userRepo = UserRepository();

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

/// Màn Register: tạo doc user mới trong Firestore và kích hoạt session.
class _RegisterScreenState extends State<RegisterScreen> {
  final nameController = TextEditingController();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final confirmPasswordController = TextEditingController();
  bool isLoading = false;

  bool _isValidEmail(String email) {
    final emailRegex = RegExp(r'^\S+@\S+\.\S+$');
    return emailRegex.hasMatch(email);
  }

  String _mapAuthErrorToMessage(dynamic error) {
    try {
      final code = (error as dynamic).code as String?;
      switch (code) {
        case 'invalid-email':
          return 'Email không hợp lệ.';
        case 'email-already-in-use':
          return 'Email đã được sử dụng.';
        case 'weak-password':
          return 'Mật khẩu quá yếu (tối thiểu 6 ký tự).';
        case 'network-request-failed':
          return 'Lỗi mạng. Kiểm tra kết nối internet.';
        default:
          return 'Đăng ký thất bại. Vui lòng thử lại.';
      }
    } catch (_) {
      return 'Đăng ký thất bại. Vui lòng thử lại.';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.surface,
      appBar: AppBar(backgroundColor: Theme.of(context).colorScheme.surface),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text('Create Account',
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
            const SizedBox(height: 16),
            TextField(
              controller: nameController,
              decoration: const InputDecoration(
                labelText: 'Name',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: emailController,
              decoration: const InputDecoration(
                labelText: 'Email',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: passwordController,
              obscureText: true,
              decoration: const InputDecoration(
                labelText: 'Password',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: confirmPasswordController,
              obscureText: true,
              decoration: const InputDecoration(
                labelText: 'Confirm Password',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            SizedBox(
              height: 50,
              child: isLoading
                  ? const Center(child: CircularProgressIndicator())
                  : TextButton(
                      onPressed: () async {
                        final name = nameController.text.trim();
                        final email = emailController.text.trim();
                        final password = passwordController.text.trim();
                        final confirm = confirmPasswordController.text.trim();
                        if (name.isEmpty) {
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Vui lòng nhập tên')),
                          );
                          return;
                        }
                        if (email.isEmpty || password.isEmpty) {
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Enter email/password')),
                          );
                          return;
                        }
                        if (!_isValidEmail(email)) {
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Email không hợp lệ')),
                          );
                          return;
                        }
                        if (password.length < 6) {
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Mật khẩu tối thiểu 6 ký tự')),
                          );
                          return;
                        }
                        if (password != confirm) {
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Mật khẩu xác nhận không khớp')),
                          );
                          return;
                        }
                        setState(() => isLoading = true);
                        try {
                          final exists = await widget.userRepo.userExists(email);
                          if (exists) {
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(content: Text('Email đã được sử dụng')),
                            );
                          } else {
                            await widget.userRepo.createUser(email, name: name);
                            if (!mounted) return;
                            context.read<SessionCubit>().logIn(email);
                            Navigator.of(context).pop();
                          }
                        } catch (e) {
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(content: Text('Đăng ký thất bại: $e')),
                          );
                        } finally {
                          if (mounted) setState(() => isLoading = false);
                        }
                      },
                      style: TextButton.styleFrom(
                        backgroundColor: Theme.of(context).colorScheme.primary,
                      ),
                      child: const Text(
                        'Register',
                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
                      ),
                    ),
            ),
          ],
        ),
      ),
    );
  }
}


