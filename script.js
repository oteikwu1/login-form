const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('pass-input');
const repeatPass = document.getElementById('repeat-pass');
const checkbox = document.getElementById('checkbox');
const signUpBtn = document.getElementById('sign-up-btn');


async function handleFormRegister(fromData) {
  const endPoint = 'https://reqres.in/api/register';
  try {
    const response = await fetch(endPoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: FormData.name,
        email: FormData.email,
        password: FormData.password,
        agreedTerms: FormData.agreedTerms,
      }),
    });

    if (response.ok) {
      console.log('registration successfully', FormData.token);
    } else {
         console.log('registration failed', FormData.token);
    }
  } catch (error) {
    throw new Error(`Invalid enter {error.status}`);
  }
};

