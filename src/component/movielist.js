import React, { Component } from 'react';
import MovieCard from '../component/moviecard.js';
import theMovieDb from '../util/themoviedb.js';

const baseurl = 'https://image.tmdb.org/t/p/';

class MovieList extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {};
        this.lists = [];
        
        switch(props.type){
            case 'nowplaying': this.type = 'getNowPlaying';break;
            case 'toprate': this.type = 'getTopRated';break;
            case 'popular': this.type = 'getPopular';break;
            case 'latest': this.type = 'getLatest';break;
        }
        
        theMovieDb.movies[this.type](
            {region:'id'},
            response => {
                let r = JSON.parse(response);
                this.setState({results: r.results}); 
                console.log(r);
            },
            error => {
                console.error('### Error Msg : ',error);
            }
        );
    }
    
    createMovieBox = () => {
        var lists = [];
        if (this.state.results){
            for (var i=0; i<this.state.results.length; i++){
                lists.push(
                    <MovieCard 
                        src={baseurl+'/w500'+this.state.results[i].poster_path}
                        title={this.state.results[i].title}
                        rate={this.state.results[i].popularity}
                    />
                )
            }
        }
        return lists;
    }
    
    componentDidMount() {
    }

    componentWillUnmount() {
    }
    
    render() {
        
        return (
            <section className="movie-list">
                <h2>{this.props.title}</h2>
                <div className="movie-list-row">
                    {this.createMovieBox()}
                </div>
            </section>
        );
    }
}

export default MovieList;