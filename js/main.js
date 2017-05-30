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
        var searchParam = $('#searchParam').val();
        e.preventDefault();
        
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
                    if (searchParam == "movie"){
                        output += `
                            <div class="col-md-3">
                                <div class="well text-center">
                                    <img src="https://image.tmdb.org/t/p/w154/${coisa.poster_path}">
                                    <h5>${coisa.title}</h5>
                                    <a onclick="getFilmeId('${coisa.id}')" class="btn btn-primary" href="#">Movie Details</a>
                                </div>
                            </div>
                        `;
                    }
                    else{
                        output += `
                            <div class="col-md-3">
                                <div class="well text-center">
                                    <img src="https://image.tmdb.org/t/p/w154/${coisa.profile_path}">
                                    <h5>${coisa.name}</h5>
                                    <a onclick="getAtorId('${coisa.id}')" class="btn btn-primary" href="#">Movie Details</a>
                                </div>
                            </div>
                        `;
                    }

                });
                $('#output').html(output);
            });
        }
    });
    
    $('#searchText').change(function(){
        // if ($(this).val() === ''){
        //     console.log("condeu");
        //     $('#output').hide();
        // }
        // else{
        //     $('#output').show();
        //     console.log("mosto");
        // }
        console.log('are ya working?');
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
        "url": "https://api.themoviedb.org/3/movie/"+movieId+"?api_key=2657b90452d2f9814a444d1074c32cab&language=en-US",
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
        "url": "https://api.themoviedb.org/3/person/"+atorId+"?api_key=2657b90452d2f9814a444d1074c32cab&language=en-US&append_to_response=images",
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    $.ajax(settings).done(function (response) {
        var ator = response;

        var output =`
        <div class="row">
          <div class="col-md-4">
            <img src="https://image.tmdb.org/t/p/w500/${ator.profile_path}">
          </div>
          <div class="col-md-8">
            <h2>${ator.name}</h2>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h1>Biografia</h1>
            ${ator.biography}
            <hr>
          </div>
        </div>
        
        <h2>Fotos:</h2>
        `;
        var caminho = ator.images.profiles;
        for (var i = 0; i < 8; i++) {
            output += `
                    <div class="col-md-3">
                        <div class="well text-center">
                            <a href="https://image.tmdb.org/t/p/original${caminho[i].file_path}" target="_blank" class="thumbnail">
                                <img src="https://image.tmdb.org/t/p/original${caminho[i].file_path}" alt="${ator.name}">
                            </a>    
                         </div>
                    </div>
            
                `
        }
        $('#ator').html(output);
        //$('#ator').append(fotos);
    });
}
