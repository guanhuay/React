import React, { Component } from 'react';

// functional component
// const SearchBar = () => {
//   return <input />;
// };

//class component, every react class component must define a render function
class SearchBar extends Component {
  // how to define and init state in class based component,
  // functional component doesn't have state
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    // return <input onChange={this.onInputChange} />;
    return (
      <div className="search-bar">
        <form role="form">
          <input
            value = {this.state.term}
            // cause the entire component to re-render when input changed
            onChange={(event) => this.onInputChange(event.target.value)} />
          <button type="submit" className="btn btn-success" onClick={this.search()}>Search</button>
        </form>
        <br/>
        Value of the input: {this.state.term}
      </div>
    );
  }

  search() {
    this.props.onSearchTermChange(this.state.term);
  }

  onInputChange(term) {
    this.setState({term});
    // this.props.onSearchTermChange(term);
  }

  // onInputChange(event) {
  //   console.log(event); //event object
  //   console.log(event.target.value);
  // }
}

// this SearchBar is the same as the const SearchBar;
export default SearchBar;
