$(document).ready(function(){
    $('#searchForm').on('keyup', (e) => {
        let searchText = $('#searchText').val();
        getFilmes(searchText);
        e.preventDefault();
    });
});

function getFilmes(searchText){
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/search/movie?api_key=2657b90452d2f9814a444d1074c32cab&language=en-US&query="+searchText+"&page=1&include_adult=false",
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    $.ajax(settings).done(function (response) {
        let movies = response.results;
        let output = '';
        $.each(movies, (index, movie) => {
            output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="https://image.tmdb.org/t/p/w154/${movie.poster_path}">
                        <h5>${movie.title}</h5>
                        <a onclick="getFilmeId('${movie.id}')" class="btn btn-primary" href="#">Movie Details</a>
                    </div>
                </div>
            `;
        });
        $('#movies').html(output);
   
    });
}

  
function getFilmeId(id){
    sessionStorage.setItem('movieId', id);
    window.location = '../views/detalhes.php';
    return false;
}

function getDetalhes(){
    let movieId = sessionStorage.getItem('movieId');
    
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/"+movieId+"?api_key=2657b90452d2f9814a444d1074c32cab&language=pt-BR",
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    $.ajax(settings).done(function (response) {
        let movie = response;
        let output =`
        <div class="row">
          <div class="col-md-4">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
          </div>
          <div class="col-md-8">
            <h2>${movie.title}</h2>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.overview}
            <hr>
            <a href="../views/index.php" class="btn btn-default">Voltar</a>
          </div>
        </div>
      `;
        
        $('#movie').html(output);

   
    });
}