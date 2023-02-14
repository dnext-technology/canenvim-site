/* eslint-disable */
import React, { useEffect, useState } from 'react';
import GuestPageContainer from '../container/guestPageContainer';
import { Button, Input, Select, TextArea } from '../../../components';
import axios from 'axios';
import Banner from '../../../assets/images/banner2.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/guestPageStyles.scss';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faRemove } from '@fortawesome/free-solid-svg-icons'

const GuestPage = () => {
  const {REACT_APP_BASE_URL, REACT_APP_BOOKING_API, REACT_APP_LOCATION_API} = process.env;
  const [note, setNote] = useState("");
  const [tckn, setTckn] = useState("");
  const [name, setName] = useState("");
  const [checkKVKK, setCheckKVKK] = useState(false);
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guest, setGuest] = useState("");
  const [guestTckNo, setGuestTckNo] = useState("");
  const [guestFirstName, setGuestFirstName] = useState("");
  const [guestLastName, setGuestLastName] = useState("");
  const [guestList, setGuestList] = useState([]);
  const [setNeighborhood] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [childNumber, setChildNumber] = useState("");
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [setTown] = useState([]);
  const [setNeighborhoodAddress] = useState([]);
  const [selectedNeighborhoodAddress, setSelectedNeighborhoodAddress] = useState([]);
  const [accommodationType, setAccommodationType] = useState("Ayrı Oda");
  const [accommodationPeriod, setAccommodationPeriod] = useState("");
  const [changed, setChanged] = useState(false);
  const [tcknValidasyonError, setTCKNValidasyonError] = useState({error: false, message: "", stateName: ""})
  const [emailValidasyonError, setEmailValidasyonError] = useState({error: false, message: ""})
  const [phoneValidasyonError, setPhoneValidasyonError] = useState({error: false, message: ""})
  const [nameValidasyonError, setNameValidasyonError] = useState({error: false, message: ""})
  const [guestFirstNameValidationError, setGuestFirstNameValidationError] = useState({error: false, message: ""})
  const [guestLastNameValidationError, setGuestLastNameValidationError] = useState({error: false, message: ""})
  const [surnameValidasyonError, setSurnameValidasyonError] = useState({error: false, message: ""})
  const [selectedTown, setSelectedTown] = useState("");
  const [isEdited, setEdited] = useState(false);
  const columns = [
    {
      name: "Ad",
      selector: (row) => row.firstName,
    },
    {
      name: "Soyad",
      selector: (row) => row.lastName,
    },
    {
      name: "İşlemler",
      button: true,
      cell: (row) => ([
          <div key="{row.identityNumber}">
            <button
              className="btn btn-outline btn-xs"
              onClick={(e) => handleEditButtonClick(e, row)}>
              <FontAwesomeIcon icon={faPencil}  style={{color: "#3f51b5"}}/>
            </button>
            <button
              className="btn btn-outline btn-xs"
              onClick={(e) => handleDeleteButtonClick(e, row)}>
              <FontAwesomeIcon icon={faRemove}  style={{color: "#f44336"}}/>
            </button>
          </div>
        ]
      ),
    }
  ];

  const handleDeleteButtonClick = (e, item) => {
    e.preventDefault();
    if (item) {
      setGuestList(prev => prev.filter(value => value.identityNumber !== item.identityNumber));
    }
  };

  const handleEditButtonClick = (e, item) => {
    setEdited(true);
    e.preventDefault();
    if (item) {
      setGuestTckNo(item.identityNumber);
      setGuestFirstName(item.firstName);
      setGuestLastName(item.lastName);
    }
  };

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

  useEffect(() => {
    async function fetchData() {
      if (selectedTown !== "") {
        await axios({
          method: 'GET',
          url: `${REACT_APP_BASE_URL}${REACT_APP_LOCATION_API}/locations?city=${selectedCity}&district=${selectedDistrict}&town=${selectedTown}`
        })
          .then(async response => {
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

  useEffect(() => {
    async function fetchData() {
      await axios({
        method: 'GET', url: `${REACT_APP_BASE_URL}${REACT_APP_LOCATION_API}/locations`
      })
        .then(async response => {
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
      if (selectedCity !== "") {
        await axios({
          method: 'GET', url: `${REACT_APP_BASE_URL}${REACT_APP_LOCATION_API}/locations?city=${selectedCity}`
        })
          .then(async response => {
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
      if (selectedDistrict !== "") {
        await axios({
          method: 'GET',
          url: `${REACT_APP_BASE_URL}${REACT_APP_LOCATION_API}/locations?city=${selectedCity}&district=${selectedDistrict}`
        })
          .then(async response => {
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

  const handleSubmit = async () => {
    const messageContent = "Bilgileriniz alınmıştır. Taleplerinize uygun imkan sahipleri için sizinle iletişime geçilecektir.";
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
      accommodationType: accommodationType,
      accommodationPeriod: accommodationPeriod
    };
    await axios({
      method: 'POST', url: `${REACT_APP_BASE_URL}${REACT_APP_BOOKING_API}/bookings/requesters`, data: {
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
        adultNumber: guest,
        childNumber: childNumber,
        accommodationPeriod: accommodationPeriod,
        note: note
      }
    })
      .then(async response => {
        setChanged(!changed)
        notify(messageContent, 'success')
        setName("")
        setSurname("")
        setEmail("")
        setTckn("")
        setPhone("")
        setGuest("")
        setNeighborhood("")
        setNote("")
        setAddressDetail("")
        setChildNumber("")
        setCheckKVKK(false)
        setAccommodationType("Ayrı Oda")
        setAccommodationPeriod("1 Haftaya Kadar")
        setTCKNValidasyonError({error: false, message: ""})
        setEmailValidasyonError({error: false, message: ""})
        setPhoneValidasyonError({error: false, message: ""})
      })
      .catch(error => {
        return error
      });
  };

  const checkTCKN = (e, stateName, fcn) => {
    const tcknformat = /^[1-9]{1}[0-9]{9}[02468]{1}$/;
    if (e.length !== 11 || !e.match(tcknformat)) {
      setTCKNValidasyonError({
        error: true,
        message: "T.C. Kimlik Numarası uygun formatta değildir.",
        stateName: stateName
      })
    } else {
      setTCKNValidasyonError({error: false, message: "", stateName: stateName})
    }
    return fcn(e);
  }

  const checkEmail = (e) => {
    setEmail(e)
    const emailformat = /^([A-Za-z]|[0-9])+$/;
    if (e.match(emailformat)) {
      setEmailValidasyonError({error: true, message: "Eposta adresi uygun formatta değildir."})

    } else {
      setEmailValidasyonError({error: false, message: ""})
    }
  }

  const checkPhone = (e) => {
    setPhone(e)
    const phoneformat = /^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/;
    if (!e.match(phoneformat)) {
      setPhoneValidasyonError({error: true, message: "Telefon numarası uygun formatta değildir."})

    } else {
      setPhoneValidasyonError({error: false, message: ""})
    }
  }

  const changeName = (e, setStateName, setValidationName) => {
    const nameformat = /^[a-zA-Z_ğüşıöçĞÜŞİÖÇ ]*$/;
    if (!e.match(nameformat)) {
      setValidationName({error: true, message: "Girdiğiniz bilgi doğru formatta değildir."})
    } else {
      setValidationName({error: false, message: ""})
    }
    setStateName(e);
  }


  const notify = (message, typeValue) => toast(message, {
    position: "top-center",
    className: "black-background",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    type: typeValue
  });

  const addGuestToList = (e) => {
    e.preventDefault();
    if (!isEdited && guestList.length === (+guest) + (+childNumber)) {
      const messageContent = "Belirtilen Yetişkin ve Çocuk sayısından fazla kişi eklenemez";
      notify(messageContent, 'warning');
      resetGuestForm();
      return;
    }
    const isExisting = guestList.find(value => value.identityNumber === guestTckNo);
    if (isExisting) {
      isExisting.identityNumber = guestTckNo;
      isExisting.firstName = guestFirstName;
      isExisting.lastName = guestLastName;
    } else {
      const newData = (data) => ([...data, {
        identityNumber: guestTckNo,
        firstName: guestFirstName,
        lastName: guestLastName
      }])
      setGuestList(newData);
      setEdited(false);
    }
    resetGuestForm();
  }

  const resetGuestForm = () => {
    setGuestTckNo('');
    setGuestFirstName('');
    setGuestLastName('');
  }

  return (
    <GuestPageContainer>
      {({}) => {
        return (
          <>
            <img alt="logo" className="bannerzor" src={Banner}/>
            <div className='row house-container w-100 mx-auto'>
              <p className='guest-text w-75 mx-auto'>Konaklama İhtiyacım Var</p>
              <div className='guest-text-container col-12 w-75 mx-auto'>
                <div className='guest-text2'>
                  Doldurduğunuz formdaki bilgiler konaklama ihtiyacı sahipleri için listelenecek ve
                  görüntülenebilecektir. Konaklama ihtiyacı sahipleri sizleri arayabilir ve görüşebilir.
                  Yardımcı olduğunuz için teşekkür ederiz.
                </div>
              </div>

              <p className='ilan w-75 mx-auto my-2 line-middle'>İlan Bilgi Formu</p>
              <form className="row w-75 mx-auto px-0 ilan-bilgi-formu">
                {/* TCKN */}
                <div className='d-flex flex-column col-md-6 mb-1'>
                  <span className="line-default label">T.C. Kimlik No <span style={{color: "#D42E13"}}>*</span></span>
                  <Input error={tcknValidasyonError.error && tcknValidasyonError.stateName === 'tckn'}
                         styleProps={{maxWidth: '100%'}} placeholder="T.C. Kimlik No"
                         type="number" value={tckn}
                         onChange={(e) => checkTCKN(e.target.value, 'tckn', (item) => setTckn(item))}/>
                  {tcknValidasyonError.error && tcknValidasyonError.stateName === 'tckn' &&
                    <p style={{color: "#525252", marginLeft: 5}}>{tcknValidasyonError.message}</p>}
                </div>
                <div className="offset-6"></div>
                {/* Ad soyad */}
                {/*<div className='name-surname'>*/}
                <div className='d-flex flex-column col-md-6 my-1'>
                  <span className="line-default label">Adınız <span style={{color: "#D42E13"}}>*</span></span>
                  <Input placeholder="Adınız" styleProps={{maxWidth: '100%'}} error={nameValidasyonError.error}
                         value={name} onChange={(e) => changeName(e.target.value, setName, setNameValidasyonError)}/>
                  {nameValidasyonError.error &&
                    <p style={{color: "#525252", marginLeft: 5}}>{nameValidasyonError.message}</p>}
                </div>
                <div className='d-flex flex-column col-md-6 my-1'>
                  <span className="line-default label">Soyadınız <span style={{color: "#D42E13"}}>*</span></span>
                  <Input placeholder="Soyadınız" styleProps={{maxWidth: '100%'}} error={surnameValidasyonError.error}
                         value={surname}
                         onChange={(e) => changeName(e.target.value, setSurname, setSurnameValidasyonError)}/>
                  {surnameValidasyonError.error &&
                    <p style={{color: "#525252", marginLeft: 5}}>{surnameValidasyonError.message}</p>}
                </div>
                {/*</div>*/}
                {/* Email Telefon */}
                {/*<div className='name-surname' >*/}
                <div className='d-flex flex-column col-md-6 my-1'>
                  <span className="line-default label">E-posta</span>
                  <Input placeholder="E-posta" styleProps={{maxWidth: '100%'}} error={emailValidasyonError.error}
                         value={email} onChange={(e) => checkEmail(e.target.value)}/>
                  {emailValidasyonError.error &&
                    <p style={{color: "#525252", marginLeft: 5}}>{emailValidasyonError.message}</p>}
                </div>
                <div className='d-flex flex-column col-md-6 my-1'>
                  <span className="line-default label">Telefon <span style={{color: "#D42E13"}}>*</span></span>
                  <Input error={phoneValidasyonError.error} styleProps={{maxWidth: '100%'}} placeholder="05xx xxx xx xx"
                         value={phone} onChange={(e) => checkPhone(e.target.value)}/>
                  {phoneValidasyonError.error &&
                    <p style={{color: "#525252", marginLeft: 5}}>{phoneValidasyonError.message}</p>}
                </div>
                {/*</div>*/}
                {/*<div className='col-12' >*/}
                {/* Kaç Misafir Kaç Çocuk */}
                <div className='d-flex flex-column col-lg-4 col-md-6 my-1'>
                  <span className="line-default label">Yetişkin Sayısı <span style={{color: "#D42E13"}}>*</span></span>
                  <Input placeholder="Yetişkin Sayısı" styleProps={{maxWidth: '100%'}} type="number" value={guest}
                         onChange={(e) => setGuest(e.target.value)}/>
                </div>
                <div className='d-flex flex-column col-lg-4 col-md-6 my-1'>
                  <span className="line-default label"> Çocuk Sayısı</span>
                  <Input placeholder="Çocuk Sayısı" type="number" styleProps={{maxWidth: '100%'}} value={childNumber}
                         onChange={(e) => setChildNumber(e.target.value)}/>
                </div>
                {/* Misafirlik Süresi Konaklama Türü */}
                <div className='d-flex flex-column col-lg-4 col-md-6 my-1'>
                  <span className="line-default label"> Ne Kadar Süre Konaklanacak</span>
                  <Input placeholder="Konaklama Süersi" styleProps={{maxWidth: '100%'}}
                         value={accommodationPeriod} onChange={(e) => setAccommodationPeriod(e.target.value)}/>
                </div>

                {/*</div>*/}
                {/* İl İlçe */}
                {/*<div className='name-surname'>*/}
                <div className='d-flex flex-column col-md-6 my-1'>
                  <span className="line-default label">İl <span style={{color: "#D42E13"}}>*</span></span>
                  <Select onChange={(e) => setSelectedCity(e.target.value)} data={city}
                          styleProps={{maxWidth: '100%'}}/>
                </div>
                <div className='d-flex flex-column col-md-6 my-1'>
                  <span className="line-default label">İlçe <span style={{color: "#D42E13"}}>*</span></span>
                  <Select disabled={selectedCity === ""} onChange={(e) => setSelectedDistrict(e.target.value)}
                          data={district} styleProps={{maxWidth: '100%'}}/>
                </div>

                <h2 className="line-middle">Konaklayacaklar Listesi</h2><br/>
                <div className='d-flex flex-column col-lg-3 col-md-6 my-1'>
                  <span className="line-default label">T.C. Kimlik No<span style={{color: "#D42E13"}}>*</span></span>
                  <Input error={tcknValidasyonError.error && tcknValidasyonError.stateName === 'guestTckNo'}
                         styleProps={{maxWidth: '100%'}} placeholder="T.C. Kimlik No"
                         type="number" value={guestTckNo}
                         onChange={(e) => checkTCKN(e.target.value, 'guestTckNo', (item) => setGuestTckNo(item))}/>
                  {tcknValidasyonError.error && tcknValidasyonError.stateName === 'guestTckNo' &&
                    <p style={{color: "#525252", marginLeft: 5}}>{tcknValidasyonError.message}</p>}
                </div>
                <div className='d-flex flex-column col-lg-4 col-md-6 my-1'>
                  <span className="line-default label">Adı<span style={{color: "#D42E13"}}>*</span></span>
                  <Input placeholder="Adı" styleProps={{maxWidth: '100%'}} error={guestFirstNameValidationError.error}
                         value={guestFirstName}
                         onChange={(e) => changeName(e.target.value, setGuestFirstName, setGuestFirstNameValidationError)}/>
                  {guestFirstNameValidationError.error &&
                    <p style={{color: "#525252", marginLeft: 5}}>{guestFirstNameValidationError.message}</p>}
                </div>
                <div className='d-flex flex-column col-lg-3 col-md-6 my-1'>
                  <span className="line-default label">Soyadı<span style={{color: "#D42E13"}}>*</span></span>
                  <Input placeholder="Soyadı" styleProps={{maxWidth: '100%'}} error={guestLastNameValidationError.error}
                         value={guestLastName}
                         onChange={(e) => changeName(e.target.value, setGuestLastName, setGuestLastNameValidationError)}/>
                  {guestLastNameValidationError.error &&
                    <p style={{color: "#525252", marginLeft: 5}}>{guestLastNameValidationError.message}</p>}
                </div>
                <div className='d-flex flex-column col-lg-2 col-md-6 my-1 addButton'>
                  <Button
                    disabled={guestTckNo === "" ||
                      guestFirstName === "" ||
                      guestLastName === "" ||
                      (tcknValidasyonError.error && tcknValidasyonError.stateName === 'guestTckNo') ||
                      guestFirstNameValidationError.error ||
                      guestLastNameValidationError.error}
                    text="Ekle"
                    className="third"
                    onClick={(e) => {
                      addGuestToList(e)
                    }}
                    styleProps={{
                      border: "1px solid #323232",
                      borderRadius: 48,
                      backgroundColor: "#323232",
                      color: "#FFFFFF",
                      padding: "10px 20px"
                    }}
                  />
                </div>
                <div className='d-flex flex-column col-lg-12 col-md-6 my-1'>
                  <DataTable
                    columns={columns}
                    data={guestList}
                    responsive
                    customStyles={customStyles}
                    noDataComponent="Eklenmiş kişiler"
                  />
                </div>

                {/*</div>*/}
                {/* Semt Mahalle */}
                {/* <div className='name-surname'>
                    <div className='name'>
                        Semt
                        <Select disabled={selectedDistrict === ""} onChange={(e) => setSelectedTown(e.target.value)} data={town} />
                    </div>
                    <div className='name'>
                        Mahalle
                        <Select disabled={selectedTown === ""} onChange={(e) => setSelectedNeighborhoodAddress(e.target.value)} data={neighborhoodAddress} />
                    </div>
                </div> */}
                {/* Adres Tarifi */}
                <div className=' my-1'>
                  <span className="line-default label">Adres Tarifi ( Zorunlu Değil ) </span>
                  <TextArea placeholder="Adres Tarifi" value={addressDetail}
                            onChange={(e) => setAddressDetail(e.target.value)} styleProps={{maxWidth: '100%'}}/>
                </div>
                {/* Ekstra Bilgi */}
                <div className=' my-1'>
                  <span className="line-default label">Özel Not ( Zorunlu Değil ) </span>
                  <TextArea placeholder="Ör. Engeli birey var..." value={note} onChange={(e) => setNote(e.target.value)}
                            styleProps={{maxWidth: '100%'}}/>
                </div>
                <div style={{display: "flex", fontWeight: 400, width: "100%", margin: 10}}>
                  {/* <TextArea placeholder="Örnek: Engelli birey var" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)}/> */}
                  <input value={checkKVKK} onChange={(e) => setCheckKVKK(e.target.checked ? true : false)}
                         type="checkbox" id="vehicle1" name="vehicle1"></input>
                  <a
                    download="KVKK.pdf"
                    href="KVKK.pdf"
                    style={{marginLeft: 10, color: "#323232"}}>
                    KVKK Metnini okudum ve kabul ediyorum.<span style={{color: "#D42E13E5"}}>*</span>
                  </a>
                </div>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: 400,
                  width: 200,
                  margin: "0px 30px 0px 10px"
                }}>
                  <Button
                    disabled={tckn === "" || name === "" || surname === "" || phone === "" || city === "" || district === "" || guest === "" || nameValidasyonError.error || surnameValidasyonError.error || tcknValidasyonError.error || emailValidasyonError.error || phoneValidasyonError.error || !checkKVKK}
                    onClick={(e) => {
                      e.preventDefault()
                      handleSubmit()
                    }}
                    text="Gönder"
                    styleProps={{
                      border: "1px solid #323232",
                      borderRadius: 48,
                      backgroundColor: "#323232",
                      color: "#FFFFFF",
                      padding: "10px 20px"
                    }}
                  />

                  <ToastContainer/>
                </div>
              </form>
            </div>
          </>
        )
      }}
    </GuestPageContainer>
  );
}
export default GuestPage;