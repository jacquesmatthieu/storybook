import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

import Loading from '../state/loading.component';
import Panel from './panel.component';

const Wrapper = styled.div`
  * {
    color: ${({ theme }) => theme.palette.primary.dark};
  }

  & h1 {
    text-transform: uppercase;
  }
`;

class InfoPanel extends Component {
  state = { loading: false, content: '' };

  async componentDidMount() {
    const { loader, content } = this.props;
    if (content || !loader) {
      return;
    }

    this.setState({ loading: true });

    let loadedContent = '';
    try {
      ({ default: loadedContent } = await loader());
    } finally {
      this.setState({ loading: false, content: loadedContent });
    }
  }

  render() {
    const { content: propsContent, ...props } = this.props;
    const { loading, content = propsContent } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <Panel {...props}>
        <Wrapper>
          {loading ? <Loading /> : <Markdown>{content}</Markdown>}
        </Wrapper>
      </Panel>
    );
  }
}

InfoPanel.defaultProps = {
  loader: undefined,
  content: '',
};

InfoPanel.propTypes = {
  t: PropTypes.func.isRequired,
  loader: PropTypes.func,
  content: PropTypes.string,
};

export default translate('obouleau')(InfoPanel);
