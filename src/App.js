import React from 'react';
import Swal from 'sweetalert2'
import './App.css';

export default class App extends React.Component {
  constructor(props) {    
    super(props);

    this.state = {
      name: "",
      age: 0,
      errorName: false,
      errorAge: false
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("Cambiaste la edad y el nombre")
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.name === "") {
      this.setState({errorName: true})
    } else if(this.state.age < 0) {
      this.setState({errorAge: true})
    } else {
      let newAge = this.state.age - 10;
      Swal.fire("¡Maravilloso " + this.state.name + " has sido rejuvenecido! Tu nueva edad es " + newAge);
      this.setState({ name: "" })
      this.setState({ age: 0 })
    }
  }
  
  render(){
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <img src="./img/font.png" alt="Fuente de la juventud" className="form--img"/>
        <label className="form--label" >Nombre</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form--input" />
        {this.state.errorName ? <span>This field is required</span> : null}
        <label className="form--label" >Edad</label>
        <input type="number" name="age" value={this.state.age} onChange={this.handleChange} className="form--input"/>
        {this.state.errorAge ? <span>This field is required</span> : null}
        <button type="submit" className="form--button">¡Quiero ser joven!</button>
      </form>
    );
  }
}