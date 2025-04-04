"use client"; // Indica que este é um componente do cliente (necessário para usar hooks e efeitos)

import React, { Component } from 'react';
import { Line, Bar, Doughnut, Pie, Scatter } from 'react-chartjs-2';
// Importa os componentes de gráficos da biblioteca react-chartjs-2

// Importa os módulos necessários do Chart.js para registro
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Registra os componentes do Chart.js que serão utilizados
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export class ChartJs extends Component {
  // Dados para gráficos de linha e barra
  data = {
    labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [10, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: false // Define se o gráfico deve ser preenchido ou não
    }]
  };

  // Opções de configuração para gráficos de linha e barra
  options = {
    scales: {
      y: { // Em versões mais recentes, yAxes foi substituído por y
        beginAtZero: true // Faz o eixo Y começar em zero
      }
    },
    plugins: { // Em versões mais recentes, legend foi movido para plugins
      legend: {
        display: false // Oculta a legenda
      }
    },
    elements: {
      point: {
        radius: 0 // Define o raio dos pontos (0 para ocultar)
      }
    }
  };

  // Dados para o gráfico de área
  areaData = {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo simplificada
      borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda
      borderWidth: 1,
      fill: true, // Ativa o preenchimento para gráfico de área
      tension: 0.4 // Suaviza a linha do gráfico
    }]
  };

  // Opções para o gráfico de área
  areaOptions = {
    plugins: {
      filler: {
        propagate: true // Propaga o preenchimento para múltiplos conjuntos de dados
      }
    }
  };

  // Dados para gráficos de doughnut e pie
  doughnutPieData = {
    datasets: [{
      data: [30, 40, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
    }],
    labels: ['Pink', 'Blue', 'Yellow'] // Rótulos para a legenda
  };

  // Opções para gráficos de doughnut e pie
  doughnutPieOptions = {
    responsive: true, // Torna o gráfico responsivo
    plugins: {
      legend: {
        position: 'top', // Posição da legenda
      },
    },
    animation: {
      animateScale: true, // Anima a escala
      animateRotate: true // Anima a rotação
    }
  };

  // Dados para o gráfico de dispersão (scatter)
  scatterChartData = {
    datasets: [
      {
        label: 'First Dataset',
        data: [
          { x: -10, y: 0 },
          { x: 0, y: 3 },
          { x: -25, y: 5 },
          { x: 40, y: 5 }
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1
      },
      {
        label: 'Second Dataset',
        data: [
          { x: 10, y: 5 },
          { x: 20, y: -30 },
          { x: -25, y: 15 },
          { x: -10, y: 5 }
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  // Opções para o gráfico de dispersão
  scatterChartOptions = {
    scales: {
      x: { // Configuração do eixo X
        type: 'linear', // Tipo de escala
        position: 'bottom' // Posição do eixo
      }
    }
  };

  render() {
    return (
      <div>
        {/* Cabeçalho da página */}
        <div className="page-header">
          <h3 className="page-title">Chart-js</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={event => event.preventDefault()}>Charts</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Chart-js</li>
            </ol>
          </nav>
        </div>

        {/* Primeira linha de gráficos */}
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Line Chart</h4>
                <Line data={this.data} options={this.options} />
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Bar Chart</h4>
                <Bar data={this.data} options={this.options} />
              </div>
            </div>
          </div>
        </div>

        {/* Segunda linha de gráficos */}
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Area Chart</h4>
                <Line data={this.areaData} options={this.areaOptions} />
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Doughnut Chart</h4>
                <Doughnut data={this.doughnutPieData} options={this.doughnutPieOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Terceira linha de gráficos */}
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Pie Chart</h4>
                <Pie data={this.doughnutPieData} options={this.doughnutPieOptions} />
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Scatter Chart</h4>
                <Scatter data={this.scatterChartData} options={this.scatterChartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChartJs;