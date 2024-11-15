import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import ContactForm from './components/ContactForm'; // Import your contact form component
import ContactsTable from './components/ContactsTable'; // Import your contacts table component

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [editContact, setEditContact] = useState(null);

    // Fetch contacts from backend API on component mount
    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/contacts');
            setContacts(response.data);
        } catch (error) {
            console.error("There was an error fetching the contacts!", error);
        }
    };

    // Add or update contact in the database
    const handleContactSubmit = async (contactData) => {
        if (editContact) {
            // If editing an existing contact, update it
            try {
                await axios.put(`http://localhost:5000/api/contacts/${editContact._id}`, contactData);
                fetchContacts(); // Refresh contacts after updating
                setEditContact(null); // Clear edit mode
            } catch (error) {
                console.error("Error updating contact", error);
            }
        } else {
            // If adding a new contact, create it
            try {
                await axios.post('http://localhost:5000/api/contacts', contactData);
                fetchContacts(); // Refresh contacts after adding
            } catch (error) {
                console.error("Error adding contact", error);
            }
        }
    };

    // Delete a contact
    const handleDelete = async (contactId) => {
        try {
            await axios.delete(`http://localhost:5000/api/contacts/${contactId}`);
            fetchContacts(); // Refresh contacts after deleting
        } catch (error) {
            console.error("Error deleting contact", error);
        }
    };

    // Set the contact to be edited
    const handleEdit = (contact) => {
        setEditContact(contact);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom align="center">
                Contact Management System
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <ContactForm onSubmit={handleContactSubmit} editContact={editContact} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ContactsTable contacts={contacts} onEdit={handleEdit} onDelete={handleDelete} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
