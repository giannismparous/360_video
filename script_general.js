(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"gap":10,"id":"rootPlayer","minHeight":0,"backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"propagateClick":false,"data":{"history":{},"defaultLocale":"en","textToSpeechConfig":{"rate":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"pitch":1},"locales":{"en":"locale/en.txt"},"name":"Player1690"},"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList])","watermark":false,"children":["this.MainViewer"],"scrollBarMargin":2,"scrollBarColor":"#000000","width":"100%","class":"Player","defaultMenu":["fullscreen","mute","rotation"],"hash": "a88e942a4c167e886d537a859736613e4c915da024bc16f374659e3cd8bae4d0", "definitions": [{"id":"video_3F5F8460_2F37_942E_41BE_4DF2C5A2D4C5","label":trans('video_3F5F8460_2F37_942E_41BE_4DF2C5A2D4C5.label'),"video":"this.videores_20B16952_2F2B_7C12_41B0_915646F7ED4C","width":194,"height":366,"thumbnailUrl":"media/video_3F5F8460_2F37_942E_41BE_4DF2C5A2D4C5_t.jpg","data":{"label":"test1"},"class":"Video"},{"id":"video_23CA7F73_2D25_2A7D_418E_1CA02E9B4F57","label":trans('video_23CA7F73_2D25_2A7D_418E_1CA02E9B4F57.label'),"video":"this.videores_20E8FA0D_2EE8_BFF7_41B8_67237B3239DB","width":6080,"height":3040,"thumbnailUrl":"media/video_23CA7F73_2D25_2A7D_418E_1CA02E9B4F57_t.jpg","data":{"label":"video_completed"},"class":"Video"},{"id":"panorama_274D4C5E_2C77_6CC1_41B2_8EF6192A3524","label":trans('panorama_274D4C5E_2C77_6CC1_41B2_8EF6192A3524.label'),"data":{"label":"IMG_20240311_092426_00_merged"},"thumbnailUrl":"media/panorama_274D4C5E_2C77_6CC1_41B2_8EF6192A3524_t.jpg","hfov":360,"hfovMin":"135%","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","colCount":24,"height":2048,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_274D4C5E_2C77_6CC1_41B2_8EF6192A3524_0/{face}/0/{row}_{column}.jpg","width":12288},{"tags":"ondemand","colCount":12,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_274D4C5E_2C77_6CC1_41B2_8EF6192A3524_0/{face}/1/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"colCount":6,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_274D4C5E_2C77_6CC1_41B2_8EF6192A3524_0/{face}/2/{row}_{column}.jpg","width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_274D4C5E_2C77_6CC1_41B2_8EF6192A3524_t.jpg"}],"overlays":["this.overlay_200535A2_2EE8_9432_41B8_39B3F72092D0"],"adjacentPanoramas":[{"panorama":"this.panorama_2098290C_2D23_37AB_41A9_6E1DE1F29D9A","class":"AdjacentPanorama","distance":3.71,"select":"this.overlay_200535A2_2EE8_9432_41B8_39B3F72092D0.get('areas').forEach(function(a){ a.trigger('click') })","yaw":-175,"data":{"overlayID":"overlay_200535A2_2EE8_9432_41B8_39B3F72092D0"},"backwardYaw":-148.99}],"hfovMax":130,"vfov":180},{"id":"video_3E339209_2F29_EFFE_41C0_EBA9B799250E","label":trans('video_3E339209_2F29_EFFE_41C0_EBA9B799250E.label'),"video":"this.videores_20AC2A70_2F2B_7C2D_41A5_31F9B6BC2011","width":194,"height":366,"thumbnailUrl":"media/video_3E339209_2F29_EFFE_41C0_EBA9B799250E_t.jpg","data":{"label":"test2"},"class":"Video"},{"id":"video_3EE4CD12_2EE8_9412_41B8_DDD2000E7599","label":trans('video_3EE4CD12_2EE8_9412_41B8_DDD2000E7599.label'),"video":"this.videores_3E1585F6_2F19_9412_41A4_25C5733D049D","width":216,"height":350,"thumbnailUrl":"media/video_3EE4CD12_2EE8_9412_41B8_DDD2000E7599_t.jpg","data":{"label":"panorama_exported (VR2 Edit 1)-1"},"class":"Video"},{"id":"video_23207948_2D23_77AB_41A2_3C0F15C5D6C4","label":trans('video_23207948_2D23_77AB_41A2_3C0F15C5D6C4.label'),"video":"this.videores_2088C4CE_2EE8_B473_41C2_B2CCEB578019","width":6080,"height":3040,"thumbnailUrl":"media/video_23207948_2D23_77AB_41A2_3C0F15C5D6C4_t.jpg","data":{"label":"video_completed"},"class":"Video"},{"id":"video_20BFD130_2F18_AC2E_41B9_694D449B70E8","label":trans('video_20BFD130_2F18_AC2E_41B9_694D449B70E8.label'),"video":"this.videores_3E1CB7B8_2F19_941D_41BE_E1B2393E8B12","width":216,"height":350,"thumbnailUrl":"media/video_20BFD130_2F18_AC2E_41B9_694D449B70E8_t.jpg","data":{"label":"panorama_exported (VR2 Edit 1)-3"},"class":"Video"},{"id":"video_3F6CB129_2F18_AC3F_41A6_CEA1F28E779D","label":trans('video_3F6CB129_2F18_AC3F_41A6_CEA1F28E779D.label'),"video":"this.videores_3FAFC7E1_2F18_B42E_41A0_1B180D5981A6","width":194,"height":366,"thumbnailUrl":"media/video_3F6CB129_2F18_AC3F_41A6_CEA1F28E779D_t.jpg","data":{"label":"video_final"},"class":"Video"},{"id":"video_3FF329FC_2F18_9C16_4193_D3F54EE741E8","label":trans('video_3FF329FC_2F18_9C16_4193_D3F54EE741E8.label'),"video":"this.videores_3F958E71_2F18_942E_41C5_3368235EBCA5","width":194,"height":366,"thumbnailUrl":"media/video_3FF329FC_2F18_9C16_4193_D3F54EE741E8_t.jpg","data":{"label":"video_final_quality"},"class":"Video"},{"id":"video_3F854177_2F28_AC12_41C2_931FFBBF2D8A","label":trans('video_3F854177_2F28_AC12_41C2_931FFBBF2D8A.label'),"video":"this.videores_3E3BA96F_2F29_BC32_41C2_377050DA4F99","width":5760,"height":2880,"thumbnailUrl":"media/video_3F854177_2F28_AC12_41C2_931FFBBF2D8A_t.jpg","data":{"label":"1"},"class":"Video"},{"id":"video_3E4E0629_2F17_943E_4162_7E46D4AB108D","label":trans('video_3E4E0629_2F17_943E_4162_7E46D4AB108D.label'),"video":"this.videores_3E10A6DF_2F19_9412_41C5_BF55E5766C69","width":216,"height":350,"thumbnailUrl":"media/video_3E4E0629_2F17_943E_4162_7E46D4AB108D_t.jpg","data":{"label":"panorama_exported (VR2 Edit 1)-2"},"class":"Video"},{"id":"MainViewer","subtitlesBackgroundColor":"#000000","progressBarBackgroundColorDirection":"horizontal","subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowHorizontalLength":1,"progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","playbackBarHeadBorderRadius":0,"firstTransitionDuration":0,"data":{"name":"Main Viewer"},"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarBorderSize":0,"subtitlesFontColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderRadius":2,"toolTipTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBottom":5,"toolTipPaddingRight":6,"vrPointerSelectionTime":2000,"toolTipPaddingLeft":6,"width":"100%","progressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColor":["#000000"],"playbackBarHeight":10,"subtitlesTextShadowColor":"#000000","minHeight":50,"minWidth":100,"progressBottom":10,"propagateClick":false,"toolTipFontSize":"1.11vmin","progressHeight":2,"playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"subtitlesFontFamily":"Arial","progressBorderSize":0,"progressLeft":"33%","subtitlesBottom":50,"height":"100%","playbackBarBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarProgressBorderRadius":0,"playbackBarRight":0,"progressBarBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"vrPointerColor":"#FFFFFF","playbackBarLeft":0,"playbackBarHeadShadowOpacity":0.7,"vrThumbstickRotationStep":20,"toolTipFontFamily":"Arial","playbackBarHeadHeight":15,"progressBackgroundColorRatios":[0],"progressBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontSize":"3vmin","class":"ViewerArea","subtitlesTextShadowOpacity":1,"playbackBarProgressBorderColor":"#000000","playbackBarBackgroundOpacity":1,"playbackBarBorderRadius":0,"playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","toolTipFontColor":"#606060","playbackBarHeadBorderSize":0,"progressOpacity":0.7,"progressRight":"33%","subtitlesTop":0,"toolTipShadowColor":"#333138"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_27444654_2C77_7CC1_4160_E1BC74A24B70_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_273AC01E_2C70_9441_41B1_3CD79F299E36"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_2098290C_2D23_37AB_41A9_6E1DE1F29D9A_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_21B10206_2D23_15A7_41C0_FC5C0765377D"},{"id":"panorama_2098290C_2D23_37AB_41A9_6E1DE1F29D9A","label":trans('panorama_2098290C_2D23_37AB_41A9_6E1DE1F29D9A.label'),"data":{"label":"panorama_exported"},"thumbnailUrl":"media/panorama_2098290C_2D23_37AB_41A9_6E1DE1F29D9A_t.jpg","hfov":360,"hfovMin":"135%","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","colCount":24,"height":2048,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_2098290C_2D23_37AB_41A9_6E1DE1F29D9A_0/{face}/0/{row}_{column}.jpg","width":12288},{"tags":"ondemand","colCount":12,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_2098290C_2D23_37AB_41A9_6E1DE1F29D9A_0/{face}/1/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"colCount":6,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_2098290C_2D23_37AB_41A9_6E1DE1F29D9A_0/{face}/2/{row}_{column}.jpg","width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_2098290C_2D23_37AB_41A9_6E1DE1F29D9A_t.jpg"}],"overlays":["this.overlay_200D759E_2EE8_9412_41AB_DCFDADBDB451","this.overlay_200ABE62_2EEB_9432_41B4_25F48CF7250E","this.overlay_3F30CD44_2F18_9476_41A5_691AEC7F8080"],"adjacentPanoramas":[{"panorama":"this.panorama_274D4C5E_2C77_6CC1_41B2_8EF6192A3524","class":"AdjacentPanorama","distance":4.36,"select":"this.overlay_200D759E_2EE8_9412_41AB_DCFDADBDB451.get('areas').forEach(function(a){ a.trigger('click') })","yaw":-148.99,"data":{"overlayID":"overlay_200D759E_2EE8_9412_41AB_DCFDADBDB451"},"backwardYaw":-175},{"panorama":"this.panorama_27444654_2C77_7CC1_4160_E1BC74A24B70","class":"AdjacentPanorama","distance":2,"select":"this.overlay_200ABE62_2EEB_9432_41B4_25F48CF7250E.get('areas').forEach(function(a){ a.trigger('click') })","yaw":68.5,"data":{"overlayID":"overlay_200ABE62_2EEB_9432_41B4_25F48CF7250E"},"backwardYaw":-175.77}],"hfovMax":130,"vfov":180},{"clickAction":"play_pause","id":"MainViewerVideoPlayer","class":"VideoPlayer","displayPlaybackBar":true,"displayPlayOverlay":true,"viewerArea":"this.MainViewer"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_274D4C5E_2C77_6CC1_41B2_8EF6192A3524_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_273AA01E_2C70_9441_41C1_FC7EB779B155"},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_274D4C5E_2C77_6CC1_41B2_8EF6192A3524_camera","media":"this.panorama_274D4C5E_2C77_6CC1_41B2_8EF6192A3524","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_27444654_2C77_7CC1_4160_E1BC74A24B70_camera","media":"this.panorama_27444654_2C77_7CC1_4160_E1BC74A24B70","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_2098290C_2D23_37AB_41A9_6E1DE1F29D9A_camera","media":"this.panorama_2098290C_2D23_37AB_41A9_6E1DE1F29D9A","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 3, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 3)","media":"this.video_23CA7F73_2D25_2A7D_418E_1CA02E9B4F57","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 0)"}]},{"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","class":"PanoramaPlayer","displayPlaybackBar":true,"touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer"},{"id":"video_23165B6F_2EE9_9C32_41B7_CA878617EC70","label":trans('video_23165B6F_2EE9_9C32_41B7_CA878617EC70.label'),"video":"this.videores_207C8B8A_2EE9_7CF2_41C2_7176BD7AA27D","width":308,"height":584,"thumbnailUrl":"media/video_23165B6F_2EE9_9C32_41B7_CA878617EC70_t.jpg","data":{"label":"panorama_exported (VR2 Edit 1)"},"class":"Video"},{"id":"panorama_27444654_2C77_7CC1_4160_E1BC74A24B70","label":trans('panorama_27444654_2C77_7CC1_4160_E1BC74A24B70.label'),"data":{"label":"IMG_20240311_092541_00_merged"},"thumbnailUrl":"media/panorama_27444654_2C77_7CC1_4160_E1BC74A24B70_t.jpg","hfov":360,"hfovMin":"135%","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","colCount":24,"height":2048,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_27444654_2C77_7CC1_4160_E1BC74A24B70_0/{face}/0/{row}_{column}.jpg","width":12288},{"tags":"ondemand","colCount":12,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_27444654_2C77_7CC1_4160_E1BC74A24B70_0/{face}/1/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"colCount":6,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_27444654_2C77_7CC1_4160_E1BC74A24B70_0/{face}/2/{row}_{column}.jpg","width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_27444654_2C77_7CC1_4160_E1BC74A24B70_t.jpg"}],"overlays":["this.overlay_2010DE61_2EEB_942E_41C1_4BDA21FB21E2"],"adjacentPanoramas":[{"panorama":"this.panorama_2098290C_2D23_37AB_41A9_6E1DE1F29D9A","class":"AdjacentPanorama","distance":2.04,"select":"this.overlay_2010DE61_2EEB_942E_41C1_4BDA21FB21E2.get('areas').forEach(function(a){ a.trigger('click') })","yaw":-175.77,"data":{"overlayID":"overlay_2010DE61_2EEB_942E_41C1_4BDA21FB21E2"},"backwardYaw":68.5}],"hfovMax":130,"vfov":180},{"id":"videores_20B16952_2F2B_7C12_41B0_915646F7ED4C","height":366,"class":"VideoResource","levels":["this.videolevel_3DA61A94_2F6F_BC16_41B1_3715C0D2886D"],"width":194},{"id":"videores_20E8FA0D_2EE8_BFF7_41B8_67237B3239DB","height":2036,"class":"VideoResource","levels":["this.videolevel_3DAA4953_2F6F_BC12_41C7_69BA26EDC3B4"],"width":4072},{"id":"overlay_200535A2_2EE8_9432_41B8_39B3F72092D0","class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":100,"pitch":-24.63,"hfov":10.5,"yaw":-175,"image":"this.AnimatedImageResource_3DBA0B6B_2F6F_BC32_413D_17B271A4AFA8","vfov":4.67,"data":{"label":"GoToPanorama_exported"},"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_3E3A890F_2F19_9DF2_417E_85A3F133256C"],"data":{"label":"GoToPanorama_exported","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"videores_20AC2A70_2F2B_7C2D_41A5_31F9B6BC2011","height":366,"class":"VideoResource","levels":["this.videolevel_3DA68AC7_2F6F_BC73_41BF_32794E6A891A"],"width":194},{"id":"videores_3E1585F6_2F19_9412_41A4_25C5733D049D","height":350,"class":"VideoResource","levels":["this.videolevel_3DAB89D6_2F6F_BC12_41A3_9061EDFC3972"],"width":216},{"id":"videores_2088C4CE_2EE8_B473_41C2_B2CCEB578019","height":2036,"class":"VideoResource","levels":["this.videolevel_3DAAD978_2F6F_BC1D_41B8_5A64B8A47BB6"],"width":4072},{"id":"videores_3E1CB7B8_2F19_941D_41BE_E1B2393E8B12","height":350,"class":"VideoResource","levels":["this.videolevel_3DA57A30_2F6F_BC2E_41B9_FCD97998AC69"],"width":216},{"id":"videores_3FAFC7E1_2F18_B42E_41A0_1B180D5981A6","height":366,"class":"VideoResource","levels":["this.videolevel_3DA7EAF7_2F6F_BC12_41C0_2B56165C7C44"],"width":194},{"id":"videores_3F958E71_2F18_942E_41C5_3368235EBCA5","height":366,"class":"VideoResource","levels":["this.videolevel_3DA0FB29_2F6F_BC3F_41AB_27BC57CB4BBB"],"width":194},{"id":"videores_3E3BA96F_2F29_BC32_41C2_377050DA4F99","height":2036,"class":"VideoResource","levels":["this.videolevel_3DA5CA60_2F6F_BC2E_41C3_8E0DFF000181"],"width":4072},{"id":"videores_3E10A6DF_2F19_9412_41C5_BF55E5766C69","height":350,"class":"VideoResource","levels":["this.videolevel_3DA419FC_2F6F_BC15_41C1_7C234FA4670A"],"width":216},{"id":"sequence_273AC01E_2C70_9441_41B1_3CD79F299E36","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_21B10206_2D23_15A7_41C0_FC5C0765377D","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"overlay_200D759E_2EE8_9412_41AB_DCFDADBDB451","class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":100,"pitch":-21.31,"hfov":10.5,"yaw":-148.99,"image":"this.AnimatedImageResource_3DBA9B6C_2F6F_BC36_41B0_28E725A61F07","vfov":4.67,"data":{"label":"GoToImg_20240311_092426_00_merged"},"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_21A405E6_2EE8_9432_4198_53C6C8FE31D2"],"data":{"label":"GoToImg_20240311_092426_00_merged","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"overlay_200ABE62_2EEB_9432_41B4_25F48CF7250E","class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":100,"pitch":-40.41,"hfov":10.5,"yaw":68.5,"image":"this.AnimatedImageResource_3DBB4B6C_2F6F_BC36_41B1_E060410387EE","vfov":4.67,"data":{"label":"GoToImg_20240311_092541_00_merged"},"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_3E479911_2F19_9DEE_41C3_2F3EF2CF11E4"],"data":{"label":"GoToImg_20240311_092541_00_merged","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"overlay_3F30CD44_2F18_9476_41A5_691AEC7F8080","video":"this.videores_3F958E71_2F18_942E_41C5_3368235EBCA5","vertices":[{"yaw":-14.02,"class":"PanoramaPoint","pitch":14.77},{"yaw":6.58,"class":"PanoramaPoint","pitch":14.74},{"yaw":7.95,"class":"PanoramaPoint","pitch":-21.79},{"yaw":-13,"class":"PanoramaPoint","pitch":-22.11}],"data":{"label":"Video"},"image":"this.res_3F8329BE_2F18_9C12_41BC_A7CFD63249D2","click":"this.overlay_3F30CD44_2F18_9476_41A5_691AEC7F8080.play()","class":"QuadVideoPanoramaOverlay","distance":50,"useHandCursor":true,"blending":0.1,"cues":[]},{"id":"sequence_273AA01E_2C70_9441_41C1_FC7EB779B155","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"videores_207C8B8A_2EE9_7CF2_41C2_7176BD7AA27D","height":584,"class":"VideoResource","levels":["this.videolevel_3DAB39A9_2F6F_BC3E_416D_713DC92ED6B4"],"width":308},{"id":"overlay_2010DE61_2EEB_942E_41C1_4BDA21FB21E2","class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":100,"pitch":-39.79,"hfov":10.5,"yaw":-175.77,"image":"this.AnimatedImageResource_3DBAAB6C_2F6F_BC36_41C6_53B35882CF48","vfov":4.67,"data":{"label":"GoToPanorama_exported"},"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_21FC7E68_2EEB_943E_41B0_160FF9945334"],"data":{"label":"GoToPanorama_exported","hasPanoramaAction":true},"enabledInCardboard":true},{"posterURL":trans('videolevel_3DA61A94_2F6F_BC16_41B1_3715C0D2886D.posterURL'),"id":"videolevel_3DA61A94_2F6F_BC16_41B1_3715C0D2886D","height":366,"class":"VideoResourceLevel","framerate":29.97,"type":"video/mp4","bitrate":159,"url":trans('videolevel_3DA61A94_2F6F_BC16_41B1_3715C0D2886D.url'),"codec":"h264","width":194},{"posterURL":trans('videolevel_3DAA4953_2F6F_BC12_41C7_69BA26EDC3B4.posterURL'),"id":"videolevel_3DAA4953_2F6F_BC12_41C7_69BA26EDC3B4","height":2036,"class":"VideoResourceLevel","framerate":29.97,"type":"video/mp4","bitrate":9864,"url":trans('videolevel_3DAA4953_2F6F_BC12_41C7_69BA26EDC3B4.url'),"codec":"h264","width":4072},{"id":"AnimatedImageResource_3DBA0B6B_2F6F_BC32_413D_17B271A4AFA8","frameCount":20,"class":"AnimatedImageResource","rowCount":5,"finalFrame":"first","frameDuration":41,"levels":[{"height":555,"class":"ImageResourceLevel","url":"media/res_3FF52F17_2F19_B413_4197_FED55D1E0997_0.png","width":1000}],"colCount":4},{"id":"HotspotPanoramaOverlayArea_3E3A890F_2F19_9DF2_417E_85A3F133256C","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)"},{"posterURL":trans('videolevel_3DA68AC7_2F6F_BC73_41BF_32794E6A891A.posterURL'),"id":"videolevel_3DA68AC7_2F6F_BC73_41BF_32794E6A891A","height":366,"class":"VideoResourceLevel","framerate":29.97,"type":"video/mp4","bitrate":159,"url":trans('videolevel_3DA68AC7_2F6F_BC73_41BF_32794E6A891A.url'),"codec":"h264","width":194},{"posterURL":trans('videolevel_3DAB89D6_2F6F_BC12_41A3_9061EDFC3972.posterURL'),"id":"videolevel_3DAB89D6_2F6F_BC12_41A3_9061EDFC3972","height":350,"class":"VideoResourceLevel","framerate":29.97,"type":"video/mp4","bitrate":169,"url":trans('videolevel_3DAB89D6_2F6F_BC12_41A3_9061EDFC3972.url'),"codec":"h264","width":216},{"posterURL":trans('videolevel_3DAAD978_2F6F_BC1D_41B8_5A64B8A47BB6.posterURL'),"id":"videolevel_3DAAD978_2F6F_BC1D_41B8_5A64B8A47BB6","height":2036,"class":"VideoResourceLevel","framerate":29.97,"type":"video/mp4","bitrate":9864,"url":trans('videolevel_3DAAD978_2F6F_BC1D_41B8_5A64B8A47BB6.url'),"codec":"h264","width":4072},{"posterURL":trans('videolevel_3DA57A30_2F6F_BC2E_41B9_FCD97998AC69.posterURL'),"id":"videolevel_3DA57A30_2F6F_BC2E_41B9_FCD97998AC69","height":350,"class":"VideoResourceLevel","framerate":29.97,"type":"video/mp4","bitrate":169,"url":trans('videolevel_3DA57A30_2F6F_BC2E_41B9_FCD97998AC69.url'),"codec":"h264","width":216},{"posterURL":trans('videolevel_3DA7EAF7_2F6F_BC12_41C0_2B56165C7C44.posterURL'),"id":"videolevel_3DA7EAF7_2F6F_BC12_41C0_2B56165C7C44","height":366,"class":"VideoResourceLevel","framerate":29.97,"type":"video/mp4","bitrate":159,"url":trans('videolevel_3DA7EAF7_2F6F_BC12_41C0_2B56165C7C44.url'),"codec":"h264","width":194},{"posterURL":trans('videolevel_3DA0FB29_2F6F_BC3F_41AB_27BC57CB4BBB.posterURL'),"id":"videolevel_3DA0FB29_2F6F_BC3F_41AB_27BC57CB4BBB","height":366,"class":"VideoResourceLevel","framerate":29.97,"type":"video/mp4","bitrate":159,"url":trans('videolevel_3DA0FB29_2F6F_BC3F_41AB_27BC57CB4BBB.url'),"codec":"h264","width":194},{"posterURL":trans('videolevel_3DA5CA60_2F6F_BC2E_41C3_8E0DFF000181.posterURL'),"id":"videolevel_3DA5CA60_2F6F_BC2E_41C3_8E0DFF000181","height":2036,"class":"VideoResourceLevel","framerate":29.97,"type":"video/mp4","bitrate":18635,"url":trans('videolevel_3DA5CA60_2F6F_BC2E_41C3_8E0DFF000181.url'),"codec":"h264","width":4072},{"posterURL":trans('videolevel_3DA419FC_2F6F_BC15_41C1_7C234FA4670A.posterURL'),"id":"videolevel_3DA419FC_2F6F_BC15_41C1_7C234FA4670A","height":350,"class":"VideoResourceLevel","framerate":29.97,"type":"video/mp4","bitrate":169,"url":trans('videolevel_3DA419FC_2F6F_BC15_41C1_7C234FA4670A.url'),"codec":"h264","width":216},{"id":"AnimatedImageResource_3DBA9B6C_2F6F_BC36_41B0_28E725A61F07","frameCount":20,"class":"AnimatedImageResource","rowCount":5,"finalFrame":"first","frameDuration":41,"levels":[{"height":555,"class":"ImageResourceLevel","url":"media/res_3FF52F17_2F19_B413_4197_FED55D1E0997_0.png","width":1000}],"colCount":4},{"id":"HotspotPanoramaOverlayArea_21A405E6_2EE8_9432_4198_53C6C8FE31D2","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"AnimatedImageResource_3DBB4B6C_2F6F_BC36_41B1_E060410387EE","frameCount":20,"class":"AnimatedImageResource","rowCount":5,"finalFrame":"first","frameDuration":41,"levels":[{"height":555,"class":"ImageResourceLevel","url":"media/res_3FF52F17_2F19_B413_4197_FED55D1E0997_0.png","width":1000}],"colCount":4},{"id":"HotspotPanoramaOverlayArea_3E479911_2F19_9DEE_41C3_2F3EF2CF11E4","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"id":"res_3F8329BE_2F18_9C12_41BC_A7CFD63249D2","class":"ImageResource","levels":[{"height":366,"class":"ImageResourceLevel","url":"media/res_3F8329BE_2F18_9C12_41BC_A7CFD63249D2_0.jpg","width":194}]},{"posterURL":trans('videolevel_3DAB39A9_2F6F_BC3E_416D_713DC92ED6B4.posterURL'),"id":"videolevel_3DAB39A9_2F6F_BC3E_416D_713DC92ED6B4","height":584,"class":"VideoResourceLevel","framerate":29.97,"type":"video/mp4","bitrate":404,"url":trans('videolevel_3DAB39A9_2F6F_BC3E_416D_713DC92ED6B4.url'),"codec":"h264","width":308},{"id":"AnimatedImageResource_3DBAAB6C_2F6F_BC36_41C6_53B35882CF48","frameCount":20,"class":"AnimatedImageResource","rowCount":5,"finalFrame":"first","frameDuration":41,"levels":[{"height":555,"class":"ImageResourceLevel","url":"media/res_3FF52F17_2F19_B413_4197_FED55D1E0997_0.png","width":1000}],"colCount":4},{"id":"HotspotPanoramaOverlayArea_21FC7E68_2EEB_943E_41B0_160FF9945334","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)"}],"height":"100%","layout":"absolute","scripts":{"downloadFile":TDV.Tour.Script.downloadFile,"resumePlayers":TDV.Tour.Script.resumePlayers,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPixels":TDV.Tour.Script.getPixels,"initQuiz":TDV.Tour.Script.initQuiz,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"isPanorama":TDV.Tour.Script.isPanorama,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showWindow":TDV.Tour.Script.showWindow,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getOverlays":TDV.Tour.Script.getOverlays,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getKey":TDV.Tour.Script.getKey,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"translate":TDV.Tour.Script.translate,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"mixObject":TDV.Tour.Script.mixObject,"shareSocial":TDV.Tour.Script.shareSocial,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"init":TDV.Tour.Script.init,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"createTween":TDV.Tour.Script.createTween,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizFinish":TDV.Tour.Script.quizFinish,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setLocale":TDV.Tour.Script.setLocale,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"historyGoBack":TDV.Tour.Script.historyGoBack,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"clone":TDV.Tour.Script.clone,"executeJS":TDV.Tour.Script.executeJS,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getComponentByName":TDV.Tour.Script.getComponentByName,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizStart":TDV.Tour.Script.quizStart,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"startMeasurement":TDV.Tour.Script.startMeasurement,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"initAnalytics":TDV.Tour.Script.initAnalytics,"unregisterKey":TDV.Tour.Script.unregisterKey,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"registerKey":TDV.Tour.Script.registerKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"playAudioList":TDV.Tour.Script.playAudioList,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setValue":TDV.Tour.Script.setValue,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"openLink":TDV.Tour.Script.openLink,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMediaByName":TDV.Tour.Script.getMediaByName,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"existsKey":TDV.Tour.Script.existsKey,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags},"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.10.js.map
})();
//Generated with v2023.2.10, Mon Mar 11 2024