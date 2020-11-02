import React from 'react';
import PropTypes from 'prop-types';
import ComponentsContainer from './../ComponentsContainer';
import Events from '../../../lib/Events';
import { printEntity } from '../../../lib/entity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons/faSlidersH';
import { IconButton } from '@material-ui/core';

import Popover from '@material-ui/core/Popover';

import {
  Container,
  Wrapper,
  EntityContainer
} from './styles.jsx';

export default ({
    entity = {},
    // visible = false,
  }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const [ hoveredEntity, setHoveredEntity ] = React.useState(null);

  React.useEffect(() => {

    Events.on('componentremove', event => {
      forceUpdate();
    });

    Events.on('componentadd', event => {
      forceUpdate();
    });

    Events.on('raycastermouseenter', el => {
      setHoveredEntity(el);
    });

    Events.on('raycastermouseleave', el => {
      setHoveredEntity(el);
    });
  }, [])


  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <Wrapper>

      {entity && visible && <Container>
      <ComponentsContainer entity={entity} />
      </Container>}

    <EntityContainer>
      <div>{printEntity(hoveredEntity)}</div>
      <IconButton onClick={() => setVisible(!visible)} title={`Add new Entity`} >
        <FontAwesomeIcon icon={faSlidersH} size="sm" />
      </IconButton>
    </EntityContainer>
  </Wrapper>;
}
