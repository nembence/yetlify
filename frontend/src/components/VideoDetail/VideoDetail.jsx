import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import RecComment from "../RecComment/RecComment";
import axios from "axios";
import url from "../../utility/url";
import { Comment, Header } from "semantic-ui-react";
import RecInput from "../RecInput/RecInput";

const VideoDetail = (props) => {
    const [id, setId] = useState("");
    const [video, setVideo] = useState({});
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const page = props.match.params.id;
        setId(page);
        fetchVideo(page);
        fetchRecommendations(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchVideo = (id) => {
        axios.get(url.get_video + id).then((response) => {
            setVideo(response.data);
        });
    };

    const fetchRecommendations = (id) => {
        axios.get(url.get_recommendations + id).then((response) => {
            renderRecommendations(response.data);
        });
    };

    const renderRecommendations = (fetchedData) => {
        const rendered = fetchedData.map((data) => (
            <RecComment key={data.id} data={data} />
        ));
        setRecommendations(rendered);
    };

    return (
        <div>
            <ReactPlayer url={video.url} />
            <Comment.Group>
                <Header as="h3" dividing>
                    Comments
                </Header>
                {recommendations}
            </Comment.Group>
            <RecInput id={id} />
        </div>
    );
};

export default VideoDetail;
