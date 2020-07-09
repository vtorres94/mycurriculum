import React, { useState, useEffect } from 'react';
import { Button, Segment, Header as Text, Responsive } from 'semantic-ui-react';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { useGlobal } from './context/GlobalContext';

export interface IHeaderProps { }

const Header: React.SFC<IHeaderProps> = () => {
    const [state = {
        color: 'black',
        open: false,
        mainFocus: false,
    }, setState] = useState<{
        color: any,
        open: boolean,
        mainFocus: boolean
    }>
            ();
    const { language, setLanguage } = useGlobal();
    useEffect(() => {
        if (state.mainFocus) {
            changeColor();
        }
    }, [state.mainFocus]);
    const handleInterval = (interval: number) => {
        for (let i = 0; i <= 7; i++) {
            switch (i) {
                case 0:
                    setTimeout(() => setState({ ...state, color: 'black' }), 0);
                    break;
                case 1:
                    setTimeout(() => setState({ ...state, color: 'teal' }), 500);
                    break;
                case 2:
                    setTimeout(() => setState({ ...state, color: 'green' }), 1000);
                    break;
                case 3:
                    setTimeout(() => setState({ ...state, color: 'yellow' }), 1500);
                    break;
                case 4:
                    setTimeout(() => setState({ ...state, color: 'purple' }), 2000);
                    break;
                case 5:
                    setTimeout(() => setState({ ...state, color: 'blue' }), 2500);
                    break;
                case 6:
                    setTimeout(() => setState({ ...state, color: 'black' }), 2500);
                    break;
                case 7:
                    clearInterval(interval);
                    break;
            }
        }
    }
    const changeColor = () => {
        handleInterval(1);
        var interval: any = setInterval(() => handleInterval(interval), 3000);
    }
    const handleButton = (event) => {
        setState({ ...state, open: true });
        setLanguage(!language);
    }
    const handleClose = () => {
        setState({ ...state, open: false });
    }
    return (
        <Segment.Group attached='top' >
            <Responsive
                as={Segment}
                style={{
                    backgroundImage: `url(${require('../assets/images/city.jpg')})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '300px',
                }}
            >
                <Button
                    attached='top'
                    floated='right'
                    basic size='massive'
                    icon='language'
                    inverted
                    color={state.color}
                    onClick={event => handleButton(event)}
                    onMouseEnter={() => setState({ ...state, mainFocus: true })}
                    onMouseLeave={() => setState({ ...state, mainFocus: false })}
                />
                <Text style={{ marginTop: '100px' }} size='huge' inverted color={state.color}>
                    {"V L A D I M I R \xa0\xa0T O R R E S"}
                    <Text.Subheader>{"D\xa0 E\xa0 V\xa0 E\xa0 L\xa0 O\xa0 P\xa0 E\xa0 R"}</Text.Subheader>
                </Text>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={state.open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message={language ? 'Se cambió el lenguaje' : 'Language changed'}
                    action={
                        <React.Fragment>
                            <Button size="small" aria-label="close" color="red" onClick={handleClose}>
                                <CloseIcon fontSize="small" />
                            </Button>
                        </React.Fragment>
                    }
                />
            </Responsive>
        </Segment.Group>
    );
}

export default Header;