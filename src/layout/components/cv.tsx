import React from 'react';
import { Icon, Segment, Header, Image, Transition, Item, Responsive } from 'semantic-ui-react';

export interface IExperienceProps{
    language: boolean;
}

export interface IExperienceState{
    color: "blue" | "black" | "brown" | "green" | "grey" | "olive" | "orange" | "pink" | "purple" | "red" | "teal" | "violet" | "yellow" | undefined;
    mainFocus: boolean;
    duration: number;
    visible: boolean;
}

class Experience extends React.Component<IExperienceProps, IExperienceState> {
    constructor(props: IExperienceProps){
        super(props);
        this.state = {
            color: 'black',
            mainFocus: false,
            duration : 1000,
            visible: true
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
        await this.setState({ mainFocus: true });
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
                            {this.props.language? "Experiencia" : "Experience"}
                        </Header.Content>
                    </Header>
                    <Transition.Group>
                        <Item.Group divided>
                            <Transition animation='browse' duration={duration} visible={visible} >
                                <Item>
                                    <Item.Content>
                                        <Item.Header>
                                            Subdirector
                                        </Item.Header>
                                        <Item.Meta>2016 - 2018</Item.Meta>
                                        <Item.Description>
                                            <Image centered src={require('../../assets/images/logocultura.png')} size='tiny'/>
                                            Instituto Villanovense de Cultura<br/>
                                                "Antonio Aguilar Barraza"
                                        </Item.Description>
                                    </Item.Content>
                                    <Item.Extra>Villanueva, Zac</Item.Extra>
                                </Item>
                            </Transition>
                            <Transition animation='browse' duration={duration} visible={visible} >
                                <Item>
                                    <Item.Content>
                                        <Item.Header>
                                            Desarrollador Web
                                        </Item.Header>
                                        <Item.Meta>2019 - Actualidad</Item.Meta>
                                        <Item.Description>
                                            <Image centered src={require('../../assets/images/CIESOFT.png')} size='tiny'/>
                                            CIESOFT
                                        </Item.Description>
                                        <Item.Extra>Zacatecas, Zac</Item.Extra>
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

export default Experience;