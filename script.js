
/* Homepage Button Navigation */

document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('classesBtn');

  if (button) {
    button.addEventListener('click', () => {
      window.location.href = "ClassesOffered.html";
    });
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('feedbackBtn');

  if (button) {
    button.addEventListener('click', () => {
      window.location.href = "FeedbackSurvey.html";
    });
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('cafeBtn');

  if (button) {
    button.addEventListener('click', () => {
      window.location.href = "Cafeteria.html";
    });
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('staffBtn');

  if (button) {
    button.addEventListener('click', () => {
      window.location.href = "MeetTheStaff.html";
    });
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('eventsBtn');

  if (button) {
    button.addEventListener('click', () => {
      window.location.href = "UpcomingEvents.html";
    });
  }
});


/*THEME CHANGER*/
document.addEventListener('DOMContentLoaded', (event) => {
const btn = document.getElementById('themeBtn');
const body = document.body;
const storageKey = 'colorMode';

function setTheme(mode) {
    if (mode === 'dark') {
        body.classList.add('dark-mode');
        localStorage.setItem(storageKey, 'dark'); // Save preference
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem(storageKey, 'light'); // Save preference
    }
}

function toggleTheme() {
    if (body.classList.contains('dark-mode')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

function applySavedTheme() {
    const savedMode = localStorage.getItem(storageKey);
    if (savedMode) {
        setTheme(savedMode);
    }
}

btn.addEventListener('click', toggleTheme);

applySavedTheme();

});
