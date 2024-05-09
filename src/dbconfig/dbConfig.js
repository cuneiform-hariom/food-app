import mongoose from "mongoose"



export async function connect() {
    const dbusername = process.env.DBUSERNAME
    const dbpassword = process.env.DBPASSWORD
    const dbname = process.env.DBNAME
    const connectionStr = `mongodb+srv://${dbusername}:${dbpassword}@cluster0.dpwppdy.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`
    try {
        mongoose.connect(connectionStr)
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log("monogDB Connected")
        })
        connection.on('error', (err) => {
            console.log("Mongo after connection error: ", err)
            process.exit()
        })
    } catch (error) {
        console.log("db connection error", error)
    }
}