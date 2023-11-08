import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartType {
  item: {
    [name : string]: number;
  };
}
const ThreeChart = ({ item }: ChartType) => {
  console.log(item);

  const data = {
    labels: ["탄수화물", "단백질", "지방"],
    datasets: [
      {
        label: "3대 영양소(100g 기준)",
        data: [item.탄수화물, item.단백질, item.지방],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default ThreeChart;
