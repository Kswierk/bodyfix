import { createGlobalStyle } from 'styled-components';
import { RootStateTypes } from '../reducers/rootReducer';
import { connect } from 'react-redux';

// interface Props {
//   isModalOpen: boolean;
// }

const GlobalStyle = createGlobalStyle`
    *{
      font-family: 'Montserrat', sans-serif;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

   html{
     scroll-behavior: smooth;
   }
  ;


body{
overflow-y: ${(props: any) =>
  props.isModalOpen ? 'hidden' : 'visible'};
    overflow-x: hidden;
}
`;

const mapStateToProps = (state: RootStateTypes) => ({
  isModalOpen: state.openModal,
});

export default connect(mapStateToProps, null)(GlobalStyle);
