import React, { useEffect, useState } from "react";
import AddressBookService from "../services/AddressBookService";
import { useNavigate } from "react-router-dom";

function AddressBookList() {
    const [entries, setEntries] = useState([]);
    const navigate = useNavigate();

    const loadData = () => {
        AddressBookService.getAll().then((res) => {
            setEntries(res.data);
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            AddressBookService.delete(id).then(() => loadData());
        }
    };

    return (
        <div className="container mt-4">
            <h2>Address Book Entries</h2>
            <button className="btn btn-primary mb-3" onClick={() => navigate("/add")}>Add Entry</button>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map(entry => (
                        <tr key={entry.id}>
                            <td>{entry.fullName}</td>
                            <td>{entry.phoneNumber}</td>
                            <td>{entry.address}</td>
                            <td>{entry.city}</td>
                            <td>{entry.state}</td>
                            <td>{entry.zipCode}</td>
                            <td>
                                <button onClick={() => navigate(`/edit/${entry.id}`)} className="btn btn-warning btn-sm me-2">Edit</button>
                                <button onClick={() => handleDelete(entry.id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AddressBookList;
