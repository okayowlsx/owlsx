import React, { Component } from "react";

import "./App.css";
import styled from "styled-components";

import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

const ConnectButton = styled(WalletDialogButton)``;

class Navbar extends Component {
  render() {
    return (
      <nav className="navBarItems">
        <div className="navbarLogo">
          <h2>
            <span className="gradTextFancyFontPinkQW">
              <i>OKAY OWLS 🦉</i>
            </span>
          </h2>
        </div>

        <div className="connectWalletButtonNav">
          <ConnectButton className="gradientClass">
            <b>Connect Wallet</b>
          </ConnectButton>
        </div>
      </nav>
    );
  }
}
export default Navbar;
