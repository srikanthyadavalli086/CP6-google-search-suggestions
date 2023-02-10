import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  fillSuggestion = id => {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const X = suggestionsList.filter(each => each.id === id)

    console.log(searchInput[0].suggestion)
    this.setState({
      searchInput: X[0].suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachUser =>
      eachUser.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul>
          {searchResults.map(eachSuggestion => (
            <SuggestionItem
              suggestionItemDetails={eachSuggestion}
              fillSuggestion={this.fillSuggestion}
              key={eachSuggestion.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
