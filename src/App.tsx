import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import Layout from "./components/ui/layout";
import { SidebarProvider } from "./components/ui/sidebar";
import IndividualListingPage from "./pages/IndividualListingPage";
import CategoryPage from "./pages/CategoryPage";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:category/" element={<CategoryPage />} />
              <Route
                path="/:category/:id"
                element={<IndividualListingPage />}
              />
            </Routes>
          </Layout>
        </SidebarProvider>
      </QueryClientProvider>
  </BrowserRouter>
  );
}

export default App;
