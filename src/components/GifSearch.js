import React, {Component} from "react"

class GifSearch extends Component {
    constructor(){
        super()
        this.state = {
            searchInput: ""
        }
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.gifFetch(this.state.searchInput)
    }
    
    render(){
        return(
            <div style={{display: 'flex', justifyContent:'flex-end'}}>
                <form onSubmit={this.handleSubmit}>
                    <p>Enter a Search Term:</p>
                    <input type="text" name="searchInput" value={this.state.searchInput} onChange={this.handleChange}/>
                    <br />
                    <input type="submit" name="submit"/>
                </form>
            </div>
        )
    }
}

export default GifSearch