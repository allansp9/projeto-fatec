<?php include '../includes/header.php'; ?>

<?php
    if ( $_SESSION['logged_in'] != 1 ) {
        header("location: ../login/index.php");    
    }
?>
    
   <section>
    	<div class="">
	    	<h3 class="">info</h3>
	    	<form id="searchForm">
	    	    <input type="text" class="" id="searchText" placeholder="Procure por um filme ou personalidade...">
	    		<select id="searchParam">
                    <option value="movie">Filme</option>
                    <option value="person">Pessoa</option>
                </select> 
	    	</form>
	    </div>
    </section>

    <div class="">
      <div id="output" class="">
          
      </div>
    </div>
    <br>

<?php include '../includes/footer.php'; ?>