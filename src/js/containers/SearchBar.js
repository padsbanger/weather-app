 import React, { Component } from 'react'

 export default class SearchBar extends Component {
   constructor(props) {
     super(props)
     this.state = {
       term: ''
     }
   }

   onInputChange(event) {
     this.setState({
       term: event.target.value
     })
   }

   render() {
     return (
       <form>
         <input
           placeholder="Input city to get forecast"
           value={this.state.term}
           onChange={this.onInputChange.bind(this)}
            />
         <button type="submit">Search</button>
       </form>
     )
   }
 }
