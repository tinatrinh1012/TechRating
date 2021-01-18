import React, { useState } from 'react'
import axios from 'axios'


function Navbar() {

    const[deviceName, setDeviceName]=useState('')
    const[registeredDevice, setRegisteredDevice]=useState('')


    function registerDevice(event) {
        event.preventDefault()

        var device = {
            name: deviceName
        }

        axios.post('/api/user/register-device', device)
        .then(res=>{
            console.log('Register successfull')
            setRegisteredDevice(res.data)
        }).catch(err=>{
            console.log('Register failed')
        })
    }

    return <div>

        <h1>Tech Rating App</h1>

        <form onSubmit={registerDevice}>

            <input type="text" placeholder="Device name" className="form-control" value={deviceName}
            onChange={(e)=>{setDeviceName(e.target.value)}}/>

            <input type="submit" value="Register your device" className="btn btn-dark"/>

        </form>

        <h3>The registered device is {registeredDevice}</h3>
        
    </div>
}

export default Navbar