import React from 'react';
import { Icon, Segment, Grid, Header, Image, TextArea, Responsive } from 'semantic-ui-react';

export interface IHeaderProps{}

export interface IHeaderState{
    color: "blue" | "black" | "brown" | "green" | "grey" | "olive" | "orange" | "pink" | "purple" | "red" | "teal" | "violet" | "yellow" | undefined;
    mainFocus: boolean;
}

class Resume extends React.Component<IHeaderProps, IHeaderState>{
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
        return (
            <Segment.Group style={{ background: '#fff', marginLeft: '10%', marginRight: '10%' }}>
                <Responsive as={Segment} >
                    <Header as='h2' icon textAlign='center' dividing color={this.state.color}>
                        <Header.Content>
                            <Icon name='user' circular onMouseEnter={() => this.changeColor()} onMouseLeave={() => this.setState({ mainFocus: false })}/>
                            Resume
                        </Header.Content>
                    </Header>
                    
                    <Grid columns={2}>
                        <Grid.Column largeScreen={8} textAlign='center'>
                            <p>
                                Name: Miguel Vladimir Torres Dávila<pre />
                                Birthday: 10/Dec/1994<pre />
                                Super power: Convertir café en código<pre />
                            </p>
                        </Grid.Column>
                        <Grid.Column largeScreen={8} textAlign='center'>
                            <p>
                                Country: México<pre />
                                State: Zacatecas<pre />
                                City: Villanueva<pre />
                            </p>
                        </Grid.Column>
                    </Grid>
                        <p>
                            <pre />
                            Hola! estoy en camino a ser un desarrollador full stack, empecé en ambientes profesionales a mediados del 2019<br/>
                            y e estado desarrollando mis habilidades desde entonces, soy un fiel creyente del conociento oblicuo y el autodidactismo <br/>
                            por eso valoro mucho el conocimiento que pueda dejarme cualquier persona o proyecto, te dejo este espacio para que conozcas algo de mi formación y<br/>
                            si tienes algo que aportarme por favor mandame un mensaje! 
                        </p>
                </Responsive>
            </Segment.Group>
        );
    }
}

export default Resume;