import 'package:expense_repository/expense_repository.dart';
import 'package:expense_tracker/screens/add_expense/blocs/create_expense_bloc/create_expense_bloc.dart';
import 'package:expense_tracker/screens/add_expense/views/category_creation.dart';
import 'package:expense_tracker/screens/add_expense/widgets/text_form_item.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:intl/intl.dart';
import 'package:uuid/uuid.dart';

import '../blocs/get_categories_bloc/get_categories_bloc.dart';
import 'package:expense_tracker/screens/auth/session_cubit.dart';

class AddExpense extends StatefulWidget {
  const AddExpense({super.key, this.initialExpense});
  final Expense? initialExpense;

  @override
  State<AddExpense> createState() => _AddExpenseState();
}

class _AddExpenseState extends State<AddExpense> {
  TextEditingController expenseController = TextEditingController();
  TextEditingController categoryController = TextEditingController();
  TextEditingController dateController = TextEditingController();
  DateTime selectDate = DateTime.now();

  // Controllers for Income tab
  TextEditingController incomeAmountController = TextEditingController();
  TextEditingController incomeDateController = TextEditingController();
  DateTime incomeDate = DateTime.now();

  late Expense expense;

  bool isLoading = false;

  // //*
  // List<String> myCategoryIcons = [
  //   //* data for assets folder
  //   'entertainment',
  //   'food',
  //   'home',
  //   'pet',
  //   'shopping',
  //   'tech',
  //   'travel',
  // ];

  // //* khai báo
  // String iconSelected = '';
  // Color categoryColor = Colors.white;

  @override
  void initState() {
    // ignore: todo
    // TODO: implement initState
    dateController.text = DateFormat('dd/MM/yyyy').format(DateTime.now());
    incomeDateController.text = DateFormat('dd/MM/yyyy').format(DateTime.now());
    if (widget.initialExpense != null) {
      expense = widget.initialExpense!;
      expenseController.text = expense.amount == 0 ? '' : expense.amount.toString();
      categoryController.text = expense.category.name;
      selectDate = expense.date;
      dateController.text = DateFormat('dd/MM/yyyy').format(selectDate);
    } else {
      expense = Expense.empty;
      expense.expenseId = const Uuid().v1();
    }
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: BlocListener<CreateExpenseBloc, CreateExpenseState>(
        listener: (context, state) {
          if (state is CreateExpenseSuccess) {
            Navigator.pop(context, true);
          } else if (state is CreateExpenseLoading) {
            setState(() {
              isLoading = true;
            });
          }
        },
        child: GestureDetector(
          onTap: () => FocusScope.of(context).unfocus(),
          child: Scaffold(
            backgroundColor: Theme.of(context).colorScheme.surface,
            appBar: AppBar(
              backgroundColor: Theme.of(context).colorScheme.surface,
              bottom: const TabBar(
                tabs: [
                  Tab(text: 'Expense'),
                  Tab(text: 'Income'),
                ],
              ),
            ),
            body: TabBarView(
              children: [
                // Expense tab (existing UI)
                BlocBuilder<GetCategoriesBloc, GetCategoriesState>(
                  builder: (context, state) {
                    if (state is GetCategoriesSuccess) {
                      return Padding(
                        padding: const EdgeInsets.all(16.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Text(
                              'Add Expenses',
                              style: TextStyle(
                                fontSize: 22,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            SizedBox(height: 16),
                            InputFormItem(
                              controller: expenseController,
                              hintText: 'Money',
                              icon: CupertinoIcons.money_dollar,
                              type: InputType.number,
                            ),
                            SizedBox(height: 16),
                            InputFormItem(
                              fillColor: expense.category == Category.empty
                                  ? Colors.white
                                  : Color(expense.category.color),
                              prefixIconWidget: expense.category == Category.empty
                                  ? const Icon(
                                      FontAwesomeIcons.list,
                                      size: 16,
                                      color: Colors.grey,
                                    )
                                  : Image.asset(
                                      'assets/${expense.category.icon}.png',
                                      scale: 3,
                                    ),
                              controller: categoryController,
                              hintText: 'Category',
                              onTap: () {},
                              icon: CupertinoIcons.list_bullet,
                              suffixIcon: IconButton(
                                icon: Icon(CupertinoIcons.plus),
                                onPressed: () async {
                                  var newCategory = await getCategoryCreation(context);
                                  setState(() {
                                    state.categories.insert(0, newCategory);
                                  });
                                },
                              ),
                              decoration: const InputDecoration().copyWith(
                                border: const OutlineInputBorder(
                                  borderRadius: BorderRadius.vertical(
                                    top: Radius.circular(12),
                                  ),
                                  borderSide: BorderSide.none,
                                ),
                              ),
                            ),
                            Container(
                              height: 200,
                              width: MediaQuery.of(context).size.width,
                              decoration: const BoxDecoration(
                                color: Colors.white,
                                borderRadius: BorderRadius.vertical(
                                  bottom: Radius.circular(12),
                                ),
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: ListView.builder(
                                  itemCount: state.categories.length,
                                  itemBuilder: (context, int i) {
                                    return Card(
                                      child: ListTile(
                                        onTap: () {
                                          setState(() {
                                            expense.category = state.categories[i];
                                            categoryController.text = expense.category.name;
                                          });
                                        },
                                        leading: Image.asset(
                                          'assets/${state.categories[i].icon}.png',
                                          scale: 3,
                                        ),
                                        title: Text(state.categories[i].name),
                                        tileColor: Color(state.categories[i].color),
                                        shape: RoundedRectangleBorder(
                                          borderRadius: BorderRadiusGeometry.circular(8),
                                        ),
                                      ),
                                    );
                                  },
                                ),
                              ),
                            ),
                            SizedBox(height: 16),
                            InputFormItem(
                              controller: dateController,
                              hintText: 'Date',
                              icon: CupertinoIcons.clock,
                              onTap: () async {
                                DateTime? newDate = await showDatePicker(
                                  context: context,
                                  initialDate: expense.date,
                                  firstDate: DateTime.now(),
                                  lastDate: DateTime.now().add(const Duration(days: 365)),
                                );
                                if (newDate != null) {
                                  setState(() {
                                    dateController.text = DateFormat('dd/MM/yyyy').format(newDate);
                                    selectDate = newDate;
                                    expense.date = newDate;
                                  });
                                }
                              },
                            ),
                            SizedBox(height: 16),
                            SizedBox(
                              width: double.infinity,
                              height: kToolbarHeight,
                              child: isLoading
                                  ? const Center(child: CircularProgressIndicator())
                                  : TextButton(
                                      onPressed: () {
                                        final amountText = expenseController.text.trim();
                                        // Try to resolve category from text if user tapped list previously not registered
                                        if (expense.category == Category.empty && categoryController.text.trim().isNotEmpty) {
                                          final inputName = categoryController.text.trim().toLowerCase();
                                          final matches = (state.categories).where((c) => c.name.toLowerCase() == inputName);
                                          if (matches.isNotEmpty) {
                                            setState(() {
                                              expense.category = matches.first;
                                            });
                                          }
                                        }
                                        if (amountText.isEmpty || expense.category.categoryId.isEmpty) {
                                          ScaffoldMessenger.of(context).showSnackBar(
                                            const SnackBar(content: Text('Please enter amount and choose a category')),
                                          );
                                          return;
                                        }
                                        final parsedAmount = int.tryParse(amountText.replaceAll(',', '').replaceAll('.', ''));
                                        if (parsedAmount == null) {
                                          ScaffoldMessenger.of(context).showSnackBar(
                                            const SnackBar(content: Text('Invalid amount')),
                                          );
                                          return;
                                        }
                                        setState(() {
                                          expense.amount = parsedAmount;
                                          expense.date = selectDate;
                                      expense.userEmail = context.read<SessionCubit>().state.email;
                                        });
                                        if (widget.initialExpense != null) {
                                          context.read<CreateExpenseBloc>().add(UpdateExpense(expense));
                                        } else {
                                          context.read<CreateExpenseBloc>().add(CreateExpense(expense));
                                        }
                                      },
                                      style: TextButton.styleFrom(backgroundColor: Colors.black),
                                      child: const Text(
                                        'Save',
                                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
                                      ),
                                    ),
                            ),
                          ],
                        ),
                      );
                    } else {
                      return const Center(child: CircularProgressIndicator());
                    }
                  },
                ),

                // Income tab
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Text(
                        'Add Income',
                        style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(height: 16),
                      InputFormItem(
                        controller: incomeAmountController,
                        hintText: 'Money',
                        icon: CupertinoIcons.money_dollar,
                      ),
                      const SizedBox(height: 16),
                      InputFormItem(
                        controller: incomeDateController,
                        hintText: 'Date',
                        icon: CupertinoIcons.clock,
                        onTap: () async {
                          final picked = await showDatePicker(
                            context: context,
                            initialDate: incomeDate,
                            firstDate: DateTime(2000),
                            lastDate: DateTime.now().add(const Duration(days: 365)),
                          );
                          if (picked != null) {
                            setState(() {
                              incomeDate = picked;
                              incomeDateController.text = DateFormat('dd/MM/yyyy').format(picked);
                            });
                          }
                        },
                      ),
                      const SizedBox(height: 16),
                      SizedBox(
                        width: double.infinity,
                        height: kToolbarHeight,
                        child: isLoading
                            ? const Center(child: CircularProgressIndicator())
                            : TextButton(
                                onPressed: () {
                                  final amountText = incomeAmountController.text.trim();
                                  if (amountText.isEmpty) {
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      const SnackBar(content: Text('Please enter amount')),
                                    );
                                    return;
                                  }
                                  final parsedAmount = int.tryParse(amountText.replaceAll(',', '').replaceAll('.', ''));
                                  if (parsedAmount == null) {
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      const SnackBar(content: Text('Invalid amount')),
                                    );
                                    return;
                                  }
                                  final incomeCategory = Category(
                                    categoryId: 'income',
                                    name: 'Income',
                                    totalExpenses: 0,
                                    icon: 'tech',
                                    color: Colors.green.value,
                                  );
                                  final newIncome = Expense(
                                    expenseId: const Uuid().v1(),
                                    category: incomeCategory,
                                    date: incomeDate,
                                    amount: parsedAmount,
                                    userEmail: context.read<SessionCubit>().state.email,
                                  );
                                  context.read<CreateExpenseBloc>().add(CreateIncome(newIncome));
                                },
                                style: TextButton.styleFrom(backgroundColor: Colors.black),
                                child: const Text(
                                  'Save',
                                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
                                ),
                              ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
