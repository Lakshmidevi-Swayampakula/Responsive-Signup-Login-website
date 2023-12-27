function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);
  
	allForm.forEach(item => {
	  item.classList.remove('active');
	});
	form.classList.add('active');
  }
  
  function validatePassword(password) {
	const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;
	return passwordRegex.test(password);
  }
  
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
	form.addEventListener('submit', function(e) {
	  e.preventDefault();
  
	  const email = this.querySelector('input[type="email"]').value.trim();
	  const password = this.querySelector('input[type="password"]').value.trim();
	  const confirmPassword = this.querySelector('#confirm-pass')?.value.trim(); // Use optional chaining to handle absence of confirm password field
  
	  if (!email) {
		alert('Please enter your email.');
		return;
	  }
  
	  if (!password) {
		alert('Please enter your password.');
		return;
	  }
  
	  if (!validatePassword(password)) {
		alert('Password must contain at least one special character, a number, and be at least 8 characters long.');
		return;
	  }
  
	  if (form.classList.contains('register') && password !== confirmPassword) {
		alert('Passwords do not match.');
		return;
	  }
  
	  // Form submission logic or further processing
	  console.log('Email:', email);
	  console.log('Password:', password);
  
	  if (confirmPassword) {
		console.log('Confirmed Password:', confirmPassword);
	  }
  
	  // Reset form fields
	  this.reset();
	});
  });
  
  