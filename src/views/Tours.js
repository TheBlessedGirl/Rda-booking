import React,{useState} from "react";
import { Card, Space, Image, Typography,Drawer   } from "antd";
import picture from "../assets/images/woow.jpg";
import alltours from "../assets/data/tours.json";
import SingleTour from'../components/singleTour';
import './tour.css'
const { Text, Title } = Typography;
const Tours = () => {
  const[showDrawer,setshowDrawer]=useState(true) //showDrawer is a variable while setshowdrwawer is a function which assign value to a variable 
  const[selectedTour,setSelectedTour]=useState({});
  return (
    <>
    <div style={{ width: "100%", height: "auto", padding: "10px 100px;" }}>
      <Card>
        {alltours.map((tour) => (
          <Card.Grid className="tour-card-grid">
            <Space direction="vertical">
              <Image preview={true} src={tour.photo} />
              <Title level={4} style={{ color: "#31976D1" }}>
                {tour.title.toUpperCase()}
              </Title>
              <Text type="secondary" italic>
                lorem ipsum Our compilation of screen recording tools ranges
                from browser-based software to minimalistic desktop apps. Each
                of the picks meets the following basic criteria
              </Text>
              <Space>
                <Text>Due date:</Text>
                <Text strong>12-02-2022 10h 00am</Text>
              </Space>
              <button onClick={()=>{
                setSelectedTour(tour)
                setshowDrawer(true)}}>BOOK NOW</button>
                
            </Space>
          </Card.Grid>
        ))}
      </Card>
    </div>
    
    <Drawer title="single tour" placement="right" onClose={()=>{setshowDrawer(false)}} visible={showDrawer}>
<SingleTour data={selectedTour}></SingleTour>
      </Drawer>
      </>
  );
};
export default Tours;
