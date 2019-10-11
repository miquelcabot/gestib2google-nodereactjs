import React, { Component } from 'react';

class NavigationBar extends Component {
  render() {
      return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <a class="navbar-brand" href="index.html">GestIB to Google</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
                    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Inici">
                        <a class="nav-link" id="homelink">
                        <i class="fa fa-fw fa-home"></i>
                        <span class="nav-link-text">Inici</span>
                        </a>
                    </li>
                    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Usuaris del domini">
                        <a class="nav-link" id="usuarisdominilink">
                        <i class="fa fa-fw fa-users"></i>
                        <span class="nav-link-text">Usuaris del domini</span>
                        </a>
                    </li>
                    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Exportar a un full de càlcul">
                        <a class="nav-link" id="fullcalcullink">
                        <i class="fa fa-fw fa-table"></i>
                        <span class="nav-link-text">Exportar a un full de càlcul</span>
                        </a>
                    </li>
                    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Exportar a CSV">
                        <a class="nav-link" id="csvlink">
                        <i class="fa fa-fw fa-file-text"></i>
                        <span class="nav-link-text">Exportar a CSV</span>
                        </a>
                    </li>
                    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Importar XML">
                        <a class="nav-link" id="xmllink">
                        <i class="fa fa-fw fa-file-o"></i>
                        <span class="nav-link-text">Importar XML</span>
                        </a>
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