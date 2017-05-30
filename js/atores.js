$(document).ready(function(){

    $('#searchForm').keyup(function(e){
        var searchText = e.target.value;
        var searchParam = $('#searchParam').val();
        e.preventDefault();
        
        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/search/"+searchParam+"?api_key=2657b90452d2f9814a444d1074c32cab&language=en-US&query="+searchText+"&page=1&include_adult=false",
        "method": "GET",
        "headers": {},
        "data": "{}"
        };
        
        if ($.trim(searchText)!= ''){
            $.ajax(settings).done(function(response) {
                var atores = response.results;
                var output = '';
                $.each(atores, (index, ator) => {
                    output += `
                        <div class="col-md-3">
                            <div class="well text-center">
                                <img src="https://image.tmdb.org/t/p/w154/${ator.profile_path}">
                                <h5>${ator.name}</h5>
                                <a onclick="getId('${ator.id}')" class="btn btn-primary" href="#">Movie Details</a>
                            </div>
                        </div>
                    `;
                });
                $('#movies').html(output);
            });
        }
    });

});

function getId(id){
    sessionStorage.setItem('atorId', id);
    window.location = '../views/ator.php?id='+id;
    return false;
}

function getAtor(){
    var atorId = sessionStorage.getItem('atorId');
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/person/"+atorId+"?api_key=2657b90452d2f9814a444d1074c32cab&language=en-US",
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    $.ajax(settings).done(function (response) {
        var ator = response;
        var ator_id = ator.id;
        var ator_profile = ator.profile_path;
        var ator_name = ator.title;
        
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
            <h3>Plot</h3>
            ${ator.biography}
            <hr>
          </div>
        </div>
      `;
    });
}

