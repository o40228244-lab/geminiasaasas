let classes = {

    "9th Boys":[
    "Ali Ahmad Farid","Naveed Latif","Adil Badshah","Muhammad Aliyan","Hasnain Ahmad",
    "Rayan","Muhammad Junaid","Muhammad Faiz","Mahad","Muhammad Aryan Adnan",
    "Muhammad Hashir","Ahmad Bari","Rao Ahsan","Muhammad Moeed","Muhammad Umar Rabbani",
    "Muhammad Hamdan","Aryan Usman","Hamad","Noor Murtaza","Muhammad Abdullah Falak",
    "Muhammad Talah","Ikrash","Muhammad Suleman Zia","Muhammad Sohaib","Muhammad Awwab",
    "Muhammad Muslim Khan","Muhammad Ibrahim","Muhammad Shahriyar","Muhammad Mustajab Hasan","Muhammad Umar Farooq"
    ],

    "9th Girls":[
    "Maha Maryam","Abeera Saqib","Meerab Adnan","Aiza Usman","Amna",
    "Mishal Muzammil","Arooj Fatima","Hafsa Malik","Zainab Ali","Abeera Adnan",
    "Sadia Noor","Hadia Anam","Ayesha Yusuf","Zahra Batul","Aimal Midha",
    "Tahreem Fatima","Zahra Bilal","Mahaddam Zainab","Amna Usman","Yashfa Latif","Zainab Iman"
    ],

    "10th Boys":[
    "Abdullah Maaz","Abdul Sattar","M Ayyan Nasir","Mahad","M Hassan",
    "Haider Ali","Shahzain","Muhammad","Hassnain Abbas","Zain Ali",
    "M Ahmad Shahzad","M Hermain Shahid","Noor Ul Hassan","Faizan Murtaza","M Umair",
    "M Saad","Momin Ali Zahid","Saif Ur Rehman","M Talha","M Hassan Abbas",
    "M Ali","M Junaid Latif","M Sudais Niazi","Ahmad Rana","Papu Khan",
    "Faizan Asmat","Husni Farooq","Haseeb Yousuf","M Farhan Ashraf","Usman",
    "M Ahmad Hameed","M Bilal","Abdullah","Ayan Ahmad"
    ],

    "10th Girls":[
    "Afira Hassan","Afshan","Aiman Fatima","Alishba Shahzad","Aliza",
    "Amna Abbas","Amna Ismail","Aqsa Gulzar","Areesha Hidayat","Arfa Khalil",
    "Ariba","Asia Bibi","Ayesha Husnain","Ayesha Naeem","Ayesha Zia",
    "Briha","Eman Fatima","Farheen Fatima","Fatima Abbas","Fiza Ijaz",
    "Fiza Noor","Iram Hafeez","Maham Zhra","Mahanil Fatima","Mahnoor",
    "Mubashira Ijaz","Naeema Khan","Nimra Farid","Noor","Noor Ul Ain Naeem",
    "Rehma Riaz","Rida Almas","Rizwana Batool","Romaisa Asghar","Sabiha Fatima",
    "Salma Riaz","Samia Bibi","Sanjeeda","Shabana Mehboob","Tooba Sajid",
    "Umaema","Waniza Siddique","Wareesha Rauf","Zainab Noor","Zainab Saeed",
    "Zainab Zahra","Zarmina","Zeenat Mohsin","Zunaira Yusuf"
    ]

};

// Pre-loaded ONLY latest test (2026-07-17) for 10th Girls
let defaultClassData = {
    "10th Girls": {
        tests: [
            { name: "Ch 12", date: "2026-07-17", tm: "10" }
        ],
        students: [
            { name: "Afira Hassan", marks: ["8.5"] },
            { name: "Afshan", marks: ["A"] },
            { name: "Aiman Fatima", marks: ["04"] },
            { name: "Alishba Shahzad", marks: ["08"] },
            { name: "Aliza", marks: ["05"] },
            { name: "Amna Abbas", marks: ["8.5"] },
            { name: "Amna Ismail", marks: ["07"] },
            { name: "Aqsa Gulzar", marks: ["08"] },
            { name: "Areesha Hidayat", marks: ["A"] },
            { name: "Arfa Khalil", marks: ["07"] },
            { name: "Ariba", marks: ["07"] },
            { name: "Asia Bibi", marks: ["8.5"] },
            { name: "Ayesha Husnain", marks: ["09"] },
            { name: "Ayesha Naeem", marks: ["2.5"] },
            { name: "Ayesha Zia", marks: ["01"] },
            { name: "Briha", marks: ["07"] },
            { name: "Eman Fatima", marks: ["8.5"] },
            { name: "Farheen Fatima", marks: ["3.5"] },
            { name: "Fatima Abbas", marks: ["9.5"] },
            { name: "Fiza Ijaz", marks: ["8.5"] },
            { name: "Fiza Noor", marks: ["5.5"] },
            { name: "Iram Hafeez", marks: ["00"] },
            { name: "Maham Zhra", marks: ["01"] },
            { name: "Mahanil Fatima", marks: ["7.5"] },
            { name: "Mahnoor", marks: ["7.5"] },
            { name: "Mubashira Ijaz", marks: ["7.5"] },
            { name: "Naeema Khan", marks: ["A"] },
            { name: "Nimra Farid", marks: ["A"] },
            { name: "Noor", marks: ["08"] },
            { name: "Noor Ul Ain Naeem", marks: ["8.5"] },
            { name: "Rehma Riaz", marks: ["05"] },
            { name: "Rida Almas", marks: ["6.5"] },
            { name: "Rizwana Batool", marks: ["05"] },
            { name: "Romaisa Asghar", marks: ["8.5"] },
            { name: "Sabiha Fatima", marks: ["A"] },
            { name: "Salma Riaz", marks: ["9.5"] },
            { name: "Samia Bibi", marks: ["5.5"] },
            { name: "Sanjeeda", marks: ["08"] },
            { name: "Shabana Mehboob", marks: ["04"] },
            { name: "Tooba Sajid", marks: ["1.5"] },
            { name: "Umaema", marks: ["A"] },
            { name: "Waniza Siddique", marks: ["4.5"] },
            { name: "Wareesha Rauf", marks: ["06"] },
            { name: "Zainab Noor", marks: ["A"] },
            { name: "Zainab Saeed", marks: ["09"] },
            { name: "Zainab Zahra", marks: ["A"] },
            { name: "Zarmina", marks: ["05"] },
            { name: "Zeenat Mohsin", marks: ["00"] },
            { name: "Zunaira Yusuf", marks: ["4.5"] }
        ]
    }
};

let students = [];
let tests = [];
let currentClass = "";

const area = document.getElementById("area");
const emptyState = document.getElementById("emptyState");
const pdfClassEl = document.getElementById("pdfClass");
const classSelect = document.getElementById("classSelect");
const head = document.getElementById("head");
const body = document.getElementById("body");
const modalOverlay = document.getElementById("modalOverlay");
const modalBox = document.getElementById("modalBox");
const toastEl = document.getElementById("toast");


// ===================== TOAST =====================
function toast(msg){
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(() => toastEl.classList.remove("show"), 2200);
}


// ===================== MODAL HELPERS =====================
function showModal(html){
    modalBox.innerHTML = html;
    modalOverlay.classList.remove("hidden");
    let firstInput = modalBox.querySelector("input");
    if(firstInput) setTimeout(() => firstInput.focus(), 50);
}

function hideModal(){
    modalOverlay.classList.add("hidden");
    modalBox.innerHTML = "";
}

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") hideModal();
    if(e.key === "Enter" && !modalOverlay.classList.contains("hidden") &&
       e.target && e.target.tagName === "INPUT" && modalBox.contains(e.target)){
        let ok = modalBox.querySelector(".btn-primary");
        if(ok) ok.click();
    }
});


// ===================== DISPLAY NAME (prefix hiding for Boys classes only) =====================
function getDisplayName(name, cls){
    if(cls !== "9th Boys" && cls !== "10th Boys") return name;

    let trimmed = (name || "").trim();

    if(trimmed === "Muhammad") return trimmed;

    let match;

    if(match = trimmed.match(/^Muhammad\s+(.+)$/i)){
        return match[1].trim();
    }

    if(match = trimmed.match(/^M\.\s*(.+)$/)){
        return match[1].trim();
    }

    if(match = trimmed.match(/^M\s+(.+)$/)){
        return match[1].trim();
    }

    return trimmed;
}


// ===================== EXPORT NAME (Expands M. or M to Muhammad for PDF/PNG) =====================
function getExportName(name){
    let trimmed = (name || "").trim();

    if(/^M\.\s*/i.test(trimmed)){
        return trimmed.replace(/^M\.\s*/i, "Muhammad ");
    }
    if(/^M\s+/i.test(trimmed)){
        return trimmed.replace(/^M\s+/i, "Muhammad ");
    }

    return trimmed;
}


// ===================== LOAD CLASS =====================
function loadClass(){
    currentClass = classSelect.value;
    if(!currentClass){
        area.style.display = "none";
        emptyState.style.display = "block";
        pdfClassEl.textContent = "";
        return;
    }

    if(isCombined(currentClass)){
        loadCombined();
        return;
    }
    setCombinedMode(false);

    let saved = localStorage.getItem(currentClass);

    if(saved){
        let data = JSON.parse(saved);
        students = data.students;
        tests = data.tests;
        sortStudents();
    } else if(defaultClassData[currentClass]) {
        students = JSON.parse(JSON.stringify(defaultClassData[currentClass].students));
        tests = JSON.parse(JSON.stringify(defaultClassData[currentClass].tests));
        sortStudents();
        saveData();
    } else {
        students = classes[currentClass].map(n => ({ name: n, marks: [] }));
        tests = [];
        sortStudents();
    }

    emptyState.style.display = "none";
    area.style.display = "block";
    pdfClassEl.textContent = currentClass;
    render();
}


// ===================== SORT STUDENTS BY DISPLAYED NAME =====================
function sortStudents(){
    students.sort((a, b) => {
        let nameA = getDisplayName(a.name, currentClass);
        let nameB = getDisplayName(b.name, currentClass);
        return nameA.localeCompare(nameB);
    });
}


// ===================== ADD TEST =====================
let pendingTestIndex = null;      // where the next new test will be inserted

function addTest(pos){
    pendingTestIndex = (typeof pos === "number") ? pos : tests.length;
    let where = "";
    if(tests.length > 0){
        if(pendingTestIndex <= 0) where = "It will be placed at the very beginning.";
        else if(pendingTestIndex >= tests.length) where = "It will be placed at the end.";
        else where = "It will be placed between <strong>" + escHTML(tests[pendingTestIndex - 1].name) +
                     "</strong> and <strong>" + escHTML(tests[pendingTestIndex].name) + "</strong>.";
    }
    showModal(`
        <h3>Add New Test</h3>
        ${where ? '<p style="margin:0 0 10px;font-size:13px;opacity:.8;">' + where + '</p>' : ''}
        <label for="mTestName">Test Name</label>
        <input id="mTestName" type="text" placeholder="e.g. Chapter 5 Quiz">
        <label for="mTestDate">Date</label>
        <input id="mTestDate" type="date">
        <label for="mTestTM">Total Marks</label>
        <input id="mTestTM" type="number" min="1" placeholder="e.g. 20">
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" onclick="confirmAddTest()">Add Test</button>
        </div>
    `);
}

function confirmAddTest(){
    let name = document.getElementById("mTestName").value.trim();
    let date = document.getElementById("mTestDate").value;
    let tm = document.getElementById("mTestTM").value;

    if(!name){
        toast("Please enter a test name.");
        return;
    }

    let at = (pendingTestIndex === null) ? tests.length : pendingTestIndex;
    at = Math.max(0, Math.min(at, tests.length));
    tests.splice(at, 0, { name, date, tm });
    students.forEach(s => s.marks.splice(at, 0, "A"));   // marks stay lined up with their tests
    pendingTestIndex = null;

    saveData();
    hideModal();
    render();
    toast("Test added.");
}


// ===================== ADD STUDENT =====================
function addStudent(){
    showModal(`
        <h3>Add New Student</h3>
        <label for="mStudentName">Student Name</label>
        <input id="mStudentName" type="text" placeholder="Full name">
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" onclick="confirmAddStudent()">Add Student</button>
        </div>
    `);
}

function confirmAddStudent(){
    let name = document.getElementById("mStudentName").value.trim();
    if(!name){
        toast("Please enter a student name.");
        return;
    }
    students.push({ name, marks: tests.map(() => "A") });
    sortStudents();
    saveData();
    hideModal();
    render();
    toast("Student added.");
}


// ===================== DELETE =====================
function deleteStudent(i){
    let name = students[i].name;
    showModal(`
        <h3>Remove Student?</h3>
        <p class="warn">This will permanently remove <strong>${escHTML(name)}</strong> and all their marks from this class.</p>
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" style="background:linear-gradient(135deg,#DC2626,#B91C1C)" onclick="confirmDeleteStudent(${i})">Remove</button>
        </div>
    `);
}

function confirmDeleteStudent(i){
    students.splice(i, 1);
    sortStudents();
    saveData();
    hideModal();
    render();
    toast("Student removed.");
}

function deleteTest(i){
    let name = tests[i].name;
    showModal(`
        <h3>Remove Test?</h3>
        <p class="warn">This will permanently remove <strong>${escHTML(name)}</strong> and every student's marks for it.</p>
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" style="background:linear-gradient(135deg,#DC2626,#B91C1C)" onclick="confirmDeleteTest(${i})">Remove</button>
        </div>
    `);
}

function confirmDeleteTest(i){
    tests.splice(i, 1);
    students.forEach(s => s.marks.splice(i, 1));
    saveData();
    hideModal();
    render();
    toast("Test removed.");
}


// ===================== EDIT STUDENT / EDIT TEST =====================
function editStudent(i){
    let s = students[i];
    if(!s) return;
    showModal(`
        <h3>Edit Student Name</h3>
        <label for="mEditStudentName">Student Name</label>
        <input id="mEditStudentName" type="text" value="${escHTML(s.name)}">
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" onclick="confirmEditStudent(${i})">Save Changes</button>
        </div>
    `);
    let inp = document.getElementById("mEditStudentName");
    if(inp) setTimeout(() => inp.select(), 60);
}

function confirmEditStudent(i){
    let name = document.getElementById("mEditStudentName").value.trim();
    if(!name){
        toast("Please enter a student name.");
        return;
    }
    students[i].name = name;      // marks stay exactly as they are
    sortStudents();
    saveData();
    hideModal();
    render();
    toast("Student updated.");
}

function editTest(i){
    let t = tests[i];
    if(!t) return;
    showModal(`
        <h3>Edit Test</h3>
        <label for="mEditTestName">Test Name</label>
        <input id="mEditTestName" type="text" value="${escHTML(t.name)}">
        <label for="mEditTestDate">Date</label>
        <input id="mEditTestDate" type="date" value="${escHTML(t.date || "")}">
        <label for="mEditTestTM">Total Marks</label>
        <input id="mEditTestTM" type="number" min="1" value="${escHTML(t.tm || "")}">
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" onclick="confirmEditTest(${i})">Save Changes</button>
        </div>
    `);
    let inp = document.getElementById("mEditTestName");
    if(inp) setTimeout(() => inp.select(), 60);
}

function confirmEditTest(i){
    let name = document.getElementById("mEditTestName").value.trim();
    let date = document.getElementById("mEditTestDate").value;
    let tm = document.getElementById("mEditTestTM").value;

    if(!name){
        toast("Please enter a test name.");
        return;
    }
    tests[i].name = name;         // every student's marks stay untouched
    tests[i].date = date;
    tests[i].tm = tm;
    saveData();
    hideModal();
    render();
    toast("Test updated.");
}


// ===================== RENDER =====================
function render(){
    head.innerHTML = "<th>Sr#</th><th>Student Name</th>";

    tests.forEach((t, i) => {
        head.innerHTML += `
        <th class="testTh">
        <button class="insBtn insLeft" title="Add a new test before this one" onclick="addTest(${i})">+</button>
        ${i === tests.length - 1 ? `<button class="insBtn insRight" title="Add a new test after this one" onclick="addTest(${i + 1})">+</button>` : ""}
        ${escHTML(t.name)}<br>
        Date : ${escHTML(t.date)}<br>
        T.M = ${escHTML(t.tm)}<br>
        <button class="edit" onclick="editTest(${i})">Edit</button>
        <button class="delete" onclick="deleteTest(${i})">Delete</button>
        </th>`;
    });

    head.innerHTML += "<th>Action</th>";
    body.innerHTML = "";

    students.forEach((s, i) => {
        let displayName = getDisplayName(s.name, currentClass);
        let row = `<tr><td>${i + 1}</td><td>${escHTML(displayName)}</td>`;

        s.marks.forEach((m, j) => {
            row += `<td>
            <input type="text" inputmode="numeric" value="${escHTML(m)}"
            class="${m=="A" ? 'absent' : ''}"
            onfocus="if(this.value=='A'){this.value='';this.className='';}"
            onclick="if(this.value=='A'){this.value='';this.className='';}"
            oninput="students[${i}].marks[${j}]=this.value;this.className=this.value=='A'?'absent':'';saveData();">
            </td>`;
        });

        row += `<td class="actionCell"><button class="edit" onclick="editStudent(${i})">Edit</button> <button class="delete" onclick="deleteStudent(${i})">Delete</button></td></tr>`;
        body.innerHTML += row;
    });
}


// ===================== SAVE =====================
function saveData(){
    if(!currentClass || isCombined(currentClass)) return;
    localStorage.setItem(currentClass, JSON.stringify({ students, tests }));
}

function manualSave(){
    saveData();
    toast("Saved.");
}


// ===================== BACKUP / RESTORE =====================
function exportBackup(){
    let backup = {};
    Object.keys(classes).forEach(cls => {
        let saved = localStorage.getItem(cls);
        if(saved) backup[cls] = JSON.parse(saved);
    });

    if(Object.keys(backup).length === 0){
        toast("No saved data yet to back up.");
        return;
    }

    let blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    let today = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = "Physics_Results_Backup_" + today + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast("Backup downloaded.");
}

function triggerImport(){
    document.getElementById("importFile").click();
}

function importBackup(event){
    let file = event.target.files[0];
    if(!file) return;

    let reader = new FileReader();
    reader.onload = function(e){
        try{
            let data = JSON.parse(e.target.result);
            let count = 0;
            Object.keys(data).forEach(cls => {
                if(classes[cls]){
                    localStorage.setItem(cls, JSON.stringify(data[cls]));
                    count++;
                }
            });
            toast(count + " class(es) restored. Re-select the class to view.");
            if(currentClass && (data[currentClass] || isCombined(currentClass))) loadClass();
        } catch(err){
            toast("Invalid backup file.");
        }
        event.target.value = "";
    };
    reader.readAsText(file);
}


// ===================== PDF =====================
function downloadPDF(){
  try{
    if(isCombined(currentClass)){
        loadCombined();          // same fresh data as the screen
        exportStyledPDF();       // dark blue modern design: Combined lists only
    } else {
        exportClassicPDF();      // original classic design: Boys / Girls classes
    }
  } catch(err){
    console.error(err);
    toast("PDF failed: " + (err && err.message ? err.message : "unknown error"));
  }
}

// ===================== PDF (original classic design - normal classes) =====================
function exportClassicPDF(){
    let doc = new jspdf.jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    let pageWidth = doc.internal.pageSize.getWidth();

    // ---- Header band ----
    doc.setFillColor(31, 43, 82);
    doc.rect(0, 0, pageWidth, 24, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Physics Test Result", pageWidth / 2, 12, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(currentClass, pageWidth / 2, 19, { align: "center" });

    doc.setTextColor(0, 0, 0);

    let headRow = ["Sr#", "Student Name"];
    tests.forEach(t => {
        headRow.push(t.name + "\nDate: " + t.date + "\nT.M: " + t.tm);
    });

    let rows = students.map((s, i) => [i + 1, getExportName(s.name), ...s.marks]);

    doc.autoTable({
        head: [headRow],
        body: rows,
        startY: 30,
        theme: "grid",
        styles: {
            fontSize: 13,
            cellPadding: 4,
            lineColor: [210, 217, 232],
            lineWidth: 0.25,
            font: "helvetica",
            valign: "middle",
        },
        headStyles: {
            fillColor: [31, 43, 82],
            textColor: 255,
            fontStyle: "bold",
            halign: "center",
            valign: "middle",
            minCellHeight: 20,
            fontSize: 12.5,
            lineColor: [31, 43, 82],
        },
        bodyStyles: {
            halign: "center",
            valign: "middle",
            minCellHeight: 11,
        },
        alternateRowStyles: {
            fillColor: [246, 248, 252],
        },
        columnStyles: {
            0: { halign: "center", cellWidth: 14, fontStyle: "bold", textColor: [91, 101, 122] },
            1: { halign: "left", cellWidth: 55, fontStyle: "bold" }
        },
        didParseCell: function(data){
            if(data.section === "body" && data.cell.raw == "A"){
                data.cell.styles.textColor = [220, 38, 38];
                data.cell.styles.fontStyle = "bold";
            }
        },
        didDrawPage: function(data){
            let str = "Page " + doc.internal.getNumberOfPages();
            doc.setFontSize(9);
            doc.setTextColor(120, 128, 145);
            doc.text(str, pageWidth - 14, doc.internal.pageSize.getHeight() - 8);
        }
    });

    doc.save("Physics Class " + currentClass + " Result.pdf");
}

// ===================== PDF (dark modern design - Combined lists) =====================
function exportStyledPDF(){
    let combined = isCombined(currentClass);
    let m = combined ? combinedModel : null;
    let cols = combined ? m.cols : tests;
    let n = cols.length;

    // ---- Layout: widen the page when there are many tests ----
    let posW = combined ? 22 : 18, nameW = 58, testW = 24, grandW = 24, obtW = 26, pctW = 34;
    let margin = 14;
    let neededW = margin * 2 + posW + nameW + n * testW + (combined ? grandW + obtW + pctW : 0);
    let pageW = Math.max(297, Math.ceil(neededW));
    let pageFormat = pageW === 297 ? "a4" : [pageW, 210];

    let doc = new jspdf.jsPDF({ orientation: "landscape", unit: "mm", format: pageFormat });
    let W = doc.internal.pageSize.getWidth();
    let H = doc.internal.pageSize.getHeight();

    // let the name column take any spare width so the table always spans the page
    let spare = W - margin * 2 - (posW + nameW + n * testW + (combined ? grandW + obtW + pctW : 0));
    if(spare > 0 && n > 0) testW += Math.min(spare / n, 22);
    nameW = Math.max(nameW, W - margin * 2 - (posW + n * testW + (combined ? grandW + obtW + pctW : 0)));

    // ---- Palette: deep navy page, cyan -> violet accent ----
    const BG = [8, 13, 32], ROW_A = [13, 21, 46], ROW_B = [17, 27, 58], HEAD = [21, 33, 72];
    const TXT = [226, 232, 248], MUTED = [128, 144, 184], LINE = [34, 48, 92], DOTC = [24, 38, 78];
    const CYN = [34, 211, 238], VIO = [139, 92, 246], DARKINK = [18, 26, 54];

    // 1st = light red, 2nd = light yellow, 3rd = light green
    const tint   = { 1: [254, 205, 205], 2: [254, 240, 170], 3: [187, 245, 208] };
    const strong = { 1: [239, 68, 68],   2: [250, 204, 21],  3: [34, 197, 94] };
    const medalText = { 1: [255, 255, 255], 2: [80, 52, 0], 3: [255, 255, 255] };

    function gradientBar(y, h){
        let steps = 100, sw = W / steps;
        for(let i = 0; i < steps; i++){
            let t = i / (steps - 1);
            doc.setFillColor(
                Math.round(CYN[0] + (VIO[0] - CYN[0]) * t),
                Math.round(CYN[1] + (VIO[1] - CYN[1]) * t),
                Math.round(CYN[2] + (VIO[2] - CYN[2]) * t)
            );
            doc.rect(i * sw, y, sw + 0.4, h, "F");
        }
    }

    function paintPage(pageNo){
        doc.setFillColor(...BG);
        doc.rect(0, 0, W, H, "F");

        if(pageNo === 1){
            // dot-grid texture
            doc.setFillColor(...DOTC);
            for(let gx = W - 170; gx < W - 6; gx += 4.5){
                for(let gy = 6; gy < 32; gy += 4.5) doc.circle(gx, gy, 0.38, "F");
            }
            gradientBar(0, 2.2);

            doc.setFont("courier", "bold");
            doc.setFontSize(9);
            doc.setTextColor(...CYN);
            doc.text("PHYSICS  |  TEST RESULT", margin, 13);

            doc.setFont("helvetica", "bold");
            doc.setFontSize(27);
            doc.setTextColor(255, 255, 255);
            doc.text(combined ? "Combined Result" : "Class Result", margin, 24.5);

            // class tag
            doc.setFont("courier", "bold");
            doc.setFontSize(14);
            let tag = currentClass.toUpperCase();
            let tw = doc.getTextWidth(tag) + 16;
            doc.setFillColor(14, 30, 66);
            doc.setDrawColor(...CYN);
            doc.setLineWidth(0.6);
            doc.roundedRect(W - margin - tw, 9, tw, 13, 6.5, 6.5, "FD");
            doc.setFillColor(...CYN);
            doc.circle(W - margin - tw + 6.5, 15.5, 1.1, "F");
            doc.setTextColor(...CYN);
            doc.text(tag, W - margin - tw / 2 + 2, 19.6, { align: "center" });
        } else {
            gradientBar(0, 1.6);
            doc.setFont("courier", "bold");
            doc.setFontSize(9.5);
            doc.setTextColor(...TXT);
            doc.text("PHYSICS  |  " + (combined ? "COMBINED RESULT" : "CLASS RESULT"), margin, 10);
            doc.setTextColor(...CYN);
            doc.text(currentClass.toUpperCase(), W - margin, 10, { align: "right" });
        }
    }

    // ---- Table data ----
    let headRow = [combined ? "POSITION" : "SR#", "STUDENT NAME"];
    cols.forEach(t => headRow.push(t.name + "\nDate: " + t.date + "\nT.M: " + t.tm));
    if(combined) headRow.push("GRAND TOTAL", "OBTAINED", "PERCENTAGE");
    let lastCol = headRow.length - 1;

    let rows;
    if(combined){
        rows = m.rows.map(r => [
            r.posLabel, r.exportName, ...r.cells,
            fmtNum(r.grand), fmtNum(r.obtained), r.pctText
        ]);
    } else {
        rows = students.map((s, i) => [i + 1, getExportName(s.name), ...cols.map((c, j) => {
            let v = s.marks[j];
            return (v === undefined || v === null) ? "" : String(v);
        })]);
    }

    let cs = {
        0: { cellWidth: posW, halign: "center" },
        1: { cellWidth: nameW, halign: "left", fontStyle: "bold" }
    };
    for(let c = 0; c < n; c++) cs[2 + c] = { cellWidth: testW, font: "courier", fontStyle: "bold" };
    if(combined){
        cs[2 + n]     = { cellWidth: grandW, textColor: MUTED, font: "courier", fontStyle: "bold" };
        cs[2 + n + 1] = { cellWidth: obtW, fontStyle: "bold", font: "courier" };
        cs[lastCol]   = { cellWidth: pctW, fontStyle: "bold", font: "courier", fontSize: 12.5 };
    }

    let markLo = 2, markHi = 2 + n;      // [lo, hi) = test columns

    doc.autoTable({
        head: [headRow],
        body: rows,
        startY: 38,
        margin: { top: 20, left: margin, right: margin, bottom: 16 },
        theme: "plain",
        styles: {
            font: "helvetica",
            fontSize: n > 6 ? 10 : 11,
            cellPadding: 2.5,
            halign: "center",
            valign: "middle",
            textColor: TXT,
            lineWidth: 0,
            fillColor: ROW_A
        },
        headStyles: {
            fillColor: HEAD,
            textColor: [255, 255, 255],
            font: "helvetica",
            fontStyle: "bold",
            fontSize: n > 6 ? 7.8 : 8.6,
            minCellHeight: 19
        },
        bodyStyles: { minCellHeight: 12 },
        alternateRowStyles: { fillColor: ROW_B },
        columnStyles: cs,

        willDrawPage: function(){
            paintPage(doc.internal.getCurrentPageInfo().pageNumber);
        },

        didParseCell: function(data){
            if(data.section !== "body") return;
            let r = combined ? m.rows[data.row.index] : null;
            let top = !!(r && r.rank && r.rank <= 3);

            if(top){
                data.cell.styles.fillColor = tint[r.rank];
                data.cell.styles.textColor = DARKINK;
            }
            // percentage: plain bold number, colour-coded
            if(combined && data.column.index === lastCol && r && r.ranked && !top){
                let pv = r.pctKey / 1e6;
                data.cell.styles.textColor = pv >= 75 ? [52, 211, 153] : (pv >= 50 ? [251, 191, 36] : [248, 113, 113]);
            }
            if(data.column.index === 0 && top) data.cell.text = [""];
            if(data.column.index >= markLo && data.column.index < markHi && data.cell.raw === "A") data.cell.text = [""];
            if(data.column.index === 0 && !top){
                data.cell.styles.textColor = MUTED;
                data.cell.styles.fontStyle = "bold";
            }
        },

        didDrawCell: function(data){
            let c = data.cell, x = c.x, y = c.y, w = c.width, h = c.height;

            if(data.section === "head"){
                doc.setDrawColor(...CYN);
                doc.setLineWidth(0.7);
                doc.line(x, y + h, x + w, y + h);
                return;
            }
            if(data.section !== "body") return;

            let r = combined ? m.rows[data.row.index] : null;
            let top = !!(r && r.rank && r.rank <= 3);

            doc.setDrawColor(...LINE);
            doc.setLineWidth(0.2);
            doc.line(x, y + h, x + w, y + h);

            if(data.column.index === 0 && top){
                doc.setFillColor(...strong[r.rank]);
                doc.rect(x, y, 1.4, h, "F");
                doc.circle(x + w / 2, y + h / 2, 4.6, "F");
                doc.setFont("helvetica", "bold");
                doc.setFontSize(7.5);
                doc.setTextColor(...medalText[r.rank]);
                doc.text(r.posLabel, x + w / 2, y + h / 2 + 1.1, { align: "center" });
            }

            // "A" pill for absent
            if(data.column.index >= markLo && data.column.index < markHi && c.raw === "A"){
                let cx = x + w / 2, cyy = y + h / 2;
                if(top) doc.setFillColor(255, 255, 255); else doc.setFillColor(72, 22, 40);
                doc.roundedRect(cx - 4, cyy - 3, 8, 6, 3, 3, "F");
                doc.setFont("courier", "bold");
                doc.setFontSize(10);
                if(top) doc.setTextColor(200, 35, 35); else doc.setTextColor(255, 120, 120);
                doc.text("A", cx, cyy + 1.3, { align: "center" });
            }
        }
    });

    // ---- Footer: page number only ----
    let total = doc.internal.getNumberOfPages();
    for(let i = 1; i <= total; i++){
        doc.setPage(i);
        doc.setDrawColor(...LINE);
        doc.setLineWidth(0.3);
        doc.line(margin, H - 11, W - margin, H - 11);
        doc.setFont("courier", "bold");
        doc.setFontSize(8.5);
        doc.setTextColor(...MUTED);
        doc.text("PAGE " + i + " / " + total, W - margin, H - 6.5, { align: "right" });
    }

    doc.save("Physics Class " + currentClass + " Result.pdf");
}



// ===================== PNG (one single image, dark modern design) =====================
function buildDarkPngSpec(){
    let combined = true;
    let m = combinedModel;
    let cols = combined ? m.cols : tests;
    let n = cols.length;

    const CYN = "#22d3ee", VIO = "#8b5cf6";
    const tint   = { 1: "#fecdcd", 2: "#fef0aa", 3: "#bbf5d0" };
    const strong = { 1: "#ef4444", 2: "#facc15", 3: "#22c55e" };
    const medalTx = { 1: "#ffffff", 2: "#503400", 3: "#ffffff" };

    let posW = combined ? 92 : 76, nameW = 250, testW = 108, sumW = 112, pctW = 120;
    let tableW = posW + nameW + n * testW + (combined ? 2 * sumW + pctW : 0);
    let pad = 40;
    let totalW = Math.max(tableW, 900) + pad * 2;

    let mono = "'JetBrains Mono', 'Courier New', monospace";
    let sans = "Arial, Helvetica, sans-serif";

    function cell(w, inner, extra){
        return `<div style="width:${w}px;flex:0 0 ${w}px;box-sizing:border-box;padding:0 6px;display:flex;align-items:center;justify-content:center;text-align:center;${extra || ""}">${inner}</div>`;
    }
    function pill(dark){
        return `<span style="display:inline-block;min-width:34px;padding:5px 14px;border-radius:999px;` +
               `background:${dark ? "#ffffff" : "#481628"};color:${dark ? "#c8231f" : "#ff7878"};` +
               `font-family:${mono};font-weight:bold;font-size:18px;line-height:20px;">A</span>`;
    }

    // ---- header block ----
    let html = `
      <div style="height:6px;border-radius:3px;background:linear-gradient(90deg,${CYN},${VIO});margin-bottom:30px;"></div>
      <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:32px;">
        <div>
          <div style="font-family:${mono};font-weight:bold;font-size:16px;letter-spacing:3px;color:${CYN};margin-bottom:8px;">PHYSICS &nbsp;|&nbsp; TEST RESULT</div>
          <div style="font-family:${sans};font-weight:bold;font-size:50px;color:#ffffff;line-height:1.1;">${combined ? "Combined Result" : "Class Result"}</div>
        </div>
        <div style="font-family:${mono};font-weight:bold;font-size:26px;color:${CYN};border:2px solid ${CYN};background:#0e1e42;border-radius:999px;padding:10px 30px;">${escHTML(currentClass.toUpperCase())}</div>
      </div>`;

    // ---- table head ----
    let head = cell(posW, combined ? "POSITION" : "SR#", "font-size:14px;") +
               cell(nameW, "STUDENT NAME", "font-size:14px;");
    cols.forEach(t => {
        head += cell(testW,
            `<div><div style="font-size:15px;">${escHTML(t.name)}</div>` +
            `<div style="font-size:12px;font-weight:normal;color:#b6c3e6;margin-top:3px;">Date: ${escHTML(t.date)}</div>` +
            `<div style="font-size:12px;font-weight:normal;color:#b6c3e6;">T.M: ${escHTML(t.tm)}</div></div>`);
    });
    if(combined){
        head += cell(sumW, "GRAND<br>TOTAL", "font-size:14px;") +
                cell(sumW, "OBTAINED", "font-size:14px;") +
                cell(pctW, "PERCENTAGE", "font-size:14px;");
    }
    html += `<div style="width:${tableW}px;display:flex;background:#152148;border-bottom:3px solid ${CYN};color:#fff;font-family:${sans};font-weight:bold;min-height:88px;border-radius:10px 10px 0 0;">${head}</div>`;

    // ---- rows ----
    let list = combined ? m.rows : students;
    list.forEach((r, i) => {
        let top = combined && r.rank && r.rank <= 3;
        let bg = top ? tint[r.rank] : (i % 2 === 0 ? "#0d152e" : "#111b3a");
        let fg = top ? "#122036" : "#e2e8f8";

        let posInner;
        if(top){
            posInner = `<span style="display:inline-block;width:44px;height:44px;line-height:44px;border-radius:50%;background:${strong[r.rank]};color:${medalTx[r.rank]};font-family:${sans};font-weight:bold;font-size:15px;">${escHTML(r.posLabel)}</span>`;
        } else {
            posInner = escHTML(combined ? r.posLabel : String(i + 1));
        }

        let name = combined ? r.exportName : getExportName(r.name);
        let marks = combined ? r.cells : cols.map((c, j) => (r.marks[j] === undefined || r.marks[j] === null) ? "" : String(r.marks[j]));

        let line = cell(posW, posInner, `font-family:${sans};font-weight:bold;font-size:17px;color:${top ? "#122036" : "#8090b8"};`) +
                   cell(nameW, escHTML(name), `justify-content:flex-start;text-align:left;font-family:${sans};font-weight:bold;font-size:18px;padding-left:10px;`);
        marks.forEach(v => {
            line += cell(testW, v === "A" ? pill(top) : escHTML(v), `font-family:${mono};font-weight:bold;font-size:19px;`);
        });
        if(combined){
            let p = r.ranked ? Math.max(0, Math.min(100, r.pctKey / 1e6)) : 0;
            let pcol = top ? "#122036" : (p >= 75 ? "#34d399" : (p >= 50 ? "#fbbf24" : "#f87171"));
            line += cell(sumW, escHTML(fmtNum(r.grand)), `font-family:${mono};font-weight:bold;font-size:19px;color:${top ? "#122036" : "#8090b8"};`) +
                    cell(sumW, escHTML(fmtNum(r.obtained)), `font-family:${mono};font-weight:bold;font-size:20px;`) +
                    cell(pctW, escHTML(r.pctText), `font-family:${mono};font-weight:bold;font-size:22px;color:${r.ranked ? pcol : "#8090b8"};`);
        }

        html += `<div style="width:${tableW}px;display:flex;min-height:62px;background:${bg};color:${fg};border-bottom:1px solid ${top ? "rgba(18,32,54,0.15)" : "#22305c"};${top ? "border-left:6px solid " + strong[r.rank] + ";box-sizing:border-box;" : ""}">${line}</div>`;
    });

    return {
        html: html,
        width: totalW,
        pad: pad,
        background: "linear-gradient(160deg,#080d20,#0d1533)",
        canvasBg: "#080d20"
    };
}

// Original classic look (white page, navy header) for Boys / Girls classes
function buildClassicPngSpec(){
    let n = tests.length;
    let posW = 70, nameW = 240, testW = 120;
    let tableW = posW + nameW + n * testW;
    if(tableW < 760){ nameW += 760 - tableW; tableW = 760; }
    let pad = 24;

    let sans = "Arial, Helvetica, sans-serif";
    let grid = "#d2d9e8";

    function cell(w, inner, extra){
        return `<div style="width:${w}px;flex:0 0 ${w}px;box-sizing:border-box;padding:6px 8px;display:flex;align-items:center;justify-content:center;text-align:center;border-right:1px solid ${grid};${extra || ""}">${inner}</div>`;
    }

    let html = `<div style="font-family:${sans};font-weight:bold;font-size:24px;color:#2B3A67;text-align:center;margin-bottom:16px;">Physics Test Result - ${escHTML(currentClass)}</div>`;

    let head = cell(posW, "Sr#", "font-size:15px;border-right-color:#1f2b52;") +
               cell(nameW, "Student Name", "font-size:15px;border-right-color:#1f2b52;");
    tests.forEach(t => {
        head += cell(testW,
            `<div style="line-height:1.35;"><div style="font-size:15px;">${escHTML(t.name)}</div>` +
            `<div style="font-size:12px;">Date : ${escHTML(t.date)}</div>` +
            `<div style="font-size:12px;">T.M = ${escHTML(t.tm)}</div></div>`, "border-right-color:#1f2b52;");
    });
    html += `<div style="width:${tableW}px;display:flex;background:#1f2b52;color:#ffffff;font-family:${sans};font-weight:bold;min-height:78px;border:1px solid #1f2b52;box-sizing:border-box;">${head}</div>`;

    students.forEach((s, i) => {
        let bg = (i % 2 === 0) ? "#ffffff" : "#f6f8fc";
        let line = cell(posW, String(i + 1), `font-family:${sans};font-weight:bold;font-size:16px;color:#5b657a;`) +
                   cell(nameW, escHTML(getExportName(s.name)), `justify-content:flex-start;text-align:left;font-family:${sans};font-weight:bold;font-size:17px;color:#33394d;padding-left:12px;`);
        tests.forEach((t, j) => {
            let v = (s.marks[j] === undefined || s.marks[j] === null) ? "" : String(s.marks[j]);
            line += cell(testW, escHTML(v), v === "A"
                ? `font-family:${sans};font-weight:bold;font-size:17px;color:#dc2626;`
                : `font-family:${sans};font-size:17px;color:#33394d;`);
        });
        html += `<div style="width:${tableW}px;display:flex;min-height:46px;background:${bg};border-left:1px solid ${grid};border-bottom:1px solid ${grid};box-sizing:border-box;">${line}</div>`;
    });

    return {
        html: html,
        width: tableW + pad * 2,
        pad: pad,
        background: "#ffffff",
        canvasBg: "#ffffff"
    };
}

// ===================== PNG (one single image) =====================
function downloadPNG(){
  try{
    let combined = isCombined(currentClass);
    if(combined) loadCombined();          // same fresh data as the screen

    // Combined lists: dark modern design. Boys / Girls classes: original classic design.
    let spec = combined ? buildDarkPngSpec() : buildClassicPngSpec();

    let wrapper = document.createElement("div");
    wrapper.style.cssText = "position:fixed;top:-99999px;left:-99999px;box-sizing:border-box;" +
        "width:" + spec.width + "px;padding:" + spec.pad + "px;background:" + spec.background + ";";
    wrapper.innerHTML = spec.html;
    document.body.appendChild(wrapper);

    // ONE single, very sharp image. Start at the highest quality the browser can
    // handle and step down automatically if a device cannot draw that large.
    let fullH = wrapper.offsetHeight || 1;
    let fullW = wrapper.offsetWidth || spec.width;
    let best = Math.min(4, 16000 / Math.max(fullW, fullH), Math.sqrt(120e6 / (fullW * fullH)));
    let scales = [];
    for(let sc = best; sc >= 1; sc *= 0.75) scales.push(sc);
    if(scales.length === 0 || scales[scales.length - 1] > 1) scales.push(Math.min(1, best));

    function looksBlank(canvas){
        try{
            let ctx = canvas.getContext("2d");
            if(!ctx) return true;
            let x = Math.floor(canvas.width / 2), y = Math.floor(canvas.height / 2);
            return ctx.getImageData(x, y, 1, 1).data[3] === 0;
        } catch(e){ return false; }
    }

    function finish(){
        if(wrapper.parentNode) document.body.removeChild(wrapper);
    }

    function attempt(k){
        if(k >= scales.length){
            finish();
            toast("PNG failed: image too large for this device.");
            return;
        }
        html2canvas(wrapper, { scale: scales[k], useCORS: true, scrollY: 0, backgroundColor: spec.canvasBg }).then(canvas => {
            if(looksBlank(canvas)){ attempt(k + 1); return; }
            canvas.toBlob(function(blob){
                if(!blob){ attempt(k + 1); return; }
                finish();
                let url = URL.createObjectURL(blob);
                let link = document.createElement("a");
                link.download = "Physics Class " + currentClass + " Result.png";
                link.href = url;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setTimeout(() => URL.revokeObjectURL(url), 4000);
                toast("PNG downloaded.");
            }, "image/png");
        }).catch(err => {
            console.error(err);
            attempt(k + 1);
        });
    }
    attempt(0);
  } catch(err){
    console.error(err);
    toast("PNG failed: " + (err && err.message ? err.message : "unknown error"));
  }
}


// ===================== COMBINED RESULT (9th / 10th) =====================
// Built fresh from the Boys + Girls data on every open/refresh.
// Nothing is copied or stored, so it can never go stale or duplicate.
let combinedModel = null;

function isCombined(cls){
    return /\sCombined$/.test(cls || "");
}

function setCombinedMode(on){
    ["btnAddTest", "btnAddStudent", "btnSave"].forEach(id => {
        let el = document.getElementById(id);
        if(el) el.style.display = on ? "none" : "";
    });
}

// Reads a class's data without touching the globals or saving anything
function getClassData(cls){
    let saved = localStorage.getItem(cls);
    if(saved){
        try{
            let d = JSON.parse(saved);
            return { students: d.students || [], tests: d.tests || [] };
        } catch(e){}
    }
    if(defaultClassData[cls]){
        return JSON.parse(JSON.stringify(defaultClassData[cls]));
    }
    return {
        students: (classes[cls] || []).map(n => ({ name: n, marks: [] })),
        tests: []
    };
}

// "A", blank or invalid marks count as 0 obtained
function numVal(v){
    let s = String(v === undefined || v === null ? "" : v).trim();
    if(s === "") return 0;
    let n = Number(s);
    return (isNaN(n) || !isFinite(n)) ? 0 : n;
}

function fmtNum(n){
    return String(Math.round(n * 100) / 100);
}

function ordinal(n){
    let v = n % 100;
    if(v >= 11 && v <= 13) return n + "th";
    switch(n % 10){
        case 1: return n + "st";
        case 2: return n + "nd";
        case 3: return n + "rd";
        default: return n + "th";
    }
}

function escHTML(s){
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function buildCombined(cls){
    let grade = cls.split(" ")[0];
    let sources = [grade + " Boys", grade + " Girls"];

    let cols = [];
    let colIndex = {};
    let entries = [];

    // Collect tests (matched by name + date + total marks) and all students
    sources.forEach(src => {
        let d = getClassData(src);
        let seen = {};
        let map = d.tests.map(t => {
            let base = [t.name, t.date, t.tm].join("|");
            seen[base] = (seen[base] || 0) + 1;
            let key = base + "|" + seen[base];
            if(!(key in colIndex)){
                colIndex[key] = cols.length;
                cols.push({ key, name: t.name, date: t.date, tm: t.tm });
            }
            return key;
        });
        d.students.forEach(s => {
            entries.push({ src, name: s.name, map, marks: s.marks || [] });
        });
    });

    // Order test columns by date
    cols = cols.map((c, i) => ({ c, i }))
        .sort((a, b) => (a.c.date || "").localeCompare(b.c.date || "") || a.i - b.i)
        .map(o => o.c);
    cols.forEach((c, i) => { colIndex[c.key] = i; });

    // ONE Grand Total for everyone: sum of the actual T.M of EVERY test column
    let grandAll = cols.reduce((sum, c) => sum + numVal(c.tm), 0);

    let rows = entries.map(e => {
        let cells = cols.map(() => "A");   // did not appear in this test = Absent
        let grand = grandAll;
        let obtained = 0;

        e.map.forEach((key, j) => {
            let c = colIndex[key];
            let raw = (e.marks[j] === undefined || e.marks[j] === null) ? "" : String(e.marks[j]);
            cells[c] = raw;
            obtained += numVal(raw);
        });

        let pct = grand > 0 ? (obtained / grand) * 100 : 0;

        return {
            name: getDisplayName(e.name, e.src),
            exportName: getExportName(e.name),
            sortName: getDisplayName(e.name, e.src),
            cells, grand, obtained,
            ranked: grand > 0,
            pctKey: Math.round(pct * 1e6),
            pctText: grand > 0 ? (+pct.toFixed(2)) + "%" : "-",
            rank: null,
            posLabel: "-"
        };
    });

    // Highest percentage first; students with no tests go last
    rows.sort((a, b) => {
        if(a.ranked !== b.ranked) return a.ranked ? -1 : 1;
        if(a.pctKey !== b.pctKey) return b.pctKey - a.pctKey;
        return a.sortName.localeCompare(b.sortName);
    });

    // DENSE ranking: equal results share a position and the next position is
    // NOT skipped (1, 2, 2, 3, 4 ...)
    let prevKey = null, prevRank = 0;
    rows.forEach(r => {
        if(!r.ranked) return;
        if(r.pctKey !== prevKey){
            prevRank += 1;
            prevKey = r.pctKey;
        }
        r.rank = prevRank;
        r.posLabel = ordinal(prevRank);
    });

    return { cols, rows };
}

function loadCombined(){
    students = [];
    tests = [];
    combinedModel = buildCombined(currentClass);
    setCombinedMode(true);
    emptyState.style.display = "none";
    area.style.display = "block";
    pdfClassEl.textContent = currentClass;
    renderCombined();
}

function renderCombined(){
    let m = combinedModel;

    let h = "<th>Position</th><th>Student Name</th>";
    m.cols.forEach(t => {
        h += `<th>${escHTML(t.name)}<br>Date : ${escHTML(t.date)}<br>T.M = ${escHTML(t.tm)}</th>`;
    });
    h += "<th>Grand Total</th><th>Obtained Marks</th><th>Percentage</th>";
    head.innerHTML = h;

    body.innerHTML = m.rows.map(r => {
        let top = (r.rank && r.rank <= 3) ? ` class="rank-${r.rank}"` : "";
        let pos = (r.rank && r.rank <= 3)
            ? `<span class="posBadge">${r.posLabel}</span>`
            : r.posLabel;

        let marks = r.cells.map(c => {
            if(c === null) return `<td class="naCell">—</td>`;
            return `<td${c === "A" ? ' class="absentCell"' : ""}>${escHTML(c)}</td>`;
        }).join("");

        return `<tr${top}><td>${pos}</td><td>${escHTML(r.name)}</td>${marks}` +
               `<td>${fmtNum(r.grand)}</td><td>${fmtNum(r.obtained)}</td>` +
               `<td class="pctCell">${r.pctText}</td></tr>`;
    }).join("");
}

// Refresh if data changes in another tab while a combined view is open
window.addEventListener("storage", () => {
    if(currentClass && isCombined(currentClass)) loadCombined();
});


// Make sure the two Combined choices always exist in the class dropdown,
// even if the HTML page does not list them.
function ensureCombinedOptions(){
    ["9th Combined", "10th Combined"].forEach(v => {
        let exists = Array.from(classSelect.options).some(o => o.value === v || o.textContent.trim() === v);
        if(!exists){
            let o = document.createElement("option");
            o.value = v;
            o.textContent = v;
            classSelect.appendChild(o);
        }
    });
}
ensureCombinedOptions();


// Initial state
emptyState.style.display = "block";