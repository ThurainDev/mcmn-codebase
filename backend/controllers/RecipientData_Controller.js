const express = require("express");

const RecipientData_Controller = {
  // Get all recipient datas
  index: (req, res) => {
    res.json({ message: "All recipient datas" });
  },

  // Get single recipient data
  show: (req, res) => {
    res.json({ message: "Single recipient data" });
  },
};

module.exports = RecipientData_Controller;
