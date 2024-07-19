import {useEffect} from 'react';
import './App.css';
import FormStep from './components/formSteps/formStep';
import {Menu} from './components/menu';
import {useActions, useCurrentStep} from './store/hooks';
import stepsRepository from './repository/steps.repository';

function App() {
    const step = useCurrentStep()
    const actions = useActions()

    useEffect(() => {
        actions.goToStep(stepsRepository.all()[0])
    }, [])

    return (
        <div id="app" className='h-screen w-screen md:flex justify-center items-center'>
            <div className="h-full w-full md:h-auto md:w-[90%] lg:w-[75%] xl:w-[60%] md:bg-white rounded md:p-5 md:flex md:gap-10 md:min-h-[50%]">
                {step &&
                    <>
                        <Menu/>
                        <FormStep/>
                    </>
                }
            </div>
        </div>
    )
        ;
}

export default App;
