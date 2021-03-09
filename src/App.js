import React from "react";
import PropTypes from "prop-types";

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
