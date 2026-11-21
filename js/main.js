// ===== Tombol mode gelap/terang =====

// const themeToggle = document.getElementById("themeToggle");

// if (themeToggle) {
//     themeToggle.addEventListener("click", function () {
//         document.body.classList.toggle("light-mode");
//         const isLightMode = document.body.classList.contains("light-mode");
//         themeToggle.textContent = isLightMode ? "Mode Gelap" : "Mode Terang";
//     });
// }

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    const perbaruiLabel = () => {
        themeToggle.textContent = document.body.classList.contains("light-mode")
            ? "Mode Gelap"
            : "Mode Terang";
    };

    perbaruiLabel();

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        perbaruiLabel();
    });
}
// ===== Data proyek =====
const dataProyek = [
    {
        kategori: "HTML",
        judul: "Halaman Profil Pertama",
        gambar: "img/profil_pertama.png",
        alt: "Tangkapan layar halaman profil pribadi",
        deskripsi: "Halaman web pertama saya, dibuat dengan HTML dasar."
    },
    {
        kategori: "HTML",
        judul: "Form Kontak",
        gambar: "img/profil_pertama.png",
        alt: "Tangkapan layar formulir kontak",
        deskripsi: "Form dengan label dan validasi bawaan browser."
    },
    {
        kategori: "HTML",
        judul: "Tabel Jadwal Belajar",
        gambar: "img/jadwal-belajar.png",
        alt: "Tangkapan layar tabel jadwal belajar",
        deskripsi: "Jadwal belajar mingguan dengan elemen tabel HTML."
    },
    {
        kategori: "CSS",
        judul: "Portofolio Responsif",
        gambar: "img/portofolio-responsif.png",
        alt: "Tangkapan layar portofolio responsif",
        deskripsi: "Tampilan portofolio yang menyesuaikan layar ponsel, tablet, dan laptop."
    },
    {
        kategori: "JavaScript",
        judul: "Kalkulator Nilai Rapor",
        gambar: "img/kalkulator-nilai.png",
        alt: "Tangkapan layar kalkulator nilai rapor",
        deskripsi: "Menghitung rata-rata dan predikat nilai menggunakan JavaScript."
    },
    {
        kategori: "JavaScript",
        judul: "Lima Soal Logika",
        gambar: "img/soal-logika.png",
        alt: "Tangkapan layar latihan soal logika JavaScript",
        deskripsi: "Latihan lima fungsi logika menggunakan JavaScript."
    }
];

// Membuat satu kartu proyek dari data.
function buatKartu(item) {
    return `
        <article class="kartu-proyek">
            <span class="label-kategori">${item.kategori}</span>
            <h2>${item.judul}</h2>
            <img class="gambar-proyek" src="${item.gambar}" alt="${item.alt}">
            <p>${item.deskripsi}</p>
        </article>
    `;
}

// Menampilkan daftar proyek sesuai kategori yang dipilih.
function tampilkanProyek(kategori = "Semua") {
    const wadahKartu = document.getElementById("daftar-proyek");
    const jumlahProyek = document.getElementById("jumlah-proyek");

    // Halaman lain mungkin juga memuat main.js, jadi cek elemen terlebih dahulu.
    if (!wadahKartu || !jumlahProyek) return;

    const proyekTerpilih = kategori === "Semua"
        ? dataProyek
        : dataProyek.filter(item => item.kategori === kategori);

    wadahKartu.innerHTML = proyekTerpilih.map(buatKartu).join("");
    jumlahProyek.textContent =
        `Menampilkan ${proyekTerpilih.length} dari ${dataProyek.length} proyek`;
}

// Tombol filter Semua.
const tombolSemua = document.getElementById("filter-semua");
if (tombolSemua) {
    tombolSemua.addEventListener("click", function () {
        tampilkanProyek("Semua");
        aturTombolAktif(tombolSemua);
    });
}

// Tombol filter JavaScript.
const tombolJavaScript = document.getElementById("filter-javascript");
if (tombolJavaScript) {
    tombolJavaScript.addEventListener("click", function () {
        tampilkanProyek("JavaScript");
        aturTombolAktif(tombolJavaScript);
    });
}

// Tombol filter CSS.
const tombolCSS = document.getElementById("filter-css");
if (tombolCSS) {
    tombolCSS.addEventListener("click", function () {
        tampilkanProyek("CSS");
        aturTombolAktif(tombolCSS);
    });
}

// Tombol filter HTML.
const tombolHTML = document.getElementById("filter-html");
if (tombolHTML) {
    tombolHTML.addEventListener("click", function () {
        tampilkanProyek("HTML");
        aturTombolAktif(tombolHTML);
    });
}

// Mengubah tampilan tombol filter yang sedang aktif.
function aturTombolAktif(tombolAktif) {
    document.querySelectorAll(".tombol-filter").forEach(function (tombol) {
        const aktif = tombol === tombolAktif;
        tombol.classList.toggle("aktif", aktif);
        tombol.setAttribute("aria-pressed", aktif ? "true" : "false");
    });
}

// Tampilkan semua proyek saat halaman pertama kali dibuka.
tampilkanProyek();

// 2. Tema gelap (semua halaman)
// const tombolTema = document.querySelector("#tombol-tema");
// tombolTema.addEventListener("click", () => {
//   document.body.classList.toggle("gelap");
// });

// 3. Penghitung karakter pesan (halaman Kontak)
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if (kotakPesan && hitungKarakter) {
    const perbaruiHitungan = () => {
        hitungKarakter.textContent =
            `${kotakPesan.value.length}/${kotakPesan.maxLength} karakter`;
    };

    kotakPesan.addEventListener("input", perbaruiHitungan);
    perbaruiHitungan();
}
