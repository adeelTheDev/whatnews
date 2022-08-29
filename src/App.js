import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';
import { Component } from 'react';

class App extends Component{
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress})
  }
  render(){
    return (
  
      <>
      <Router>
        <LoadingBar shadow={false} color='darkred' progress={this.state.progress} />
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" category="general" setProgress={this.setProgress} />} />
          <Route exact path="/business" element={<News key="business" category="business" setProgress={this.setProgress} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" setProgress={this.setProgress} />} />
          <Route exact path="/health" element={<News key="health" category="health" setProgress={this.setProgress} />} />
          <Route exact path="/science" element={<News key="science" category="science" setProgress={this.setProgress} />} />
          <Route exact path="/sports" element={<News key="sports" category="sports" setProgress={this.setProgress} />} />
          <Route exact path="/technology" element={<News key="technology" category="technology" setProgress={this.setProgress} />} />
        </Routes>
      </Router>
      </>
    );
  }
}

export default App;
