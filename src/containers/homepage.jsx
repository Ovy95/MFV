import React, { Component ,onChange,state,useState} from "react";
import styled from "styled-components";
import axios from 'axios'
import GetList from "../containers/classes";


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
      // aptRequest(name)
        e.preventDefault();
      console.log(url)
      getapi(url)
        console.log(`${name}`)
        console.log(req)
    }

    // const aptRequest = (name) => {
    //   axios.get('https://api.github.com/users/'+name+'/repos')
    //     .then(response =>{
    //       console.log(response)

    //       setRequests(response)
    //     })
    //     console.log(req)
    // }

    async function getapi(url) {
      // Storing response 
    const response = await fetch(url)
    // Storing data in form of JSON 
    var data = await response.json()
    setRequests(data)
    console.log(data)
    console.log(req)
  }

 
 
    return(
      <PageContainer>
        <form onSubmit = {handleSubmit}>
            <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
            {/* <input onChange = {(e) => aptRequest(e.target.value)} value = {name}></input> */}
            <button type = 'submit'>Click to submit</button>
        </form>

        <h1>Hellow World</h1>
        <div>
        { req.length ?
          req.map(post => <div key={post.id}>{post.language} </div>) :null
        }
        </div>
        <h2>
          newlsit
        </h2>

      </PageContainer>
    );
    
}


  