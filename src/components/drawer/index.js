/* eslint-disable jsx-a11y/no-static-element-interactions */
import { bool, func } from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router';
import './drawerStyles.scss';

const arrLinks = [
  {
    link: '/',
    name: 'Anasayfa',
  },
  {
    link: '/can-evim-hakkinda',
    name: 'Hakkımızda',
  },
  {
    link: '/misafir-etmek-istiyorum',
    name: 'Misafir kabul edebilirim',
  },
  {
    link: '/misafir-kabul-edebilenler',
    name: 'Misafir kabul edenler',
  },
  {
    link: '/konaklamaya-ihtiyacim-var',
    name: 'Konaklama ihtiyacım var',
  },
  {
    link: '/depremzede-konaklama-talepleri',
    name: 'Konaklama ihtiyacı olanlar',
  },
];

const Drawer = ({ open = false, setOpen }) => {
  const navigate = useNavigate();

  return (
    open && (
      <div className="styledDrawer">
        <div
          className="styledDrawer_shadowBack"
          onClick={() => setOpen(false)}
        />
        <ul className="styledDrawer_links">
          <div
            className="styledDrawer_links_close"
            onClick={() => setOpen(false)}
          />
          {arrLinks.map((item, i) => (
            <li
              className="styledDrawer_links_item"
              key={i}
              onClick={() => {
                navigate(item.link);
                setOpen(false);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

Drawer.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Drawer;
