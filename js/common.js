/**
 * Created by chenzhongying on 2016/12/23.
 */
var tgp = angular.module("tgp", ["ngRoute"]);
tgp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: 'find/lostEmpire.html',
                controller: 'lostEmpire'
            }
        )
        .when('/find', /*发现*/
            {
                templateUrl: 'find/lostEmpire.html',
                controller: 'lostEmpire'
            }
        )
        .when('/lostEmpire', /*种族*/
            {
                templateUrl: 'find/lostEmpire.html',
                controller: 'lostEmpire'
            }
        )
        .when('/thought',  /*思潮*/
            {
                templateUrl: 'find/thought.html',
                controller: 'thought'
            }
        )
        .when('/speciality',  /*特质与基因*/
            {
                templateUrl: 'find/speciality.html',
                controller: 'speciality'
            }
        )
        .when('/universe',  /*宇宙探索*/
            {
                templateUrl: 'find/universe.html',
                controller: 'universe'
            }
        )
        .when('/ftl',  /*FTL*/
            {
                templateUrl: 'find/ftl.html',
                controller: 'ftl'
            }
        )
        .when('/abnormal',  /*异常*/
            {
                templateUrl: 'find/abnormal.html',
                controller: 'abnormal'
            }
        )
        .when('/celestial',  /*天体*/
            {
                templateUrl: 'find/celestial.html',
                controller: 'celestial'
            }
        )
        .when('/lastday',  /*太空生物*/
            {
                templateUrl: 'find/lastday.html',
                controller: 'lastday'
            }
        )
        .when('/manage', /*管理*/
            {
                templateUrl: 'manage/government.html',
                controller: 'government'
            }
        )
        .when('/government', /*政府*/
            {
                templateUrl: 'manage/government.html',
                controller: 'government'
            }
        )
        .when('/policy', /*政策*/
            {
                templateUrl: 'manage/policy.html',
                controller: 'policy'
            }
        )
        .when('/act', /*法令*/
            {
                templateUrl: 'manage/act.html',
                controller: 'act'
            }
        )
        .when('/leader', /*领袖*/
            {
                templateUrl: 'manage/leader.html',
                controller: 'leader'
            }
        )
        .when('/factions', /*派系*/
            {
                templateUrl: 'manage/factions.html',
                controller: 'factions'
            }
        )
        .when('/population', /*人口*/
            {
                templateUrl: 'manage/population.html',
                controller: 'population'
            }
        )
        .when('/military', /*军事*/
            {
                templateUrl: 'military/war.html',
                controller: 'war'
            }
        )
        .when('/war', /*战争*/
            {
                templateUrl: 'military/war.html',
                controller: 'war'
            }
        )
        .when('/spaceBattle', /*太空战斗*/
            {
                templateUrl: 'military/spaceBattle.html',
                controller: 'spaceBattle'
            }
        )
        .when('/groundBattle', /*地面战斗*/
            {
                templateUrl: 'military/groundBattle.html',
                controller: 'groundBattle'
            }
        )
        .when('/progress', /*进阶攻略*/
            {
                templateUrl: 'progress/progress.html',
                controller: 'progress'
            }
        )
        .when('/beginner', /*新手攻略*/
            {
                templateUrl: 'beginner/empireChoice.html',
                controller: 'gameOpen'
            }
        )
        .when('/gameOpen', /*游戏开局*/
            {
                templateUrl: 'beginner/gameOpen.html',
                controller: 'gameOpen'
            }
        )
        .when('/empireChoice', /*帝国选择*/
            {
                templateUrl: 'beginner/empireChoice.html',
                controller: 'empireChoice'
            }
        )
        .when('/initialEconomic', /*初期经济*/
            {
                templateUrl: 'beginner/initialEconomic.html',
                controller: 'initialEconomic'
            }
        )
        .when('/ethnic', /*种族交流*/
            {
                templateUrl: 'beginner/ethnic.html',
                controller: 'ethnic'
            }
        )
        .when('/threats', /*早期威胁与战争*/
            {
                templateUrl: 'beginner/threats.html',
                controller: 'threats'
            }
        )
        .when('/diplomacy', /*外交*/
            {
                templateUrl: 'diplomacy/routine.html',
                controller: 'routine'
            }
        )
        .when('/routine', /*常规外交*/
            {
                templateUrl: 'diplomacy/routine.html',
                controller: 'routine'
            }
        )
        .when('/subsidiary', /*附庸国*/
            {
                templateUrl: 'diplomacy/subsidiary.html',
                controller: 'subsidiary'
            }
        )
        .when('/allianceAgreement', /*联盟协定*/
            {
                templateUrl: 'diplomacy/allianceAgreement.html',
                controller: 'allianceAgreement'
            }
        )
        .when('/trade', /*贸易*/
            {
                templateUrl: 'diplomacy/trade.html',
                controller: 'trade'
            }
        )
        .when('/ai', /*AI帝国性格*/
            {
                templateUrl: 'diplomacy/ai.html',
                controller: 'ai'
            }
        )
        .when('/raidersVideo', /*攻略视频*/
            {
                templateUrl: 'raidersVideo/raidersVideo.html',
                controller: 'raidersVideo'
            }
        )


});

// 导航
tgp.controller("navCtrl",function($scope,$rootScope,$location){
    $rootScope.navs = {
        "find":"发现",
        "manage":"管理",
        "military":"军事",
        "diplomacy":"外交",
        "beginner":"新手攻略",
        "progress":"进阶攻略",
        "raidersVideo":"攻略视频"
    };
    $rootScope.tgp = true;
    $rootScope.game = true;
    $rootScope.nav = 1;
    $rootScope.tab = "lostEmpire";
    if($location.$$absUrl.indexOf("frame-tgp")== -1){
        $rootScope.tgp = false;
    }else{
        $rootScope.game = false;
    }
});
tgp.factory("tabTada",function(){
    return {
        findTab: {
            "lostEmpire":"失落帝国",
            "thought":"思潮",
            "speciality": "特质与基因",
            "universe":"宇宙探索",
            "ftl":"FTL",
            "abnormal":"异常",
            "celestial":"天体",
            "lastday":"末日危机"
        },
        manageTab: {
            "government":"政府",
            "policy":"政策",
            "act":"法令",
            "leader":"领袖",
            "factions":"派系",
            "population":"人口"
        },
        militaryTab:{
            "war":"战争",
            "spaceBattle":"太空战斗",
            "groundBattle": "地面战斗"

        },
        diplomacyTab:{
            "routine":"常规外交",
            "subsidiary":"附庸国",
            "allianceAgreement":"联盟协定",
            "trade":"贸易",
            "ai":"AI帝国性格"
        },
        beginnerTab: {
            "empireChoice": "帝国选择",
            "gameOpen":"游戏开局",
            "initialEconomic" :"初期经济",
            "ethnic" :"种族交流",
            "threats" :"早期威胁与战争"
        },
        progressTab: {
            "progress":"船舰及武器配置分析"
        },
        raidersVideo: {
            "raidersVideo":"攻略视频"
        }
    }
});
// 视频
tgp.controller("raidersVideo",function($scope,$rootScope,tabTada){
    $rootScope.tab = "raidersVideo";
    $rootScope.nav = "raidersVideo";
    $rootScope.tabs = tabTada.raidersVideo;
});
// 常规外交
tgp.controller("routine",function($scope,$rootScope,tabTada){
    $rootScope.tab = "routine";
    $rootScope.nav = "diplomacy";
    $rootScope.tabs = tabTada.diplomacyTab;
});
// 附庸国
tgp.controller("subsidiary",function($scope,$rootScope,tabTada){
    $rootScope.tab = "subsidiary";
    $rootScope.nav = "diplomacy";
    $rootScope.tabs = tabTada.diplomacyTab;
});
// 联盟协定
tgp.controller("allianceAgreement",function($scope,$rootScope,tabTada){
    $rootScope.tab = "allianceAgreement";
    $rootScope.nav = "diplomacy";
    $rootScope.tabs = tabTada.diplomacyTab;
});
// 贸易
tgp.controller("trade",function($scope,$rootScope,tabTada){
    $rootScope.tab = "trade";
    $rootScope.nav = "diplomacy";
    $rootScope.tabs = tabTada.diplomacyTab;
});
// AI帝国性格
tgp.controller("ai",function($scope,$rootScope,tabTada){
    $rootScope.tab = "ai";
    $rootScope.nav = "diplomacy";
    $rootScope.tabs = tabTada.diplomacyTab;
});
// 新手攻略
tgp.controller("gameOpen",function($scope,$rootScope,tabTada){
    $rootScope.tab = "gameOpen";
    $rootScope.nav = "beginner";
    $rootScope.tabs = tabTada.beginnerTab;
});
tgp.controller("empireChoice",function($scope,$rootScope,tabTada){
    $rootScope.tab = "empireChoice";
    $rootScope.nav = "beginner";
    $rootScope.tabs = tabTada.beginnerTab;
});
tgp.controller("initialEconomic",function($scope,$rootScope,tabTada){
    $rootScope.tab = "initialEconomic";
    $rootScope.nav = "beginner";
    $rootScope.tabs = tabTada.beginnerTab;
});
tgp.controller("ethnic",function($scope,$rootScope,tabTada){
    $rootScope.tab = "ethnic";
    $rootScope.nav = "beginner";
    $rootScope.tabs = tabTada.beginnerTab;
});
tgp.controller("threats",function($scope,$rootScope,tabTada){
    $rootScope.tab = "threats";
    $rootScope.nav = "beginner";
    $rootScope.tabs = tabTada.beginnerTab;
});
// 发现
tgp.controller("lostEmpire",function($scope,$rootScope,tabTada){
    $rootScope.tab = "lostEmpire";
    $rootScope.nav = "find";
    $rootScope.tabs = tabTada.findTab;
});
tgp.controller("thought",function($scope,$rootScope,tabTada){
    $rootScope.tab = "thought";
    $rootScope.nav = "find";
    $rootScope.tabs = tabTada.findTab;
});
tgp.controller("speciality",function($scope,$rootScope,tabTada){
    $rootScope.tab = "speciality";
    $rootScope.nav = "find";
    $rootScope.tabs = tabTada.findTab;
});
tgp.controller("universe",function($scope,$rootScope,tabTada){
    $rootScope.tab = "universe";
    $rootScope.nav = "find";
    $rootScope.tabs = tabTada.findTab;
});
tgp.controller("ftl",function($scope,$rootScope,tabTada){
    $rootScope.tab = "ftl";
    $rootScope.nav = "find";
    $rootScope.tabs = tabTada.findTab;
});
tgp.controller("abnormal",function($scope,$rootScope,tabTada){
    $rootScope.tab = "abnormal";
    $rootScope.nav = "find";
    $rootScope.tabs = tabTada.findTab;
});
tgp.controller("celestial",function($scope,$rootScope,tabTada){
    $rootScope.tab = "celestial";
    $rootScope.nav = "find";
    $rootScope.tabs = tabTada.findTab;
});
tgp.controller("lastday",function($scope,$rootScope,tabTada){
    $rootScope.tab = "lastday";
    $rootScope.nav = "find";
    $rootScope.tabs = tabTada.findTab;
});
// 管理
tgp.controller("government",function($scope,$rootScope,tabTada){
    $rootScope.tab = "government";
    $rootScope.nav = "manage";
    $rootScope.tabs = tabTada.manageTab;
});
tgp.controller("policy",function($scope,$rootScope,tabTada){
    $rootScope.tab = "policy";
    $rootScope.nav = "manage";
    $rootScope.tabs = tabTada.manageTab;
});
tgp.controller("act",function($scope,$rootScope,tabTada){
    $rootScope.tab = "act";
    $rootScope.nav = "manage";
    $rootScope.tabs = tabTada.manageTab;
});
tgp.controller("leader",function($scope,$rootScope,tabTada){
    $rootScope.tab = "leader";
    $rootScope.nav = "manage";
    $rootScope.tabs = tabTada.manageTab;
});
tgp.controller("factions",function($scope,$rootScope,tabTada){
    $rootScope.tab = "factions";
    $rootScope.nav = "manage";
    $rootScope.tabs = tabTada.manageTab;
});
tgp.controller("population",function($scope,$rootScope,tabTada){
    $rootScope.tab = "population";
    $rootScope.nav = "manage";
    $rootScope.tabs = tabTada.manageTab;
});
//军事
tgp.controller("war",function($scope,$rootScope,tabTada){
    $rootScope.tab = "war";
    $rootScope.nav = "military";
    $rootScope.tabs = tabTada.militaryTab;
});
tgp.controller("spaceBattle",function($scope,$rootScope,tabTada){
    $rootScope.tab = "spaceBattle";
    $rootScope.nav = "military";
    $rootScope.tabs = tabTada.militaryTab;
});
tgp.controller("groundBattle",function($scope,$rootScope,tabTada){
    $rootScope.tab = "groundBattle";
    $rootScope.nav = "military";
    $rootScope.tabs = tabTada.militaryTab;
});

// 进阶攻略
tgp.controller("progress",function($scope,$rootScope,tabTada){
    $rootScope.tab = "progress";
    $rootScope.nav = "progress";
    $rootScope.tabs = tabTada.progressTab;
});
