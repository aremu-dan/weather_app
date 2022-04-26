import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import SearchDiv from './SearchDiv'
import AppData from './content/Appdata.json'

function App() {

  // http://api.weatherapi.com/v1
  // d9e43eb252a60dc4bda2e5401c07f1e0

  // console.log(AppData);

  const [Weather, setWeather] = useState({temp:''})
  const [Data, setData] = useState({
    location: '',
    isSearched: false
  })

  
  useEffect(()=>{

    // // Current Weather API Endpoint
    // http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=LAGOS
    // // optional parameters: 
    // & units = m
    // & language = en
    // & callback = MY_CALLBACK

    // console.log(url);
  }, [Weather]);


  const handleInput = (e) => {
    setData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Data.location !== ''){
      getData();
    }

    // setData(prevState => {
    //   return {...prevState, isSearched:true}
    // }, [getData()])
  }

  async function getData() {
    const url = AppData.url + 
      AppData.secret_key + 
      AppData.query + 
      Data.location;
      
    // My Implementation
    const response = await fetch(url);
    const responseJSON = await response.json();

    if(!responseJSON.success){
      setData(prevState => {
        return {...prevState, isSearched:true}
      })
    }else{
      setData(prevState => {
        return {...prevState, isSearched:false}
      })
    }

    console.log(responseJSON);
  }


  return (
    <div className='App'>
      <div className='device'>
        <div className='head'>
          <h1>What's The Weather</h1>
          <p>Enter the name of a city :</p>
        </div>
        <div className='body'>
          <form  onSubmit={handleSubmit}>
            <input type='text' className='inputField' name='location' placeholder='Eg. London, Lagos, New York' value={Data.location} onChange={handleInput}/>
            <button type="submit">submit</button>
          </form>

          {/*  */}
          {Data.isSearched && <SearchDiv Weather={Weather} />}
        </div>
      </div>
    </div>
  );
}

export default App;
