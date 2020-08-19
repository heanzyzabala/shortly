import React, { useState } from 'react';
import {
    Form,
    Icon,
    Input,
    Button,
    Header,
} from 'semantic-ui-react';

import { TypedMessage } from '.';

import shorten from '../api';

export default function ShortenerForm() {
    const [url, setUrl] = useState();
    const [message, setMessage] = useState();

    async function handleOnSubmit(event) {
        event.preventDefault();
        try {
            const response = await shorten(url);
            setMessage(<TypedMessage variant="positive" url={`http://hzab.me/${response.data.code}`} />);
        } catch (e) {
            const { status, data } = e.response;
            const { error } = data;
            if (status === 422 && error === 'Invalid URL') {
                setMessage(<TypedMessage variant="danger" />);
            } else {
                setMessage(<TypedMessage variant="info" />);
            }
        }
    }

    function handleOnChange(event) {
        setUrl(event.target.value);
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group>
                <Form.Field onChange={handleOnChange} placeholder="Put your link here" control={Input} width={13} style={{ marginTop: '1em' }} />
                <Form.Field fluid control={Button} width={3} style={{ marginTop: '1em' }}>
                    <Icon name="linkify" />
                    Shorten
                </Form.Field>
            </Form.Group>
            <Form.Field style={{ margin: '1em 1em 3em' }}>
                <Header sub textAlign="center" color="grey" style={{ fontSize: '10px' }}>
                    By clicking Shorten, you are agreeing to Shortly&apos;s
                    {' '}
                    <u>Terms of Service</u>
                    {' and '}
                    <u>Privacy Policy</u>
                </Header>
            </Form.Field>
            {message}
        </Form>
    );
}
