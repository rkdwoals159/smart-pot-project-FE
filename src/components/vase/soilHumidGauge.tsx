import GaugeComponent from "react-gauge-component";

export default function SoilHumidGuage({ dataValue }: { dataValue: number }) {
  return (
    <GaugeComponent
      type="semicircle"
      arc={{
        width: 0.2,
        padding: 0.005,
        cornerRadius: 1,
        // gradient: true,
        subArcs: [
          {
            limit: 450,
            color: "#EA4228",
            showTick: true,
            tooltip: {
              text: "Too low soilHumidity!",
            },
            onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
            onMouseMove: () => console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
            onMouseLeave: () => console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
          },
          {
            limit: 700,
            color: "#F5CD19",
            showTick: true,
            tooltip: {
              text: "Low soilHumidity!",
            },
          },
          {
            limit: 800,
            color: "#5BE12C",
            showTick: true,
            tooltip: {
              text: "OK soilHumidity!",
            },
          },
          {
            limit: 900,
            color: "#F5CD19",
            showTick: true,
            tooltip: {
              text: "High soilHumidity!",
            },
          },
          {
            color: "#EA4228",
            showTick: true,
            tooltip: {
              text: "Too High soilHumidity!",
            },
            onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
            onMouseMove: () => console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
            onMouseLeave: () => console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
          },
        ],
      }}
      pointer={{
        color: "#345243",
        length: 0.8,
        width: 15,
        // elastic: true,
      }}
      labels={{
        valueLabel: {
          formatTextValue: (value) =>
            value + `(${(((1024 - value) / 1024) * 100).toFixed(1)}%)`,
        },
        tickLabels: {
          type: "outer",
          defaultTickValueConfig: {
            formatTextValue: (value) => value,
            style: { fontSize: 10 },
          },
          ticks: [
            { value: 300 },
            { value: 500 },
            { value: 800 },
            { value: 900 },
          ],
        },
      }}
      value={dataValue}
      minValue={0}
      maxValue={1024}
    />
  );
}
