import React from 'react';
import NameContext from '../contexts/name'

function NameBox() {
  return (
    <NameContext.Consumer>
      {value => <div>UserName : {value.name} & Phone Number : {value.no}</div>}
    </NameContext.Consumer>
  )
}

export default NameBox
