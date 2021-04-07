import { useRoute } from "../providers/RouteContext";

import { FiAlignJustify } from "react-icons/fi";

export const ToggleHeader = () => {
  const { setRoute } = useRoute();

  const openSideNav = () => {
    document.getElementById("side-nav-id").style.width = "90%";
  };
  return (
    <>
      <header className="toggle-header">
        <div className="home-icon">home</div>
        <div className="toggle-button-div">
          <FiAlignJustify
            className="toggle-button"
            onClick={() => openSideNav()}
          />
        </div>
      </header>
    </>
  );
};
