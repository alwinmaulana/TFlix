class NowPlaying extends React.Component {
    
    constructor(props) {
        super(props);
        //this.state = {date: new Date()};
    }
    
    componentDidMount() {
        //this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        //clearInterval(this.timerID);
    }
    
    render() {
        return (
          <div>
            <h1>Sedang Tayang</h1>
          </div>
        );
    }
}

theMovieDb.movies.getNowPlaying(
    null, 
    response => {
        console.log('response', response);
    },
    error => {
        console.log('error', error);
    }
);

ReactDOM.render(<Now Playing />,document.getElementById('movie-now'));
