import React from 'react';
import { Segment, Responsive, Card, Image } from 'semantic-ui-react';
import HeaderComponent from './headerComponent';

export interface IProjectsProps {
    language: boolean;
    scroll: number;
}

const Projects: React.SFC<IProjectsProps> = props => {

    return (
        <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
            <Responsive as={Segment}>
                <HeaderComponent language={props.language} titulo='Proyectos' title='Proyects' icon='folder' />
                <Card.Group itemsPerRow={1}>
                    <Card raised img={require('../../assets/images/logoTordavi.png')} href={'https://tordavi-international.herokuapp.com/'} target='_blank' >
                        <Image src={require('../../assets/images/logoTordavi.png')} />
                    </Card>
                </Card.Group>
            </Responsive>
        </Segment.Group>
    );
}

export default Projects;