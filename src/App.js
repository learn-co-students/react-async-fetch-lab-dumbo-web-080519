// create your App component here
import React from 'react'

class App extends React.Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(peopleInSpace => {
      let allInSpace = peopleInSpace.people
      this.setState({
        peopleInSpace: [...allInSpace]
      })
    })
  }
  getEachAstro = () => {
    return this.state.peopleInSpace.map(person => {
      console.log(person.name)
      return person.name
    })
  }

  render() {
    // console.log(this.state.peopleInSpace)
    return (
      <div>
      <ul>
      {
        this.state.peopleInSpace.map(person => {
          console.log(person.name)
          return person.name
        })
        // this.getEachAstro()
      }
    </ul>
     </div>
  )
  }
}
export default App
