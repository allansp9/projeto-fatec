<?php include '../includes/header.php'; ?>
<?php require '../model/data.php'; ?>

<nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="index.php">Info Ator</a>
        </div>
      </div>
    </nav>
    
    <div class="container">
        <div id="ator" class="well"></div>
        
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="../js/atores.js"></script>
    <script>getDetalhes();</script>
</body>
</html>