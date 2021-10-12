const logout = async function() {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
    alert('Log out success!')
  } else {
    alert('Log out failed');
  }
};

document.querySelector('#logout-link').addEventListener('click', logout);