// ==========================================
// APP DATA
// ==========================================

const levels = {

////////////////////////////////////////////////////////////////////

    "Primer 1": {
        "student-book": 10,
        "workbook": 11,
        audioBooks: ["student-book", "workbook"],
        
        sbNames:{
            1: "Classroom Language",
            2: "Lesson 1",
            3: "Lesson 2",
            4: "Lesson 3",
            5: "Lesson 4",
            6: "Lesson 5",
            7: "Lesson 6",
            8: "Lesson 7",
            9: "Lesson 8",
            10: "Lesson 9",
        },
        wbNames:{
            10: "Review 1A",
            11: "Review 1B",
        }
    },

/////////////////////////////////////////////////////////////////////

    "Primer 2": {
        "student-book": 9,
        "workbook": 10,
        audioBooks:["student-book" , "workbook"],

        sbNames:{
            1: "Classroom Language",
            2: "Lesson 10",
            3: "Lesson 11",
            4: "Lesson 12",
            5: "Lesson 13",
            6: "Lesson 14",
            7: "Lesson 15",
            8: "Lesson 16",
            9: "Lesson 17",
        },
        wbNames: {
            1: "Lesson 10",
            2: "Lesson 11",
            3: "Lesson 12",
            4: "Lesson 13",
            5: "Lesson 14",
            6: "Lesson 15",
            7: "Lesson 16",
            8: "Lesson 17",
            9: "Review 2A",
            10: "Review 2B",
        }
    },

/////////////////////////////////////////////////////////////////////

    "Step up1": {
        "student-book": 17,
        "activity-book": 22,
        audioBooks:["student-book" , "activity-book"],

        audioType:{
            "student-book":{
            1:"pages",
            2:"pages",
            3:"pages",
            4:"pages",
            5:"pages",
            6:"pages",
            7:"pages",
            8:"pages",
            9:"pages",
            10:"pages",
            11:"pages",
            12:"pages",
            13:"pages",
            14:"pages",
            15:"pages",
            16:"pages",
            17:"pages",
            }
        },

        audioPages:{
            "student-book":{
            1: { start: 1, count:3},
            2: { start: 4, count:3},
            3: { start: 7, count:2},
            4: { start: 9, count:3},
            5: { start: 12, count:2},
            6: { start: 14, count:3},
            7: { start: 17, count:2},
            8: { start: 19, count:2},
            9: { start: 21, count:2},
            10: { start: 23, count:2},
            11: { start: 25, count:2},
            12: { start: 27, count:2},
            13: { start: 29, count:2},
            14: { start: 31, count:3},
            15: { start: 34, count:3},
            16: { start: 37, count:2},
            17: { start: 39, count:2},
            
            }
        },

        actNames: {
            18: "Song 1",
            19: "Song 2",
            20: "Song 3",
            21: "Song 4",
            22: "Song 5"
        }


    },

/////////////////////////////////////////////////////////////////////

    "Step up2": {
        "student-book": 15,
        "activity-book": 22,
        audioBooks:["student-book" , "activity-book"],

        sbNames:{
            1: "Lesson 18",
            2: "Lesson 19",
            3: "Lesson 20",
            4: "Lesson 21",
            5: "Lesson 22",
            6: "Lesson 23",
            7: "Lesson 24",
            8: "Lesson 25",
            9: "Lesson 26",
            10: "Lesson 27",
            11: "Lesson 28",
            12: "Lesson 29",
            13: "Lesson 30",
            14: "Lesson 31",
            15: "Lesson 32",
        },

        actNames:{
            1: "Lesson 18",
            2: "Lesson 19",
            3: "Lesson 20",
            4: "Lesson 21",
            5: "Lesson 22",
            6: "Lesson 23",
            7: "Lesson 24",
            8: "Lesson 25",
            9: "Lesson 26",
            10: "Lesson 27",
            11: "Lesson 28",
            12: "Lesson 29",
            13: "Lesson 30",
            14: "Lesson 31",
            15: "Lesson 32",
            16: "Song 1",
            17: "Song 2",
            18: "Song 3",
            19: "Song 4",
            20: "Song 5",
            21: "Review 1",
            22: "Review 2",

        },

        audioType:{
            "student-book":{
            1:"pages",
            2:"pages",
            3:"pages",
            4:"pages",
            5:"pages",
            6:"pages",
            7:"pages",
            8:"pages",
            9:"pages",
            10:"pages",
            11:"pages",
            12:"pages",
            13:"pages",
            14:"pages",
            15:"pages",
            }
        },
        audioPages:{
            "student-book":{
                1: {start: 41, count: 3},
                2: {start: 44, count: 2},
                3: {start: 46, count: 3},
                4: {start: 49, count: 3},
                5: {start: 52, count: 2},
                6: {start: 54, count: 2},
                7: {start: 56, count: 2},
                8: {start: 58, count: 3},
                9: {start: 61, count: 2},
                10: {start: 63, count: 2},
                11: {start: 65, count: 2},
                12: {start: 67, count: 2},
                13: {start: 69, count: 2},
                14: {start: 71, count: 2},
                15: {start: 73, count: 2},

            }
        }
    },

/////////////////////////////////////////////////////////////////////
    
    "Step up3": {
        "student-book": 15,
        "activity-book": 20,
        audioBooks:["student-book" , "activity-book"],

        audioType:{
            "student-book":{
            1:"pages",
            2:"pages",
            3:"pages",
            4:"pages",
            5:"pages",
            6:"pages",
            7:"pages",
            8:"pages",
            9:"pages",
            10:"pages",
            11:"pages",
            12:"pages",
            13:"pages",
            14:"pages",
            15:"pages",
            }
        },

        audioPages:{
            "student-book":{
                1: {start: 1, count: 3},
                2: {start: 4, count: 2},
                3: {start: 6, count: 2},
                4: {start: 8, count: 3},
                5: {start: 11, count: 2},
                6: {start: 13, count: 3},
                7: {start: 16, count: 3},
                8: {start: 19, count: 3},
                9: {start: 22, count: 3},
                10: {start: 25, count: 2},
                11: {start: 27, count: 2},
                12: {start: 29, count: 2},
                13: {start: 31, count: 2},
                14: {start: 33, count: 2},
                15: {start: 35, count: 2},

                }
            },

        actNames: {
            16: "Song 1",
            17: "Song 2",
            18: "Song 3",
            19: "Review 1",
            20: "Review 2"

        }
        
    },

/////////////////////////////////////////////////////////////////////

    "Step up4": {
        "student-book": 17,
        "activity-book": 22,
        audioBooks:["student-book" , "activity-book"],

        sbNames:{
            1: "Lesson 16",
            2: "Lesson 17",
            3: "Lesson 18",
            4: "Lesson 19",
            5: "Lesson 20",
            6: "Lesson 21",
            7: "Lesson 22",
            8: "Lesson 23",
            9: "Lesson 24",
            10: "Lesson 25",
            11: "Lesson 26",
            12: "Lesson 27",
            13: "Lesson 28",
            14: "Lesson 29",
            15: "Lesson 30",
            16: "Lesson 31",
            17: "Lesson 32"
        },

        actNames:{
            1: "Lesson 16",
            2: "Lesson 17",
            3: "Lesson 18",
            4: "Lesson 19",
            5: "Lesson 20",
            6: "Lesson 21",
            7: "Lesson 22",
            8: "Lesson 23",
            9: "Lesson 24",
            10: "Lesson 25",
            11: "Lesson 26",
            12: "Lesson 27",
            13: "Lesson 28",
            14: "Lesson 29",
            15: "Lesson 30",
            16: "Lesson 31",
            17: "Lesson 32",
            18: "Song 1",
            19: "Song 2",
            20: "Song 3",
            21: "Review 1",
            22: "Review 2",

        },

        audioType:{
            "student-book":{
            1:"pages",
            2:"pages",
            3:"pages",
            4:"pages",
            5:"pages",
            6:"pages",
            7:"pages",
            8:"pages",
            9:"pages",
            10:"pages",
            11:"pages",
            12:"pages",
            13:"pages",
            14:"pages",
            15:"pages",
            16:"pages",
            17:"pages"
            }
        },
        
        audioPages:{
            "student-book":{
                1: {start: 37, count: 2},
                2: {start: 39, count: 2},
                3: {start: 41, count: 2},
                4: {start: 43, count: 2},
                5: {start: 45, count: 2},
                6: {start: 47, count: 2},
                7: {start: 49, count: 2},
                8: {start: 51, count: 3},
                9: {start: 54, count: 3},
                10: {start: 57, count: 2},
                11: {start: 59, count: 2},
                12: {start: 61, count: 2},
                13: {start: 63, count: 3},
                14: {start: 66, count: 2},
                15: {start: 68, count: 2},
                16: {start: 70, count: 2},
                17: {start: 72, count: 3},

            }
        }
    },

/////////////////////////////////////////////////////////////////////
    
    "Move up1": {
        "student-book": 16,
        audioBooks:["student-book"],

        audioType:{
            "student-book":{
            1:"pages",
            2:"pages",
            3:"pages",
            4:"pages",
            5:"pages",
            6:"pages",
            7:"pages",
            8:"pages",
            9:"pages",
            10:"pages",
            11:"pages",
            12:"pages",
            13:"pages",
            14:"pages",
            15:"pages",
            16:"pages",
            }
        },
        
        audioPages:{
            "student-book":{
                1: {start: 1, count: 2},
                2: {start: 3, count: 2},
                3: {start: 5, count: 2},
                4: {start: 7, count: 3},
                5: {start: 10, count: 3},
                6: {start: 13, count: 3},
                7: {start: 16, count: 3},
                8: {start: 19, count: 3},
                9: {start: 22, count: 3},
                10: {start: 25, count: 3},
                11: {start: 28, count: 2},
                12: {start: 30, count: 2},
                13: {start: 32, count: 2},
                14: {start: 34, count: 2},
                15: {start: 36, count: 3},
                16: {start: 39, count: 3}

            }
        }

    },

/////////////////////////////////////////////////////////////////////

     "Move up2": {
        "student-book": 16,
        audioBooks:["student-book"],
        
        sbNames:{
            1: "Lesson 17",
            2: "Lesson 18",
            3: "Lesson 19",
            4: "Lesson 20",
            5: "Lesson 21",
            6: "Lesson 22",
            7: "Lesson 23",
            8: "Lesson 24",
            9: "Lesson 25",
            10: "Lesson 26",
            11: "Lesson 27",
            12: "Lesson 28",
            13: "Lesson 29",
            14: "Lesson 30",
            15: "Lesson 31",
            16: "Lesson 32"
        },

        audioType:{
            "student-book":{
            1:"pages",
            2:"pages",
            3:"pages",
            4:"pages",
            5:"pages",
            6:"pages",
            7:"pages",
            8:"pages",
            9:"pages",
            10:"pages",
            11:"pages",
            12:"pages",
            13:"pages",
            14:"pages",
            15:"pages",
            16:"pages"
            }
        },
        
        audioPages:{
            "student-book":{
                1: {start: 42, count: 3},
                2: {start: 45, count: 2},
                3: {start: 47, count: 2},
                4: {start: 49, count: 2},
                5: {start: 51, count: 2},
                6: {start: 53, count: 2},
                7: {start: 55, count: 2},
                8: {start: 57, count: 2},
                9: {start: 59, count: 2},
                10: {start: 61, count: 2},
                11: {start: 63, count: 2},
                12: {start: 65, count: 2},
                13: {start: 67, count: 2},
                14: {start: 69, count: 2},
                15: {start: 71, count: 2},
                16: {start: 73, count: 2}

            }
        }
     },

/////////////////////////////////////////////////////////////////////

     "Move up3": {
        "student-book": 16,
        audioBooks:["student-book"],

        audioType:{
            "student-book":{
            1:"pages",
            2:"pages",
            3:"pages",
            4:"pages",
            5:"pages",
            6:"pages",
            7:"pages",
            8:"pages",
            9:"pages",
            10:"pages",
            11:"pages",
            12:"pages",
            13:"pages",
            14:"pages",
            15:"pages",
            16:"pages",
            }
        },
        
        audioPages:{
            "student-book":{
                1: {start: 1, count: 2},
                2: {start: 3, count: 2},
                3: {start: 5, count: 1},
                4: {start: 7, count: 2},
                5: {start: 9, count: 2},
                6: {start: 11, count: 2},
                7: {start: 14, count: 2},
                8: {start: 16, count: 2},
                9: {start: 18, count: 2},
                10: {start: 20, count: 3},
                11: {start: 23, count: 2},
                12: {start: 26, count: 3},
                13: {start: 29, count: 2},
                14: {start: 31, count: 2},
                15: {start: 34, count: 1},
                16: {start: 35, count: 3}

            }
        }
    },

/////////////////////////////////////////////////////////////////////

     "Move up4": {
        "student-book": 16,
        audioBooks:["student-book"], 

                
        sbNames:{
            1: "Lesson 17",
            2: "Lesson 18",
            3: "Lesson 19",
            4: "Lesson 20",
            5: "Lesson 21",
            6: "Lesson 22",
            7: "Lesson 23",
            8: "Lesson 24",
            9: "Lesson 25",
            10: "Lesson 26",
            11: "Lesson 27",
            12: "Lesson 28",
            13: "Lesson 29",
            14: "Lesson 30",
            15: "Lesson 31",
            16: "Lesson 32"
        },

        audioType:{
            "student-book":{
            1:"pages",
            2:"pages",
            3:"pages",
            4:"pages",
            5:"pages",
            6:"pages",
            7:"pages",
            8:"pages",
            9:"pages",
            10:"pages",
            11:"pages",
            12:"pages",
            13:"pages",
            14:"pages",
            15:"pages",
            16:"pages"
            }
        },
        
        audioPages:{
            "student-book":{
                1: {start: 38, count: 3},
                2: {start: 41, count: 2},
                3: {start: 43, count: 2},
                4: {start: 45, count: 3},
                5: {start: 48, count: 2},
                6: {start: 50, count: 2},
                7: {start: 52, count: 3},
                8: {start: 55, count: 2},
                9: {start: 57, count: 2},
                10: {start: 59, count: 2},
                11: {start: 61, count: 2},
                12: {start: 63, count: 2},
                13: {start: 65, count: 3},
                14: {start: 68, count: 2},
                15: {start: 70, count: 2},
                16: {start: 72, count: 2}

            }
        }
    }, 

/////////////////////////////////////////////////////////////////////

    "Jump up1": {
        "student-book": 10,
        audioBooks:["student-book"],
    }, 

/////////////////////////////////////////////////////////////////////

    "Jump up2": {
        "student-book": 10,
        audioBooks:["student-book"],
    },

/////////////////////////////////////////////////////////////////////

     "Jump up3": {
        "student-book": 10,
        audioBooks:["student-book"],
    },

/////////////////////////////////////////////////////////////////////

     "Jump up4": {
        "student-book": 10,
        audioBooks:["student-book"],
    },

};

// ==========================================
// CURRENT LOCATION
// ==========================================

let currentLevel = "";
let currentBook = "";
let currentLesson = "";


// ==========================================
// PAGE ELEMENTS
// ==========================================

const homePage = document.getElementById("homePage");
const booksPage = document.getElementById("booksPage");
const lessonsPage = document.getElementById("lessonsPage");
const audioPage = document.getElementById("audioPage");

const levelsContainer =
    document.getElementById("levelsContainer");

const lessonsContainer =
    document.getElementById("lessonsContainer");

const audioContainer =
    document.getElementById("audioContainer");


// ==========================================
// CREATE LEVEL BUTTONS
// ==========================================

function createLevels() {

    levelsContainer.innerHTML = "";

    Object.keys(levels).forEach(level => {

        const button = document.createElement("button");

        button.textContent = level;

        button.onclick = function () {
            openLevel(level);
        };

        levelsContainer.appendChild(button);

    });
}


// ==========================================
// OPEN LEVEL
// ==========================================

function openLevel(level) {
    currentLevel = level;

    hideAllPages();
    booksPage.classList.remove("hidden");

    document.getElementById("levelTitle").textContent = level;

    const levelData = levels[level];

    document.getElementById("studentBookButton").style.display =
        levelData["student-book"] ? "block" : "none";

    document.getElementById("workbookButton").style.display =
        levelData["workbook"] ? "block" : "none";

    document.getElementById("activityBookButton").style.display =
        levelData["activity-book"] ? "block" : "none";
}


// ==========================================
// OPEN BOOK
// ==========================================

function openBook(book) {

    currentBook = book;

    hideAllPages();

    lessonsPage.classList.remove("hidden");

    const bookNames = {
        "student-book": "Student Book",
        "workbook": "Workbook",
        "activity-book": "Activity Book"
    };

    document.getElementById("bookTitle").textContent =
        `${currentLevel} - ${bookNames[book]}`;

    createLessons();
    const level = levels[currentLevel];

    if (level.audioBooks?.includes(book)) {
    audioContainer.style.display = "block";
    } else {
    audioContainer.style.display = "none";
    }

    updateBreadcrumb(
        `${currentLevel} / ${bookNames[book]}`
    );
}


// ==========================================
// CREATE LESSON BUTTONS
// ==========================================


function createLessons() {
    lessonsContainer.innerHTML = "";

    const level = levels[currentLevel];
    const numberOfLessons = level[currentBook];

    for (let i = 1; i <= numberOfLessons; i++) {
        const button = document.createElement("button");

        let buttonName = `Lesson ${i}`;

        if (currentBook === "student-book" && level.sbNames) {
            buttonName = level.sbNames[i] || buttonName;
        }

        if (currentBook === "workbook" && level.wbNames) {
            buttonName = level.wbNames[i] || buttonName;
        }

        if (currentBook === "activity-book" && level.actNames) {
            buttonName = level.actNames[i] || buttonName;
        }

        button.textContent = buttonName;

        button.onclick = function () {
            openLesson(i);
        };

        lessonsContainer.appendChild(button);
    }
}



// ==========================================
// OPEN LESSON
// ==========================================

function openLesson(lessonNumber) {
    currentLesson = lessonNumber;
    hideAllPages();
    audioPage.classList.remove("hidden");

    const level = levels[currentLevel];

    let lessonName = `Lesson ${lessonNumber}`;

    if (currentBook === "student-book" && level.sbNames) {
        lessonName = level.sbNames[lessonNumber] || lessonName;
    }
    
    if (currentBook === "workbook" && level.wbNames) {
        lessonName = level.wbNames[lessonNumber] || lessonName;
    }    
    
    if (currentBook === "activity-book" && level.actNames) {
        lessonName = level.actNames[lessonNumber] || lessonName;
    }

    document.getElementById("lessonTitle").textContent = lessonName;

    createAudioFiles();

    updateBreadcrumb(
        `${currentLevel} / ${currentBook} / ${lessonName}`
    );
}

// ==========================================
// CREATE AUDIO PLAYERS
// ==========================================

function createAudioFiles() {

    audioContainer.innerHTML = "";

    const level = levels[currentLevel];

    const levelFolder = currentLevel
        .replace(/\s+/g, "");

    const lessonPath =
        `audio/${levelFolder}/${currentBook}/lesson${currentLesson}/`;

    const audioType =
        level.audioType?.[currentBook]?.[currentLesson] || "whole";


    // ==========================================
    // WHOLE LESSON AUDIO
    // ==========================================

if (audioType === "whole") {
    const audioItem = document.createElement("div");
    audioItem.className = "audio-item";

    // Get the same name used on the lesson button
    let lessonName;

    if (currentBook === "student-book") {
        lessonName = level.sbNames?.[currentLesson];
    } 
    else if (currentBook === "workbook") {
        lessonName = level.wbNames?.[currentLesson];
    } 
    else if (currentBook === "activity-book") {
        lessonName = level.actNames?.[currentLesson];
    }

    // If no special name exists, use Lesson 1, Lesson 2, etc.
    if (!lessonName) {
        lessonName = `Lesson ${currentLesson}`;
    }

    // Title shown above the audio
    const title = document.createElement("h3");
    title.textContent = lessonName;

    // Audio file has exactly the same name as the button
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = lessonPath + `${lessonName.toLowerCase()}.mp3`;

    audioItem.appendChild(title);
    audioItem.appendChild(audio);
    audioContainer.appendChild(audioItem);

    return;
}

    // ==========================================
    // PAGE-BY-PAGE AUDIO
    // ==========================================

    if (audioType === "pages") {

        const pageInfo =
            level.audioPages?.[currentBook]?.[currentLesson];

        if (!pageInfo) {

            console.error(
                "No audioPages information for:",
                currentLevel,
                currentBook,
                currentLesson
            );

            return;
        }

        const startPage = pageInfo.start;
        const numberOfAudios = pageInfo.count;

        for (let i = 0; i < numberOfAudios; i++) {

            const pageNumber = startPage + i;

            const audioItem = document.createElement("div");
            audioItem.className = "audio-item";

            const title = document.createElement("h3");
            title.textContent = `Page ${pageNumber}`;

            const audio = document.createElement("audio");
            audio.controls = true;

            audio.src =
                lessonPath + `page${pageNumber}.mp3`;

            audioItem.appendChild(title);
            audioItem.appendChild(audio);

            audioContainer.appendChild(audioItem);
        }
    }
}
// ==========================================
// NAVIGATION
// ==========================================

function goHome() {

    hideAllPages();

    homePage.classList.remove("hidden");

    updateBreadcrumb("Home");
}


function goToBooks() {

    hideAllPages();

    booksPage.classList.remove("hidden");

    updateBreadcrumb(currentLevel);
}


function goToLessons() {
    // Stop ALL audio players
    const audios = audioContainer.querySelectorAll("audio");

    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    hideAllPages();
    lessonsPage.classList.remove("hidden");
    createLessons();
    updateBreadcrumb(`${currentLevel} / ${currentBook}`);
}


// ==========================================
// HIDE ALL PAGES
// ==========================================

function hideAllPages() {

    homePage.classList.add("hidden");
    booksPage.classList.add("hidden");
    lessonsPage.classList.add("hidden");
    audioPage.classList.add("hidden");

}


// ==========================================
// BREADCRUMB
// ==========================================

function updateBreadcrumb(text) {

    document.getElementById("breadcrumb").textContent =
        text;

}


// ==========================================
// START APP
// ==========================================

createLevels();