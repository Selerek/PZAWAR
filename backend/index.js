const express = require('express')
const cors = require('cors')
const application = express()
const dataglobal = []


const pokemonrouter = express.Router()
application.use(cors())
application.use(express.json())
const pokemonspath = require('./pokedex.json')
const pokemontypes = require('./types.json')
const e = require('express')
const pokemonsImages = "./images/"


pokemonrouter.get('/', (request, response) => {
    response.send(pokemonspath)
})

pokemonrouter.get('/name', (request, response) => {
    formattedData = pokemonspath.map(pokemon => {
        return {
            name: pokemon.name.english,
            id: pokemon.id,
            type: pokemon.type,
        }
    })
    response.send(formattedData)
})


pokemonrouter.get('/types', (request, response) => {
    formattedData = pokemontypes.map(type => english = type.english)
    response.send(formattedData)
})
pokemonrouter.get('/types/:type', (request, response) => {
    const type = request.params.type
    const pokemons = pokemonspath.filter(pokemon => {
        const pokemonTypes = pokemon.type.map(x => x.toLowerCase())
        return pokemonTypes.includes(type.toLowerCase())
    })
        formattedData = pokemons.map(pokemon => {
            return {
                name: pokemon.name.english,
                id: pokemon.id,
                type: pokemon.type,
            };
        });
        response.send(formattedData)
    
})
// /search?type=poison'
pokemonrouter.get('/search/', (request, response) => {
    const query = request.query
    console.log(query)
    queryType = query.type
    queryName = query.name
    console.log(queryType)
    pokemons = pokemonspath.filter(pokemon => {
        return pokemon.name.english.toLowerCase().includes(queryName.toLowerCase())
    })
    pokemonstype = pokemons.filter(pokemons => {
        const pokemonTypes = pokemons.type.map(x => x.toLowerCase())
        return pokemonTypes.includes(queryType.toLowerCase())
    })

    finalpokemons = pokemonstype.map(pokemon => {
        return {
            name: pokemon.name.english,
            id: pokemon.id,
            type: pokemon.type,
        }
    })

    // const type = request.params.type

    // const pokemons = pokemonspath.filter(pokemon => {
    //     const pokemonTypes = pokemon.type.map(x => x.toLowerCase())
        
    //     return pokemonTypes.includes(type.toLowerCase())
    // })
    
    response.send(finalpokemons)
})
pokemonrouter.get("/images/:id", (request, response) => {
    var fs = require('fs');
    const id = request.params.id
    const imageId = id.padStart(3, "0")
    console.log(imageId)
    const pokemon = pokemonspath.find(pokemon => pokemon.id == id)

    if (pokemon) {
        const image = `${pokemonsImages}${imageId}.png`
        console.log(image)
        ecnimg = base64_encode(image, fs)
        
        response.send(ecnimg)
    } else {
        response.status(404)
        response.send({message: "Pokemon not found"})
    }
})
pokemonrouter.get('/:id', (request, response) => {
    const id = request.params.id
    const pokemon = pokemonspath.find(pokemon => pokemon.id == id)
    if (pokemon) {
        formattedData = {...pokemon, name: pokemon.name.english}
        response.send(formattedData)
    } else {
        response.status(404)
        response.send({message: "Pokemon not found"})
    }
})
function base64_encode(file, fs) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
application.use('/pokemon', pokemonrouter)





application.post('/wyslanodane', (request, response) => {
    const data = request.body; 
    console.log('Received data:', data);
    dataglobal.push(data)
    response.send({
        message: "Data received successfully",
        receivedData: data,
    });
});
application.get('/wysylanie', (request, response) => {
    response.send(dataglobal)
})

application.get('/', (request, response) => response.send("<div><h1>hello world</h1></div>"))
application.get('/abc', (request, response) => {
    response.status(500)
    response.send("<div><h1>chong</h1></div>")
})
application.post('/abc', (request, response) => {
    response.status(500)
    response.send("<div><h1>abc</h1></div>")
})
application.put('/abc', (request, response) => {
    response.status(404)
    response.send("<div><h1>putter</h1></div>")
})
//sci/4c/abc
const sci_router = express.Router()
sci_router.get('/', (request, response) => {
    response.send("sci")
})
sci_router.get('/json', (request, response) => {
    const data = [{
        key1: "text",
        key2: 123,
    }]
    response.json(data)
})
application.use("/sci/4c/abc", sci_router)












application.listen(8000, () => console.log("server start") )
