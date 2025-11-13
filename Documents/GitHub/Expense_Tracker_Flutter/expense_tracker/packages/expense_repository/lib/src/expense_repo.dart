import 'package:expense_repository/expense_repository.dart';

abstract class ExpenseRepository {
  Future<void> createCategory(Category category);

  Future<List<Category>> getCategory();

  Future<void> createExpense(Expense expense);

  Future<List<Expense>> getExpenses();

  // Income APIs
  Future<void> createIncome(Expense income);

  Future<List<Expense>> getIncomes();

  // Update APIs
  Future<void> updateExpense(Expense expense);
  Future<void> updateIncome(Expense income);

  // Delete APIs
  Future<void> deleteExpense(String expenseId);
  Future<void> deleteIncome(String incomeId);
}
