import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet /> {/*to tell react where other elements will be displayed */}
      </main>
    </>
  );
}

export default RootLayout;
