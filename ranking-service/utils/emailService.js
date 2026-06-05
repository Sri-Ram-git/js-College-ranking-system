const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // If process.env.EMAIL_HOST is missing, force it to use smtp.gmail.com
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

const sendApprovalEmail = async (collegeEmail, collegeName, score, rank) => {
  const mailOptions = {
    from: `"Institutional Ranking Board" <${process.env.EMAIL_USER}>`,
    to: collegeEmail,
    subject: `🎓 Institutional Metrics Verification Approved — ${collegeName}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2>Congratulations, ${collegeName}!</h2>
        <p>Your institutional data profile has been successfully audited and approved by our administrative panel.</p>
        <hr style="border: none; border-top: 1px solid #eee;" />
        <p><strong>Evaluation Matrix Performance Summary:</strong></p>
        <ul>
          <li><strong>Verified Composite Score:</strong> ${score} / 100</li>
          <li><strong>Current Global Placement Rank:</strong> Position #${rank}</li>
        </ul>
        <p>Your updated status is now live on our national metrics tracking leaderboard dashboard.</p>
        <br />
        <p style="font-size: 12px; color: #777;">This is an automated system dispatch. Please do not reply directly to this mail transmission.</p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendApprovalEmail };