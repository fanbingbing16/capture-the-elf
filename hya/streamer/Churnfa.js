import React, { Component } from 'react'
import './style.hycss'
class Churnfa extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            wb:false,
            wbDate:'',
            wbMsg:'',
            wbId:'',
            giftMsg:[]
         }
         hyExt.env.getInitialParam().then(param => {
            if (param.wb) {
              this.setState({
                wb: true
              })
              hyExt.stream.onExtraWhiteBoardMessage({
                callback: data => {this.setState({ wbMsg: data });}
              })
            }
          })
}
    sendToWb(){
        let {wbDate,wbId}=this.state
        this.emitMessage(wbDate);
        if(this.state.wbId){
            hyExt.stream.sendToExtraWhiteBoard({
                wbId,
                data:wbData
            })
            console.log("send");
        }
    }
    createWb(){
        let width=2400
        let height=2400
        hyExt.stream.addExtraWhiteBoard({
            width,height
        }).then(({ wbId }) => {
            
            this.state.wbId = wbId}
        ).catch((err)=>{console.log(err)})
    }
    goChildFun(){
        this.props.history.replace({pathname:"/churn"})
      }
      
    render() { 
        return (
            <div>
                 <img src={require("./mm.png")} 
                 className="style"  onClick={()=>{this.goChildFun()}}></img> 

                <button className='button' onClick={()=>this.createWb()}>新建</button>
            </div>
         );
    }
   
}
 
export default Churnfa;