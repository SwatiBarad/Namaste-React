import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error-container">
      <h1>
        {err.status}📌{err.statusText}
      </h1>
      <img
        src="https://i.pinimg.com/originals/c8/ec/cf/c8eccf05f95f95a0283ee2fef07298dd.gif"
        alt="img not found"
      />
      <button className="take-me-home">
        <Link to="/">take me home</Link>
      </button>
    </div>
  );
};
export default Error;
