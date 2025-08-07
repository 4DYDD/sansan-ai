# INSTRUKSI COPILOT

Berikut adalah instruksi lengkap untuk project ini:

1. Website menggunakan Next.js (tanpa folder src), Tailwind CSS, ESLint, app-router, TypeScript, tanpa import alias.
2. Website adalah LLM chat yang menerima request user, menyisipkan konteks emosi, dan response AI bisa men-trigger function emosi lewat response text seperti: --[beingHappy()]--
3. Emosi yang didukung: Senang, Kesal, Marah, Tertawa, Ragu, Apresiasi, Meremehkan. Setiap emosi ada function trigger-nya.
4. Chat history user disimpan di localStorage menggunakan Zustand (juga untuk global state management).
5. Kuota chat user dan AI dibatasi 100 kali. Setiap kirim/terima pesan mengurangi kuota. Jika habis, tombol kirim diganti tombol reset untuk reset history dan kuota.
6. Sisa kuota selalu ditampilkan di halaman utama chat.
7. Desain responsif, rapi, clean, support light/dark mode (toggle di navbar). Warna utama: hitam, putih, orange, teal.
8. Gunakan framer-motion untuk animasi, font-awesome/heroicons untuk icon.
9. Maskot website berubah pose sesuai emosi yang di-trigger (sementara pakai emoji, nanti bisa diganti gambar dengan mudah via url/className/ukuran/rotasi/filter).
10. Jangan memecah kode sepele ke file terpisah, nama file harus relevan dengan isinya.
11. Tambahkan komentar dokumentasi dalam bahasa Indonesia di setiap bagian penting kode.

Instruksi ini WAJIB dibaca ulang sebelum melanjutkan development jika project dilanjutkan di lain waktu.
