import React, { useEffect, useState } from "react";
import {
  getAllUsers,
  getTransactionValues,
  getGamePlay,
  getWalletsChartsData,
  getActiveUsersChartsData,
} from "../../utils/config";

import BarChartLoader from "../../components/Skeletons/BarChart";
import "./stats.scss";

import { ResponsiveBar } from "@nivo/bar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

const chartDuration = {
  1: "1d",
  7: "7d",
  30: "30d",
  90: "90d",
  360: "1y",
};

const formatTime = (inputSeconds) => {
  const hours = Math.floor(inputSeconds / 3600);
  const remainingSecondsAfterHours = inputSeconds % 3600;
  const minutes = Math.floor(remainingSecondsAfterHours / 60);
  const seconds = remainingSecondsAfterHours % 60;

  let timeString = "";
  if (hours > 0) {
    timeString += hours + " Hrs ";
  }
  if (minutes > 0) {
    timeString += minutes + " Mins ";
  }
  if (seconds > 0 || (hours === 0 && minutes === 0)) {
    timeString += seconds + " Secs";
  }

  return timeString;
};

const formatTimeForUsersSection = (inputSeconds) => {
  const hours = Math.floor(inputSeconds / 3600);
  const remainingSecondsAfterHours = inputSeconds % 3600;
  const minutes = Math.floor(remainingSecondsAfterHours / 60);
  const seconds = remainingSecondsAfterHours % 60;

  let timeString = "";

  // if hours is greater than 0, then display hours
  // if minutes is greater than 0, then display minutes
  // if seconds is greater than 0, then display seconds
  // if hours, minutes and seconds are all 0, then display 0 seconds
  // if hours is 0, then display minutes
  // if minutes is 0, then display seconds
  if (hours > 0) {
    timeString += hours + " Hrs ";
  } else if (minutes > 0) {
    timeString += minutes + " Mins ";
  } else if (seconds > 0 || (hours === 0 && minutes === 0)) {
    timeString += seconds + " Secs";
  }

  return timeString;
};

function Stats() {
  const [isHovered, setIsHovered] = useState({});
  const [highlightedId, setHighlightedId] = useState({});
  const [walletsChartDuration, setWalletsChartDuration] = useState(
    chartDuration[30]
  );

  const [thirtyDaysMonths, setThirtyDaysMonths] = useState([]);

  const [usersChartDuration, setUsersChartDuration] = useState(
    chartDuration[30]
  );

  const [totalUsers, setTotalUsers] = useState(0);
  const [transactionValues, setTransactionValues] = useState({
    total: 0,
    average: 0,
    totalTransactions: 0,
  });
  const [gamePlay, setGamePlay] = useState({
    totalPlayTime: 0,
    averagePlayTime: 0,
  });

  const [walletsChartData, setWalletsChartData] = useState({
    loading: false,
    today: {
      labels: [],
      data: [],
    },
    sevenDays: {
      labels: [],
      data: [],
    },
    thirtyDays: {
      labels: [],
      data: [],
    },
    ninetyDays: {
      labels: [],
      data: [],
    },
    oneYear: {
      labels: [],
      data: [],
    },
  });

  const [activeUsersChartData, setActiveUsersChartData] = useState({
    loading: false,
    today: {
      labels: [],
      data: [],
    },
    sevenDays: {
      labels: [],
      data: [],
    },
    thirtyDays: {
      labels: [],
      data: [],
    },
    ninetyDays: {
      labels: [],
      data: [],
    },
    oneYear: {
      labels: [],
      data: [],
    },
  });

  useEffect(() => {
    fetchTotalUsers();
    fetchTransactionValues();
    fetchGamePlay();
    fetchWalletsChartData();
    fetchActiveUsersChartData();
  }, []);

  const fetchWalletsChartData = async () => {
    setWalletsChartData({
      ...walletsChartData,
      loading: true,
    });

    try {
      const response = await getWalletsChartsData();
      const walletsChartData = await response.data;

      setWalletsChartData({
        loading: false,
        today: {
          labels: walletsChartData.todayData.labels,
          data: walletsChartData.todayData.data,
        },
        sevenDays: {
          labels: walletsChartData.sevenDaysData.labels,
          data: walletsChartData.sevenDaysData.data,
        },
        thirtyDays: {
          labels: walletsChartData.thirtyDaysData.labels,
          data: walletsChartData.thirtyDaysData.data,
        },
        ninetyDays: {
          labels: walletsChartData.ninetyDaysData.labels,
          data: walletsChartData.ninetyDaysData.data,
        },

        oneYear: {
          labels: walletsChartData.oneYearData.labels,
          data: walletsChartData.oneYearData.data,
        },
      });

      const uniqueMonths = walletsChartData.thirtyDaysData.labels
        .map((label) => label.split(" ")[1])
        .filter((value, index, self) => self.indexOf(value) === index);

      setThirtyDaysMonths(uniqueMonths);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchActiveUsersChartData = async () => {
    setActiveUsersChartData({
      ...activeUsersChartData,
      loading: true,
    });

    try {
      const response = await getActiveUsersChartsData();
      const activeUsersChartData = await response.data;

      setActiveUsersChartData({
        loading: false,

        today: {
          labels: activeUsersChartData.todayData.labels,
          data: activeUsersChartData.todayData.data,
        },
        sevenDays: {
          labels: activeUsersChartData.sevenDaysData.labels,
          data: activeUsersChartData.sevenDaysData.data,
        },
        thirtyDays: {
          labels: activeUsersChartData.thirtyDaysData.labels,
          data: activeUsersChartData.thirtyDaysData.data,
        },
        ninetyDays: {
          labels: activeUsersChartData.ninetyDaysData.labels,
          data: activeUsersChartData.ninetyDaysData.data,
        },
        oneYear: {
          labels: activeUsersChartData.oneYearData.labels,
          data: activeUsersChartData.oneYearData.data,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  console.log({ thirtyDaysMonths });

  const fetchTotalUsers = async () => {
    try {
      const response = await getAllUsers();
      const users = await response.data;
      setTotalUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTransactionValues = async () => {
    try {
      const response = await getTransactionValues();
      const transactionValues = await response.data;
      setTransactionValues({
        total: transactionValues.totalValue,
        average: transactionValues.averageValue.toFixed(5),
        totalTransactions: transactionValues.totalTransactions,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGamePlay = async () => {
    try {
      const response = await getGamePlay();
      const gamePlayValues = await response.data;
      setGamePlay({
        totalPlayTime: gamePlayValues.totalTime,
        averagePlayTime: gamePlayValues.averageTime.toFixed(0),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const renderWalletChartData = () => {
    let key = "";
    if (walletsChartDuration === "1d") {
      key = "today";
    } else if (walletsChartDuration === "7d") {
      key = "sevenDays";
    } else if (walletsChartDuration === "30d") {
      key = "thirtyDays";
    } else if (walletsChartDuration === "90d") {
      key = "ninetyDays";
    } else if (walletsChartDuration === "1y") {
      key = "oneYear";
    }

    const chartData = walletsChartData[key].labels.map((label, index) => {
      if (walletsChartDuration === "30d") {
        return {
          time: label.split(" ")[0],
          value: walletsChartData[key].data[index],
        };
      }

      return {
        time: label,
        value: walletsChartData[key].data[index],
      };
    });

    return chartData;
  };

  const renderActiveUsersChartData = () => {
    let key = "";
    if (usersChartDuration === "1d") {
      key = "today";
    } else if (usersChartDuration === "7d") {
      key = "sevenDays";
    } else if (usersChartDuration === "30d") {
      key = "thirtyDays";
    } else if (usersChartDuration === "90d") {
      key = "ninetyDays";
    } else if (usersChartDuration === "1y") {
      key = "oneYear";
    }

    const chartData = activeUsersChartData[key].labels.map((label, index) => {
      if (usersChartDuration === "30d") {
        return {
          time: label.split(" ")[0],
          value: walletsChartData[key].data[index],
        };
      }

      return {
        time: label,
        value: activeUsersChartData[key].data[index],
      };
    });

    return chartData;
  };

  const calculateMaxValueForActiveUsersChart = () => {
    let max = 0;

    activeUsersChartData[
      usersChartDuration === "1d"
        ? "today"
        : usersChartDuration === "7d"
        ? "sevenDays"
        : usersChartDuration === "30d"
        ? "thirtyDays"
        : usersChartDuration === "90d"
        ? "ninetyDays"
        : "oneYear"
    ].data.forEach((value) => {
      if (value > max) {
        max = value;
      }
    });

    return max * 1.1;
  };

  const calculateMaxValueForWalletsChart = () => {
    let max = 0;

    walletsChartData[
      walletsChartDuration === "1d"
        ? "today"
        : walletsChartDuration === "7d"
        ? "sevenDays"
        : walletsChartDuration === "30d"
        ? "thirtyDays"
        : walletsChartDuration === "90d"
        ? "ninetyDays"
        : "oneYear"
    ].data.forEach((value) => {
      if (value > max) {
        max = value;
      }
    });

    return max * 1.1;
  };

  const theme = {
    background: "transparent",
    axis: {
      fontSize: "14px",
      tickColor: "#eee",
      ticks: {
        line: {
          stroke: "#555555",
        },
        text: {
          fill: "#ffffff",
        },
      },
    },
    grid: {
      line: {
        stroke: "#555555",
      },
    },
  };

  const highlightBar = (id, chartType) => {
    setHighlightedId({
      ...highlightedId,
      [chartType]: id,
    });
  };

  const CustomBar = React.memo(({ bar, highlightBar, chartType }) => {
    const barIsHovered = bar.data.index === highlightedId[chartType];
    const BAR_MAX_WIDTH = 30;

    const width = bar.width > BAR_MAX_WIDTH ? BAR_MAX_WIDTH : bar.width;

    const handleMouseEnter = () => {
      setIsHovered({
        ...isHovered,
        [chartType]: true,
      });
      highlightBar(
        bar.data.index,

        chartType
      );
    };

    const handleMouseLeave = () => {
      setIsHovered({
        ...isHovered,
        [chartType]: false,
      });
      highlightBar(null, chartType);
    };

    return (
      <g
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${bar.width / 2 - 15}px, 1px)`,
          textAnchor: "middle",
        }}
      >
        <rect
          x={bar.x}
          y={isHovered[chartType] && barIsHovered ? bar.y + 60 : bar.y}
          width={width}
          height={
            isHovered[chartType] && barIsHovered ? bar.height - 60 : bar.height
          }
          fill={barIsHovered ? "#fff" : "#777"}
          className="nivo-bar"
          rx={5}
          ry={5}
          style={{
            textAnchor: "middle",

            alignmentBaseline: "middle",
          }}
        />

        {isHovered[chartType] && barIsHovered && (
          <>
            <circle
              cx={bar.x + width / 2}
              cy={bar.y + 50}
              r={width / 1.8}
              stroke="#1A1B1D"
              stroke-width={width > 30 ? 10 : 5}
              fill="white"
            />

            <rect
              x={bar.x + width / 2 - (width * 1.5) / 2}
              y={bar.y - width / 2 - width / 2 - 5 + 35}
              width={width * 1.5}
              height={30}
              fill={"#fff"}
              rx={5}
              ry={5}
            />
            <text
              x={bar.x + width / 2}
              y={bar.y - width / 2 - width / 2 - 5 + width / 4 + 45}
              fill="black"
              text-anchor="middle"
              dominantBaseline={"middle"}
              font-size="16px"
              font-weight="bold"
            >
              + {bar.data.value}
            </text>
          </>
        )}
      </g>
    );
  });

  return (
    <section className="admin-dashboard">
      <div className="">
        <Sidebar />
      </div>
      <div className="admin-dashboard__container">
        <div className="admin-dashboard__content">
          <div className="admin-dashboard__content__header">
            <h1 className="admin-dashboard__content__header--title">
              Admin Dashboard{" "}
              <sup className="admin-dashboard__content__header--title--sup">
                [BACKEND]
              </sup>
            </h1>

            <div className="admin-dashboard__content__header--online">
              <h3 className="online">
                Users online: <b>X,XXX</b>
              </h3>
            </div>
          </div>
          <div className="admin-dashboard__content__body">
            <div className="admin-dashboard__content__body__total-wallets">
              <div className="total-wallets-connected ">
                <h3>Total Wallets Connected</h3>
                <span className="total-wallets-connected__value">
                  {totalUsers}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <div className="wallets-chart-duration-selectors">
                  {Object.keys(chartDuration).map((key) => (
                    <button
                      key={key}
                      className={`
                    wallets-chart-duration-selectors__button
                    ${
                      walletsChartDuration === chartDuration[key] &&
                      "wallets-chart-duration-selectors__button--active"
                    }`}
                      onClick={() => {
                        setWalletsChartData({
                          ...walletsChartData,
                          loading: true,
                        });
                        setWalletsChartDuration(chartDuration[key]);
                        setTimeout(() => {
                          setWalletsChartData({
                            ...walletsChartData,
                            loading: false,
                          });
                        }, 500);
                        setIsHovered({
                          ...isHovered,
                          wallets: false,
                        });
                        highlightBar(null, "wallets");
                      }}
                    >
                      {chartDuration[key]}
                    </button>
                  ))}
                </div>
                {walletsChartDuration === "30d" && (
                  <h3 className="wallets-chart-duration-selectors__month">
                    {thirtyDaysMonths[0]}
                    {thirtyDaysMonths[1] !== thirtyDaysMonths[0] &&
                      ` - ${thirtyDaysMonths[1]}`}
                  </h3>
                )}
              </div>
            </div>
            <div className="wallets-connected-chart">
              {walletsChartData.loading ? (
                <BarChartLoader />
              ) : (
                <ResponsiveBar
                  data={renderWalletChartData()}
                  keys={["value"]}
                  indexBy="time"
                  margin={{ top: 0, right: 0, bottom: 50, left: 0 }}
                  padding={0.3}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  axisLeft={null}
                  enableLabel={false}
                  borderRadius={5}
                  theme={theme}
                  // maxValue={calculateMaxValueForWalletsChart()}
                  barComponent={(props) => (
                    <CustomBar
                      {...props}
                      data
                      highlightBar={highlightBar}
                      chartType={"wallets"}
                    />
                  )}
                />
              )}
            </div>
            <div className="users-section">
              <div className="users-section__left-col">
                <div className="stats-container">
                  <h3>Total Users</h3>
                  <span className="stats-container__value">{totalUsers}</span>
                </div>

                <div className="stats-container">
                  <h3>Avg Play Time</h3>
                  <span className="stats-container__value">
                    {/* {formatTime(gamePlay.averagePlayTime)} */}
                    {formatTimeForUsersSection(gamePlay.averagePlayTime)}
                  </span>
                </div>
              </div>

              <div className="users-section__right-col">
                <div className="active-users">
                  <h3>Active Users</h3>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <div className="wallets-chart-duration-selectors">
                      {Object.keys(chartDuration).map((key) => (
                        <button
                          key={key}
                          className={`
                    wallets-chart-duration-selectors__button
                    ${
                      usersChartDuration === chartDuration[key] &&
                      "wallets-chart-duration-selectors__button--active"
                    }`}
                          onClick={() => {
                            setActiveUsersChartData({
                              ...activeUsersChartData,
                              loading: true,
                            });

                            setTimeout(() => {
                              setActiveUsersChartData({
                                ...activeUsersChartData,
                                loading: false,
                              });
                            }, 500);

                            setUsersChartDuration(chartDuration[key]);

                            setIsHovered({
                              ...isHovered,
                              users: false,
                            });
                            highlightBar(null, "users");
                          }}
                        >
                          {chartDuration[key]}
                        </button>
                      ))}
                    </div>
                    {usersChartDuration === "30d" && (
                      <h3 className="wallets-chart-duration-selectors__month">
                        {thirtyDaysMonths[0]}
                        {thirtyDaysMonths[1] !== thirtyDaysMonths[0] &&
                          ` - ${thirtyDaysMonths[1]}`}
                      </h3>
                    )}
                  </div>
                </div>
                <div className="active-users-chart">
                  {activeUsersChartData.loading ? (
                    <BarChartLoader />
                  ) : (
                    <ResponsiveBar
                      data={renderActiveUsersChartData()}
                      keys={["value"]}
                      indexBy="time"
                      margin={{ top: 0, right: 0, bottom: 50, left: 0 }}
                      padding={0.3}
                      labelSkipWidth={12}
                      labelSkipHeight={12}
                      axisLeft={null}
                      enableLabel={false}
                      borderRadius={5}
                      theme={theme}
                      maxValue={calculateMaxValueForActiveUsersChart()}
                      barComponent={(props) => (
                        <CustomBar
                          {...props}
                          data
                          highlightBar={highlightBar}
                          chartType={"activeUsers"}
                        />
                      )}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="transactions-section">
              <div className="transactions-section__header-boxes">
                <div className="transactions-section__header-boxes__box">
                  <h3>Total Transactions</h3>
                  <span className="transactions-section__header-boxes__box--value">
                    {transactionValues.totalTransactions}
                  </span>
                </div>
                <div className="transactions-section__header-boxes__box">
                  <h3>Average Transaction Value</h3>
                  <span className="transactions-section__header-boxes__box--value">
                    {transactionValues.average} eth
                  </span>
                </div>
                <div className="transactions-section__header-boxes__box">
                  <h3>Total Transaction Value</h3>
                  <span className="transactions-section__header-boxes__box--value">
                    {transactionValues.total} eth
                  </span>
                </div>
              </div>
              <div className="transactions-section__footer">
                <div className="transactions-section__footer__box">
                  <h3>Total Play Time:</h3>
                  <span className="transactions-section__footer__box--value">
                    {formatTime(gamePlay.totalPlayTime)}
                  </span>
                </div>
                <div className="transactions-section__footer__box">
                  <h3>Total Player Invites:</h3>
                  <span className="transactions-section__footer__box--value">
                    100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Stats;
