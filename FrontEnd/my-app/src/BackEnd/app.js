const express = require("express")
const mongoose = require('mongoose')
const User = require('./models/user.model')
const Payment = require('./models/payment.model')
const bcrypt = require('bcrypt');
const mongouri = "mongodb://localhost:27017/lab1db"
// app service 
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.send('Hello World, the winner team');
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        
        // validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        // find user by id
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



app.post('/register',  async (req, res) => {


    try{
        let userParam = req.body;
        if (await User.findOne({ email: userParam.email })) {
            res.send( 'email "' + userParam.email + '" is already exist');
        }
        const user = new User(userParam);
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        userParam.password = await bcrypt.hash(userParam.password, saltRounds);
        // save user
         await user.save();
         res.send("user added successfully ")

    }catch(err)
    {
        res.status(500).send('server error: '+ err);
    }
    
});

app.post('/user/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send('user not found');
        }
        const isMatch = await password === user.password;
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        const token = user.generateAuthToken();
        res.status(200).send({ user, token });
        console.log('Login successful');
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log('Login failed', error.message);
    }
});


app.post('/user/addPayment', async (req, res) => {
    try {
        const { email, card_number, cvc, exp_month, exp_year } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const existingPayment = await Payment.findOne({ card_number, user: user._id });
        if (existingPayment) {
            return res.status(400).send('This payment already exists');
        }
        const payment = new Payment({
            card_number,
            cvc,
            exp_month,
            exp_year,
            user: user._id
        });

        
        await user.payments.push(payment);
        await user.save();

        res.status(201).send('Payment added successfully');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




mongoose.set("strictQuery", false)
mongoose
.connect('mongodb://127.0.0.1:27017/lab2db')
.then(() => {
    console.log('connected to MongoDB')
    //listen on specific port 
    app.listen(8000, () => console.log('app started on port 8000'))
}).catch((error) => {
    console.log('cant connect to mongodb'+error)
})
