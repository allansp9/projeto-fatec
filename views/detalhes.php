<?php include '../includes/header.php'; ?>

<nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="index.html">MovieInfo</a>
        </div>
      </div>
    </nav>
    
    <div class="container">
        <div id="movie" class="well"></div>
    <label>
    <input type="checkbox" name="assistido" id="assistido">
    Assistido
    </label>
        
        
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="../js/main.js"></script>
    <script>getDetalhes();</script>
</body>
</html>