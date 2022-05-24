import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '../components/noauthenticate/Login';

test('render title h2', () => {
  const openNotification = jest.fn();
  const signIn = jest.fn();
  render(<Login signIn={signIn} openNotification={openNotification} />);
  const titleElement = screen.getByText(/Login/i);
  expect(titleElement).toBeInTheDocument();
});

test('run functions', ()=>{
  const openNotification = jest.fn();
  const signIn = jest.fn().mockImplementation(() => Promise.resolve({user:'amigas@amiga.com'}));

  render(<Login signIn={signIn} openNotification={openNotification} />)

  const contentEmail = screen.getByPlaceholderText('email')
  const contentPassword = screen.getByPlaceholderText('password')
  const contentSubmit = screen.getByRole('button', {name:/Entrar/i})

  fireEvent.change(contentEmail, {
    target: {value:'amigas@amiga.com'}
  })

  fireEvent.change(contentPassword, {
      target: {value:'12345678'}
  })

  expect(signIn).not.toHaveBeenCalled()
  expect(openNotification).not.toHaveBeenCalled()
  fireEvent.submit(contentSubmit)

  expect(signIn).toHaveBeenCalled()
  expect(signIn).toHaveBeenCalledWith('amigas@amiga.com','12345678')
})

test('spy functions', ()=>{
  const objFunctions = {
    signIn:(email, password) =>{
      return new Promise ((resolve, reject)=>{
          if(email==='amigas@amiga.com' && password==='12345678'){
            resolve('Welcome amigas@amiga.com')
          }else{
            reject('Fail amigas@amigas.com')
          }
        })
    },
    openNotification:(message) => `Print: ${message}`
  }
  const spySignIn = jest.spyOn(objFunctions, 'signIn');
  
  render(<Login signIn={objFunctions.signIn} openNotification={objFunctions.openNotification} />)

  const contentEmail = screen.getByPlaceholderText('email')
  const contentPassword = screen.getByPlaceholderText('password')
  const contentSubmit = screen.getByRole('button', {name:/Entrar/i})

  fireEvent.change(contentEmail, {
    target: {value:'amigas@amiga.com'}
  })

  fireEvent.change(contentPassword, {
      target: {value:'12345678'}
  })

  expect(spySignIn).not.toHaveBeenCalled()
  fireEvent.submit(contentSubmit)
  expect(spySignIn).toHaveBeenCalled()
  expect(spySignIn).toHaveBeenCalledWith('amigas@amiga.com','12345678')
})