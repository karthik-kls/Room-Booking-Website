
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Room from './Pages/Room'
import BookingPage from './Pages/BookingPage';
import NewBooking from './Pages/NewBooking';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/room' element={<Room/>} />
      <Route path='/booking' element={<BookingPage/>} />
      <Route path='/newbooking' element={<NewBooking/>} />
      <Route path='/booking/:id' element={<NewBooking/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
