import React, { Component } from 'react';
import './App.css';
import MovieList from './component/movielist.js';

class App extends Component {
    componentDidMount() {
        //this.timerID = setInterval(() => this.tick(),1000);
    }
    render() {
        return (
            <div className="App">
                <header><h1>Header</h1></header>
                <main>
                    <MovieList type="nowplaying" title="Sedang Tayang"/>
                    <MovieList type="toprate" title="Top Rate"/>
                    <MovieList type="popular" title="Terpopuler"/>
                </main>
                <footer>&copy; 2018 Alwin Maulana. All Rights Reserved</footer>
            </div>
        );
    }
}

export default App;
/*<MovieList type="toprate" tittle="Top Rate"/>
                    <MovieList type="popular" tittle="Terpopuler"/>*/