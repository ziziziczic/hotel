import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    root:{
        position:'relative',
        width: '500px',
        height: '500px',
        margin:'10px auto',
        '& .image-wrap img':{
            width:'100%',
            objectFit:'contain',
        },
    },
    dots:{
        display: 'flex !important',
        position:'absolute',
        listStyleType:'none',
        padding: 0,
        left:0,
        right:0,
        bottom:0,
        marginLeft:24,
        marginRight:24,
        marginBottom:16,
        '& li':{
            flex:1,
        },
        '& button':{
            display:'block',
            width:'100%',
            fontSize:0,
            height:10,
            background: '#555',
            border:'none',
            outline:'none',
        },
        '& .slick-active button':{
            background:"#00f",
        }
    }
});

const hotelImages = [
    'https://i.travelapi.com/hotels/2000000/1390000/1384100/1384085/bc886d42_z.jpg',
    'https://i.travelapi.com/hotels/2000000/1390000/1384100/1384085/7910c29c_z.jpg',
    'https://i.travelapi.com/hotels/2000000/1390000/1384100/1384085/f029be59_z.jpg',
    'https://i.travelapi.com/hotels/2000000/1390000/1384100/1384085/f029be59_z.jpg',
    'https://i.travelapi.com/hotels/2000000/1390000/1384100/1384085/dba120cd_z.jpg'
]; 

const gallery = hotelImages.map((src,index)=>{
    return <div key={index} className="image-wrap"><img src={src} alt="" /></div>
});

function SimpleSlider() {
    const classes = useStyles();

    const settings ={
        dots: true,
        infinite : true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
    };

    return (
        <div className={classes.root}>
            <Slider {...settings} dotsClass={classes.dots}>
                {gallery}
            </Slider>
        </div>
    )
}

export default SimpleSlider

