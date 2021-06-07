import React, { Component ,useState} from "react";
import styled from "styled-components";
import {FavouriteLanguage} from "../components/filterRequest"
import { FaGithub} from "react-icons/fa";
import {Marginer} from "../components/marginer"
const PageContainer = styled.div`
width: 100%;
height: 100vh;
background-color: #0d1117;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
display: block;
`
const LogoContainer = styled.div`
padding: 30px;s
text-align: top;
justify-content: center;
align-items: center;
font-size: 58px;
display: flex;
color:  white;
`
  const FormWrapper = styled.div`
  padding: 30px;
  border: 1px solid #white;
  text-align: top;
  background-color: #0d1117;
  justify-content: center;
  align-items: center;
  display: flex;
  `
const FormContainer = styled.div`
width: 25%;
background-color: #161c22;
padding: 20px;
border: 1px solid #21262d;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`;

export function HomePage(props) {

  const [req, setRequests] = useState(["..."])
            // This allows for seeting name 
  const [name, setName] = useState('');

  let url = 'https://api.github.com/users/'+name+'/repos'

    const handleSubmit = (e) => {
      e.preventDefault();
      getapi(url)
    }

    async function getapi(url) {
    const response = await fetch(url)
    if(response.ok){
      var data = await response.json()
    } else {
      return alert('Please enter a valid Github Username');
    }
    let favouriteLanguage = FavouriteLanguage(data,name)
    setRequests(favouriteLanguage)
  }
  
    return(
      <PageContainer>
        <LogoContainer><FaGithub/></LogoContainer>
        <h1>Favourite language Checker</h1>

        <FormWrapper>
        <FormContainer>
          <h3>Enter a Github Username</h3>
        {/* <p>Enter a Github Username</p> */}
        <Marginer direction="vertical" margin="1em" />
        <form onSubmit = {handleSubmit}>
            <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
            <Marginer direction="vertical" margin="1.5em" />

            <button class="btn-primary" type = 'submit' > <FaGithub margin-top = "2rem" /> Submit</button>
        </form>
        <Marginer direction="vertical" margin="1em" />
      
        <h2>{req}</h2>
       </FormContainer>
       </FormWrapper>

   </PageContainer>
    );
    
}


  