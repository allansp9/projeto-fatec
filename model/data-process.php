<?php   
        require 'db.php';
        
        
        $movie_id = mysqli_real_escape_string($conn, $_POST['movie_id']);
        $id = mysqli_real_escape_string($conn, $_SESSION['id']);
        $movie_name = mysqli_real_escape_string($conn, $_POST['movie_name']);
        $watched = mysqli_real_escape_string($conn, $_POST['watched']);
        
        $query = "INSERT INTO movie_list (movie_id, movie_name, watched) VALUES('$movie_id', '$movie_name', '$watched')";
        
        if(mysqli_query($conn, $query)){
            echo "pls GOD";
        }else {
            echo "erro: ". mysqli_error($conn);
        }
        
        
        
        

           

?>        