const gitgraph = new GitGraph({
    template: {
        colors: ["#979797", "#008FB5", "#FFA657", "#79C99E"],
        branch: {
            lineWidth: 8,
            spacingX: 50,
        },
        commit: {
            spacingY: -80,
            dot: {
                size: 12
            },
            message: {
                displayAuthor: false,
                displayBranch: true,
                displayHash: false,
                font: "normal 12pt Arial"
            }
        }
    }
});
/*
日時 YYYY/MM/DD
フォーマットは "<カード名>登場(日時)"
上位報酬登場時は "<イベント名> <佐久間まゆ名> 上位報酬(日時)"

シンデレラガールズ劇場とカード登場が同じ日付場合はシンデレラガールズ劇場が後
*/

const mobamas = gitgraph.branch("mobamas");
gitgraph.commit({
    message: "佐久間まゆ初登場(2012/06/26)",
}).commit({
    message: "[ﾊﾛｳｨﾝﾊﾟｰﾃｨｰ]佐久間まゆ登場(2012/09/30)",
});

const shingeki = gitgraph.branch("shingeki");
shingeki.checkout();
gitgraph.commit({
    message: "シンデレラガールズ劇場第38話登場 (2012/09/30)",
});
mobamas.checkout();

gitgraph.commit({
    message: "[ﾊﾞﾚﾝﾀｲﾝﾊﾟｰﾃｨ-]佐久間まゆ登場(2013/01/31)",
});
shingeki.checkout();
gitgraph.commit({
    message: "シンデレラガールズ劇場第76話登場(2013/02/04)",
});
mobamas.checkout();
gitgraph.commit({
    message: "第9回プロダクションマッチフェスティバル [恋愛ｼﾝﾄﾞﾛｰﾑ]佐久間まゆ 上位報酬(2013/04/10)",
});

shingeki.checkout();
gitgraph.commit({
    message: "シンデレラガールズ劇場第97話登場(2013/04/10)",
});

mobamas.checkout();
gitgraph.commit({
    message: "[深紅の絆]佐久間まゆ登場(2013/10/31)",
});

shingeki.checkout();
gitgraph.commit({
    message: "シンデレラガールズ劇場第177話登場(2013/11/01)",
}).commit({
    message: "シンデレラガールズ劇場第183話登場(2013/11/12)",
});

mobamas.checkout();
const real = gitgraph.branch("real");
gitgraph.commit({
    message: "エヴリデイドリーム発売(2013/11/13)",
});

mobamas.checkout();

gitgraph.commit({
    message: "[CDﾃﾞﾋﾞｭｰ]佐久間まゆ登場(2013/11/13)",
});

real.checkout();

gitgraph.commit({
    message: "シンデレラ2ndLive PARTY M@GIC!!に出演(2014/11/30)",
});

mobamas.checkout();

gitgraph.commit({
    message: "[永遠のキズナ]佐久間まゆ登場(2014/05/31)",
});
shingeki.checkout();
gitgraph.commit({
    message: "シンデレラガールズ劇場第314話登場(2014/05/31)",
});
gitgraph.commit({
    message: "シンデレラガールズ劇場第315話登場(2014/06/01)",
});
gitgraph.commit({
    message: "シンデレラガールズ劇場第343話登場(2014/07/15)",
});
mobamas.checkout();
gitgraph.commit({
    message: "[ﾐﾆｵﾝﾙｰｼﾞｭ]佐久間まゆ登場(2014/09/17)",
});
shingeki.checkout();
gitgraph.commit({
    message: "シンデレラガールズ劇場第381話登場(2014/09/17)",
});
mobamas.checkout();
gitgraph.commit({
    message: "第9回ドリームLIVEフェスティバル アンダーザデスク 登場(2014/10/31)"
});

const anime = gitgraph.branch("anime");
gitgraph.commit({
    message: "シンデレラガールズ第1話登場(2015/1/10)"
}).commit({
    message: "シンデレラガールズ第3話登場(2015/1/14)"
});
mobamas.checkout();
gitgraph.commit({
    message: "[夜の一面]佐久間まゆ登場(2015/2/28)"
})
