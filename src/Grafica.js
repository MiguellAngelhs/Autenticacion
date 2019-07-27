import React, { Component } from "react";

import "./App.css"
import {Line} from 'react-chartjs-2';

class Grafica extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                labels:["2015", "2016", "2017", "2018", "2019"],
                datasets:[
                    {
                        label:"Departamento",
                        backgroundColor: "rgba(255, 0, 255, 0.75)",
                        data: [4, 5, 6, 7, 1, 10, 2, 12, 17]
                    },
                    {
                        label:"Municipio",
                        backgroundColor: "rgba(0, 255, 0, 0.75)",
                        data: [14, 5, 6, 7, 21, 0, 2, 2, 12]
                    },
                    {
                        label:"Cosecha",
                        backgroundColor: "rgba(5, 25, 39, 3)",
                        data: [9, 5, 1, 9, 4, 40, 6, 2, 32]
                    },
                    {
                        label:"Colombia",
                        backgroundColor: "rgba(255, 400, 15, 50)",
                        data: [25, 10, 15, 7, 10, 19, 33, 17, 13 ]
                    },
                    {
                        label:"Colombia",
                        backgroundColor: "rgba(51, 85, 255)",
                        data: [-3, -10, 15, -7, 10, -11, 3, 17, -9 ]
                    },
                ]
            }
        }
    }

    render(){
        return(
        <div style={{position: "relative", width: 1000, height:800}}>
            <h3>Datos</h3>
            <Line
                options={{
                    responsive: true
                }}
                data={this.state.data}

            />
        </div>
        )
    }
}

export default Grafica;