import React, { Component } from 'react';
class Wb extends Component {
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
         hyExt.env.getInitialParam().then(param=>{
             if(param.wb){
                 this.setState({
                     wb:true
                 })
                 hyExt.stream.onExtraWhiteBoardMessage({
                    callback:data=>{this.setState({wbMsg:data});}
             
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
        let width=600
        let height=600
        hyExt.stream.addExtraWhiteBoard({
            width,height
        }).then(({wbId})=>{this.state.wbId=wbId}).catch((err)=>{console.log(err)})
    }
    goChildFun(){
        this.props.history.replace({pathname:"/churn"})
      }
    rendWb(){
        return(
            <div>
                <p className='data'>{this.state.wbMsg||''}</p>
            </div>
        )
    }
        renderForm(){
            console.log();
        }
        render(){
            if(this.state.wb){
                return this.renderWb()
            }else{
                return this.renderForm()
            }
            return(
                <img src={require("./mm.png")} 
                className="style"  onClick={()=>{this.goChildFun()}}></img> 
                )
           }
          
}
 
export default Wb;