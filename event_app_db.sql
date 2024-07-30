-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2024 at 04:32 PM
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
-- Database: `event_app_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `host_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `host_id`, `name`, `date`, `time`, `location`, `description`, `user_id`) VALUES
(22, 0, 'Salman.s Birthday', '2000-03-05', '22:00:00', 'Singapore', 'Birthday\r\n', 3),
(23, 0, 'Adil\'s Birthday', '2001-05-28', '22:00:00', 'Campus Heights', '04-04', 3),
(24, 0, 'C237 GA', '2024-07-15', '14:30:00', 'MS Teams', 'Assessment', 3),
(25, 0, 'ESE', '2024-08-08', '12:00:00', 'RP', 'End Sem Assessment', 3),
(26, 0, 'National Day', '2024-08-09', '07:00:00', 'Singapore', 'National Day Celebration', 3),
(27, 0, 'Bruno Mars Concert', '2024-06-20', '21:00:00', 'National Stadium', 'Join us in the concert!', 3),
(28, 0, 'Charity fund raising', '2024-07-15', '10:00:00', 'Admiralty park', 'Join us!', 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(3, 'salman', 'salman@gmail.com', '$2b$10$lQuYzjc6.u9jFuClx28EjOMkkGVKDYM6aADdDjC7Cwn6Fo2mGjqtq'),
(4, 'Admin', 'admin@gmail.com', '$2b$10$amXfAb7A5EWTonjd4oXDVOJKoDd3lOGFHeBg7SnAnnKnfFsKjr3nG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
