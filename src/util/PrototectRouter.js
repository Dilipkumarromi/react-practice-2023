import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PrototectRouter(props) {
    const Components=props
    const navigation=useNavigate()
   useEffect(()=>{
    const islogin=localStorage.getItem('islogin')   
    if(!islogin) {
        navigation('/Login')
    }
   })
  return (
    <div>
        <Components/>
    </div>
  )
}
