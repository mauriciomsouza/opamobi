var api = {}

api.lista = function(req, res) {

    var categorias = [
    	{ _id: 1, nome: 'alimentacao' }, 
        { _id: 2, nome: 'viagem' }, 
        { _id: 3, nome: 'design de interface' }, 
        { _id: 4, nome: 'pitch deck' }, 
        { _id: 5, nome: 'email marketing' }, 
        { _id: 6, nome: 'naming' }, 
        { _id: 7, nome: 'cardápio' }, 
        { _id: 3, nome: 'vídeo promocional' }, 
        { _id: 3, nome: 'material comercial' }, 
        { _id: 3, nome: 'letreiro' }, 
        { _id: 3, nome: 'identidade visual' }, 
        { _id: 3, nome: 'comercial' }, 
        { _id: 3, nome: 'design editorial' }
        
    ];

    res.json(categorias)

};

module.exports = api;