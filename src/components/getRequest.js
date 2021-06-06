import React, {Component} from 'react'
import axios from 'axios'
 

 class PostFrom extends Component {

  constructor(props) {
        super(props)

        this.state = {
          userId: '',
          title: '',
          body: ''
        }
  }

  handleChange = (e) => {
    this.setState({

        [e.target.name]: e.target.value
      })

  }

  handleSubmit = (e) => {
    e.preventDefault = (e) => {
console.log(this.state)
      axios.get('https://api.github.com/users/'+this.state.userId+'/repos')
      .then(response =>{
        console.log(response)
      })
    }
  }


render() {
  const {userId, title, body} = this.state
  return (
      <div>
          <form onSubmit={this.submitHandler}>
          <div>
              <input 
              type='text' 
              name ='userId' 
              onChange={this.handleChange}
              value={userId}></input>
          </div>
          <div>
              <input 
              type='text' 
              name ='title' 
                  onChange={this.handleChange}
              value={title}></input>
          </div>
          <div>
              <input 
              type='text' 
              name ='body' 
              onChange={this.handleChange}
              value={body}></input>
          </div>
          <button type='submit'>Submit Now</button>
          </form>
      </div>
   )
  }
}

export default PostFrom