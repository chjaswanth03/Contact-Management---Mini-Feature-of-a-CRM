const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// Add a new contact
router.post('/contacts', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
  
  try {
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phoneNumber,
      company,
      jobTitle
    });

    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add contact', error });
  }
});

// Get all contacts
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch contacts', error });
  }
});

// Update a contact
router.put('/contacts/:id', async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update contact', error });
  }
});

// Delete a contact
router.delete('/contacts/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete contact', error });
  }
});

module.exports = router;
