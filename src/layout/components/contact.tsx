import React, { useState } from 'react';
import { Icon, Segment, Button, Grid, Responsive, Message } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import HeaderComponent from './headerComponent';

export interface IFooterProps {
    language: boolean;
}

export interface IFooterState {
    email: string;
    feedback: string;
    name: string;
    message: string;
    error: boolean;
}

const Contact: React.SFC<IFooterProps> = props => {
    const [state = {
        email: '',
        feedback: '',
        name: '',
        message: '',
        error: false
    }, setState] = useState();

    const handleSubmit = () => {

        /* const templateId = 'template_tQGYAzE5';
        sendFeedback(templateId, {message_html: "hola", from_name: 'miro', reply_to: 'miroundead@gmail.com'}) */
    }

    const cleanFields = () => {
        setState({
            ...state,
            name: '',
            email: '',
            message: '',
            feedback: '',
            error: false
        })
    }

    return (
        <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
            <Responsive as={Segment}>
                <Message
                    error
                    onDismiss={() => cleanFields()}
                    header="Mensaje no enviado"
                    content='Función en desarrollo'
                    hidden={!state.error}
                />
                <HeaderComponent language={props.language} titulo='Escríbeme!' title='Write to me!' icon='mail outline' />
                <Grid.Column>
                    <Grid columns={1}>
                        <Grid.Column>
                            <TextField
                                label={props.language ? "Correo" : "E-mail"}
                                value={state.email}
                                type='email'
                                onChange={e => setState({ ...state, email: e.target.value })}
                                variant="outlined"
                                style={{ width: '50%' }}
                            />
                            <TextField
                                label={props.language ? "Nombre" : "Name"}
                                value={state.name}
                                type='text'
                                onChange={e => setState({ ...state, name: e.target.value })}
                                variant="outlined"
                                style={{ width: '50%' }}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <TextField
                                label={props.language ? "Mensaje" : "Message"}
                                multiline
                                value={state.message}
                                rows={4}
                                onChange={e => setState({ ...state, message: e.target.value })}
                                variant="outlined"
                                style={{ width: '100%' }}
                            />
                            <Button color='facebook' attached='bottom' onClick={() => setState({ ...state, error: true })} animated='fade'>
                                <Button.Content visible>
                                    {props.language ? "Enviar" : "Send"}
                                </Button.Content>
                                <Button.Content hidden>
                                    <Icon name='send' />
                                </Button.Content>
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Responsive>
        </Segment.Group>
    );
}

export default Contact;

function sendFeedback(templateId, variables) {
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