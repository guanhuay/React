import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// take application state as argument
function mapStateToProps(state) {
  // whatever is returend will show up as props
  // inside of Booklist
  return {
    books: state.books
  };
}

// Anything returend from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote Booklist from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it availble as a props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
