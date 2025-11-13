import 'package:flutter/material.dart';

/// About/Team Info screen:
/// - Phần 1: Logo
/// - Phần 2: Danh sách thành viên
/// - Phần 3: Nút Next chuyển sang màn hình chính (route '/')
class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    return Scaffold(
      backgroundColor: cs.surface,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const SizedBox(height: 20),
              // Phần 1: Logo
              SizedBox(
                height: MediaQuery.of(context).size.height * 0.28,
                child: Center(
                  child: Container(
                    color: cs.surface,
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
              const SizedBox(height: 24),
              // Phần 2: Tiêu đề + danh sách thành viên
              Text(
                'Team Members',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w700,
                  color: cs.onSurface,
                ),
                textAlign: TextAlign.left,
              ),
              const SizedBox(height: 12),
              _MemberLine('DUONG NGOC LINH DAN', '2374802010091'),
              const SizedBox(height: 6),
              _MemberLine('DUONG CHI THIEN', '2374802010468'),
              const SizedBox(height: 6),
              _MemberLine('VO NGOC PHU', '2374802010390'),
              const Spacer(),
              // Phần 3: Nút Next
              SizedBox(
                height: 50,
                child: TextButton(
                  onPressed: () {
                    // chuyển về route '/' (gồm Session gate → Login/Home)
                    Navigator.of(context).pushReplacementNamed('/');
                  },
                  style: TextButton.styleFrom(
                    backgroundColor: Colors.black,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  child: const Text(
                    'Next',
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _MemberLine extends StatelessWidget {
  const _MemberLine(this.name, this.id);
  final String name;
  final String id;

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    return Row(
      children: [
        Expanded(
          child: Text(
            name,
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.w600,
              color: cs.onSurface,
            ),
          ),
        ),
        const SizedBox(width: 12),
        Text(
          id,
          style: TextStyle(
            fontSize: 14,
            color: cs.onSurface.withOpacity(0.8),
          ),
        ),
      ],
    );
  }
}



