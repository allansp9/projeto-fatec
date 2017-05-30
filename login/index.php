<?php
/* Main page with two forms: sign up and log in */
require 'db.php';
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Login</title>
  <?php require_once 'css/css.html'; ?>
</head>

<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    if (isset($_POST['login'])) { //login

        require 'login.php';

    }

    elseif (isset($_POST['register'])) { //cadastro

        require 'register.php';

    }
}

?>
<body>
  <div class="form">

      <ul class="tab-group">
        <li class="tab"><a href="#signup">Registrar</a></li>
        <li class="tab active"><a href="#login">Entrar</a></li>
      </ul>

      <div class="tab-content">

         <div id="login">
          <h1>Bem vindo!</h1>

          <form action="index.php" method="post" autocomplete="off">

            <div class="field-wrap">
            <label>
              Usuário<span class="req">*</span>
            </label>
            <input type="text" required autocomplete="off" name="username"/>
          </div>

          <div class="field-wrap">
            <label>
              Senha<span class="req">*</span>
            </label>
            <input type="password" required autocomplete="off" name="password"/>
          </div>

          <button class="button button-block" name="login" />Entrar</button>

          </form>

        </div>

        <div id="signup">
<!--          <h1>Sign Up for Free</h1>-->

          <form action="index.php" method="post" autocomplete="off">

            <div class="field-wrap">
              <label>
                Nome<span class="req">*</span>
              </label>
              <input type="text" required autocomplete="off" name='name' />
            </div>

            <div class="field-wrap">
              <label>
                Usuário<span class="req">*</span>
              </label>
              <input type="text"required autocomplete="off" name='username' />
            </div>

          <div class="field-wrap">
            <label>
              Email<span class="req">*</span>
            </label>
            <input type="email"required autocomplete="off" name='email' />
          </div>

          <div class="field-wrap">
            <label>
              Senha<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off" name='password'/>
          </div>

          <button type="submit" class="button button-block" name="register" />Registrar</button>

          </form>

        </div>

      </div><!-- tab-content -->

</div> <!-- /form -->
  <script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>

    <script src="js/index.js"></script>

</body>
</html>
