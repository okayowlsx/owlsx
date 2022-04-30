import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { MintCountdown } from "./MintCountdown";
import { toDate, formatNumber } from "./utils";
import { CandyMachineAccount } from "./candy-machine";

type HeaderProps = {
  candyMachine?: CandyMachineAccount;
};

export const Header = ({ candyMachine }: HeaderProps) => {
  return (
    <Grid container direction="row" justifyContent="center" wrap="nowrap">
      <Grid container direction="row" wrap="nowrap">
        {candyMachine && (
          <Grid container direction="row" wrap="nowrap">
            <Grid container direction="column">
              <Typography variant="body2" color="textSecondary">
                Minted
              </Typography>
              <Typography
                variant="h6"
                color="textPrimary"
                style={{
                  fontWeight: "bold",
                }}
              >
                <span className="gradTextFancyFontGreySmally">
                  {`${candyMachine?.state.itemsRedeemed} `}
                </span>
              </Typography>
            </Grid>

            <Grid container direction="column">
              <Typography variant="body2" color="textSecondary">
                Price
              </Typography>
              <Typography
                variant="h6"
                color="textPrimary"
                style={{ fontWeight: "bold" }}
              >
                {/* ◎ {formatNumber.asNumber(candyMachine?.state.price!)} */}
                <span className="gradTextFancyFontGreySmally">PRICELESS</span>
              </Typography>
            </Grid>
          </Grid>
        )}
        <MintCountdown
          date={toDate(candyMachine?.state.goLiveDate)}
          style={{ justifyContent: "flex-end" }}
          status={
            !candyMachine?.state?.isActive || candyMachine?.state?.isSoldOut
              ? "COMPLETED"
              : "LIVE"
          }
        />
      </Grid>
    </Grid>
  );
};
