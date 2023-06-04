import React, { useState } from 'react'
import "./App.css"
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './Character'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'
import { COPY_Fail, COPY_SUCCESS } from './message';


const App = () => {
    const [password, setPassword] = useState("")
    const [passwordLength, setPasswordLength] = useState(26)
    const [includeUpperCase, setIncludeUpperCase] = useState(false)
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
                <input className="pw" defaultValue={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} type="number" id="password-stregth" name="password-strength" max="26" min="8" />
              </div>
              <div className="form-group">
                <label htmlFor="uppercase-letters">Add Uppercase Letters</label>
                <input checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)} type="checkbox" id="uppercase-letters" name="uppercase-letters" />
              </div>
              <div className="form-group">
                <label htmlFor="lowercase-letters">Add Lowercase Letters</label>
                <input checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} type="checkbox" id="lowercase-letters" name="lowercase-letters" />
              </div>
              <div className="form-group">
                <label htmlFor="include-numbers">Include Numbers</label>
                <input checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} type="checkbox" id="include-numbers" name="include-numbers" />
              </div>
              <div className="form-group">
                <label htmlFor="include-symbols">Include Symbols</label>
                <input checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} type="checkbox" id="include-symbols" name="include-symbols" />
             </div>
             <button onClick={handleGeneratePassword} className="generator__btn">
                Generate Password
             </button>
            </div>
          </div>
        </div>
    )
}