import React from 'react';
import { Icon, Segment, Header, Image, Responsive } from 'semantic-ui-react';

export interface IFooterProps { }
export interface IFooterState {
    facebook: boolean;
    instagram: boolean;
    linkedIn: boolean;
    whatsapp: boolean;
}
class Footer extends React.Component<IFooterProps, IFooterState>{
    constructor(props: IFooterProps) {
        super(props);
        this.state = {
            facebook: false,
            instagram: false,
            whatsapp: false,
            linkedIn: false
        }
    }
    render() {
        return (
            <Segment.Group attached='bottom'>
                <Responsive as={Segment}
                    style={{ background: '#000', height: '250px'}}
                >
                    <Header as='h6' inverted style={{ textAllign: 'center', marginRight: '130px', marginBottom: '0%', marginTop: '50px'}}>Powered by</Header>
                    <Image centered src={require('../assets/images/rr.png')} size='small'/>
                        <Header as='h5' floated='right' inverted >
                            <Header.Content>
                                Social<br />
                                <Icon
                                    name='whatsapp'
                                    size='large'
                                    color={ this.state.whatsapp ? 'green' : undefined}
                                    onMouseEnter={ () => this.setState({ whatsapp: true }) }
                                    onMouseLeave={ () => this.setState({ whatsapp: false }) }
                                />
                                +52 499-103-6055<br />
                                <Icon name='mail'/>
                                vladimir.tordavi@gmail.com<pre />
                                <Icon
                                    name='facebook'
                                    size='big'
                                    color={ this.state.facebook ? 'blue' : undefined}
                                    onMouseEnter={ () => this.setState({ facebook: true }) }
                                    onMouseLeave={ () => this.setState({ facebook: false }) }
                                    onClick={() => window.open('https://www.facebook.com/MVTorresD/', '_blank')}
                                />
                                <Icon
                                    name='instagram'
                                    size='big'
                                    color={ this.state.instagram ? 'purple' : undefined}
                                    onMouseEnter={ () => this.setState({ instagram: true }) }
                                    onMouseLeave={ () => this.setState({ instagram: false }) }
                                    onClick={() => window.open('https://www.instagram.com/miro_torres/', '_blank')}
                                />
                                <Icon
                                    name='linkedin'
                                    size='big'
                                    color={ this.state.linkedIn ? 'blue' : undefined}
                                    onMouseEnter={ () => this.setState({ linkedIn: true }) }
                                    onMouseLeave={ () => this.setState({ linkedIn: false }) }
                                    onClick={() => window.open('https://www.linkedin.com/in/vladimir-torres-205072185/', '_blank')}
                                />
                            </Header.Content>
                        </Header>
                </Responsive>
            </Segment.Group>
        );
    }
}

export default Footer;