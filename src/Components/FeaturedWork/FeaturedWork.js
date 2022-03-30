import React from 'react';
import "./FeaturedWork.css";
import {Parallax, Background} from 'react-parallax';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
import FeaturedWorkBg from './Assets/Images/FeaturedWorkBg.jpg';
import ChevronRight from "./Assets/Images/chevron-right.svg";
import {getPlaylistItems, getVideoThumbnail} from "../../Services/Youtube";

const FeaturedWork = () => {
    const [featuredVideos, setFeaturedVideos] = React.useState(null);
    React.useEffect(() => {
        // Get promise from getPlaylistItems
        let playlistPromise = getPlaylistItems();

        // Fetch the data from the promise
        playlistPromise.then(data => {
            setFeaturedVideos(data.props.data.items);
            console.log(data.props.data.items);
        });
    }, []);

    const slideVideos = () => {
        const FeaturedVideosContainer = document.getElementById("FeaturedVideosContainer");
        const Chevron = document.getElementById("Chevron");
        let currentPos = FeaturedVideosContainer.style.left;
        if (currentPos === "0px" || currentPos === "0" || currentPos === "") {
            FeaturedVideosContainer.style.left = "-95vw";
            Chevron.style.transform = "rotate(180deg)";
        } else {
            FeaturedVideosContainer.style.left = "0px";
            Chevron.style.transform = "rotate(0deg)";
        }
    }
    return (
        <section id='featuredwork'>
            <Parallax bgImage={FeaturedWorkBg} strength={500}>
                <div style={{height: 650}}>
                    {featuredVideos &&
                        <div className="fw-content">
                            <div className="fw-header">
                                <h2 className='fw-title glowingText'>Featured Work</h2>
                            </div>
                            <div id="FeaturedVideosContainer" className="fw-showcase">
                                <div className="first-videos">
                                    <div className="fw-oneShowcase">
                                        <img src={getVideoThumbnail(featuredVideos[0].contentDetails.videoId)} alt=""/>
                                        <h2 className='fw-title glowingText'>{featuredVideos[0].snippet.title}</h2>
                                    </div>
                                    <div className="fw-oneShowcase">
                                        <img src={getVideoThumbnail(featuredVideos[1].contentDetails.videoId)} alt=""/>
                                        <h2 className='fw-title glowingText'>{featuredVideos[1].snippet.title}</h2>
                                    </div>
                                </div>
                                <div className="second-videos">
                                    <div className="fw-oneShowcase">
                                        <img src={getVideoThumbnail(featuredVideos[2].contentDetails.videoId)} alt=""/>
                                        <h2 className='fw-title glowingText'>{featuredVideos[2].snippet.title}</h2>
                                    </div>
                                    <div className="fw-oneShowcase">
                                        <img src={getVideoThumbnail(featuredVideos[3].contentDetails.videoId)} alt=""/>
                                        <h2 className='fw-title glowingText'>{featuredVideos[3].snippet.title}</h2>
                                    </div>
                                </div>
                                <div className="chevron-container">
                                    <img id="Chevron" onClick={() => slideVideos()} className="chevron" src={ChevronRight} alt=""/>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </Parallax>
        </section>
    );
}

export default FeaturedWork;