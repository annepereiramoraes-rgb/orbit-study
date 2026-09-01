/** ORBIT — Caderno Orbital: rotas da central acadêmica, calendário e trilhas. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import StudyTrail from "./pages/StudyTrail";
import Timetable from "./pages/Timetable";


function Router() {
  return (
    <WouterRouter hook={useHashLocation}>
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/calendario"} component={Calendar} />
      <Route path={"/trilhas"} component={StudyTrail} />
      <Route path={"/horarios"} component={Timetable} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
