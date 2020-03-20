import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header/Header';
import Wallpapper from './Wallpapper/Wallpapper';


class Home extends Component {

    render() {
        const style = { background: '#0092ff', padding: '8px 0' };
        return (
            <Grid>
                <Header />
                <Wallpapper />
            </Grid>
        )
    }
}

export default Home;