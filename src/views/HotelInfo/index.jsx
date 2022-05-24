import React, { useEffect, useState, useContext } from 'react'
import {useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { HotelContext } from '../..';
import { SettingsRemoteRounded } from '@material-ui/icons';


const useStyle = makeStyles(theme =>({
  root : {
    width : '900px',
    margin: '5px auto',
    [theme.breakpoints.down('sm')] : {
      width: '100%',
      margin : '0',
    }
  },
  imgWrap : {
    width : '100%',
    maxHeight: '500px',
    overflow : 'hidden',
    [theme.breakpoints.down('sm')] :{
      height:'auto',

    },
    '& .swiper-pagination' :{
      top:460,
      bottom: 'auto',
      right:0,
      left:'auto',
      width:'100%',
      height: '9px',
      display:'flex'
    },
    '& .swiper-pagination-bullet':{
      backgroundColor:'#dadada',
      flex:'1 0 0px',
      display:'inline-block',
      width:'100%',
      height:'100%',
      borderRadius : 0,
      margin:'0 !important'
    },
    '& .swiper-pagination-bullet-active' :{
      backgroundColor : 'black',
    },
  },
  txtWrap :{

  },
}))

const swiperOption = {
  effect : 'fade',
  pagination : {
    el: '.swiper-pagination',
    clickable : true
  },
  observer : true,
  observeParents : true,
  autoplay : {
    delay : 1000,
  },
  loop: true
}

export default function HotelInfo(props) {
    const hotelItems = useContext(HotelContext);
    const classes =  useStyle();
    let {id} = useParams();
    const [hotelId,setHotelId] = useState();
    const [loading,setLoading] = useState(true);
    const hotelItem =  hotelItems.filter(item=>(item.id === parseInt(id)))

    const {bottomPopupFunc} = props

    // loading 시 skeleton 적용
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      },1000);
    },[loading]);
    
    useEffect(()=>{
      // db에서 id에 해당하는 값을 찾아온다.
      // setState에 넣어 재랜더링을 유도한다.

      setHotelId(id);
    },[hotelId]);

    const imgSwiper = hotelItem[0].src.map((item,index)=>{
      return <img src={item} alt={hotelItem[0].subName}></img>
    });

  return (
    <div className={classes.root}>
        {
          loading ?
          <>
            <Skeleton variant="rect" height={400}></Skeleton> 
            <Skeleton width={200} animation="wave"></Skeleton> 
            <Skeleton width={300} animation="wave"></Skeleton> 
            <Skeleton width={400} animation="wave"></Skeleton> 
            <Skeleton variant="rect" width={100} height={50}></Skeleton> 
          </> :
          (<>
            <div className={classes.imgWrap}>
              <Swiper {...swiperOption}>
                {imgSwiper}
              </Swiper>
            </div>
            <div className={classes.txtWrap}>
              <p>{hotelItem[0].id}</p>
              <p>{hotelItem[0].name}</p>
              <p>{hotelItem[0].subName}</p>
              <p>{hotelItem[0].price}</p>
            </div>
            <Button variant='outlined' onClick={()=>{bottomPopupFunc('open',hotelItem[0].id)}}>주의사항</Button>
            <Button variant='contained' onClick={()=>{}}>예약하기</Button>
          </>)
        }

    </div>
  )
}
