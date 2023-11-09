import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartType {
  item: {
    [name: string]: number;
  };
}
const MineralChart = ({ item }: ChartType) => {
  const data = {
    labels: ["칼슘", "칼륨", "철","인","나트륨"],
    fill:false,
    datasets: [
      {
        label: "100ml 기준",
        data: [item.칼슘, item.칼륨, item.철, item.인, item.나트륨],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(100, 200, 86, 0.4)",
          "rgba(200, 140, 86, 0.3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(100, 200, 86, 1)",
          "rgba(200, 140, 86, 1)",
        ],
      },
    ],
  };

  return <Doughnut data={data}></Doughnut>;
};

export default MineralChart;
