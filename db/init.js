const {connectToDB} = require("../models/conn")
const Continent = require("../models/continentsModel")
const Country = require("../models/countriesModel")


async function initializeDatabase(){

    try{
        await connectToDB.authenticate()
        await Country.drop()
        await Continent.drop()
        await Continent.sync();
        await Country.sync()

        console.log("The tables have been created successfully")

        return true

    } catch (error){

        console.error("The tables have NOT been created: ", error)
        return false
    }
}

initializeDatabase()