part of 'create_expense_bloc.dart';

sealed class CreateExpenseEvent extends Equatable {
  const CreateExpenseEvent();

  @override
  List<Object> get props => [];
}

class CreateExpense extends CreateExpenseEvent {
  final Expense expense;

  const CreateExpense(this.expense);
  @override
  List<Object> get props => [expense];
}

class CreateIncome extends CreateExpenseEvent {
  final Expense income;

  const CreateIncome(this.income);
  @override
  List<Object> get props => [income];
}

class UpdateExpense extends CreateExpenseEvent {
  final Expense expense;
  const UpdateExpense(this.expense);
  @override
  List<Object> get props => [expense];
}

class UpdateIncome extends CreateExpenseEvent {
  final Expense income;
  const UpdateIncome(this.income);
  @override
  List<Object> get props => [income];
}

class DeleteExpense extends CreateExpenseEvent {
  final String expenseId;
  const DeleteExpense(this.expenseId);
  @override
  List<Object> get props => [expenseId];
}

class DeleteIncome extends CreateExpenseEvent {
  final String incomeId;
  const DeleteIncome(this.incomeId);
  @override
  List<Object> get props => [incomeId];
}
