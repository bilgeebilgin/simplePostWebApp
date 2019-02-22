import React, {Component} from 'react';
import Menu from './Menu';
import Content from './Content';
import '../style/normalize.css';
import '../style/layout.css';
import { getAllUserNames } from '../api'
import { getMessageByUser } from '../api'
import { getTimelineMessage } from '../api'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser :0,
      userMessages:[],
      allUserNames:[],
      userTimeline:[]
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    getAllUserNames()
    .then(response => response.json())
    .then(allUserNames => {
      this.setState({ allUserNames });
      this._loadMessageData(allUserNames,this.state.currentUser);

    }).catch(error => console.log(error));
  }

  _loadMessageData(allUserNames,currentUser){
    getMessageByUser(allUserNames[currentUser].userName)
    .then(response => response.json())
    .then(post => {
      this.setState({ userMessages : post });
    }).catch(error => console.log(error));

    getTimelineMessage(allUserNames[currentUser].userName)
    .then(response=>response.json())
    .then(post=>{this.setState( {userTimeline : post});
    }).catch(e=>console.log("timeline error "+e));
  }

  handleChange(e){
    this.setState({ currentUser : Number(e.target.value)},()=>{
      this._loadMessageData(this.state.allUserNames, this.state.currentUser);
    });
    //console.log(this.state.allUserNames[this.state.currentUser])
  }

  render(){
    console.log("asdasd"+userTimeline);
    const { allUserNames, currentUser,userMessages,userTimeline } = this.state;
    return(<div className="container">
    <Menu currentUser={currentUser} users={allUserNames} onUsernameChange={this.handleChange}/>
    <Content  userTimeline={userTimeline} userMessages={userMessages}/>
  </div>)
}
}

export default App;
