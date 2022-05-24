import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { SportsRugbySharp } from '@material-ui/icons'
import Skeleton from '@material-ui/lab/Skeleton'


import {Link} from 'react-router-dom';

 const useStyles = makeStyles({
    root : {
        width : '900px',
        margin : '5px auto',
    },
    link : {
        textDecoration : 'none',
    },
    imgWrap : {
        width : '100%',
        height: '200px',
        overflow : 'hidden',
        border : '1px solid #eee',
        '& img' : {
            position:'relative',
            top:'-150px',
        }
    },
    contentWrap : {
        width:'100%',
        boxSizing : 'border-box',
        padding : '20px',
        border : '1px solid #eee',
    },
    subTitle : {
        fontSize : '12px',
    },
    Title : {
        fontSize : '18px',
        fontWeight : 700,
    },
    priceWrap : {
        width : '100%',
    },
    price : {
        color : 'rgb(85,127,254)',
        fontSize : '18px',
        textAlign : 'right',
    }
 });

export default function HotelListItem (props) {
  const {name,subName,price,level,src,id} = props.hotelItem
  const classes = useStyles();
  const [loading , setLoading] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
        setLoading(true);
    },1100);
  },[loading]);

  return (
    <div className={classes.root}>
        <Link to={`/hotel/${id}`} className={classes.link}>
            {
                loading ? 
                (<div className={classes.imgWrap}>
                    <img src={src[0]} alt={`${name} hotel`}></img>
                </div>) :
                <Skeleton variant="rect" width={900} height={250} animation="wave"></Skeleton>
            }
            <div className={classes.contentWrap}>
                {
                    loading ?
                    (<>
                        <div className={classes.titleWrap}>
                            <p className={classes.subTitle}>{id}</p>
                            <p className={classes.subTitle}>{level}등급</p>
                            <p className={classes.subTitle}>{subName}</p>
                            <p className={classes.Title}>{name}</p>
                        </div>
                        <div className={classes.priceWrap}>
                            <p className={classes.price}>{price} 원</p>
                        </div>
                    </>) :
                    <>
                        <Skeleton animation="wave" width={100}></Skeleton>
                        <Skeleton animation="wave" width={200}></Skeleton>
                        <Skeleton animation="wave" width={300}></Skeleton>
                        <Skeleton animation="wave"></Skeleton>
                    </>
                }
            </div>
        </Link>
    </div>
  )
}
