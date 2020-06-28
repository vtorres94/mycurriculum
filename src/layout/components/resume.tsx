import React from 'react';
import { Icon, Segment, Grid, Header, Responsive, Button } from 'semantic-ui-react';
import HeaderComponent from './headerComponent';

export interface IResumeProps {
    language: boolean;
}

const Resume: React.SFC<IResumeProps> = props => {
    return (
        <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
            <Responsive as={Segment} >
                <HeaderComponent language={props.language} titulo='Perfil' title='Resume' icon='user' />
                <Grid columns={2}>
                    <Grid.Column largeScreen={8} textAlign='center'>
                        {props.language ?
                            <Header as='h4'>
                                Nombre: Miguel Vladimir Torres Dávila<pre />
                                    Fecha Nacimiento: 10/Dic/1994<pre />
                                    Super poder: Convertir café en código<pre />
                            </Header>
                            :
                            <Header as='h4'>
                                Name: Miguel Vladimir Torres Dávila<pre />
                                    Birthday: 10/Dec/1994<pre />
                                    Super power: Convert coffee on code<pre />
                            </Header>
                        }
                    </Grid.Column>
                    <Grid.Column largeScreen={8} textAlign='center'>
                        {props.language ?
                            <Header as='h4'>
                                País: México<pre />
                                    Estado: Zacatecas<pre />
                                    Municipio: Villanueva<pre />
                                    Ingles: Intermedio
                                </Header>
                            :
                            <Header as='h4'>
                                Country: México<pre />
                                    State: Zacatecas<pre />
                                    City: Villanueva<pre />
                                    English: Intermediate
                                </Header>
                        }
                    </Grid.Column>
                </Grid>
                {props.language ?
                    <Header>
                        Hola! soy Desarrollador de aplicaciones Web siempre en busca del conocimiento y las buenas prácticas. <pre />
                            Si tienes algún proyecto interesante del cual pueda aprender por favor mándame un mensaje, me encantaría formar parte! <pre />
                            Actualmente crezco mis habilidades en el desarrollo de una aplicación web dirigida a la gestión de clínicas de misión crítica, <br />
                            con alta disponibilidad y con un nivel alto de implementación de reglas de negocio creado con JHipser una plataforma de desarrollo <br />
                            para aplicaciones web modernas basada en microservicios.
                    </Header>
                    :
                    <Header>
                        Hello! I'm a Web application Developer always looking for knowledge and good practices. <pre />
                            If you have any interesting projects from which I can learn please send me a message, I would love to be a part! <pre />
                            I currently grow my skills in developing a web application aimed at managing mission critical statistics, <br />
                            with high availability and with a high level of business rules implementation created with JHipser a development platform <br />
                            for modern microservice-based web applications.
                    </Header>
                }
                <Button attached='bottom' color="facebook" onClick={() => window.open('Curriculum.pdf', '_blank')} animated="fade">
                    <Button.Content visible>
                        {props.language ? "Descargar PDF" : "Download PDF"}
                    </Button.Content>
                    <Button.Content hidden>
                        <Icon name='download' />
                    </Button.Content>
                </Button>
            </Responsive>
        </Segment.Group>
    );
}

export default Resume;