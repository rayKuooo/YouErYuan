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

export default {
  activities,
  theses,
  courseWare,
  parentsView,
  wonderfulVideo
}
