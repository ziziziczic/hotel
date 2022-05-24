import React from 'react'
// import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'

import HomeRankList from './HomeRankList';

const useStyles = makeStyles((theme)=>({
    root:{
        position:'relative',
        '&:hover $hotelWrap':{
            transform:'translate(0,0)',
        },
    },
    bg:{
        width:'300px',
        height:'400px',
        '& img':{
            width:'100%',
            height:'100%',
            objectFit:'cover',
        },
    },
    regionWrap:{
        width:'100%',
        height:'100%',
        position:'absolute',
        left:0,
        top:0,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        color:"#fff",
        '& span':{
            padding:'0px 0px 20px 10px',
        }
    },
    regionTit:{
        fontSize:'24px',
        fontWeight:700,
    },
    hotelTit:{

    },
    hotelWrap:{
        width:'100%',
        height:'100%',
        position:'absolute',
        bottom:0,
        transform:'translate(0,100%)',
        color:'#000',
        background:'#fff',
        transition: 'transform 0.4s',
        '& ul,& li':{
            listStyle:'none',
            padding:0,
        },
        '& li':{
            padding:'8px 0 8px 10px',
            cursor:'pointer',
        }
    }
}));

export default function HomeBestItem(props) {

    const {item : {src, title, subTitle,bestHotelList}} = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.bg}>
                <img src={src} alt="지역사진" />
            </div>
            <div className={classes.regionWrap}>
                <span className={classes.regionTit}>{title}</span>
                <span className={classes.hotelTit}>{subTitle}</span>
            </div>
            <div className={classes.hotelWrap}>
                <HomeRankList bestHotelList={bestHotelList}></HomeRankList>
            </div>
        </div>
    )
}
