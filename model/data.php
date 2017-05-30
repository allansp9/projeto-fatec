<?php   
        require 'db.php';
        session_start();
        
        
        $filme_id = mysqli_real_escape_string($conn, $_POST['movie_id']);
        $user_id = mysqli_real_escape_string($conn, $_SESSION['id']);
        $filme_nome = mysqli_real_escape_string($conn, $_POST['movie_name']);
        $watched = mysqli_real_escape_string($conn, $_POST['watched']);
        $poster = mysqli_real_escape_string($conn, $_POST['movie_poster']);
        
        
        
            if (isset($watched) AND !empty($watched)){
                $query = "SELECT * FROM filmes WHERE filme_id='$filme_id'";
                $result = mysqli_query($conn, $query);

                if ( $result->num_rows == 0 ){ //pergunta se o não filme existe
                    
                    //adiciona o filme a tabela
                    $query = "INSERT INTO filmes (filme_id, nome, poster) VALUES('$filme_id', '$filme_nome', '$poster');";
                    if (mysqli_query($conn, $query)) {
                            echo "New records created successfully";
                    } 
                    else {
                        echo "Error: " . $query . "<br>" . mysqli_error($conn);
                    }
                    
                    //adiciona o filme aos assistidos
                    $query = "INSERT INTO user_filme (user_id, filme_id, watched) VALUES('$user_id','$filme_id','$watched')";
                    if (mysqli_query($conn, $query)) {
                            //echo $query;
                            echo "New records created successfully";
                    } 
                    else {
                        echo "Error: " . $query . "<br>" . mysqli_error($conn);
                    }
                }
                else{
                    // //se o filme já está no banco, pergunta se a pessoa já assistiu
                    // $query = "SELECT * FROM user_filme WHERE (user_id = '$user_id' AND filme_id = '$filme_id')";
                    // $result = mysqli_query($conn, $query);
                    
                    // if ( $result->num_rows == 0 ){ // true = nao assistiu, marca como assistido
                    //     $query = "INSERT INTO user_filme (user_id, filme_id, watched) VALUES('$user_id','$filme_id','$watched')";
                    //     mysqli_query($conn, $query);
                    //     echo "cai no 2?";
                    // }else { //ja viu, retire dos assistidos
                        $query = "UPDATE user_filme SET watched = $watched WHERE (user_id = '$user_id' AND filme_id = '$filme_id')";
                        mysqli_query($conn, $query);
                        echo "cai no 3?";
                }

            }
        
        echo $_GET['id'];
        

           

?>        