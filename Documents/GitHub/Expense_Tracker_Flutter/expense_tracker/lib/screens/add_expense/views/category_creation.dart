import 'package:expense_repository/expense_repository.dart';
import 'package:expense_tracker/screens/add_expense/blocs/create_categorybloc/create_category_bloc.dart';
import 'package:expense_tracker/screens/auth/session_cubit.dart';
import 'package:expense_tracker/screens/add_expense/widgets/text_form_item.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_colorpicker/flutter_colorpicker.dart';
import 'package:uuid/uuid.dart';

Future getCategoryCreation(BuildContext context) {
  List<String> myCategoryIcons = [
    //* data for assets folder
    'entertainment',
    'food',
    'home',
    'pet',
    'shopping',
    'tech',
    'travel',
  ];

  return showDialog(
    context: context,
    // ctx = context
    builder: (ctx) {
      //*
      bool isExpended = false;
      // //* khai báo
      String iconSelected = '';
      Color categoryColor = Colors.white;
      // //*
      TextEditingController categoryNameController = TextEditingController();
      TextEditingController categoryIconController = TextEditingController();
      TextEditingController categoryColorController = TextEditingController();
      bool isLoading = false;
      //*
      Category category = Category.empty;

      return BlocProvider.value(
        value: context.read<CreateCategoryBloc>(),

        child: StatefulBuilder(
          builder: (ctx, setState) {
            return BlocListener<CreateCategoryBloc, CreateCategoryState>(
              listener: (context, state) {
                // TODO: implement listener
                if (state is CreateCategorySuccess) {
                  Navigator.pop(ctx, category);
                } else if (state is CreateCategoryLoading) {
                  setState(() {
                    isLoading = true;
                  });
                }
              },
              child: AlertDialog(
                title: Text("Create a Category"), //! canh giữa
                //* make screen blurred to show content
                content: SizedBox(
                  //! sizedbox???
                  width: MediaQuery.of(context).size.width,
                  child: Column(
                    mainAxisSize:
                        MainAxisSize.min, //* tạo widget nhỏ vừa với content
                    children: [
                      // Auto add Name or Icon category from DBMS, connect api for Icon
                      //! Not done
                      SizedBox(
                        width: MediaQuery.of(context).size.width,
                        child: InputFormItem(
                          hintText: 'Name',
                          //* add controller
                          controller: categoryNameController,
                        ),
                      ),
                      SizedBox(height: 16),

                      //* Override lớp cha "decoration"
                      //!
                      InputFormItem(
                        //* add controller
                        controller: categoryIconController,
                        onTap: () {
                          setState(() {
                            isExpended = !isExpended;
                          });
                        },
                        hintText: 'Icon',
                        suffixIcon: const Icon(CupertinoIcons.chevron_down),
                        //* chỉ override 1 phần
                        decoration: const InputDecoration().copyWith(
                          border: const OutlineInputBorder(
                            borderRadius: BorderRadius.vertical(
                              top: Radius.circular(12), // Bo tròn ở trên
                            ),
                            borderSide: BorderSide.none,
                          ),
                        ),
                      ),

                      //* Đặt điều kiện nếu isExpended
                      isExpended
                          ? Container(
                              width: MediaQuery.of(context).size.width, //*
                              height: 200,
                              decoration: BoxDecoration(
                                color: Colors.white,

                                borderRadius: BorderRadius.vertical(
                                  bottom: Radius.circular(12),
                                ),
                              ),
                              child: Padding(
                                //* GridView -> Padding
                                padding: const EdgeInsets.all(8.0),
                                child: GridView.builder(
                                  gridDelegate:
                                      SliverGridDelegateWithFixedCrossAxisCount(
                                        //* tạo gridview với mỗi hàng là 3
                                        crossAxisCount: 3,
                                        mainAxisSpacing: 5,
                                        crossAxisSpacing: 5,
                                      ),

                                  itemCount: myCategoryIcons.length,
                                  itemBuilder: (context, int i) {
                                    return GestureDetector(
                                      //! ??
                                      onTap: () {
                                        setState(() {
                                          iconSelected = myCategoryIcons[i];
                                        });
                                      },

                                      child: Container(
                                        width: 50,
                                        height: 50,
                                        decoration: BoxDecoration(
                                          border: Border.all(
                                            width: 3,
                                            color:
                                                iconSelected ==
                                                    myCategoryIcons[i]
                                                ? Colors.green
                                                : Colors.grey,
                                          ),
                                          borderRadius: BorderRadius.circular(
                                            12,
                                          ),
                                          image: DecorationImage(
                                            image: AssetImage(
                                              'assets/${myCategoryIcons[i]}.png',
                                            ), //* ví dụ cho data local
                                          ),
                                        ),
                                      ),
                                    );
                                  },
                                ),
                              ),
                            )
                          : Container(),

                      SizedBox(height: 16),
                      InputFormItem(
                        //* Add controller
                        controller: categoryColorController,
                        onTap: () {
                          showDialog(
                            context: context,
                            builder: (ctx2) {
                              return AlertDialog(
                                content: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    ColorPicker(
                                      pickerColor: categoryColor,
                                      //*
                                      onColorChanged: (value) {
                                        setState(() {
                                          categoryColor = value;
                                        });
                                      },
                                    ),
                                    SizedBox(
                                      width: double.infinity,
                                      height: 50,
                                      child: TextButton(
                                        //* ctx2
                                        onPressed: () {
                                          print(categoryColor);
                                          Navigator.pop(ctx2);
                                        },
                                        style: TextButton.styleFrom(
                                          backgroundColor: Colors.white,
                                        ),

                                        child: Text(
                                          'Save Color',
                                          style: TextStyle(
                                            color: Colors.black,
                                            fontWeight: FontWeight.w700,
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              );
                            },
                          );
                        },
                        hintText: 'Color',
                        fillColor: categoryColor,
                      ),
                      SizedBox(height: 16),
                      //* Button Save
                      SizedBox(
                        width: double.infinity,
                        height: kToolbarHeight,

                        child: isLoading
                            ? Center(child: CircularProgressIndicator())
                            : TextButton(
                                onPressed: () {
                                  setState(() {
                                    //* Create category Object
                                    category.categoryId = Uuid().v1();
                                    category.name = categoryNameController.text;
                                    category.icon = iconSelected;
                                    // Color must change to String
                                    category.color = categoryColor.value;
                                    //event
                                  });
                                  //!

                                  // Attach user email to category before saving
                                  category.userEmail = context.read<SessionCubit>().state.email;
                                  context.read<CreateCategoryBloc>().add(
                                    CreateCategory(category),
                                  ); //!
                                },
                                style: TextButton.styleFrom(
                                  backgroundColor: Colors.black,
                                ),

                                child: Text(
                                  'Save Category',
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.w700,
                                  ),
                                ),
                              ),
                      ),
                    ],
                  ),
                ),
              ),
            );
          },
        ),
      );
    },
  );
}
