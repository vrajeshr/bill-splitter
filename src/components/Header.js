import React from "react";
import "./component-styles.css";

import { Image, Box, Text } from 'rebass'

import bill from '../assets/bill.png'


const Header = () => {
  return (
    <div className="App-header">
      <div className="header-container">
        <Image
          src={bill}
          sx={{
            width: [ '1%', '3%' ],
            borderRadius: 8,
          }}
        />
        <Box px={2}>
          <Text fontSize={5}>
            Bill Splitter
          </Text>
        </Box>
      </div>
    </div>
  );
};

export default Header;
