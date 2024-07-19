import { useEffect } from 'react';
import './App.css';
import FormStep from './components/formSteps/formStep';
import { Menu } from './components/menu';
import { useActions, useCurrentStep } from './store/hooks';
import stepsRepository from './repository/steps.repository';

function App() {
    const step = useCurrentStep()
    const actions = useActions()

    useEffect(() => {
        actions.goToStep(stepsRepository.all()[0])
    }, [])

  return (
    <div id="app" className='h-screen w-screen'>
     {step && 
            <>
        <Menu />
        <FormStep />
        </>}
    </div>
  );
}

export default App;
