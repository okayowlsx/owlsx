import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { CandyMachineAccount } from "./candy-machine";
import { CircularProgress } from "@material-ui/core";
import { GatewayStatus, useGateway } from "@civic/solana-gateway-react";
import { useEffect, useState } from "react";

export const CTAButton = styled(Button)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  // background: linear-gradient(180deg, #b38728 0%, #fbf5b7 100%);
  // background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
  // background-image: linear-gradient(
  //   to top,
  //   #ff9a9e 0%,
  //   #fecfef 99%,
  //   #fecfef 100%
  // );

  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);

  color: white;
  font-size: 16px;
  font-weight: bold;
`; // add your own styles here

export const MintButton = ({
  onMint,
  candyMachine,
  isMinting,
}: {
  onMint: () => Promise<void>;
  candyMachine?: CandyMachineAccount;
  isMinting: boolean;
}) => {
  const { requestGatewayToken, gatewayStatus } = useGateway();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (gatewayStatus === GatewayStatus.ACTIVE && clicked) {
      onMint();
      setClicked(false);
    }
  }, [gatewayStatus, clicked, setClicked, onMint]);

  return (
    <CTAButton
      disabled={
        candyMachine?.state.isSoldOut ||
        isMinting ||
        !candyMachine?.state.isActive
      }
      onClick={async () => {
        setClicked(true);
        if (candyMachine?.state.isActive && candyMachine?.state.gatekeeper) {
          if (gatewayStatus === GatewayStatus.ACTIVE) {
            setClicked(true);
          } else {
            await requestGatewayToken();
          }
        } else {
          await onMint();
          setClicked(false);
        }
      }}
      variant="contained"
    >
      {candyMachine?.state.isSoldOut ? (
        "SOLD OUT"
      ) : isMinting ? (
        <CircularProgress />
      ) : (
        <>
          <b className="gradTextFancyFontGreyRoll"> MINT OWL </b>
        </>
      )}
    </CTAButton>
  );
};
