import { useState } from "react"
import nlpService from "../api"
const Imdb = () => {
    const [report, setReport] = useState()

    const onPostClick = e => {
        e.preventDefault()
        nlpService.classifyPositiveAboutReview(id).then(res => {
            const json = JSON.parse(res) 
            setReport(json['result']) //set으로해서 movie에 들어감
        })
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }


    const [inputs, setInputs] = useState({})
    const {id} = inputs
    const onChange = e => {
      e.preventDefault()
      const {value, name} = e.target
      setInputs({...inputs, [name]: value})
    }
    // const onGetClick = e => {
    //     e.preventDefault()
    //     nlpService.getImdb(id)
    //     let arr = document.getElementsByClassName('box')
    //     for(let i=0; i<arr.length; i++) arr[i].value = ""
    
    return(<>
    <form method="post">
    <h1>네이버 영화 리뷰 판단</h1>
    <p>리뷰를 입력하시면 긍정도가 출력됩니다.</p>
    <input type="text" className="box" placeholder="테스트할 리뷰" name="id" onChange={onChange}/>
    <button onClick={onPostClick}>리뷰 판단</button>
    </form>
    <table className='type1'>
        <thead>
            <tr>
                <th>입력한 리뷰</th><th>긍정도</th>
            </tr>
        </thead>
        <tbody>
        {report && (({review,result})=>(
            <tr key = {review}><td>{review}</td><td>{result}</td></tr>
            ))}
        
        </tbody>
    </table> 
    </>)
}
export default Imdb