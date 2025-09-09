const Contact = require('../models/Contact');

// Submit contact form
const submitContact = async (req, res) => {
  try {
    const contactData = {
      ...req.body,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    };



    const contact = await Contact.create(contactData);

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: { contact }
    });
  } catch (error) {
    console.error('Submit contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Get all contacts (admin only)
const getAllContacts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      contactType,
      search
    } = req.query;

    // Build filter object
    const filter = {};
    if (status) filter.status = status;
    if (contactType) filter.contactType = contactType;
    if (search) {
      filter.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } }
      ];
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Get contacts
    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count
    const total = await Contact.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: {
        contacts,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Get all contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get contacts',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Get single contact by ID (admin only)
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.status(200).json({
      success: true,
      data: { contact }
    });
  } catch (error) {
    console.error('Get contact by ID error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get contact',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Update contact status (admin only)
const updateContactStatus = async (req, res) => {
  try {
    const { status, responseMessage } = req.body;

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    // Update status
    const updateData = {};
    if (status) updateData.status = status;
    if (responseMessage) {
      updateData.responseMessage = responseMessage;
      updateData.respondedAt = new Date();
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Contact status updated successfully',
      data: { contact: updatedContact }
    });
  } catch (error) {
    console.error('Update contact status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update contact status',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Delete contact (admin only)
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete contact',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Get contact statistics (admin only)
const getContactStats = async (req, res) => {
  try {
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const typeStats = await Contact.aggregate([
      {
        $group: {
          _id: '$contactType',
          count: { $sum: 1 }
        }
      }
    ]);

    const totalContacts = await Contact.countDocuments();
    const newContacts = await Contact.countDocuments({ status: 'new' });

    res.status(200).json({
      success: true,
      data: {
        totalContacts,
        newContacts,
        statusStats: stats,
        typeStats: typeStats
      }
    });
  } catch (error) {
    console.error('Get contact stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get contact statistics',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

module.exports = {
  submitContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
  getContactStats
};
