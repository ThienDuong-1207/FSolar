import 'package:expense_tracker/screens/stats/chart.dart';
import 'package:expense_tracker/screens/stats/pie.dart';
import 'package:expense_repository/expense_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:expense_tracker/screens/home/blocs/bloc/get_expense_bloc.dart';
import 'package:expense_tracker/screens/home/blocs/bloc/get_income_bloc.dart';
import 'package:intl/intl.dart';
import 'dart:math' as math;
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class StatScreen extends StatelessWidget {
  const StatScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 25.0, vertical: 10),
        child: ListView(
          children: [
            Text(
              'Transactions',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 20),

            Container(
              width: MediaQuery.of(context).size.width,
              height: 220,
              //color: Colors.red,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
              ),
              child: Padding(
                padding: EdgeInsets.fromLTRB(12, 20, 12, 12),
                child: BlocBuilder<GetExpenseBloc, GetExpenseState>(
                  builder: (context, state) {
                    if (state is GetExpenseSuccess) {
                      // group expenses by day dd/MM
                      final Map<String, int> sums = {};
                      for (final e in state.expense) {
                        final key = DateFormat('dd/MM').format(e.date);
                        sums.update(key, (v) => v + e.amount, ifAbsent: () => e.amount);
                      }
                      final labels = sums.keys.toList()..sort((a, b) {
                        final da = DateFormat('dd/MM').parse(a);
                        final db = DateFormat('dd/MM').parse(b);
                        return da.compareTo(db);
                      });
                      final values = labels.map((l) => (sums[l] ?? 0).toDouble()).toList();
                      return MyChart(labels: labels, values: values);
                    }
                    return const Center(child: CircularProgressIndicator());
                  },
                ),
              ),
            ),

            const SizedBox(height: 20),
            Text(
              'Income vs Expense',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),
            Container(
              width: MediaQuery.of(context).size.width,
              height: 200,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
              ),
              child: Padding(
                padding: const EdgeInsets.all(12.0),
                child: BlocBuilder<GetExpenseBloc, GetExpenseState>(
                  builder: (context, state) {
                    if (state is GetExpenseSuccess) {
                      final expenseTotal = state.expense.fold<int>(0, (s, e) => s + e.amount).toDouble();
                      // For income we read from GetIncomeBloc if available
                      return BlocBuilder<GetIncomeBloc, GetIncomeState>(
                        builder: (context, incomeState) {
                          final incomeTotal = incomeState is GetIncomeSuccess
                              ? incomeState.incomes.fold<int>(0, (s, e) => s + e.amount).toDouble()
                              : 0.0;
                          return IncomeExpensePie(income: incomeTotal, expense: expenseTotal);
                        },
                      );
                    }
                    return const Center(child: CircularProgressIndicator());
                  },
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
