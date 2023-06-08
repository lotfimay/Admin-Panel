import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ChartTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Sales",
          data: [2, 3, 1, 4]
        },
        // {
        //   name: 'Revenue',
        //   data: [13, 23, 20, 8, 13, 27, 15],
        // },
      ],
      options: {
        colors: ["#3C50E0", "#80CAEE"],
        chart: {
          fontFamily: "Satoshi, sans-serif",
          type: "bar",
          height: 335,
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },

        responsive: [
          {
            breakpoint: 1536,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 0,
                  columnWidth: "25%",
                },
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: "25%",
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "last",
          },
        },
        dataLabels: {
          enabled: false,
        },

        xaxis: {
          categories: ["Headphones", "Earbuds", "Earphones", "Neckbands"],
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          fontFamily: "Satoshi",
          fontWeight: 500,
          fontSize: "14px",

          markers: {
            radius: 99,
          },
        },
        fill: {
          opacity: 1,
        },
      },
    };
  }

  render() {
    return (
      <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
        <div className="mb-4 justify-between gap-4 sm:flex">
          <div>
            <h4 className="text-xl font-semibold text-black dark:text-white">
              Sales by Category
            </h4>
          </div>
        </div>

        <div>
          <div id="chartTwo" className="-ml-5 -mb-9">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChartTwo;
