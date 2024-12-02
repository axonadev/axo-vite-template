import { Box } from "@mui/system";

const Spinner = () => {
  return (
    <Box
      sx={{
        width: "50px",
        height: "50px",
        border: "8px solid #000",
        borderColor: "secondary.main",
        borderTop: "8px solid",
        borderTopColor: "primary.main",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        "@keyframes spin": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      }}
    />
  );
};
export default Spinner;
