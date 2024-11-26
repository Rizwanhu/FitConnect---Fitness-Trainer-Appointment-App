import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
// import './ex.css'; // Import the CSS file

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from './icons/right-arrow.png';
import LeftArrowIcon from './icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  
  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};



const arrowStyle = {
  width: '30px',
  height: '30px',
  backgroundColor: '#007BFF',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: 'pink',
  position: 'absolute',
  zIndex: 1,
};

const slideStyle = {
  padding: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  borderRadius: '8px',
  margin: '0 5px',
};


let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  
  nextArrow: <div style={arrowStyle} />,
  prevArrow: <div style={arrowStyle} />,
};



const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  // <Box sx={{ position: 'relative', width: '100%', p: '20px',display:'flex' }}>

  // <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
  <div style={{ overflowX: 'hidden' }}>

  <Slider {...settings} style={{ margin: '0 auto', width: '70%' }}>

    {/* <Box
  sx={{
    display: 'flex',          // Apply flex display to the parent container
    flexWrap: 'wrap',         // Allow wrapping of items in case they overflow (optional)
    justifyContent: 'flex-start', // Align items at the start (left-aligned by default)
    gap: '20px',              // Optional: Adds space between the child boxes
  }}
> */}

    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        // m="0 -120px"
        style={slideStyle}

        // sx={{ position: 'relative', width: '100%', p: '20px',display:'flex' }}
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
    {/* </Box> */}
  {/* </ScrollMenu> */}

</Slider>
</div>
);

export default HorizontalScrollbar;
