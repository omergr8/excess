import React, { useState } from "react";
import classes from "../Topbar.module.css";
import mediaIcon from "../../../../../Assets/folder.jpg";
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
              <th className={classes.leftAlign}>File Name</th>
            </tr>

            {tableData.map((d) => (
              <tr key={d.id}>
                <td>{d.date}</td>
                <td>{icon}</td>
                <td className={classes.leftAlign}>
                  <nobr>{d.filename}</nobr>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Lefttable;
