<?php


include "function.php";
if (isset($_SESSION['role'])) {
    if ($_SESSION['role'] == 1) {
        header("location: test.php");
    }
} else {
    header("location:index.php");
}

$id_gejala = $_GET["id_gejala"];

$queryPenyakit = mysqli_query($koneksi, "SELECT * FROM penyakit");

$query = mysqli_query($koneksi, "SELECT * FROM relasi INNER JOIN penyakit ON relasi.id_penyakit = penyakit.id_penyakit INNER JOIN gejala ON relasi.id_gejala = gejala.id_gejala WHERE relasi.id_gejala = '$id_gejala'");
$data = mysqli_fetch_assoc($query);


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard Admin</title>
    <link rel="stylesheet" href="styles.css">
    <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"/>
    <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,700&display=swap"
        rel="stylesheet"/>
</head>

<body >
    <div class="kiri">
        <section class="logo">
            <img src="picture/catlogo.png" alt="logo" height="70px" />
        </section>
        <div class="sidebar-heading">
            <h5 class="font-weight-bold text-white text-uppercase teks">User data</h5>
        </div>
        <section class="isi">
            <a class="nav-link" href="indexAdmin.php">
            <span>Patient Data</span></a>
        </section>
        <section class="isi">
            <a class="nav-link" href="expertIndex.php">
            <span>Expert Data</span></a>
        </section>
        <div class="sidebar-heading">
            <h5 class="font-weight-bold text-white text-uppercase teks">Symptoms & Diseases</h5> 
        </div>
        <section class="isi">
            <a class="nav-link" href="diseaseIndex.php">
            <span>Disease Data</span>
            </a>
        </section>
        <section class="isi">
            <a class="nav-link" href="symptomIndex.php">
            <span>Symptom Data</span>
            </a>
        </section>
        <div class="sidebar-heading">
            <h5 class="font-weight-bold text-white text-uppercase teks">Solution</h5> 
        </div>
        <section class="isi">
            <a class="nav-link" href="indexSolusi.php">
            <span>Solution Data</span>
            </a>
        </section>
        <section class="isi">
            <a class="nav-link" href="logout.php">
            <span>Logout</span>
            </a>
        </section>
    </div>

    <div class="kanan">
        <div class="container-fluid">

        <!-- Page Heading -->
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Change Symptom Data</h1>
            </div>

        <!-- Content Row -->
            <div class="row">

                <form action="function.php?act=ubahGejala&id_gejala=<?= $data['id_gejala']; ?>" id="ubah" method="POST">
                    <div class="form-group">
                        <label for="namaGejala">Symptom Name</label>
                        <input type="text" class="form-control" id="namaGejala" name="namaGejala" value="<?= $data['gejala']; ?>"">
                    </div>
                    <div class="form-group">
                    <label for="id_penyakit" class="form-label">Disease Name</label>
                    <select name="id_penyakit" id="id_penyakit" class="form-control">
                        <option value="<?= $data['id_penyakit']; ?>"><?= $data['penyakit']; ?></option>
                        <?php while ($penyakit = mysqli_fetch_assoc($queryPenyakit)) { ?>
                            <option value="<?= $penyakit["id_penyakit"]; ?>"><?= $penyakit["penyakit"]; ?></option>
                        <?php } ?>
                    </select>
                </div>
                    <input type="submit" name="ubah_btn" id="ubah" class="btn btn-primary" value="change">
                </form>

            </div>

        </div>
    </div>

</body>

</html>