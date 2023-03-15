import React from 'react';
import logo from "../assets/react.svg";
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header';

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
