const frame = document.getElementById('deviceFrame');
const viewport = document.getElementById('viewport');
const urlInput = document.getElementById('urlInput');
const deviceSelect = document.getElementById('deviceSelect');

function loadURL() {
    let url = urlInput.value;
    if (!url.startsWith('http')) url = 'https://' + url;
    viewport.src = url;
}

function changeDevice() {
    const [width, height] = deviceSelect.value.split('x');
    frame.style.width = width + 'px';
    frame.style.height = height + 'px';
}

function toggleOrientation() {
    const currentWidth = frame.style.width;
    const currentHeight = frame.style.height;
    frame.style.width = currentHeight;
    frame.style.height = currentWidth;
}

// Set initial size
changeDevice();
