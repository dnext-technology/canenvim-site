/* eslint-disable */
import React, { useState, useEffect } from 'react';
import HousePageContainer from '../container/housePageContainer';
import { Button, Input, TextArea, Select } from '../../../components';
import axios from 'axios';
import DataTable from 'react-data-table-component';

import '../style/housePageStyles.scss'

const HousePage = () => {
    const [data, setData] = useState([])
	const [perPage, setPerPage] = useState(10);
    const [totalRow, setTotalRow] = useState(0);
    const [page, setPage] = useState(0);
    const [tckn, setTckn] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [guest, setGuest] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    const [childNumber, setChildNumber] = useState("");
    const [city, setCity] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [district, setDistrict] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [town, setTown] = useState([]);
    const [neighborhoodAddress, setNeighborhoodAddress] = useState([]);
    const [selectedNeighborhoodAddress, setSelectedNeighborhoodAddress] = useState([]);
    const [accommodationType, setAccommodationType] = useState("Ayrı Oda");
    const [accommodationPeriod, setAccommodationPeriod] = useState("1 Haftaya Kadar");
    const [changed, setChanged] = useState(false);
    const [tcknValidasyonError ,setTCKNValidasyonError] = useState({ error: false, message: ""})
    const [emailValidasyonError ,setEmailValidasyonError] = useState({ error: false, message: ""})
    const [phoneValidasyonError ,setPhoneValidasyonError] = useState({ error: false, message: ""})

    const [selectedTown, setSelectedTown] = useState("");

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
      }, [page, changed]);

      useEffect(() => {
        async function fetchData() {
            await axios({
              method: 'GET', url: `https://zorgundostu.com/api/mp-location/v1/locations`
            })
              .then(async response => {
                console.log(response.data)
               setCity(response.data)
               setSelectedCity(response.data[0].name)
              
              })
              .catch(error => {
                return error
              });
            
          }
        fetchData();
      }, []);

      useEffect(() => {
        async function fetchData() {
            if(selectedCity !== "") {
            await axios({
              method: 'GET', url: `https://zorgundostu.com/api/mp-location/v1/locations?city=${selectedCity}`
            })
              .then(async response => {
                console.log(response.data)
                setDistrict(response.data)
                setSelectedDistrict(response.data[0].name)
              })
              .catch(error => {
                return error
              });
            }
            
          }
        fetchData();
      }, [selectedCity]);

      useEffect(() => {
        async function fetchData() {
            if(selectedDistrict !== "") {
            await axios({
              method: 'GET', url: `https://zorgundostu.com/api/mp-location/v1/locations?city=${selectedCity}&district=${selectedDistrict}`
            })
              .then(async response => {
                console.log(response.data)
                setTown(response.data)
                setSelectedTown(response.data[0].name)
              })
              .catch(error => {
                return error
              });
            }
            
          }
        fetchData();
      }, [selectedDistrict]);

      useEffect(() => {
        async function fetchData() {
            if(selectedTown !== "") {
            await axios({
              method: 'GET', url: `https://zorgundostu.com/api/mp-location/v1/locations?city=${selectedCity}&district=${selectedDistrict}&town=${selectedTown}`
            })
              .then(async response => {
                console.log(response.data)
                setNeighborhoodAddress(response.data)
                setSelectedNeighborhoodAddress(response.data[0].name)
              })
              .catch(error => {
                return error
              });
            }
            
          }
        fetchData();
      }, [selectedTown]);

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

    const handleSubmit = async () => {
        console.log("here")
        const params = {
            identityNumber: tckn,
            firstName: name,
            lastName: surname,
            email: email,
            phone: phone,
            city: selectedCity,
            district: selectedDistrict,
            town: selectedTown,
            neighborhood: selectedNeighborhoodAddress,
            addressDetail: addressDetail,
            guestCapacity: guest,
            accommodationType,
            accommodationPeriod
        };
       await axios({
        method: 'POST', url: `https://zorgundostu.com/api/mp-booking/v1/bookings/offerers`,  data: {
            identityNumber: tckn,
            firstName: name,
            lastName: surname,
            email: email,
            phone: phone,
            city: selectedCity,
            district: selectedDistrict,
            town: selectedTown,
            neighborhood: selectedNeighborhoodAddress,
            addressDetail: addressDetail,
            guestCapacity: guest,
            accommodationType: accommodationType,
            accommodationPeriod: accommodationPeriod
        }
      })
        .then(async response => {
          console.log(response.data)
          setChanged(!changed)
        })
        .catch(error => {
          return error
        });
    };

    const checkTCKN = (e) => {
        setTckn(e)
        const tcknformat = /^[1-9]{1}[0-9]{9}[02468]{1}$/;
        if (e.length !== 11 || !e.match(tcknformat)) {
          setTCKNValidasyonError({error: true, message: "T.C. Kimlik Numarası uygun formatta değildir."})
          
        }else{
            setTCKNValidasyonError({error: false, message: ""})
        }
    }

    const checkEmail = (e) => {
        setEmail(e)
        const emailformat = /^([A-Za-z]|[0-9])+$/;
        if (e.match(emailformat)) {
            setEmailValidasyonError({error: true, message: "Eposta adresi uygun formatta değildir."})
          
        }else{
            setEmailValidasyonError({error: false, message: ""})
        }
    }

    const checkPhone = (e) => {
        setPhone(e)
        const phoneformat = /^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/;
        if (!e.match(phoneformat)) {
            setPhoneValidasyonError({error: true, message: "Telefon numarası uygun formatta değildir."})
          
        }else{
            setPhoneValidasyonError({error: false, message: ""})
        }
    }

    console.log(accommodationType, accommodationPeriod, "ll")
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
            <form style={{ width: "80%"}}>
                {/* TCKN */}
                <div style={{display: "flex", flexDirection: "column", fontWeight: 400, width: 420, margin: "0px 30px 0px 10px"}}>
                    <span>T.C. Kimlik No <span style={{ color: "#D42E13"}}>*</span></span>
                    <Input type="number" value={tckn} onChange={(e) => checkTCKN(e.target.value)} />
                    {tcknValidasyonError.error && <p style={{ color: "red", marginLeft: 5}}>{tcknValidasyonError.message}</p>}
                </div>
                {/* Ad soyad */}
                <div style={{display: "flex", margin: 10}}>
                    <div style={{display: "flex", flexDirection: "column", fontWeight: 400, width: 420, margin: "0px 20px 0px 0px"}}>
                        <span>Adınız <span style={{ color: "#D42E13"}}>*</span></span> 
                        <Input value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", fontWeight: 400,width: 420, margin: "0px 20px 0px 0px"}}>
                        <span>Soyadınız <span style={{ color: "#D42E13"}}>*</span></span> 
                        <Input value={surname} onChange={(e) => setSurname(e.target.value)}/>
                    </div>
                </div>
                {/* Email Telefon */}
                <div style={{display: "flex", fontWeight: 400, margin: 10}}>
                    <div style={{display: "flex", flexDirection: "column",width: 420, margin: "0px 20px 0px 0px"}}>
                        E-posta
                        <Input value={email} onChange={(e) => checkEmail(e.target.value)}/>
                        {emailValidasyonError.error && <p style={{ color: "red", marginLeft: 5}}>{emailValidasyonError.message}</p>}
                    </div>
                    <div style={{display: "flex", flexDirection: "column",width: 420, margin: "0px 20px 0px 0px"}}>
                        <span>Telefon <span style={{ color: "#D42E13"}}>*</span></span> 
                        <Input value={phone} onChange={(e) => checkPhone(e.target.value)}/>
                        {phoneValidasyonError.error && <p style={{ color: "red", marginLeft: 5}}>{phoneValidasyonError.message}</p>}
                    </div>
                </div>
                <div style={{display: "flex", fontWeight: 400, margin: 10}}>
                    {/* Kaç Misafir Kaç Çocuk */}
                    <div style={{display: "flex"}}>
                        <div style={{display: "flex", flexDirection: "column", width: 205, margin: "0px 10px 0px 0px"}}>
                        <span>Kaç Kişi Misafir Edebilirsiniz? <span style={{ color: "#D42E13"}}>*</span></span> 
                            <Input value={guest} onChange={(e) => setGuest(e.target.value)}/>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", width: 205, margin: "0px"}}>
                            Misafirlerin Kaç Tanesi Çocuk
                            <Input value={childNumber} onChange={(e) => setChildNumber(e.target.value)}/>
                        </div>
                    </div>
                    {/* Misafirlik Süresi Konaklama Türü */}
                    <div style={{display: "flex", marginLeft: 10}}>
                        <div style={{display: "flex", flexDirection: "column", width: 205, margin: "0px 10px 0px 10px"}}>
                            Misafirlik Süresi
                            <Select value={accommodationPeriod} onChange={(e) => setAccommodationPeriod(e.target.value)} data={[{name: "1 Haftaya Kadar"}, {name: "2 Haftaya Kadar"}, {name: "1 Aya Kadar"}, {name: "Belirsiz"}]} />
                        </div>
                        <div style={{display: "flex", flexDirection: "column", width: 205, margin: "0px"}}>
                            Konaklama Türü
                            <Select value={accommodationType} onChange={(e) => setAccommodationType(e.target.value)}  data={[{name: "Ayrı Oda"}, {name: "Otel Odası"}, {name: "Bağımsız"}]} />
                        </div>
                    </div>
                </div>
                {/* İl İlçe */}
                <div style={{display: "flex", fontWeight: 400, margin: 10}}>
                    <div style={{display: "flex", flexDirection: "column", width: 420, margin: "0px 20px 0px 0px"}}>
                        <span>İl <span style={{ color: "#D42E13"}}>*</span></span> 
                        <Select onChange={(e) => setSelectedCity(e.target.value)} data={city} />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: 420, margin: "0px 20px 0px 0px"}}>
                        <span>İlçe <span style={{ color: "#D42E13"}}>*</span></span> 
                        <Select disabled={selectedCity === ""} onChange={(e) => setSelectedDistrict(e.target.value)} data={district} />
                    </div>
                </div>
                {/* Semt Mahalle */}
                <div style={{display: "flex", fontWeight: 400, margin: 10}}>
                    <div style={{display: "flex", flexDirection: "column", width: 420, margin: "0px 20px 0px 0px"}}>
                        Semt
                        <Select disabled={selectedDistrict === ""} onChange={(e) => setSelectedTown(e.target.value)} data={town} />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: 420, margin: "0px 20px 0px 0px"}}>
                        Mahalle
                        <Select disabled={selectedTown === ""} onChange={(e) => setSelectedNeighborhoodAddress(e.target.value)} data={neighborhoodAddress} />
                    </div>
                </div>
                {/* Adres Tarifi */}
                <div style={{display: "flex", flexDirection: "column", fontWeight: 400, width: "100%", margin: 10}}>
                Adres Tarifi ( Zorunlu Değil )
                    <TextArea value={addressDetail} onChange={(e) => setAddressDetail(e.target.value)}/>
                </div>
                {/* Ekstra Bilgi */}
                <div style={{display: "flex", flexDirection: "column", fontWeight: 400, width: "100%", margin: 10}}>
                   Ekstra Bilgi ( Zorunlu Değil )
                   <TextArea value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)}/>
                </div>
                <div style={{display: "flex", flexDirection: "column", fontWeight: 400, width: 200, margin: "0px 30px 0px 10px"}}>
                    <Button 
                        disabled={tckn === "" || name === "" || surname === "" || phone === "" || city === "" || district === "" || guest === ""}
                        onClick={(e) => {
                            e.preventDefault()
                            handleSubmit()}
                        }
                        text="Gönder" 
                        styleProps={{border: "1px solid #323232", borderRadius: 48, backgroundColor: "#323232", color: "#FFFFFF", padding: "10px 20px"}}
                    />
                </div>
            </form>
        </div>
        <div className='house-list-container'>
            <div style={{ marginTop: 30}}>
                <p style={{ fontSize: 40, color: "#323232"}}>Konaklama Listesi</p>
                <p style={{ fontSize: 18, color: "#323232"}}>Aşağıdaki tabloda konaklama yeri ihtiyacı olan kişilere erişebilirsiniz.</p>
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
      )}}
    </HousePageContainer>
);
}
export default HousePage;

