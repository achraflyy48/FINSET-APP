# Finset - Financial Management Web Application

Aplikasi web manajemen keuangan pribadi yang modern, responsif, dan aman, dirancang untuk membantu pengguna mengontrol anggaran, memantau transaksi, serta mencapai tujuan finansial dengan mudah.

## 🚀 Tech Stack
- **Frontend Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **Routing:** Vue Router
- **Styling & Design:** Tailwind CSS (Mobile-First Layout)
- **Icons:** Lucide Vue Next
- **Backend & Authentication:** Supabase (Email/Password Auth & Row-Level Security Ready)

---

## ✨ Key Features
- 🔐 **Secure Authentication:** Sistem pendaftaran dan masuk (*Sign Up / Sign In*) yang terintegrasi langsung dengan Supabase Auth.
- 🛡️ **Route Guarding:** Pelindungan rute privat secara otomatis (`router.beforeEach`) untuk memastikan hanya pengguna terautentikasi yang dapat mengakses halaman utama.
- 📱 **Fully Responsive UI:** Desain adaptif dengan *sidebar drawer* interaktif yang ramah pengguna seluler (*mobile-friendly*).
- 🚪 **Interactive Modals:** Konfirmasi keluar akun (*Logout*) berbasis pop-up modal untuk pengalaman pengguna yang lebih intuitif.
- 📊 **Financial Modules:** Navigasi lengkap mencakup Dashboard, Transactions, Wallets, Goals, Budget, Analytics, Settings, dan Help Center.

---

## 📂 Project Milestones
- **Milestone 1 Environment Setup & Database Architecture (The Foundation):** Memastikan fondasi aplikasi seperti Inisialisasi project Vue.js, instalasi Tailwind CSS, dan instalasi Supabase SDK.
- **Milestone 2 (UI Slicing & Component Architecture):** Membangun kerangka tata letak, komponen navigasi, serta optimalisasi responsivitas *mobile*.
- **Milestone 3 (Authentication & Gatekeeper):** Mengintegrasikan Supabase, membangun tampilan *Login/Register*, serta menerapkan pengamanan rute.
- **Milestone 4 Core Logic & CRUD Transactions (The Muscle):** User bisa menambah dan menghapus data keuangan secara nyata, dan angka di Summary Cards (Total Balance, Income, Expense) otomatis terupdate secara dinamis dari database.
- **Milestone 5 Advanced Logic & Chart Integration (The Brain):** Grafik garis, grafik batang, dan diagram donat berfungsi 100% secara akurat menampilkan visualisasi keuangan user.
- **Milestone 6 Polishing, Theme Toggle & Optimization (The Final Touch):** Aplikasi berjalan mulus, tanpa bug logika, dan siap di-deploy (misal ke Vercel atau Netlify).

---

## ⚙️ Getting Started & Installation

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini secara lokal di komputer Anda:

1. **Clone repository ini:**
   ```bash
   git clone [https://github.com/achrafly48/finset.git](https://github.com/achrafly48/finset.git)
   cd finset
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Konfigurasi Environment Variables:**
   ```bash
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. **Jalankan development server:**
   ```bash
   npm run dev
   ```

---

## 💡 Usage
- Buka halaman aplikasi melalui tautan lokal (http://localhost:5173).
- Lakukan registrasi akun baru melalui halaman Sign Up atau masuk menggunakan akun yang sudah terdaftar.
- Kelola keuangan Anda melalui panel Dashboard utama dan navigasi menu yang tersedia.

---

## 📄 License
Distributed under the MIT License. See LICENSE for more information.
