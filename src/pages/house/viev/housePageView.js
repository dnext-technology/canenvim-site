/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HousePageContainer from '../container/housePageContainer';
import {
  Button,
  Input,
  TextArea,
  Select,
  Datepicker,
} from '../../../components';
import axios from 'axios';
import Banner from '../../../assets/images/banner2.png';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../style/housePageStyles.scss';
import moment from 'moment/moment';
import ValidateHousePage from '../../../validators/ValidateHousePage';
import useFormValidation from '../../../hooks/useFormValidation';
import Checkbox from '../../../components/checkbox/checkboxView';

const HousePage = () => {
  const { REACT_APP_BASE_URL, REACT_APP_BOOKING_API, REACT_APP_LOCATION_API } =
    process.env;

  const INITIAL_STATE = {
    identityNumber: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phone: '',
    city: '',
    district: '',
    town: '',
    neighborhood: '',
    addressDetail: '',
    guestCapacity: '',
    accommodationType: '',
    accommodationPeriod: '',
    accommodationAvailabilityStartDate: '',
    accommodationAvailabilityEndDate: '',
    accommodationAvailabilityDay: '',
    roomType: '',
    furnished: false,
    note: '',
  };

  const navigate = useNavigate();
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [district, setDistrict] = useState([]);
  const [checkKVKK, setCheckKVKK] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [town, setTown] = useState([]);
  const [neighborhoodAddress, setNeighborhoodAddress] = useState([]);
  const [selectedNeighborhoodAddress, setSelectedNeighborhoodAddress] =
    useState('');
  const [selectedTown, setSelectedTown] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState('');
  const [furnish, setFurnished] = useState(false);
  const [accommodationAvailabilityStartDate, setAvailabilityStartDate] = useState(new Date());

  useEffect(() => {
    async function fetchData () {
      await axios({
        method: 'GET',
        url: `${REACT_APP_BASE_URL}${REACT_APP_LOCATION_API}/locations`,
      })
        .then(async (response) => {
          setCity(response.data);
          setSelectedCity(response.data[0].name);
        })
        .catch((error) => {
          return error;
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData () {
      if (selectedCity !== '') {
        await axios({
          method: 'GET',
          url: `${REACT_APP_BASE_URL}${REACT_APP_LOCATION_API}/locations?city=${selectedCity}`,
        })
          .then(async (response) => {
            setDistrict(response.data);
            setSelectedDistrict(response.data[0].name);
          })
          .catch((error) => {
            return error;
          });
      }
    }
    fetchData();
  }, [selectedCity]);

  useEffect(() => {
    async function fetchData () {
      if (selectedDistrict !== '') {
        await axios({
          method: 'GET',
          url: `${REACT_APP_BASE_URL}${REACT_APP_LOCATION_API}/locations?city=${selectedCity}&district=${selectedDistrict}`,
        })
          .then(async (response) => {
            setTown(response.data);
            setSelectedTown(response.data[0].name);
          })
          .catch((error) => {
            return error;
          });
      }
    }
    fetchData();
  }, [selectedDistrict]);

  useEffect(() => {
    async function fetchData () {
      if (selectedTown !== '') {
        await axios({
          method: 'GET',
          url: `${REACT_APP_BASE_URL}${REACT_APP_LOCATION_API}/locations?city=${selectedCity}&district=${selectedDistrict}&town=${selectedTown}`,
        })
          .then(async (response) => {
            setNeighborhoodAddress(response.data);
            setSelectedNeighborhoodAddress(response.data[0].name);
          })
          .catch((error) => {
            return error;
          });
      }
    }
    fetchData();
  }, [selectedTown]);

  useEffect(() => {
    INITIAL_STATE.birthDate = moment(birthDate).format('DD.MM.YYYY');
  }, [birthDate]);

  useEffect(() => {
    INITIAL_STATE.accommodationAvailabilityStartDate = moment(birthDate).format('DD.MM.YYYY');
  }, [accommodationAvailabilityStartDate]);

  useEffect(() => {
    INITIAL_STATE.accommodationAvailabilityEndDate = moment(birthDate).format('DD.MM.YYYY');
  }, [endDate]);
  useEffect(() => {
    INITIAL_STATE.accommodationAvailabilityEndDate = moment(birthDate).format('DD.MM.YYYY');
  }, [endDate]);

  useEffect(() => {
    INITIAL_STATE.furnished = furnish
  }, [furnish]);

  const notify = () => {
    toast(
      'Bilgileriniz alınmıştır. İmkanlarınıza uygun ihtiyaç sahipleri için sizinle iletişime geçilecektir.',
      {
        position: 'top-center',
        className: 'black-background',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        type: 'success',
      }
    );
    setTimeout(() => {
      navigate('/misafir-kabul-edebilenler');
    }, 3000);
  };

  const [firstOnReadySetValues, setFirstOnReadySetValues] = useState(true);

  const onSubmit = async (vls) => {
    await axios({
      method: 'POST',
      url: `${REACT_APP_BASE_URL}${REACT_APP_BOOKING_API}/bookings/offerers`,
      data: vls,
    })
      .then((res) => {
        console.log(res);
        notify();
        reset();
      })
      .catch((error) => {
        return error;
      });
  };

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    reset,
    setInitialValues,
  } = useFormValidation(INITIAL_STATE, ValidateHousePage, onSubmit);

  useEffect(() => {
    if (
      firstOnReadySetValues &&
      selectedCity &&
      selectedDistrict &&
      selectedTown &&
      selectedNeighborhoodAddress
    ) {
      setInitialValues({
        city: selectedCity,
        district: selectedDistrict,
        town: selectedTown,
        neighborhood: selectedNeighborhoodAddress,
        accommodationType: 'Ayrı Oda',
        accommodationPeriod: 'Gün',
      });
      setFirstOnReadySetValues(false);
    }
  }, [
    firstOnReadySetValues,
    selectedCity,
    selectedDistrict,
    selectedTown,
    selectedNeighborhoodAddress,
  ]);

  return (
    <HousePageContainer>
      {({ }) => {
        return (
          <>
            <img alt="logo" className="bannerzor" src={Banner} />
            <div className="house-container">
              <p className="guest-text">Misafir Etmek İstiyorum</p>
              <div className="guest-text-container">
                <div className="guest-text2">
                  Doldurduğunuz formdaki bilgiler konaklama ihtiyacı sahipleri
                  için listelenecek ve görüntülenebilecektir. Konaklama ihtiyacı
                  sahipleri sizleri arayabilir ve görüşebilir. Yardımcı
                  olduğunuz için teşekkür ederiz.
                </div>
              </div>
              <p className="ilan">İlan Bilgi Formu</p>
              <form className="ilan-bilgi-formu">
                {/* TCKN */}
                <div>
                  <Input
                    text="T.C. Kimlik No"
                    placeholder="T.C. Kimlik No"
                    error={errors.identityNumber}
                    errorText={errors.identityNumber}
                    type="number"
                    value={values.identityNumber}
                    onChange={handleChange}
                    name="identityNumber"
                  />
                </div>
                {/* Ad soyad */}
                <div>
                  <div>
                    <Input
                      text="Adınız"
                      placeholder="Adınız"
                      error={errors.firstName}
                      errorText={errors.firstName}
                      value={values.firstName}
                      onChange={handleChange}
                      name="firstName"
                    />
                  </div>
                  <div className="name">
                    <Input
                      text="Soyadınız"
                      placeholder="Soyadınız"
                      error={errors.lastName}
                      errorText={errors.lastName}
                      value={values.lastName}
                      onChange={handleChange}
                      name="lastName"
                    />
                  </div>
                  <div className="name">
                    <Datepicker
                      text="Doğum Tarihi"
                      selected={birthDate}
                      onChange={(date) => setBirthDate(date)}
                      selectsStart
                      dateFormat="dd MMMM yyyy"
                      name="birthDate"
                    />
                  </div>
                </div>
                {/* Email Telefon */}
                <div className="name-surname">
                  <div className="name">
                    <Input
                      text="E-posta"
                      placeholder="E-posta"
                      error={errors.email}
                      errorText={errors.email}
                      value={values.email}
                      onChange={handleChange}
                      name="email"
                    />
                  </div>
                  <div className="name">
                    <Input
                      text="Telefon"
                      placeholder="05xx xxx xx xx"
                      error={errors.phone}
                      errorText={errors.phone}
                      value={values.phone}
                      onChange={handleChange}
                      name="phone"
                    />
                  </div>
                </div>
                <div className="guest-list-house">
                  {/* Kaç Misafir Kaç Çocuk */}
                  <div className="name-surname">
                    <div className="guest-list-number">
                      <Input
                        placeholder="Kaç Kişi Misafir Edebilirsiniz?"
                        text="Kaç Kişi Misafir Edebilirsiniz?"
                        type="number"
                        error={errors.guestCapacity}
                        value={values.guestCapacity}
                        onChange={handleChange}
                        name="guestCapacity"
                      />
                    </div>

                    <div className="guest-list-number">
                      <Input
                        placeholder="Misafirlik Süresi"
                        text="Misafirlik Süresi"
                        type="number"
                        error={errors.accommodationAvailabilityDay}
                        value={values.accommodationAvailabilityDay}
                        onChange={handleChange}
                        name="accommodationAvailabilityDay"
                      />
                      <Select
                        text="Period"
                        value={values.accommodationPeriod}
                        onChange={handleChange}
                        name="accommodationPeriod"
                        data={[
                          { name: 'Gün' },
                          { name: 'Hafta' },
                          { name: 'Ay' },
                          { name: 'Belirsiz' },
                        ]}
                      />
                    </div>
                    <div className="guest-list-number">
                      <Select
                        text="Konaklama Türü"
                        value={values.accommodationType}
                        onChange={handleChange}
                        name="accommodationType"
                        data={[
                          { name: 'Ayrı Oda' },
                          { name: 'Otel Odası' },
                          { name: 'Müstakil Ev' },
                        ]}
                      />
                      <Checkbox
                        text="Eşyalı"
                        type="checkbox"
                        value={values.furnished}
                        onChange={(e) => setFurnished(e.target.checked)}
                        name="furnished"
                      />
                    </div>
                  </div>
                </div>
                {/* Başlangıç tarihi ve Bitiş tarihi */}
                <div className="name-surname">
                  <div className="name">
                    <Datepicker
                      text="Başlangıç Tarihi"
                      selected={startDate}
                      onChange={(date) => setAvailabilityStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      dateFormat="dd MMMM yyyy"
                      name="accommodationAvailabilityStartDate"
                    />
                  </div>
                  <div className="name">
                    <Datepicker
                      text="Bitiş Tarihi"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      placeholderText={`${moment().format('MM/DD/YYYY')}`}
                      dateFormat="dd MMMM yyyy"
                      name="accommodationAvailabilityEndDate"
                    />
                  </div>
                </div>
                {/* İl İlçe */}
                <div className="name-surname">
                  <div className="name">
                    <Select
                      text="İl"
                      data={city}
                      onChange={handleChange}
                      name="city"
                    />
                  </div>
                  <div className="name">
                    <Select
                      text="İlçe"
                      disabled={selectedCity === ''}
                      onChange={handleChange}
                      name="district"
                      data={district}
                    />
                  </div>
                </div>
                {/* Semt Mahalle */}
                <div className="name-surname">
                  <div className="name">
                    <Select
                      text="Semt"
                      disabled={selectedDistrict === ''}
                      onChange={handleChange}
                      name="town"
                      data={town}
                    />
                  </div>
                  <div className="name">
                    <span> </span>
                    <Select
                      text="Mahalle"
                      disabled={selectedTown === ''}
                      onChange={handleChange}
                      name="neighborhood"
                      data={neighborhoodAddress}
                    />
                  </div>
                </div>
                {/* Adres Tarifi */}
                <div className="address-style">
                  <TextArea
                    text="Adres Tarifi ( Zorunlu Değil )"
                    placeholder="Adres Tarifi"
                    value={values.addressDetail}
                    onChange={handleChange}
                    name="addressDetail"
                  />
                </div>
                {/* Ekstra Bilgi */}
                <div className="address-style">
                  <TextArea
                    text="Özel Not ( Zorunlu Değil )"
                    placeholder="Ör. Engeli birey var..."
                    value={values.note}
                    onChange={handleChange}
                    name="note"
                  />
                </div>
                <div>
                  {/* <TextArea placeholder="Örnek: Engelli birey var" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)}/> */}
                  <input
                    value={checkKVKK}
                    onChange={(e) =>
                      setCheckKVKK(e.target.checked ? true : false)
                    }
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                  ></input>
                  <a download="KVKK.pdf" href="KVKK.pdf">
                    KVKK Metnini okudum ve kabul ediyorum.<span>*</span>
                  </a>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontWeight: 400,
                    width: 200,
                    margin: '0px 30px 0px 10px',
                  }}
                >
                  <Button
                    disabled={!checkKVKK}
                    onClick={handleSubmit}
                    type="button"
                    text="Gönder"
                    styleProps={{
                      border: '1px solid #323232',
                      borderRadius: 48,
                      backgroundColor: '#323232',
                      color: '#FFFFFF',
                      padding: '10px 20px',
                    }}
                  />

                  <ToastContainer />
                </div>
              </form>
            </div>
          </>
        );
      }}
    </HousePageContainer>
  );
};
export default HousePage;
