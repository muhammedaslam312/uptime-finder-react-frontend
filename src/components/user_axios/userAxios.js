import axios from "axios"

import BaseUrl from "../../BaseUrl"

export const getAllUrls= ()=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.get(BaseUrl+'monitors/').then((response)=>{
            console.log(response.data);
            console.log("getallurls Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getallurls Axios Not working");
            reject(err)
         })
        })
}

export const removeUrl = (id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.delete(BaseUrl+'monitors/'+id+'/',).then((response)=>{
            console.log(response.data);
            console.log("delete Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("delete Axios Not working");
            reject(err)
         })
        })
}

export const getAllDetails= (url_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.get(BaseUrl+'requests/'+url_id+'/',).then((response)=>{
            console.log(response.data);
            console.log("getallurls Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getallurls Axios Not working");
            reject(err)
         })
        })
}

export const getAllDeleteUrl= ()=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.get(BaseUrl+'delete_url/',).then((response)=>{
            console.log(response.data);
            console.log("getallurls Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getallurls Axios Not working");
            reject(err)
         })
        })
}
