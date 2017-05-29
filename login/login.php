<?php
/* página de login, verifica se o usuário e senha estão corretos */

// protecao contra sql injection
$username = $mysqli->escape_string($_POST['username']);
$result = $mysqli->query("SELECT * FROM users WHERE username='$username'");

if ( $result->num_rows == 0 ){ // User doesn't exist
    $_SESSION['message'] = "Usuário não existe!";
    header("location: error.php");
}
else { // Usuário existe
    $user = $result->fetch_assoc(); //retorna os dados da tabela

    if ( password_verify($_POST['password'], $user['password']) ) {

        $_SESSION['email'] = $user['email'];
        $_SESSION['name'] = $user['name'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['id'] = $user['id'];

        // pra saber que o usuario esta logado
        $_SESSION['logged_in'] = true;

        header("location: ../views/index.php");
    }
    else {
        $_SESSION['message'] = "Você digitou a senha errada, tente novamente!";
        header("location: error.php");
    }
}

