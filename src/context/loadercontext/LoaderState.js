import React, { useState } from 'react'
import LoaderContext from '.'

const LoaderState = (props) => {
  const [loading, setLoading] = useState(false)
  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {props.children}
    </LoaderContext.Provider>
  )
}

export default LoaderState