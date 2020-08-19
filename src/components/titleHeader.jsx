import PropTypes from 'prop-types';
import React from 'react';
import {
    Header,
    Icon,
} from 'semantic-ui-react';

export default function TitleHeader({ icon, header, subHeader }) {
    return (
        <Header as="h3" textAlign="center" icon>
            <Icon name={icon} circular />
            <Header.Content>
                {header}
            </Header.Content>
            <Header.Subheader>
                {subHeader}
            </Header.Subheader>
        </Header>
    );
}

TitleHeader.propTypes = {
    icon: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
};
