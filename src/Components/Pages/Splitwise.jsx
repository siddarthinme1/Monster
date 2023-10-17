import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function Splitwise() {
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Expense 1"
                    secondary="User 1 owes User 2 $10.00"
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="Expense 2"
                    secondary="User 3 owes User 1 $20.00"
                  />
                </ListItem>

                {/* Add more expenses */}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper>
              <Typography variant="h6">Balances</Typography>

              <List>
                <ListItem>
                  <ListItemText primary="User 1" secondary="$10.00" />
                </ListItem>

                <ListItem>
                  <ListItemText primary="User 2" secondary="-$10.00" />
                </ListItem>

                <ListItem>
                  <ListItemText primary="User 3" secondary="-$20.00" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Splitwise;
