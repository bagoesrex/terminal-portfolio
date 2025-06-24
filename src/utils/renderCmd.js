import About from "../components/commands/About";
import Bio from "../components/commands/Bio";
import Contact from "../components/commands/Contact";
import HelpList from "../components/commands/HelpList";
import Neofetch from "../components/commands/Neofetch";
import NotFound from "../components/commands/NotFound";

export default function renderCmd(cmd) {
  switch (cmd) {
    case "about":
      return {
        cmd,
        Component: About,
        time: "",
      };
    case "bio":
      return {
        cmd,
        Component: Bio,
        time: "",
      };
    case "contact":
      return {
        cmd,
        Component: Contact,
        time: "",
      };
    case "ls":
      return {
        cmd,
        Component: HelpList,
        time: "",
      };
    case "neofetch":
      return {
        cmd,
        Component: Neofetch,
        time: "",
      };
    case "clear":
    case "cls":
      return {
        cmd,
        Component: null,
        action: "clear",
        time: "",
      };
    default:
      return {
        cmd,
        Component: NotFound,
        time: "",
      };
  }
}
