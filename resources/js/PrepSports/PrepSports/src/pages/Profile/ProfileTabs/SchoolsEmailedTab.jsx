import React, { useContext, useEffect, useState } from "react";
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
import Loader from "../../../components/Loader/Loader";
import { findSportNameBySportId } from "../../../utils/helpers";
import { SportsInfoContext } from "../../../state/sportsInfo";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  ".MuiTableRow-root": {
    height: "40px"
  }
});

const SchoolsEmailedTab = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [recipients, setRecipients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  const { sportsInfo } = useContext(SportsInfoContext);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getLog(userInfo?.access_token);

        const opened = response?.opened;
        const sent = response?.sent;

        opened.forEach(item => (item.isSeen = true));
        sent.forEach(item => (item.isSeen = false));

        const result = opened.concat(sent);
        console.log("result", result);
        setRecipients(result);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    })();
  }, []);

  function createData(coach, sport, organization, college, status) {
    return { coach, sport, organization, college, status };
  }

  const rows = [];

  if (recipients.length > 0) {
    recipients.forEach(coach => {
      rows.push(
        createData(
          coach.coach_info.head_coach,
          coach.coach_info.sport,
          coach.coach_info.organization,
          coach.coach_info.college,
          coach.isSeen
        )
      );
    });
  }

  return (
    <div>
      {userInfo?.paid_plans === "1" ? (
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Coach</TableCell>
                    <TableCell align="left">Sport</TableCell>
                    <TableCell align="left">Organization</TableCell>
                    <TableCell align="left">College</TableCell>
                    <TableCell align="left">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.coach}>
                      <TableCell align="left">{row.coach}</TableCell>
                      <TableCell align="left">{row.sport}</TableCell>
                      <TableCell align="left">{row.organization}</TableCell>
                      <TableCell align="left">{row.college}</TableCell>
                      <TableCell align="left">
                        {row.status ? (
                          <i aria-hidden="true" className="icons">
                            visibility
                          </i>
                        ) : (
                          <i aria-hidden="true" className="icons">
                            visibility_off
                          </i>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      ) : (
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
