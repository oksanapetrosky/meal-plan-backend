const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 4000 || process.env.port

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('We were connected to Mongo'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I am listening on PORT ${PORT}`)
})

//user: oksanapetrosky: password: 20rBIOwJufNFo2y0
//Your current IP address (96.40.74.125) has been added to enable local connectivity. Only an IP address you add to your Access List will be able to connect to your project's clusters. Add more later in 
//Network Access

//mongodb+srv://oksanapetrosky:<db_password>@cluster0.cttvv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0