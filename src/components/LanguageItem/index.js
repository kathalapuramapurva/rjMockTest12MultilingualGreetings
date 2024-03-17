import './index.css'

const LanguageItem = props => {
  const {activeId, languageDetails, clickMakeActive} = props
  const {id, buttonText} = languageDetails
  const buttonClassName = activeId === id ? 'active' : 'normal'
  const onClickMakeActive = () => {
    clickMakeActive(id)
  }

  return (
    <li className="each-button-item">
      <button
        type="button"
        className={`style-button ${buttonClassName}`}
        onClick={onClickMakeActive}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageItem
