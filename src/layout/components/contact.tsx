import React, { useState } from 'react';
import { Icon, Segment, Button, Header, Grid, List, Responsive, Input, TextArea, Form } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
export interface IHeaderProps {
    language: boolean;
}

export interface IHeaderState {
    color: "blue" | "black" | "brown" | "green" | "grey" | "olive" | "orange" | "pink" | "purple" | "red" | "teal" | "violet" | "yellow" | undefined;
    mainFocus: boolean;
    email: string;
    name: string;
    message: string;
}

class Contact extends React.Component<IHeaderProps, IHeaderState>{
    constructor(props: IHeaderProps) {
        super(props);
        this.state = {
            color: 'black',
            mainFocus: false,
            email: '',
            name: '',
            message: ''
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
    render() {
        return (
            <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
                <Responsive as={Segment}>
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
                                    rows={4}
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                />
                                <Button attached='bottom'>
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