import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();

    this.state ={
      posts:[]
    }
  }

  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res=>{
        this.setState({
          posts:this.state.posts.concat(res.data)
      })
    })
  }

  render () {
    return (
      <div>
      {JSON.stringify(this.state.posts)}
        <ul>

        </ul>
      </div>
    )
  }
}

export default Home;
