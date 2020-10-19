const controller ={
    criatingProduct: (req, res) => {
        res.send('Criating Prodoct');
    },

    deletingProduct: (req, res) =>{
        const {id} = req.params;

        res.send('Deleting the product number ' + id)
    }

};



module.exports = controller;