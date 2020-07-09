import React from 'react';
import { Segment, Image, Card, Rating, Responsive } from 'semantic-ui-react';
import Slider from 'react-slick';
import HeaderComponent from './headerComponent';

export interface ITechsProps { }

const Techs: React.SFC<ITechsProps> = props => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500
    };
    const skills = [
        {
            id: 1,
            header: 'JAVA',
            img: 'java-logo.png',
            meta: 'Joined in 2018',
            rating: 4
        },
        {
            id: 2,
            header: 'HTML 5',
            img: 'html.jpg',
            meta: 'Joined in 2017',
            rating: 4
        },
        {
            id: 3,
            header: 'CSS',
            img: 'css.jpg',
            meta: 'Joined in 2017',
            rating: 3
        },
        {
            id: 4,
            header: 'PHP',
            img: 'php.jpg',
            meta: 'Joined in 2018',
            rating: 3
        },
        {
            id: 5,
            header: 'JAVASCRIPT',
            img: 'js.png',
            meta: 'Joined in 2018',
            rating: 3
        },
        {
            id: 6,
            header: 'REACT JS',
            img: 'react.jpg',
            meta: 'Joined in 2019',
            rating: 4
        },
        {
            id: 7,
            header: 'REDUX',
            img: 'redux.png',
            meta: 'Joined in 2019',
            rating: 3
        },
        {
            id: 8,
            header: 'NODE JS',
            img: 'node.jpg',
            meta: 'Joined in 2019',
            rating: 2
        },
        {
            id: 9,
            header: 'JAVA HIPSTER',
            img: 'hipster.jpeg',
            meta: 'Joined in 2019',
            rating: 4
        },
        {
            id: 10,
            header: 'TYPESCRIPT',
            img: 'ts.png',
            meta: 'Joined in 2019',
            rating: 4
        },
        {
            id: 11,
            header: 'JASPERSOFT',
            img: 'jasper.png',
            meta: 'Joined in 2020',
            rating: 2
        },
        {
            id: 12,
            header: 'GIT',
            img: 'git.jpg',
            meta: 'Joined in 2019',
            rating: 3
        },
        {
            id: 13,
            header: 'POSTGRESQL',
            img: 'postgres.png',
            meta: 'Joined in 2019',
            rating: 4
        },
        {
            id: 14,
            header: 'GIT',
            img: 'mysql.png',
            meta: 'Joined in 2018',
            rating: 3
        }
    ];
    return (
        <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
            <Responsive as={Segment}>
                <HeaderComponent language={true} titulo='Skills' icon='code' />
                <Slider
                    {...settings}
                >
                    {skills.map(s => 
                        <Card key={s.id}>
                            <Image centered src={require('../../assets/images/' + s.img)} />
                            <Card.Content>
                            <Card.Header>{s.header}</Card.Header>
                                <Card.Meta>{s.meta}</Card.Meta>
                            </Card.Content>
                            <Card.Content>
                                <Rating icon='star' defaultRating={s.rating} maxRating={5} disabled />
                            </Card.Content>
                        </Card>
                    )}
                </Slider>
            </Responsive>
        </Segment.Group>
    );
}

export default Techs;