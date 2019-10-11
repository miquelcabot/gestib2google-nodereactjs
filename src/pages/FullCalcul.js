import React, { Component } from 'react';

class FullCalcul extends Component {

    render() {
        return (
            <div id="fullcalcul">
                <div class="card mb-3" >
                    <div class="card-header">
                        <i class="fa fa-table"></i> Exportar a un full de càlcul</div>
                    <div class="card-body">
                        <form action="spreadsheet.php" method="GET">
                        
                            <div class="form-group">
                                <input type="submit" value="Exportar"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FullCalcul;