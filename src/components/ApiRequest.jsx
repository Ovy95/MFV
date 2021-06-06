import React, { useState,Component } from "react";
import styled from "styled-components";
import axios from 'axios';



const ApiContainer = styled.div`
  display: inline-block;
  position: relative;
  
  `


  export default class Weather extends Component {
   

    Getweather = (username) => {
      // https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=d0c1e9b30aef451789b152051200907&q='+search
      // https://api.github.com/repos/

       console.log(username)
        // axios.get('https://api.github.com/users/'+username+'/repos')
        //     .then(res => {

        //         const tempr = res[0]
        //         const humidity = res[1]
        //         this.setState({
        //             temp: tempr,
        //             humidity: humidity,
        //         })
        //         console.log(res);
        //     })
    }

    render() {
        this.Getweather(this.props.username)
        return (
          <ApiContainer>
            <div>   
               <h1>this.props.username</h1>
            </div>
            </ApiContainer>
        )
    }

  }


//  {/* <div className="title">
//  <form>
//   <label>
//     UserName: 
//     <input type="text" name="UserName" />
//   </label>
//   <button >SubmitName</button>
//   <input type="submit" value="Submit" />
// </form>

//  </div> */}

  
  
