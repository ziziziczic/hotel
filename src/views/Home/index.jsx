import React , {useState, useEffect} from 'react'
import { Paper, Box, Hidden, InputBase, IconButton, Typography, Collapse, Container ,Fade ,Button} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/styles";

import ReactHtmlParser from 'html-react-parser'
import { useIntl ,FormattedMessage, FormattedNumber} from 'react-intl'

// dday 계산
import {differenceInSeconds} from 'date-fns';
import { getSecondToDay , getSecondToTime } from "../../views/common/dateUtil.js";

// page
import BnrList from "./BnrList";
import HotdealList from "./HotdealList";
import HomePickItemList from "./HomePickItemList";
import HomeBestItemList from "./HomeBestItemList";
import SimpleSlider from "../../views/common/SimpleSlider";

const useStyles = makeStyles({
    main:{
      height:'2000px',
      background:'#eee',
      // [theme.breakpoints.down('sm')] :{
      //   width: '100%',
      // },
    },
    input : {
      maxWidth:'1200px',
      margin:'0 auto',
      textAlign:'center',
      // [theme.breakpoints.down(960)]:{
      //   width:'100%',
      // },
    },
  });

export default function Home() {

  const [time, setTime] = useState(new Date()); // 현재시간 저장 및 갱신체크
  // const [timeStr, setTimeStr] = useState<string>(intl.formatMessage({id: 'promotion_hotdeal_all'})); // 소진시 종료 메시지
  const [timeStr, setTimeStr] = useState('종료'); // 소진시 종료 메시지

  const classes = useStyles();
  const intl = useIntl();

  // const priceStr = intl.formatMessage({id:"promotion_discount_price"},{ts: "111111" });
  const priceStr = intl.formatMessage({ id: 'promotion_discount_price' }, { price: "120000" })

  // dday 날짜
  const xmasDay = new Date("2022-12-24T00:00:00+0900"); // 기준일, 크리스마스 이브
  const sec = differenceInSeconds(xmasDay , new Date()); // 크리스마스와 현재시간 차이 sec
  let timer = null;

    // dday 날짜, 초단위 갱신
    useEffect(()=>{
      // 기준일, 크리스마스 이브
      if(xmasDay){
        timer = setInterval(()=>{
          setTime(new Date())
        },1000);
      }
      return ()=>{
        clearInterval(timer);
        setTimeStr(
          sec > 86400 ? 
          intl.formatMessage({ id: 'promotion_hotdeal_day_time' }, { day: getSecondToDay(sec), time:  getSecondToTime(sec)})
          : intl.formatMessage({ id: 'promotion_hotdeal_time' }, { time:  getSecondToTime(sec)})
        );
      }
    }, [time]);

  return (
    <div className={classes.main}>
      <Paper component="form" className={classes.input}>
        <InputBase
          classes={classes.input}
          placeholder="검색어를 입력하세요" />

        <IconButton>
          <SearchIcon/>
        </IconButton>
      </Paper>
      <BnrList></BnrList>

      <Box
        sx={{
          maxWidth : 1200,
          backgroundColor : '#fff',
          margin:'10px auto',
        }}
        >
        <Typography variant="h4" color="secondary">타임핫딜</Typography>
        <HotdealList></HotdealList>
      </Box>

      <Box 
        maxWidth={1200}
        mx="auto"
        >
          <HomePickItemList></HomePickItemList>
      </Box>

      <Box
        maxWidth={1200}
        mx="auto">
        <HomeBestItemList></HomeBestItemList>
      </Box>

      <Box
        maxWidth={1200}
        mx="auto">
          {ReactHtmlParser(priceStr)} 
          {/* {ReactHtmlParser(dateStr)} */}
          {ReactHtmlParser(timeStr)}
          <p>
            <FormattedMessage
              id="promotion_discount_price"
              defaultMessage="Today is {ts}"
              values={{price: "12000"}}
            /> 
          </p>
      </Box>

    <SimpleSlider></SimpleSlider>

    {/* <SimpleAccordian></SimpleAccordian> */}

    {/* <Grid container spacing={3}>
    <Hidden xsUp>
      <Grid item xs>
        <Paper>xsUp</Paper>
      </Grid>
    </Hidden>

    <Hidden smUp>
      <Grid item xs>
        <Paper>smUp</Paper>
      </Grid>
    </Hidden>

    <Hidden mdUp>
      <Grid item xs>
        <Paper>mdUp</Paper>
      </Grid>
    </Hidden>

    <Hidden lgUp>
      <Grid item xs>
        <Paper>lgUp</Paper>
      </Grid>
    </Hidden>

    <Hidden xlUp>
      <Grid item xs>
        <Paper>xlUp</Paper>
      </Grid>
    </Hidden>
    </Grid> */}

  </div>
  )
}