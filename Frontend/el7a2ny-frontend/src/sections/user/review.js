import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { set } from 'lodash';
import { Button, Container, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import { display } from '@mui/system';


const getDiscount = (username) => {
  // TODO: get the discount according to the user's health package
  return 0;
}

const calculateTotal = (products) => {

  let total = 0;
  products.forEach((product) => {
    total += (product.price * product.quantity);
  });
  return total;
};

export default function Review() {
  const router = useRouter();
  const [orderedProducts, setOrderedProducts] = useState([]);
  const userName = Cookies.get('username');
  const Orderaddress = {AddressLine: '1 MUI Drive', City: 'Reactville', PostalCode: '99999'};
  // const [pack, setPackage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  console.log("in the review component");
  useEffect(() => {
    axios.get(`http://localhost:8000/getCart?username=${userName}`).then(response => {
      console.log(response.data);
      setOrderedProducts(response.data);
      const gtotal = calculateTotal(response.data);
      setTotal(gtotal);
    }).catch(error => {
      console.log('error here ---->', error);
    });
  }, []);

  const handleProceedToPayment = () => {
    router.push('/user/payment', );
    console.log('Proceeding to payment...');
  };


  return (
    isLoading ? (
      <div>
      <style>{styles}</style>
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
    ) : (
      <React.Fragment>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}></Paper>
      <Typography variant="h4" gutterBottom>
        Total Amount: {total}
      </Typography>
      
      <Grid container spacing={2}>

      </Grid>
      <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
      <Button variant="contained"  color="primary" style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
      }} onClick={
        handleProceedToPayment
      }>
        Proceed to Payment
      </Button>
      </div>
      </Container>
    </React.Fragment>
    
    )
  );
}