const express = require ('express')
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

// EXERCISE 1

app.get('/greeting', (req, res)=>{
    res.send(`Hello there ${req.query.name}! What a delight is to see you once more!`);
})

// EXERCISE 2

app.get('/roll/:number', (req, res) => {
    const {number} = req.params
        
        if(isNaN (number)) {
        res.send('you must specify with a number');
    } else {
        const num = parseInt(number)
        const rand = Math.floor(Math.random() * (num + 1))
        res.send(`You've rolled a ${rand}!`);
    }
});

// EXERCISE 3

app.get('/collectibles/:index', (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
    
    const index = req.query.index
    const name = req.query.name
    const price = req.query.price

        if( ((index) <2) || ((index) > 0 ) || (isNaN (index)) ) {

            res.send(`This item is not yet back in stock. Check back soon!`)
        } else {
            const index = req.query.index
            const name = req.query.name
            const price = req.query.price
            res.send(`So you want a ${name}? For ${price}, it can be yours!`);
        }
});

// app.get('/collectibles/:index', (req, res) => {
//     const {index} = req.params
//         if( isNaN (index)) || (index) != value.index) {
//             res.send(`This item is not yet back in stock. Check back soon!`)
//         } else {
//             const index=
//             res.send();
//         }
// });

app.listen(3000, () =>{
    console.log('listening on port 3000')
    });