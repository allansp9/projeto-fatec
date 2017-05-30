<?php
/* Pagina utilizada para mostrar as mensagens de erro */
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <title>Error</title>
  <meta charset="UTF-8">
  <?php require_once 'css/css.html'; ?>
</head>
<body>
<div class="form">
    <h1>Error</h1>
    <p>
    <?php
    if( isset($_SESSION['message']) AND !empty($_SESSION['message']) ):
        echo $_SESSION['message'];
    else:
        header( "location: index.php" );
    endif;
    ?>
    </p>
    <a href="index.php"><button class="button button-block"/>Voltar</button></a>
</div>
</body>
</html>
