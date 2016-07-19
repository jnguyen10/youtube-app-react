import React, {Component} from 'react'

// Class-based component (ES6)
class SearchBar extends Component {
  // Only class-based components have states; function-based components do not
  constructor(props) {
    super(props);

    this.state = { search_term: "" };
  }

  // Every class must have a render function that returns JSX
  render() {
    return (
      <div className="search-bar">
        Search YouTube:
        <input
          value={this.state.search_term}
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    )
  }

  onInputChange(search_term) {
    this.setState({ search_term });
    this.props.onSearchTermChange(search_term);
  }

  // handleInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
