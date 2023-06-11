import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  List,
  ListItemText,
  ListItem,
} from "@mui/material";
import { searchCollection } from "../../shared/firebase";
import { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";

export function SearchHistoryPage() {
  const [history, setHistory] = useState<HistoryType[]>([]);

  interface HistoryType {
    serarchItem?: string;
    time?: string;
    id?: string;
  }

  useEffect(
    () =>
      onSnapshot(searchCollection, (snapshot: QuerySnapshot<DocumentData>) => {
        setHistory(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }),
    []
  );

  const items = history.map((item) => (
    <ListItem key={item.id}>
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
