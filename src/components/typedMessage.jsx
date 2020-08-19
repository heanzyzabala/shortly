import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
    Message,
    Button,
    Icon,
    Popup,
    Grid,
    Container,
} from 'semantic-ui-react';

export default function TypedMessage({ variant, url }) {
    const [copySuccess, setCopySuccess] = useState();

    function handleOnCopy(event) {
        navigator.clipboard.writeText(url);
        setCopySuccess('Copied!');
        event.preventDefault();
    }

    switch (variant) {
    case 'positive':
        return (
            <Message positive icon size="large">
                <Icon name="check circle" />
                <Container>
                    <Grid stackable verticalAlign="middle" columns={2}>
                        <Grid.Column>
                            <Message.Content>
                                <Message.Header> Success! </Message.Header>
                                <Message.Content>Here&apos;s your link:</Message.Content>
                                <a href={url}>
                                    {url}
                                </a>
                            </Message.Content>
                        </Grid.Column>
                        <Grid.Column textAlign="right">
                            <Popup
                                content={copySuccess}
                                on="click"
                                pinned
                                trigger={<Button positive content="Copy" onClick={handleOnCopy} />}
                            />
                        </Grid.Column>
                    </Grid>
                </Container>
            </Message>
        );
    case 'danger':
        return (
            <Message negative icon size="large">
                <Icon name="times circle" />
                <Message.Content>
                    <Message.Header> Uh-oh! </Message.Header>
                    <Message.Content> You entered an invalid link. </Message.Content>
                </Message.Content>
            </Message>
        );
    case 'info':
        return (
            <Message info icon size="large">
                <Icon name="info circle" />
                <Message.Content>
                    <Message.Header> Hmm. </Message.Header>
                    <Message.Content> Something seems off. Try again later. </Message.Content>
                </Message.Content>
            </Message>
        );
    default:
        throw new Error('Invalid Message Variant');
    }
}

TypedMessage.propTypes = {
    variant: PropTypes.string.isRequired,
    url: PropTypes.string,
};

TypedMessage.defaultProps = {
    url: '',
};
