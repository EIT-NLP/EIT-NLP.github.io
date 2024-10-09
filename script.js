const mainContent = document.querySelector('main .container');
const langToggle = document.getElementById('langToggle');
let currentLang = 'zh';

const content = {
    zh: {
        home: `
            <h1>欢迎来到我们的实验室</h1>
            <p>我们是专注于[研究领域]的研究团队。</p>
            <h2>课题组简介</h2>
            <p>我们的课题组成立于[年份]，致力于[研究目标]。</p>
            <h2>出版物</h2>
            <ul>
                <li>
                    <strong>论文标题</strong><br>
                    作者, 期刊名称, 年份<br>
                    <a href="#">查看全文</a>
                </li>
                <!-- 添加更多出版物 -->
            </ul>
        `,
        research: `
            <h1>研究</h1>
            <h2>研究方向</h2>
            <ul>
                <li>研究方向1</li>
                <li>研究方向2</li>
                <!-- 添加更多研究方向 -->
            </ul>
            <h2>当前项目</h2>
            <p>项目描述...</p>
            <h2>合作机会</h2>
            <p>如果您对合作感兴趣，请联系我们：email@example.com</p>
        `,
        team: `
            <h1>团队</h1>
            <h2>负责人</h2>
            <p>负责人简介...</p>
            <h2>团队成员</h2>
            <ul>
                <li>
                    <img src="member1.jpg" alt="成员1">
                    <p>成员1简介...</p>
                </li>
                <!-- 添加更多团队成员 -->
            </ul>
            <h2>招聘信息</h2>
            <p>我们正在招聘[职位]。如果您感兴趣，请发送简历至email@example.com</p>
        `,
        news: `
            <h1>新闻</h1>
            <h2>近期动态</h2>
            <ul>
                <li>新闻1...</li>
                <li>新闻2...</li>
                <!-- 添加更多新闻 -->
            </ul>
            <h2>学术报告和会议</h2>
            <p>即将举行的会议信息...</p>
            <h2>媒体报道</h2>
            <p>最近的媒体报道链接...</p>
        `
    },
    en: {
        home: `
            <h1>Welcome to Our Laboratory</h1>
            <p>We are a research team focused on [research field].</p>
            <h2>About Our Research Group</h2>
            <p>Our research group was established in [year], dedicated to [research goals].</p>
            <h2>Publications</h2>
            <ul>
                <li>
                    <strong>Paper Title</strong><br>
                    Authors, Journal Name, Year<br>
                    <a href="#">View Full Text</a>
                </li>
                <!-- Add more publications -->
            </ul>
        `,
        research: `
            <h1>Research</h1>
            <h2>Research Directions</h2>
            <ul>
                <li>Research Direction 1</li>
                <li>Research Direction 2</li>
                <!-- Add more research directions -->
            </ul>
            <h2>Current Projects</h2>
            <p>Project description...</p>
            <h2>Collaboration Opportunities</h2>
            <p>If you are interested in collaboration, please contact us at: email@example.com</p>
        `,
        team: `
            <h1>Team</h1>
            <h2>Principal Investigator</h2>
            <p>Principal Investigator's introduction...</p>
            <h2>Team Members</h2>
            <ul>
                <li>
                    <img src="member1.jpg" alt="Member 1">
                    <p>Member 1 introduction...</p>
                </li>
                <!-- Add more team members -->
            </ul>
            <h2>Recruitment</h2>
            <p>We are currently recruiting for [position]. If you are interested, please send your resume to email@example.com</p>
        `,
        news: `
            <h1>News</h1>
            <h2>Recent Updates</h2>
            <ul>
                <li>News 1...</li>
                <li>News 2...</li>
                <!-- Add more news items -->
            </ul>
            <h2>Academic Reports and Conferences</h2>
            <p>Upcoming conference information...</p>
            <h2>Media Coverage</h2>
            <p>Links to recent media coverage...</p>
        `
    }
};

function loadContent(page) {
    mainContent.innerHTML = content[currentLang][page];
}

function switchLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateLanguage();
}

function updateLanguage() {
    // 更新导航栏和按钮文本
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.textContent = translations[currentLang][el.dataset.lang];
    });
    // 重新加载当前页面内容
    loadContent(currentPage);
}

// 初始化页面
let currentPage = 'home';
loadContent(currentPage);

// 添加事件监听器
langToggle.addEventListener('click', switchLanguage);
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = e.target.dataset.lang;
        loadContent(currentPage);
    });
});

// 翻译
const translations = {
    zh: {
        home: '首页',
        research: '研究',
        team: '团队',
        news: '新闻',
        switchLang: 'Switch to English'
    },
    en: {
        home: 'Home',
        research: 'Research',
        team: 'Team',
        news: 'News',
        switchLang: '切换到中文'
    }
};