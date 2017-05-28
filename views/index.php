<?php
    session_start();
    if ( $_SESSION['logged_in'] != 1 ) {
        header("location: ../login/index.php");    
    }
    echo "Hello,".$_SESSION['name'];
    
    echo "<a href='../login/logout.php'><button class='button button-block' name='logout'/>Log Out</button></a>";
?>