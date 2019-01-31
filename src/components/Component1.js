import React from 'react'
import { Spring } from 'react-spring';

export default function Component1() {
  return (
    <Spring>
        { props => (
            <div style={props}>
                <div style={c1style}>
                    <h1>Component 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et eros nec eros tempus convallis a eget diam. Mauris pellentesque lorem eros, ac facilisis arcu convallis sollicitudin. Fusce mi purus.</p>
                </div>
            </div>
        ) }
    </Spring>
    
  )
}

const c1style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}