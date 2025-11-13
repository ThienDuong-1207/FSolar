import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:expense_repository/expense_repository.dart';

part 'create_expense_event.dart';
part 'create_expense_state.dart';

/// BLoC tạo/cập nhật/xoá Expense & Income.
/// Tất cả action phát ra 3 trạng thái:
/// - [CreateExpenseLoading] trước khi gọi repo
/// - [CreateExpenseSuccess] khi hoàn tất
/// - [CreateExpenseFailure] khi lỗi
class CreateExpenseBloc extends Bloc<CreateExpenseEvent, CreateExpenseState> {
  ExpenseRepository expenseRepository;

  CreateExpenseBloc(this.expenseRepository) : super(CreateExpenseInitial()) {
    on<CreateExpense>((event, emit) async {
      emit(CreateExpenseLoading());
      try {
        await expenseRepository.createExpense(event.expense);
        emit(CreateExpenseSuccess());
      } catch (e) {
        emit(CreateExpenseFailure());
      }
    });
    on<CreateIncome>((event, emit) async {
      emit(CreateExpenseLoading());
      try {
        await expenseRepository.createIncome(event.income);
        emit(CreateExpenseSuccess());
      } catch (e) {
        emit(CreateExpenseFailure());
      }
    });
    on<UpdateExpense>((event, emit) async {
      emit(CreateExpenseLoading());
      try {
        await expenseRepository.updateExpense(event.expense);
        emit(CreateExpenseSuccess());
      } catch (e) {
        emit(CreateExpenseFailure());
      }
    });
    on<UpdateIncome>((event, emit) async {
      emit(CreateExpenseLoading());
      try {
        await expenseRepository.updateIncome(event.income);
        emit(CreateExpenseSuccess());
      } catch (e) {
        emit(CreateExpenseFailure());
      }
    });
    on<DeleteExpense>((event, emit) async {
      emit(CreateExpenseLoading());
      try {
        await expenseRepository.deleteExpense(event.expenseId);
        emit(CreateExpenseSuccess());
      } catch (e) {
        emit(CreateExpenseFailure());
      }
    });
    on<DeleteIncome>((event, emit) async {
      emit(CreateExpenseLoading());
      try {
        await expenseRepository.deleteIncome(event.incomeId);
        emit(CreateExpenseSuccess());
      } catch (e) {
        emit(CreateExpenseFailure());
      }
    });
  }
}
