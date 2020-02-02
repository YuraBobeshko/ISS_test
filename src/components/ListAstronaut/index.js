import { connect } from "react-redux";

import ListAstronaut from "./ListAstronaut";
import { loadData } from "../../store/actions";

function mapState2Props(state) {
  return {
    errorListAstronaut: state.errorListAstronaut,
    listAstronaut: state.listAstronaut
  };
}

const mapDispatch2Props = {
  loadData
};

const Enhanced = connect(
  mapState2Props, 
  mapDispatch2Props,
  )(ListAstronaut);

export { Enhanced as ListAstronaut };
