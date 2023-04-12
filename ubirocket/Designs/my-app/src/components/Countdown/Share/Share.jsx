import React from 'react'
import { FacebookIcon, FacebookShareButton } from 'react-share';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';
import { TwitterIcon, TwitterShareButton } from 'react-share';

export const Share = () => {
    const shareUrl = window.location.href;
    return (
        <div>
            <h4>¡Share The Next Launch!</h4>
            <div className='socialMedia'>
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

            </div>
        </div>
    )
}
