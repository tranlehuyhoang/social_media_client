import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { logIn, singUp } from '../actions/AuthActions';
const AuthPage = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.authReducer.loading)
    const notify = () => toast("cofirm Password is not same");
    const login = () => toast("login success");

    const [activeTab, setActiveTab] = useState('login');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const [data, setData] = useState({ firstname: "", lastname: "", password: "", cofirmpass: "", username: "" });
    const [datalogin, setDataLogin] = useState({ password: "", username: "" });

    const handleChang = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)

    }
    const handleChangLogin = (e) => {
        setDataLogin({ ...datalogin, [e.target.name]: e.target.value })
        console.log(datalogin)


    }
    const handleRegister = (e) => {
        console.log("register")
        e.preventDefault();
        if (data.cofirmpass !== data.password) {
            notify();
        } else {
            dispatch(singUp(data))
        }
    };
    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(logIn(datalogin))

        login()

    };
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
            <header id="header-inverse">
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
            {/*Header End*/}
            {/* Landing Page Contents
    ================================================= */}
            <div id="lp-register">
                <div className="container wrapper">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="intro-texts">
                                <h1 className="text-white">Make Cool Friends !!!</h1>
                                <p>
                                    Friend Finder is a social network template that can be used to
                                    connect people. The template offers Landing pages, News Feed,
                                    Image/Video Feed, Chat Box, Timeline and lot more. <br /> <br />
                                    Why are you waiting for? Buy it now.
                                </p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                        <div className="col-sm-6 col-sm-offset-1">
                            <div className="reg-form-container">
                                {/* Register/Login Tabs*/}
                                <div className="reg-options">
                                    <ul className="nav nav-tabs">
                                        <li className={activeTab === 'register' ? 'active' : ''}>
                                            <a href="#register" data-toggle="tab" onClick={() => handleTabClick('register')}>
                                                Register
                                            </a>
                                        </li>
                                        <li className={activeTab === 'login' ? 'active' : ''}>
                                            <a href="#login" data-toggle="tab" onClick={() => handleTabClick('login')}>
                                                Login
                                            </a>
                                        </li>
                                    </ul>
                                    {/*Tabs End*/}
                                </div>
                                {/*Registration Form Contents*/}
                                <div className="tab-content">
                                    <div className={`tab-pane ${activeTab === 'register' ? 'active' : ''}`} id="register">
                                        <h3>Register Now !!!</h3>
                                        <p className="text-muted">
                                            Be cool and join today. Meet millions
                                        </p>
                                        {/*Register Form*/}
                                        <form
                                            name="registration_form"
                                            id="registration_form"
                                            className="form-inline"
                                            onSubmit={handleRegister}
                                        >
                                            <div className="row">
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="firstname" className="sr-only">
                                                        First Name
                                                    </label>
                                                    <input
                                                        onChange={(e) => handleChang(e)}
                                                        id="firstname"
                                                        className="form-control input-group-lg"
                                                        type="text"
                                                        name="firstname"
                                                        title="Enter first name"
                                                        required
                                                        placeholder="First name"
                                                    />
                                                </div>
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="lastname" className="sr-only">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        onChange={(e) => handleChang(e)}
                                                        id="lastname"
                                                        required
                                                        className="form-control input-group-lg"
                                                        type="text"
                                                        name="lastname"
                                                        title="Enter last name"
                                                        placeholder="Last name"
                                                    />
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="email" className="sr-only">
                                                        Email
                                                    </label>
                                                    <input
                                                        required
                                                        onChange={(e) => handleChang(e)}
                                                        id="email"
                                                        className="form-control input-group-lg"
                                                        type="text"
                                                        name="username"
                                                        title="Enter Email"
                                                        placeholder="Your Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="password" className="sr-only">
                                                        Password
                                                    </label>
                                                    <input
                                                        required
                                                        onChange={(e) => handleChang(e)}
                                                        id="password"
                                                        className="form-control input-group-lg"
                                                        type="password"
                                                        name="password"
                                                        title="Enter password"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="cofirmpass" className="sr-only">
                                                        Password
                                                    </label>
                                                    <input
                                                        required
                                                        onChange={(e) => handleChang(e)}
                                                        id="cofirmpass"
                                                        className="form-control input-group-lg"
                                                        type="password"
                                                        name="cofirmpass"
                                                        title="Enter cofirm password"
                                                        placeholder="Cofirm password"
                                                    />
                                                </div>
                                            </div>


                                            {/*Register Now Form Ends*/}
                                            <p>
                                                <a href="#">Already have an account?</a>
                                            </p>
                                            <button type='submit' className="btn btn-primary">Register Now</button>
                                        </form>
                                    </div>
                                    {/*Registration Form Contents Ends*/}
                                    {/*Login*/}
                                    <div className={`tab-pane ${activeTab === 'login' ? 'active' : ''}`} id="login">
                                        <h3>Login</h3>
                                        <p className="text-muted">Log into your account</p>
                                        {/*Login Form*/}
                                        <form name="Login_form" id="Login_form"
                                            onSubmit={handleLogin}

                                        >
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="my-email" className="sr-only">
                                                        Email
                                                    </label>
                                                    <input
                                                        id="my-email"
                                                        className="form-control input-group-lg"
                                                        type="text"
                                                        name="username"
                                                        title="Enter Email"
                                                        placeholder="Your Email"
                                                        onChange={(e) => handleChangLogin(e)}
                                                        required

                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="my-password" className="sr-only">
                                                        Password
                                                    </label>
                                                    <input
                                                        id="my-password"
                                                        className="form-control input-group-lg"
                                                        type="password"
                                                        name="password"
                                                        required
                                                        title="Enter password"
                                                        placeholder="Password"
                                                        onChange={(e) => handleChangLogin(e)}

                                                    />
                                                </div>
                                            </div>
                                            {/*Login Form Ends*/}
                                            <p>
                                                <a href="#">Forgot Password?</a>
                                            </p>
                                            {
                                                loading ? (
                                                    <button className="btn btn-primary">
                                                        Loading...
                                                    </button>
                                                ) : (
                                                    <button type='submit' className="btn btn-primary">
                                                        Login Now
                                                    </button>
                                                )
                                            }

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-6">
                            {/*Social Icons*/}
                            <ul className="list-inline social-icons">
                                <li>
                                    <a href="#">
                                        <i className="icon ion-social-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon ion-social-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon ion-social-googleplus" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon ion-social-pinterest" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon ion-social-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*preloader*/}

            {/*Buy button*/}

            {/* Scripts
    ================================================= */}
        </>

    )
}

export default AuthPage