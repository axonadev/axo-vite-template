import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const Homepage = () => {
  const naviga = useNavigate();
  return (
    <>
      <div>HOMEPAGE</div>
      <div>
        <button
          onClick={() => {
            naviga("/login");
          }}
        >
          login
        </button>
        <Button
          onClick={() => {
            naviga("/login");
          }}
        >
          clicca
        </Button>
      </div>
    </>
  );
};
export default Homepage;
