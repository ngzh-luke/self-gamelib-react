import { ReactNode } from "react";

interface BSalertProps {
  children?: ReactNode;
  onClose: () => void;
}

function BSalert({ children, onClose }: BSalertProps) {
  console.log("BS alert triggered!");
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>{children}</strong>
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default BSalert;
