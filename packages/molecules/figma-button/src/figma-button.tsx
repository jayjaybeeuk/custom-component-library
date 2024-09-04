/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useReducer } from 'react';
import './styles.css';
import '@jayjaybeeuk/shared-styles/src/styleguide.css';

export interface FigmaButtonProps {
  textShowHide?: boolean;
  iconRight?: string;
  iconRightShowHide?: boolean;
  specialInjectionShowHide?: boolean;
  iconLeftShowHide?: boolean;
  iconLeft?: string;
  text?: string;
  variation?: 'success' | 'disabled';
  stateProp?: 'disabled' | 'hover' | 'active' | 'default';
}

export const FigmaButton: React.FC<FigmaButtonProps> = ({
  textShowHide = true,
  iconRight = 'File',
  iconRightShowHide = false,
  specialInjectionShowHide = false,
  iconLeftShowHide = false,
  iconLeft = 'File',
  text = 'Link',
  variation,
  stateProp,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variation: variation || 'success',
    state: stateProp || 'default',
  });

  return (
    <div
      className={`components-form ${state.state}`}
      onMouseLeave={() => {
        dispatch('mouse_leave');
      }}
      onMouseEnter={() => {
        dispatch('mouse_enter');
      }}
    >
      <div className="contents">
        {textShowHide && <div className="link">{text}</div>}
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case 'mouse_enter':
      return {
        ...state,
        state: 'hover',
      };

    case 'mouse_leave':
      return {
        ...state,
        state: 'default',
      };
  }

  return state;
}
