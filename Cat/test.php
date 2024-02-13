<?php 
include 'function.php';
if (isset($_SESSION['role'])) {
    if ($_SESSION['role'] == 0) {
        header("location: indexAdmin.php");
    } else if ($_SESSION['role'] == 2) {
        header("location: expertIndex.php");
    }
}

if(!isset($_SESSION['persentase'])){
    $_SESSION['persentase'] = [];
}


$gejala = mysqli_query($koneksi, "SELECT * FROM gejala");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"/>
    <link
    href="https://fonts.googleapis.com/css?family=Poppins:300,400,700&display=swap"
    rel="stylesheet"/>
    <link rel="stylesheet" href="custom.css" />
    <title>My Cat</title>
</head>
<body>
    <nav class="navbar py-2 navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="#"
            ><img src="picture/catlogo.png" width="150" alt="logo"
            /></a>
            <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li>
                        <a class="btn px-4 btn-primary ml-2" href="logout.php" role="button"
                    >Log Out</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>

    <section class="test mt-5">
        <div class="container">
            <div class="row">
                <div class="col align-self-center">
                    <h2 class="mb-4">Question : </h2>
                    <form action="" method="post" enctype="multipart/form-data" role="form">
                    <?php
                        $id_penyakit=1;
                        // if(!isset($_SESSION['id_penyakit'])){
                        //     $_SESSION['id_penyakit'] = $id_penyakit;
                        // }else{
                        //     $id_penyakit = $_SESSION['id_penyakit'];
                        // }
                        $id = gejala($id_penyakit);
                        $id_gejala = intval($id);
                        if(!isset($_SESSION['id_gejala'])){
                            $_SESSION['id_gejala'] = $id_gejala;
                        }else{
                            $id_gejala = $_SESSION['id_gejala'];
                        }
                        $data = mysqli_query($koneksi, "SELECT gejala FROM gejala WHERE id_gejala = '$id_gejala'");
                        // var_dump($data);
                        $row = mysqli_fetch_assoc($data);
                    ?>
                    <p class="mb-4">
                        Do you experience cat's  <?= $row['gejala']; ?> ?
                    </p>
                    <?php 
                        echo'<input type="submit" class="btn btn-primary mr-2 px-4 py-2" name="ya" value="Yes">';
                        echo'<input type="submit" class="btn btn-danger px-3 py-2" name="tidak" value="No">';
                        $persentase = $_SESSION['persentase'];
                        $temp = 0;
                        $_SESSION['id_gejala'] = $id_gejala;
                        $next_gejala = $_SESSION['id_gejala'];
                        // $next_penyakit = $_SESSION['id_penyakit'];
                        if(isset($_POST['ya'])){
                            if(isset($id_gejala)){
                                $temp = $id_gejala;
                                array_push($persentase, $temp);
                            }
                            $_SESSION['persentase'] = $persentase;
                            $next_gejala = $id_gejala + 1;
                            $_SESSION['id_gejala'] = $next_gejala;
                        } 
                        else if(isset($_POST['tidak'])){
                            $next_gejala = $id_gejala + 1;
                            $_SESSION['id_gejala'] = $next_gejala;
                            // $next_penyakit = $id_penyakit += 1;
                            // $_SESSION['id_penyakit'] = $next_penyakit;
                        }
                        if($_SESSION['id_gejala'] > 27) {
                        
                        $cat_diarrhea = array(1,2,3,4,5,6);
                        $cat_lice = array(7,8,9,10,11,12);
                        $cat_mite = array(13,14,15,16,17);
                        $cat_worms = array(18,19);
                        $cat_diabetes = array(20,21,22);
                        $cat_constipiration = array(23,24,25,26,27); 
                        $nilai = 0;
                        foreach ($persentase as $value) {
                            if (in_array($value, $cat_diarrhea)) {
                                $nilai += 1;
                            }else{
                                $nilai += 0;
                            } 
                        }
                        $cat_diarrhea = $nilai/count($cat_diarrhea);
                        $Akut = number_format($cat_diarrhea,3);
                        $hasilcat_diarrhea = $Akut *100;
                        // echo $hasilGinjalAkut;
                        // echo '<br>';
                        $_SESSION['cat_diarrhea'] = $hasilcat_diarrhea;
                        $nilai = 0;
                        foreach ($persentase as $value) {
                            if (in_array($value, $cat_lice)) {
                                $nilai += 1;
                            }else{
                                $nilai += 0;
                            }
                        }
                        $cat_lice = $nilai/count($cat_lice);
                        $Kronis = number_format($cat_lice,3);
                        $hasilcat_lice = $Kronis *100;
                        // echo $hasilcat_lice;
                        // echo '<br>';
                        $_SESSION['cat_lice'] = $hasilcat_lice;
                        $nilai = 0;
                        foreach ($persentase as $value) {
                            if (in_array($value, $cat_mite)) {
                                $nilai += 1;
                            }else{
                                $nilai += 0;
                            }
                        }
                        $cat_mite = $nilai/count($cat_mite);
                        $Batu = number_format($cat_mite,3);
                        $hasilcat_mite = $Batu *100;
                        // echo $hasilcat_mite;
                        // echo '<br>';
                        $_SESSION['cat_mite'] = $hasilcat_mite;
                        $nilai = 0;
                        foreach ($persentase as $value) {
                            if (in_array($value, $cat_worms)) {
                                $nilai += 1;
                            }else{
                                $nilai += 0;
                            }
                        }
                        $cat_worms = $nilai/count($cat_worms);
                        $Infeksi = number_format($cat_worms,3);
                        $hasilcat_worms = $Infeksi *100;
                        // echo $hasilcat_worms;
                        // echo '<br>';
                        $_SESSION['cat_worms'] = $hasilcat_worms;
                        $nilai = 0;
                        foreach ($persentase as $value) {
                            if (in_array($value, $cat_diabetes)) {
                                $nilai += 1;
                            }else{
                                $nilai += 0;
                            }
                        }
                        $cat_diabetes = $nilai/count($cat_diabetes);
                        $Kanker = number_format($cat_diabetes,3);
                        $hasilcat_diabetes = $Kanker *100;
                        // echo $hasilcat_diabetes;
                        // echo '<br>';
                        $_SESSION['cat_diabetes'] = $hasilcat_diabetes;
                        $nilai = 0;
                        foreach ($persentase as $value) {
                            if (in_array($value, $cat_constipiration)) {
                                $nilai += 1;
                            }else{
                                $nilai += 0;
                            }
                        }
                        $cat_constipiration = $nilai/count($cat_constipiration);
                        $Gagal = number_format($cat_constipiration,3);
                        $hasilcat_constipiration = $Gagal *100;
                        // echo $hasilcat_constipiration;
                        // echo '<br>';
                        $_SESSION['cat_constipiration'] = $hasilcat_constipiration;
                        header('Location:result.php');
                    }
                    ?>
                    <br>
                    
                </div>
                    </form>
                <div class="col d-none d-sm-block">
                    <img width="500" src="picture/jawab.png" alt="hero" />
                </div>
            </div>
        </div>
    </section>
</body>

<script
    src="https://code.jquery.com/jquery-3.4.1.js"
    integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
    crossorigin="anonymous"
></script>
<script
    src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"
></script>
<script
    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"
></script>
<script
    src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
    crossorigin="anonymous"
></script>
</html>