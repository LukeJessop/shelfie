import Axios from 'axios'
import React, {Component} from 'react'

class Form extends Component {
    constructor(props){
        super(props)
            this.state={
                imgUrl: '',
                name: '',
                price:0
            }
    }

    setUrl(url){
        this.setState({
            imgUrl: url 
        })
    }
    setName(text){
        this.setState({
            name: text
        })
        console.log(this.state.name)
    }
    setPrice(price){
        this.setState({
            price: price
        })
        console.log(this.state.price)
    }
    addProduct(){
        let {name, price, imgUrl} = this.state
        let product = {
            name,
            price,
            imgUrl
        }
        Axios.post('/api/product', product)
        .then(res=> {
            this.clearInputs()
            this.setState({
                name: res.data
            })
        })
        .catch(err => console.log('Creation error', err))
    }

    clearInputs(){
        this.setState({
            name:'',
            price: 0,
            imgUrl: ''
        })
        console.log(this.state.name, this.state.price, this.state.imgUrl)
    }

    render(){
        return(
            <div className="form">
                <div className="formcontainer">
                    <img style={{ backgroundImage: `url('${this.state.imgUrl}')`}}></img>
                    <span className='inputspan'>Image URL:</span>
                    <br/>
                    <input type="text" onChange={e => this.setUrl(e.target.value)}></input>
                    <br/>
                    <span className='inputspan'>Product Name:</span>
                    <br/>
                    <input type="text" onChange={e => this.setName(e.target.value)}></input>
                    <br/>
                    <span className='inputspan'>Price:</span>
                    <br/>
                    <input placeHolder='0' type="text" onChange={e => this.setPrice(e.target.value)}></input>
                    <br/>
                    <button onClick={() => this.clearInputs()}>Cancel</button>
                    <button onClick={() => this.addProduct()}>Add</button>
                </div>
            </div>
        )
    }
}

export default Form