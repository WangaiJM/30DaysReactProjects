import "./App.css";
import Alert from "./component/Alert";

function App() {
  return (
    <div className="App">
      <Alert message={"Message sent successfully"} cardClass={"success "} />
      <Alert message={"Check conditions"} cardClass={"warning "} />
      <Alert message={"Error at line 12"} cardClass={"danger "} />
    </div>
  );
}

export default App;
