import React from 'react'

import { makeStyles } from '@material-ui/styles'

import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

// dday 계산
import { useIntl ,FormattedMessage, FormattedNumber} from 'react-intl'
import {differenceInHours, differenceInSeconds, intlFormat} from 'date-fns';
import { getSecondToDay , getSecondToTime } from "../../views/common/dateUtil.js";
import { differenceInDays } from 'date-fns/esm'

const useStyles = makeStyles(theme =>({
    root : {
        '&:hover $txtWrap $title' :{
            color : 'blue',
        },
        '&:hover $txtWrap $price' : {
            color : 'red',
        }
    },
    swiperWrap:{
        maxWidth:'1200px',
        position:'relative',
        '&:hover button' :{
            opacity:1,
        },
    },
    imgWrap : {
        position: 'relative',
        border : '1px solid #eee',
        overflow : 'hidden',
        '& img' : {
            transition : 'all 600ms',  
        },
        '&:hover img' : {
            transform : 'scale(1.2)',
        },
    },
    txtOverImg : {
        position:'absolute',
        left:0,
        bottom:'-10px',
        background : 'rgba(0,0,0,.4)',
        width:'95%',
        height:'40px',
        color:'#fff',
        textAlign:'center',
        lineHeight : '40px',
    },
    txtWrap:{
        padding:'15px 10px',
        lineHeight:2,
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        overflow:'hidden',
    },
    title:{
        fontWeight:700,
        fontSize:18,
        marginRight:5,
    },
    subTitle:{
        color:'gray',
        fontSize:14,
    },
    price:{
    },
    btn:{
        '& button' :{
            opacity:1,
            position:'absolute',
            bottom:'60%',
            zIndex:1,
            width:'48px',
            height:'48px',
            backgroundColor:'#fff',
            border:0,
            borderRadius:'100%',
            '&:after':{
                content:'""',
                position:'absolute',
                top:'40%',
                left:'40%',
                borderWidth:'0 2px 2px 0',
                padding:'4px',
                border:'solid #000',
                display:'inline-block',
            },
        },
        '& .swiper-button-disabled':{
            display:'none',
        },
    },
    prev : {
        left:'-2%',
        '&:after':{
            transform:'rotate(135deg)',
        },
    },
    next :{
        right:'-2%',
        '&:after':{
            transform:'rotate(-45deg)',
        },
    },
}));

const hotdealArray = [
    {
        src:'https://cdnph.tidesquare.com//paragon/file/tourvis/promotionImg/22/20211013020933408.jpg',
        title:'곤지암 리조트',
        subTitle:'경기도 광주시',
        level:3,
        price:'150,700',
        dday: '2022-05-24',
    },
    {
        src:'https://cdnph.tidesquare.com//paragon/file/tourvis/promotionImg/23/20211013021015681.jpg',
        title:'라마다 호텔/스위트 평창',
        subTitle:'경기도 광주시',
        level:3,
        price:'150,700',
        dday: '2022-12-01',
    },
    {
        src:'https://cdnph.tidesquare.com//paragon/file/tourvis/promotionImg/24/20211013021101088.jpg',
        title:'베스트 웨스턴 플러스 전주 호텔',
        subTitle:'전북 전주시',
        level:3,
        price:'150,700',
        dday: '2022-12-22',
    },
    {
        src:'https://cdnph.tidesquare.com//paragon/file/tourvis/promotionImg/25/20211013024336541.jpg',
        title:'블루오션 레지던스 호텔',
        subTitle:'인천 중구',
        level:3,
        price:'150,700',
        dday: '2022-12-10',
    },
    {
        src:'https://cdnph.tidesquare.com//paragon/file/tourvis/promotionImg/26/20211013024414464.jpg',
        title:'센트로 관광 호텔',
        subTitle:'경북 칠곡군',
        level:3,
        price:'150,700',
        dday: '2022-12-04',
    },
    {
        src:'https://cdnph.tidesquare.com//paragon/file/tourvis/promotionImg/27/20211013024444861.jpg',
        title:'위호텔',
        subTitle:'제주 서귀포',
        level:3,
        price:'150,700',
        dday: '2022-12-07',
    },
];

export default function HotdealList() {
    const intl = useIntl();
    const classes = useStyles();
    const today = new Date();

    const hotdealItems = hotdealArray? hotdealArray.map((item,index)=>{
        let dday = new Date(item.dday); 
        dday.setHours(0); // dday 의 시간이 9시로 맞춰져있어서 시분초를 0:0:0 으로 셋팅
        dday.setMinutes(0);
        dday.setSeconds(0);

        let sec = differenceInSeconds(dday,today);
        return (
            <div className={classes.root}>
                <div className={classes.imgWrap}>
                    <img src={item.src} alt="" />
                    <p className={classes.txtOverImg}>
                        {sec > 86400 ? 
                         intl.formatMessage({id:'promotion_hotdeal_day_time'},{day : getSecondToDay(sec),time : getSecondToTime(sec)}) :
                         intl.formatMessage({id:'promotion_hotdeal_time'},{time : getSecondToTime(sec)})}
                    </p>
                </div>
                <div className={classes.txtWrap}>
                    <span className={classes.title}>{item.title}</span>
                    <span className={classes.subTitle}>{item.subTitle} / {item.level} 등급</span>
                    <br/>
                    <span className={classes.price}>가격 : {item.price} 원</span>
                </div>
            </div>
        )
    }) : undefined;
    return (
        <div className={classes.swiperWrap}>
            <Swiper
                slidesPerView={1.1}
                speed={500}
                breakpoints={{
                    1200:{
                        slidesPerView:3,
                    },
                    1000:{
                        slidesPerView:2.5,
                    },
                    870:{
                        // spaceBetween:16,
                        slidesPerView:2.2,
                    },
                    670:{
                        slidesPerView :1.7
                    },
                }}
                navigation ={{
                    prevEl:'#prevBtn',
                    nextEl:'#nextBtn',
                }}
            >
                {hotdealItems}
            </Swiper>
            <div className={classes.btn}>
                <button id="prevBtn" className={classes.prev}></button>
                <button id="nextBtn" className={classes.next}></button>
            </div>
        </div>
    )
}
