import { BsX } from "react-icons/bs";

export const ToggleSideNav = () => {
  const closeSideNav = () => {
    document.getElementById("side-nav-id").style.width = "0";
  };
  return (
    <>
      <div className="side-nav" id="side-nav-id">
        <div className="close-icon-div">
          <BsX onClick={() => closeSideNav()} />
        </div>
        <div>
          <ul className="side-nav-list">
            <li className="side-nav-list-item">
              <a>Home</a>
            </li>
            <li className="side-nav-list-item">
              <a>Homeddsfdsf</a>
            </li>
            <li className="side-nav-list-item">
              <a>Home</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
