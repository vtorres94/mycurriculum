import React from 'react';
import { Icon, Button, Segment, Grid, Header, Image } from 'semantic-ui-react';
import Biografia from './components/biografia';
import Techs from './components/technologies';
import Experience from './components/cv';
import Contact from './components/contact';

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
            <Segment scrollable>
                <Biografia/>
                <Experience/>
                <Techs/>
                <Contact/>
            </Segment>
        );
    }
}

export default Body;