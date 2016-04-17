/*
  Installing/using this software, you agree that this software is
  only for study purposes and its authors and service providers  
  take no responsibilities for any consequences.
*/
function _check_regex_list(i, o) {
    var c;
    for (c = 0; c < i.length; c++)
        if (i[c].test(o)) return !0;
    return !1
}

function _check_patterns(i, o, c, p) {
    return i.hasOwnProperty(o) && _check_regex_list(i[o], c.slice(p + o.length)) ? !0 : !!_check_regex_list(i.any, c.slice(p))
}

function _find_proxy(i, o, c, p) {
    return _check_patterns(i.white, o, c, p) ? "DIRECT" : _check_patterns(i.proxy, o, c, p) ? _proxy_str : "DIRECT"
}

function FindProxyForURL(i, o) {
    var c = i.slice(0, 6);
    return "http:/" === c ? _find_proxy(_http_map, o, i, 7) : "https:" === c ? _find_proxy(_https_map, o, i, 8) : "DIRECT"
}
var _http_map = {
        white: {
            any: [/^[^\/]*\/ipad\?file=\//i]
        },
        proxy: {
            any: [/^[^\/]*\.cupid\.iqiyi\.com\//i, /^[^\/]*\.video\.qq\.com\/get/i, /^[^\/]*\.dpool\.sina\.com\.cn\/iplookup/i, /^[^\/]*\.letv\.com\/mms\/out\/video\/play/i],
            "v.youku.com": [/^\/player\//i],
            "api.youku.com": [/^\/player\//i],
            "play.youku.com": [/^\/play\/get\.json/i],
            "www.tudou.com": [/^\/a\//i, /^\/v\//i, /^\/outplay\/goto\//i, /^\/tvp\/alist\.action/i],
            "s.plcloud.music.qq.com": [/^\/fcgi\-bin\/p\.fcg/i],
            "i.y.qq.com": [/^\/s\.plcloud\/fcgi\-bin\/p\.fcg/i],
            "hot.vrs.sohu.com": [/^\//i],
            "live.tv.sohu.com": [/^\/live\/player/i],
            "pad.tv.sohu.com": [/^\/playinfo/i],
            "my.tv.sohu.com": [/^\/play\/m3u8version\.do/i],
            "hot.vrs.letv.com": [/^\//i],
            "api.le.com": [/^\/mms\/out\/video\//i],
            "data.video.qiyi.com": [/^\/v\./i, /^\/videos\//i, /^\/.*\/videos\//i],
            "cache.video.qiyi.com": [/^\//i],
            "cache.vip.qiyi.com": [/^\//i],
            "iplocation.geo.qiyi.com": [/^\/cityjson/i, /^\/cityjson$/i],
            "v.api.hunantv.com": [/^\/player\/video/i],
            "mobile.api.hunantv.com": [/^\/v5\/video\/getSource/i],
            "v.api.mgtv.com": [/^\/player\/video/i],
            "acc.music.qq.com": [/^\/base\/fcgi\-bin\/getsession/i],
            "api.appsdk.soku.com": [/^\//i],
            "app.bilibili.com": [/^\/bangumi\/user_season_status\?/i],
            "bangumi.bilibili.com": [/^\/api\//i],
            "122.72.82.31": [/^\//i],
            "211.151.158.155": [/^\//i],
            "vv.video.qq.com": [/^\//i],
            "info.zb.qq.com": [/^\/\?/i],
            "info.zb.video.qq.com": [/^\/\?/i],
            "qzs.qq.com": [/^\/tencentvideo_v1\//i],
            "ac.qq.com": [/^\/Comic\/comicInfo\/id\//i],
            "dispatcher.video.sina.com.cn": [/^\//i],
            "geo.js.kankan.xunlei.com": [/^\//i],
            "web-play.pptv.com": [/^\//i],
            "web-play.pplive.cn": [/^\//i],
            "tools.aplusapi.pptv.com": [/^\/get_ppi\?/i],
            "live.pptv.com": [/^\/api\/subject_list\?/i],
            "dyn.ugc.pps.tv": [/^\//i],
            "v.pps.tv": [/^\/ugc\/ajax\/aj_html5_url\.php/i],
            "inner.kandian.com": [/^\//i],
            "ipservice.163.com": [/^\//i],
            "so.open.163.com": [/^\/open\/info\.htm/i],
            "zb.s.qq.com": [/^\//i],
            "ip.kankan.xunlei.com": [/^\//i],
            "vxml.56.com": [/^\/json\//i],
            "music.sina.com.cn": [/^\/yueku\/intro\//i, /^\/radio\/port\/webFeatureRadioLimitList\.php/i],
            "play.baidu.com": [/^\/data\/music\/songlink/i],
            "v.iask.com": [/^\/v_play\.php/i, /^\/v_play_ipad\.cx\.php/i],
            "tv.weibo.com": [/^\/player\//i],
            "wtv.v.iask.com": [/^\/.*\.m3u8/i, /^\/mcdn\.php$/i, /^\/player\/ovs1_idc_list\.php/i],
            "video.sina.com.cn": [/^\/interface\/l\/u\/getFocusStatus\.php/i],
            "www.yinyuetai.com": [/^\/insite\//i, /^\/main\/get\-/i],
            "www.xiami.com": [/^\/play\?/i, /^\/web\/spark/i, /^\/web\/.*\?.*xiamitoken=/i],
            "www.kugou.com": [/^\/interface\/geoip\/checkip\.php$/i],
            "www.kuwo.cn": [/^\/yy\/PlayCheckIp\?callback=checkIpCallback&_=/i],
            "antiserver.kuwo.cn": [/^\/anti\.s\?/i],
            "api.letv.com": [/^\/streamblock/i, /^\/mms\/out\/video\/play/i, /^\/mms\/out\/common\/geturl/i, /^\/geturl/i, /^\/api\/geturl/i, /^\/getipgeo$/i],
            "api.www.letv.com": [/^\/mms\/out\/video\/playJson\?/i],
            "st.live.letv.com": [/^\/live\//i],
            "live.gslb.letv.com": [/^\/gslb\?/i],
            "live.g3proxy.lecloud.com": [/^\/gslb\?/i],
            "api.live.letv.com": [/^\/crossdomain\.xml$/i],
            "static.itv.letv.com": [/^\/api/i],
            "ip.apps.cntv.cn": [/^\/js\/player\.do/i],
            "vdn.apps.cntv.cn": [/^\/api\/get/i, /^\/api\/getLiveUrlCommonApi\.do\?pa:\/\/cctv_p2p_hdcctv5/i, /^\/api\/getLiveUrlCommonApi\.do\?pa:\/\/cctv_p2p_hdcctv6/i, /^\/api\/getLiveUrlCommonApi\.do\?pa:\/\/cctv_p2p_hdcctv8/i, /^\/api\/getLiveUrlCommonApi\.do\?pa:\/\/cctv_p2p_hdbtv6/i],
            "vdn.live.cntv.cn": [/^\/api2\/liveHtml5\.do\?channel=pa:\/\/cctv_p2p_hdcctv5/i, /^\/api2\/liveHtml5\.do\?channel=pa:\/\/cctv_p2p_hdcctv6/i, /^\/api2\/liveHtml5\.do\?channel=pa:\/\/cctv_p2p_hdcctv8/i, /^\/api2\/liveHtml5\.do\?channel=pa:\/\/cctv_p2p_hdbtv6/i, /^\//i],
            "vip.sports.cntv.cn": [/^\/check\.do/i, /^\/play\.do/i, /^\/servlets\/encryptvideopath\.do/i],
            "211.151.157.15": [/^\//i],
            "a.play.api.3g.youku.com": [/^\/common\/v3\/play\?/i],
            "i.play.api.3g.youku.com": [/^\/common\/v3\/play\?/i, /^\/common\/v3\/hasadv\/play\?/i],
            "api.3g.youku.com": [/^\/layout/i, /^\/v3\/play\/address/i, /^\/openapi\-wireless\/videos\/.*\/download/i, /^\/videos\/.*\/download/i, /^\/common\/v3\/play/i],
            "tv.api.3g.youku.com": [/^\/openapi\-wireless\/v3\/play\/address/i, /^\/common\/v3\/hasadv\/play/i, /^\/common\/v3\/play/i],
            "play.api.3g.youku.com": [/^\/common\/v3\/hasadv\/play/i, /^\/common\/v3\/play/i, /^\/v3\/play\/address/i],
            "play.api.3g.tudou.com": [/^\/v/i],
            "tv.api.3g.tudou.com": [/^\/tv\/play\?/i],
            "api.3g.tudou.com": [/^\//i],
            "api.tv.sohu.com": [/^\/mobile_user\/device\/clientconf\.json\?/i],
            "access.tv.sohu.com": [/^\//i],
            "iface.iqiyi.com": [/^\/api\/searchIface\?/i],
            "iface2.iqiyi.com": [/^\/php\/xyz\/iface\//i, /^\/php\/xyz\/entry\/galaxy\.php\?/i, /^\/php\/xyz\/entry\/nebula\.php\?/i],
            "cache.m.iqiyi.com": [/^\/jp\/tmts\//i],
            "dynamic.app.m.letv.com": [/^\/.*\/dynamic\.php\?.*ctl=videofile/i],
            "dynamic.meizi.app.m.letv.com": [/^\/.*\/dynamic\.php\?.*ctl=videofile/i],
            "dynamic.search.app.m.letv.com": [/^\/.*\/dynamic\.php\?.*ctl=videofile/i],
            "dynamic.live.app.m.letv.com": [/^\/.*\/dynamic\.php\?.*act=canplay/i],
            "listso.m.areainfo.ppstream.com": [/^\/ip\/q\.php/i],
            "epg.api.pptv.com": [/^\/detail\.api\?/i],
            "play.api.pptv.com": [/^\/boxplay\.api\?/i],
            "m.letv.com": [/^\/api\/geturl\?/i],
            "api.mob.app.letv.com": [/^\/play/i],
            "static.api.sports.letv.com": [/^\/.*vod\?/i],
            "interface.bilibili.com": [/^\/playurl\?/i],
            "3g.music.qq.com": [/^\//i],
            "mqqplayer.3g.qq.com": [/^\//i],
            "proxy.music.qq.com": [/^\//i],
            "proxymc.qq.com": [/^\//i],
            "220.249.243.70": [/^\/base\/fcgi\-bin\/getsession/i],
            "117.185.116.152": [/^\/base\/fcgi\-bin\/getsession/i],
            "101.227.139.217": [/^\/base\/fcgi\-bin\/getsession/i],
            "59.37.96.220": [/^\/base\/fcgi\-bin\/getsession/i],
            "140.207.69.99": [/^\/base\/fcgi\-bin\/getsession/i],
            "103.7.31.186": [/^\/base\/fcgi\-bin\/getsession/i],
            "103.7.30.89": [/^\/base\/fcgi\-bin\/getsession/i],
            "182.254.34.151": [/^\/base\/fcgi\-bin\/getsession/i],
            "ip2.kugou.com": [/^\/check\/isCn\//i],
            "ip.kugou.com": [/^\/check\/isCn\//i],
            "client.api.ttpod.com": [/^\/global/i],
            "mobi.kuwo.cn": [/^\//i],
            "mobilefeedback.kugou.com": [/^\//i],
            "tingapi.ting.baidu.com": [/^\/v1\/restserver\/ting\?.*method=baidu\.ting\.song/i],
            "music.baidu.com": [/^\/data\/music\/links\?/i],
            "serviceinfo.sdk.duomi.com": [/^\/api\/serviceinfo\/getserverlist/i],
            "music.163.com": [/^\/api\/copyright\/restrict\/\?/i, /^\/api\/batch$/i],
            "spark.api.xiami.com": [/^\/api\?.*method=AuthIp/i, /^\/api\?.*method=Start\.init/i, /^\/api\?.*method=Songs\.getTrackDetail/i, /^\/api\?.*method=Songs\.detail/i],
            "sns.video.qq.com": [/^\/tunnel\/fcgi\-bin\/tunnel/i],
            "v5.pc.duomi.com": [/^\/single\-ajaxsingle\-isban/i],
            "tms.is.ysten.com": [/^:8080\/yst\-tms\/login\.action\?/i],
            "chrome.2345.com": [/^\/dianhua\/mobileApi\/check\.php$/i],
            "internal.check.duokanbox.com": [/^\/check\.json/i],
            "180.153.225.136": [/^\//i],
            "118.244.244.124": [/^\//i],
            "210.129.145.150": [/^\//i],
            "182.16.230.98": [/^\//i]
        }
    },
    _https_map = {
        white: {
            any: []
        },
        proxy: {
            any: [],
            "openapi.youku.com": [/^\//i],
            "61.135.196.99": [/^\//i],
            "220.181.185.150": [/^\//i],
            "111.13.127.46": [/^\//i],
            "211.151.50.10": [/^\//i],
            "123.126.99.57": [/^\//i],
            "123.126.99.39": [/^\//i],
            "220.181.154.137": [/^\//i]
        }
    },
    _proxy_str = "PROXY 120.198.233.211:8080; DIRECT;";
    /*Get this IP from newest cn-proxy.com*/
