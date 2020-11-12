import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import Video from "../Video/Video";
import url from "../../utility/url";
import { Grid } from "semantic-ui-react";
import VideoInput from "../VideoInput/VideoInput";
import { VideoContext } from "../../context/VideoContext";

const Main = () => {
    const [status, setStatus] = useState("");
    const [videos, setVideos] = useContext(VideoContext);

    useEffect(() => {
        setStatus("loading");
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = () => {
        console.log("a");
        axios
            .get(url.get_all)
            .then((response) => {
                setStatus("loaded");
                renderVideos(response.data);
            })
            .catch((error) => {
                setStatus("error");
            });
    };

    const renderVideos = (fetchedData) => {
        const rendered = fetchedData.map((data) => (
            <Video key={data.id} name={data.name} id={data.id} url={data.url} />
        ));
        setVideos(rendered);
    };

    return (
        <div>
            {status === "error" && <div>Error.</div>}
            {status === "loading" && <Loading />}
            {status === "loaded" && (
                <React.Fragment>
                    <Grid relaxed columns={3}>
                        {videos}
                    </Grid>
                    <VideoInput fetchData={() => fetchData()} />
                </React.Fragment>
            )}
        </div>
    );
};

export default Main;
