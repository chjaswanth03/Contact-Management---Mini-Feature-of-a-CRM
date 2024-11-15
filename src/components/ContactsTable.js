import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactsTable = ({ contacts, onEdit, onDelete }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Job Title</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((contact) => (
                        <TableRow key={contact._id}>
                            <TableCell>{contact.firstName}</TableCell>
                            <TableCell>{contact.lastName}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{contact.phoneNumber}</TableCell>
                            <TableCell>{contact.company}</TableCell>
                            <TableCell>{contact.jobTitle}</TableCell>
                            <TableCell>
                                <Button onClick={() => onEdit(contact)}>
                                    <EditIcon />
                                </Button>
                                <Button onClick={() => onDelete(contact._id)}>
                                    <DeleteIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ContactsTable;
