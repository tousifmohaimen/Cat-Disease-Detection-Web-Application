<?php


include "function.php";
if (isset($_SESSION['role'])) {
    if ($_SESSION['role'] == 1) {
        header("location: test.php");
    } else if ($_SESSION['role'] == 2) {
        header("location: expertIndex.php");
    }
} else {
    header("location:index.php");
}

$id_user = $_GET["id_user"];

$queryUser = mysqli_query($koneksi, "SELECT * FROM user WHERE id_user = '$id_user'");
$user = mysqli_fetch_assoc($queryUser);
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
            <h5 class="font-weight-bold text-white text-uppercase teks">User Data</h5>
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
            <a class="nav-link" href="solutionIndex.php">
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
                <h1 class="h3 mb-0 text-gray-800">Change Patient Data</h1>
            </div>

        <!-- Content Row -->
            <div class="row">

                <form action="function.php?act=ubahPasien&id_user=<?= $user['id_user']; ?>" id="ubah" method="POST">
                    <div class="form-group">
                        <label for="nama">Patient's name</label>
                        <input type="text" class="form-control" id="nama" name="nama" value="<?= $user['nama']; ?>"">

                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" value="<?= $user['email']; ?>"">

                        <label for="alamat">Address</label>
                        <input type="text" class="form-control" id="alamat" name="alamat" value="<?= $user['alamat']; ?>"">

                        <label for="tgl_lahir">Date of birth</label>
                        <input type="date" class="form-control" id="tgl_lahir" name="tgl_lahir" value="<?= $user['tgl_lahir']; ?>"">
                    </div>
                    
                    <input type="submit" name="ubah_btn" id="ubah" class="btn btn-primary" value="Change">
                </form>

            </div>

        </div>
    </div>

</body>

</html>