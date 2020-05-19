import React from 'react';
import { Icon, Button, Segment, Grid, Header, List, Image } from 'semantic-ui-react';

export interface IFooterProps { }
export interface IFooterState {

}

class Footer extends React.Component<IFooterProps, IFooterState>{
    constructor(props: IFooterProps) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Segment style={{ background: '#000', height: '220px' }} attached='bottom'>
                <Grid>
                    <Grid.Column largeScreen={16}>
                        <Header as='h6' inverted style={{ marginRight: '150px', padding: 'none', marginBottom: '0%' }}>Powered by</Header>
                        <Image centered src={require('../assets/images/rr.png')} size='small' />
                        <List floated='right' inverted>
                            <List.Item>
                                <Header as='h5' inverted>Miguel Vladimir Torres Dávila</Header>
                            </List.Item>
                            <List.Item>
                                <Header as='h5' inverted>
                                    <Header.Content>
                                        <Icon name='phone' />
                                        +52 499-103-6055
                                    </Header.Content>
                                </Header>
                            </List.Item>
                            <List.Item>
                                <Header as='h5' inverted>
                                    <Header.Content>
                                        <Icon name='mail' />
                                        vladimir.tordavi@gmail.com
                                    </Header.Content>
                                </Header>
                            </List.Item>
                            <List.Item>
                                <Button icon='instagram' onClick={() => window.open('https://www.instagram.com/miro_torres/', '_blank')} />
                                <Button icon='facebook' onClick={() => window.open('https://www.facebook.com/MVTorresD/', '_blank')} />
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default Footer;