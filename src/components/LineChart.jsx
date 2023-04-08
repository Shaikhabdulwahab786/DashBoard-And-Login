import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
  } from 'chart.js';
  import{ Line  } from "react-chartjs-2"
  
  ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
      
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
        backgroundColor: 'green',
        borderColor: 'green',

      },
      {
        label: 'offline sales',
        data: [100,200,300,400,500,600,],
        backgroundColor: 'red',
        borderColor:'red'
        
        
      },
      
    ],
  };
  
  
  const LineChart = () => {
    return (
      <div><Line data={data} options={options} /></div>
    )
  }
  
  export default LineChart