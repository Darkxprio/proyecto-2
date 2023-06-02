import { Link } from "react-router-dom";

function Url3({ children, to, disabled }) {
  if (disabled) {
    return null;
  } else {
    return <Link to={to}>{children}</Link>;
  }
}

export default Url3;
