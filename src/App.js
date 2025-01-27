import React, { Component } from 'react';
import './App.css';

import HeaderForm from './components/headerForm';
import Search from './components/search';
import Item from './components/item';
import items from './data/items';

class App extends Component {
  constructor(){
    super();
    this.state = {
      header: 'Welcome learning about React Events',
      allItems: items,
      filtered: false,
      filteredItems: []
    }
  }

  changeHeader = (txt) => {
    this.setState({header: txt})
  }

  arraySelection = () => {
    if (this.state.filtered) {
      return this.state.filteredItems
    } else {
      return this.state.allItems
    }
  }

  //use this function to change filtered value true or false.
  changeFilterInfo = (arr) => {
    if (arr == []) {
      this.setState({
        filterd: false
      })
    } else {
      this.setState({
        filtered: true,
        filteredItems: arr
      })
    }
  }
  render () {
    let itemList = this.arraySelection().map((item, index) => <Item name={item.name} key={index+1} />)
    return (
      <div className='bkgd-color'>

        <header>
          <h1>{this.state.header}</h1>
          <hr />
        </header>
        <HeaderForm header={this.state.header} changePHeader={this.changeHeader}/>
        <div className='white-card'>
        <Search orgItems={this.state.allItems} changePFilterInfo={this.changeFilterInfo}/>

        <ul>
          {itemList}
        </ul>

        </div>
      </div>
    );
  }
}

export default App;
