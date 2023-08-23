import React, { useState } from 'react'
import Footer from './inc/Footer'
import { useSelector } from 'react-redux';

const HomePage = () => {
    const { user } = useSelector((state) => state.authReducer.authData)
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    // Hàm xử lý khi người dùng thay đổi giá trị input
    const handleInputChange = (event) => {
        const file = event.target.files[0]; // Lấy file hình ảnh từ input
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(file);
            setImageUrl(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const handleCreatePost = (e) => {
        e.preventDefault();
        console.log(image)
        const newPost = {
            userId: user._id,
            desc: desc,
        }

        if (image) {
            const data = new FormData()
            const fileName = Date.now() + image.name;
            data.append("name", fileName)
            data.append("file", image)
            newPost.image = fileName
            console.log(newPost)
        }
    }
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ".gm-err-container{height:100%;width:100%;display:table;background-color:#e8eaed;position:relative;left:0;top:0}.gm-err-content{border-radius:1px;padding-top:0;padding-left:10%;padding-right:10%;position:static;vertical-align:middle;display:table-cell}.gm-err-content a{color:#3c4043}.gm-err-icon{text-align:center}.gm-err-title{margin:5px;margin-bottom:20px;color:#3c4043;font-family:Roboto,Arial,sans-serif;text-align:center;font-size:24px}.gm-err-message{margin:5px;color:#3c4043;font-family:Roboto,Arial,sans-serif;text-align:center;font-size:12px}.gm-err-autocomplete{padding-left:20px;background-repeat:no-repeat;-webkit-background-size:15px 15px;background-size:15px 15px}sentinel{}\n"
                }}
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ".ssQIHO-checkbox-menu-item>span>span{background-color:#000;display:inline-block}@media (forced-colors:active),(prefers-contrast:more){.ssQIHO-checkbox-menu-item>span>span{background-color:ButtonText}}\n"
                }}
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ".gm-style .gm-style-mtc label,.gm-style .gm-style-mtc div{font-weight:400}.gm-style .gm-style-mtc ul,.gm-style .gm-style-mtc li{-webkit-box-sizing:border-box;box-sizing:border-box}sentinel{}\n"
                }}
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ".LGLeeN-keyboard-shortcuts-view{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.LGLeeN-keyboard-shortcuts-view table,.LGLeeN-keyboard-shortcuts-view tbody,.LGLeeN-keyboard-shortcuts-view td,.LGLeeN-keyboard-shortcuts-view tr{background:inherit;border:none;margin:0;padding:0}.LGLeeN-keyboard-shortcuts-view table{display:table}.LGLeeN-keyboard-shortcuts-view tr{display:table-row}.LGLeeN-keyboard-shortcuts-view td{-moz-box-sizing:border-box;box-sizing:border-box;display:table-cell;color:#000;padding:6px;vertical-align:middle;white-space:nowrap}.LGLeeN-keyboard-shortcuts-view td:first-child{text-align:end}.LGLeeN-keyboard-shortcuts-view td kbd{background-color:#e8eaed;border-radius:2px;border:none;-moz-box-sizing:border-box;box-sizing:border-box;color:inherit;display:inline-block;font-family:Google Sans Text,Roboto,Arial,sans-serif;line-height:16px;margin:0 2px;min-height:20px;min-width:20px;padding:2px 4px;position:relative;text-align:center}\n"
                }}
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ".gm-control-active>img{-webkit-box-sizing:content-box;box-sizing:content-box;display:none;left:50%;pointer-events:none;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.gm-control-active>img:nth-child(1){display:block}.gm-control-active:focus>img:nth-child(1),.gm-control-active:hover>img:nth-child(1),.gm-control-active:active>img:nth-child(1),.gm-control-active:disabled>img:nth-child(1){display:none}.gm-control-active:focus>img:nth-child(2),.gm-control-active:hover>img:nth-child(2){display:block}.gm-control-active:active>img:nth-child(3){display:block}.gm-control-active:disabled>img:nth-child(4){display:block}sentinel{}\n"
                }}
            />
            <link
                type="text/css"
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans:400,500,700|Google+Sans+Text:400&lang=en"
            />
            <link
                type="text/css"
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400&text=%E2%86%90%E2%86%92%E2%86%91%E2%86%93&lang=en"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ".gm-ui-hover-effect{opacity:.6}.gm-ui-hover-effect:hover{opacity:1}.gm-ui-hover-effect>span{background-color:#000}@media (forced-colors:active),(prefers-contrast:more){.gm-ui-hover-effect>span{background-color:ButtonText}}sentinel{}\n"
                }}
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ".gm-style .gm-style-cc a,.gm-style .gm-style-cc button,.gm-style .gm-style-cc span,.gm-style .gm-style-mtc div{font-size:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.gm-style .gm-style-cc a,.gm-style .gm-style-cc button,.gm-style .gm-style-cc span{outline-offset:3px}sentinel{}\n"
                }}
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "@media print {  .gm-style .gmnoprint, .gmnoprint {    display:none  }}@media screen {  .gm-style .gmnoscreen, .gmnoscreen {    display:none  }}"
                }}
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ".gm-style-moc{background-color:rgba(0,0,0,.45);pointer-events:none;text-align:center;-webkit-transition:opacity ease-in-out;-o-transition:opacity ease-in-out;transition:opacity ease-in-out}.gm-style-mot{color:white;font-family:Roboto,Arial,sans-serif;font-size:22px;margin:0;position:relative;top:50%;-o-transform:translateY(-50%);transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%)}sentinel{}\n"
                }}
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ".gm-style img{max-width: none;}.gm-style {font: 400 11px Roboto, Arial, sans-serif; text-decoration: none;}"
                }}
            />
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
            <title>News Feed | Check what your friends are doing</title>
            {/* Stylesheets
        ================================================= */}
            <link rel="stylesheet" href="https://themified.com/friend-finder/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://themified.com/friend-finder/css/style.css" />
            <link rel="stylesheet" href="https://themified.com/friend-finder/css/ionicons.min.css" />
            <link rel="stylesheet" href="https://themified.com/friend-finder/css/font-awesome.min.css" />
            <link rel="stylesheet" href="http://man.hubwiz.com/docset/IonIcons.docset/Contents/Resources/Documents/ionicons/css/ionicons.min.css" />
            <link href="https://themified.com/friend-finder/css/emoji.css" rel="stylesheet" />
            {/*Google Font*/}
            <link
                href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i"
                rel="stylesheet"
            />
            {/*Favicon*/}
            <link rel="shortcut icon" type="image/png" href="https://themified.com/friend-finder/images/fav.png" />
            {/* Header
        ================================================= */}
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
                            <a className="navbar-brand" href="../">
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
            <div id="page-contents">
                <div className="container">
                    <div className="row">
                        {/* Newsfeed Common Side Bar Left
        ================================================= */}
                        <div className="col-md-3 static">
                            <div className="profile-card">
                                <img
                                    src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                    alt="user"
                                    className="profile-photo"
                                />
                                <h5>
                                    <a href="timeline.html" className="text-white">
                                        Sarah Cruiz
                                    </a>
                                </h5>
                                <a href="#" className="text-white">
                                    <i className="ion ion-android-person-add" /> 1,299 followers
                                </a>
                            </div>
                            {/*profile card ends*/}
                            <ul className="nav-news-feed">
                                <li>
                                    <i className="icon ion-ios-paper" />
                                    <div>
                                        <a href="newsfeed.html">My Newsfeed</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="icon ion-ios-people" />
                                    <div>
                                        <a href="newsfeed-people-nearby.html">People Nearby</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="icon ion-ios-people-outline" />
                                    <div>
                                        <a href="newsfeed-friends.html">Friends</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="icon ion-chatboxes" />
                                    <div>
                                        <a href="newsfeed-messages.html">Messages</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="icon ion-images" />
                                    <div>
                                        <a href="newsfeed-images.html">Images</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="icon ion-ios-videocam" />
                                    <div>
                                        <a href="newsfeed-videos.html">Videos</a>
                                    </div>
                                </li>
                            </ul>
                            {/*news-feed links ends*/}
                            <div id="chat-block" className="" style={{}}>
                                <div className="title">Chat online</div>
                                <ul className="online-users list-inline">
                                    <li>
                                        <a href="newsfeed-messages.html" title="Linda Lohan">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-2.jpg"
                                                alt="user"
                                                className="img-responsive profile-photo"
                                            />
                                            <span className="online-dot" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-messages.html" title="Sophia Lee">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-3.jpg"
                                                alt="user"
                                                className="img-responsive profile-photo"
                                            />
                                            <span className="online-dot" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-messages.html" title="John Doe">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-4.jpg"
                                                alt="user"
                                                className="img-responsive profile-photo"
                                            />
                                            <span className="online-dot" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-messages.html" title="Alexis Clark">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-5.jpg"
                                                alt="user"
                                                className="img-responsive profile-photo"
                                            />
                                            <span className="online-dot" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-messages.html" title="James Carter">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-6.jpg"
                                                alt="user"
                                                className="img-responsive profile-photo"
                                            />
                                            <span className="online-dot" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-messages.html" title="Robert Cook">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-7.jpg"
                                                alt="user"
                                                className="img-responsive profile-photo"
                                            />
                                            <span className="online-dot" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-messages.html" title="Richard Bell">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-8.jpg"
                                                alt="user"
                                                className="img-responsive profile-photo"
                                            />
                                            <span className="online-dot" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-messages.html" title="Anna Young">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-9.jpg"
                                                alt="user"
                                                className="img-responsive profile-photo"
                                            />
                                            <span className="online-dot" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-messages.html" title="Julia Cox">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-10.jpg"
                                                alt="user"
                                                className="img-responsive profile-photo"
                                            />
                                            <span className="online-dot" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*chat block ends*/}
                        </div>


                        <div className="col-md-7">
                            {/* Post Create Box
          ================================================= */}
                            <div className="create-post">
                                <div className="row">
                                    <div className="col-md-7 col-sm-7">
                                        <div className="form-group">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                alt=""
                                                className="profile-photo-md"
                                            />
                                            <textarea
                                                name="texts"
                                                id="exampleTextarea"
                                                cols={30}
                                                rows={1}
                                                className="form-control"
                                                placeholder="Write what you wish"
                                                onChange={e => { setDesc(e.target.value) }}
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-sm-5">
                                        <div className="tools">
                                            <form action="" onSubmit={handleCreatePost}>
                                                <ul className="publishing-tools list-inline">
                                                    <li>
                                                        <label htmlFor='image'>

                                                            <svg color='white' className='ion-images' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 4 5 C 2.895 5 2 5.895 2 7 L 2 23 C 2 24.105 2.895 25 4 25 L 26 25 C 27.105 25 28 24.105 28 23 L 28 7 C 28 5.895 27.105 5 26 5 L 4 5 z M 23 8 C 24.105 8 25 8.895 25 10 C 25 11.105 24.105 12 23 12 C 21.895 12 21 11.105 21 10 C 21 8.895 21.895 8 23 8 z M 9 12.001953 C 9.61925 12.001953 10.238437 12.238437 10.710938 12.710938 L 13.972656 15.972656 L 15 17 L 16.15625 18.15625 C 16.57825 18.57825 17.259641 18.574344 17.681641 18.152344 C 18.104641 17.730344 18.104641 17.044094 17.681641 16.621094 L 16.529297 15.470703 L 17.289062 14.710938 C 18.234063 13.765937 19.765937 13.765937 20.710938 14.710938 L 25 19 L 25 22 L 5 22 L 5 15 L 7.2890625 12.710938 C 7.7615625 12.238437 8.38075 12.001953 9 12.001953 z" /></svg>


                                                        </label>
                                                        <input
                                                            type="file"
                                                            id="image"
                                                            className="hidden"
                                                            onChange={handleInputChange}
                                                        />
                                                    </li>

                                                </ul>

                                                <button type='submit' className="btn btn-primary pull-right">
                                                    Publish
                                                </button>
                                            </form>

                                        </div>

                                    </div>
                                    <div className="post-content relative">
                                        {
                                            imageUrl ? (
                                                <>
                                                    <button onClick={() => { setImageUrl("") }} style={{ position: "absolute", right: "0", display: "flex" }}><svg style={{ color: 'white', right: "0", width: "" }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                                                        <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
                                                    </svg></button>

                                                    <img
                                                        src={imageUrl}
                                                        alt="post-image"
                                                        className="img-responsive post-image"
                                                    />
                                                </>
                                            ) : (
                                                <>

                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* Post Create Box End*/}
                            {/* Post Content
          ================================================= */}
                            <div className="post-content">
                                <img
                                    src="https://themified.com/friend-finder/images/post-images/1.jpg"
                                    alt="post-image"
                                    className="img-responsive post-image"
                                />
                                <div className="post-container">
                                    <img
                                        src="https://themified.com/friend-finder/images/users/user-5.jpg"
                                        alt="user"
                                        className="profile-photo-md pull-left"
                                    />
                                    <div className="post-detail">
                                        <div className="user-info">
                                            <h5>
                                                <a href="timeline.html" className="profile-link">
                                                    Alexis Clark
                                                </a>{" "}
                                                <span className="following">following</span>
                                            </h5>
                                            <p className="text-muted">
                                                Published a photo about 3 mins ago
                                            </p>
                                        </div>
                                        <div className="reaction">
                                            <a className="btn text-green">
                                                <i className="icon ion-thumbsup" /> 13
                                            </a>
                                            <a className="btn text-red">
                                                <i className="fa fa-thumbs-down" /> 0
                                            </a>
                                        </div>
                                        <div className="line-divider" />
                                        <div className="post-text">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in voluptate velit
                                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum.{" "}
                                                <i className="em em-anguished" />{" "}
                                                <i className="em em-anguished" />{" "}
                                                <i className="em em-anguished" />
                                            </p>
                                        </div>
                                        <div className="line-divider" />
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-11.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <p>
                                                <a href="timeline.html" className="profile-link">
                                                    Diana{" "}
                                                </a>
                                                <i className="em em-laughing" /> Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud{" "}
                                            </p>
                                        </div>
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-4.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <p>
                                                <a href="timeline.html" className="profile-link">
                                                    John
                                                </a>{" "}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud{" "}
                                            </p>
                                        </div>
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Post a comment"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Post Content
          ================================================= */}
                            <div className="post-content">
                                <div className="video-wrapper">
                                    <video className="post-video" controls="">
                                        {" "}
                                        <source src="videos/8.mp4" type="video/mp4" />{" "}
                                    </video>
                                </div>
                                <div className="post-container">
                                    <img
                                        src="https://themified.com/friend-finder/images/users/user-3.jpg"
                                        alt="user"
                                        className="profile-photo-md pull-left"
                                    />
                                    <div className="post-detail">
                                        <div className="user-info">
                                            <h5>
                                                <a href="timeline.html" className="profile-link">
                                                    Sophia Lee
                                                </a>{" "}
                                                <span className="following">following</span>
                                            </h5>
                                            <p className="text-muted">
                                                Updated her status about 33 mins ago
                                            </p>
                                        </div>
                                        <div className="reaction">
                                            <a className="btn text-green">
                                                <i className="icon ion-thumbsup" /> 75
                                            </a>
                                            <a className="btn text-red">
                                                <i className="fa fa-thumbs-down" /> 8
                                            </a>
                                        </div>
                                        <div className="line-divider" />
                                        <div className="post-text">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in voluptate velit
                                                esse cillum dolore eu fugiat nulla pariatur.
                                            </p>
                                        </div>
                                        <div className="line-divider" />
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-14.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <p>
                                                <a href="timeline.html" className="profile-link">
                                                    Olivia{" "}
                                                </a>{" "}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. <i className="em em-anguished" /> Ut enim ad minim
                                                veniam, quis nostrud{" "}
                                            </p>
                                        </div>
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <p>
                                                <a href="timeline.html" className="profile-link">
                                                    Sarah
                                                </a>{" "}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam.
                                            </p>
                                        </div>
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-2.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <p>
                                                <a href="timeline.html" className="profile-link">
                                                    Linda
                                                </a>{" "}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Post a comment"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Post Content
          ================================================= */}
                            <div className="post-content">
                                <div className="post-container">
                                    <img
                                        src="https://themified.com/friend-finder/images/users/user-2.jpg"
                                        alt="user"
                                        className="profile-photo-md pull-left"
                                    />
                                    <div className="post-detail">
                                        <div className="user-info">
                                            <h5>
                                                <a href="timeline.html" className="profile-link">
                                                    Linda Lohan
                                                </a>{" "}
                                                <span className="following">following</span>
                                            </h5>
                                            <p className="text-muted">
                                                Published a photo about 1 hour ago
                                            </p>
                                        </div>
                                        <div className="reaction">
                                            <a className="btn text-green">
                                                <i className="icon ion-thumbsup" /> 23
                                            </a>
                                            <a className="btn text-red">
                                                <i className="fa fa-thumbs-down" /> 4
                                            </a>
                                        </div>
                                        <div className="line-divider" />
                                        <div className="post-text">
                                            <p>
                                                <i className="em em-thumbsup" />{" "}
                                                <i className="em em-thumbsup" /> Sed ut perspiciatis unde
                                                omnis iste natus error sit voluptatem accusantium doloremque
                                                laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi architecto beatae vitae dicta
                                                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                                aspernatur aut odit aut fugit, sed quia consequuntur magni
                                                dolores eos qui ratione voluptatem sequi nesciunt. Neque
                                                porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                                consectetur, adipisci velit, sed quia non numquam eius modi
                                                tempora incidunt ut labore et dolore magnam aliquam quaerat
                                                voluptatem. Ut enim ad minima veniam, quis nostrum
                                                exercitationem ullam corporis suscipit laboriosam, nisi ut
                                                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                                reprehenderit qui in ea voluptate velit esse quam nihil
                                                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                                                voluptas nulla pariatur?
                                            </p>
                                        </div>
                                        <div className="line-divider" />
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-12.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <p>
                                                <a href="timeline.html" className="profile-link">
                                                    Cris{" "}
                                                </a>{" "}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam{" "}
                                                <i className="em em-muscle" />
                                            </p>
                                        </div>
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Post a comment"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Post Content
          ================================================= */}
                            <div className="post-content">
                                <img
                                    src="https://themified.com/friend-finder/images/post-images/2.jpg"
                                    alt="post-image"
                                    className="img-responsive post-image"
                                />
                                <div className="post-container">
                                    <img
                                        src="https://themified.com/friend-finder/images/users/user-4.jpg"
                                        alt="user"
                                        className="profile-photo-md pull-left"
                                    />
                                    <div className="post-detail">
                                        <div className="user-info">
                                            <h5>
                                                <a href="timeline.html" className="profile-link">
                                                    John Doe
                                                </a>{" "}
                                                <span className="following">following</span>
                                            </h5>
                                            <p className="text-muted">
                                                Published a photo about 2 hour ago
                                            </p>
                                        </div>
                                        <div className="reaction">
                                            <a className="btn text-green">
                                                <i className="icon ion-thumbsup" /> 39
                                            </a>
                                            <a className="btn text-red">
                                                <i className="fa fa-thumbs-down" /> 2
                                            </a>
                                        </div>
                                        <div className="line-divider" />
                                        <div className="post-text">
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium doloremque laudantium, totam rem
                                                aperiam, eaque ipsa quae ab illo inventore veritatis et
                                                quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                                enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                                aut fugit, sed quia consequuntur magni dolores eos qui
                                                ratione voluptatem sequi nesciunt
                                            </p>
                                        </div>
                                        <div className="line-divider" />
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-13.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <p>
                                                <a href="timeline.html" className="profile-link">
                                                    Brian{" "}
                                                </a>
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium doloremque laudantium, totam rem
                                                aperiam, eaque ipsa quae ab illo inventore veritatis et
                                                quasi architecto beatae vitae dicta sunt explicabo.{" "}
                                            </p>
                                        </div>
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-8.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <p>
                                                <a href="timeline.html" className="profile-link">
                                                    Richard
                                                </a>{" "}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua.{" "}
                                            </p>
                                        </div>
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Post a comment"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Post Content
          ================================================= */}
                            <div className="post-content">
                                <div className="google-maps">
                                    <div
                                        id="map"
                                        className="map"
                                        style={{ position: "relative", overflow: "hidden" }}
                                    >
                                        <div
                                            style={{
                                                height: "100%",
                                                width: "100%",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                backgroundColor: "rgb(229, 227, 223)"
                                            }}
                                        >
                                            <div className="gm-err-container">
                                                <div className="gm-err-content">
                                                    <div className="gm-err-icon">
                                                        <img
                                                            src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png"
                                                            alt=""
                                                            draggable="false"
                                                            style={{ userSelect: "none" }}
                                                        />
                                                    </div>
                                                    <div className="gm-err-title">
                                                        Oops! Something went wrong.
                                                    </div>
                                                    <div className="gm-err-message">
                                                        This page didn't load Google Maps correctly. See the
                                                        JavaScript console for technical details.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-container">
                                    <img
                                        src="https://themified.com/friend-finder/images/users/user-3.jpg"
                                        alt="user"
                                        className="profile-photo-md pull-left"
                                    />
                                    <div className="post-detail">
                                        <div className="user-info">
                                            <h5>
                                                <a href="timeline.html" className="profile-link">
                                                    Sophia Lee
                                                </a>{" "}
                                                <span className="following">following</span>
                                            </h5>
                                            <p className="text-muted">
                                                <i className="icon ion-ios-location" /> Went to Niagara
                                                Falls today
                                            </p>
                                        </div>
                                        <div className="reaction">
                                            <a className="btn text-green">
                                                <i className="icon ion-thumbsup" /> 17
                                            </a>
                                            <a className="btn text-red">
                                                <i className="fa fa-thumbs-down" /> 0
                                            </a>
                                        </div>
                                        <div className="line-divider" />
                                        <div className="post-text">
                                            <p>
                                                At vero eos et accusamus et iusto odio dignissimos ducimus
                                                qui blanditiis praesentium voluptatum deleniti atque
                                                corrupti quos dolores et quas molestias excepturi sint
                                                occaecati cupiditate non provident, similique sunt in culpa
                                                qui officia deserunt mollitia animi, id est laborum et
                                                dolorum fuga. Et harum quidem rerum facilis est et expedita
                                                distinctio.
                                            </p>
                                        </div>
                                        <div className="line-divider" />
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <p>
                                                <a href="timeline.html" className="profile-link">
                                                    Sarah{" "}
                                                </a>
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium doloremque laudantium, totam rem
                                                aperiam, eaque ipsa quae ab illo inventore veritatis et
                                                quasi architecto beatae vitae dicta sunt explicabo.{" "}
                                                <i className="em em-blush" /> <i className="em em-blush" />{" "}
                                            </p>
                                        </div>
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Post a comment"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Post Content
          ================================================= */}
                            <div className="post-content">
                                <img
                                    src="https://themified.com/friend-finder/images/post-images/11.jpg"
                                    alt=""
                                    className="img-responsive post-image"
                                />
                                <div className="post-container">
                                    <img
                                        src="https://themified.com/friend-finder/images/users/user-9.jpg"
                                        alt="user"
                                        className="profile-photo-md pull-left"
                                    />
                                    <div className="post-detail">
                                        <div className="user-info">
                                            <h5>
                                                <a href="timeline.html" className="profile-link">
                                                    Anna Young
                                                </a>{" "}
                                                <span className="following">following</span>
                                            </h5>
                                            <p className="text-muted">
                                                Published a photo about 4 hour ago
                                            </p>
                                        </div>
                                        <div className="reaction">
                                            <a className="btn text-green">
                                                <i className="icon ion-thumbsup" /> 2
                                            </a>
                                            <a className="btn text-red">
                                                <i className="fa fa-thumbs-down" /> 0
                                            </a>
                                        </div>
                                        <div className="line-divider" />
                                        <div className="post-text">
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium doloremque laudantium, totam rem
                                                aperiam, eaque ipsa quae ab illo inventore veritatis et
                                                quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                                enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                                aut fugit.
                                            </p>
                                        </div>
                                        <div className="line-divider" />
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-10.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <p>
                                                <a href="timeline.html" className="profile-link">
                                                    Julia{" "}
                                                </a>
                                                At vero eos et accusamus et iusto odio dignissimos ducimus
                                                qui blanditiis praesentium voluptatum deleniti atque
                                                corrupti quos dolores et quas molestias excepturi sint
                                                occaecati cupiditate non provident, similique sunt in culpa
                                                qui officia deserunt mollitia animi, id est laborum et
                                                dolorum fuga.
                                            </p>
                                        </div>
                                        <div className="post-comment">
                                            <img
                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                alt=""
                                                className="profile-photo-sm"
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Post a comment"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Newsfeed Common Side Bar Right
        ================================================= */}
                        <div className="col-md-2 static">
                            <div className="suggestions" id="sticky-sidebar" style={{}}>
                                <h4 className="grey">Who to Follow</h4>
                                <div className="follow-user">
                                    <img
                                        src="https://themified.com/friend-finder/images/users/user-11.jpg"
                                        alt=""
                                        className="profile-photo-sm pull-left"
                                    />
                                    <div>
                                        <h5>
                                            <a href="timeline.html">Diana Amber</a>
                                        </h5>
                                        <a href="#" className="text-green">
                                            Add friend
                                        </a>
                                    </div>
                                </div>
                                <div className="follow-user">
                                    <img
                                        src="https://themified.com/friend-finder/images/users/user-12.jpg"
                                        alt=""
                                        className="profile-photo-sm pull-left"
                                    />
                                    <div>
                                        <h5>
                                            <a href="timeline.html">Cris Haris</a>
                                        </h5>
                                        <a href="#" className="text-green">
                                            Add friend
                                        </a>
                                    </div>
                                </div>
                                <div className="follow-user">
                                    <img
                                        src="https://themified.com/friend-finder/images/users/user-13.jpg"
                                        alt=""
                                        className="profile-photo-sm pull-left"
                                    />
                                    <div>
                                        <h5>
                                            <a href="timeline.html">Brian Walton</a>
                                        </h5>
                                        <a href="#" className="text-green">
                                            Add friend
                                        </a>
                                    </div>
                                </div>
                                <div className="follow-user">
                                    <img
                                        src="https://themified.com/friend-finder/images/users/user-14.jpg"
                                        alt=""
                                        className="profile-photo-sm pull-left"
                                    />
                                    <div>
                                        <h5>
                                            <a href="timeline.html">Olivia Steward</a>
                                        </h5>
                                        <a href="#" className="text-green">
                                            Add friend
                                        </a>
                                    </div>
                                </div>
                                <div className="follow-user">
                                    <img
                                        src="https://themified.com/friend-finder/images/users/user-15.jpg"
                                        alt=""
                                        className="profile-photo-sm pull-left"
                                    />
                                    <div>
                                        <h5>
                                            <a href="timeline.html">Sophia Page</a>
                                        </h5>
                                        <a href="#" className="text-green">
                                            Add friend
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer
        ================================================= */}
            <Footer />
            {/*preloader*/}
            <div id="spinner-wrapper" style={{ display: "none" }}>
                <div className="spinner" />
            </div>
            {/*Buy button*/}



        </>
    )
}

export default HomePage