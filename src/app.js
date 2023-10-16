import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer"
import Usercontext from "./UtilityFiles/Usercontext";
// import Grocery from "./components/Grocery";

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

// code optimization below seperation of bundle

// chunking
// code splitting
// dynamic bundling
// lazy loading
// on demading loading
//dynamic import

// lazy() loading for optimization coming from react library
const Grocery = lazy(()=>import("./components/Grocery"));



const AppLayout = () => {

  const [user_, setUser_] = useState({name:"Nimmana Prasanth",Email: "developer2023@gmail.com",});
  
  return (
    <>
    <Usercontext.Provider value={{user:user_,
    setUser:setUser_}}> 
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
    </Usercontext.Provider>
    </>
  )
}
// this createBrowserRouter needs to configure in the form array of objects
// objects means defining routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
   
    children:[
      {
        path:"/",
        element:<Body/>,
      },  
      {
        path:"/Home",
        element:<Body user={{
          name2:"Namaste React",
          email: "namaste@gmail.com",
        }}/>,
      },
      {
      path:"/AboutUs",
      element:<AboutUs />,
      errorElement: <Error/>,
    },
    {
      path:"/ContactUs",
      errorElement: <Error/>,
      element:<ContactUs/>,
      
    },
    {
      path:"/Grocery",
      element:<Suspense fallback={<><h1>loading...</h1></>}><Grocery/></Suspense>,
      errorElement: <Error/>,
      
    },
    {
      path:"/cart",
      element:<Cart/>,
      errorElement: <Error/>,
    },
   {
    path:"/Restaurants/:resId",
    element: <RestaurantMenu/>,
    errorElement: <Error/>,
   },
   
  ],
  
  errorElement: <Error/>,

  }

 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>); 
// here we are rendering router configuration , the defined routes and its paths will be rendered if this renders


