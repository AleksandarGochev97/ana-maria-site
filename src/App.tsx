import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "@/pages/Index";
import AdminRequests from "@/pages/AdminRequests";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin-requests" element={<AdminRequests />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
