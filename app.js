const express = require('express')
const app = express()
const PORT = 3000

const db = require('./models/index')

app.get('/home', (_, res) => { 
    res.send('Hello world')
})

app.get('/products', async (_, res) => { 
    try {
        const products = await db.Product.findAll({
            where: {
                name: 'lava e seca'
            }
        });
        return res.send(products)
    } catch(error) {
        res.send('Deu algum BO na busca');
    }
})

app.listen(PORT, () => { console.log('server is running') })