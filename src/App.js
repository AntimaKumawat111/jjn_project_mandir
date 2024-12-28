"use client";
import './App.css';
import Header from './components/header';
import SecondHeaderTags from './components/second_header';
import Carousel from './components/carousel';
import PotterContainer from './components/pottar_container';
import SecondWindow from './components/second_window';

function App() {
  return (
    <>
    <div className="App">
        <Header/>
        <SecondHeaderTags/>
        <Carousel/>
        <PotterContainer/>
        <SecondWindow/>
        </div>
    </>
  );
}

export default App;
