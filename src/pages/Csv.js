import React, { Component } from 'react';

class Csv extends Component {

    render() {
        return (
            <div id="csv">
                <div class="card mb-3" >
                    <div class="card-header">
                        <i class="fa fa-file-text"></i> Exportar a CSV</div>
                    <div class="card-body">
                        <form action="csv.php" method="GET">
                        <div class="form-group">
                        <label for="groupsusuarisdominicsv" class="col-sm-2 col-form-label">Grups</label>
                        <div class="col-sm-10">
                            <select class="form-control" id="groupsusuarisdominicsv" name="groupcsv">
                            <option value="">Tots</option>

                            </select>
                        </div>
                        </div>
                        <div class="form-group">
                        <div class="form-check">
                            <label class="form-check-label"> 
                            <input class="form-check-input" id="onlyteacherscsv" name="onlyteacherscsv" type="checkbox"/> Només professorat</label>
                        </div>
                        </div>
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

export default Csv;