// Toggle QA tools menu
function toggleQaMenu() {
  const menu = document.getElementById("qaMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", () => {
  // Dynamic ID
  const dynamicButton = document.getElementById("dynamic-btn");
  if (dynamicButton) {
    dynamicButton.id = `dynamic-btn-${Math.floor(Math.random() * 10000)}`;
  }

  //Radio and Checklist Form
  const ajaxBtn = document.getElementById("ajax-btn");
  if (ajaxBtn) {
    ajaxBtn.addEventListener("click", () => {
      const ajaxContainer = document.getElementById("ajax-container");
      if (ajaxContainer) {
        if (ajaxContainer.innerHTML.trim() === "") {
          ajaxContainer.innerHTML = "Loading form...";
          setTimeout(() => {
            ajaxContainer.innerHTML = `
             <form>
               <p><strong>Choose your role:</strong></p>
               <label><input type="radio" name="role" value="Tester"> Tester</label><br>
               <label><input type="radio" name="role" value="Developer"> Developer</label><br>
               <label><input type="radio" name="role" value="Manager"> Manager</label><br><br>

               <p><strong>Select skills:</strong></p>
               <label><input type="checkbox" name="skills" value="HTML"> HTML</label><br>
               <label><input type="checkbox" name="skills" value="JavaScript"> JavaScript</label><br>
               <label><input type="checkbox" name="skills" value="Python"> Python</label><br><br>

               <button type="button" id="close-form">Close Form</button>
             </form>
           `;

            const closeFormBtn = document.getElementById("close-form");
            if (closeFormBtn) {
              closeFormBtn.addEventListener("click", () => {
                ajaxContainer.innerHTML = "";
                ajaxBtn.disabled = false;
              });
            }
          }, 1500);
        } else {
          ajaxContainer.innerHTML = "";
          ajaxBtn.disabled = false;
        }
      }
    });
  }

  // Load User Info Simulated
  const loadUserBtn = document.getElementById("load-user-btn");
  if (loadUserBtn) {
    loadUserBtn.addEventListener("click", () => {
      const userInfo = document.getElementById("user-info");
      if (userInfo) {
        userInfo.textContent = "Loading user data...";
        setTimeout(() => {
          userInfo.innerHTML = `
              <strong>Name:</strong> Bug Hunter Zee<br/>
              <strong>Email:</strong> bughunter@bugs.com
            `;
        }, 2000);
      }
    });
  }

  // Mouse Over Reveal
  const hoverArea = document.getElementById("hover-area");
  const secretText = document.getElementById("secret-text");
  if (hoverArea && secretText) {
    hoverArea.addEventListener("mouseover", () => {
      secretText.style.display = "block";
    });
    hoverArea.addEventListener("mouseout", () => {
      secretText.style.display = "none";
    });
  }
  // Alert on Button Click
  const alertBtn = document.getElementById("alert-btn");
  if (alertBtn) {
    alertBtn.addEventListener("click", () => {
      alert("Peek-a-boo!");
    });
  }

  // Click on Element with Class Attribute
  const primaryBtn = document.querySelector(".primary-button");
  if (primaryBtn) {
    primaryBtn.addEventListener("click", () => {
      alert("Class attribute element clicked!");
    });
  }
 // Load Delay Section
const loadDelayBtn = document.getElementById("load-delay-btn");
if (loadDelayBtn) {
  loadDelayBtn.addEventListener("click", () => {
    const delayedSection = document.getElementById("delayed-section");
    if (delayedSection) {
      delayedSection.style.display = "block"; // Make sure it's visible
      delayedSection.textContent = "Loading..."; // Show loading message

      setTimeout(() => {
        delayedSection.textContent = "I hope I did not take too much time";
      }, 2500);
    }
  });
}

  // Client-side Delay
  const clientDelayBtn = document.getElementById("client-delay-btn");
  if (clientDelayBtn) {
    clientDelayBtn.addEventListener("click", () => {
      const clientContent = document.getElementById("client-content");
      if (clientContent) {
        clientContent.textContent = "Calculating... please wait.";
        setTimeout(() => {
          clientContent.textContent = "Calculation complete!";
        }, 3000);
      }
    });
  }
  // Click Event Problem Simulation
  const brokenButton = document.getElementById("broken-button");
  const clickResult = document.getElementById("click-result");
  let clickCount = 0;
  if (brokenButton && clickResult) {
    brokenButton.addEventListener("click", () => {
      clickCount++;
      if (clickCount === 1) {
        clickResult.textContent = "Button didn’t work. Try clicking again!";
      } else {
        clickResult.textContent = "Button clicked successfully!";
        setTimeout(() => {
          clickResult.textContent = "";
          clickCount = 0;
        }, 1500);
      }
    });
  }

 // Text Input Problem (Real-time)
const textInput = document.getElementById("text-problem");
const textDisplay = document.getElementById("text-display");

if (textInput && textDisplay) {
  textInput.addEventListener("input", () => {
    textDisplay.textContent = "You typed: " + textInput.value;
  });
}


  // Dynamic Table
  const tableBody = document.getElementById("dynamic-table-body");
  const sampleUsers = [
    { id: 101, name: "Alice Johnson", status: "Active" },
    { id: 102, name: "Bob Smith", status: "Inactive" },
    { id: 103, name: "Charlie Lee", status: "Pending" },
  ];
  let toggle = true;
  if (tableBody) {
    setInterval(() => {
      sampleUsers.forEach((user) => {
        if (toggle) {
          user.status = user.status === "Active" ? "Inactive" : "Active";
        } else {
          user.status = user.status === "Pending" ? "Active" : "Pending";
        }
      });
      toggle = !toggle;
      tableBody.innerHTML = sampleUsers
        .map(
          (user) => `
            <tr>
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.status}</td>
            </tr>`
        )
        .join("");
    }, 5000);
  }

  
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("file-upload");
  const fileList = document.getElementById("file-list");
  const uploadedFiles = new Set();

  function updateList() {
    if (fileList) {
      if (uploadedFiles.size === 0) {
        fileList.innerHTML = "<li>No files uploaded yet.</li>";
        return;
      }
      fileList.innerHTML = "";
      uploadedFiles.forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.addEventListener("click", () => {
          uploadedFiles.delete(name);
          updateList();
        });
        li.appendChild(removeBtn);
        fileList.appendChild(li);
      });
    }
  }

  if (dropzone && fileInput && fileList) {
    dropzone.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", () => {
      const files = Array.from(fileInput.files);
      files.forEach((file) => {
        if (!uploadedFiles.has(file.name)) {
          uploadedFiles.add(file.name);
        }
      });
      updateList();
      fileInput.value = "";
    });

    ["dragenter", "dragover"].forEach((evt) =>
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        dropzone.classList.add("dragover");
      })
    );

    ["dragleave", "drop"].forEach((evt) =>
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        dropzone.classList.remove("dragover");
        if (evt === "drop") {
          const files = Array.from(e.dataTransfer.files);
          files.forEach((file) => {
            if (!uploadedFiles.has(file.name)) {
              uploadedFiles.add(file.name);
            }
          });
          updateList();
        }
      })
    );
  }

  const slider = document.getElementById('country-count-slider');
const sliderValueDisplay = document.getElementById('slider-value');
const getCountriesBtn = document.getElementById('get-countries-btn');
const countriesList = document.getElementById('countries-list');
const validationMessage = document.getElementById('validation-message');

const countryData = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
  "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic",
  "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus",
  "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt"
];

slider.addEventListener('input', () => {
  const count = parseInt(slider.value, 10);
  sliderValueDisplay.textContent = `${count} ${count === 1 ? 'Country' : 'Countries'}`;
});

getCountriesBtn.addEventListener('click', () => {
  const count = parseInt(slider.value, 10);
  validationMessage.textContent = '';

  if (count < 1 || count > 50) {
    validationMessage.style.color = 'red';
    validationMessage.textContent = 'Please select between 1 and 50.';
    return;
  }

  const currentCount = countriesList.children.length;

  if (currentCount < count) {
    for (let i = currentCount; i < count; i++) {
      const li = document.createElement('li');
      li.textContent = countryData[i % countryData.length];
      countriesList.appendChild(li);
    }
  } else if (currentCount > count) {
    for (let i = currentCount - 1; i >= count; i--) {
      countriesList.removeChild(countriesList.children[i]);
    }
  }

  validationMessage.style.color = 'green';
  validationMessage.textContent = `Showing ${count} ${count === 1 ? 'country' : 'countries'}.`;
});

slider.dispatchEvent(new Event('input'));  
});
