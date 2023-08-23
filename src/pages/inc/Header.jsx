import React from 'react'

const Header = () => {
    return (
        <header id="header">
            <nav className="navbar navbar-default navbar-fixed-top menu">
                <div className="container">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="./">
                            <img src="https://themified.com/friend-finder/images/logo.png" alt="logo" />
                        </a>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div
                        className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1"
                    >
                        <ul className="nav navbar-nav navbar-right main-menu">
                            <li className="dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Home{" "}
                                    <span>
                                        <img src="https://themified.com/friend-finder/images/down-arrow.png" alt="" />
                                    </span>
                                </a>
                                <ul className="dropdown-menu newsfeed-home">
                                    <li>
                                        <a href="index.html">Landing Page 1</a>
                                    </li>
                                    <li>
                                        <a href="index-register.html">Landing Page 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Newsfeed{" "}
                                    <span>
                                        <img src="https://themified.com/friend-finder/images/down-arrow.png" alt="" />
                                    </span>
                                </a>
                                <ul className="dropdown-menu newsfeed-home">
                                    <li>
                                        <a href="newsfeed.html">Newsfeed</a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-people-nearby.html">Poeple Nearly</a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-friends.html">My friends</a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-messages.html">Chatroom</a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-images.html">Images</a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-videos.html">Videos</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Timeline{" "}
                                    <span>
                                        <img src="https://themified.com/friend-finder/images/down-arrow.png" alt="" />
                                    </span>
                                </a>
                                <ul className="dropdown-menu login">
                                    <li>
                                        <a href="timeline.html">Timeline</a>
                                    </li>
                                    <li>
                                        <a href="timeline-about.html">Timeline About</a>
                                    </li>
                                    <li>
                                        <a href="timeline-album.html">Timeline Album</a>
                                    </li>
                                    <li>
                                        <a href="timeline-friends.html">Timeline Friends</a>
                                    </li>
                                    <li>
                                        <a href="edit-profile-basic.html">Edit: Basic Info</a>
                                    </li>
                                    <li>
                                        <a href="edit-profile-work-edu.html">Edit: Work</a>
                                    </li>
                                    <li>
                                        <a href="edit-profile-interests.html">Edit: Interests</a>
                                    </li>
                                    <li>
                                        <a href="edit-profile-settings.html">Account Settings</a>
                                    </li>
                                    <li>
                                        <a href="edit-profile-password.html">Change Password</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle pages"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    All Pages{" "}
                                    <span>
                                        <img src="https://themified.com/friend-finder/images/down-arrow.png" alt="" />
                                    </span>
                                </a>
                                <ul className="dropdown-menu page-list">
                                    <li>
                                        <a href="index.html">Landing Page 1</a>
                                    </li>
                                    <li>
                                        <a href="index-register.html">Landing Page 2</a>
                                    </li>
                                    <li>
                                        <a href="newsfeed.html">Newsfeed</a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-people-nearby.html">Poeple Nearly</a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-friends.html">My friends</a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-messages.html">Chatroom</a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-images.html">Images</a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-videos.html">Videos</a>
                                    </li>
                                    <li>
                                        <a href="timeline.html">Timeline</a>
                                    </li>
                                    <li>
                                        <a href="timeline-about.html">Timeline About</a>
                                    </li>
                                    <li>
                                        <a href="timeline-album.html">Timeline Album</a>
                                    </li>
                                    <li>
                                        <a href="timeline-friends.html">Timeline Friends</a>
                                    </li>
                                    <li>
                                        <a href="edit-profile-basic.html">Edit Profile</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">FAQ Page</a>
                                    </li>
                                    <li>
                                        <a href="404.html">404 Not Found</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-right hidden-sm">
                            <div className="form-group">
                                <i className="icon ion-android-search" />
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search friends, photos, videos"
                                />
                            </div>
                        </form>
                    </div>
                    {/* /.navbar-collapse */}
                </div>
                {/* /.container */}
            </nav>
        </header>
    )
}

export default Header