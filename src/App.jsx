import RouterController from "./RouterController"
import clsx from "clsx";
import { themes } from "./theme";
import { useThemeStore } from "./store/themeStore";

function App() {
  const { theme } = useThemeStore();

  return (
    <div className={clsx("h-full w-full", themes[theme].background)}>
      <RouterController />
    </div>
  )
}

export default App
