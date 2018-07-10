import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../features'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component{
    state = {
        revented: false
    }

    render(){
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-6">
                        Pokemons
                        <button className="btn float-right" onClick={this.revent}>Cathed pokemons</button>
                    </h1>
                </div>
                <ArticleList articles={articles} />
                <button className="btn" onClick={this.loadPost}>Load more</button>
            </div>
        )
    }

    revent = () => this.setState({
        revented: !this.state.revented
    })
}

export default App