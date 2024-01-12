import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // this.state = {
    //   count: 10,
    //   count2: 20,
    // };
    // console.log(this.props.Name+ " Constructor ")
    this.state={
      userInfo:{
        name:"dummy",
        location:"default",
        Contact:"nimmanaprasanth95@gmail.com"
        // avatar_url:"https//www.dummy-image.com",
      },
    };
  }
// this componentDidMount() is === useEffect(()=>{},[])  for calling an API

  async componentDidMount(){
    // console.log(this.props.Name+ " component Did mount")
    /* while loading this class based component ,
    1st constructor will be called first
    render() method will be called during thisif any of child 
     component found it will call the child consructor, child render
     child componentDidMount after that this componentDidiMount will be called
    that means after parent render executed fully then this
    componentDidMount will be called */

    const data = await fetch("https://api.github.com/users/Nprash");
    const json = await data.json();
    console.log(json);
    // to update state variable see below 
    this.setState(
      {
        userInfo:json,
      }
    );
    this.timer = setInterval(() =>{console.log("settimeinterval in didmount")},10000);
  }

componentDidUpdate(){
  console.log("component did updated")
}

componentWillUnmount() { console.log("componentWillUnmount")
clearInterval(this.timer);
};

  render() {
    // const { Name, Location, Email } = this.props;
    // const { count, count2 } = this.state;
    // console.log(Name + " Render called");
    
    return (
      <div className="user-card flex justify-around items-center p-3 border rounded-xl shadow-md w-2/5 m-auto">
        {/* <p>useState variables usage in class based component count</p> */}
        {/*  <button
          onClick={() => {
            //never update state variables directly +=1
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count + 1,
            });
          }}
        >
          Count increase
        </button> */}
        <img className="w-48 rounded-full shadow-md" src={this.state.userInfo.avatar_url} alt="avatar" />
        <div className="dot-flex w-2/5">
        <h2 className="font-medium"> {this.state.userInfo.name}</h2>
        <h3 className="text-slate-500">Location: {this.state.userInfo.location}</h3>
        <h4 className="text-slate-500">Contact: {this.state.userInfo.Contact}</h4>
        </div>
        
      </div>
    );
  }
}
/*Parent Constructor
- Parent render
First Constructor
• First Render
- Second Constructor
- Second Render

uPdATE dom SINGLE BATCH'
• First ComponentOidNOunt
• Second ComponentOidNOunt
- Parent ComponentOit"ount
*/

export default UserClass;

/*
*
*---------MOUNTING ----
*Constructor (dummy)
*Render (dummy)
*    <HTML Dunny >
*Component Did MOunt
*     <API call>
*     <this.setState> —> State variable is updated
*
*
*
*--------UPDATE
*     render(API data)
*     <HTHL (new API data>)
*     componentDid Update
*
*
*/