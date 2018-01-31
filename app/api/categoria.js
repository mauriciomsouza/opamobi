var api = {}

api.lista = function(req, res) {

    var categorias = [
    	{ _id: 1, nome: 'alimentacao' }, 
        { _id: 2, nome: 'viagem' }, 
        { _id: 3, nome: 'saude' }, 
        { _id: 4, nome: 'entretenimento' }, 
        { _id: 5, nome: 'artes' }, 
        { _id: 6, nome: 'passeio' }, 
        { _id: 7, nome: 'cinema' }, 
        { _id: 3, nome: 'bares' }, 
        { _id: 3, nome: 'financeiro' }, 
        { _id: 3, nome: 'esportes' }, 
        { _id: 3, nome: 'mercado' }, 
        { _id: 3, nome: 'estacionamento' }, 
        { _id: 3, nome: 'pet' }
        
    ];

    res.json(categorias)

};

module.exports = api;