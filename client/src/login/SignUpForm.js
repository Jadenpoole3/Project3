import React, { Component } from 'react'

class SignUpForm extends Component {
    render () {
        return (
            <div>
                <h1> Sign Up</h1>
                <form>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input  name="userName" type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input name="password" type="text" />
                    </div>
                    <button> Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUpForm