//link for API for Pokedex

//being able to input user's search into API
//populate date
//                  Create an object
// let practiceObject = {
//     key: Value,
// }
//    creating my color change object
const colorChange = {
    normal: "#A8A878",
    fire: "#F08030",
    fighting:"#C03028",
    water: "#6890F0",
    flying:"#A890F0",
    grass:"#78C850",
    poison:"#A040A0",
    electric:"#F8D030",
    ground:"#E0C068",
    psychic:"#F85888",
    rock:"#B8A038",
    ice:"#98D8D8",
    bug:"#A8B820",
    dragon:"#7038F8",
    ghost:"#705898",
    dark:"#705848",
    steel:"#B8B8D0",
    fairy:"#EE99AC",
    default:"f8f8ff"

}
//document ready function for jquery
$(()=>{
//onclick for search button in html
    $('form').on("submit",(event)=>{
        event.preventDefault()
            //set a variable for user input
        const userInput= $('input[type="text"]').val()

        console.log(userInput)
      
        async function getPokeData(){
            //async await to grab data
            //fetch data
            console.log("button pressed")
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
            //change data to json
            const data = await response.json()
            console.log(data);
            $('#pokeName').html(data.forms[0].name);
            $('#pokeType').html(data.types[0].type.name);
            let type = data.types[0].type.name
            console.log(typeof type)

           

            $('.divToHoldPokemonInfo').css("background", colorChange[type])

            $('#pokeNumber').html(data.id);
            
            console.log(data);
        }
        getPokeData()
   })
})  






// switch (type) {
                
//     case "normal":
//         $('.divToHoldPokemonInfo').css("background", colorChange["normal"])                    
//     console.log("in the switch")
//         break;
//     case "fire":
//         $('.divToHoldPokemonInfo').css("background", colorChange["fire"])                    
        
//         break;
//     case "fighting":
//         $('.divToHoldPokemonInfo').css("background", colorChange["fighting"])                    
        
//         break;
//     case "water":
//         $('.divToHoldPokemonInfo').css("background", colorChange["water"])                    
        
//         break;
//     case "flying":
//         $('.divToHoldPokemonInfo').css("background", colorChange["flying"])                    
        
//         break;
//     case "grass":
//         $('.divToHoldPokemonInfo').css("background", colorChange["grass"]) 
//         console.log(colorChange["grass"])  
//         // console.log($('.divToHoldPokemonInfo').css() )                  
//         console.log("in the switch")
//         break;
//     case "poison":
//         $('.divToHoldPokemonInfo').css("background", colorChange["poison"])                    
        
//         break;
//     case "electric":
//         $('.divToHoldPokemonInfo').css("background", colorChange["electric"])                    
        
//         break;
//     case "ground":
//         $('.divToHoldPokemonInfo').css("background", colorChange["ground"])                    
        
//         break;
//     case "psychic":
//         $('.divToHoldPokemonInfo').css("background", colorChange["psychic"])                    
        
//         break;
//     case "rock":
//         $('.divToHoldPokemonInfo').css("background", colorChange["rock"])                    

//          break;
//     case "ice":
//         $('.divToHoldPokemonInfo').css("background", colorChange["ice"])                    

//         break;
//     case "bug":
//         $('.divToHoldPokemonInfo').css("background", colorChange["bug"])                    

//         break;
//     case "dragon":
//         $('.divToHoldPokemonInfo').css("background", colorChange["dragon"])                    

//         break;
//     case "ghost":
//         $('.divToHoldPokemonInfo').css("background", colorChange["ghost"])                    

//         break;
//     case "dark":
//         $('.divToHoldPokemonInfo').css("background", colorChange["dark"])                    

//         break;
//     case "steel":
//         $('.divToHoldPokemonInfo').css("background", colorChange["steel"])                    

//         break;
//     case "fairy":
//         $('.divToHoldPokemonInfo').css("background", colorChange["fairy"])                    

//         break;
    


//     default:
//         break;
// }