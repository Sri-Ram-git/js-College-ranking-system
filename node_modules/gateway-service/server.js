const express = require('express');

const cors = require('cors');

require('dotenv').config({ path: '../.env' });



const app = express();

app.use(cors());

app.use(express.json());



// --- VIEW 1: BRANDING HOMEPAGE (MANTHAN) ---

app.get('/', (req, res) => {

    res.send(`

    <!DOCTYPE html>

    <html lang="en">

    <head>

        <meta charset="UTF-8"><title>Manthan Portal Platform</title>

        <script src="https://cdn.tailwindcss.com"></script>

    </head>

    <body class="bg-slate-50 font-sans antialiased">

        

        <!-- 🌐 PREMIUM POLISHED NAV BAR -->

        <nav class="bg-white border-b border-slate-200/80 sticky top-0 z-50 w-full">

            <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                

                <!-- Left Section: Logo & Subtitle -->

                <div class="flex items-center gap-4 shrink-0">

                    <div class="font-bold text-xl tracking-tight text-slate-800 flex items-center gap-2">

                        <span class="text-emerald-600 font-extrabold text-2xl">M</span>Manthan

                    </div>

                    <div class="hidden lg:block text-[10px] border-l pl-4 border-slate-300 text-slate-500 uppercase font-semibold tracking-wider leading-tight">

                        Ideas &amp; Implementation through<br>Science Technologies and Innovations

                    </div>

                </div>

                

                <!-- Center Section: Main Navigation Links -->

                <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 mix-blend-normal">

                    <a href="/" class="text-cyan-600 border-b-2 border-cyan-600 px-1 py-2 transition-all">Home</a>

                    <a href="#" class="hover:text-cyan-600 px-1 py-2 transition-colors">Co-Partners</a>

                    <a href="#" class="hover:text-cyan-600 px-1 py-2 transition-colors">Opportunities</a>

                    <a href="#" class="hover:text-cyan-600 px-1 py-2 transition-colors">Industry R&amp;D</a>

                    <a href="/utthan" class="text-amber-700 bg-amber-50/80 px-3 py-1.5 rounded-lg border border-amber-200/60 hover:bg-amber-100 transition-all font-semibold shadow-sm">UTTHAN Registry</a>

                    <a href="/admin-panel" class="hover:text-slate-800 font-mono text-xs text-slate-400 border border-dashed border-slate-200 rounded px-2 py-1 hover:border-slate-400 transition-colors">Dashboard Control</a>

                </div>

                

                <!-- Right Section: Auth Management Calls -->

                <div class="flex items-center gap-4 shrink-0 text-sm font-semibold">

                    <a href="/utthan" class="text-slate-600 hover:text-slate-900 transition-colors">Sign In</a>

                    <a href="/utthan" class="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2.5 rounded-lg transition shadow-sm hover:shadow-md">Register</a>

                </div>



            </div>

        </nav>



        <!-- CORE DASHBOARD SECTION CONTENT -->

        <section class="max-w-7xl mx-auto px-6 py-12 mt-4">

            <div class="bg-gradient-to-br from-[#93b7be]/20 to-[#93b7be]/5 rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center border border-[#93b7be]/30 shadow-sm">

                <div class="flex-1 space-y-4">

                    <h2 class="text-3xl font-bold text-slate-800 tracking-tight">About Manthan</h2>

                    <p class="text-slate-600 leading-relaxed text-sm">The Manthan platform promotes collaboration at scale between industry and the scientific research and development ecosystem to help meet India's national targets and United Nations' Sustainable Development Goals (SDGs).</p>

                    <button class="bg-[#0e7490] hover:bg-[#155e75] text-white font-medium text-sm px-6 py-2.5 rounded-lg transition shadow-md">Read More</button>

                </div>

                <div class="w-full lg:w-[420px] bg-slate-900 rounded-xl overflow-hidden aspect-video relative flex items-center justify-center border-4 border-white shadow-xl">

                    <div class="absolute inset-0 bg-cover bg-center opacity-40" style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400');"></div>

                    <div class="w-14 h-14 bg-white/90 text-slate-900 rounded-full flex items-center justify-center shadow-lg cursor-pointer z-10 font-bold hover:scale-105 transition-transform">▶</div>

                </div>

            </div>

        </section>

    </body>

    </html>

  `);

});



// --- VIEW 2: UTTHAN GATEWAY ENTRY CARD ---

app.get('/utthan', (req, res) => {

    res.send(`

    <!DOCTYPE html>

    <html lang="en">

    <head>

        <meta charset="UTF-8">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>UTTHAN Registry Node</title>

        <script src="https://cdn.tailwindcss.com"></script>

    </head>

    <body class="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">

        

        <nav class="bg-white border-b border-slate-200 w-full">

            <div class="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

                <div class="font-bold text-md text-slate-800 tracking-tight">

                    Manthan <span class="text-slate-300 mx-1">/</span> <span class="text-cyan-700 font-semibold">Utthan Gateway</span>

                </div>

                <div class="flex items-center gap-6">

                    <button onclick="switchTab('user')" id="tabUser" class="text-xs font-bold uppercase tracking-wider text-cyan-600 border-b-2 border-cyan-600 pb-1">User Registry</button>

                    <button onclick="switchTab('status')" id="tabStatus" class="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 pb-1">Track Status</button>

                    <button onclick="switchTab('admin')" id="tabAdmin" class="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 pb-1">Admin Panel</button>

                </div>

                <a href="/" class="text-xs font-semibold text-cyan-600 hover:underline">← Home</a>

            </div>

        </nav>



        <main class="flex-1 flex items-center justify-center p-6">

            <div id="authContainer" class="bg-white border border-slate-200/80 rounded-2xl p-8 max-w-md w-full shadow-xl shadow-slate-100 transition-all duration-300">

                <div id="dynamicFormTarget">

                    <h3 class="text-xl font-bold text-slate-800 mb-4 text-center">Sign in to your account</h3>

                    <form id="registerForm" class="space-y-4">

                        <div>

                            <label class="block text-xs font-semibold text-slate-500 mb-1">Full Name</label>

                            <input type="text" id="regName" required class="w-full bg-[#eef4ff] border border-transparent rounded-lg p-2.5 text-sm focus:border-cyan-500 focus:bg-white focus:outline-none transition-all">

                        </div>

                        <div>

                            <label class="block text-xs font-semibold text-slate-500 mb-1">Institutional Email</label>

                            <input type="email" id="regEmail" required class="w-full bg-[#eef4ff] border border-transparent rounded-lg p-2.5 text-sm focus:border-cyan-500 focus:bg-white focus:outline-none transition-all">

                        </div>

                        <div>

                            <label class="block text-xs font-semibold text-slate-500 mb-1">Associated College Entity</label>

                            <input type="text" id="regInst" required class="w-full bg-[#eef4ff] border border-transparent rounded-lg p-2.5 text-sm focus:border-cyan-500 focus:bg-white focus:outline-none transition-all">

                        </div>

                        <button type="submit" class="w-full bg-[#0e8bab] hover:bg-[#0b728c] text-white font-medium p-3 rounded-lg text-sm shadow-md transition-all mt-2">

                            Request Registry Access Token

                        </button>

                    </form>

                </div>

            </div>

        </main>



        <script>

            const API_AUTH = window.location.hostname === 'localhost' ? 'http://localhost:5001' : '';

            const API_RANK = window.location.hostname === 'localhost' ? 'http://localhost:5002' : '';

            let activeTab = 'user';



            window.currentSubmitEmail = "";

            window.currentSubmitInst = "";



            function switchTab(mode) {

                activeTab = mode;

                const container = document.getElementById('dynamicFormTarget');

                

                document.getElementById('tabUser').className = mode === 'user' ? 'text-xs font-bold uppercase tracking-wider text-cyan-600 border-b-2 border-cyan-600 pb-1' : 'text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 pb-1';

                document.getElementById('tabStatus').className = mode === 'status' ? 'text-xs font-bold uppercase tracking-wider text-cyan-600 border-b-2 border-cyan-600 pb-1' : 'text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 pb-1';

                document.getElementById('tabAdmin').className = mode === 'admin' ? 'text-xs font-bold uppercase tracking-wider text-cyan-600 border-b-2 border-cyan-600 pb-1' : 'text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 pb-1';



                if(mode === 'user') {

                    container.innerHTML = \`

                        <h3 class="text-xl font-bold text-slate-800 mb-4 text-center">Sign in to your account</h3>

                        <form id="registerForm" class="space-y-4">

                            <div><label class="block text-xs font-semibold text-slate-500 mb-1">Full Name</label><input type="text" id="regName" required class="w-full bg-[#eef4ff] border border-transparent rounded-lg p-2.5 text-sm focus:border-cyan-500 focus:bg-white focus:outline-none transition-all"></div>

                            <div><label class="block text-xs font-semibold text-slate-500 mb-1">Institutional Email</label><input type="email" id="regEmail" required class="w-full bg-[#eef4ff] border border-transparent rounded-lg p-2.5 text-sm focus:border-cyan-500 focus:bg-white focus:outline-none transition-all"></div>

                            <div><label class="block text-xs font-semibold text-slate-500 mb-1">Associated College Entity</label><input type="text" id="regInst" required class="w-full bg-[#eef4ff] border border-transparent rounded-lg p-2.5 text-sm focus:border-cyan-500 focus:bg-white focus:outline-none transition-all"></div>

                            <button type="submit" class="w-full bg-[#0e8bab] text-white font-medium p-3 rounded-lg text-sm hover:bg-[#0b728c] transition-all mt-2">Request Registry Access Token</button>

                        </form>\`;

                    bindRegistryListener();

                } else if(mode === 'status') {

                    container.innerHTML = \`

                        <h3 class="text-xl font-bold text-slate-800 mb-2 text-center">Tracking Dashboard</h3>

                        <p class="text-xs text-slate-400 text-center mb-4">Query current institutional verification matrix tier</p>

                        <div class="space-y-4">

                            <input type="email" id="statusQueryEmail" placeholder="Enter Registered Institutional Email" class="w-full border rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">

                            <button onclick="runStatusQuery()" class="w-full bg-slate-800 hover:bg-slate-900 text-white p-3 rounded-lg text-sm font-medium transition-all">Query System Hierarchy</button>

                            <div id="statusResultOutput" class="mt-4 p-4 rounded-xl border hidden text-xs font-mono"></div>

                        </div>\`;

                } else if(mode === 'admin') {

                    container.innerHTML = \`

                        <h3 class="text-xl font-bold text-slate-800 mb-2 text-center">🔒 Executive Control Gate</h3>

                        <p class="text-xs text-slate-400 text-center mb-4">Authorization entry for master data evaluation</p>

                        <form id="adminLoginForm" class="space-y-4">

                            <input type="text" id="admUser" placeholder="Username" required class="w-full border rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">

                            <input type="password" id="admPass" placeholder="Password" required class="w-full border rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">

                            <button type="submit" class="w-full bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-lg text-sm font-bold transition-all">Authorize Admin Token</button>

                        </form>\`;

                    bindAdminLoginListener();

                }

            }



            function bindRegistryListener() {

                const form = document.getElementById('registerForm');

                if(!form) return;

                form.addEventListener('submit', async (e) => {

                    e.preventDefault();

                    const fullName = document.getElementById('regName').value;

                    const email = document.getElementById('regEmail').value;

                    const institution = document.getElementById('regInst').value;



                    try {

                        const res = await fetch(API_AUTH + '/api/auth/register', {

                            method: 'POST',

                            headers: { 'Content-Type': 'application/json' },

                            body: JSON.stringify({ fullName, email, institution })

                        });

                        const data = await res.json();

                        

                        if(data.success) {

                            window.currentSubmitEmail = email;

                            window.currentSubmitInst = institution;



                            document.getElementById('authContainer').innerHTML = 

                                '<h3 class="text-xl font-bold text-slate-800 mb-2 text-center">OTP Verification</h3>' +

                                '<p class="text-xs text-slate-500 mb-6 text-center">A verification code has been dispatched straight to <br><span class="font-semibold text-cyan-600">' + email + '</span></p>' +

                                '<form id="otp1Form" class="space-y-4">' +

                                    '<input type="text" id="otp1Code" maxLength="6" required class="w-full border text-center tracking-widest font-mono text-xl rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none">' +

                                    '<button type="submit" class="w-full bg-emerald-600 text-white font-semibold p-3 rounded-lg text-sm hover:bg-emerald-700 transition">Verify &amp; Unlock Form</button>' +

                                '</form>';



                            document.getElementById('otp1Form').addEventListener('submit', async (eO) => {

                                eO.preventDefault();

                                const otp = document.getElementById('otp1Code').value;

                                const cleanEmail = window.currentSubmitEmail;

                                const cleanInst = window.currentSubmitInst;

                                

                                const resV = await fetch(API_AUTH + '/api/auth/verify-reg', {

                                    method: 'POST',

                                    headers: { 'Content-Type': 'application/json' },

                                    body: JSON.stringify({ email: cleanEmail, otp })

                                });

                                const dataV = await resV.json();

                                if(dataV.success) {

                                    window.location.href = '/data-collection-form?verified=true&email=' + encodeURIComponent(cleanEmail) + '&name=' + encodeURIComponent(cleanInst);

                                } else { alert("Passcode mismatch entry exception."); }

                            });

                        } else { alert("Error: " + data.error); }

                    } catch(err) {

                        alert("Network connection failed: " + err.message);

                    }

                });

            }



            async function runStatusQuery() {

                const email = document.getElementById('statusQueryEmail').value;

                if(!email) return alert("Please specify target registry address node.");

                

                const res = await fetch(API_RANK + '/api/ranking/status?email=' + encodeURIComponent(email));

                const out = await res.json();

                const outputNode = document.getElementById('statusResultOutput');

                outputNode.classList.remove('hidden');



                if(!out.success) {

                    outputNode.className = "mt-4 p-4 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 text-xs font-mono";

                    outputNode.innerText = "Status: Unregistered Entity Matrix — Access Denied.";

                } else if(out.status === 'pending') {

                    outputNode.className = "mt-4 p-4 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 text-xs font-mono";

                    outputNode.innerText = "Status: Audit Pending Admin Signature Review — Placement Rank Frozen.";

                } else {

                    outputNode.className = "mt-4 p-4 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-mono";

                    outputNode.innerText = "Status: Active Approved Registry\\n------------------------------------\\nVerified Composite Score: " + out.score + " / 100\\nCurrent Global Placement Rank: Position #" + out.rank;

                }

            }



            function bindAdminLoginListener() {

                document.getElementById('adminLoginForm').addEventListener('submit', async (e) => {

                    e.preventDefault();

                    const res = await fetch('/api/gateway/admin-auth', {

                        method: 'POST',

                        headers: { 'Content-Type': 'application/json' },

                        body: JSON.stringify({ username: document.getElementById('admUser').value, password: document.getElementById('admPass').value })

                    });

                    if((await res.json()).success) {

                        sessionStorage.setItem('admin_token', 'AUTHORIZED_MATRIX');

                        window.location.href = '/admin-panel';

                    } else { alert("Access Violation: Invalid Security Signature."); }

                });

            }



            bindRegistryListener();

        </script>

    </body>

    </html>

  `);

});



// --- VIEW 3: PREMIUM GLASS TARGET SYSTEM METRICS DATA SHEET ---

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
            // 🟢 Explicitly capture microservice networking routes
            const API_AUTH = window.location.hostname === 'localhost' ? 'http://localhost:5001' : '';
            const API_RANK = window.location.hostname === 'localhost' ? 'http://localhost:5002' : '';

            // Dynamic progress bar calculation engine
            const formFields = document.querySelectorAll('#collegeForm input[required], #collegeForm select[required]');
            function updateProgress() {
                let filled = 0;
                formFields.forEach(f => { if(f.value.trim() !== "") filled++; });
                const percentage = Math.round((filled / formFields.length) * 100);
                document.getElementById('progressBar').style.height = percentage + '%';
                document.getElementById('progressBubble').innerText = percentage + '% Completed';
            }
            formFields.forEach(f => f.addEventListener('input', updateProgress));
            formFields.forEach(f => f.addEventListener('change', updateProgress));

            // 🛡️ SUBMISSION MECHANICS PIPELINE (Prevents the Access Denied Crash)
            document.getElementById('collegeForm').addEventListener('submit', async (e) => {
                e.preventDefault(); // Stop native browser navigation from stripping url keys
                
                const submitButton = e.target.querySelector('button[type="submit"]');
                const resultNode = document.getElementById('result');
                
                submitButton.disabled = true;
                submitButton.innerText = "Processing Matrix Metrics...";

                // Gather payload values
                const formData = {
                    email: e.target.email.value,
                    name: e.target.name.value,
                    location: e.target.location.value,
                    naacRanking: e.target.naacRanking.value,
                    facultyStrength: parseInt(e.target.facultyStrength.value),
                    studentStrength: parseInt(e.target.studentStrength.value),
                    labsCount: parseInt(e.target.labsCount.value),
                    libraryBooks: parseInt(e.target.libraryBooks.value),
                    studentArticles: parseInt(e.target.studentArticles.value),
                    researchPapers: parseInt(e.target.researchPapers.value)
                };

                try {
                    // Forward evaluation vector directly to your ranking microservice on port 5002
                    const res = await fetch(API_RANK + '/api/ranking/evaluate', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData)
                    });
                    
                    const data = await res.json();
                    resultNode.classList.remove('hidden');

                    if (data.success) {
                        resultNode.className = "mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center text-sm font-medium";
                        resultNode.innerHTML = "🎉 Matrix Compiled Successfully!<br><span class='text-xs font-mono text-slate-300'>Profile submitted for execution signature approval step.</span>";
                        e.target.reset();
                        updateProgress();
                    } else {
                        resultNode.className = "mt-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-center text-sm font-medium";
                        resultNode.innerText = "Evaluation Error: " + (data.message || "Invalid Matrix Data");
                    }
                } catch (err) {
                    console.error("Submission Error:", err);
                    resultNode.className = "mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-center text-sm font-medium";
                    resultNode.innerText = "Microservice Pipeline Offline: Failed to fetch port 5002 tracking cluster.";
                } finally {
                    submitButton.disabled = false;
                    submitButton.style.background = "#B51A2B";
                    submitButton.innerText = "Compile & Evaluate Matrix";
                }
            });
        </script>

    </body>

    </html>

  `);

});



// --- VIEW 4: MASTER CONTROL CONSOLE ---

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



// --- CRASH PROOF PORT BINDING INTERCEPTOR ---

if (process.env.NODE_ENV !== 'production') {

    const GATEWAY_PORT = 5000;

    const server = app.listen(GATEWAY_PORT, () => {

        console.log(`🚀 Edge API Gateway Service online and stable on port ${GATEWAY_PORT}`);

    });

    server.on('error', (err) => {

        if (err.code === 'EADDRINUSE') {

            console.log(`⚠️ Port ${GATEWAY_PORT} is temporarily busy. Syncing process context...`);

        }

    });

    process.on('SIGTERM', () => server.close());

    process.on('SIGINT', () => server.close());

}



module.exports = app;