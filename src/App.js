import Slider from './components/Slider';
import Title from './components/Title';
function App() {
  return (
    <div className="App">
      <header>
        <Title name="Le mete preferite"/>
      </header>
      <main>
        <Slider />
      </main>
    </div>
  );
}

export default App;
