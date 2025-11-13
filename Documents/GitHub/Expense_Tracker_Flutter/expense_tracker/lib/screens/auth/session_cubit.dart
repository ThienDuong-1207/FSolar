import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';

class SessionState extends Equatable {
  final String? email;
  const SessionState({this.email});

  bool get isLoggedIn => email != null && email!.isNotEmpty;

  @override
  List<Object?> get props => [email];
}

class SessionCubit extends Cubit<SessionState> {
  SessionCubit() : super(const SessionState());

  void logIn(String email) => emit(SessionState(email: email));
  void logOut() => emit(const SessionState());
}


