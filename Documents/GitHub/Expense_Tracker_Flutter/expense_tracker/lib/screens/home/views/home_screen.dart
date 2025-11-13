import 'dart:math';

import 'package:expense_repository/expense_repository.dart';
import 'package:expense_tracker/screens/add_expense/blocs/create_categorybloc/create_category_bloc.dart';
import 'package:expense_tracker/screens/add_expense/blocs/create_expense_bloc/create_expense_bloc.dart';
import 'package:expense_tracker/screens/add_expense/blocs/get_categories_bloc/get_categories_bloc.dart';
import 'package:expense_tracker/screens/add_expense/views/add_expense.dart';
import 'package:expense_tracker/screens/home/blocs/bloc/get_expense_bloc.dart';
import 'package:expense_tracker/screens/home/views/main_screen.dart';
import 'package:expense_tracker/screens/stats/stats.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:expense_tracker/screens/home/blocs/bloc/get_income_bloc.dart';
import 'package:expense_tracker/screens/auth/session_cubit.dart';

/// Màn hình Home bọc bottom bar + FAB và điều hướng Main/Stats.
class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  // var widgetList = [
  //   MainScreen(),
  //   StatScreen(),
  // ];

  int index = 0;
  late Color selectedItem = Colors.blue;
  Color unselectedItem = Colors.grey;

  @override
  Widget build(BuildContext context) {
    // Là khung giao diện chính của màn hình.
    return BlocBuilder<GetExpenseBloc, GetExpenseState>(
      builder: (context, expenseState) {
        if (expenseState is GetExpenseSuccess) {
          return BlocBuilder<GetIncomeBloc, GetIncomeState>(
            builder: (context, incomeState) {
              final expenses = expenseState.expense;
              final incomes = incomeState is GetIncomeSuccess ? incomeState.incomes : <Expense>[];
              final totalExpense = expenses.fold<int>(0, (sum, e) => sum + e.amount);
              final totalIncome = incomes.fold<int>(0, (sum, e) => sum + e.amount);
              final balance = totalIncome - totalExpense;
          return Scaffold(
            // Không dùng AppBar
            // appBar: AppBar(),

            // BottomNavigationBar bọc trong ClipRRect để bo góc trên
            bottomNavigationBar: ClipRRect(
              borderRadius: const BorderRadius.vertical(
                top: Radius.circular(30),
              ),
              //*
              child: BottomNavigationBar(
                onTap: (value) {
                  setState(() {
                    index = value;
                  });
                },

                backgroundColor: Colors.white,
                showSelectedLabels: false,
                showUnselectedLabels: false,
                elevation: 3,
                items: [
                  BottomNavigationBarItem(
                    icon: Icon(
                      //* set selection
                      CupertinoIcons.home,
                      color: index == 0 ? selectedItem : unselectedItem,
                    ),
                    label: 'Home',
                  ),

                  BottomNavigationBarItem(
                    icon: Icon(
                      CupertinoIcons.graph_square_fill,
                      color: index == 1 ? selectedItem : unselectedItem,
                    ),
                    label: 'Stats',
                  ),
                ],
              ),
            ),

            // Floating action button ở giữa
            floatingActionButtonLocation:
                FloatingActionButtonLocation.centerDocked,
            floatingActionButton: FloatingActionButton(
              // event nút add
              onPressed: () async {
                final bool? result = await Navigator.push<bool>(
                  context,
                  MaterialPageRoute<bool>(
                    builder: (BuildContext context) => MultiBlocProvider(
                      providers: [
                        BlocProvider(
                          create: (context) =>
                              CreateCategoryBloc(FirebaseExpenseRepo(currentUserEmail: context.read<SessionCubit>().state.email)),
                        ),
                        BlocProvider(
                          create: (context) =>
                              GetCategoriesBloc(FirebaseExpenseRepo(currentUserEmail: context.read<SessionCubit>().state.email))
                                ..add(GetCategories()),
                        ),
                        BlocProvider(
                          create: (context) =>
                              CreateExpenseBloc(FirebaseExpenseRepo(currentUserEmail: context.read<SessionCubit>().state.email)),
                        ),
                      ],
                      child: AddExpense(),
                    ), //gọi từ add_expense
                  ),
                );
                if (result == true) {
                  context.read<GetExpenseBloc>().add(GetExpenses());
                  context.read<GetIncomeBloc>().add(GetIncomes());
                }
              },
              shape: const CircleBorder(),
              backgroundColor: Colors.black,
              foregroundColor: Colors.white,
              child: const Icon(
                CupertinoIcons.add,
                size: 32,
                color: Colors.white,
              ),
            ),

            // Body chính
            body: index == 0 ? MainScreen(expenses, totalIncome: totalIncome, totalExpense: totalExpense, balance: balance) : const StatScreen(),
          );
            },
          );
        } else {
          return Scaffold(
             body: Center(
              child: CircularProgressIndicator(),
             ),


          );
        }
      },
    );
  }
}
