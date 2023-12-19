import './index.css'

const TagItem = props => {
  const {details, choose, selected} = props
  const {displayText, optionId} = details

  const click = () => choose(optionId)
  return (
    <li>
      {selected === optionId ? (
        <button onClick={click} type="button" className="but">
          {displayText}
        </button>
      ) : (
        <button onClick={click} type="button" className="tag-button">
          {displayText}
        </button>
      )}
    </li>
  )
}

export default TagItem
