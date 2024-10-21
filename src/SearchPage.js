import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import "./SearchPage.css";
import { TuneOutlined } from '@mui/icons-material';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlined />
                <h2>FILTER</h2>
            </div>
            <hr></hr>
            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AIdro_kKGaEKaafkVObI-xJQPOipJ-B-W2vdD8fuv4oNEW7d894=s88-c-k-c0x00ffffff-no-rj"
                Channel="National Geographic "
                verified
                subs="2.79M"
                noOfVideos="3.7k"
                description="Inspiring people to care about the planet! National Geographic is the world's premium destination for science, exploration, and adventure. 
"

            />
            <hr />
            <VideoRow
                views="1.4M"

                subs="23.6M"
                description="Over the past century, advances in technology have fueled a race to build gigantic ships. S2, E13 | Drain the Oceans"
                timestamp="59 days ago"
                Channel="National Geographic"
                title="Lost Giants: Epic Shipwrecks of the Century (Full Episode) | Drain the Oceans"
                image="https://i.ytimg.com/vi/11bINdW0sew/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1CQo1B6B1B6p97zma5WwUEHLerQ"
            />
            <VideoRow
                views="318k"
                subs="23.6M"
                description="S1, E1-E5 | UFOS: Investigating the Unknown "
                timestamp="5 days ago"
                Channel="National Geographic"
                title="UFO's: Investigating the Unknown MEGA EPISODE | Secret Programs and Close Encounters | Nat Geo"
                image="https://i.ytimg.com/vi/1WwGGuQljl4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDG3WJY43pu831-_umEZqwGj9yydw"
            />
            <VideoRow
                views="1.4M"
                subs="23.6M"
                description="S2, E1 | America's National Park"
                timestamp="59 seconds ago"
                Channel="National Geographic"
                title="Surviving Grand Teton: America's National Parks (Full Episode) | Wild West Wonders"
                image="https://i.ytimg.com/vi/LdW3jRm4B6s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpOvfy98Gn_tP5dpAAGFMNgZETew"
            />
            <VideoRow
                views="1.4M"
                subs="23.6M"
                description="From National Geographic and Plimsoll Productions comes the thrilling documentary special THE DEVIL’S CLIMB"
                timestamp="59 seconds ago"
                Channel="National Geographicr"
                title="The Devil’s Climb | Official Trailer | National Geographic"
                image="https://i.ytimg.com/vi/XD_PZVMuJy8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBlQGme2-n-2Km5admWa41q9m2cvA"

            />
        </div>
    );
}

export default SearchPage;