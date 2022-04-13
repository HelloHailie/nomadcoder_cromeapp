const quotes = [
    {
        quote: "Follower가 되지말고 maker가 되자. ",
        author: " ",
    },
    {
        quote: "늦었다는 사람 따로 있고 그냥 해버리는 사람 따로 있다. 그 둘은 완전히 다른 세상을 산다. ",
        author: " ",
    },
    {
        quote: "될 것 같다고 말해주는 누군가가 있다면 그 힘으로 인생이 굴러가기도 한다. 그리고 그 누군가가 나일 때, 가장 힘이 세다. ",
        author: " ",

    },
    {
        quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
        author: " ",
    },
    {
        quote: "내게는 지금 이 순간 내가 맞다고 생각하는 방향을 따를 자격과 힘이 있다. ",
        author: " ",
    },
    {
        quote: "자동차는 기름이 아니라 소프트웨어로 달릴 것이다. ",
        author: "메르세데스 벤츠 회장",
    },
    {
        quote: "올바르게 작동하지 않는다고 걱정하지 마라. 만일 모든게 잘 된다면 굳이 당신이 일할 필요가 없다. ",
        author: " ",
    },
    {
        quote: "코드를 짜기 위해 천재일 필요는 없다. 그냥 시작하라. ",
        author: " ",
    },
    {
        quote: "인생에서 저지를 수 있는 가장 큰 실수는 실수할까봐 끊임없이 두려워하는 일이다. ",
        author: " ",
    },
    {
        quote: "가장 강한 사람은 스스로를 통제할 수 있는 사람이다. ",
        author: " ",
    },
];

const quote = document.querySelector("#sayings span:first-child");
const author = document.querySelector("#sayings span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
