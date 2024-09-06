import React from 'react';
import { Segment, Image, Card, Responsive, Popup, Grid, Header } from 'semantic-ui-react';
import HeaderComponent from './headerComponent';
import { empleos, employes } from '../../data/experience.data';

export interface IExperienceProps {
    language: boolean;
}

const buildData = (e: any) => {
    return (
        <Grid.Column largeScreen={8} textAlign="center" key={`${e.id}-${e.slogan}`}>
            <Popup
                trigger={
                    <Card style={{ width: '100%' }}>
                        <Card.Content>
                            <Card.Header>
                                {e.title}
                            </Card.Header>
                            <Card.Meta>{e.startDate} - {e.endDate}</Card.Meta>
                            <Card.Description style={{ minHeight: '150px' }}>
                                <Image centered src={e.logo} style={{ marginTop: '12px' }} size='tiny' circular /><br/>
                                {e.title}<br />
                                {e.slogan}<br />
                                {e.location}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                }
                on="click"
                size="huge"
                flowing
                hoverable
            >
                <Image src={e.image} size="big"/>
                <Header textAlign="center">
                    {e.title}
                    <Header.Subheader>
                        <p>{e.description}</p>
                    </Header.Subheader>
                </Header>
            </Popup>
        </Grid.Column>
    );
}

const Experience: React.SFC<IExperienceProps> = props => {

    return (
        <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
            <Responsive as={Segment}>
                <HeaderComponent language={props.language} titulo='Experiencia' title='Experience' icon='usb' />
                <React.Fragment>
                    <Grid columns={2}>
                        <Grid.Row centered >
                            {props.language ? empleos.map((e, index) => {
                                return (
                                    buildData(e)
                                );
                            }) 
                            : employes.map((e, index) => {
                                return (
                                    buildData(e)
                                );
                            })}
                        </Grid.Row>
                    </Grid>
                </React.Fragment>
            </Responsive>
        </Segment.Group>
    );
}

export default Experience;