const ASCII_CHARS = {
    standard: {
        'A': [
            '  ██  ',
            ' ████ ',
            '██  ██',
            '██████',
            '██  ██',
            '██  ██'
        ],
        'B': [
            '██████',
            '██  ██',
            '██████',
            '██████',
            '██  ██',
            '██████'
        ],
        'C': [
            ' █████',
            '██    ',
            '██    ',
            '██    ',
            '██    ',
            ' █████'
        ],
        'D': [
            '██████',
            '██  ██',
            '██  ██',
            '██  ██',
            '██  ██',
            '██████'
        ],
        'E': [
            '██████',
            '██    ',
            '██████',
            '██████',
            '██    ',
            '██████'
        ],
        'F': [
            '██████',
            '██    ',
            '██████',
            '██████',
            '██    ',
            '██    '
        ],
        'G': [
            ' █████',
            '██    ',
            '██ ███',
            '██  ██',
            '██  ██',
            ' █████'
        ],
        'H': [
            '██  ██',
            '██  ██',
            '██████',
            '██████',
            '██  ██',
            '██  ██'
        ],
        'I': [
            '██████',
            '  ██  ',
            '  ██  ',
            '  ██  ',
            '  ██  ',
            '██████'
        ],
        'J': [
            '██████',
            '    ██',
            '    ██',
            '    ██',
            '██  ██',
            ' █████'
        ],
        'K': [
            '██  ██',
            '██ ██ ',
            '████  ',
            '████  ',
            '██ ██ ',
            '██  ██'
        ],
        'L': [
            '██    ',
            '██    ',
            '██    ',
            '██    ',
            '██    ',
            '██████'
        ],
        'M': [
            '██  ██',
            '██████',
            '██████',
            '██  ██',
            '██  ██',
            '██  ██'
        ],
        'N': [
            '██  ██',
            '███ ██',
            '██████',
            '██ ███',
            '██  ██',
            '██  ██'
        ],
        'O': [
            ' █████',
            '██  ██',
            '██  ██',
            '██  ██',
            '██  ██',
            ' █████'
        ],
        'P': [
            '██████',
            '██  ██',
            '██████',
            '██    ',
            '██    ',
            '██    '
        ],
        'Q': [
            ' █████',
            '██  ██',
            '██  ██',
            '██ ███',
            '██  ██',
            ' ██████'
        ],
        'R': [
            '██████',
            '██  ██',
            '██████',
            '██ ██ ',
            '██  ██',
            '██  ██'
        ],
        'S': [
            ' █████',
            '██    ',
            ' █████',
            '    ██',
            '    ██',
            '█████ '
        ],
        'T': [
            '██████',
            '  ██  ',
            '  ██  ',
            '  ██  ',
            '  ██  ',
            '  ██  '
        ],
        'U': [
            '██  ██',
            '██  ██',
            '██  ██',
            '██  ██',
            '██  ██',
            ' █████'
        ],
        'V': [
            '██  ██',
            '██  ██',
            '██  ██',
            '██  ██',
            ' ████ ',
            '  ██  '
        ],
        'W': [
            '██  ██',
            '██  ██',
            '██  ██',
            '██████',
            '██████',
            '██  ██'
        ],
        'X': [
            '██  ██',
            ' ████ ',
            '  ██  ',
            '  ██  ',
            ' ████ ',
            '██  ██'
        ],
        'Y': [
            '██  ██',
            '██  ██',
            ' ████ ',
            '  ██  ',
            '  ██  ',
            '  ██  '
        ],
        'Z': [
            '██████',
            '    ██',
            '   ██ ',
            '  ██  ',
            ' ██   ',
            '██████'
        ],
        // Números
        '0': [
            ' █████',
            '██  ██',
            '██ ███',
            '███ ██',
            '██  ██',
            ' █████'
        ],
        '1': [
            '  ██  ',
            ' ███  ',
            '  ██  ',
            '  ██  ',
            '  ██  ',
            '██████'
        ],
        '2': [
            ' █████',
            '██  ██',
            '   ██ ',
            '  ██  ',
            ' ██   ',
            '██████'
        ],
        '3': [
            ' █████',
            '██  ██',
            '  ███ ',
            '    ██',
            '██  ██',
            ' █████'
        ],
        '4': [
            '██  ██',
            '██  ██',
            '██████',
            '    ██',
            '    ██',
            '    ██'
        ],
        '5': [
            '██████',
            '██    ',
            '██████',
            '    ██',
            '██  ██',
            ' █████'
        ],
        '6': [
            ' █████',
            '██    ',
            '██████',
            '██  ██',
            '██  ██',
            ' █████'
        ],
        '7': [
            '██████',
            '    ██',
            '   ██ ',
            '  ██  ',
            ' ██   ',
            '██    '
        ],
        '8': [
            ' █████',
            '██  ██',
            ' █████',
            '██  ██',
            '██  ██',
            ' █████'
        ],
        '9': [
            ' █████',
            '██  ██',
            ' █████',
            '    ██',
            '██  ██',
            ' █████'
        ],
        // Símbolos
        ' ': [
            '      ',
            '      ',
            '      ',
            '      ',
            '      ',
            '      '
        ],
        '!': [
            '  ██  ',
            '  ██  ',
            '  ██  ',
            '  ██  ',
            '      ',
            '  ██  '
        ],
        '?': [
            ' █████',
            '██  ██',
            '   ██ ',
            '  ██  ',
            '      ',
            '  ██  '
        ],
        '.': [
            '      ',
            '      ',
            '      ',
            '      ',
            '      ',
            '  ██  '
        ],
        ',': [
            '      ',
            '      ',
            '      ',
            '      ',
            '  ██  ',
            ' ██   '
        ],
        ':': [
            '      ',
            '  ██  ',
            '      ',
            '      ',
            '  ██  ',
            '      '
        ],
        ';': [
            '      ',
            '  ██  ',
            '      ',
            '      ',
            '  ██  ',
            ' ██   '
        ],
        '-': [
            '      ',
            '      ',
            '██████',
            '      ',
            '      ',
            '      '
        ],
        '_': [
            '      ',
            '      ',
            '      ',
            '      ',
            '      ',
            '██████'
        ],
        '+': [
            '      ',
            '  ██  ',
            '██████',
            '  ██  ',
            '      ',
            '      '
        ],
        '=': [
            '      ',
            '██████',
            '      ',
            '██████',
            '      ',
            '      '
        ],
        '(': [
            '   ██ ',
            '  ██  ',
            ' ██   ',
            ' ██   ',
            '  ██  ',
            '   ██ '
        ],
        ')': [
            ' ██   ',
            '  ██  ',
            '   ██ ',
            '   ██ ',
            '  ██  ',
            ' ██   '
        ],
        '[': [
            '██████',
            '██    ',
            '██    ',
            '██    ',
            '██    ',
            '██████'
        ],
        ']': [
            '██████',
            '    ██',
            '    ██',
            '    ██',
            '    ██',
            '██████'
        ],
        '@': [
            ' █████',
            '██  ██',
            '██ ███',
            '██ ███',
            '██    ',
            ' █████'
        ],
        '#': [
            ' ██ ██',
            '██████',
            ' ██ ██',
            '██████',
            ' ██ ██',
            '      '
        ],
        '$': [
            '  ██  ',
            ' █████',
            '██    ',
            ' █████',
            '    ██',
            ' █████'
        ],
        '%': [
            '██   █',
            '██  ██',
            '   ██ ',
            '  ██  ',
            ' ██  █',
            '█   ██'
        ],
        '&': [
            ' ████ ',
            '██  ██',
            ' ████ ',
            '██ ███',
            '██  ██',
            ' ███ █'
        ],
        '*': [
            '      ',
            '██ ██ ',
            ' ███  ',
            '██ ██ ',
            '      ',
            '      '
        ]
    },
    small: {
        'A': ['█▀█', '█▀█', '█▄█'],
        'B': ['█▀▄', '█▀▄', '█▄▀'],
        'C': ['▄▀█', '█▄▄', '▀▀▀'],
        'D': ['█▀▄', '█ █', '█▄▀'],
        'E': ['█▀▀', '█▀▀', '▀▀▀'],
        'F': ['█▀▀', '█▀▀', '█  '],
        'G': ['▄▀█', '█▄█', '▀▀▀'],
        'H': ['█ █', '█▀█', '█ █'],
        'I': ['█', '█', '█'],
        'J': ['  █', '  █', '▀▀▀'],
        'K': ['█ █', '██ ', '█ █'],
        'L': ['█  ', '█  ', '▀▀▀'],
        'M': ['█▄█', '█▀█', '█ █'],
        'N': ['█▄█', '█▀█', '█ █'],
        'O': ['▄▀█', '█ █', '▀▀▀'],
        'P': ['█▀▄', '█▀ ', '█  '],
        'Q': ['▄▀█', '█▄█', '▀▀▀'],
        'R': ['█▀▄', '█▀▄', '█ █'],
        'S': ['▄▀▀', '▀▀▄', '▀▀▀'],
        'T': ['▀█▀', ' █ ', ' █ '],
        'U': ['█ █', '█ █', '▀▀▀'],
        'V': ['█ █', '█ █', ' ▀ '],
        'W': ['█ █', '█▀█', '█▄█'],
        'X': ['█ █', ' ▀ ', '█ █'],
        'Y': ['█ █', ' ▀ ', ' █ '],
        'Z': ['▀▀▀', ' ▄▀', '▀▀▀'],
        // Números
        '0': ['▄▀█', '█ █', '▀▀▀'],
        '1': [' █ ', ' █ ', ' █ '],
        '2': ['▀▀▄', ' ▄▀', '▀▀▀'],
        '3': ['▀▀▄', ' ▀▄', '▀▀▀'],
        '4': ['█ █', '▀▀█', '  █'],
        '5': ['▀▀▀', '▀▀▄', '▀▀▀'],
        '6': ['▄▀▀', '█▀▄', '▀▀▀'],
        '7': ['▀▀▀', '  █', '  █'],
        '8': ['▄▀▄', '█▀█', '▀▀▀'],
        '9': ['▄▀█', '▀▀█', '▀▀▀'],
        // Símbolos
        ' ': ['   ', '   ', '   '],
        '!': [' █ ', ' █ ', ' █ '],
        '?': ['▀▄ ', ' ▀ ', ' █ '],
        '.': ['   ', '   ', ' ▀ '],
        ',': ['   ', '   ', ' ▄'],
        ':': [' ▀ ', '   ', ' ▀ '],
        ';': [' ▀ ', '   ', ' ▄'],
        '-': ['   ', '▀▀▀', '   '],
        '_': ['   ', '   ', '▀▀▀'],
        '+': [' █ ', '███', ' █ '],
        '=': ['▀▀▀', '▀▀▀', '   '],
        '(': [' ▄', '█  ', ' ▀'],
        ')': ['▄ ', ' █', '▀ '],
        '[': ['██', '█ ', '██'],
        ']': ['██', ' █', '██'],
        '@': ['▄▀▄', '█▄█', '▀▀▀'],
        '#': ['█▄█', '███', '█▄█'],
        '$': [' █ ', '▄▀▄', '▀▀▀'],
        '%': ['▄ █', ' ▀ ', '█ ▄'],
        '&': ['▄▀ ', '█▄▄', '▀▀▀'],
        '*': ['█▄█', ' ▀ ', '   ']
    },
    big: {
        'A': [
            '   ████   ',
            '  ██  ██  ',
            ' ██    ██ ',
            '██████████',
            '██      ██',
            '██      ██',
            '██      ██'
        ],
        'B': [
            '██████████',
            '██      ██',
            '██████████',
            '██████████',
            '██      ██',
            '██      ██',
            '██████████'
        ],
        'C': [
            ' █████████',
            '██       █',
            '██        ',
            '██        ',
            '██        ',
            '██       █',
            ' █████████'
        ],
        'D': [
            '██████████',
            '██      ██',
            '██      ██',
            '██      ██',
            '██      ██',
            '██      ██',
            '██████████'
        ],
        'E': [
            '██████████',
            '██        ',
            '██████████',
            '██████████',
            '██        ',
            '██        ',
            '██████████'
        ],
        'F': [
            '██████████',
            '██        ',
            '██████████',
            '██████████',
            '██        ',
            '██        ',
            '██        '
        ],
        'G': [
            ' █████████',
            '██        ',
            '██   █████',
            '██      ██',
            '██      ██',
            '██      ██',
            ' █████████'
        ],
        'H': [
            '██      ██',
            '██      ██',
            '██████████',
            '██████████',
            '██      ██',
            '██      ██',
            '██      ██'
        ],
        'I': [
            '██████████',
            '    ██    ',
            '    ██    ',
            '    ██    ',
            '    ██    ',
            '    ██    ',
            '██████████'
        ],
        'J': [
            '██████████',
            '        ██',
            '        ██',
            '        ██',
            '██      ██',
            '██      ██',
            ' █████████'
        ],
        'K': [
            '██      ██',
            '██    ██  ',
            '██  ██    ',
            '████      ',
            '██  ██    ',
            '██    ██  ',
            '██      ██'
        ],
        'L': [
            '██        ',
            '██        ',
            '██        ',
            '██        ',
            '██        ',
            '██        ',
            '██████████'
        ],
        'M': [
            '██      ██',
            '████  ████',
            '██████████',
            '██  ██  ██',
            '██      ██',
            '██      ██',
            '██      ██'
        ],
        'N': [
            '██      ██',
            '███     ██',
            '████    ██',
            '██ ██   ██',
            '██  ██  ██',
            '██   ██ ██',
            '██    ████'
        ],
        'O': [
            ' █████████',
            '██      ██',
            '██      ██',
            '██      ██',
            '██      ██',
            '██      ██',
            ' █████████'
        ],
        'P': [
            '██████████',
            '██      ██',
            '██████████',
            '██        ',
            '██        ',
            '██        ',
            '██        '
        ],
        'Q': [
            ' █████████',
            '██      ██',
            '██      ██',
            '██   █  ██',
            '██    ████',
            '██      ██',
            ' ██████████'
        ],
        'R': [
            '██████████',
            '██      ██',
            '██████████',
            '██   ██   ',
            '██    ██  ',
            '██      ██',
            '██      ██'
        ],
        'S': [
            ' █████████',
            '██        ',
            ' █████████',
            '        ██',
            '        ██',
            '██      ██',
            ' █████████'
        ],
        'T': [
            '██████████',
            '    ██    ',
            '    ██    ',
            '    ██    ',
            '    ██    ',
            '    ██    ',
            '    ██    '
        ],
        'U': [
            '██      ██',
            '██      ██',
            '██      ██',
            '██      ██',
            '██      ██',
            '██      ██',
            ' █████████'
        ],
        'V': [
            '██      ██',
            '██      ██',
            '██      ██',
            '██      ██',
            ' ██    ██ ',
            '  ██  ██  ',
            '    ██    '
        ],
        'W': [
            '██      ██',
            '██      ██',
            '██      ██',
            '██  ██  ██',
            '██████████',
            '████  ████',
            '██      ██'
        ],
        'X': [
            '██      ██',
            ' ██    ██ ',
            '  ██  ██  ',
            '    ██    ',
            '  ██  ██  ',
            ' ██    ██ ',
            '██      ██'
        ],
        'Y': [
            '██      ██',
            '██      ██',
            ' ██    ██ ',
            '  ██  ██  ',
            '    ██    ',
            '    ██    ',
            '    ██    '
        ],
        'Z': [
            '██████████',
            '        ██',
            '      ██  ',
            '    ██    ',
            '  ██      ',
            '██        ',
            '██████████'
        ],
        // Números
        '0': [
            ' █████████',
            '██      ██',
            '██   ██ ██',
            '██  ██  ██',
            '██ ██   ██',
            '██      ██',
            ' █████████'
        ],
        '1': [
            '    ██    ',
            '  ████    ',
            '    ██    ',
            '    ██    ',
            '    ██    ',
            '    ██    ',
            '██████████'
        ],
        '2': [
            ' █████████',
            '██      ██',
            '      ██  ',
            '    ██    ',
            '  ██      ',
            '██        ',
            '██████████'
        ],
        '3': [
            ' █████████',
            '██      ██',
            '    ██████',
            '        ██',
            '        ██',
            '██      ██',
            ' █████████'
        ],
        '4': [
            '██      ██',
            '██      ██',
            '██████████',
            '        ██',
            '        ██',
            '        ██',
            '        ██'
        ],
        '5': [
            '██████████',
            '██        ',
            '██████████',
            '        ██',
            '        ██',
            '██      ██',
            ' █████████'
        ],
        '6': [
            ' █████████',
            '██        ',
            '██████████',
            '██      ██',
            '██      ██',
            '██      ██',
            ' █████████'
        ],
        '7': [
            '██████████',
            '        ██',
            '      ██  ',
            '    ██    ',
            '  ██      ',
            '██        ',
            '██        '
        ],
        '8': [
            ' █████████',
            '██      ██',
            ' █████████',
            '██      ██',
            '██      ██',
            '██      ██',
            ' █████████'
        ],
        '9': [
            ' █████████',
            '██      ██',
            ' █████████',
            '        ██',
            '        ██',
            '██      ██',
            ' █████████'
        ],
        // Símbolos
        ' ': [
            '          ',
            '          ',
            '          ',
            '          ',
            '          ',
            '          ',
            '          '
        ],
        '!': [
            '    ██    ',
            '    ██    ',
            '    ██    ',
            '    ██    ',
            '          ',
            '    ██    ',
            '    ██    '
        ],
        '?': [
            ' █████████',
            '██      ██',
            '      ██  ',
            '    ██    ',
            '          ',
            '    ██    ',
            '    ██    '
        ],
        '.': [
            '          ',
            '          ',
            '          ',
            '          ',
            '          ',
            '    ██    ',
            '    ██    '
        ],
        ',': [
            '          ',
            '          ',
            '          ',
            '          ',
            '    ██    ',
            '  ██      ',
            '          '
        ],
        ':': [
            '          ',
            '    ██    ',
            '    ██    ',
            '          ',
            '    ██    ',
            '    ██    ',
            '          '
        ],
        ';': [
            '          ',
            '    ██    ',
            '    ██    ',
            '          ',
            '    ██    ',
            '  ██      ',
            '          '
        ],
        '-': [
            '          ',
            '          ',
            '██████████',
            '          ',
            '          ',
            '          ',
            '          '
        ],
        '_': [
            '          ',
            '          ',
            '          ',
            '          ',
            '          ',
            '          ',
            '██████████'
        ],
        '+': [
            '          ',
            '    ██    ',
            '██████████',
            '    ██    ',
            '          ',
            '          ',
            '          '
        ],
        '=': [
            '          ',
            '██████████',
            '          ',
            '██████████',
            '          ',
            '          ',
            '          '
        ],
        '(': [
            '      ██  ',
            '    ██    ',
            '  ██      ',
            '  ██      ',
            '  ██      ',
            '    ██    ',
            '      ██  '
        ],
        ')': [
            '  ██      ',
            '    ██    ',
            '      ██  ',
            '      ██  ',
            '      ██  ',
            '    ██    ',
            '  ██      '
        ],
        '[': [
            '██████████',
            '██        ',
            '██        ',
            '██        ',
            '██        ',
            '██        ',
            '██████████'
        ],
        ']': [
            '██████████',
            '        ██',
            '        ██',
            '        ██',
            '        ██',
            '        ██',
            '██████████'
        ],
        '@': [
            ' █████████',
            '██      ██',
            '██  ██████',
            '██  ██████',
            '██        ',
            '██        ',
            ' █████████'
        ],
        '#': [
            '  ██  ██  ',
            '██████████',
            '  ██  ██  ',
            '██████████',
            '  ██  ██  ',
            '          ',
            '          '
        ],
        '$': [
            '    ██    ',
            ' █████████',
            '██        ',
            ' █████████',
            '        ██',
            ' █████████',
            '    ██    '
        ],
        '%': [
            '██      ██',
            '██    ██  ',
            '    ██    ',
            '  ██      ',
            '██    ██  ',
            '██      ██',
            '          '
        ],
        '&': [
            '  ████    ',
            '██    ██  ',
            '  ████    ',
            '██  ██████',
            '██    ██  ',
            '██      ██',
            '  ██████ █'
        ],
        '*': [
            '          ',
            '██  ██  ██',
            '  ██████  ',
            '██  ██  ██',
            '          ',
            '          ',
            '          '
        ]
    }
};

const BRIGHTNESS_CHARS = '@%#*+=-:. ';

let currentTab = 'text';
let currentImage = null;

function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            currentTab = targetTab;
        });
    });
}

function initControls() {
    const widthSlider = document.getElementById('widthSlider');
    const contrastSlider = document.getElementById('contrastSlider');
    const widthValue = document.getElementById('widthValue');
    const contrastValue = document.getElementById('contrastValue');
    
    widthSlider.addEventListener('input', (e) => {
        widthValue.textContent = e.target.value;
    });
    
    contrastSlider.addEventListener('input', (e) => {
        contrastValue.textContent = e.target.value;
    });
}

function initFileUpload() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('imageInput');
    
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].type.startsWith('image/')) {
            handleImageUpload(files[0]);
        }
    });
    
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleImageUpload(e.target.files[0]);
        }
    });
}

function handleImageUpload(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            currentImage = img;
            document.querySelector('.drop-content p').textContent = `Image loaded: ${file.name}`;
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function textToAscii(text, fontStyle) {
    const chars = ASCII_CHARS[fontStyle];
    const lines = [];
    const height = chars['A'].length;
    
    for (let i = 0; i < height; i++) {
        lines[i] = '';
    }
    
    for (let char of text.toUpperCase()) {
        if (chars[char]) {
            for (let i = 0; i < height; i++) {
                lines[i] += chars[char][i] + ' ';
            }
        } else {
            for (let i = 0; i < height; i++) {
                lines[i] += chars[' '][i] + ' ';
            }
        }
    }
    
    return lines.join('\n');
}

function imageToAscii(img, width, contrast) {
    const canvas = document.getElementById('hiddenCanvas');
    const ctx = canvas.getContext('2d');
    
    const aspectRatio = img.height / img.width;
    const height = Math.floor(width * aspectRatio * 0.5);
    
    canvas.width = width;
    canvas.height = height;
    
    ctx.drawImage(img, 0, 0, width, height);
    
    const imageData = ctx.getImageData(0, 0, width, height);
    const pixels = imageData.data;
    
    let ascii = '';
    
    for (let y = 0; y < height; y++) {
        let line = '';
        for (let x = 0; x < width; x++) {
            const i = (y * width + x) * 4;
            const r = pixels[i];
            const g = pixels[i + 1];
            const b = pixels[i + 2];
            
            const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
            const adjustedBrightness = Math.pow(brightness, 1 / contrast);
            const charIndex = Math.floor(adjustedBrightness * (BRIGHTNESS_CHARS.length - 1));
            
            line += BRIGHTNESS_CHARS[charIndex];
        }
        ascii += line + '\n';
    }
    
    return ascii;
}

function convert() {
    const output = document.getElementById('asciiOutput');
    
    if (currentTab === 'text') {
        const text = document.getElementById('textInput').value.trim();
        const fontStyle = document.getElementById('fontSelect').value;
        
        if (!text) {
            output.textContent = 'Please enter some text';
            return;
        }
        
        const ascii = textToAscii(text, fontStyle);
        output.textContent = ascii;
    } else if (currentTab === 'image') {
        if (!currentImage) {
            output.textContent = 'Please upload an image';
            return;
        }
        
        const width = parseInt(document.getElementById('widthSlider').value);
        const contrast = parseFloat(document.getElementById('contrastSlider').value);
        
        const ascii = imageToAscii(currentImage, width, contrast);
        output.textContent = ascii;
    }
}

function clearOutput() {
    document.getElementById('asciiOutput').textContent = '';
    if (currentTab === 'text') {
        document.getElementById('textInput').value = '';
    } else {
        currentImage = null;
        document.querySelector('.drop-content p').textContent = 'Drop image here or';
        document.getElementById('imageInput').value = '';
    }
}

function copyToClipboard() {
    const output = document.getElementById('asciiOutput');
    const content = output.textContent;
    
    if (!content.trim()) {
        return;
    }
    
    navigator.clipboard.writeText(content).then(() => {
        const btn = document.getElementById('copyBtn');
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 1500);
    }).catch(() => {
        const textArea = document.createElement('textarea');
        textArea.value = content;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const btn = document.getElementById('copyBtn');
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 1500);
    });
}

function downloadAscii() {
    const output = document.getElementById('asciiOutput');
    const content = output.textContent;
    
    if (!content.trim()) {
        return;
    }
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = 'ascii-art.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
}

function initEventListeners() {
    document.getElementById('convertBtn').addEventListener('click', convert);
    document.getElementById('clearBtn').addEventListener('click', clearOutput);
    document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
    document.getElementById('downloadBtn').addEventListener('click', downloadAscii);
    
    document.getElementById('textInput').addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            convert();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initControls();
    initFileUpload();
    initEventListeners();
});
