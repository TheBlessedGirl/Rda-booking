import React from 'react';
import Nav from '../components/navbar';
import  './home.css';
import 'antd/dist/antd.css';
// import './index.css';
import {Carousel} from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import lake from '../assets/images/lake.webp';
import tour1 from '../assets/images/tour1.webp';
import goo from '../assets/images/goo.jpg';
import Footer from '../components/footer.js';
import Homelayout from '../components/Homelayout';
import Tours from '../views/Tours';




const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => console.log(value);

const Home =()=>{
    return(
    <>
    <div className="home-container">

<nav></nav>
<div className="home-content">
    <h1 className="heading-title">Rwanda booking tour</h1>
    <div className="Carousel-img">
<Carousel autoplay> 
<img src={lake} alt="kivu" />
<img src={tour1} alt="tour" /> 
<img src={goo} alt="goo" /> 
</Carousel>
<Search
      placeholder="search tour"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
    <h3 className="toptour">TOP TOUR</h3>
   
</div>
<hr className="align"></hr>

    </div>
   
    </div>
    </>)
};


export default Home;
