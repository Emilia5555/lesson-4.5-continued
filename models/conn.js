const {Sequelize} = require("sequelize")

// DB Connection

const connectToDB = new Sequelize("planet", "postgres", "Password1234", {
    host:"localhost",
    dialect: "postgres"
})


async function testConnection(){

    try{
        
        await connectToDB.authenticate() 
        console.log("The connection has been established")
        return true

    } catch (error){

        console.error("Unable to connect to the database ", error)
    }

}


module.exports = {connectToDB, testConnection}
