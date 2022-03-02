const express = require('express')

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var port = 5000


app.post('/bfhl',(req,res)=>{
    const data = req.body.data;

    const alphabets = [];
    const numbers = [];

    data.forEach(element => {
        let number = +(element);
        if(isNaN(number)){
            alphabets.push(element);
        }else{
            numbers.push(element);
        }
    });

    const response_data = {
        is_success : true,
        user_id : "aditi_vashisht_20022001",
        email:"aditi1108.cse19@chitkara.edu.in",
        roll_number:1910991108,
        numbers:numbers,
        alphabets:alphabets
    }
    res.send(response_data)
})

app.listen(port, function () {
    console.log(`Example app listening at ${port}`);
})

