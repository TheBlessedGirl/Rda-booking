// import React from "react";
// import Card from "./card";
// import ReactDOM from "react-dom";

// const App=()=>{
//     return (  <div><Card title="nyugwe"paragraph="lorem dshbcajskfnjfbx" image="https://ecija.com/wp-content/uploads/2020/10/pexels-asad-photo-maldives-1268855-1.jpg" /> 
//     <Card title="nyugwe"paragraph="lorem dshbcajskfnjfbx"image="https://play-lh.googleusercontent.com/or-eFc4-uFbMpbOAZm5lFrAY56yHGJUeJJxixSPoWDSMaxJTplruWWRkWEIcbE5Fd_U"/> 
//     <Card title="muhazi" paragraph="lorem dshbcajskfnjfbx"image="https://play-lh.googleusercontent.com/A26UUWOc_l_aPp2GRurp3sG0kaxjm8ArbFHtX5GQZ9x9QztmE_noNmHBE2fbTa855sZu"/> </div> )
 
// }
// // export default card;
// ReactDOM.render(<Card/>,document.querySelector("#root"));
// export default App;


// card.js CODES

// import React from 'react';
// import gooo from '../src/assets/images/gooo.jpg';
// import "./index.css";
// const Card =(props)=>{
//     console.log(props)
//    return(
//     <>
//     <div className="card">
//     <img src= {props.image} alt="" className="images"/>
//     <div className="content">
//    <h3 className="Title">{props.title}</h3>
//     <p className="paragraph">
//    {props.paragraph}</p>
//     </div>
//     </div>
//     </>
//    ); 
// };
// export default Card;
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
const App=()=>{
    return (<Router>
        <Routes></Routes>
    </Router>);
}
export default App;