import axios from 'axios'
import BASE_URL from '../helperURL'

export const UploadFile = async (data) => {
    try{
        let response = await axios.post(`${BASE_URL}/upload`, data)
        //console.log(BASE_URL)
        return response
    }
    catch(error){
        console.log(`Error while calling api in UploadFile. Error => ${error}`)
    }
}