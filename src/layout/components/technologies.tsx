import React from 'react';
import { Icon, Button, Segment, Grid, Header, Image, Card, Rating, Responsive} from 'semantic-ui-react';
import Slider from 'react-slick';

export interface IHeaderProps{}

export interface IHeaderState{
    color: "blue" | "black" | "brown" | "green" | "grey" | "olive" | "orange" | "pink" | "purple" | "red" | "teal" | "violet" | "yellow" | undefined;
    mainFocus: boolean;
}

class Techs extends React.Component<IHeaderProps, IHeaderState>{
    constructor(props: IHeaderProps){
        super(props);
        this.state = {
            color: 'black',
            mainFocus: false
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
        await this.setState({ mainFocus: true });
        this.handleInterval(1);
        var interval: any = setInterval(() => this.handleInterval(interval), 3000);
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 1500
        };
        return (
            <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
                <Responsive as={Segment}>
                <Header as='h2' icon textAlign='center' dividing color={this.state.color}>
                    <Header.Content >
                        <Icon name='code' circular onMouseEnter={() => this.changeColor()} onMouseLeave={() => this.setState({ mainFocus: false })}/>
                        Skills
                    </Header.Content>
                </Header>
                <Slider {...settings}>
                    <Card>
                        <Image style={{ width: '350px', height: '350px'}} centered src={require('../../assets/images/java-logo.png')} />
                        <Card.Content>
                            <Card.Header>JAVA</Card.Header>
                            <Card.Meta>Joined in 2018</Card.Meta>
                        </Card.Content>
                        <Card.Content centered>
                            <Rating icon='star' defaultRating={4} maxRating={5} disabled />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image style={{ width: '350px', height: '350px'}} centered src={require('../../assets/images/html.jpg')} />
                        <Card.Content>
                            <Card.Header>HTML5</Card.Header>
                            <Card.Meta>Joined in 2018</Card.Meta>
                        </Card.Content>
                        <Card.Content centered>
                            <Rating icon='star' defaultRating={4} maxRating={5} disabled />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image  style={{ width: '350px', height: '350pxpx'}} centered src={require('../../assets/images/css.jpg')} />
                        <Card.Content>
                            <Card.Header>CSS</Card.Header>
                            <Card.Meta>Joined in 2018</Card.Meta>
                        </Card.Content>
                        <Card.Content centered>
                            <Rating icon='star' defaultRating={3} maxRating={5} disabled />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image style={{ width: '350px', height: '350px'}} centered src={require('../../assets/images/php.jpg')} />
                        <Card.Content>
                            <Card.Header>PHP</Card.Header>
                            <Card.Meta>Joined in October 2018</Card.Meta>
                        </Card.Content>
                        <Card.Content centered>
                            <Rating icon='star' defaultRating={3} maxRating={5} disabled />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image style={{ width: '350px', height: '350px'}} centered src={require('../../assets/images/js.png')} />
                        <Card.Content>
                            <Card.Header>Javascript</Card.Header>
                            <Card.Meta>Joined in October 2019</Card.Meta>
                        </Card.Content>
                        <Card.Content centered>
                            <Rating icon='star' defaultRating={3} maxRating={5} disabled />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image style={{ width: '350px', height: '350px'}} centered src={require('../../assets/images/react.jpg')} />
                        <Card.Content>
                            <Card.Header>React</Card.Header>
                            <Card.Meta>Joined in October 2019</Card.Meta>
                        </Card.Content>
                        <Card.Content centered>
                            <Rating icon='star' defaultRating={3} maxRating={5} disabled />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image style={{ width: '350px', height: '350px'}} centered src={require('../../assets/images/redux.png')} />
                        <Card.Content>
                            <Card.Header>Redux</Card.Header>
                            <Card.Meta>Joined in October 2019</Card.Meta>
                        </Card.Content>
                        <Card.Content centered>
                            <Rating icon='star' defaultRating={3} maxRating={5} disabled />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image  style={{ width: '350px', height: '350pxpx'}} centered src={require('../../assets/images/hipster.jpeg')} />
                        <Card.Content>
                            <Card.Header>Java Hipster</Card.Header>
                            <Card.Meta>Joined in October 2019</Card.Meta>
                        </Card.Content>
                        <Card.Content centered>
                            <Rating icon='star' defaultRating={3} maxRating={5} disabled />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image style={{ width: '350px', height: '350px'}} centered src={require('../../assets/images/jasper.png')} />
                        <Card.Content>
                            <Card.Header>Jaspersoft</Card.Header>
                            <Card.Meta>Joined in January 2020</Card.Meta>
                        </Card.Content>
                        <Card.Content centered>
                            <Rating icon='star' defaultRating={2} maxRating={5} disabled />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image  style={{ width: '350px', height: '350pxpx'}} centered src={require('../../assets/images/git.jpg')} />
                        <Card.Content>
                            <Card.Header>Versionement Controll</Card.Header>
                            <Card.Meta>Joined in October 2019</Card.Meta>
                        </Card.Content>
                        <Card.Content centered>
                            <Rating icon='star' defaultRating={3} maxRating={5} disabled />
                        </Card.Content>
                    </Card>
                </Slider>
                </Responsive>
            </Segment.Group>
        );
    }
}

export default Techs;