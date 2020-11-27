let contatos = [
    {
      'id': 1,
      'nome': 'Victor Torres',
      'email': 'vtorres@digitalhouse.com',
      'mensagem': 'Primeira mensagem',
    },
    {
      'id': 2,
      'nome': 'Victor Torres',
      'email': 'murilo@digitalhouse.com',
      'mensagem': 'Segunda mensagem',
    },
    {
      'id': 3,
      'nome': 'Victor Torres',
      'email': 'victor@digitalhouse.com',
      'mensagem': 'Terceira mensagem',
    },
  ];
  

const contatoController = {
    registrar (req, res, next) {
        let id = contatos.length + 1
        let contato = {id, ...req.body}
        contatos.push(contato);
        res.send(contatos);
    },

    listar(req, res, next) {
      res.render('contatos', { contatos: contatos })
    }

};

module.exports = contatoController;


