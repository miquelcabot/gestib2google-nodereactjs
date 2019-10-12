import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  render() {
      return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <Link className="navbar-brand" to="/">GestIB to Google</Link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
                    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Inici">
                        <Link className="nav-link" id="homelink" to="/">
                        <i class="fa fa-fw fa-home"></i>
                        <span class="nav-link-text">Inici</span>
                        </Link>
                    </li>
                    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Usuaris del domini">
                        <Link className="nav-link" id="usuarisdominilink" to="/usuarisdomini">
                        <i class="fa fa-fw fa-users"></i>
                        <span class="nav-link-text">Usuaris del domini</span>
                        </Link>
                    </li>
                    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Exportar a un full de càlcul">
                        <Link className="nav-link" id="fullcalcullink" to="/fullcalcul">
                        <i class="fa fa-fw fa-table"></i>
                        <span class="nav-link-text">Exportar a un full de càlcul</span>
                        </Link>
                    </li>
                    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Exportar a CSV">
                        <Link className="nav-link" id="csvlink" to="/csv">
                        <i class="fa fa-fw fa-file-text"></i>
                        <span class="nav-link-text">Exportar a CSV</span>
                        </Link>
                    </li>
                    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Importar XML">
                        <Link className="nav-link" id="xmllink" to="/importarxml">
                        <i class="fa fa-fw fa-file-o"></i>
                        <span class="nav-link-text">Importar XML</span>
                        </Link>
                    </li>
                    </ul>
                    <ul class="navbar-nav sidenav-toggler">
                    <li class="nav-item">
                        <a class="nav-link text-center" id="sidenavToggler">
                        <i class="fa fa-fw fa-angle-left"></i>
                        </a>
                    </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
                        <i class="fa fa-fw fa-sign-out"></i>Sortir</a>
                    </li>
                    </ul>
                </div>
            </nav>
      );
    }
}

export default NavigationBar;