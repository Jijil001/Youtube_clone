import React from 'react';
import { Avatar } from '@mui/material';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import './ChannelRow.css';

function ChannelRow({ image,
    Channel,
    subs,
    noOfVideos,
    description,
    verified }) { // Added verified prop
    return (
        <div className='ChannelRow'>
            <Avatar className='channelRow__logo' alt={Channel} src={image} />
            <div className='channelRow__text'>
                <h4>{Channel} {verified && <CheckCircleSharpIcon />}</h4> {/* Use verified prop */}
                <p>
                    {subs} subscribers • {noOfVideos} videos
                </p>
                <p>{description} </p>
            </div>
        </div>
    );
}

export default ChannelRow;
