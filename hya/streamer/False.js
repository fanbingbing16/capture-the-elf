import React, { Component } from 'react';
import './stylede.hycss'
import './style.hycss'
class False extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        let obj = this.props.location.params

        console.log(obj)
    }
    goChild(){
    this.props.history.replace('/')
}
    render() { 
        return ( 

            <div>
                <p className="stylep2">很遗憾您没有答对</p>
                <img src={require("./false.png")} className="stylefalse"></img>
            
              <img src={require("./11.png")} 
                 className="style2"  onClick={()=>{this.goChild()}}></img>
            </div>
         );
    }
}
 
export default False;