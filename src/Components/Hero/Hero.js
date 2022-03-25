import React from 'react';
import './Hero.css';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
import ArrowRight from './Icons/arrow-right.svg';
import {storage} from '../../Services/Firebase';
import {getStorage, ref, getDownloadURL} from "firebase/storage";

const Hero = ({value: {setIsSiteReady}}) => {
    const [video, setVideo] = React.useState(null);
    React.useEffect(() => {
        const storage = getStorage();

        const storageRef = ref(storage);
        const videosRef = ref(storageRef, 'videos');

        const fileName = 'shot in paris 4k DCI.mp4';
        const videoRef = ref(videosRef, fileName);

        // Get the download URL
        getDownloadURL(videoRef).then(url => {
            setVideo(url);
            setIsSiteReady(true);
        });
    }, []);


    return (
        <section id="home">
            <div className="hero">
                <div dangerouslySetInnerHTML={{
                    __html: `
                <video id="hero-video" loop muted playsinline autoplay>
                    <source src="${video}" type="video/mp4" />
                </video>
            `
                }}/>
                <div className="hero-text-box">
                    <h1 className='glowingText'>LAC X FILMS</h1>
                    <h2 className='glowingText'>KEVIN LACROIX</h2>
                    <AnchorLink href='#featuredwork'>
                        <button className='btn-banner glowingText' type="button">Featured Work
                            <img src={ArrowRight} alt="Arrow Right"/>
                        </button>
                    </AnchorLink><br/>
                </div>
            </div>
        </section>
    );
}

export default Hero;