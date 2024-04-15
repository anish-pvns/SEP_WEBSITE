-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2023 at 06:49 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `course_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookmark`
--

CREATE TABLE `bookmark` (
  `user_id` varchar(20) NOT NULL,
  `playlist_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` varchar(20) NOT NULL,
  `content_id` varchar(20) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `tutor_id` varchar(20) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `content_id`, `user_id`, `tutor_id`, `comment`, `date`) VALUES
('YDV5SKpJdaJ817rhA2kF', 'rOrgNuA3ehZZDtwsGZ1g', 'AgPGxWigssd7Kowiw7qE', 'ymcJLSEhHWBeEhADsvCX', 'Can you explain how E-script it is browser language or anything else??', '2023-05-08'),
('S6Zw6nJ4Wfh8XzdKl1dT', '7pOXQOz8zUwepXRu0dXa', 'AgPGxWigssd7Kowiw7qE', 'ymcJLSEhHWBeEhADsvCX', 'ashwin sir is a devloper', '2023-05-08');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `number` int(10) NOT NULL,
  `message` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `id` varchar(20) NOT NULL,
  `tutor_id` varchar(20) NOT NULL,
  `playlist_id` varchar(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `video` varchar(100) NOT NULL,
  `thumb` varchar(100) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `status` varchar(20) NOT NULL DEFAULT 'deactive'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`id`, `tutor_id`, `playlist_id`, `title`, `description`, `video`, `thumb`, `date`, `status`) VALUES
('rOrgNuA3ehZZDtwsGZ1g', 'ymcJLSEhHWBeEhADsvCX', 'LsWGnXmZglRs9p39kLNr', 'Lecture-01', 'Basics Of Html', 'KfyCcoXL16GLFquNZETj.MP4', 'uOYqJDEsajOJZrk5rxRk.png', '2023-05-08', 'active'),
('CfBFaqoZV9TF0lHD0Fst', 'ymcJLSEhHWBeEhADsvCX', 'LsWGnXmZglRs9p39kLNr', 'Lecture-02', 'CERN researchers to use and share documents. In 1989, Berners-Lee wrote a memo proposing an Internet-based hypertext system.[3] Berners-Lee specified HTML and wrote the browser and server software in late 1990. That year, Berners-Lee and CERN data systems engineer Robert Cailliau collaborated on a joint request for funding, but the project was not formally adopted by CERN. In his personal notes of 1990, Berners-Lee listed &#34;some of the many areas in which hypertext is used&#34;; an encyclopedia is the first entry', 'fAp3iZLL6JbL3fBjK5AM.MP4', 'ghCTyF9xp4S4X0MVkxMI.png', '2023-05-08', 'active'),
('7pOXQOz8zUwepXRu0dXa', 'ymcJLSEhHWBeEhADsvCX', 'saBsmZPRLWAIapNNX0Jm', 'lecture 01', 'begginerss', 'Ee8rDuc310rAteMPBrsh.MP4', 'vbOx4msqu9i9d06TMrWM.png', '2023-05-08', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `user_id` varchar(20) NOT NULL,
  `tutor_id` varchar(20) NOT NULL,
  `content_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`user_id`, `tutor_id`, `content_id`) VALUES
('AgPGxWigssd7Kowiw7qE', 'ymcJLSEhHWBeEhADsvCX', 'rOrgNuA3ehZZDtwsGZ1g');

-- --------------------------------------------------------

--
-- Table structure for table `playlist`
--

CREATE TABLE `playlist` (
  `id` varchar(20) NOT NULL,
  `tutor_id` varchar(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `thumb` varchar(100) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `status` varchar(20) NOT NULL DEFAULT 'deactive'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `playlist`
--

INSERT INTO `playlist` (`id`, `tutor_id`, `title`, `description`, `thumb`, `date`, `status`) VALUES
('Om2qCBI2982KMon5Dyf8', 'ymcJLSEhHWBeEhADsvCX', 'HTML', 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and', 'PJrtKKo211ZAoTBWFUXd.png', '2023-05-29', 'active'),
('3AoGFfo3Y2YzlCqvjL45', 'ymcJLSEhHWBeEhADsvCX', 'CSS', 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide', 'M8NOSMueDnRr3cPtsMuY.png', '2023-05-29', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `tutors`
--

CREATE TABLE `tutors` (
  `id` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `profession` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tutors`
--

INSERT INTO `tutors` (`id`, `name`, `profession`, `email`, `password`, `image`) VALUES
('ymcJLSEhHWBeEhADsvCX', 'hari', 'developer', 'pillasiva6@gmail.com', '8cb2237d0679ca88db6464eac60da96345513964', 'W3YDDWbCpYlKVQ18Zoer.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`) VALUES
('AgPGxWigssd7Kowiw7qE', 'shiva', 'pillasiva6@gmail.com', '8cb2237d0679ca88db6464eac60da96345513964', 'FLgVrwpxV7jrCyOlP2bE.png'),
('Q42Lo0T8iro07vGr6OyE', 'shiva', '211801380018@cutmap', '8cb2237d0679ca88db6464eac60da96345513964', 'vdS9bVaRXh6gnkXWtoph.jpg'),
('twvYtM92bT6hTMTIXgJj', 'raju', 'raju@gmail.com', '8cb2237d0679ca88db6464eac60da96345513964', 'IemUlSNdIYp4LW9OoUsc.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
