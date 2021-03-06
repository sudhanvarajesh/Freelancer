import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                <h1 className="x-large">Freelancer</h1>
                <p className="lead">
                    Hire the best freelancers for any job, online or earn money freelancing
                </p>
                <div className="buttons">
                    <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                    <Link to="/login" className="btn btn-light">Login</Link>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;