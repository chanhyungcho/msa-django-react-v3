import '../styles/Login.css'
import { useState } from "react"
import { userLogin } from '../api'
import { useNavigate } from "react-router-dom"

export default function LoginForm(){
    const [inputs, setInputs] = useState({})
    const {user_email, password} = inputs;
    const navigate =  useNavigate() // use는 쓰고 날라감 그래서 23번 라인으로 저장해주는것

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target 
        setInputs({...inputs, [name]: value})
    }
    const onClick = e => {
        e.preventDefault()
        const request = {user_email, password}
        alert(`사용자 이름: ${JSON.stringify(request)}`)
        userLogin(request)
        .then((res)=>{
            localStorage.setItem("loginUser",JSON.stringify(res.data)) // 파이썬에서의 글로벌같은
            alert(`로컬 스토리지에 저장된 정보: ${localStorage.getItem("loginUser")}`)
            navigate("/home")
            // console.log(`Response is ${res.config.data}`)
            // localStorage.setItem('token', JSON.stringify(res.config.data))
        })
        .catch((err)=>{
            console.log(err)
            alert('아이디와 비밀번호를 다시')
        })

    }

    return (
    <>
        EMAIL: <input type="text" name="user_email" onChange={onChange} /><br/>
        PASSWORD: <input type="text" name="password" onChange={onChange} /><br/>
        <button onClick={onClick}> 로그인 </button>
    </>
)}