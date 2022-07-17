/** CRUD
* Create
* Read
* Update
* Delete
*/

const express = require('express');

const app = express();

const Deases = require('./Deases');

// console.log("hello Nodemon\n");
// console.log("Bye nodemon\n");
app.post('/deases', Deases.save);
app.get('/deases', Deases.getAll);
app.put('/deases/:id', Deases.update);
app.delete('/deases/:id', Deases.remove);

app.listen(5000, () => {
    console.log(`Server running on port 5000`);
});









// const getPath = require("./utils/test/getPath");

