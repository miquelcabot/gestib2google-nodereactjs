import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class NavigationBar extends Component {
  componentDidMount() {
    $("#sidenavToggler").click(function(e) {
        e.preventDefault();
        $("body").toggleClass("sidenav-toggled");
        $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
        $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
      });
  }

  render() {
      return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <Link className="navbar-brand" to="/">GestIB to Google</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Inici">
                        <Link className="nav-link" id="homelink" to="/">
                        <i className="fa fa-fw fa-home"></i>
                        <span className="nav-link-text">Inici</span>
                        </Link>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Usuaris del domini">
                        <Link className="nav-link" id="usuarisdominilink" to="/usuarisdomini">
                        <i className="fa fa-fw fa-users"></i>
                        <span className="nav-link-text">Usuaris del domini</span>
                        </Link>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Exportar a un full de càlcul">
                        <Link className="nav-link" id="fullcalcullink" to="/fullcalcul">
                        <i className="fa fa-fw fa-table"></i>
                        <span className="nav-link-text">Exportar a un full de càlcul</span>
                        </Link>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Exportar a CSV">
                        <Link className="nav-link" id="csvlink" to="/csv">
                        <i className="fa fa-fw fa-file-text"></i>
                        <span className="nav-link-text">Exportar a CSV</span>
                        </Link>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Importar XML">
                        <Link className="nav-link" id="xmllink" to="/importarxml">
                        <i className="fa fa-fw fa-file-o"></i>
                        <span className="nav-link-text">Importar XML</span>
                        </Link>
                    </li>
                    </ul>
                    <ul className="navbar-nav sidenav-toggler">
                    <li className="nav-item">
                        <a className="nav-link text-center" id="sidenavToggler">
                        <i className="fa fa-fw fa-angle-left"></i>
                        </a>
                    </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                        <i className="fa fa-fw fa-sign-out"></i>Sortir</a>
                    </li>
                    </ul>
                </div>
            </nav>
      );
    }
}

export default NavigationBar;