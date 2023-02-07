/* eslint-disable */
import React from 'react';
import HousePageContainer from '../container/housePageContainer';
import { Button } from '../../../components';
import DataTable from 'react-data-table-component';

import '../style/housePageStyles.scss'

const HousePage = () => {
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

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
return(
    <HousePageContainer>
    {({}) => {
    return(
        <>
        <div className='banner'/>
        <div className='house-list-container'>
            <p className='guest-text'>Misafir Etmek İstiyorum</p>
            <p className='guest-text2'>İhtiyaç Sahipleri</p>
            <div className='guest-text-container'>
                <div className='guest-text-container1'>
                    Aşağıdaki tabloda konaklama yeri ihtiyacı olan kişilere erişebilirsiniz. “Yer Aç” butonu ile isterseniz konaklama yeri ilanı vererek ihtiyaç sahiplerinin sizlere ulaşmasını sağlayabilirsiniz.
                </div>
                <div>
                    <Button 
                     //onClick={() => navigate('house')}
                     text="Yer Aç" 
                     styleProps={{border: "2px solid #323232",borderRadius: 48,padding: "10px 50px",backgroundColor: "#323232",color: "#fff"}}
                    />
                </div>
            </div>
            <div style={{ marginTop: 30}}>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    responsive
                    customStyles={customStyles}
                />
            </div>
        </div>
        <div className='house-container'>
            <p style={{ color: "#323232", fontWeight: 700, fontSize: 24}}>İlan Bilgi Formu</p>
        </div>
        </>
      )}}
    </HousePageContainer>
);
}
export default HousePage;
