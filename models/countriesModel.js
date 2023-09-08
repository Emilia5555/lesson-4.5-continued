const {DataTypes} = require("sequelize")
const {connectToDB} = require("./conn")
const Continent = require("./continentsModel")

// {id:1, country_name: USA, capital_city: Washington DC, population: 330 mil, continents_id: reference Continents Model/Table -> 5}

const Country = connectToDB.define('country', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    country_name:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    capital_city:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    population:{
        type: DataTypes.INTEGER,
    },
    continents_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'continents',
            key: 'id'
        }
    }
}, {
    timestamps: false
})


Country.belongsTo(Continent, {
    foreignKey: "continents_id",
    // onDelete: 'CASCADE'
})


module.exports = Country