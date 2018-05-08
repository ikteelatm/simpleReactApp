import React, { Component } from 'react';
import './App.css';
import data from './ReactTask.json';
import Modal from './Modal.js';
import MyForm from './MyForm';

//import { submit } from 'redux-form';
//import { connect } from 'react-redux';

//import SimpleForm from './SimpleForm';

class MyUser extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false ,
      user: ""
    };
  }

  toggleModal = (currUser) => {
      this.setState({
        isOpen: !this.state.isOpen,
        user: currUser
      });
  }

  render() {
    return (   
            data.map(user => {
                return (
                  <div>
                    <ul key={user.id} onDoubleClick={() => this.toggleModal(user)} >
                        <li key={user.name} className="name" > {user.name} </li>
                        <li key={user.email} className="email"> {user.email} </li>
                        <li key={user.address.city} className="city"> {user.address.city} </li>
                        <li key={user.phone} className="phone"> {user.phone} </li>
                        <li key={user.website} className="website"> {user.website} </li>
                        <li key={user.company.name} className="company.name"> {user.company.name} </li>
                    </ul>

                    <Modal show={this.state.isOpen} onClose={this.toggleModal}>
                      <MyForm user={this.state.user} />
                    </Modal>
                  </div>
                );
            })
    );
  }
}
export default MyUser;

// const MyUser = ({ dispatch }) =>
//   <button type="button" onClick={() => dispatch(submit('remoteSubmit'))}>Submit</button>

// export default connect()(MyUser)
