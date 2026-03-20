const students = [
  {
    name: "Benjamin Stistrup Skov Knudsen",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25bssk",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Benjamin Vive Høgedal",
    img: "https://eaaa.instructure.com/images/thumbnails/1482646/hhNDHmXPOhrVQKA8FmhZNUnevO59wu1FaWzbKs3T",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Caroline Majlandt Clorius",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25cmc",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Cecilie Schmidt",
    img: "https://eaaa.instructure.com/images/thumbnails/1466438/y1HC2RFVP5DEHIpkxFr7gC8E7RvxAUzssEYLMR59",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Cecilie Thykjær Skals",
    img: "https://eaaa.instructure.com/images/thumbnails/1471053/5C0m05rlp346iOaqSWzGFDQUHG5obZJzgAqcZLZC",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Cecilie Vestergaard Andersen",
    img: "https://eaaa.instructure.com/images/thumbnails/1465999/0Gfhkw1xhL3FTJKVYKCKpGYCxFwe5XMApdhsORTC",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Celina Marie Lunding",
    img: "https://eaaa.instructure.com/images/thumbnails/1525659/yrd26D07T2DrFy2GY2feAe9v9vTOaAxj8wtQrbHV",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Daniel Bentzen-Bilkvist",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25dbb",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Ditte Caroline Ankersen",
    img: "https://eaaa.instructure.com/images/thumbnails/1471049/IyIsRmdsRlkcbNoYIUoTLmtz6QufsyHF1nbkt5AG",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Freia Mandrup Krog",
    img: "https://eaaa.instructure.com/images/thumbnails/1471052/KahncEqJwwrQ6olqy8LCYm8CMF2zsDtE4yICrkGq",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Freja Kejser",
    img: "https://eaaa.instructure.com/files/1465142/download?download_frd=1&verifier=5yVLbgtLHhC67XhiRxwKgCfwxyeZbCN2VeQOlTQb",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Fredrik Møllenberg",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25fmo",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Frida Linnea Berggreen Ramsing",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25flbr",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Jarl Skov Gyldenløve",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25jsg",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Jeppe Korsgaard Kristensen",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25jkk",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Julie Wendelboe Bøcher",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25jubo",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Kübra Fidan",
    img: "https://eaaa.instructure.com/images/thumbnails/1471116/YwB9rW9BRy9pdoB5IxB9wvvw87lxga1gMnmcAznY",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Lauge Chemnitz Borup",
    img: "https://eaaa.instructure.com/images/thumbnails/1481181/BCg8YV8KLSey6VBRVYgLueP6cA3ikv79fFy8y0LZ",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Laura Amalie Lynge Nielsen",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25laln",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Line Svendsen",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25lisv",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Lærke Theodine Lønne",
    img: "https://eaaa.instructure.com/images/thumbnails/1464622/tOryjL5scVtixcfKyMfFGxjv6ya274OSQ5LuTmo0",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Magnus Bach Billeskov Brask",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25mbbb",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Marie-Luise Kuppe",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25maku",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Martin Hammerum Ærensgaard",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25maae",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Mathias Skyum Moeslund",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25msmo",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Mathilde Tilsted Hansen",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25mtha",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Mia Poder Olesen",
    img: "https://eaaa.instructure.com/images/thumbnails/1583438/V00Z5ceVN1PJa5KUmyNXbepAu7z1mJUMJDDkW7xe",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Mikkel Damgaard Nielsen",
    img: "https://eaaa.instructure.com/images/thumbnails/1471340/2eMNyMepN5g97BdTY3wgMvkrRWfUTIyb7xTT6tOW",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Mille Høj Lauridsen",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25mihl",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Mohammad Kamel Al-Rabiei",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25mkaal",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Nanna Bay Sandholt Jacobsen",
    img: "https://eaaa.instructure.com/images/thumbnails/1465162/z9aHF9EhtVnwo8r0DaVuzc3OPSfgM95OePrPw9wh",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Sebastian Striib Galthen",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa25ssg",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
  {
    name: "Signe Kjellerup Hove",
    img: "https://data.efif.dk/Image/StudSys.ashx?cmd=EAA&key=ccd6629f-904f-4356-b4c3-44d5d52cdc08&Username=eaa24sikh",
    udrejseChecked: false,
    hjemrejseChecked: false,
  },
].sort((a, b) => a.name.localeCompare(b.name, "da"));

const storageKey = "mdu-e25ixd-checkin";
const listEl = document.getElementById("list");
const searchEl = document.getElementById("search");
const metaEl = document.getElementById("meta");
const tripOutboundEl = document.getElementById("tripOutbound");
const tripReturnEl = document.getElementById("tripReturn");

const trips = {
  outbound: { key: "udrejseChecked", label: "Udrejse til Amsterdam 23/3" },
  return: { key: "hjemrejseChecked", label: "Hjemrejse fra Amsterdam 27/3" },
};

let activeTrip = "outbound";

const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
if (Array.isArray(saved) && saved.length === students.length) {
  saved.forEach((savedStudent, index) => {
    students[index].udrejseChecked =
      typeof savedStudent.udrejseChecked === "boolean" ? savedStudent.udrejseChecked : !!savedStudent.checked;
    students[index].hjemrejseChecked =
      typeof savedStudent.hjemrejseChecked === "boolean" ? savedStudent.hjemrejseChecked : !!savedStudent.checkedReturn;
  });
}

function save() {
  localStorage.setItem(storageKey, JSON.stringify(students));
}

function avatarFallback(name) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=f1f5f9&color=0f172a&size=128`;
}

function getFilteredStudents() {
  const query = searchEl.value.trim().toLowerCase();
  if (!query) return students;
  return students.filter((student) => student.name.toLowerCase().includes(query));
}

function getTripConfig() {
  return trips[activeTrip];
}

function isChecked(student) {
  return !!student[getTripConfig().key];
}

function setChecked(student, value) {
  student[getTripConfig().key] = value;
}

function updateTripButtons() {
  const outboundActive = activeTrip === "outbound";
  tripOutboundEl.classList.toggle("active", outboundActive);
  tripReturnEl.classList.toggle("active", !outboundActive);
  tripOutboundEl.setAttribute("aria-selected", String(outboundActive));
  tripReturnEl.setAttribute("aria-selected", String(!outboundActive));
}

function updateMeta() {
  const checked = students.filter((student) => isChecked(student)).length;
  metaEl.textContent = `MDU-E25IXD · Studietur Amsterdam · ${getTripConfig().label} · ${checked}/${students.length} tjekket ind`;
}

function render() {
  const filtered = getFilteredStudents();
  updateTripButtons();
  updateMeta();

  if (!filtered.length) {
    listEl.innerHTML = '<div class="empty">Ingen studerende matcher din søgning.</div>';
    return;
  }

  listEl.innerHTML = filtered
    .map(
      (student) => `
        <button class="student ${isChecked(student) ? "checked" : ""}" data-name="${student.name.replace(/"/g, "&quot;")}">
          <img src="${student.img}" alt="${student.name}" loading="lazy" onerror="this.onerror=null;this.src='${avatarFallback("__NAME__")}';this.src=this.src.replace('__NAME__', encodeURIComponent(this.alt));">
          <div>
            <div class="name">${student.name}</div>
            <div class="status">${isChecked(student) ? "Tjekket ind" : "Tryk for at tjekke ind"}</div>
          </div>
          <div class="tick">✓</div>
        </button>
      `,
    )
    .join("");
}

function updateStudentButtonUI(button, student) {
  const checked = isChecked(student);
  button.classList.toggle("checked", checked);
  const statusEl = button.querySelector(".status");
  if (statusEl) {
    statusEl.textContent = checked ? "Tjekket ind" : "Tryk for at tjekke ind";
  }
}

listEl.addEventListener("click", (event) => {
  const button = event.target.closest(".student");
  if (!button) return;
  const name = button.dataset.name;
  const student = students.find((s) => s.name === name);
  if (!student) return;
  setChecked(student, !isChecked(student));
  save();
  updateStudentButtonUI(button, student);
  updateMeta();
});

searchEl.addEventListener("input", render);

tripOutboundEl.addEventListener("click", () => {
  activeTrip = "outbound";
  render();
});

tripReturnEl.addEventListener("click", () => {
  activeTrip = "return";
  render();
});

updateTripButtons();
render();
