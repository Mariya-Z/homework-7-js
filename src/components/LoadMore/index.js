export default
constructor(props){
    super(props);
    this.state ={
        post:[]
        page: 1
    }
    componentDidMount(){
        fetch(url)
            .then((response) => response.json)
            .then ((post)=>{
                this,setState({posts})
            })
    }
    render(){
        const {post, posts} = this.state
        return(
            <Fragment>
                {post.map((post) => <Post key = {post.id} title = post.title  description = post.description/>)}
                <button onClick={this.loadPost}>load more</button>
            </Fragment>
        )
    }