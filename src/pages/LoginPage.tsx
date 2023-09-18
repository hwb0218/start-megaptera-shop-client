import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import useLoginFromStore from '../hooks/useLoginFromStore';

function LoginForm() {
  return null;
}

export default function LoginPage() {
  const navigate = useNavigate();

  // const [{ accessToken }, store] = useLoginFromStore();

  // useEffect(() => {
  //   store.reset();
  // }, []);

  // useEffect(() => {
  //   if (accessToken) {
  //     store.reset();
  //     navigate({ pathname: '/' });
  //   }
  // });

  return (
    <LoginForm />
  );
}
