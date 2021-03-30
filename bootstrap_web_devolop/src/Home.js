import React, { Component } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import Slider from './Components/Slider';
import ocean from './img/ocean.jpg';
import Jumbotron from './Components/Jumbotron';

export const Home=()=>(
    <>
        <Slider />
        <Container style={{paddingTop:'2rem', paddingBottom:'2rem'}}>
            <Row>
                <Col>
                    <Card style={{width:'18rem'}}>
                        <Card.Img variant='top' src={ocean}/>
                        <Card.Title style={{paddingTop:'1rem'}}>WebDev</Card.Title>
                        <Card.Text>
                        Это «БезZOOMная весна»! 🍃
                        Мария Борисова заняла второе место на фестивале «Студенческая весна» в направлении «Журналистика» — фотоматериал
                        Мы не можем не поделиться ее прекрасной конкурсной работой 🥰
                        </Card.Text>
                        <Button variant='primary'>Learn more</Button>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width:'18rem'}}>
                        <Card.Img variant='top' src={ocean}/>
                        <Card.Title style={{paddingTop:'1rem'}}>WebDev</Card.Title>
                        <Card.Text>
                        Это «БезZOOMная весна»! 🍃
                        Мария Борисова заняла второе место на фестивале «Студенческая весна» в направлении «Журналистика» — фотоматериал
                        Мы не можем не поделиться ее прекрасной конкурсной работой 🥰
                        </Card.Text>
                        <Button variant='primary'>Learn more</Button>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width:'18rem'}}>
                        <Card.Img variant='top' src={ocean}/>
                        <Card.Title style={{paddingTop:'1rem'}}>WebDev</Card.Title>
                        <Card.Text>
                        Это «БезZOOMная весна»! 🍃
                        Мария Борисова заняла второе место на фестивале «Студенческая весна» в направлении «Журналистика» — фотоматериал
                        Мы не можем не поделиться ее прекрасной конкурсной работой 🥰
                        </Card.Text>
                        <Button variant='primary'>Learn more</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron/>
        <Container style={{marginBottom:'30px'}}>
            <Row>
                <Col md={7}>
                    <img src={ocean} height={400}/>
                </Col>
                <Col md={5}>
                    <h2>WebDev BLog</h2>
                    <p>Это «БезZOOMная весна»! 🍃
                            Мария Борисова заняла второе место на фестивале «Студенческая весна» в направлении «Журналистика» — фотоматериал
                            Это «БезZOOMная весна»! 🍃
                            Мария Борисова заняла второе место на фестивале «Студенческая весна» в направлении «Журналистика» — фотоматериал
                            Мы не можем не поделиться ее прекрасной конкурсной работой 🥰 Это «БезZOOMная весна»! 🍃
                            Мария Борисова заняла второе место на фестивале «Студенческая весна» в направлении «Журналистика» — фотоматериал
                            Мы не можем не поделиться ее прекрасной конкурсной работой 🥰 Мы не можем не поделиться ее прекрасной конкурсной работой 🥰
                </p> 
               </Col>
            </Row>
        </Container>
    </>
)