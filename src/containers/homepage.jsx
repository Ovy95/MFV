import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { FavouriteLanguage } from '../components/filterRequest';
import { Marginer } from '../components/marginer';

export function HomePage(props) {
  const [Language, setLanguage] = useState(['...']);
  const [name, setName] = useState('');

  const requestAddress = `https://api.github.com/users/${name}/repos?per_page=100`;

  async function getRequest(requestAddress) {
    const response = await fetch(requestAddress);
    if (response.ok) {
      const Data = await response.json();
      const language = FavouriteLanguage(Data, name);
      setLanguage(language);
    } else  {
    return alert('Please enter a valid Github Username');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getRequest(requestAddress);
  };

  return (
    <PageContainer>
      <LogoContainer><FaGithub /></LogoContainer>
      <h1>Favourite language Checker</h1>

      <FormWrapper>
        <FormContainer>
          <h3>Enter a Github Username</h3>
          <Marginer direction="vertical" margin="1em" />
          <form onSubmit={handleSubmit}>
            <input onChange={(e) => setName(e.target.value)} value={name} />
            <Marginer direction="vertical" margin="1.5em" />
            <button className="btn-primary" type="submit">Submit</button>
          </form>
          <Marginer direction="vertical" margin="1em" />

          <h2>{Language}</h2>
        </FormContainer>
      </FormWrapper>

    </PageContainer>
  );
}

const PageContainer = styled.div`
width: 100%;
height: 100vh;
background-color: #0d1117;
display: block;
`;
const LogoContainer = styled.div`
padding: 30px;
justify-content: center;
align-items: center;
font-size: 58px;
display: flex;
color:  white;
`;
const FormWrapper = styled.div`
  padding: 20px;
  justify-content: center;
  display: flex;
  `;

const FormContainer = styled.div`
width: 27%;
border-radius: 10px;
background-color: #161c22;
padding: 20px;
border: 1px solid #21262d;
display: flex;
flex-direction: column;
align-items: center;
`;