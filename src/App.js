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
        const characterIndex = Math.round(Math.random() * characterListLength)
        password = password +  characterList.charAt(characterIndex)
    }
    return password
    }
    const copyToClipboard = (password) => {
        navigator.clipboard.writeText(password)
    }
    const notify = (message, hasError = false) => {
        if(hasError){
            toast.error(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
             toast(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
             });
        }
    }
    const handleCopyPassword = (e) => {
        if(password === ""){
            notify(COPY_Fail, true)
        }
        else{
            copyToClipboard(password)
            notify(COPY_SUCCESS, true)
        }
    }
    return(
        <div className="App">
          <div className="container">
            <div className="generator">
              <h2 className = "generator__header"> 
                password generator
              </h2>
              <div className="generator__password">
                <h3>{password}</h3>
                <button className="copy__btn">
                   <i onClick={handleCopyPassword} className="far fa-clipboard"></i>
                </button>
              </div>
              <div className="form-group">
                <label htmlFor="password-strength">Password length</label>
              </div>
            </div>
          </div>
        </div>
    )
}