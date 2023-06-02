import React, {useState} from 'react'
import "./App.css"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './Character'
import { COPY_Fail, COPY_SUCCESS } from './message';

const App () => {
    const [password, setPassword] = useState("")
    const [passwordLength, setPasswordLength] = useState(26)
    const [includeUpperCase, setIncludesUpperCase] = useState(false)
    const [incluseNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)
    
    const handleGeneratePassword = () => {
        
    }
}