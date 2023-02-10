import './index.css'

const SuggestionItem = props => {
  const {suggestionItemDetails, fillSuggestion} = props
  const {id, suggestion} = suggestionItemDetails
  const onArrow = () => {
    fillSuggestion(id)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onArrow}
      />
    </li>
  )
}
export default SuggestionItem
