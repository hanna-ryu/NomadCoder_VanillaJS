const quotes = [
    {
        quote: "평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라" ,
        author: "제임스 딘",
    },
    {
        quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다." ,
        author: "괴테",
    },
    {
        quote: "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다." ,
        author: "베토벤",
    },
    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다." ,
        author: "L.론허바드",
    },
    {
        quote: "이미 끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라." ,
        author: "탈무드",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다." ,
        author: "찰스 다윈",
    },
    {
        quote: "자신의 본성이 어떤것이든 그에 충실하라 . 자신이 가진 재능의 끈을 놓아 버리지 마라. 본성이 이끄는 대로 따르면 성공할것이다." ,
        author: "시드니 스미스",
    },
    {
        quote: "다른 사람의 좋은 습관을 내 습관으로 만들어라." ,
        author: "빌게이츠",
    },
    {
        quote: "성공은 매일 반복한 작은 노력들의 합이다." ,
        author: "로버트 콜리어",
    },
    {
        quote: "앞서가는 방법의 비밀은 시작하는 것이다." ,
        author: "마크 트웨인",
    },    
    {
        quote: "말도 행동이고 행동도 말의 일종이다." ,
        author: "랄프 왈도 에머슨",
    },
    {
        quote: "목표를 높게 잡아라. 그리고 도달할 때까지 멈추지 말라." ,
        author: "보 잭슨",
    },
    {
        quote: "무엇을 시도할 용기도 없으면서 멋진 삶을 바란단 말인가" ,
        author: "반 고흐",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote =  quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = `/ ${todaysQuote.author}`;