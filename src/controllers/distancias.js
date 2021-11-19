const ApiGoogle = require("../infra/apiGoogle");
const ModelDistancia = require("../models/distancias")

module.exports = (app) => {
    app.get("/", (req, res) => {
        const queries = req.query;
        const arrValuesQueries = Object.values(queries)
        //console.log(arrValuesQueries)
        ApiGoogle.agrupaCoordenadas(arrValuesQueries).then((agrupadas) => {
            res.status(200).json(ModelDistancia.ordenaDistancias(agrupadas))
        });
    })
}
