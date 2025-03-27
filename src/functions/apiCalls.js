import axios from "axios"

const baseUrl ='https://yahustle.onrender.com' //'http://localhost:5000/api/v1' 
const headers={
    // apiuser:import.meta.env.apiuser,
    // apikey:import.meta.env.apikey
    'Content-Type': 'application/json',
}
export async function Get(endpoint){
    try {
        const config = {
            method: 'get',
            url: baseUrl+`${endpoint}`,
            // url: endpoint,
        }
        const response = await axios(config)
        if(response.status===200) return response
        // response.data.statusCode = response.status
        // resolve(response.data)
    }catch(e){
        console.log(e)
        throw new Error(e);
    }
}
export async function Post(endpoint,data){
    try {
        const config = {
            method: 'post',
            url: baseUrl+`${endpoint}`,
            // url: endpoint,
            headers: headers,
            data: JSON.stringify(data)
        }
        const response = await axios(config)
        if(response.status===200) return response
        // response.data.statusCode = response.status
        // resolve(response.data)
    }catch(e){
        console.log(e)
        throw new Error(e);
    }
}
export async function Payment(data){
    try {
        const config = {
            method: 'post',
            url: baseUrl+`/initiate-pay`,
            // url: endpoint,
            headers: headers,
            data: JSON.stringify(data)
        }
        const response = await axios(config)
        if(response.status===200) return response
        // response.data.statusCode = response.status
        // resolve(response.data)
    }catch(e){
        console.log(e)
        throw new Error(e);
    }
}
export async function PaymentStatus(paymentId){
    try {
        const config = {
            method: 'post',
            url: baseUrl+`/payment_statusy`,
            // url: endpoint,
            headers: headers,
            data: JSON.stringify(data)
        }
        const response = await axios(config)
        if(response.status===200) return response
        // response.data.statusCode = response.status
        // resolve(response.data)
    }catch(e){
        console.log(e)
        throw new Error(e);
    }
}
