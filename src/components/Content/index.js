import React, { Component } from 'react';
import {getMessageByUser} from "../../api";

import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

class Content extends Component {

  constructor(props){
    super(props);

    this.state = {
      userMessages:[],
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
      this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

  render(){
    const { userMessages,userTimeline} = this.props;
    console.log( userTimeline);

    return(<div>
       <button className="example_b" onClick={this.openModal}>Check Your Wall</button>
       <h2>Timeline</h2>
         <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           style={customStyles}
           contentLabel="Example Modal"
         >

           <h2 className="black" ref={subtitle => this.subtitle = subtitle}>Your Entiries</h2>
             <table>
               <thead>
                 <tr>
                   <th>Dates</th>
                   <th>Entries</th>
                 </tr>
               </thead>
               <tbody>
                 {userMessages.map((value,index) =>
                   <tr key={index}>
                     <td>{value.dateTime.substring(11,19)}</td>
                     <td>{value.content}</td>
                   </tr>)}
                 </tbody>
               </table>

           <button onClick={this.closeModal}>close</button>

         </Modal>
      <table>
        <thead>
          <tr>
            <th>Dates</th>
            <th>User</th>
            <th>Entries</th>
          </tr>
        </thead>
        <tbody>
          {userTimeline.map((value,index) =>
            <tr key={index}>
              <td>{value.dateTime.substring(11,19)}</td>
              <td>{value.userName}</td>
              <td>{value.content}</td>
            </tr>)}
          </tbody>
        </table>
      </div>)
    }

  }

  export default Content
