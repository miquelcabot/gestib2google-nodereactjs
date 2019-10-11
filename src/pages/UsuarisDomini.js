import React, { Component } from 'react';

class UsuarisDomini extends Component {

    render() {
        return (
            <div id="usuarisdomini">
                <div class="card mb-3" >
                    <div class="card-header">
                    <i class="fa fa-users"></i> Mostrar usuaris del domini</div>
                    <div class="card-body">
                    <form action="showusers.php" method="GET">
                    <div class="form-group">
                        <label for="groupsusuarisdomini" class="col-sm-2 col-form-label">Grups</label>
                        <div class="col-sm-10">
                        <select class="form-control" id="groupsusuarisdomini" name="group">
                            <option value="">Tots</option>
        
                        </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-check">
                            <label class="form-check-label"> 
                            <input class="form-check-input" id="onlyteachers" name="onlyteachers" type="checkbox"/> Només professorat</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <label class="form-check-label"> 
                            <input class="form-check-input" id="onlyactive" name="onlyactive" type="checkbox"/> Només usuaris actius</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <label class="form-check-label"> 
                            <input class="form-check-input" id="onlywithoutcode" name="onlywithoutcode" type="checkbox"/> Només els usuaris sense ID
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <label class="form-check-label">
                            <input class="form-check-input" id="onlynotsession" name="onlynotsession" type="checkbox"/> Només els usuaris que no han iniciat mai sessió
                            </label>
                        </div>
                    </div>  
                    <div class="form-group">
                        <div class="form-check">
                            <label class="form-check-label">
                            <input class="form-check-input" id="onlywithoutorgunit" name="onlywithoutorgunit" type="checkbox"/> Només els usuaris de la Unitat Organitzativa principal (/)
                            </label>
                        </div>
                        </div>
                    <div class="form-group">
                        <input type="submit" value="Mostrar"/>
                    </div>
                    </form>
                    </div>
                </div>
                </div>
        );
    }
}

export default UsuarisDomini;