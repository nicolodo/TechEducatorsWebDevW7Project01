import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import CRUDTest from './components/CRUDTest/CRUDTest'

import {Create, Read} from './components/CRUDTest/CRUDTest'

function App() {
    return(
        <>
        <h1>Hello there!</h1>
        {/* <CRUDTest /> */}
        <Create /> 
        <Read />
        </>
    )
}

export default App
