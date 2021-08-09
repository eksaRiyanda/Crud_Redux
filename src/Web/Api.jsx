// import React from 'react';
// import axios from 'axios';
// //require('./style.scss');

// class Premontessori extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       post:[]
//     };
//   }

//   componentDidMount(){
//     let self = this;
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(function(data._data) {
//         console.log(data._data);
//         self.setState({post:data._data});
//       });
//    }

//    render(){
//      return (
//        <div>
//          <table>
//             <tbody>
//                {
//                  this.state.post.map(function(item, index){
//                     return (
//                        <tr>
//                          <td>{item.Id}</td>
//                          <td>{item.Name}</td>
//                          <td>{item.Age}</td>
//                        </tr>
//                     )
//                   })
//                 }
//               </tbody>
//            </table>
//         </div>
//       );
//    }
// }
// export default Premontessori;