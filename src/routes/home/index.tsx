import { h } from 'preact';
import style from './style.css';
import Button from '../../components/button';

const Home = (): h.JSX.Element => {
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
      <Button
        textColor="white"
        backgroundColor="blue"
        onClick={() => console.log('I have been clicked.')}
      >
        Click me!
      </Button>
    </div>
  );
};

export default Home;
