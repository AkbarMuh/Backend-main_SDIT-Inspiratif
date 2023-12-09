-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 09 Des 2023 pada 04.38
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `guru`
--

CREATE TABLE `guru` (
  `nama` varchar(255) NOT NULL,
  `ID` varchar(255) NOT NULL COMMENT 'NIK',
  `Email` varchar(20) NOT NULL,
  `Nomor_HP` varchar(11) NOT NULL,
  `Tempat_Lahir` varchar(50) NOT NULL,
  `Tanggal_Lahir` date NOT NULL,
  `Alamat` varchar(255) NOT NULL,
  `Lulusan` varchar(255) NOT NULL,
  `Jurusan` varchar(255) NOT NULL,
  `Nama_Perguruan_Tinggi` varchar(255) NOT NULL,
  `Sertifikat` text NOT NULL DEFAULT '-',
  `publikasi` text NOT NULL DEFAULT '-',
  `KK` text NOT NULL DEFAULT '-',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `guru`
--

INSERT INTO `guru` (`nama`, `ID`, `Email`, `Nomor_HP`, `Tempat_Lahir`, `Tanggal_Lahir`, `Alamat`, `Lulusan`, `Jurusan`, `Nama_Perguruan_Tinggi`, `Sertifikat`, `publikasi`, `KK`, `createdAt`, `updatedAt`) VALUES
('', '', '', '', '', '0000-00-00', '', '', '', '', '-', '-', '-', '2023-12-04 13:11:55', '2023-12-04 13:11:55'),
('admin', '0', '0', '0', '', '0000-00-00', '0', '0', '0', '0', '-', '-', '-', '2023-11-04 04:10:54', '2023-11-04 04:10:54'),
('Yui', '13012124', 'yui@email.com', '08123456789', 'Bandung', '1990-01-01', 'Jl. Otto Iskandar Dinata, Karanganyar, Kec. Astanaanyar, Kota Bandung, Jawa Barat 40241', 'S1', 'Pendidikan', 'Unpad', '-', '-', 'KK123456', '2023-10-08 10:06:59', '2023-10-08 10:06:59'),
('Andika', '13012125', 'andika@email.com', '08234567890', 'Bandung', '1985-05-15', 'Jl. Padang Golf, Sukamiskin, Kec. Arcamanik, Kota Bandung, Jawa Barat 40293', 'S1', 'Pendidikan', 'UI', 'Guru Profesional', 'Mengajar Metode Penelitian', 'KK234567', '2023-10-08 10:06:59', '2023-10-08 10:06:59'),
('Taya', '13012132', 'taya@email.com', '08345678901', 'Bandung', '1987-08-20', 'Jl. Merdeka No.45, Merdeka, Kec. Merdeka, Kota Bandung, Jawa Barat 40265', 'S2', 'Psikologi', 'ITB', 'Sertifikasi Guru Profesional', 'Menulis Buku Psikologi Anak', 'KK345678', '2023-10-08 10:06:59', '2023-10-08 10:06:59'),
('Ayub', '13012133', 'ayub@email.com', '08456789012', 'Bandung', '1980-12-10', 'Jl. Cinta No.23, Cinta, Kec. Bahagia, Kota Bandung, Jawa Barat 40287', 'S1', 'Pendidikan', 'Unpad', 'Sertifikat Pendidik', 'Mengajar Bahasa Indonesia', 'KK456789', '2023-10-08 10:06:59', '2023-10-08 10:06:59'),
('Hazel', '13012134', 'hazel@email.com', '08567890123', 'Bandung', '1983-06-25', 'Jl. Indah No.78, Indah, Kec. Bahagia, Kota Bandung, Jawa Barat 40266', 'S3', 'Pendidikan Bahasa Inggris', 'UNJ', '-', '-', 'KK567890', '2023-10-08 10:06:59', '2023-10-08 10:06:59'),
('Ashleigh', '13012135', 'ashleigh@email.com', '08678901234', 'Bandung', '1989-03-18', 'Jl. Megah No.56, Megah, Kec. Megah, Kota Bandung, Jawa Barat 40287', 'S2', 'Manajemen Bisnis', 'Binus', '-', 'Mengelola Seminar Bisnis', 'KK678901', '2023-10-08 10:06:59', '2023-10-08 10:06:59'),
('Mariah', '13012136', 'mariah@email.com', '08789012345', 'Bandung', '1982-07-30', 'Jl. Kaya No.34, Kaya, Kec. Megah, Kota Bandung, Jawa Barat 40266', 'S2', 'Pendidikan', 'UPI', 'Sertifikat Kepemimpinan', 'Menjadi Kepala Sekolah', 'KK789012', '2023-10-08 10:06:59', '2023-10-08 10:06:59'),
('Dewi', '13012137', 'dewi@email.com', '08890123456', 'Bandung', '1986-09-08', 'Jl. Jaya No.12, Jaya, Kec. Bahagia, Kota Bandung, Jawa Barat 40287', 'S1', 'Pertanian', 'IPB', 'Sertifikat Keahlian Pertanian', 'Mengelola Kelas Pertanian', 'KK890123', '2023-10-08 10:06:59', '2023-10-08 10:06:59'),
('Teddy', '13012138', 'teddy@email.com', '08901234567', 'Bandung', '1984-11-22', 'Jl. Makmur No.78, Makmur, Kec. Megah, Kota Bandung, Jawa Barat 40266', 'S1', 'Ilmu Komputer', 'ITB', 'Sertifikat Pendidik', 'Mengajar Pemrograman', 'KK901234', '2023-10-08 10:06:59', '2023-10-08 10:06:59'),
('Margaret', '13012139', 'margaret@email.com', '09012345678', 'Bandung', '1981-04-03', 'Jl. Cerdas No.45, Cerdas, Kec. Megah, Kota Bandung, Jawa Barat 40287', 'S2', 'Pendidikan Matematika', 'UNJ', 'Sertifikat Pelatihan Guru', 'Menulis Buku Pelajaran Matematika', 'KK012345', '2023-10-08 10:06:59', '2023-10-08 10:06:59'),
('1', '2', '1', '1', '1', '0000-00-00', '1', '1', '1', '1', '-', '-', '-', '2023-12-04 13:44:08', '2023-12-04 13:44:08');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kelas`
--

CREATE TABLE `kelas` (
  `ID` int(20) NOT NULL,
  `Grade_Kelas` int(11) NOT NULL,
  `WaliKelas` varchar(20) DEFAULT NULL,
  `NamaKelas` varchar(20) NOT NULL,
  `Tahun_Masuk` int(4) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `kelas`
--

INSERT INTO `kelas` (`ID`, `Grade_Kelas`, `WaliKelas`, `NamaKelas`, `Tahun_Masuk`, `createdAt`, `updatedAt`) VALUES
(1, 2, '13012135', 'Adam', 2020, '2023-12-07 03:52:31', '2023-12-07 03:52:31'),
(2, 3, '13012132', 'Hawa', 2021, '2023-12-07 03:52:31', '2023-12-07 03:52:31');

-- --------------------------------------------------------

--
-- Struktur dari tabel `login`
--

CREATE TABLE `login` (
  `id_Guru` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Role` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `login`
--

INSERT INTO `login` (`id_Guru`, `nama`, `Password`, `Role`) VALUES
('0', 'admin', 'admin', 2),
('13012125', 'Andika', '123', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `ortu`
--

CREATE TABLE `ortu` (
  `ID` int(255) NOT NULL COMMENT 'NIK',
  `Jenis` varchar(20) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `pekerjaan` varchar(255) NOT NULL,
  `Tempat_Lahir` varchar(50) NOT NULL DEFAULT '-',
  `Tanggal_Lahir` date DEFAULT NULL,
  `alamat` varchar(255) NOT NULL,
  `pendapatan` int(20) NOT NULL,
  `Pendidikan_Terakhir` varchar(5) NOT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Nomor_HP` varchar(50) DEFAULT NULL,
  `ID_Siswa` int(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `ortu`
--

INSERT INTO `ortu` (`ID`, `Jenis`, `nama`, `pekerjaan`, `Tempat_Lahir`, `Tanggal_Lahir`, `alamat`, `pendapatan`, `Pendidikan_Terakhir`, `Email`, `Nomor_HP`, `ID_Siswa`, `createdAt`, `updatedAt`) VALUES
(1301211, 'Ibu', 'Anisa', 'Dokter', '-', NULL, 'Jl. Suryalaya Indah No.1-3, Cijagra, Kec. Lengkong, Kota Bandung, Jawa Barat 40265', 1500000, 'S1', 'anisa@email.com', '08123456789', 1302003, '2023-11-04 03:16:40', '2023-11-04 02:19:24'),
(1301212, 'Ayah', 'Andika', 'Arsitek', '-', NULL, 'Jl. Margacinta No.98, Cijaura, Kec. Buahbatu, Kota Bandung, Jawa Barat 40287', 2000000, 'S2', 'andika@email.com', '08234567890', 1302003, '2023-11-04 03:20:23', '2023-11-04 03:20:23'),
(1301213, 'Ibu', 'Taya', 'Guru', '-', NULL, 'Jl. Terusan Buah Batu No.62, Batununggal, Kec. Bandung Kidul, Kota Bandung, Jawa Barat 40266', 1800000, 'S1', 'taya@email.com', '08345678901', 1302004, '2023-11-04 03:16:40', '2023-11-04 02:19:24'),
(1301214, 'Ayah', 'Ayub ', 'Petani', '-', NULL, 'Jl. Terusan Buah Batu No.227, Kujangsari, Kec. Bandung Kidul, Kota Bandung, Jawa Barat 40287', 1200000, 'S1', 'ayub@email.com', '08456789012', 1302004, '2023-11-04 03:20:23', '2023-11-04 03:20:23'),
(1301215, 'Ibu', 'Hazel Shaffer', 'Penyanyi', '-', NULL, 'Jl. Melodi Indah No.5, Melodika, Kec. Musikal, Kota Bandung, Jawa Barat 40265', 3000000, 'S3', 'hazel@email.com', '08567890123', 1302005, '2023-11-04 03:16:41', '2023-11-04 02:19:25'),
(1301216, 'Ayah', 'Ashleigh Strickland', 'Pilot', '-', NULL, 'Jl. Amanah No.34, Amanah, Kec. Terpercaya, Kota Bandung, Jawa Barat 40287', 2500000, 'S2', 'ashleigh@email.com', '08678901234', 1302005, '2023-11-04 03:20:24', '2023-11-04 03:20:24'),
(1301217, 'Ibu', 'Mariah Barnes', 'Dosen', '-', NULL, 'Jl. Pendidikan No.78, Pendidikan, Kec. Ilmiah, Kota Bandung, Jawa Barat 40266', 2200000, 'S2', 'mariah@email.com', '08789012345', 1302006, '2023-11-04 03:16:41', '2023-11-04 02:19:25'),
(1301218, 'Ayah', 'Dewi Foster', 'Wirausaha', '-', NULL, 'Jl. Sukses No.45, Kesuksesan, Kec. Berhasil, Kota Bandung, Jawa Barat 40287', 2800000, 'S1', 'dewi@email.com', '08890123456', 1302006, '2023-11-04 03:20:24', '2023-11-04 03:20:23'),
(1301219, 'Ibu', 'Teddy Nash', 'Seniman', '-', NULL, 'Jl. Kreatif No.10, Kreator, Kec. Inspirasi, Kota Bandung, Jawa Barat 40265', 1700000, 'D4', 'teddy@email.com', '08901234567', 1302007, '2023-11-04 03:16:42', '2023-11-04 02:19:26'),
(1301220, 'Ayah', 'Margaret Clarke', 'Insinyur', '-', NULL, 'Jl. Teknologi No.23, Teknologi, Kec. Canggih, Kota Bandung, Jawa Barat 40287', 2300000, 'S2', 'margaret@email.com', '09012345678', 1302007, '2023-11-04 03:20:25', '2023-11-04 03:20:25'),
(1301222, 'Ayah', 'Bertha Farley', 'Petani', '-', NULL, 'Jl. Terusan Buah Batu No.227, Kujangsari, Kec. Bandung Kidul, Kota Bandung, Jawa Barat 40287', 1300000, 'S1', 'bertha@email.com', '081234567801', 1302008, '2023-11-04 03:20:25', '2023-11-04 03:20:23'),
(1301223, 'Ibu', 'Inaya Hughes', 'Dosen', '-', NULL, 'Jl. Suryalaya Indah No.1-3, Cijagra, Kec. Lengkong, Kota Bandung, Jawa Barat 40265', 1600000, 'S1', 'inaya@email.com', '081234567802', 1302008, '2023-11-04 03:16:43', '2023-11-04 02:19:27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `report`
--

CREATE TABLE `report` (
  `ID` int(11) NOT NULL,
  `jenis` int(11) NOT NULL,
  `nis` int(11) DEFAULT NULL,
  `Nama_Prestasi` varchar(50) DEFAULT NULL,
  `Keterangan_Prestasi` text NOT NULL DEFAULT '-',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `report`
--

INSERT INTO `report` (`ID`, `jenis`, `nis`, `Nama_Prestasi`, `Keterangan_Prestasi`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1302004, 'Citra', 'Menang Lomba Memasak', '2023-12-07 03:38:01', '2023-12-07 03:38:01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `siswa`
--

CREATE TABLE `siswa` (
  `ID` int(255) NOT NULL COMMENT 'id_siswa',
  `nama` varchar(255) DEFAULT NULL,
  `NIS` varchar(255) NOT NULL,
  `NIK` varchar(255) DEFAULT NULL,
  `No_KartuKeluarga` varchar(255) DEFAULT NULL,
  `Tempat_lahir` varchar(50) NOT NULL,
  `Tanggal_Lahir` date DEFAULT NULL,
  `Alamat` varchar(255) NOT NULL DEFAULT '-',
  `Tahun_MasukSDIT` varchar(255) NOT NULL,
  `AsalTK` varchar(255) NOT NULL DEFAULT '-',
  `Asal_SD` varchar(255) NOT NULL DEFAULT '-',
  `Prestasi` text NOT NULL DEFAULT '-',
  `LinkPrestasi` text NOT NULL DEFAULT '-',
  `Wali_Kelas` varchar(255) DEFAULT NULL,
  `kelas` int(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `siswa`
--

INSERT INTO `siswa` (`ID`, `nama`, `NIS`, `NIK`, `No_KartuKeluarga`, `Tempat_lahir`, `Tanggal_Lahir`, `Alamat`, `Tahun_MasukSDIT`, `AsalTK`, `Asal_SD`, `Prestasi`, `LinkPrestasi`, `Wali_Kelas`, `kelas`, `createdAt`, `updatedAt`) VALUES
(1, '1', '1', '1', '1', '1', '2023-12-01', '-1', '1', '-', '-', '-', '-', '2', 2, '2023-12-04 13:44:36', '2023-12-04 13:44:36'),
(1302003, 'Budi', '1902003', '2302003', '102302003', 'Bandung', '2007-08-01', 'Jl. Cijawura No.12, Cijawura, Kec. Rancaekek, Kota Bandung, Jawa Barat 40266', '2023', 'TK Bunga Indah', 'SDN Cijawura', 'Juara Lomba Cerdas Cermat', 'linkprestasi.com/budi', '13012124', 1, '2023-11-20 09:30:15', '2023-11-26 10:15:45'),
(1302004, 'Citra', '1902004', '2302004', '102302004', 'Bandung', '2007-12-23', 'Jl. Melodi Indah No.15, Melodika, Kec. Musikal, Kota Bandung, Jawa Barat 40265', '2023', 'TK Harmoni', 'SDN Melodi', 'Peringkat 2 Lomba Mewarnai', 'linkprestasi.com/citra', '13012124', 2, '2023-11-15 13:45:22', '2023-11-26 10:15:45'),
(1302005, 'Dian', '1902005', '2302005', '102302005', 'Bandung', '2015-10-23', 'Jl. Harmoni No.8, Harmoni, Kec. Senandung, Kota Bandung, Jawa Barat 40265', '2023', 'TK Melodi Indah', 'SDN Harmoni', 'Mengikuti Olimpiade Matematika', 'linkprestasi.com/dian', '13012125', 1, '2023-11-10 15:20:18', '2023-11-26 10:15:45'),
(1302006, 'Eva', '1902006', '2302006', '102302006', 'Bandung', '2021-10-23', 'Jl. Senandung No.45, Senandung, Kec. Harmoni, Kota Bandung, Jawa Barat 40265', '2023', 'TK Nada Indah', 'SDN Senandung', 'Juara 3 Lomba Baca Puisi', 'linkprestasi.com/eva', '13012125', 2, '2023-11-25 11:10:33', '2023-11-26 10:15:45'),
(1302007, 'Fajar', '1902007', '2302007', '102302007', 'Bandung', '2015-05-23', 'Jl. Harmonisasi No.78, Harmonisasi, Kec. Melodi, Kota Bandung, Jawa Barat 40265', '2023', 'TK Nota Indah', 'SDN Harmonisasi', 'Peserta Lomba Membaca Cepat', 'linkprestasi.com/fajar', '13012125', 1, '2023-11-18 08:55:29', '2023-11-26 10:15:45'),
(1302008, 'Gita', '1902008', '2302008', '102302008', 'Bandung', '2009-12-23', 'Jl. Melodi Jaya No.32, Melodi Jaya, Kec. Senandung, Kota Bandung, Jawa Barat 40265', '2023', 'TK Gita Sejati', 'SDN Melodi Jaya', 'Juara 1 Lomba Menulis Cerpen', 'linkprestasi.com/gita', '13012125', 1, '2023-11-22 16:40:27', '2023-11-26 10:15:45');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `guru`
--
ALTER TABLE `guru`
  ADD PRIMARY KEY (`ID`);

--
-- Indeks untuk tabel `kelas`
--
ALTER TABLE `kelas`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Kelas-Wali` (`WaliKelas`);

--
-- Indeks untuk tabel `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id_Guru`);

--
-- Indeks untuk tabel `ortu`
--
ALTER TABLE `ortu`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ortu-anak` (`ID_Siswa`);

--
-- Indeks untuk tabel `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `lomba-nisSiswa` (`nis`);

--
-- Indeks untuk tabel `siswa`
--
ALTER TABLE `siswa`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `kelas-siswa` (`kelas`),
  ADD KEY `Wali-Siswa` (`Wali_Kelas`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `kelas`
--
ALTER TABLE `kelas`
  ADD CONSTRAINT `Kelas-Wali` FOREIGN KEY (`WaliKelas`) REFERENCES `guru` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `Login` FOREIGN KEY (`id_Guru`) REFERENCES `guru` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `ortu`
--
ALTER TABLE `ortu`
  ADD CONSTRAINT `ortu-anak` FOREIGN KEY (`ID_Siswa`) REFERENCES `siswa` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `lomba-nisSiswa` FOREIGN KEY (`nis`) REFERENCES `siswa` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `siswa`
--
ALTER TABLE `siswa`
  ADD CONSTRAINT `Wali-Siswa` FOREIGN KEY (`Wali_Kelas`) REFERENCES `guru` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `kelas-siswa` FOREIGN KEY (`kelas`) REFERENCES `kelas` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
