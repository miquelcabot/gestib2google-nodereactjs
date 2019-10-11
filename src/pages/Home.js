import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div id="taulainici" class="card mb-3">
                <div class="card-header">
                    <i class="fa fa-home"></i> Inici</div>
                <div class="card-body">
                    <p>Benvingut al programa d'importació de dades del GestIB al domini de Google.</p>
                    <p>El fitxer XML amb les dades del professorat/alumnat s'ha de descarregar del <a href="https://www3.caib.es/xestib/">GestIB</a>, de l'opció de menú "Alumnat --> Exportació dades SGD".</p>
                    <p>S'actualitzaran les dades del professorat i l'alumnat del domini Google <strong>DOMAIN</strong>.</p>
                    <p>Només s'actualitzaran els usuaris del domini que estiguin a les unitats organitzatives <strong>"/"</strong>, <strong>"TEACHERS_ORGANIZATIONAL_UNIT"</strong> i <strong>"STUDENTS_ORGANIZATIONAL_UNIT"</strong> i tenguin un Employee_ID.</p>
                    <p>Els nous usuaris es crearan amb el password per defecte <strong>"DEFAULT_PASSWORD"</strong> i l'hauran de canviar el primer pic que entrin.</p>
                </div>
            </div>
        );
    }
}

export default Home;