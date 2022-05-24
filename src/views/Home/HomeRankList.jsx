import React from 'react'
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx'

const useStyles = makeStyles((theme)=>({
    indexStyle : {
        fontWeight : 'bold',
        paddingRight : '10px',
    },
    colorRed:{
        color:'#f00',
    }
}));

export default function HomeRankList(props) {
    const {bestHotelList} = props;

    const classes = useStyles();

    return (
        <ul>
            {bestHotelList && bestHotelList.map((item, index)=>{
                return <li><span className={clsx(classes.indexStyle,index <3 && classes.colorRed )}>{index+1}</span><b>{item}</b></li>
            })}
        </ul>
    )
}
