import { Component, h } from 'preact';
import '../../Styles/Address/styles';

interface AddressProps {
  street_address?: string;
  city?: string;
  state?: string;
  zip?: string;
}

const Address = ({ street_address, city, state, zip }: AddressProps): JSX.Element => (
  <p className='address'>
    <span className='street-address'>{street_address}</span>
    <span className='city-state'>
      {city && `${city}, `}
      {state && `${state} `}
      {zip && `${zip}`}</span>
  </p>
);

export default Address;
