import React from 'react';
import { Icon, Button, Segment, Grid, Header as Text } from 'semantic-ui-react';

export interface IHeaderProps{}

export interface IHeaderState{
    color: "blue" | "black" | "brown" | "green" | "grey" | "olive" | "orange" | "pink" | "purple" | "red" | "teal" | "violet" | "yellow" | undefined;
    mainFocus: boolean;
}

class Header extends React.Component<IHeaderProps, IHeaderState>{
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
        return(
            <Segment
                style={{
                    backgroundImage: `url(${require('../assets/images/city.jpg')})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '300px', width: '100%'
                }}
                attached='top'>
                <Grid>
                    <Grid.Column largeScreen={16}>
                        <Button attached='top' floated='right' basic size='big' icon='server big' inverted color={this.state.color} onMouseEnter={() => this.changeColor()} onMouseLeave={() => this.setState({ mainFocus: false })}/>
                        <Text style={{ marginTop: '5%' }} as='h1' inverted color={this.state.color}>
                            <Text.Content>
                                {"V L A D I M I R \xa0\xa0 T O R R E S"}
                                <Text.Subheader>{"D\xa0 E\xa0 V\xa0 E\xa0 L\xa0 O\xa0 P\xa0 E\xa0 R"}</Text.Subheader>
                            </Text.Content>
                        </Text>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default Header;