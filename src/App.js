import { Component } from 'react';
import './App.css';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';

class App extends Component {
  constructor(){
    super(); //calls extends class.
    this.state = {
      monsters:[],
      searchField:'',
    };
    // console.log("constructor");
  }

  componentDidMount(){
    // console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>response.json())
      .then((users)=>
        this.setState(
          ()=>{
            return {monsters:users};
          }
        ))
  }
  onSearchChange = (event)=>{
    // console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchField};
    })
  }
  render(){
    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        {/* {filteredMonsters.map((monster)=>{
            return <div key={monster.id}><h1>{monster.name}</h1></div>;
        })} */}
        <SearchBox onChangeHandler={onSearchChange} placeholder='Search monsters' className={'search-box'}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  
}

{/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hello {this.state.name.firstName} {this.state.name.lastName}!
          </p>
          <button onClick={
            // ()=>{
            //   this.setState({name:{firstName:'shashank',lastName:'shekhar'}});
            //   console.log(this.state)
            // }
            //setstate(,callback)
            ()=>{
                this.setState(()=>{
                  return {
                    name:{firstName:'shashank',lastName:'shekhar'}
                  };
                },()=>{
                  console.log(this.state);
                });
              }
          }>
            Change Name
          </button>
</header> */}


export default App;

