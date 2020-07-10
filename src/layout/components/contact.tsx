import React, { useReducer } from 'react';
import { Icon, Segment, Button, Grid, Responsive, Message } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import HeaderComponent from './headerComponent';

export interface IFooterProps {
    language: boolean;
}
const reducer = (state, { field, value }) => {
    switch (field) {
        case 'name':
            return {
                ...state,
                name: value,
                nameValido: value.trim() !== '' ? true : false
            }
        case 'email':
            return {
                ...state,
                email : value,
                emailValido: value.trim() !== '' ? true : false
            }
        case 'message':
            return {
                ...state,
                message : value,
                messageValido: value.trim() !== '' ? true : false
            }
        case 'validacion':
            console.log('validando campos ' + state.name)
            return {
                ...state,
                nameValido: state.name && state.name !== '' ? true : false,
                emailValido: state.email && state.email !== '' ? true : false,
                messageValido: state.message && state.message !== '' ? true : false
            }
        case 'valido':
            if(state.emailValido && state.nameValido && state.messageValido) {
                console.log('campos validos')
                window.open('https://api.whatsapp.com/send?phone=+524991036055&text=Hola%20soy%20'+ state.name +'%20%0AEmail:%20'+ state.email +'%0A'+ state.message, '_blank');
                return {
                    ...initialState
                }
            } else {
                console.log('campos no validos')
                return {
                    ...state,
                    error: true
                }
            }
    }
}
const initialState = {
    email: '',
    name: '',
    message: '',
    emailValido: true,
    nameValido: true,
    messageValido: true,
    error: false
}
const Contact: React.SFC<IFooterProps> = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { name, email, message, nameValido, emailValido, messageValido } = state;

    const handleChange = (e) => {
        dispatch({ field: e.currentTarget.name, value: e.currentTarget.value });
    }
    const handleSubmit = () => {
        dispatch({ field: 'validacion', value: null});
        dispatch({ field: 'valido', value: null});
    }
    return (
        <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
            <Responsive as={Segment}>
                <Message
                    error
                    header="Mensaje no enviado"
                    content='No puede haber campos vacíos'
                    hidden={!state.error}
                />
                <HeaderComponent language={props.language} titulo='Escríbeme!' title='Write to me!' icon='mail outline' />
                <Grid.Column>
                    <Grid columns={1}>
                        <Grid.Column>
                            <TextField
                                label={props.language ? "Correo" : "E-mail"}
                                value={email || ''}
                                type='email'
                                name="email"
                                onChange={handleChange}
                                variant="outlined"
                                style={{ width: '50%' }}
                                error={!emailValido}
                            />
                            <TextField
                                label={props.language ? "Nombre" : "Name"}
                                value={name || ''}
                                type='text'
                                name="name"
                                onChange={handleChange}
                                variant="outlined"
                                style={{ width: '50%' }}
                                error={!nameValido}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <TextField
                                label={props.language ? "Mensaje" : "Message"}
                                multiline
                                value={message || ''}
                                rows={4}
                                name="message"
                                onChange={handleChange}
                                variant="outlined"
                                style={{ width: '100%' }}
                                error={!messageValido}
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