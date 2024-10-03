import React, { useContext } from 'react'
import { useState } from 'react'

import { FetchApiContext } from '../../contexts/fetchApiContext'


const ApiUse = () => {
  
  const { data } = useContext(FetchApiContext)


    return (

        <div>
            <h1>Api Use</h1>
            <p>{data.title}</p>
        </div>

    
  )
}

export default ApiUse