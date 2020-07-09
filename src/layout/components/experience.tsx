import React from 'react';
import { Segment, Image, Card, Responsive, Popup, Grid } from 'semantic-ui-react';
import HeaderComponent from './headerComponent';

export interface IExperienceProps {
    language: boolean;
}

const Experience: React.SFC<IExperienceProps> = props => {

    return (
        <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
            <Responsive as={Segment}>
                <HeaderComponent language={props.language} titulo='Experiencia' title='Experience' icon='usb' />
                <React.Fragment>
                    <Grid columns={2} >
                        <Grid.Row centered textAlign="center">
                            <Grid.Column largeScreen={3} textAlign="center">
                                <Popup
                                    trigger={
                                        <Card >
                                            <Card.Content>
                                                <Card.Header>
                                                    Subdirector
                                                </Card.Header>
                                                <Card.Meta>2016 - 2018</Card.Meta>
                                                <Image centered src={require('../../assets/images/logocultura.png')} size='tiny' circular/>
                                                <Card.Description>
                                                    Instituto Villanovense de Cultura<br />
                                                            "Antonio Aguilar Barraza"<br />
                                                                Villanueva, Zac
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    }
                                    on="click"
                                    size="huge"
                                    flowing
                                    hoverable
                                >
                                    <Image src={require('../../assets/images/cultura.jpg')} size="big"/>
                                </Popup>
                            </Grid.Column>
                            <Grid.Column largeScreen={3} textAlign="center">
                                <Popup
                                    trigger={
                                        <Card>
                                            <Card.Content>
                                                <Card.Header>
                                                    Desarrollador Web
                                                    </Card.Header>
                                                <Card.Meta>2019 - Actualidad</Card.Meta>
                                                <Image centered src={require('../../assets/images/CIESOFT.png')} size='tiny' circular style={{ marginTop: '5px'}}/>
                                                <Card.Description>
                                                        CIESOFT<br/>
                                                        Consultoría Integral Empresarial<br/>
                                                        Zacatecas, Zac
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    }
                                    on="click"
                                    size="huge"
                                    flowing
                                    hoverable
                                >
                                    <Image src={require('../../assets/images/ciesoft.jpg')} size="big"/>
                                </Popup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </React.Fragment>
            </Responsive>
        </Segment.Group>
    );
}

export default Experience;