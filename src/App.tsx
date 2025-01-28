import { Toaster } from "sonner";
import { Route, Routes } from "react-router";

import TodoContextProvider from "./contexts/todo-context";
import LoadingContextProvider from "./contexts/loading-context";

import Navbar from "./components/header/navbar";
import Landing from "./pages/landing-page";
import Home from "./pages/home-page";
import LocalStorage from "./pages/storage-info-page";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="grid min-h-svh grid-rows-[minmax(3.5rem,auto)_1fr_minmax(3.5rem,auto)] overflow-y-auto font-['Geist'] antialiased">
        <header className="flex items-center px-4 lg:px-6">
          <Navbar />
        </header>

        <main>
          <Toaster position="top-center" richColors />

          <TodoContextProvider>
            <LoadingContextProvider>
              <Routes>
                <Route path="/" element={<Landing />} />

                <Route path="/tasks" element={<Home />} />

                <Route path="/localstorage" element={<LocalStorage />} />
              </Routes>
            </LoadingContextProvider>
          </TodoContextProvider>
        </main>

        <footer className="flex items-center justify-center">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
