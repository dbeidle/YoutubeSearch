import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchField: "",
  };

  handleSearchInput = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchField);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleSearchInput}>
          <label>Search Videos</label>
          <div className="field">
            <input
              type="text"
              placeholder="What would you like to see?"
              onChange={(e) => this.setState({ searchField: e.target.value })}
              value={this.state.searchField}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
