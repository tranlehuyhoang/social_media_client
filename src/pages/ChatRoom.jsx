import React from 'react'
import Header from './inc/Header'
import Footer from './inc/Footer'

const ChatRoom = () => {
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
            <title>Chatroom | Send and Receive Messages</title>
            {/* Stylesheets
    ================================================= */}
            <link rel="stylesheet" href="https://themified.com/friend-finder/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://themified.com/friend-finder/css/jquery.scrollbar.css" />
            <link rel="stylesheet" href="https://themified.com/friend-finder/css/style.css" />
            <link rel="stylesheet" href="https://themified.com/friend-finder/css/ionicons.min.css" />
            <link rel="stylesheet" href="https://themified.com/friend-finder/css/font-awesome.min.css" />
            <link href="css/emoji.css" rel="stylesheet" />
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
                            <div id="chat-block">
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
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-sm-5">
                                        <div className="tools">
                                            <ul className="publishing-tools list-inline">
                                                <li>
                                                    <a href="#">
                                                        <i className="ion-compose" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="ion-images" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="ion-ios-videocam" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="ion-map" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <button className="btn btn-primary pull-right">
                                                Publish
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Post Create Box End */}
                            {/* Chat Room
      ================================================= */}
                            <div className="chat-room">
                                <div className="row">
                                    <div className="col-md-5">
                                        {/* Contact List in Left*/}
                                        <ul className="nav nav-tabs contact-list scrollbar-wrapper scrollbar-outer">
                                            <li className="active">
                                                <a href="#contact-1" data-toggle="tab">
                                                    <div className="contact">
                                                        <img
                                                            src="https://themified.com/friend-finder/images/users/user-2.jpg"
                                                            alt=""
                                                            className="profile-photo-sm pull-left"
                                                        />
                                                        <div className="msg-preview">
                                                            <h6>Linda Lohan</h6>
                                                            <p className="text-muted">Hi there, how are you</p>
                                                            <small className="text-muted">a min ago</small>
                                                            <div className="chat-alert">1</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#contact-2" data-toggle="tab">
                                                    <div className="contact">
                                                        <img
                                                            src="https://themified.com/friend-finder/images/users/user-10.jpg"
                                                            alt=""
                                                            className="profile-photo-sm pull-left"
                                                        />
                                                        <div className="msg-preview">
                                                            <h6>Julia Cox</h6>
                                                            <p className="text-muted">see you soon</p>
                                                            <small className="text-muted">an hour ago</small>
                                                            <div className="seen">
                                                                <i className="icon ion-checkmark-round" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#contact-3" data-toggle="tab">
                                                    <div className="contact">
                                                        <img
                                                            src="https://themified.com/friend-finder/images/users/user-3.jpg"
                                                            alt=""
                                                            className="profile-photo-sm pull-left"
                                                        />
                                                        <div className="msg-preview">
                                                            <h6>Sophia Lee</h6>
                                                            <p className="text-muted">Okay fine. thank you</p>
                                                            <small className="text-muted">13 hour ago</small>
                                                            <div className="replied">
                                                                <i className="icon ion-reply" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#contact-4" data-toggle="tab">
                                                    <div className="contact">
                                                        <img
                                                            src="https://themified.com/friend-finder/images/users/user-4.jpg"
                                                            alt=""
                                                            className="profile-photo-sm pull-left"
                                                        />
                                                        <div className="msg-preview">
                                                            <h6>John Doe</h6>
                                                            <p className="text-muted">hey anybody there</p>
                                                            <small className="text-muted">Yesterday</small>
                                                            <div className="chat-alert">1</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#contact-5" data-toggle="tab">
                                                    <div className="contact">
                                                        <img
                                                            src="https://themified.com/friend-finder/images/users/user-9.jpg"
                                                            alt=""
                                                            className="profile-photo-sm pull-left"
                                                        />
                                                        <div className="msg-preview">
                                                            <h6>Anna Young</h6>
                                                            <p className="text-muted">I gotta go</p>
                                                            <small className="text-muted">2 days ago</small>
                                                            <div className="seen">
                                                                <i className="icon ion-checkmark-round" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#contact-6" data-toggle="tab">
                                                    <div className="contact">
                                                        <img
                                                            src="https://themified.com/friend-finder/images/users/user-8.jpg"
                                                            alt=""
                                                            className="profile-photo-sm pull-left"
                                                        />
                                                        <div className="msg-preview">
                                                            <h6>Richard Bell</h6>
                                                            <p className="text-muted">Hey there?</p>
                                                            <small className="text-muted">2 days ago</small>
                                                            <div className="chat-alert">1</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        {/*Contact List in Left End*/}
                                    </div>
                                    <div className="col-md-7">
                                        {/*Chat Messages in Right*/}
                                        <div className="tab-content scrollbar-wrapper wrapper scrollbar-outer">
                                            <div className="tab-pane active" id="contact-1">
                                                <div className="chat-body">
                                                    <ul className="chat-message">
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-2.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Linda Lohan</h5>
                                                                    <small className="text-muted">3 days ago</small>
                                                                </div>
                                                                <p>
                                                                    Hi honey, how are you doing???? Long time no see.
                                                                    Where have you been?
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li className="right">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-right"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Sarah Cruiz</h5>
                                                                    <small className="text-muted">3 days ago</small>
                                                                </div>
                                                                <p>I have been on vacation</p>
                                                            </div>
                                                        </li>
                                                        <li className="right">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-right"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Sarah Cruiz</h5>
                                                                    <small className="text-muted">3 days ago</small>
                                                                </div>
                                                                <p>
                                                                    it was a great time for me. we had a lot of fun{" "}
                                                                    <i className="em em-blush" />
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-2.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Linda Lohan</h5>
                                                                    <small className="text-muted">3 days ago</small>
                                                                </div>
                                                                <p>
                                                                    that's cool I wish I were you{" "}
                                                                    <i className="em em-expressionless" />
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li className="right">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-right"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Sarah Cruiz</h5>
                                                                    <small className="text-muted">3 days ago</small>
                                                                </div>
                                                                <p>
                                                                    <i className="em em-hand" />
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-2.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Linda Lohan</h5>
                                                                    <small className="text-muted">a min ago</small>
                                                                </div>
                                                                <p>Hi there, how are you</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="contact-2">
                                                <div className="chat-body">
                                                    <ul className="chat-message">
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-10.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Julia Cox</h5>
                                                                    <small className="text-muted">a day ago</small>
                                                                </div>
                                                                <p>Hi</p>
                                                            </div>
                                                        </li>
                                                        <li className="right">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-right"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Sarah Cruiz</h5>
                                                                    <small className="text-muted">a day ago</small>
                                                                </div>
                                                                <p>hellow</p>
                                                            </div>
                                                        </li>
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-10.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Julia Cox</h5>
                                                                    <small className="text-muted">an hour ago</small>
                                                                </div>
                                                                <p>good</p>
                                                            </div>
                                                        </li>
                                                        <li className="right">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-right"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Sarah Cruiz</h5>
                                                                    <small className="text-muted">an hour ago</small>
                                                                </div>
                                                                <p>see you soon</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="contact-3">
                                                <div className="chat-body">
                                                    <ul className="chat-message">
                                                        <li className="right">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-right"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Sarah</h5>
                                                                    <small className="text-muted">2 days ago</small>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                    elit, sed do eiusmod tempor incididunt ut labore
                                                                    et dolore magna aliqua. Ut enim ad minim veniam,
                                                                    quis nostrud exercitation ullamco laboris nisi ut
                                                                    aliquip ex ea commodo consequat.{" "}
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-3.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Sophia Lee</h5>
                                                                    <small className="text-muted">a day ago</small>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                    elit, sed do eiusmod tempor incididunt
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li className="right">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-right"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Sarah Cruiz</h5>
                                                                    <small className="text-muted">13 hours ago</small>
                                                                </div>
                                                                <p>Okay fine. thank you</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="contact-4">
                                                <div className="chat-body">
                                                    <ul className="chat-message">
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-4.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>John Doe</h5>
                                                                    <small className="text-muted">a day ago</small>
                                                                </div>
                                                                <p>
                                                                    At vero eos et accusamus et iusto odio dignissimos
                                                                    ducimus qui blanditiis praesentium voluptatum
                                                                    deleniti atque corrupti quos dolores et quas
                                                                    molestias excepturi sint occaecati cupiditate non
                                                                    provident, similique sunt in culpa qui officia
                                                                    deserunt mollitia animi, id est laborum et dolorum
                                                                    fuga. Et harum quidem rerum facilis est et
                                                                    expedita distinctio. Nam libero tempore, cum
                                                                    soluta nobis est eligendi optio cumque nihil
                                                                    impedit quo minus id quod maxime placeat facere
                                                                    possimus, omnis voluptas assumenda est, omnis
                                                                    dolor repellendus. Temporibus autem quibusdam et
                                                                    aut officiis debitis aut rerum necessitatibus
                                                                    saepe eveniet ut et voluptates repudiandae sint et
                                                                    molestiae non recusandae.
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-4.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>John Doe</h5>
                                                                    <small className="text-muted">a day ago</small>
                                                                </div>
                                                                <p>hey anybody there</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="contact-5">
                                                <div className="chat-body">
                                                    <ul className="chat-message">
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-9.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Anna Young</h5>
                                                                    <small className="text-muted">2 days ago</small>
                                                                </div>
                                                                <p>
                                                                    Sed ut perspiciatis unde omnis iste natus error
                                                                    sit voluptatem accusantium doloremque laudantium,
                                                                    totam rem aperiam, eaque ipsa quae ab illo
                                                                    inventore veritatis et quasi architecto beatae
                                                                    vitae dicta sunt explicabo. Nemo enim ipsam
                                                                    voluptatem quia voluptas sit aspernatur aut odit
                                                                    aut fugit, sed quia consequuntur magni dolores
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-9.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Anna Young</h5>
                                                                    <small className="text-muted">2 days ago</small>
                                                                </div>
                                                                <p>
                                                                    Sed ut perspiciatis unde omnis iste natus error
                                                                    sit voluptatem accusantium doloremque laudantium,
                                                                    totam rem aperiam, eaque ipsa quae ab illo
                                                                    inventore veritatis et quasi architecto beatae
                                                                    vitae dicta sunt explicabo.
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li className="right">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-right"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Sarah Cruiz</h5>
                                                                    <small className="text-muted">2 days ago</small>
                                                                </div>
                                                                <p>I gotta go</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="contact-6">
                                                <div className="chat-body">
                                                    <ul className="chat-message">
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-8.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Richard Bell</h5>
                                                                    <small className="text-muted">2 days ago</small>
                                                                </div>
                                                                <p>Hello</p>
                                                            </div>
                                                        </li>
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-8.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Richard Bell</h5>
                                                                    <small className="text-muted">2 days ago</small>
                                                                </div>
                                                                <p>Hi</p>
                                                            </div>
                                                        </li>
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-8.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Richard Bell</h5>
                                                                    <small className="text-muted">2 days ago</small>
                                                                </div>
                                                                <p>Hey</p>
                                                            </div>
                                                        </li>
                                                        <li className="left">
                                                            <img
                                                                src="https://themified.com/friend-finder/images/users/user-8.jpg"
                                                                alt=""
                                                                className="profile-photo-sm pull-left"
                                                            />
                                                            <div className="chat-item">
                                                                <div className="chat-item-header">
                                                                    <h5>Richard Bell</h5>
                                                                    <small className="text-muted">2 days ago</small>
                                                                </div>
                                                                <p>Hey there</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Chat Messages in Right End*/}
                                        <div className="send-message">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Type your message"
                                                />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-default" type="button">
                                                        Send
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                        {/* Newsfeed Common Side Bar Right
    ================================================= */}
                        <div className="col-md-2 static">
                            <div className="suggestions" id="sticky-sidebar">
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

        </>

    )
}

export default ChatRoom