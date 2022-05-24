import React from 'react'

import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles((theme)=>({
    root:{
        [theme.breakpoints.down(900)]:{
            margin:'0 auto',
        },
        '& .swiper-pagination':{
            position:'absolute',
            // top:'auto',
            bottom:'50px',
            left:'370px',
            // right:0,
            [theme.breakpoints.down(900)]:{
                display:'none',
            },
        },
        '& .swiper-pagination-bullet-active':{
            background:"#557ffe",
        }
    },
    container : {
        display:'flex',
        [theme.breakpoints.down(900)]:{
            flexDirection:'column',
        },
    },
    imgWrap : {
        width:'60%',
        // maxWidth:'60%',
        [theme.breakpoints.down(900)]:{
            width:'100%',
        },
        '& img':{
            width:'100%',
            height:'100%',
            objectFit:'cover',
            borderRadius:'8px',
        },
    },
    txtWrap : {
        width:'40%',
        // flex: '1 0 40%',
        background:'#fff',
        padding: '30px',
        boxSizing:'border-box',
        [theme.breakpoints.down(900)]:{
            width:'100%',
        },
        '& ul,li':{
            listStyle: 'none',
            padding:0,
            // maxWidth:'100%',
        },
        '& li':{
            border:'1px solid #000',
            padding:'1px 10px',
            marginBottom:'10px',
            borderRadius:'10px',
            color:'#000',
            textAlign:'center',
            fontSize:'12px',
            fontWeight:400,
            position:'relative',
            '&:hover' :{
                color:'#557ffe',
                borderColor:'#557ffe',
                cursor:'pointer',
                fontWeight:700,
            },
            '&:after':{
                contents:'"ddd"',
                position:'absolute',
                display:'inline-block',
                borderWidth:'0 3px 3px 0',
                border:'solid #000',
                padding:'3px',
            }
        },
    }
}));

const hotPickItemsArray = [
    {
        url : 'https://cdnph.tidesquare.com//paragon/file/tourvis/promotionImg/10/20211006020409468.jpg',
        title : '가성비 좋은 투어버스 호텔',
        branchTitle1 : '홍대 바이 롯데',
        branchTitle2 : '명동 바이 롯데',
    },
    {
        url : 'https://cdnph.tidesquare.com//paragon/file/tourvis/promotionImg/11/20211006020427111.jpg',
        title : '파란 오션뷰 리조트',
        branchTitle1 : '쏠비치 진도',
        branchTitle2 : '쏠비치 양양',
    },
];

export default function HomePickItemList() {

    const classes = useStyles();

    const hotPickItems = hotPickItemsArray && hotPickItemsArray.map((item,index)=>{
        return <div className={classes.container}>
            <div className={classes.imgWrap}>
                <img src={item.url} alt="hotel"></img>
            </div>
            <div className={classes.txtWrap}>
                <h2>{item.title}</h2>
                <ul>
                    <li><h2>{item.branchTitle1}</h2></li>
                    <li><h2>{item.branchTitle2}</h2></li>
                </ul>
            </div>
        </div>
    });
    return (
        <div className={classes.root}>
            <Swiper loop
            pagination ={{
                el:'.swiper-pagination',
                clickable:true
            }}
            autoplay={{delay:5000}}
            >
                {hotPickItems}
            </Swiper>
        </div>
    )
}
