document.addEventListener('DOMContentLoaded', function() {
    // 獲取 URL 中的參數
    const urlParams = new URLSearchParams(window.location.search);
    const caloriesNeeded = urlParams.get('caloriesNeeded');

    // 將結果顯示在頁面上
    const resultElement = document.getElementById('caloriesResult');
    resultElement.innerHTML = '<p>您每天所需的熱量為：' + caloriesNeeded + ' 卡路里</p>';
});
document.addEventListener('DOMContentLoaded', function() {
    // 獲取 URL 中的參數（計算出的每日所需熱量）
    const urlParams = new URLSearchParams(window.location.search);
    const caloriesNeeded = parseFloat(urlParams.get('caloriesNeeded'));

    // 顯示計算出的每日所需熱量
    const caloriesNeededElement = document.getElementById('caloriesNeeded');
    caloriesNeededElement.textContent = caloriesNeeded;

    // 判斷每日所需熱量所屬的區間，並顯示相應的飲食建議量
    const dietRecommendationElement = document.getElementById('dietRecommendation');
    if (caloriesNeeded <= 1200) {
        dietRecommendationElement.innerHTML = `
            <img src="RICE.png" alt="Diet Recommendation Image">
            <p>全榖雜糧類<br>1.5碗</p>
            <p>豆魚蛋肉類<br>3份</p>
            <p>乳品類<br>1.5杯</p>
            <p>蔬菜類<br>3份</p>
            <p>水果類<br>2份</p>
            <p>油脂與堅果種子類<br>4份</p>
        `;
        
    } else if (caloriesNeeded <= 1500) {
        dietRecommendationElement.innerHTML = `
            <p>全榖雜糧類<br>2.5 碗</p>
            <p>豆魚蛋肉類<br>4 份</p>
            <p>乳品類<br>1.5 杯</p>
            <p>蔬菜類<br>3 份</p>
            <p>水果類<br>2 份</p>
            <p>油脂與堅果種子類<br>4 份</p>
        `;
    } else if (caloriesNeeded <= 1800) {
        dietRecommendationElement.innerHTML = `
            <p>全榖雜糧類<br>3 碗</p>
            <p>豆魚蛋肉類<br>5 份</p>
            <p>乳品類<br>1.5 杯</p>
            <p>蔬菜類<br>3 份</p>
            <p>水果類<br>2 份</p>
            <p>油脂與堅果種子類<br>5 份</p>
        `;
    } else if (caloriesNeeded <= 2000) {
        dietRecommendationElement.innerHTML = `
            <p>全榖雜糧類<br>3 碗</p>
            <p>豆魚蛋肉類<br>6 份</p>
            <p>乳品類<br>1.5 杯</p>
            <p>蔬菜類<br>4 份</p>
            <p>水果類<br>3 份</p>
            <p>油脂與堅果種子類<br>6 份</p>
        `;
    } else if (caloriesNeeded <= 2200) {
        dietRecommendationElement.innerHTML = `
            <p>全榖雜糧類<br>3.5 碗</p>
            <p>豆魚蛋肉類<br>6 份</p>
            <p>乳品類<br>1.5 杯</p>
            <p>蔬菜類<br>4 份</p>
            <p>水果類<br>3.5 份</p>
            <p>油脂與堅果種子類<br>6 份</p>
        `;
    } else if (caloriesNeeded <= 2500) {
        dietRecommendationElement.innerHTML = `
            <p>全榖雜糧類<br>4 碗</p>
            <p>豆魚蛋肉類<br>7 份</p>
            <p>乳品類<br>1.5 杯</p>
            <p>蔬菜類<br>5 份</p>
            <p>水果類<br>4 份</p>
            <p>油脂與堅果種子類<br>7 份</p>
        `;
    } else {
        dietRecommendationElement.innerHTML = `
            <p>全榖雜糧類<br>4 碗</p>
            <p>豆魚蛋肉類<br>8 份</p>
            <p>乳品類<br>2 杯</p>
            <p>蔬菜類<br>5 份</p>
            <p>水果類<br>4 份</p>
            <p>油脂與堅果種子類<br>8 份</p>
        `;
    }
});




