import About from "../components/commands/About";
import Bio from "../components/commands/Bio";
import Contact from "../components/commands/Contact";
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
    default:
      return {
        cmd,
        Component: NotFound,
        time: "",
      };
  }
}
