import fetch from 'node-fetch';
import express from 'express';

const app = express();



app.get('/', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        // res.json(data);

        //filtering data
        // const filteredData = data.filter(p => p.userId == 1 & p.id==6);
        // res.json(filteredData);

        const sortedData = data.sort((a,b) => a.title.localeCompare(b.title));
        res.json(sortedData);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });


  // app.get('/search', (req, res) => {
  //   const { title, userId } = req.query; // Get the search parameters from the request URL query
  
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(data => {
  //       let filteredData = data;
  
  //       // Perform search based on title
  //       if (title) {
  //         filteredData = filteredData.filter(post => post.title.toLowerCase().includes(title.toLowerCase()));
  //       }
  
  //       // Perform search based on userId
  //       if (userId) {
  //         filteredData = filteredData.filter(post => post.userId.toString() === userId);
  //       }
  
  //       res.json(filteredData);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       res.status(500).json({ error: 'Internal Server Error' });
  //     });
  // });
  
  
app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});
  