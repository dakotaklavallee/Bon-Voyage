import React, { useState, useEffect } from "react";
import "../src/App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Components/Constants/Header";
import HomePage from "./Components/Landings/HomePage";
import StartPage from "./Components/UX/StartPage";
import OptionsPage from "./Components/UX/OptionsPage";
import ResultPage from "./Components/UX/ResultPage";
import { getDistance } from "geolib";
const axios = require('axios');

function App() {

  const initialNightSelection = {
    restaurant: "restaurant",
    drinks: "bar",
    coffeeOrTea: "coffee",
    adventure: "park",
  };

  const navigate = useNavigate();

  const [night, setNight] = useState({ ...initialNightSelection });
  const [userLocation, setUserLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const [restaurant, setRestaurant] = useState({});
  const [coffeeAndTea, setCoffeeAndTea] = useState({});
  const [bar, setBar] = useState({});
  const [adventure, setAdventure] = useState({});
  const [loading, setLoading] = useState(true);
  const [restaurantMiles, setRestaurantMiles] = useState(0);
  const [barMiles, setBarMiles] = useState(0);
  const [hangMiles, setHangMiles] = useState(0);
  const [exploreMiles, setExploreMiles] = useState(0);

  useEffect(() => {
    const abortControl = new AbortController();
    async function getLocation() {
      try {
        if (navigator.geolocation) {
          const onSuccess = (location) => {
            setUserLocation({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            });
          };
          await navigator.geolocation.getCurrentPosition(onSuccess);
        } else {
          console.log("Position Failure");
        }
      } catch (error) {
        if (error.type === "AbortError") {
          console.log("User Location Aborted");
        } else {
          console.log(error);
        }
      }
    }
    getLocation();
    return () => abortControl.abort();
  });

  const questionsArray = [
    {
      question: "What Type of Food Do You Enjoy?",
      answers: [
        {
          answer: "Chinese",
          resultID: 0,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              restaurant: "Chinese",
            }),
        },
        {
          answer: "Italian",
          resultID: 1,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              restaurant: "Italian",
            }),
        },
        {
          answer: "Mexican",
          resultID: 2,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              restaurant: "Mexican",
            }),
        },
        {
          answer: "Indian",
          resultID: 3,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              restaurant: "Indian",
            }),
        },
        {
          answer: "Pizza",
          resultID: 4,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              restaurant: "Pizza",
            }),
        },
        {
          answer: "American Grill",
          resultID: 5,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              restaurant: "American Grill",
            }),
        },
        {
          answer: "BBQ",
          resultID: 6,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              restaurant: "BBQ",
            }),
        },
        {
          answer: "Pub Food",
          resultID: 7,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              restaurant: "Pub Food",
            }),
        },
        {
          answer: "Greek",
          resultID: 8,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              restaurant: "Greek",
            }),
        },
      ],
    },
    {
      question: "Drinks?",
      answers: [
        {
          answer: "Why Not?",
          resultID: 0,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              drinks: "Bar",
            }),
        },
        {
          answer: "Not Tonight",
          resultID: 1,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              drinks: "",
            }),
        },
      ],
    },
    {
      question: "Coffee or Tea?",
      answers: [
        {
          answer: "Coffee",
          resultID: 0,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              coffeeOrTea: "Coffee Shop",
            }),
        },
        {
          answer: "Tea",
          resultID: 1,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              coffeeOrTea: "Tea",
            }),
        },
        {
          answer: "Neither",
          resultID: 2,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              coffeeOrTea: "Juice",
            }),
        },
      ],
    },
    {
      question: "Pick an Adventure",
      answers: [
        {
          answer: "Hiking",
          resultID: 0,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              adventure: "Park",
            }),
        },
        {
          answer: "Concert",
          resultID: 1,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              adventure: "Concerts",
            }),
        },
        {
          answer: "Bowling",
          resultID: 2,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              adventure: "Bowling",
            }),
        },
        {
          answer: "Theatre",
          resultID: 3,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              adventure: "Theatre",
            }),
        },
        {
          answer: "Gardens",
          resultID: 4,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              adventure: "Garden",
            }),
        },
        {
          answer: "Arts",
          resultID: 5,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              adventure: "Art",
            }),
        },
        {
          answer: "Museum",
          resultID: 6,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              adventure: "Museum",
            }),
        },
        {
          answer: "Surprise Me",
          resultID: 7,
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            setNight({
              ...night,
              adventure: "Adventure",
            }),
        },
      ],
    },
    {
      question: "Are You Ready?",
      answers: [
        {
          answer: "Let's Do This!",
          resultID: 1,
          onAnswerSelection: (questionIndex, answerIndex, resultID) => {
            handleSubmit();
          },
        },
        {
          answer: "Nevermind.",
          resultID: 2,
          onAnswerSelection: (questionIndex, answerIndex, resultID) => {
            navigate("/");
          },
        },
      ],
    },
  ];

  const handleSubmit = async () => {
    const ac = new AbortController();
    async function fetchRestaurants() {
      if (userLocation.latitude) {
        try {
          const options = {
            method: "GET",
            url: `${process.env.REACT_APP_SERVER_URL}/restaurants`,
            params: {
              query: night.restaurant,
              userLatitude: userLocation.latitude,
              userLongitude: userLocation.longitude,
              scale: "8100",
            },
          };
          const response = await axios.request(options);
          const restaurantData = response.data;
          const restaurantArray = restaurantData.resourceSets[0].resources;
          const restaurantObj =
            restaurantArray[Math.floor(Math.random() * restaurantArray.length)];
          setRestaurant(restaurantObj);
          setRestaurantMiles(
            (
              getDistance(
                {
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude,
                },
                {
                  latitude: restaurantObj.point.coordinates[0],
                  longitude: restaurantObj.point.coordinates[1],
                }
              ) * 0.000621371
            ).toFixed(2)
          );
        } catch (error) {
          if (error.type === "AbortError") {
            console.log("Aborted Restaurant Fetch");
          } else {
            console.log(error);
          }
        }
      }
    }
    async function fetchBars() {
      if (night.drinks !== "" && userLocation.latitude) {
        try {
          const options = {
            method: "GET",
            url: `${process.env.REACT_APP_SERVER_URL}/bars`,
            params: {
              query: night.drinks,
              userLatitude: userLocation.latitude,
              userLongitude: userLocation.longitude,
              scale: "8100",
            },
          };
          const response = await axios.request(options);
          const barData = response.data;
          const barArray = barData.resourceSets[0].resources;
          const barObj = barArray[Math.floor(Math.random() * barArray.length)];
          setBar(barObj);
          setBarMiles(
            (
              getDistance(
                {
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude,
                },
                {
                  latitude: barObj.point.coordinates[0],
                  longitude: barObj.point.coordinates[1],
                }
              ) * 0.000621371
            ).toFixed(2)
          );
        } catch (error) {
          if (error.type === "AbortError") {
            console.log("Aborted Restaurant Fetch");
          } else {
            console.log(error);
          }
        }
      }
    }
    async function fetchCoffeeOrTea() {
      if (night.coffeeOrTea !== "" && userLocation.latitude) {
        try {
          const options = {
            method: "GET",
            url: `${process.env.REACT_APP_SERVER_URL}/coffeeandtea`,
            params: {
              query: night.coffeeOrTea,
              userLatitude: userLocation.latitude,
              userLongitude: userLocation.longitude,
              scale: "8100",
            },
          };
          const response = await axios.request(options);
          const coffeeResponse = response.data;
          const coffeeArray = coffeeResponse.resourceSets[0].resources;
          const coffeeObj =
            coffeeArray[Math.floor(Math.random() * coffeeArray.length)];
          setCoffeeAndTea(coffeeObj);
          setHangMiles(
            (
              getDistance(
                {
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude,
                },
                {
                  latitude: coffeeObj.point.coordinates[0],
                  longitude: coffeeObj.point.coordinates[1],
                }
              ) * 0.000621371
            ).toFixed(2)
          );
        } catch (error) {
          if (error.type === "AbortError") {
            console.log("Aborted Restaurant Fetch");
          } else {
            console.log(error);
          }
        }
      }
    }
    async function fetchAdventure() {
      if (userLocation.latitude) {
        try {
          const options = {
            method: "GET",
            url: `${process.env.REACT_APP_SERVER_URL}/adventures`,
            params: {
              query: night.adventure,
              userLatitude: userLocation.latitude,
              userLongitude: userLocation.longitude,
              scale: "8100",
            },
          };
          const response = await axios.request(options);
          const adventureData = response.data;
          const goArray = adventureData.resourceSets[0].resources;
          const goObj = goArray[Math.floor(Math.random() * goArray.length)];
          console.log(goObj.point.coordinates[0]);
          setAdventure(goObj);
          setExploreMiles(
            (
              getDistance(
                {
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude,
                },
                {
                  latitude: goObj.point.coordinates[0],
                  longitude: goObj.point.coordinates[1],
                }
              ) * 0.000621371
            ).toFixed(2)
          );
        } catch (error) {
          if (error.type === "AbortError") {
            console.log("Aborted Restaurant Fetch");
          } else {
            console.log(error);
          }
        }
      }
    }

    setTimeout(() => setLoading(false), 5000);
    navigate("/results");
    if (userLocation) {
      await fetchRestaurants();
      await fetchBars();
      await fetchCoffeeOrTea();
      await fetchAdventure();
    }

    return () => ac.abort();
  };

  const handleRandomizer = async () => {
    setNight(initialNightSelection);
    setTimeout(() => setLoading(false), 5000);
    await handleSubmit();
  }

  const resultTrigger = () => {
    console.log("result obtained");
    if (window.confirm("See Results?")) {
      handleSubmit();
    } else {
      navigate(0);
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid p-0">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/start"
            element={<StartPage handleRandomizer={handleRandomizer} />}
          />
          <Route
            path="/start/options"
            element={
              <OptionsPage
                questionsArray={questionsArray}
                resultHandler={resultTrigger}
              />
            }
          />
          <Route
            path="/results"
            element={
              <ResultPage
                adventure={adventure}
                night={night}
                restaurant={restaurant}
                bar={bar}
                coffeeAndTea={coffeeAndTea}
                loading={loading}
                restaurantMiles={restaurantMiles}
                barMiles={barMiles}
                hangMiles={hangMiles}
                exploreMiles={exploreMiles}
                userLocation={userLocation}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
