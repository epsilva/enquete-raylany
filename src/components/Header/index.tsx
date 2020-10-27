import * as React from "react";
import { Avatar } from "react-lorem-ipsum";
import { HeaderContainer } from './styles';
import Pinha from '../../assets/pinha.svg';

const Header = () => (
  <HeaderContainer>
    <div className="imagem">
        <Pinha />
    </div>
    <h1>Pinhas Savon</h1>
    <div className="avatar">
      <Avatar />
    </div>
  </HeaderContainer>
);

export default Header;
