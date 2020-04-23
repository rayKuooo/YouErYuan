const activities = [
  {
    img:'https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '大班科学活动',
    activities_target: ['体验玩夹子的乐趣','体验被夹子夹的乐趣'],
    time:'2009-10-19',
    Design_intent: [],
    id:1,
    author: '王慧'
  },
  {
    img:'https://images.unsplash.com/photo-1575314113965-c6672a42b99c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '小班音乐"身体乐器"',
    activities_target: ['体验用身体部位做乐器的乐趣','体验真正乐器的美妙旋律'],
    time:'2009-4-19',
    Design_intent: [],
    id:2,
    author: '王和玮'
  },
  {
    img:'https://images.unsplash.com/photo-1558443957-d056622df610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '语言“甜蜜蜜的葡萄”',
    activities_target: ['感受故事中小松鼠对妈妈深深的爱意'],
    time:'2009-4-17',
    Design_intent: [],
    id:3,
    author: '颜晓峰'
  },
  {
    img:'https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '小班语言"伞"',
    activities_target: ['感受诗歌《伞》中丰富优美的语境，并体验诗歌中神奇想象的乐趣'],
    time:'2009-10-19',
    Design_intent: [],
    id:4,
    author: '张权'
  },
  {
    img:'https://images.unsplash.com/photo-1557486097-4a64551d9b63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '托班"大苹果"',
    activities_target: [],
    time:'2009-10-19',
    Design_intent: ['设计意图：\n' +
    '苹果是幼儿最熟悉、最常见的水果，以此作为教学内容，是在幼儿有一定直接经验的基础上，促使...'],
    id:5,
    author: '杨瑞'
  },
  {
    img:'https://images.unsplash.com/photo-1573256081876-ca883b40ed2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '大班社会“魔法一分钟”',
    activities_target: [],
    time:'2009-10-19',
    Design_intent: ['设计意图：\n' +
    '赠人玫瑰，手留余香，给别人带去快乐是一件很容易的事，只要你稍稍用心，一分钟就能做到：一...'],
    id:6,
    author: '叶向阳'
  },
  {
    img:'https://images.unsplash.com/photo-1575314113965-c6672a42b99c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '大班科学活动',
    activities_target: ['体验玩夹子的乐趣','体验被夹子夹的乐趣'],
    time:'2009-10-19',
    Design_intent: [],
    id:1,
    author: '王慧'
  },
  {
    img:'https://images.unsplash.com/photo-1575314113965-c6672a42b99c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '小班音乐"身体乐器"',
    activities_target: ['体验用身体部位做乐器的乐趣','体验真正乐器的美妙旋律'],
    time:'2009-4-19',
    Design_intent: [],
    id:2,
    author: '王和玮'
  },
  {
    img:'https://images.unsplash.com/photo-1575314113965-c6672a42b99c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '语言“甜蜜蜜的葡萄”',
    activities_target: ['感受故事中小松鼠对妈妈深深的爱意'],
    time:'2009-4-17',
    Design_intent: [],
    id:3,
    author: '颜晓峰'
  },
  {
    img:'https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '小班语言"伞"',
    activities_target: ['感受诗歌《伞》中丰富优美的语境，并体验诗歌中神奇想象的乐趣'],
    time:'2009-10-19',
    Design_intent: [],
    id:4,
    author: '张权'
  },
  {
    img:'https://images.unsplash.com/photo-1557486097-4a64551d9b63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '托班"大苹果"',
    activities_target: [],
    time:'2009-10-19',
    Design_intent: ['设计意图：\n' +
    '苹果是幼儿最熟悉、最常见的水果，以此作为教学内容，是在幼儿有一定直接经验的基础上，促使...'],
    id:5,
    author: '杨瑞'
  },
  {
    img:'https://images.unsplash.com/photo-1573256081876-ca883b40ed2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '大班社会“魔法一分钟”',
    activities_target: [],
    time:'2009-10-19',
    Design_intent: ['设计意图：\n' +
    '赠人玫瑰，手留余香，给别人带去快乐是一件很容易的事，只要你稍稍用心，一分钟就能做到：一...'],
    id:6,
    author: '叶向阳'
  },
  {
    img:'https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '大班科学活动',
    activities_target: ['体验玩夹子的乐趣','体验被夹子夹的乐趣'],
    time:'2009-10-19',
    Design_intent: [],
    id:1,
    author: '王慧'
  },
  {
    img:'https://images.unsplash.com/photo-1575314113965-c6672a42b99c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '小班音乐"身体乐器"',
    activities_target: ['体验用身体部位做乐器的乐趣','体验真正乐器的美妙旋律'],
    time:'2009-4-19',
    Design_intent: [],
    id:2,
    author: '王和玮'
  },
  {
    img:'https://images.unsplash.com/photo-1558443957-d056622df610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '语言“甜蜜蜜的葡萄”',
    activities_target: ['感受故事中小松鼠对妈妈深深的爱意'],
    time:'2009-4-17',
    Design_intent: [],
    id:3,
    author: '颜晓峰'
  },
  {
    img:'https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '小班语言"伞"',
    activities_target: ['感受诗歌《伞》中丰富优美的语境，并体验诗歌中神奇想象的乐趣'],
    time:'2009-10-19',
    Design_intent: [],
    id:4,
    author: '张权'
  },
  {
    img:'https://images.unsplash.com/photo-1557486097-4a64551d9b63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '托班"大苹果"',
    activities_target: [],
    time:'2009-10-19',
    Design_intent: ['设计意图：\n' +
    '苹果是幼儿最熟悉、最常见的水果，以此作为教学内容，是在幼儿有一定直接经验的基础上，促使...'],
    id:5,
    author: '杨瑞'
  },
  {
    img:'https://images.unsplash.com/photo-1573256081876-ca883b40ed2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    activities_title: '大班社会“魔法一分钟”',
    activities_target: [],
    time:'2009-10-19',
    Design_intent: ['设计意图：\n' +
    '赠人玫瑰，手留余香，给别人带去快乐是一件很容易的事，只要你稍稍用心，一分钟就能做到：一...'],
    id:6,
    author: '叶向阳'
  }
]
const theses = [
  {
    img:'https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    theses_title: '批判性思维在提问中的重要性——读《学会提问》有感',
    theses_desc: '《学会提问》这本书的英文名为ASKING THE RIGHT QUESTIONS，是美国经济学教授尼尔˙布朗和心理学...',
    time:'2009-10-19',
    id:1,
    author: '郭睿'
  },{
    img:'https://images.unsplash.com/photo-1578194475681-ba5fc5dd17e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    theses_title: '有效的教学评价 为数学活动注入新的活力',
    theses_desc: '教师在数学活动中评价幼儿时要正确地认识幼儿的个体差异，采用不同的评价方法促进幼儿的...',
    time:'2009-4-19',
    id:2,
    author: '郭睿'
  },{
    img:'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    theses_title: '以游戏形式促进幼儿良好生活习惯的养成',
    theses_desc: '幼儿时期良好的生活习惯的培养特别重要，它是幼儿走向独立生活的关健。',
    time:'2009-4-17',
    id:3,
    author: '郭睿'
  },{
    img:'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    theses_title: '在体育活动中激发幼儿的学习自主性',
    theses_desc: '《纲要》指出：应该支持幼儿富有个性和创造性的表达。',
    time:'2009-10-19',
    id:4,
    author: '郭睿'
  },{
    img:'https://images.unsplash.com/photo-1555704997-bb93376ce574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    theses_title: '以游戏形式培养小班幼儿良好进餐习惯',
    theses_desc: '幼儿期是习惯养成的关键期，这一时期良好习惯的养成，将影响着孩子今后一生的发展，才能促进幼儿...',
    time:'2009-10-19',
    id:5,
    author: '郭睿'
  },
  {
    img:'https://images.unsplash.com/photo-1555704997-bb93376ce574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    theses_title: '以游戏形式培养小班幼儿良好进餐习惯',
    theses_desc: '幼儿期是习惯养成的关键期，这一时期良好习惯的养成，将影响着孩子今后一生的发展，才能促进幼儿...',
    time:'2009-10-19',
    id:5,
    author: '郭睿'
  },
  {
    img:'https://images.unsplash.com/photo-1555704997-bb93376ce574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    theses_title: '以游戏形式培养小班幼儿良好进餐习惯',
    theses_desc: '幼儿期是习惯养成的关键期，这一时期良好习惯的养成，将影响着孩子今后一生的发展，才能促进幼儿...',
    time:'2009-10-19',
    id:5,
    author: '郭睿'
  }
]
const courseWare = []
const parentsView = [
  {
    img: 'https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title:'家园共建的感想和体会',
    time:'2009-10-19',
    author: '郭睿'
  },
  {
    img: 'https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title:'家园共建的感想和体会',
    time:'2009-10-19',
    author: '郭睿'
  },
  {
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: '小小世界  大大学问',
    time:'2009-10-19',
    author: '郭睿'
  },
  {
    img: 'https://images.unsplash.com/photo-1531368345462-e180bd618c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: '换一种目光看孩子',
    time:'2009-10-19',
    author: '郭睿'
  },
  {
    img: 'https://images.unsplash.com/photo-1549227082-0ea18ce30397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: '经常鼓励孩子有助于成长  ',
    time:'2009-10-19',
    author: '郭睿'
  },
  {
    img: 'https://images.unsplash.com/photo-1549227082-0ea18ce30397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: '经常鼓励孩子有助于成长  ',
    time:'2009-10-19',
    author: '郭睿'
  },
]
const wonderfulVideo = [
  {
    img: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: '《你能成为优秀教师》',
    time:'2009-10-19',
    author: '郭睿'
  },
  {
    img: 'https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: '《善发现、多沟通》',
    time:'2009-10-19',
    author: '郭睿'
  },
  {
    img: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: '《给教师的一百条建议》读后感',
    time:'2009-10-19',
    author: '郭睿'
  },
  {
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: '小小世界  大大学问',
    time:'2009-10-19',
    author: '郭睿'
  },
  {
    img: 'https://images.unsplash.com/photo-1531368345462-e180bd618c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: '换一种目光看孩子',
    time:'2009-10-19',
    author: '郭睿'
  },
  {
    img: 'https://images.unsplash.com/photo-1549227082-0ea18ce30397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: '经常鼓励孩子有助于成长  ',
    time:'2009-10-19',
    author: '郭睿'
  },
]
const weeklyMenu = [
  {
    data:'星期一',
    data_eg:'Monday',
    guideBd:[
      {
        guideTitle:'早餐',
        guideContent: ['老武汉热干面', '牛奶']
      },
      {
        guideTitle:'早点',
        guideContent: ['饼干']
      },
      {
        guideTitle:'中餐',
        guideContent: ['蚝油生菜', '黑芝麻米饭','海鲜蒸蛋','西红柿紫菜汤']
      },
      {
        guideTitle:'午点',
        guideContent: ['香蕉']
      },
      {
        guideTitle:'晚餐',
        guideContent: ['清炒瓠子','酱爆肝香肉','银芽榨菜汤']
      }
    ]
  },
  {
    data:'星期二',
    data_eg:'Tuesday',
    guideBd:[
      {
        guideTitle:'早餐',
        guideContent: ['葱香鸡蛋饼', '牛奶']
      },
      {
        guideTitle:'早点',
        guideContent: ['沙琪玛']
      },
      {
        guideTitle:'中餐',
        guideContent: ['番茄炖牛腩', '燕麦饭','平菇青菜鸡蛋汤','双色花菜']
      },
      {
        guideTitle:'午点',
        guideContent: ['苹果']
      },
      {
        guideTitle:'晚餐',
        guideContent: ['冬瓜虾皮汤','上汤苋菜','土豆烧鸭腿']
      }
    ]
  },
  {
    data:'星期三',
    data_eg:'Wednesday',
    guideBd:[
      {
        guideTitle:'早餐',
        guideContent: ['三鲜混沌', '鹌鹑蛋']
      },
      {
        guideTitle:'早点',
        guideContent: ['牛奶']
      },
      {
        guideTitle:'中餐',
        guideContent: ['糖醋剥皮鱼', '荞麦饭','脆炒土豆丝','西红柿青菜汤']
      },
      {
        guideTitle:'午点',
        guideContent: ['香瓜']
      },
      {
        guideTitle:'晚餐',
        guideContent: ['酱肉包','绿豆百合粥']
      }
    ]
  },
  {
    data:'星期四',
    data_eg:'Thursday',
    guideBd:[
      {
        guideTitle:'早餐',
        guideContent: ['果脯发糕', '红豆薏米粥']
      },
      {
        guideTitle:'早点',
        guideContent: ['牛奶']
      },
      {
        guideTitle:'中餐',
        guideContent: ['黄焖元子', '卤海带丝','小米饭','双菇汤']
      },
      {
        guideTitle:'午点',
        guideContent: ['西瓜']
      },
      {
        guideTitle:'晚餐',
        guideContent: ['红枣山药土鸡汤','三鲜炒粉']
      }
    ]
  },
  {
    data:'星期五',
    data_eg:'Friday',
    guideBd:[
      {
        guideTitle:'早餐',
        guideContent: ['葱香鸡蛋饼', '牛奶']
      },
      {
        guideTitle:'早点',
        guideContent: ['沙琪玛']
      },
      {
        guideTitle:'中餐',
        guideContent: ['番茄炖牛腩', '燕麦饭','平菇青菜鸡蛋汤','双色花菜']
      },
      {
        guideTitle:'午点',
        guideContent: ['苹果']
      },
      {
        guideTitle:'晚餐',
        guideContent: ['冬瓜虾皮汤','上汤苋菜','土豆烧鸭腿']
      }
    ]
  },
]
const HealthCenter = [
  {
    img:'https://images.unsplash.com/photo-1573256081876-ca883b40ed2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    date:'2018/11/08',
    title:'冬季幼儿饮食',
    desc:'冬季幼儿饮食'
  },
  {
    img:'https://images.unsplash.com/photo-1473348164936-13be821e561c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    date:'2018/04/15',
    title:'平衡膳食原则',
    desc:'平衡膳食原则'
  },
  {
    img:'https://images.unsplash.com/photo-1580795478844-5ed694336c90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    date:'2018/03/25',
    title:'预防食源性疾病的十项建议',
    desc:'预防食源性疾病的十项建议'
  },
  {
    img:'https://images.unsplash.com/photo-1566828791229-3804b533f840?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    date:'2018/03/05',
    title:'怎样鉴别奶类食品',
    desc:'怎样鉴别奶类食品'
  }
]
const ScientificDiet = [
  {
    img:'https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    date:'2018/06/04',
    title:'动手做一做："蜜烤香蕉"',
    desc:'原料：香蕉2根、奶油2大匙、糖1大匙、兰姆酒1大匙、柠檬汁2小匙、巧克力酱少许、烤杏仁片少许。'
  },
  {
    img:'https://images.unsplash.com/photo-1507491518447-ac20c6c50dc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    date:'2018/04/15',
    title:'动手做一做：“滑子菇烩海鲜”',
    desc:'原料：滑子菇300克，海螺肉100克，扇贝2个，虾仁100克盐、料酒、小葱白、水淀粉、食用碱面各5克，鸡精8...'
  },
  {
    img:'https://images.unsplash.com/photo-1562453020-48ee5c25348a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    date:'2018/03/25',
    title:'动手做一做：“开口菠萝包”',
    desc:'原料：面粉400克，面肥200克，去皮菠萝300克，白糖40克，炼乳20克，食用碱面8克用温水溶解。'
  },
  {
    img:'https://images.unsplash.com/photo-1551040136-aee85a5cb5a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    date:'2018/03/05',
    title:'动手做一做：“豌豆荚烧里脊条”',
    desc:'原料：豌豆荚200克，猪里脊肉200克。'
  }
]

export default {
  activities,
  theses,
  courseWare,
  parentsView,
  wonderfulVideo,
  weeklyMenu,
  HealthCenter,
  ScientificDiet
}
