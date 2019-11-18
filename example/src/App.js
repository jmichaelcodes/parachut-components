import React, { Component } from 'react'

import { NestedButton } from 'parachut-components'
import { CircleButton } from 'parachut-components'
import { TextInput } from 'parachut-components'

import './index.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', width: '500px' }}>
          <NestedButton text="Go to cart" style={{ margin: '50px 0' }}/>
          <CircleButton text="Circle button" />
        </div>
        <div style={{ margin: '50px 0px 50px 10px', width: 400 }}>
          <TextInput placeholder="First name" style={{ marginBottom: 25 }} error='Invalid field' touched={true}/>
          <TextInput placeholder="Last name" style={{ marginBottom: 25 }} value='Williams' touched={true}/>
          <TextInput
            placeholder="Phone number"
            format="###-###-####"
            mask="_"
            type="number"
          />
        </div>
      </div>
    )
  }
}
