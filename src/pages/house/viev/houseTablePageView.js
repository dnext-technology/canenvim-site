/* eslint-disable */
import React, { useState, useEffect } from "react";
import HousePageContainer from "../container/housePageContainer";
import axios from "axios";
import DataTable from "react-data-table-component";
import Banner from "../../../assets/images/banner2.png";
import "react-toastify/dist/ReactToastify.css";
import "../style/housePageStyles.scss";

const HouseTablePage = () => {
  const { REACT_APP_BASE_URL, REACT_APP_BOOKING_API, REACT_APP_LOCATION_API } = process.env;
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [totalRow, setTotalRow] = useState(0);
  const [page, setPage] = useState(0);

  const columns = [
    {
      name: "Tarih",
      selector: (row) => row.createdDate,
    },
    {
      name: "Ad Soyad",
      selector: (row) => row.name,
    },
    {
      name: "Konaklama Süresi",
      selector: (row) => row.time,
    },
    {
      name: "Kişi Sayısı",
      selector: (row) => row.person,
    },
    {
      name: "Durum",
      selector: (row) => row.status,
    },
    {
      name: "İlçe",
      selector: (row) => row.district,
    },
    {
      name: "İl",
      selector: (row) => row.city,
    },
  ];

  useEffect(() => {
    async function fetchData () {
      await axios({
        method: "GET",
        url: `${REACT_APP_BASE_URL}${REACT_APP_BOOKING_API}/bookings/offerers?page=${page}&size=${perPage}`,
      })
        .then(async (response) => {
          setTotalRow(response.data?.totalElements);
          setData(
            response.data?.content.map((is, index) => {
              return {
                id: is.id,
                createdDate: is.createdDate,
                name: `${is.firstName} ${is.lastName.substring(0, 1)}.`,
                time: is.accommodationPeriod,
                person: is.guestCapacity,
                address: is.addressDetail,
                city: is.city,
                district: is.district,
                status:
                  is.status === "active"
                    ? "Aktif"
                    : is.status === "completed"
                      ? "Tamamlandı"
                      : "Devam Ediyor",
              };
            })
          );
        })
        .catch((error) => {
          return error;
        });
    }
    fetchData();
  }, [page]);

  const customStyles = {
    rows: {
      style: {
        borderBottom: "1px solid #D0D0D0",
        borderLeft: "1px solid #D0D0D0",
        borderRight: "1px solid #D0D0D0",
        minHeight: "72px", // override the row height
      },
    },
    headRow: {
      style: {
        backgroundColor: "#F5F5F5",
        minHeight: "52px",
        borderRadius: "16px 16px 0px 0px",
        border: "1px solid #D0D0D0",
        fontWeight: 900,
      },
    },
    headCells: {
      style: {
        paddingLeft: "5px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  const handlePageChange = (page) => {
    setPage(page - 1);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    const response = await axios.get(
      `${REACT_APP_BASE_URL}${REACT_APP_BOOKING_API}/bookings/offerers?page=${page - 1
      }&size=${newPerPage}`
    );
    setData(
      response.data?.content.map((is, index) => {
        return {
          id: is.id,
          createdDate: is.createdDate,
          name: `${is.firstName} ${is.lastName.substring(0, 1)}.`,
          time: is.accommodationPeriod,
          person: is.guestCapacity,
          address: is.addressDetail,
          city: is.city,
          district: is.district,
          status:
            is.status === "active"
              ? "Aktif"
              : is.status === "completed"
                ? "Tamamlandı"
                : "Devam Ediyor",
        };
      })
    );
    setPerPage(newPerPage);
  };
  const paginationOptions = {
    rowsPerPageText: "",
    rangeSeparatorText: "",
    selectAllRowsItem: false,
    selectAllRowsItemText: null,
  };

  return (
    <HousePageContainer>
      {({ }) => {
        return (
          <>
            <img alt="logo" className="bannerzor" src={Banner} />
            <div className="house-list-container">
              <div style={{ marginTop: 30 }}>
                <p style={{ fontSize: 40, color: "#323232" }}>
                  Misafir Kabul Edebilenler
                </p>
                <p style={{ fontSize: 18, color: "#323232" }}>
                  Aşağıdaki tabloda misafir kabul edebilecek olan kişileri
                  görüntüleyebilirsiniz.
                </p>
                <DataTable
                  columns={columns}
                  data={data}
                  pagination
                  paginationRowsPerPageOptions={[10, 25, 50, 100]}
                  responsive
                  customStyles={customStyles}
                  paginationServer
                  onChangeRowsPerPage={handlePerRowsChange}
                  paginationTotalRows={totalRow}
                  onChangePage={handlePageChange}
                  paginationComponentOptions={paginationOptions}
                  noDataComponent="Gösterilecek veri bulunmamaktadır"
                />
              </div>
            </div>
          </>
        );
      }}
    </HousePageContainer>
  );
};
export default HouseTablePage;
