import React, { Component,Fragment } from 'react';
import './styledhk.hycss'
import axios from 'axios'
import XLSX from 'xlsx';
class Churn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
          }
    }
    　
    goChildFunto(){
        this.props.history.replace('/select')
       }
    // mobile-ms.uat.homecreditcfc.cn/mock/60ed8aa49850ad001dfea2d0/hylm/hya
    // https://mobile-ms.uat.homecreditcfc.cn/mock/60ed8aa49850ad001dfea2d0/hylm/hya
    // componentDidMount(){
    //     let args = []
    //     args[0] = {}
    //     args[0].url = "https://mobile-ms.uat.homecreditcfc.cn/mock/60ed8aa49850ad001dfea2d0/hylm/hya"
    //     args[0].dataType = "json"
    //     args[0].isDirect = true
    //     hyExt.logger.info('发送HTTP请求：' + JSON.stringify(args))
    //     hyExt.request(args[0]).then(resp => {
    //         hyExt.logger.info('发送HTTP请求成功，返回：' + JSON.stringify(resp))  
    //         this.setState({
    //                     //  list:resp.data.data.question
    //                  })  
    //     }).catch(err => {
    //         hyExt.logger.info('发送HTTP请求失败，错误信息：' + err.message)
    //     })
    //             // axios.get('https://mobile-ms.uat.homecreditcfc.cn/mock/60ed8aa49850ad001dfea2d0/hylm/hya'
    //             // )
    //             // .then(
    //             //      (res)=>{console.log("cg"+JSON.stringify(res))
    //             //     this.setState({
    //             //         list:res.data.data.question
    //             //     })
                    
    //             // })
    //             // .catch((error)=>{console.log('失败'+error)})
                
    //         }
   
            //  {/* 鲸鱼是什么鱼？ */}
           
            componentDidMount(){
        var a = Math.random() + ""	//产生一个随机数
        var rand1 = a.charAt(5)	//的到这个数的第五个字符(实际还是从0~9的数字)
        quotes = new Array	//创建消息数组
        quotes[1] = '《诗经》分为风雅颂，其中“风”指的是什么？'	//这里分配十句随机出现的文本
        quotes[2] = '以下哪一个不是屈原写的？'
        quotes[3] = '感“落英缤纷，芳草鲜美” “黄发垂髫，并怡然自乐”出自谁的作品?'
        quotes[4] = '“学而不厌,诲人不倦”出自《论语》哪一篇?'
        quotes[5] = '“大音希声，大象无形”的美学观念出自哪家?'
        quotes[6] = '以下哪个与唐太宗李世民无关的历史事件'
        quotes[7] = '下列哪个不是新月派诗人'
        quotes[8] = '青衣又称什么'
        quotes[9] = '“稍夺其权,制其钱谷,收其精兵”是哪个朝代的中央集权制度'
        quotes[0] = '哪一个作品是“五四运动”的新文学发难之作'
        var quote = quotes[rand1]	//由随机数选择一句话
        this.setState({
              list:quote
         })  
// console.log(this.state.list+'rrr')
//document.write(quote)
     }   
    render() { 
        return ( 
            <Fragment>
                <div>
                    <h1 className="stylep" >请您回答以下问题:</h1>
                </div>
                   <img src={require("./对话框.png")} className="styledhk" onClick={()=>{this.goChildFunto()}}   ></img>
                   <img src={require("./lm.png")} className="stylelm" ></img>
                   <p className="styleli" >
                   {/* 《诗经》分为风雅颂，其中“风”指的是什么？ */}
                    {this.state.list} 
                    </p>
                  {/* <button   onClick={()=>{this.randomText()}} className="stylequestion">   查看题目 </button> */}
                  <button   onClick={()=>{this.goChildFunto()}} className="styleselect">   查看选项 </button>
            
            </Fragment>
         );
    }
}
 
export default Churn;