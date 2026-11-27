const Work = require("../models/Work");

// Initial default works to seed if collection is empty
const DEFAULT_WORKS = [
  {
    title: "TossMart",
    category: "E-commerce",
    link: "https://tossmart.com/",
    image: "/assets/img/portfolio/project-portfolio-1.png",
    mobileImage: "/assets/img/portfolio/mob1.png",
    description: "Tossmart offers eCommerce services with smart gadgets, electronics, and a smooth online shopping experience.",
    tags: ["E-commerce", "Online Shopping"],
    order: 1,
    status: "show",
  },
  {
    title: "CandyFloss",
    category: "Beauty",
    link: "https://candyflossbeautypalace.com/",
    image: "/assets/img/portfolio/project-portfolio-2.png",
    mobileImage: "/assets/img/portfolio/mob2.png",
    description: "Personalized salon and beauty services tailored to each client's needs with seamless booking.",
    tags: ["Beauty", "Personalized Services"],
    order: 2,
    status: "show",
  },
  {
    title: "The Learn Skills",
    category: "E-learning",
    link: "https://thelearnskills.com/",
    image: "/assets/img/portfolio/project-portfolio-3.png",
    mobileImage: "/assets/img/portfolio/mob3.png",
    description: "Educational resources, high-impact video courses, and professional skill accreditation platform.",
    tags: ["E-learning", "Online Courses"],
    order: 3,
    status: "show",
  },
  {
    title: "Hotel Sweet Dreams",
    category: "Hotel Booking",
    link: "https://hotelsweetdreams.ovsinnovation.com/",
    image: "/assets/img/portfolio/project-portfolio-4.png",
    mobileImage: "/assets/img/portfolio/mob4.png",
    description: "Luxury hotel and banquet booking portal with real-time room availability and concierge features.",
    tags: ["Hotel Booking", "Banquet Booking"],
    order: 4,
    status: "show",
  },
  {
    title: "Arana Taj Tour",
    category: "Travel",
    link: "https://aranatajtour.com/",
    image: "/assets/img/portfolio/project-portfolio-5.png",
    mobileImage: "/assets/img/portfolio/mob5.png",
    description: "Curated Indian heritage travel packages focused on Agra, Delhi, Jaipur, and Varanasi.",
    tags: ["Travel", "Tour Packages"],
    order: 5,
    status: "show",
  },
  {
    title: "Prosperra Infra Estate",
    category: "Real Estate",
    link: "https://prosperrainfra.com/",
    image: "/assets/img/portfolio/project-portfolio-6.png",
    mobileImage: "/assets/img/portfolio/mob6.png",
    description: "Modern commercial and luxury residential real estate portfolio showcasing high-yield properties.",
    tags: ["Real Estate", "Commercial Properties"],
    order: 6,
    status: "show",
  },
];

const seedInitialWorksIfEmpty = async () => {
  try {
    const count = await Work.countDocuments();
    if (count === 0) {
      await Work.insertMany(DEFAULT_WORKS);
      console.log("Seeded initial default portfolio works successfully.");
    }
  } catch (err) {
    console.error("Error checking or seeding initial works:", err.message);
  }
};

const addWork = async (req, res) => {
  try {
    const { title, image } = req.body;
    if (!title || !image) {
      return res.status(400).send({
        success: false,
        message: "Title and Image are required",
      });
    }

    const newWork = new Work({
      ...req.body,
    });

    await newWork.save();
    res.status(201).send({
      success: true,
      message: "Work added successfully",
      data: newWork,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const getAllWorks = async (req, res) => {
  try {
    await seedInitialWorksIfEmpty();

    const { title, category, status, page, limit } = req.query;

    let queryObject = {};

    if (title) {
      queryObject.title = { $regex: title, $options: "i" };
    }

    if (category) {
      queryObject.category = { $regex: category, $options: "i" };
    }

    if (status) {
      queryObject.status = status;
    }

    const pages = Number(page) || 1;
    const limits = Number(limit) || 100; // default large limit to show in track
    const skip = (pages - 1) * limits;

    const totalDoc = await Work.countDocuments(queryObject);

    const works = await Work.find(queryObject)
      .sort({ order: 1, createdAt: -1 })
      .skip(skip)
      .limit(limits);

    res.send({
      success: true,
      works,
      totalDoc,
      limits,
      pages,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const getWorkById = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return res.status(404).send({
        success: false,
        message: "Work not found",
      });
    }
    res.send({
      success: true,
      data: work,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const updateWork = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return res.status(404).send({
        success: false,
        message: "Work not found",
      });
    }

    const updated = await Work.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.send({
      success: true,
      message: "Work updated successfully",
      data: updated,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const deleteWork = async (req, res) => {
  try {
    const work = await Work.findByIdAndDelete(req.params.id);
    if (!work) {
      return res.status(404).send({
        success: false,
        message: "Work not found",
      });
    }

    res.send({
      success: true,
      message: "Work deleted successfully",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const updateManyWorks = async (req, res) => {
  try {
    const { ids, status } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).send({
        success: false,
        message: "Please provide valid IDs array",
      });
    }

    await Work.updateMany(
      { _id: { $in: ids } },
      { $set: { status: status || "show" } }
    );

    res.send({
      success: true,
      message: "Works updated successfully",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const fs = require("fs");
const path = require("path");

const uploadWorkImage = async (req, res) => {
  try {
    const { image, filename } = req.body;
    if (!image) {
      return res.status(400).send({
        success: false,
        message: "Image data is required",
      });
    }

    const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).send({
        success: false,
        message: "Invalid image format. Expected base64 data URL.",
      });
    }

    const rawExt = matches[1].split("/")[1] || "png";
    const ext = rawExt.includes("jpeg") ? "jpg" : rawExt.includes("svg") ? "svg" : rawExt;
    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, "base64");

    const cleanBase = (filename || "work")
      .replace(/\.[^/.]+$/, "")
      .replace(/[^a-zA-Z0-9_-]/g, "_")
      .toLowerCase();
    const finalFilename = `${cleanBase}-${Date.now()}.${ext}`;

    const uploadsDir = path.resolve(__dirname, "../../frontend/public/uploads/portfolio");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, finalFilename);
    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/portfolio/${finalFilename}`;

    res.send({
      success: true,
      url: publicUrl,
      secure_url: publicUrl,
      message: "Image uploaded successfully",
    });
  } catch (err) {
    console.error("Upload work image error:", err);
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  addWork,
  getAllWorks,
  getWorkById,
  updateWork,
  deleteWork,
  updateManyWorks,
  uploadWorkImage,
};
