import React from 'react';
import PropTypes from 'prop-types'

class Orderform extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            giftwrap: false,
            isSubmitted: false,
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        console.log("submitted")
        this.setState({ isSubmitted: true })
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.type === 'checkbox' ?
                event.target.checked : event.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.isSubmitted ?
                    <div className="success">
                        Thank you for your order! Order details:
                        <ul>
                            <li>Firstname: {this.state.firstname}</li>
                            <li>Lastname: {this.state.lastname}</li>
                            <li>Gift wrap: {this.state.giftwrap ? "Yes" : "No"}</li>
                        </ul>
                    </div>
                    : <div>
                        <h2>Place your order</h2>
                        <label htmlFor="firstname">First name</label>
                        <input type="text" value={this.state.firstname} name="firstname" onChange={this.handleInputChange} />
                        <label htmlFor="lastname">Last name</label>
                        <input type="text" value={this.state.lastname} name="lastname" onChange={this.handleInputChange} />
                        <label htmlFor="giftwrap">Gift wrapping</label>
                        <input name="giftwrap" type="checkbox" checked={this.state.giftwrap} onChange={this.handleInputChange} />
                        <div><input type="submit" name="submit" value="Submit order" onClick={this.handleSubmit} /></div>
                    </div>
                }
            </div>

        )
    }

}

export default Orderform

