import React, { Component } from 'react';
import './stylede.hycss'
import './style.hycss'
class Sucess extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    goChild(){
    this.props.history.replace('/')
}
    componentDidMount(){
        let obj = this.props.location.params

        console.log(obj)
    }
    render() { 
        return ( 
            <div>
                <p className="stylep1">恭喜你成功答对啦！</p>
                <img className="stylesucess" src={require("./sucess.png")}></img>
                
              <img src={require("./11.png")} 
                 className="style2"  onClick={()=>{this.goChild()}}></img>
            
            </div>
         );
    }
}
 
export default Sucess;