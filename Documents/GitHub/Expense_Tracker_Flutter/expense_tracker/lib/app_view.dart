import 'package:expense_repository/expense_repository.dart';
import 'package:expense_tracker/screens/home/blocs/bloc/get_expense_bloc.dart';
import 'package:expense_tracker/screens/home/blocs/bloc/get_income_bloc.dart';
import 'package:expense_tracker/screens/home/views/home_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:expense_tracker/screens/auth/login_screen.dart';
import 'package:expense_tracker/screens/auth/register_screen.dart';
import 'package:expense_tracker/screens/auth/session_cubit.dart';
import 'package:expense_tracker/screens/about/about_screen.dart';

/// Entry widget cấu hình Theme, routes và Session gate.
class MyAppView extends StatelessWidget {
  const MyAppView({super.key});

  @override
  Widget build(BuildContext context) {
    final authRepository = AuthRepository();
    return BlocProvider(
      create: (_) => SessionCubit(),
      child: MaterialApp(
      // * Ẩn banner “DEBUG” góc phải trên khi chạy ứng dụng
      debugShowCheckedModeBanner: false,

      //* 🏷 Tiêu đề của ứng dụng (hiển thị khi chuyển task)
      title: "Expense Tracker",

      // Màn hình mở đầu: About/Team Info
      initialRoute: '/about',

      //* 🌗 Chế độ theme tổng thể (tự động theo hệ thống)
      //* ThemeMode.system: dùng Light / Dark theo hệ điều hành
      //* ThemeMode.light: luôn sáng
      //* ThemeMode.dark: luôn tối
      themeMode: ThemeMode.system,

      //* CẤU HÌNH LIGHT THEME (giao diện sáng)
      theme: ThemeData(
        // Quy định đây là theme sáng
        brightness: Brightness.light,

        // Bật hỗ trợ Material Design 3 (phiên bản mới của Google)
        useMaterial3: true,

        // Màu nền tổng thể của Scaffold (toàn app)
        scaffoldBackgroundColor: Colors.grey.shade100,

        //* 🎨 Bộ màu chủ đạo (ColorScheme)
        colorScheme:
            ColorScheme.fromSeed(
              //* Màu "seed" là màu chính, từ đó Flutter sinh ra palette
              seedColor: const Color(0xFF00B2E7),
            ).copyWith(
              // surface: màu nền của các thành phần như Card, Container
              surface: Colors.grey.shade100,
              // onSurface: màu chữ/icon hiển thị trên surface
              onSurface: Colors.black,
              // primary: màu chính (AppBar, Button,…)
              primary: const Color(0xFF00B2E7),
              // secondary, tertiary: màu phụ, màu nhấn
              secondary: const Color(0xFFE064F7),
              tertiary: const Color(0xFFFF8D6C),
              // outline: màu viền hoặc border
              outline: Colors.grey,
            ),

        //* 🎯 Thiết lập riêng cho AppBar
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.white, // Nền AppBar
          foregroundColor: Colors.black, // Màu chữ / icon AppBar
        ),
      ),

      //* 🌙 CẤU HÌNH DARK THEME (giao diện tối)
      darkTheme: ThemeData(
        // Quy định đây là theme tối
        brightness: Brightness.dark,
        useMaterial3: true,

        //* Màu nền chính của toàn ứng dụng trong dark mode
        scaffoldBackgroundColor: const Color(0xFF1E1E1E),

        //* 🎨 Bộ màu chủ đạo cho Dark Mode
        colorScheme:
            ColorScheme.fromSeed(
              seedColor: const Color(0xFF00B2E7), // Giữ nguyên màu chủ đạo
              brightness: Brightness.dark, // Tự sinh các màu phù hợp dark mode
            ).copyWith(
              surface: const Color(0xFF121212), // Nền của card/container
              onSurface: Colors.white, // Màu chữ/icon hiển thị trên nền tối
              primary: const Color(0xFF00B2E7), // Màu chính (giữ nguyên)
              secondary: const Color(0xFFE064F7),
              tertiary: const Color(0xFFFF8D6C),
              outline: Colors.grey.shade700, // Màu viền xám đậm hơn
            ),

        // AppBar trong dark mode
        appBarTheme: const AppBarTheme(
          backgroundColor: Color(0xFF121212), // Nền tối
          foregroundColor: Colors.white, // Màu icon / chữ trắng
        ),
      ),

        // Routes + Auth gate
        routes: {
          '/about': (context) => const AboutScreen(),
          '/': (context) => BlocBuilder<SessionCubit, SessionState>(
                builder: (context, session) {
                  if (session.isLoggedIn) {
                    return MultiBlocProvider(
                      providers: [
                        BlocProvider(
                          create: (context) => GetExpenseBloc(
                            FirebaseExpenseRepo(currentUserEmail: session.email),
                          )..add(GetExpenses()),
                        ),
                        BlocProvider(
                          create: (context) => GetIncomeBloc(
                            FirebaseExpenseRepo(currentUserEmail: session.email),
                          )..add(GetIncomes()),
                        ),
                      ],
                      child: const HomeScreen(),
                    );
                  } else {
                    return LoginScreen(authRepository: authRepository);
                  }
                },
              ),
          '/register': (context) => RegisterScreen(authRepository: authRepository),
        },
      ),
    );
  }
}
