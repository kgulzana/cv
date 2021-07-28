import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

function SidebarMenu() {
  return (
    <div className="sidemenu">
      <MobileNavigation />
      <Navigation/>
    </div>
  );
}

export default SidebarMenu;
