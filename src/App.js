import React from "react";
//import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movies";
import "./App.css";
class App extends React.Component {
  /* example for state
  //App className get extended from React className component
  state = {
    count: 0,
  };

  //this is customized function
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  //In actual, we gotta display repeatedly page with new state.
  //react refreshes by calling render and shows with new state.
  //Hence, use 'setState' that call automatically 'render' and etc.
  //(Thus, we need to make iteration by for, while)
  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
  */

  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    //asynchronous function
    //await till axios is done.
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

/*  ========== function component part ==================
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://t1.daumcdn.net/cfile/tistory/99D9CE4C5D310D5323",
    rating: 3.0,
  },
  {
    id: 2,
    name: "Kimbab",
    image:
      "https://lh3.googleusercontent.com/proxy/WVYe4H9nRSS5OqXji483IFm76MaB-iwFw-OkD8X4ZXfjCPZAPW9l3dkTWBUEn3z8VlJNToTMrSOGnnfEkbyzrKUElc8zJC6TMVSaCyKCzfnaDNgPEV8yMxTIX5VlEjpRUDXvqp59ZBlSpIJdndKC0VkkmuUJ",
    rating: 5.0,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      <h1>Hello~~~</h1>
      <Food name="Tofu" picture="None" rating={1.0} />
      {foodILike.map(function (element) {
        return element.name + "❤️";
      })}
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}
//map : iterator for each element.
*/

export default App;

//<Food fav="Kimchi"/> : fav is property, argument
//                     : Food is function
//                     : return as HTML format

/* VScode Commands
select all same name : ctrl + shift+ L
copy a line : Shift + Alt + ⬆️ or ⬇️
move a line : Alt + ⬆️ or ⬇️
delete a line : Ctrl + Shift + K
change to Uppercase : select range & Ctrl + Shift + P (Palette)
                      search 'Transform to Uppercase'
*/

//Module not found:
// just do 'npm i' //wow, automatically installed
