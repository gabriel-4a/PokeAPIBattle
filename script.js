$(document).ready(function(){



let leftPokemon;

//starter function to pull a random pokemon from the PokeAPI
  function getRandomPokemonLeft() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      //console.log("Left Pokemon Data: ", pokeData);
      leftPokemon = pokeData
      console.log(leftPokemon)
      console.log(leftPokemon['name'])
      console.log(leftPokemon['sprites']['front_default'])

      let leftPokemonDisplay = `
      <h2>${leftPokemon['name']}</h2>
      <img src = "${leftPokemon['sprites']['front_default']}">
 `
      console.log(leftPokemonDisplay)
$("#left").empty();
$("#left").append(leftPokemonDisplay);



    });
  }

$("#leftButton").click(getRandomPokemonLeft)


function getRandomPokemonRight() {
  let randomNumber = Math.floor(Math.random() * 800) + 1;
  $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
    //console.log("Right Pokemon Data: ", pokeData);
    rightPokemon = pokeData
    console.log(rightPokemon)
    console.log(rightPokemon['name'])
    console.log(rightPokemon['sprites']['front_default'])

    let rightPokemonDisplay = `
    <h2>${rightPokemon['name']}</h2>
    <img src = "${rightPokemon['sprites']['front_default']}">
`
    console.log(rightPokemonDisplay)
$("#right").empty();
$("#right").append(rightPokemonDisplay);



  });
}

$("#rightButton").click(getRandomPokemonRight)





})
