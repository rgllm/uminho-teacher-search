(function() {
  $(window).on('load', function() {
    $('#jsonSearch').keyup(function() {
      var count, myExp, output, searchField;
      count = void 0;
      myExp = void 0;
      output = "";
      searchField = void 0;
      searchField = $('#jsonSearch').val();
      myExp = new RegExp(searchField, 'i');
      count = 1;
      $.getJSON('data/docentes.json', function(data) {
        $.each(data, function(key, val) {
          var showName = true
          var showMail = true
          var showTelefone = true;
          var showDepartamento = true;
          searchField.split(" ").forEach(function(x) {
            showName = showName && (val.nome.search(new RegExp(x, 'i'))!=-1);
            showMail = showMail && (val.email.search(new RegExp(x, 'i'))!=-1);
            showTelefone = showTelefone && (val.telefone.search(new RegExp(x, 'i'))!=-1);
            showDepartamento = showDepartamento && (val.departamento.search(new RegExp(x, 'i'))!=-1);
          });
          if (showName || showMail || showTelefone || showDepartamento) {
            output += '<div class="col s12 result card-panel"><div class="col s12"><li class="searchLi" style="#83151D"><p>Nome: ' + val.nome + '</p><p>Website: <a href="' + val.url + '">'+val.url+'</a></p><p>Departamento: ' + val.departamento + '</p><p>Telefone: '+ val.telefone + '</p><p>Email: ' + val.email +'</p></li></div></div>';
            
            count++;
          }
        });
        output="<p>"+(count-1)+" resultados</p>"+output;
        $('#jsonSearchresults').html(output);
      });
    });
  });

}).call(this);