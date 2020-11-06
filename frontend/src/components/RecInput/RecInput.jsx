import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import url from "../../utility/url";
import axios from "axios";

const RecInput = (id) => {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");

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
            videoId: id.id,
        };
        console.log(recommendation);
        axios.post(url.new_recommendation, recommendation);
    };

    return (
        <Form size="small">
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
