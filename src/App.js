import React, {useState} from 'react'
import "./App.css"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './Character'
import { COPY_Fail, COPY_SUCCESS } from './message';