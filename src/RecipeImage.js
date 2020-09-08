import React from 'react'
import PropTypes from 'prop-types'

class RecipeImage extends React.Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let keyframes = [
            {opacity: 1},
            {opacity: 0.5},
            {opacity: 1}
        ]
        
        let options = {
            duration: 500,
            iterations: 5
        }
        if(this.ref) {
            this.ref.animate(
                keyframes,
                options
            );
        }
    }

    render() {
        return (
            <img 
                id="main-image" 
                src={this.props.src} 
                ref={(theImage) => this.ref=theImage}
            />
        )
    }
    
}

RecipeImage.propTypes = {
    src: PropTypes.string.isRequired
}

export default RecipeImage

