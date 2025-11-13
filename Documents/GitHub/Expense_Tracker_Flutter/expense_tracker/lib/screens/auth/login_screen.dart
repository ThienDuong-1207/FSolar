import 'package:expense_repository/expense_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'session_cubit.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  LoginScreen({super.key, required this.authRepository});

  final AuthRepository authRepository; // kept for future if needed
  final userRepo = UserRepository();

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

/// Màn Login: nhập email, validate đơn giản và set session.
class _LoginScreenState extends State<LoginScreen> {
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
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
          return 'Email Invalid.';
        case 'user-not-found':
          return 'Account not found.';
        case 'wrong-password':
          return 'Password is incorrect.';
        case 'user-disabled':
          return 'Account is disabled.';
        case 'too-many-requests':
          return 'You are doing too many requests. Please try again later.';
        case 'network-request-failed':
          return 'Network request failed. Please check your internet connection.';
        default:
          return 'Login failed. Please try again.';
      }
    } catch (_) {
      return 'Login failed. Please try again.';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.surface,
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.surface,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.of(context).pushReplacementNamed('/about'),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
          padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
            SizedBox(
              height: MediaQuery.of(context).size.height / 3,
              child: Center(
                child: Container(
                  color: Theme.of(context).colorScheme.surface,
                  child: Image.asset(
                    'assets/logo.png',
                    fit: BoxFit.contain,
                    errorBuilder: (context, error, stack) {
                      return Image.asset(
                        'assets/logo.jpg',
                        fit: BoxFit.contain,
                      );
                    },
                  ),
                ),
              ),
            ),
            const SizedBox(height: 16),
            Text('Created by Animal Core',
            textAlign: TextAlign.center,
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
            const SizedBox(height: 16),
            TextField(
              controller: emailController,
              keyboardType: TextInputType.emailAddress,
              textInputAction: TextInputAction.next,
              decoration: const InputDecoration(
                labelText: 'Email',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: passwordController,
              obscureText: true,
              textInputAction: TextInputAction.done,
              decoration: const InputDecoration(
                labelText: 'Password',
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
                        final email = emailController.text.trim();
                        final password = passwordController.text.trim();
                        if (email.isEmpty || password.isEmpty) {
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Enter email/password')),
                          );
                          return;
                        }
                        if (!_isValidEmail(email)) {
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Email is not valid')),
                          );
                          return;
                        }
                        setState(() => isLoading = true);
                        try {
                          final exists = await widget.userRepo.userExists(email);
                          if (!exists) {
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(content: Text('Account not found')),
                            );
                          } else {
                            if (!mounted) return;
                            context.read<SessionCubit>().logIn(email);
                          }
                        } catch (e) {
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(content: Text('Login failed: $e')),
                          );
                        } finally {
                          if (mounted) setState(() => isLoading = false);
                        }
                      },
                      style: TextButton.styleFrom(
                        backgroundColor: Colors.black,
                      ),
                      child: const Text(
                        'Login',
                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
                      ),
                    ),
            ),
            const SizedBox(height: 12),
            TextButton(
              onPressed: () => Navigator.of(context).pushNamed('/register'),
              child: Text('Create an account',
                  style: TextStyle(color: Colors.black)),
            ),
            ],
          ),
        ),
      ),
    );
  }
}


