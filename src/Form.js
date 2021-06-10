
import React from "react"

const Form =(props) =>{

    const [formData, setFormData] = React.useState(props.song)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push('/')
    }

    const handleChange = (event) => {
        setFormData( {...formData, [event.target.name] : event.target.value} )
    }

    
    return ( 
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            name='Title'
            value={formData.Title}
            onChange={handleChange}
            /> 
            <input
            type='text'
            name='Artist'
            value={formData.Artist}
            onChange={handleChange}
            />
            <input
            type='string'
            name='Time'
            value={formData.Time}
            onChange={handleChange}
            />
            <input
            type='submit'
            name="submit"
            value={props.label}
            />
        </form>
    )
}
export default Form
