import React, { Component } from 'react';

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
    }

    componentWillUnmount() {
    }
    
    render() {
        return (
            <div className="movie-list-card">
                <img 
                    className='movie-list-img'
                    src={this.props.src}
                    alt={this.props.alt}
                />
            </div>
        );
    }
}

export default MovieCard;