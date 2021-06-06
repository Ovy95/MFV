import React, { Component ,onChange,state,useState} from "react";
import styled from "styled-components";
import axios from 'axios'

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


    const handleSubmit = (e) => {
        e.preventDefault();
        aptRequest(name)
        // console.log(`${name}`)
        // console.log(req)
    }

    const aptRequest = (name) => {
      axios.get('https://api.github.com/users/'+name+'/repos')
        .then(response =>{
          console.log(response)
          setRequests(response)
        })
    }

    return(
      <PageContainer>
        <form onSubmit = {handleSubmit}>
            <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
            <button type = 'submit'>Click to submit</button>
        </form>

        <h1>Hellow World</h1>
        {/* {
            req.map( p => <div key={req}></div>)
        } */}


      </PageContainer>
    );
    
}


  