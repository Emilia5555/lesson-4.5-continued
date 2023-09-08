const Continent = require("../models/continentsModel")
const Country = require("../models/countriesModel")


addMultipleContinents()
addMultipleCountries()


async function addMultipleCountries(){

    let list = [
        // Africa
        { country_name: 'Egypt', capital_city: 'Cairo', population: 10450000, continents_id: 1 },
        { country_name: 'Nigeria', capital_city: 'Abuja', population: 3051000, continents_id: 1 },
    
        // Asia
        { country_name: 'China', capital_city: 'Beijing', population: 21540000, continents_id: 2 },
        { country_name: 'India', capital_city: 'New Delhi', population: 21650000, continents_id: 2 },
    
        // Europe
        { country_name: 'Germany', capital_city: 'Berlin', population: 3748000, continents_id: 3 },
        { country_name: 'France', capital_city: 'Paris', population: 2148000, continents_id: 3 },
    
        // North America
        { country_name: 'USA', capital_city: 'Washington D.C.', population: 705749, continents_id: 4 },
        { country_name: 'Canada', capital_city: 'Ottawa', population: 934243, continents_id: 4 },
    
        // South America
        { country_name: 'Brazil', capital_city: 'Brasília', population: 3015268, continents_id: 5 },
        { country_name: 'Argentina', capital_city: 'Buenos Aires', population: 2890150, continents_id: 5 },
    
        // Australia/Oceania
        { country_name: 'Australia', capital_city: 'Canberra', population: 395800, continents_id: 6 },
        { country_name: 'New Zealand', capital_city: 'Wellington', population: 215000, continents_id: 6 }
    ]

    await Country.bulkCreate(list)

}

async function addMultipleContinents(){

    let list = [
        {
            name: 'Africa'
        },
        {
            name: 'Asia'
        },
        {
            name: 'Europe'
        },
        {
            name: 'North America'
        },
        {
            name: 'South America'
        },
        {
            name: 'Australia/Oceania'
        },
        {
            name: 'Antarctica'
        },
    ]

    await Continent.bulkCreate(list)

}