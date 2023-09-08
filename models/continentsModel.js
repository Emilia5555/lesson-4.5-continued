const {DataTypes} = require("sequelize")
const {connectToDB} = require("./conn")

// {id:1, name: Africa}
// {id:5, name: North America}

const Continent = connectToDB.define('continent', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Continent