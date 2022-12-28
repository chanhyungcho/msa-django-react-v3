import {server} from 'context'
const nlpService = {
    classifyPositiveAboutReview
}
function handleResponse(response){ 
    return response.text()
        .then(text =>{
            const data = text && JSON.parse(text)
            if(!response.ok){
                if(response.status === 401){
                    window.location.reload()
                }
                const error = (data && data.message) ||
                    response.statusText
                return Promise.reject(error)
            }
            return data
        })
    }

async function getclassifyPositiveAboutReview(id){
    const res = await fetch(`${server}exrc/nlp/naver-movie-review?id=${id}`)
    .then(handleResponse)
    .then(data => JSON.stringify(data))
    .catch((error) => {
        alert('error :::: '+error);
    });
    return Promise.resolve(res)
}

async function classifyPositiveAboutReview(id){
    const requestOption = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(id)
    }
    const res = await fetch(`${server}exrc/nlp/naver-movie-review`, requestOption)
    .then(handleResponse)
    .then(data => JSON.stringify(data))
    .catch((error) => {
        alert('error :::: '+error);
    });
    return res
}

export default nlpService