import { useState ,useEffect, useContext} from "react";
import {Routes, Route} from "react-router-dom";

import { ThemeProvider ,makeStyles } from "@material-ui/styles";
import { createTheme, Paper, Box, Hidden, InputBase, IconButton, Typography, Collapse, Container ,Fade ,Button} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { SettingsInputCompositeSharp } from "@material-ui/icons";

import {Waypoint} from 'react-waypoint';
import clsx from "clsx";

//pages
import Home from './views/Home'
import ButtonAppBar from "./views/common/ButtonAppBar";
// import SimpleAccordian from "./views/common/SimpleAccordian";
import HotelList from "./views/HotelList";
import HotelInfo from "./views/HotelInfo"
import HotelBooking from "./views/HotelBooking";
import Air from './views/Air'

// 리소스
import banner1 from './assets/pngs/kto_banner_pc_halfnavbar_01.png'
import banner2 from './assets/pngs/kto_banner_pc_halfnavbar_02.jpg'
import hotelTopBg from './assets/gifs/Tourvis_0720_Hotel.gif';

//Context
import { HotelContext } from ".";

const theme= createTheme({
  breakpoints:{
    values:{
      xs:0,
      sm:600,
      md:960,
      lg:1280,
      xl:1920,
    },
  },
  status:{
    danger:'#e53e3e',
  },
  palette: {
    spacing:4,
    // type:'dark',
    primary: {
      main:'#557ffe',
    },
    secondary:{
      light:'#0066ff',
      main:'#e53e3e',
      contrastText:'#ffcc00',
    },
    contrastThreshold:3,
    tonalOffset:0.2,
  },
  typography:{
    fontSize:12,
    button:{
      fontSize:20,
    }
  }
});

const useStyles = makeStyles((theme)=>({
  topBg:{
    width:'100%',
    height:'500px',
    backgroundColor: '#557ffe',
    backgroundImage:`url(${hotelTopBg})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: '70% 0px',
  },
  topMenu:{
    // margin:'0 auto',
    // transition : 'transform 1000s'
    zIndex:2,
  },
  main:{
    height:'2000px',
    background:'#eee',
    // [theme.breakpoints.down('sm')] :{
    //   width: '100%',
    // },
  },
  fix:{
    position:'fixed',
    top:'-100px',
    left:'50%',
    transform:'translateX(-50%) translateY(100px)',
  },
  noFix : {
    position:'relative',
  },
  input : {
    maxWidth:'1200px',
    margin:'0 auto',
    textAlign:'center',
    // [theme.breakpoints.down(960)]:{
    //   width:'100%',
    // },
  },
  bannerContainer :{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    // padding:'0',
    // margin:'0 auto',
    position:'relative',
  },
  bannerWrap:{
    width:'50%',
    padding:'0',
    margin:'0',
    display:'flex',
    '& img' :{
      flex: '0 0 100%',
    },
    // [theme.breakpoints.down('sm')] : {
    //   width:'100%',
    // },
  },
  bgLeft:{
    backgroundColor: '#e97837',
    justifyContent:'flex-end',
  },
  bgRight:{
    backgroundColor: '#9be5ff',
    justifyContent:'flex-start',
  },
  // btnClose : {
  //   position:'absolute',
  //   right:'2.5%',
  //   top:'0',
  //   cursor:'pointer',
  // },
  popUpContainer : {
    position: 'fixed',
    left:'50%',
    top : 'auto',
    bottom: '0',
    transform : 'translateX(-50%)',
    width : '900px',
    height: '200px',
    backgroundColor : '#dadada',
    // color : '#fff',
    padding: '20px',
    borderTopLeftRadius : '10px',
    borderTopRightRadius : '10px',
    boxSizing : 'border-box',
    fontSize : '16px',
    zIndex : 1,
  },
  btnClose : {
    // padding: '5px',
    // fontSize : '20px',
    position: 'absolute',
    top : '20px',
    right: '20px',
  }
}));

function App() {
  const classes = useStyles();
  const [fixed, setFixed] = useState(false);

  //banner 닫기
  const [bannerClose,setBannerClose] = useState(true);
  const [bottomPopup, setBottomPopup] = useState(false);
  const [hotelIndex,setHotelIndex] = useState(1);

  const hotelItems = useContext(HotelContext);

  // 상단 배너 노출 여부
  useEffect(()=>{
    // localStrage에 banner close여부를 저장할 예정입니다.
    let _bannerClose = localStorage.getItem('bannerClose')
    _bannerClose && setBannerClose(false);

    if(!bannerClose){
      localStorage.setItem('bannerClose','true');
    }

  },[bannerClose])

  const bottomPopupFunc = (str ,id)=>{
    str === 'close' ? setBottomPopup(false) : setBottomPopup(true);
    id && setHotelIndex(id);
  }

  return (
    <ThemeProvider theme={theme}>
        {/* 탑배너 추가함 */}
        <Collapse in={bannerClose}>
            <Box className={classes.bannerContainer}>
              <Box className={clsx(classes.bannerWrap,classes.bgLeft)}>
                <a href="https://www.google.com">
                  <img src={banner1} alt="투어비스 추가 6만원"></img>
                </a>
              </Box>
              <Box className={clsx(classes.bannerWrap,classes.bgRight)}>
                <a href="https://www.google.com">
                  <img src={banner2} alt="대한항공 마일리지"></img>
                </a>
              </Box>
              <IconButton className={classes.btnClose} onClick={()=>setBannerClose(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
        </Collapse>

      <div className={classes.topBg}>
        {/* 탑메뉴 시작 */}
        <div className={ clsx( classes.topMenu ,fixed? null : classes.fix)}>
          <Box 
            width={1200}
            mx="auto">
            <Hidden smDown>
              <ButtonAppBar></ButtonAppBar>
            </Hidden>
          </Box>
        </div>
      </div>
      <Waypoint 
        topOffset={250}
        onEnter={()=>{setFixed(!fixed); console.log(fixed)}} 
        onLeave={()=>{setFixed(!fixed); console.log(fixed)}}/>
 
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/air" element={<Air/>}></Route>
            <Route path="/hotel/:id" element={<HotelInfo bottomPopupFunc={bottomPopupFunc}/>}></Route>
            <Route path="/hotellist" element={<HotelList/>}></Route>
            <Route path="/hotelBooking" element={<HotelBooking/>}></Route>
          </Routes>

          <Fade in={bottomPopup}>
            <Box className={classes.popUpContainer}>
                <p>{hotelItems[hotelIndex-1].id} . {hotelItems[hotelIndex-1].name}</p>
                <p> 체크인 : {hotelItems[hotelIndex-1].info.checkIn}</p>
                <p> 체크아웃 : {hotelItems[hotelIndex-1].info.checkOut}</p>
                <p> 특이사항 : {hotelItems[hotelIndex-1].info.etc}</p>
                <Button variant="outlined" onClick={()=>{bottomPopupFunc('close', 0)}} className = {classes.btnClose}>닫기</Button>
            </Box>
          </Fade>
    </ThemeProvider>
  );
}

export default App;
