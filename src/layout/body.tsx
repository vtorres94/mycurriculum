import React from 'react';
import { Icon, Button, Segment, Grid, Header, Image, Responsive } from 'semantic-ui-react';
import Resume from './components/resume';
import Techs from './components/technologies';
import Experience from './components/cv';
import Contact from './components/contact';
import Education from './components/education';

export interface IBodyProps{}
export interface IBodyState{

}
class Body extends React.Component<IBodyProps, IBodyState>{
    constructor(props: IBodyProps) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <Segment.Group scrollable>
                <Responsive as={Segment}>
                    <Image centered src={require('../assets/images/yo3.jpg')} size='big' circular />
                    <Resume/>
                    <Education/>
                    <Experience/>
                    <Techs/>
                    <Contact/>
                </Responsive>
            </Segment.Group>
        );
    }
}

export default Body;