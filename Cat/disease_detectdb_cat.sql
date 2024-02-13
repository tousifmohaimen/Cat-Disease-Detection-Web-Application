-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 20 Jun 2020 pada 09.01
-- Versi server: 10.3.16-MariaDB
-- Versi PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_penyakitginjal`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `gejala`
--

CREATE TABLE `gejala` (
  `id_gejala` int(11) NOT NULL,
  `gejala` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `gejala`
--

INSERT INTO `gejala` (`id_gejala`, `gejala`) VALUES
(1, 'mucas or blood in the stool'),
(2, 'worms in the stool'),
(3, 'vomiting'),
(4, 'tiredness'),
(5, 'abdominal pain'),
(6, 'accidents in house'),
(7, 'excessive biting or scratching'),
(8, 'fur loss or matting'),
(9, 'small white or brown spots on skin'),
(10, 'visible parasites'),
(11, 'a dry looking coat'),
(12, 'hair loss'),
(13, 'scratching the ears'),
(14, 'shaking head'),
(15, 'dark or dry discharge from ear'),
(16, 'redness of skin'),
(17, 'dandruff like skin crusts'),
(18, 'trouble breathing'),
(19, 'coughing'),
(20, 'increased urination'),
(21, 'urinary tract infection'),
(22, 'dehydration'),
(23, 'weight loss'),
(24, 'drinking less water'),
(25, 'not being able to poop at all'),
(26, 'Muscle loss'),
(27, 'Difficulty jumping up');

-- --------------------------------------------------------

--
-- Struktur dari tabel `penyakit`
--

CREATE TABLE `penyakit` (
  `id_penyakit` int(11) NOT NULL,
  `penyakit` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `penyakit`
--

INSERT INTO `penyakit` (`id_penyakit`, `penyakit`) VALUES
(1, 'Cat Diarrhea '),
(2, 'Cat Lice'),
(3, 'Cat Mite'),
(4, 'Cat Worms'),
(5, 'Cat Diabetes'),
(6, 'Cat Constipation');

-- --------------------------------------------------------

--
-- Struktur dari tabel `relasi`
--

CREATE TABLE `relasi` (
  `id_relasi` int(11) NOT NULL,
  `id_gejala` int(11) DEFAULT NULL,
  `id_penyakit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `relasi`
--

INSERT INTO `relasi` (`id_relasi`, `id_gejala`, `id_penyakit`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1),
(6, 6, 1),
(7, 7, 2),
(8, 8, 2),
(9, 9, 2),
(10, 10, 2),
(11, 11, 2),
(12, 12, 2),
(13, 13, 3),
(14, 14, 3),
(15, 15, 3),
(16, 16, 3),
(17, 17, 3),
(18, 18, 4),
(19, 19, 4),
(20, 20, 5),
(21, 21, 5),
(22, 22, 5),
(23, 23, 6),
(24, 24, 6),
(25, 25, 6),
(26, 26, 6),
(27, 27, 6);

-- --------------------------------------------------------

--
-- Struktur dari tabel `solusi`
--

CREATE TABLE `solusi` (
  `id_solusi` int(11) NOT NULL,
  `id_penyakit` int(11) NOT NULL,
  `solusi` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `solusi`
--

INSERT INTO `solusi` (`id_solusi`, `id_penyakit`, `solusi`) VALUES
(1, 1, 'Treating diarrhea depends on its underlying cause. There are many available treatments for diarrhea that may be recommended by your vet depending on a variety of factors. However, nutrition plays a key role in managing this condition.'),
(2, 1, 'Nutrition plays a significant role in a healthy cat stool. Poor nutrition may lead to chronic (ongoing) diarrhea, so an assessment of your cats nutrition will be conducted by your vet. They may recommend switching cat foods as a course of treatment. A lower-fat food or food richer in complex carbohydrates and digestible complex carbohydrates with added fiber may be recommended.'),
(3, 1, 'Chronic cases of diarrhea are typically treated with special meal plans alongside medications. In many cases, your veterinarian will recommend nutritional therapy for the rest of the cats life to help maintain proper digestion for conditions that cannot be outright cured. Your vet may recommend a therapeutic cat food that is specially formulated to help with digestion and diarrhea.'),
(4, 1, 'In cases where food allergies are a concern, a series of nutritional trials may be necessary to determine the cats ideal meal plan. Hydrolyzed foods or novel protein foods are commonly recommended for these cats.'),
(5, 2, 'Isolating Your Cat is is only a necessary step if you have more than one cat in your home and is needed to prevent transferring the lice to another cat. The best thing you can do is keep the affected cat in another room during treatment. Isolating your cat also reduces the amount of cleaning required to eliminate the lice.'),
(6, 2, 'Your veterinarian will recommend an insecticide treatment for your cat, which may include a medicated wash or shampoo. It is best to talk to your veterinarian so you can make sure the medication is safe for your cat.'),
(8, 2, 'You can also ask your veterinarian to recommend a product to get rid of the lice around the house. There are various sprays and powders designed to eliminate the nits and lice from your home. This is an important step. '),
(9, 2, 'Your veterinarian will only recommend shaving the fur if it is badly matted. It should not be needed to treat most infestations.'),
(10, 3, 'Some cats recover from skin mite dermatitis without treatment, but severe cases or cats that are in poor health must receive medical treatment to recover. '),
(11, 3, 'Mites that are localized in the ears will need to be cleaned out and treated with prescribed drops. '),
(12, 4, 'Once you notice the symptoms of worms in cats, its important to take action. Schedule an appointment with your vet to confirm the diagnosis and review available treatment options. '),
(13, 4, 'Oftentimes, cats exhibiting symptoms of worms may be treated using over-the-counter medications or prescription medications.'),
(14, 4, 'which can be administered orally, topically, or via injection.1 Always consult with your veterinarian before embarking on a course of treatment.'),
(15, 4, 'Regularly remove feces from your cats litter box.'),
(16, 5, 'Most cats with diabetes will need insulin injections, normally twice a day, about 12 hours apart and after a meal. The injection is usually given in the scruff of the neck and should be painless for your cat.'),
(17, 5, 'You may also need to test your cats blood glucose levels by taking a small swab of blood with a tiny pin prick.'),
(18, 5, 'Many pet owners are understandably concerned about giving injections at first, but soon get the hang of it with practise.'),
(19, 5, 'You may find you need another pair of hands to help hold your cat still for the injections, especially in the early stages.'),
(20, 6, 'Constipation must be treated as soon as possible to reduce the risk of permanent damage due to prolonged distension of the colon. Effective treatment involves identifying and correcting the underlying disorder (if possible), removing the impacted feces, and preventing recurrences.'),
(21, 6, 'For immediate relief of constipation, your veterinarian can give your cat fluids and/or an enema. “Administering an enema to a cat is a veterinary job and should not be attempted at home,” says Dr. Bales. Some types of enemas designed for people are actually very toxic to cats.'),
(22, 6, 'Vets can also prescribe medications or recommend over-the-counter solutions to help you manage the symptoms of your cats constipation.');


-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `role` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `tgl_lahir` date NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `role`, `nama`, `email`, `alamat`, `tgl_lahir`, `password`) VALUES
(1, 1, 'Bayu Adi', 'bayu@gmail.com', 'Belayu', '2020-04-15', '$2y$10$QxzfxQ6eAAfr48pne8ZX0OvPTRrvD/xPa8qEElpby.6O0LYEW2FFm'),
(2, 0, 'admin', 'admin@gmail.com', 'Tabanan', '2020-04-17', '$2y$10$ASS50col3niwOOku4Zkky.HpmF18hiPWL9pi2DnE8CS7jTDSD4ufe'),
(4, 2, 'Dokter Budi', 'budi@gmail.com', 'Badung', '2020-04-09', '$2y$10$n2nS/Rg7Zvjdv.q1mrv7TOJYrzf18LVQQzsWuDWqPf5Ieos/OIWiG'),
(5, 1, 'adi', 'adi@gmail.com', 'Badung', '2020-05-21', '$2y$10$ge9myh0TIg1tGwsOm6KZ5eriUxWhYswmHFx84dEsrwxpYbXdijKGC'),
(6, 2, 'Dokter Jaya', 'jaya@gmail.com', 'Denpasar', '2020-05-12', '$2y$10$Hb0Q.SpDMZ1m34GlQSnB4.GkKM9wBRwWsrHUIFwn4sV6M7JGNPIV.'),
(7, 2, 'Dokter Sally', 'sally@gmail.com', 'Kuta', '2020-05-28', '$2y$10$xP98m86lQdD8oE/dpTyvh.7.4oAsbcj0.H5Ekw0UhGFCoyaqc49W2'),
(10, 1, 'test', 'test@gmail.com', 'asjadja', '2020-06-15', '$2y$10$KIVNLDg1RABhFvjKmfwR4eDUb90lCthb5/ZgNW8GNFvhL3L5ju0qO');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `gejala`
--
ALTER TABLE `gejala`
  ADD PRIMARY KEY (`id_gejala`);

--
-- Indeks untuk tabel `penyakit`
--
ALTER TABLE `penyakit`
  ADD PRIMARY KEY (`id_penyakit`);

--
-- Indeks untuk tabel `relasi`
--
ALTER TABLE `relasi`
  ADD PRIMARY KEY (`id_relasi`),
  ADD KEY `id_gejala` (`id_gejala`),
  ADD KEY `id_penyakit` (`id_penyakit`);

--
-- Indeks untuk tabel `solusi`
--
ALTER TABLE `solusi`
  ADD PRIMARY KEY (`id_solusi`),
  ADD KEY `id_penyakit` (`id_penyakit`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `gejala`
--
ALTER TABLE `gejala`
  MODIFY `id_gejala` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT untuk tabel `penyakit`
--
ALTER TABLE `penyakit`
  MODIFY `id_penyakit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `relasi`
--
ALTER TABLE `relasi`
  MODIFY `id_relasi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT untuk tabel `solusi`
--
ALTER TABLE `solusi`
  MODIFY `id_solusi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `relasi`
--
ALTER TABLE `relasi`
  ADD CONSTRAINT `relasi_ibfk_1` FOREIGN KEY (`id_gejala`) REFERENCES `gejala` (`id_gejala`),
  ADD CONSTRAINT `relasi_ibfk_2` FOREIGN KEY (`id_penyakit`) REFERENCES `penyakit` (`id_penyakit`);

--
-- Ketidakleluasaan untuk tabel `solusi`
--
ALTER TABLE `solusi`
  ADD CONSTRAINT `solusi_ibfk_1` FOREIGN KEY (`id_penyakit`) REFERENCES `penyakit` (`id_penyakit`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
