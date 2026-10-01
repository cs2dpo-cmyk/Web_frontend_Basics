// 等待 HTML 載入完畢後執行
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn');
    const title = document.getElementById('title');

    // 監聽按鈕點擊事件
    button.addEventListener('click', () => {
        title.textContent = '歡迎來到 JavaScript 的世界！';
        title.style.color = '#007bff';
    });
});