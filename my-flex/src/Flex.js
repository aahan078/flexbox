import React from 'react'
import '../src/flex.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Img from '../src/img/Rectangle2.png'
import Button from 'react-bootstrap/Button';
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'



export default function Flex() {
  return (
    <>
    
    <div className='container'>
    <div className='row'>
      <div className='col-lg-6 col-md-6 col-sm-12 mt-3' >
      <h1 className='mt-5'>Nice Adventures</h1>
      <p className='mt-3 txt'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, aut. Numquam tempore molestias temporibus esse, dignissimos soluta dolores fuga, vero ipsum autem doloremque consequatur natus at perspiciatis blanditiis repudiandae accusantium excepturi nam expedita, assumenda ab sit. Quibusdam amet natus dolorem!</p>
      <Button variant="primary" className='mt-3'>Know More</Button>{' '}

      <h3 className='mt-5'>Follow Us <AiOutlineFacebook/><AiFillYoutube/><BsTwitter/></h3>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-12 mt-3'>
        <img className='set-img' src={Img}></img>
        
        </div>
    </div>

    
    </div>

    

    </>
  )
}
