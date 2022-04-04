import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './CustomLink.css'

function CustomLink({ children, to, ...props }) {
    // console.log(children,to,props)
      let resolved = useResolvedPath(to);
      let match = useMatch({ path: resolved.pathname, end: true });
    
      return (
        <div className="customLink">
          <Link
            style={{color: match? 'red':'black', textDecoration: match ? "underline" : "none" }}
            to={to}
            {...props}
          >
            {children}
          </Link>
          {/* {match && " (active)"} */}
        </div>
      );
    }
  export default CustomLink;