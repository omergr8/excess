import React, { useState } from "react";
import classes from "../Topbar.module.css";
import mediaIcon from "../../../../../Assets/folder.jpg";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import deleteIcon from "../../../../../Assets/delete.jpg";
import downloadIcon from "../../../../../Assets/download.jpg";
import editIcon from "../../../../../Assets/edit.jpg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const Lefttable = () => {
  const icon = <img width="30px" src={mediaIcon} alt="media" />;
  const [tableData, setTableDataMessage] = useState([
    {
      id: 1,
      date: "01/01/2021",
      filename: "Live Video Session 1",
      download: "Download",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 2,
      date: "05/05/2021",
      filename: "Live Video Session 2",
      download: "Download",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 3,
      date: "05/10/2021",
      filename: "Live Video Session 3",
      download: "Download",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 4,
      date: "05/15/2021",
      filename: "Live Video Session 4",
      download: "Download",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 5,
      date: "05/20/2021",
      filename: "Live Video Session 5",
      download: "Download",
      edit: "Edit",
      delete: "Delete",
    },
  ]);
  const deleteI = (
    <img
      className={classes.rightIcon}
      width="40px"
      src={deleteIcon}
      alt="media"
    />
  );
  const download = (
    <img
      className={classes.rightIcon}
      width="40px"
      src={downloadIcon}
      alt="media"
    />
  );
  const edit = (
    <img
      className={classes.rightIcon}
      width="40px"
      src={editIcon}
      alt="media"
    />
  );
  const saveButton = (
    <Button size="small" className={classes.saveButton}>
      SAVE
    </Button>
  );
  return (
    <div className={classes.container}>
      <table className={classes.lefttable}>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Media</th>
            <th>File Name</th>
            <th>{download}</th>
            <th>{edit}</th>
            <th>{deleteI}</th>
            <th className={classes.saveData}>{saveButton}</th>
          </tr>

          {tableData.map((d) => (
            <tr key={d.id}>
              <td>{d.date}</td>
              <td className={classes.fileIcon}>{icon}</td>
              <td>
                <nobr>{d.filename}</nobr>
              </td>
              <td className={classes.tableData}>
                <p>
                  {d.download} <span className={classes.span}>|</span>
                </p>
              </td>
              <td className={classes.tableData}>
                <p>
                  {d.edit} <span className={classes.span2}> |</span>
                </p>
              </td>
              <td className={classes.tableData}>
                <p>{d.delete}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.iconTable}>
        <ArrowBackIosIcon className={classes.arrowIcon} />
        <ArrowForwardIosIcon className={classes.arrowIcon} />
      </div>
      <div className={classes.mobileSave}>{saveButton}</div>
    </div>
  );
};
export default Lefttable;
