import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';
import { ImWhatsapp } from 'react-icons/im';
import { CgDanger } from 'react-icons/cg';

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
  
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 className="my-3">Payment Method</h1>
        <h4 className="my-3">
          <CgDanger style={{ marginRight: 10 }} />
          Please before making any kind of payment contact us. So we can verify
          it to avoid any trouble.
        </h4>
        <h5>
          <ImWhatsapp size={30} style={{ marginRight: 10 }} />
          +92 3256791719
        </h5>

        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Cash on Delivery"
              label="Cash on Delivery"
              value="Cash on Delivery"
              checked={paymentMethodName === 'Cash on Delivery'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Bank Account"
              label="Bank Account"
              value="Bank Account"
              checked={paymentMethodName === 'Bank Account'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="JazzCash/EasyPaisa"
              label="JazzCash/EasyPaisa"
              value="JazzCash/EasyPaisa"
              checked={paymentMethodName === 'JazzCash/EasyPaisa'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          
          <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
