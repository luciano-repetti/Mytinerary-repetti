const City = require('../models/cities')

const citiesControllers ={
    getCities: async (req, res) =>{
        let cities;
        let error = null
        try{
            cities = await City.find()
        }catch (err) {error = err}
        res.json({
            response: error ? 'error' : {cities},
            sucess: error ? false : true,
            error: error
        })
    },
    getOneCity: async (req, res) =>{
        const id = req.params.id
        let city
        let error = null
        try{
            city = await City.findOne({_id:id})
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {city},
            sucess: error ? false : true,
            error: error
        })
    },
    addCity: async (req, res) =>{
        const {name, country, description, imgUrl} = req.body.data
        let city
        let error = null
        try{
            city = await new City({
                name: name,
                country: country,
                description: description,
                imgUrl: imgUrl
            }).save()
        }catch(err){error = err}
        res.json({
            response: error ? 'ERROR' : {city},
            sucess: error ? false : true,
            error: error
        })
    },
    modifyCity: async (req, res) => {
        const id = req.params.id
        const city = req.body.data
        let citydb
        let error = null
        try{
            citydb = await City.findOneAndUpdate({_id: id}, city, {new: true})
        }catch(err) {error = err}
        res.json({
            response: error ? 'ERROR' : {city},
            sucess: error ? false : true,
            error: error
        })
    },
    removeCity: async (req, res) => {
        const id = req.params.id
        let city
        let error = null
        try{
            city = await City.findOneAndDelete({_id: id})
        } catch (err) {error = err}
        res.json({
            response: error ? 'ERROR' : {city},
            sucess: error ? false : true,
            error: error
        })
    }
}

module.exports = citiesControllers;