import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Button as MtButton } from "@mantine/core";

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
        <MtButton
          onClick={() => {
            naviga("/login");
          }}
        >
          cla
        </MtButton>
      </div>
    </>
  );
};
export default Homepage;
