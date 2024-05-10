import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const _SWalert = withReactContent(Swal);

const SWalert = () => {
  console.log("SWA2 triggered!");
  _SWalert
    .fire({
      title: <p>SWA2!</p>,
      text: "That thing is still around?",
      icon: "question",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
      didOpen: () => {
        // `_SWalert` is a subclass of `Swal` with all the same instance & static methods
        _SWalert.showLoading();
        _SWalert.hideLoading();
      },
    })
    .then(() => {
      return;
    });
};

export default SWalert;
