const express = require('express')
const cors = require('cors')
const application = express()
const dataglobal = []

const path = require('path');
const fs = require('fs');
application.use(cors())
application.use(express.json())
const e = require('express')
const pokemonrouter = express.Router()
//const pokemonsImages = "./images/"
// const pokemonspath = require('./pokedex.json')
// const pokemontypes = require('./types.json')

application.get('/task1', (request, response) => {
    const dataofpea = {
        "employees": [
            {
                "id": 1,
                "first_name": "Jan",
                "last_name": "Kowalski",
                "department": "IT",
                "position": "Backend Developer",
                "salary": 12000,
                "hire_date": "2020-06-15"
            },
            {
                "id": 2,
                "first_name": "Anna",
                "last_name": "Nowak",
                "department": "HR",
                "position": "HR Manager",
                "salary": 9500,
                "hire_date": "2018-03-10"
            },
            {
                "id": 3,
                "first_name": "Marek",
                "last_name": "Wiśniewski",
                "department": "IT",
                "position": "Frontend Developer",
                "salary": 11000,
                "hire_date": "2021-08-22"
            },
            {
                "id": 4,
                "first_name": "Ewa",
                "last_name": "Dąbrowska",
                "department": "Finance",
                "position": "Accountant",
                "salary": 8500,
                "hire_date": "2019-11-05"
            },
            {
                "id": 5,
                "first_name": "Piotr",
                "last_name": "Lewandowski",
                "department": "IT",
                "position": "DevOps Engineer",
                "salary": 13000,
                "hire_date": "2022-01-15"
            },
            {
                "id": 6,
                "first_name": "Katarzyna",
                "last_name": "Wójcik",
                "department": "Marketing",
                "position": "Marketing Specialist",
                "salary": 7800,
                "hire_date": "2017-06-30"
            },
            {
                "id": 7,
                "first_name": "Tomasz",
                "last_name": "Zieliński",
                "department": "Sales",
                "position": "Sales Manager",
                "salary": 10500,
                "hire_date": "2016-04-12"
            },
            {
                "id": 8,
                "first_name": "Monika",
                "last_name": "Szymańska",
                "department": "Finance",
                "position": "Financial Analyst",
                "salary": 9200,
                "hire_date": "2020-09-18"
            },
            {
                "id": 9,
                "first_name": "Robert",
                "last_name": "Kamiński",
                "department": "Sales",
                "position": "Sales Representative",
                "salary": 8800,
                "hire_date": "2021-02-20"
            },
            {
                "id": 10,
                "first_name": "Agnieszka",
                "last_name": "Jankowska",
                "department": "IT",
                "position": "Software Tester",
                "salary": 8900,
                "hire_date": "2019-07-25"
            },
            {
                "id": 11,
                "first_name": "Grzegorz",
                "last_name": "Lis",
                "department": "IT",
                "position": "System Administrator",
                "salary": 12500,
                "hire_date": "2021-10-14"
            },
            {
                "id": 12,
                "first_name": "Magdalena",
                "last_name": "Czarnecka",
                "department": "HR",
                "position": "Recruiter",
                "salary": 8300,
                "hire_date": "2018-12-07"
            },
            {
                "id": 13,
                "first_name": "Łukasz",
                "last_name": "Pawlak",
                "department": "Finance",
                "position": "Tax Specialist",
                "salary": 8700,
                "hire_date": "2020-03-23"
            },
            {
                "id": 14,
                "first_name": "Barbara",
                "last_name": "Michalak",
                "department": "IT",
                "position": "Security Analyst",
                "salary": 13500,
                "hire_date": "2021-06-05"
            },
            {
                "id": 15,
                "first_name": "Michał",
                "last_name": "Sikora",
                "department": "Marketing",
                "position": "Content Manager",
                "salary": 8200,
                "hire_date": "2019-11-10"
            },
            {
                "id": 16,
                "first_name": "Patrycja",
                "last_name": "Adamska",
                "department": "Sales",
                "position": "Key Account Manager",
                "salary": 10200,
                "hire_date": "2015-09-25"
            },
            {
                "id": 17,
                "first_name": "Dariusz",
                "last_name": "Głowacki",
                "department": "Finance",
                "position": "Auditor",
                "salary": 9700,
                "hire_date": "2021-04-30"
            },
            {
                "id": 18,
                "first_name": "Natalia",
                "last_name": "Król",
                "department": "HR",
                "position": "Payroll Specialist",
                "salary": 7800,
                "hire_date": "2017-02-15"
            },
            {
                "id": 19,
                "first_name": "Kamil",
                "last_name": "Majewski",
                "department": "IT",
                "position": "Full Stack Developer",
                "salary": 11800,
                "hire_date": "2023-01-05"
            },
            {
                "id": 20,
                "first_name": "Dominika",
                "last_name": "Ostrowska",
                "department": "Marketing",
                "position": "SEO Specialist",
                "salary": 7900,
                "hire_date": "2020-08-14"
            },
            {
                "id": 21,
                "first_name": "Wojciech",
                "last_name": "Duda",
                "department": "IT",
                "position": "Data Scientist",
                "salary": 14000,
                "hire_date": "2022-05-20"
            },
            {
                "id": 22,
                "first_name": "Alicja",
                "last_name": "Jaworska",
                "department": "Finance",
                "position": "Investment Analyst",
                "salary": 9900,
                "hire_date": "2019-06-18"
            },
            {
                "id": 23,
                "first_name": "Sebastian",
                "last_name": "Maciejewski",
                "department": "Sales",
                "position": "Sales Representative",
                "salary": 8600,
                "hire_date": "2021-11-30"
            },
            {
                "id": 24,
                "first_name": "Joanna",
                "last_name": "Sadowska",
                "department": "HR",
                "position": "HR Coordinator",
                "salary": 9100,
                "hire_date": "2018-04-07"
            },
            {
                "id": 25,
                "first_name": "Karol",
                "last_name": "Witkowski",
                "department": "IT",
                "position": "Cloud Engineer",
                "salary": 12700,
                "hire_date": "2023-02-12"
            },
            {
                "id": 26,
                "first_name": "Zuzanna",
                "last_name": "Kaczmarek",
                "department": "Marketing",
                "position": "Brand Manager",
                "salary": 8500,
                "hire_date": "2016-07-05"
            },
            {
                "id": 27,
                "first_name": "Bartosz",
                "last_name": "Piotrowski",
                "department": "IT",
                "position": "Software Engineer",
                "salary": 11500,
                "hire_date": "2020-10-22"
            },
            {
                "id": 28,
                "first_name": "Aleksandra",
                "last_name": "Jasińska",
                "department": "Finance",
                "position": "Financial Planner",
                "salary": 9400,
                "hire_date": "2017-09-13"
            },
            {
                "id": 29,
                "first_name": "Konrad",
                "last_name": "Borkowski",
                "department": "Sales",
                "position": "Sales Director",
                "salary": 12500,
                "hire_date": "2015-12-20"
            },
            {
                "id": 30,
                "first_name": "Martyna",
                "last_name": "Chmielewska",
                "department": "HR",
                "position": "HR Generalist",
                "salary": 8900,
                "hire_date": "2019-05-28"
            },
            {
                "id": 31,
                "first_name": "Tadeusz",
                "last_name": "Zawadzki",
                "department": "IT",
                "position": "UX Designer",
                "salary": 10800,
                "hire_date": "2021-07-01"
            },
            {
                "id": 32,
                "first_name": "Paulina",
                "last_name": "Sikorska",
                "department": "Marketing",
                "position": "Social Media Manager",
                "salary": 8100,
                "hire_date": "2020-02-29"
            },
            {
                "id": 33,
                "first_name": "Krzysztof",
                "last_name": "Nowicki",
                "department": "Finance",
                "position": "Budget Analyst",
                "salary": 9200,
                "hire_date": "2018-06-04"
            },
            {
                "id": 34,
                "first_name": "Weronika",
                "last_name": "Górska",
                "department": "IT",
                "position": "Product Owner",
                "salary": 13100,
                "hire_date": "2023-03-10"
            },
            {
                "id": 35,
                "first_name": "Damian",
                "last_name": "Rutkowski",
                "department": "Sales",
                "position": "Business Development Manager",
                "salary": 11300,
                "hire_date": "2016-11-22"
            },
            {
                "id": 36,
                "first_name": "Natalia",
                "last_name": "Kowalczyk",
                "department": "Marketing",
                "position": "Graphic Designer",
                "salary": 7800,
                "hire_date": "2017-08-15"
            },
            {
                "id": 37,
                "first_name": "Adam",
                "last_name": "Szewczyk",
                "department": "IT",
                "position": "Database Administrator",
                "salary": 11800,
                "hire_date": "2022-09-05"
            },
            {
                "id": 38,
                "first_name": "Emilia",
                "last_name": "Wasilewska",
                "department": "Finance",
                "position": "Risk Analyst",
                "salary": 9300,
                "hire_date": "2019-10-12"
            },
            {
                "id": 39,
                "first_name": "Andrzej",
                "last_name": "Kubiak",
                "department": "HR",
                "position": "Talent Acquisition Manager",
                "salary": 10200,
                "hire_date": "2015-07-30"
            },
            {
                "id": 40,
                "first_name": "Julia",
                "last_name": "Mazur",
                "department": "IT",
                "position": "Software Architect",
                "salary": 14200,
                "hire_date": "2023-06-25"
            },
            {
                "id": 41,
                "first_name": "Maciej",
                "last_name": "Sobczak",
                "department": "Marketing",
                "position": "Copywriter",
                "salary": 7800,
                "hire_date": "2018-01-09"
            },
            {
                "id": 42,
                "first_name": "Ewelina",
                "last_name": "Kołodziej",
                "department": "Finance",
                "position": "Controller",
                "salary": 9500,
                "hire_date": "2020-05-19"
            },
            {
                "id": 43,
                "first_name": "Szymon",
                "last_name": "Wilk",
                "department": "IT",
                "position": "Scrum Master",
                "salary": 12000,
                "hire_date": "2021-12-08"
            },
            {
                "id": 44,
                "first_name": "Natalia",
                "last_name": "Wrona",
                "department": "HR",
                "position": "HR Assistant",
                "salary": 7500,
                "hire_date": "2019-03-25"
            },
            {
                "id": 45,
                "first_name": "Mateusz",
                "last_name": "Orłowski",
                "department": "IT",
                "position": "Network Engineer",
                "salary": 11000,
                "hire_date": "2022-04-18"
            }
        ]
    };
    

    response.send(dataofpea);
})



application.get('/picture/:id', async (request, response) => {
    const id = request.params.id;
    const path_pic = path.join(__dirname, "assets", `${id}.jpg`); 
    if (fs.existsSync(path_pic)) {
        await new Promise(r => setTimeout(r, 1000));
        response.sendFile(path_pic);
      } else {
        response.status(404).send("Image not found");
      }
})




application.post('/user/register', (request, response) => {
    const data = request.body;
    console.log('Received data:', data);
    dataglobal.push(data);
    response.send({
      message: 'Data received successfully',
      receivedData: data,
    });
  });
  application.get('/user/records', (request, response) => {
    console.log('Returning all stored records');
    response.json({
      message: 'All stored user records',
      records: dataglobal,
    });
  });



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
