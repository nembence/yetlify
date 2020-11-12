import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import url from "../../utility/url";
import axios from "axios";

const RecInput = ({ id, fetchRecommendations }) => {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");

    const inputContainer = {
        width: "60%",
        position: "absolute",
        left: "15%",
        margin: "auto",
    };

    const changeComment = (event) => {
        setComment(event.target.value);
    };

    const changeRating = (event) => {
        setRating(event.target.value);
    };

    const addComment = () => {
        const recommendation = {
            comment: comment,
            rating: rating,
            videoId: id,
        };
        axios.post(url.new_recommendation, recommendation);
        Array.from(document.querySelectorAll("input")).forEach(
            (input) => (input.value = "")
        );
        setTimeout(() => {
            fetchRecommendations();
        }, 200);
    };

    return (
        <Form size="small" style={inputContainer}>
            <Segment stacked>
                <Form.Input
                    fluid
                    icon="comment"
                    iconPosition="left"
                    placeholder="Comment"
                    onChange={changeComment}
                />
                <Form.Input
                    fluid
                    icon="numbered list"
                    iconPosition="left"
                    placeholder="Rating"
                    onChange={changeRating}
                />
                <Button fluid size="small" onClick={addComment}>
                    Add recommendation
                </Button>
            </Segment>
        </Form>
    );
};

export default RecInput;
