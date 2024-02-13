import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset
} from "./redux/counterSlice";
import { AppDispatch, RootState } from "./redux/store";
import { Button, Card, Typography } from "@mui/joy";

export default function App() {
  const dispatch: AppDispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);
  // const countTwo = useSelector(selectCount);

  const buttonStyles = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "30px auto"
  };

  return (
    <Card color="neutral" variant="outlined" size="lg">
      <div className="App">
        <div>
          <Typography color="primary" level="h1" component="h1">
            Redux Toolkit Counter
          </Typography>
          <br />
          <Typography color="neutral" level="title-lg" component="h2">
            With TypeScript
          </Typography>
          <br />
          <Typography color="danger" level="body-lg" component="h3">
            Counter: {count}
          </Typography>
        </div>
        <div style={buttonStyles}>
          <Button
            variant="solid"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            +5
          </Button>
          <Button variant="outlined" onClick={() => dispatch(increment())}>
            +1
          </Button>
          <Button variant="soft" onClick={() => dispatch(reset())}>
            Reset
          </Button>
          <Button variant="outlined" onClick={() => dispatch(decrement())}>
            -1
          </Button>
          <Button
            variant="solid"
            onClick={() => dispatch(incrementByAmount(-5))}
          >
            -5
          </Button>
        </div>
      </div>
    </Card>
  );
}
