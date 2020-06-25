import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header/Header';
import Wallpapper from './Wallpapper/Wallpapper';
import About from './About/About';
import axios from 'axios';
import { BASE_URL } from "../utils";
import RecentWork from './RecentWork/RecentWork';
import Footer from './Footer/Footer';
import Modal from './Modal/Modal';


class Home extends Component {
    state = {
        technologies: null,
        recentWorks: null,
        showModal: false,
        currentImg: null
    }
    componentDidMount() {
        axios.get(BASE_URL + '/api/technology/')
            .then(res => {
                const data = res.data;
                const technologies = {
                    frontend: [],
                    backend: [],
                    ml: [],
                    dev: []
                }
                for (let tech of data) {
                    switch (tech.technology_type) {
                        case "frontend":
                            technologies.frontend.push({ name: tech.name, url: tech.url })
                            break;
                        case "backend":
                            technologies.backend.push({ name: tech.name, url: tech.url })
                            break;
                        case "ml":
                            technologies.ml.push({ name: tech.name, url: tech.url })
                            break;
                        case "dev":
                            technologies.dev.push({ name: tech.name, url: tech.url })
                            break;
                    }
                }
                this.setState({ technologies });
            })
        axios.get(BASE_URL + '/api/recent-work/')
            .then(res => {
                const data = res.data;
                this.setState({ recentWorks: data });
            })
    }
    render() {

        const style = { background: '#0092ff', padding: '8px 0' };
        return (
            <Grid >
                {this.state.showModal ? <Modal img={this.state.currentImg}
                    closeImage={() => this.setState({ showModal: false })} /> : null}
                <Header />
                <Wallpapper />
                <About techs={this.state.technologies} />
                <RecentWork
                    showImage={url => this.setState({ showModal: true, currentImg: url })}
                    recent={this.state.recentWorks} />
                <Footer />
            </Grid>
        )
    }
}

export default Home;