import PropTypes from "prop-types";  // Import do propTypes para validação 
import "../Sidebar/Sidebar.css";


const Sidebar = ( {sidebarOpen} ) => {
  return (
    
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <p>Logo</p>
      </div>
  );
};
  Sidebar.propTypes = {
    sidebarOpen: PropTypes.bool.isRequired, // Valida se sidebarOpen é booleano e obrigatório
};
export default Sidebar