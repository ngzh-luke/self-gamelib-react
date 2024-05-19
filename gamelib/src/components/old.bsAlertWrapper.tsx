import { ReactNode, useState } from "react";
import BSalert from "./old.bsAlert";

interface WrapperProps {
  children: ReactNode;
}

function BSalertWrapper({ children }: WrapperProps) {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert === true && (
        <BSalert onClose={() => setShowAlert(false)}>{children}</BSalert>
      )}
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => setShowAlert(true)}
      >
        Trigger
      </button>
    </>
  );
}

export default BSalertWrapper;
