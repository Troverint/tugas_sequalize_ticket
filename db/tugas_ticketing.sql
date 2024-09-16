-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2024 at 03:28 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tugas_ticketing`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Pajri', 'apa@gmail.com', 'admin123', '2024-09-16 13:17:13', '2024-09-16 13:17:13');

-- --------------------------------------------------------

--
-- Table structure for table `film`
--

CREATE TABLE `film` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `sutradara` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `rating` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `film`
--

INSERT INTO `film` (`id`, `title`, `genre`, `sutradara`, `description`, `rating`, `createdAt`, `updatedAt`) VALUES
(1, 'Inception', 'Drama', 'chrsitopher nolan', 'lorem ipsum dolor sit amet', 5, '2024-09-16 12:58:52', '2024-09-16 12:58:52'),
(2, 'Inside Out', 'Drama Comedy', 'Pete Doctor', 'lorem ipsum dolor sit amet', 5, '2024-09-16 12:59:02', '2024-09-16 12:59:02');

-- --------------------------------------------------------

--
-- Table structure for table `pembeli`
--

CREATE TABLE `pembeli` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pembeli`
--

INSERT INTO `pembeli` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'pajri', 'xyz@gmail.com', 'User123', '2024-09-16 12:59:27', '2024-09-16 12:59:27'),
(2, 'aria', 'xyz@gmail.com', 'User123', '2024-09-16 12:59:30', '2024-09-16 12:59:30'),
(3, 'dana', 'xyz@gmail.com', 'User123', '2024-09-16 12:59:33', '2024-09-16 12:59:33');

-- --------------------------------------------------------

--
-- Table structure for table `screening`
--

CREATE TABLE `screening` (
  `id` int(11) NOT NULL,
  `jadwal_pemutaran` varchar(255) NOT NULL,
  `studio` varchar(255) NOT NULL,
  `bangku_tersedia` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `FilmId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `screening`
--

INSERT INTO `screening` (`id`, `jadwal_pemutaran`, `studio`, `bangku_tersedia`, `createdAt`, `updatedAt`, `FilmId`) VALUES
(1, '18:00 14 Februari 2007', 'Studio 2', 79, '2024-09-16 12:59:51', '2024-09-16 13:01:27', 1),
(2, '18:00 28 desember 2024', 'Studio 1', 39, '2024-09-16 13:00:15', '2024-09-16 13:06:38', 2);

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `id` int(11) NOT NULL,
  `nomor_bangku` int(11) NOT NULL,
  `harga` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ScreeningId` int(11) DEFAULT NULL,
  `PembeliId` int(11) DEFAULT NULL,
  `TransaksiId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`id`, `nomor_bangku`, `harga`, `createdAt`, `updatedAt`, `ScreeningId`, `PembeliId`, `TransaksiId`) VALUES
(1, 2, '20rb', '2024-09-16 13:01:27', '2024-09-16 13:01:27', 1, 1, 1),
(2, 2, '20rb', '2024-09-16 13:06:38', '2024-09-16 13:06:38', 2, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id` int(11) NOT NULL,
  `harga_total` varchar(255) NOT NULL,
  `waktu_pembayaran` datetime NOT NULL,
  `metode_pembayaran` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id`, `harga_total`, `waktu_pembayaran`, `metode_pembayaran`, `status`, `createdAt`, `updatedAt`) VALUES
(1, '20rb', '2024-09-16 13:00:48', 'QRIS', 'pending', '2024-09-16 13:00:48', '2024-09-16 13:00:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pembeli`
--
ALTER TABLE `pembeli`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `screening`
--
ALTER TABLE `screening`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FilmId` (`FilmId`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ScreeningId` (`ScreeningId`),
  ADD KEY `PembeliId` (`PembeliId`),
  ADD KEY `TransaksiId` (`TransaksiId`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `film`
--
ALTER TABLE `film`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pembeli`
--
ALTER TABLE `pembeli`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `screening`
--
ALTER TABLE `screening`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `screening`
--
ALTER TABLE `screening`
  ADD CONSTRAINT `screening_ibfk_1` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_10` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_11` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_12` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_13` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_14` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_15` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_16` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_17` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_18` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_19` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_2` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_20` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_21` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_22` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_23` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_24` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_25` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_26` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_27` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_28` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_29` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_3` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_30` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_4` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_5` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_6` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_7` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_8` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `screening_ibfk_9` FOREIGN KEY (`FilmId`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_10` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_11` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_12` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_13` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_14` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_15` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_16` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_17` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_18` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_19` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_20` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_21` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_22` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_23` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_24` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_25` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_26` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_27` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_28` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_29` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_3` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_30` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_31` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_32` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_33` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_34` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_35` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_36` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_37` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_38` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_39` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_4` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_40` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_41` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_42` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_43` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_44` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_45` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_46` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_47` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_48` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_49` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_5` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_50` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_51` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_52` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_53` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_54` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_55` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_56` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_57` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_58` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_59` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_6` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_60` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_61` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_62` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_63` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_64` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_65` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_66` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_67` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_68` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_69` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_7` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_70` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_71` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_72` FOREIGN KEY (`ScreeningId`) REFERENCES `screening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_73` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_74` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_8` FOREIGN KEY (`PembeliId`) REFERENCES `pembeli` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_9` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
