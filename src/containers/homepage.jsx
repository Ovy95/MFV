import React, { Component ,useState} from "react";
import styled from "styled-components";
import {filterDataByLanguages,filterToFavouriteLanguage} from "../components/filterRequest"

const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding: 0;
text-align: center;
`;


export function HomePage(props) {

  const [req, setRequests] = useState([])
            // This allows for seeting name 
  const [name, setName] = useState('');

  let url = 'https://api.github.com/users/'+name+'/repos'

    const handleSubmit = (e) => {
      e.preventDefault();
      getapi(url)
    }

    async function getapi(url) {
      // Storing response 
    const response = await fetch(url)
    // Storing data in form of JSON 
    var data = await response.json()
    let filterdata = filterDataByLanguages(data)
    console.log(filterdata)
    let language = filterToFavouriteLanguage(filterdata)
    setRequests(language)
  }
  
 
    return(
      <PageContainer>
        <form onSubmit = {handleSubmit}>
            <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
            <button type = 'submit'>Click to submit</button>
        </form>

        <h1>Hellow World</h1>
        <div>

        { 
          req
          //req.map(post => <div key={post.id}>{post.language} </div>) :null
        }
        </div>
        <h2>
         {name}'s favourite language to use is {req}
        </h2>

      </PageContainer>
    );
    
}


  