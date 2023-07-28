"use client";

import { Input } from '@nextui-org/react';
import React from 'react'
import { FaSearch } from 'react-icons/fa';

const SearchDashboard = () => {
  return (
    <div>
        <div className="landing">
            <span>ICE MEDIA</span>
        </div>
        <div className="search">
            <Input  id='search' width='500px' placeholder='Search a Post' height={60} size='lg' clearable  contentRight={
                <FaSearch />
            }/>
        </div>
    </div>
  )
}

export default SearchDashboard