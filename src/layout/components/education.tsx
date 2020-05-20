import React from 'react';
import { Icon, Segment, Grid, Header, Image, List, Responsive, TransitionablePortal, Item, Transition } from 'semantic-ui-react';

export interface IEducationProps{
    language: boolean;
    scroll: number;
}

export interface IEducationState{
    color: "blue" | "black" | "brown" | "green" | "grey" | "olive" | "orange" | "pink" | "purple" | "red" | "teal" | "violet" | "yellow" | undefined;
    mainFocus: boolean;
    duration: number;
    visible: boolean;
}

class Education extends React.Component<IEducationProps, IEducationState>{
    constructor(props: IEducationProps){
        super(props);
        this.state = {
            color: 'black',
            mainFocus: false,
            duration : 1000,
            visible: true
        }
    }
    componentDidUpdate(prevProps){
        console.log('ESTUDIOS SCROLL : ' + this.props.scroll)

        if(this.props.scroll !== prevProps.scroll){
            console.log('ESTUDIOS SCROLL : ' + this.props.scroll)
        }
    }
    handleInterval(interval: number) {
        console.log('focus' + this.state.mainFocus);
        for(let i=0; i<6; i++){
            switch(i) {
                case 0 :
                    setTimeout(() => this.setState({ color: 'black'}), 0);
                break;
                case 1 :
                    setTimeout(() => this.setState({ color: 'teal'}), 500);
                break;
                case 2 :
                    setTimeout(() => this.setState({ color: 'green'}), 1000);
                break;
                case 3 :
                    setTimeout(() => this.setState({ color: 'yellow'}), 1500);
                break;
                case 4 :
                    setTimeout(() => this.setState({ color: 'purple'}), 2000);
                break;
                case 5 :
                    setTimeout(() => this.setState({ color: 'blue'}), 2500);
                break;
            }
            if(!this.state.mainFocus) {
                console.log('se va a detener!')
                clearInterval(interval);
                break;
            }
        }
        
    }
    changeColor = async () => {
        await this.setState({ mainFocus: true, visible: true });
        this.handleInterval(1);
        var interval: any = setInterval(() => this.handleInterval(interval), 3000);
    }
    render() {
        const { duration, visible } = this.state
        return (
            <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
                <Responsive as={Segment}>
                    <Header as='h2' icon textAlign='center' dividing color={this.state.color}>
                        <Header.Content>
                            <Icon name='usb' circular onMouseEnter={() => this.changeColor()} onMouseLeave={() => this.setState({ mainFocus: false })}/>
                            {this.props.language ? "Estudios" : "Estudy"}
                        </Header.Content>
                    </Header>
                    <Transition.Group>
                        <Item.Group divided>
                            <Transition animation='browse' duration={duration} visible={visible} >
                                <Item>
                                    <Item.Content>
                                        <Item.Header>Preparatoria Villanueva</Item.Header>
                                        <Item.Meta>2010 - 2013</Item.Meta>
                                        <Item.Description>
                                            Bachillerato en informática
                                        </Item.Description>
                                        <Item.Extra>Concluída</Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Transition>
                            <Transition animation='browse' duration={duration} visible={visible} >
                            <Item >
                                <Item.Content>
                                    <Item.Image src={require('../../assets/images/UAZ.jpg')} size='tiny'/>
                                    <Item.Header>Universidad Autonoma de Zacatecas</Item.Header>
                                    <Item.Meta>2013 - 2015</Item.Meta>
                                    <Item.Description>
                                        Ingeniería de Software
                                    </Item.Description>
                                    <Item.Extra>Inconcluída</Item.Extra>
                                </Item.Content>
                            </Item>
                            </Transition>
                            <Transition animation='browse' duration={duration} visible={visible} >
                            <Item>
                                <Item.Content>
                                    <Item.Image src={require('../../assets/images/logotec.png')} size='tiny'/>
                                    <Item.Header>Instituto Tecnológico Superior de Jerez</Item.Header>
                                    <Item.Meta>2017 - Actualidad</Item.Meta>
                                    <Item.Description>
                                        Ingeniería en Sistemas Computacionales
                                    </Item.Description>
                                    <Item.Extra>Sabático</Item.Extra>
                                </Item.Content>
                            </Item>
                            </Transition>
                        </Item.Group>
                    </Transition.Group>
                </Responsive>
            </Segment.Group>
        );
    }
}

export default Education;