const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { google } = require("googleapis");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const oauth2Client = new google.auth.OAuth2(
  "SEU_CLIENT_ID",
  "SEU_CLIENT_SECRET",
  "SEU_REDIRECT_URI"
);

app.post("/upload", async (req, res) => {
  try {
    const { name, mimeType, folderId, fileContent } = req.body;

    oauth2Client.setCredentials({ access_token: req.body.token });

    const drive = google.drive({ version: "v3", auth: oauth2Client });
    const fileMetadata = { name, parents: [folderId] };
    const media = { mimeType, body: Buffer.from(fileContent, "base64") };

    const file = await drive.files.create({
      resource: fileMetadata,
      media,
      fields: "id",
    });

    res.status(200).send({ success: true, fileId: file.data.id });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
