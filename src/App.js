import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddressBookList from "./components/AddressBookList";
import AddressBookForm from "./components/AddressBookForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AddressBookList />} />
                <Route path="/add" element={<AddressBookForm />} />
                <Route path="/edit/:id" element={<AddressBookForm />} />
            </Routes>
        </Router>
    );
}

export default App;
