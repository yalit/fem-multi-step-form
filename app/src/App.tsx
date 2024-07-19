import './App.css';
import FormStep from './components/formStep';
import { Sidebar } from './components/sidebar';
import { useCurrentStep } from './store/hooks';

function App() {
    const step = useCurrentStep()
  return (
    <div id="app">
        <Sidebar />
        <FormStep step={step} />
    </div>
  );
}

export default App;
