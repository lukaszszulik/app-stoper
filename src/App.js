import { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import FormattedTime from './components/FormattedTime/FormattedTime';
import Button from './components/Button/Button';

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const Start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    },1 ))
  };

  const Stop = () => {
    clearInterval(timer);
    setTimer();
  };

  const Reset = () => {
    setTime(0);
    setTimer(null);
  }

  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <Container>
      <FormattedTime time={time} />
      <Button value={Start}>Start</Button>
      <Button value={Stop}>Stop</Button>
      <Button value={Reset}>Reset</Button>
    </Container>
  );
};

export default App;
