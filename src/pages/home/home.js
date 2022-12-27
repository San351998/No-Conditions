import React from 'react';
import { Carousel } from 'react-bootstrap';


const Home = () => {

    return (
        <>
            <Carousel indicators={false}>
                <Carousel.Item>
                    <iframe width="100%" height="550px" src="https://www.youtube.com/embed/vVA7nwrFxis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="100%" height="550px" src="https://www.youtube.com/embed/OAWZN2aYhiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="100%" height="550px" src="https://www.youtube.com/embed/JN26SZGiKPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
            </Carousel>

   
        </>
    )
}

export default Home