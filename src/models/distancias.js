class Distancias {
    static calcula(x1, x2, y1, y2) {
        return Math.sqrt(
            Math.pow((x1 - x2), 2) +
            Math.pow((y1 - y2), 2)
        )
    }
    static incluiMultiplas(arr) {
        //console.log(arr)
        let listaDistancias = []
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 1; j < arr.length; j++) {
                let valor = this.calcula(arr[i].coordenada.lat,
                    arr[i].coordenada.lng,
                    arr[j].coordenada.lat,
                    arr[j].coordenada.lng)
                let trajeto = `${arr[i].endereco} até ${arr[j].endereco}`
                let distaciaFormatada = {
                    intinerario: trajeto,
                    distancia : valor
                }
                listaDistancias.push(distaciaFormatada)
            }
        }
        return listaDistancias;
    }
    static ordenaDistancias(arr) {
        let arrPopulado = this.incluiMultiplas(arr).sort((a, b) => {
            if (a.distancia < b.distancia) {
                return -1;
            }
            else if (a.distancia > b.distancia) {
                return 1;
            }
            else {
                return 0;
            }
        })
        return arrPopulado;
    }
}

module.exports = Distancias;