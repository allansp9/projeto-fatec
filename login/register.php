<?php
/* Processo de registro, insere informações do usuário no banco de dados
    E envia uma mensagem de email de confirmação de conta
 

// ativa essas session variables para serem usadas em alguma pagina
$_SESSION['email'] = $_POST['email'];
$_SESSION['first_name'] = $_POST['firstname'];
$_SESSION['last_name'] = $_POST['lastname'];
*/
// proteção contra sql injection
$name = $mysqli->escape_string($_POST['name']);
$username = $mysqli->escape_string($_POST['username']);
$email = $mysqli->escape_string($_POST['email']);
$password = $mysqli->escape_string(password_hash($_POST['password'], PASSWORD_BCRYPT));
//$hash = $mysqli->escape_string( md5( rand(0,1000) ) ); //se quiser usar hash para verificação de email

// verifica se o email está no banco de dados
$result = $mysqli->query("SELECT * FROM users WHERE email='$email'") or die($mysqli->error());

// se o retorno for maior que 0 então o email já existe
if ( $result->num_rows > 0 ) {

    $_SESSION['message'] = 'Email já cadastrado!';
    header("location: error.php");

}
// verifica se o username está no banco de dados
$result = $mysqli->query("SELECT * FROM users WHERE username='$username'") or die($mysqli->error());

// se o retorno for maior que 0 então o username já existe
if ($result->num_rows > 0) {
    $_SESSION['message'] = 'Usuário já cadastrado!';
    header("location: error.php");
}
else { // username e email disponíveis

    
    $sql = "INSERT INTO users (name, username, email, password) "
            . "VALUES ('$name','$username','$email','$password')";

    // adiciona o usuario ao banco
    if ( $mysqli->query($sql) ){

        $_SESSION['logged_in'] = true; // pra saber que o usuário está logado
        $_SESSION['message'] = "Conta criada com sucesso!";
        header("location: success.php");
    }

    else {
        $_SESSION['message'] = 'Registration failed!';
        header("location: error.php");
    }

}
