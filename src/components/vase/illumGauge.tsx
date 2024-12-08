import GaugeComponent from "react-gauge-component";

export default function IllumGauge({ dataValue }: { dataValue: number }) {
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
            limit: 300,
            color: "#EA4228",
            showTick: true,
            tooltip: {
              text: "Too low illumination!",
            },
            onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
            onMouseMove: () => console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
            onMouseLeave: () => console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
          },
          {
            limit: 500,
            color: "#F5CD19",
            showTick: true,
            tooltip: {
              text: "Low illumination!",
            },
          },
          {
            color: "#5BE12C",
            showTick: true,
            tooltip: {
              text: "OK illumination!",
            },
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
        valueLabel: { formatTextValue: (value) => value + "" },
        tickLabels: {
          type: "outer",
          defaultTickValueConfig: {
            formatTextValue: (value) => value + "ADC",
            style: { fontSize: 10 },
          },
          ticks: [{ value: 200 }, { value: 1000 }, { value: 2000 }],
        },
      }}
      value={dataValue}
      minValue={0}
      maxValue={3000}
    />
  );
}
