﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class Exoneracion
    {
        private string TipoDocumento;
        private string NumeroDocumento;
        private string NombreInstitucion;
        private DateTime FechaEmision;
        private int PorcentajeExoneracion;
        private double MontoExoneracion;

        public string TipoDocumento1 { get => TipoDocumento; set => TipoDocumento = value; }
        public string NumeroDocumento1 { get => NumeroDocumento; set => NumeroDocumento = value; }
        public string NombreInstitucion1 { get => NombreInstitucion; set => NombreInstitucion = value; }
        public DateTime FechaEmision1 { get => FechaEmision; set => FechaEmision = value; }
        public int PorcentajeExoneracion1 { get => PorcentajeExoneracion; set => PorcentajeExoneracion = value; }
        public double MontoExoneracion1 { get => MontoExoneracion; set => MontoExoneracion = value; }

        public string Actualiza_Exoneracion()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();

            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC U_EXONERACION ?,?,?,?,?,?";
                    objeto_conexion.nueva_consulta(query); 
                    objeto_conexion.nuevo_parametro(TipoDocumento1, "string");
                    objeto_conexion.nuevo_parametro(NumeroDocumento1, "string");
                    objeto_conexion.nuevo_parametro(NombreInstitucion1, "string");
                    objeto_conexion.nuevo_parametro(FechaEmision1, "date");
                    objeto_conexion.nuevo_parametro(PorcentajeExoneracion1, "int");
                    objeto_conexion.nuevo_parametro(MontoExoneracion1, "decimal");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Exoneración Actualizada con el Número de Documento: "+ NumeroDocumento1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Elimina_Exoneracion()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();

            try
            {
                if (objeto_conexion.activaBD()) 
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC D_EXONERACION ?,?"; 
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(TipoDocumento1, "string");
                    objeto_conexion.nuevo_parametro(NumeroDocumento1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Exoneración Eliminada con el Número de Documento: " + NumeroDocumento1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Inserta_Exoneracion()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();

            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC I_EXONERACION ?,?,?,?,?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(TipoDocumento1, "string");
                    objeto_conexion.nuevo_parametro(NumeroDocumento1, "string");
                    objeto_conexion.nuevo_parametro(NombreInstitucion1, "string");
                    objeto_conexion.nuevo_parametro(FechaEmision1, "date");
                    objeto_conexion.nuevo_parametro(PorcentajeExoneracion1, "int");
                    objeto_conexion.nuevo_parametro(MontoExoneracion1, "int");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Exoneración Guardada con el Número de Documento: " + NumeroDocumento1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }

       //TODO: Hacer la lista de exoneracion 
    }
}