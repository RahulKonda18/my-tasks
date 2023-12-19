import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import TagItem from './components/TagItem'
import TaskItem from './components/TaskItem'
import './App.css'

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

class App extends Component {
  state = {
    taskList: '',
    task: '',
    taskTag: tagsList[0].optionId,
    selectedTag: '',
  }

  add = () => {
    const {taskList, task, taskTag} = this.state
    this.setState({
      taskList: [...taskList, {id: uuid(), value: task, tag: taskTag}],
      task: '',
      taskTag: tagsList[0].optionId,
    })
  }

  choose = id => {
    const {selectedTag} = this.state
    let x
    if (selectedTag === id) {
      x = ''
    } else {
      x = id
    }
    this.setState({selectedTag: x})
  }

  remove = id => {
    const {taskList} = this.state
    const x = taskList.filter(each => each.id !== id)
    this.setState({taskList: x})
  }

  changeTask = e => {
    this.setState({task: e.target.value})
  }

  selectChange = e => {
    this.setState({taskTag: e.target.value})
  }

  render() {
    const {taskList, task, selectedTag, taskTag} = this.state
    return (
      <div className="bg">
        <form className="left-bg">
          <h1 className="heading">Create a Task</h1>
          <div className="input-bg">
            <label htmlFor="input">Task</label>
            <br />
            <input
              onChange={this.changeTask}
              className="input"
              id="input"
              type="text"
              value={task}
              placeholder="Enter the task here"
            />
          </div>
          <div className="select-bg">
            <label htmlFor="tag-element">Tags</label>
            <br />
            <select
              value={taskTag}
              className="select"
              id="tag-element"
              name="tag"
              onChange={this.selectChange}
            >
              {tagsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </div>
          <div className="button-container">
            <button onClick={this.add} type="button" className="add-button">
              Add Task
            </button>
          </div>
        </form>
        <div className="right-bg">
          <h1 className="right-heading">Tags</h1>
          <ul className="tags-list">
            {tagsList.map(each => (
              <TagItem
                choose={this.choose}
                key={each.optionId}
                details={each}
                selected={selectedTag}
              />
            ))}
          </ul>
          <h1 className="right-heading">Tasks</h1>
          <ul className="tasks-list">
            {taskList.length === 0 ? (
              <p className="color">No Tasks Added yet</p>
            ) : (
              taskList.map(each => (
                <TaskItem
                  tags={selectedTag}
                  remove={this.remove}
                  key={each.id}
                  details={each}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
