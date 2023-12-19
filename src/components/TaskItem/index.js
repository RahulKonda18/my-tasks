import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

const TaskItem = props => {
  const {details, remove, tags} = props
  const {id, value, tag} = details
  const tagg = tagsList.find(each => each.optionId === tag)

  const click = () => remove(id)
  return (
    <>
      {tags === '' ? (
        <li className="each">
          <p className="text">{value}</p>
          <p onClick={click} className="but">
            {tagg.displayText}
          </p>
        </li>
      ) : (
        tag === tags && (
          <li className="each">
            <p className="text">{value}</p>
            <p onClick={click} className="but">
              {tagg.displayText}
            </p>
          </li>
        )
      )}
    </>
  )
}

export default TaskItem
