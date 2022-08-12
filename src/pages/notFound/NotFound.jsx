import React from 'react'
import "./notFound.css"
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2 className='notfound'>Oops ..!</h2>

        <h2>Page Note Found</h2>
        <Link to="/" className="btn">
          Go Back To Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound