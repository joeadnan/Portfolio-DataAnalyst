import { Certification, Experience } from "../types/portfolio";

export const profile = {
  name: "Mohammad Hasim Adnan",
  role: "Junior Data Analyst",
  location: "Serang, Indonesia",
  status: "Open to Work | Data Analyst",
  email: "hasyimjoe@gmail.com",
  phone: "083821359370",
  whatsapp: "https://wa.me/6283821359370",
  linkedin: "https://www.linkedin.com/in/mohammad-hasim-adnan/",
  github: "https://github.com/joeadnan/data-analyst-portfolio",
  cv: "/documents/CV_Mohammad_Hasim_Adnan.pdf",
  imageUrl: "/documents/Fotojas.jpeg",
  summary: "",
};

export const skills = [
  {
    title: "Data Cleaning",
    items: [
      "Membersihkan missing value dan duplikasi",
      "Standarisasi format tanggal, kategori, dan angka",
      "Validasi data sebelum analisis",
      "Membuat data siap pakai untuk reporting",
      "Mendokumentasikan asumsi dan batasan data",
    ],
  },
  {
    title: "SQL Analysis",
    items: [
      "SELECT, WHERE, GROUP BY, ORDER BY",
      "JOIN antar tabel transaksi dan master data",
      "Agregasi KPI penjualan, pelanggan, dan produk",
      "Subquery dan CTE dasar",
      "Membuat query untuk kebutuhan dashboard",
    ],
  },
  {
    title: "Dashboard & Reporting",
    items: [
      "Membuat dashboard KPI",
      "Visualisasi trend, comparison, dan ranking",
      "Pivot table dan chart Excel",
      "Membuat summary insight untuk management",
      "Menyajikan data secara ringkas dan readable",
    ],
  },
  {
    title: "Business Insight",
    items: [
      "Menerjemahkan pertanyaan bisnis ke analisis data",
      "Mencari pola dari data transaksi",
      "Membuat rekomendasi berbasis data",
      "Mengukur performa berdasarkan KPI",
      "Storytelling data untuk user non-teknis",
    ],
  },
];

export const workflow = [
  {
    step: "01",
    title: "Pahami Business Question",
    description:
      "Menentukan tujuan analisis, KPI yang ingin dilihat, periode data, segmentasi, dan keputusan bisnis yang perlu didukung.",
  },
  {
    step: "02",
    title: "Kumpulkan & Validasi Data",
    description:
      "Memastikan sumber data, struktur kolom, kelengkapan data, duplikasi, format tanggal, dan konsistensi kategori.",
  },
  {
    step: "03",
    title: "Cleaning & Transformation",
    description:
      "Membersihkan data, membuat kolom turunan, menggabungkan tabel, dan menyiapkan dataset agar siap dianalisis.",
  },
  {
    step: "04",
    title: "Analisis KPI",
    description:
      "Menghitung metrik utama seperti revenue, growth, conversion, average order value, repeat customer, dan kontribusi produk.",
  },
  {
    step: "05",
    title: "Visualisasi Dashboard",
    description:
      "Membuat tampilan visual yang mudah dibaca menggunakan chart, tabel ringkas, filter, dan highlight insight penting.",
  },
  {
    step: "06",
    title: "Insight & Recommendation",
    description:
      "Menyimpulkan temuan utama dan memberikan rekomendasi tindakan yang bisa dipakai oleh bisnis atau management.",
  },
];

export const projects = [
  {
    title: "Sales Performance Dashboard",
    category: "Dashboard Analytics",
    label: "Lab Practice",
    problem:
      "Management membutuhkan ringkasan performa penjualan bulanan untuk melihat revenue, produk terlaris, channel penjualan, dan tren pertumbuhan.",
    analysis: [
      "Mengelompokkan data transaksi berdasarkan bulan, produk, channel, dan customer segment.",
      "Menghitung KPI revenue, jumlah transaksi, average order value, dan kontribusi setiap kategori produk.",
      "Membandingkan performa antar bulan untuk menemukan kenaikan atau penurunan penjualan.",
    ],
    steps: [
      "Import dataset transaksi ke Excel atau spreadsheet.",
      "Membersihkan data duplikat, format tanggal, kategori produk, dan nilai kosong.",
      "Membuat pivot table untuk revenue bulanan, top product, dan channel penjualan.",
      "Membuat chart trend revenue, bar chart produk terlaris, dan card KPI utama.",
      "Menyusun insight singkat mengenai bulan terbaik, produk dominan, dan channel paling efektif.",
    ],
    result:
      "Dashboard berhasil menampilkan performa penjualan secara ringkas sehingga user dapat memahami kondisi penjualan tanpa membaca data mentah.",
    impact: [
      "Mempercepat proses review performa penjualan bulanan.",
      "Membantu management melihat produk dan channel yang paling berkontribusi.",
      "Membuat data transaksi lebih mudah dibaca oleh user non-teknis.",
    ],
    tools: ["Microsoft Excel", "Pivot Table", "Chart", "Data Cleaning"],
    interviewPoint:
      "Saya tidak hanya membuat chart, tetapi mulai dari memahami KPI, membersihkan data, lalu menyusun insight yang bisa dipakai untuk keputusan bisnis.",
  },
  {
    title: "Customer Segmentation Analysis",
    category: "Business Analysis",
    label: "Lab Practice",
    problem:
      "Bisnis ingin mengetahui kelompok pelanggan berdasarkan frekuensi transaksi dan nilai belanja agar promo bisa lebih tepat sasaran.",
    analysis: [
      "Menghitung jumlah transaksi, total spending, dan rata-rata belanja per customer.",
      "Membagi customer menjadi segmentasi seperti high value, repeat buyer, low activity, dan new customer.",
      "Menganalisis potensi campaign untuk setiap segmentasi pelanggan.",
    ],
    steps: [
      "Menggabungkan tabel customer dan transaksi menggunakan customer ID.",
      "Membersihkan data customer yang duplikat atau tidak lengkap.",
      "Menghitung total order, total revenue, dan average order value per customer.",
      "Membuat kategori customer berdasarkan aturan segmentasi sederhana.",
      "Membuat summary rekomendasi promo untuk setiap segment customer.",
    ],
    result:
      "Customer berhasil dikelompokkan berdasarkan nilai dan aktivitas transaksi sehingga strategi promo bisa dibuat lebih relevan.",
    impact: [
      "Membantu bisnis menentukan prioritas customer yang perlu dipertahankan.",
      "Membantu campaign lebih terarah berdasarkan perilaku pelanggan.",
      "Mengurangi keputusan promo yang hanya berdasarkan asumsi.",
    ],
    tools: ["SQL", "Excel", "Customer Analysis", "Pivot Table"],
    interviewPoint:
      "Dalam analisis customer, saya fokus pada pertanyaan bisnis: siapa pelanggan terbaik, siapa yang mulai tidak aktif, dan tindakan apa yang bisa dilakukan.",
  },
  {
    title: "Inventory Stock Monitoring Report",
    category: "Operational Reporting",
    label: "Lab Practice",
    problem:
      "Tim operasional membutuhkan laporan stok untuk melihat produk yang hampir habis, produk slow moving, dan nilai stok yang masih tersimpan.",
    analysis: [
      "Membandingkan stok awal, stok masuk, stok keluar, dan stok akhir.",
      "Menandai item dengan stok minimum agar mudah diprioritaskan untuk restock.",
      "Menganalisis produk yang pergerakannya lambat berdasarkan transaksi keluar.",
    ],
    steps: [
      "Merapikan data master produk, stok masuk, dan stok keluar.",
      "Menggunakan rumus atau query untuk menghitung stok akhir per produk.",
      "Membuat flag low stock berdasarkan batas minimum stok.",
      "Membuat ranking produk berdasarkan jumlah keluar dan nilai stok.",
      "Menyusun dashboard sederhana untuk low stock, fast moving, dan slow moving item.",
    ],
    result:
      "Laporan stok memberikan gambaran produk yang perlu direstock dan item yang perlu dievaluasi karena pergerakannya lambat.",
    impact: [
      "Membantu mengurangi risiko stok habis pada produk penting.",
      "Membantu operasional melihat prioritas restock.",
      "Membantu evaluasi produk slow moving agar modal stok lebih efisien.",
    ],
    tools: ["Excel", "Spreadsheet", "Lookup", "Dashboard"],
    interviewPoint:
      "Saya melihat laporan stok bukan sekadar angka jumlah barang, tetapi alat bantu untuk menjaga operasional tetap berjalan dan mengurangi risiko overstock.",
  },
  {
    title: "SQL Query untuk Analisis Invoice & Payment",
    category: "SQL Portfolio",
    label: "Lab Practice",
    problem:
      "Finance membutuhkan query untuk melihat invoice yang sudah lunas, belum lunas, partial payment, dan umur piutang berdasarkan tanggal jatuh tempo.",
    analysis: [
      "Menggabungkan tabel invoice, customer, dan payment.",
      "Menghitung total invoice, total pembayaran, sisa tagihan, dan status pembayaran.",
      "Membuat kategori aging seperti current, 1-30 hari, 31-60 hari, dan lebih dari 60 hari.",
    ],
    steps: [
      "Membuat query join invoice dengan customer dan payment.",
      "Menggunakan agregasi SUM untuk total payment per invoice.",
      "Menggunakan CASE WHEN untuk menentukan status pembayaran.",
      "Menghitung selisih tanggal jatuh tempo untuk aging piutang.",
      "Menyusun hasil query agar siap digunakan sebagai report finance.",
    ],
    result:
      "Query menghasilkan laporan status invoice dan aging piutang yang lebih mudah dipantau oleh finance.",
    impact: [
      "Membantu finance memprioritaskan follow-up invoice overdue.",
      "Mengurangi pengecekan manual antara invoice dan pembayaran.",
      "Membuat status pembayaran lebih transparan dan terukur.",
    ],
    tools: ["SQL", "JOIN", "GROUP BY", "CASE WHEN", "CTE"],
    interviewPoint:
      "SQL membantu saya menjawab pertanyaan bisnis langsung dari data, terutama ketika data berada di beberapa tabel yang saling terhubung.",
  },
];

export const tools = [
  {
    title: "Spreadsheet & Excel",
    items: [
      "Microsoft Excel",
      "Google Sheets",
      "Pivot Table",
      "Power Query",
      "Lookup",
    ],
  },
  {
    title: "Database & SQL",
    items: ["SQL", "MySQL", "PostgreSQL", "JOIN", "GROUP BY", "CTE"],
  },
  {
    title: "Visualization",
    items: [
      "Power BI",
      "Looker Studio",
      "Excel Dashboard",
      "Charts",
      "KPI Card",
    ],
  },
  {
    title: "Data Preparation",
    items: [
      "Data Cleaning",
      "Data Validation",
      "Data Mapping",
      "CSV",
      "Data Dictionary",
    ],
  },
  {
    title: "Analysis Method",
    items: [
      "Descriptive Analysis",
      "Trend Analysis",
      "Segmentation",
      "Aging Analysis",
    ],
  },
  {
    title: "Documentation",
    items: ["Analysis Notes", "README", "Dashboard Guide", "Insight Summary"],
  },
  {
    title: "Productivity",
    items: ["Google Docs", "Notion", "Microsoft Office", "Presentation"],
  },
];

export const learning = [
  "SQL for Data Analysis",
  "Excel Dashboard & Pivot Table",
  "Power BI / Looker Studio Dashboard",
  "Data Cleaning & Data Validation",
  "Business KPI Analysis",
  "Python Pandas Fundamental",
];

export const experiences: Experience[] = [
  {
    role: "IT Support with Data Reporting Exposure",
    company: "PT. Asietex Sinar Indopratama",
    period: "Desember 2024 - April 2026",
    location: "Jawilan, Serang",
    employmentType: "Full-time",
    summary:
      "Pengalaman operasional IT yang dapat ditransfer ke Data Analyst, terutama pada dokumentasi masalah, pencatatan data support, pembuatan rekap, validasi data, dan komunikasi dengan user non-teknis.",
    responsibilities: [
      "Membuat catatan kendala user, status penyelesaian, dan dokumentasi troubleshooting.",
      "Menyusun rekap pekerjaan support agar masalah berulang dapat dievaluasi.",
      "Menggunakan spreadsheet untuk mencatat data perangkat, request user, dan aktivitas support.",
      "Membantu user memahami masalah teknis dengan penjelasan sederhana dan terstruktur.",
      "Melakukan validasi data perangkat dan informasi user sebelum dilakukan tindakan teknis.",
    ],
    achievements: [
      "Terbiasa bekerja dengan data operasional yang perlu rapi, konsisten, dan mudah ditelusuri.",
      "Memiliki pola kerja analitis dari identifikasi masalah, pengecekan data, tindakan, hingga dokumentasi hasil.",
      "Mampu menjembatani kebutuhan user non-teknis dengan solusi yang mudah dipahami.",
    ],
    tools: [
      "Microsoft Excel",
      "Google Sheets",
      "Documentation",
      "Ticketing Log",
      "Google Workspace",
      "Microsoft Office",
    ],
  },
  {
    role: "Helpdesk & Administrative Reporting",
    company: "SD Negeri Baluk",
    period: "Juli 2023 - Desember 2024",
    location: "Cikande, Serang",
    employmentType: "Full-time",
    summary:
      "Berpengalaman membantu kebutuhan administrasi dan support harian, termasuk pencatatan data, pengolahan dokumen, rekap sederhana, dan penyusunan informasi agar mudah dipahami oleh stakeholder internal.",
    responsibilities: [
      "Membantu pencatatan data operasional dan kebutuhan administrasi menggunakan spreadsheet.",
      "Merapikan dokumen dan data agar mudah dicari kembali saat dibutuhkan.",
      "Membantu pengecekan data user, perangkat, dan kebutuhan kerja harian.",
      "Membuat ringkasan informasi teknis atau administrasi untuk kebutuhan internal.",
      "Berkomunikasi dengan guru, staff, dan user internal untuk memahami kebutuhan data atau kendala yang terjadi.",
    ],
    achievements: [
      "Terbiasa membuat catatan kerja yang rapi dan terdokumentasi.",
      "Mampu menyederhanakan informasi teknis agar mudah dipahami user.",
      "Memiliki dasar kuat untuk berpindah ke role Junior Data Analyst melalui pengalaman spreadsheet, dokumentasi, dan problem solving.",
    ],
    tools: [
      "Microsoft Excel",
      "Google Sheets",
      "Microsoft Word",
      "Google Docs",
      "Administrative Report",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "basic-data-analyst-python",
    title: "Basic Data Analyst with Python",
    issuer: "Self Learning / Data Analysis Practice",
    year: "2026",
    status: "Completed",
    category: "Data Analytics",
    imageUrl: "/certifications/DataAnalyst.jpg",
    description:
      "Mempelajari dasar-dasar data analyst menggunakan Python, termasuk pengolahan data, data cleaning, exploratory data analysis, visualisasi data, serta penggunaan library seperti Pandas, NumPy, dan Matplotlib untuk membantu proses analisis dan reporting.",
    skills: [
      "Python",
      "Data Analysis",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Reporting",
    ],
  },
  {
    id: "sql-data-analysis",
    title: "SQL for Data Analysis",
    issuer: "Self Learning / Portfolio Project",
    year: "2026",
    status: "Completed",
    category: "Database Analytics",
    imageUrl: "/certifications/Database_Administrator_Course.jpg",
    description:
      "Mempelajari query SQL untuk mengambil data, join tabel, agregasi, filtering, CTE dasar, dan membuat dataset siap analisis.",
    skills: ["SQL", "JOIN", "GROUP BY", "CASE WHEN", "CTE"],
  },
  {
    id: "mongodb-data-analysis",
    title: "MongoDB for Data Analysis",
    issuer: "Self Learning / Portfolio Project",
    year: "2026",
    status: "Completed",
    category: "Database Analytics",
    imageUrl: "/certifications/Certificate MogoDB Detail - CODEPOLITAN.jpg",
    description:
      "Mempelajari penggunaan MongoDB untuk mengambil, mengelola, memfilter, dan menganalisis data berbasis NoSQL. Materi mencakup konsep collection, document, query dasar, filtering data, aggregation pipeline, serta pembuatan dataset yang siap digunakan untuk analisis.",
    skills: [
      "MongoDB",
      "NoSQL Database",
      "Collection",
      "Document",
      "Basic Query",
      "Data Filtering",
      "Aggregation Pipeline",
      "Data Analysis",
    ],
  },
  // {
  //   id: "power-bi-dashboard",
  //   title: "Dashboard & Data Visualization",
  //   issuer: "Self Learning / Portfolio Project",
  //   year: "2026",
  //   status: "Planned",
  //   category: "Data Visualization",
  //   imageUrl: "/certifications/dashboard-visualization.svg",
  //   description:
  //     "Rencana pembelajaran dashboard interaktif menggunakan Power BI atau Looker Studio untuk visualisasi KPI, trend, ranking, dan insight bisnis.",
  //   skills: ["Power BI", "Looker Studio", "KPI", "Visualization", "Insight"],
  // },
  {
    id: "microsoft-office",
    title: "Microsoft Office & Productivity",
    issuer: "Self Learning / Workplace Practice",
    year: "2025",
    status: "Completed",
    category: "Productivity",
    imageUrl: "/certifications/Sertificat_Office.jpg",
    description:
      "Terbiasa menggunakan Microsoft Office untuk kebutuhan administrasi, spreadsheet, laporan, dan dokumen kerja harian.",
    skills: [
      "Microsoft Excel",
      "Microsoft Word",
      "Reporting",
      "Google Workspace",
    ],
  },
];

export const availability = {
  status: "Open to Work",
  targetRoles: [
    "Junior Data Analyst",
    "Data Analyst Intern",
    "Reporting Analyst",
    "Business Intelligence Assistant",
  ],
  workTypes: ["Onsite", "Hybrid", "Remote"],
  location: "Indonesia",
};

export const educationBackground = {
  school: "Masukkan nama sekolah / kampus / kursus",
  major: "Data Analytics / Information Technology / Business Analytics",
  period: "2026",
  description:
    "Fokus pembelajaran pada spreadsheet, SQL, data cleaning, dashboard, visualisasi data, dan analisis KPI bisnis.",
  focus: [
    "Spreadsheet Analytics",
    "SQL Fundamental",
    "Dashboard Reporting",
    "Business KPI",
    "Data Storytelling",
  ],
};

export const documentationSamples = [
  {
    title: "Sales Dashboard Analysis Notes",
    description:
      "Dokumentasi cara membaca dashboard penjualan, definisi KPI, filter yang digunakan, dan insight utama dari data transaksi.",
    fileUrl: "/documents/Sales_Dashboard_Analysis_Notes.pdf",
    tags: ["Dashboard", "KPI", "Sales"],
  },
  {
    title: "Data Cleaning Checklist",
    description:
      "Checklist pengecekan kualitas data seperti missing value, duplikasi, format tanggal, format angka, dan kategori yang tidak konsisten.",
    fileUrl: "/documents/Data_Cleaning_Checklist.pdf",
    tags: ["Cleaning", "Validation", "Checklist"],
  },
  {
    title: "SQL Query Documentation",
    description:
      "Contoh dokumentasi query SQL untuk laporan invoice, payment, aging piutang, dan summary status pembayaran.",
    fileUrl: "/documents/SQL_Query_Documentation.pdf",
    tags: ["SQL", "Query", "Finance"],
  },
  {
    title: "Dashboard User Guide",
    description:
      "Panduan singkat untuk user non-teknis agar dapat membaca KPI, chart, filter, dan highlight insight pada dashboard.",
    fileUrl: "/documents/Dashboard_User_Guide.pdf",
    tags: ["Guide", "Visualization", "Reporting"],
  },
];

export const whyHireMe = [
  {
    title: "Memahami alur analisis dari masalah bisnis sampai insight",
    description:
      "Saya tidak langsung membuat chart, tetapi mulai dari memahami pertanyaan bisnis, menentukan KPI, membersihkan data, lalu menyusun insight yang bisa dipakai untuk pengambilan keputusan.",
  },
  {
    title: "Kuat di dokumentasi dan komunikasi user",
    description:
      "Pengalaman IT Support membuat saya terbiasa menjelaskan hal teknis dengan bahasa sederhana, sehingga hasil analisis lebih mudah dipahami user non-teknis.",
  },
  {
    title: "Terbiasa bekerja rapi dan detail",
    description:
      "Dalam analisis data, saya memperhatikan kualitas data, konsistensi format, asumsi analisis, dan dokumentasi agar hasilnya bisa ditelusuri kembali.",
  },
  {
    title: "Siap berkembang sebagai Junior Data Analyst",
    description:
      "Portfolio ini menunjukkan kesiapan saya untuk masuk ke role Data Analyst melalui project dashboard, SQL, spreadsheet, reporting, dan business insight.",
  },
];
