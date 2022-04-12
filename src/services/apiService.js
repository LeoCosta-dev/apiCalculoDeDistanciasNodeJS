import axios from "axios"
import { LocationModel } from "../models/ApiModels.js"
import * as dotenv from "dotenv"
dotenv.config()

class ApiService{
    /**
     * 
     * @param {string} address 
     * @returns Object
     */
    static async geolocation(address){
        const urlCode = encodeURIComponent(address)
        const apiKey = process.env.API_KEY
        const request = (await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlCode}&key=${apiKey}`)).data
        return new LocationModel(request.results[0].geometry.location, address)
    }
    /**
     * 
     * @param  {...any} params 
     * @returns {Array<Object>}
     */
    static async groupedCoordinates(...params) {
        const grouped = []
        for(let i = 0; i < params.length; i++){
            let address = await this.geolocation(params[i])
            grouped.push(address)
        }
        return grouped
    }
}

export default ApiService;