import React, { useState } from "react";
import classes from "../Topbar.module.css";
import mediaIcon from "../../../../../Assets/folder.jpg";
import Grid from "@material-ui/core/Grid";

const Lefttable = () => {
  const icon = <img width="30px" src={mediaIcon} alt="media" />;
  const [tableData, setTableDataMessage] = useState([
    {
      id: 1,
      date: "1/1/2021",

      filename: "Live Video Session 1",
    },
    {
      id: 2,
      date: "1/1/2021",

      filename: "Live Video Session 2",
    },
    {
      id: 3,
      date: "1/1/2021",
      filename: "Live Video Session 3",
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ]);

  return (
    <div className={classes.align}>
      <Grid container>
        <Grid item lg={12} xs={12}>
          <div>
            <table className={classes.lefttable}>
              <tbody>
                <tr>
                  <th>
                    <nobr>Date & Time</nobr>
                  </th>
                  <th>
                    <nobr>Media Files</nobr>
                  </th>
                  <th>File Name</th>
                </tr>

                {tableData.map((d) => (
                  <tr key={d.id}>
                    <td>{d.date}</td>
                    <td>{icon}</td>
                    <td>
                      <nobr>{d.filename}</nobr>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Lefttable;
