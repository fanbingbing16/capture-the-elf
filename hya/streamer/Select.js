import React, { Component,Fragment } from 'react';
import './styleimg.hycss'
import axios from 'axios'
class Select extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listA:[],
            listB:[],
            listC:[],
            listD:[],
            anser:[]
         }
    }
//     componentDidMount(){
//         // axios.get('https://mobile-ms.uat.homecreditcfc.cn/mock/60ed8aa49850ad001dfea2d0/hylm/hya'
//         // )
//         // .then(
//         //      (res)=>{console.log("cg"+JSON.stringify(res.data.data.optionA))
//         //     this.setState({
//         //         listA:res.data.data.optionA,
//         //         listB:res.data.data.optionB,
//         //         listC:res.data.data.optionC,
//         //         listD:res.data.data.optionD,
//         //         anser:res.data.data.anser
//         //     })
            
//         // })
//         // .catch((error)=>{console.log('失败'+error)})
//         let args = []
//         args[0] = {}
//         args[0].url = "https://mobile-ms.uat.homecreditcfc.cn/mock/60ed8aa49850ad001dfea2d0/hylm/hya"
//         args[0].dataType = "json"
//         args[0].isDirect = true
//         hyExt.logger.info('发送HTTP请求：' + JSON.stringify(args))
//         hyExt.request(args[0]).then(resp => {
//             hyExt.logger.info('发送HTTP请求成功，返回：' + JSON.stringify(resp))  
//             this.setState({
//                 listA:res.data.data.optionA,
//                         listB:res.data.data.optionB,
//                          listC:res.data.data.optionC,
//                         listD:res.data.data.optionD,
//                          anser:res.data.data.anser
//                      })  
//         }).catch(err => {
//             hyExt.logger.info('发送HTTP请求失败，错误信息：' + err.message)
//         })
//     }

    gotoResult(){
        this.props.history.replace({
                pathname:'/false'  ,
                params:{
                    name:2
                }
        })
    }

    gotoSucess(){
        this.props.history.replace({
                pathname:'/sucess' ,
                params:{
                    name:1
                }
        })
    }
    componentDidMount(){
    var a = Math.random() + ""	//产生一个随机数
    var rand1 = a.charAt(5)	//的到这个数的第五个字符(实际还是从0~9的数字)
    quotesA = new Array	//创建消息数组
    quotesA[1] = '祭祀歌谣'	//这里分配十句随机出现的文本
    quotesA[2] = '《九歌》'
    quotesA[3] = '欧阳修'
    quotesA[4] = '《为政》'
    quotesA[5] = '孟子'
    quotesA[6] = '贞观之治'
    quotesA[7] = '梁实秋'
    quotesA[8] = '花旦'
    quotesA[9] = '唐'
    quotesA[0] = '《官场现形记》'
    var quoteA = quotesA[rand1]
    quotesB = new Array	//创建消息数组
    quotesB[1] = '民间歌谣 '	//这里分配十句随机出现的文本
    quotesB[2] = '《弹歌》'
    quotesB[3] = '陶渊明'
    quotesB[4] = '《述而》'
    quotesB[5] = '老子'
    quotesB[6] = '安史之乱'
    quotesB[7] = '周作人'
    quotesB[8] = '正旦'
    quotesB[9] = '宋'
    quotesB[0] = '《文学改良刍议》'
    var quoteB = quotesB[rand1]	//由随机数选择一句话
    quotesC = new Array	//创建消息数组
    quotesC[1] = '神话传说 '	//这里分配十句随机出现的文本
    quotesC[2] = '《离驱》'
    quotesC[3] = '李煜'
    quotesC[4] = '《颜渊》'
    quotesC[5] = '荀子'
    quotesC[6] = '玄武门事变'
    quotesC[7] = '闻一多'
    quotesC[8] = '刀马旦'
    quotesC[9] = '清'
    quotesC[0] = '《狂人日记》'
    var quoteC = quotesC[rand1]
    quotesD = new Array	//创建消息数组
    quotesD[1] = '宗教乐调'	//这里分配十句随机出现的文本
    quotesD[2] = '《天问》'
    quotesD[3] = '陆机'
    quotesD[4] = '《子罕》'
    quotesD[5] = '墨子'
    quotesD[6] = '文成公主入藏'
    quotesD[7] = '徐志摩'
    quotesD[8] = '老旦'
    quotesD[9] = '明'
    quotesD[0] = '《风风涅繁》'
    var quoteD = quotesD[rand1]
    this.setState({
          listA:quoteA,
          listB:quoteB,
          listC:quoteC,
          listD:quoteD
     })  
 console.log(this.state.listA+'rrr'+this.state.listB+this.state.listC+this.state.listD)
//document.write(quote)
 }  
    render() { 
        return ( 
            
              
            <div >
               <img src={require("./jl.png")} className="stylejl" ></img>
               <p className="style1" >
                   {this.state.listA}
                   {/* 祭祀歌谣 */}
                   </p>
                <img src={require("./A.png")} className="stylean1" 
                onClick={()=>{this.gotoResult()}}></img>
                <p className="style2">
                    {this.state.listB}
                    {/* 民间歌谣 */}
                    </p>
                <img src={require("./B.png")} className="stylean2"
                onClick={()=>{this.gotoSucess()}}></img>
                <p className="style3">
                    {this.state.listC}
                    {/* 神话传说 */}
                    </p>
                <img src={require("./C.png")} className="stylean3"
                onClick={()=>{this.gotoResult()}}></img>
                <p className="style4">
                     {this.state.listD}
                     {/* 宗教乐调 */}
                     </p>
                <img src={require("./D.png")} className="stylean4"
                onClick={()=>{this.gotoResult()}}></img>
            </div>
 
        );
       
    }
}
 
export default Select;