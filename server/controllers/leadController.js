const Lead = require("../models/Lead");

const createLead = async (req, res) => {
  try {
    const { company, name, email, budget, message } = req.body;

    const lead = await Lead.create({
      company,
      name,
      email,
      budget,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: lead,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createLead,
};