const nodemailer = require('nodemailer');

const sendApprovalEmail = async (collegeEmail, collegeName, score, rank) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });
  const mailOptions = {
    from: `"Institutional Ranking Board" <${process.env.EMAIL_USER}>`,
    to: collegeEmail,
    subject: `🎓 Institutional Metrics Verification Approved — ${collegeName}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; color: #333; background-color: #f9f9f9; border-radius: 8px;">
        <h2 style="color: #1e3a8a;">Congratulations, ${collegeName}!</h2>
        <p>Your institutional data profile has been successfully audited and approved by our administrative panel.</p>
        <hr style="border: none; border-top: 1px solid #ddd;" />
        <p><strong>Evaluation Matrix Performance Summary:</strong></p>
        <ul>
          <li><strong>Verified Composite Score:</strong> ${score} / 100</li>
          <li><strong>Current Global Placement Rank:</strong> Position #${rank}</li>
        </ul>
        <p>Your dynamic ranking position is now live on our official leaderboard tracker platform.</p>
        <br />
        <p style="font-size: 11px; color: #777;">This is an automated system notification. Please do not reply directly to this mail execution block.</p>
      </div>`
  };
  await transporter.sendMail(mailOptions);
};

module.exports = { sendApprovalEmail };