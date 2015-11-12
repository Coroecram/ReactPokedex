(function () {
  var _pokemons = [];
  var CHANGE_EVENT = "change";
  var PokemonStore = window.PokemonStore = $.extend({}, EventEmitter.prototype);

  var resetPokemons = PokemonStore.resetPokemons = function (data) {
    _pokemons = data;
  };

  PokemonStore.all = function () {
    return _pokemons.slice(0);
  };

  PokemonStore.addChangeHandler = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  PokemonStore.removeChangeHandler = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

  PokemonStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  PokemonStore.find = function(id) {
    for (var i = 0; i < _pokemons.length; i++){
      if (_pokemons[i].id === id){
        return _pokemons[i];
      }
    }
  };

  PokemonStore.dispatchToken = AppDispatcher.register(function (payload) {
    switch(payload.actionType) {
      case PokemonConstants.POKEMONS_RECEIVED:
        resetPokemons(payload.pokemons);
        PokemonStore.changed();
        break;
    }

  });

})();
