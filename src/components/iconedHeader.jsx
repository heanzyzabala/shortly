import PropTypes from 'prop-types';
import React from 'react';
import {
    Header,
    Icon,
} from 'semantic-ui-react';

export default function IconedHeader({ icon, header, subHeader }) {
    return (
        <Header as="h4" textAlign="center" icon>
            <Icon name={icon} />
            {header}
            <Header.Subheader style={{ paddingTop: '1em' }}>
                {subHeader}
            </Header.Subheader>
        </Header>
    );
}

IconedHeader.propTypes = {
    icon: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
};
