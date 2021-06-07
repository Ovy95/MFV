import React, { Component ,useState} from "react";
import styled from "styled-components";
import {FavouriteLanguage} from "../components/filterRequest"
import { FaGithub} from "react-icons/fa";
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
padding: 30px;
border: 1px solid #21262d;
text-align: top;
background-color: #0d1117;
justify-content: center;
align-items: center;
font-size: 58px;
display: flex;
color:  white;
`


//background-color: white;
// background-color: aqua;


    // 
    // background-color: var(--color-bg-tertiary);
    // border: 1px solid #21262d;
    // border-top: 0;
    // border-radius: 0 0 6px 6px;
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

background-color: #161c22;
padding: 20px;
border: 1px solid #21262d;
border-radius: 30px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

font-weight: 300;
letter-spacing: -.5px;
`;
// padding: 30px;
// border: 1px solid #21262d;
// text-align: top;
// background-color: #0d1117;
// justify-content: center;
// align-items: center;
// font-size: 58px;
// display: flex;
// color:  white;


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
    let favouriteLanguage = FavouriteLanguage(data)
    setRequests(favouriteLanguage)
  }
  
    return(
      <PageContainer>
        <LogoContainer><FaGithub/></LogoContainer>

        <h1>Enter a Github Username</h1>
        <FormWrapper>
        <FormContainer>
        <p>Find out what the Githubs User's favourite langage is </p>
        <form onSubmit = {handleSubmit}>
            <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
            <button class="btn-primary" type = 'submit' > <FaGithub margin-top = "1rem" /> Submit</button>
        </form>
        <h2>
        
Favourite Language to used is <br></br>
{req}

<br></br>
<br></br>
        </h2>
       </FormContainer>
       </FormWrapper>

   </PageContainer>
    );
    
}


  