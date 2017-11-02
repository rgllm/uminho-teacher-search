(function() {
  $(window).on('load', function() {
    $('#jsonSearch').keyup(function() {
      var count, myExp, output, searchField;
      count = void 0;
      myExp = void 0;
      output = void 0;
      searchField = void 0;
      searchField = $('#jsonSearch').val();
      tokens = searchField.split(" ");
      myExp = new RegExp(searchField, 'i');
      output = '<div class="row">';
      count = 1;
      $.getJSON('data/docentes.json', function(data) {
        $.each(data, function(key, val) {
          if (val.nome.search(myExp) != -1 || val.email.search(myExp) !=-1) {
            output += '<div class="col s12 result card-panel"><div class="col s12"><li class="searchLi light-blue-text"><p>Nome: ' + val.nome + '</p><p>Website: <a href="' + val.url + '">'+val.url+'</a></p><p>Departamento: ' + val.departamento + '</p><p>Telefone: '+ val.telefone + '</p><p>Email: ' + val.email +'</p></li></div></div>';
            if (count % 2 == 0) {
              output += '</div><div class="row">';
            }
            count++;
          }
        });
        output += '</div>';
        $('#jsonSearchresults').html(output);
      });
    });
  });

}).call(this);