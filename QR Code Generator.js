function generateQRCode() {
  const input = document.getElementById('text-input').value.trim();
  const qrContainer = document.getElementById('qr-code');
  const notification = document.getElementById('notification');

  qrContainer.innerHTML = '';
  notification.style.display = 'none';

  if (!input) {
    showNotification('Please enter a valid text or URL.', true);
    return;
  }

  QRCode.toCanvas(input, { width: 200 }, function (error, canvas) {
    if (error) {
      showNotification('Failed to generate QR Code.', true);
      return;
    }
    canvas.id = 'qrCanvas';
    qrContainer.appendChild(canvas);
    qrContainer.classList.add('show');
    showNotification('QR Code generated successfully!', false);
  });
}

function downloadQRCode() {
  const canvas = document.getElementById('qrCanvas');
  if (!canvas) {
    showNotification('Please generate a QR Code first.', true);
    return;
  }
  const link = document.createElement('a');
  link.download = 'qr-code.png';
  link.href = canvas.toDataURL();
  link.click();
}

function showNotification(message, isError) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.className = isError ? 'notification error' : 'notification';
  notification.style.display = 'block';
}

