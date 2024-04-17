import './App.css';
import { CssModules } from './components/CssModules';
import { Emotion } from './components/Emotion';
import { InlineStyle } from './components/InlineStyle';
import { StyledComponents } from './components/StyledComponents';
import { Styledjsx } from './components/StyledJsx';

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <Styledjsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
