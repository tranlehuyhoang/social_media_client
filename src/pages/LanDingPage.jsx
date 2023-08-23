import React from 'react'
import Header from './inc/Header'
import Footer from './inc/Footer'

const LanDingPage = () => {
    return (
        <>
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
                name="description"
                content="This is social network html5 template available in themeforest......"
            />
            <meta
                name="keywords"
                content="Social Network, Social Media, Make Friends, Newsfeed, Profile Page"
            />
            <meta name="robots" content="index, follow" />
            <title>Friend Finder | A Complete Social Network Template</title>
            {/* Stylesheets
    ================================================= */}
            <link rel="stylesheet" href="https://themified.com/friend-finder/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://themified.com/friend-finder/css/style.css" />
            <link rel="stylesheet" href="https://themified.com/friend-finder/css/ionicons.min.css" />
            <link rel="stylesheet" href="https://themified.com/friend-finder/css/font-awesome.min.css" />
            {/*Google Font*/}
            <link
                href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i"
                rel="stylesheet"
            />
            {/*Favicon*/}
            <link rel="shortcut icon" type="image/png" href="images/fav.png" />
            {/* Header
    ================================================= */}
            <Header />
            {/*Header End*/}
            {/* Top Banner
    ================================================= */}
            <section id="banner">
                <div className="container">
                    {/* Sign Up Form
  ================================================= */}
                    <div className="sign-up-form">
                        <a href="index.html" className="logo">
                            <img src="https://themified.com/friend-finder/images/logo.png" alt="Friend Finder" />
                        </a>
                        <h2 className="text-white">Find My Friends</h2>
                        <div className="line-divider" />
                        <div className="form-wrapper">
                            <p className="signup-text">
                                Signup now and meet awesome people around the world
                            </p>
                            <form action="#">
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="example-name"
                                        placeholder="Enter name"
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="example-email"
                                        placeholder="Enter email"
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="example-password"
                                        placeholder="Enter a password"
                                    />
                                </fieldset>
                            </form>
                            <p>By signning up you agree to the terms</p>
                            <button className="btn-secondary"><a href="./home">Signup</a></button>
                        </div>
                        <a href="./auth">Already have an account?</a>
                        <img className="form-shadow" src="https://themified.com/friend-finder/images/bottom-shadow.png" alt="" />
                    </div>
                    {/* Sign Up Form End */}
                    <svg className="arrows hidden-xs hidden-sm">
                        <path className="a1" d="M0 0 L30 32 L60 0" />
                        <path className="a2" d="M0 20 L30 52 L60 20" />
                        <path className="a3" d="M0 40 L30 72 L60 40" />
                    </svg>
                </div>
            </section>
            {/* Features Section
    ================================================= */}
            <section id="features">
                <div className="container wrapper">
                    <h1 className="section-title ">social herd</h1>
                    <div className="row  ">
                        <div className="feature-item col-md-2 col-sm-6 col-xs-6 col-md-offset-2">
                            <div className="feature-icon">
                                <i className="icon ion-person-add" />
                            </div>
                            <h3>Make Friends</h3>
                        </div>
                        <div className="feature-item col-md-2 col-sm-6 col-xs-6">
                            <div className="feature-icon">
                                <i className="icon ion-images" />
                            </div>
                            <h3>Publish Posts</h3>
                        </div>
                        <div className="feature-item col-md-2 col-sm-6 col-xs-6">
                            <div className="feature-icon">
                                <i className="icon ion-chatbox-working" />
                            </div>
                            <h3>Private Chats</h3>
                        </div>
                        <div className="feature-item col-md-2 col-sm-6 col-xs-6">
                            <div className="feature-icon">
                                <i className="icon ion-compose" />
                            </div>
                            <h3>Create Polls</h3>
                        </div>
                    </div>
                    <h2 className="sub-title">find awesome people like you</h2>
                    <div id="incremental-counter" data-value={101242} />
                    <p>People Already Signed Up</p>
                    <img
                        src="https://themified.com/friend-finder/images/face-map.png"
                        alt=""
                        className="img-responsive face-map   hidden-sm hidden-xs"
                    />
                </div>
            </section>
            {/* Download Section
    ================================================= */}
            <section id="app-download">
                <div className="container wrapper">
                    <h1 className="section-title ">download</h1>
                    <ul className="app-btn list-inline  ">
                        <li>
                            <button className="btn-secondary">
                                <img src="https://themified.com/friend-finder/images/app-store.png" alt="App Store" />
                            </button>
                        </li>
                        <li>
                            <button className="btn-secondary">
                                <img src="https://themified.com/friend-finder/images/google-play.png" alt="Google Play" />
                            </button>
                        </li>
                    </ul>
                    <h2 className="sub-title">stay connected anytime, anywhere</h2>
                    <img src="https://themified.com/friend-finder/images/iPhone.png" alt="iPhone" className="img-responsive" />
                </div>
            </section>
            {/* Image Divider
    ================================================= */}
            <div className="img-divider hidden-sm hidden-xs" />
            {/* Facts Section
    ================================================= */}
            <section id="site-facts">
                <div className="container wrapper">
                    <div className="circle">
                        <ul className="facts-list">
                            <li>
                                <div className="fact-icon">
                                    <i className="icon ion-ios-people-outline" />
                                </div>
                                <h3 className="text-white">1,01,242</h3>
                                <p>People registered</p>
                            </li>
                            <li>
                                <div className="fact-icon">
                                    <i className="icon ion-images" />
                                </div>
                                <h3 className="text-white">21,01,242</h3>
                                <p>Posts published</p>
                            </li>
                            <li>
                                <div className="fact-icon">
                                    <i className="icon ion-checkmark-round" />
                                </div>
                                <h3 className="text-white">41,242</h3>
                                <p>People online</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Live Feed Section
    ================================================= */}
            <section id="live-feed">
                <div className="container wrapper">
                    <h1 className="section-title ">live feed</h1>
                    <ul className="online-users list-inline  ">
                        <li>
                            <a href="#" title="Alexis Clark">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-5.jpg"
                                    alt=""
                                    className="img-responsive profile-photo"
                                />
                                <span className="online-dot" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="James Carter">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-6.jpg"
                                    alt=""
                                    className="img-responsive profile-photo"
                                />
                                <span className="online-dot" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Robert Cook">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-7.jpg"
                                    alt=""
                                    className="img-responsive profile-photo"
                                />
                                <span className="online-dot" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Richard Bell">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-8.jpg"
                                    alt=""
                                    className="img-responsive profile-photo"
                                />
                                <span className="online-dot" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Anna Young">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-9.jpg"
                                    alt=""
                                    className="img-responsive profile-photo"
                                />
                                <span className="online-dot" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Julia Cox">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-10.jpg"
                                    alt=""
                                    className="img-responsive profile-photo"
                                />
                                <span className="online-dot" />
                            </a>
                        </li>
                    </ul>
                    <h2 className="sub-title">see what’s happening now</h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-md-offset-2">
                            <div className="feed-item">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                    alt="user"
                                    className="img-responsive profile-photo-sm"
                                />
                                <div className="live-activity">
                                    <p>
                                        <a href="#" className="profile-link">
                                            Sarah
                                        </a>{" "}
                                        just posted a photo from Moscow
                                    </p>
                                    <p className="text-muted">20 Secs ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-4.jpg"
                                    alt="user"
                                    className="img-responsive profile-photo-sm"
                                />
                                <div className="live-activity">
                                    <p>
                                        <a href="#" className="profile-link">
                                            John
                                        </a>{" "}
                                        Published a post from Sydney
                                    </p>
                                    <p className="text-muted">1 min ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-10.jpg"
                                    alt="user"
                                    className="img-responsive profile-photo-sm"
                                />
                                <div className="live-activity">
                                    <p>
                                        <a href="#" className="profile-link">
                                            Julia
                                        </a>{" "}
                                        Updated her status from London
                                    </p>
                                    <p className="text-muted">5 mins ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-3.jpg"
                                    alt="user"
                                    className="img-responsive profile-photo-sm"
                                />
                                <div className="live-activity">
                                    <p>
                                        <a href="#" className="profile-link">
                                            Sophia
                                        </a>{" "}
                                        Share a photo from Virginia
                                    </p>
                                    <p className="text-muted">10 mins ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-2.jpg"
                                    alt="user"
                                    className="img-responsive profile-photo-sm"
                                />
                                <div className="live-activity">
                                    <p>
                                        <a href="#" className="profile-link">
                                            Linda
                                        </a>{" "}
                                        just posted a photo from Toronto
                                    </p>
                                    <p className="text-muted">20 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="feed-item">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-17.jpg"
                                    alt="user"
                                    className="img-responsive profile-photo-sm"
                                />
                                <div className="live-activity">
                                    <p>
                                        <a href="#" className="profile-link">
                                            Nora
                                        </a>{" "}
                                        Shared an article from Ohio
                                    </p>
                                    <p className="text-muted">22 mins ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-18.jpg"
                                    alt="user"
                                    className="img-responsive profile-photo-sm"
                                />
                                <div className="live-activity">
                                    <p>
                                        <a href="#" className="profile-link">
                                            Addison
                                        </a>{" "}
                                        Created a poll from Barcelona
                                    </p>
                                    <p className="text-muted">23 mins ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-11.jpg"
                                    alt="user"
                                    className="img-responsive profile-photo-sm"
                                />
                                <div className="live-activity">
                                    <p>
                                        <a href="#" className="profile-link">
                                            Diana
                                        </a>{" "}
                                        Posted a video from Captown
                                    </p>
                                    <p className="text-muted">27 mins ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                    alt="user"
                                    className="img-responsive profile-photo-sm"
                                />
                                <div className="live-activity">
                                    <p>
                                        <a href="#" className="profile-link">
                                            Sarah
                                        </a>{" "}
                                        Shared friend's post from Moscow
                                    </p>
                                    <p className="text-muted">30 mins ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-16.jpg"
                                    alt="user"
                                    className="img-responsive profile-photo-sm"
                                />
                                <div className="live-activity">
                                    <p>
                                        <a href="#" className="profile-link">
                                            Emma
                                        </a>{" "}
                                        Started a new job at Torronto
                                    </p>
                                    <p className="text-muted">33 mins ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer
    ================================================= */}
            <Footer />
            {/*preloader*/}

            {/*Buy button*/}


            {/* Scripts
    ================================================= */}
        </>

    )
}

export default LanDingPage