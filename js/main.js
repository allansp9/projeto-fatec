$(document).ready(function(){
    
    

    $('#searchForm').keyup(function(e){
        
        //apaga os resultados se o input estiver vazio
        if ($('#searchText').val() === ''){
            $('#output').hide();
        }
        else{
            $('#output').show();
        }

        var searchText = e.target.value;
        console.log(searchText);
        var searchParam = $('#searchParam').val();
       // e.preventDefault();
        // $('button').click(function(e){
        //     e.preventDefault();
        // });
        
        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/search/"+searchParam+"?api_key=2657b90452d2f9814a444d1074c32cab&query="+searchText+"&page=1&include_adult=false",
        "method": "GET",
        "headers": {},
        "data": "{}"
        };
        
        if ($.trim(searchText)!= ''){
            $.ajax(settings).done(function(response) {
                var data = response.results;
                var output = '';
                $.each(data, (index, coisa) => {
                    var poster;
                    if (searchParam == "movie"){
                        if (coisa.poster_path == null){
                            poster = "<img src='../img/temp.jpg' alt='poster'/>";
                        }
                        else {
                            poster = `<img src='https://image.tmdb.org/t/p/w500/${coisa.poster_path}' alt='poster' />`;
                        }                        
                        output += `
                            <div class="col-md-3">
                                <div class="text-center well">
                                    <a onclick="getFilmeId('${coisa.id}')" href="#">
                                        ${poster}
                                        <h5>${coisa.title}</h5>
                                     </a>
                                </div>
                            </div>
                        `;
                    }
                    else{
                        if (coisa.profile_path == null){
                            poster = `<img src='../img/temp.jpg' alt='poster'/>`;
                        }
                        else {
                            poster = `<img src='https://image.tmdb.org/t/p/w500/${coisa.profile_path}' alt='poster' />`;
                        } 
                        output += `
                            <div class="col-md-3">
                                <div class="text-center well">
                                    <a onclick="getAtorId('${coisa.id}')" href="#">
                                        ${poster}
                                        <h5>${coisa.name}</h5>
                                    </a>
                                </div>
                            </div>
                        `;
                    }

                });
                $('#output').html(output);
            });
        }
    });

});

function getFilmeId(id){
    sessionStorage.setItem('movieId', id);
    window.location = '../views/filme.php?id='+id;
    return false;
}

function getFilme(){
    var movieId = sessionStorage.getItem('movieId');
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/"+movieId+"?api_key=2657b90452d2f9814a444d1074c32cab&language=pt-BR",
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    $.ajax(settings).done(function (response) {
        var movie = response;
        var movie_id = movie.id;
        var movie_poster = movie.poster_path;
        var movie_name = movie.title;

        var output =`
        <div class="row ator">
            <div class="col-sm-8 col-md-6">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
            </div>
            <div class="col-sm-4 col-md-6 text-center">
                <h2>${movie.title}</h2>
                <div class="well">
                    <h3>Sumário</h3>
                    ${movie.overview}
                    <hr>
                </div>
            </div>
        </div>
      `;
        $('#movie').html(output);
        $.post('../model/data.php', {movie_id:movie_id, movie_poster:movie_poster, movie_name:movie_name}, function(data){
            console.log(data);
        });

   
    });
}

function getAtorId(id){
    sessionStorage.setItem('atorId', id);
    window.location = '../views/ator.php?id='+id;
    return false;
}

function getAtor(){
    var atorId = sessionStorage.getItem('atorId');
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/person/"+atorId+"?api_key=2657b90452d2f9814a444d1074c32cab",
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    $.ajax(settings).done(function (response) {
        var ator = response;

        var output =`
        <div class="row ator">
            <div class="col-md-6">
                <img src="https://image.tmdb.org/t/p/w500/${ator.profile_path}">
            </div>
            <div class="col-md-6">
                <h2 class="text-center">${ator.name}</h2>
                <div class="well">
                    <h1 class="text-center">Biografia</h1>
                        ${ator.biography}
                    <hr>
                </div>
            </div>
        </div>

        <h2>Fotos:</h2>
        `;
        $('#ator').html(output);
        //$('#ator').append(fotos);
    });
}

