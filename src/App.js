
import Axios from 'axios';
import React, {Component} from 'react'
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends Component{
  constructor(){
    super()
    this.state= {
      inventory: [],
    }
  }
  componentDidMount(){
    this.getInventory()
  }

  getInventory(){
    Axios.get('/api/inventory')
    .then(res => this.setState({ inventory: res.data}))
  }

  
  render(){
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <Dashboard inventory={this.state.inventory}/>
          <Form getInventory={this.getInventory}/>
        </div>
      </div>
    );
  }
}

export default App;
