import React, { useState } from 'react';
import { Segment, Image, Transition, Item, Responsive } from 'semantic-ui-react';
import HeaderComponent from './headerComponent';

export interface IExperienceProps {
    language: boolean;
}

const Experience: React.SFC<IExperienceProps> = props => {
    const [state = {
        duration: 1000,
        visible: true
    }] = useState();

    const { duration, visible } = state
    return (
        <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
            <Responsive as={Segment}>
                <HeaderComponent language={props.language} titulo='Experiencia' title='Experience' icon='usb' />
                <Transition.Group>
                    <Item.Group divided>
                        <Transition animation='browse' duration={duration} visible={visible} >
                            <Item>
                                <Item.Content>
                                    <Item.Header>
                                        Subdirector
                                        </Item.Header>
                                    <Item.Meta>2016 - 2018</Item.Meta>
                                    <Item.Description>
                                        <Image centered src={require('../../assets/images/logocultura.png')} size='tiny' />
                                            Instituto Villanovense de Cultura<br />
                                                "Antonio Aguilar Barraza"
                                        </Item.Description>
                                </Item.Content>
                                <Item.Extra>Villanueva, Zac</Item.Extra>
                            </Item>
                        </Transition>
                        <Transition animation='browse' duration={duration} visible={visible} >
                            <Item>
                                <Item.Content>
                                    <Item.Header>
                                        Desarrollador Web
                                        </Item.Header>
                                    <Item.Meta>2019 - Actualidad</Item.Meta>
                                    <Item.Description>
                                        <Image centered src={require('../../assets/images/CIESOFT.png')} size='tiny' />
                                            CIESOFT
                                        </Item.Description>
                                    <Item.Extra>Zacatecas, Zac</Item.Extra>
                                </Item.Content>
                            </Item>
                        </Transition>
                    </Item.Group>
                </Transition.Group>
            </Responsive>
        </Segment.Group>
    );
}

export default Experience;