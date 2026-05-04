const Veiculo = require('../models/Veiculo')

const cadastrar = async(req, res)=>{
    const valores = req.body
    console.log('Dados do front = ', valores)

    try{
        await Veiculo.create(valores)
        res.status(201).json({message: 'Veículo cadastrado com sucesso!'})
    }catch(err){
        res.status(500).json({message: 'Não foi possível cadastrar o veículo'})
        console.error('Não foi possível cadastrar o veículo', err)
    }

}

const listar = async(req, res)=>{
    try{
        const veiculos = await Veiculo.findAll()
        res.status(201).json(veiculos)
    }catch(err){
        res.status(500).json({message: 'Não foi possível listar os veículos'})
        console.error('Não foi possível listar os veículos', err)
    }
}

module.exports = {cadastrar, listar}
