import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import TestPage from './TestPage'
import Header from './components/Header'

function App() {
    return(
        <>
        <h1>Hello there!</h1>
        <Header />
        <TestPage />
        </>
    )
}

export default App
