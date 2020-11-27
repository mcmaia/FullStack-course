const HomeController = {
    index: (req, res) => {

        let info = { 

            titulo: 'Digital House',
            cursos: ['Full Stack', ' Mobile Android', ' Mkt Digital']
        };

        return res.render('index', info);
    }

};



module.exports = HomeController;