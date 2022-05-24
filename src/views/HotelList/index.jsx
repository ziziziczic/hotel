import React , { useContext } from 'react'
import HotelListItem from './HotelListItem'
import { HotelContext } from '../../index'

export default function HotelList() {

  const hotelItems = useContext(HotelContext);

  return hotelItems.map((item,index)=> <HotelListItem hotelItem = {item}></HotelListItem>) 
}
