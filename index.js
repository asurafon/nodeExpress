const express = require('express');
const app = express();
app.use(express.json());


const books = [
    {car: 'BMW', id: 1},
    {car: 'Mazda', id: 2},
    {car: 'Toyota', id: 3}
];

app.get('/api/books', (req,res)=> {
    res.send(books);
});

app.post('/api/books', function(request, response){
    console.log(request.body);      // your JSON
     response.send(request.body);    // echo the result back
  });

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
