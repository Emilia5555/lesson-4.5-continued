const { connectToDB, testConnection } = require("./models/conn");
const Continent = require("./models/continentsModel");
const Country = require("./models/countriesModel");

/* 

##########################TODO####################
Homework:

Create three functions: editCountry, deleteCountry, and viewCountryDatabase, which interact with the Country model.

*/
//deleteCountry(3);
//editCountry(4);
viewCountryDatabase();

async function addContinent() {
  let newContinent = {
    name: "Africa",
  };

  await Continent.create(newContinent);
}

async function addCountry() {
  // {id:1, country_name: USA, capital_city: Washington DC, population: 330 mil, continents_id: reference Continents Model/Table -> 5}

  let newCountry = {
    country_name: "South Africa",
    capital_city: "Pretoria",
    population: 52000000,
    continents_id: 1,
  };

  await Country.create(newCountry);
}

async function viewContinentDatabase() {
  let result = await Continent.findAll();

  console.log(JSON.stringify(result));
}

async function deleteContinent(userID) {
  let continentToDelete = {
    id: userID,
  };

  await Continent.destroy({ where: continentToDelete });
}

async function editContinent(userID) {
  let continentToEdit = {
    id: userID,
  };

  let newContinent = {
    name: "Atlantas",
  };

  await Continent.update(newContinent, { where: continentToEdit });
}

async function editCountry(userID) {
  let countryToEdit = {
    id: userID,
  };

  let newCountry = {
    country_name: "puerto rico",
    capital_city: "San Juan",
  };

  await Country.update(newCountry, { where: countryToEdit });
}

async function deleteCountry(userID) {
  let countryToDelete = {
    id: userID,
  };

  await Country.destroy({ where: countryToDelete });
}

async function viewCountryDatabase() {
  let result = await Country.findAll();

  console.log(JSON.stringify(result));
}
