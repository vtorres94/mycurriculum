import React from 'react';
import { Icon, Button, Segment, Grid, Header as Text } from 'semantic-ui-react';

export interface IFooterProps{}
export interface IFooterState{

}

class Footer extends React.Component<IFooterProps, IFooterState>{
    constructor(props: IFooterProps){
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <Segment style={{ background: '#000', height: '150px' }} attached='bottom'>
                <Grid columns={2}>
                    <Grid.Column largeScreen={15}>
                        <Text as='h1' inverted>Footer</Text>
                    </Grid.Column>
                    <Grid.Column largeScreen={1} >
                        
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default Footer;