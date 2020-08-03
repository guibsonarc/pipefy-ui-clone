import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/pipefy-logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo" height="38px" />
    </Container>
  );
}
