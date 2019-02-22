import React,{Component} from 'react'
import { getAllUserNames } from '../../../api'





class DropDownList extends Component{

   constructor(props) {
    super(props);

    this.state = {
      allUserNames:[],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


    componentDidMount(){

        getAllUserNames()
        .then(response => response.json())
        .then(allUserNames => this.setState({ allUserNames : allUserNames }))
            .catch(error => console.log(error))
    }

  handleChange(event) {
  this.setState({ currentUser : event.target.value });

    console.log(event.target.value);
    console.log(this.currentUser);
    this.setState({value: this.state.value});
  }

  handleSubmit(event) {
    console.log("testtttttt"+this.state.value);
  //  this.setState({ currentUser : this.state.value) });
    alert('Current Users is: ' + this.state.value);

    event.preventDefault();
  }

  render() {
        const { allUserNames }=this.state;
        return(

        <div className="currentUserContent">

            <form onSubmit={this.handleSubmit}>
                <label>
                    Select Account:
                    <select value={this.state.value} onChange={this.handleChange}>
                        {
                            allUserNames.map(({userName}) => <option key={userName}>{userName} </option>)
                        }
                    </select>
                </label>
            </form>

        </div>
      );

  }}
export default DropDownList
