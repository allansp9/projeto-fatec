$(document).ready(function(){
    $('#searchText').on('keyup', function(){
        var searchText = $('#searchText').val(); 
        buscaFilmes(searchText);
    });
});    
    
    function buscaFilmes(texto){
        $.getJSON(
            "https://api.themoviedb.org/3/search/movie?api_key=2657b90452d2f9814a444d1074c32cab&language=en-US&query="+texto+"&page=1",
            function(response){
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
            }
        
        )
    }
    
    function getFilmeId(id){
        sessionStorage.setItem('movieId', id);
        window.location = '../views/detalhes.php';
        return false;
    }
    
    function getDetalhes(){
        var movieId = sessionStorage.getItem('movieId');
        $.getJSON(
            "https://api.themoviedb.org/3/movie/"+movieId+"?api_key=2657b90452d2f9814a444d1074c32cab&language=pt-BR",
            function(response){
                let output = '';
                $.each(response, (index, movie) => {
                    console.log(movie);
                    output =`
                            <div class="row">
                              <div class="col-md-4">
                                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                              </div>
                              <div class="col-md-8">
                                <h2>${movie.title}</h2>
                                <ul class="list-group">
                                  <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                                  <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                                  <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                                  <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                                  <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                                  <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
                                  <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                                </ul>
                              </div>
                            </div>
                            <div class="row">
                              <div class="well">
                                <h3>Plot</h3>
                                ${movie.Plot}
                                <hr>
                                <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                                <a href="index.html" class="btn btn-default">Go Back To Search</a>
                              </div>
                            </div>
                          `;
                });
                $('#movie').html(output);
            }
        );
    }