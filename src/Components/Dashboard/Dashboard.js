import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard">
                {this.props.inventory.map ((el) => {
                    return <Product key={el.id} item={el}/>
                })}
            </div>
        )
    }
}

export default Dashboard