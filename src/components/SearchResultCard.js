import React from 'react';

import SearchCard from '../layouts/SearchCard'

const SearchResultCard = (props) => {
    console.log(props.movie)
    return (
    <React.Fragment>
        {props.movie ?
            <SearchCard>
                    <div>
                        {props.movie.poster_path ? <img src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path} alt={props.movie.title} style={{"height": "200px", "float": "left", "paddingRight": "20px"}} /> : <img src={"https://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png"} alt={props.movie.title} style={{"height": "200px", "float": "left"}} />}
                    <h3>{props.movie.title}</h3>
                    <h4>Released {props.movie.release_date.split('-')[0]}</h4>
                        <p><strong>Overivew:</strong>{" "}{props.movie.overview}
                            <br />
                            <br />
                            <a href={"https://www.themoviedb.org/movie/" + props.movie.id} target="_blank" alt={props.movie.title} rel="noreferrer">
                                <button style={{"backgroundColor": "transparent", "border": "1px solid black", "borderRadius": "20px", "padding":"10px", "fontSize":"18px"}}>Read More via TMDB.org</button>
                            </a>
                        </p>
                    </div>
        </SearchCard >
                : null}
            <br />
            <br />
    </React.Fragment>
    )
}

export default SearchResultCard

//* adult: false
//* backdrop_path: "/rz6UU6A5WxQTgRjKa2LSsGPv1kF.jpg"
//* genre_ids: (5) [16, 12, 18, 14, 10749]
//* id: 30491
//* original_language: "ja"
//* original_title: "Parumu no Ki"
//* overview: "A Tree of Palme is an interpretation of the Pinocchio tale. It concerns a small puppet, Palme, who was tasked by his creator to look over his ailing wife, Xian. After her passing, Palme is visited by a mysterious woman who he mistakenly believes to be Xian. Shaken out of his sadness, Palme accepts her request to deliver something special to a far-off place known as Tama. This sets Palme off on a journey to discover his own emotions, and what it truly means to be human."
//* popularity: 3.412
//* poster_path: "/7ZJgUbuAsCAzg2Yav8eD5PqpHTN.jpg"
//* release_date: "2002-03-16"
//* title: "A Tree of Palme"
//* video: false
//* vote_average: 6.3
//* vote_count: 8