import React from 'react'
// import { useState } from 'react';
import '../../Styles/layout.css'
import symtoms from '../../Assets/symtoms.png'

// import { Link } from 'react-router-dom';
// import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import MultiStepForm from './MultiStepForm';
const Layout = () => {

    // const [inputValues, setInputValues] = useState({
    //     mdvpFo: '',
    //     mdvpFhi: '',
    //     mdvpFlo: '',
    //     mdvpJitterPercent: '',
    //     mdvpJitterAbsolute: '',
    // });

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setInputValues((prevValues) => ({
    //         ...prevValues,
    //         [name]: value,
    //     }));
    // };


  return (
    <div className='layout-container'>
        <div className='layout-header' >
            <h1 className='layout-Header'>Parkinson's Prediction</h1>
            <h3 className='layout-subheader'>Please provide the required information to generate a prediction.</h3>
        </div>
        <div className='layout-main-container'>
            <div className='layout-main-left'>
            <p className='layout-main-left-asymtoms'>Clinical Symptoms</p>
                <div className=''>
                
                    <img src={symtoms} alt='symtoms' className='layout-main-left-symtoms-image'/>
                </div>
            </div>
            <div className="layout-main-right">
                <form className="layout-main-right-form">
                   <MultiStepForm/>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Layout