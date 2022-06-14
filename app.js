const express = require('express')
const app = express()
const PORT = 3000

const db = require('./models/index')

app.use(express.json())

app.get('/home', (_, res) => { 
    res.send('Hello world')
})

app.get('/products', async (_, res) => { 
    try {
        const products = await db.Product.findAll();
        return res.send(products)
    } catch(error) {
        res.send('Deu algum BO na busca');
    }
})

app.post('/products', async (req, res) => {
    const data = req.body;
     
    try {
        await db.Product.create({
            name: data.name,
            description: data.description,
            product_type: data.product_type,
            preco: data.preco
        });

        res.send('registro criado')
    } catch(e) {
        res.send('Deu algum bo na criacao')
    }
})

app.put('/products/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body;
     
    try {
        await db.Product.update({
            name: data.name,
            description: data.description,
            product_type: data.product_type,
            preco: data.preco
        }, {
            where: {
                id: id
            }
        })

        res.send('registro atualizado')
    } catch(e) {
        res.send('Deu algum bo na atualizacao')
    }
})

app.delete('/products/:id', async (req, res) => {
    const id = req.params.id
     
    try {
        await db.Product.destroy({
            where: {
                id: id
            }
        })

        res.send('registro deletado')
    } catch(e) {
        res.send('Deu algum bo na delecao')
    }
})

app.listen(PORT, () => { console.log('server is running') })