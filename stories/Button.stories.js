import React from 'react';

import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import IconButton from '../components/IconButton';

import '../dist/xmars.css'

export default {
  title: 'Button',
  component: Button,
};

export const Defaul = () => <Button onClick={action('clicked')}>Hello Button</Button>;
export const Primary = () => <Button primary onClick={action('clicked')}>Hello Button</Button>;
export const Ripple = () => (
  <div>
    <Button ripple onClick={action('clicked')}>Hello Button</Button>
    <Button primary ripple onClick={action('clicked')}>Hello Button</Button>
  </div>
);

export const IconBtn = () => <IconButton ripple primary circle name="more"></IconButton>