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
    
    // const index = parseInt(req.params.index)
    // const name = req.params.find(collectibles.index.name)

    const index = parseInt(req.params.index)
    const name = collectibles [index].name
    const price = collectibles [index].price
    // const price = req.params.index.price
    //   const name = req.params.name
    //   const price = req.params.price

            if (index >= 0 && index <= collectibles.length) {

                // console.log('yes');
                // console.log(index);
               
                res.send(`So you want a ${name}? For $${price}, it can be yours!`);
            } else {
                res.send(`This item is not yet back in stock. Check back soon!`)
                // console.log ('no')
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

// exercise 4

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

const type = shoes[index].type
const indexShoes = parseInt(req.params.index)


app.get('/shoes/', (req, res) => {
    console.log('this works');
})

//     for (let indexShoes = 0; index <= indexShoes.length; indexShoes++) {
//         if(type = 'sandal'){
//         console.log('this works');
//         }
//     }
// });

app.listen(3000, () =>{
    console.log('listening on port 3000')
    });
    
    // res.send(shoes)