import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:expense_repository/expense_repository.dart';

part 'get_expense_event.dart';
part 'get_expense_state.dart';

/// BLoC lấy danh sách Expense theo user hiện tại.
/// - Loading: [GetExpenseLoading]
/// - Success: [GetExpenseSuccess]
/// - Failure: [GetExpenseFailure]
class GetExpenseBloc extends Bloc<GetExpenseEvent, GetExpenseState> {
  ExpenseRepository expenseRepository;

  GetExpenseBloc(this.expenseRepository) : super(GetExpenseInitial()) {
    on<GetExpenses>((event, emit) async {
      emit(GetExpenseLoading());

      try {
        List<Expense> expenses = await expenseRepository.getExpenses();
        emit(GetExpenseSuccess(expenses));
      } catch (e) {
        emit(GetExpenseFailure());
      }
    });
  }
}
