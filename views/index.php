<?php include '../includes/header.php'; ?>

    <section class="container">
    	<div class="jumbotron">
	    	<h1 class="text-center">filmDB</h1>
	    	<form id="searchForm">
	    		<input type="text" class="form-control" id="searchText">
	    		<select id="searchParam" class="form-control text-center">
                        <option value="movie">Filme</option>
                        <option value="tv">TV Show</option>
                        <option value="person">Pessoa</option>
                    </select>
	    	</form>
	    </div>

        <div class="container">
          <div id="output" class="row"></div>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>