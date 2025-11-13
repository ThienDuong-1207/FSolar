class CategoryEntity {
  String categoryId;
  String name;
  int totalExpenses;
  String icon;
  int color;
  String? userEmail;

  CategoryEntity({
    required this.categoryId,
    required this.name,
    required this.totalExpenses,
    required this.icon,
    required this.color,
    this.userEmail,
  });

  //*
  Map<String, Object?> toDocument() {
    return {
      'categoryId': categoryId,
      'name': name,
      'totalExpenses': totalExpenses,
      'icon': icon,
      'color': color,
      'userEmail': userEmail,
    };
  }

  //*
  static CategoryEntity fromDocument(Map<String, dynamic> doc) {
    return CategoryEntity(
      categoryId: doc['categoryId'],
      name: doc['name'],
      totalExpenses: doc['totalExpenses'],
      icon: doc['icon'],
      color: doc['color'],
      userEmail: doc['userEmail'],
    );
  }
}
