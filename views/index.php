<?php include '../includes/header.php'; ?>

<?php
    if ( $_SESSION['logged_in'] != 1 ) {
        header("location: ../login/index.php");    
    }
?>

   <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="index.html">MovieInfo</a>
        </div>
      </div>
    </nav>

    <div class="container">
    	<div class="jumbotron">
	    	<h3 class="text-center">Search For Any Movie</h3>
	    	<form id="searchForm">
	    		<input type="text" class="form-control" id="searchText" placeholder="Search Movies...">
	    	</form>
	    </div>
    </div>

    <div class="container">
      <div id="movies" class="row"></div>
    </div>


<?php include '../includes/footer.php'; ?>