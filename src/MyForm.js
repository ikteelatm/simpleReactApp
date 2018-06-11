import React, { Component } from 'react';
import './App.css';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';

class MyForm extends Component {

  handleSubmit = () => {
      console.log("this.props.user.name=" + this.props.user.name);
      debugger;
    }

  render() {
    return (                      
            <form onSubmit={this.handleSubmit}> 
              <ul className="myForm">
                <div>
                  <label>Name </label>
                  <Field
                    name="Name"
                    label="name"
                    component="input"
                    type="text"
                    format={value => value === 1 ? 'I\'m disabled' : value}
                    withRef
                    placeholder={this.props.user.name}/>
                </div>
                <div>
                  <label>Email </label>
                  <Field
                    name="email"
                    component="input"
                    type="text"
                    format={value => value === 1 ? 'I\'m disabled' : value}
                    placeholder={this.props.user.email}/>
                </div>
                <div>
                  <label>Address City </label>
                  <Field
                  name="address_city"
                  component="input"
                  type="text"
                  format={value => value === 1 ? 'I\'m disabled' : value}
                  placeholder={this.props.user.address.city}/>
                </div>
                <div>
                  <label>Phone </label>
                  <Field
                  name="phone"
                  component="input"
                  type="text"
                  format={value => value === 1 ? 'I\'m disabled' : value}
                  placeholder={this.props.user.phone}/>
                </div>

                <div>
                  <label>Website </label>
                  <Field
                  name="website"
                  component="input"
                  type="text"
                  format={value => value === 1 ? 'I\'m disabled' : value}
                  placeholder={this.props.user.website}/>
                </div>
                <div>
                  <label>Company Name </label>
                  <Field
                  name="company_name"
                  component="input"
                  type="text"
                  format={value => value === 1 ? 'I\'m disabled' : value}
                  placeholder={this.props.user.company.name}/>
                </div>

              </ul>
            </form>
    );
  }
}

MyForm = reduxForm({
  form: 'simple', // a unique identifier for this form
  //onSubmit: submit
})(MyForm)


export default connect()(MyForm);

