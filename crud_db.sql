-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Okt 2023 pada 13.59
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
  `id` int(11) NOT NULL,
  `Nama` varchar(255) NOT NULL,
  `NIK` varchar(255) NOT NULL,
  `Tempat_Tanggal_lahir` varchar(255) NOT NULL,
  `Alamat` varchar(255) NOT NULL,
  `Lulusan` varchar(255) NOT NULL,
  `Jurusan` varchar(255) NOT NULL,
  `Nama_Perguruan_Tinggi` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `guru`
--

INSERT INTO `guru` (`id`, `Nama`, `NIK`, `Tempat_Tanggal_lahir`, `Alamat`, `Lulusan`, `Jurusan`, `Nama_Perguruan_Tinggi`, `createdAt`, `updatedAt`) VALUES
(5, '12', '13', '14', '15', '16', '17', '18', '2023-10-08 10:06:59', '2023-10-08 10:06:59'),
(6, '22', '23', '24', '25', '26', '27', '28', '2023-10-08 10:06:59', '2023-10-08 10:06:59');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `ID_Siswa` varchar(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `NIS` varchar(255) NOT NULL,
  `NIK` varchar(255) DEFAULT NULL,
  `No_KartuKeluarga` varchar(255) DEFAULT NULL,
  `Tempat_TanggalLahir` varchar(255) DEFAULT NULL,
  `Alamat` varchar(255) NOT NULL,
  `Tahun_MasukSDIT` varchar(255) NOT NULL,
  `Asal_SD` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `ID_Siswa`, `name`, `NIS`, `NIK`, `No_KartuKeluarga`, `Tempat_TanggalLahir`, `Alamat`, `Tahun_MasukSDIT`, `Asal_SD`, `createdAt`, `updatedAt`) VALUES
(11, '1231231', '123131', '1232131313', '21312313', '12321313', '12312313', '12312313', '13231313', '', '2023-10-06 14:48:13', '2023-10-06 14:48:13'),
(12, '12', '12', '12', '12', '12', '12', '21', '1212', '', '2023-10-08 07:11:07', '2023-10-08 07:11:07'),
(13, '', '', '', '', '', '', '', '', '', '2023-10-09 12:32:50', '2023-10-09 12:32:50');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `guru`
--
ALTER TABLE `guru`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `guru`
--
ALTER TABLE `guru`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
