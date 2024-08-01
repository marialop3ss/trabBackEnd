module.exports = {
    development: {
        client: "pg", 
        connection: {
            host:process.env.ep-tight-glade-a5b21xt1.us-east-2.aws.neon.tech,
            database: process.env.bancoloja,
            user: process.env.bancoloja_owner,
            password: process.env.QF5SGptAalh0,
            ssl:true,
        }
    }
};
