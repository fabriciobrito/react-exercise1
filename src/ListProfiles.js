import React, { Component } from 'react';

class ListProfiles extends Component{
  render(){
    return(
      	<ul className='profile-list'>
      {this.props.profiles.map(p => (
       	<li key={p.id}>
      		{`${this.props.users[p.userID].name}'s favorite movie is ${this.props.movies[p.favoriteMovieID].name}.`}
      	</li>
       ))}
      </ul>
      )
  }
}

export default ListProfiles;