import React from "react";
import { Comment, Header } from "semantic-ui-react";

const RecComment = (data) => {
    const commentStyle = {
        marginLeft: "3px",
    };
    return (
        <Comment key={data.id}>
            <Comment.Content>
                <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                <Comment.Metadata>
                    <div>Rating: {data.data.rating}</div>
                </Comment.Metadata>
                <Comment.Text style={commentStyle}>
                    {data.data.comment}
                </Comment.Text>
            </Comment.Content>
        </Comment>
    );
};

export default RecComment;
