const Layout = (props) => {
  return (
    <>
      <header></header>
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
