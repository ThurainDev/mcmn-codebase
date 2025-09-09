// express
const Song = require('../models/Song');

// Get all songs (with filtering and pagination)
const getAllSongs = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      genre,
      vibe,
      status,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build filter object
    const filter = {};
    if (genre) filter.genre = genre;
    if (vibe) filter.vibe = vibe;
    if (status) filter.status = status;
    if (search) {
      filter.$text = { $search: search };
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Get songs with pagination
    const songs = await Song.find(filter)
      .populate('createdBy', 'name email')
      .populate('assignedArtist', 'name email')
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count
    const total = await Song.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: {
        songs,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Get all songs error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get songs',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Get single song by ID
const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id)
      .populate('createdBy', 'name email')
      .populate('assignedArtist', 'name email');

    if (!song) {
      return res.status(404).json({
        success: false,
        message: 'Song not found'
      });
    }

    res.status(200).json({
      success: true,
      data: { song }
    });
  } catch (error) {
    console.error('Get song by ID error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get song',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Create new song
const createSong = async (req, res) => {
  try {
    const songData = {
      ...req.body
    };

    const song = await Song.create(songData);

    // Populate user data
    await song.populate('createdBy', 'name email');

    res.status(201).json({
      success: true,
      message: 'Song created successfully',
      data: { song }
    });
  } catch (error) {
    console.error('Create song error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create song',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Update song
const updateSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song) {
      return res.status(404).json({
        success: false,
        message: 'Song not found'
      });
    }

    // No authorization required

    // Update song
    const updatedSong = await Song.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('assignedArtist', 'name email');

    res.status(200).json({
      success: true,
      message: 'Song updated successfully',
      data: { song: updatedSong }
    });
  } catch (error) {
    console.error('Update song error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update song',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Delete song
const deleteSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song) {
      return res.status(404).json({
        success: false,
        message: 'Song not found'
      });
    }

    // No authorization required

    await Song.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Song deleted successfully'
    });
  } catch (error) {
    console.error('Delete song error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete song',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Update song status
const updateSongStatus = async (req, res) => {
  try {
    const { status, progress, estimatedDelivery } = req.body;

    const song = await Song.findById(req.params.id);

    if (!song) {
      return res.status(404).json({
        success: false,
        message: 'Song not found'
      });
    }

    // No authorization required

    // Update status
    const updateData = {};
    if (status) updateData.status = status;
    if (progress !== undefined) updateData.progress = progress;
    if (estimatedDelivery) updateData.estimatedDelivery = estimatedDelivery;

    // Set deliveredAt if status is delivered
    if (status === 'delivered') {
      updateData.deliveredAt = new Date();
    }

    const updatedSong = await Song.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).populate('createdBy', 'name email')
     .populate('assignedArtist', 'name email');

    res.status(200).json({
      success: true,
      message: 'Song status updated successfully',
      data: { song: updatedSong }
    });
  } catch (error) {
    console.error('Update song status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update song status',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Search songs
const searchSongs = async (req, res) => {
  try {
    const { q, genre, vibe, limit = 20 } = req.query;

    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    // Build filter object
    const filter = { $text: { $search: q } };
    if (genre) filter.genre = genre;
    if (vibe) filter.vibe = vibe;

    const songs = await Song.find(filter)
      .populate('createdBy', 'name')
      .limit(parseInt(limit))
      .sort({ score: { $meta: 'textScore' } });

    res.status(200).json({
      success: true,
      data: { songs }
    });
  } catch (error) {
    console.error('Search songs error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to search songs',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

module.exports = {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong,
  updateSongStatus,
  searchSongs
};
