import "./styles.css";

import weatherHelper from "./WeatherHelper";
import { Card } from "antd";
import {
  CloudDownloadOutlined,
  CompassOutlined,
  SwapOutlined,
  CompressOutlined
} from "@ant-design/icons";

export default function CompToday(props) {
  const { data } = props;

  return (
    <>
      <Card>
        <div className="today-layout-title">
          {data.weekday} {data.time}
        </div>
        <div className="today-layout-content">
          <div className="today-layout-content-part1">
            <div className="today-layout-content-part1-city">
              {data.city} ({data.country}), {data.iconTooltip}
            </div>
            <div className="today-layout-content-part1-img">
              <img
                src={weatherHelper.getIconUrl(data.icon, 4)}
                alt="Nav bildes"
                title={data.iconTooltip}
              />
              <div className="today-layout-content-part1-temp">
                {data.temperature}°C
              </div>
            </div>
          </div>
          <div className="today-layout-content-part2">
            <div className="today-layout-content-part2-temp">
              Pēc sajūtām {data.feels_like_temparature}°C
            </div>
            <div className="today-layout-content-part2-detail">
              <CloudDownloadOutlined className="today-layout-content-part2-detail-icon" />
              <div className="today-layout-content-part2-detail-label">
                Nokrišņi
              </div>
              <div className="today-layout-content-part2-detail-value">
                {data.humidity} %
              </div>

              <CompassOutlined className="today-layout-content-part2-detail-icon" />
              <div className="today-layout-content-part2-detail-label">
                Vēja virziens
              </div>
              <div className="today-layout-content-part2-detail-value">
                {data.windDirection}
              </div>

              <SwapOutlined className="today-layout-content-part2-detail-icon" />
              <div className="today-layout-content-part2-detail-label">
                Vēja ātrums
              </div>
              <div className="today-layout-content-part2-detail-value">
                {data.windSpeed} m/s
              </div>

              <CompressOutlined className="today-layout-content-part2-detail-icon" />
              <div className="today-layout-content-part2-detail-label">
                Atmosfēras spiediens
              </div>
              <div className="today-layout-content-part2-detail-value">
                {data.pressure} hPa
              </div>
            </div>
          </div>
        </div>
        <>
          {data.hours && data.hours.length > 0 && (
            <div className="hours-layout-content">
              {data.hours.map((item, index) => {
                if (index > 5) return false;
                return (
                  <Card key={index} size="small" bordered="false">
                    <div>{item.name}</div>
                    <div className="hours-layout-content-image-row">
                      <img
                        src={weatherHelper.getIconUrl(item.icon, 2)}
                        alt="Nav bildes"
                        title={item.iconTooltip}
                        width="50px"
                        height="50px"
                      />
                      <div>{item.temperature}°C</div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </>
      </Card>
    </>
  );
}
