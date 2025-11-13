import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:expense_repository/expense_repository.dart';

part 'get_income_event.dart';
part 'get_income_state.dart';

/// BLoC lấy danh sách Income theo user hiện tại.
/// - Loading: [GetIncomeLoading]
/// - Success: [GetIncomeSuccess]
/// - Failure: [GetIncomeFailure]
class GetIncomeBloc extends Bloc<GetIncomeEvent, GetIncomeState> {
  final ExpenseRepository expenseRepository;

  GetIncomeBloc(this.expenseRepository) : super(GetIncomeInitial()) {
    on<GetIncomes>((event, emit) async {
      emit(GetIncomeLoading());
      try {
        final incomes = await expenseRepository.getIncomes();
        emit(GetIncomeSuccess(incomes));
      } catch (e) {
        emit(GetIncomeFailure());
      }
    });
  }
}


