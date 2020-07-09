import React, { useState, useEffect } from 'react';
import { Segment, Image, Responsive } from 'semantic-ui-react';
import Resume from './components/resume';
import Techs from './components/technologies';
import Experience from './components/experience';
import Contact from './components/contact';
import Education from './components/education';
import Projects from './components/projects';
import { useGlobal } from './context/GlobalContext';

export interface IBodyProps {
}

const Body: React.SFC<IBodyProps> = props => {
    const [state = {
        scroll: 0
    }, setState] = useState();

    /* const componentDidMount() {    
        window.onscroll = () => handleAnimation();  
    }; */
    const { language } = useGlobal();
    useEffect(() => {
        handleAnimation();
    },[window.onscroll]);
    const handleAnimation = () => {
        if (document.documentElement.scrollTop > 50) {
            console.log('scrooolll : ' + document.documentElement.scrollTop);
            // this.setState({ visible: true });  
        };
    }
    return (
        <Segment.Group scrollable>
            <Responsive as={Segment}>
                <Image centered src={require('../assets/images/yo3.jpg')} size='big' circular />
                <Resume language={language} />
                <Experience language={language} />
                <Education language={language} scroll={state.scroll} />
                <Techs />
                <Projects language={language} scroll={state.scroll} />
                <Contact language={language} />
            </Responsive>
        </Segment.Group>
    );
}

export default Body;