import React from 'react'
import PersonComponent from './PersonComponent'
import InitialsComponent from './InitialsComponent'
import { Redirect } from 'react-router'

export default class PersonPageComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      person: {
        gender: 'female',
        age: 50,
        name: ''
      },
      personState: !this.isNew() ? 'loading' : 'loaded'
    }
  }

  isNew () {
    return this.props.match.params.index === 'new'
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

    if (index === 'new') {
      xhr.open('POST', `https://create-bootcamp-people-server.now.sh/people`)
    }    else {
      xhr.open('PUT', `https://create-bootcamp-people-server.now.sh/people/${index}`)
    }

    xhr.addEventListener('load', () => {
      this.setState({ personState: 'saved' })
    })
    xhr.addEventListener('error', () => {
      this.setState({ personState: 'error-saving' })
    })
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(this.state.person))
  }

  handleDelete () {
    this.setState({ personState: 'deleting' })
    const xhr = new XMLHttpRequest()
    const index = this.props.match.params.index

    xhr.open('DELETE', `https://create-bootcamp-people-server.now.sh/people/${index}`)

    xhr.addEventListener('load', () => {
      this.setState({ personState: 'deleted' })
    })
    xhr.addEventListener('error', () => {
      this.setState({ personState: 'error-deleting' })
    })
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(this.state.person))
  }

  componentDidMount () {
    const xhr = new XMLHttpRequest()
    const index = this.props.match.params.index

    if (index === 'new') {
      return
    }

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
      case 'deleting':
      case 'error-deleting':
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
            { !this.isNew() && <input type="button" value="Delete" onClick={ () => this.handleDelete() } /> }
            {this.state.personState === 'error-saving' && <div>Could not save!</div>}
            {this.state.personState === 'error-deleting' && <div>Could not delete!</div>}
            {this.state.personState === 'saving' && <div>Saving...</div>}
            {this.state.personState === 'deleting' && <div>Deleting...</div>}
        </form>
      }
      case 'saved':
      case 'deleted':
        return <Redirect push to="/" />
    }
  }
}
