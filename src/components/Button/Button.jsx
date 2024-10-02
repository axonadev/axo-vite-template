const Button = ({ children, onClick = () => {} }) => {
  const onClickhandler = () => {
    onClick();
  };

  return (
    <>
      <button onClick={onClickhandler}>{children}</button>
    </>
  );
};
export default Button;
