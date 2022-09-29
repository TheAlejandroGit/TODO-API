const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'server ok' });
})




app.listen(8000,()=>{
    console.log('Server is running at port 8000');
})