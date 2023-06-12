import {
  Container,
  Typography,
  Grid,
  List,
  ListItemText,
  ListItem,
} from "@mui/material";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { useLocalSorageHistory } from "../../shared/hooks/useLocalSorageHistory";

export default function SearchHistoryPage() {
  useLocalSorageHistory();
  const history = useAppSelector((state) => state.history);

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
