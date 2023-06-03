import React, { useState } from 'react'
import "./App.css"
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './Character'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'
import { COPY_Fail, COPY_SUCCESS } from './message';


const App = () => {
    const [password, setPassword] = useState("")
    const [passwordLength, setPasswordLength] = useState(26)
    const [includeUpperCase, setIncludesUpperCase] = useState(false)
    const [includeLowerCase, setIncludeLowerCase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)
    
    const handleGeneratePassword = () => {
        if(!includeNumbers && !includeUpperCase && !includeLowerCase && !includeSymbols){
            //notify("you must choose of the options at least", true)
        }
        else{
           let characterList = ""
           if (includeNumbers){
               characterList = characterList + numbers
           }
           if (includeUpperCase){
               characterList = characterList + upperCaseLetters
           }
           if (includeLowerCase){
               characterList = characterList + lowerCaseLetters
           }
           if (includeSymbols){
               characterList = characterList + specialCharacters
           }
           setPassword(creatPassword(characterList))
           //notify("password generated successfully", false)
        }
    }
    const creatPassword = (characterList) => {
    let password =""
    const characterListLength = characterList.length
    for (let i = 0 ; i < passwordLength ; i ++){
        
    }
    }
}