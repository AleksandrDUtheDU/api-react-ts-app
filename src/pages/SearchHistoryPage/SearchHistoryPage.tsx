import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  List,
  ListItemText,
  ListItem,
} from "@mui/material";
import { IHistoryItem } from "../../shared/api/store/redusers/HistorySlise/IHistoryItem";

export function SearchHistoryPage() {
  const [history, setHistory] = useState<IHistoryItem[]>([]);

  const items = history.map((item) => (
    <ListItem key={item.time}>
      <ListItemText primary={item.serarchItem} secondary={item.time} />
    </ListItem>
  ));

  return (
    <Container
      sx={{ mt: 10, textAlign: "center" }}
      component="main"
      maxWidth="lg"
    >
      <Grid item xs={12} md={6}>
        <Typography component="h2" variant="h4">
          История Запросов:
        </Typography>
        <List>{history && items}</List>
      </Grid>
    </Container>
  );
}
