// Toggle QA tools menu
function toggleQaMenu() {
  const menu = document.getElementById("qaMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", () => {
  // === Dynamic ID ===
  const dynamicButton = document.getElementById("dynamic-btn");
  if (dynamicButton) {
    dynamicButton.id = `dynamic-btn-${Math.floor(Math.random() * 10000)}`;
  }

  // === AJAX Radio and Checkbox Form ===
  const ajaxBtn = document.getElementById("ajax-btn");
  const ajaxContainer = document.getElementById("ajax-container");
  if (ajaxBtn && ajaxContainer) {
    ajaxBtn.addEventListener("click", () => {
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
        closeFormBtn?.addEventListener("click", () => {
          ajaxContainer.innerHTML = "";
        });
      }, 1500);
    });
  }

  // === Hover Reveal ===
  const hoverArea = document.getElementById("hover-area");
  const secretText = document.getElementById("secret-text");
  hoverArea?.addEventListener("mouseover", () => secretText.style.display = "block");
  hoverArea?.addEventListener("mouseout", () => secretText.style.display = "none");

  // === JS Alert ===
  const alertBtn = document.getElementById("alert-btn");
  alertBtn?.addEventListener("click", () => alert("Peek-a-boo!"));

  // === Class Selector ===
  const primaryBtn = document.querySelector(".primary-button");
  primaryBtn?.addEventListener("click", () => alert("Class attribute element clicked!"));

  // === Load Delay ===
  const loadDelayBtn = document.getElementById("load-delay-btn");
  const delayedSection = document.getElementById("delayed-section");
  loadDelayBtn?.addEventListener("click", () => {
    delayedSection.style.display = "block";
    delayedSection.textContent = "Loading...";
    setTimeout(() => {
      delayedSection.textContent = "I hope I did not take too much time";
    }, 2500);
  });

  // === Client-Side Delay ===
  const clientDelayBtn = document.getElementById("client-delay-btn");
  const clientContent = document.getElementById("client-content");
  clientDelayBtn?.addEventListener("click", () => {
    clientContent.textContent = "Calculating... please wait.";
    setTimeout(() => clientContent.textContent = "Calculation complete!", 3000);
  });

  // === Click Event Simulation ===
  const brokenButton = document.getElementById("broken-button");
  const clickResult = document.getElementById("click-result");
  let clickCount = 0;
  brokenButton?.addEventListener("click", () => {
    clickCount++;
    clickResult.textContent = clickCount === 1 ? "Button didn’t work. Try clicking again!" : "Button clicked successfully!";
    if (clickCount > 1) {
      setTimeout(() => {
        clickResult.textContent = "";
        clickCount = 0;
      }, 1500);
    }
  });

  // === Text Input Display ===
  const textInput = document.getElementById("text-problem");
  const textDisplay = document.getElementById("text-display");
  textInput?.addEventListener("blur", () => {
    textDisplay.textContent = `You typed: ${textInput.value}`;
  });

  // === Dynamic Table ===
  const tableBody = document.getElementById("dynamic-table-body");
  const sampleUsers = [
    { id: 101, name: "Alice Johnson", status: "Active" },
    { id: 102, name: "Bob Smith", status: "Inactive" },
    { id: 103, name: "Charlie Lee", status: "Pending" }
  ];
  let toggle = true;
  setInterval(() => {
    sampleUsers.forEach(user => {
      user.status = toggle ? (user.status === "Active" ? "Inactive" : "Active") : (user.status === "Pending" ? "Active" : "Pending");
    });
    toggle = !toggle;
    tableBody.innerHTML = sampleUsers.map(user => `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.status}</td>
      </tr>`).join("");
  }, 5000);

  // === File Upload ===
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("file-upload");
  const fileList = document.getElementById("file-list");
  const uploadedFiles = new Set();

  const updateList = () => {
    fileList.innerHTML = uploadedFiles.size === 0
      ? "<li>No files uploaded yet.</li>"
      : Array.from(uploadedFiles).map(name => {
        const li = document.createElement("li");
        li.textContent = name;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = () => {
          uploadedFiles.delete(name);
          updateList();
        };
        li.appendChild(removeBtn);
        return li.outerHTML;
      }).join("");
  };

  dropzone?.addEventListener("click", () => fileInput.click());
  fileInput?.addEventListener("change", () => {
    Array.from(fileInput.files).forEach(file => uploadedFiles.add(file.name));
    updateList();
    fileInput.value = "";
  });

  ["dragenter", "dragover"].forEach(evt => dropzone?.addEventListener(evt, e => {
    e.preventDefault();
    dropzone.classList.add("dragover");
  }));

  ["dragleave", "drop"].forEach(evt => dropzone?.addEventListener(evt, e => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
    if (evt === "drop") {
      Array.from(e.dataTransfer.files).forEach(file => uploadedFiles.add(file.name));
      updateList();
    }
  }));

  // === Country Generator ===
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

  sliderValueDisplay.textContent = slider.value;

  slider?.addEventListener('input', () => {
    sliderValueDisplay.textContent = slider.value;
  });

  getCountriesBtn?.addEventListener('click', () => {
    const count = parseInt(slider.value, 10);
    validationMessage.textContent = '';

    if (count < 1 || count > 50) {
      validationMessage.style.color = 'red';
      validationMessage.textContent = 'Please select a value between 1 and 50.';
      return;
    }

    const currentItems = countriesList.children.length;

    if (currentItems < count) {
      for (let i = currentItems; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = countryData[i % countryData.length];
        countriesList.appendChild(li);
      }
    } else if (currentItems > count) {
      for (let i = currentItems - 1; i >= count; i--) {
        countriesList.removeChild(countriesList.children[i]);
      }
    }

    validationMessage.style.color = 'green';
    validationMessage.textContent = `Showing ${count} countries as requested.`;
  });
});