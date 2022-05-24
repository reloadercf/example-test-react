import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '../components/noauthenticate/Login';

test('render title h2', () => {
  const openNotification = jest.fn();
  const signIn = jest.fn();
  render(<Login signIn={signIn} openNotification={openNotification} />);
  const titleElement = screen.getByText(/Login/i);
  expect(titleElement).toBeInTheDocument();
});

test('run function sigIn', ()=>{
    const signIn= jest.fn().mockImplementation(()=>Promise.resolve({user:'jajajaja@muahahaha.com'}))
    const openNotification= jest.fn()
    render(<Login signIn={signIn} openNotification={openNotification} />);

    const email = screen.getByPlaceholderText('email')
    const password = screen.getByPlaceholderText('password')
    const benditoBotton = screen.getByRole('button', {name:/Entrar/i})
    
    fireEvent.change(email, {
        target:{value:'jajajaja@muahahaha.com'}
    })

    fireEvent.change(password, {
        target:{value:'tufechadenacimiento'}
    })
    expect(signIn).not.toHaveBeenCalled()
    fireEvent.submit(benditoBotton)
    expect(signIn).toHaveBeenCalled()
    expect(signIn).toBeCalledWith('jajajaja@muahahaha.com','tufechadenacimiento')
})