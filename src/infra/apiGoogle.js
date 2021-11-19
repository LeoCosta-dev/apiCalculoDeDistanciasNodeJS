const axios = require("axios");

class ApiGoogle {
    static async coordenadas(enderecos) {
        const endCod = encodeURIComponent(enderecos)
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${endCod}&key=${process.env.CHAVE_API}`)
        return { coordenada: response.data.results[0].geometry.location, endereco: enderecos };
    }
    static async agrupaCoordenadas(...parametros) {
        let agrupadas = []
        console.log(parametros)
        for (let i = 0; i < parametros[0].length; i++) {
            let endereco = await this.coordenadas(parametros[0][i])
            //console.log(endereco)
            agrupadas.push(endereco)
        }
        return agrupadas;
    }

}


module.exports = ApiGoogle;
