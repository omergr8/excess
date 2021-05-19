import React, { useState } from "react";
import classes from "./Table.module.css";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Banner = () => {
  const [tableData, setTableDataMessage] = useState([
    {
      id: 1,
      date: "1/1/2021",
      commission: 180,
      sn: 270393,
      status: "paid",
    },
    {
      id: 2,
      date: "1/2/2021",
      commission: 180,
      sn: 140267,
      status: "paid",
    },
    {
      id: 3,
      date: "1/2/2021",
      commission: 180,
      sn: 150700,
      status: "Chargeback",
    },
    {
      id: 4,
      date: "1/3/2021",
      commission: 180,
      sn: 197333,
      status: "paid",
    },
    {
      id: 5,
      date: "1/3/2021",
      commission: 180,
      sn: 149899,
      status: "paid",
    },
    {
      id: 6,
      date: "1/3/2021",
      commission: 180,
      sn: 167895,
      status: "paid",
    },
    {
      id: 7,
      date: "1/4/2021",
      commission: 180,
      sn: 348972,
      status: "paid",
    },
    {
      id: 8,
      date: "1/4/2021",
      commission: 180,
      sn: 548976,
      status: "paid",
    },
    {
      id: 9,
      date: "1/4/2021",
      commission: 180,
      sn: 984736,
      status: "paid",
    },
    {
      id: 10,
      date: "1/4/2021",
      commission: 180,
      sn: 136752,
      status: "paid",
    },
  ]);

  function getTotal() {
    var i;
    var total = 0;
    for (i = 0; i < tableData.length; i++) {
      if (tableData[i].status === "paid")
        total = total + tableData[i].commission;
    }
    return total;
  }
  const [total, setTotal] = useState(0);

  return (
    <div className={classes.align}>
      <Grid container>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <div>
            <h2>Mary Smith</h2>
            <p className={classes.profileText}>I.S.E. I.D.#146013</p>
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <div>
            <table className={classes.tableWidth}>
              <tbody>
                <tr>
                  <th>Date</th>
                  <th>Commission</th>
                  <th>ID#</th>
                  <th>Status</th>
                </tr>
                {tableData.map((d) => (
                  <tr key={d.id}>
                    <td>{d.date}</td>
                    <td>${d.commission}</td>
                    <td>{d.sn}</td>
                    <td>{d.status}</td>
                  </tr>
                ))}

                <tr>
                  <th>
                    Weekly
                    <br /> Gross Income
                  </th>
                  <th>${getTotal()}</th>
                  <th> </th>
                  <th>
                    <ArrowForwardIosIcon className={classes.arrowIcon} />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Banner;
