import { useEffect, useState } from "react";
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

export const options = {
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: false,
      backgroundColor: "#fff",
      titleColor: "blue",
      bodyColor: "#5f6678",
      borderColor: "#5f6678",
      borderWidth: 1,
      yAlign: "bottom",
      titleFont: {
        size: 12,
        weight: "bold",
      },
      callbacks: {
        title: function () {
          return "";
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#fff",
      },
      //   // to remove the x-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      grid: {
        color: "#5f6678",
      },
    },
  },
};

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
  const [walletsChartDuration, setWalletsChartDuration] = useState(
    chartDuration[30]
  );

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
      return {
        time: label,
        value: activeUsersChartData[key].data[index],
      };
    });

    return chartData;
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
                    onClick={() => setWalletsChartDuration(chartDuration[key])}
                  >
                    {chartDuration[key]}
                  </button>
                ))}
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
                  onMouseEnter={(_data, event) => {
                    event.target.style.fill = "#fff";
                  }}
                  onMouseLeave={(_data, event) => {
                    event.target.style.fill = "#777777";
                  }}
                  colors={(bar) => "#777777"}
                  tooltip={({ id, value, color }) => (
                    <div
                      style={{
                        padding: 2,
                        color: "#000",
                        background: "#fff",
                        border: "2px solid #ccc",
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <strong>{value}</strong>
                    </div>
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
                        onClick={() =>
                          setUsersChartDuration(chartDuration[key])
                        }
                      >
                        {chartDuration[key]}
                      </button>
                    ))}
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
                      onMouseEnter={(_data, event) => {
                        event.target.style.fill = "#fff";
                      }}
                      onMouseLeave={(_data, event) => {
                        event.target.style.fill = "#777777";
                      }}
                      colors={(bar) => "#777777"}
                      tooltip={({ id, value, color }) => (
                        <div
                          style={{
                            padding: 2,
                            color: "#000",
                            background: "#fff",
                            border: "2px solid #ccc",
                            borderRadius: "50%",
                            width: 50,
                            height: 50,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <strong>{value}</strong>
                        </div>
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
