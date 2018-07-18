import { Component, h } from 'preact';
import '../../../Styles/Customers/Details/styles';
import { default as Address } from '../../Address/component';

interface CustomerProps {
  customer: {
    name: string;
    email?: string;
    phone?: string;
    street_address?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
}

class CustomerDetails extends Component<CustomerProps, {}> {
  public render(): JSX.Element  {
    const {
      name, email, phone, city,
      street_address, state, zip,
    } = this.props.customer;

    const address = { street_address, city, state, zip };

    return (
      <div className='customer-details'>
        <h3 className='name'>{name}</h3>
        <p className='email'>{email}</p>
        <p className='phone'>{phone}</p>
        <Address {...address} />
      </div>
    );
  }
}

export default CustomerDetails;
