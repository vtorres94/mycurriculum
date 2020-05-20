import React from 'react';
import { Segment, Image, Responsive } from 'semantic-ui-react';
import Resume from './components/resume';
import Techs from './components/technologies';
import Experience from './components/cv';
import Contact from './components/contact';
import Education from './components/education';

export interface IBodyProps{
    language: boolean;
}
export interface IBodyState{
    language: boolean;
    scroll: number;
}
class Body extends React.Component<IBodyProps, IBodyState>{
    constructor(props: IBodyProps) {
        super(props);
        this.state = {
            language: this.props.language,
            scroll: 0
        }
    }
    componentDidMount() {    
        window.onscroll = () => this.handleAnimation();  
    };
    
    handleAnimation = () => {       
        if (document.documentElement.scrollTop > 50) {     
            console.log('scrooolll : ' + document.documentElement.scrollTop);      
         // this.setState({ visible: true });  
        };
    }
    render() {
        return(
            <Segment.Group scrollable>
                <Responsive as={Segment}>
                    <Image centered src={require('../assets/images/yo3.jpg')} size='big' circular />
                    <Resume language={this.props.language}/>
                    <Education language={this.props.language} scroll={this.state.scroll}/>
                    <Experience language={this.props.language}/>
                    <Techs/>
                    <Contact language={this.props.language}/>
                </Responsive>
            </Segment.Group>
        );
    }
}

export default Body;