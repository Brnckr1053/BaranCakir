const express = require('express');
const faker = require('faker');

const app = express()
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}))

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
};

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.street = faker.address.streetName();
        this.address = {
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}


app.get('/',(req,res)=>{
    console.log(req)
    res.json({message: "Hello World"})
})

app.get('/api/users/new',(req,res)=>{
        res.json(new User());
});

app.get('/api/companies/new',(req,res)=>{
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json([new User(), new Company()]);
});

// app.post('/api/users/new',(req,res)=>{
//     // console.log(req)
//     console.log(req.body)
//     User.push(req.body)
//     res.json("Thank you for data")
// });

// app.post('/api/companies/new',(req,res)=>{
//     // console.log(req)
//     console.log(req.body)
//     Company.push(req.body)
//     res.json("Thank you for data")
// });

app.listen(port, () => console.log(`Listening on port: ${port}`))