import React, { useState } from 'react';
import { Segment, Image, Responsive } from 'semantic-ui-react';
import Resume from './components/resume';
import Techs from './components/technologies';
import Experience from './components/experience';
import Contact from './components/contact';
import Education from './components/education';
import Projects from './components/projects';
import { useGlobal } from './context/GlobalContext';

export interface IBodyProps {}

const Body: React.SFC<IBodyProps> = props => {
    const [state = {
        scroll: 0
    }] = useState();

    const { language } = useGlobal();

    return (
        <Segment.Group>
            <Responsive as={Segment}>
                <Image centered src={require('../assets/images/yo3.jpg')} size='big' circular/>
                <Resume language={language} />
                <Experience language={language} />
                <Education language={language} scroll={state.scroll} />
                <Techs language={language} />
                {/* <Projects language={language} scroll={state.scroll} /> */}
                <Contact language={language} />
            </Responsive>
        </Segment.Group>
    );
}

export default Body;