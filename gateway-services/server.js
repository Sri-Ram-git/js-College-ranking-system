// gateway-service/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// --- VIEW 1: Manthan Government Aesthetic Clean Branding Homepage Layout ---
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"><title>Manthan Platform Portal</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-slate-50 font-sans">
        <nav class="bg-white border-b border-slate-200 sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
            <div class="flex items-center gap-3">
                <div class="font-bold text-xl tracking-tight text-slate-800 flex items-center gap-2">
                    <span class="text-emerald-600 font-extrabold text-2xl">M</span>Manthan
                </div>
                <div class="hidden lg:block text-[10px] border-l pl-3 border-slate-300 text-slate-500 uppercase font-medium leading-tight">Ideas & Implementation through<br>Science Technologies and Innovations</div>
            </div>
            <div class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                <a href="/" class="text-cyan-600 border-b-2 border-cyan-600 pb-1">Home</a>
                <a href="#" class="hover:text-cyan-600">Co-Partners</a>
                <a href="#" class="hover:text-cyan-600">Opportunities</a>
                <a href="#" class="hover:text-cyan-600">Industry R&D</a>
                <a href="/utthan" class="text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200/60 hover:bg-amber-100 transition font-semibold">UTTHAN Registry</a>
                <a href="/admin-panel" class="hover:text-cyan-600 font-mono text-xs text-slate-400">Dashboard Control</a>
            </div>
            <div class="flex items-center gap-4 text-sm font-semibold">
                <a href="/utthan" class="text-slate-700 hover:text-slate-900">Sign In</a>
                <a href="/utthan" class="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md transition shadow-sm">Register</a>
            </div>
        </nav>

        <section class="max-w-7xl mx-auto px-6 py-12 mt-4">
            <div class="bg-[#93b7be]/30 rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center border border-[#93b7be]/40">
                <div class="flex-1 space-y-4">
                    <h2 class="text-3xl font-bold text-slate-800 tracking-tight">About Manthan</h2>
                    <p class="text-slate-600 leading-relaxed text-sm">The Manthan platform promotes collaboration at scale between industry and the scientific research and development ecosystem to help meet India's national targets and United Nations' Sustainable Development Goals (SDGs). This platform aims to empower various stakeholders to scale up the interactions with researchers/innovators and facilitate R&D/innovation, share challenges focused on emerging technologies, other scientific interventions, as well as those with a social impact.</p>
                    <button class="bg-[#0e7490] hover:bg-[#155e75] text-white font-medium text-sm px-6 py-2.5 rounded-lg transition shadow-md">Read More</button>
                </div>
                <div class="w-full lg:w-[420px] bg-slate-900 rounded-xl overflow-hidden aspect-video relative flex items-center justify-center border-4 border-white shadow-xl">
                    <div class="absolute inset-0 bg-cover bg-center opacity-40" style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400');"></div>
                    <div class="w-14 h-14 bg-white/90 text-slate-900 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition z-10">
                        <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
            </div>
        </section>
    </body>
    </html>
  `);
});

// --- VIEW 2: UTTHAN Registry and Secure OTP Verification Module View Layout ---
app.get('/utthan', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"><title>UTTHAN Registry Node</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-slate-50 min-h-screen flex flex-col justify-between font-sans">
        <div class="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
            <div class="font-bold text-lg text-slate-800 tracking-tight flex items-center gap-1.5"><span class="text-emerald-600 font-black">M</span>Manthan <span class="text-slate-300">/</span> <span class="text-cyan-700 font-semibold">Utthan Gateway</span></div>
            <a href="/" class="text-xs font-semibold text-cyan-600 hover:underline">← Absolute Platform Root</a>
        </div>

        <main class="flex-1 flex items-center justify-center p-6 my-6">
            <div id="authContainer" class="bg-white border border-slate-200 rounded-xl p-8 max-w-md w-full shadow-xl transition-all duration-300">
                <h3 class="text-xl font-bold text-slate-800 mb-2 tracking-tight text-center">Sign in to your account</h3>
                <p class="text-xs text-slate-400 mb-6 text-center">UTTHAN Security Registry Validation Gate</p>
                
                <form id="registerForm" class="space-y-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                        <input type="text" id="regName" required class="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Institutional Email Address</label>
                        <input type="email" id="regEmail" required class="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Associated College Entity</label>
                        <input type="text" id="regInst" required class="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none">
                    </div>
                    <button type="submit" class="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium p-3 rounded-lg shadow transition mt-2 text-sm">Request Registry Access Token</button>
                </form>
            </div>
        </main>

        <script>
            // Master state handling code module mapping sequence execution chains
            document.getElementById('registerForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                const fullName = document.getElementById('regName').value;
                const email = document.getElementById('regEmail').value;
                const institution = document.getElementById('regInst').value;

                const res = await fetch('http://localhost:5001/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ fullName, email, institution })
                });
                const data = await res.json();
                
                if(data.success) {
                    // Instantly update layout state block parameter structure on screen to match OTP stage
                    document.getElementById('authContainer').innerHTML = \`
                        <h3 class="text-xl font-bold text-slate-800 mb-2 tracking-tight text-center">OTP Verification</h3>
                        <p class="text-xs text-slate-500 mb-6 text-center">A verification code has been dispatched to <br><span class="font-semibold text-cyan-600">\${email}</span></p>
                        
                        <form id="otpForm" class="space-y-4">
                            <div>
                                <label class="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Enter 6-Digit OTP Token *</label>
                                <input type="text" id="otpCode" max-length="6" required class="w-full border text-center tracking-widest font-mono text-xl rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none">
                            </div>
                            <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold p-3 rounded-lg shadow transition text-sm">Verify & Unlock Data Profile Form</button>
                        </form>
                    \`;
                    
                    document.getElementById('otpForm').addEventListener('submit', async (eOpt) => {
                        eOpt.preventDefault();
                        const otp = document.getElementById('otpCode').value;
                        const resVerify = await fetch('http://localhost:5001/api/auth/verify-otp', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, otp })
                        });
                        const dataVerify = await resVerify.json();
                        
                        if(dataVerify.success) {
                            // Verification check passed -> route to secure tokenized form screen passing state params
                            window.location.href = '/data-collection-form?verified=true&email=' + encodeURIComponent(email) + '&name=' + encodeURIComponent(institution);
                        } else {
                            alert("Invalid verification code matrix match. Check console.");
                        }
                    });
                }
            });
        </script>
    </body>
    </html>
  `);
});

// --- VIEW 3: Locked Premium-Glass Data Collection Form Layout ---
app.get('/data-collection-form', (req, res) => {
  const { verified, email, name } = req.query;
  
  // Guard clause blocking direct URL access without completing the OTP microservice sequence
  if (verified !== 'true') {
    return res.status(403).send(`<h2 style="font-family:sans-serif; text-align:center; padding:50px; color:#b91c1c;">🚨 Security Violation: Utthan Registry Authorization Access Required. Please sign in via the homepage layer first.</h2>`);
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"><title>Institutional Metrics Form</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            body { background: linear-gradient(135deg, #161E2F 0%, #242F49 40%, #384358 65%, #541A2E 100%); background-attachment: fixed; }
            .premium-glass { background: rgba(20, 42, 68, 0.4); backdrop-filter: blur(30px); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
            .vibrant-white-field { background: #e0e9f6; border: 2px solid transparent; color: #081426; font-weight: 500; transition: all 0.2s ease; }
            .vibrant-white-field:focus { background: #ffffff; border-color: #FFA586; outline: none; }
        </style>
    </head>
    <body class="min-h-screen flex items-start justify-center p-6 text-slate-200 antialiased">
        <div class="w-full max-w-4xl flex gap-8 items-start relative mt-6">
            <div class="flex-1 premium-glass rounded-2xl p-8 md:p-10 shadow-2xl">
                <header class="mb-8 border-b border-white/10 pb-4 flex justify-between items-end">
                    <div>
                        <h1 class="text-2xl font-light text-white">Institutional <span class="font-semibold text-[#FFA586]">Data Profiler</span></h1>
                        <p class="text-xs text-slate-400 mt-1 uppercase tracking-wider">Authenticated via Secure Utthan Protocol</p>
                    </div>
                    <div class="text-right text-xs text-teal-400 font-mono">Session Active:<br>${email}</div>
                </header>

                <form id="collegeForm" class="space-y-6">
                    <input type="hidden" name="email" value="${email}">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Verified Institution Entity Name</label>
                            <input type="text" name="name" value="${name}" readonly class="vibrant-white-field w-full rounded-xl p-3 text-sm opacity-70 bg-slate-200 cursor-not-allowed">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Geographic Location Axis *</label>
                            <input type="text" name="location" required class="vibrant-white-field w-full rounded-xl p-3 text-sm">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">NAAC Status Rating *</label>
                            <select name="naacRanking" required class="vibrant-white-field w-full rounded-xl p-3 text-sm rounded-xl">
                                <option value="A++">A++</option><option value="A+">A+</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="Not Accredited">Not Accredited</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Faculty Size *</label>
                            <input type="number" name="facultyStrength" required class="vibrant-white-field w-full rounded-xl p-3 text-sm">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Student Size *</label>
                            <input type="number" name="studentStrength" required class="vibrant-white-field w-full rounded-xl p-3 text-sm">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-white/5 pt-4">
                        <div><label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Research Labs</label><input type="number" name="labsCount" required class="vibrant-white-field w-full rounded-xl p-3 text-sm"></div>
                        <div><label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Library Catalog</label><input type="number" name="libraryBooks" required class="vibrant-white-field w-full rounded-xl p-3 text-sm"></div>
                        <div><label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Articles Log</label><input type="number" name="studentArticles" required class="vibrant-white-field w-full rounded-xl p-3 text-sm"></div>
                        <div><label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Papers Log</label><input type="number" name="researchPapers" required class="vibrant-white-field w-full rounded-xl p-3 text-sm"></div>
                    </div>
                    <button type="submit" class="w-full py-4 bg-[#B51A2B] text-white font-bold tracking-wide rounded-xl shadow-lg transition duration-200 hover:bg-red-700">Compile Data Logs Matrix</button>
                </form>
                <div id="statusDiv" class="mt-4 hidden p-4 rounded-xl text-center text-xs font-semibold"></div>
            </div>
        </div>
        <script>
            document.getElementById('collegeForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                const div = document.getElementById('statusDiv');
                div.className = "mt-4 p-4 rounded-xl text-center text-xs font-semibold bg-slate-800 text-slate-200 block";
                div.innerText = "Transmitting to ranking database nodes via pipeline streams...";
                
                const res = await fetch('http://localhost:5002/api/ranking/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(Object.fromEntries(new FormData(e.target).entries()))
                });
                const data = await res.json();
                if(data.success) {
                    div.className = "mt-4 p-4 rounded-xl text-center text-xs font-semibold bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 block";
                    div.innerText = "✨ Data transmitted safely to verification grid. Log out or navigate back.";
                    e.target.reset();
                } else {
                    div.className = "mt-4 p-4 rounded-xl text-center text-xs font-semibold bg-rose-500/20 border border-rose-500/30 text-rose-400 block";
                    div.innerText = "Error encountered: " + data.error;
                }
            });
        </script>
    </body>
    </html>
  `);
});

// --- VIEW 4: Secure Admin Management Controller Dashboard ---
app.get('/admin-panel', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"><title>Master Audit Console</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>body { background: #0b1329; color: #e2e8f0; }</style>
    </head>
    <body class="p-4 md:p-10">
        <div class="max-w-5xl mx-auto bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
            <h2 class="text-2xl font-bold border-b border-slate-800 pb-4 text-white">🔒 Audit Verification Queue</h2>
            <table class="w-full text-left text-xs mt-6">
                <thead class="bg-slate-800 text-slate-400 uppercase tracking-wider">
                    <tr><th class="p-3">Entity Name</th><th class="p-3">Location</th><th class="p-3 text-center">NAAC</th><th class="p-3 text-right">Verification Action</th></tr>
                </thead>
                <tbody id="rows"><tr><td colspan="4" class="p-4 text-center text-slate-500 font-mono">Polling registry parameters...</td></tr></tbody>
            </table>
        </div>
        <script>
            async function fetchLogs() {
                const res = await fetch('http://localhost:5002/api/ranking/pending');
                const out = await res.json();
                const tbody = document.getElementById('rows');
                if(!out.data || out.data.length===0) { tbody.innerHTML='<tr><td colspan="4" class="p-4 text-center text-slate-600 font-mono">Queue cleared. No active pending validations.</td></tr>'; return; }
                tbody.innerHTML = out.data.map(c => \`
                    <tr class="border-b border-slate-800 hover:bg-slate-800/20">
                        <td class="p-3 font-semibold text-white">\${c.name}<br><span class="text-slate-500 font-normal">\${c.email}</span></td>
                        <td class="p-3 text-slate-400">\${c.location}</td>
                        <td class="p-3 text-center"><span class="px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded font-mono">\${c.naacRanking}</span></td>
                        <td class="p-3 text-right"><button onclick="verify('\${c._id}')" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold transition">Authorize Audit</button></td>
                    </tr>
                \`).join('');
            }
            async function verify(id) {
                if(!confirm("Authorize placement mathematics and submit rank cascade updates?")) return;
                const res = await fetch('http://localhost:5002/api/ranking/approve/' + id, { method: 'PUT' });
                const out = await res.json();
                if(out.success) { alert("Record approved and matrix calculated."); fetchLogs(); }
            }
            fetchLogs();
        </script>
    </body>
    </html>
  `);
});

app.listen(5000, () => console.log('Edge API Gateway Service active on terminal root port 5000'));