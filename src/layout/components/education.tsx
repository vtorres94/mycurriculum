import React, { useState, useEffect } from 'react';
import { Segment, Responsive, Item, Transition, Image } from 'semantic-ui-react';
import HeaderComponent from './headerComponent';

export interface IEducationProps {
    language: boolean;
    scroll: number;
}

export interface IEducationState {
    duration: number;
    visible: boolean;
}

const Education: React.SFC<IEducationProps> = props => {
    const [state = {
        duration: 1000,
        visible: true
    }] = useState();

    useEffect(() => {
        console.log('ESTUDIOS SCROLL : ' + props.scroll)
    }, [props.scroll]);

    const { duration, visible } = state
    return (
        <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
            <Responsive as={Segment}>
                <HeaderComponent language={props.language} titulo='Estudios' title='Studies' icon='student' />
                <Transition.Group>
                    <Item.Group divided>
                        <Transition animation='browse' duration={duration} visible={visible} >
                            <Item>
                                <Item.Content>
                                    <Item.Header>Físico Matemático</Item.Header>
                                    <Item.Meta>2010 - 2013</Item.Meta>
                                    <Item.Description>
                                        Preparatoria Villanueva
                                        </Item.Description>
                                    <Item.Extra>Bachillerato</Item.Extra>
                                </Item.Content>
                            </Item>
                        </Transition>
                        <Transition animation='browse' duration={duration} visible={visible} >
                            <Item >
                                <Item.Content>
                                    <Item.Header>Ingeniería de Software</Item.Header>
                                    <Item.Meta>2013 - 2015</Item.Meta>
                                    <Item.Description>
                                        <Image centered src={require('../../assets/images/UAZ.jpg')} size='tiny' />
                                        Universidad Autonoma de Zacatecas
                                    </Item.Description>
                                    <Item.Extra>Inconcluída</Item.Extra>
                                </Item.Content>
                            </Item>
                        </Transition>
                        <Transition animation='browse' duration={duration} visible={visible} >
                            <Item>
                                <Item.Content>
                                    <Item.Header>Ingeniería en Sistemas Computacionales</Item.Header>
                                    <Item.Meta>2017 - Actualidad</Item.Meta>
                                    <Item.Description>
                                        <Image centered src={require('../../assets/images/logotec.png')} size='tiny' />
                                        Instituto Tecnológico Superior de Jerez
                                    </Item.Description>
                                    <Item.Extra>Sábados</Item.Extra>
                                </Item.Content>
                            </Item>
                        </Transition>
                    </Item.Group>
                </Transition.Group>
            </Responsive>
        </Segment.Group>
    );
}

export default Education;