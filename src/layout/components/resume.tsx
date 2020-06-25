import React from 'react';
import { Icon, Segment, Grid, Header, Responsive, Button } from 'semantic-ui-react';

export interface IResumeProps {
    language: boolean;
}

export interface IResumeState {
    color: "blue" | "black" | "brown" | "green" | "grey" | "olive" | "orange" | "pink" | "purple" | "red" | "teal" | "violet" | "yellow" | undefined;
    mainFocus: boolean;
}

class Resume extends React.Component<IResumeProps, IResumeState>{
    constructor(props: IResumeProps) {
        super(props);
        this.state = {
            color: 'black',
            mainFocus: false
        }
    }
    handleInterval(interval: number) {
        console.log('focus' + this.state.mainFocus);
        for (let i = 0; i < 6; i++) {
            switch (i) {
                case 0:
                    setTimeout(() => this.setState({ color: 'black' }), 0);
                    break;
                case 1:
                    setTimeout(() => this.setState({ color: 'teal' }), 500);
                    break;
                case 2:
                    setTimeout(() => this.setState({ color: 'green' }), 1000);
                    break;
                case 3:
                    setTimeout(() => this.setState({ color: 'yellow' }), 1500);
                    break;
                case 4:
                    setTimeout(() => this.setState({ color: 'purple' }), 2000);
                    break;
                case 5:
                    setTimeout(() => this.setState({ color: 'blue' }), 2500);
                    break;
            }
            if (!this.state.mainFocus) {
                console.log('se va a detener!')
                clearInterval(interval);
                break;
            }
        }

    }
    changeColor = async () => {
        await this.setState({ mainFocus: true });
        this.handleInterval(1);
        var interval: any = setInterval(() => this.handleInterval(interval), 3000);
    }

    /* downloadCV() {
        console.log(window.location.href)
        var link = document.createElement('a');
        link.href = 'Curriculum.pdf';
        link.download = 'VladimirTorresCV.pdf';
        link.dispatchEvent(new MouseEvent('click')); 
    } */

    render() {
        return (
            <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
                <Responsive as={Segment} >
                    <Header as='h2' icon textAlign='center' dividing color={this.state.color}>
                        <Header.Content>
                            <Icon name='user' circular onMouseEnter={() => this.changeColor()} onMouseLeave={() => this.setState({ mainFocus: false })} />
                            {this.props.language ? "Perfil" : "Resume"}
                        </Header.Content>
                    </Header>

                    <Grid columns={2}>
                        <Grid.Column largeScreen={8} textAlign='center'>
                            {this.props.language ?
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
                            {this.props.language ?
                                <Header as='h4'>
                                    País: México<pre />
                                    Estado: Zacatecas<pre />
                                    Municipio: Villanueva<pre />
                                    Ingles: Básico
                                </Header>
                                :
                                <Header as='h4'>
                                    Country: México<pre />
                                    State: Zacatecas<pre />
                                    City: Villanueva<pre />
                                    English: Basic
                                </Header>
                            }
                        </Grid.Column>
                    </Grid>
                    {this.props.language ?
                        <Header>
                            Hola! soy Desarrollador de aplicaciones Web con 6 meses de experiencia siempre en busca del conocimiento y las buenas prácticas. <pre/>
                            Si tienes algún proyecto interesante del cual pueda aprender por favor mándame un mensaje, me encantaría formar parte! <pre/>
                            Actualmente crezco mis habilidades en el desarrollo de una aplicación web dirigida a la gestión de clínicas de misión crítica, <br/>
                            con alta disponibilidad y con un nivel alto de implementación de reglas de negocio creado con JHipser plataforma de desarrollo <br/>
                            para aplicaciones web modernas basado en microservicio.
                        </Header>
                        :
                        <Header>
                            Hello! I'm a Web application Developer with 6 months of experience always looking for knowledge and good practices. <pre/>
                            If you have any interesting projects from which I can learn please send me a message, I would love to be a part! <pre/>
                            I currently grow my skills in developing a web application aimed at managing mission critical statistics, <br/>
                            with high availability and with a high level of business rules implementation created with JHipser development platform <br/>
                            for modern microservice-based web applications.
                        </Header>
                    }
                    <Button attached='bottom' color="facebook" onClick={() => window.open('Curriculum.pdf', '_blank')} animated="fade">
                        <Button.Content visible>
                            {this.props.language ? "Descargar PDF" : "Download PDF"}
                        </Button.Content>
                        <Button.Content hidden>
                            <Icon name='download' />
                        </Button.Content>
                    </Button>
                </Responsive>
            </Segment.Group>
        );
    }
}

export default Resume;