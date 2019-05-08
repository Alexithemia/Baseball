import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {

  return (
    <div className="navigation">
      <Link to="/" className="serverless"><button>Serverless</button></Link>
      <Link to="/withredux" className="withRedux"><button>With Redux</button></Link>
      <Link to="/withserver" className="withServer"><button>With Server</button></Link>
    </div>
  );
}


export default Navigation;
