import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {searchInput: '', isClicked: false}

  updateSearchInput = event => this.setState({searchInput: event.target.value})

  changeEditable = () => {
    const {isClicked} = this.state
    this.setState({isClicked: !isClicked})
  }

  render() {
    const {searchInput, isClicked} = this.state
    const buttonText = isClicked ? 'Edit' : 'Save'

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="title">Editable Text Input</h1>
          <div className="card">
            {isClicked ? (
              <p className="text">{searchInput}</p>
            ) : (
              <input type="search" onChange={this.updateSearchInput} />
            )}
            <button className="btn" onClick={this.changeEditable} type="button">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
