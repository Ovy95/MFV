import React, { Component ,onChange,state,useState} from "react";
import styled from "styled-components";
import axios from 'axios'
import PostFrom from "../components/getRequest";

// const PageContainer = styled.div`
// width: 100%;
// height: 100%;
// display: flex;
// flex-direction: column;
// padding: 0;
// text-align: center;
// `;

class GetList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName :"ovy95",
      posts : []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/'+this.state.userName+'/repos')
    .then(response =>{
      console.log(response.data)
      this.setState({posts: response.data})
    })
  }

  handleSubmit = (e) => {

      e.preventDefault();

    console.log(this.state.userName)
      // console.log(`${name}`)
      // console.log(req)
  }
  render() {
    const {posts} = this.state
    let {userName} = this.state
    return (
      <div>
       
       

      {/* { posts.length ?
        posts.map(post => <div key={post.id}>{post.language} </div>) :null
      } */}
</div>
    )
  }


}

export default GetList

// export function HomePage(props) {
  
//   const [req, setRequests] = useState([])
//             // This allows for seeting name 
//     const [name, setName] = useState('');
//     const handleSubmit = (e) => {
//         e.preventDefault();


//         console.log(`${name}`)
//         console.log(req)
//     }
//     return(
//       <PageContainer>
//         <form onSubmit = {handleSubmit}>
//             <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
//             <input onChange = {(e) => aptRequest(e.target.value)} value = {name}></input>
//             <button type = 'submit'>Click to submit</button>
//         </form>

//         <h1>Hellow World</h1>

      

//       </PageContainer>
//     );
    
// }


  