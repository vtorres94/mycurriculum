import React, { useState } from 'react';
import { Icon, Segment, Button, Header, Grid, List, Responsive, Input, Message, Form } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';

export interface IFooterProps {
    language: boolean;
}

export interface IFooterState {
    color: "blue" | "black" | "brown" | "green" | "grey" | "olive" | "orange" | "pink" | "purple" | "red" | "teal" | "violet" | "yellow" | undefined;
    mainFocus: boolean;
    email: string;
    feedback: string;
    name: string;
    message: string;
    error: boolean;
}

class Contact extends React.Component<IFooterProps, IFooterState>{
    constructor(props: IFooterProps) {
        super(props);
        this.state = {
            color: 'black',
            mainFocus: false,
            email: '',
            feedback: '',
            name: '',
            message: '',
            error: false
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
    handleChangeInput(e, { name, value, min, max, pattern, id }) {
        console.log('handle change')

        // tslint:disable-next-line:switch-default
        switch (name) {
            case 'email':
                console.log(value)
                this.setState({ email: value });
                break;
            case 'name':
                this.setState({ name: value });
                break;
            case 'message':
                this.setState({ message: value });
                break;
        }
    };

    handleSubmit () {
        
        /* const templateId = 'template_tQGYAzE5';
        sendFeedback(templateId, {message_html: "hola", from_name: 'miro', reply_to: 'miroundead@gmail.com'}) */
    }
    
    cleanFields(){
        this.setState({
            name: '',
            email: '',
            message: '',
            feedback: '',
            error: false
        })
    }
    

    render() {
        return (
            <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
                <Responsive as={Segment}>
                    <Message
                        error
                        onDismiss={() => this.cleanFields()}
                        header="Mensaje no enviado"
                        content='Función en desarrollo'
                        hidden={!this.state.error}
                    />
                    <Header as='h2' icon textAlign='center' dividing color={this.state.color}>
                        <Header.Content>
                            <Icon name='mail outline' circular onMouseEnter={() => this.changeColor()} onMouseLeave={() => this.setState({ mainFocus: false })} />
                            {this.props.language? "Escríbeme!" : "Write to me!"}
                        </Header.Content>
                    </Header>
                    <Grid.Column>
                        <Grid columns={1}>
                            <Grid.Column>
                                <TextField
                                    label={this.props.language? "Correo" : "E-mail"}
                                    value={this.state.email}
                                    type='email'
                                    onChange={e => this.setState({ email: e.target.value })}
                                    variant="outlined"
                                    style={{ width: '50%' }}
                                />
                                <TextField
                                    label={this.props.language? "Nombre" : "Name"}
                                    value={this.state.name}
                                    type='text'
                                    onChange={e => this.setState({ name: e.target.value })}
                                    variant="outlined"
                                    style={{ width: '50%' }}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <TextField
                                    label={this.props.language? "Mensaje" : "Message"}
                                    multiline
                                    value={this.state.message}
                                    rows={4}
                                    onChange={e => this.setState({ message: e.target.value })}
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                />
                                <Button attached='bottom' onClick={() => this.setState({ error: true })}>
                                    Send
                                </Button>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Responsive>
            </Segment.Group>
        );
    }
}

export default Contact;

function sendFeedback (templateId, variables) {
    var window: any;
    window.emailjs.send(
        'gmail', templateId,
        variables
    ).then(res => {
        console.log('Email successfully sent!')
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
}