import React from "react";
import { Link } from "react-router-dom";
import { Grid, Image, Label } from "semantic-ui-react";

const Name = ({ name, id, url }) => {
    const videoUrl = "/video/" + id;
    const youtubeImage =
        "http://i3.ytimg.com/vi/" + url.split("=")[1] + "/0.jpg";

    return (
        <Grid.Column>
            <Link to={videoUrl}>
                <div class="ui fluid image">
                    <span class="ui yellow ribbon label">
                        <i aria-hidden="true" class="video icon"></i>
                        {name}
                    </span>
                    <img src={youtubeImage} alt="Video" />
                </div>
            </Link>
        </Grid.Column>
    );
};

export default Name;
