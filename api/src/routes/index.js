import Router from 'express'

const router = Router();

router.get('/auth', (req, res) => {
    res.send('Hello World auth');
});

router.post('/token',(req, res)=> {
    // Gest user for DB
    const {id: sub, name} = req.body
    const token = jwt.sign(
        {
            sub,
            name,
            exp: Date.now() + 60 * 1000
        },secret) 
        res.send({"token": token});
})

