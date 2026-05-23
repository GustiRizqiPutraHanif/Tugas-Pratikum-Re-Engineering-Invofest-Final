import { Routes, Route } from "react-router-dom";
import RegisterForm from "./Pages/RegisterForm";
import LoginForm from "./Pages/LoginForm";
import Beranda from "./Pages/Beranda";
import Seminar from "./Pages/Seminar";
import TalkShow from "./Pages/TalkShow";
import MainLayout from "./Layout/MyLayout";
import AuthLayouts from "./Layout/AuthLayout";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import DashboardIndex from "./dashboard/DashboardIndex";
import DashboardLayouts from "./Layout/DashboardLayout";
import CategoryIndex from "./dashboard/Category/CategoryIndex";
import EventIndex from "./dashboard/Event/EventIndex";
import CategoryCreate from "./dashboard/Category/CreateCategory";
import SeminarIndex from "./dashboard/Seminar/SeminarIndex";
import SpeakerCreate from "./dashboard/Seminar/SpeakCreate";
import EventCreate from "./dashboard/Event/CreateEvent";
import Competition from "./Pages/Competition";
import Workshop from "./Pages/WorkShop";
import BiodataIndex from "./dashboard/Biodata/Biodataindex";
import UpdateSpeaker from "./dashboard/Seminar/UpdateSpeaker";
import CategoryUpdate from "./dashboard/Category/UpdateCategory";
import EventUpdate from "./dashboard/Event/UpdateEvent";


function App() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/seminar" element={<Seminar />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/talkshow" element={<TalkShow />} />
      </Route>

      {/* AUTH */}
      <Route element={<AuthLayouts />}>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Route>

      {/* DASHBOARD */}
      <Route element={<ProtectedRoutes />}>
        <Route element={<DashboardLayouts />}>
              <Route path="/dashboard" element={<DashboardIndex />} />
              <Route path="/dashboard/category" element={<CategoryIndex />} />
              <Route path="/dashboard/category/create" element={<CategoryCreate />} />
              <Route path="/dashboard/category/update/:id" element={<CategoryUpdate />} />
              <Route path="/dashboard/event" element={<EventIndex />} />
              <Route path="/dashboard/event/new" element={<EventCreate/>}/>
              <Route path="/dashboard/event/update/:id" element={<EventUpdate />} />
              <Route path="/dashboard/seminar" element={<SeminarIndex />} />
              <Route path="/dashboard/seminar/speaker" element={<SpeakerCreate/>}/>
              <Route path="/dashboard/seminar/speaker/update/:id" element={<UpdateSpeaker />} />
              <Route path="/dashboard/biodata" element={<BiodataIndex />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;