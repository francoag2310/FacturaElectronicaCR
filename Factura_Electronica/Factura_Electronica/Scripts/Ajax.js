﻿        const ruta = "https://localhost:44314/api/";
        var i = 0;
        function desabilitaGuardar() {
            document.getElementById('GuardarBtn').disabled = true;
}
        function habilitaGuardar() {
            document.getElementById('GuardarBtn').disabled = false;
        }
        function mover() {
            if (i == 0) {
                i = 1;
                var elem = document.getElementById("myBar");
                elem.style.visibility = "visible";
                var width = 1;
                var id = setInterval(frame, 10);
                function frame() {
                    if (width >= 100) {
                        clearInterval(id); 
                        i = 0;
                        elem.style.visibility = "hidden";
                    } else {
                        width++;
                        elem.style.width = width + "%";
                    }
                }
            }
    }
        function cargaNavBar() {
                var navBar = "";
                navBar +=
                            `
                 <nav class="navbar fixed-top navbar-expand-lg navbar-light ">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="Index.html">Inicio</a>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="ulMenu navbar-nav mr-auto mt-2 mt-lg-2">

                            <li class="liMenu nav-item">
                                <span class="material-icons spanMenu">place</span>
                                <a href="Ubicacion.html" class="aMenu"  id="UB">Ubicacion</a>
                            </li>
                            <li class="liMenu nav-item" id="CTM">
                                <span class="material-icons spanMenu">monetization_on</span>
                                <a href="CodigoTipoMoneda.html" class="aMenu">Tipo Moneda</a>
                            </li>  

                            <li class="liMenu nav-item" id="DES">
                                <span class="material-icons spanMenu">redeem</span>
                                <a href="Descuento.html" class="aMenu">Descuento</a>
                            </li>

                            <li class="liMenu nav-item" id="FAX">
                                <span class="material-icons spanMenu">print</span>
                                <a href="Fax.html" class="aMenu">Fax</a>
                            </li>

                            <li class="liMenu nav-item" id="EXO">
                                <span class="material-icons spanMenu">done</span>
                                <a href="Exoneracion.html" class="aMenu">Exoneración</a>
                            </li>


                            <li class=" liMenu nav-item" id="IDR">
                                <span class="material-icons spanMenu">contact_mail</span>
                                <a href="IdentificacionReceptor.html" class="aMenu">Id Receptor</a>
                            </li>

                            <li class=" liMenu nav-item" id="IDE">
                                <span class="material-icons spanMenu">contact_phone</span>
                                <a href="IdentificacionEmisor.html" class="aMenu">Id Emisor</a>
                            </li>

                            <li class=" liMenu nav-item" id="TEL">
                                <span class="material-icons spanMenu">phone</span>
                                <a href="Telefono.html" class="aMenu">Teléfono</a>
                            </li>

                            <li class=" liMenu nav-item" id="TD">
                                <span class="material-icons spanMenu">article</span>
                                <a href="TipoDocumento.html" class="aMenu">Tipo Documento</a>
                            </li>

                            <li class=" liMenu nav-item" id="CC">
                                <span class="material-icons spanMenu">vpn_key</span>
                                <a href="CodigoComercial.html" class="aMenu">Código Comercial</a>
                            </li>
                        </ul>     
                    </div>
                </nav>
                 `
                //var script = $('body');
              // script += `  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>`;
                var vectorCargar = [navBar];
                return vectorCargar;
}
        function eliminaValores() {
            var x = document.getElementById("formContainer").querySelectorAll(".form-control");
            for (var i = 0; i < x.length; i++) {
                x[i].value = "";
            }
}
        function botones() {
        document.getElementById('btnGroup').innerHTML+=
            `
                    <input class="btn  btn-outline-success" type="button" id="GuardarBtn" value="Guardar" />
                    <input class="btn  btn-outline-warning" type="button" id="ModificaBtn" value="Modificar" />
                    <input class="btn  btn-outline-danger" type="button" id="EliminarBtn" value="Eliminar" />
                    <input class="btn  btn-light" type="button" id="EliminarBtn" value="Eliminar Campos" />
            `
            }

    /////////////////////////////////////////////////////////////////////////////////////////
        var Ubicacion = new Object;
        Ubicacion.idUbicacion = "";
        Ubicacion.Provincia = "";
        Ubicacion.Canton =   "";
        Ubicacion.Distrito = "";
        Ubicacion.Barrio = "";
        Ubicacion.otrasSenas = "";
       function guardarUbicacion(Ubicacion) {
                            $.ajax({
                                url: ruta + "Ubicacion",  
                                type: 'PUT',
                                dataType: 'json',
                                data:Ubicacion,
                                success: function (data, textStatus, xhr) {                             
                                    eliminaValores();
                                    mover();
                                    setTimeout(function () { alert(data[0]); }, 1500);
                                },
                                error: function (xhr, textStatus, erroThrown) {                     
                                    alert(xhr);
                                }
                            })
                        }
       function eliminarUbicacion(Ubicacion) {
                        $.ajax({
                            url: ruta + "Ubicacion",
                            type: 'DELETE',
                            dataType: 'json',
                            data: Ubicacion,
                            success: function (data, textStatus, xhr) {
                                mover();
                                eliminaValores();
                                setTimeout(function () { alert(data[0]); }, 1500);
                            },
                            error: function (xhr, textStatus, erroThrown) {
                                alert(xhr);
                            }
                        })
    }
       function modificarUbicacion(Ubicacion){
                            $.ajax({
                                url: ruta + "Ubicacion",
                                type: 'POST',
                                dataType: 'json',
                                data: Ubicacion,
                                success: function (data, textStatus, xhr) {
                                    mover();
                                    eliminaValores();
                                    setTimeout(function () { alert(data[0]); }, 1500);
                                    habilitaGuardar(); 
                                },
                                error: function (xhr, textStatus, erroThrown) {
                                    alert(xhr);
                                }
                            })
    }
       function cargarUbicacion() {
           var tabla = document.getElementById('tabla');
           $.ajax({
               url: ruta + 'Ubicacion',
               type: 'GET',
               dataType: 'json',
               data: Ubicacion,
               success: function (data, textStatus, xhr) {
                   if (data.length > 0) {
                       tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`;
                       var filacabezaTabla = document.getElementById('filacabezaTabla');
                       filacabezaTabla.innerHTML +=
                           `
                            <th scope="col">Id Ubicación</th>
                            <th scope="col">Provincia</th>
                            <th scope="col">Canton</th>
                            <th scope="col">Distrito</th>
                            <th scope="col">Barrio</th>
                            <th scope="col">Otras Senas</th>  
                           `;
                       tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`;
                       for (var z in data) {
                           var objetoSerializado = JSON.stringify(data[i]);
                           var objetoSerializadoComillas = "";
                           for (var j in objetoSerializado) {
                               objetoSerializadoComillas += objetoSerializado[j].replace('"', "'");
                           }
                           console.log(data[z]);
                           document.getElementById('cuerpoTabla').innerHTML += `
                            <tr>
                              <td>${data[z].IdUbicacion1}</td>
                              <td>${data[z].Provincia1}</td>
                              <td>${data[z].Distrito1}</td>
                              <td>${data[z].Canton1}</td>
                              <td>${data[z].Barrio1}</td>
                              <td>${data[z].OtrasSenas1}</td>
                              <td><input class="btn  btn-warning" type="button" value="Modificar" onclick="cargaDatosFormulario(${objetoSerializadoComillas})" /></td>
                              <td><input class="btn  btn-danger" type="button"  value="Eliminar" onclick="verificaEliminar(${data[z].IdUbicacion1})"/></td>
                           </tr>
                       `;
                       }
                   }
    
               },
               error: function (xhr, textStatus, errorThrown) {
                   alert(xhr);
               }
           });
        }
    /////////////////////////////////////////////////////////////////////////////////////////
        var Descuento = new Object;
        Descuento.montoDescuento = "";
        Descuento.naturalezaDescuento = "";
        function guardarDescuento(Descuento) {
                    $.ajax({
                        url: ruta + 'Descuento',
                        type: 'PUT',
                        dataType: 'json',
                        data: Descuento,
                        success: function (data, textStatus, xhr) {
                            mover();
                            eliminaValores();
                            setTimeout(function () { alert(data[0]); }, 1500);
                        },
                        error: function (xhr, textStatus, errorThrown) {
                            alert(xhr);
                        }

                    });
                }
        function eliminarDescuento(Descuento) {
                $.ajax({
                    url: ruta + 'Descuento',
                    type: 'DELETE',
                    dataType: 'json',
                    data: Descuento,
                    success: function (data, textStatus, xhr) {
                        mover();
                        eliminaValores();
                        setTimeout(function () { alert(data[0]); }, 1500);
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        alert(xhr);
                    }

                });
            }
    //////////////////////////////////////////////////////////////////////////////////////////
        var Exoneracion = new Object;
        Exoneracion.tipoDocumento = "";
        Exoneracion.numeroDocumento = "";
        Exoneracion.nombreInstitucion = "";
        Exoneracion.fechaEmision = "";
        Exoneracion.porcentajeExoneracion = "";
        Exoneracion.montoExoneracion = "";
        function guardarExoneracion(Exoneracion) {
            $.ajax({
                url: ruta + "Exoneracion",
                type: 'PUT',
                dataType: 'json',
                data: Exoneracion,
                success: function (data, textStatus, xhr) {
                    alert(data[0]);
                    eliminaValores();
                    console.log(Exoneracion);
                },
                error: function (xhr, textStatus, erroThrown) {

                    alert(xhr);
                }
            })
        }
        function eliminarExoneracion(Exoneracion) {
                $.ajax({
                    url: ruta + 'Descuento',
                    type: 'DELETE',
                    dataType: 'json',
                    data: Exoneracion,
                    success: function (data, textStatus, xhr) {
                        alert(data[0]);
                        eliminaValores();
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        alert(xhr);
                    }

                });
            }
        function actualizarExoneracion(Exoneracion) {
                $.ajax({
                    url: ruta + 'Descuento',
                    type: 'POST',
                    dataType: 'json',
                    data: Exoneracion,
                    success: function (data, textStatus, xhr) {
                        alert(data[0]);
                        eliminaValores();
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        alert(xhr);
                    }

                });
    }
    ///////////////////////////////////////////////////////////////////////////////////////////
        var Fax = new Object;
        Fax.numFax = "";
        Fax.codigoPais = "";
        function guardarFax(Fax) {
            $.ajax({
                url: ruta + "Fax",
                type: 'PUT',
                dataType: 'json',
                data: Fax,
                success: function (data, textStatus, xhr) {
                    mover();
                    eliminaValores();
                    setTimeout(function () { alert(data[0]); }, 1500);
               
                },
                error: function (xhr, textStatus, erroThrown) {

                    alert(xhr);
                }
            })
        }
        function eliminarFax(Fax) {
            $.ajax({
                url: ruta + "Fax",
                type: 'DELETE',
                dataType: 'json',
                data: Fax,
                success: function (data, textStatus, xhr) {
                    mover();
                    eliminaValores();
                    setTimeout(function () { alert(data[0]); }, 1500);

                },
                error: function (xhr, textStatus, erroThrown) {
                    alert(xhr);
                }
            })
        }
        function modificarFax(Fax) {
        $.ajax({
            url: ruta + "Fax",
            type: 'POST',
            dataType: 'json',
            data: Fax,
            success: function (data, textStatus, xhr) {
                mover();
                eliminaValores();
                setTimeout(function () { alert(data[0]); }, 1500);
            },
            error: function (xhr, textStatus, erroThrown) {
                alert(xhr);
            }
        })
    }
    /////////////////////////////////////////////////////////////////////////////////////////
        var CTM = new Object;
        CTM.codigoMoneda = "";
        CTM.tipoCambio = "";
        function guardarCTM(CTM) {
                $.ajax({
                    url: ruta + "CodigoTipoMoneda",
                    type: 'PUT',
                    dataType: 'json',
                    data: CTM,
                    success: function (data, textStatus, xhr) {
                        mover();
                        eliminaValores();
                        setTimeout(function () { alert(data[0]); }, 1500);

                    },
                    error: function (xhr, textStatus, erroThrown) {

                        alert(xhr);
                    }
                })
            }
        function eliminarCTM(CTM) {
                $.ajax({
                    url: ruta + "CodigoTipoMoneda",
                    type: 'DELETE',
                    dataType: 'json',
                    data: CTM,
                    success: function (data, textStatus, xhr) {
                        mover();
                        eliminaValores();
                        setTimeout(function () { alert(data[0]); }, 1500);
                    },
                    error: function (xhr, textStatus, erroThrown) {
                        alert(xhr);
                    }
                })
            }
        function modificarCTM(CTM) {
                $.ajax({
                    url: ruta + "CodigoTipoMoneda",
                    type: 'POST',
                    dataType: 'json',
                    data: CTM,
                    success: function (data, textStatus, xhr) {
                        mover();
                        eliminaValores();
                        setTimeout(function () { alert(data[0]); }, 1500);
                    },
                    error: function (xhr, textStatus, erroThrown) {
                        alert(xhr);
                    }
                })
    }
    /////////////////////////////////////////////////////////////////////////////////////////
        var idEmisor = new Object;
        idEmisor.identificacionEmisor = "";
        idEmisor.tipo = "";
        function guardaridEmisor(idEmisor) {
                $.ajax({
                    url: ruta + "IdentificacionEmisor",
                    type: 'PUT',
                    dataType: 'json',
                    data: idEmisor,
                    success: function (data, textStatus, xhr) {
                        mover();
                        eliminaValores();
                        setTimeout(function () { alert(data[0]); }, 1500);

                    },
                    error: function (xhr, textStatus, erroThrown) {

                        alert(xhr);
                    }
                })
            }
        function eliminaridEmisor(idEmisor) {
                    $.ajax({
                        url: ruta + "IdentificacionEmisor",
                        type: 'DELETE',
                        dataType: 'json',
                        data: idEmisor,
                        success: function (data, textStatus, xhr) {
                            mover();
                            eliminaValores();
                            setTimeout(function () { alert(data[0]); }, 1500);

                        },
                        error: function (xhr, textStatus, erroThrown) {
                            alert(xhr);
                        }
                    })
                }
        function modificaridEmisor(idEmisor) {
                    $.ajax({
                        url: ruta + "IdentificacionEmisor",
                        type: 'POST',
                        dataType: 'json',
                        data: idEmisor,
                        success: function (data, textStatus, xhr) {
                            mover();
                            eliminaValores();
                            setTimeout(function () { alert(data[0]); }, 1500);

                        },
                        error: function (xhr, textStatus, erroThrown) {
                            alert(xhr);
                        }
                    })
    }
    /////////////////////////////////////////////////////////////////////////////////////////
        var idReceptor = new Object;
        idReceptor.identificacionReceptor = "";
        idReceptor.tipo = "";
        function guardaridReceptor(idReceptor) {
            $.ajax({
                url: ruta + "IdentificacionReceptor",
                type: 'PUT',
                dataType: 'json',
                data: idReceptor,
                success: function (data, textStatus, xhr) {
                    mover();
                    eliminaValores();
                    setTimeout(function () { alert(data[0]); }, 1500);

                },
                error: function (xhr, textStatus, erroThrown) {

                    alert(xhr);
                }
            })
        }
        function eliminaridReceptor(idReceptor) {
                $.ajax({
                    url: ruta + "IdentificacionReceptor",
                    type: 'DELETE',
                    dataType: 'json',
                    data: idReceptor,
                    success: function (data, textStatus, xhr) {
                        mover();
                        eliminaValores();
                        setTimeout(function () { alert(data[0]); }, 1500);

                    },
                    error: function (xhr, textStatus, erroThrown) {
                        alert(xhr);
                    }
                })
            }
        function modificaridReceptor(idReceptor) {
                $.ajax({
                    url: ruta + "IdentificacionReceptor",
                    type: 'POST',
                    dataType: 'json',
                    data: idReceptor,
                    success: function (data, textStatus, xhr) {
                        mover();
                        eliminaValores();
                        setTimeout(function () { alert(data[0]); }, 1500);

                    },
                    error: function (xhr, textStatus, erroThrown) {
                        alert(xhr);
                    }
                })
            }
    /////////////////////////////////////////////////////////////////////////////////////////
        var Telefono = new Object;
        Telefono.numTelefono = "";
        Telefono.codigoPais = "";
        function guardarTelefono(Telefono) {
                    $.ajax({
                        url: ruta + "Telefono",
                        type: 'PUT',
                        dataType: 'json',
                        data: Telefono,
                        success: function (data, textStatus, xhr) {
                            mover();
                            eliminaValores();
                            setTimeout(function () { alert(data[0]); }, 1500);

                        },
                        error: function (xhr, textStatus, erroThrown) {

                            alert(xhr);
                        }
                    })
                }
        function eliminarTelefono(Telefono) {
                    $.ajax({
                        url: ruta + "Telefono",
                        type: 'DELETE',
                        dataType: 'json',
                        data: Telefono,
                        success: function (data, textStatus, xhr) {
                            mover();
                            eliminaValores();
                            setTimeout(function () { alert(data[0]); }, 1500);

                        },
                        error: function (xhr, textStatus, erroThrown) {
                            alert(xhr);
                        }
                    })
                }
        function modificarTelefono(Telefono) {
                    $.ajax({
                        url: ruta + "Telefono",
                        type: 'POST',
                        dataType: 'json',
                        data: Telefono,
                        success: function (data, textStatus, xhr) {
                            mover();
                            eliminaValores();
                            setTimeout(function () { alert(data[0]); }, 1500);
                        },
                        error: function (xhr, textStatus, erroThrown) {
                            alert(xhr);
                        }
                    })
                }
    /////////////////////////////////////////////////////////////////////////////////////////
        var codComercial = new Object;
        codComercial.codigo = "";
        codComercial.tipo = "";
        function guardarcodComercial(codComercial) {
                        $.ajax({
                            url: ruta + "CodigoComercial",
                            type: 'PUT',
                            dataType: 'json',
                            data: codComercial,
                            success: function (data, textStatus, xhr) {
                                mover();
                                eliminaValores();
                                setTimeout(function () { alert(data[0]); }, 1500);

                            },
                            error: function (xhr, textStatus, erroThrown) {

                                alert(xhr);
                            }
                        })
                    }
        function eliminarcodComercial(codComercial) {
                    $.ajax({
                        url: ruta + "CodigoComercial",
                        type: 'DELETE',
                        dataType: 'json',
                        data: codComercial,
                        success: function (data, textStatus, xhr) {
                            mover();
                            eliminaValores();
                            setTimeout(function () { alert(data[0]); }, 1500);

                        },
                        error: function (xhr, textStatus, erroThrown) {

                            alert(xhr);
                        }
                    })
    }
    /////////////////////////////////////////////////////////////////////////////////////////
        var TD = new Object;
        TD.numeroIdentidadTercero = "";
        TD.tipoDocumento = "";
        function guardarTD(TD) {
                $.ajax({
                    url: ruta + "TipoDocumento",
                    type: 'PUT',
                    dataType: 'json',
                    data: TD,
                    success: function (data, textStatus, xhr) {
                        mover();
                        eliminaValores();
                        setTimeout(function () { alert(data[0]); }, 1500);

                    },
                    error: function (xhr, textStatus, erroThrown) {

                        alert(xhr);
                    }
                })
            }
        function eliminarTD(TD) {
                $.ajax({
                    url: ruta + "TipoDocumento",
                    type: 'DELETE',
                    dataType: 'json',
                    data: TD,
                    success: function (data, textStatus, xhr) {
                        mover();
                        eliminaValores();
                        setTimeout(function () { alert(data[0]); }, 1500);

                    },
                    error: function (xhr, textStatus, erroThrown) {

                        alert(xhr);
                    }
                })
    }
    /////////////////////////////////////////////////////////////////////////////////////////