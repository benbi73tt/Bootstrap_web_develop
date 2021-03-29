import { Carousel } from 'react-bootstrap';
import React from 'react';
import ocean from '../img/ocean.jpg';
import tree from '../img/tree.jpg';


export default function Slider() {
        return (
            <Carousel>
                <Carousel.Item style={{'height':'600px'}}>
                    <img className='d-block w-100'
                    src={ocean}
                    alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Web dev blog</h3>
                        <p>Фон океан - 50 фото для презентаций и картинок на рабочий ст</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height':'600px'}}>
                    <img className='d-block w-100'
                    src={tree}
                    alt="second slide"/>
                    <Carousel.Caption>
                        <h3>Web dev blog</h3>
                        <p>Фон океан - 50 фото для презентаций и картинок на рабочий ст</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height':'600px'}}>
                    <img className='d-block w-100'
                    src={ocean}
                    alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Web dev blog</h3>
                        <p>Фон океан - 50 фото для презентаций и картинок на рабочий ст</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }