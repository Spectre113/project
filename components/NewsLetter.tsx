"use client";

import React from 'react';

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <div className="container flex">
                <h2 className="newsletter__title">
                    Newsletter
                </h2>
                <p className="newsletter__info">
                    Want to&nbsp;stay up&nbsp;to&nbsp;date with all promotions and special offers?
                </p>
                <p className="newsletter__info">
                    Subscribe to&nbsp;our newsletter and receive notifications about the most profitable promotions directly to&nbsp;your inbox. Don&rsquo;t miss your chance for exclusive offers and nice discounts!
                    Simply click the subscribe button and leave your email address below. We&nbsp;promise that your address will be&nbsp;used exclusively to&nbsp;send you information about marketplace promotions, without intrusive advertising or&nbsp;spam.
                    Don&rsquo;t miss the opportunity to&nbsp;enjoy the flavor and save money at&nbsp;the same time. 
                </p>
                <p className="newsletter__info">
                    Sign up&nbsp;for our newsletter now!
                </p>
                <button className="newsletter__btn btn-reset flex">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_643_1251)">
                            <path d="M10.5 20C16.0228 20 20.5 15.5228 20.5 9.99998C20.5 4.47714 16.0228 0 10.5 0C4.97724 0 0.5 4.47714 0.5 9.99998C0.5 15.5228 4.97724 20 10.5 20Z" fill="#F0D288"/>
                            <path d="M17.4383 4.54391L13.7294 3.17676L8.39558 10.8637L8.92665 7.3751L6.02046 5.68219L0.673828 12.1141C0.924147 13.3858 1.41008 14.5718 2.08375 15.6239L5.27361 11.7711L4.09981 16.2962L7.73695 17.6271L13.1407 9.8464L11.9568 14.2958L14.9032 16.0179L20.5579 10.3174C20.5591 10.2534 20.5598 10.1889 20.5598 10.1246C20.5598 8.78258 20.3016 7.50132 19.8328 6.32896L16.548 9.6538L17.4383 4.54391Z" fill="#121723"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_643_1251">
                                <rect x="0.5" width="20" height="20" rx="10" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span>
                        Subscribe
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Newsletter;