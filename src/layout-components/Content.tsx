import { Routes, Route } from "react-router-dom";
import { ErrorPage, Events, Forum, Home, Gallery, Links, Menu } from "../content-components";
import { HeaderProps } from "../utils/types";


function Content({ showMenu, setShowMenu }: HeaderProps) {
  return (
    <main>
      {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/links' element={<Links />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default Content;
