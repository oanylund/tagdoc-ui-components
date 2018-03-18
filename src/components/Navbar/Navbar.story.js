import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Navbar from './Navbar';
import NavItem from '../NavItem/NavItem';


storiesOf('Navbar', module)
  .add('default', () => (
    <Navbar> 
      <NavItem>TagDoc</NavItem>
      <NavItem>Partials</NavItem>
      <NavItem>Playground</NavItem>
      <NavItem>Export</NavItem>
      <NavItem active>I am Active</NavItem>
    </Navbar>
  ));