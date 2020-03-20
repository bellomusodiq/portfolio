import React from 'react';
import './Wallpaper.css';
import WallpapperImage from '../../assets/images/Wallpapper.png';


const Wallpapper = () => (
    <div className="Wallpaper">
        <img src={WallpapperImage} alt='walpaper' />
    </div>
)

export default Wallpapper;