import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Input from './Input'
import { addtodo, deletetodo, gettodo, taggle } from './Todoapi'

const Todo = () => {
  const [loading,setloading]=useState(false)
  const [error,seterror]=useState(false)
    const [todo,settodo]=useState([])
    const [page,setpage]=useState(1)

    useEffect(()=>{
        setloading(true)
           gettodo({}).then((res)=>{
            settodo(res.data)
            setloading(false)
            seterror(false)
           }).catch((res)=>{
            seterror(true)
           })
    },[])

    const handlegettodo=()=>{
          setloading(true)
          gettodo({}).then((res)=>{
              settodo(res.data)
              setloading(false)
              seterror(false)
          }).catch((res)=>{
            setloading(false)
            seterror(true)
          })
    }


    const handletaggle=(id,status)=>{
        taggle(id,status).then((res)=>{
            handlegettodo()

        }).catch((res)=>{
            setloading(false)
            seterror(true)
        })
    }
    const add=(value)=>{
        setloading(true)
        addtodo(value).then((res)=>{
            handlegettodo()
            setloading(false)
            seterror(false)
        }).catch((res)=>{
            seterror(true)
            setloading(false)
        })
    }
         const handledelete=(id)=>{
            setloading(true)
            deletetodo(id).then((el)=>{
                handlegettodo()
                setloading(false)
            }).catch((el)=>{
                seterror(true)
                setloading(false)
            })
         }
  return (
    <div>{loading && <div>...loading</div>}
         {error && <div>...error</div>}
          
         <Input add={add}/>
         <p>TODO LIST</p>

           {todo.map((el)=>(
            <div style={{display:"flex",justifyContent:"space-between",width:"30%",margin:"auto",border:"1px solid grey",height:30,borderRadius:5,marginTop:5}}><div>{el.title}</div>
            <div>{el.status?"DONE":"NOTDONE"}</div><div><button onClick={()=>handletaggle(el.id,el.status)}>taggle</button></div>
            <div><button onClick={()=>handledelete(el.id)}>delete</button></div></div>
          
          ))}
    </div>
  )
}

export default Todo