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
                    }else if (searchParam == "tv"){
                        if (coisa.poster_path == null){
                            poster = "<img src='../img/temp.jpg' alt='poster'/>";
                        }
                        else {
                            poster = `<img src='https://image.tmdb.org/t/p/w500/${coisa.poster_path}' alt='poster' />`;
                        }                        
                        output += `
                            <div class="col-md-3">
                                <div class="text-center well">
                                    <a onclick="getTvId('${coisa.id}')" href="#">
                                        ${poster}
                                        <h5>${coisa.name}</h5>
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
        var movie_genres = movie.genres;
        var cada_genero;
        
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
                    <p>Gêneros: 
            `;
        $.each(movie_genres, (index, genre) => {
            output += `${genre.name}, `;
        });
        output +=`
                </p>
                </div>
            </div>
            <a class="btn btn-default" href="../views/index.php">Voltar</a>
        </div>
        `;
        $('#movie').html(output);

   
    });
}

function getTvId(id){
    sessionStorage.setItem('tvId', id);
    window.location = '../views/tv.php?id='+id;
    return false;
}

function getTv(){
    var tvId = sessionStorage.getItem('tvId');
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/tv/"+tvId+"?api_key=2657b90452d2f9814a444d1074c32cab&language=pt-BR",
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    $.ajax(settings).done(function (response) {
        var tv = response;
        var tv_id = tv.id;
        var tv_poster = tv.poster_path;
        var tv_name = tv.name;
        var tv_genres = tv.genres;
        var output =`
        <div class="row ator">
            <div class="col-sm-8 col-md-6">
                <img src="https://image.tmdb.org/t/p/w500/${tv.poster_path}">
            </div>
            <div class="col-sm-4 col-md-6 text-center">
                <h2>${tv.name}</h2>
                <div class="well">
                    <h3>Sumário</h3>
                    ${tv.overview}
                    <hr>
                    <p>Gêneros: 
            `;
        $.each(tv_genres, (index, genre) => {
            output += `${genre.name}, `;
        });
        output +=`
                </p>
                </div>
            </div>
            <a class="btn btn-default" href="../views/index.php">Voltar</a>
        </div>
        `;
        $('#tv').html(output);
   
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
         var output =`
        <div class="row ator">
            <div class="col-md-6">
                <img src="https://image.tmdb.org/t/p/w500/${response.profile_path}">
            </div>
            <div class="col-md-6">
                <h2 class="text-center">${response.name}</h2>
                <div class="well">
                    <h3 class="text-center">Biografia</h3>
                        ${response.biography}
                    <hr>
                </div>
            </div>
            <a class="btn btn-default" href="../views/index.php">Voltar</a>
        </div>
        `;
        $('#ator').html(output);
    });
}

