import connectDB from "./db/index.js";
import app from "./app.js"

const PORT = process.env.PORT || 8000;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log("Server is Running on port ", PORT);
    })
})
.catch((err) => {
    console.log("DB Connection Failed !!! ", err);
})