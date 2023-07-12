import React, { useEffect } from 'react';

function S2Component(props) {
  useEffect(() => {
    console.log(props);
  }, [])
  return (
    <div>
      {props.children}
    </div>
  )
}

function WorkArea() {
  return (
    <div className='table-area' >
      <S2Component>
        <h2>This is a heading</h2>
      </S2Component>
    </div>
  )
}

export default WorkArea