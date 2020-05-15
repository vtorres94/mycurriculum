import React from 'react';
import { Icon, Segment, Grid, Header, Image, Container, Responsive } from 'semantic-ui-react';

function Biografia() {
    return (
        <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%', overflow: 'auto' }}>
            <Responsive as={Segment} >
            <Grid>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <Image centered src={require('../../assets/images/yo2.jpg')} size='big' circular />
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2' icon textAlign='center' dividing>
                                <Header.Content>
                                    <Icon name='user' circular />
                                        Resume
                                </Header.Content>
                            </Header>
                            <Container text>
                                <p style={{ textAlign: 'left'}}>
                                    Name: Miguel Vladimir Torres Dávila<pre/>
                                    Birthday: 10/Dec/1994
                                </p>
                                <p>
                                    Aquí va mi biografía ..................................................
                                    ........................................................................
                                    ........................................................................
                                    ........................................................................
                                    ........................................................................
                                    ........................................................................
                                    ........................................................................
                                    ........................................................................
                                    ........................................................................
                                    ........................................................................
                                    ........................................................................
                                    ........................................................................
                                    ........................................................................
                                    ........................................................... bla bla bla
                                </p>
                            </Container>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            </Responsive>
        </Segment.Group>
    );
}

export default Biografia;