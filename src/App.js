import React from 'react';
import PropTypes from 'prop-types';


// const foodILike = [
//   {
//     id:1,
//     name:'kimchi',
//     rating: 8
//   },
//   {
//     id:2,
//     name:'sogogi',
//     rating: 10
//   },
//   {
//     id:3,
//     name:'sishi',
//     rating: 8
//   }
// ]

// function Food ({name, rating}){
// return (
//   <div>
//     <h2>I really like eat {name}</h2>
//     <h3>{rating}/10</h3>
//   </div>
//   )
// }

// check props
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }

// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} rating={dish.rating} />
//       ))}
//     </div>
//   );
// }

class App extends React.Component{
  render(){
    return <h1>I have render component</h1>
  }
}

export default App;
