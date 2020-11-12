import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import url from "../../utility/url";
import axios from "axios";

const VideoInput = ({ fetchData }) => {
    const [name, setName] = useState("");
    const [videoUrl, setVideoUrl] = useState("");

    const inputContainer = {
        width: "60%",
        position: "absolute",
        left: "20%",
        margin: "auto",
        marginTop: "20px",
    };

    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeVideoUrl = (event) => {
        setVideoUrl(event.target.value);
    };

    const addVideo = () => {
        const video = {
            name: name,
            url: videoUrl,
        };
        axios.post(url.new_video, video);
        Array.from(document.querySelectorAll("input")).forEach(
            (input) => (input.value = "")
        );
        setTimeout(() => {
            fetchData();
        }, 200);
    };

    return (
        <Form size="small" style={inputContainer}>
            <Segment stacked>
                <Form.Input
                    fluid
                    icon="comment"
                    iconPosition="left"
                    placeholder="Name"
                    onChange={changeName}
                />
                <Form.Input
                    fluid
                    icon="folder"
                    iconPosition="left"
                    placeholder="Video url"
                    onChange={changeVideoUrl}
                />
                <Button fluid size="small" onClick={addVideo}>
                    Add video
                </Button>
            </Segment>
        </Form>
    );
};

export default VideoInput;
