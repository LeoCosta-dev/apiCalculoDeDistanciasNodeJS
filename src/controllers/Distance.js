import ApiService from "../services/apiService.js";
import Calculation from "../utils/calculation.js";

class Distance{
    static router(app){
        app.get("/", async (req, res) => {
            const queries = req.query
            const queriesValues = Object.values(queries)
            
            ApiService.groupedCoordinates(...queriesValues).then((response) => {
                const result = Calculation.distanceMaxMin(response)
                res.status(200).json(result)
            }).catch((e)=>{
                res.status(400).json(e.message)
            })
        })
    }
}

export default Distance;