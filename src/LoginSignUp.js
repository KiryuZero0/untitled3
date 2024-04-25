import React, { useState } from 'react';
import { Tabs, Input, Button } from 'antd';

const { TabPane } = Tabs;

const LoginSignUp = () => {
    const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
    const [signupFormData, setSignupFormData] = useState({ email: '', username: '', password: '' });

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginFormData, [name]: value });
    };

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupFormData({ ...signupFormData, [name]: value });
    };

    const handleLoginSubmit = () => {
        // Trimite datele de autentificare la server sau gestionează-le local
        console.log('Login form data:', loginFormData);
    };

    const handleSignupSubmit = () => {
        // Trimite datele de înregistrare la server sau gestionează-le local
        console.log('Signup form data:', signupFormData);
    };

    return (
        <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Login" key="1">
                <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                    <h2>Login</h2>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={loginFormData.email}
                        onChange={handleLoginChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginFormData.password}
                        onChange={handleLoginChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <Button type="primary" onClick={handleLoginSubmit}>Login</Button>
                </div>
            </TabPane>
            <TabPane tab="Sign Up" key="2">
                <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                    <h2>Sign Up</h2>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={signupFormData.email}
                        onChange={handleSignupChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={signupFormData.username}
                        onChange={handleSignupChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={signupFormData.password}
                        onChange={handleSignupChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <Button type="primary" onClick={handleSignupSubmit}>Sign Up</Button>
                </div>
            </TabPane>
        </Tabs>
    );
};

export default LoginSignUp;
