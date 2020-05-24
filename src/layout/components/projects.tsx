import React from 'react';
import { Icon, Segment, Header, Responsive, Card, Image} from 'semantic-ui-react';

export interface IProjectsProps{
    language: boolean;
    scroll: number;
}

export interface IProjectsState{
    color: "blue" | "black" | "brown" | "green" | "grey" | "olive" | "orange" | "pink" | "purple" | "red" | "teal" | "violet" | "yellow" | undefined;
    mainFocus: boolean;
    duration: number;
    visible: boolean;
}

class Projects extends React.Component<IProjectsProps, IProjectsState>{
    constructor(props: IProjectsProps){
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
                            <Icon name='folder open' circular onMouseEnter={() => this.changeColor()} onMouseLeave={() => this.setState({ mainFocus: false })}/>
                            {this.props.language ? "Proyectos" : "Projects"}
                        </Header.Content>
                    </Header>
                    <Card.Group itemsPerRow={1}>
                        <Card raised img={require('../../assets/images/logoTordavi.png')} href={'https://tordavi-international.herokuapp.com/'} target='_blank' >
                            <Image src={require('../../assets/images/logoTordavi.png')}/>
                        </Card>
                    </Card.Group>
                </Responsive>
            </Segment.Group>
        );
    }
}

export default Projects;