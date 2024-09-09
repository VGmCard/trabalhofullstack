const { Pessoa } = require('../models');
const Pessoa = require('../models/pessoa');


exports.createPessoa = async (req, res) => {
    try {
        const { Nome, CPF, Telefone } = req.body;

        const novaPessoa = await Pessoa.create({
            Nome,
            CPF,
            Telefone
        });

        res.status(201).json(novaPessoa);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao criar pessoa",
            details: error.message
        });
    }
};


exports.getAllPessoas = async (req, res) => {
    try {
        const pessoas = await Pessoa.findAll();
        res.status(200).json(enderecos);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao buscar pessoas",
            details: error.message
        });
    }
};


exports.getPessoaById = async (req, res) => {
    try {
        const { Id } = req.params;
        const pessoa = await Pessoa.findByPk(Id);

        if (!pessoa) {
            return res.status(404).json({ error: "Pessoa não encontrada" })
        }

        res.status(200).json(endereco);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao buscar pessoa",
            details: error.message
        });
    }
};


exports.updatePessoa = async (req, res) => {
    try {
        const { Id } = req.params;
        const { Nome, CPF, Telefone } = req.body;

        const pessoa = await Pessoa.findByPk(Id);

        if (!pessoa) {
            return res.status(404).json({
                error: "Pessoa não encontrada"
            });
        }

        pessoa.Nome = Nome;
        pessoa.CPF = CPF;
        pessoa.Telefone = Telefone;

        await pessoa.save();

        res.status(200).json(pessoa);
    } catch (error) {
        res.status(500).json({
            erorr: "Erro ao atualizar dados",
            details: error.message
        });
    }
};

exports.deletePessoa = async (req, res) => {
    try {
        const { Id } = req.params;

        const pessoa = await Pessoa.findByPk(Id);

        if (!pessoa) {
            return res.status(404).json({
                error: "Cadastro não encontrado"
            })
        }

        await pessoa.destroy();

        res.status(204).send(); //Sem conteúdo, pois foi deletado com sucesso 
    } catch (error) {
        res.status(500).json({
            error: "Erro ao deletar cadastro", 
            details: error.message
        });
    }
};