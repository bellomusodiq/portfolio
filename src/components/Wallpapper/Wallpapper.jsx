import React from 'react';
import './Wallpaper.css';
import WallpapperImage from '../../assets/images/Wallpapper.png';
import { Component } from 'react';


class Wallpapper extends Component {
    state = {
        text1: '',
        text2: '',
        text3: ''
    }
    helloWorld() {
        let text1 = 'print("Hello World!")';
        let text2 = '<div class="container">My name is Mayowa Bello</div>';
        let text3 = 'const bello = () => {console.log("full-stack web developer, python, JavaScript")}'
        for (let i = 1; i < text1.length + 1; i++) {
            setTimeout(() => {
                this.setState({ ...this.state, text1: this.state.text1 + text1[i - 1] })
                if (this.state.text1.length === text1.length) {
                }
            }, 200 * i);
        }
        for (let i = 1; i < text2.length + 1; i++) {
            setTimeout(() => {
                this.setState({ ...this.state, text2: this.state.text2 + text2[i - 1] })
            }, 200 * i);
        }
        for (let i = 1; i < text3.length + 1; i++) {
            setTimeout(() => {
                this.setState({ ...this.state, text3: this.state.text3 + text3[i - 1] })
            }, 200 * i);
        }
    }
    componentDidMount() {
        this.helloWorld();
    }
    render() {
        return (
            <div className="Wallpaper" style={{ backgroundImage: `url(${WallpapperImage})` }} >
                {/* <img src={WallpapperImage} alt='walpaper' /> */}
                <div>
                    <p className="WallpaperText">{this.state.text1}</p>
                    <p className="WallpaperText">{this.state.text2}</p>
                    <p className="WallpaperText">{this.state.text3}</p>
                </div>
            </div>
        )
    }
}

export default Wallpapper;