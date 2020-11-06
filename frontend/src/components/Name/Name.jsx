import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card } from "semantic-ui-react";

const Name = ({ name, id }) => {
    const url = "/video/" + id;
    const linkStyle = {
        color: "black",
    };
    return (
        <Grid.Column>
            <Card>
                <Card.Content>
                    <Card.Header>
                        <Link to={url} style={linkStyle}>
                            {name}
                        </Link>
                    </Card.Header>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
};

export default Name;
