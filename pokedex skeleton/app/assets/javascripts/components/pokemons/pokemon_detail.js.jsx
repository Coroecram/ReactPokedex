window.PokemonDetail = React.createClass({

  getStateFromStore: function(){
    var pokemon = PokemonStore.find(parseInt(this.props.params.pokemonId));
    return pokemon;
  },

  getInitialState: function() {
    return {pokemon: this.getStateFromStore()};
  },

  componentWillUnmount: function() {
  },

  _onChange: function () {
    },

  componentWillReceiveProps: function (newProps) {
    debugger
    ApiUtil.fetchPokemon(parseInt(newProps.params.pokemonId));
  },

  render: function () {
    var details = (this.state.pokemon ? <div className="detail"><img src={this.state.pokemon.image_url}/></div> : undefined);

    return (
      <div>
        {details}
      </div>
    );
  }


  });
