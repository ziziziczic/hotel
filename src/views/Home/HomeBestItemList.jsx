import React from 'react'

import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

import HomeBestItem from './HomeBestItem';

const useStyles = makeStyles(theme=>({
    swiperWrap :{
        marginTop:'10px',
        position:'relative',
        '&:hover $btnNavi':{
            opacity:1,
        },
        '& .swiper-container':{
            position:'static',
        }
    },
    btnNavi:{
        opacity:0,
        '& button':{
            cursor:'pointer',
            background : '#fff',
            width:'40px',
            height:'40px',
            borderRadius:'100%',
            border:'none',
            position:'absolute',
            // left:0,
            top:'45%',
            zIndex:10000,
            '&:after':{
                content:"''",
                display:"inline-block",
                // width:'4px',
                // heigh:'4px',
                // position:"absolute",
                borderWidth:'0 2px 2px 0',
                border:'solid #000',
                padding:'4px',
            },
            '&#prev-bestItem':{
                left:'-20px',
            },
            '&#next-bestItem':{
                right:'-20px',
            },
        }
    },
    btnPrev : {
        '&:after':{
            transform:'rotate(135deg)',
        },
    },
    btnNext : {
        right:0,
        '&:after':{
            transform:'rotate(-45deg)',
        },
    },
}));
const bestHotelList = ['세인트 존스 호텔','스카이 페이 호텔','아비오 호텔','시그니엘 서울 호텔','세인트 존스 호텔','스카이 페이 호텔','아비오 호텔','시그니엘 서울 호텔'];
const bestLocationImgList = [
    {
        src:'https://hotel.tourvis.com/static/media/jeju.81d526d1.png',
        title : '제주',
        subTitle:'그랜드 조선 제주',
        bestHotelList : bestHotelList,
    },
    {
        src:'https://hotel.tourvis.com/static/media/busan.235a1d64.png',
        title : '부산',
        subTitle:'파라다이스 호텔 부산',
        bestHotelList : bestHotelList,
    },
    {
        src:'https://hotel.tourvis.com/static/media/seoul.72fc3447.png',
        title : '서울',
        subTitle:'서울신라호텔',
        bestHotelList : bestHotelList,
    },
    {
        src:'https://hotel.tourvis.com/static/media/gangneung.d515df8b.png',
        title : '강릉',
        subTitle:'세인트존스호텔',
        bestHotelList : bestHotelList,
    },
    {
        src:'https://hotel.tourvis.com/static/media/sokcho.f1152cc6.png',
        title : '속초',
        subTitle:'롯데리조트속초',
        bestHotelList : bestHotelList,
    },
    {
        src:'https://hotel.tourvis.com/static/media/yeosu.0d07e2fa.png',
        title : '여수',
        subTitle:'소노캄 여수',
        bestHotelList : bestHotelList,
    },
    {
        src:'https://hotel.tourvis.com/static/media/gapyeong.14870de9.png',
        title : '가평',
        subTitle:'까사32',
        bestHotelList : bestHotelList,
    },
];

const homeBestItem = bestLocationImgList.map((item,index)=>{
    return <HomeBestItem item={item}></HomeBestItem>
});

export default function HomeBestItemList() {
    const classes = useStyles();

    return (
        <div className={clsx(classes.swiperWrap,'swiper-custom')}>
          <Swiper
            loop
            // slidePerView={3}
            // speed={500}
            // spaceBetween={10}
            // observer={true}
            // observeParents={true}
            // autoplay={{delay:500}}
            navigation={{
                prevEl:'#prevBestItem',
                nextEl:'#nextBestItem',
            }}
            >
                {homeBestItem}
            </Swiper>
            <div className={classes.btnNavi}>
                <button id="prevBestItem" className={classes.btnPrev}></button>
                <button id="nextBestItem" className={classes.btnNext}></button>
            </div>
        </div>
    )
}
