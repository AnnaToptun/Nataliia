import React, { Component } from 'react';
import ph from '../foto/ph.png';
import tg from '../foto/tg.png';
import ig from '../foto/ig.png';
import fb from '../foto/fb.png';
import logonata from '../foto/logonata.png';



import Nata from '../Nata.jpg';
import {CardDeck, Col, Container, Nav, Row, Card, Tab} from 'react-bootstrap';


export default class About extends Component {
    render() {
        return (                
            <div className="Container"><hr />
                
                <Container className="mt-20 ">
                    <span>
                        <img 
                        src={logonata}
                        className="logonata" 
                        alt="Logo" />
                    </span>
                    
                    <hr />
                    <Tab.Container  id="ledt-tabs-example" defaultActiveKey="first">
                        <Row className="Row">
                            <Col sm={4} className="tabs col">
                                <CardDeck className="card-bg">
                                    <Card  className="mt-3 ">
                                        
                                        <img 
                                            src={Nata} 
                                            alt="Natalia Trofonova" 
                                            
                                        />
                                        
                                        <Card.Title className="card p-2">ТРІФОНОВА Наталія</Card.Title> 
                                        <Card.Body className="tabs">
                                            <Nav variant="pills" className="flex-column mt-2  ">
                                                <Nav.Item>
                                                    <Nav.Link  eventKey="first"><span>Освіта</span> </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second"><span>Ціна та формат роботи</span> </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third"><span>5 фактів про Наталію</span> </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth"><span>Контакти</span> </Nav.Link>
                                                </Nav.Item>
                                                
                                            </Nav>
                                        </Card.Body>
                                    </Card>
                                    
                                </CardDeck>
                                
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first" className="bg-gray" >
                                       
                                        <h1 className="h1">Освіта</h1>
                                        <hr />
                                        <ul className="ul">
                                            <li> 
                                                <p>
                                                <b>Київський міжнародний університет </b> 
                                                Інститут міжнародних відносин
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                <b>Національний університет «Києво-Могилянська академія» </b> 
                                                Факультет: археологія та давня історія України; 2011-2013 рр. – магістратура
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Київський міжнародний університет </b> 
                                                    Інститут міжнародних відносин
                                                    </p>
                                            </li>
                                        </ul>
                                        
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className="fs-25 ta-center">
                                        
                                        <h1 className="h1">Ціна та формат роботи</h1>
                                        <hr />
                                        <div className="ul ">
                                            <h3 className="text">Підготовка до ЗНО з історії України:</h3><hr />
                                            <p className="text">                           
                                                Можливість проведення занять як <b>онлайн</b>, так і <b>офлайн</b>.
                                            </p>
                                            <p className="text">
                                                Заняття можуть проводитись в <b>групі та індивідуально</b>.
                                            </p>
                                            <p className="text">
                                                Ціна за заняття <b>Індивідуально</b> – 200 грн/год, <b>В групі</b>  залежно від кількості учнів (але не більше 5 чоловік).
                                            </p>                
                                        </div>
                                                           
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" className="bg-grey" >
                                        
                                        <h1 className="h1">5 фактів про Наталію</h1>
                                        <hr />
                                        <ul className="ul ">
                                            <li>Отримала <b>освітній ступінь "Магітра"</b>  в найстарішому навчальному закладі України
                                                <b>«Києво-Могилянській академії</b>  </li>
                                            <li>Має <b>10-ти річний</b>  досвід викладання;</li>
                                            <li>Досвід роботи в провідних музеях та цікавих археологічних експедиціях;</li>
                                            <li><b>Середній результат учнів</b>  – 170-180 балів, найвищий 194 бали;</li>
                                            <li><b> Вивчала</b> арабську та турецьку мови, прагне оволодіти грецькою</li>
                                        </ul>  
                                        
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <h1 className="h1">Контакти</h1>
                                        <hr />
                                        <button className="text-p">
                                            <img src={ph} alt="phone-logo" className="logo"/>
                                            <a href="tel:+380967059737">+38 096 705 97 37</a>
                                            
                                        </button>
                                        <button className="text-p">
                                            <img src={fb} alt="phone-logo" className="logo"/>
                                            <a href="https://www.facebook.com/trifonova.natalia.7">Nataliia Trifonova</a>
                                        </button>
                                        <button className="text-p">
                                            <img src={ig} alt="phone-logo" className="logo"/>
                                            <a href="https://www.instagram.com/ishacomua/?hl=ru">
                                                Nataliia Trifonova <br /> @ishacomua

                                            </a>
                                        </button>
                                        <button className="text-p">
                                            <img src={tg} alt="phone-logo" className="logo"/>
                                            <a href="https://web.telegram.org/#/im?p=u736638126_12020367729491454626">Nataliia Trifonova</a>
                                        </button>
                                    </Tab.Pane>
                                    
                                </Tab.Content>
                            </Col>
                            
                        </Row>
                    </Tab.Container>
                </Container> <hr />

            </div>
        )
    }
}
