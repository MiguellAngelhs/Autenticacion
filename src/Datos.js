// import React, {useState, useEffect} from "react";
import React, {Component} from 'react';
import "./App.css";
import ReactTable from 'react-table';
import "react-table/react-table.css";

 class Datos extends Component {

  constructor(props){
    super(props);
  
    this.state = {
      post:[]
    }
  }
  
  componentDidMount() {
    const url = "https://www.datos.gov.co/resource/d968-yfb5.json ";
    fetch(url, {
      method: "GET"
    }).then(response => response.json()).then(posts => {
      this.setState({posts: posts})
    })
  }
  

    render() {


        const columns = [
          {
          Header: "CÓD. DEP.",
          accessor: "c_d_dep",
         
      
         },
         {
          Header: "DEPARTAMENTO",
          accessor: "departamento"
         
         },

         {
          Header: "CÓD.MUN",
          accessor: "c_d_mun"
          
         },

         {
          Header: "MUNICIPIO",
          accessor: "municipio",
          
         },

         {
          Header: "GRUPO DE CULTIVO",
          accessor: "grupo_de_cultivo"
         
         },

         {
          Header: "SUBGRUPO DE CULTIVO",
          accessor: "subgrupo_de_cultivo"
         
         },

         {
          Header: "CULTIVO",
          accessor: "cultivo"
        
         },

         {
          Header: "SISTEMA PRODUCTIVO",
          accessor: "desagregaci_n_regional_y_o_sistema_productivo"
         },

         {
          Header: "CÓDIGO CULTIVO",
          accessor: "c_digo_cultivo",
          
         },

         {
          Header: "NOMBRE CIENTIFICO",
          accessor: "nombre_cientifico"
         },

         {
          Header: "PERIODO",
          accessor: "periodo"
         },
         {
          Header: "ÁREA SEMBRADA",
          accessor: "rea_sembrada_ha"
         },
         {
          Header: "ÁREA COSECHADA",
          accessor: "rea_cosechada_ha"
         },
         {
          Header: "PRODUCCIÓN",
          accessor: "producci_n_t"
         },
         {
          Header: "RENDIMIENTO",
          accessor: "rendimiento_t_ha"
         },
         {
          Header: "ESTADO DE PRODUCTO",
          accessor: "estado_fisico_produccion"
         }
         

        ]
        return (
            
            
            <ReactTable
              columns={columns}
              data={this.state.posts}
              filterable
              defaultPageSize={10}
              noDataText={"Por favor Espere..."}
              // showPagination={false}
              // showPaginationTop
            >
              
            </ReactTable>
        );
    }

}


export default Datos;