import React from 'react'
import { makeStyles } from '@material-ui/styles'

import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
// import { SwiperOptions } from 'swiper'

const useStyles = makeStyles(theme=>({
    root :{
        maxWidth:'1200px',
        margin:'10px auto',
        // borderRadius:'10px',
        '&:hover button':{
            opacity:1,
        }
    },
    bnrPager:{
        textDecoration:'none',
        position:'absolute',
        right:'20%',
        bottom:'-10%',
        zIndex:1,
        backgroundColor:'rgba(0,0,0,.6)',
        color:'#fff',
        padding: '10px 20px',
        borderRadius: '10px',
        [theme.breakpoints.down(960)]:{
            display:'none',
        },
    },
    bnrNavi:{
        '& button':{
            opacity:0,
            position:'absolute',
            bottom:'-150px',
            zIndex:1,
            width:'48px',
            height:'48px',
            backgroundColor:'#fff',
            border:0,
            borderRadius:'100%',
            boxShadow: '0px 3px 8xp rgba(0,0,0,.2)',
            transform:'translateY(-200px)',
            cursor:'pointer',
            [theme.breakpoints.down(960)]:{
                display:'none',
            },
            '&:after':{
                content:'""',
                position:'absolute',
                top:'50%',
                left:'50%',
                marginTop:-5,
                borderWidth:'0 2px 2px 0',
                padding:'4px',
                border:'solid #000',
                display:'inline-block',
            },
        },
        '& .swiper-button-disabled': {
            display: 'none',
          },
    },
    prev:{
        left:'16%',
        '&:after':{
            transform:'translateX(-3px) rotate(135deg)',
        }
    },
    next:{
        right:'16%',
        '&:after':{
            transform:'translateX(-5px) rotate(-45deg)',
        }
    }
}));

const bannerList = ['https://cdnph.tidesquare.com//paragon/file/tourvis/bannerImg/pc/13/20211014065309136.jpg',
'https://cdnph.tidesquare.com//paragon/file/tourvis/bannerImg/pc/12/20211014062935506.jpg',
'https://cdnph.tidesquare.com//paragon/file/tourvis/bannerImg/pc/93/20220419063023601.png'];

export default function BnrList() {

    const bannerItems = bannerList? bannerList.map((item,index)=>{
        return <div key={index}><img src={item} alt="banner"></img></div>
    }) : undefined;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Swiper
                // loop
                // spaceBetween={10}
                // autoplay={{delay:5000}}
                navigation={{
                    prevEl:'#prevHome',
                    nextEl:'#nextHome',
                }}
                pagination={{
                    el:'#swiperPager',
                    type:'fraction'
                }}
                speed={500}>
                {bannerItems}
            </Swiper>
            <div className={classes.bnrNavi}>
                <button id="prevHome" className={classes.prev}></button>
                <button id="nextHome" className={classes.next}></button>
            </div>
            <a href="/" className={classes.bnrPager}><span id='swiperPager'></span></a>
        </div>
    )
}
