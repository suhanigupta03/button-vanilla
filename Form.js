// // let script22 = document.currentScript;
// // console.log(script22);
// // let aslidata = script22.getAttribute("data");
// // console.log(aslidata, typeof aslidata);
// // let jsondata = JSON.parse(aslidata)

// // const path = jsondata.path
// // const courses = jsondata.courses

// // console.log(path, courses);


// document.addEventListener('DOMContentLoaded', () => {
  
//   const scriptElement = document.querySelector('script[src="Form.js"]');

  
//   if (!scriptElement) {
//       console.error('Script element with src="Form.js" not found.');
//       return;
//   }
//   const customData = scriptElement.getAttribute('custom-data');

//   if (!customData) {
//       console.error('Custom data attribute not found in script element.');
//       return;
//   }
//   let parsedData;
//   try {
//       parsedData = JSON.parse(customData);
//   } catch (error) {
//       console.error('Error parsing custom data:', error);
//       return;
//   }
//   const currentPath = window.location.pathname;
  
  
//   if (parsedData.path.includes(currentPath)) {
//       createForm(parsedData.courses);
//   }
//   console.log(parsedData);
//   console.log(parsedData.path);
// });

// function createForm() {
//   const form = document.createElement('form');
//   form.id = 'studentDetailsForm';
//   document.body.appendChild(form);

//   const fieldOptions = [
//       { labelText: "Student's Name:", inputType: 'text', inputId: 'studentName', inputName: 'studentName', required: true },
//       { labelText: 'Contact No.:', inputType: 'tel', inputId: 'contactNo', inputName: 'contactNo', required: true },
//       { labelText: 'E-mail:', inputType: 'email', inputId: 'email', inputName: 'email', required: true },
//       { labelText: 'Whatsapp No.:', inputType: 'tel', inputId: 'whatsappNo', inputName: 'whatsappNo', required: false },
//       { labelText: "Father's Name:", inputType: 'text', inputId: 'fatherName', inputName: 'fatherName', required: true },
//       // { labelText: 'Address:', inputType: 'textarea', inputId: 'address', inputName: 'address', required: true },
//       // { labelText: 'City:', inputType: 'text', inputId: 'city', inputName: 'city', required: true },
//       //  { labelText: 'State:', inputType: 'text', inputId: 'state', inputName: 'state', required: true },

    
//   ];

//   fieldOptions.forEach(option => {
//       createField(form, option);
//   });
//   const inlineGroup = document.createElement('div');
//     inlineGroup.className = 'inline-group';

//     createField(inlineGroup, { labelText: 'City:', inputType: 'text', inputId: 'city', inputName: 'city', required: true });
//     createField(inlineGroup, { labelText: 'State:', inputType: 'text', inputId: 'state', inputName: 'state', required: true });

//     form.appendChild(inlineGroup);
//   const courseOptions = ['Select Course', 'B.A.M.S'];
//   createSelectField(form, 'Course Selection:', 'courseSelection', 'courseSelection', courseOptions);

//   createField(form, { labelText: 'NEET Score:', inputType: 'number', inputId: 'neetScore', inputName: 'neetScore', required: true});

//   createCheckboxField(form, 'I agree to receive information by signing up on Careerkick services', 'agreeCheckbox');

//   const submitButton = document.createElement('button');
//   submitButton.type = 'submit';
//   submitButton.textContent = 'Submit';
//   submitButton.className = 'submit-button';
//   form.appendChild(submitButton);

//   form.addEventListener('submit', submitForm);
// }

// function createField(form, field) {
//   const { labelText, inputType, inputId, inputName, required } = field;

//   const wrapper = document.createElement('div');
//   wrapper.className = 'form-group';

//   const label = document.createElement('label');
//   label.textContent = labelText;
//   label.htmlFor = inputId;
//   wrapper.appendChild(label);

//   let input;
//   if (inputType === 'textarea') {
//       input = document.createElement('textarea');
//   } else {
//       input = document.createElement('input');
//       input.type = inputType;
//   }
//   input.id = inputId;
//   input.name = inputName;
//   input.required = required;
//   wrapper.appendChild(input);

//   form.appendChild(wrapper);
// }

// function createSelectField(form, labelText, selectId, selectName, options) {
//   const wrapper = document.createElement('div');
//   wrapper.className = 'form-group';

//   const label = document.createElement('label');
//   label.textContent = labelText;
//   label.htmlFor = selectId;
//   wrapper.appendChild(label);

//   const select = document.createElement('select');
//   select.id = selectId;
//   select.name = selectName;
//   select.required = true;

//   options.forEach(optionText => {
//       const option = document.createElement('option');
//       option.textContent = optionText;
//       select.appendChild(option);
//   });

//   wrapper.appendChild(select);
//   form.appendChild(wrapper);
// }

// function createCheckboxField(form, labelText, checkboxId) {
//   const wrapper = document.createElement('div');
//   wrapper.className = 'form-group';

//   const checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';
//   checkbox.id = checkboxId;

//   const label = document.createElement('label');
//   label.textContent = labelText;
//   label.htmlFor = checkboxId;

//   wrapper.appendChild(checkbox);
//   wrapper.appendChild(label);

//   form.appendChild(wrapper);
// }

// function submitForm(event) {
//   event.preventDefault(); 

//   const formData = {
//       studentName: document.getElementById('studentName').value,
//       contactNo: document.getElementById('contactNo').value,
//       email: document.getElementById('email').value,
//       whatsappNo: document.getElementById('whatsappNo').value,
//       fatherName: document.getElementById('fatherName').value,
//       address: document.getElementById('address').value,
//       // courseSelection: document.getElementById('courseSelection').value,
//       neetScore: document.getElementById('neetScore').value,
//       agreeCheckbox: document.getElementById('agreeCheckbox').checked
//   };

//   console.log(formData);
//   event.target.reset();
// }
document.addEventListener('DOMContentLoaded', () => {
  const scriptElement = document.querySelector('script[src="Form.js"]');

  if (!scriptElement) {
      console.error('Script element with src="Form.js" not found.');
      return;
  }

  const customData = scriptElement.getAttribute('custom-data');

  if (!customData) {
      console.error('Custom data attribute not found in script element.');
      return;
  }

  let parsedData;
  try {
      parsedData = JSON.parse(customData);
  } catch (error) {
      console.error('Error parsing custom data:', error);
      return;
  }

  const currentPath = window.location.pathname;
  
  if (parsedData.path.includes(currentPath)) {
      createForm(parsedData.courses);
  }
  console.log(parsedData);
  console.log(parsedData.path);
});

function createForm(courseOptions) {
  const form = document.createElement('form');
  form.id = 'studentDetailsForm';
  document.body.appendChild(form);

  const fieldOptions = [
      { labelText: "Student's Name:", inputType: 'text', inputId: 'studentName', inputName: 'studentName', required: true },
      { labelText: 'Contact No.:', inputType: 'tel', inputId: 'contactNo', inputName: 'contactNo', required: true },
      { labelText: 'E-mail:', inputType: 'email', inputId: 'email', inputName: 'email', required: true },
      { labelText: 'Whatsapp No.:', inputType: 'tel', inputId: 'whatsappNo', inputName: 'whatsappNo', required: false },
      { labelText: "Father's Name:", inputType: 'text', inputId: 'fatherName', inputName: 'fatherName', required: true },
      // { labelText: 'Address:', inputType: 'textarea', inputId: 'address', inputName: 'address', required: true },
      // { labelText: 'City:', inputType: 'text', inputId: 'city', inputName: 'city', required: true },
      // { labelText: 'State:', inputType: 'text', inputId: 'state', inputName: 'state', required: true }
  ];

  fieldOptions.forEach(option => {
      createField(form, option);
  });
  const inlineGroup = document.createElement('div');
    inlineGroup.className = 'inline-group';

    createField(inlineGroup, { labelText: 'City:', inputType: 'text', inputId: 'city', inputName: 'city', required: true });
    createField(inlineGroup, { labelText: 'State:', inputType: 'text', inputId: 'state', inputName: 'state', required: true });

    form.appendChild(inlineGroup);

  const courseSelectWrapper = document.createElement('div');
  courseSelectWrapper.className = 'form-group';
  createSelectField(courseSelectWrapper, 'Course Selection:', 'courseSelection', 'courseSelection', courseOptions);
  form.appendChild(courseSelectWrapper);

  createField(form, { labelText: 'NEET Score:', inputType: 'number', inputId: 'neetScore', inputName: 'neetScore', required: true});

  createCheckboxField(form, 'I agree to receive information by signing up on Careerkick services', 'agreeCheckbox');

  const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    submitButton.className = 'submit-button';
    form.appendChild(submitButton);
    form.addEventListener('submit', submitForm);
}

function createField(form, field) {
  const { labelText, inputType, inputId, inputName, required } = field;

  const wrapper = document.createElement('div');
  wrapper.className = 'form-group';

  const label = document.createElement('label');
  label.textContent = labelText;
  label.htmlFor = inputId;
  wrapper.appendChild(label);

  let input;
  if (inputType === 'textarea') {
      input = document.createElement('textarea');
  } else {
      input = document.createElement('input');
      input.type = inputType;
  }
  input.id = inputId;
  input.name = inputName;
  input.required = required;
  wrapper.appendChild(input);

  form.appendChild(wrapper);
}

function createSelectField(form, labelText, selectId, selectName, options) {
  const wrapper = document.createElement('div');
  wrapper.className = 'form-group';

  const label = document.createElement('label');
  label.textContent = labelText;
  label.htmlFor = selectId;
  wrapper.appendChild(label);

  const select = document.createElement('select');
  select.id = selectId;
  select.name = selectName;
  select.required = true;

  options.map(optionText => {
      const option = document.createElement('option');
      option.textContent = optionText;
      option.value = optionText;
      select.appendChild(option);
  });

  wrapper.appendChild(select);
  form.appendChild(wrapper);
}

function createCheckboxField(form, labelText, checkboxId) {
  const wrapper = document.createElement('div');
  wrapper.className = 'form-group';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = checkboxId;

  const label = document.createElement('label');
  label.textContent = labelText;
  label.htmlFor = checkboxId;

  wrapper.appendChild(checkbox);
  wrapper.appendChild(label);

  form.appendChild(wrapper);
}

// function submitForm(event) {
//   event.preventDefault(); 

//   const formData = {
//       studentName: document.getElementById('studentName').value,
//       contactNo: document.getElementById('contactNo').value,
//       email: document.getElementById('email').value,
//       whatsappNo: document.getElementById('whatsappNo').value,
//       fatherName: document.getElementById('fatherName').value,
//       address: document.getElementById('address').value,
//       city: document.getElementById('city').value,
//       state: document.getElementById('state').value,
//       courseSelection: document.getElementById('courseSelection').value,
//       neetScore: document.getElementById('neetScore').value,
//       agreeCheckbox: document.getElementById('agreeCheckbox').checked
//   };

  
//   if (formData.courseSelection === "Select Course") {
//       alert("Please select a course.");
//       return; 
//   }

//   console.log(formData);

 
//   event.target.reset();
// }
function submitForm(event) {
  event.preventDefault(); 

  const formData = {
      studentName: document.getElementById('studentName').value,
      contactNo: document.getElementById('contactNo').value,
      email: document.getElementById('email').value,
      whatsappNo: document.getElementById('whatsappNo').value,
      fatherName: document.getElementById('fatherName').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      courseSelection: document.getElementById('courseSelection').value,
      neetScore: document.getElementById('neetScore').value,
      agreeCheckbox: document.getElementById('agreeCheckbox').checked
  };

  // Check if courseSelection is "Select Course"
  if (formData.courseSelection === "Select Course") {
      alert("Please select a course.");
      return; // Prevent form submission
  }

  console.log(formData);

  const form = document.getElementById('studentDetailsForm');
  form.reset();
}

