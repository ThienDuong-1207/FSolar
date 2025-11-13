import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:expense_repository/expense_repository.dart';
import 'dart:developer';

class FirebaseExpenseRepo implements ExpenseRepository {
  FirebaseExpenseRepo({this.currentUserEmail});
  final String? currentUserEmail;

  final categoryCollection = FirebaseFirestore.instance.collection(
    'categories',
  );
  final expenseCollection = FirebaseFirestore.instance.collection('expenses');
  final incomeCollection = FirebaseFirestore.instance.collection('icomces');
  //* Create collections
  //* Create a missing overide
  @override
  Future<void> createCategory(Category category) async {
    try {
      // Attach current user email if provided at repo level
      if ((category.userEmail == null || category.userEmail!.isEmpty) && (currentUserEmail != null)) {
        category.userEmail = currentUserEmail;
      }
      await categoryCollection
          .doc(category.categoryId)
          .set(category.toEntity().toDocument());
    } catch (e) {
      log(e.toString());
      rethrow;
    }
  }

  @override
  Future<List<Category>> getCategory() async {
    try {
      final query = currentUserEmail != null && currentUserEmail!.isNotEmpty
          ? categoryCollection.where('userEmail', isEqualTo: currentUserEmail)
          : categoryCollection
          // get all category
          ;
      return await query.get()
          .then(
            (value) => value.docs
                .map(
                  (e) => Category.fromEntity(
                    CategoryEntity.fromDocument(e.data()),
                  ),
                )
                .toList(), //* waiting for a list
          );
    } catch (e) {
      log(e.toString());
      rethrow;
    }
  }

  //*
  @override
  Future<void> createExpense(Expense expense) async {
    try {
      await expenseCollection
          .doc(expense.expenseId)
          .set(expense.toEntity().toDocument());
    } catch (e) {
      log(e.toString());
      rethrow;
    }
  }

  @override
  Future<List<Expense>> getExpenses() async {
    try {
      final query = currentUserEmail != null && currentUserEmail!.isNotEmpty
          ? expenseCollection.where('userEmail', isEqualTo: currentUserEmail)
          : expenseCollection;
      final snapshot = await query.get();
      return snapshot.docs
          .map(
            (doc) => Expense.fromEntity(ExpenseEntity.fromDocument(doc.data())),
          )
          .toList();
    } catch (e) {
      log(e.toString());
      rethrow;
    }
  }

  // Income implementations
  @override
  Future<void> createIncome(Expense income) async {
    try {
      await incomeCollection
          .doc(income.expenseId)
          .set(income.toEntity().toDocument());
    } catch (e) {
      log(e.toString());
      rethrow;
    }
  }

  @override
  Future<List<Expense>> getIncomes() async {
    try {
      final query = currentUserEmail != null && currentUserEmail!.isNotEmpty
          ? incomeCollection.where('userEmail', isEqualTo: currentUserEmail)
          : incomeCollection;
      final snapshot = await query.get();
      return snapshot.docs
          .map(
            (doc) => Expense.fromEntity(ExpenseEntity.fromDocument(doc.data())),
          )
          .toList();
    } catch (e) {
      log(e.toString());
      rethrow;
    }
  }

  // Updates
  @override
  Future<void> updateExpense(Expense expense) async {
    try {
      await expenseCollection
          .doc(expense.expenseId)
          .update(expense.toEntity().toDocument());
    } catch (e) {
      log(e.toString());
      rethrow;
    }
  }

  @override
  Future<void> updateIncome(Expense income) async {
    try {
      await incomeCollection
          .doc(income.expenseId)
          .update(income.toEntity().toDocument());
    } catch (e) {
      log(e.toString());
      rethrow;
    }
  }

  @override
  Future<void> deleteExpense(String expenseId) async {
    try {
      await expenseCollection.doc(expenseId).delete();
    } catch (e) {
      log(e.toString());
      rethrow;
    }
  }

  @override
  Future<void> deleteIncome(String incomeId) async {
    try {
      await incomeCollection.doc(incomeId).delete();
    } catch (e) {
      log(e.toString());
      rethrow;
    }
  }
}
