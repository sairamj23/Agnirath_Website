import { useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Navigationbar/Header';
import Slider from '../components/Imagerotation/Section1';
import Content1 from '../components/Imageandtext/content1';
import Content2 from '../components/Imageandtext/content2';
import BlogGrid from '../components/Blog/blog-grid';
function Home() {
  
  return (
    <div className="app-container">
      <div className="top">
         <Header />
      </div>
      <Slider />
      <br />
      <br />
      <Content1 />
      <br />
      <Content2 />
      <br />
      <br />
      <div className="Blog">
         <BlogGrid />
      </div>
    </div>
  );
}

export default Home;
