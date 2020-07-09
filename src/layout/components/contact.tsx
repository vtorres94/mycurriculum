import React, { useState } from 'react';
import { Icon, Segment, Button, Grid, Responsive, Message } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import HeaderComponent from './headerComponent';

export interface IFooterProps {
    language: boolean;
}

const Contact: React.SFC<IFooterProps> = props => {
    const [state = {
        email: '',
        name: '',
        message: '',
        error: false
    }, setState] = useState();
    const handleSubmit = () => {
        window.open('https://api.whatsapp.com/send?phone=+524991036055&text=Hola%20soy%20'+ state.name +'%20%0AEmail:%20'+ state.email +'%0A'+ state.message, '_blank')
        setState({ ...state, email: '', name: '', message: '' });
    }
    
    const cleanFields = () => {
        setState({
            ...state,
            name: '',
            email: '',
            message: '',
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
                            <Button color='facebook' attached='bottom' onClick={() => handleSubmit()} animated='fade'>
                                <Button.Content visible>
                                    {props.language ? "Enviar" : "Send"}
                                </Button.Content>
                                <Button.Content color='green' hidden>
                                    <Icon name='whatsapp' />
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