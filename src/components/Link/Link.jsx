import { Link as LinkReact } from "react-router-dom";
import Colors from "@infra/Colors";

const Link = ({ text, route }) => {
  return (
    <LinkReact to={route} style={{ color: Colors.main_blue }}>
      {text}
    </LinkReact>
  );
};

export default Link;
