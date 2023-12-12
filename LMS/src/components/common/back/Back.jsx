import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section className='back'>
        <h1>Excellence!</h1>
        <h2>Excellence at your pace</h2><br />
        <h2>Excellence made fun</h2>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
