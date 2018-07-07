module.exports = {
    read: (req, res, next)=>{
        const dbInstance = req.app.get('db');

        dbInstance.get_houses().then(houses=> res.status(200).send(houses))
        .catch((err) => {
			res.status(500).send({ errorMessage: 'Something went wrong!' });
			console.log(err);
         })
        },
        create: (req, res, next)=>{
            const dbInstance = req.app.get('db');
            const {name, address, city, state, zip, url, mortgage, rent} = req.body

            dbInstance.add_house([name, address, city, state, zip, url, mortgage, rent]).then(()=> res.status(200).send({message: "added item to database"}))
            .catch((err) => {
                res.status(500).send({ errorMessage: 'Something went wrong!' });
                console.log(err);
             })
        },
        delete: (req, res, next)=>{
            const dbInstance = req.app.get('db');
            const {id} = req.params

            dbInstance.delete_house([id]).then(()=> res.status(200).send({message: "removed item from database"}))
            .catch((err) => {
                res.status(500).send({ errorMessage: 'Something went wrong!' });
                console.log(err);
             })
        }

    }