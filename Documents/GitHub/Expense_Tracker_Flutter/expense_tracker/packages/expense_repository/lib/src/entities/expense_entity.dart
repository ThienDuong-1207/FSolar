import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:expense_repository/expense_repository.dart';

import '../models/models.dart';

class ExpenseEntity {
  String expenseId;
  Category category;
  DateTime date;
  int amount;
  String? userEmail;

  ExpenseEntity({
    required this.expenseId,
    required this.category,
    required this.date,
    required this.amount,
    this.userEmail,
  });

  Map<String, Object?> toDocument() {
    return {
      'expenseId': expenseId,
      //* cant save firebase with Object- category
      'category': category.toEntity().toDocument(),
      'date': date,
      'amount': amount,
      'userEmail': userEmail,
    };
  }

  static ExpenseEntity fromDocument(Map<String, dynamic> doc) {
    return ExpenseEntity(
      expenseId: doc['expenseId'],
      //* cant save firebase with Object- category
      category: Category.fromEntity(
        CategoryEntity.fromDocument(doc['category']),
      ),
      // TimeStamp
      date: (doc['date'] as Timestamp).toDate(),
      amount: doc['amount'],
      userEmail: doc['userEmail'],
    );
  }
}
