import React from "react";
import { Grid, Typography, Button, Link } from "@mui/material";

function Footer() {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={10} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Company{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              About{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Press{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Partners{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={10} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Solutions{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Marketing{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Analytics{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Commerce{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Insights{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Supports{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={10} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Documentations{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Guides{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              API Supports{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={10} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Legal{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Claim{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Privacy{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Terms{" "}
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &Copy; 2023 My Company. All right reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            &Copy; Made with Love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>{" "}
            from{" "}
            <Link
              href="https://www.flaticon.com"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
