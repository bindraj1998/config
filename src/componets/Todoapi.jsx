import Axios from "axios"


const axios=Axios.create({baseURL:"http://json-server-mocker-masai.herokuapp.com"})

export  const gettodo=({page=1,limit=5})=>{
    return axios.get("/tasks",{
       
        params:{_page:page,_limit:limit}

    }).then((res)=>{
        return {data:res.data,link:res.headers.link}
    })
}

export const taggle=(id,status)=>{

    const config={
       url:`/tasks/${id}`,
       method:"patch",
       data:{status:!status}

    }
    return axios(config)
}

export const addtodo=({title,status})=>{
    const config={
       url:"/tasks",
       method:"POST",
       data:{title,status}

    }
    return axios(config)
}
 export const deletetodo=(id)=>{
    const config={url:`/tasks/${id}`,
    method:'delete',

  
}
return axios(config)
 }