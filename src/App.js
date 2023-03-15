import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Logo from "./pages/Logo";
import EditProfile from "./pages/EditProfile";
import AddProfile from "./pages/AddProfile";
import PendingTasks from "./pages/PendingTasks";
import RecentNotes from "./pages/RecentNotes";
import AddTask from "./pages/AddTask";
import FrameComponent from "./pages/FrameComponent";
import GetStarted from "./pages/GetStarted";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/add-profile":
        title = "";
        metaDescription = "";
        break;
      case "/pending-tasks":
        title = "";
        metaDescription = "";
        break;
      case "/recent-notes":
        title = "";
        metaDescription = "";
        break;
      case "/add-task":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1444":
        title = "";
        metaDescription = "";
        break;
      case "/get-started":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Logo />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/add-profile" element={<AddProfile />} />
      <Route path="/pending-tasks" element={<PendingTasks />} />
      <Route path="/recent-notes" element={<RecentNotes />} />
      <Route path="/add-task" element={<AddTask />} />
      <Route path="/frame-1444" element={<FrameComponent />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Routes>
  );
}
export default App;
