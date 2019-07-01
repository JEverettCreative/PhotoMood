import React, { Component } from "react";
import PropTypes from "prop-types";
// import ReactDOM from "react-dom";

// const ModalCore = (
//     <div className="modal" tabIndex="-1" role="dialog">
//         <div className="modal-dialog" role="document">
//             {/* Replace content level down with components after test */}
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <h4 className="modal-title">Test</h4>
//                 </div>
//                 <div className="modal-body">
//                     <p>Just testing the core functionality</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// )

class Modal extends Component {
    render() {
        if (!this.props.showModal) {
            return null;
        } else {
            return (
        <div>{this.props.children}</div>
        )
        }
    }
}


// function Modal(props) {
//     return ReactDOM.createPortal(ModalCore, document.querySelector("#modal"));
// }
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };

export default Modal;