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
/* background: linear-gradient(0deg, rgba(239,239,239,1) 0%, rgba(255,255,255,1) 70%); */
/* background-repeat: no-repeat; */
overflow-y: ${(props: any) =>
  props.isModalOpen ? 'hidden' : 'visible'};


    overflow-x: hidden;
}
`;

const mapStateToProps = (state: RootStateTypes) => ({
  isModalOpen: state.openModal,
});

export default connect(mapStateToProps, null)(GlobalStyle);
