import { Path, FormattedDistance, Response } from "../models/ApiModels.js"

class Calculation{
    /**
     * 
     * @param {number} x1 
     * @param {number} x2 
     * @param {number} y1 
     * @param {number} y2 
     * @returns number
     */
    static euclideanDistance(x1, x2, y1, y2){
        return Math.sqrt(
            Math.pow((x1-x2), 2) +
            Math.pow((y1-y2), 2)
        )
    }
    /**
     * 
     * @param {Array<Object>} arr 
     * @returns {Array<Object>}
     */
    static distanceList(arr){
        const list = []
        for (let i = 0; i < arr.length; i++){
            for (let j = 0; j < arr.length; j++){
                let value = this.euclideanDistance(
                    arr[i].coordinate.lat,
                    arr[j].coordinate.lat,
                    arr[i].coordinate.lng,
                    arr[j].coordinate.lng
                )
                let path = new Path(arr[i].address, arr[j].address)
                let formattedDistance = new FormattedDistance(path, value)
                list.push(formattedDistance)
            }
        }
        return list
    }
    /**
     * 
     * @param {Array<Object>} arr 
     * @returns {Array<Object>}
     */
    static orderDistances(arr) {
        let orderList = this.distanceList(arr).sort((a,b) => {
            if(a.distance < b.distance){
                return -1
            } else if(a.distance > b.distance) {
                return 1
            } else {
                return 0
            }
        })
        return orderList
    }
    /**
     * 
     * @param {Array<Object>} arr 
     * @returns Object
     */
    static distanceMaxMin(arr){
        let orderDistances = this.orderDistances(arr)
        let remove = 0;
        orderDistances = orderDistances.filter((item) => {
            return item.distance !== remove
        })
        let max = orderDistances.length - 1
        return new Response(orderDistances[0], orderDistances[max])
    }
}

export default Calculation;