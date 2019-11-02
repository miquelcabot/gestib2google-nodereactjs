import React, { Component } from 'react';

class ImportarXml extends Component {

    render() {
        return (
            <div id="importarxml">
            <div className="card mb-3" >
              <div className="card-header">
                <i className="fa fa-file-o"></i> Importar fitxer XML de GestIB</div>
              <div className="card-body">
                <form action="importgestib.php" method="POST" encType="multipart/form-data">
                  <div className="form-group">
                    <label htmlFor="xmlfile">Fitxer XML de GestIB</label>
                    <input className="form-control" id="xmlfile" name="xmlfile" type="file" placeholder="File" required="required"/>
                  </div>
                 {/* <div className="form-group">
                    <label htmlFor="domain">Domini</label>
                    <input className="form-control" id="domain" name="domain" type="text" placeholder="Domini" value="iesemilidarder.com"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="tutorsgroup">Nom del grup de tutors</label>
                    <input className="form-control" id="tutorsgroup" name="tutorsgroup" type="text" placeholder="Grup tutors" value="tutors"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="teachersgroup">Prefix dels grups de professors</label>
                    <input className="form-control" id="teachersgroup" name="teachersgroup" type="text" placeholder="Prefix" value="ee."/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentsgroup">Prefix dels grups d'alumnes</label>
                    <input className="form-control" id="studentsgroup" name="studentsgroup" type="text" placeholder="Prefix" value="alumnat."/>
                  </div> */}
                  <div className="form-group">
                    <label htmlFor="groupstaulausuaris" className="col-sm-2 col-form-label">Grups</label>
                    <div className="col-sm-10">
                      <select className="form-control" id="groupstaulausuaris" name="group">
                        <option value="">Tots</option>
       
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <label className="form-check-label"> 
                      <input className="form-check-input" id="onlyteachers" name="onlyteachers" type="checkbox"/> Només professorat</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <label className="form-check-label"> 
                      <input className="form-check-input" id="apply" name="apply" type="checkbox"/> Aplicar canvis</label>
                    </div>
                  </div>
                  <input type="submit" value="Importar"/>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default ImportarXml;