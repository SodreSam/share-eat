const express = require("express");


const RecepieModel = require('../src/models/recepies.model')
const PlaceModel = require('../src/models/places.model')


const app = express();

const cors = require("cors");

app.use(express.json())

app.use(
    cors({
        origin: "*"
    })
)



//Buscar os pratos registrados na api
app.get('/register', async (request, response) =>{
    
    try {
        const recepies = await RecepieModel.find({});
        response.status(200).json(recepies)
    } catch (error){
        return response.status(500).send(error.message)
    }

});


//Cadastra os pratos na api
app.post('/register', async (request, response) => {
   try{
       const recepie = await RecepieModel.create(request.body);

       response.status(201).json(recepie);
   } catch(error){
       response.status(500).send(error.message);
   }
})

//Cadastro dos lugares na api
app.post('/', async (request, response) => {
    try{
        const place = await PlaceModel.create(request.body);
 
        response.status(201).json(place);
    } catch(error){
        response.status(500).send(error.message);
    }
 })

 app.get('/', async (request, response) =>{
    
    try {
        const place = await PlaceModel.find({});
        response.status(200).json(place)
    } catch (error){
        return response.status(500).send(error.message)
    }

});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));