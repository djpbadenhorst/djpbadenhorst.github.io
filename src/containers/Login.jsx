import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useState } from 'react';

export const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="h-screen flex justify-center content-center">
      <Container className="m-auto w-1/4">
        <form>
          <div className="p-5">
            <div className="py-3">
              <Input type="text" label="Username" className="w-full"
                     value={username} setValue={setUsername}/>
            </div>
            <div className="py-3">
              <Input type="password" label="Password" className="w-full"
                     value={password} setValue={setPassword}/>
            </div>
            <div className="flex justify-center py-3">
              <Button label="Submit" className="w-full"
                      onClick={() => onSubmit(username, password)}/>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

Login.propTypes = { };

Login.defaultProps = { };
