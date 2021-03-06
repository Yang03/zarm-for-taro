module.exports = {
  documents: [
    {
      key: 'introduce',
      name: '关于 Zarm',
      module: () => import('@/web/docs/introduce.md'),
      source: '@/web/docs/introduce.md',
      style: false,
    },
    {
      key: 'quick-start',
      name: '快速上手',
      module: () => import('@/web/docs/quick-start.md'),
      source: '@/web/docs/quick-start.md',
      style: false,
    },
    {
      key: 'customize-theme',
      name: '定制主题',
      module: () => import('@/web/docs/customize-theme.md'),
      source: '@/web/docs/customize-theme.md',
      style: false,
    },
    {
      key: 'i18n',
      name: '国际化',
      module: () => import('@/web/docs/i18n.md'),
      source: '@/web/docs/i18n.md',
      style: false,
    },
    {
      key: 'change-log',
      name: '更新日志',
      module: () => import('@zarmDir/CHANGELOG.md'),
      source: '@zarmDir/CHANGELOG.md',
      style: false,
    },
    {
      key: 'contributing',
      name: '贡献指南',
      module: () => import('@/web/docs/contributing.md'),
      source: '@/web/docs/contributing.md',
      style: false,
    },
  ],
  components: {
    general: [
      {
        key: 'button',
        name: '按钮',
        module: () => import('zarm/button/demo.md'),
        source: 'zarm/button/demo.md', 
        style: true,
      },
      {
        key: 'icon',
        name: '图标',
        module: () => import('zarm/icon/demo.md'),
        source: 'zarm/icon/demo.md', 
        style: true,
      },
    ],
    form: [
      {
        key: 'input',
        name: '文本框',
        module: () => import('zarm/input/demo.md'),
        source: 'zarm/input/demo.md', 
        style: false,
      },
      {
        key: 'radio',
        name: '单选框',
        module: () => import('zarm/radio/demo.md'),
        source: 'zarm/radio/demo.md', 
        style: true,
      },
      {
        key: 'checkbox',
        name: '复选框',
        module: () => import('zarm/checkbox/demo.md'),
        source: 'zarm/checkbox/demo.md', 
        style: true,
      },
      {
        key: 'picker',
        name: '选择器',
        module: () => import('zarm/picker/demo.md'),
        source: 'zarm/picker/demo.md', 
        style: true,
      },
      {
        key: 'stack-picker',
        name: '层叠选择器',
        module: () => import('zarm/stack-picker/demo.md'),
        source: 'zarm/stack-picker/demo.md', 
        style: false,
      },
      {
        key: 'date-picker',
        name: '日期选择器',
        module: () => import('zarm/date-picker/demo.md'),
        source: 'zarm/date-picker/demo.md', 
        style: false,
      },
      {
        key: 'calendar',
        name: '日历',
        module: () => import('zarm/calendar/demo.md'),
        source: 'zarm/calendar/demo.md', 
        style: true,
      },
      {
        key: 'slider',
        name: '滑动输入条',
        module: () => import('zarm/slider/demo.md'),
        source: 'zarm/slider/demo.md', 
        style: false,
      },
      {
        key: 'stepper',
        name: '步进器',
        module: () => import('zarm/stepper/demo.md'),
        source: 'zarm/stepper/demo.md', 
        style: false,
      },
      {
        key: 'switch',
        name: '开关',
        module: () => import('zarm/switch/demo.md'),
        source: 'zarm/switch/demo.md', 
        style: false,
      },
      {
        key: 'search-bar',
        name: '搜索栏',
        module: () => import('zarm/search-bar/demo.md'),
        source: 'zarm/search-bar/demo.md', 
        style: true,
      },
      {
        key: 'file-picker',
        name: '文件选择器',
        module: () => import('zarm/file-picker/demo.md'),
        source: 'zarm/file-picker/demo.md', 
        style: true,
      },
      {
        key: 'keyboard',
        name: '虚拟键盘',
        module: () => import('zarm/keyboard/demo.md'),
        source: 'zarm/keyboard/demo.md', 
        style: false,
      },
    ],
    feedback: [
      {
        key: 'action-sheet',
        name: '动作面板',
        module: () => import('zarm/action-sheet/demo.md'),
        source: 'zarm/action-sheet/demo.md', 
        style: false,
      },
      {
        key: 'message',
        name: '消息',
        module: () => import('zarm/message/demo.md'),
        source: 'zarm/message/demo.md', 
        style: true,
      },
      {
        key: 'modal',
        name: '模态框',
        module: () => import('zarm/modal/demo.md'),
        source: 'zarm/modal/demo.md', 
        style: true,
      },
      {
        key: 'toast',
        name: '轻提示',
        module: () => import('zarm/toast/demo.md'),
        source: 'zarm/toast/demo.md', 
        style: true,
      },
      {
        key: 'loading',
        name: '加载',
        module: () => import('zarm/loading/demo.md'),
        source: 'zarm/loading/demo.md', 
        style: false,
      },
      {
        key: 'pull',
        name: '上拉加载下拉刷新',
        module: () => import('zarm/pull/demo.md'),
        source: 'zarm/pull/demo.md', 
        style: true,
      },
      {
        key: 'swipe-action',
        name: '滑动操作',
        module: () => import('zarm/swipe-action/demo.md'),
        source: 'zarm/swipe-action/demo.md', 
        style: false,
      },
      {
        key: 'activity-indicator',
        name: '活动指示器',
        module: () => import('zarm/activity-indicator/demo.md'),
        source: 'zarm/activity-indicator/demo.md', 
        style: false,
      },
      {
        key: 'popup',
        name: '弹出框',
        module: () => import('zarm/popup/demo.md'),
        source: 'zarm/popup/demo.md', 
        style: true,
      },
      {
        key: 'popper',
        name: '气泡层',
        module: () => import('zarm/popper/demo.md'),
        source: 'zarm/popper/demo.md', 
        style: true,
      },
    ],
    view: [
      {
        key: 'collapse',
        name: '折叠面板',
        module: () => import('zarm/collapse/demo.md'),
        source: 'zarm/collapse/demo.md', 
        style: false,
      },
      {
        key: 'badge',
        name: '徽标',
        module: () => import('zarm/badge/demo.md'),
        source: 'zarm/badge/demo.md', 
        style: true,
      },
      {
        key: 'cell',
        name: '列表项',
        module: () => import('zarm/cell/demo.md'),
        source: 'zarm/cell/demo.md', 
        style: true,
      },
      {
        key: 'carousel',
        name: '走马灯',
        module: () => import('zarm/carousel/demo.md'),
        source: 'zarm/carousel/demo.md', 
        style: true,
      },
      {
        key: 'progress',
        name: '进度条',
        module: () => import('zarm/progress/demo.md'),
        source: 'zarm/progress/demo.md', 
        style: true,
      },
      {
        key: 'notice-bar',
        name: '通告栏',
        module: () => import('zarm/notice-bar/demo.md'),
        source: 'zarm/notice-bar/demo.md', 
        style: true,
      },
      {
        key: 'panel',
        name: '面板',
        module: () => import('zarm/panel/demo.md'),
        source: 'zarm/panel/demo.md', 
        style: true,
      },
      {
        key: 'marquee',
        name: '滚动',
        module: () => import('zarm/marquee/demo.md'),
        source: 'zarm/marquee/demo.md', 
        style: false,
      },
      {
        key: 'tooltip',
        name: '文字提示',
        module: () => import('zarm/tooltip/demo.md'),
        source: 'zarm/tooltip/demo.md', 
        style: true,
      },
      {
        key: 'image-preview',
        name: '图片预览',
        module: () => import('zarm/image-preview/demo.md'),
        source: 'zarm/image-preview/demo.md', 
        style: true,
      },
    ],
    navigation: [
      {
        key: 'affix',
        name: '固钉',
        module: () => import('zarm/affix/demo.md'),
        source: 'zarm/affix/demo.md', 
        style: true,
      },
      {
        key: 'tabs',
        name: '标签页',
        module: () => import('zarm/tabs/demo.md'),
        source: 'zarm/tabs/demo.md', 
        style: true,
      },
      {
        key: 'nav-bar',
        name: '导航栏',
        module: () => import('zarm/nav-bar/demo.md'),
        source: 'zarm/nav-bar/demo.md', 
        style: false,
      },
      {
        key: 'tab-bar',
        name: '标签栏',
        module: () => import('zarm/tab-bar/demo.md'),
        source: 'zarm/tab-bar/demo.md', 
        style: false,
      },
    ],
    other: [
      // {
      //   key: 'mask',
      //   name: '遮罩层',
      //   module: () => import('zarm/mask/demo.md'),
      //   source: 'zarm/mask/demo.md',
      //   style: false,
      // },
      {
        key: 'config-provider',
        name: '全局配置',
        module: () => import('zarm/config-provider/demo.md'),
        source: 'zarm/config-provider/demo.md', 
        style: true,
      },
      {
        key: 'locale-provider',
        name: '国际化（即将废弃）',
        module: () => import('zarm/locale-provider/demo.md'),
        source: 'zarm/locale-provider/demo.md', 
        style: false,
      },
      {
        key: 'drag',
        name: '拖拽',
        module: () => import('zarm/drag/demo.md'),
        source: 'zarm/drag/demo.md', 
        style: false,
      },
      {
        key: 'back-to-top',
        name: '返回顶部',
        module: () => import('zarm/back-to-top/demo.md'),
        source: 'zarm/back-to-top/demo.md', 
        style: false,
      },
    ],
  },
  design: [
    {
      key: 'download',
      name: '设计资源下载',
      module: () => import('@/web/pages/Design/Download'),
      source: '@/web/pages/Design/Download',
      style: false,
    },
  ],
};
