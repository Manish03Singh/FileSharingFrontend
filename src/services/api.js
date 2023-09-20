import axios from 'axios'

const API_URL =  "https://fsbackend-d4n3.onrender.com/"

export const UploadFile = async (data) => {
    try{
        let response = await axios.post(`${API_URL}/upload`, data)
        console.log(API_URL)
        return response
    }
    catch(error){
        console.log(`Error while calling api in UploadFile. Error => ${error}`)
    }
}