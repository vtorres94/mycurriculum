import React, { useReducer } from 'react';
import { Button, Segment, Header as Text, Responsive } from 'semantic-ui-react';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { useGlobal } from './context/GlobalContext';
// tslint:disable-next: react-hooks/exhaustive-deps

export interface IHeaderProps { }

const headerReducer = (state, action) => {
    switch(action.type) {
        case 'language':
            return{
                ...state,
                open: action.payload
            }
        case 'entered':
            return{
                ...state,
                mainFocus: true
            }
        case 'exited':
            return{
                ...state,
                mainFocus: false
            }
        case 'color':
            return {
                ...state,
                color: action.payload
            }
           
    }
} 

const initialState = {
    color: 'black',
    open: false,
    mainFocus: false
}
const Header: React.SFC<IHeaderProps> = () => {

    const { language, setLanguage } = useGlobal();
    const [ state, dispatch ] = useReducer(headerReducer, initialState);
    const handleButton = (event) => {
        dispatch({ type: 'language', payload: true });
        setLanguage(!language);
    }
    const handleClose = () => {
        dispatch({ type: 'language', payload: false });
    }
    const handleFocus = () => {
        dispatch({ type: 'entered', payload: null })
        changeColor();
    }
    const handleInterval = (interval: number) => {
        for (let i = 0; i <= 7; i++) {
            switch (i) {
                case 0:
                    setTimeout(() => dispatch({ type: 'color', payload: 'black' }), 0);
                    break;
                case 1:
                    setTimeout(() => dispatch({ type: 'color', payload: 'teal' }), 500);
                    break;
                case 2:
                    setTimeout(() => dispatch({ type: 'color', payload: 'green' }), 1000);
                    break;
                case 3:
                    setTimeout(() => dispatch({ type: 'color', payload: 'yellow' }), 1500);
                    break;
                case 4:
                    setTimeout(() => dispatch({ type: 'color', payload: 'purple' }), 2000);
                    break;
                case 5:
                    setTimeout(() => dispatch({ type: 'color', payload: 'blue' }), 2500);
                    break;
                case 6:
                    setTimeout(() => dispatch({ type: 'color', payload: 'black' }), 2500);
                    break;
                case 7:
                    clearInterval(interval);
                    break;
            }
            if(!state.mainFocus){
                clearInterval(interval);
            }
        }
    }
    const changeColor = () => {
        handleInterval(1);
        var interval: any = setInterval(() => handleInterval(interval), 3000);
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
                    onMouseEnter={() => handleFocus()}
                    onMouseLeave={() => dispatch({ type: 'exited', payload: null })}
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