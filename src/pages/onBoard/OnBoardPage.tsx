import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
// import { useNavigate } from "react-router-dom";
// import GaugeComponent from "react-gauge-component";
import { useEffect, useState } from "react";
import { getDataAllResponse } from "@src/types/api/bus/get.type";
import { getDataAll, getImages } from "@src/api/vase/get";
import useInterval from "@src/hooks/useInterval";
import GaugeComp from "@src/components/vase/tempGauge";
import IllumGauge from "@src/components/vase/illumGauge";
import WaterGauge from "@src/components/vase/waterGauge";
import HumidGauge from "@src/components/vase/airHumidGauge";
import SoilHumidGuage from "@src/components/vase/soilHumidGauge";
const OnBoardPage: ActivityComponentType = () => {
  // const router = useNavigate();
  const [datas, setDatas] = useState<getDataAllResponse>();

  useInterval(() => {
    getDataAll().then((data) => {
      setDatas(data);
    });
  }, 60000);
  useEffect(() => {
    getDataAll().then((data) => {
      setDatas(data);
    });
  }, []);

  return (
    <AppScreen>
      <article className="py-[2rem] w-full text-white bg-[#676978] h-max flex flex-col items-center">
        <section className="flex-1 flex flex-col gap-[2rem] gap-[2rem] w-full px-[2rem]">
          <div>
            <div className="flex justify-start">현재 온도 : </div>
            <GaugeComp
              dataValue={
                datas?.temperature_air_data[
                  datas.temperature_air_data.length - 1
                ].temperature || 0
              }
            ></GaugeComp>
          </div>
          <div>
            <div className="flex justify-start">현재 조도량 : </div>
            <IllumGauge
              dataValue={
                datas?.illumination_data[datas.illumination_data.length - 1]
                  .illumination || 0
              }
            ></IllumGauge>
          </div>
          <div>
            <div className="flex justify-start">현재 수위량 </div>
            <WaterGauge
              dataValue={
                datas?.illumination_data[datas.illumination_data.length - 1]
                  .water_level || 0
              }
            ></WaterGauge>
          </div>
          <div>
            <div className="flex justify-start">현재 습도량 </div>
            <HumidGauge
              dataValue={
                datas?.temperature_air_data[
                  datas.temperature_air_data.length - 1
                ].air_humid || 0
              }
            ></HumidGauge>
          </div>
          <div>
            <div className="flex justify-start">현재 토양습도량 </div>
            <SoilHumidGuage
              dataValue={
                datas?.soil_data[datas.soil_data.length - 1].soil_humid || 0
              }
            ></SoilHumidGuage>
          </div>
        </section>
        <div className="py-[2rem]">
          <button
            onClick={(e) => {
              e.preventDefault();

              getImages().then((data) => {
                window.open(
                  `http://14.47.163.184:8080/data/images/${data.files[0].id}`
                );
              });
            }}
            onTouchEnd={(e) => {
              e.preventDefault();

              getImages().then((data) => {
                window.open(
                  `http://14.47.163.184:8080/data/images/${data.files[0].id}`
                );
              });
            }}
            className="text-Bold21 bg-busGreen p-[2rem] rounded-xl"
          >
            현재 사진보기
          </button>
        </div>
      </article>
    </AppScreen>
  );
};

export default OnBoardPage;
