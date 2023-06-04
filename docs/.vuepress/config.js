module.exports = {
  base:'/site/',
  themeConfig: {
    //sidebar: 'auto',
    nav: [{
        text: '前端技术',
        ariaLabel: '前端技术',
        items: [
          { text: '基础',        
					items: [
						{ text: 'HTML', link: '/front/base/html/01.html-intro.md' },
						{ text: 'CSS', link: '/front/base/css/01.css-intro.md' },
						{ text: 'JAVASCRIPT', link: '/language/japanese/' }
					]},
					{ text: '进阶', items: [
						{ text: 'VUE技术栈', link: '/language/japanese/' },
						{ text: 'REACT技术栈', link: '/language/japanese/' }
					]},
					{ text: '其他', link: '/language/japanese/',
					 items: [
						{ text: '前端可视化技术', link: '/language/japanese/' },
						{ text: '前端gis技术', link: '/language/japanese/' }
					]
					}
        ]
      },
      {
        text: '后端技术',
        items: [
          { text: '基础', items: [
						{ text: 'JAVA', link: '/language/japanese/' },
						{ text: 'Springboot', link: '/language/japanese/' },
						{ text: 'Springcloud', link: '/language/japanese/' }
					]},
          { text: '进阶',items: [
						{ text: 'JAVA', link: '/language/japanese/' },
						{ text: 'Springboot', link: '/language/japanese/' },
						{ text: 'Springcloud', link: '/language/japanese/' }
					]},
					{ text: '其他',items: [
						{ text: 'JAVA', link: '/language/japanese/' },
						{ text: 'Springboot', link: '/language/japanese/' },
						{ text: 'Springcloud', link: '/language/japanese/' }
					] }
        ]
      },
			{
				text: '直播及通讯技术',
				items: [
					{ text: 'nginx-rtmp-model', link: '/language/chinese/' },
					{ text: 'mqtt', link: '/language/japanese/' },
					{ text: 'webrtc', link: '/language/japanese/' },
					{ text: 'websocket', link: '/language/japanese/' },
					{ text: '摄像头对接', link: '/language/japanese/' }
				]
			},
      {
        text: 'Linux运维及虚拟化技术',
        items: [
          { text: '基础', link: '/language/chinese/' },
          { text: '进阶', link: '/language/japanese/' },
					{ text: '其他', link: '/language/japanese/' }
        ]
      },
			{
				text: '常用开发工具',
				items: [
					{ text: 'ide', link: '/language/chinese/' },
					{ text: '进阶', link: '/language/japanese/' },
					{ text: '其他', link: '/language/japanese/' }
				]
			},
			{
				text: '其他技术栈',
				items: [
					{ text: 'GO', link: '/language/chinese/' },
					{ text: 'python', link: '/language/japanese/' },
					{ text: 'nodejs', link: '/language/japanese/' }
				]
			}
    ],
		sidebar: {
			'/front/base': [
				{
					title: 'HTML基础教程',
					children: [
						'/front/base/html/01.html-intro.md',
						'/front/base/html/02.html-editors.md',
						'/front/base/html/03.html-basic.md',
						'/front/base/html/04.html-head.md',
						'/front/base/html/05.html-tables.md',
						'/front/base/html/06.html-lists.md',
						'/front/base/html/07.html-layouts.md',
						'/front/base/html/08.html-forms.md'
					]
				},
				{
					title: 'CSS基础教程',
					children: [
						'/front/base/css/01.css-intro.md',
						'/front/base/css/02.css-id-class.md',
						'/front/base/css/03.css-howto.md',
						'/front/base/css/04.css-background.md',
						'/front/base/css/05.css-text.md',
					]
				},
				{
					title: 'JAVCASCRIPT基础教程',
					children: [
						'/front/base/html/01.html-intro.md',
					]
				}
			]
		}
  }
}
