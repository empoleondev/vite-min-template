import "@empoleon/core/styles.css";
import { Button, EmpoleonProvider } from "@empoleon/core";
import { theme } from "./theme";

function TestComponent() {
  return <div style={{ padding: "40px" }}>
    <Button variant="filled">Hello there</Button>
  </div>
}

export default function App() {
  return <EmpoleonProvider theme={theme}>
    <TestComponent />
  </EmpoleonProvider>;
}
