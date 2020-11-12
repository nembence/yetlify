import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import VideoDetail from "../VideoDetail/VideoDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { VideoProvider } from "../../context/VideoContext";

const App = () => {
    const containerStyle = {
        position: "absolute",
        left: "25%",
        margin: "auto",
        width: "50%",
        top: "100px",
    };

    return (
        <VideoProvider>
            <Router>
                <Header />
                <div style={containerStyle}>
                    <Switch>
                        <Route exact path="/">
                            <Main />
                        </Route>
                        <Route path="/video/:id" component={VideoDetail} />
                    </Switch>
                </div>
            </Router>
        </VideoProvider>
    );
};

export default App;
