import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


interface ChartType {
  item: any[],
  targetIndex: number
}
const Chart = ({ item }: ChartType) => {
console.log(item)

  const data = {
    labels: ['탄수화물', '단백질', '지방'],
    datasets: [
      {
        label: '3대 영양소(100g 기준)',
        data: [130, 55, 90],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }
    ],
  };

  return <Radar data={data} />


}

export default Chart


