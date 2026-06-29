# Data Analyst Portfolio React

Website portfolio pribadi untuk menampilkan kemampuan, project, studi kasus, dokumentasi, dan pembelajaran di bidang Data Analyst.

## Tentang Project

Project ini dibuat berdasarkan referensi portfolio IT Support, kemudian diubah menjadi portfolio Data Analyst menggunakan React, TypeScript, Vite, dan Tailwind CSS.

Portfolio ini cocok untuk menampilkan kesiapan sebagai Junior Data Analyst, Data Analyst Intern, Reporting Analyst, atau Business Intelligence Assistant.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- HTML
- CSS

## Fitur Portfolio

- Hero section profesional untuk Data Analyst
- About section dengan positioning transisi dari IT Support ke Data Analyst
- Skill Data Analyst: data cleaning, SQL, dashboard, reporting, business insight
- Tools section: Excel, Spreadsheet, SQL, Power BI, Looker Studio, documentation
- Experience section yang ditulis ulang agar relevan dengan Data Analyst
- Documentation samples untuk analisis data
- Workflow analisis data dari business question sampai recommendation
- Project & case study Data Analyst
- Learning roadmap
- Certification cards dengan gambar
- Contact section
- Responsive layout
- SEO meta tags dasar

## Project Data Analyst yang Ditampilkan

### 1. Sales Performance Dashboard

Studi kasus dashboard performa penjualan bulanan untuk melihat revenue, jumlah transaksi, produk terlaris, channel penjualan, dan trend pertumbuhan.

### 2. Customer Segmentation Analysis

Analisis segmentasi pelanggan berdasarkan frekuensi transaksi, total spending, dan average order value untuk mendukung strategi promo.

### 3. Inventory Stock Monitoring Report

Laporan monitoring stok untuk melihat low stock, fast moving item, slow moving item, dan kebutuhan restock.

### 4. SQL Query untuk Analisis Invoice & Payment

Studi kasus query SQL untuk melihat status invoice, partial payment, sisa tagihan, dan aging piutang.

## Struktur Penting

```txt
src/data/portfolio.ts              # Data utama portfolio
src/components/                    # Komponen React
public/documents/                  # Dokumentasi pendukung
public/certifications/             # Gambar sertifikasi / learning cards
```

## Cara Menjalankan Project

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
```

Preview hasil build:

```bash
npm run preview
```

## Catatan Penyesuaian

Silakan ubah bagian berikut sesuai data asli:

- `src/data/portfolio.ts` untuk nama, kontak, pengalaman, project, sertifikasi, dan link CV.
- `public/documents/CV_Mohammad_Hasim_Adnan.pdf` dengan CV Data Analyst terbaru.
- `index.html` untuk URL domain saat sudah deploy.
- Link GitHub pada `profile.github` setelah repository dibuat.
