const ApiGoogle = require("../infra/apiGoogle");
const ModelDistancia = require("../models/distancias")

module.exports = (app) => {
    app.get("/", (req, res) => {
        const queries = req.query;
        const arrValuesQueries = Object.values(queries)
        ApiGoogle.agrupaCoordenadas(arrValuesQueries)
        .then((agrupadas) => {
            res.status(200).json(ModelDistancia.retornaMaiorEMenor(agrupadas))
        })
        .catch((e) => {
                res.status(500).json(e.message)
        })
    })
}
