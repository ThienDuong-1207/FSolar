import 'dart:io';

import 'package:firebase_storage/firebase_storage.dart';

class AvatarService {
  final FirebaseStorage _storage = FirebaseStorage.instance;

  String _safeKey(String email) {
    // Replace characters that can be awkward in paths with underscore
    return email.replaceAll(RegExp(r'[^a-zA-Z0-9_\-]'), '_');
  }

  Future<String> uploadAvatar({
    required File file,
    required String email,
  }) async {
    final safeEmail = _safeKey(email);
    final ext = file.path.toLowerCase().endsWith('.png') ? 'png' : 'jpg';
    final contentType = ext == 'png' ? 'image/png' : 'image/jpeg';
    final ts = DateTime.now().millisecondsSinceEpoch;
    // Use a unique filename to avoid stale URL edge-cases
    final ref = _storage.ref().child('users/$safeEmail/avatar_$ts.$ext');
    await ref.putFile(file, SettableMetadata(contentType: contentType));
    // Add a cache-busting query parameter (NOT a fragment) so Image.network refetches
    final url = await ref.getDownloadURL();
    final hasQuery = Uri.parse(url).query.isNotEmpty;
    final sep = hasQuery ? '&' : '?';
    return '$url${sep}t=${DateTime.now().millisecondsSinceEpoch}';
  }

  Future<void> deleteAvatar({required String email}) async {
    final safeEmail = _safeKey(email);
    final dir = _storage.ref().child('users/$safeEmail');
    try {
      final items = await dir.listAll();
      for (final item in items.items) {
        if (item.name.startsWith('avatar_')) {
          await item.delete();
        }
      }
    } catch (_) {
      // ignore if not found
    }
  }
}


