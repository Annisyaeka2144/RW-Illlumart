-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2025 at 01:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `illumart`
--

-- --------------------------------------------------------

--
-- Table structure for table `downloads`
--

CREATE TABLE `downloads` (
  `id` int(11) NOT NULL,
  `nama_karya` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `karyaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `downloads`
--

INSERT INTO `downloads` (`id`, `nama_karya`, `email`, `createdAt`, `updatedAt`, `karyaId`) VALUES
(11, 'we', 'wna@gmail.com', '2025-06-12 03:58:22', '2025-06-12 03:58:22', 12),
(12, 'wa', 'wna@gmail.com', '2025-06-12 03:58:56', '2025-06-12 03:58:56', 10),
(13, 'yng', 'wna@gmail.com', '2025-06-12 04:00:53', '2025-06-12 04:00:53', 11),
(14, 'bg', 'wna@gmail.com', '2025-06-12 04:17:11', '2025-06-12 04:17:11', 4),
(15, 'parepare', 'rii@gmail.com', '2025-06-12 04:40:19', '2025-06-12 04:40:19', 3),
(16, 'Novel', 'apa@gmail.com', '2025-06-12 04:44:38', '2025-06-12 04:44:38', 14),
(17, 'Novel', 'mal@gmail.com', '2025-06-16 09:34:00', '2025-06-16 09:34:00', 14),
(18, 'Novel', 'mal@gmail.com', '2025-06-16 09:48:57', '2025-06-16 09:48:57', 14),
(19, 'yng', 'ziziz@gmail.com', '2025-06-16 09:56:26', '2025-06-16 09:56:26', 11);

-- --------------------------------------------------------

--
-- Table structure for table `karyas`
--

CREATE TABLE `karyas` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `lisensi` enum('eksklusif','non eksklusif') NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `karyas`
--

INSERT INTO `karyas` (`id`, `nama`, `harga`, `kategori`, `deskripsi`, `lisensi`, `file_path`, `createdAt`, `updatedAt`) VALUES
(1, 'Bumi', 25000, 'Puisi', 'Bumi adalah tempat kita ', 'eksklusif', 'uploads\\1749525408887-ChatGPT Image Jun 9, 2025, 06_03_10 PM.png', '2025-06-10 03:16:48', '2025-06-10 03:16:48'),
(2, 'watermelon', 10000, 'Gambar', 'barang bagus', 'eksklusif', 'uploads\\1749525608073-watermelon.jpg', '2025-06-10 03:20:08', '2025-06-10 03:20:08'),
(3, 'parepare', 100000000, 'Gambar', 'kota parepare', 'eksklusif', 'uploads\\1749525984722-Lambang_Kota_Parepare_(2012).png', '2025-06-10 03:26:24', '2025-06-10 03:26:24'),
(4, 'bg', 200000, 'Gambar', 'bagus', 'non eksklusif', 'uploads\\1749529217873-bg.png', '2025-06-10 04:20:17', '2025-06-10 04:20:17'),
(5, 'Toko', 30000, 'Gambar', 'Toko', 'non eksklusif', 'uploads\\1749529555665-In no time-amico (1).png', '2025-06-10 04:25:55', '2025-06-10 04:25:55'),
(6, 'baku', 3000, 'Gambar', 'baguss', 'non eksklusif', 'uploads\\1749530213363-ChatGPT_Image_Jun_9__2025__06_03_10_PM-removebg-preview.png', '2025-06-10 04:36:53', '2025-06-10 04:36:53'),
(7, 'harga', 900000, 'Gambar', 'gmbar', 'non eksklusif', 'uploads\\1749634663561-download (3).png', '2025-06-11 09:37:43', '2025-06-11 09:37:43'),
(8, 'wana', 20000, 'vintage', 'bagus', 'non eksklusif', 'uploads\\1749639259385-download (1).png', '2025-06-11 10:54:19', '2025-06-11 10:54:19'),
(9, 'wana', 20000, 'vintage', 'bags', 'non eksklusif', 'uploads\\1749639756877-download (3).png', '2025-06-11 11:02:36', '2025-06-11 11:02:36'),
(10, 'wa', 20000, '3d', 'bagus', 'non eksklusif', 'uploads\\1749640323734-download.png', '2025-06-11 11:12:03', '2025-06-11 11:12:03'),
(11, 'yng', 800, 'vintage', 'bgys', 'non eksklusif', 'uploads\\1749647265883-download (1).png', '2025-06-11 13:07:45', '2025-06-11 13:07:45'),
(12, 'we', 21, 'pemandangan', 'bagus', 'non eksklusif', 'uploads\\1749661183102-ERD Proposal-Database 2.drawio.png', '2025-06-11 16:59:43', '2025-06-11 16:59:43'),
(13, 'HAHA', 2000000, 'puisi', 'Puisi ketawa', 'non eksklusif', 'uploads\\1749702153249-Tugas 2_Nirwana_221011107 (1).pdf', '2025-06-12 04:22:33', '2025-06-12 04:22:33'),
(14, 'Novel', 200000, 'novel', 'Novel ', 'non eksklusif', 'uploads\\1749702243220-IoT.drawio.png', '2025-06-12 04:24:03', '2025-06-12 04:24:03'),
(15, 'HIHI', 200000, 'puisi', 'HHIHI', 'non eksklusif', 'uploads\\1749702660407-ChatGPT Image Jun 5, 2025, 03_11_44 AM.png', '2025-06-12 04:31:00', '2025-06-12 04:31:00'),
(16, 'ak', 20000, 'puisi', 'bagus', 'non eksklusif', 'uploads\\1749915604344-Putih Abu Abu Modern CV Resume Riwayat Hidup.png', '2025-06-14 15:40:04', '2025-06-14 15:40:04');

-- --------------------------------------------------------

--
-- Table structure for table `transaksis`
--

CREATE TABLE `transaksis` (
  `id` int(11) NOT NULL,
  `nama_karya` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `metode_pembayaran` enum('OVO','DANA','BCA','BRI') NOT NULL,
  `status_pembayaran` varchar(255) DEFAULT 'belum dibayar',
  `gambar` text NOT NULL,
  `file_url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaksis`
--

INSERT INTO `transaksis` (`id`, `nama_karya`, `harga`, `nama`, `email`, `metode_pembayaran`, `status_pembayaran`, `gambar`, `file_url`) VALUES
(1, 'Bumi', 25000, 'edi', 'edi@gmail.com', 'DANA', 'lunas', '', ''),
(2, 'watermelon', 10000, 'sri', 'sri@gmail.com', 'DANA', 'lunas', '', ''),
(3, 'Toko', 30000, 'wee', 'we@gmail.com', 'OVO', 'lunas', '', ''),
(4, 'bg', 200000, 'ed', 'ed@gmail.com', 'DANA', 'lunas', '', ''),
(5, 'Bumi', 25000, 'sr', 'sr@gmail.com', '', 'lunas', '', ''),
(6, 'Bumi', 25000, 'wan', 'wan@gmail.com', 'DANA', 'lunas', '', ''),
(7, 'parepare', 100000000, 'www', 'ww@gmail.com', 'DANA', 'lunas', '', ''),
(8, 'bg', 200000, 'mana', 'mana@gmail.com', '', 'lunas', '', ''),
(9, 'watermelon', 10000, 'wa', 'wnir27@gmail.com', 'DANA', 'lunas', '', ''),
(10, 'parepare', 100000000, 'wa', 'wnir27@gmail.com', 'DANA', 'lunas', '', ''),
(11, 'bg', 200000, 'nirwana', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(12, 'bg', 200000, 'nirwana', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(13, 'parepare', 100000000, 'yt', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(14, 'bg', 200000, 'ak', 'ak@gmail.com', 'DANA', 'lunas', '', ''),
(15, 'bg', 200000, 'wih', 'wih@gmail.com', 'DANA', 'lunas', '', ''),
(16, 'we', 21, 'wna', 'wna@gmail.com', 'DANA', 'lunas', '', ''),
(17, 'yng', 800, 'wna', 'wna@gmail.com', 'DANA', 'lunas', '', ''),
(18, 'we', 21, 'wa', 'wna@gmail.com', 'DANA', 'lunas', '', ''),
(19, 'wa', 20000, 'wa', 'wna@gmail.com', 'DANA', 'lunas', '', ''),
(20, 'bg', 200000, 'wa', 'wna@gmail.com', 'DANA', 'lunas', '', ''),
(21, 'parepare', 100000000, 'riii', 'rii@gmail.com', 'BRI', 'lunas', '', ''),
(22, 'Novel', 200000, 'apa', 'apa@gmail.com', 'OVO', 'lunas', '', ''),
(23, 'we', 21, 'wa', 'wna@gmail.com', 'BCA', 'lunas', '', ''),
(24, 'Bumi', 25000, 'wa', 'wna@gmail.com', 'BRI', 'lunas', '', ''),
(27, 'Novel', 200000, 'wa', 'wna@gmail.com', 'DANA', 'lunas', '', ''),
(28, 'HIHI', 200000, 'wa', 'wna@gmail.com', 'DANA', 'lunas', '', ''),
(29, 'Novel', 200000, 'wa', 'wna@gmail.com', 'DANA', 'lunas', '', ''),
(30, 'parepare', 100000000, 'wa', 'wna@gmail.com', 'BRI', 'lunas', '', ''),
(31, 'bg', 200000, 'akmal', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(32, 'parepare', 100000000, 'akmal', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(33, 'Toko', 30000, 'akmal', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(34, 'Toko', 30000, 'nirwana', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(35, 'Toko', 30000, 'akmal', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(36, 'Toko', 30000, 'akmal', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(37, 'HIHI', 200000, 'akmal', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(38, 'parepare', 100000000, 'akmal', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(39, 'Bumi', 25000, 'akmal', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(40, 'bg', 200000, 'akmal', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(41, 'wana', 20000, 'akmal', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(42, 'Bumi', 25000, 'nirwana', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(43, 'bg', 200000, 'nir', 'wnir27@gmail.com', 'DANA', 'lunas', '', ''),
(44, 'wana', 20000, 'nirwana', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(45, 'wana', 20000, 'nir', 'wnir27@gmail.com', 'DANA', 'lunas', '', ''),
(46, 'Novel', 200000, 'nir', 'wnir27@gmail.com', 'DANA', 'lunas', '', ''),
(47, 'HIHI', 200000, 'nir', 'wnir27@gmail.com', 'OVO', 'lunas', '', ''),
(48, 'Novel', 200000, 'nir', 'wnir27@gmail.com', 'OVO', 'lunas', '', ''),
(49, 'ak', 20000, 'nir', 'wnir27@gmail.com', 'OVO', 'lunas', '', ''),
(50, 'ak', 20000, 'nir', 'wnir27@gmail.com', 'DANA', 'lunas', '', ''),
(51, 'wana', 20000, 'awal', 'wnir27@gmail.com', 'BCA', 'lunas', '', ''),
(52, 'wana', 20000, 'awal', 'wnir27@gmail.com', 'DANA', 'lunas', '', ''),
(53, 'wana', 20000, 'nirwana', 'naaaanir04@gmail.com', 'DANA', 'lunas', '', ''),
(54, 'wana', 20000, 'nirwana', 'naaaanir04@gmail.com', 'BCA', 'lunas', '', ''),
(55, 'wana', 20000, 'awal', 'wnir27@gmail.com', 'DANA', 'lunas', '', ''),
(56, 'wana', 20000, 'nirwana', 'naaaanir04@gmail.com', 'BCA', 'lunas', '', ''),
(57, 'wana', 20000, 'ee', 'ak@gmail.com', 'BRI', 'lunas', '', ''),
(58, 'wa', 20000, 'ee', 'ak@gmail.com', 'DANA', 'lunas', '', ''),
(59, 'wana', 20000, 'ee', 'ak@gmail.com', 'BCA', 'lunas', '', ''),
(60, 'Novel', 200000, 'mal', 'mal@gmail.com', 'BCA', 'lunas', '', ''),
(61, 'Novel', 200000, 'mal', 'mal@gmail.com', 'BCA', 'lunas', '', ''),
(62, 'yng', 800, 'weee', 'ziziz@gmail.com', 'BCA', 'lunas', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role` enum('pembeli','penjual') NOT NULL,
  `nama` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `no_hp` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `nama`, `email`, `no_hp`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'pembeli', 'John Doe', 'johndoe@example.com', '08123456789', '$2b$10$klBhjGPdeoV2a5J8kkt/JOKE0Mw7GSDWonsX.8pmm5MaQsuY.mR5S', '2025-04-27 07:17:50', '2025-04-27 07:17:50'),
(2, 'pembeli', 'Alis', 'Alis@example.com', '08123456789', '$2b$10$c/J/C0yQ0KRT2TU.Dp5OIe98/5IDiDB/yemZgyoc3UlhRHcU24YsO', '2025-04-29 15:07:35', '2025-04-29 15:07:35'),
(3, 'penjual', 'nsa', 'nsa@gmail.com', '08123456789', '$2b$10$5jM6loiS3uMYZPfkfKfApOjc1WhQn3xZv9pfeD.wHuRi52Lz/iA8y', '2025-04-30 13:55:22', '2025-04-30 13:55:22'),
(5, 'penjual', 'sal', 'sal@gmail.com', '123456789', '$2b$10$JXLOfPM3WoOqQ20IFIhITeyCAOXQmfoPRokObjM/EysfyW2slg/kW', '2025-04-30 14:20:00', '2025-04-30 14:20:00'),
(6, 'penjual', 'git', 'git@gmail.com', '12345678', '$2b$10$pmIZ4rRbUGICQ8U2NNT72OvmjV14oEW26LWrBu6J3eMoehQFv5BJ.', '2025-04-30 14:21:10', '2025-04-30 14:21:10'),
(7, 'pembeli', 'raisa', 'raisa@gmail.com', '1234567', '$2b$10$On/hJmXmCJu7QURGfW47p.swwBAG3iIukQ0DX9oNuNcWDeP1KiPWC', '2025-04-30 14:25:19', '2025-04-30 14:25:19'),
(8, 'pembeli', 'rai', 'rai@gmail.com', '024728622', '$2b$10$7oVDFHvInlinEcSfGOU2v.E.i06UAIxHHGIeeMSiXy8j7B9NL2X5e', '2025-05-01 03:49:04', '2025-05-01 03:49:04'),
(9, 'pembeli', 'salman', 'sa@gmail.com', '742008284295', '$2b$10$nVNMgPMyOvnXgoYuVWOjKOf3HSyBp29rBWCyrtTUnRxI5a5BCW83.', '2025-05-01 04:00:56', '2025-05-01 04:00:56'),
(10, 'penjual', 'salman', 'salman@gmail.com', '74029460141', '$2b$10$XMXbQ8oKEYR6WjRlxBUQPuIG3WH2xO1SP0LyPItjcH0MnAW3Ce386', '2025-05-01 04:01:41', '2025-05-01 04:01:41'),
(11, 'penjual', 'sri', 'sri@gmail.com', '083456765345', '$2b$10$hyCgj6a3HhqHhccrrRZu4uTtypkj2qEte0J13BO/PbOe6RgZd.HAi', '2025-05-04 07:06:15', '2025-05-04 07:06:15'),
(12, 'penjual', 'ica', 'ica@gmail.com', '082373191746', '$2b$10$dXJTIv0/sYEqVr.BIFMwGuHY9JzRjOSWRMEfcLm8Idz8h4ZHgS0oC', '2025-05-04 14:52:21', '2025-05-04 14:52:21'),
(13, 'penjual', 'ab', 'ab@gmail.com', '8047914618', '$2b$10$XO48xRAjljTmyO2hGHeVceE7i3gID23L4sBhCeGvQLBPZG6AS0mmy', '2025-05-04 14:55:16', '2025-05-04 14:55:16'),
(14, 'pembeli', 'ca', 'ca@gmail.com', '801741946', '$2b$10$PLqZoJTR047QDtvaRlPV8Onuj.TKf3K8l0kQnpFOmwVZ1IAkcrOHS', '2025-05-04 15:01:29', '2025-05-04 15:01:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `downloads`
--
ALTER TABLE `downloads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `karyas`
--
ALTER TABLE `karyas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaksis`
--
ALTER TABLE `transaksis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `downloads`
--
ALTER TABLE `downloads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `karyas`
--
ALTER TABLE `karyas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `transaksis`
--
ALTER TABLE `transaksis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
