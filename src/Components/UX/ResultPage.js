import React from "react";
import LoadingPage from "./LoadingPage";
import IMAGES from "../../img/index.js";

export default function ResultPage({
  adventure,
  restaurant,
  night,
  bar,
  coffeeAndTea,
  loading,
  restaurantMiles,
  barMiles,
  hangMiles,
  exploreMiles,
  userLocation
}) {
  const photos = Object.values(IMAGES);
  const directionsURL = `https://www.google.com/maps/dir/${userLocation.latitude},${userLocation.longitude}`

  const murican = photos.filter((item) => item.includes("american"));
  const arts = photos.filter((item) => item.includes("arts"));
  const barPhotos = photos.filter((item) => item.includes("bar"));
  const bbqPhotos = photos.filter((item) => item.includes("bbq"));
  const bowlingPhotos = photos.filter((item) => item.includes("bowling"));
  const chinesePhotos = photos.filter((item) => item.includes("chinese"));
  const coffeePhotos = photos.filter((item) => item.includes("coffee"));
  const concertPhotos = photos.filter((item) => item.includes("concert"));
  const coolPlacePhotos = photos.filter((item) => item.includes("cool"));
  const gardenPhotos = photos.filter((item) => item.includes("gardens"));
  const greekPhotos = photos.filter((item) => item.includes("greek"));
  const indianPhotos = photos.filter((item) => item.includes("indian"));
  const italianPhotos = photos.filter((item) => item.includes("italian"));
  const juicePhotos = photos.filter((item) => item.includes("juice"));
  const mexicanPhotos = photos.filter((item) => item.includes("mexican"));
  const museumPhotos = photos.filter((item) => item.includes("museum"));
  const parkPhotos = photos.filter((item) => item.includes("park"));
  const pizzaPhotos = photos.filter((item) => item.includes("pizza"));
  const teaPhotos = photos.filter((item) => item.includes("tea"));
  const theatre = photos.filter((item) => item.includes("theatre"));

  const muricanPhoto = murican[Math.floor(Math.random() * murican.length)];
  const artsPhoto = arts[Math.floor(Math.random() * arts.length)];
  const barPhoto = barPhotos[Math.floor(Math.random() * barPhotos.length)];
  const bbqPhoto = bbqPhotos[Math.floor(Math.random() * bbqPhotos.length)];
  const bowlingPhoto =
    bowlingPhotos[Math.floor(Math.random() * bowlingPhotos.length)];
  const chinesePhoto =
    chinesePhotos[Math.floor(Math.random() * chinesePhotos.length)];
  const coffeePhoto =
    coffeePhotos[Math.floor(Math.random() * coffeePhotos.length)];
  const concertPhoto =
    concertPhotos[Math.floor(Math.random() * concertPhotos.length)];
  const coolPlacePhoto =
    coolPlacePhotos[Math.floor(Math.random() * coolPlacePhotos.length)];
  const gardenPhoto =
    gardenPhotos[Math.floor(Math.random() * gardenPhotos.length)];
  const greekPhoto =
    greekPhotos[Math.floor(Math.random() * greekPhotos.length)];
  const indianPhoto =
    indianPhotos[Math.floor(Math.random() * indianPhotos.length)];
  const italianPhoto =
    italianPhotos[Math.floor(Math.random() * italianPhotos.length)];
  const juicePhoto =
    juicePhotos[Math.floor(Math.random() * juicePhotos.length)];
  const mexicanPhoto =
    mexicanPhotos[Math.floor(Math.random() * mexicanPhotos.length)];
  const museumPhoto =
    museumPhotos[Math.floor(Math.random() * museumPhotos.length)];
  const parkPhoto = parkPhotos[Math.floor(Math.random() * parkPhotos.length)];
  const pizzaPhoto =
    pizzaPhotos[Math.floor(Math.random() * pizzaPhotos.length)];
  const teaPhoto = teaPhotos[Math.floor(Math.random() * teaPhotos.length)];
  const theatrePhoto = theatre[Math.floor(Math.random() * theatre.length)];

  if (!loading) {
    return (
      <div className="results-container">
        <div className="restuarant-match">
          <div className="card">
            <img
              src={
                night.restaurant === "Chinese"
                  ? chinesePhoto
                  : night.restaurant === "Italian"
                  ? italianPhoto
                  : night.restaurant === "Mexican"
                  ? mexicanPhoto
                  : night.restaurant === "Indian"
                  ? indianPhoto
                  : night.restaurant === "Pizza"
                  ? pizzaPhoto
                  : night.restaurant === "American Grill"
                  ? muricanPhoto
                  : night.restaurant === "BBQ"
                  ? bbqPhoto
                  : night.restaurant === "Pub Food"
                  ? barPhoto
                  : night.restaurant === "Greek"
                  ? greekPhoto
                  : muricanPhoto
              }
              className="card-img-top"
              alt="Restaurant"
            />
            <div className="card-body">
              <h5 className="card-title">Somewhere To Eat:</h5>
              <p className="card-text">{restaurant.name}</p>
              <div className="row d-flex justify-content-between">
                <a 
                href={`${directionsURL}/${restaurant.name.split(" ").join("+")},${restaurant.Address.addressLine.split(" ").join("+")}`} 
                className="btn btn-primary my-0"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Get Directions
                </a>
                <p className="my-0">{restaurantMiles} miles from you</p>
              </div>
            </div>
          </div>
        </div>
        {Object.keys(bar).length ? (
          <div className="bar-match">
            <div className="card">
              <img src={barPhoto} className="card-img-top" alt="Bar" />
              <div className="card-body">
                <h5 className="card-title">Somewhere To Drink:</h5>
                <p className="card-text">{bar.name}</p>
                <div className="row d-flex justify-content-between">
                    <a 
                    href={`${directionsURL}/${bar.name.split(" ").join("+")},${bar.Address.addressLine.split(" ").join("+")}`} 
                    className="btn btn-primary my-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Get Directions
                    </a>
                    <p className="my-0">{barMiles} miles from you</p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="hang-match">
          <div className="card">
            <img
              src={
                night.coffeeOrTea === "Coffee Shop"
                  ? coffeePhoto
                  : night.CoffeeOrTea === "Tea"
                  ? teaPhoto
                  : juicePhoto
              }
              className="card-img-top"
              alt="Hot Beverage Place"
            />
            <div className="card-body">
              <h5 className="card-title">Somewhere To Hang:</h5>
              <p className="card-text">{coffeeAndTea.name}</p>
              <div className="row d-flex justify-content-between">
                <a 
                href={`${directionsURL}/${coffeeAndTea.name.split(" ").join("+")},${coffeeAndTea.Address.addressLine.split(" ").join("+")}`} 
                className="btn btn-primary my-0"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Get Directions
                </a>
                <p className="my-0">{hangMiles} miles from you</p>
              </div>
            </div>
          </div>
        </div>
        <div className="adventure-match">
          <div className="card">
            <img
              src={
                night.adventure === "Park"
                  ? parkPhoto
                  : night.adventure === "Concerts"
                  ? concertPhoto
                  : night.adventure === "Bowling"
                  ? bowlingPhoto
                  : night.adventure === "Theatre"
                  ? theatrePhoto
                  : night.adventure === "Garden"
                  ? gardenPhoto
                  : night.adventure === "Art"
                  ? artsPhoto
                  : night.adventure === "Museum"
                  ? museumPhoto
                  : night.adventure === "Adventure"
                  ? coolPlacePhoto
                  : parkPhoto
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Something to do:</h5>
              <p className="card-text">{adventure.name}</p>
              <div className="row d-flex justify-content-between">
                <a 
                href={`${directionsURL}/${adventure.name.split(" ").join("+")},${adventure.Address.addressLine.split(" ").join("+")}`} 
                className="btn btn-primary my-0"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Get Directions
                </a>
                <p className="my-0">{exploreMiles} miles from you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <LoadingPage />;
  }
}
