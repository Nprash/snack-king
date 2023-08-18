import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//React Element

// const Header = () => {
//     return (
//         <div className="header">
//             <div>
//                 <img src="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=600"/>
//             </div>
//         </div>
//     )
// }

// const AppLayout = () => {

//     return (
//         <div className='app'>

//         </div>
//     )
// }
//babel transpile to jsx code to racr.createElement

//const heading = React.createElement("h1", { id: "heading" }, "namaste react from core react")

// const title = () =>
//     (
//         <h1 className="heading">{78+2}namaste react from jsx render</h1>
//     )


// const HeadingComponent = () => {
//     return (
//         <div id="container">
//             {title()}
//             {234}
//             <h3>hello this is functional component</h3>
//         </div>
//     )

// };







const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

