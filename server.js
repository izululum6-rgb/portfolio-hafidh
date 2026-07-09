const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk membaca data form dan JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Data Proyek DPIB (Bisa kamu ubah atau tambah di sini)
const projects = [
    {
        id: 1,
        title: "Desain Rumah Minimalis 2 Lantai",
        category: "3D Modeling & Rendering",
        software: "SketchUp + Enscape",
        description: "Perancangan rumah tinggal modern dengan fokus pada efisiensi tata ruang dan pencahayaan alami.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600" // Ganti dengan link foto karyamu nanti
    },
    {
        id: 2,
        title: "Detail Engineering Design (DED) Ruko",
        category: "2D Drafting",
        software: "AutoCAD",
        description: "Pembuatan gambar kerja lengkap mulai dari denah, potongan, hingga detail fondasi ruko 3 lantai.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600"
    },
    {
        id: 3,
        title: "Perhitungan RAB Pembangunan Vila",
        category: "Estimator",
        software: "Ms. Excel",
        description: "Menghitung Rencana Anggaran Biaya, Analisa Harga Satuan Pekerjaan (AHSP), dan barchart kurva S.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600"
    }
];

// API Endpoint untuk mengambil data proyek
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// API Endpoint untuk menerima pesan kontak
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Pesan Baru Masuk dari ${name} (${email}): ${message}`);
    
    // Di sini kamu bisa kembangkan untuk simpan ke database atau kirim email
    res.json({ success: true, message: "Pesan berhasil dikirim! Terima kasih." });
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server aktif dan berjalan di http://localhost:${PORT}`);
});


