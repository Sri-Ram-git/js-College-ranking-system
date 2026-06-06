const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });

const app = express();
app.use(cors());
app.use(express.json());

// HTML View 1: Government Aesthetic Platform Branding Homepage (Manthan)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"><title>Manthan Portal Platform</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-slate-50 font-sans">
        <nav class="bg-white border-b border-slate-200 sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
            <div class="flex items-center gap-3">
                <div class="font-bold text-xl tracking-tight text-slate-800 flex items-center gap-2"><span class="text-emerald-600 font-extrabold text-2xl">M</span>Manthan</div>
                <div class="hidden lg:block text-[10px] border-l pl-3 border-slate-300 text-slate-500 uppercase font-medium leading-tight">Ideas &amp; Implementation through<br>Science Technologies and Innovations</div>
            </div>
            <div class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                <a href="/" class="text-cyan-600 border-b-2 border-cyan-600 pb-1">Home</a>
                <a href="#" class="hover:text-cyan-600">Co-Partners</a><a href="#" class="hover:text-cyan-600">Opportunities</a><a href="#" class="hover:text-cyan-600">Industry R&amp;D</a>
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
                    <p class="text-slate-600 leading-relaxed text-sm">The Manthan platform promotes collaboration at scale between industry and the scientific research and development ecosystem to help meet India's national targets and United Nations' Sustainable Development Goals (SDGs).</p>
                    <button class="bg-[#0e7490] hover:bg-[#155e75] text-white font-medium text-sm px-6 py-2.5 rounded-lg transition shadow-md">Read More</button>
                </div>
                <div class="w-full lg:w-[420px] bg-slate-900 rounded-xl overflow-hidden aspect-video relative flex items-center justify-center border-4 border-white shadow-xl">
                    <div class="absolute inset-0 bg-cover bg-center opacity-40" style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400');"></div>
                    <div class="w-14 h-14 bg-white/90 text-slate-900 rounded-full flex items-center justify-center shadow-lg cursor-pointer z-10 font-bold">▶</div>
                </div>
            </div>
        </section>
    </body>
    </html>
  `);
});

// HTML View 2: UTTHAN Registry Entry Node with Intercepted Code Validation Loop
app.get('/utthan', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"><title>UTTHAN Registry Node</title><script src="https://cdn.tailwindcss.com"></script></head>
    <body class="bg-slate-50 min-h-screen flex flex-col font-sans">
        <div class="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
            <div class="font-bold text-lg text-slate-800 tracking-tight">Manthan <span class="text-slate-300">/</span> <span class="text-cyan-700 font-semibold">Utthan Gateway</span></div>
            <a href="/" class="text-xs font-semibold text-cyan-600 hover:underline">← Home</a>
        </div>
        <main class="flex-1 flex items-center justify-center p-6">
            <div id="authContainer" class="bg-white border border-slate-200 rounded-xl p-8 max-w-md w-full shadow-xl">
                <h3 class="text-xl font-bold text-slate-800 mb-6 text-center">Sign in to your account</h3>
                <form id="registerForm" class="space-y-4">
                    <div><label class="block text-xs font-semibold text-slate-500 mb-1">Full Name</label><input type="text" id="regName" required class="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"></div>
                    <div><label class="block text-xs font-semibold text-slate-500 mb-1">Institutional Email</label><input type="email" id="regEmail" required class="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"></div>
                    <div><label class="block text-xs font-semibold text-slate-500 mb-1">Associated College Entity</label><input type="text" id="regInst" required class="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"></div>
                    <button type="submit" class="w-full bg-cyan-600 text-white font-medium p-3 rounded-lg text-sm hover:bg-cyan-700 transition">Request Registry Access Token</button>
                </form>
            </div>
        </main>
        <script>
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
                    document.getElementById('authContainer').innerHTML = \`
                        <h3 class="text-xl font-bold text-slate-800 mb-2 text-center">OTP Verification</h3>
                        <p class="text-xs text-slate-500 mb-6 text-center">Enter verification code sent to your terminal console logs for <br><span class="font-semibold text-cyan-600">\${email}</span></p>
                        <form id="otpForm" class="space-y-4">
                            <input type="text" id="otpCode" maxLength="6" required class="w-full border text-center tracking-widest font-mono text-xl rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none">
                            <button type="submit" class="w-full bg-emerald-600 text-white font-semibold p-3 rounded-lg text-sm hover:bg-emerald-700 transition">Verify &amp; Unlock Form</button>
                        </form>\`;
                    document.getElementById('otpForm').addEventListener('submit', async (eO) => {
                        eO.preventDefault();
                        const otp = document.getElementById('otpCode').value;
                        const resV = await fetch('http://localhost:5001/api/auth/verify-otp', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, otp })
                        });
                        const dataV = await resV.json();
                        if(dataV.success) {
                            window.location.href = '/data-collection-form?verified=true&email=' + encodeURIComponent(email) + '&name=' + encodeURIComponent(institution);
                        } else { alert("Verification check token mismatch exception."); }
                    });
                }
            });
        </script>
    </body>
    </html>
  `);
});

// HTML View 3: Your exact target Premium-Glass Data Collection Form Interface layout
app.get('/data-collection-form', (req, res) => {
  const { verified, email, name } = req.query;
  if (verified !== 'true') return res.status(403).send('<h2 style="font-family:sans-serif; text-align:center; padding:50px; color:#b91c1c;">🚨 Access Denied: UTTHAN Registry Gate Authorization Required.</h2>');
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"><title>Institutional Metrics Form</title><script src="https://cdn.tailwindcss.com"></script>
        <style>
            body { background: linear-gradient(135deg, #161E2F 0%, #242F49 40%, #384358 65%, #541A2E 100%); background-attachment: fixed; }
            .premium-glass { background: rgba(20, 42, 68, 0.4); backdrop-filter: blur(30px); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
            .vibrant-white-field { background: #e0e9f6; border: 2px solid transparent; color: #081426; font-weight: 500; transition: all 0.2s ease; }
            .vibrant-white-field:focus { background: #ffffff; border-color: #FFA586; outline: none; }
        </style>
    </head>
    <body class="min-h-screen flex items-start justify-center p-4 md:p-12 text-slate-200 antialiased">
        <div class="w-full max-w-4xl flex gap-8 items-start mt-6">
            <div class="hidden md:flex flex-col items-center sticky top-12">
                <div class="relative w-1.5 h-80 bg-slate-900/60 rounded-full overflow-hidden border border-white/5"><div id="progressBar" class="absolute top-0 left-0 w-full bg-gradient-to-b from-[#FFA586] to-[#B51A2B] rounded-full transition-all duration-300" style="height: 0%"></div></div>
                <div id="progressBubble" class="mt-4 text-xs font-mono font-medium tracking-wide bg-[#142A44]/40 text-[#FFA586] px-2.5 py-1 rounded-full border border-white/5 shadow-sm">0% Completed</div>
            </div>
            <div class="flex-1 premium-glass rounded-2xl p-6 md:p-10">
                <header class="mb-10 border-b border-white/10 pb-5 flex justify-between items-end">
                    <div><h1 class="text-2xl md:text-3xl font-light text-white">Institutional <span class="font-semibold text-[#FFA586]">Data Collection</span></h1></div>
                    <div class="text-right text-xs text-teal-400 font-mono">Session ID:<br>${email}</div>
                </header>
                <form id="collegeForm" class="space-y-8">
                    <input type="hidden" name="email" value="${email}">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div><label class="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5">College Name *</label><input type="text" name="name" value="${name}" readonly class="vibrant-white-field w-full rounded-xl p-3 text-sm opacity-70 bg-slate-200 cursor-not-allowed"></div>
                        <div><label class="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5">Location *</label><input type="text" name="location" required class="vibrant-white-field w-full rounded-xl p-3 text-sm"></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div><label class="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5">NAAC Ranking *</label><select name="naacRanking" required class="vibrant-white-field w-full rounded-xl p-3 text-sm"><option value="A++">A++</option><option value="A+">A+</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="Not Accredited">Not Accredited</option></select></div>
                        <div><label class="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5">Faculty Strength *</label><input type="number" name="facultyStrength" required class="vibrant-white-field w-full rounded-xl p-3 text-sm"></div>
                        <div><label class="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5">Student Strength *</label><input type="number" name="studentStrength" required class="vibrant-white-field w-full rounded-xl p-3 text-sm"></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div><label class="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5">Total Labs *</label><input type="number" name="labsCount" required class="vibrant-white-field w-full rounded-xl p-3 text-sm"></div>
                        <div><label class="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5">Library Volumes *</label><input type="number" name="libraryBooks" required class="vibrant-white-field w-full rounded-xl p-3 text-sm"></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div><label class="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5">Student Published Articles *</label><input type="number" name="studentArticles" required class="vibrant-white-field w-full rounded-xl p-3 text-sm"></div>
                        <div><label class="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5">Papers &amp; Dissertations *</label><input type="number" name="researchPapers" required class="vibrant-white-field w-full rounded-xl p-3 text-sm"></div>
                    </div>
                    <button type="submit" style="background:#B51A2B" class="w-full py-4 text-white font-medium text-sm rounded-xl hover:opacity-90 transition">Compile &amp; Evaluate Matrix</button>
                </form>
                <div id="result" class="mt-6 hidden p-4 rounded-xl text-center text-sm font-medium border"></div>
            </div>
        </div>
        
        <script>
            const API_BASE = window.location.hostname === 'localhost' ? 'http://localhost:5001' : '';

            document.getElementById('registerForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                const fullName = document.getElementById('regName').value;
                const email = document.getElementById('regEmail').value;
                const institution = document.getElementById('regInst').value;
                
                try {
                    const res = await fetch(API_BASE + '/api/auth/register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ fullName, email, institution })
                    });
                    const data = await res.json();
                    
                    if(data.success) {
                        // Clean concatenation fixes the nested template string bugs completely!
                        document.getElementById('authContainer').innerHTML = 
                            '<h3 class="text-xl font-bold text-slate-800 mb-2 text-center">OTP Verification</h3>' +
                            '<p class="text-xs text-slate-500 mb-6 text-center">A verification code has been dispatched straight to <br><span class="font-semibold text-cyan-600">' + email + '</span></p>' +
                            '<form id="otpForm" class="space-y-4">' +
                                '<input type="text" id="otpCode" maxLength="6" required class="w-full border text-center tracking-widest font-mono text-xl rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none">' +
                                '<button type="submit" class="w-full bg-emerald-600 text-white font-semibold p-3 rounded-lg text-sm hover:bg-emerald-700 transition">Verify &amp; Unlock Form</button>' +
                            '</form>';
                        
                        // Re-bind listener explicitly to the newly rendered form DOM node
                        document.getElementById('otpForm').addEventListener('submit', async (eO) => {
                            eO.preventDefault();
                            const otp = document.getElementById('otpCode').value;
                            
                            const resV = await fetch(API_BASE + '/api/auth/verify-otp', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ email, otp })
                            });
                            const dataV = await resV.json();
                            if(dataV.success) {
                                window.location.href = '/data-collection-form?verified=true&email=' + encodeURIComponent(email) + '&name=' + encodeURIComponent(institution);
                            } else { 
                                alert("Verification check token mismatch exception."); 
                            }
                        });
                    }
                } catch (err) {
                    alert("Network Connection Error: " + err.message);
                }
            });
        </script>
    </body>
    </html>
  `);
});

// HTML View 4: Secure Admin Panel Interface with target dark theme color specs
app.get('/admin-panel', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"><title>Audit Console</title><script src="https://cdn.tailwindcss.com"></script>
        <style>
            body { background: linear-gradient(135deg, #161E2F 0%, #242F49 40%, #384358 65%, #541A2E 100%); background-attachment: fixed; }
            .premium-glass { background: rgba(20, 42, 68, 0.4); backdrop-filter: blur(30px); border: 1px solid rgba(255, 255, 255, 0.08); }
            .details-pane { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255,255,255,0.05); }
        </style>
    </head>
    <body class="min-h-screen p-4 md:p-12 text-slate-200 antialiased">
        <div class="max-w-5xl mx-auto premium-glass rounded-2xl p-6 md:p-10 shadow-2xl">
            <header class="mb-10 border-b border-white/10 pb-5 flex justify-between items-center">
                <h1 class="text-2xl md:text-3xl font-light tracking-wide text-white">🔒 Audit &amp; <span class="font-semibold text-[#FFA586]">Approval Panel</span></h1>
            </header>
            <div class="border border-white/5 rounded-xl overflow-hidden bg-slate-950/20">
                <table class="w-full text-left text-sm">
                    <thead class="bg-slate-900/60 text-xs text-slate-400 border-b border-white/5">
                        <tr><th class="p-4">College Entity</th><th class="p-4">Location</th><th class="p-4 text-center">NAAC Status</th><th class="p-4 text-right">Actions</th></tr>
                    </thead>
                    <tbody id="pendingTable"><tr><td colspan="4" class="p-4 text-center text-slate-500 font-mono text-xs">Scanning registry records...</td></tr></tbody>
                </table>
            </div>
        </div>
        <script>
            async function loadPending() {
                const res = await fetch('http://localhost:5002/api/ranking/pending'); const out = await res.json();
                const tbody = document.getElementById('pendingTable');
                if(!out.data || out.data.length===0) { tbody.innerHTML='<tr><td colspan="4" class="p-8 text-center text-slate-500 font-mono text-xs">No records awaiting evaluation audit.</td></tr>'; return; }
                let html = '';
                out.data.forEach((c, idx) => {
                    html += \`
                        <tr onclick="toggleRow('details-\${idx}')" class="border-b border-white/5 hover:bg-white/5 cursor-pointer transition">
                            <td class="p-4 font-semibold text-white">\${c.name}<br><span class="text-xs font-normal text-slate-400">\${c.email}</span></td>
                            <td class="p-4 text-slate-300 text-xs">\${c.location}</td>
                            <td class="p-4 text-center"><span class="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded font-mono">\${c.naacRanking}</span></td>
                            <td class="p-4 text-right text-xs text-[#FFA586] font-medium tracking-wide">Inspect Profile 🔍</td>
                        </tr>
                        <tr id="details-\${idx}" class="hidden bg-black/10">
                            <td colspan="4" class="p-6">
                                <div class="details-pane p-5 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 text-xs shadow-inner">
                                    <div><h4 class="font-bold mb-2 uppercase text-[#FFA586] tracking-wider text-[10px]">👥 Core Ratios</h4>
                                        <div class="space-y-1 text-slate-300"><div>Faculty Strength: <strong class="text-white">\${c.facultyStrength}</strong></div><div>Student Registry: <strong class="text-white">\${c.studentStrength}</strong></div></div>
                                    </div>
                                    <div><h4 class="font-bold mb-2 uppercase text-teal-400 tracking-wider text-[10px]">🔬 Facilities</h4>
                                        <div class="space-y-1 text-slate-300"><div>Labs: <strong class="text-white">\${c.labsCount}</strong></div><div>Library Books: <strong class="text-white">\${c.libraryBooks}</strong></div></div>
                                    </div>
                                    <div><h4 class="font-bold mb-2 uppercase text-purple-400 tracking-wider text-[10px]">📖 Publications</h4>
                                        <div class="space-y-1 text-slate-300"><div>Articles: <strong class="text-white">\${c.studentArticles}</strong></div><div>Papers: <strong class="text-white">\${c.researchPapers}</strong></div></div>
                                    </div>
                                    <div class="md:col-span-3 pt-4 border-t border-white/5 flex justify-end">
                                        <button onclick="event.stopPropagation(); approveCollege('\${c._id}')" style="background:#B51A2B" class="px-5 py-2.5 text-white font-semibold text-xs rounded-xl shadow-md transition hover:opacity-90">Confirm Audit &amp; Authorize Rank</button>
                                    </div>
                                </div>
                            </td>
                        </tr>\`;
                });
                tbody.innerHTML = html;
            }
            function toggleRow(id) { const r=document.getElementById(id); if(r) r.classList.toggle('hidden'); }
            async function approveCollege(id) {
                if(!confirm("Authorize rank calculations and fire notifier mail?")) return;
                const res = await fetch('http://localhost:5002/api/ranking/approve/' + id, { method: 'PUT' }); const out = await res.json();
                if(out.success) { alert("Matrix evaluated and notification mail sent successfully!"); loadPending(); }
            }
            loadPending();
        </script>
    </body>
    </html>
  `);
});

// Only listen on a port if running locally in development mode
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Edge API Gateway Service online on port ${PORT}`));
}

// Export for Vercel Serverless Engines
module.exports = app;