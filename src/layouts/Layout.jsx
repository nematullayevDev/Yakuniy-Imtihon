import Footer from "../components/Footer";
import LeftSitebar from "../components/LeftSitebar";
import RightSitebar from "../components/RightSitebar";
import styled from "@emotion/styled";

function Layout({ children }) {
  const LayoutWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;

  return (
    <LayoutWrapper className="">
      <LeftSitebar />
      {children}
      <RightSitebar />
    </LayoutWrapper>
  );
}

export default Layout;
