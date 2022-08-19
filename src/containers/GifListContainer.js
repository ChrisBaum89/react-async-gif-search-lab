import React, {Component} from "react"
import GifSearch from "../components/GifSearch"
import GifList from "../components/GifList"

class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
            searchInput: "dolphin",
        }
    }

    componentDidMount(){
        this.gifFetch(this.state.searchInput)
    }

    gifFetch = (searchInput) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=B7KdHeI9gfnEiixa6pyAOemkL46hVUCT&rating=g&limit=3`)
        .then(response => response.json())
        .then(data => this.setState({gifs: data.data}))
    }
    
    render(){
        return (
            <div>
                < GifSearch gifFetch={this.gifFetch}/>
                < GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer