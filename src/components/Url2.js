import { Link } from "react-router-dom";

function Url2({ children, to }) {
  return <Link to={to}>{children}</Link>;
}

export default Url2;
