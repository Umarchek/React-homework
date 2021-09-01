import React, { Component } from 'react';
import './App.css';
import Book from './Book/Book'

class App extends Component {
  state = {
    books: [
      { name: 'Harry Potter', year: 2005 },
      { name: 'Avatar', year: 2008 },
      { name: 'Marvel', year: 1995 },
      { name: 'Shaytanat', year: 1997 },
    ],
    title: 'Hello from state',
    showComponents: false
  }

  changeTitle = () => {
    // console.log('Clicked');

    this.setState({
      title: 'Changed Title'
    })
  }

  onChangeHandler = (event) => {
    // console.log('Changed', event.target.value);
    let val = event.target.value
    this.setState({
      title: val
    })
  }

  changeToggleComponents(show) {
    this.setState({
      showComponents: !show
    })
    // console.log('Changed', show);
  }

  changeTitleFromComponent = (name) => {
    this.setState({
      title: name
    })
  }

  inputChangeHandler(val, index) {
    const books = [...this.state.books]
    books[index].name = val
    this.setState({
      books
    })
  }

  deleteHandler(index) {
    // console.log('Try to delete', index);

    let books = [...this.state.books]

    books.splice(index, 1)

    this.setState({
      books
    })
  }

  render() {
    let books = null
    if (this.state.showComponents) {
      books = this.state.books.map((val, index) => {
        return (
          <Book
            key={index}
            name={val.name}
            year={val.year}
            onChange={this.changeTitleFromComponent.bind(this, val.name)}
            inputHandler={(event) => { this.inputChangeHandler(event.target.value, index) }}
            onDelete={(event) => { this.deleteHandler(index) }}
            inputValue={val.name}
          />
        )
      })
    } else {
      books = null
    }

    return (
      <div className="App" >
        <h1 className="headTitle">{this.state.title}</h1>
        <i className="fab fa-battle-net"></i>
        <input type="text" onChange={this.onChangeHandler} />
        <button onClick={this.changeTitle}>Click</button>
        <br />
        <br />
        <button onClick={() => { 
          this.changeToggleComponents(this.state.showComponents)}}>Toggle</button>
        {books}
      </div>
    );
  }
}

export default App;
