const mongoose = require('mongoose');

const dbName = "DoshinkanTraining";
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {console.log("You are connect to the database and ready to train!")})
    .catch((err => {console.log("Something went wrong connecting to the database! Try again!", err)}));