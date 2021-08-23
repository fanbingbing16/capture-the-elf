
import React, { Component } from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom'
import './app.hycss'
import './style.hycss'
import Churn from './Churn'
import Churnfa from './Churnfa'
import Select from './Select'
import Sucess from './Sucess'
import False from './False'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
}
  render () {
    
    return (
      <div>  
     <HashRouter> 
       <Switch>
       <Route path='/' exact component={Churnfa}>         
         </Route>
         <Route path='/churn' component={Churn}>         
         </Route>
         <Route path='/select' component={Select}>         
         </Route>
         <Route path='/sucess' component={Sucess}>         
         </Route>
         <Route path='/false' component={False}>         
         </Route>
       </Switch>
     </HashRouter>
     
</div>
    )
  }
  
}

export default App
