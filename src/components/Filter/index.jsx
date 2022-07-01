import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types'

class Filter extends Component {
    filterInputId = nanoid()

    handleInputChange = (event) => {
        this.props.onChange(event.currentTarget.value)
    }

    render() {
        return (<>
            <label htmlFor={this.filterInputId}>Find contacts by name
                <input
                    onChange={this.handleInputChange}
                    value={this.props.value}
                    type="text"
                    id={this.filterInputId} />
            </label>
        </>)
    }
}

Filter.propTypes = {
    value: PropTypes.string.isRequired
}

export default Filter