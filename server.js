const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001

const app = express();

//parse incoming string or array data
app.use(express.urlencoded({extended:true}));
//parse incoming json data
app.use(express.json());

app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () =>{
    console.log('Server now live on port 3001!');
});