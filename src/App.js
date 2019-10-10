import React from 'react';
import SearchBar from'./SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOptions: 'All',
    };
  };
  
  updateSearchTerm(term) {
      this.setState({
        searchTerm: term
      })
    };

    updateFilterOption(option) {
      this.setState({
        filterOptions: option
      })
    }

  render() {
    return (
      <main className='App'>
        <SearchBar 
          searchTerm= {this.state.searchTerm}
          filterOption = {this.state.filterOptions}
          handleUpdate = {term => this.updateSearchTerm(term)}
          handleFilterChange={option => this.updateFilterOption(option)}/>
        <FilterableList 
          files={this.props.files}
          searchTerm= {this.state.searchTerm}
          filterOption = {this.state.filterOptions}
          />
      </main>
    );
  }
}

export default App;