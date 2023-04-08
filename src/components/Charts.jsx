import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import{ Bar  } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' 
        
      },
      title: {
        display: true,
        
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', ];

export const data = {
  labels,
  datasets: [
    {
      label: 'Onilne sales',
      data: [120,100,400,200,400,300,],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'offline sales',
      data: [100,200,300,400,500,600,],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


const BarChar = () => {
  return (
    <div>
 
 <Bar options={options} data={data} />
  

    </div>
  )
}

export default BarChar;