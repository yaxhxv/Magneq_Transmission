import React from "react"; 
import Button from "../components/buttons/Button";


const Login = () => {
    return(
        <>
            <h1>This is the Login page</h1>
   
      <Button>Default Button</Button>
      <Button variant="primary" size="sm">Primary Small</Button>
      <Button variant="outline" size="md">Outlined Button</Button>
      <Button disabled>Disabled</Button>

        </>
    );
};

export default Login;