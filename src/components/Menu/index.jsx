import React,{Component} from 'react';
import {getfollowUser} from  '../../api'
import {postUserMessage} from '../../api'
class Menu extends Component{

  constructor(props){
    super(props);
  }

  handleFollow(userName){
    const {users,currentUser}=this.props;
    console.log(users);
    getfollowUser(users[currentUser].userName, userName).catch(error => console.log(error));
    //console.log(this.state.allUserNames[this.state.currentUser])
  }

  handlePost(userName,message){
    console.log(userName, message);
    const data={userName:userName, content:message};
    console.log(data);
    postUserMessage(data).catch(error => console.log(error));
  }

  render() {
    const { users, currentUser, onUsernameChange } = this.props;
    const selectedUser=users.length ? users[currentUser].userName: null;

    return(

      <div className="menu">
        <div className="currentUserContent">
          <form onSubmit={this.handleSubmit}>
            <label>
              Select Account:
              <select className="ikiyuz" value={currentUser} onChange={onUsernameChange}>
                <option value="">Please Select</option>
                {
                  users.map((val,index) => <option value={index} key={index}> {val.userName} </option>)
                }
              </select>
            </label>
          </form>
        </div>


        <div className="div-style-2">
          <form>
            <ul className="form-style-1">
              <li>
                <label>Your User Name </label><input  className="ikiyuz" ref={(e)=>this.inputUser=e} type="text" name="field1" className="field-divided" placeholder="Write User Name" />
              </li>
              <li>
                <label>Your Message <span className="required">*</span></label>
                <textarea maxLength="139" className="ikiyuz"  ref={(e)=>this.inputMessage=e} name="field5" id="field5" className="field-long field-textarea"></textarea>
              </li>
              <li>
                <input className="postbutton" type="button" value="Post" onClick={()=>{this.handlePost(this.inputUser.value, this.inputMessage.value)}} />
              </li>
            </ul>
          </form>
        </div>
        <ul>
          {
            users
            .filter((user)=>user.userName!=selectedUser)
            .map((user) => <li key={user.userName}>
            <input className="followBtn example_b" value="Follow" type="submit" onClick={()=>{this.handleFollow(user.userName)}}></input>  &emsp;{user.userName}
          </li>)
        }
      </ul>
    </div>
  );
}
};


export default Menu;
