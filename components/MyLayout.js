import styled from 'styled-components';
import Header from './Header';

const Div = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
`;

const Layout = (props) => (
  <Div>
    <Header />
    {props.children}
  </Div>
);

export default Layout;
