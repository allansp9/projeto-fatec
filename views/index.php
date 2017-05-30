<?php include '../includes/header.php'; ?>

<?php
    if ( $_SESSION['logged_in'] != 1 ) {
        header("location: ../login/index.php");    
    }
?>
   <!--<section class="">-->
   <!-- 	<div class="container text-center">-->
   <!-- 	    	<h1 class="filmdb">filmDB</h1>-->
   <!-- 	    	<form id="searchForm" class="">-->
   <!-- 	    	    <input type="text" class="form-control" id="searchText">-->
   <!-- 	    		<select id="searchParam" class="form-control text-center">-->
   <!--                     <option value="movie">Filme</option>-->
   <!--                     <option value="person">Pessoa</option>-->
   <!--                 </select> -->
   <!-- 	    	</form>-->
	  <!--  	</div>-->
   <!-- </section>-->
   <!-- <div class="">-->
   <!--   <div id="output" class="">-->
          
   <!--   </div>-->
   <!-- </div>-->
   <!-- <br>-->
    
    <section class="container">
    	<div class="jumbotron">
	    	<h1 class="text-center">filmDB</h1>
	    	<form id="searchForm">
	    		<input type="text" class="form-control" id="searchText">
	    		<select id="searchParam" class="form-control text-center">
                        <option value="movie">Filme</option>
                        <option value="person">Pessoa</option>
                    </select>
	    	</form>
	    </div>

        <div class="container">
          <div id="output" class="row"></div>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>