import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページ</h1>
      <Link to="/page2/999">Url Parameter</Link>
      <br />
      <Link to="/page2/999?name=hoge">Query Parameter</Link>
    </div>
  );
};
