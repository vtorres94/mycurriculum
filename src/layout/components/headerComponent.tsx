
import React from 'react';
import { Icon, Header } from 'semantic-ui-react';
import Tilt from 'react-parallax-tilt';

export interface IHeaderComponentProps {
    language?: boolean;
    scroll?: number;
    titulo: string;
    title?: string;
    icon: any;
}

export interface IHeaderComponentState {
    color: "blue" | "black" | "brown" | "green" | "grey" | "olive" | "orange" | "pink" | "purple" | "red" | "teal" | "violet" | "yellow" | undefined;
    mainFocus: boolean;
    duration: number;
    visible: boolean;
}

class HeaderComponent extends React.Component<IHeaderComponentProps, IHeaderComponentState>{
    constructor(props: IHeaderComponentProps){
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
        await this.setState({ mainFocus: true, visible: true });
        this.handleInterval(1);
        var interval: any = setInterval(() => this.handleInterval(interval), 3000);
    }
    render() {
        return (
            <Header as='h2' icon textAlign='center' dividing color={this.state.color}>
                <Header.Content>
            <Tilt trackOnWindow={true} gyroscope={true}>

                    <Icon name={this.props.icon} circular onMouseEnter={() => this.changeColor()} onMouseLeave={() => this.setState({ mainFocus: false })} />
            </Tilt>
                    {this.props.language ? this.props.titulo : this.props.title}
                </Header.Content>
                <Header.Subheader>
                    {this.props.children}
                </Header.Subheader>
            </Header>
        );
    }
}

export default HeaderComponent;