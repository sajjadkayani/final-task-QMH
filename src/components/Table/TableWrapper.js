import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { tableHeader } from "./MockData";
import edit from "../../assect/editAction.svg";
import remove from "../../assect/deleteAction.svg";
import UpdateForm from "../ContactUsForm/UpdateForm";
import "./Table.css";

function TableWrapper(props) {
  const [tabledata, setTableData] = useState(props.data);
  const [updateData, setUpdateData] = useState();
  const [id, setId] = useState("");
  const [toggle, setToggle] = useState(true);
  const handledelte = (email) => {
    setTableData(tabledata.filter((item) => item.email !== email));
  };
  const handleupdate = (data, index) => {
    setUpdateData(data);
    setId(index);
    setToggle(false);
  };

  const update = (data) => {
    const newTodos = [...tabledata];
    newTodos[id] = data;
    setTableData(newTodos);
  };
  return (
    <>
      {toggle ? (
        <Box sx={{ mx: 3, mt: 5, p: 5 }}>
          <Box
            sx={{
              background: "#E9E9E9",
              borderRadius: "10px 10px 0px 0px",
            }}
            className="upload-docunment-model"
          >
            <div className="table-wrapper">
              <h2 className="title">User Data</h2>
              <Button
                variant="contained"
                sx={{ mr: 2 }}
                onClick={() => props.changeState(true)}
              >
                Add User
              </Button>
            </div>
          </Box>
          <TableContainer className="declarations-form">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {tableHeader.map((data, index) => {
                    return (
                      <TableCell key={index}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: 600,
                          }}
                        >
                          {data}
                        </Box>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {tabledata.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Box sx={{ display: "flex", columnGap: 3 }}>
                        <img
                          src={edit}
                          alt="icon"
                          onClick={() => handleupdate(row, index)}
                        />
                        <img
                          src={remove}
                          alt="icon"
                          onClick={() => handledelte(row?.email)}
                        />
                      </Box>
                    </TableCell>
                    <TableCell>{row?.member}</TableCell>
                    <TableCell>{row?.company}</TableCell>
                    <TableCell>{row?.email}</TableCell>
                    <TableCell>{row?.phone}</TableCell>
                    <TableCell>{row?.other}</TableCell>
                    <TableCell>{row?.license}</TableCell>
                    <TableCell>{row?.membership}</TableCell>
                    <TableCell>{row?.unit}</TableCell>
                    <TableCell>{row?.street}</TableCell>
                    <TableCell>{row?.streetName}</TableCell>
                    <TableCell>{row?.city}</TableCell>
                    <TableCell>{row?.age}</TableCell>
                    <TableCell>{row?.membershipend}</TableCell>
                    <TableCell>{row?.licenseInfo}</TableCell>
                    <TableCell>{row?.designation}</TableCell>
                    <TableCell>{row?.coDesignation}</TableCell>
                    <TableCell>{row?.province}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <UpdateForm
          updateData={updateData}
          setToggle={setToggle}
          update={update}
        />
      )}
    </>
  );
}

export default TableWrapper;
