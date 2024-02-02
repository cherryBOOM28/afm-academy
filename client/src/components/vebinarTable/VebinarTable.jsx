import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
} from "@mui/material";
import React, { useState, useEffect, Children } from "react";

import { BiPlus } from "react-icons/bi";
import img from "./../../assets/images/vebinar-img.png";

import "./vebinarTable.scss";
import axios from "axios";
import base_url from "../../settings/base_url";
import { useStyle } from "../VisualModal/StyleContext";
import { useTranslation } from "react-i18next";


const VebinarTable = () => {
    const { styles, open, setOpen, checkStyle, userEntry } = useStyle();
  const [imagesHidden, setImagesHidden] = useState(false);
  const [letterInterval, setLetterInterval] = useState("standard");
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    if(!checkStyle) return;
    console.log(userEntry)
    if (userEntry) return; 
    const textContentElement = document.querySelectorAll(".text-content");
    const size = styles.fontSize;
    setImagesHidden(!styles.showImage);

    if (textContentElement) {
      textContentElement.forEach((item) => {
        switch (size) {
          case "small":
            item.style.fontSize = "15px";
            item.style.lineHeight = "18px";
            break;
          case "standard":
            item.style.fontSize = "20px";
            item.style.lineHeight = "23px";
            break;
          case "large":
            item.style.fontSize = "24px";
            item.style.lineHeight = "27px";
            break;
          default:
            break;
        }
      });
    }

    handleColorModeChange();
  }, []);
  const handleColorModeChange = (mode) => {
    // Remove previous color mode classes
    const containerElement = document.querySelector(".text-content");
    if (containerElement) {
      containerElement.classList.remove(
        "light-mode",
        "dark-mode",
        "inverted-mode",
        "blue-mode",
      );
    }

    const { colorMode } = styles;

    if (containerElement) {
      containerElement.classList.add(colorMode + "-mode");
    }
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const handleOpenVisualModal = () => {
    console.log("OPEN");
    setOpenVisualModal((prev) => !prev);
    setOpen((prev) => !prev);
  };
  const [openVisualModal, setOpenVisualModal] = useState(open);

  const handleRemoveImages = () => {
    console.log("Images hidden");

    setImagesHidden(true);
  };

  const handleShowImages = () => {
    setImagesHidden(false);
  };

  const handleIntervalChange = (interval) => {
    console.log("Interval changed");
    setLetterInterval(interval);
  };

  const getShowImage = () => {
    return imagesHidden;
  };

  const getLetterSpacing = (interval) => {
    interval = styles.letterInterval;

    switch (interval) {
      case "medium":
        return "2px";
      case "large":
        return "4px";
      default:
        return "1px";
    }
  };
  useEffect(() => {
    const textContentElement = document.querySelector(".text-content");
    const family = styles.fontFamily;

    if (family) {
      textContentElement.style.fontFamily = family;
    }
  }, []);

  const [vebinars, setVebinars] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const jwtToken = localStorage.getItem("jwtToken");
  const { colorMode } = styles;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${base_url}/api/aml/webinar/getWebinars`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );

        if (response.status === 200) {
          // console.log(response.data)
          setVebinars(response.data);
        } else {
          // Handle other status codes if needed
          setError(response.statusText);
          // console.log(response.statusText);
        }
      } catch (error) {
        setError(error);
        console.error(error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const columns = [
    "Тема",
    "Время",
    "Аудитория",
    "Лекторы",
    "Формат",
    "Ограничения",
    "", // for actions
  ];

  const [rows, setRows] = useState([
    {
      id: 1,
      title: "title",
      img: img,
      time: "2002",
      lector: "maku",
      format: "online",
      auditory: "202",
      contingent: "50ppl",
    },
    {
      id: 1,
      title: "title",
      img: img,
      time: "2002",
      lector: "maku",
      format: "online",
      auditory: "202",
      contingent: "50ppl",
    },
  ]);

  const rowsPerPage = 10;

  const [page, setPage] = useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const cellPadding = "20px 0px";
  const cellFont = `400 16px/normal 'Inter', sans-serif`;
  const headCellFont = `400 16px/normal`;
  const cellColor = "#3A3939";
  const headCellColor = "#20102B";

  return (
    <>
      <TableContainer
        className="vebinar-table-container"
        component={Paper}
        style={{
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          padding: "0",
          boxSizing: "border-box",
        }}
      >
        <Table className="vebinar-table text-content" style={{ borderSpacing: "8px" }}>
          <TableHead>
            <TableRow
              style={{
                color:
                  styles.colorMode === "dark"
                    ? "#fff"
                    : styles.colorMode === "light"
                    ? "#343434"
                    : styles.colorMode === "blue"
                    ? "#063462"
                    : "#000",

                border: "none",
              }}
              className="table-row"
            >
              {columns.map((column, index) => {
                let last = index === columns.length - 1;

                return (
                  <TableCell className="text-content"
                    style={{
                      minWidth: "100px",
                      padding: cellPadding,
                      font: headCellFont,
                      color:
                        styles.colorMode === "dark"
                          ? "#fff"
                          : styles.colorMode === "light"
                          ? "#20102b"
                          : styles.colorMode === "blue"
                          ? "#063462"
                          : "#000",
                      paddingRight: index + 1,
                      paddingLeft: last ? "10px" : "0px",
                      letterSpacing: getLetterSpacing(letterInterval),
                    }}
                    align={last ? "right" : "left"}
                    key={index}
                  >
                    <div
                      style={{ padding: "0px 10px" }}
                      className="text-content"
                    >
                      {column}
                    </div>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {vebinars
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((row, index) => {
                const datee = new Date(row.date);

                const months = {
                  0: "января",
                  1: "февраля",
                  2: "марта",
                  3: "апреля",
                  4: "мая",
                  5: "июня",
                  6: "июля",
                  7: "августа",
                  8: "сентября",
                  9: "октября",
                  10: "ноября",
                  11: "декабря",
                };

                // Get the day, month, and hour from the date
                const day = datee.getDate();
                const monthIndex = datee.getMonth();
                const month = months[monthIndex];
                const hour = datee.getHours();
                const minutes = datee.getMinutes();

                // Format the date and time
                const formattedDate = `${day} ${month} ${hour
                  .toString()
                  .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
                return (
                  <TableRow key={index} className="table-row text-content">
                    <TableCell className="title text-content">
                      <div>
                        <img src={row.image} alt={row.title} />
                        <span
                          style={{
                            color:
                              styles.colorMode === "dark"
                                ? "#fff"
                                : styles.colorMode === "light"
                                ? "#343434"
                                : styles.colorMode === "blue"
                                ? "#063462"
                                : "#000",
                          }}
                        >
                          {row.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className={"time text-content"}>
                      <div
                        style={{
                          color:
                            styles.colorMode === "dark"
                              ? "#fff"
                              : styles.colorMode === "light"
                              ? "#343434"
                              : styles.colorMode === "blue"
                              ? "#063462"
                              : "#000",
                        }}
                      >
                        {formattedDate}
                      </div>
                    </TableCell>
                    <TableCell className={"auditory text-content"}>
                      <div
                        style={{
                          color:
                            styles.colorMode === "dark"
                              ? "#fff"
                              : styles.colorMode === "light"
                              ? "#343434"
                              : styles.colorMode === "blue"
                              ? "#063462"
                              : "#000",
                        }}
                      >
                        {row.description}
                      </div>
                    </TableCell>
                    <TableCell className={"lector text-content"}>
                      <div
                        style={{
                          color:
                            styles.colorMode === "dark"
                              ? "#fff"
                              : styles.colorMode === "light"
                              ? "#343434"
                              : styles.colorMode === "blue"
                              ? "#063462"
                              : "#000",
                        }}
                      >
                        {row.description}
                      </div>
                    </TableCell>
                    <TableCell className={"format text-content"}>
                      <div
                        style={{
                          color:
                            styles.colorMode === "dark"
                              ? "#fff"
                              : styles.colorMode === "light"
                              ? "#343434"
                              : styles.colorMode === "blue"
                              ? "#063462"
                              : "#000",
                        }}
                      >
                        {row.type}
                      </div>
                    </TableCell>
                    <TableCell className={"contingent text-content"}>
                      <div
                        style={{
                          color:
                            styles.colorMode === "dark"
                              ? "#fff"
                              : styles.colorMode === "light"
                              ? "#343434"
                              : styles.colorMode === "blue"
                              ? "#063462"
                              : "#000",
                        }}
                      >
                        {row.webinar_for_member_of_the_system}
                      </div>
                    </TableCell>
                    <TableCell align={"right"} className={"actions"}>
                      <div>
                        <div className="text-content">Ссылка на вебинар</div>
                        <div className="text-content">Отменить участие</div>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </>
  );
};

export default VebinarTable;
