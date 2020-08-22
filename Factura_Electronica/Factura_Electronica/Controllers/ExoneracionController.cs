﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http;
using System.Web.Http;
using System.Net.Http.Formatting;
using Factura_Electronica.Models;

namespace Factura_Electronica.Controllers
{
    public class ExoneracionController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form)
        {
            Exoneracion exoneracion = new Exoneracion();
            exoneracion.TipoDocumento1 = Convert.ToString(form.Get("TipoDocumento"));
            exoneracion.NumeroDocumento1 = Convert.ToString(form.Get("NumeroDocumento"));
            exoneracion.NombreInstitucion1 = Convert.ToString(form.Get("NombreInstitucion"));
            exoneracion.FechaEmision1 = Convert.ToDateTime(form.Get("FechaEmision"));
            exoneracion.PorcentajeExoneracion1 = Convert.ToInt32(form.Get("PorcentajeExoneracion"));
            exoneracion.MontoExoneracion1 = Convert.ToDecimal(form.Get("MontoExoneracion"));

            string[] respuesta = new string[2];
            respuesta[0] = exoneracion.Actualiza_Exoneracion();
            respuesta[1] = form.Get("NumeroDocumento");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            Exoneracion exoneracion = new Exoneracion();
            exoneracion.TipoDocumento1 = Convert.ToString(form.Get("TipoDocumento"));
            exoneracion.NumeroDocumento1 = Convert.ToString(form.Get("NumeroDocumento"));
            exoneracion.NombreInstitucion1 = Convert.ToString(form.Get("NombreInstitucion"));
            exoneracion.FechaEmision1 = Convert.ToDateTime(form.Get("FechaEmision"));
            exoneracion.PorcentajeExoneracion1 = Convert.ToInt32(form.Get("PorcentajeExoneracion"));
            exoneracion.MontoExoneracion1 = Convert.ToDecimal(form.Get("MontoExoneracion"));

            string[] respuesta = new string[2];
            respuesta[0] = exoneracion.Inserta_Exoneracion();
            respuesta[1] = form.Get("NumeroDocumento");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }
        [HttpPut]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
            Exoneracion exoneracion = new Exoneracion();
            exoneracion.TipoDocumento1 = Convert.ToString(form.Get("TipoDocumento"));
            exoneracion.NumeroDocumento1 = Convert.ToString(form.Get("NumeroDocumento"));
            
            string[] respuesta = new string[2];
            respuesta[0] = exoneracion.Elimina_Exoneracion();
            respuesta[1] = form.Get("NumeroDocumento");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

    }

}


