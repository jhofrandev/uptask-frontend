import AppLayout from "@/layouts/AppLayout";
import DashboardView from "@/views/DashboardView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProjectView from "./views/projects/EditProjectView";
import CreateProjectView from "./views/projects/CreateProjectView";
import ProjectDetailsView from "./views/projects/ProjectDetailsView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardView />} index />
          <Route path="/projects/create" element={<CreateProjectView />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsView />} />
          <Route
            path="/projects/:projectId/edit"
            element={<EditProjectView />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
