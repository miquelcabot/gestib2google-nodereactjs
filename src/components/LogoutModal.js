import React, { Component } from 'react';

class LogoutModal extends Component {
  render() {
      return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Realment vol sortir?</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">Pitgi "Sortir" si vol finalitzar la sessió actual.</div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel·lar</button>
                        <a className="btn btn-primary" href="logout">Sortir</a>
                    </div>
                    </div>
                </div>
            </div>
      );
    }
}

export default LogoutModal;