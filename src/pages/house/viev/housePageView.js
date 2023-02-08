/* eslint-disable */
import React, { useState, useEffect } from 'react';
import HousePageContainer from '../container/housePageContainer';
import { Button, Input } from '../../../components';
import axios from 'axios';
import DataTable from 'react-data-table-component';

import '../style/housePageStyles.scss'

const HousePage = () => {
    const [data, setData] = useState([])
	const [perPage, setPerPage] = useState(10);
    const [totalRow, setTotalRow] = useState(0);
    const [page, setPage] = useState(0);

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
            name: 'Kişi Sayısı',
            selector: row => row.person,
        },
        {
            name: 'Konaklama Yeri',
            selector: row => row.address,
        },
        {
            name: 'İl',
            selector: row => row.city,
        },
        {
            name: 'İlçe',
            selector: row => row.district,
        },
    ];
    useEffect(() => {
        async function fetchData() {
            await axios({
              method: 'GET', url: `https://zorgundostu.com/api/mp-booking/v1/bookings/offerers?page=${page}&size=${perPage}`
            })
              .then(async response => {
               setTotalRow(response.data?.totalElements)
               setData(response.data?.content.map((is,index) => {
                return (
                    {
                        id: is.id,
                        createdDate: is.createdDate,
                        name: is.firstName,
                        time: is.accommodationPeriod,
                        person: is.guestCapacity,
                        address: is.addressDetail,
                        city: is.city,
                        district: is.district
                    }
                )
            }))
               
              })
              .catch(error => {
                return error
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
                minHeight: '72px', // override the row height
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
                
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };

    const handlePageChange = page => {
		setPage(page - 1 );
	};

	const handlePerRowsChange = async (newPerPage, page) => {
		const response = await axios.get(`https://zorgundostu.com/api/mp-booking/v1/bookings/offerers?page=${page -1}&size=${newPerPage}`);

		setData(response.data?.content.map((is,index) => {
            return (
                {
                    id: is.id,
                    createdDate: is.createdDate,
                    name: is.firstName,
                    time: is.accommodationPeriod,
                    person: is.guestCapacity,
                    address: is.addressDetail,
                    city: is.city,
                    district: is.district
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
return(
    <HousePageContainer>
    {({}) => {
    return(
        <>
        <div className='banner'/>
        <div className='house-container'>
            <p className='guest-text'>Misafir Etmek İstiyorum</p>
            <div className='guest-text-container'>
                <div className='guest-text2'>
                Doldurduğunuz formdaki bilgiler konaklama ihtiyacı sahipleri için listelenecek ve görüntülenebilecektir. Konaklama ihtiyacı sahipleri sizleri arayabilir ve görüşebilir.
                Yardımcı olduğunuz için teşekkür ederiz.
                </div>
              
            </div>
            <p style={{ color: "#323232", fontWeight: 700, fontSize: 24, marginTop: 20}}>İlan Bilgi Formu</p>
            <form style={{ width: "100%"}}>
                <div style={{display: "flex", flexDirection: "column", fontWeight: 400, width: 420, margin: "0px 30px 0px 10px"}}>
                    T.C. Kimlik No
                    <Input />
                </div>
                <div style={{display: "flex", margin: 10}}>
                    <div style={{display: "flex", flexDirection: "column", fontWeight: 400, width: 420, margin: "0px 20px 0px 0px"}}>
                        Adınız
                        <Input />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", fontWeight: 400,width: 420, margin: "0px 20px 0px 0px"}}>
                        Soyadınız
                        <Input />
                    </div>
                </div>
                <div style={{display: "flex", fontWeight: 400, margin: 10}}>
                    <div style={{display: "flex", flexDirection: "column",width: 420, margin: "0px 20px 0px 0px"}}>
                        E-posta
                        <Input />
                    </div>
                    <div style={{display: "flex", flexDirection: "column",width: 420, margin: "0px 20px 0px 0px"}}>
                         Telefon
                        <Input />
                    </div>
                </div>
                <div style={{display: "flex", fontWeight: 400, margin: 10}}>
                    <div style={{display: "flex", flexDirection: "column", width: 210, margin: "0px 10px 0px 0px"}}>
                    Kaç Kişi Misafir Edebilirsiniz?
                        <Input />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: 210, margin: "0px"}}>
                    Misafirlerin Kaç Tanesi Çocuk
                        <Input />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: 210, margin: "0px 10px 0px 10px"}}>
                    Misafirlik Süresi
                        <Input />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: 210, margin: "0px"}}>
                    Konaklama Türü
                        <Input />
                    </div>
                </div>
                <div style={{display: "flex", fontWeight: 400, margin: 10}}>
                    <div style={{display: "flex", flexDirection: "column", width: 420, margin: "0px 20px 0px 0px"}}>
                        İl
                        <Input />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: 420, margin: "0px 20px 0px 0px"}}>
                        İlçe
                        <Input />
                    </div>
                </div>
                <div style={{display: "flex", fontWeight: 400, margin: 10}}>
                    <div style={{display: "flex", flexDirection: "column", width: 420, margin: "0px 20px 0px 0px"}}>
                        Semt
                        <Input />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: 420, margin: "0px 20px 0px 0px"}}>
                        Mahalle
                        <Input />
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", fontWeight: 400, width: "100%", margin: 10}}>
                   Adres Tarifi
                    <Input />
                </div>
                <div style={{display: "flex", flexDirection: "column", fontWeight: 400, width: "100%", margin: 10}}>
                   Ekstra Bilgi
                   <Input />
                </div>
                <div style={{display: "flex", flexDirection: "column", fontWeight: 400, width: 200, margin: "0px 30px 0px 10px"}}>
                 <input style={{ border: "1px solid #323232", borderRadius: 48, backgroundColor: "#323232", color: "#FFFFFF", padding: "10px 20px"}} type="submit" value="Gönder" />
                </div>
            </form>
        </div>
        <div className='house-list-container'>
            <div style={{ marginTop: 30}}>
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
                />
            </div>
        </div>
        </>
      )}}
    </HousePageContainer>
);
}
export default HousePage;

