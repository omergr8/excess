import React, { useState } from "react";
import classes from "../Topbar.module.css";
import deleteIcon from "../../../../../Assets/delete.jpg";
import downloadIcon from "../../../../../Assets/download.jpg";
import editIcon from "../../../../../Assets/edit.jpg";
import Grid from "@material-ui/core/Grid";

const Righttable = () => {
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

  const [tableData, setTableDataMessage] = useState([
    {
      id: 1,
      download: "Download",
      edit: "Edit Name",
      delet: "Delete",
    },
    {
      id: 2,
      download: "Download",
      edit: "Edit Name",
      delet: "Delete",
    },
    {
      id: 3,
      download: "Download",
      edit: "Edit Name",
      delet: "Delete",
    },
    {
      id: 4,
      download: "Download",
      edit: "Edit Name",
      delet: "Delete",
    },
    {
      id: 5,
      download: "Download",
      edit: "Edit Name",
      delet: "Delete",
    },
    {
      id: 6,
      download: "Download",
      edit: "Edit Name",
      delet: "Delete",
    },
    {
      id: 7,
      download: "Download",
      edit: "Edit Name",
      delet: "Delete",
    },
    {
      id: 8,
      download: "Download",
      edit: "Edit Name",
      delet: "Delete",
    },
  ]);

  return (
    <div className={classes.align}>
      <Grid container>
        <Grid item lg={7} xs={12}>
          <div>
            <table className={classes.righttable}>
              <tbody>
                <tr>
                  <th>
                    <nobr>{download}</nobr>
                  </th>
                  <th>{edit}</th>
                  <th>{deleteI}</th>
                </tr>
                {tableData.map((d) => (
                  <tr key={d.id}>
                    <td>
                      <nobr>{d.download} |</nobr>
                    </td>
                    <td>
                      <nobr>{d.edit} |</nobr>
                    </td>
                    <td>
                      <nobr>{d.delet}</nobr>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Grid>
        <Grid item lg={5} xs={12}>
          <div>
            <button className={classes.saveButton}>SAVE</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Righttable;
