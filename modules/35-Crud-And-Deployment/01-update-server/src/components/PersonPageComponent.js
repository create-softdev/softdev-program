import React from 'react'
import PersonComponent from './PersonComponent'
import InitialsComponent from './InitialsComponent'
import {Redirect} from 'react-router'

export default class PersonPageComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      person: {},
      personState: 'loading'
    }
  }

  handleIncrementAge () {
    const person = this.state.person

    this.setState({ person: Object.assign({}, person, { age: person.age + 1 }) })
  }

  handleDecrementAge () {
    const person = this.state.person

    this.setState({ person: Object.assign({}, person, { age: person.age - 1 }) })
  }

  handleGenderChange (gender) {
    const person = this.state.person

    this.setState({ person: Object.assign({}, person, { gender }) })
  }

  handleNameChange (name) {
    const person = this.state.person

    this.setState({ person: Object.assign({}, person, { name }) })
  }

  handleSubmit (ev) {
    ev.preventDefault()
    this.setState({ personState: 'saving' })
    const xhr = new XMLHttpRequest()
    const index = this.props.match.params.index

    xhr.open('PUT', `https://create-bootcamp-people-server.now.sh/people/${index}`)
    xhr.addEventListener('load', () => {
      this.setState({ personState: 'saved' })
    })
    xhr.addEventListener('error', () => {
      this.setState({ personState: 'error-saving' })
    })
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(this.state.person))
  }

  componentDidMount () {
    const xhr = new XMLHttpRequest()
    const index = this.props.match.params.index

    xhr.open('GET', `https://create-bootcamp-people-server.now.sh/people/${index}`)
    xhr.addEventListener('load', () => {
      this.setState({ person: JSON.parse(xhr.responseText), personState: 'loaded' })
    })
    xhr.addEventListener('error', () => {
      this.setState({ personState: 'error' })
    })
    xhr.send()
  }

  render () {
    switch (this.state.personState) {
      case 'loading':
        return <div>Loading...</div>
      case 'error-loading':
        return <div>Error!</div>
      case 'loaded':
      case 'saving':
      case 'error-saving': {
        const person = this.state.person

        return <form onSubmit={ (ev) => this.handleSubmit(ev) }>
          <PersonComponent
            age={ person.age }
            gender={ person.gender }
            name={ person.name }
            decrementAge={ () => this.handleDecrementAge() }
            incrementAge={ () => this.handleIncrementAge() }
            changeGender={ (name) => this.handleGenderChange(name) }
            changeName={ (name) => this.handleNameChange(name) } />
            <InitialsComponent name={ person.name } />
            <button>Save</button>
            {this.state.personState === 'error-saving' ? <div>Could not save!</div> : undefined}
            {this.state.personState === 'saving' ? <div>Saving...</div> : undefined}
        </form>
      }
      case 'saved':
        return <Redirect push to="/" />
    }
  }
}
