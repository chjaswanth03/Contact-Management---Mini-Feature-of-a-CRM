import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography } from '@mui/material';

const ContactForm = ({ onSubmit, editContact }) => {
    const [contactData, setContactData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: '',
    });

    // Update form fields on change
    const handleChange = (e) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(contactData);
        setContactData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            company: '',
            jobTitle: '',
        });
    };

    // If editing an existing contact, populate the form with data
    React.useEffect(() => {
        if (editContact) {
            setContactData({
                firstName: editContact.firstName,
                lastName: editContact.lastName,
                email: editContact.email,
                phoneNumber: editContact.phoneNumber,
                company: editContact.company,
                jobTitle: editContact.jobTitle,
            });
        }
    }, [editContact]);

    return (
        <Box
            sx={{
                maxWidth: 600,
                margin: 'auto',
                padding: 3,
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxShadow: 3,
                backgroundColor: '#fff',
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>
                {editContact ? 'Edit Contact' : 'Add New Contact'}
            </Typography>
            <form onSubmit={handleFormSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            name="firstName"
                            value={contactData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            name="lastName"
                            value={contactData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            type="email"
                            value={contactData.email}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            name="phoneNumber"
                            type="tel"
                            value={contactData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Company"
                            variant="outlined"
                            fullWidth
                            name="company"
                            value={contactData.company}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Job Title"
                            variant="outlined"
                            fullWidth
                            name="jobTitle"
                            value={contactData.jobTitle}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                padding: '10px 20px',
                                fontSize: '16px',
                                borderRadius: '4px',
                            }}
                        >
                            {editContact ? 'Update Contact' : 'Add Contact'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default ContactForm;
