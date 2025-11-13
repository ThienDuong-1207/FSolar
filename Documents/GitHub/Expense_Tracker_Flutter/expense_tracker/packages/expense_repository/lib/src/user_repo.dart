import 'package:cloud_firestore/cloud_firestore.dart';

class UserRepository {
  UserRepository() : _users = FirebaseFirestore.instance.collection('users');

  final CollectionReference<Map<String, dynamic>> _users;

  Future<bool> userExists(String email) async {
    final doc = await _users.doc(email).get();
    return doc.exists;
  }

  Future<void> createUser(String email, {String? name}) async {
    await _users.doc(email).set({
      'email': email,
      if (name != null && name.isNotEmpty) 'name': name,
      'createdAt': FieldValue.serverTimestamp(),
    });
  }

  Future<String?> getUserName(String email) async {
    final doc = await _users.doc(email).get();
    if (!doc.exists) return null;
    final data = doc.data();
    if (data == null) return null;
    final name = data['name'];
    if (name is String && name.isNotEmpty) return name;
    return null;
  }

  Future<void> setAvatarUrl(String email, String? url) async {
    await _users.doc(email).set({
      'avatarUrl': url,
      'updatedAt': FieldValue.serverTimestamp(),
    }, SetOptions(merge: true));
  }

  Future<String?> getAvatarUrl(String email) async {
    // Prefer fresh value from server to avoid stale cache after update
    DocumentSnapshot<Map<String, dynamic>> doc;
    try {
      doc = await _users.doc(email).get(const GetOptions(source: Source.server));
    } catch (_) {
      // Fallback to default behavior (cache) if server fetch fails (offline)
      doc = await _users.doc(email).get();
    }
    if (!doc.exists) return null;
    final data = doc.data();
    if (data == null) return null;
    final url = data['avatarUrl'];
    if (url is String && url.isNotEmpty) return url;
    return null;
  }
}


