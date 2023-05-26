import {Link} from 'react-router-dom';

function Url({children, to}) {
    return (
        <Link to={to}>
            {children}
        </Link>
    );
  }
  
export default Url;