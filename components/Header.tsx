"use client"

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container flex">
                <div className="header__logo">
                    <a href="#" className="header__logo-link">

                    </a>
                </div>
                <nav className="header__nav">
                    <ul className="header__list list-reset flex">
                        <li className="header__item">
                            <a href="/about" className="header__link">
                                About-us
                            </a>
                        </li>
                        <li className="header__item">
                            <a href="" className="header__link">
                                Products
                            </a>
                        </li>
                        <li className="header__item">
                            <a href="" className="header__link">
                                Combo 
                            </a>
                        </li>
                        <li className="header__item">
                            <a href="" className="header__link">
                                Newsletter
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="header__controls flex">
                    <button className="header__search btn-reset">
                        <svg width="33" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.9999 21L16.6499 16.65" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button className="header__log btn-reset flex">
                        <svg width="28" height="28" viewBox="0 0 19 18" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 1.5L2 5.25L9.5 9L17 5.25L9.5 1.5Z" stroke="#121723" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12.75L9.5 16.5L17 12.75" stroke="#121723" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 9L9.5 12.75L17 9" stroke="#121723" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>
                            Log-in
                        </span>
                    </button>
                    <button className="header__basket btn-reset">
                        <svg fill="#fff" width="32px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.739 8.875c-0.186-0.264-0.489-0.422-0.812-0.422h-21.223l-1.607-5.54c-0.63-2.182-2.127-2.417-2.741-2.417h-4.284c-0.549 0-0.993 0.445-0.993 0.993s0.445 0.993 0.993 0.993h4.283c0.136 0 0.549 0 0.831 0.974l5.527 20.311c0.12 0.428 0.511 0.724 0.956 0.724h13.499c0.419 0 0.793-0.262 0.934-0.657l4.758-14.053c0.11-0.304 0.064-0.643-0.122-0.907zM25.47 22.506h-12.046l-3.161-12.066h19.253zM23.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM14.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="header__back"></div>
        </header>
    );
};

export default Header;