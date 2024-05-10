import BSalertWrapper from "./components/bsAlertWrapper";
import BTN from "./components/btn";
import ListGroup from "./components/listGroup";
import Message from "./components/message";
import SWalert from "./components/swAlert";

function App() {
  let countryList = ["THA", "CHN", "USA"];

  return (
    <>
      <BSalertWrapper>BS Alert</BSalertWrapper>
      {
        <BTN _className={"btn btn-primary"} _onClick={SWalert}>
          Trigger SWA2!
        </BTN>
      }
      <Message />
      <ListGroup
        heading={"Country list"}
        items={countryList}
        onSelectedItem={(item = "THA") => null}
      ></ListGroup>
    </>
  );
}

export default App;
