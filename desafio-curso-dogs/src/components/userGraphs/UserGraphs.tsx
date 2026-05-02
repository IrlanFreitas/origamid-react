import { useEffect, useState } from "react";
import styles from "./UserGraphs.module.scss";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserGraphs = ({ data }: { data: Array<any> }) => {
  const [graph, setGraph] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData: any[] = data.map((item) => {
      x: item.title;
      y: Number(item.acessos);
    });

    setTotal(
      data
        ?.map(({ acessos }: { acessos: string }) => acessos)
        .map(Number)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0),
    );
    setGraph(graphData);
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          // data={[
          //   {
          //     x: "Teste 1",
          //     y: 10,
          //   },
          //   {
          //     x: "Teste 2",
          //     y: 100,
          //   },
          // ]
          // data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserGraphs;
