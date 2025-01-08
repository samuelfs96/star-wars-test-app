import { Button } from "flowbite-react";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button>Click me</Button>
      </Layout>
    </>
  );
}

export default App;
