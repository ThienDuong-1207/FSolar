# Expense Tracker (Flutter)

Ứng dụng theo dõi thu chi cá nhân, sử dụng Flutter + BLoC + Firebase (Firestore, Storage).

## 1) Use Cases (nghiệp vụ)

- Authentication
  - Đăng ký tài khoản với email + name
  - Đăng nhập (giản lược: xác thực tồn tại user trong Firestore)
  - Đăng xuất
- Giao dịch
  - Thêm Expense (chi) theo Category, số tiền, ngày
  - Thêm Income (thu)
  - Sửa Expense/Income
  - Xoá Expense/Income (vuốt trái trong danh sách)
- Category
  - Tạo Category mới (tên, icon, màu)
  - Hiển thị danh sách Category theo từng user
- Thống kê
  - Trang “Total Balance” (Thu – Chi)
  - Biểu đồ cột chi theo ngày (trục Y linh động)
  - Biểu đồ tròn Thu vs Chi
- Hồ sơ
  - Avatar: hiển thị ảnh nếu có hoặc placeholder (chức năng upload hiện tắt)
  - Hiện email/name trong header

## 2) Kiến trúc và thành phần chính

- Presentation (Flutter Widgets + BLoC)
  - `lib/screens/home/views/home_screen.dart`: Scaffold chính (bottom bar, FAB, điều hướng Home/Stats)
  - `lib/screens/home/views/main_screen.dart`: Header, Balance card, danh sách transaction
  - `lib/screens/stats/stats.dart`: Trang thống kê gồm bar chart + pie chart
  - `lib/screens/auth/login_screen.dart`, `lib/screens/auth/register_screen.dart`: Đăng nhập/Đăng ký
  - `lib/screens/add_expense/views/add_expense.dart`: Form tạo/sửa Expense/Income (tab)
  - `lib/screens/add_expense/views/category_creation.dart`: Dialog tạo Category
  - Widgets:
    - `lib/screens/home/widgets/transaction_item.dart`: 1 item giao dịch
    - `lib/screens/home/widgets/income_expense_item.dart`: block hiển thị Income/Expense trong thẻ Balance
  - BLoC:
    - Home:
      - `get_expense_bloc.dart`: lấy danh sách expenses
      - `get_income_bloc.dart`: lấy danh sách incomes
    - Add Expense:
      - `create_expense_bloc.dart`: tạo/sửa/xoá Expense/Income
      - `get_categories_bloc.dart`: lấy Category theo user
      - `create_category_bloc.dart`: tạo Category
    - Auth:
      - `session_cubit.dart`: lưu trạng thái đăng nhập (email)

- Domain/Repository (trong package con `packages/expense_repository`)
  - API trừu tượng:
    - `src/expense_repo.dart`: interface các phương thức
  - Triển khai Firebase:
    - `src/firebase_expense_repo.dart`
      - Category: `createCategory`, `getCategory` (lọc theo `userEmail`)
      - Expense/Income: `createExpense/createIncome`, `getExpenses/getIncomes`, `update*`, `delete*` (lọc theo `userEmail`)
  - Users:
    - `src/user_repo.dart`: `createUser`, `userExists`, `getUserName`, `setAvatarUrl`, `getAvatarUrl` (đọc ưu tiên server)
  - Models/Entities:
    - `src/models/{expense.dart, category.dart}` (có `userEmail`), `src/entities/*` ánh xạ Firestore

- Services (tùy chọn)
  - `lib/services/avatar_service.dart`: tiện ích upload/delete avatar lên Firebase Storage (hiện đang tắt trong UI)

- App shell
  - `lib/app_view.dart`: ThemeData light/dark (monochrome), routing & inject BLoC theo Session
  - `lib/main.dart`: khởi tạo Firebase, chạy app

## 3) Luồng dữ liệu (BLoC)

1) Vào app:
   - `SessionCubit` -> nếu có `email` → `HomeScreen` kèm `GetExpenseBloc`, `GetIncomeBloc` (repo gắn `currentUserEmail`)
   - Nếu chưa → `LoginScreen`
2) Tạo giao dịch:
   - FAB → `AddExpense` (MultiBlocProvider: `CreateExpenseBloc`, `GetCategoriesBloc`, `CreateCategoryBloc`)
   - Submit → `CreateExpense`/`CreateIncome` (hoặc `UpdateExpense/Income`)
   - Pop true → refresh `GetExpenses`, `GetIncomes`
3) Xoá giao dịch:
   - Vuốt trái → confirm → repo `deleteExpense` → refresh list
4) Category:
   - Mở dialog → `CreateCategory` (gắn `userEmail`) → thành công chèn Category mới vào danh sách
5) Avatar (đã tắt upload):
   - UI chỉ hiển thị ảnh từ `avatarUrl` (nếu có) hoặc placeholder; không mở chọn ảnh

### 3.1) Luồng xử lý dữ liệu chi tiết (end‑to‑end → Firebase)

- Đăng ký (Register)
  1. UI: `register_screen.dart` thu thập `name`, `email`, `password` (local validate).
  2. Kiểm tra tồn tại: `UserRepository.userExists(email)` đọc `users/{email}`.
  3. Tạo user: `UserRepository.createUser(email, name: name)` ghi `users/{email}` với:
     - { email, name, createdAt: serverTimestamp() }.
  4. Cập nhật phiên: `SessionCubit.logIn(email)` → chuyển sang Home.

- Đăng nhập (Login)
  1. UI: `login_screen.dart` nhập `email` (validate format).
  2. Kiểm tra tồn tại: `UserRepository.userExists(email)`.
  3. Nếu có → `SessionCubit.logIn(email)`; nếu không → báo lỗi.

- Đăng xuất
  - `SessionCubit.logOut()` → xoá email khỏi state → quay về `LoginScreen`.

- Tạo Category (theo user)
  1. UI: `category_creation.dart` mở dialog, nhập name, chọn icon, màu.
  2. Tạo model: `Category(categoryId: Uuid().v1(), name, icon, color, totalExpenses: 0, userEmail: session.email)`.
  3. Gửi event: `CreateCategoryBloc` → `CreateCategory`.
  4. Repo: `FirebaseExpenseRepo.createCategory(category)`:
     - Nếu `category.userEmail` rỗng → gắn `currentUserEmail`.
     - Ghi `categories/{categoryId}` với entity:
       - { categoryId, name, icon, color, totalExpenses, userEmail }.
  5. Trả kết quả: emit `CreateCategorySuccess` → đóng dialog, chèn Category mới vào list trong `AddExpense`.

- Lấy Category (theo user)
  1. `GetCategoriesBloc` → event `GetCategories`.
  2. Repo: `FirebaseExpenseRepo.getCategory()`:
     - Query: `categories.where('userEmail', isEqualTo: currentUserEmail)`.
     - Map về `Category`.
  3. State: `GetCategoriesSuccess(categories)` → render trong `AddExpense`.

- Thêm Expense
  1. UI: `add_expense.dart` (tab Expense) nhập số tiền, chọn Category, ngày.
  2. Tạo model: `Expense(expenseId: Uuid().v1(), category, amount, date, userEmail: session.email)`.
  3. Event: `CreateExpenseBloc` → `CreateExpense`.
  4. Repo: `FirebaseExpenseRepo.createExpense(expense)`:
     - Ghi `expenses/{expenseId}` với entity:
       - { expenseId, category:{...CategoryEntity}, amount, date: Timestamp, userEmail }.
  5. Pop `true` → Home refresh:
     - `GetExpenseBloc.add(GetExpenses())` và `GetIncomeBloc.add(GetIncomes())`.

- Thêm Income
  1. UI: `add_expense.dart` (tab Income) nhập số tiền, ngày; category “Income” tạo tạm trong UI.
  2. Tạo model: `Expense(... userEmail: session.email)` (lưu chung model).
  3. Event: `CreateIncome`.
  4. Repo: `FirebaseExpenseRepo.createIncome(income)`:
     - Ghi `icomces/{expenseId}` với entity Expense tương tự.
  5. Pop `true` → refresh Incomes/Expenses.

- Sửa Expense/Income
  1. UI: từ `main_screen.dart` tap vào item → mở `AddExpense(initialExpense: ...)` (prefill).
  2. Chỉnh thông tin → `UpdateExpense` (hoặc `UpdateIncome`).
  3. Repo: `updateExpense`/`updateIncome`:
     - `*.doc(expenseId).update(entity.toDocument())`.
  4. Pop `true` → refresh danh sách.

- Xoá Expense/Income
  1. UI: `Dismissible` (vuốt trái) → confirm.
  2. Repo: `deleteExpense(expenseId)` hoặc `deleteIncome(incomeId)`:
     - `*.doc(id).delete()`.
  3. Refresh `GetExpenses()`/`GetIncomes()`.

- Home “Total Balance” và danh sách
  1. Khi vào Home: `GetExpenseBloc(GetExpenses)` và `GetIncomeBloc(GetIncomes)`.
  2. Repo:
     - `getExpenses`: đọc `expenses` (nếu có `currentUserEmail` → filter `userEmail`).
     - `getIncomes`: đọc `icomces` (filter tương tự).
  3. Tính tổng:
     - `totalExpense = sum(amount)`, `totalIncome = sum(amount)`, `balance = totalIncome - totalExpense`.
  4. Render card “Total Balance” + list.

- Stats (Biểu đồ)
  1. Dùng state `GetExpenseSuccess` → group theo ngày: `Map<dd/MM, sum>`.
  2. Sắp xếp nhãn ngày, tạo danh sách `labels`, `values`.
  3. `MyChart(labels, values)` vẽ bar chart:
     - Tính `step` đẹp (1–2–5 × 10^n), `maxY` làm tròn lên bội số `step`.

## 4) Dữ liệu và Firestore

- Collections (đơn giản hoá; có thể đổi sang subcollection theo user nếu muốn):
  - `users/{email}`: { email, name, avatarUrl, createdAt }
  - `categories/{categoryId}`: { categoryId, name, icon, color, totalExpenses, userEmail }
  - `expenses/{expenseId}`: { expenseId, category:{...}, amount, date, userEmail }
  - `icomces/{expenseId}`: thu nhập (note: key hiện tại đang là “icomces”)
- Lưu ý:
  - Các truy vấn đều filter theo `userEmail` (repo khởi tạo với `currentUserEmail`)
  - Ngày dùng `Timestamp` → convert `DateTime`

## 5) Thiết kế & UI

- Phong cách: đơn sắc (đen–trắng–xám), tối giản
  - Nền app: xám rất nhạt; surface: trắng (dark: #1A1A1A)
  - Text: onSurface đậm (#111) và phụ (#6B6B6B)
  - Balance Card: nền xanh lá đậm hoặc gradient (cấu hình trong `main_screen.dart`)
  - Transaction item: nền beige nhạt (light) + viền mảnh, shadow nhẹ
  - FAB đen, icon trắng; BottomBar mono, không nhãn
- Chart:
  - Trục Y linh động (tự tính step 1-2-5 × 10^n)
  - Label theo “k” khi >1000

## 6) Cách chạy

Yêu cầu:
- Flutter stable (>= 3.35), Dart >= 3.9
- Firebase CLI đã cấu hình dự án, file `ios/Runner/GoogleService-Info.plist` sẵn có

Các bước:
1) Cài deps Flutter:
   ```bash
   flutter pub get
   ```
2) iOS:
   ```bash
   cd ios && pod install
   ```
3) Run:
   ```bash
   flutter run
   ```

Ghi chú:
- Ảnh avatar yêu cầu quyền Photos/Camera (đã thêm trong `ios/Runner/Info.plist`)
- Nếu gặp xung đột package Firebase, chạy `flutter clean && flutter pub get`, iOS chạy lại `pod install`

## 7) Cấu trúc thư mục chính

```
lib/
  app_view.dart               // Theme + routes + Session gate
  main.dart                   // Firebase.init + runApp
  services/avatar_service.dart
  screens/
    auth/                     // Login/Register/SessionCubit
    home/
      views/                  // HomeScreen, MainScreen
      widgets/                // TransactionItem, IncomeExpenseItem
      blocs/                  // GetExpenseBloc, GetIncomeBloc
    add_expense/
      views/                  // AddExpense, CategoryCreation
      blocs/                  // CreateExpenseBloc, GetCategoriesBloc, CreateCategoryBloc
    stats/                    // StatScreen + chart + pie
packages/expense_repository/
  lib/src/
    expense_repo.dart         // interface
    firebase_expense_repo.dart// Firestore impl (scoped by userEmail)
    user_repo.dart            // users, names, avatarUrl
    models/ & entities/       // mapping model <-> firestore
```

## 8) Bảo mật & lưu ý

- Storage rule cho avatar (nếu bật lại tính năng):
  - Dev: có thể nới lỏng để test
  - Prod: yêu cầu `request.auth != null`, hoặc ràng buộc đường dẫn theo user
- Firestore rule: cho phép user chỉ đọc/ghi tài liệu của mình thông qua trường `userEmail`.

## 9) Ghi chú kỹ thuật

- Cache avatar: URL kèm query `?t=timestamp` + `ValueKey(url)` để ép Image.network refetch
- `getAvatarUrl` ưu tiên đọc server để tránh dữ liệu cũ
- Dùng BLoC cho danh sách và tạo/sửa/xoá; Cubit đơn giản cho session

---

## version-flutter
- Flutter 3.35.6 • channel stable • https://github.com/flutter/flutter.git  
Framework • revision 9f455d2486 (2025-10-08)  
Engine • hash a5f2c36e367c13f868cfe98db5806f562c52c35e  
Tools • Dart 3.9.2 • DevTools 2.48.0