import React, { useEffect } from "react";
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display"
import Form from "./Form"

function App() {
// URL variable to hold backend url 
const url = "https://pu2knnn00m.execute-api.us-east-2.amazonaws.com/dev"

// initial state to hold the list of songs
const [songs, setSongs] = React.useState([])

// create empty song variable 
const emptySong = {
  Title: "",
  Artist: "",
  Time: 0
}

const [selectedSong, setSelectedSong] = React.useState(emptySong)

// function to get list of songs
const getSongs = () => {
  fetch(url + "/tunr")
  .then((response) => response.json())
  .then((data) =>{
    console.log('data',data)
    setSongs(data.body)
  })
  
}

// useEffect acts as a page onload
React.useEffect(() => {
  getSongs()
},[])

// handleCreate/"POST"/  creates a new song 
const handleCreate = (newSong) => {
  fetch(url + "/tunr/", {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(newSong)
  })
  .then(() => getSongs())
}

// handleUpdate/"PUT"/updates the song 
const handleUpdate = (updateSong) => {
  fetch(url + "/tunr/" + updateSong.TunrId,{
    method: "PUT", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateSong)
  })
  .then(() => getSongs())
}

// function to specifiy which song we are updating the state with
const selectSong = (song) => {
  setSelectedSong(song)
}


const deleteSong = (song) => {
  fetch(url + "/tunr/" + song.TunrId, {
    method: "delete"
  })
  .then(() => getSongs())
}
  return (
    <div className="App">
      <h1 id="m-header">TUNR.</h1>
      <h3 id="m-second-header">FOR ALL YOUR PLAYLIST NEEDS</h3>
      <hr />
      <Link to='/create'>
        <button>Add Song</button>
        </Link>
      <main>
        <Switch>
          <Route exact path="/" render={(routerProps) => <Display
          {...routerProps}
          songs={songs}
          selectSong={selectSong}
          deleteSong={deleteSong}
          />} />
          <Route exact path="/create" render={(routerProps) => <Form 
          {...routerProps} 
          label="create" 
          song={selectedSong} 
          handleSubmit={handleCreate} />
          }
          />
          <Route exact path="/edit" render={(routerProps) =>
            <Form {...routerProps} 
            label="Submit" 
            song={selectedSong} 
            handleSubmit={handleUpdate} />
          }
          />
        </Switch>
      </main>    
    </div>
  );
}

export default App;