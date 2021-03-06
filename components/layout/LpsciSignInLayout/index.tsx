// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Styles
import { BLOCK } from './styles';

export const LpsciSignInLayout = (
  { children }: IChildrenProps,
) => (
  <Block overrides={BLOCK}>
    { children }
  </Block>
);
