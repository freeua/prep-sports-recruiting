import React, { useContext, useEffect } from "react";
import { UserInfoContext } from "../../../state/userInfo";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getLog } from "../../../api/coaches.api";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const SchoolsEmailedTab = () => {
  const { userInfo } = useContext(UserInfoContext);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const response = await getLog(userInfo.access_token);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      {userInfo?.paid_plans === "1" ? (
        <h1>Temp</h1>
      ) : (
        // <TableContainer component={Paper}>
        //   <Table className={classes.table} aria-label="simple table">
        //     <TableHead>
        //       <TableRow>
        //         <TableCell>Name</TableCell>
        //         <TableCell align="left">State</TableCell>
        //         <TableCell align="left">College</TableCell>
        //         <TableCell align="left">Organization</TableCell>
        //         <TableCell align="left">Sport</TableCell>
        //         <TableCell align="left">Email</TableCell>
        //       </TableRow>
        //     </TableHead>
        //     <TableBody>
        //       {rows.map(row => (
        //         <TableRow key={row.name}>
        //           <TableCell component="th" scope="row">
        //             {row.name}
        //           </TableCell>
        //           <TableCell align="left">{row.state}</TableCell>
        //           <TableCell align="left">{row.college}</TableCell>
        //           <TableCell align="left">{row.organization}</TableCell>
        //           <TableCell align="left">{row.sport}</TableCell>
        //           <TableCell align="left">{row.email}</TableCell>
        //         </TableRow>
        //       ))}
        //     </TableBody>
        //   </Table>
        // </TableContainer>
        <>
          <h5>You don't have any plans</h5>
          <Link to="/plans">
            <h5 style={{ textDecoration: "underline" }}>Go to Plans Page</h5>
          </Link>
        </>
      )}
    </div>
  );
};

export default SchoolsEmailedTab;
