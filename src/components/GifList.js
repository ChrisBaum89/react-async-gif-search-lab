import React, {Component} from 'react'

class GifList extends Component {
    render(){
       return (
        <div>
            <ul>{this.props.gifs.map(gif => <li key={gif.id}><img key={gif.id} src={gif.images.original.url} alt="gif" width="300"></img></li>)}</ul>
        </div>
       )
    }
}

export default GifList