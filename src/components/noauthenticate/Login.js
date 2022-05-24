import { useState } from 'react';
import style from './Login.module.css'

export const Login = ({ signIn, openNotification }) => {
    const [dataForm, setDataForm]=useState({
        email:'',
        password:''
    })

    const handleEmail =(e)=>{
        setDataForm({...dataForm, email:e.target.value})
    }
    const handlePassword =(e)=>{
        setDataForm({...dataForm, password:e.target.value})
    }

    return (
        <div className={style.loginContainer}>
            <h2>Login</h2>
           <form onSubmit={(e)=>{
               e.preventDefault()
               signIn(dataForm.email, dataForm.password)
               .then(userCredential=>{
                openNotification(userCredential.user, 'success')
               })
               .catch(error=>{
                openNotification(error)
               })
           }}>
            <input placeholder='email' onChange={handleEmail}></input>
            <input placeholder='password' onChange={handlePassword} type='password'></input>
            <button type='submit'>Entrar</button>
           </form>
        </div>
    );
}
