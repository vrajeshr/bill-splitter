import React from "react";
import "./component-styles.css";

import {
    Box,
    Button,
  } from 'rebass'
import { Label, Input } from '@rebass/forms'

const PartyConfigurator = () => {
  return (
      <div className="partyConfigurator">
          <Box 
            sx={{
                p: 3,
                m: 3,
                borderRadius: 2,
                boxShadow: '0 0 16px rgba(0,0,0, .25)',
                fontSize: 5
            }}>
            How many people do you have in your party?
        </Box>
        <Input
            id='numberOfPeople'
            name='numberOfPeople'
            type='numberOfPeople'
            placeholder='Number of people'
            sx={{
                p: 3,
                m: 4,
                borderRadius: 10,
                boxShadow: '0 0 16px rgba(0,0,0, .25)',
                width: [ '90%' ],
                fontSize: 5
            }}
        />
        <Button variant='outline' mr={2}>Primary</Button>

      </div>
  )
}

export default PartyConfigurator;
