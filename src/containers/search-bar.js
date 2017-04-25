import React, { Component } from 'react';

export class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''}; 

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    console.warn(event.target.value);
    this.setState({term: event.target.value});
  }  

  render() {
    return(
      <form className='input-group'>
      <input 
      placeholder="Search a City"
      className="form-control"
      value={this.state.term}
      onChange={this.onInputChange}
      />
      <span className='input-group-btn'>
      <button type="submit" className="btn btn-secondary">Search</button>
      </span>
      </form>
    );
  }
}