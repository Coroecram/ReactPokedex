var ApiUtil = window.ApiUtil = {

  fetch: function() {
    $.ajax({
      url: '/api/pokemon',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveAllPokemons(data);
      }
    });
  }
  
};
