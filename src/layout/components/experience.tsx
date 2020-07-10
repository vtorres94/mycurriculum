import React from 'react';
import { Segment, Image, Card, Responsive, Popup, Grid, Header } from 'semantic-ui-react';
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
                    <Grid columns={2}>
                        <Grid.Row centered >
                            <Grid.Column largeScreen={8} textAlign="center">
                                <Popup
                                    trigger={
                                        <Card style={{ width: '100%' }}>
                                            <Card.Content>
                                                <Card.Header>
                                                    Subdirector
                                                </Card.Header>
                                                <Card.Meta>2016 - 2018</Card.Meta>
                                                <Image centered  src={require('../../assets/images/logocultura.png')} style={{ marginTop: '12px'}} size='tiny' circular/>
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
                                    {props.language ?
                                    <Header textAlign="center">
                                        Instituto Villanovense de Cultura<br />
                                        "Antonio Aguilar Barraza"
                                        <Header.Subheader>
                                            Una gran experiencia trabajar en el sector público y más<br />
                                            en el ámbito cultural, conocí un montón de personas interesantes,<br />
                                            culturas locales que se creían perdidas y todo tipo de costumbres <br />
                                            de nuestro México.
                                        </Header.Subheader>
                                    </Header>
                                    :
                                    <Header textAlign="center">
                                        Instituto Villanovense de Cultura<br />
                                        "Antonio Aguilar Barraza"
                                        <Header.Subheader>
                                            A great experience working in the public sector and more<br />
                                            in the cultural field, I met a lot of interesting people,<br />
                                            local cultures that believed they were lost and all kinds<br />
                                            of cultural customs of our Mexico.
                                        </Header.Subheader>
                                    </Header>}
                                </Popup>
                            </Grid.Column>
                            <Grid.Column largeScreen={8} textAlign="center" >
                                <Popup
                                    trigger={
                                        <Card style={{ width: '100%' }}>
                                            <Card.Content>
                                                <Card.Header>
                                                    Desarrollador<br/>Web
                                                    </Card.Header>
                                                <Card.Meta>2019 - Actualidad</Card.Meta>
                                                <Image centered src={require('../../assets/images/CIESOFT.png')} size='small' circular />
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
                                    {props.language ?
                                    <Header textAlign="center">
                                        Proyecto: BlueHealth
                                        <Header.Subheader>
                                            Desarrollo de aplicación web dirigido a la gestión<br/>
                                            de clínicas de misión crítica, con alta disponibilidad<br/>
                                            y con un nivel alto de implementación de reglas de<br/>
                                            negocio, este proyecto está basado en micro<br/>
                                            servicios usando una plataforma de desarrollo<br/>
                                            para aplicaciones web modernas llamada JHipster<br/>
                                            que utiliza Java, JPA, Spring Boot, Maven,<br/>
                                            Hibernate, Liquibase, Swagger entre otras en el<br/>
                                            backend y React, Typescript y Bootstrap en el<br/>
                                            frontend.
                                        </Header.Subheader>
                                    </Header>
                                    :
                                    <Header textAlign="center">
                                        Proyect: BlueHealth
                                        <Header.Subheader>
                                            Development of web application aimed at management<br/>
                                            mission critical clinics with a high availability<br/>
                                            and a high level of implementation of<br/>
                                            business rules, this project is based on micro<br/>
                                            services using a development platform<br/>
                                            for modern web applications called JHipster<br/>
                                            which uses Java, JPA, Spring Boot, Maven,<br/>
                                            Hibernate, Liquibase, Swagger among others in the<br/>
                                            backend and React, Typescript and Bootstrap in the<br/>
                                            frontend.
                                        </Header.Subheader>
                                    </Header>}
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