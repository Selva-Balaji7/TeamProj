import axios from "axios";
//
const axiosHttp=axios.create({
baseURL:window.location.hostname.includes("localhost")? "http://localhost:5180/":"http://www.hematitecorp.com" 
});

// Globle Request Http Request
export const GET=(url,header={})=>{
    return axiosHttp.get(url,{headers:header});
}

export const DELETE=(url,header={})=>{
    return axiosHttp.delete(url,{headers:header});
}
export const POST=(url,payload,header={})=>{
    return axiosHttp.post(url,payload,{headers:header});
}
export const PUT=(url,payload,header={})=>{
    return axiosHttp.put(url,payload,{headers:header});
}