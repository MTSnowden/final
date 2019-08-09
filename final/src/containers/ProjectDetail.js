import { connect } from "react-redux";
import ProjectDetail from "../components/ProjectDetail";

const mapStateToProps = state => ({ projects: state.projects });

export default connect(mapStateToProps)(ProjectDetail);