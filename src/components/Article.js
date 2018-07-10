import React, {Component} from 'react'

class Article extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.defaultOpen !== this.props.defaulfOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    render(){
        const {article} = this.props
        const  body = this.state.isOpen && <section className="card-text">{article.id}</section>
        return (
            <div className="card mx-auto" style={{width: '50%'}}>
                <div className="card-header">
                    <h2>
                        {article.name}
                        <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right" >
                            {this.state.isOpen ? 'let go of' : 'catch'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        create date :{(new Date()).toDateString()}
                    </h6>
                    {body}
                </div>

            </div>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

/*function Article(props) {
    const {article} = props
    const  body = <section>{article.body}</section>
    return (
        <div className='hello' style={{color:'red'}}>
            <h2>
                {article.title}
                <button onClick={handleClick}>close</button>
                </h2>
            {body}
            <h3>create date :{(new Date()).toDateString()}</h3>
        </div>
    )
}*/

/*function handleClick() {
    console.log('---', 'clicked')
}*/
/*чтобы использовать в других компонентах*/
export default  Article