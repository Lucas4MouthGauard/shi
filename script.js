// 屎币主题互动脚本
document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面动画
    initAnimations();
    
    // 添加键盘事件监听
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            shoutShit();
        }
    });
});

// 初始化动画
function initAnimations() {
    // 创建更多浮动元素
    createFloatingElements();
    
    // 添加鼠标跟随效果
    addMouseFollowEffect();
}

// 创建浮动元素
function createFloatingElements() {
    const background = document.querySelector('.background-elements');
    
    // 动态创建更多浮动元素
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.className = 'floating-coin';
        element.textContent = Math.random() > 0.5 ? '$屎' : '💩';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.animationDelay = Math.random() * 10 + 's';
        element.style.animationDuration = (Math.random() * 3 + 4) + 's';
        background.appendChild(element);
    }
}

// 添加鼠标跟随效果
function addMouseFollowEffect() {
    document.addEventListener('mousemove', function(e) {
        const elements = document.querySelectorAll('.floating-coin');
        elements.forEach((element, index) => {
            const speed = (index + 1) * 0.01;
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            element.style.transform += ` translate(${x}px, ${y}px)`;
        });
    });
}

// 释放压力功能
function shoutShit() {
    const display = document.getElementById('shout-display');
    const shouts = [
        '💩 屎！💩',
        '💩 SHIT！💩',
        '💩 释放压力！💩',
        '💩 重获力量！💩',
        '💩 最真诚的表达！💩',
        '💩 原始共识！💩'
    ];
    
    const randomShout = shouts[Math.floor(Math.random() * shouts.length)];
    
    // 创建动画效果
    display.textContent = randomShout;
    display.style.animation = 'none';
    display.offsetHeight; // 触发重排
    display.style.animation = 'shoutAnimation 1s ease-out';
    
    // 添加音效（如果有的话）
    playShoutSound();
    
    // 创建粒子效果
    createParticleEffect();
    
    // 3秒后清除显示
    setTimeout(() => {
        display.textContent = '';
    }, 3000);
}

// 播放音效
function playShoutSound() {
    // 创建简单的音效
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// 创建粒子效果
function createParticleEffect() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.textContent = Math.random() > 0.5 ? '💩' : '$屎';
        particle.style.position = 'fixed';
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.fontSize = '2rem';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        particle.style.transition = 'all 1s ease-out';
        
        container.appendChild(particle);
        
        // 随机方向扩散
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 200;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        setTimeout(() => {
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = '0';
        }, 10);
        
        // 清理粒子
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes shoutAnimation {
        0% {
            transform: scale(0.5) rotate(-10deg);
            opacity: 0;
        }
        50% {
            transform: scale(1.2) rotate(5deg);
            opacity: 1;
        }
        100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
    }
    
    .floating-coin {
        transition: transform 0.1s ease-out;
    }
`;
document.head.appendChild(style);

// 添加页面加载完成后的特效
window.addEventListener('load', function() {
    // 页面加载完成后的欢迎动画
    setTimeout(() => {
        const title = document.querySelector('.title');
        title.style.animation = 'titleGlow 2s ease-in-out infinite alternate, welcomeBounce 1s ease-out';
    }, 500);
});

// 添加欢迎动画
const welcomeStyle = document.createElement('style');
welcomeStyle.textContent = `
    @keyframes welcomeBounce {
        0% { transform: scale(0.8); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(welcomeStyle); 