import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import "./Form.css";
export const Formfill = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [homeno, setHomeno] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pan, setPan] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const handleAdd = () => {
    setData([
      ...data,
      fname,
      lname,
      username,
      homeno,
      address,
      area,
      city,
      pin,
      phone,
      email,
      pan,
      id,
      password,
    ]);
    console.log(data);
  };

  
  return (
    <div style={{ backgroundColor: "purple" }}>
      <Grid container spacing={4} >
        <Grid item xs={3}>
          <TextField
            value={fname}
            label="First Name"
            onChange={(e) => setFname(e.target.value)}
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            value={lname}
            label="Last Name"
            onChange={(e) => setLname(e.target.value)}
          />
        </Grid>
        <TextField
          value={username}
          label="User Name"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Grid>
      <TextField
        value={homeno}
        label=" House Number"
        onChange={(e) => setHomeno(e.target.value)}
      />
      <TextField
        value={address}
        label="Address Name"
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        value={area}
        label="Area Name"
        onChange={(e) => setArea(e.target.value)}
      />
      <TextField
        value={city}
        label="City Name"
        onChange={(e) => setCity(e.target.value)}
      />
      <TextField
        value={pin}
        label="Pincode Name"
        onChange={(e) => setPin(e.target.value)}
      />
      <TextField
        value={phone}
        label="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        value={email}
        label="Email Id"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        value={pan}
        label="Pan Card number"
        onChange={(e) => setPan(e.target.value)}
      />
      <TextField
        value={id}
        label="ID proof Name"
        onChange={(e) => setId(e.target.value)}
      />
      <TextField
        value={password}
        label="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <Button variant="contained" onClick={handleAdd}>
        SUBMIT
      </Button>
     
      {data.map((item) => {
        return (
          <div>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};
