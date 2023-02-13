/* eslint-disable */
import React, { useEffect, useState } from 'react';
import GuestListPageContainer from '../container/guestListPageContainer';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Banner from '../../../assets/images/bannerzor.png';
import 'react-toastify/dist/ReactToastify.css';
import '../style/guestListPageStyles.scss'

const GuestListPage = () => {
    const [data, setData] = useState([])
    const [perPage, setPerPage] = useState(10);
    const [totalRow, setTotalRow] = useState(0);
    const [page, setPage] = useState(0);
    const [changed] = useState(false);


    const columns = [
        {
            name: 'Tarih',
            selector: row => row.createdDate,
        },
        {
            name: 'Ad Soyad',
            selector: row => row.name,
        },
        {
            name: 'Konaklama Süresi',
            selector: row => row.time,
        },
        {
            name: 'Toplam Misafir Sayısı',
            selector: row => row.totalGuest,
        },
        {
            name: 'Yetişkin Sayısı',
            selector: row => row.adult,
        },
        {
            name: 'Çocuk Sayısı',
            selector: row => row.child,
        },
        {
            name: 'Durum',
            selector: row => row.status,
        },
        {
            name: 'İlçe',
            selector: row => row.district,
        },
        {
            name: 'İl',
            selector: row => row.city,
        },

    ];

    useEffect(() => {
        async function fetchData() {
            await axios({
                method: 'GET',
                url: `https://zorgundostu.com/api/mp-booking/v1/bookings/requesters?page=${page}&size=${perPage}`
            })
                .then(async response => {
                    setTotalRow(response.data?.totalElements)
                    setData(response.data?.content.map((is, index) => {
                        return (
                            {
                                id: is.id,
                                createdDate: is.createdDate,
                                name: `${is.firstName} ${is.lastName.substring(0, 1)}.`,
                                time: is.accommodationPeriod,
                                adult: is.adultNumber,
                                child: is.childNumber,
                                totalGuest: is.adultNumber + is.childNumber,
                                address: is.addressDetail,
                                city: is.city,
                                district: is.district,
                                status: is.status === "active" ? "Aktif" : is.status === "completed" ? "Tamamlandı" : "Devam Ediyor"
                            }
                        )
                    }))

                })
                .catch(error => {
                    return error
                });

        }

        fetchData();
    }, [page, changed]);


    const customStyles = {
        rows: {
            style: {
                borderBottom: "1px solid #D0D0D0",
                borderLeft: "1px solid #D0D0D0",
                borderRight: "1px solid #D0D0D0",
                minHeight: '72px',
            },
        },
        headRow: {
            style: {
                backgroundColor: "#F5F5F5",
                minHeight: '52px',
                borderRadius: "16px 16px 0px 0px",
                border: "1px solid #D0D0D0",
                fontWeight: 900
            },
        },
        headCells: {
            style: {
                paddingLeft: '5px',
                paddingRight: '0px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
            },
        },
    };

    const handlePageChange = page => {
        setPage(page - 1);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        const response = await axios.get(`https://zorgundostu.com/api/mp-booking/v1/bookings/requesters?page=${page - 1}&size=${newPerPage}`);
        setData(response.data?.content.map((is, index) => {
            return (
                {
                    id: is.id,
                    createdDate: is.createdDate,
                    name: `${is.firstName} ${is.lastName.substring(0, 1)}.`,
                    time: is.accommodationPeriod,
                    adult: is.adultNumber,
                    child: is.childNumber,
                    totalGuest: is.adultNumber + is.childNumber,
                    address: is.addressDetail,
                    city: is.city,
                    district: is.district,
                    status: is.status === "active" ? "Aktif" : is.status === "completed" ? "Tamamlandı" : "Devam Ediyor"
                }
            )
        }))
        setPerPage(newPerPage);
    };

    const paginationOptions = {
        rowsPerPageText: '',
        rangeSeparatorText: '',
        selectAllRowsItem: false,
        selectAllRowsItemText: null,
    };

    return (
        <GuestListPageContainer>
            {({}) => {
                return (
                    <>
                        <img alt="logo" className="bannerzor" src={Banner}/>
                        <div className='house-list-container'>
                            <div style={{marginTop: 30}}>
                                <p style={{fontSize: 40, color: "#323232"}}>Konaklama Talepleri </p>
                                <p style={{fontSize: 18, color: "#323232"}}>Aşağıdaki tabloda konaklama yeri ihtiyacı
                                    olan kişilere erişebilirsiniz.</p>
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
                )
            }}
        </GuestListPageContainer>
    );
}
export default GuestListPage;
