<?php include '../includes/header.php'; ?>

<?php
    if ( $_SESSION['logged_in'] != 1 ) {
        header("location: ../login/index.php");    
    }
?>

   <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="index.php">Info</a>
        </div>
      </div>
    </nav>

    <div class="container">
    	<div class="jumbotron">
	    	<h3 class="text-center">info</h3>
	    	<form id="searchForm">
	    	    <input type="text" class="form-control" id="searchText" placeholder="Procure por um filme ou personalidade...">
	    		<select id="searchParam">
                    <option value="movie">Filme</option>
                    <option value="person">Pessoa</option>
                </select> 
	    	</form>
	    </div>
    </div>

    <div class="container">
      <div id="output" class="row">
          
      </div>
    </div>
    <br>
    <a href="../login/logout.php">Sair</a>


<?php include '../includes/footer.php'; ?>