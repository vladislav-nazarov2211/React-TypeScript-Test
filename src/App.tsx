import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Events } from './components/Events/Events';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navbar/Navbar';
import { Organizations } from './components/Organizations/Organizations';


function App() {
    return (
        <div className='main'>
            <BrowserRouter>
                <Navbar />
                <div className='contentWrapper'>
                    <Routes>
                        <Route path='/main' element={<Main />} />
                        <Route path='/profile' element={''} />
                        <Route path='/events' element={<Events />} />
                        <Route path='/staff' element={''} />
                        <Route path='/notes' element={''} />
                        <Route path='/statistics' element={''} />
                        <Route path='/fertilizers' element={''} />
                        <Route path='/weather' element={''} />
                        <Route path='/organizations' element={<Organizations />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
