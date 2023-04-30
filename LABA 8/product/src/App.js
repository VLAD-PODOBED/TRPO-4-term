import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      items: [
        {
          id:1,
          title:'dcsd',
          img:'MainProductjpg.jpg',
          desc:'dcscd',
          category:'sdcs',
          price:'49.66',
        },
        {
          id:2,
          title:'dcsd',
          img:'MainProductjpg.jpg',
          desc:'dcscd',
          category:'sdcs',
          price:'49.66',
        },
        {
          id:3,
          title:'dcsd',
          img:'MainProductjpg.jpg',
          desc:'dcscd',
          category:'sdcs',
          price:'49.66',
        },
      ]
    }
  };
  return() {
    return(
    <div className="wrapper">
      <Header />
      <Items items={this.state.items} />
      <Footer />
    </div>
    )
  };
}

export default App;
