import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import Name from "../Name/Name";
import url from "../../utility/url";
import { Grid } from "semantic-ui-react";

const Main = () => {
    const [status, setStatus] = useState("");
    const [names, setNames] = useState([]);

    useEffect(() => {
        setStatus("loading");
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = () => {
        axios
            .get(url.get_all)
            .then((response) => {
                setStatus("loaded");
                renderNames(response.data);
            })
            .catch((error) => {
                setStatus("error");
            });
    };

    const renderNames = (fetchedData) => {
        const rendered = fetchedData.map((data) => (
            <Name key={data.id} name={data.name} id={data.id} />
        ));
        setNames(rendered);
    };

    return (
        <div>
            {status === "error" && <div>Error.</div>}
            {status === "loading" && <Loading />}
            {status === "loaded" && (
                <Grid relaxed columns={4}>
                    {names}
                </Grid>
            )}
        </div>
    );
};

export default Main;
