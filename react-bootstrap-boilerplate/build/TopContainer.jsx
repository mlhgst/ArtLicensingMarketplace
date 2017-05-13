import React from 'react';
import {Carousel,Button,Glyphicon,DropdownButton,MenuItem} from 'react-bootstrap';
import '../styles/carousel-styles.css';

class TopContainer extends React.Component{
    render(){
        return(
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} src="../assets/testFeatureItem1.jpg"/>
                        <Carousel.Caption>
                            <h4> Variable for Work Title 1</h4>
                            <p>Variable for by Line 1</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} src="../assets/testFeatureItem2.jpg"/>
                        <Carousel.Caption>
                            <h4> Variable for Work Title 2</h4>
                            <p>Variable for by Line 2</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} src="../assets/testFeatureItem3.jpg"/>
                        <Carousel.Caption>
                            <h4> Variable for Work Title 3</h4>
                            <p>Variable for by Line 3</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div id="btn-group">
                    <Button>Login</Button>
                    {" "}
                    <Button>Sign Up</Button>
                </div>
                <div id="logo">
                    <img height="90" width="250"src="../assets/whitelogo.png"/>
                </div>
                <div id="form-group">
                    <input type="text" placeholder="  Search"/>
                        <DropdownButton title="Filter By" id="dropdown">
                            <MenuItem eventKey="1">No Filter</MenuItem>
                            <MenuItem eventKey="1">Artists</MenuItem>
                            <MenuItem eventKey="2">Subjects</MenuItem>
                            <MenuItem eventKey="3">Recently Added</MenuItem>
                        </DropdownButton>
                    <Button bsSize="large"><Glyphicon glyph="search" /></Button>
                </div>
                <div id="quick-search-group">
                    <li class="quick-search-links">
                        <a id="link-style" href="./build/MainPage.jsx"><Glyphicon glyph="user"/> Artists</a>
                        <a id="link-style" href="./build/MainPage.jsx"><Glyphicon glyph="picture"/> Subjects</a>
                        <a id="link-style" href="./build/MainPage.jsx"><Glyphicon glyph="calendar"/> Recently Added</a>
                    </li>
                </div>
            </div>
        );
    }
}

export default TopContainer;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */
