import React from 'react';
import PropTypes from 'prop-types';
import { printEntity, removeEntity, cloneEntity } from '../../../lib/entity';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';

import EntitySummary from './../../components/EntitySummary';

import Events from '../../../lib/Events';

import {
  Container,
  ExpandIcon,
  VisibleIcon
} from './styles.jsx';

export default ({
    depth = 0,
    entity = {},
    isExpanded = false,
    isFiltering = false,
    isSelected = false,
    selectEntity = () => {},
    toggleExpandedCollapsed = () => {},
}) => {
    const [ state, setState ] = React.useState({});
    const onClick = () => selectEntity(entity);
    const onDoubleClick = () => Events.emit('objectfocus', entity.object3D);
    const toggleVisibility = () => {
      const visible =
        entity.tagName.toLowerCase() === 'a-scene'
          ? entity.object3D.visible
          : entity.getAttribute('visible');
      entity.setAttribute('visible', !visible);
    };
    const tagName = entity.tagName.toLowerCase();
    const pad = '&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(depth);
    let collapse;

    if (entity.children.length > 0 && !isFiltering) {
      collapse = (
        <span
          onClick={() => toggleExpandedCollapsed(entity)}
          className={`collapsespace fa ${
            isExpanded ? 'fa-caret-down' : 'fa-caret-right'
          }`}
        />
      );
    } else {
      collapse = <span className="collapsespace" />;
    }

    return (
      <Container active={isSelected} onClick={onClick}>
          <VisibleIcon
            title="Toggle entity visibility"
            onClick={toggleVisibility}
            icon={(tagName === 'a-scene' ?
              entity.object3D.visible :
              entity.getAttribute('visible')) ?
                faEye :
                faEyeSlash}
          />
          <span
            className="entityChildPadding"
            dangerouslySetInnerHTML={{ __html: pad }}
          />
          {entity.children.length > 0 && !isFiltering && <ExpandIcon
            onClick={() => toggleExpandedCollapsed(entity)}
            icon={isExpanded ? faCaretDown : faCaretRight}
          />}
          <EntitySummary {...{entity, onDoubleClick}} />
          {/* {printEntity(entity, onDoubleClick)} */}
      </Container>
    );
}
