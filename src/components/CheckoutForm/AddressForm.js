import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './Checkout/CustomTextField';


const AddressForm = () => {
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="first name"/>
            <FormInput required name="lastName" label="last name"/>
            <FormInput required name="address1" label="Address"/>
            <FormInput required name="email" label="Email"/>
            <FormInput required name="city" label="City"/>
            <FormInput required name="zip" label="Zip / Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={ } dullWidth onChange={ }>
                <MenuItem
                  key={ }
                  value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Sub-division</InputLabel>
              <Select value={ } dullWidth onChange={ }>
                <MenuItem
                  key={ }
                  value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping options</InputLabel>
              <Select value={ } dullWidth onChange={ }>
                <MenuItem
                  key={ }
                  value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm
