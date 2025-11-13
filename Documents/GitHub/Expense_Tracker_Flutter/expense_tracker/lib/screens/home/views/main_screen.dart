import 'dart:math';
import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
//* import from widgets folder
import '../widgets/income_expense_item.dart';
import '../widgets/transaction_item.dart';
import 'package:expense_repository/expense_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:expense_tracker/screens/auth/session_cubit.dart';
import 'package:expense_tracker/screens/add_expense/views/add_expense.dart';
import 'package:expense_tracker/screens/add_expense/blocs/create_expense_bloc/create_expense_bloc.dart';
import 'package:expense_tracker/screens/add_expense/blocs/get_categories_bloc/get_categories_bloc.dart';
import 'package:expense_tracker/screens/home/blocs/bloc/get_expense_bloc.dart';
import 'package:expense_tracker/screens/home/blocs/bloc/get_income_bloc.dart';

/// Màn hình chính hiển thị header, thẻ Balance và danh sách transactions.
class MainScreen extends StatefulWidget {
  final List<Expense> expenses;
  final int totalIncome;
  final int totalExpense;
  final int balance;
  const MainScreen(this.expenses, {super.key, this.totalIncome = 0, this.totalExpense = 0, this.balance = 0});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {

  @override
  Widget build(BuildContext context) {
    final expenses = widget.expenses;
    final totalIncome = widget.totalIncome;
    final totalExpense = widget.totalExpense;
    final balance = widget.balance;
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 25.0),
        child: Column(
          children: [
            //* Row 1
            Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                //*1. Expanded chiếm toàn bộ không gian còn lại bên trái
                Expanded(
                  child: Row(
                    children: [
                      //*1.1 Avatar tròn + icon người (disabled upload)
                      FutureBuilder<String?>(
                          future: context.select<SessionCubit, String?>((c) => c.state.email) != null
                              ? UserRepository().getAvatarUrl(context.read<SessionCubit>().state.email!)
                              : Future.value(null),
                          builder: (context, snapshot) {
                            final url = snapshot.data;
                            if (url != null && url.isNotEmpty) {
                              return ClipOval(
                                child: Image.network(
                                  url,
                                  key: ValueKey(url),
                                  width: 50,
                                  height: 50,
                                  fit: BoxFit.cover,
                                ),
                              );
                            }
                            return Stack(
                              alignment: Alignment.center,
                              children: [
                                Container(
                                  width: 50,
                                  height: 50,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    color: Colors.yellow.shade300,
                                  ),
                                ),
                                const Icon(CupertinoIcons.person_fill),
                              ],
                            );
                          },
                        ),
                      const SizedBox(width: 8),

                      //*1.2 Text co giãn theo không gian
                      Flexible(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              "Welcome!",
                              style: TextStyle(
                                fontSize: 12,
                                fontWeight: FontWeight.w600,
                                color: Theme.of(context).colorScheme.outline,
                              ),
                              overflow: TextOverflow.ellipsis,
                            ),
                          Builder(
                            builder: (context) {
                              final email = context.select<SessionCubit, String?>((c) => c.state.email);
                              if (email == null || email.isEmpty) {
                                return const Text(
                                  'User',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                  ),
                                  overflow: TextOverflow.ellipsis,
                                );
                              }
                              return FutureBuilder<String?>(
                                future: UserRepository().getUserName(email),
                                builder: (context, snapshot) {
                                  final displayName = (snapshot.data != null && snapshot.data!.isNotEmpty)
                                      ? snapshot.data!
                                      : email;
                                  return Text(
                                    displayName,
                                    style: const TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.bold,
                                    ),
                                    overflow: TextOverflow.ellipsis,
                                  );
                                },
                              );
                            },
                          ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),

                // *2. Icon settings luôn nằm bên phải
                PopupMenuButton<String>(
                  icon: const Icon(CupertinoIcons.settings),
                  onSelected: (value) {
                    if (value == 'logout') {
                      context.read<SessionCubit>().logOut();
                      Navigator.of(context).pushNamedAndRemoveUntil('/about', (route) => false);
                    }
                  },
                  itemBuilder: (BuildContext context) => <PopupMenuEntry<String>>[
                    const PopupMenuItem<String>(
                      value: 'logout',
                      child: Text('Logout'),
                    ),
                  ],
                ),
              ],
            ),

            //? Tạo khoảng trống 2 row
            const SizedBox(height: 20),
            //* Row 2 - tạo phần hiển thị card
            Container(
              width: MediaQuery.of(context).size.width,
              height: MediaQuery.of(context).size.width / 2,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [
                    Theme.of(context).colorScheme.secondary,
                    Theme.of(context).colorScheme.tertiary,
                    Theme.of(context).colorScheme.primary,
                  ],
                  transform: const GradientRotation(pi / 4),
                ),
                borderRadius: BorderRadius.circular(25),
                boxShadow: [
                  BoxShadow(
                    blurRadius: 5,
                    color: Colors.grey.shade400,
                    offset: Offset(5, 5),
                  ),
                ],
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    "Total Balance",
                    style: TextStyle(
                      fontSize: 20,
                      color: Colors.white,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  SizedBox(height: 14),
                  Text(
                    "\$${balance}",
                    style: TextStyle(
                      fontSize: 40,
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      vertical: 12,
                      horizontal: 20,
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,

                      children: [
                        IncomeExpenseItem(
                          icon: CupertinoIcons.arrow_down,
                          color: Colors.green,
                          title: "Income",
                          amount: "\$ ${totalIncome}",
                        ),
                        IncomeExpenseItem(
                          icon: CupertinoIcons.arrow_up,
                          color: Colors.red,
                          title: "Expense",
                          amount: "\$ ${totalExpense}",
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            //* Row 3
            SizedBox(height: 20),

            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  "Transaction",
                  style: TextStyle(
                    fontSize: 16,
                    color: Colors.black,
                    fontWeight: FontWeight.bold,
                  ),
                ),

                //* Wrap Text with GestureDetector -> clickable
                GestureDetector(
                  onTap: () {},
                  child: Text(
                    'View All',
                    style: TextStyle(
                      fontSize: 14,
                      color: Theme.of(context).colorScheme.outline,
                      fontWeight: FontWeight.w400,
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20),

            //* Create list of expense
            Expanded(
              child: ListView.builder(
                itemCount: expenses.length,
                itemBuilder: (context, int i) {
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 16.0),
                    child: Dismissible(
                      key: ValueKey(expenses[i].expenseId),
                      direction: DismissDirection.endToStart,
                      background: Container(
                        alignment: Alignment.centerRight,
                        padding: const EdgeInsets.symmetric(horizontal: 20),
                        decoration: BoxDecoration(
                          color: Colors.red.shade400,
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: const Icon(CupertinoIcons.trash, color: Colors.white),
                      ),
                      confirmDismiss: (direction) async {
                        return await showDialog<bool>(
                              context: context,
                              builder: (ctx) => AlertDialog(
                                title: const Text('Delete expense'),
                                content: const Text('Are you sure you want to delete this expense?'),
                                actions: [
                                  TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
                                  TextButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Delete')),
                                ],
                              ),
                            ) ??
                            false;
                      },
                      onDismissed: (direction) async {
                        try {
                          final email = context.read<SessionCubit>().state.email;
                          await FirebaseExpenseRepo(currentUserEmail: email).deleteExpense(expenses[i].expenseId);
                          if (!mounted) return;
                          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Deleted')));
                          context.read<GetExpenseBloc>().add(GetExpenses());
                        } catch (e) {
                          if (!mounted) return;
                          ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Delete failed: $e')));
                        }
                      },
                      child: GestureDetector(
                      onTap: () async {
                        final bool? result = await Navigator.push<bool>(
                          context,
                          MaterialPageRoute<bool>(
                            builder: (BuildContext context) => MultiBlocProvider(
                              providers: [
                                BlocProvider(
                                  create: (context) =>
                                      CreateExpenseBloc(FirebaseExpenseRepo(currentUserEmail: context.read<SessionCubit>().state.email)),
                                ),
                                BlocProvider(
                                  create: (context) =>
                                      GetCategoriesBloc(FirebaseExpenseRepo(currentUserEmail: context.read<SessionCubit>().state.email))
                                        ..add(GetCategories()),
                                ),
                              ],
                              child: AddExpense(initialExpense: expenses[i]),
                            ),
                          ),
                        );
                        if (result == true) {
                          context.read<GetExpenseBloc>().add(GetExpenses());
                          context.read<GetIncomeBloc>().add(GetIncomes());
                        }
                      },
                      child: Container(
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(16.0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Row(
                              children: [
                                Stack(
                                  alignment: Alignment.center,
                                  children: [
                                    Container(
                                      width: 50,
                                      height: 50,
                                      decoration: BoxDecoration(
                                        color: Color(
                                          expenses[i].category.color,
                                        ),
                                        shape: BoxShape.circle,
                                      ),
                                    ),
                                    Image.asset(
                                      'assets/${expenses[i].category.icon}.png',
                                      scale: 2,
                                      color: Colors.white,
                                    ),
                                  ],
                                ),
                                const SizedBox(width: 12),
                                Text(
                                  expenses[i].category.name,
                                  style: TextStyle(
                                    fontSize: 14,
                                    color: Theme.of(
                                      context,
                                    ).colorScheme.onSurface,
                                    fontWeight: FontWeight.w500,
                                  ),
                                ),
                              ],
                            ),
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.end,
                              children: [
                                Text(
                                  "\$${expenses[i].amount}.00",
                                  style: TextStyle(
                                    fontSize: 14,
                                    color: Theme.of(
                                      context,
                                    ).colorScheme.onSurface,
                                    fontWeight: FontWeight.w400,
                                  ),
                                ),
                                Text(
                                  DateFormat(
                                    'dd/MM/yyyy',
                                  ).format(expenses[i].date),
                                  style: TextStyle(
                                    fontSize: 14,
                                    color: Theme.of(
                                      context,
                                    ).colorScheme.outline,
                                    fontWeight: FontWeight.w400,
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ),
                    ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

