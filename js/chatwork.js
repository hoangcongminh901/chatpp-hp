/*
 ChatWork http://www.chatwork.com/
 Copyright (c) 2015 ChatWork,Inc.

 -- Using Libraries. thanks a lot! --

 Modernizr 2.6.2 (Custom Build) | MIT & BSD
 Build: http://modernizr.com/download/#-svg-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load

 --

 jQuery.ScrollTo
 Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 Dual licensed under MIT and GPL.
 Date: 12/14/2012

 --

 jQuery JSONP Core Plugin 2.4.0 (2012-08-21)

 https://github.com/jaubourg/jquery-jsonp

 Copyright (c) 2012 Julian Aubourg

 This document is licensed as free software under the terms of the
 MIT License: http://www.opensource.org/licenses/mit-license.php

 --

 jQuery JSON Plugin
 version: 2.3 (2011-09-17)

 This document is licensed as free software under the terms of the
 MIT License: http://www.opensource.org/licenses/mit-license.php

 Brantley Harris wrote this plugin. It is based somewhat on the JSON.org
 website's http://www.json.org/json2.js, which proclaims:
 "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 I uphold.

 It is also influenced heavily by MochiKit's serializeJSON, which is
 copyrighted 2005 by Bob Ippolito.

 --

 jQuery Cookie Plugin v1.3.1
 https://github.com/carhartl/jquery-cookie

 Copyright 2013 Klaus Hartl
 Released under the MIT license

 --

 zeroclipboard
 The Zero Clipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie, and a JavaScript interface.
 Copyright 2012 Jon Rohan, James M. Greene, .
 Released under the MIT license
 http://jonrohan.github.com/ZeroClipboard/
 v1.1.7

 --



 JavaScript MD5 1.0.1
 https://github.com/blueimp/JavaScript-MD5

 Copyright 2011, Sebastian Tschan
 https://blueimp.net

 Licensed under the MIT license:
 http://www.opensource.org/licenses/MIT

 Based on
 A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 Digest Algorithm, as defined in RFC 1321.
 Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 Distributed under the BSD License
 See http://pajhome.org.uk/crypt/md5 for more info.
*/
var L = {
    _chatwork_file_upload_eset_link: "\u63a8\u5968\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30bd\u30d5\u30c8",
    emoticon_smile: "\u7b11\u9854",
    emoticon_sad: "\u60b2\u3057\u3044",
    emoticon_more_smile: "\u3082\u3063\u3068\u30b9\u30de\u30a4\u30eb",
    emoticon_lucky: "\u3084\u3063\u305f\u306d",
    emoticon_surprise: "\u3073\u3063\u304f\u308a",
    emoticon_wink: "\u30a6\u30a3\u30f3\u30af",
    emoticon_tears: "\u30a6\u30a7\uff5e\u3093",
    emoticon_sweat: "\u6c57",
    emoticon_mumu: "\u3080\u3080",
    emoticon_kiss: "\u30c1\u30e5\uff01",
    emoticon_tongueout: "\u3079\u30fc",
    emoticon_blush: "\u6065\u305a\u304b\u3057\u3044",
    emoticon_wonder: "\u4f55\u306a\u306b",
    emoticon_snooze: "\u7720\u3044",
    emoticon_love: "\u604b\u3057\u3066\u307e\u3059",
    emoticon_grin: "\u30cb\u30e4\u30c3",
    emoticon_talk: "\u8a71\u3059",
    emoticon_yawn: "\u3042\u304f\u3073",
    emoticon_puke: "\u30b2\u30fc\u30c3",
    emoticon_ikemen: "\u30a4\u30b1\u30e1\u30f3",
    emoticon_otaku: "\u30aa\u30bf\u30af",
    emoticon_ninmari: "\u30cb\u30f3\u30de\u30ea",
    emoticon_nod: "\u3046\u3093\u3046\u3093",
    emoticon_shake: "\u3044\u3084\u3044\u3084",
    emoticon_wry_smile: "\u82e6\u7b11\u3044",
    emoticon_whew: "\u3084\u308c\u3084\u308c",
    emoticon_clap: "\u62cd\u624b",
    emoticon_bow: "\u304a\u3058\u304e",
    emoticon_roger: "\u4e86\u89e3\uff01",
    emoticon_muscle: "\u7b4b\u8089\u30e2\u30ea\u30e2\u30ea",
    emoticon_dance: "\u30c0\u30f3\u30b9",
    emoticon_komanechi: "\u30b3\u30de\u30cd\u30c1",
    emoticon_devil: "\u60aa\u9b54",
    emoticon_star: "\u661f",
    emoticon_heart: "\u30cf\u30fc\u30c8",
    emoticon_flower: "\u82b1",
    emoticon_cracker: "\u30af\u30e9\u30c3\u30ab\u30fc",
    emoticon_cake: "\u30b1\u30fc\u30ad",
    emoticon_coffee: "\u30b3\u30fc\u30d2\u30fc",
    emoticon_beer: "\u30d3\u30fc\u30eb",
    emoticon_handshake: "\u63e1\u624b",
    emoticon_yes: "\u306f\u3044",
    emoticon_ec14: "EC14",
    raise_error: "\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f",
    deleted_user: "\u89e3\u7d04\u6e08\u30e6\u30fc\u30b6\u30fc",
    nickname_prefix: "",
    nickname_suffix: "\u3055\u3093",
    dateformat: "Y\u5e74m\u6708d\u65e5",
    chatroom_error_no_member: "\u81ea\u5206\u304c\u30e1\u30f3\u30d0\u30fc\u306b\u5165\u3063\u3066\u3044\u306a\u3044\u30c1\u30e3\u30c3\u30c8\u306e\u305f\u3081\u3001\u8868\u793a\u3067\u304d\u307e\u305b\u3093",
    chat_category_allchat: "\u3059\u3079\u3066\u306e\u30c1\u30e3\u30c3\u30c8",
    directchat: "\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8",
    groupchat: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8",
    chat_category_mytaskchat: "\u30de\u30a4\u30bf\u30b9\u30af\u304c\u3042\u308b\u30c1\u30e3\u30c3\u30c8",
    notifier_newmessage: "\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5c4a\u304d\u307e\u3057\u305f",
    joinpublicchat_request_sent: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306e\u7ba1\u7406\u8005\u3078\u53c2\u52a0\u4f9d\u983c\u3092\u9001\u308a\u307e\u3057\u305f\u3002\u7ba1\u7406\u8005\u304c\u627f\u8a8d\u3059\u308b\u3068\u3001\u305d\u306e\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u53c2\u52a0\u3067\u304d\u307e\u3059\u3002",
    mychat: "\u30de\u30a4\u30c1\u30e3\u30c3\u30c8",
    chatsend_quote: "\u5f15\u7528",
    chatsend_reply: "\u8fd4\u4fe1",
    chatroom_not_only_internal: "\u7d44\u7e54\u5916\u30e6\u30fc\u30b6\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u30c1\u30e3\u30c3\u30c8",
    pin_hint: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u3092\u30d4\u30f3\u7559\u3081\u3057\u3066\u30c1\u30e3\u30c3\u30c8\u4e00\u89a7\u306e\u4e0a\u306b\u56fa\u5b9a\u3067\u304d\u307e\u3059",
    menu_feedback: "\u3054\u610f\u898b\u30fb\u3054\u8981\u671b",
    button_send: "\u9001\u4fe1",
    button_cancel: "\u30ad\u30e3\u30f3\u30bb\u30eb",
    sending: "\u9001\u4fe1\u4e2d...",
    live_call_direct: "%%name%%\u3055\u3093\u304b\u3089ChatWork Live\u306b\u62db\u5f85\u3055\u308c\u3066\u3044\u307e\u3059",
    live_call_chat: "%%chat_name%%\u306eChatWork Live\u306b\u62db\u5f85\u3055\u308c\u3066\u3044\u307e\u3059",
    button_ok: "OK",
    button_delete_long: "\u524a\u9664\u3059\u308b",
    newbrowser_title: "\u6700\u65b0\u306e\u30d6\u30e9\u30a6\u30b6\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044",
    button_close: "\u9589\u3058\u308b",
    contact_cwid_error_myself: "\u81ea\u5206\u81ea\u8eab\u3092\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093",
    contact_cwid_error_already: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID:%%chatwork_id%% \u306f\u3059\u3067\u306b\u30b3\u30f3\u30bf\u30af\u30c8\u8ffd\u52a0\u6e08\u307f\u3067\u3059",
    contact_cwid_error_noexist: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID:%%chatwork_id%% \u306f\u5b58\u5728\u3057\u307e\u305b\u3093",
    chatwork_update: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3055\u308c\u307e\u3057\u305f\u3002\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u53cd\u6620\u3055\u305b\u308b\u306b\u306f\u30d6\u30e9\u30a6\u30b6\u3092\u518d\u8aad\u307f\u8fbc\u307f(\u66f4\u65b0)\u3057\u3066\u304f\u3060\u3055\u3044",
    chatwork_do_update: "\u6700\u65b0\u7248\u3078\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",
    connection_error_logout: "\u73fe\u5728\u30ed\u30b0\u30a2\u30a6\u30c8\u3055\u308c\u3066\u3044\u307e\u3059",
    error_cant_login_ip: "\u3053\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af(IP\u30a2\u30c9\u30ec\u30b9)\u304b\u3089\u306e\u30a2\u30af\u30bb\u30b9\u306f\u3001\u7ba1\u7406\u8005\u8a2d\u5b9a\u306b\u3088\u308a\u8a31\u53ef\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u8a31\u53ef\u3055\u308c\u3066\u3044\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304b\u3089\u63a5\u7d9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    connection_error_invalid_user: "\u73fe\u5728\u5225\u306e\u30e6\u30fc\u30b6\u30fc\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u3059",
    connection_error_offline: "\u73fe\u5728\u30aa\u30d5\u30e9\u30a4\u30f3\u306b\u306a\u3063\u3066\u3044\u307e\u3059",
    live_join: "ChatWork Live\u3092\u958b\u59cb",
    preview_video: "\u30d7\u30ec\u30d3\u30e5\u30fc",
    preview: "\u30d7\u30ec\u30d3\u30e5\u30fc",
    message_open_message: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",
    message_link: "\u30e1\u30c3\u30bb\u30fc\u30b8\u30ea\u30f3\u30af",
    message_open_chat: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u3078\u79fb\u52d5",
    message_join_groupchat: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u53c2\u52a0",
    message_open_mindmanager: "MindManager\u3067\u958b\u304f",
    contact_error_cantadd: "\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
    contact_error_planlimit: "%%plan_name%%\u3067\u306f%%limit_num%%\u4eba\u307e\u3067\u3057\u304b\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002<br>\u65b0\u3057\u304f\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u3054\u691c\u8a0e\u304f\u3060\u3055\u3044\u3002",
    storage_cancel_send_object: "\u9001\u4fe1\u3057\u3088\u3046\u3068\u3057\u305f%%object%%\u306f\u3001\u73fe\u5728\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u8d85\u3048\u308b%%object%%\u30b5\u30a4\u30ba\u306e\u305f\u3081\u3001\u9001\u4fe1\u304c\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u307e\u3057\u305f\u3002<br /><br />\u3053\u306e%%object%%\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406\u3088\u308a\u4e0d\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664\u3092\u884c\u3046\u304b\u3001",
    storage_cancel_send_cancel: "%%object%%\u304c\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
    tutorial_addbutton: "\u3053\u3053\u304b\u3089\u65b0\u3057\u304f\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u305f\u308a\u3001\u77e5\u308a\u5408\u3044\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059",
    tutorial_globalsearch: "\u3053\u3053\u304b\u3089\u30c1\u30e3\u30c3\u30c8\u540d\u306e\u691c\u7d22\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9\u306e\u691c\u7d22\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059",
    tutorial_send_message: "\u3053\u3053\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059",
    tutorial_add_task: "\u3053\u3053\u304b\u3089\u65b0\u3057\u3044\u30bf\u30b9\u30af\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059",
    button_complete: "\u5b8c\u4e86",
    storage_cancel_send_object_suffix_upgrade: "\u73fe\u5728\u306e\u5229\u7528\u30d7\u30e9\u30f3\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    storage_cancel_upgrade_label: "\u5229\u7528\u30d7\u30e9\u30f3\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",
    storage_cancel_send_object_suffix_tell_admin: "\u3054\u5229\u7528\u30d7\u30e9\u30f3\u306e\u7ba1\u7406\u8005\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002",
    storage_cancel_send_object_suffix_add_storage: "\u8ffd\u52a0\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002",
    storage_cancel_add_storage_label: "\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u8ffd\u52a0",
    open_website: "\u30b5\u30a4\u30c8\u3092\u958b\u304f",
    preview_needlogin: "(\u8868\u793a\u3059\u308b\u306b\u306fGoogle\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059)",
    open_window: "\u5225\u30a6\u30a4\u30f3\u30c9\u30a6\u3067\u958b\u304f",
    loading: "\u8aad\u307f\u8fbc\u307f\u4e2d...",
    pager_prev: "\u524d\u306e\u30da\u30fc\u30b8\u3078\u79fb\u52d5",
    pager_next: "\u6b21\u306e\u30da\u30fc\u30b8\u3078\u79fb\u52d5",
    contact_request_message_default: "\u30b3\u30f3\u30bf\u30af\u30c8\u627f\u8a8d\u3092\u304a\u9858\u3044\u3057\u307e\u3059",
    contact_invite_message_default: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u62db\u5f85\u3057\u307e\u3057\u305f\u3002\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u7121\u6599\u3067\u5229\u7528\u3067\u304d\u308b\u30af\u30e9\u30a6\u30c9\u578b\u30d3\u30b8\u30cd\u30b9\u30c1\u30e3\u30c3\u30c8\u30c4\u30fc\u30eb\u3067\u3059\u3002\u65b0\u898f\u767b\u9332\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002",
    contact_confirm_reject_request: "\u672c\u5f53\u306b\u300c%%name%%\u300d\u304b\u3089\u306e\u627f\u8a8d\u4f9d\u983c\u3092\u62d2\u5426\u3057\u307e\u3059\u304b\uff1f",
    contact_confirm_delete: "\u672c\u5f53\u306b\u300c%%name%%\u300d\u3092\u30b3\u30f3\u30bf\u30af\u30c8\u304b\u3089\u524a\u9664\u3057\u307e\u3059\u304b\uff1f\n\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8\u3082\u540c\u6642\u306b\u524a\u9664\u3055\u308c\u307e\u3059\u3002\u203b\u5143\u306b\u623b\u305b\u307e\u305b\u3093\uff01",
    profile_image_limit: "(\u6700\u5927 700KB\u307e\u3067\u3002JPEG,GIF,PNG\u304c\u4f7f\u3048\u307e\u3059)",
    saving: "\u4fdd\u5b58\u4e2d...",
    profile_setting_privacy_public: "\u516c\u958b",
    profile_setting_privacy_contact: "\u30b3\u30f3\u30bf\u30af\u30c8\u306e\u307f",
    error_maxlength: "%%length%%\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
    error_invalidchar: "\u534a\u89d2\u306e\u82f1\u6570\u5b57\u3068 - _ \u306e\u307f\u4f7f\u7528\u3067\u304d\u307e\u3059",
    error_already_used: "\u3059\u3067\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059",
    available: "\u4f7f\u7528\u3067\u304d\u307e\u3059",
    contact_myrequest: "\u30b3\u30f3\u30bf\u30af\u30c8\u627f\u8a8d\u4f9d\u983c",
    contact_invite: "\u62db\u5f85\u30e1\u30fc\u30eb\u306e\u9001\u4fe1",
    word_separator: "\u30fb",
    contact_is_completed: "\u3092\u3057\u307e\u3057\u305f",
    button_save_long: "\u4fdd\u5b58\u3059\u308b",
    profile_error_no_displayname: "\u8868\u793a\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
    profile_error_invalid_cwid: "\u4f7f\u7528\u3067\u304d\u306a\u3044\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059",
    menu_contact_admin: "\u30b3\u30f3\u30bf\u30af\u30c8\u7ba1\u7406",
    contact_doing_invite: "\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u3066\u3044\u307e\u3059...",
    contact_done_invite: "\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f",
    canceling: "\u30ad\u30e3\u30f3\u30bb\u30eb\u4e2d...",
    contact_multi_delete_confirm: "%%num%%\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u3092\u30b3\u30f3\u30bf\u30af\u30c8\u304b\u3089\u524a\u9664\u3057\u307e\u3059\u3002\n\u30b3\u30f3\u30bf\u30af\u30c8\u304b\u3089\u524a\u9664\u3059\u308b\u3068\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8\u3082\u540c\u6642\u306b\u524a\u9664\u3055\u308c\u3001\u5143\u306b\u623b\u3059\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\n\u672c\u5f53\u306b\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    deleting: "\u524a\u9664\u4e2d...",
    accepting: "\u627f\u8a8d\u4e2d...",
    contact_multi_adding: "\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0\u3057\u3066\u3044\u307e\u3059...",
    contact_multi_add_confirm: "%%num%%\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u3092\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002\u672c\u5f53\u306b\u8ffd\u52a0\u3057\u307e\u3059\u304b\uff1f",
    contact_rest_number: "...\u4ed6%%rest_number%%\u4ef6",
    contact_error_is_not_mailaddress: "\u306f\n\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093",
    contact_error_is_over_contactnum: "\u306f\n\u5229\u7528\u3057\u3066\u3044\u308b\u30d7\u30e9\u30f3\u306e\u30b3\u30f3\u30bf\u30af\u30c8\u6570\u5236\u9650\u3092\u8d8a\u3048\u3066\u3044\u308b\u305f\u3081\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002",
    contact_error_is_disable_external: "\u306f\n\u7d44\u7e54\u5916\u30e6\u30fc\u30b6\u30fc\u3068\u306e\u3084\u308a\u3068\u308a\u304c\u7981\u6b62\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093",
    contact_search_introduction: "\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0\u3057\u305f\u3044\u30e6\u30fc\u30b6\u30fc\u3092\u691c\u7d22\u3057\u307e\u3057\u3087\u3046",
    contact_search_placeholder: "\u540d\u524d\u3001\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID\u3001\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b",
    contact_search_not_found: "\u73fe\u5728\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u306a\u3063\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u306f\u3044\u307e\u305b\u3093",
    contact_search: "\u30b3\u30f3\u30bf\u30af\u30c8\u540d\u3092\u691c\u7d22",
    contact_add_all_hint: "\u81ea\u5206\u3068\u540c\u3058\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306b\u3044\u308b\u3001\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0\u3057\u3066\u3044\u306a\u3044\u30e1\u30f3\u30d0\u30fc\u3067\u3059",
    contact_error_search_user_not_found: "\u8a72\u5f53\u30e6\u30fc\u30b6\u30fc\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f",
    contact_mail_not_found: "\u6307\u5b9a\u3055\u308c\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u306f\u5b58\u5728\u3057\u307e\u305b\u3093\u3002<br />\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u306e\u767b\u9332\u3092\u6848\u5185\u3059\u308b\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u3053\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u9001\u4fe1\u3057\u307e\u3059\u304b\uff1f",
    contact_do_invite: "\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u9001\u4fe1",
    profile_chatworkidtip: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID\uff1a",
    profile_edit: "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3092\u7de8\u96c6",
    menu_profile_setting: "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb",
    button_delete: "\u524a\u9664",
    contact_delete: "\u30b3\u30f3\u30bf\u30af\u30c8\u304b\u3089\u524a\u9664",
    contact_request_cancel: "\u627f\u8a8d\u4f9d\u983c\u3092\u30ad\u30e3\u30f3\u30bb\u30eb",
    button_accept: "\u627f\u8a8d",
    button_reject: "\u62d2\u5426",
    button_accept_long: "\u627f\u8a8d\u3059\u308b",
    button_reject_long: "\u62d2\u5426\u3059\u308b",
    button_add: "\u8ffd\u52a0",
    contactpanel_add_contact: "\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0",
    menu_personal_setting: "\u52d5\u4f5c\u8a2d\u5b9a",
    sound_no_support: "\u3053\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u901a\u77e5\u97f3\u306e\u518d\u751f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n(Google Chrome,Firefox,Safari,Opera\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059)",
    _chatwork_apitoken_invalid_password: "\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059",
    _chatwork_apitoken_empty_password: "\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    _chatwork_apitoken_confirm_regenerate: "API\u30c8\u30fc\u30af\u30f3\u3092\u518d\u767a\u884c\u3059\u308b\u3068\u73fe\u5728\u767a\u884c\u3055\u308c\u3066\u3044\u308bAPI\u30c8\u30fc\u30af\u30f3\u306f\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002\u672c\u5f53\u306b\u518d\u767a\u884c\u3057\u307e\u3059\u304b\uff1f",
    welcome_title: "%%service_name%%\u3078\u3088\u3046\u3053\u305d",
    announce_button_close: "\u3053\u306e\u544a\u77e5\u3092\u975e\u8868\u793a\u306b\u3059\u308b",
    desktopalert_no_support: "\u3053\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u901a\u77e5\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n(Google Chrome\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059)",
    menu_desktopalert: "\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u901a\u77e5",
    menu_current: "\u73fe\u5728\uff1a",
    file_edit_title: "\u30d5\u30a1\u30a4\u30eb\u540d\u306e\u7de8\u96c6",
    file_error_empty: "\u30d5\u30a1\u30a4\u30eb\u540d\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    error_upload_executable: "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u7406\u7531\u306b\u3088\u308a\u3001\u5b9f\u884c\u5f62\u5f0f\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093",
    error_illegal_filename: '\u30d5\u30a1\u30a4\u30eb\u540d\u306b\u306f\u6b21\u306e\u6587\u5b57\u306f\u4f7f\u3048\u307e\u305b\u3093\n \\ / : * ? " < > |',
    file_confirm_delete: "\u672c\u5f53\u306b\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u300c%%file_name%%\u300d\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    file_delete_error_try_again: "\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\n\u6642\u9593\u3092\u304a\u3044\u3066\u518d\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002",
    file_preview_image_hint: "\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30d7\u30ec\u30d3\u30e5\u30fc\u8868\u793a\u3059\u308b",
    file_search: "\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u691c\u7d22",
    file_preview_image_cant_read: "\u30d7\u30ec\u30d3\u30e5\u30fc\u3092\u8aad\u307f\u8fbc\u307f\u307e\u305b\u3093\u3067\u3057\u305f",
    file_loading: "\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059...",
    file_not_found: "\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u307e\u305b\u3093",
    file_preview_download: "\u753b\u50cf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",
    file_preview_open_newwindow: "\u753b\u50cf\u3092\u65b0\u3057\u3044\u30a6\u30a3\u30f3\u30c9\u30a6\u3067\u8868\u793a",
    file_search_not_found: "\u8a72\u5f53\u30d5\u30a1\u30a4\u30eb\u306f\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f",
    file_nothing: "\u73fe\u5728\u30d5\u30a1\u30a4\u30eb\u306f\u3042\u308a\u307e\u305b\u3093",
    menu_file: "\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406",
    file_delete_hint: "\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3059\u308b",
    file_multi_confirm_delete: "%%num%%\u500b\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u672c\u5f53\u306b\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    file_download_hint: "\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b",
    jump_to_addpoint: "\u8ffd\u52a0\u6642\u70b9\u3078\u79fb\u52d5",
    file_rename_hint: "\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u7de8\u96c6\u3059\u308b",
    storage_limit_warning_message: "[\u91cd\u8981]\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u6a5f\u80fd\u3092\u505c\u6b62\u3057\u307e\u3057\u305f",
    storage_limit_warning_title: "\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u6a5f\u80fd\u3092\u505c\u6b62\u3057\u307e\u3057\u305f",
    storage_limit_warning_body: "\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u5236\u9650\u306e\u4e0a\u9650\u306b\u9054\u3057\u3066\u304b\u30891\u9031\u9593\u304c\u7d4c\u904e\u3057\u305f\u305f\u3081\u3001<br />\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u6a5f\u80fd\u3092\u505c\u6b62\u3057\u307e\u3057\u305f\u3002<br /><br />\u3054\u5229\u7528\u3092\u7d99\u7d9a\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406\u3088\u308a\u4e0d\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664\u3092\u884c\u3046\u304b\u3001<br />",
    storage_limit_notice_footer: "\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u5236\u9650\u306b\u9054\u3057\u305f\u307e\u307e1\u9031\u9593(%%date%%)\u304c\u7d4c\u904e\u3059\u308b\u3068\u3001<br />\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u9001\u4fe1\u304c\u884c\u3048\u306a\u304f\u306a\u308a\u307e\u3059\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002",
    storage_limit_notice_message: "[\u6ce8\u610f]\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u306e\u4e0a\u9650\u306b\u9054\u3057\u307e\u3057\u305f",
    storage_limit_notice_title: "\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u4e0a\u9650\u306b\u9054\u3057\u307e\u3057\u305f",
    storage_limit_notice_body: "\u73fe\u5728\u306e\u3054\u5229\u7528\u30d7\u30e9\u30f3\u3067\u306f\u3053\u308c\u4ee5\u4e0a\u30d5\u30a1\u30a4\u30eb\u9001\u4fe1\u3092\u884c\u3046\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002<br /><br />\u3054\u5229\u7528\u3092\u7d99\u7d9a\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406\u3088\u308a\u4e0d\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664\u3092\u884c\u3046\u304b\u3001<br />",
    task_edit_hint: "\u30bf\u30b9\u30af\u3092\u7de8\u96c6\u3059\u308b",
    task_not_found: "\u30bf\u30b9\u30af\u304c\u5b58\u5728\u3057\u307e\u305b\u3093",
    chatroom_search_member: "\u30e1\u30f3\u30d0\u30fc\u540d\u3092\u691c\u7d22",
    task_edit_title: "\u30bf\u30b9\u30af\u306e\u7de8\u96c6",
    task_error_empty: "\u30bf\u30b9\u30af\u5185\u5bb9\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    task_delete_hint: "\u30bf\u30b9\u30af\u3092\u524a\u9664\u3059\u308b",
    task_confirm_delete: "\u672c\u5f53\u306b\u3053\u306e\u30bf\u30b9\u30af\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    error_no_login_action: "\u6b63\u5e38\u306b\u30ed\u30b0\u30a4\u30f3\u3055\u308c\u3066\u3044\u306a\u3044\u70ba\u64cd\u4f5c\u3092\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093",
    menu_mytask: "\u30bf\u30b9\u30af\u7ba1\u7406",
    task_loading: "\u30bf\u30b9\u30af\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059...",
    chatroom_error_not_found: "\u305d\u306e\u30c1\u30e3\u30c3\u30c8\u306f\u5b58\u5728\u3057\u307e\u305b\u3093",
    chat_loading: "\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059...",
    jump_to_addpoint_not_found: "\u8ffd\u52a0\u6642\u70b9\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u3042\u308a\u307e\u305b\u3093",
    task_deleted: "\u3053\u306e\u30bf\u30b9\u30af\u306f\u524a\u9664\u3055\u308c\u307e\u3057\u305f",
    chatroom_member_rest_number: "...\u4ed6%%rest_number%%\u4eba",
    task_limittip: "\u671f\u9650\uff1a",
    button_incomplete: "\u672a\u5b8c\u4e86",
    chatroom_create_title: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u65b0\u898f\u4f5c\u6210",
    contact_add: "\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0",
    menu_mychat_hint: "\u30de\u30a4\u30c1\u30e3\u30c3\u30c8\u3092\u8868\u793a",
    chat_category_select: "\u30ab\u30c6\u30b4\u30ea\u3092\u9078\u629e",
    chat_search: "\u30c1\u30e3\u30c3\u30c8\u540d\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9\u3092\u691c\u7d22",
    chat_category_edit: "\u30ab\u30c6\u30b4\u30ea\u306e\u7de8\u96c6",
    chat_category_create: "\u30ab\u30c6\u30b4\u30ea\u3092\u65b0\u898f\u4f5c\u6210",
    button_create_long: "\u4f5c\u6210\u3059\u308b",
    chat_category_error_no_name: "\u30ab\u30c6\u30b4\u30ea\u540d\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    chat_category_error_no_chats: "\u30c1\u30e3\u30c3\u30c8\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    multiselect_label: "\u500b\u9078\u629e\u4e2d",
    chat_category_confirm_delete: "\u672c\u5f53\u306b\u3053\u306e\u30ab\u30c6\u30b4\u30ea\u300c%%category_name%%\u300d\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    chat_rest_roomtip: "\u6b8b\u308a\u306e\u30c1\u30e3\u30c3\u30c8\u6570:",
    chat_show_more: "\u3055\u3089\u306b\u8868\u793a",
    chatroom_member_requests_notice: "\u53c2\u52a0\u672a\u627f\u8a8d\u306e\u30e1\u30f3\u30d0\u30fc\u304c\u3044\u307e\u3059 (%%request_num%%\u4ef6)",
    button_edit: "\u7de8\u96c6",
    join_groupchat_btn_send_join_request_label: "\u53c2\u52a0\u6a29\u9650\u3092\u30ea\u30af\u30a8\u30b9\u30c8",
    join_groupchat_btn_join_groupchat_label: "\u3053\u306e\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u53c2\u52a0\u3059\u308b",
    joinpublicchat_title: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u306e\u53c2\u52a0",
    chatroom_desc_none: "\u6982\u8981\u306f\u3042\u308a\u307e\u305b\u3093",
    room_request_title: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u306e\u53c2\u52a0\u30ea\u30af\u30a8\u30b9\u30c8\u4e00\u89a7",
    role: "\u6a29\u9650",
    admin: "\u7ba1\u7406\u8005",
    member: "\u30e1\u30f3\u30d0\u30fc",
    readonly: "\u95b2\u89a7\u306e\u307f",
    read_more: "\u7d9a\u304d\u3092\u898b\u308b\u2026",
    chat_edited_log: "\u30e1\u30c3\u30bb\u30fc\u30b8\u306f%%date%%\u306b\u7de8\u96c6\u3055\u308c\u307e\u3057\u305f",
    chat_deleted: "\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u524a\u9664\u3055\u308c\u307e\u3057\u305f",
    chat_editing_label_on_message: "\u30e1\u30c3\u30bb\u30fc\u30b8\u7de8\u96c6\u4e2d",
    chatroom_tasklist_mytaskonly: "\u81ea\u5206\u306e\u30bf\u30b9\u30af\u306e\u307f\u8868\u793a",
    task_nothing: "\u73fe\u5728\u30bf\u30b9\u30af\u306f\u3042\u308a\u307e\u305b\u3093",
    task_num: " (%%num%%\u4ee5\u4e0a)",
    error_upload_filesize: "\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3059\u304e\u308b\u305f\u3081\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
    error_upload_filetype: "\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u5f62\u5f0f\u306e\u305f\u3081\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
    invitation_link_code_copy: "\u30b3\u30d4\u30fc",
    join_groupchat_not_found: "\u30c1\u30e3\u30c3\u30c8\u304c\u5b58\u5728\u3057\u306a\u3044\u304b\u62db\u5f85\u30ea\u30f3\u30af\u304c\u7121\u52b9\u3067\u3059",
    join_groupchat_my_disable_external: "\u7d44\u7e54\u5916\u30e6\u30fc\u30b6\u30fc\u3068\u306e\u3084\u308a\u3068\u308a\u304c\u7981\u6b62\u3055\u308c\u3066\u3044\u307e\u3059",
    join_groupchat_other_disable_external: "\u30c1\u30e3\u30c3\u30c8\u306b\u6240\u5c5e\u3059\u308b\u8ab0\u304b\u304c\u7d44\u7e54\u5916\u30e6\u30fc\u30b6\u30fc\u3068\u306e\u3084\u308a\u3068\u308a\u3092\u7981\u6b62\u3055\u308c\u3066\u3044\u307e\u3059",
    chatroom_error_cant_add: "\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
    chatroom_error_planlimit: "%%plan_name%%\u3067\u306f%%limit_num%%\u500b\u307e\u3067\u3057\u304b\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002<br>\u65b0\u3057\u304f\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306f\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u3054\u691c\u8a0e\u304f\u3060\u3055\u3044\u3002",
    invitation_link_setting_title: "\u62db\u5f85\u30ea\u30f3\u30af\u306e\u8a2d\u5b9a",
    button_save: "\u4fdd\u5b58",
    invitation_link_setting_error_invalid_link_name: "\u4f7f\u7528\u3067\u304d\u306a\u3044\u30ea\u30f3\u30af\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059",
    text_copied: "\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f",
    room_permission_setting_title: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306e\u6a29\u9650\u8a2d\u5b9a",
    chatroom_member_role_admin_desc: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u540d\u3001\u6982\u8981\u3001\u30e1\u30f3\u30d0\u30fc\u306e\u5909\u66f4\u304c\u3067\u304d\u307e\u3059\u3002",
    chatroom_member_role_member_desc: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u540d\u3001\u6982\u8981\u3001\u30e1\u30f3\u30d0\u30fc\u306e\u5909\u66f4\u306f\u3067\u304d\u307e\u305b\u3093\u3002",
    chatroom_member_role_readonly_desc: "\u95b2\u89a7\u306e\u307f\u3067\u304d\u307e\u3059\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u9001\u4fe1\u306f\u3067\u304d\u307e\u305b\u3093\u3002",
    chatroom_show_limit_member_num: "(\u6700\u5927%%num%%\u4eba\u8868\u793a)",
    button_create: "\u4f5c\u6210",
    common_role_select_list_default: "\u6a29\u9650\u4e00\u62ec\u8a2d\u5b9a",
    common_role_select_list_default_tooltip: "\u30e1\u30f3\u30d0\u30fc\u306e\u6a29\u9650\u3092\u4e00\u62ec\u8a2d\u5b9a",
    chatroom_error_noself: "\u81ea\u5206\u304c\u5165\u3063\u3066\u3044\u306a\u3044\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093",
    adding: "\u8ffd\u52a0\u4e2d...",
    chatroom_edit_desc_title: "\u6982\u8981\u306e\u7de8\u96c6",
    chatroom_info_edit: "\u30c1\u30e3\u30c3\u30c8\u60c5\u5831\u306e\u7de8\u96c6",
    member_edit_dialog_title: "\u30e1\u30f3\u30d0\u30fc\u306e\u7de8\u96c6",
    member_addition_dialog_title: "\u30e1\u30f3\u30d0\u30fc\u306e\u8ffd\u52a0",
    chatroom_error_no_name: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u540d\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    chatroom_error_noadmin: "1\u4eba\u4ee5\u4e0a\u306e\u7ba1\u7406\u8005\u304c\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059",
    chatroom_invitation_link_setting: "\u62db\u5f85\u30ea\u30f3\u30af\u306e\u8a2d\u5b9a",
    chatroom_room_permission_setting: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306e\u6a29\u9650\u8a2d\u5b9a",
    chatroom_createchat_same_members: "\u540c\u3058\u30e1\u30f3\u30d0\u30fc\u3067\u30c1\u30e3\u30c3\u30c8\u3092\u65b0\u898f\u4f5c\u6210",
    chatroom_leave: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u304b\u3089\u9000\u5e2d\u3059\u308b",
    chatroom_delete: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u524a\u9664\u3059\u308b",
    error_no_select: "\u30c1\u30e3\u30c3\u30c8\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    chatroom_createchat_same_members_confirm: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30f3\u30d0\u30fc\u306b\u306f\u30b3\u30f3\u30bf\u30af\u30c8\u3067\u306f\u306a\u3044\u30e1\u30f3\u30d0\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\n\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u306a\u3063\u3066\u3044\u308b\u30e1\u30f3\u30d0\u30fc\u306e\u307f\u3067\u30c1\u30e3\u30c3\u30c8\u3092\u65b0\u898f\u4f5c\u6210\u3057\u307e\u3059\u304b\uff1f",
    chatroom_confirm_leave: "\u672c\u5f53\u306b\u300c%%room_name%%\u300d\u304b\u3089\u9000\u5e2d\u3057\u307e\u3059\u304b\uff1f\n\u9000\u5e2d\u3059\u308b\u3068\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306e\u5185\u5bb9\u3092\u95b2\u89a7\u3067\u304d\u306a\u304f\u306a\u308a\u307e\u3059\u3002\n\u518d\u5ea6\u53c2\u52a0\u3057\u305f\u3044\u5834\u5408\u306f\u53c2\u52a0\u30e1\u30f3\u30d0\u30fc\u306b\u62db\u5f85\u3057\u3066\u3082\u3089\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n(\u203b\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306b\u3042\u308b\u81ea\u5206\u304c\u62c5\u5f53\u8005\u306e\u30bf\u30b9\u30af\u3001\u304a\u3088\u3073\u9001\u4fe1\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306f\u524a\u9664\u3055\u308c\u307e\u3059)",
    _chatroom_confirm_delete_alert: "\u672c\u5f53\u306b\u300c%%room_name%%\u300d\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    _chatroom_confirm_delete_content: "\u524a\u9664\u3059\u308b\u524d\u306b\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u3001\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3066\u304f\u3060\u3055\u3044\u3002",
    _chatroom_confirm_delete_note_1: "\u81ea\u5206\u3060\u3051\u3067\u306f\u306a\u304f\u3001\u30e1\u30f3\u30d0\u30fc\u5168\u54e1\u306e\u30c1\u30e3\u30c3\u30c8\u4e00\u89a7\u304b\u3089\u524a\u9664\u3055\u308c\u307e\u3059\u3002",
    _chatroom_confirm_delete_note_2: "\u3059\u3079\u3066\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3001\u30bf\u30b9\u30af\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u30c7\u30fc\u30bf\u304c\u524a\u9664\u3055\u308c\u307e\u3059\u3002",
    _chatroom_confirm_delete_note_3: "\u524a\u9664\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306f\u4e8c\u5ea6\u3068\u5143\u306b\u623b\u3059\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002",
    _button_delete_with_agreement: "\u7406\u89e3\u3057\u305f\u4e0a\u3067\u524a\u9664\u3059\u308b",
    chatsend_error_no_incharge: "\u62c5\u5f53\u8005\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044",
    chatsend_error_send_task: "\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u4e0d\u5b89\u5b9a\u3067\u30bf\u30b9\u30af\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u518d\u5ea6\u9001\u4fe1\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u9001\u4fe1\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    live_member_not_found: "ChatWork Live\u53ef\u80fd\u306a\u30e1\u30f3\u30d0\u30fc\u306f\u3044\u307e\u305b\u3093",
    live_video: "\u30d3\u30c7\u30aa\u901a\u8a71",
    live_voice: "\u97f3\u58f0\u901a\u8a71",
    chatroom_member_detail: "\u30e1\u30f3\u30d0\u30fc\u8a73\u7d30",
    chatroom_member_nocontact: "\u30b3\u30f3\u30bf\u30af\u30c8\u672a\u8ffd\u52a0",
    chatroom_member_add_contact: "\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u4e00\u62ec\u8ffd\u52a0",
    contact_menu_myrequest: "\u627f\u8a8d\u4f9d\u983c\u4e2d",
    member_detail_edit_member_label: "\u30e1\u30f3\u30d0\u30fc\u306e\u7de8\u96c6",
    chatsend_error_no_exist_for_edit: "\u7de8\u96c6\u3057\u3088\u3046\u3068\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5b58\u5728\u3057\u307e\u305b\u3093",
    chatsend_delete_filetip: "\u524a\u9664\u5bfe\u8c61\u306e\u30d5\u30a1\u30a4\u30eb\uff1a",
    chatsend_confirm_delete_with_file: "\u901a\u77e5\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u4e00\u7dd2\u306b\u30d5\u30a1\u30a4\u30eb\u3082\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    chatsend_button_delete_with_file: "\u30d5\u30a1\u30a4\u30eb\u3082\u4e00\u7dd2\u306b\u524a\u9664",
    chatsend_button_delete_message_only: "\u901a\u77e5\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u307f\u524a\u9664",
    chatsend_delete_tasktip: "\u524a\u9664\u5bfe\u8c61\u306e\u30bf\u30b9\u30af\uff1a",
    chatsend_confirm_delete_with_task: "\u901a\u77e5\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u4e00\u7dd2\u306b\u30bf\u30b9\u30af\u3082\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    chatsend_button_delete_with_task: "\u30bf\u30b9\u30af\u3082\u4e00\u7dd2\u306b\u524a\u9664",
    chatsend_confirm_delete: "\u672c\u5f53\u306b\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    chat_action_copy_title: "\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9",
    chat_post_label: "\u6295\u7a3f",
    chat_edit_label: "\u7de8\u96c6",
    chat_delete_label: "\u524a\u9664",
    jump_to_message: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",
    chat_error_not_found: "\u305d\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u5b58\u5728\u3057\u307e\u305b\u3093",
    chatsend_enter_action_explain: "Enter\u30ad\u30fc\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1",
    on: "\u30aa\u30f3",
    off: "\u30aa\u30d5",
    chatsend_chat_explain: "\u3053\u3053\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9\u3092\u5165\u529b",
    chatsend_enter_action_explain_enter: "\n(Shift + Enter\u30ad\u30fc\u3067\u6539\u884c)",
    chatsend_enter_action_explain_enter_send: "\n(Shift + Enter\u30ad\u30fc\u3067\u9001\u4fe1)",
    chatsend_shift_and_command_hint: "Shift\u3067\u9023\u7d9a\u9078\u629e\u3001\u2318\u3067\u3059\u3050\u9001\u4fe1",
    chatsend_shift_and_ctrl_hint: "Shift\u3067\u9023\u7d9a\u9078\u629e\u3001Ctrl\u3067\u3059\u3050\u9001\u4fe1",
    selectall_full: "\u3059\u3079\u3066\u9078\u629e",
    upload_cancel_send_message: "\u4e00\u6642\u7684\u306b\u30d5\u30a1\u30a4\u30eb\u9001\u4fe1\u304c\u884c\u3048\u306a\u3044\u72b6\u614b \u3082\u3057\u304f\u306f\u3001\u9001\u4fe1\u3057\u3088\u3046\u3068\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30a4\u30ba\u304c\u73fe\u5728\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u8d85\u3048\u3066\u3044\u308b\u305f\u3081\u3001\u9001\u4fe1\u304c\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u307e\u3057\u305f\u3002<br /><br />\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\uff1a%%size%%<br /><br />\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u8d85\u3048\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406\u3088\u308a\u4e0d\u8981\u306a<br />\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664\u3092\u884c\u3046\u304b\u3001",
    file: "\u30d5\u30a1\u30a4\u30eb",
    error_upload_over_max_filesize: "\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c %%max_size%%\u3088\u308a\u5927\u304d\u3044\u30d5\u30a1\u30a4\u30eb\u306f\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3002\n\uff08\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3088\u3046\u3068\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\uff1a%%size%%\uff09",
    error_upload: "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
    _chatwork_path_help_file_upload_error: '\n\nMac OS\u306e\u5834\u5408\u306f\u30d8\u30eb\u30d7\u30da\u30fc\u30b8\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\n<a href="http://link.chat-work.com/h_file_upload_ja" target="_blank">http://link.chat-work.com/h_file_upload_ja</a>',
    chatsend_error_send: "\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u4e0d\u5b89\u5b9a\u3067\u30c1\u30e3\u30c3\u30c8\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u518d\u5ea6\u9001\u4fe1\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u9001\u4fe1\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    chatsend_not_allow_send_messages: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u3067\u306f\u6a29\u9650\u304c\u306a\u3044\u305f\u3081\u767a\u8a00\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002",
    nickname_title: "\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u306e\u8a2d\u5b9a",
    search_title: "\u30e1\u30c3\u30bb\u30fc\u30b8\u691c\u7d22",
    chat_server_error_try_again: "\u30b5\u30fc\u30d0\u30fc\u3068\u306e\u901a\u4fe1\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\n\u6642\u9593\u3092\u304a\u3044\u3066\u518d\u5ea6\u3054\u9001\u4fe1\u304f\u3060\u3055\u3044\u3002",
    search_result_unit: "\u4ef6",
    search_result_not_found: "%%keyword%% \u306b\u4e00\u81f4\u3059\u308b\u691c\u7d22\u7d50\u679c\u306f\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f",
    search_suggest: '"%%keyword%%"\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u691c\u7d22',
    error_upload_image: "\u753b\u50cf\u5f62\u5f0f\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044 (JPEG,GIF,PNG\u304c\u4f7f\u3048\u307e\u3059)",
    button_search: "\u691c\u7d22",
    checkall: "\u3059\u3079\u3066",
    uncheckall: "\u306f\u305a\u3059",
    userguide_title: "%%service_name%%\u306e\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
    live_start: "ChatWork Live\u3092\u958b\u59cb\u3057\u307e\u3057\u305f",
    file_uploaded: "\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3057\u305f\u3002",
    task_edited: "\u30bf\u30b9\u30af\u3092\u7de8\u96c6\u3057\u307e\u3057\u305f\u3002",
    chatroom_contact_added_by_facebook: "Facebook\u306e\u53cb\u9054\u8ffd\u52a0\u8a2d\u5b9a\u306b\u3088\u308a\u30b3\u30f3\u30bf\u30af\u30c8\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f\u3002",
    chatroom_contact_added: "\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",
    chatroom_chatname_is: "\u30c1\u30e3\u30c3\u30c8\u540d\u3092\u300c",
    chatroom_set: "\u300d\u306b\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u3002",
    chatroom_description_is: "\u6982\u8981\u3092\u300c",
    chatroom_over_groupchatnum: "\u306f\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u5236\u9650\u6570\u3092\u8d8a\u3048\u3066\u3044\u308b\u305f\u3081\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002",
    chatroom_disable_external: "\u306f\u7d44\u7e54\u5916\u30e6\u30fc\u30b6\u30fc\u3068\u306e\u3084\u308a\u3068\u308a\u304c\u7981\u6b62\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002",
    chatroom_member_is: "\u30e1\u30f3\u30d0\u30fc\u300c",
    chatroom_added: "\u300d\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",
    chatroom_mychat_created: "\u30de\u30a4\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002",
    chatroom_groupchat_created: "\u65b0\u3057\u304f\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002",
    chatroom_priv_changed: "\u300d\u306e\u6a29\u9650\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_deleted: "\u300d\u3092\u524a\u9664\u3057\u307e\u3057\u305f\u3002",
    chatroom_icon_updated: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_chat_edited: "\u30c1\u30e3\u30c3\u30c8\u60c5\u5831\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_changed: "\u300d\u306b\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_resigned_priv_change: "\u300d\u304c\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u89e3\u7d04\u3057\u305f\u305f\u3081\u3001\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u3092\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8\u304b\u3089\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u3068\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_leaved: "\u300d\u304c\u9000\u5e2d\u3057\u307e\u3057\u305f\u3002",
    chatroom_resigned_priv_change_all: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306e\u7ba1\u7406\u8005\u304c\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\u3001\u30e1\u30f3\u30d0\u30fc\u5168\u54e1\u306e\u6a29\u9650\u3092\u7ba1\u7406\u8005\u3078\u3068\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    task_added: "\u30bf\u30b9\u30af\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",
    task_done: "\u30bf\u30b9\u30af\u3092\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002",
    task_reverted: "\u30bf\u30b9\u30af\u3092\u672a\u5b8c\u4e86\u306b\u623b\u3057\u307e\u3057\u305f\u3002",
    file_edited: "\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u7de8\u96c6\u3057\u307e\u3057\u305f\u3002",
    chatroom_chat_joined: "\u30c1\u30e3\u30c3\u30c8\u306b\u53c2\u52a0\u3057\u307e\u3057\u305f\u3002",
    mychat_default_desc: "\u30de\u30a4\u30c1\u30e3\u30c3\u30c8\u306f\u81ea\u5206\u5c02\u7528\u306e\u30c1\u30e3\u30c3\u30c8\u3067\u3059\u3002\u81ea\u5206\u7528\u306e\u30e1\u30e2\u3084\u30bf\u30b9\u30af\u7ba1\u7406\u3001\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d0\u30fc\u3068\u3057\u3066\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",
    lang_ja_button_ok: "OK",
    lang_en_button_ok: "OK",
    "lang_zh-cn_button_ok": "OK",
    "lang_zh-tw_button_ok": "OK",
    lang_vi_button_ok: "OK",
    lang_ja_button_cancel: "\u30ad\u30e3\u30f3\u30bb\u30eb",
    lang_en_button_cancel: "Cancel",
    "lang_zh-cn_button_cancel": "\u53d6\u6d88",
    "lang_zh-tw_button_cancel": "\u53d6\u6d88",
    lang_vi_button_cancel: "H\u1ee7y",
    lang_ja_change_confirm: "\u8a00\u8a9e\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002\u30d6\u30e9\u30a6\u30b6\u3092\u518d\u8aad\u307f\u8fbc\u307f\u3059\u308b\u3068\u53cd\u6620\u3055\u308c\u307e\u3059\u3002\n\u3044\u307e\u3059\u3050\u518d\u8aad\u307f\u8fbc\u307f\u3057\u307e\u3059\u304b\uff1f",
    lang_en_change_confirm: "Your language has been changed but your browser needs to be refreshed for the change to be reflected.\nWould you like to refresh now?",
    "lang_zh-cn_change_confirm": "\u8bed\u8a00\u8bbe\u5b9a\u8fdb\u884c\u4e86\u53d8\u66f4\u3002\u5bf9\u6d4f\u89c8\u5668\u8fdb\u884c\u5237\u65b0\u540e\u5c06\u5f97\u5230\u663e\u793a\u3002\n\u73b0\u5728\u9a6c\u4e0a\u5237\u65b0\u5417\uff1f",
    "lang_zh-tw_change_confirm": "\u8a9e\u8a00\u8a2d\u5b9a\u8b8a\u66f4\u5b8c\u6210\u4e86\u3002\u700f\u89bd\u5668\u91cd\u65b0\u6574\u7406\u6703\u986f\u793a\u7d50\u679c\u3002\n\u73fe\u5728\u7acb\u523b\u91cd\u65b0\u6574\u7406\u55ce?",
    lang_vi_change_confirm: "\u0110\u00e3 thay \u0111\u1ed5i c\u00e0i \u0111\u1eb7t ng\u00f4n ng\u1eef. B\u1ea1n ph\u1ea3i t\u1ea3i l\u1ea1i trang web \u0111\u1ec3 k\u00edch ho\u1ea1t nh\u1eefng thay \u0111\u1ed5i n\u00e0y. Ph\u1ea7n c\u00e0i \u0111\u1eb7t s\u1ebd \u0111\u01b0\u1ee3c k\u00edch ho\u1ea1t sau khi l\u00e0m m\u1edbi trang web.\n B\u1ea1n c\u00f3 mu\u1ed1n t\u1ea3i l\u1ea1i trang web ngay b\u00e2y gi\u1edd l\u00e0m m\u1edbi l\u1ea1i trang ch\u1ee7 kh\u00f4ng?",
    chat_action_reply: "\u8fd4\u4fe1",
    chat_action_reply_long: "\u8fd4\u4fe1\u3059\u308b",
    chat_action_reply_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u8fd4\u4fe1\u3059\u308b",
    chat_action_quote: "\u5f15\u7528",
    chat_action_quote_long: "\u5f15\u7528\u3059\u308b",
    chat_action_quote_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5f15\u7528\u3059\u308b",
    chat_action_edit: "\u7de8\u96c6",
    chat_action_edit_long: "\u7de8\u96c6\u3059\u308b",
    chat_action_edit_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u7de8\u96c6\u3059\u308b",
    chat_action_task: "\u30bf\u30b9\u30af",
    chat_action_task_long: "\u30bf\u30b9\u30af\u5316\u3059\u308b",
    chat_action_task_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30bf\u30b9\u30af\u5316\u3059\u308b",
    chat_action_more: "",
    chat_action_unread: "\u672a\u8aad",
    chat_action_unread_long: "\u672a\u8aad\u306b\u3059\u308b",
    chat_action_unread_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u307e\u3067\u3092\u672a\u8aad\u306b\u3059\u308b",
    chat_action_link: "\u30ea\u30f3\u30af",
    chat_action_link_long: "\u30ea\u30f3\u30af\u3092\u633f\u5165\u3059\u308b",
    chat_action_link_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u306e\u30ea\u30f3\u30af\u3092\u633f\u5165\u3059\u308b",
    chat_action_move: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",
    chat_action_move_long: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",
    chat_action_move_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",
    chat_action_copy: "\u30b3\u30d4\u30fc",
    chat_action_copy_long: "\u30c6\u30ad\u30b9\u30c8\u3092\u30b3\u30d4\u30fc\u3059\u308b",
    chat_action_copy_desc: "\u30c6\u30ad\u30b9\u30c8\u3092\u30b3\u30d4\u30fc\u3059\u308b",
    chat_action_delete: "\u524a\u9664",
    chat_action_delete_long: "\u524a\u9664\u3059\u308b",
    chat_action_delete_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u524a\u9664\u3059\u308b",
    chat_action_mail: "\u30e1\u30fc\u30eb",
    chat_action_mail_long: "\u30e1\u30fc\u30eb\u3059\u308b",
    chat_action_mail_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30e1\u30fc\u30eb\u3059\u308b",
    chat_action_title: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u5bfe\u3059\u308b\u64cd\u4f5c"
};
(function(b) {
    b.cwUI = b.cwUI || {};
    b.cwUI.L = {
        checkall: "\u3059\u3079\u3066",
        uncheckall: "\u306f\u305a\u3059",
        button_delete: "\u524a\u9664",
        button_search: "\u691c\u7d22",
        button_close: "\u9589\u3058\u308b",
        pager_prev: "\u524d\u306e\u30da\u30fc\u30b8\u3078\u79fb\u52d5",
        pager_next: "\u6b21\u306e\u30da\u30fc\u30b8\u3078\u79fb\u52d5",
        error_upload_over_max_filesize: "\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c %%max_size%%\u3088\u308a\u5927\u304d\u3044\u30d5\u30a1\u30a4\u30eb\u306f\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3002\n\uff08\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3088\u3046\u3068\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\uff1a%%size%%\uff09",
        error_upload_image: "\u753b\u50cf\u5f62\u5f0f\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044 (JPEG,GIF,PNG\u304c\u4f7f\u3048\u307e\u3059)",
        cwui_listip_list_overflow: "\u6b8b\u308a%%num%%\u4ef6",
        cwui_listip_list_overflow_max: "(\u6700\u5927%%num%%\u4ef6\u8868\u793a)"
    }
})(jQuery);
(function(b) {
    b.cwUI.L.cwDatePicker = {
        closeText: "\u9589\u3058\u308b",
        prevText: "&#x3c;\u524d",
        nextText: "\u6b21&#x3e;",
        currentText: "\u4eca\u65e5",
        monthNames: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
        monthNamesShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
        dayNames: ["\u65e5\u66dc\u65e5", "\u6708\u66dc\u65e5", "\u706b\u66dc\u65e5", "\u6c34\u66dc\u65e5",
            "\u6728\u66dc\u65e5", "\u91d1\u66dc\u65e5", "\u571f\u66dc\u65e5"
        ],
        dayNamesShort: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"],
        dayNamesMin: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"],
        weekHeader: "\u9031",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !0,
        yearMonthSeparator: "",
        yearSuffix: "\u5e74"
    }
})(jQuery);

function escape_html(b) {
    if (!b || !b.replace) return b;
    b = b.replace(/&/g, "&amp;");
    b = b.replace(/"/g, "&quot;");
    b = b.replace(/'/g, "&#039;");
    b = b.replace(/</g, "&lt;");
    return b = b.replace(/>/g, "&gt;")
}

function unescape_html(b) {
    if (!b || !b.replace) return b;
    b = b.replace(/&quot;/g, '"');
    b = b.replace(/&#039;/g, "'");
    b = b.replace(/&lt;/g, "<");
    b = b.replace(/&gt;/g, ">");
    return b = b.replace(/&amp;/g, "&")
}

function sort_for_string(b, a) {
    for (var b = b.toLowerCase(), a = a.toLowerCase(), e = 0, d = 0, f; d == 0;) {
        d = b.charCodeAt(e);
        f = a.charCodeAt(e);
        if (isNaN(d))
            if (isNaN(f)) return 0;
            else {
                d = -1;
                continue
            } else if (isNaN(f)) {
            d = 1;
            continue
        }
        d = b.charCodeAt(e) - a.charCodeAt(e);
        e++
    }
    return d
}

function bytename(b, a, e, d) {
    a == void 0 && (a = "B");
    unim = ["", "K", "M", "G", "T", "P"];
    e == void 0 && (e = 2);
    var f;
    if (d != void 0)
        for (var i in unim) unim[i] == d && (f = i);
    for (c = 0; b >= 1024;) c++, b /= 1024;
    if (f) {
        d = c - f;
        if (d > 0)
            for (; d > 0;) d--, b *= 1024;
        else if (d < 0)
            for (; d < 0;) d++, b /= 1024;
        c = f
    }
    return number_format(b, c ? e : 0, ".", ",") + " " + unim[c] + a
}

function trim_width(b, a, e, d) {
    a && (b = b.substr(a));
    b.length > e && (b = b.substr(0, e), d == void 0 && (d = "..."), b += d);
    return b
}

function get_memory_usage() {
    var b = 0,
        a;
    for (a in window) typeof a == "object" && a.getMemoryUsage && (b += a.getMemoryUsage());
    return b
}

function strtotime_format(b, a) {
    var e = a.match(/(Y|m|d)/g),
        d = RegExp(b.replace(/[0-9]+/g, "([0-9]+)"), "g").exec(b),
        f = {};
    f[e[0]] = parseInt(d[1], 10);
    f[e[1]] = parseInt(d[2], 10);
    f[e[2]] = parseInt(d[3], 10);
    return Math.floor((new Date(f.Y, f.m - 1, f.d)).getTime() / 1E3)
}

function is_empty_object(b) {
    for (var a in b) return !1;
    return !0
}

function get_time() {
    return time()
}

function encode_url() {
    return urlencode()
}

function trim(b, a) {
    var e, d = 0,
        f = 0;
    b += "";
    a ? (a += "", e = a.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1")) : e = " \n\r\t\u000c\u000b\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
    d = b.length;
    for (f = 0; f < d; f++)
        if (e.indexOf(b.charAt(f)) === -1) {
            b = b.substring(f);
            break
        }
    d = b.length;
    for (f = d - 1; f >= 0; f--)
        if (e.indexOf(b.charAt(f)) === -1) {
            b = b.substring(0, f + 1);
            break
        }
    return e.indexOf(b.charAt(0)) === -1 ? b : ""
}

function rtrim(b, a) {
    a = !a ? " \\s\u00a0" : (a + "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "\\$1");
    return (b + "").replace(RegExp("[" + a + "]+$", "g"), "")
}

function count(b, a) {
    var e, d = 0;
    if (b === null || typeof b === "undefined") return 0;
    else if (b.constructor !== Array && b.constructor !== Object) return 1;
    a === "COUNT_RECURSIVE" && (a = 1);
    a != 1 && (a = 0);
    for (e in b)
        if (b.hasOwnProperty(e) && (d++, a == 1 && b[e] && (b[e].constructor === Array || b[e].constructor === Object))) d += this.count(b[e], 1);
    return d
}

function array_unique(b) {
    var a = "",
        e = {},
        d = "",
        f = function(a, b) {
            var f = "";
            for (f in b)
                if (b.hasOwnProperty(f) && b[f] + "" === a + "") return f;
            return !1
        };
    for (a in b) b.hasOwnProperty(a) && (d = b[a], !1 === f(d, e) && (e[a] = d));
    return e
}

function in_array(b, a, e) {
    var d = "";
    if (e)
        for (d in a) {
            if (a[d] === b) return !0
        } else
            for (d in a)
                if (a[d] == b) return !0;
    return !1
}

function array_search(b, a, e) {
    var d = !!e,
        f = "";
    if (a && typeof a === "object" && a.change_key_case) return a.search(b, e);
    if (typeof b === "object" && b.exec) {
        d || (b = RegExp(b.source, "i" + (b.global ? "g" : "") + (b.multiline ? "m" : "") + (b.sticky ? "y" : "")));
        for (f in a)
            if (b.test(a[f])) return f;
        return !1
    }
    for (f in a)
        if (d && a[f] === b || !d && a[f] == b) return f;
    return !1
}

function urlencode(b) {
    b = (b + "").toString();
    return encodeURIComponent(b).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
}

function urldecode(b) {
    return decodeURIComponent((b + "").replace(/\+/g, "%20"))
}

function number_format(b, a, e, d) {
    var b = !isFinite(+b) ? 0 : +b,
        a = !isFinite(+a) ? 0 : Math.abs(a),
        d = typeof d === "undefined" ? "," : d,
        e = typeof e === "undefined" ? "." : e,
        f = "",
        f = (a ? function(a, b) {
            var f = Math.pow(10, b);
            return "" + Math.round(a * f) / f
        }(b, a) : "" + Math.round(b)).split(".");
    f[0].length > 3 && (f[0] = f[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, d));
    if ((f[1] || "").length < a) f[1] = f[1] || "", f[1] += Array(a - f[1].length + 1).join("0");
    return f.join(e)
}

function round(b, a, e) {
    var d, f, i;
    a |= 0;
    a = Math.pow(10, a);
    b *= a;
    i = b > 0 | -(b < 0);
    f = b % 1 === 0.5 * i;
    d = Math.floor(b);
    if (f) switch (e) {
        case "PHP_ROUND_HALF_DOWN":
            b = d + (i < 0);
            break;
        case "PHP_ROUND_HALF_EVEN":
            b = d + d % 2 * i;
            break;
        case "PHP_ROUND_HALF_ODD":
            b = d + !(d % 2);
            break;
        default:
            b = d + (i > 0)
    }
    return (f ? b : Math.round(b)) / a
}

function time() {
    return Math.floor((new Date).getTime() / 1E3)
}

function microtime(b) {
    var a = (new Date).getTime() / 1E3,
        e = parseInt(a, 10);
    return b ? a : Math.round((a - e) * 1E3) / 1E3 + " " + e
}

function utf8_encode(b) {
    if (b === null || typeof b === "undefined") return "";
    b += "";
    var a = "",
        e, d, f = 0;
    e = d = 0;
    for (var f = b.length, i = 0; i < f; i++) {
        var h = b.charCodeAt(i),
            j = null;
        h < 128 ? d++ : j = h > 127 && h < 2048 ? String.fromCharCode(h >> 6 | 192) + String.fromCharCode(h & 63 | 128) : String.fromCharCode(h >> 12 | 224) + String.fromCharCode(h >> 6 & 63 | 128) + String.fromCharCode(h & 63 | 128);
        j !== null && (d > e && (a += b.slice(e, d)), a += j, e = d = i + 1)
    }
    d > e && (a += b.slice(e, f));
    return a
}

function strtotime(b, a) {
    var e, d, f;
    f = "";
    b = b.replace(/\s{2,}|^\s|\s$/g, " ");
    b = b.replace(/[\t\r\n]/g, "");
    if (b === "now") return a === null || isNaN(a) ? (new Date).getTime() / 1E3 | 0 : a | 0;
    else if (isNaN(f = Date.parse(b))) a = a ? new Date(a * 1E3) : new Date;
    else return f / 1E3 | 0;
    var b = b.toLowerCase(),
        i = {
            day: {
                sun: 0,
                mon: 1,
                tue: 2,
                wed: 3,
                thu: 4,
                fri: 5,
                sat: 6
            },
            mon: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
        },
        h = function(b) {
            var f = b[2] && b[2] === "ago",
                d = (d = b[0] === "last" ? -1 : 1) * (f ? -1 : 1);
            switch (b[0]) {
                case "last":
                case "next":
                    switch (b[1].substring(0,
                        3)) {
                        case "yea":
                            a.setFullYear(a.getFullYear() + d);
                            break;
                        case "mon":
                            a.setMonth(a.getMonth() + d);
                            break;
                        case "wee":
                            a.setDate(a.getDate() + d * 7);
                            break;
                        case "day":
                            a.setDate(a.getDate() + d);
                            break;
                        case "hou":
                            a.setHours(a.getHours() + d);
                            break;
                        case "min":
                            a.setMinutes(a.getMinutes() + d);
                            break;
                        case "sec":
                            a.setSeconds(a.getSeconds() + d);
                            break;
                        default:
                            f = i.day[b[1].substring(0, 3)], typeof f !== "undefined" && (f -= a.getDay(), f === 0 ? f = 7 * d : f > 0 ? b[0] === "last" && (f -= 7) : b[0] === "next" && (f += 7), a.setDate(a.getDate() + f))
                    }
                    break;
                default:
                    if (/\d+/.test(b[0])) switch (d *=
                        parseInt(b[0], 10), b[1].substring(0, 3)) {
                        case "yea":
                            a.setFullYear(a.getFullYear() + d);
                            break;
                        case "mon":
                            a.setMonth(a.getMonth() + d);
                            break;
                        case "wee":
                            a.setDate(a.getDate() + d * 7);
                            break;
                        case "day":
                            a.setDate(a.getDate() + d);
                            break;
                        case "hou":
                            a.setHours(a.getHours() + d);
                            break;
                        case "min":
                            a.setMinutes(a.getMinutes() + d);
                            break;
                        case "sec":
                            a.setSeconds(a.getSeconds() + d)
                    } else return !1
            }
            return !0
        };
    f = b.match(/^(\d{2,4}-\d{1,2}-\d{1,2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);
    if (f !== null) return f[2] ? f[3] || (f[2] += ":00") :
        f[2] = "00:00:00", e = f[1].split(/-/g), e[1] = i.mon[e[1] - 1] || e[1], e[0] = +e[0], e[0] = e[0] >= 0 && e[0] <= 69 ? "20" + (e[0] < 10 ? "0" + e[0] : e[0] + "") : e[0] >= 70 && e[0] <= 99 ? "19" + e[0] : e[0] + "", parseInt(this.strtotime(e[2] + " " + e[1] + " " + e[0] + " " + f[2]) + (f[4] ? f[4] / 1E3 : ""), 10);
    f = b.match(RegExp("([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)|(last|next)\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))(\\sago)?",
        "gi"));
    if (f === null) return !1;
    e = 0;
    for (d = f.length; e < d; e++)
        if (!h(f[e].split(" "))) return !1;
    return a.getTime() / 1E3 | 0
}

function ucfirst(b) {
    b += "";
    return b.charAt(0).toUpperCase() + b.substr(1)
}
(function(b) {
    function a(a, b) {
        var f = (a & 65535) + (b & 65535);
        return (a >> 16) + (b >> 16) + (f >> 16) << 16 | f & 65535
    }

    function e(b, f, d, e, i, g) {
        b = a(a(f, b), a(e, g));
        return a(b << i | b >>> 32 - i, d)
    }

    function d(a, b, f, d, i, g, h) {
        return e(b & f | ~b & d, a, b, i, g, h)
    }

    function f(a, b, f, d, i, g, h) {
        return e(b & d | f & ~d, a, b, i, g, h)
    }

    function i(a, b, f, d, i, g, h) {
        return e(f ^ (b | ~d), a, b, i, g, h)
    }

    function h(b, g) {
        b[g >> 5] |= 128 << g % 32;
        b[(g + 64 >>> 9 << 4) + 14] = g;
        var h, l, n, m, j, q = 1732584193,
            p = -271733879,
            t = -1732584194,
            s = 271733878;
        for (h = 0; h < b.length; h += 16) l = q, n = p, m = t, j = s, q = d(q,
                p, t, s, b[h], 7, -680876936), s = d(s, q, p, t, b[h + 1], 12, -389564586), t = d(t, s, q, p, b[h + 2], 17, 606105819), p = d(p, t, s, q, b[h + 3], 22, -1044525330), q = d(q, p, t, s, b[h + 4], 7, -176418897), s = d(s, q, p, t, b[h + 5], 12, 1200080426), t = d(t, s, q, p, b[h + 6], 17, -1473231341), p = d(p, t, s, q, b[h + 7], 22, -45705983), q = d(q, p, t, s, b[h + 8], 7, 1770035416), s = d(s, q, p, t, b[h + 9], 12, -1958414417), t = d(t, s, q, p, b[h + 10], 17, -42063), p = d(p, t, s, q, b[h + 11], 22, -1990404162), q = d(q, p, t, s, b[h + 12], 7, 1804603682), s = d(s, q, p, t, b[h + 13], 12, -40341101), t = d(t, s, q, p, b[h + 14], 17, -1502002290),
            p = d(p, t, s, q, b[h + 15], 22, 1236535329), q = f(q, p, t, s, b[h + 1], 5, -165796510), s = f(s, q, p, t, b[h + 6], 9, -1069501632), t = f(t, s, q, p, b[h + 11], 14, 643717713), p = f(p, t, s, q, b[h], 20, -373897302), q = f(q, p, t, s, b[h + 5], 5, -701558691), s = f(s, q, p, t, b[h + 10], 9, 38016083), t = f(t, s, q, p, b[h + 15], 14, -660478335), p = f(p, t, s, q, b[h + 4], 20, -405537848), q = f(q, p, t, s, b[h + 9], 5, 568446438), s = f(s, q, p, t, b[h + 14], 9, -1019803690), t = f(t, s, q, p, b[h + 3], 14, -187363961), p = f(p, t, s, q, b[h + 8], 20, 1163531501), q = f(q, p, t, s, b[h + 13], 5, -1444681467), s = f(s, q, p, t, b[h + 2], 9, -51403784),
            t = f(t, s, q, p, b[h + 7], 14, 1735328473), p = f(p, t, s, q, b[h + 12], 20, -1926607734), q = e(p ^ t ^ s, q, p, b[h + 5], 4, -378558), s = e(q ^ p ^ t, s, q, b[h + 8], 11, -2022574463), t = e(s ^ q ^ p, t, s, b[h + 11], 16, 1839030562), p = e(t ^ s ^ q, p, t, b[h + 14], 23, -35309556), q = e(p ^ t ^ s, q, p, b[h + 1], 4, -1530992060), s = e(q ^ p ^ t, s, q, b[h + 4], 11, 1272893353), t = e(s ^ q ^ p, t, s, b[h + 7], 16, -155497632), p = e(t ^ s ^ q, p, t, b[h + 10], 23, -1094730640), q = e(p ^ t ^ s, q, p, b[h + 13], 4, 681279174), s = e(q ^ p ^ t, s, q, b[h], 11, -358537222), t = e(s ^ q ^ p, t, s, b[h + 3], 16, -722521979), p = e(t ^ s ^ q, p, t, b[h + 6], 23, 76029189), q = e(p ^
                t ^ s, q, p, b[h + 9], 4, -640364487), s = e(q ^ p ^ t, s, q, b[h + 12], 11, -421815835), t = e(s ^ q ^ p, t, s, b[h + 15], 16, 530742520), p = e(t ^ s ^ q, p, t, b[h + 2], 23, -995338651), q = i(q, p, t, s, b[h], 6, -198630844), s = i(s, q, p, t, b[h + 7], 10, 1126891415), t = i(t, s, q, p, b[h + 14], 15, -1416354905), p = i(p, t, s, q, b[h + 5], 21, -57434055), q = i(q, p, t, s, b[h + 12], 6, 1700485571), s = i(s, q, p, t, b[h + 3], 10, -1894986606), t = i(t, s, q, p, b[h + 10], 15, -1051523), p = i(p, t, s, q, b[h + 1], 21, -2054922799), q = i(q, p, t, s, b[h + 8], 6, 1873313359), s = i(s, q, p, t, b[h + 15], 10, -30611744), t = i(t, s, q, p, b[h + 6], 15, -1560198380),
            p = i(p, t, s, q, b[h + 13], 21, 1309151649), q = i(q, p, t, s, b[h + 4], 6, -145523070), s = i(s, q, p, t, b[h + 11], 10, -1120210379), t = i(t, s, q, p, b[h + 2], 15, 718787259), p = i(p, t, s, q, b[h + 9], 21, -343485551), q = a(q, l), p = a(p, n), t = a(t, m), s = a(s, j);
        return [q, p, t, s]
    }

    function j(a) {
        var b, f = "";
        for (b = 0; b < a.length * 32; b += 8) f += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
        return f
    }

    function k(a) {
        var b, f = [];
        f[(a.length >> 2) - 1] = void 0;
        for (b = 0; b < f.length; b += 1) f[b] = 0;
        for (b = 0; b < a.length * 8; b += 8) f[b >> 5] |= (a.charCodeAt(b / 8) & 255) << b % 32;
        return f
    }

    function g(a) {
        return j(h(k(a),
            a.length * 8))
    }

    function l(a) {
        var b = "",
            f, d;
        for (d = 0; d < a.length; d += 1) f = a.charCodeAt(d), b += "0123456789abcdef".charAt(f >>> 4 & 15) + "0123456789abcdef".charAt(f & 15);
        return b
    }

    function m(a, b) {
        var f = unescape(encodeURIComponent(a)),
            d = unescape(encodeURIComponent(b)),
            e = k(f),
            i = [],
            g = [];
        i[15] = g[15] = void 0;
        e.length > 16 && (e = h(e, f.length * 8));
        for (f = 0; f < 16; f += 1) i[f] = e[f] ^ 909522486, g[f] = e[f] ^ 1549556828;
        d = h(i.concat(k(d)), 512 + d.length * 8);
        return j(h(g.concat(d), 640))
    }

    function n(a, b, f) {
        if (!b) {
            if (!f) return l(g(unescape(encodeURIComponent(a))));
            return g(unescape(encodeURIComponent(a)))
        }
        if (!f) return l(m(b, a));
        return m(b, a)
    }
    typeof define === "function" && define.amd ? define(function() {
        return n
    }) : b.md5 = n
})(this);

function prepare_replace_code(b) {
    b.reg_cmp.push({
        key: /&/g,
        rep: "~~~CW-ESCAPE-START~~~&amp;~~~CW-ESCAPE-END~~~"
    });
    b.reg_cmp.push({
        key: /'/g,
        rep: "~~~CW-ESCAPE-START~~~&#039;~~~CW-ESCAPE-END~~~"
    });
    b.reg_cmp.push({
        key: /"/g,
        rep: " ~~~CW-NOURL-ESCAPE-START~~~&quot;~~~CW-NOURL-ESCAPE-END~~~ "
    });
    b.reg_cmp.push({
        key: /</g,
        rep: " ~~~CW-NOURL-ESCAPE-START~~~&lt;~~~CW-NOURL-ESCAPE-END~~~ "
    });
    b.reg_cmp.push({
        key: />/g,
        rep: " ~~~CW-NOURL-ESCAPE-START~~~&gt;~~~CW-NOURL-ESCAPE-END~~~ "
    });
    PLATFORM == "mobile-iphone" || PLATFORM ==
        "mobile-android" ? (b.reg_cmp.push({
            key: /(https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+|tel:?\d+)/gi,
            rep: '<a href="$1" title="$1" target="_blank" ><link_title>$1</link_title></a>',
            reptxt: "$1"
        }), b.reg_cmp.push({
            key: /\[qt\]/g,
            rep: '<div class="dev_quote chatQuote">',
            reptxt: '"'
        }), b.reg_cmp.push({
            key: /\[\/qt\]/g,
            rep: "</div>",
            reptxt: '"'
        }), b.reg_cmp.push({
            key: /\[qtmeta aid=(\d+) time=(\d+)\]/g,
            rep: '<div class="dev_qmeta">[picon:$1]<time>[date:$2]</time></div>',
            reptxt: ""
        }), b.reg_cmp.push({
            key: /\[qtmeta aid=(\d+)\]/g,
            rep: '<div class="dev_qmeta">[piconname:$1]</div>',
            reptxt: ""
        })) : (b.reg_cmp.push({
                key: /\[qt\]/g,
                rep: '<div class="dev_quote chatQuote"><div class="quoteLeftArea"><span class="icoFontMessegeQuote"></span></div>',
                reptxt: '"'
            }), b.reg_cmp.push({
                key: /\[\/qt\]\n?/g,
                rep: "</div></div>",
                reptxt: ""
            }), b.reg_cmp.push({
                key: /\[qtmeta aid=(\d+) time=(\d+)\]/g,
                rep: '<div class="title">[piconname:$1]<time>[date:$2]</time></div><div class="quoteText">',
                reptxt: ""
            }),
            b.reg_cmp.push({
                key: /\[qtmeta aid=(\d+)\]/g,
                rep: '<div class="title">[piconname:$1]</div><div class="quoteText">',
                reptxt: ""
            }));
    b.reg_cmp.push({
        key: /\[info\]/g,
        rep: '<div class="chatInfo">',
        reptxt: "["
    });
    b.reg_cmp.push({
        key: /\[\/info\]/g,
        rep: "</div>",
        reptxt: "]"
    });
    b.reg_cmp.push({
        key: /\[title\]/g,
        rep: '<div class="title"><span class="icoFontInfo marginRight"></span>',
        reptxt: ""
    });
    b.reg_cmp.push({
        key: /\[\/title\]/g,
        rep: "</div>",
        reptxt: ":"
    });
    b.reg_cmp.push({
        key: /\[\/task\]/g,
        rep: "</div></div>",
        reptxt: "]"
    });
    b.reg_cmp.push({
        key: /\[task:\d+\]/g,
        rep: "",
        reptxt: ""
    });
    b.reg_cmp.push({
        key: /\[To:(\d+)\]/g,
        rep: '<span class="chatTimeLineTo">TO</span>[picon:$1]',
        reptxt: "[To]"
    });
    b.reg_cmp.push({
        key: /\[rp aid=(\d+) to=([\d]+)-([\d]+)\]/g,
        rep: '<div class="chatTimeLineReply _replyMessage" data-rid="$2" data-mid="$3"><span class="icoFontActionReply icoSizeSmall"></span><span>RE</span></div>[picon:$1]',
        reptxt: "[RE]"
    });
    b.security_dat.disable_download_file ? (b.reg_cmp.push({
            key: /\[download:(\d+)\]/g,
            rep: "<div>",
            reptxt: ""
        }),
        b.reg_cmp.push({
            key: /\[\/download\]/g,
            rep: "</div>",
            reptxt: ""
        }), b.reg_cmp.push({
            key: /\[preview id=(\d+) ht=(\d+)\]/g,
            rep: "",
            reptxt: ""
        })) : PLATFORM == "mobile-iphone" || PLATFORM == "mobile-android" || PLATFORM == "mobile-web" ? (b.reg_cmp.push({
        key: /\[download:(\d+)\]/g,
        rep: '<div class="cw_file_download"><a href="' + SERVER_PATH + '/gateway.php?cmd=download_file&bin=1&preview=1&file_id=$1" target="_blank">',
        reptxt: ""
    }), b.reg_cmp.push({
        key: /\[\/download\]/g,
        rep: "</a></div>",
        reptxt: ""
    }), b.reg_cmp.push({
        key: /\[preview id=(\d+) ht=(\d+)\]/g,
        rep: '<div><a href="' + SERVER_PATH + '/gateway.php?cmd=download_file&bin=1&preview=1&file_id=$1" target="_blank"><img class="cw_file_preview_img" style="height:$2px" src="' + SERVER_PATH + '/gateway.php?cmd=preview_file&bin=1&file_id=$1"/></a></div>',
        reptxt: ""
    })) : (b.reg_cmp.push({
        key: /\[download:(\d+)\]/g,
        rep: '<div><a href="gateway.php?cmd=download_file&bin=1&file_id=$1" target="_downloadFrame">',
        reptxt: ""
    }), b.reg_cmp.push({
        key: /\[preview id=(\d+) ht=(\d+)\]/g,
        rep: '<div><img class="_filePreview imagePreview" data-file-id="$1" style="height:$2px" src="gateway.php?cmd=preview_file&bin=1&file_id=$1"/></div>',
        reptxt: ""
    }));
    b.reg_cmp.push({
        key: /\[piconname:(\d+)\]/g,
        rep: "[picon:$1] [pname:$1]",
        reptxt: "[pname:$1]"
    });
    b.reg_cmp.push({
        key: /\[hr\]/g,
        rep: '<hr size="1"/>',
        reptxt: " --- "
    });
    for (var a = [], e = 0; e < b.emoticon.length; e++) a.push({
        key: b.emoticon[e].key,
        regex: b.emoticon[e].regex,
        src: b.emoticon[e].src,
        title: b.emoticon[e].title
    });
    for (e = 0; e < b.secret_emoticon.length; e++) a.push({
        key: b.secret_emoticon[e].key,
        regex: b.secret_emoticon[e].regex,
        src: b.secret_emoticon[e].src,
        title: b.secret_emoticon[e].title
    });
    var d = function(a) {
        var b = {
                "&#58;": /:/g,
                "&#40;": /\(/g,
                "&#41;": /\)/g,
                "&#91;": /\[/g,
                "&#93;": /\]/g,
                "&#45;": /-/g,
                "&#124;": /\|/g,
                "&#42;": /\*/g,
                "&#94;": /\^/g
            },
            f;
        for (f in b) a = a.replace(b[f], f);
        return a
    };
    a.sort(function(a, b) {
        return b.key.length - a.key.length
    });
    for (var e = 0, f = a.length; e < f; e++) {
        var i = d(a[e].key);
        b.reg_cmp.push({
            key: a[e].regex,
            rep: '<img src="./image/emoticon/' + a[e].src + '" title="' + a[e].title + " " + i + '" alt="' + i + '" class="ui_emoticon"/>',
            reptxt: a[e].key
        })
    }
    PLATFORM == "web" ? (b.reg_cmp.push({
        key: /(https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+)/gi,
        rep: '<a href="$1" title="$1" target="_blank" class="ui_sp_favicon_parent"><link_title>$1</link_title></a>',
        reptxt: "$1"
    }), a = "", b.displayEsetLink() && (a = '<div class="esetLink"><a href="http://www.eset-smart-security.jp/go/101304/e42/" target="_blank">' + L._chatwork_file_upload_eset_link + "</a></div>"), b.reg_cmp.push({
        key: /\[\/download\]/g,
        rep: "</a></div>" + a,
        reptxt: ""
    })) : PLATFORM == "mobile-web" && (b.reg_cmp.push({
        key: /(https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+|tel:\d+)/gi,
        rep: '<a href="$1" title="$1" target="_blank" class="ui_sp_favicon_parent"><link_title>$1</link_title></a>',
        reptxt: "$1"
    }), b.reg_cmp.push({
        key: /(tel(\d+))/gi,
        rep: '<a href="tel:$2" title="tel:$2" target="_blank" class="ui_sp_favicon_parent"><link_title>$1</link_title></a>',
        reptxt: "$1"
    }));
    b.reg_cmp.push({
        key: /(?: ~~~CW-NOURL-ESCAPE-START~~~|~~~CW-NOURL-ESCAPE-END~~~ )/g,
        rep: ""
    });
    b.reg_cmp.push({
        key: /~~~CW-ESCAPE-(?:START|END)~~~/g,
        rep: ""
    })
}

function ChatWork(b) {
    var a = this,
        e = !0,
        d = !0;
    a.version = b;
    a.api_version = 4;
    a.announce_id = void 0;
    a.is_first_load = !0;
    a.init_loaded = !1;
    a.stop_watching = !1;
    a.watching = !1;
    a.watch_timer = null;
    a.watch_lasttime = 0;
    a.online_status_timer = null;
    a.delay = 1E3;
    a.last_id = 0;
    a.enable_popup = !1;
    a.last_timeline_buildkey = "";
    a.last_tasklist_buildkey = "";
    a.last_filelist_buildkey = "";
    a.ajax_lasttime = 0;
    a.ajax_cmd_count = {};
    a.error_count = 0;
    a.reg_cmp = [];
    a.plan = "";
    a.is_business = !1;
    a.is_admin = !1;
    a.is_admin_user = !1;
    a.is_security = !1;
    a.is_enterprise = !1;
    a.available_biwa = !1;
    a.switch_biwa = !1;
    a.first_biwa = !1;
    a.security_dat = {};
    var f = {};
    a.emoticon = [];
    a.secret_emoticon = [];
    a.prepare = function() {
        a.emoticon = [{
            title: L.emoticon_smile,
            key: ":)",
            regex: /:\)/g,
            src: "emo_smile.gif"
        }, {
            title: L.emoticon_sad,
            key: ":(",
            regex: /:\(/g,
            src: "emo_sad.gif"
        }, {
            title: L.emoticon_more_smile,
            key: ":D",
            regex: /:D/g,
            src: "emo_more_smile.gif"
        }, {
            title: L.emoticon_lucky,
            key: "8-)",
            regex: /8-\)/g,
            src: "emo_lucky.gif"
        }, {
            title: L.emoticon_surprise,
            key: ":o",
            regex: /:o/g,
            src: "emo_surprise.gif"
        }, {
            title: L.emoticon_wink,
            key: ";)",
            regex: /;\)/g,
            src: "emo_wink.gif"
        }, {
            title: L.emoticon_tears,
            key: ";(",
            regex: /;\(/g,
            src: "emo_tears.gif"
        }, {
            title: L.emoticon_sweat,
            key: "(sweat)",
            regex: /\(sweat\)/g,
            src: "emo_sweat.gif"
        }, {
            title: L.emoticon_mumu,
            key: ":|",
            regex: /:\|/g,
            src: "emo_mumu.gif"
        }, {
            title: L.emoticon_kiss,
            key: ":*",
            regex: /:\*/g,
            src: "emo_kiss.gif"
        }, {
            title: L.emoticon_tongueout,
            key: ":p",
            regex: /:p/g,
            src: "emo_tongueout.gif"
        }, {
            title: L.emoticon_blush,
            key: "(blush)",
            regex: /\(blush\)/g,
            src: "emo_blush.gif"
        }, {
            title: L.emoticon_wonder,
            key: ":^)",
            regex: /:\^\)/g,
            src: "emo_wonder.gif"
        }, {
            title: L.emoticon_snooze,
            key: "|-)",
            regex: /\|-\)/g,
            src: "emo_snooze.gif"
        }, {
            title: L.emoticon_love,
            key: "(inlove)",
            regex: /\(inlove\)/g,
            src: "emo_love.gif"
        }, {
            title: L.emoticon_grin,
            key: "]:)",
            regex: /\]:\)/g,
            src: "emo_grin.gif"
        }, {
            title: L.emoticon_talk,
            key: "(talk)",
            regex: /\(talk\)/g,
            src: "emo_talk.gif"
        }, {
            title: L.emoticon_yawn,
            key: "(yawn)",
            regex: /\(yawn\)/g,
            src: "emo_yawn.gif"
        }, {
            title: L.emoticon_puke,
            key: "(puke)",
            regex: /\(puke\)/g,
            src: "emo_puke.gif"
        }, {
            title: L.emoticon_ikemen,
            key: "(emo)",
            regex: /\(emo\)/g,
            src: "emo_ikemen.gif"
        }, {
            title: L.emoticon_otaku,
            key: "8-|",
            regex: /8\-\|/g,
            src: "emo_otaku.gif"
        }, {
            title: L.emoticon_ninmari,
            key: ":#)",
            regex: /:#\)/g,
            src: "emo_ninmari.gif"
        }, {
            title: L.emoticon_nod,
            key: "(nod)",
            regex: /\(nod\)/g,
            src: "emo_nod.gif"
        }, {
            title: L.emoticon_shake,
            key: "(shake)",
            regex: /\(shake\)/g,
            src: "emo_shake.gif"
        }, {
            title: L.emoticon_wry_smile,
            key: "(^^;)",
            regex: /\(\^\^\;\)/g,
            src: "emo_wry_smile.gif"
        }, {
            title: L.emoticon_whew,
            key: "(whew)",
            regex: /\(whew\)/g,
            src: "emo_whew.gif"
        }, {
            title: L.emoticon_clap,
            key: "(clap)",
            regex: /\(clap\)/g,
            src: "emo_clap.gif"
        }, {
            title: L.emoticon_bow,
            key: "(bow)",
            regex: /\(bow\)/g,
            src: "emo_bow.gif"
        }, {
            title: L.emoticon_roger,
            key: "(roger)",
            regex: /\(roger\)/g,
            src: "emo_roger.gif"
        }, {
            title: L.emoticon_muscle,
            key: "(flex)",
            regex: /\(flex\)/g,
            src: "emo_muscle.gif"
        }, {
            title: L.emoticon_dance,
            key: "(dance)",
            regex: /\(dance\)/g,
            src: "emo_dance.gif"
        }, {
            title: L.emoticon_komanechi,
            key: "(:/)",
            regex: /\(:\/\)/g,
            src: "emo_komanechi.gif"
        }, {
            title: L.emoticon_devil,
            key: "(devil)",
            regex: /\(devil\)/g,
            src: "emo_devil.gif"
        }, {
            title: L.emoticon_star,
            key: "(*)",
            regex: /\(\*\)/g,
            src: "emo_star.gif"
        }, {
            title: L.emoticon_heart,
            key: "(h)",
            regex: /\(h\)/g,
            src: "emo_heart.gif"
        }, {
            title: L.emoticon_flower,
            key: "(F)",
            regex: /\(F\)/g,
            src: "emo_flower.gif"
        }, {
            title: L.emoticon_cracker,
            key: "(cracker)",
            regex: /\(cracker\)/g,
            src: "emo_cracker.gif"
        }, {
            title: L.emoticon_cake,
            key: "(^)",
            regex: /\(\^\)/g,
            src: "emo_cake.gif"
        }, {
            title: L.emoticon_coffee,
            key: "(coffee)",
            regex: /\(coffee\)/g,
            src: "emo_coffee.gif"
        }, {
            title: L.emoticon_beer,
            key: "(beer)",
            regex: /\(beer\)/g,
            src: "emo_beer.gif"
        }, {
            title: L.emoticon_handshake,
            key: "(handshake)",
            regex: /\(handshake\)/g,
            src: "emo_handshake.gif"
        }, {
            title: L.emoticon_yes,
            key: "(y)",
            regex: /\(y\)/g,
            src: "emo_yes.gif"
        }];
        a.secret_emoticon = [{
            title: L.emoticon_ec14,
            key: "(ec14)",
            regex: /\(ec14\)/g,
            src: "emo_ceo.gif"
        }];
        a.view = new ChatWorkView(a);
        a.request = new Request;
        a.storage = new Storage;
        a.localStorage = new LocalStorage;
        a.view.prepare()
    };
    var i = !1;
    a.prepareRegExp = function() {
        prepare_replace_code(a);
        i = !0
    };
    a.getLiveUrl = function(a,
        b, f) {
        a = "./live.php?rid=" + a + "&aid=";
        a += b.join(",");
        switch (f) {
            case "voice":
                a += "&type=voice";
                break;
            default:
                a += "&type=video"
        }
        return a
    };
    a.getLiveUrlById = function(a, b) {
        var f = "./live/" + a;
        switch (b) {
            case "voice":
                f += "?type=voice";
                break;
            default:
                f += "?type=video"
        }
        return f
    };
    a.alert = function(a, b) {
        typeof a == "object" && (a = a.length > 0 ? a.join("\n") : L.raise_error);
        if (!a) a = L.raise_error;
        CW.view.alert(a, b)
    };
    a.confirm = function(a, b, f) {
        CW.view.confirm(a, b, f)
    };
    a.showProgress = function(a) {
        CW.view.showProgress(a)
    };
    a.hideProgress =
        function() {
            CW.view.hideProgress()
        };
    var h = {};
    a.read = function(b, f) {
        var d;
        b == void 0 && (b = 4E3);
        if (a.isLogin() && (d = f == void 0 ? RM : RL.rooms[f]) && d.read_lock != !0) {
            a.cancelRead(d.id);
            var e = d.getUnreadNum();
            if (e > 0) {
                var i = RL.rooms[d.id],
                    g = i.getViewStat();
                i.reading = !0;
                h[d.id] = setTimeout(function() {
                    RM && RM.id == i.id ? g = RM.getViewStat() : e = i.getUnreadNum();
                    e > g.noview_num && CW.get("gateway.php", {
                        cmd: "read",
                        room_id: i.id,
                        mid: i.mid,
                        last_chat_id: g.last_read_id
                    }, function(a) {
                        if (a.read_num) {
                            var b = i.getUnreadNum();
                            i.read_num =
                                a.read_num;
                            var f = i.getUnreadNum(),
                                d = i.getMentionNum();
                            i.mention_num = a.mention_num;
                            a = i.getMentionNum();
                            b > 0 && f == 0 ? RL.unread_room_sum-- : b == 0 && f > 0 && RL.unread_room_sum++;
                            d > 0 && a == 0 ? RL.mention_room_sum-- : d == 0 && a > 0 && RL.mention_room_sum++;
                            RL.view.updateUnreadNum(i.id);
                            RL.view.updateSumNumbers();
                            RM.id == i.id && i.timeline.read(e)
                        }
                        i.reading = !1
                    }, function(a, b) {
                        if (b && b.error && b.error == "no_member") {
                            var f = i.id;
                            CW.post("gateway.php", {
                                cmd: "is_room_member",
                                rid: f
                            }, function(a) {
                                a.is_room_member == !1 && (RL.deleteRoom(f), RL.build())
                            })
                        }
                        i.reading = !1
                    });
                    RM && RM.getUnreadNum() > 0 && CW.read()
                }, b)
            }
        }
    };
    a.cancelRead = function(a) {
        h[a] && clearTimeout(h[a])
    };
    a.sendFeedback = function(a) {
        a = $.extend({
            message: "",
            version: 1,
            success: null,
            error: null
        }, a);
        CW.post("gateway.php", {
            cmd: "send_feedback",
            version: a.version,
            message: a.message
        }, function() {
            typeof a.success == "function" && a.success()
        }, function() {
            typeof a.error == "function" && a.error()
        })
    };
    a.popup = function(b, f, d, e) {
        return a.view.popup(b, f, d, e)
    };
    a.playSound = function(b, f) {
        return a.view.playSound(b, f)
    };
    a.stopSound = function(b) {
        return a.view.stopSound(b)
    };
    var j = !0,
        k = !1;
    a.watch = function(b) {
        if (!a.watching) {
            a.watching = !0;
            a.watch_timer && clearTimeout(a.watch_timer);
            a.watch_timer = setTimeout(function() {
                a.watch(!0)
            }, 3E5);
            if (a.last_id == 0) {
                if (!RL) return;
                j && (j = !1, a.view.firstWatch());
                CW.get("gateway.php", {
                    cmd: "init_load",
                    rid: RL.lazy_select,
                    type: RL.load_type,
                    "new": 1
                }, function(a) {
                    CW.setInitData(a)
                })
            } else CW.get("gateway.php", {
                cmd: "get_update",
                account_id: AC.myid,
                last_id: a.last_id,
                ver: a.version,
                "new": 1
            }, function(f) {
                if (a.last_id != f.last_id) {
                    a.last_id = f.last_id;
                    var d =
                        f.update_info,
                        e = {},
                        i;
                    for (i in d) {
                        var h = d[i];
                        switch (i) {
                            case "room":
                                for (var g in h) {
                                    if (h[g].rd && (RL.deleteRoom(g), !h[g].a)) continue;
                                    h[g].lt != void 0 && RL.setLastUpdateTime(g, h[g].lt);
                                    h[g].i && RL.setInfoUpdate(g);
                                    h[g].p && RL.setPersonalUpdate(g);
                                    h[g].d && RL.setDescUpdate(g);
                                    h[g].m && RL.setMemberUpdate(g);
                                    h[g].t && RL.setTaskUpdate(g);
                                    if (h[g].cd)
                                        for (var l in h[g].cd)
                                            if (RL.rooms[g].timeline && (RL.rooms[g].timeline.deleteChat(l), RL.setUpdate(!0)), RM && g == RM.id) e.RM = !0;
                                    if (h[g].ce)
                                        for (l in h[g].ce)
                                            if (!h[g].cd || !h[g].cd[l])
                                                if (RL.rooms[g].timeline &&
                                                    (RL.rooms[g].timeline.refreshChat(l), RL.setUpdate(!0)), RM && g == RM.id) e.RM = !0;
                                    if (h[g].fe)
                                        for (var n in h[g].fe)(!h[g].fd || !h[g].fd[n]) && FL.refreshFile(n);
                                    if (h[g].fd)
                                        for (n in h[g].fd)
                                            if (FL.deleteFileStat(n), RM && g == RM.id) e.RM = !0;
                                    if (h[g].tc) {
                                        for (var m in h[g].tc)(!h[g].td || !h[g].td[m]) && TK.checkTask(m, h[g].tc[m], !0);
                                        TK.reflashTaskList(g)
                                    }
                                    if (h[g].te)
                                        for (m in h[g].te)(!h[g].td || !h[g].td[m]) && TK.refreshTask(m);
                                    if (h[g].td) {
                                        for (m in h[g].td) TK.deleteTaskStat(m);
                                        TK.reflashTaskList(g)
                                    }
                                    if (h[g].s != void 0) RL.rooms[g].sticky =
                                        h[g].s, RL.setUpdate(!0);
                                    h[g].lvc != void 0 && CW.openLiveNotification(h[g].lvc, g);
                                    h[g].lvr != void 0 && CW.closeLiveNotification(h[g].lvr, g)
                                }
                                break;
                            case "account":
                                if (h.a) {
                                    var o = [],
                                        j;
                                    for (j in h.a) o.push(parseInt(j, 10));
                                    AC.refreshAccount(o, !0)
                                }
                                h.s && ST.getSetting();
                                if (h.r)
                                    for (g in o = h.r, AC.account_dat[o] && AC.refreshContactList(), RL.rooms) RL.rooms[g].member_dat[o] && RL.setMemberUpdate(g);
                                h.n && ST.getAnnounce();
                                break;
                            case "contact":
                                h.l && AC.refreshContactList();
                                if (h.m) {
                                    o = [];
                                    for (j in h.m) o.push(parseInt(j, 10));
                                    AC.refreshMentionInfo(o)
                                }
                                h.a &&
                                    h.a.length > 0 && AC.client_addContact(h.a);
                                h.d && h.d.length > 0 && AC.client_deleteContact(h.d);
                                break;
                            case "category":
                                h.l && RL.refreshCategory()
                        }
                    }
                    e.RM && RM.build();
                    RL.hasUpdate() && RL.build();
                    a.watch_lasttime = microtime(!0);
                    b && a.comet()
                }
                if (a.announce_id != f.announce_id) a.announce_id = f.announce_id, ST.getAnnounce();
                f.update != void 0 && (k || (d = f.update.replace("a", ""), f.update.indexOf("a") == -1 && a.view.alertUpdated(d), a.view.showUpdated(d)), k = !0)
            });
            a.watching = !1
        }
    };
    a.comet = function() {
        a.request.comet()
    };
    a.postLoad = function() {
        a.view.postLoad()
    };
    a.isOnline = function() {
        return e
    };
    a.isLogin = function() {
        return d
    };
    a.setOnline = function() {
        d = e = !0;
        a.view.setOnline()
    };
    a.setConnectionError = function(b) {
        e = b == "NO LOGIN" ? !0 : b == "INVALID USER" ? !0 : b == "INVALID TOKEN" ? !0 : b == "NO TOKEN" ? !0 : b == "IP ERROR" ? !0 : !1;
        d = !1;
        a.view.setConnectionError(b)
    };
    a.initRoomLoad = function() {
        a.view.initRoomLoad()
    };
    a.initComplete = function() {
        a.view.initComplete()
    };
    a.post = function(b, f, d, e) {
        return a.ajax({
            type: "POST",
            dataType: "json",
            async: !0,
            url: b,
            data: f,
            success: d,
            error: e
        })
    };
    a.postSync = function(b,
        f, d, e) {
        return a.ajax({
            type: "POST",
            dataType: "json",
            async: !1,
            url: b,
            data: f,
            success: d,
            error: e
        })
    };
    a.get = function(b, f, d, e) {
        return a.ajax({
            type: "GET",
            dataType: "json",
            async: !0,
            url: b,
            data: f,
            success: d,
            error: e
        })
    };
    a.getSync = function(b, f, d, e) {
        return a.ajax({
            type: "GET",
            dataType: "json",
            async: !1,
            url: b,
            data: f,
            success: d,
            error: e
        })
    };
    a.ajax = function(b) {
        CW.isOnline() || CW.checkOnline(function() {}, 1);
        if (AC) {
            var d = "";
            b.data.cmd && (b.url += "?cmd=" + b.data.cmd, d = b.data.cmd.toString(), delete b.data.cmd);
            d && f[d] ? (b.dataType = "jsonp",
                b.url = ACCOUNT_SERVER_PATH + "/" + b.url) : b.url = SERVER_PATH + "/" + b.url;
            b.url += "&myid=" + AC.myid + "&_v=" + a.version + "&_av=" + a.api_version + "&_t=" + ACCESS_TOKEN + "&ln=" + LANGUAGE;
            b.timeout = 3E5;
            if (CW.isLogin()) {
                if (typeof b.error != "function") b.error = function(b) {
                    a.ajax_lasttime = microtime(!0);
                    typeof b == "object" && (b = b.length != void 0 ? b.join("\n") : "");
                    if (b) switch (b) {
                        case "NO LOGIN":
                        case "INVALID USER":
                        case "NO TOKEN":
                        case "INVALID TOKEN":
                        case "BAD LOGIN INFO":
                        case "UUID ERROR":
                        case "IP ERROR":
                        case "LOCK":
                        case "OFFLINE":
                        case "TIMEOUT":
                            break;
                        default:
                            CW.alert(b)
                    }
                    CW.checkOnline()
                };
                else {
                    var e = b.error;
                    b.error = function(b, f) {
                        a.ajax_lasttime = microtime(!0);
                        e(b, f);
                        CW.checkOnline()
                    }
                }
                if (typeof b.success != "function") b.success = function() {
                    a.ajax_lasttime = microtime(!0)
                };
                else {
                    var i = b.success;
                    b.success = function(f) {
                        if (f && f.status.success == !0) a.ajax_lasttime = microtime(!0), i(f.result);
                        else {
                            var d = "";
                            if (f && (d = f.status.message, d == "NO LOGIN" || d == "INVALID USER" || d == "NO TOKEN" || d == "INVALID TOKEN" || d == "IP ERROR")) CW.setConnectionError(d), CW.checkOnline();
                            b.error(d,
                                f.result)
                        }
                    }
                }
                return a.request.ajax(b)
            } else typeof b.error == "function" && b.error()
        }
    };
    var g = !1,
        l = null,
        m = 1E4;
    a.checkOnline = function(b, f) {
        typeof b != "function" && (b = function() {});
        f && (l && (clearTimeout(l), l = null), g = !1);
        if (g === !1) {
            g = !0;
            var d = function() {
                    g = !1;
                    CW.setOnline();
                    b()
                },
                e = function(f) {
                    f == void 0 && (f = m);
                    m *= m < 10 ? 3 : 1.2;
                    l || (l = setTimeout(function() {
                        g = !1;
                        l = null;
                        a.checkOnline(b)
                    }, f))
                };
            setTimeout(function() {
                a.request.checkOnline(function() {
                    d();
                    m = 1E4
                }, function(a) {
                    CW.setConnectionError(a);
                    a == "NO LOGIN" || a == "INVALID USER" ||
                        a == "NO TOKEN" || a == "INVALID TOKEN" || a == "BAD LOGIN INFO" || a == "UUID ERROR" || a == "IP ERROR" || a == "LOCK" ? CW.view.showLoginDialog(d, e, a) : a == "OFFLINE" ? CW.view.showOfflineDialog(d, e) : a == "TIMEOUT" ? CW.view.showTimeoutDialog(d, e) : e()
                })
            }, 1E3)
        }
    };
    a.renderMessage = function(b, f) {
        if (!b || b.length == void 0) return "";
        f == void 0 && (f = {});
        i || a.prepareRegExp();
        return a.view.renderMessage(b, f)
    };
    var n = new Date;
    a.getDate = function(a, b) {
        n.setTime(a * 1E3);
        var f = n.getFullYear(),
            d = n.getMonth() + 1,
            e = n.getDate(),
            i = n.getHours(),
            h = n.getMinutes(),
            g = n.getSeconds();
        i < 10 && (i = "0" + i);
        h < 10 && (h = "0" + h);
        g < 10 && (g = "0" + g);
        b == void 0 && (b = ST.data.dateformat + " H:i");
        return b.replace("Y", f).replace("m", d).replace("d", e).replace("H", i).replace("i", h).replace("s", g)
    };
    var o = {
        hovertip: !0,
        clicktip: !0,
        small: !1,
        ui: !1,
        src: !1
    };
    a.getAvatarPanel = function(b, f) {
        if (b) {
            if (f == void 0) f = o;
            else
                for (var d in o) f[d] == void 0 && (f[d] = o[d]);
            return a.view.getAvatarPanel(b, f)
        }
    };
    a.getCoverPanel = function(b, f) {
        var d = {
            src: !1,
            extraclass: !1
        };
        if (b) {
            if (f == void 0) f = d;
            else
                for (var e in d) f[e] ==
                    void 0 && (f[e] = d[e]);
            return a.view.getCoverPanel(b, f)
        }
    };
    a.getName = function(b) {
        return a.view.getName(b)
    };
    a.getOrgName = function(b) {
        return a.view.getOrgName(b)
    };
    a.getDepartment = function(b) {
        return a.view.getDepartment(b)
    };
    a.getOrgTitle = function(b) {
        return a.view.getOrgTitle(b)
    };
    a.getFullName = function(b) {
        return a.view.getFullName(b)
    };
    a.getChatWorkId = function(b) {
        return a.view.getChatWorkId(b)
    };
    a.getChatWorkIdLink = function(b) {
        return a.view.getChatWorkIdLink(b)
    };
    a.getSkypeLink = function(b, f) {
        return a.view.getSkypeLink(b,
            f)
    };
    a.getTwitterLink = function(b, f) {
        return a.view.getTwitterLink(b, f)
    };
    a.getFacebookLink = function(b, f) {
        return a.view.getFacebookLink(b, f)
    };
    a.getEmailLink = function(b) {
        return a.view.getEmailLink(b)
    };
    a.getOrgTellLink = function(b) {
        return a.view.getOrgTellLink(b)
    };
    a.getExtensionTelLink = function(b) {
        return a.view.getExtensionTelLink(b)
    };
    a.getMobileTelLink = function(b) {
        return a.view.getMobileTelLink(b)
    };
    a.isEmail = function(a) {
        if (a.match(/^[A-Za-z0-9]+[\w-]+@[\w\.-]+\.\w{2,}$/)) return !0;
        return !1
    };
    a.isTelNumber =
        function(a) {
            if (a.match(/^[0-9]+[0-9-]+[0-9]+$/)) return !0;
            return !1
        };
    a.getRoomName = function(b) {
        if (b && (b = RL.rooms[b])) return b.type == "contact" ? a.getName(b.getAccountId()) : escape_html(b.getName())
    };
    var u = {
        chatlink: !0,
        webservice: !0,
        request_contact: !0
    };
    a.getContactPanel = function(b, f) {
        if (b) {
            if (f == void 0) f = u;
            else
                for (var d in u) f[d] == void 0 && (f[d] = u[d]);
            return a.view.getContactPanel(b, f)
        }
    };
    a.registerAvatar = function(b) {
        a.view.registerAvatar(b)
    };
    var r = {
        type: "timeline"
    };
    a.getFilePanel = function(b, f) {
        if (f == void 0) f =
            r;
        else
            for (var d in r) f[d] == void 0 && (f[d] = r[d]);
        return a.view.getFilePanel(FL.file_id2file_dat[b] == void 0 ? !1 : FL.file_id2file_dat[b], f)
    };
    var v = {
        type: "timeline"
    };
    a.getTaskPanel = function(b, f) {
        if (!b) return !1;
        if (f == void 0) f = v;
        else
            for (var d in v) f[d] == void 0 && (f[d] = v[d]);
        return a.view.getTaskPanel(TK.task_id2task_dat[b] == void 0 ? !1 : TK.task_id2task_dat[b], f)
    };
    a.openLiveNotification = function(b, f) {
        a.view.openLiveNotification(b, f)
    };
    a.closeLiveNotification = function(b, f) {
        a.view.closeLiveNotification(b, f)
    };
    a.buildLayout =
        function() {
            a.view.buildLayout()
        };
    a.resizeLayout = function() {
        a.view.resizeLayout()
    };
    a.getMemoryUsage = function() {
        return 0
    };
    a.showStorageLimitDialog = function(b) {
        a.view.showStorageLimitDialog(b)
    };
    a.setLimitDialog = function(b, f) {
        a.view.setLimitDialog(b, f)
    };
    a.setInitData = function(b) {
        a.last_id = b.last_id;
        a.announce_id = b.announce_id;
        a.plan = b.plan;
        a.is_admin = b.is_admin;
        a.is_admin_user = b.is_admin_user;
        a.is_business = b.is_business;
        a.is_security = b.is_security;
        a.contact_limit_num = b.contact_limit_num;
        a.group_limit_num =
            b.group_limit_num;
        a.is_enterprise = b.is_enterprise;
        a.available_biwa = b.available_biwa;
        a.switch_biwa = b.switch_biwa;
        a.first_biwa = b.first_biwa;
        a.closed_old_ui = b.closed_old_ui;
        if (a.is_security) a.security_dat = b.security_dat;
        ST.updateSetting(b.setting_data);
        AC.updateContactList(b.contact_dat, b.mention_dat, b.myrequest_dat, b.request_dat);
        RL.updateCategory(b.cat_dat);
        RL.updateRoomData(b.room_dat);
        b.announce_dat && ST.updateAnnounce(b.announce_dat);
        CW.postLoad();
        FL.updateStorageInfo(b.storage, b.storage_limit, b.storage_limit_time,
            b.is_storage_limit);
        if (!a.init_loaded) {
            for (var b = RL.getSortedRoomList(), f = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                RL.rooms[e].getUnreadNum() > 0 && (f++, RL.setInfoUpdate(e));
                if (f > 100) break
            }
            RL.build()
        }
        a.init_loaded = !0;
        a.comet()
    };
    a.isMatchedWithKeyList = function(a, b) {
        for (var f = b.toLowerCase(), d = a.length; d--;)
            if (f.indexOf(a[d]) == -1) return !1;
        return !0
    };
    a.splitWithSpace = function(a) {
        return a.split(/[ \u3000]+/)
    };
    a.displayEsetLink = function() {
        return LANGUAGE === "ja" && !CW.is_business
    };
    a.checkNotificationPermission = function() {
        ST.getSetting(function() {
            if (NotificationAPI) {
                var a =
                    ST.data.desktop_alert,
                    b = NotificationAPI.checkPermission();
                a === 1 && b === 1 && NotificationAPI.requestPermission(function(a) {
                    if (a === 0) CW.enable_popup = !0
                })
            }
        })
    }
}

function Account(b) {
    var a = this;
    a.myid = parseInt(b, 10);
    a.account_dat = {};
    a.unknown_flag = {};
    a.contact_list = [];
    a.contact_flag = {};
    a.myrequest_dat = {};
    a.request_dat = {};
    a.facebook_app_id = "";
    a.prepare = function() {
        a.facebook_app_id = is_local_env ? "194987520565581" : "270897682951829";
        a.view = new AccountView(a);
        a.view.prepare()
    };
    a.setName = function(b, d) {
        a.setParam(b, "nm", d)
    };
    a.setOrgName = function(b, d) {
        a.setParam(b, "onm", d)
    };
    a.setDepartment = function(b, d) {
        a.setParam(b, "dp", d)
    };
    a.setTitle = function(b, d) {
        a.setParam(b, "tt",
            d)
    };
    a.setChatWorkId = function(b, d) {
        a.setParam(b, "cwid", d)
    };
    a.setGroupId = function(b, d) {
        a.setParam(b, "gid", d)
    };
    a.setAvatarId = function(b, d) {
        a.setParam(b, "av", d)
    };
    a.setCoverId = function(b, d) {
        a.setParam(b, "cv", d)
    };
    a.setRoomId = function(b, d) {
        a.setParam(b, "rid", parseInt(d, 10))
    };
    a.setNickName = function(b, d) {
        a.setParam(b, "nn", d)
    };
    a.setMentionNum = function(b, d) {
        a.setParam(b, "mn", d)
    };
    a.setSkype = function(b, d) {
        a.setParam(b, "sp", d)
    };
    a.setTwitter = function(b, d) {
        a.setParam(b, "tw", d)
    };
    a.setFacebook = function(b, d) {
        a.setParam(b,
            "fb", d)
    };
    a.setUrl = function(b, d) {
        a.setParam(b, "url", d)
    };
    a.setAddress = function(b, d) {
        a.setParam(b, "ad", d)
    };
    a.setIntroduction = function(b, d) {
        a.setParam(b, "intro", d)
    };
    a.setEmail = function(b, d) {
        a.setParam(b, "mail", d)
    };
    a.setOrgTel = function(b, d) {
        a.setParam(b, "otel", d)
    };
    a.setExtensionTel = function(b, d) {
        a.setParam(b, "etel", d)
    };
    a.setMobileTel = function(b, d) {
        a.setParam(b, "mtel", d)
    };
    a.setUndisclosed = function(b, d) {
        a.setParam(b, "ud", d)
    };
    a.setParam = function(b, d, e) {
        b = parseInt(b, 10);
        a.account_dat[b] == void 0 && (a.account_dat[b] = {});
        a.account_dat[b][d] = e
    };
    a.getName = function(b) {
        var d = a.getParam(b, "nm", !1);
        if (d === !1) a.unknown_flag[b] = !0, d = "Loading... ";
        else if (d == "") return L.deleted_user;
        return d
    };
    a.getOrgName = function(b) {
        return a.getParam(b, "onm", "")
    };
    a.getDepartment = function(b) {
        return a.getParam(b, "dp", "")
    };
    a.getTitle = function(b) {
        return a.getParam(b, "tt", "")
    };
    a.getFullName = function(b) {
        var d = a.getOrgName(b);
        d && (d += " ");
        return d + a.getName(b)
    };
    a.getOrgTitle = function(b) {
        var d = a.getOrgName(b);
        d && (d += " ");
        return d + a.getDepartment(b)
    };
    a.getChatWorkId = function(b) {
        return a.getParam(b, "cwid", "")
    };
    a.getGroupId = function(b) {
        return a.getParam(b, "gid", 0)
    };
    a.getNickName = function(b, d) {
        if (d) return a.getParam(b, "nn", "");
        else {
            var e = a.getParam(b, "nn", "");
            if (e === "") return L.nickname_prefix + AC.getName(b) + L.nickname_suffix;
            return e
        }
    };
    a.getDefaultNickName = function(a) {
        return L.nickname_prefix + AC.getName(a) + L.nickname_suffix
    };
    a.getMentionNum = function(b) {
        return a.getParam(b, "mn", 0)
    };
    var e = ["blue", "green", "orange", "red", "violet", "yellow"];
    a.getAvatarId =
        function(b) {
            var d = a.getParam(b, "av", "0/.");
            d == "0/." && (d = a.isDeleted(b) ? "ico_avatar_notfound.png" : "ico_default_" + e[b % e.length] + ".png");
            return d
        };
    a.getCoverId = function(b) {
        var d = ["block_pattern", "check_blue", "flower_blue", "flower_pink", "leaf", "light", "mizutama", "party", "retro", "square", "zebra"],
            e = a.getParam(b, "cv", "0/.");
        e == "0/." && (e = a.isDeleted(b) ? "not_found.jpg" : d[b % d.length] + ".jpg");
        return e
    };
    a.getSkype = function(b) {
        return a.getParam(b, "sp", "")
    };
    a.getTwitter = function(b) {
        return a.getParam(b, "tw", "")
    };
    a.getFacebook = function(b) {
        return a.getParam(b, "fb", "")
    };
    a.getUrl = function(b) {
        return a.getParam(b, "url", "")
    };
    a.getAddress = function(b) {
        return a.getParam(b, "ad", "")
    };
    a.getIntroduction = function(b) {
        return a.getParam(b, "intro", "")
    };
    a.getEmail = function(b) {
        return a.getParam(b, "mail", "")
    };
    a.getOrgTel = function(b) {
        return a.getParam(b, "otel", "")
    };
    a.getExtensionTel = function(b) {
        return a.getParam(b, "etel", "")
    };
    a.getMobileTel = function(b) {
        return a.getParam(b, "mtel", "")
    };
    a.getOrgNamePriv = function(b) {
        return a.getParam(b,
            "onm_priv", "")
    };
    a.getDepartmentPriv = function(b) {
        return a.getParam(b, "dp_priv", "")
    };
    a.getTitlePriv = function(b) {
        return a.getParam(b, "tt_priv", "")
    };
    a.getAvatarPriv = function(b) {
        return a.getParam(b, "av_priv", "")
    };
    a.getCoverPriv = function(b) {
        return a.getParam(b, "cv_priv", "")
    };
    a.getSkypePriv = function(b) {
        return a.getParam(b, "sp_priv", "")
    };
    a.getTwitterPriv = function(b) {
        return a.getParam(b, "tw_priv", "")
    };
    a.getFacebookPriv = function(b) {
        return a.getParam(b, "fb_priv", "")
    };
    a.getUrlPriv = function(b) {
        return a.getParam(b,
            "url_priv", "")
    };
    a.getAddressPriv = function(b) {
        return a.getParam(b, "ad_priv", "")
    };
    a.getIntroductionPriv = function(b) {
        return a.getParam(b, "intro_priv", "")
    };
    a.getEmailPriv = function(b) {
        return a.getParam(b, "mail_priv", "")
    };
    a.getOrgTelPriv = function(b) {
        return a.getParam(b, "otel_priv", "")
    };
    a.getExtensionTelPriv = function(b) {
        return a.getParam(b, "etel_priv", "")
    };
    a.getMobileTelPriv = function(b) {
        return a.getParam(b, "mtel_priv", "")
    };
    a.isUndisclosed = function(b) {
        return a.getParam(b, "ud", 0)
    };
    a.getParam = function(b, d,
        e) {
        if (b == void 0) return !1;
        b = parseInt(b, 10);
        return a.account_dat[b] != void 0 && a.account_dat[b][d] != void 0 ? a.account_dat[b][d] : e
    };
    a.getSortedMemberList = function() {
        var b = [],
            d;
        for (d in a.account_dat) d != 0 && d != AC.myid && !AC.isDeleted(d) && b.push(d);
        b.sort(function(b, f) {
            return a.isContact(b) ? a.isContact(f) ? AC.getMentionNum(f) - AC.getMentionNum(b) : -1 : a.isContact(f) ? 1 : AC.getMentionNum(f) - AC.getMentionNum(b)
        });
        return b
    };
    a.isContact = function(b) {
        b = parseInt(b, 10);
        if (a.contact_flag[b]) return !0;
        return !1
    };
    a.client_addContact =
        function(b) {
            for (var d, e = [], j = 0; j < b.length; j++) d = parseInt(b[j], 10), e.push(d), a.account_dat[d] = void 0, a.isContact(d) || (a.contact_list.push(d), a.contact_flag[d] = !0, a.myrequest_dat != void 0 && a.myrequest_dat[d] != void 0 && delete a.myrequest_dat[d], a.request_dat != void 0 && a.request_dat[d] != void 0 && delete a.request_dat[d]);
            e.length > 0 && a.refreshAccount(e, !0, function() {
                a.buildMyContact()
            })
        };
    a.client_deleteContact = function(b) {
        for (var d, e = [], j = 0; j < b.length; j++)
            if (d = parseInt(b[j], 10), a.isContact(d)) {
                for (var k = 0; k <
                    a.contact_list.length; k++)
                    if (a.contact_list[k] == d) {
                        a.contact_list.splice(k, 1);
                        break
                    }
                delete a.contact_flag[d];
                a.account_dat[d] = void 0;
                e.push(d)
            }
        e.length > 0 && a.refreshAccount(e, !1, function() {
            a.buildMyContact()
        })
    };
    a.isDeleted = function(b) {
        if (a.getParam(b, "nm", !1) == "") return !0;
        return !1
    };
    a.getRoomId = function(b) {
        b = parseInt(b, 10);
        return a.account_dat[b] != void 0 && a.account_dat[b].rid != void 0 ? a.account_dat[b].rid : 0
    };
    a.hasUnknown = function() {
        for (var b in a.unknown_flag)
            if (a.isUnknown(b)) return !0;
            else delete a.unknown_flag[b];
        return !1
    };
    a.isUnknown = function(b) {
        if (a.account_dat[b] == void 0 || a.account_dat[b].nm == void 0) return !0;
        return !1
    };
    var d = {};
    a.getUnknown = function(b) {
        var e = [],
            h;
        for (h in a.unknown_flag) a.isUnknown(h) ? d[h] == void 0 && (e.push(parseInt(h, 10)), d[h] = !0) : delete a.unknown_flag[h];
        e.length > 0 ? a.refreshAccount(e, !1, b) : typeof b == "function" && b()
    };
    a.refreshAccount = function(b, d, e) {
        if (b.length > 0) {
            var d = d ? 1 : 0,
                j = {},
                k = Array.prototype.concat(b),
                g = function(l) {
                    var m = l.splice(0, 5E3);
                    CW.post("gateway.php", {
                        cmd: "get_account_info",
                        aid: m,
                        get_private_data: d
                    }, function(d) {
                        for (var i in d.account_dat) a.setAccountDat(i, d.account_dat[i]), j[i] = d.account_dat[i];
                        if (l.length) return g(l);
                        a.unknown_flag = {};
                        typeof e == "function" && e(j);
                        a.view.updateAvatar(b);
                        a.view.updateCover(b);
                        a.view.updateName(b);
                        CW.is_business ? a.refreshInternal() : RL.build()
                    })
                };
            g(k)
        }
    };
    a.refreshAccountDetailData = function(b, d, e) {
        CW.post("gateway.php", {
            cmd: "get_detail_account_info",
            aid: b,
            get_priv_setting: d
        }, function(d) {
            d.account_dat && a.setAccountDat(b, d.account_dat, !0);
            typeof e ==
                "function" && e()
        })
    };
    (function() {
        var b = {},
            d = {
                nm: a.setName,
                name: a.setName,
                onm: a.setOrgName,
                orgname: a.setOrgName,
                dp: a.setDepartment,
                tt: a.setTitle,
                av: a.setAvatarId,
                avid: a.setAvatarId,
                cv: a.setCoverId,
                gid: a.setGroupId,
                rid: a.setRoomId,
                tw: a.setTwitter,
                fb: a.setFacebook,
                sp: a.setSkype,
                cwid: a.setChatWorkId,
                ad: a.setAddress,
                url: a.setUrl,
                intro: a.setIntroduction,
                mail: a.setEmail,
                otel: a.setOrgTel,
                etel: a.setExtensionTel,
                mtel: a.setMobileTel,
                ud: a.setUndisclosed
            };
        a.setAccountDat = function(e, j, k) {
            var g = "",
                l;
            for (l in d) j[l] !=
                void 0 && (d[l](e, j[l]), g = l + "_priv", j[g] != void 0 && a.setParam(e, g, j[g]));
            b[e] = k ? !0 : !1
        };
        a.hasDetailData = function(a) {
            if (b[a]) return !0;
            return !1
        }
    })();
    a.refreshMentionInfo = function(b) {
        CW.get("gateway.php", {
            cmd: "get_mention_info",
            a: b
        }, function(b) {
            for (var d in b.mention_dat) a.setNickName(d, b.mention_dat[d].nn), a.setMentionNum(d, b.mention_dat[d].mn);
            for (var f in RL.rooms)
                if (b = RL.rooms[f], b.sorted_member_list != null) b.sorted_member_list = null
        })
    };
    a.refreshContactList = function() {
        CW.get("gateway.php", {
                cmd: "get_contact_list"
            },
            function(b) {
                a.updateContactList(b.contact_dat, b.mention_dat, b.myrequest_dat, b.request_dat)
            })
    };
    a.updateContactList = function(b, d, e, j) {
        for (var k = {}, g = {}, l = [], m = 0; m < a.contact_list.length; m++) k[a.contact_list[m]] = !0, g[a.contact_list[m]] = !0;
        a.contact_list = [];
        a.contact_flag = {};
        a.setName(0, "ChatWork");
        for (var n in a.account_dat) a.setRoomId(n, 0);
        for (n in b) n = parseInt(n, 10), a.contact_flag[n] = !0, CW.registerAvatar(n), a.contact_list.push(n), a.setAccountDat(n, b[n]), delete k[n], g[n] || l.push(n);
        l && (a.view.updateAvatar(l),
            a.view.updateName(l));
        for (n in d) a.setNickName(n, d[n].nn), a.setMentionNum(n, d[n].mn);
        for (n in e) a.setAccountDat(n, e[n]);
        a.myrequest_dat = e;
        d = [];
        for (n in j) a.setAccountDat(n, j[n]), CW.init_loaded && !a.request_dat[n] && d.push(n);
        d && (a.view.updateAvatar(d), a.view.updateName(d));
        if (CW.init_loaded) {
            d = [];
            for (n in a.request_dat) !j[n] && !b[n] && (a.account_dat[n] = void 0, d.push(n));
            for (n in k) a.account_dat[n] = void 0, d.push(n);
            d.length > 0 && a.refreshAccount(d)
        }
        a.request_dat = j;
        a.refreshInternal();
        a.buildMyStatus();
        a.buildMyContact()
    };
    a.showChatWorkIdRequestDialog = function(b) {
        a.view.showChatWorkIdRequestDialog(b)
    };
    a.refreshInternal = function() {
        if (CW.is_business) {
            var a = !1,
                b;
            for (b in RL.rooms) a = !0, RL.rooms[b].is_internal = -1;
            a && RL.build()
        }
    };
    a.buildMyStatus = function() {
        a.view.buildMyStatus()
    };
    a.buildMyContact = function() {
        a.view.buildMyContact()
    };
    a.isMatchedWithKeyList = function(b, d) {
        var e = a.getSearchKeys(d).join(" ");
        return CW.isMatchedWithKeyList(b, e)
    };
    a.getContactNum = function() {
        return this.contact_list.length - 1
    };
    a.getSearchKeys = function(a) {
        return [AC.getName(a),
            AC.getNickName(a, !0), AC.getOrgName(a), AC.getDepartment(a), AC.getChatWorkId(a)
        ]
    }
}

function Setting() {
    var b = this;
    b.data = {};
    b.notification_data = {};
    b.loaded = !1;
    b.announce_dat = {};
    b.sound_default = "mallet";
    b.dateformat2short = {
        "Y\u5e74m\u6708d\u65e5": "m\u6708d\u65e5",
        "m/d/Y": "m/d",
        "d/m/Y": "d/m",
        "Y/m/d": "m/d",
        "m-d-Y": "m-d",
        "d-m-Y": "d-m",
        "Y-m-d": "m-d",
        "m.d.Y": "m.d",
        "d.m.Y": "d.m",
        "Y.m.d": "m.d",
        "m/d-Y": "m/d"
    };
    b.prepare = function() {
        b.view = new SettingView(b);
        b.view.prepare()
    };
    b.isLoaded = function() {
        return b.loaded
    };
    b.getSetting = function(a) {
        CW.get("gateway.php", {
            cmd: "get_setting"
        }, function(e) {
            e.setting_data &&
                b.updateSetting(e.setting_data, a)
        })
    };
    b.updateSetting = function(a, e) {
        var d = {},
            f;
        for (f in a) b.data[f] != a[f] && (d[f] = b.data[f] == void 0 ? 1 : 2), b.data[f] = a[f];
        if (b.data.enter_action == void 0) b.data.enter_action = "br";
        b.data.desktop_alert = b.data.desktop_alert == void 0 ? 0 : parseInt(b.data.desktop_alert, 10);
        b.data.notifier_message = b.data.notifier_message == void 0 ? 1 : parseInt(b.data.notifier_message, 10);
        b.data.popup_sound = b.data.popup_sound == void 0 ? 1 : parseInt(b.data.popup_sound, 10);
        if (b.data.sound_type == void 0) b.data.sound_type =
            b.sound_default;
        if (b.data.sound_volume == void 0) b.data.sound_volume = 0.5;
        b.data.startup_help = b.data.startup_help == void 0 ? 1 : parseInt(b.data.startup_help, 10);
        b.data.notifier_duration = b.data.notifier_duration == void 0 ? 10 : parseInt(b.data.notifier_duration, 10);
        b.data.notifier_onlyto = b.data.notifier_onlyto == void 0 ? 0 : parseInt(b.data.notifier_onlyto, 10);
        b.data.allow_search = b.data.allow_search == void 0 ? 1 : parseInt(b.data.allow_search, 10);
        b.data.notify_term = b.data.notify_term == void 0 ? 1 : parseInt(b.data.notify_term,
            10);
        b.data.faviconstat = b.data.faviconstat == void 0 ? 0 : parseInt(b.data.faviconstat, 10);
        b.data.show_delmessage = b.data.show_delmessage == void 0 ? 0 : parseInt(b.data.show_delmessage, 10);
        b.data.show_external = b.data.show_external == void 0 ? 1 : parseInt(b.data.show_external, 10);
        b.data.private_nickname = b.data.private_nickname == void 0 ? 1 : parseInt(b.data.private_nickname, 10);
        b.data.shorten_url = b.data.shorten_url == void 0 ? 1 : parseInt(b.data.shorten_url, 10);
        b.data.show_stepguide = b.data.show_stepguide == void 0 ? 1 : parseInt(b.data.show_stepguide,
            10);
        b.data.welcome = b.data.welcome == void 0 ? 0 : parseInt(b.data.welcome, 10);
        b.data.announce == void 0 ? b.data.announce = 0 : b.data.desktop_alert = parseInt(b.data.desktop_alert, 10);
        if (b.data.dateformat == void 0) b.data.dateformat = L.dateformat;
        b.data.dateformat_short = b.dateformat2short[b.data.dateformat];
        b.loaded = !0;
        d.announce == 2 && b.getAnnounce();
        if (CW.init_loaded) {
            if ((d.show_delmessage != void 0 || d.shorten_url != void 0) && RM) CW.last_timeline_buildkey = "", RM.build();
            if (d.faviconstat != void 0 && ST.data.faviconstat) {
                f = 0;
                if (RM && RM.id) f = RM.id;
                RL.view.updateTitle(f)
            }
            d.show_external != void 0 && RL.build()
        }
        ST.view.updateSetting();
        typeof e == "function" && e()
    };
    b.sendChatSetting = function(a, b) {
        typeof b != "function" && (b = function() {});
        CW.post("gateway.php", {
            cmd: "send_chat_setting",
            data: a
        }, b)
    };
    b.getAnnounce = function() {
        CW.get("gateway.php", {
            cmd: "get_announce",
            announce: ST.data.announce
        }, function(a) {
            a.announce_dat && b.updateAnnounce(a.announce_dat)
        })
    };
    b.closeAnnounce = function() {
        if (b.announce_dat.id != void 0) b.sendChatSetting({
                announce: b.announce_dat.id
            }),
            b.announce_dat = {}, b.view.updateAnnounce()
    };
    b.updateAnnounce = function(a) {
        b.announce_dat = a;
        b.view.updateAnnounce()
    };
    b.loadNotificationSetting = function() {
        CW.get("gateway.php", {
            cmd: "set_notification_data",
            account_id: myid,
            notification_id: NOTIFICATION_ID,
            device_type: DEVICE_TYPE,
            model: Ti.Platform.model,
            target_token: DEVICE_TOKEN,
            is_first_load: !0
        }, function(a) {
            if (a.notification_id != void 0) NOTIFICATION_ID = a.notification_id, Ti.App.Properties.setString("notification_id", NOTIFICATION_ID);
            if (a.notification_dat !=
                void 0) {
                b.notification_data = a.notification_dat;
                if (Ti.App.Properties.hasProperty("last_notification_status") && (a = Ti.App.Properties.getString("last_notification_status"), Ti.App.Properties.setString("last_notification_status", null), a == "open")) b.notification_data.notification_status = "open", CW.post("gateway.php", {
                    cmd: "set_notification_data",
                    account_id: myid,
                    notification_id: NOTIFICATION_ID,
                    device_type: DEVICE_TYPE,
                    status: "open"
                });
                b.view.setNotificationSetting()
            }
        })
    }
}

function File() {
    var b = this;
    b.file_id2file_dat = {};
    b.unknown_flag = {};
    b.storage = {
        used: 0,
        limit: 0,
        available: 0
    };
    b.myfile_load_flag = {
        loading: !1,
        loaded: !1
    };
    b.prepare = function() {
        b.view = new FileView(b);
        b.view.prepare()
    };
    b.registerFile = function(a) {
        b.file_id2file_dat[a] == void 0 && (b.unknown_flag[a] = !0)
    };
    b.hasUnknown = function() {
        for (var a in b.unknown_flag) b.file_id2file_dat[a] != void 0 && delete b.unknown_flag[a];
        for (a in b.unknown_flag)
            if (b.file_id2file_dat[a] == void 0) return !0;
        return !1
    };
    b.getUnknown = function(a) {
        var e = [],
            d;
        for (d in b.unknown_flag) b.file_id2file_dat[d] == void 0 ? e.push(d) : delete b.unknown_flag[d];
        e.length && CW.postSync("gateway.php", {
            cmd: "get_file",
            file_id: e
        }, function(d) {
            for (var e in d.file_dat) b.file_id2file_dat[e] = d.file_dat[e], delete b.unknown_flag[e];
            typeof a == "function" && a(d.file_dat)
        })
    };
    b.setFile = function(a) {
        b.file_id2file_dat[a.id] = a
    };
    b.deleteFile = function(a, e, d) {
        var f;
        f = a instanceof Array ? a : [a];
        CW.get("gateway.php", {
            cmd: "delete_file",
            f: f
        }, function(a) {
            a.storage != void 0 && a.storage_limit != void 0 &&
                b.updateStorageInfo(a.storage, a.storage_limit, a.storage_limit_time, a.is_storage_limit);
            for (var d = 0, j = f.length; d < j; d++) b.deleteFileStat(f[d]);
            typeof e == "function" && e(a)
        }, function(a) {
            typeof d == "function" && d(a)
        })
    };
    b.deleteFileStat = function(a) {
        if (b.hasFile(a) && b.file_id2file_dat[a].st != "deleted") b.file_id2file_dat[a].st = "deleted", delete b.file_id2file_dat[a].fn, b.buildByFileId(a, !0)
    };
    b.hasFile = function(a) {
        return b.file_id2file_dat[a] != void 0 ? !0 : !1
    };
    b.sortFileList = function(a) {
        a.sort(function(a, d) {
            return b.file_id2file_dat[d].id -
                b.file_id2file_dat[a].id
        })
    };
    b.getMyFileList = function() {
        var a = [],
            b;
        for (b in FL.file_id2file_dat) FL.file_id2file_dat[b].aid == AC.myid && a.push(b);
        return a
    };
    b.editFile = function(a, b, d, f) {
        CW.get("gateway.php", {
            cmd: "edit_file",
            file_id: a,
            filename: b
        }, function(a) {
            typeof d == "function" && d(a);
            CW.watch()
        }, function(a) {
            typeof f == "function" ? f(a) : CW.alert(a)
        })
    };
    b.refreshFile = function(a) {
        b.hasFile(a) && CW.get("gateway.php", {
            cmd: "get_file",
            file_id: [a]
        }, function(e) {
            for (var d in e.file_dat) {
                var f = !1,
                    i;
                for (i in e.file_dat[d]) b.file_id2file_dat[d][i] !=
                    e.file_dat[d][i] && (b.file_id2file_dat[d][i] = e.file_dat[d][i], f = !0);
                f && b.buildByFileId(a)
            }
        })
    };
    b.loadAllMyFile = function() {
        if (!b.myfile_load_flag.loading) {
            b.myfile_load_flag.loading = !0;
            var a = b.getMyFileList(),
                a = a.length > 1E3 ? "" : a.join(",");
            CW.post("gateway.php", {
                cmd: "load_my_file",
                fid: a
            }, function(a) {
                if (a.file_dat) {
                    for (var d in a.file_dat) b.setFile(a.file_dat[d]);
                    b.myfile_load_flag.loading = !1;
                    b.myfile_load_flag.loaded = time();
                    b.buildAllMyFile()
                }
            })
        }
    };
    b.buildByFileId = function(a) {
        b.view.buildByFileId(a)
    };
    b.buildAllMyFile = function() {
        b.view.buildAllMyFile()
    };
    b.getFileListRows = function(a) {
        return b.view.getFileListRows(a)
    };
    b.updateStorageInfo = function(a, e, d, f) {
        b.view.updateStorageInfo(a, e, d, f);
        b.storage.used = a.total;
        b.storage.limit = e;
        b.storage.available = b.storage.limit - b.storage.used
    };
    b.isExecutableExtension = function(a) {
        var b = ["ade", "adp", "bat", "chm", "cmd", "com", "cpl", "exe", "hta", "ins", "isp", "jse", "lib", "mde", "msc", "msp", "mst", "pif", "scr", "sct", "shb", "sys", "vb", "vbe", "vbs", "vxd", "wsc", "wsf", "wsh"];
        if ((a =
                a.match(/\.([^\.]+)$/)) && in_array(a[1].toLowerCase(), b)) return !0;
        return !1
    };
    b.containIllegalChar = function(a) {
        if (a.match(/[\\\/:\*\?"<>\|]/)) return !0;
        return !1
    }
}

function Task() {
    var b = this;
    b.task_id2task_dat = {};
    b.mytask_load_flag = {
        loading: {
            openmy: !1,
            openassign: !1,
            donemy: !1,
            doneassign: !1
        },
        loaded: {
            openmy: 0,
            openassign: 0,
            donemy: 0,
            doneassign: 0
        }
    };
    b.prepare = function() {
        b.view = new TaskView(b);
        b.view.prepare()
    };
    b.checkTask = function(a, e, d) {
        if (b.hasTask(a)) {
            var f = parseInt(e, 10) > 0 ? "done" : "open";
            if (b.task_id2task_dat[a].st != f) b.task_id2task_dat[a].st = f, d ? b.buildByTaskId(a, !0) : (b.task_id2task_dat[a].aid == AC.myid || b.task_id2task_dat[a].bid == AC.myid) && CW.get("gateway.php", {
                cmd: "check_task",
                task_id: a,
                to: e
            }, function() {
                b.reflashTaskList(b.task_id2task_dat[a].rid)
            })
        }
    };
    b.setTask = function(a) {
        a.id = parseInt(a.id, 10);
        a.aid = parseInt(a.aid, 10);
        a.bid = parseInt(a.bid, 10);
        a.rid = parseInt(a.rid, 10);
        a.cid = parseInt(a.cid, 10);
        b.task_id2task_dat[a.id] = a
    };
    b.hasTask = function(a) {
        return b.task_id2task_dat[a] != void 0 ? !0 : !1
    };
    b.deleteTask = function(a, e, d) {
        CW.get("gateway.php", {
            cmd: "delete_task",
            task_id: a
        }, function(d) {
            d.storage != void 0 && d.storage_limit != void 0 && b.updateStorageInfo(d.storage, d.storage_limit,
                d.storage_limit_time, d.is_storage_limit);
            b.deleteTaskStat(a, !0);
            b.reflashTaskList(b.task_id2task_dat[a].rid, !0, function() {
                b.buildByTaskId(a)
            });
            typeof e == "function" && e(d)
        }, function(a) {
            typeof d == "function" && d(a)
        })
    };
    b.deleteTaskStat = function(a, e) {
        if (b.hasTask(a) && b.task_id2task_dat[a].st != "deleted") b.task_id2task_dat[a].st = "deleted", delete b.task_id2task_dat[a].tn, e || b.buildByTaskId(a)
    };
    b.refreshTask = function(a) {
        b.hasTask(a) && CW.get("gateway.php", {
            cmd: "get_task",
            tid_list: [a]
        }, function(e) {
            for (var d in e.task_dat) {
                var f = !1,
                    i;
                for (i in e.task_dat[d]) b.task_id2task_dat[d][i] != e.task_dat[d][i] && (b.task_id2task_dat[d][i] = e.task_dat[d][i], f = !0);
                f && b.buildByTaskId(a)
            }
        })
    };
    b.buildByTaskId = function(a, e) {
        b.view.buildByTaskId(a, e)
    };
    b.reflashTaskList = function(a, e, d) {
        CW.get("gateway.php", {
            cmd: "load_task",
            room_id: a,
            status: "open"
        }, function(f) {
            for (task_id in f.task_dat) b.setTask(f.task_dat[task_id]);
            RL.rooms[a].refreshTaskNum();
            RL.build(!0);
            RM.tasklist.build();
            typeof d === "function" && d(f)
        })
    };
    b.getMyTaskList = function(a, b) {
        b == void 0 &&
            (b = "my");
        var d = [],
            f;
        for (f in TK.task_id2task_dat)(b == "my" ? TK.task_id2task_dat[f].aid : TK.task_id2task_dat[f].bid) == AC.myid && TK.task_id2task_dat[f].st == a && d.push(f);
        return d
    };
    b.sortTaskList = function(a) {
        a.sort(function(a, d) {
            var f = 0,
                i = 0;
            b.task_id2task_dat[a].lt && (f = parseInt(b.task_id2task_dat[a].lt, 10));
            b.task_id2task_dat[d].lt && (i = parseInt(b.task_id2task_dat[d].lt, 10));
            if (f > 0 && i == 0) return -1;
            else if (i > 0 && f == 0) return 1;
            if (f < i) return -1;
            else if (f > i) return 1;
            else {
                if (b.task_id2task_dat[a].aid == AC.myid && b.task_id2task_dat[d].aid !=
                    AC.myid) return -1;
                else if (b.task_id2task_dat[a].aid != AC.myid && b.task_id2task_dat[d].aid == AC.myid) return 1;
                return b.task_id2task_dat[a].id - b.task_id2task_dat[d].id
            }
        })
    };
    b.buildAllMyTask = function(a, e) {
        b.view.buildAllMyTask(a, e)
    };
    b.getTaskListRows = function(a, e) {
        return b.view.getTaskListRows(a, e)
    }
}

function RoomList() {
    var b = this;
    b.rooms = {};
    b.lazy_select = 0;
    b.lazy_select_chat = 0;
    b.has_update = !0;
    b.rebuild_room = !1;
    b.update_flag = {};
    b.last_update_time_dat = {};
    b.category_dat = {};
    b.load_type = "";
    b.focused_room_id = 0;
    b.filter_word = "";
    b.filter_readonly = !1;
    b.filter_toonly = !1;
    b.filter_taskonly = !1;
    b.filter_internalonly = !1;
    b.filter_remain_flag = {};
    b.filter_category = "";
    b.category_defaults = {
        all: !0,
        contact: !0,
        group: !0,
        mytask: !0
    };
    b.role_map = {
        "1": "admin",
        "2": "member",
        "3": "readonly"
    };
    b.room_type_map = {
        "1": "group",
        "2": "contact",
        "3": "my"
    };
    b.preset_typemap = {
        "1": "group",
        "2": "check",
        "3": "document",
        "4": "meeting",
        "5": "event",
        "6": "project",
        "7": "business",
        "8": "study",
        "9": "security",
        "10": "star",
        "11": "idea",
        "12": "heart",
        "13": "magcup",
        "14": "beer",
        "15": "music",
        "16": "sports",
        "17": "travel"
    };
    b.preset_type = {};
    for (var a in b.preset_typemap) b.preset_type[b.preset_typemap[a]] = !0;
    b.filtered_room_list = [];
    b.unread_total = 0;
    b.mytask_total = 0;
    b.unread_room_sum = 0;
    b.mention_room_sum = 0;
    b.mytask_room_sum = 0;
    var e = {},
        d = !1;
    b.prepare = function() {
        b.view = new RoomListView(b);
        b.view.prepare()
    };
    b.getDefaultRoom = function() {
        var a = 0;
        if (b.lazy_select && b.rooms[b.lazy_select]) a = b.lazy_select;
        a || (a = AC.getRoomId(AC.myid));
        return b.rooms[a]
    };
    b.getSortedRoomList = function(a) {
        var d = [],
            e = [],
            j;
        for (j in b.rooms) b.rooms[j].sticky ? e.push(j) : d.push(j);
        switch (a) {
            case "name":
                d = b.sortByName(d);
                e = b.sortByName(e);
                break;
            default:
                d = b.sortByLastUpdateTime(d), e = b.sortByLastUpdateTime(e)
        }
        a = 0;
        for (j = d.length; a < j; a++) e.push(d[a]);
        return e
    };
    b.sortByName = function(a) {
        a.sort(function(a, d) {
            return sort_for_string(b.rooms[a].getName(),
                b.rooms[d].getName())
        });
        return a
    };
    b.sortByLastUpdateTime = function(a) {
        a.sort(function(a, d) {
            var f = b.last_update_time_dat[d] - b.last_update_time_dat[a];
            return f > 0 ? 1 : f == 0 ? a - d : -1
        });
        return a
    };
    b.getSortedCategoryList = function() {
        var a = [],
            d;
        for (d in b.category_dat) a.push(d);
        a.sort(function(a, d) {
            return sort_for_string(b.category_dat[a].name, b.category_dat[d].name)
        });
        return a
    };
    b.setLastUpdateTime = function(a, d) {
        if (b.last_update_time_dat[a] == void 0 || b.last_update_time_dat[a] < d) b.last_update_time_dat[a] = parseInt(d,
            10)
    };
    b.setInfoUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].info = !0
    };
    b.setPersonalUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].personal = !0
    };
    b.setTaskUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].task = !0
    };
    b.setMemberUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].member = !0
    };
    b.setDescUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].desc = !0
    };
    b.deleteRoom = function(a) {
        b.has_update = !0;
        RM && RM.id == a && (RM = null);
        if (b.rooms[a] != void 0) {
            b.rooms[a].free();
            delete b.rooms[a];
            var d, e, j;
            for (j in b.category_dat) {
                e = b.category_dat[j].list;
                for (var k = 0, g = e.length; k < g; k++)
                    if (d = e[k], d == a) {
                        e.splice(k, 1);
                        break
                    }
            }
        }
        RL.view.deleteRoom(a)
    };
    b.setUpdate = function(a) {
        b.has_update = a
    };
    b.hasUpdate = function() {
        return b.has_update
    };
    b.prepareUpdate = function(a) {
        b.rooms[a] == void 0 && (b.rooms[a] = new Room(a));
        b.has_update = !0;
        b.update_flag[a] == void 0 && (b.update_flag[a] = {})
    };
    b.prepareRM = function() {
        if (!RM && (RM = RL.getDefaultRoom())) RM.rswitch = !0, b.rebuild_room = !0
    };
    b.selectRoom = function(a, d, e) {
        e === void 0 &&
            (e = {});
        var j = $.extend({
            jumpTo: 0,
            jumpToCallback: function() {},
            smoothScroll: !1,
            messageHashUpdate: !0,
            highlight: !1
        }, e);
        if (RL && a)
            if (RL.rooms[a]) {
                b.view.selectRoom(a);
                RL.rooms[a].rswitch = !0;
                (d = parseInt(d, 10)) || (d = void 0);
                if (d) j.jumpTo = d, j.jump_to_chat_id = d, j.highlight = e.highlight !== void 0 ? e.highlight : !0;
                RL.rooms[a].build(j);
                b.focusRoom(a);
                (b.filter_readonly || b.filter_toonly || b.filter_taskonly || b.filter_internalonly) && setTimeout(function() {
                    RL.build()
                })
            } else CW.alert(L.chatroom_error_no_member)
    };
    b.selectCategory =
        function(a) {
            switch (a) {
                case "all":
                case "contact":
                case "group":
                case "mytask":
                    break;
                default:
                    if (b.category_dat[a] == void 0) return
            }
            b.filter_category = a;
            b.filter_remain_flag = {};
            b.view.selectCategory(a)
        };
    b.getCategoryName = function(a) {
        switch (a) {
            case "all":
                return L.chat_category_allchat;
            case "contact":
                return L.directchat;
            case "group":
                return L.groupchat;
            case "mytask":
                return L.chat_category_mytaskchat;
            default:
                return b.category_dat[a].name
        }
    };
    b.setReadOnly = function(a) {
        b.filter_readonly = a;
        b.filter_remain_flag = {};
        b.view.setReadOnly()
    };
    b.setToOnly = function(a) {
        b.filter_toonly = a;
        b.filter_remain_flag = {};
        b.view.setToOnly()
    };
    b.setTaskOnly = function(a) {
        b.filter_taskonly = a;
        b.filter_remain_flag = {};
        b.view.setTaskOnly()
    };
    b.setInternalOnly = function(a) {
        b.filter_internalonly = a;
        b.filter_remain_flag = {};
        b.view.setInternalOnly()
    };
    b.stickRoom = function(a, d, e) {
        b.rooms[a].sticky = d;
        b.build();
        CW.post("gateway.php", {
            cmd: "stick_room",
            room_id: a,
            stick: d
        }, function() {
            typeof e == "function" && e()
        })
    };
    b.load = function() {
        var a = [],
            d = [],
            e = [],
            j = [],
            k = {},
            g = !1,
            l;
        for (l in b.update_flag) RL.rooms[l] && (g = !0, b.update_flag[l].info != void 0 && a.push(l), b.update_flag[l].personal != void 0 && d.push(l), b.update_flag[l].member != void 0 && e.push(l), b.update_flag[l].task != void 0 && (RL.rooms[l].tasklist ? (k[l] = RL.rooms[l].tasklist.getTaskList(), k[l].length == 0 && (k[l] = 1)) : k[l] = 1), b.update_flag[l].desc != void 0 && j.push(l));
        if (RM && b.update_flag[RM.id] != void 0)
            for (var m in b.update_flag[RM.id])
                if (m != "personal") {
                    b.rebuild_room = !0;
                    break
                }
        b.has_update = !1;
        b.update_flag = {};
        if (g) {
            g = {};
            if (a.length) {
                m = 0;
                for (var n = a.length; m < n; m++) {
                    l = a[m];
                    g[l] = {};
                    if (b.rooms[l]) {
                        var o = b.rooms[l];
                        g[l].c = o.chat_num;
                        g[l].u = o.getUnreadNum();
                        g[l].l = o.timeline ? b.rooms[l].timeline.getLastChatId() : 0;
                        if (o.filelist) {
                            var u = o.filelist.getFileNum();
                            g[l].f = $.isNumeric(u) ? u : o.filelist.getFileList().length;
                            g[l].lf = o.filelist.getLastFileId()
                        }
                    } else g[l].c = 0, g[l].u = 0, g[l].l = 0;
                    g[l].t = b.last_update_time_dat[l] ? b.last_update_time_dat[l] : 0
                }
            }
            CW.post("gateway.php", {
                cmd: "get_room_info",
                i: g,
                p: d,
                m: e,
                d: j,
                t: k,
                rid: RL.lazy_select,
                type: b.load_type,
                load_file_version: "2"
            }, function(a) {
                b.updateRoomData(a.room_dat)
            })
        } else b.has_update = !1, b.build()
    };
    b.updateRoomData = function(a) {
        var i = !1,
            h = !1,
            j = {},
            k;
        for (k in a) {
            rval = a[k];
            RL.rooms[k] == void 0 && (RL.rooms[k] = new Room(k));
            var g = RL.rooms[k],
                l = g.getUnreadNum();
            g.mid = rval.mid;
            if (rval.c != void 0) g.chat_num = parseInt(rval.c, 10), g.name = "", g.allow_see_member = 1, g.allow_upload_file = 1, g.allow_add_task = 1, g.allow_send_message = 1, g.join_need_accept = 1, g["public"] = 0, g.link_name = "", g.header = "", g.icon = b.preset_typemap[1],
                g.icon_preset = !0;
            if (rval.f != void 0) g.file_num = parseInt(rval.f, 10);
            if (rval.t != void 0) g.task_num = parseInt(rval.t, 10);
            rval.n != void 0 && g.setName(rval.n);
            if (rval.mid) g.read_num = 0, g.mytask_num = 0, g.mention_num = 0, g.sticky = 0;
            if (rval.r != void 0) g.read_num = parseInt(rval.r, 10);
            if (rval.mt != void 0) g.mytask_num = parseInt(rval.mt, 10);
            if (rval.mn != void 0) g.mention_num = parseInt(rval.mn, 10);
            if (rval.s != void 0) g.sticky = parseInt(rval.s, 10);
            if (rval.aml != void 0) g.allow_see_member = parseInt(rval.aml, 10);
            if (rval.af != void 0) g.allow_upload_file =
                parseInt(rval.af, 10);
            if (rval.at != void 0) g.allow_add_task = parseInt(rval.at, 10);
            if (rval.am != void 0) g.allow_send_message = parseInt(rval.am, 10);
            if (rval.ja != void 0) g.join_need_accept = parseInt(rval.ja, 10);
            rval.p != void 0 && (g["public"] = parseInt(rval.p, 10));
            if (rval.ic != void 0) b.preset_typemap[rval.ic] ? (g.icon = b.preset_typemap[rval.ic], g.icon_preset = !0) : (g.icon = rval.ic, g.icon_preset = !1);
            if (rval.hr != void 0) g.header = rval.hr;
            if (rval.pd != void 0) g.public_description = rval.pd;
            if (rval.ln != void 0) g.link_name = rval.ln;
            if (rval.d != void 0) g.description = rval.d;
            if (rval.m != void 0) {
                for (var m in rval.m) rval.m[m] = b.role_map[rval.m[m]], j[m] = !0;
                g.setMember(rval.m)
            }
            if (rval.mr != void 0)
                for (var n in g.member_request = rval.mr, g.member_request) {
                    var o = g.member_request[n];
                    AC.isUnknown(o.id) && AC.setAccountDat(o.id, o)
                }
            if (rval.tp != void 0) g.type = b.room_type_map[rval.tp];
            rval.lt != void 0 && RL.setLastUpdateTime(k, rval.lt);
            !l && l < g.getUnreadNum() && (h = !0);
            if (rval.task_dat) {
                if (!g.tasklist) g.tasklist = new TaskList(g);
                var l = [],
                    u;
                for (u in rval.task_dat) TK.setTask(rval.task_dat[u]),
                    l.push(u);
                if (l.length > 0) TK.buildByTaskId(l), g.tasklist.loaded = !0
            }
            if (rval.file_list) {
                if (!g.filelist) g.filelist = new FileList(g);
                n = 0;
                for (l = rval.file_list.length; n < l; n++) g.filelist.insertFile(rval.file_list[n]);
                g.filelist.setFileNum(rval.file_num);
                FL.myfile_load_flag.loaded && FL.buildAllMyFile()
            }
            if (rval.chat_list && rval.chat_list.length > 0) {
                if (!g.timeline) g.timeline = new TimeLine(g);
                if (CW.enable_popup && !CW.is_first_load) {
                    n = 0;
                    for (l = rval.chat_list; n < l; n++) j[rval.chat_list[n].aid] = !0
                }
                var r = "";
                n = 0;
                for (l = rval.chat_list.length; n <
                    l; n++)
                    if (i = !0, g.timeline.addChat(rval.chat_list[n]), CW.enable_popup && !CW.is_first_load && (o = rval.chat_list[n], e[o.id] == void 0)) {
                        e[o.id] = !0;
                        var v = ST.data.notifier_message == "1" ? CW.renderMessage(o.msg, {
                                text: !0
                            }) : L.notifier_newmessage,
                            r = v.length > 0 && AC.myid != o.aid ? {
                                id: o.id,
                                aid: o.aid,
                                room_id: g.id,
                                msg: v
                            } : ""
                    }
            }
            b.updateMasterData(k, rval)
        }
        a = function() {
            r && (!ST.data.notifier_onlyto || b.rooms[r.room_id].timeline.chat_id2chat_dat[r.id].mn) && CW.popup(CW.getAvatarPanel(r.aid, {
                    src: !0
                }), RL.rooms[r.room_id].getName(),
                AC.getName(r.aid) + ":" + r.msg, r.room_id);
            !wfocus && i && !d && !CW.is_first_load && ST.data.popup_sound == 1 && audioObjSupport && (d = !0, ST.view.isMultiSound(ST.data.sound_type) ? h ? CW.playSound(ST.data.sound_type) : CW.playSound(ST.data.sound_type + "2") : CW.playSound(ST.data.sound_type), setTimeout(function() {
                d = !1
            }, 1E3));
            if (CW.is_first_load) CW.is_first_load = !1;
            b.build()
        };
        for (m in j) AC.getName(m);
        AC.hasUnknown() ? AC.getUnknown(a) : a();
        b.view.updateRoomData()
    };
    b.build = function(a) {
        a = a || !1;
        if (b.has_update) return b.load();
        else {
            var d =
                b.getSortedRoomList();
            b.filtered_room_list = [];
            var e = null,
                j = !1,
                k = {};
            if (b.filter_category && !b.category_defaults[b.filter_category])
                for (var j = !0, e = 0, g = b.category_dat[b.filter_category].list.length; e < g; e++) k[b.category_dat[b.filter_category].list[e]] = !0;
            b.unread_room_sum = 0;
            b.mention_room_sum = 0;
            b.mytask_room_sum = 0;
            b.unread_total = 0;
            b.mytask_total = 0;
            g = [];
            b.filter_word && (g = CW.splitWithSpace(b.filter_word));
            for (var l = 0; l < d.length; l++)
                if (d[l] != void 0) {
                    var e = b.rooms[d[l]],
                        m = e.getUnreadNum(),
                        n = 0;
                    m > 0 && (b.unread_total +=
                        m, b.unread_room_sum++, n = e.getMentionNum(), n > 0 && b.mention_room_sum++);
                    e.mytask_num > 0 && (b.mytask_total += e.mytask_num, b.mytask_room_sum++);
                    if (g.length > 0) {
                        m = e.getName();
                        if (!m) continue;
                        if (e.type == "contact") {
                            if (!AC.isMatchedWithKeyList(g, e.getAccountId())) continue
                        } else if (!CW.isMatchedWithKeyList(g, m)) continue
                    } else if (!RM || !(e.id == RM.id && b.filter_remain_flag[e.id] != void 0)) {
                        if (j) {
                            if (k[e.id] != !0) continue
                        } else {
                            if (b.filter_category == "contact" && e.type != "contact") continue;
                            if (b.filter_category == "group" && e.type !=
                                "group") continue;
                            if (b.filter_category == "mytask" && e.mytask_num == 0) continue
                        }
                        if (b.filter_readonly && m == 0) continue;
                        if (b.filter_toonly && n == 0) continue;
                        if (b.filter_taskonly && e.mytask_num == 0) continue;
                        if (b.filter_internalonly && !e.isInternal()) continue
                    }
                    b.filter_remain_flag[e.id] = !0;
                    b.filtered_room_list.push(d[l])
                }
            b.view.build(b.filtered_room_list);
            b.view.updateSumNumbers();
            if (b.lazy_select)
                if (b.rooms[b.lazy_select] != void 0) b.selectRoom(b.lazy_select, b.lazy_select_chat), b.lazy_select = 0, b.lazy_select_chat = 0;
                else {
                    if (RM) b.lazy_select =
                        0, b.lazy_select_chat = 0, CW.alert(L.chatroom_error_no_member, function() {
                            b.selectRoom(RM.id)
                        })
                } else !a && b.rebuild_room && RM && RM.build();
            if (!a) b.rebuild_room = !1
        }
    };
    b.refreshCategory = function() {
        CW.get("gateway.php", {
            cmd: "get_category"
        }, function(a) {
            b.updateCategory(a.cat_dat)
        })
    };
    b.updateCategory = function(a) {
        b.category_dat = {};
        for (var d in a) b.category_dat[d] = a[d];
        RL.buildCategory()
    };
    b.buildCategory = function() {
        b.filter_category && !b.category_defaults[b.filter_category] && b.category_dat[b.filter_category] == void 0 &&
            b.selectCategory("all");
        b.view.buildCategory()
    };
    b.getFocusedRoomId = function() {
        return b.focused_room_id
    };
    b.focusRoom = function(a) {
        b.focused_room_id = a;
        b.view.focusRoom(a)
    };
    b.clearFocusRoom = function() {
        b.focused_room_id = 0;
        b.view.clearFocusRoom()
    };
    b.showJoinPublicChatDialog = function(a) {
        b.rooms[a] != void 0 ? b.selectRoom(a) : CW.get("gateway.php", {
            cmd: "get_room_public_info",
            rid: a
        }, function(d) {
            if (d.error) {
                switch (d.error) {
                    case "joined":
                        b.selectRoom(a)
                }
                d.message && CW.alert(d.message)
            }
            if (d.room_dat != void 0) d = d.room_dat,
                d.id = a, b.view.showJoinPublicChatDialog(d)
        })
    };
    b.joinPublicChat = function(a) {
        b.rooms[a] != void 0 ? b.selectRoom(a) : CW.post("gateway.php", {
            cmd: "join_public_room",
            rid: a
        }, function(a) {
            if (a.error) {
                switch (a.error) {
                    case "joined":
                        RL.selectRoom(room_dat.id);
                        return;
                    case "limited":
                        CW.view.showLimitErrorDialog(a.title, a.message);
                        return
                }
                a.message != void 0 && CW.alert(a.message)
            } else a.do_request != void 0 ? CW.alert(L.joinpublicchat_request_sent) : RL.lazy_select = room_dat.id
        })
    };
    b.updateMasterData = function(a, d) {
        b.view.updateMasterData(a,
            d)
    };
    b.getGroupChatNum = function() {
        var a = 0,
            b = this.rooms,
            d;
        for (d in b) b[d].type === "group" && a++;
        return a
    };
    b.getStickyRoomNum = function() {
        var a = 0,
            b = this.rooms,
            d;
        for (d in b) b[d].sticky && a++;
        return a
    }
}

function RoomDialog() {
    var b = this;
    b.prepare = function() {
        b.view = new RoomDialogView(b);
        b.view.prepare()
    };
    b.buildMember = function() {
        b.view.buildMember()
    }
}

function Room(b) {
    this.view = new RoomView(this);
    this.id = b;
    this.mid = 0;
    this.tasklist = this.filelist = this.timeline = null;
    this.mytask_num = this.task_num = this.file_num = this.chat_num = this.mention_num = this.read_num = 0;
    this.description = !1;
    this.member_dat = {};
    this.member_request = [];
    this.sorted_member_list = null;
    this.is_internal = -1;
    this.icon = "";
    this.icon_preset = !1;
    this.header = "";
    this.join_need_accept = this.allow_send_message = this.allow_add_task = this.allow_upload_file = this.allow_see_member = 0;
    this["public"] = 0;
    this.type =
        this.link_name = this.public_description = "";
    this.sending_id = 0;
    this.read_lock = this.rswitch = this.reading = this.sticky = !1;
    this._name = "";
    this.buildtime = this._account_id = 0
}
(function() {
    Room.prototype = {
        getUnreadNum: function() {
            var b = parseInt(this.chat_num - this.read_num, 10);
            b < 0 && (b = 0);
            return b
        },
        getMentionNum: function() {
            return this.mention_num
        },
        getViewStat: function() {
            return this.view.getViewStat()
        },
        isInternal: function() {
            this.is_internal == -1 && this.checkInternal();
            return this.is_internal == 1 ? !0 : !1
        },
        refreshTaskNum: function() {
            if (this.tasklist) {
                for (var b = this.tasklist.getTaskList("open"), a = 0, e = 0, d = b.length; e < d; e++) TK.task_id2task_dat[b[e]].aid == AC.myid && a++;
                this.task_num = b.length;
                this.mytask_num = a
            }
        },
        getName: function(b) {
            var a = this.getAccountId();
            return a > 0 ? a == AC.myid ? L.mychat : b != void 0 && b.nameonly ? AC.getName(a) : AC.getFullName(a) : this._name
        },
        getSortedMemberList: function() {
            if (this.sorted_member_list) return this.sorted_member_list;
            var b = [],
                a;
            for (a in this.member_dat) b.push(a);
            this.sortMember(b);
            return this.sorted_member_list = b
        },
        sortMember: function(b) {
            b.sort(function(a, b) {
                if (a == AC.myid) return -1;
                if (b == AC.myid) return 1;
                return AC.getMentionNum(b) - AC.getMentionNum(a)
            })
        },
        setName: function(b) {
            this._name =
                b
        },
        setMember: function(b) {
            this.member_dat = b;
            this.sorted_member_list = null;
            this.checkInternal();
            this._account_id = 0
        },
        checkInternal: function() {
            if (CW.is_business) {
                this.is_internal = 1;
                var b = AC.getGroupId(AC.myid),
                    a;
                for (a in this.member_dat)
                    if (AC.getGroupId(a) != b) {
                        this.is_internal = 0;
                        break
                    }
            }
        },
        refreshMember: function() {
            var b = this,
                a = b.id;
            CW.post("gateway.php", {
                cmd: "get_room_info",
                m: [a]
            }, function(e) {
                if (e.room_dat[a].member_dat != void 0) b.member_dat = e.room_dat[a].member_dat, b.sorted_member_list = null, b.buildMemberList()
            })
        },
        getIcon: function(b, a) {
            a == void 0 && (a = "small");
            return this.view.getIcon(b, a)
        },
        getAccountId: function() {
            if (this._account_id != 0) return this._account_id;
            if (this.type == "my") return AC.myid;
            else if (this.type == "contact")
                for (var b in this.member_dat)
                    if (AC.myid != b) return b;
            return 0
        },
        getJoinLink: function() {
            return this["public"] ? CHATWORK_MYPAGE_PATH + "/g/" + (this.link_name != "" ? this.link_name : this.id) : !1
        },
        addSendingChat: function(b) {
            this.sending_id++;
            this.timeline.sending_chat_list.push({
                sid: this.sending_id,
                aid: AC.myid,
                mn: !1,
                msg: b,
                tm: time(),
                utm: 0,
                sent: !1
            });
            this.view.addSendingChat(this.sending_id);
            return this.sending_id
        },
        deleteSendingChat: function(b) {
            for (var a = !0, e = 0, d = this.timeline.sending_chat_list.length; e < d; e++) {
                var f = this.timeline.sending_chat_list[e];
                if (f.sid <= b && f.sent == !1) f.sent = !0;
                f.sent || (a = !1)
            }
            if (a) this.timeline.sending_chat_list = []
        },
        load: function(b, a) {
            $.isNumeric(b) && (b = {
                jumpTo: b
            });
            var e = $.extend({
                jumpTo: 0,
                autoBuild: !0
            }, b);
            this.prepareBuild();
            var d = {
                cmd: "load_chat",
                room_id: this.id,
                last_chat_id: this.timeline.getLastChatId(),
                first_chat_id: this.timeline.getFirstChatId(),
                jump_to_chat_id: e.jumpTo,
                unread_num: this.getUnreadNum(),
                load_file_version: "2"
            };
            if (RL.load_type == "mobile") d.limit_num = 20;
            if (!this.filelist.loaded) this.file_num == 0 ? this.filelist.loaded = !0 : d.file = 1;
            if (!this.tasklist.loaded) this.task_num == 0 ? this.tasklist.loaded = !0 : d.task = 1;
            if (this.description === !1) d.desc = 1;
            var f = this;
            CW.get("gateway.php", d, function(b) {
                var d, j;
                if (b.task_dat)
                    for (d in b.task_dat) TK.setTask(b.task_dat[d]);
                if (b.file_list) {
                    d = 0;
                    for (j = b.file_list.length; d <
                        j; d++) f.filelist.insertFile(b.file_list[d])
                }
                f.filelist.setFileNum(b.file_num);
                if (e.jumpTo) {
                    d = 0;
                    for (j = b.chat_list.length; d < j; d++) f.timeline.insertChat(b.chat_list[d])
                } else {
                    d = 0;
                    for (j = b.chat_list.length; d < j; d++) f.timeline.addChat(b.chat_list[d])
                }
                if (b.description != void 0) f.description = b.description;
                if (b.public_description != void 0) f.public_description = b.public_description;
                if (RM && RM.id == f.id && (f.rswitch = !0, e.autoBuild)) e.autoBuild = !1, f.build(e);
                typeof a == "function" && a()
            })
        },
        prepareBuild: function() {
            if (!this.timeline) this.timeline =
                new TimeLine(this);
            if (!this.filelist) this.filelist = new FileList(this);
            if (!this.tasklist) this.tasklist = new TaskList(this)
        },
        build: function(b) {
            CW.cancelRead(this.id);
            b = $.extend({
                jumpTo: 0,
                jumpToCallback: function() {},
                smoothScroll: !1,
                highlight: !1
            }, b);
            if (b.read_lock) b.readLock = b.read_lock;
            if (b.jump_to_chat_id) b.jumpTo = b.jump_to_chat_id;
            this.id == 0 ? this.view.buildHome() : (this.prepareBuild(), this.read_lock = b.readLock ? !0 : !1, this.id && (b.jumpTo && this.chat_num > this.timeline.chat_list.length && !this.timeline.chat_id2chat_dat[b.jumpTo] ?
                this.load(b) : this.buildtime == 0 && this.load(b), this.view.build(b)))
        },
        buildMemberList: function() {
            this.view.buildMemberList()
        },
        free: function() {
            for (var b in this) b != "id" && b != "del" && (this[b] && typeof this[b] == "object" && typeof this[b].free == "function" && this[b].free(), delete this[b])
        }
    }
})();

function TimeLine(b) {
    this.view = new TimeLineView(this);
    this.room = b;
    this.chat_list = [];
    this.chat_id2chat_dat = {};
    this.sending_chat_list = [];
    this._loading = this.has_new_message = this.has_old = !1
}
TimeLine.prototype = {
    getLastChatId: function() {
        if (!this.chat_list.length) return 0;
        return this.chat_list[this.chat_list.length - 1].id
    },
    getFirstChatId: function() {
        if (!this.chat_list.length) return 0;
        return this.chat_list[0].id
    },
    addChat: function(b) {
        if (this.chat_id2chat_dat[b.id] == void 0) this.chat_list.push(b), this.chat_id2chat_dat[b.id] = b, this.has_new_message = !0, this.setMention(b.id)
    },
    insertChat: function(b) {
        this.chat_id2chat_dat[b.id] == void 0 && (this.chat_list.unshift(b), this.chat_id2chat_dat[b.id] = b, this.setMention(b.id))
    },
    deleteChat: function(b) {
        if (this.chat_id2chat_dat[b] != void 0) this.chat_id2chat_dat[b].msg = "[deleted]", this.chat_id2chat_dat[b].mn = !1, this.chat_id2chat_dat[b].utm = time()
    },
    refreshChat: function(b) {
        var a = this;
        this.chat_id2chat_dat[b] != void 0 && CW.get("gateway.php", {
            cmd: "get_chat",
            chat_id: b,
            rid: this.room.id
        }, function(e) {
            for (var d in e.chat_dat) a.chat_id2chat_dat[b][d] = e.chat_dat[d];
            a.setMention(b);
            RM && RM.id == a.room.id && a.build()
        })
    },
    setMention: function(b) {
        b = this.chat_id2chat_dat[b];
        if (b != void 0) b.mn = b.msg.indexOf("[To:" +
            AC.myid + "]") != -1 || b.msg.indexOf("[rp aid=" + AC.myid + " to=") != -1 ? !0 : !1
    },
    read: function(b) {
        this.view.read(b)
    },
    build: function(b, a, e, d) {
        this.room.id && (b == void 0 || !$.isPlainObject(b) ? this.view.build(b, a, e, d) : (b = $.extend({
            smoothScroll: !1,
            scrollTo: null,
            everScroll: !1,
            highlight: !1,
            sendingId: null,
            jumpToCallback: function() {}
        }, b), CW.view.is_biwa ? this.view.build(b) : this.view.build(b.smoothScroll, b.scrollTo, b.highlight, b.sendingId)))
    },
    loadOld: function(b) {
        var a = this;
        if (a._loading) return !1;
        var e = a.getFirstChatId();
        if (e == 0) return !1;
        typeof b != "function" && (b = function() {});
        a._loading = !0;
        CW.get("gateway.php", {
            cmd: "load_old_chat",
            room_id: a.room.id,
            first_chat_id: e
        }, function(d) {
            for (var f = {}, i = 0, h = d.chat_list.length; i < h; i++) a.insertChat(d.chat_list[i]), f[d.chat_list[i].aid] = !0;
            for (var j in f) AC.getName(j);
            d = function() {
                b();
                RM && RM.id == a.room.id && a.build({
                    smoothScroll: !1,
                    scrollTo: e
                });
                a._loading = !1
            };
            AC.hasUnknown() ? AC.getUnknown(d) : d()
        })
    },
    free: function() {}
};

function FileList(b) {
    this.view = new FileListView(this);
    this.loaded = !1;
    this.room = b;
    this.file_num = void 0
}
FileList.prototype = {
    getLastFileId: function() {
        var b = this.getFileList();
        if (b.length) {
            for (var a = 0, e = 0; e < b.length; e++) a < b[e] && (a = b[e]);
            return a
        } else return 0
    },
    getFileList: function() {
        var b = [],
            a;
        for (a in FL.file_id2file_dat) FL.file_id2file_dat[a].rid == this.room.id && b.push(a);
        return b
    },
    setFileNum: function(b) {
        this.file_num = b
    },
    getFileNum: function() {
        return this.file_num
    },
    insertFile: function(b) {
        FL.file_id2file_dat[b.id] == void 0 && (FL.file_id2file_dat[b.id] = b)
    },
    build: function() {
        this.view.build()
    },
    free: function() {
        for (var b in FL.file_id2file_dat) FL.file_id2file_dat[b].rid ==
            this.room.id && delete FL.file_id2file_dat[b]
    }
};

function TaskList(b) {
    this.view = new TaskListView(this);
    this.alltask_status = "open";
    this.loaded = !1;
    this.room = b
}
TaskList.prototype = {
    getTaskList: function(b) {
        b == void 0 && (b = "open");
        var a = [],
            e;
        for (e in TK.task_id2task_dat) TK.task_id2task_dat[e].rid == this.room.id && TK.task_id2task_dat[e].st == b && a.push(e);
        return a
    },
    build: function() {
        this.view.build()
    },
    free: function() {
        for (var b in TK.task_id2task_dat) TK.task_id2task_dat[b].rid == this.room.id && delete TK.task_id2task_dat[b]
    }
};

function ChatSend() {
    var b = this;
    b.prepare = function() {
        b.view = new ChatSendView(b);
        b.view.prepare()
    };
    b.initChatText = function() {
        b.view.initChatText()
    };
    b.setChatEdit = function(a, e) {
        b.view.setChatEdit(a, e)
    };
    b.setChatEditColor = function(a) {
        b.view.setChatEditColor(a)
    };
    b.clearChatEdit = function(a) {
        b.view.clearChatEdit(a)
    };
    b.prepareUploadForm = function(a) {
        b.view.prepareUploadForm(a)
    };
    b.sendMessage = function(a, b, d, f, i) {
        var h, j;
        d == void 0 && (d = {});
        h = d.read == void 0 || d.read ? 1 : 0;
        j = d.edit_id ? d.edit_id : 0;
        var k = RL.rooms[a];
        k.timeline.getLastChatId();
        CW.post("gateway.php", {
            cmd: "send_chat",
            text: b,
            room_id: a,
            last_chat_id: k.timeline.getLastChatId(),
            read: h,
            edit_id: j
        }, function(b) {
            if (b.chat_list)
                for (var d = 0, e = b.chat_list.length; d < e; d++) k.timeline.addChat(b.chat_list[d]), RL.rooms[a].read_num++, RL.rooms[a].chat_num++;
            b.storage != void 0 && b.storage_limit != void 0 && FL.updateStorageInfo(b.storage, b.storage_limit, b.storage_limit_time, b.is_storage_limit);
            j && CW.watch();
            typeof f == "function" && f(b)
        }, function(a, b) {
            b && b.is_storage_limit ? CW.showStorageLimitDialog("message") :
                typeof i == "function" && i(a, b)
        })
    };
    b.sendChat = function(a, e, d, f, i, h) {
        return b.sendMessage(a, e, f, i, h)
    };
    b.deleteChat = function(a, b, d) {
        CW.get("gateway.php", {
            cmd: "delete_chat",
            chat_id: a
        }, function(a) {
            typeof b == "function" && b(a);
            CW.watch()
        }, function(a) {
            typeof d == "function" ? d(a) : CW.alert(a)
        })
    };
    b.sendTask = function(a, b, d, f, i, h) {
        d ? d.toString().match(/^[0-9]+$/) || (d = strtotime_format(d, ST.data.dateformat)) : d = 0;
        CW.post("gateway.php", {
                cmd: "add_task",
                task: b,
                task_limit: d,
                assign: f,
                room_id: a
            }, function(a) {
                i(a);
                CW.watch()
            },
            function(a) {
                h(a)
            })
    };
    b.editTask = function(a, b, d, f, i, h) {
        f ? f.match(/^[0-9]+$/) || (f = strtotime_format(f, ST.data.dateformat)) : f = 0;
        CW.post("gateway.php", {
            cmd: "edit_task",
            aid: b,
            task_id: a,
            task: d,
            task_limit: f
        }, function(a) {
            typeof i == "function" && i(a);
            CW.watch()
        }, function(a) {
            typeof h == "function" && h(a)
        })
    };
    b.convertToSend = function(a) {
        a = a.replace(RegExp("\\[" + L.chatsend_quote + " aid=", "g"), "[qt][qtmeta aid=");
        a = a.replace(RegExp("\\[/" + L.chatsend_quote + "\\]", "g"), "[/qt]");
        return a = a.replace(RegExp("\\[" + L.chatsend_reply +
            " aid=", "g"), "[rp aid=")
    };
    b.convertToEdit = function(a) {
        var a = a.replace(/\[qt\]\[qtmeta aid=/g, "[" + L.chatsend_quote + " aid="),
            a = a.replace(/\[\/qt\]/g, "[/" + L.chatsend_quote + "]"),
            a = a.replace(/\[rp aid=/g, "[" + L.chatsend_reply + " aid="),
            b = a.match(/\[dtext:\w+\]/g);
        if (b)
            for (var d = 0; d < b.length; d++) {
                var f = b[d].match(/\[dtext:(\w+)\]/)[1];
                L.hasOwnProperty(f) && "string" === typeof L[f] && (a = a.replace("[dtext:" + f + "]", L[f]))
            }
        return a
    };
    b.setChatDraft = function(a, b, d) {
        a = this.getDraftMessageKey(a);
        CW.localStorage.setItem(a,
            JSON.stringify({
                edit_id: d,
                text: b
            }))
    };
    b.setTaskDraft = function(a, b, d, f) {
        a = this.getDraftTaskKey(a);
        CW.localStorage.setItem(a, JSON.stringify({
            task_name: b,
            assign_list: d,
            limit_date: f
        }))
    };
    b.getChatDraft = function(a) {
        var b = this.getDraftMessageKey(a),
            b = CW.localStorage.getItem(b);
        if (!b) return {
            edit_id: 0,
            text: ""
        };
        this.deleteChatDraft(a);
        return JSON.parse(b)
    };
    b.getTaskDraft = function(a) {
        var b = this.getDraftTaskKey(a),
            b = CW.localStorage.getItem(b);
        if (!b) return {
            task_name: "",
            task_mode: "",
            assign_list: [],
            limit_date: ""
        };
        this.deleteTaskDraft(a);
        return JSON.parse(b)
    };
    b.deleteChatDraft = function(a) {
        a = this.getDraftMessageKey(a);
        CW.localStorage.removeItem(a)
    };
    b.deleteTaskDraft = function(a) {
        a = this.getDraftTaskKey(a);
        CW.localStorage.removeItem(a)
    };
    b.getDraftMessageKey = function(a) {
        return "draft_message_" + AC.myid + "_" + a
    };
    b.getDraftTaskKey = function(a) {
        return "draft_task_" + AC.myid + "_" + a
    };
    b.getTaskAssignList = function() {
        return b.view.getTaskAssignList()
    };
    b.setTaskAssign = function(a) {
        b.view.setTaskAssign(a)
    };
    b.clearTaskAssign = function() {
        b.view.clearTaskAssign()
    }
}

function Search() {
    var b = this;
    b.xhr = null;
    b.prepare = function() {
        b.view = new SearchView(b);
        b.view.prepare()
    };
    b.search = function(a, e, d) {
        var f = "r";
        SERVICE_PLAN === "free" && (f = "fs");
        b.xhr = CW.get(f + "/gateway.php", {
            cmd: "search_message",
            opt: a
        }, function(a) {
            e(a.msg_dat)
        }, d)
    };
    b.cancelSearch = function() {
        if (b.xhr && b.xhr.abort) b.xhr.abort(), b.xhr = null
    }
}

function CheatSheet() {
    var b = this;
    b.prepare = function() {
        b.view = new CheatSheetView;
        b.view.prepare()
    }
}

function LocalStorage() {
    this.isEnabledCache = null
}
(function() {
    LocalStorage.prototype = {
        isEnabled: function() {
            if (this.isEnabledCache !== null) return this.isEnabledCache;
            try {
                var b = !!window.localStorage;
                return this.isEnabledCache = b
            } catch (a) {
                return this.isEnabledCache = !1
            }
        },
        setItem: function(b, a) {
            this.isEnabled() && window.localStorage.setItem(b, a)
        },
        getItem: function(b) {
            if (this.isEnabled()) return window.localStorage.getItem(b)
        },
        removeItem: function(b) {
            this.isEnabled() && window.localStorage.removeItem(b)
        }
    }
})();

function RoomSub() {
    var b = this;
    b.show_promotion = !1;
    b.init_promotion_status = !0;
    if (SERVICE_PLAN === "free" && !(time() - REG_TIME <= 2592E3)) b.show_promotion = !0;
    b.prepare = function() {
        b.view = new RoomSubView(b);
        b.view.prepare();
        b.view.hidePromotion();
        b.show_promotion && b.view.initializePromotion()
    };
    b.addTask = function(a, b, d, f, i, h) {
        d ? d.toString().match(/^[0-9]+$/) || (d = strtotime_format(d, ST.data.dateformat)) : d = 0;
        CW.post("gateway.php", {
                cmd: "add_task",
                task: b,
                task_limit: d,
                assign: f,
                room_id: a
            }, function(a) {
                i(a);
                CW.watch()
            },
            function(a) {
                h(a)
            })
    };
    b.buildMember = function() {
        b.view.buildMember()
    };
    b.resetPromotionStatus = function() {
        b.init_promotion_status = !0
    };
    b.showPromotion = function() {
        if (b.show_promotion && b.init_promotion_status && b.view.promotion_initialized) b.init_promotion_status = !1, b.view.showPromotion(), b.view.refreshPromotion()
    };
    b.hidePromotion = function() {
        if (b.show_promotion) b.init_promotion_status = !1, b.view.hidePromotion()
    }
}

function ChatWorkView(b) {
    var a = this;
    a.model = b;
    a.resize_delay_timer = null;
    a.is_biwa = !0;
    a.key = {};
    a.keyfunc = {};
    var e = "",
        d = !1,
        f = !1,
        i = null,
        h = null,
        j = null,
        k = null,
        g = null;
    a.prepare = function() {
        a.prepareHiddenIframe();
        $C("#_wrapper").on("mouseenter", "._showDescription", function() {
            if (!$.cwMessageTip.isInit(this)) {
                var a = $(this),
                    b = {
                        message: function() {
                            if (a.hasClass("_showDescription")) return a.attr("aria-label");
                            return ""
                        }
                    },
                    d = a.attr("data-delay");
                b.delay = d != void 0 ? parseInt(d, 10) : TM.messagetip_delay;
                a.cwMessageTip(b).open()
            }
        }).on("mouseenter",
            "._externalMark",
            function() {
                $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                    message: L.chatroom_not_only_internal,
                    offsetLeft: TM.extermal_marktip_offset_left
                }).open()
            }).on("mouseenter", "._pin", function() {
            $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                message: L.pin_hint,
                delayQuickMode: !1,
                delay: TM.messagetip_delay
            }).open()
        }).on("click", "._joinLive", function() {
            l || a.prepareLive();
            l.open($(this))
        }).on("click", "._profileTipCheckLabel", function() {
            $(this).closest("._contactPanel").find("._cwCB").click()
        });
        $C("body").on("click", "._previewLink", function() {
            var b = $(this);
            a.openPreviewLinkDialog(b.attr("data-type"), urldecode(b.attr("data-url")), b.attr("data-user-id"), b.attr("data-content-id"));
            return !1
        }).on("keypress", "form input[type=text]", function(a) {
            if (a.keyCode == 13) return !1
        });
        $("#_openInfomation").click(function() {
            a.openInformationPanel()
        });
        $C("#_notificationAnnounceLink").click(function() {
            a.openAnnounceDialog(this.id, ST.announce_dat.body)
        });
        $("#_feedback").click(function() {
            $("#_feedbackDialog").cwDialog({
                title: L.menu_feedback,
                width: "auto",
                height: "auto",
                autoOpen: !0,
                buttonLabels: [L.button_send, L.button_cancel],
                buttonCancel: 1,
                buttonSubmit: 0,
                buttonClick: function(b) {
                    switch (b) {
                        case 0:
                            var d = $("#_feedbackMessage");
                            if (b = d.val()) CW.showProgress(L.sending), this.close(), CW.sendFeedback({
                                message: b,
                                version: 2,
                                success: function() {
                                    CW.hideProgress();
                                    d.val("");
                                    a.openFeedbackCompleteDialog()
                                },
                                error: function() {
                                    CW.hideProgress();
                                    CW.alert(L.raise_error)
                                }
                            })
                    }
                }
            });
            $.cwFloatBox.close($C("#_informationBox"))
        });
        $("#_userGuideLink").click(function() {
            a.openUserGuideDialog();
            $.cwFloatBox.close($C("#_informationBox"))
        });
        $("#_cheatSheetLink").click(function() {
            CHEATSHEET.view.open();
            $.cwFloatBox.close($C("#_informationBox"))
        });
        if (canPlayOgg || canPlayMp3) a.embedAudio("BG_call"), $("#_audio_BG_call").on("ended", function() {
            this.play()
        });
        e = document.location.hash;
        $C("body").on("offline", function() {
            CW.setConnectionError()
        }).on("change", "._cwValidateFileImage", function() {
            var a = $.cwValidate.File.hasError(this, {
                maxsize: 716800,
                onlyimage: !0
            });
            a && (a = a.join("\n"), CW.alert(a))
        });
        $(window).on("beforeunload",
            function() {
                f = !0;
                setTimeout(function() {
                    f = !1
                }, 3E3)
            }).on("resize", function() {
            if (a.resize_delay_timer === null) a.resize_delay_timer = setTimeout(a.model.resizeLayout, 300)
        });
        var b = !0,
            d = null;
        $C("document").on("focus", "input,textarea", function() {
            b = !1;
            d = $(this)
        }).on("blur", "input,textarea", function() {
            b = !0;
            d = null
        }).keydown(function(e) {
            a.key.ctrl = typeof e.modifiers == "undefined" ? e.ctrlKey : e.modifiers & Event.CONTROL_MASK;
            a.key.shift = typeof e.modifiers == "undefined" ? e.shiftKey : e.modifiers & Event.SHIFT_MASK;
            a.key.alt =
                typeof e.modifiers == "undefined" ? e.altKey : e.modifiers & Event.ALT_MASK;
            a.key.command = typeof e.modifiers == "undefined" ? e.metaKey : e.modifiers & Event.META_MASK;
            b ? d && d.offset().top != 0 && (b = !1) : d && d.offset().top == 0 && (b = !0);
            if (b && !$.cwDialog.isShown() && !$.cwFloatWindow.isShown()) {
                var f = a.getKeyCombinationMap(e.keyCode, a.key.ctrl, a.key.shift, a.key.alt, a.key.command);
                if (a.keyfunc[f] != void 0) return $C("#_wrapper").click(), a.keyfunc[f](), !1
            }
            if (e.keyCode == 27) return !1
        }).keyup(function(b) {
            a.key.ctrl = typeof b.modifiers ==
                "undefined" ? b.ctrlKey : b.modifiers & Event.CONTROL_MASK;
            a.key.shift = typeof b.modifiers == "undefined" ? b.shiftKey : b.modifiers & Event.SHIFT_MASK;
            a.key.alt = typeof b.modifiers == "undefined" ? b.altKey : b.modifiers & Event.ALT_MASK;
            a.key.command = typeof b.modifiers == "undefined" ? b.metaKey : b.modifiers & Event.META_MASK
        });
        $("#_openServiceAdmin").click(function() {
            a.showServiceAdmin()
        });
        $("#_openServiceAdminUpgrade").click(function() {
            a.showServiceAdmin("upgrade")
        });
        $("#_storageLimitLink").click(function() {
            j.close();
            a.model.plan ==
                "free" ? a.showServiceAdmin("upgrade") : a.showOptionPlanPrice()
        });
        a.onEndInitLoad(function() {
            a.resizeLayout();
            $("#_loader").fadeOut("slow");
            $("#_wrapper").css({
                visibility: "visible"
            });
            for (var b = ["ui_roomfilter", "ui_fold_roomlist", "ui_fold_roomsub", "ui_chatlist_width", "ui_subcontent_width", "ui_category"], d = 0, e = b.length; d < e; d++) {
                var f = b[d],
                    g = $.cookie(f);
                g !== void 0 && $.cookie(f, g, {
                    expires: 3650
                })
            }
        })
    };
    var l = null;
    a.prepareLive = function() {
        l = $("#_joinLiveTip").cwToolTip({
            open: function(a) {
                this.data.live_id = a.attr("data-live-id");
                this.data.account_id = a.attr("data-aid")
            }
        });
        var a = function(a) {
            if (l.data.live_id) var b = CW.getLiveUrlById(l.data.live_id, a);
            else l.data.account_id && (b = CW.getLiveUrl(AC.getRoomId(l.data.account_id), [AC.myid, l.data.account_id], a));
            window.open(b, "cwlive", "menubar=0,toolbar=0,titlebar=0,status=0,scrollbars=0,resizable=1");
            l.close()
        };
        l.$el.on("click", "._joinLiveByVideo", function() {
            a("video")
        }).on("click", "._joinLiveByVoice", function() {
            a("voice")
        })
    };
    a.prepareHiddenIframe = function() {
        for (var b = [{
                id: "_roomInfoFrame",
                name: "form_update_room"
            }, {
                id: "_updateInvitationLinkSettingIframe",
                name: "form_update_invitation_link_setting"
            }, {
                id: "_updateRoomPermissionSettingIframe",
                name: "form_update_room_permission_setting"
            }, {
                id: "_formSetting",
                name: "form_setting"
            }, {
                id: "_fileFrame",
                name: "form_upload"
            }, {
                id: "_profileAvatarFrame",
                name: "_profileAvatarFrame"
            }, {
                id: "_profileCoverFrame",
                name: "_profileCoverFrame"
            }, {
                id: "_downloadFrame",
                name: "_downloadFrame"
            }], d = "", e = 0, f = b.length; e < f; e++) {
            var g = b[e];
            d += '<iframe id="' + g.id + '" name="' + g.name +
                '" src="" style="display: none"></iframe>'
        }
        setTimeout(function() {
            $("#_hiddenIframe").html(d);
            for (var a = 0, b = n.length; a < b; a++) n[a]();
            n = [];
            m = !0
        }, 3E3);
        $("#_liveNotificationClose").click(a.closeLiveNotification);
        $C("#_liveNotificationLiveButton").click(function() {
            CW.stopSound("BG_call")
        })
    };
    a.openLiveNotification = function(a, b) {
        var d = RL.rooms[b],
            e = d.getAccountId(),
            f = "",
            f = e ? L.live_call_direct.replace(/%%name%%/, AC.getName(e)) : L.live_call_chat.replace(/%%name%%/, AC.getName(e)).replace(/%%chat_name%%/, d.getName());
        $C("#_liveNotificationMessage").text(f);
        $C("#_liveNotification").slideDown();
        $C("#_liveNotificationLiveButton").attr("data-live-id", a);
        CW.playSound("BG_call")
    };
    a.closeLiveNotification = function() {
        $C("#_liveNotification").slideUp();
        CW.stopSound("BG_call")
    };
    var m = !1,
        n = [];
    a.onIframeReady = function(a) {
        m ? a() : n.push(a)
    };
    var o = 0;
    a.alert = function(a, b, d) {
        var e = "_alertDialogBody" + o,
            f = $('<div id="_alertDialog' + o + '" class="dialog dialogPadding"><pre id="' + e + '" class="alertDialogBody"></pre></div>');
        $C("body").append(f);
        d ? a = mlength($("#" + e).html(a).text()) : ($("#" + e).text(a), a = mlength(a));
        f.cwDialog({
            width: a > 50 ? 500 : 400,
            minHeight: 100,
            height: "auto",
            autoOpen: !0,
            buttonLabels: [L.button_ok],
            buttonSubmit: 0,
            buttonClick: function(a) {
                switch (a) {
                    case 0:
                        typeof b == "function" && b(), this.close()
                }
            },
            close: function() {
                f.remove()
            }
        });
        o++
    };
    a.confirm = function(a, b, d, e) {
        var f = "_confirmDialogBody" + o,
            g = $('<div id="_confirmDialog' + o + '" class="dialog dialogPadding"><pre id="' + f + '" class="confirmDialogBody"></pre></div>');
        $C("body").append(g);
        e ?
            a = mlength($("#" + f).html(a).text()) : ($("#" + f).text(a), a = mlength(a));
        g.cwDialog({
            width: a > 50 ? 500 : 400,
            minHeight: 100,
            height: "auto",
            autoOpen: !0,
            buttonLabels: [L.button_cancel, L.button_ok],
            buttonSubmit: 1,
            buttonClick: function(a) {
                switch (a) {
                    case 0:
                        typeof d == "function" && d();
                        this.close();
                        break;
                    case 1:
                        b(), this.close()
                }
            },
            close: function() {
                g.remove()
            }
        });
        o++
    };
    a.confirmDelete = function(a, b, d, e, f) {
        var g = "_confirmDialogBody" + o,
            i = $('<div id="_confirmDialog' + o + '" class="dialog dialogPadding"><pre id="' + g + '" class="confirmDialogBody"></pre></div>');
        $C("body").append(i);
        g = $("#" + g);
        e ? a = mlength(g.html(a).text()) : (g.text(a), a = mlength(a));
        if (!f) f = L.button_delete_long;
        i.cwDialog({
            width: a > 50 ? 500 : 300,
            minHeight: 100,
            height: "auto",
            autoOpen: !0,
            buttonLabels: [L.button_cancel, f],
            buttonDelete: 1,
            buttonClick: function(a) {
                switch (a) {
                    case 0:
                        typeof d == "function" && d();
                        this.close();
                        break;
                    case 1:
                        this.isAgreed() && (b(), this.close())
                }
            },
            close: function() {
                i.remove()
            }
        });
        o++
    };
    var u = null;
    a.showProgress = function(a) {
        $("#_progressDialogBody").html('<div style="padding:10px" class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" />' +
            a + "</div>");
        u = $("#_progressDialog").cwDialog({
            autoOpen: !0,
            closeOnEscape: !1
        })
    };
    a.hideProgress = function() {
        u && (u.close(), u = null)
    };
    a.registerKeyboardShortcut = function(b, d, e, f, g, i) {
        a.keyfunc[a.getKeyCombinationMap(b, d, e, f, g)] = i;
        return a
    };
    a.getKeyCombinationMap = function(a, b, d, e, f) {
        var g = "";
        g += b ? "1" : "0";
        g += d ? "1" : "0";
        g += e ? "1" : "0";
        g += f ? "1" : "0";
        g += a;
        return g
    };
    var r = [],
        v = !1;
    a.onPostLoad = function(a) {
        v ? a() : r.push(a)
    };
    a.postLoad = function() {
        CW.security_dat.disable_external == 1 && $("#_addContactType").remove();
        a.model.security_dat.disable_send_file ==
            1 && $("#_file").remove();
        a.model.security_dat.disable_download_file == 1 && ($("#_chatFileAll").remove(), $("#_openFileWindow").remove());
        CW.security_dat.disable_social_profile == 1 && $("#_profileSnsListEdit").hide();
        if (_is_oldmsie) $("#_newbrowserDialog").cwDialog({
            width: 600,
            title: L.newbrowser_title,
            autoOpen: !0,
            buttonLabels: [L.button_close],
            buttonCancel: 0
        });
        else if (e.indexOf("contact_myrequest") != -1) AC.view.openContactWindow(), $("#_contactWindowTabMyRequest").click();
        else if (e.indexOf("contact_request") !=
            -1) AC.view.openContactWindow(), $("#_contactWindowTabRequest").click();
        else if (e.indexOf("join=") != -1) {
            var b = e.match(/join=([0-9]+)/);
            b && RL.joinPublicChat(b[1])
        } else if (e.indexOf("tutorial=") != -1) CW.view.startTutorial();
        else if (e.indexOf("contact=") != -1) {
            if (b = e.match(/contact=([^&\?]+)/)) {
                var d = b[1],
                    b = !1;
                if (d == AC.getChatWorkId(AC.myid)) CW.alert(L.contact_cwid_error_myself), b = !0;
                else
                    for (var f in AC.contact_list)
                        if (d == AC.getChatWorkId(AC.contact_list[f])) {
                            CW.alert(L.contact_cwid_error_already.replace(/%%chatwork_id%%/,
                                d));
                            b = !0;
                            break
                        }
                b || CW.get("gateway.php", {
                    cmd: "get_account_info_by_cwid",
                    cwid: d
                }, function(a) {
                    a.account_dat ? (AC.setAccountDat(a.account_dat.aid, a.account_dat), AC.showChatWorkIdRequestDialog(a.account_dat)) : CW.alert(L.contact_cwid_error_noexist.replace(/%%chatwork_id%%/, d))
                }, function(a) {
                    CW.alert(a)
                })
            }
        } else e.indexOf("contact") != -1 ? AC.view.openContactWindow() : e.indexOf("mytask") != -1 ? AC.view.openTaskWindow() : e.indexOf("chat_setting") != -1 ? ST.view.openSettingDialog() : e.indexOf("profile_setting") != -1 ? AC.view.openProfileWindow(AC.myid) :
            e.indexOf("service_admin") != -1 ? a.showServiceAdmin() : e.indexOf("information") != -1 && a.openInformationPanel();
        f = 0;
        for (b = r.length; f < b; f++) r[f]();
        $(window).scrollTop(0);
        v = !0
    };
    (function() {
        var b = null,
            d = null,
            e = window.navigator.userAgent.toLowerCase().indexOf("chrome") != -1;
        a.popup = function(a, f, g, i) {
            if (!wfocus && NotificationAPI && NotificationAPI.checkPermission() == 0) b && (typeof b.cancel == "function" ? b.cancel() : typeof b.close == "function" && b.close()), e && (g = " " + g), b = NotificationAPI.createNotification(a, f, g), b.room_id =
                i, b.onclick = function() {
                    window.focus();
                    RL.selectRoom(this.room_id);
                    this.cancel()
                }, b.show(), a = parseInt(ST.data.notifier_duration, 10) * 1E3, a > 0 && (d && (clearTimeout(d), d = null), d = setTimeout(function() {
                    b && (typeof b.cancel == "function" ? b.cancel() : typeof b.close == "function" && b.close())
                }, a))
        }
    })();
    a.embedAudio = function(a) {
        var b;
        canPlayOgg ? b = a + ".ogg" : canPlayMp3 && (b = a + ".mp3");
        $C("#_audioList").append('<audio id="_audio_' + a + '"><source src="./sound/' + b + '"/></audio>')
    };
    a.playSound = function(b, d) {
        var e = "_audio_" + b,
            f =
            $("#" + e);
        f.length || (a.embedAudio(b), f = $("#" + e));
        if (d == void 0) d = ST.data.sound_volume;
        e = f[0];
        e.volume = d;
        e.load();
        e.play()
    };
    a.stopSound = function(a) {
        document.getElementById("_audio_" + a).pause()
    };
    var w = "";
    a.changeFavicon = function(a) {
        w != a && (w = a, $("#_favicon").remove(), $("head").append($('<link rel="shortcut icon" id="_favicon" href="' + a + '?1"  type="image/vnd.microsoft.icon" />')))
    };
    a.alertUpdated = function() {
        CW.alert(L.chatwork_update)
    };
    a.showUpdated = function() {
        $("#cw_version_update").html('<a href="./">' +
            L.chatwork_do_update + "</a>").show()
    };
    a.setOnline = function() {
        $("#_statusAlert").fadeOut()
    };
    a.setConnectionError = function(b) {
        b == "NO LOGIN" || b == "NO TOKEN" || b == "IP ERROR" ? (f || ($("#_statusAlertMessage").html('<a href="./">' + L.connection_error_logout + "</a>"), $("#_statusAlert").fadeIn()), b == "IP ERROR" && (d || a.model.alert(L.error_cant_login_ip), d = !0)) : b == "INVALID USER" ? f || ($("#_statusAlertMessage").html('<a href="./">' + L.connection_error_invalid_user + "</a>"), $("#_statusAlert").fadeIn()) : b == "INVALID TOKEN" ?
            !f && RM !== null && (a.setDrafts(), location.reload()) : f || ($("#_statusAlertMessage").html('<a href="./">' + L.connection_error_offline + "</a>"), $("#_statusAlert").fadeIn())
    };
    a.firstWatch = function() {
        if (document.location.hash) {
            var a = document.location.hash.match(/#!rid(\d+)(?:-(\d+))?/);
            if (a) {
                var b = parseInt(a[1], 10),
                    d = 0;
                a[2] && (d = parseInt(a[2], 10));
                RL.lazy_select = b;
                RL.lazy_select_chat = d
            }
        }
    };
    a.filePreview = function() {
        var a = function() {
                var a = [{
                    ext: "(txt|html|htm|shtml|less|scss|styl|stylus|asp|bashrc|c|cgi|cpp|css|dif|diff|patch|h|hs|java|js|jsee|json|jsp|m|manifest|md|mobileprovision|plist|mxml|php|pl|pm|py|rb|scala|swift|tpl|vbs|csv|slk|sql|tsv|def|inf|ini|reg|log)",
                    preview: "source"
                }, {
                    ext: "(jpe?g|gif|png)",
                    preview: "image"
                }];
                /\WTrident\W/i.test(navigator.userAgent) || a.push({
                    ext: "pdf",
                    preview: "iframe"
                });
                return a.concat(function() {
                    var a = document.createElement("video");
                    if (!a.canPlayType) return [];
                    return [{
                        ext: "mpe?g",
                        type: "video/mpeg",
                        preview: "video"
                    }, {
                        ext: "mp4|m4v|mov",
                        type: "video/mp4",
                        preview: "video"
                    }, {
                        ext: "webm",
                        type: "video/webm",
                        preview: "video"
                    }, {
                        ext: "ogv",
                        type: "video/ogg",
                        preview: "video"
                    }, {
                        ext: "avi",
                        type: "video/avi",
                        preview: "video"
                    }, {
                        ext: "qt",
                        type: "video/quicktime",
                        preview: "video"
                    }, {
                        ext: "wmv",
                        type: "video/x-ms-wmv",
                        preview: "video"
                    }, {
                        ext: "mp3",
                        type: "audio/mpeg",
                        preview: "video"
                    }, {
                        ext: "ogg",
                        type: "audio/ogg",
                        preview: "video"
                    }, {
                        ext: "midi?",
                        type: "audio/midi",
                        preview: "video"
                    }, {
                        ext: "wav",
                        type: "audio/wav",
                        preview: "video"
                    }].filter(function(b) {
                        return a.canPlayType(b.type)
                    })
                }())
            }(),
            b = RegExp($.map(a, function(a) {
                return "^" + a.ext + "$"
            }).join("|").toLowerCase());
        return {
            canPlayTypes: function(a) {
                return b.test(a.toLowerCase())
            },
            getPreviewType: function(b) {
                var d, e = b.toLowerCase();
                $.each(a,
                    function(a, b) {
                        if (RegExp("^" + b.ext + "$").test(e)) return d = b, !1
                    });
                return d ? d.preview : ""
            }
        }
    }();
    a.renderMessage = function(b, d) {
        var e = $.extend({
                text: !1,
                trimLink: ST.data.shorten_url
            }, d),
            f = [];
        b.indexOf("[code") !== -1 && (b = b.replace(/\[code.*?\][\r\n]?([\s\S]*?)\[\/code\][\r\n]?/gi, function(a, b) {
            f.push(b);
            return e.text ? "[Code]" : "[code][/code]"
        }));
        time();
        for (var g in a.model.reg_cmp) b = e.text && a.model.reg_cmp[g].reptxt != void 0 ? b.replace(a.model.reg_cmp[g].key, a.model.reg_cmp[g].reptxt) : b.replace(a.model.reg_cmp[g].key,
            a.model.reg_cmp[g].rep);
        var i = b.match(/\[pname:\d+\]/g);
        if (i)
            for (g = 0; g < i.length; g++) var h = i[g].match(/\[pname:(\d+)\]/),
                h = h[1],
                l = e.text ? AC.getName(h) : CW.getName(h),
                b = b.replace("[pname:" + h + "]", l);
        if (i = b.match(/\[dtext:\w+\]/g))
            for (g = 0; g < i.length; g++) h = i[g].match(/\[dtext:(\w+)\]/), h = h[1], L.hasOwnProperty(h) && "string" === typeof L[h] && (b = b.replace("[dtext:" + h + "]", L[h]));
        if (i = b.match(/\[picon:\d+\]/g))
            for (g = 0; g < i.length; g++) h = i[g].match(/\[picon:(\d+)\]/), h = h[1], b = b.replace("[picon:" + h + "]", CW.getAvatarPanel(h, {
                size: "tiny"
            }));
        if (i = b.match(/\[date:\d+\]/g))
            for (g = 0; g < i.length; g++) h = i[g].match(/\[date:(\d+)\]/), h = h[1], b = b.replace("[date:" + h + "]", a.model.getDate(h));
        if (i = b.match(/\[task aid=[0-9,]+ st=[^\s]+ lt=-?[0-9]*\]/g))
            for (g = 0; g < i.length; g++) h = i[g].match(/\[task aid=([0-9,]+) st=([^\s]+) lt=(-?[0-9]*)\]/), e.text ? b = b.replace(h[0], "[") : (l = {
                aid: h[1],
                st: h[2],
                lt: parseInt(h[3], 10)
            }, l = TK.view.getTaskPanel(l, {
                type: "timeline",
                mid: e.mid
            }), b = b.replace(h[0], l));
        if (i = b.match(/\[live id=[^\ ]+ rid=\d+]/g))
            for (g = 0; g <
                i.length; g++)
                if (h = i[g].match(/\[live id=([^\ ]+) rid=(\d+)\]/), e.text) b = b.replace(h[0], "[ChatWork Live]");
                else {
                    var l = "",
                        n = h[1],
                        m = h[2];
                    l += MOBILE === "ipad" ? '<div class="button btnDisable"><span class="icoFontVideoChat"></span><span>' + L.live_join + "</span></div>" : RL.rooms[m] ? '<div class="_joinLive button btnSuccess" data-live-id="' + n + '"><span class="icoFontVideoChat"></span><span>' + L.live_join + "</span></div>" : '<div class="button btnDisable"><span class="icoFontVideoChat"></span><span>' + L.live_join + "</span></div>";
                    b = b.replace(h[0], l)
                }
                /MSIE\s9\.0;/i.test(navigator.userAgent) || (b = b.replace(/<a\shref="gateway\.php\?cmd=download_file\W.+?".*?>.+?<\/a>/g, function(b) {
            var d = (b.match(/>(.+)\s\(/) || []).pop() || "",
                e = d.split(".").pop().toLowerCase();
            if (!a.filePreview.canPlayTypes(e)) return b;
            var e = a.filePreview.getPreviewType(e),
                f = (b.match(/href="(.+?)"/) || [""]).pop(),
                g = "",
                h = "";
            e !== "image" ? (g = "_previewLink", d = d.replace(/\'\"\`/g, ""), h = ' data-url="' + urlencode(f + "&preview=1") + '" data-type="chatworkFilePreview" data-content-id="' +
                d + '"') : (g = "_filePreview", h = 'data-file-id="' + (f.match(/\Wfile_id=(\d+)/i) || [""]).pop() + '"');
            return b + (' <a class="' + g + ' timelineLinkAppend" ' + h + ">" + (e === "video" ? L.preview_video : L.preview) + "</a>")
        }));
        if (i = b.match(/<link_title>https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}]+[-_.!~*\'\(\)a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+<\/link_title>/g))
            for (g = 0; g < i.length; g++) {
                var h = i[g].match(/(<link_title>(https?:\/\/([^\/]+)[-_.!~*\'\(\)a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+)<\/link_title>)/),
                    l = h[1],
                    n = h[2],
                    p = h[3],
                    m = "";
                n.match(/\.([^\.]+)$/);
                h = 70;
                if (n.indexOf("chatwork.com") != -1 || n.indexOf("www.chatwork.com") != -1 || n.indexOf("kcw.kddi.ne.jp") != -1) {
                    var o = n.match(/(#!rid(\d+)\-?(\d+)?)$/),
                        p = "chatwork.com";
                    if (o) n = o[1], m = o[2], m = (o = o[3]) ? '</a> <a class="_messageLink timelineLinkAppend" data-rid="' + m + '" data-mid="' + o + '">' + L.message_link + "</a>" : '</a> <a class="_roomLink timelineLinkAppend" data-rid="' + m + '">' + L.message_open_chat + "</a>";
                    else if (o = n.match(/\/g\/([-\w]+)$/)) n = o[0], m = '</a> <a class="_groupchatLink timelineLinkAppend" data-linkCode="' +
                        o[1] + '">' + L.message_join_groupchat + "</a>"
                }
                if ((p == "secure.mindjet.com" || p == "www.mindjet.com") && n.indexOf("openlink") != -1) h = 40, m = '</a><a class="timelineLinkAppend" href="mj-link:' + n + '">' + L.message_open_mindmanager + "</a>";
                if ((p == "vision.mindjet.com" || p == "connect.mindjet.com") && n.indexOf("/link") != -1) h = 40, m = '</a><a class="timelineLinkAppend" href="mj-connect:' + n + '">' + L.message_open_mindmanager + "</a>";
                p.indexOf(".sharepoint.com") != -1 && (p = "sharepoint.com");
                if (_has_sandbox) {
                    var j = o = "",
                        s = "";
                    switch (p) {
                        case "teachme.jp":
                            if (p =
                                n.match(/^https?:\/\/teachme\.jp\/contents\/([0-9]+)/)) o = "teachme", s = p[1];
                            break;
                        case "speakerdeck.com":
                            if (p = n.match(/^https?:\/\/speakerdeck\.com\/([^\/]+)\/([^\/]+)$/)) o = "speakerdeck", j = p[1], s = p[2];
                            break;
                        case "www.slideshare.net":
                            if (p = n.match(/^https?:\/\/www\.slideshare\.net\/([^\/]+)\/([^\/]+)$/)) o = "slideshare", j = p[1], s = p[2];
                            break;
                        case "prezi.com":
                            if (p = n.match(/^https?:\/\/prezi\.com\/([^\/]+)\//)) o = "prezi", s = p[1];
                            break;
                        case "www.youtube.com":
                            if (p = n.match(/^https?:\/\/www\.youtube\.com\/watch\?v=([^\/&]+)/)) o =
                                "youtube", s = p[1];
                            break;
                        case "youtu.be":
                            if (p = n.match(/^https?:\/\/youtu\.be\/([^\/&]+)/)) o = "youtube", s = p[1];
                            break;
                        case "vimeo.com":
                            if (p = n.match(/^https?:\/\/vimeo\.com\/(?:channels\/staffpicks\/)?([^\/]+)/)) o = "vimeo", s = p[1];
                            break;
                        case "slides.com":
                            if (p = n.match(/^https?:\/\/slides\.com\/([^\/]+\/[^\/]+)$/)) o = "slid.es", s = p[1];
                            break;
                        case "slid.es":
                            if (p = n.match(/^https?:\/\/slid\.es\/([^\/]+\/[^\/]+)$/)) o = "slid.es", s = p[1];
                            break;
                        case "corabbit.com":
                            if (p = n.match(/^https:\/\/corabbit\.com\/#\/file\/([^\/]+)$/)) o =
                                "corabbit", s = p[1];
                            break;
                        case "docs.google.com":
                            if (p = n.match(/^https:\/\/docs.google\.com\//)) o = "googledocs", s = "-";
                            break;
                        case "drive.google.com":
                            if (p = n.match(/^https:\/\/drive.google\.com\//)) o = "googledocs", s = "-";
                            break;
                        case "cacoo.com":
                            if (p = n.match(/^https:\/\/cacoo\.com\/diagrams\/([^\/]+)(?:\/edit)?$/)) o = "cacoo", s = p[1];
                            break;
                        case "sharepoint.com":
                            if (p = n.match(/^https:\/\/([\w\-\.\/]+?)\?.*(sourcedoc=[\{\}\w\-]+?|guestaccesstoken=[\%\w]+&(?:amp;?)docid=\w+)(?:&|$)/)) o = "sharepoint", s = p[1] + "?" + p[2]
                    }
                    o &&
                        (m = '</a> <a class="_previewLink timelineLinkAppend" data-url="' + urlencode(n) + '" data-type="' + o + '" data-user-id="' + j + '" data-content-id="' + s + '">' + L.preview + "</a>")
                }
                e.trimLink && (n = trim_width(n, 0, h));
                b = b.replace(l, n + m)
            }
        if (!e.text && f.length) var q = $("<div></div>"),
            b = b.replace(/\[code\]\[\/code\]/gi, function() {
                return '<code class="chatCode">' + q.text(f.shift()).html() + "</code>"
            });
        g = document.createElement("span");
        g.innerHTML = b;
        return b = g.innerHTML
    };
    a.registerAvatar = function() {};
    var A = {
        huge: "avatarHuge",
        large: "avatarLarge",
        medium: "avatarMedium",
        small: "avatarSmall",
        tiny: "avatarTiny"
    };
    a.getAvatarClass = function(a) {
        return A[a]
    };
    a.getAvatarPanel = function(b, d) {
        var e = S3_PATH + "/avatar/" + AC.getAvatarId(b),
            f = "";
        if (d.src) return e;
        d.hovertip && (f += " _avatarHoverTip");
        d.clicktip && (f += " _avatarClickTip avatarClickTip");
        d.size && (f += " " + a.getAvatarClass(d.size));
        return '<img class="' + f + " _avatar _avatarAid" + b + '" data-aid="' + b + '" src="' + e + '">'
    };
    a.getCoverPanel = function(a, b) {
        var d = S3_PATH + "/cover/" + AC.getCoverId(a),
            e = "";
        if (b.src) return d;
        b.extraclass && (e += " " + b.extraclass);
        return '<img class="' + e + " _coverAid" + a + '" data-aid="' + a + '" src="' + d + '">'
    };
    a.getName = function(a) {
        return '<span class="_nameAid' + a + '">' + escape_html(AC.getName(a)) + "</span>"
    };
    a.getOrgName = function(a) {
        return '<span class="cw_onm' + a + '">' + escape_html(AC.getOrgName(a)) + "</span>"
    };
    a.getDepartment = function(a) {
        return '<span class="cw_dept' + a + '">' + escape_html(AC.getDepartment(a)) + "</span>"
    };
    a.getOrgTitle = function(b) {
        return a.getOrgName(b) + " " + a.getDepartment(b)
    };
    a.getFullName =
        function(a) {
            return '<span class="cw_fnm' + a + '">' + escape_html(AC.getFullName(a)) + "</span>"
        };
    a.getChatWorkId = function(a) {
        if (AC.getChatWorkId(a)) return '<span class="cw_cwid' + a + '">' + escape_html(AC.getChatWorkId(a)) + "</span>";
        return ""
    };
    a.getChatWorkIdLink = function(b) {
        var d = AC.getChatWorkId(b);
        if (d) return '<a href="' + CHATWORK_MYPAGE_PATH + "/" + d + '" target="_blank">' + a.getChatWorkId(b) + "</a>";
        return ""
    };
    a.getSkypeLink = function() {};
    a.getTwitterLink = function() {};
    a.getFacebookLink = function() {};
    a.getContactPanel =
        function(a, b) {
            $.log("notice: CW.getContactPanel is deprecated! use AC.view.getContactPanel");
            return AC.view.getContactPanel(AC.account_dat[a], b)
        };
    a.getFilePanel = function(a, b) {
        return FL.view.getFilePanel(a, b)
    };
    a.getTaskPanel = function(a, b) {
        return TK.view.getTaskPanel(a, b)
    };
    a.showLimitErrorDialog = function(a, b) {
        g || (g = $("#_limitErrorDialog").cwDialog({
            width: 550,
            open: function(a) {
                $C("#_upgradeMessage").html(a)
            }
        }));
        g.setOption({
            title: a
        }).open(b)
    };
    a.showContactLimitErrorDialog = function() {
        var b = L.contact_error_cantadd,
            d = L.contact_error_planlimit,
            d = d.replace(/%%plan_name%%/, PLAN_NAME).replace(/%%limit_num%%/, CW.contact_limit_num);
        return a.showLimitErrorDialog(b, d)
    };
    a.showServiceAdmin = function(a) {
        a == "upgrade" ? window.open(ACCOUNT_SERVER_PATH + "/price.php") : window.open(ACCOUNT_SERVER_PATH + "/service_admin.php")
    };
    a.showOptionPlanPrice = function() {
        window.open(ACCOUNT_SERVER_PATH + "/subpackages/option/price.php")
    };
    a.showUserAdmin = function() {
        window.open(ACCOUNT_SERVER_PATH + "/user_list.php")
    };
    a.prepareStorageLimitDialog = function() {
        j =
            $("#_storageLimitDialog").cwDialog({
                width: 550,
                buttonLabels: [L.button_close],
                buttonCancel: 0,
                open: function(b) {
                    b = $.extend({
                        send_type: null,
                        body: L.storage_cancel_send_object,
                        title: null
                    }, b);
                    a.setLimitDialog(b.body, b.send_type);
                    if (!b.title) b.title = L.storage_cancel_send_cancel.replace(/%%object%%/, L[b.send_type]);
                    this.setOption({
                        title: b.title
                    })
                }
            })
    };
    a.showStorageLimitDialog = function(b) {
        j || a.prepareStorageLimitDialog();
        $C("#_storageLimitFooter").hide();
        j.open({
            send_type: b
        })
    };
    a.showStorageCautionDialog = function(b) {
        b =
            $.extend({
                title: null,
                body: null,
                footer: null
            }, b);
        j || a.prepareStorageLimitDialog();
        var d = $C("#_storageLimitFooter");
        b.footer ? d.html(b.footer).show() : d.hide();
        j.open({
            body: b.body,
            title: b.title
        })
    };
    a.showLoginDialog = function(a, b) {
        b()
    };
    a.showOfflineDialog = function(a, b) {
        b(2E3)
    };
    a.showTimeoutDialog = function(a, b) {
        b()
    };
    var x = !1,
        q = [];
    a.onEndInitLoad = function(a) {
        x ? a() : q.push(a)
    };
    a.endInitLoad = function() {
        x = !0;
        for (var a = 0, b = q.length; a < b; a++) q[a]();
        q = []
    };
    a.buildLayout = function() {
        a.model.is_first_load && ($("#_sideDashboardArea").show(),
            $("#_chatSendToolbar").show());
        a.resizeLayout()
    };
    var p = $("#_globalHeader").outerHeight(!0),
        t = parseInt($("#_content").css("margin-top"), 10),
        s = $C("#_mainContent").outerHeight(!0) - $C("#_mainContent").innerHeight(),
        B = $C("#_sideContent").outerHeight(!0) - $C("#_sideContent").innerHeight(),
        I = $("#_sideContentTitle").outerHeight(!0),
        z = parseInt($("#_subContentArea").css("padding-top"), 10),
        E = $("#_chatFilterMenu").outerHeight(!0),
        y = $("#_chatRoomDescriptionNav").outerHeight(!0),
        D = $C("#_chatText").innerWidth() -
        $C("#_chatText").width(),
        M = $(window);
    a.resizeLayout = function() {
        if (!x) return !1;
        a.resizeRoomList();
        var b = M.innerHeight();
        $C("#_wrapper").css("height", b);
        var d = $C("#_wrapper").innerWidth();
        d < 540 ? ($C("#_search").removeClass("inputLong"), $C("#_adminNavi").hide(), $C("#_myStatusButton").addClass("headerNameShort"), $C("#_myStatusName").hide(), $C("#_logo").hide(), $C("#_headerSearch").addClass("headerSearchShort")) : (d < 730 ? ($C("#_search").removeClass("inputLong"), $C("#_adminNavi").hide(), $C("#_myStatusButton").addClass("headerNameShort"),
            $C("#_myStatusName").hide()) : d < 850 ? ($C("#_search").removeClass("inputLong"), $C("#_adminNavi").show(), $C("#_myStatusButton").addClass("headerNameShort"), $C("#_myStatusName").hide()) : (d < 1E3 ? $C("#_search").removeClass("inputLong") : $C("#_search").addClass("inputLong"), $C("#_adminNavi").show(), $C("#_myStatusButton").removeClass("headerNameShort"), $C("#_myStatusName").show()), $C("#_logo").show(), $C("#_headerSearch").removeClass("headerSearchShort"));
        $C("#_searchResult").css("left", $C("#_search").offset().left);
        d = b - p - t - s;
        $C("#_mainContent").height(d);
        $.cwFloatWindow.resize();
        b = b - p - t - B;
        $C("#_sideContent").height(b);
        b = b - I - E;
        $C("#_roomListArea").height(b);
        d -= I;
        $C("#_subContent").css({
            height: d,
            top: I
        });
        RS.view && (d = d - y - z, $C("#_subContentArea").height(d), RS.view.resizeRoomInfo(d));
        CS.view && ($C("#_chatText").width($C("#_chatTextArea").width() - D - 18), CS.view.resizeChatArea(!0));
        a.adjustInformationPanelPosition();
        a.resize_delay_timer = null
    };
    a.startTutorial = function() {
        var a = {
                "#_content": "",
                "#_globalHeader": "",
                "#_subContent": "",
                "#_mainContent": "",
                "#_chatContent": "",
                "#_addButton": "",
                "#_headerSearch": "",
                "#_subRoomTaskAddArea": "",
                "#_chatSendToolbar": "",
                "#_chatSendArea": ""
            },
            b;
        for (b in a) {
            var d = $C(b);
            a[b] = d.css("z-index");
            d.css("z-index", "auto")
        }
        var e = $("#_tutorialStep").cwToolTip({
                useFloatBox: !1
            }),
            f = $("#_tutorialMessage"),
            g = $("#_tutorialNextButton");
        g.cwButton({
            type: "primary",
            click: function() {
                h.shift()()
            }
        });
        var h = [],
            i = $("#_addButton"),
            l = $("#_headerSearch"),
            n = $("#_subRoomTaskAddArea"),
            p = $("#_chatSendToolbar"),
            m = $("#_chatTextArea");
        h.push(function() {
            i.css("z-index", TM.expose_zindex);
            f.text(L.tutorial_addbutton);
            e.isOpen() || e.open(i)
        });
        h.push(function() {
            i.css("z-index", "auto");
            l.css("z-index", TM.expose_zindex);
            f.text(L.tutorial_globalsearch);
            e.move(l)
        });
        h.push(function() {
            CS.view.expandChatArea(!0);
            l.css("z-index", "auto");
            p.css("z-index", TM.expose_zindex);
            m.css("z-index", TM.expose_zindex);
            f.text(L.tutorial_send_message);
            e.move(p)
        });
        h.push(function() {
            p.css("z-index", "auto");
            m.css("z-index", "auto");
            n.css("z-index", TM.expose_zindex);
            f.text(L.tutorial_add_task);
            g.cwButton().setOption({
                type: "success",
                text: L.button_complete
            });
            e.move(n)
        });
        h.push(function() {
            e.close();
            n.css("z-index", "auto");
            for (var b in a) $C(b).css("z-index", a[b]);
            $("#_expose").fadeOut("slow")
        });
        $("#_expose").fadeIn("slow", function() {
            h.shift()()
        })
    };
    a.showFirstPage = function() {};
    a.closeFirstPage = function() {};
    a.resizeRoomList = function() {};
    a.resizeSubInfo = function() {};
    a.setLimitDialog = function(b, d) {
        var e = "";
        a.model.plan == "free" ? (b += L.storage_cancel_send_object_suffix_upgrade,
            e = L.storage_cancel_upgrade_label) : a.model.is_business && !a.model.is_admin ? (b += L.storage_cancel_send_object_suffix_tell_admin, $("#_storageLimitButton").hide()) : (b += L.storage_cancel_send_object_suffix_add_storage, e = L.storage_cancel_add_storage_label);
        d != void 0 && L[d] != void 0 && (b = b.replace(/%%object%%/g, L[d]));
        $("#_storageLimitBody").html(b);
        $("#_storageLimitLink").text(e)
    };
    var G = null;
    a.openPreviewLinkDialog = function(b, d, e, f) {
        G || a.preparePreviewLinkDialog();
        G.open(b, d, e, f)
    };
    var H = null;
    a.preparePreviewLinkDialog =
        function() {
            var b = $("#_previewLinkContent");
            G = $("#_previewLinkDialog").cwDialog({
                buttonLabels: [L.open_website, L.button_close],
                buttonCancel: 1,
                buttonClick: function(a) {
                    switch (a) {
                        case 0:
                            window.open(this.data.url)
                    }
                },
                open: function(d, e, f, g) {
                    if (d) {
                        var h = {
                                buttonLabels: [L.open_website, L.button_close]
                            },
                            i = "",
                            l = TM.dialog_header_height + TM.dialog_footer_height,
                            n = !0,
                            p = !1,
                            m = !1,
                            o = "auto",
                            j = function(a, b, d, e) {
                                typeof a == "function" && (a = a());
                                var f = "";
                                n && (f = 'sandbox="allow-scripts allow-same-origin allow-popups allow-forms"');
                                return "<iframe " + f + ' src="' + a + '" width="' + b + '" height="' + d + '" style="margin:auto" frameborder="0" scrolling="' + e + '" seamless webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
                            };
                        this.data.url = e;
                        b.empty();
                        H !== null && (H.abort(), H = null);
                        switch (d) {
                            case "teachme":
                                p = !0;
                                i = "//teachme.jp/contents/" + g + "/embed?mb=0";
                                h.title = "Teachme";
                                break;
                            case "speakerdeck":
                                m = p = !0;
                                h.title = "Speaker Deck";
                                H = $.ajax({
                                    type: "GET",
                                    url: "./api_proxy.php?type=speakerdeck&url=" + urlencode(e),
                                    success: function(a) {
                                        $("#_previewLinkContent").html(j(a,
                                            B, r))
                                    },
                                    error: function() {
                                        $("#_previewLinkContent").html(L.raise_error)
                                    }
                                });
                                break;
                            case "slideshare":
                                m = p = !0;
                                i = "//www.slideshare.net/slideshow/embed_code/%%slideshow_id%%";
                                h.title = "slideshare";
                                H = $.jsonp({
                                    url: "//www.slideshare.net/api/oembed/2?url=" + urlencode("http://www.slideshare.net/" + f + "/" + g) + "&format=jsonp",
                                    data: {
                                        maxwidth: B,
                                        maxheight: r,
                                        format: "json"
                                    },
                                    callbackParameter: "callback",
                                    success: function(a) {
                                        $("#_previewLinkContent").html(j(i.replace("%%slideshow_id%%", a.slideshow_id), B, r))
                                    },
                                    error: function() {
                                        $("#_previewLinkContent").html(L.raise_error)
                                    }
                                });
                                break;
                            case "prezi":
                                p = !0;
                                n = !1;
                                i = "//prezi.com/embed/" + g + "/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp;features=undefined&amp;disabled_features=undefined";
                                h.title = "Prezi";
                                break;
                            case "youtube":
                                p = !0;
                                n = !1;
                                i = "//www.youtube.com/embed/" + g + "";
                                h.title = "YouTube";
                                break;
                            case "vimeo":
                                p = !0;
                                n = !1;
                                i = "//player.vimeo.com/video/" + g + "";
                                h.title = "vimeo";
                                break;
                            case "slid.es":
                                p = !0;
                                i = "//slid.es/" + g + "/embed";
                                h.title = "slid.es";
                                break;
                            case "corabbit":
                                i = "//corabbit.com/embed/" + g;
                                h.title = "Corabbit";
                                break;
                            case "googledocs":
                                n = !1;
                                i = e.replace(/(\/file\/.+)\/(edit|view)$/, "$1/preview");
                                h.title = "Google Drive " + L.preview_needlogin;
                                break;
                            case "cacoo":
                                i = function() {
                                    var a = g.split("#"),
                                        b = a.shift(),
                                        a = a.shift();
                                    return "//cacoo.com/diagrams/" + b + "/view?w=" + (B - 2) + "&h=" + (r - 30) + (a ? "#" + a : "")
                                };
                                o = "no";
                                h.title = "Cacoo";
                                break;
                            case "sharepoint":
                                i = "https://" + g + "&action=interactivepreview&wdSmallView=1";
                                h.title = "Office 365";
                                break;
                            case "chatworkFilePreview":
                                n = !1;
                                h.title = $("<div></div>").text(g).html();
                                h.buttonLabels = [L.open_window,
                                    L.button_close
                                ];
                                var s = a.filePreview.getPreviewType(g.split(".").pop()),
                                    q = function(a, b, d) {
                                        var e = setTimeout(function() {
                                            d();
                                            d = function() {}
                                        }, 5E3);
                                        $(window).on("message.previewLinkContent", function(b) {
                                            if (b.originalEvent.origin === "https://d2cxqj2w0ktore.cloudfront.net") {
                                                var f = JSON.parse(b.originalEvent.data);
                                                f.type === "fixWindowSize" && (b = Math.min(f.width + TM.preview_dialog_width_padding, h.width), f = Math.min(f.height + TM.preview_dialog_height_padding + 82, h.height), G.setOption({
                                                    width: b,
                                                    height: f
                                                }), G.open(), a.attr({
                                                    width: b,
                                                    height: f - 82
                                                }), d(), clearTimeout(e), $(window).off("message.previewLinkContent"))
                                            }
                                        });
                                        a.get(0).contentWindow.postMessage(b, "*");
                                        setTimeout(function() {
                                            a.off("load")
                                        })
                                    };
                                if (s === "iframe") i = e;
                                else if (s === "source") m = !0, H = $.ajax({
                                    type: "GET",
                                    url: e,
                                    dataType: "text",
                                    success: function(a) {
                                        n = !1;
                                        $("#_previewLinkContent").html(j("https://d2cxqj2w0ktore.cloudfront.net/preview/iframe/index.html", B, r, o));
                                        $("#_previewLinkContent iframe").on("load", function() {
                                            var b = JSON.stringify({
                                                type: s,
                                                body: a,
                                                fileName: g
                                            });
                                            q($(this), b, function() {})
                                        })
                                    },
                                    error: function() {
                                        $("#_previewLinkContent").html(L.raise_error)
                                    }
                                });
                                else if (s === "video") i = "https://d2cxqj2w0ktore.cloudfront.net/preview/iframe/index.html", $("#_previewLinkDialog").parent().hide(), setTimeout(function() {
                                    $("#_previewLinkContent iframe").on("load", function() {
                                        var a = JSON.stringify({
                                            type: s,
                                            url: location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + location.pathname + e,
                                            fileName: g
                                        });
                                        q($(this), a, function() {
                                            $("#_previewLinkDialog").parent().show()
                                        })
                                    })
                                });
                                else return !1;
                                break;
                            default:
                                return !1
                        }
                        var k = $C(window),
                            f = k.width(),
                            k = k.height(),
                            B, r;
                        if (p) {
                            this.$el.removeClass("previewFullDialog");
                            l += TM.preview_dialog_height_padding;
                            B = 1120;
                            for (r = 840; B > 160 && (f < B + 40 || k < r + l + 40);) B -= 160, r -= 120;
                            h.width = B + TM.preview_dialog_width_padding
                        } else this.$el.addClass("previewFullDialog"), B = f - 40, r = k - l - 40, h.width = B;
                        h.height = r + l;
                        d && g && (m ? $("#_previewLinkContent").html('<div style="margin:auto"><img src="./imagenew/all/common/loader/img_loader_gray.gif" />' + L.loading + "</div>") : $("#_previewLinkContent").html(j(i,
                            B, r, o)));
                        this.setOption(h)
                    }
                },
                close: function() {
                    b.empty();
                    $(window).off("message.previewLinkContent")
                }
            });
            $("#_previewLinkReload").click(function() {
                var a = G.data.previewlink_link;
                a && G.open(a)
            })
        };
    (function() {
        var b = {};
        a.addInformation = function(b) {
            b = b || {};
            return a.saveInformation(!1, b)
        };
        a.saveInformation = function(a, d) {
            d = $.extend(!0, {
                linktext: null,
                subject: null,
                body: null,
                buttonLabels: null,
                buttonClick: null,
                linkClick: null
            }, d);
            if (!a) {
                var e = 0;
                $.each(b, function(a) {
                    a > e && (e = parseInt(a, 10))
                });
                a = e + 1
            }
            b[a] = {
                linktext: d.linktext,
                subject: d.subject,
                body: d.body,
                buttonLabels: d.buttonLabels,
                buttonClick: d.buttonClick,
                linkClick: d.linkClick
            };
            var f = $C("#_openInfomation");
            f.hasClass("notification") || f.addClass("notification");
            return a
        };
        a.deleteInformation = function(d, e) {
            delete b[d];
            a.renderInformation();
            typeof e !== "function" && (e = function() {});
            $.isEmptyObject(b) ? $C("#_notificationArea").fadeOut(function() {
                $C("#_openInfomation").removeClass("notification");
                e()
            }) : e()
        };
        a.renderInformation = function() {
            var d = $C("#_notificationArea");
            if ($.isEmptyObject(b)) d.hide();
            else {
                var e = $C("#_notificationItemList");
                e.quickEmpty();
                $.each(b, function(b, d) {
                    var f = '<li class="linkStatus" data-id="' + b + '">' + escape_html(d.linktext) + "</li>",
                        f = $(f);
                    e.append(f);
                    var g = {
                            subject: d.subject,
                            body: d.body,
                            buttonLabels: d.buttonLabels,
                            buttonClick: d.buttonClick
                        },
                        h = d.linkClick || function() {
                            a.openAnnounceDialog(g)
                        };
                    f.click(function() {
                        h(g)
                    })
                });
                d.isVisible() || a.showAnnounce()
            }
        }
    })();
    a.openInformationPanel = function() {
        $C("#_openInfomation").addClass("helpMenuSelected");
        var b = $C("#_informationBox");
        a.adjustInformationPanelPosition(!0);
        a.renderInformation();
        b.slideDown("fast", function() {
            $.cwFloatBox.open(b, function() {
                b.slideUp("fast", function() {
                    $C("#_openInfomation").removeClass("helpMenuSelected")
                })
            })
        })
    };
    a.adjustInformationPanelPosition = function(a) {
        var b = $C("#_informationBox");
        if (a || b.isVisible()) {
            var a = $C("#_openInfomation"),
                d = a.outerWidth(),
                e = b.outerWidth(),
                f = $(window).width(),
                a = a.offset().left + d / 2 + e / 2 > f ? f - e : a.offset().left + d / 2 - e / 2;
            b.css("left", a)
        }
    };
    a.prepareUserGuideDialog = function() {
        i = $("#_userguideDialog").cwDialog({
            title: L.userguide_title.replace("%%service_name%%",
                SERVICE_NAME),
            width: 820,
            height: "full",
            autoOpen: !1,
            modal: !0,
            open: function() {
                b()
            }
        });
        var a = i.$el.find("._navlist"),
            b = function(d) {
                var e = 0;
                a.each(function() {
                    if ($(this).hasClass("_select")) return !1;
                    e++
                });
                var f = e;
                if (d) return f += d, f > a.length - 1 && (f = 0), a.eq(f).click(), !1;
                var d = [],
                    g = [];
                f > 0 && (d.push(L.pager_prev), g.push(function() {
                    b(-1)
                }));
                f < a.length - 1 ? (d.push(L.pager_next), g.push(function() {
                    b(1)
                })) : f == a.length - 1 && (d.push(L.button_close), g.push(function() {
                    i.close()
                }));
                i.setOption({
                    buttonLabels: d,
                    buttonClick: function(a) {
                        (0, g[a])()
                    }
                })
            };
        a.click(function() {
            var d = $(this),
                e = $C("#_userguideBody"),
                f = a.index(this),
                f = e.find("._content" + f);
            a.removeClass("_select");
            d.addClass("_select");
            a.removeClass("userguideOrderListSelected");
            d.addClass("userguideOrderListSelected");
            e.find("._howTo").hide();
            f.fadeIn();
            f.find("._contentBody").scrollTop(0);
            b()
        })
    };
    a.openUserGuideDialog = function() {
        i || a.prepareUserGuideDialog();
        i.open()
    };
    a.openAnnounceDialog = function(a) {
        a = $.extend(!0, {
            subject: null,
            body: null,
            buttonLabels: null,
            buttonClick: null
        }, a);
        h || (h = $("#_announceDialog").cwDialog({
            width: 600,
            height: "auto"
        }));
        var b = [L.button_close];
        a.buttonLabels && $.isArray(a.buttonLabels) && (b = $.merge(a.buttonLabels, b));
        h.setOption({
            title: a.subject,
            buttonLabels: b,
            buttonCancel: b.length - 1,
            buttonClick: function() {
                typeof a.buttonClick === "function" && a.buttonClick.apply(this, arguments)
            }
        });
        $C("#_announceBody").html(a.body);
        h.open();
        $.cwFloatBox.close($C("#_informationBox"))
    };
    a.openFeedbackCompleteDialog = function() {
        k || (k = $("#_feedbackCompleteDialog").cwDialog({
            width: 500,
            buttonLabels: [L.button_close],
            buttonCancel: 0
        }));
        k.open()
    };
    a.showAnnounce = function() {
        $C("#_notificationArea").fadeIn(function() {
            $C("#_openInfomation").addClass("notification")
        })
    };
    a.hideAnnounce = function() {
        $C("#_notificationArea").fadeOut(function() {
            $C("#_openInfomation").removeClass("notification")
        })
    };
    a.setDrafts = function() {
        var a = $("#_chatText").val();
        a && CS.setChatDraft(RM.id, a, CS.chatedit_id);
        if (a = $C("#_taskNameInput").val()) {
            var b = RS.view.getTaskAssignList(),
                d = $C("#_limitButton").cwDatePicker().getVal();
            CS.setTaskDraft(RM.id, a, b, d)
        }
    }
}

function AccountView(b) {
    var a = this,
        e = {
            contact: 80,
            myrequest: 80,
            request: 80,
            norequest: 80
        },
        d;
    for (d in e);
    a.model = b;
    a.tab_type = "addcontact";
    a.contact_dialog_shown = !1;
    a.checked_email_dat = {};
    a.noexist_email_dat = {};
    a.prepare = function() {
        function b(a) {
            return a.data("_requestContact_doubleClick")
        }

        function d(a) {
            a.data("_requestContact_doubleClick", setTimeout(function() {
                a.removeData("_requestContact_doubleClick")
            }, 3E3))
        }
        CW.view.registerKeyboardShortcut(67, !1, !1, !1, !1, function() {
            a.openContactWindow()
        });
        $("#_openContactWindow").click(function() {
            a.openContactWindow()
        });
        var e = $("#_nameTip").cwToolTip({
            theme: "black",
            noAnimation: !0
        });
        $C("#_wrapper").on("mouseover", "._avatarHoverTip", function() {
            var a = $(this);
            $C("#_nameTipContent").text(AC.getName(a.attr("data-aid")));
            e.open(a)
        }).on("mouseout", "._avatarHoverTip", function() {
            e.close()
        }).on("click", "._avatarClickTip", function() {
            var b = $(this),
                d = b.attr("data-aid");
            a.openProfileTip(d, b)
        }).on("click", "._speakerName", function() {
            $(this).closest("._message").find("._speaker ._avatarClickTip").click();
            return !1
        }).on("click", "._skypeCall",
            function() {
                var a = $(this).attr("data-skype-id");
                document.location.href = "skype:" + a + "?call"
            }).on("click", "._openProfile", function() {
            var b = $(this).attr("data-aid");
            b && a.openProfileWindow(b)
        }).on("click", "._profileEdit", function() {
            a.openProfileEditWindow()
        }).on("click", "._requestContact", function() {
            var e = $(this);
            if (!b(e)) {
                d(e);
                var f = [e.attr("data-aid")];
                a.requestContact(f, e.cwButton())
            }
        }).on("click", "._cancelMyRequest", function() {
            var a = $(this);
            if (!b(a)) {
                d(a);
                var e = a.closest("._contactPanel").attr("data-aid"),
                    f = a.cwButton();
                f.disable();
                CW.post("gateway.php", {
                    cmd: "cancel_contact_request",
                    aid: e
                }, function() {
                    CW.watch()
                }, function(a) {
                    CW.alert(a);
                    f.enable()
                })
            }
        }).on("click", "._acceptContactRequest", function() {
            var a = $(this);
            if (!b(a)) {
                d(a);
                var e = a.attr("data-aid"),
                    f = a.cwButton();
                f.disable();
                CW.post("gateway.php", {
                    cmd: "accept_contact_request",
                    a: [e]
                }, function(a) {
                    if (a.error != void 0) {
                        var b = L.contact_error_cantadd,
                            d = L.contact_error_planlimit,
                            d = d.replace(/%%plan_name%%/, a.error.plan_name),
                            d = d.replace(/%%limit_num%%/,
                                a.error.limit_num);
                        CW.view.showLimitErrorDialog(b, d);
                        f.enable()
                    } else CW.watch()
                }, function(a) {
                    CW.alert(a);
                    f.enable()
                })
            }
        }).on("click", "._rejectContactRequest", function() {
            var a = $(this);
            if (!b(a)) {
                d(a);
                var e = a.attr("data-aid"),
                    f = a.cwButton();
                f.disable();
                CW.confirm(L.contact_confirm_reject_request.replace(/%%name%%/, AC.getName(e)), function() {
                    CW.post("gateway.php", {
                        cmd: "reject_contact_request",
                        aid: e
                    }, function() {
                        CW.watch()
                    }, function(a) {
                        CW.alert(a);
                        f.enable()
                    })
                }, function() {
                    f.enable()
                })
            }
        }).on("click", "._deleteContact",
            function() {
                var a = $(this);
                if (!b(a)) {
                    d(a);
                    var e = a.closest("._contactPanel").attr("data-aid"),
                        f = a.cwButton();
                    f.disable();
                    CW.view.confirmDelete(L.contact_confirm_delete.replace(/%%name%%/, AC.getName(e)), function() {
                        CW.post("gateway.php", {
                            cmd: "delete_contact",
                            aid: e
                        }, function() {
                            CW.watch()
                        }, function(a) {
                            CW.alert(a);
                            f.enable()
                        })
                    }, function() {
                        f.enable()
                    })
                }
            }).on("click", "#_addNoContactMember", function() {
            if (!b($(this))) {
                d($(this));
                var e = $(this).cwButton(),
                    f = e.$el.attr("data-rid");
                if (f = RL.rooms[f]) {
                    var g = [],
                        h;
                    for (h in f.member_dat) AC.isContact(h) ||
                        g.push(h);
                    g.length > 0 && a.requestContact(g, e)
                }
            }
        });
        $("#_myProfile").click(function() {
            a.openProfileWindow(AC.myid)
        });
        $(".cw_user_add_desc").click(function() {
            CW.view.showUserAdmin()
        })
    };
    var f = !1;
    a.prepareEditProfile = function() {
        if (!f) {
            f = !0;
            var b = $("#_profileAvatarUpload").cwToolTip();
            $("#_profileAvatarUploadType").cwSelectBox({
                parentFloatBox: b.$el,
                update: function(a) {
                    switch (a) {
                        case "upload":
                            $("#_profileAvatarUploadInput").html('<input type="file" name="__cwform_avatar_upload_file" class="_cwValidateFileImage" /><div>' +
                                L.profile_image_limit + "</div>");
                            break;
                        default:
                            $C("#_profileAvatarUploadInput").quickEmpty()
                    }
                }
            });
            $("#_profileEditAvatarControl").click(function() {
                b.open($(this))
            });
            $("#_profileAvatarSubmit").click(function() {
                $("#_profileAvatarForm").submit()
            });
            $("#_profileAvatarCancel").click(function() {
                b.close()
            });
            $("#_profileAvatarForm").submit(function() {
                $("#_profileAvatarPrivacyHidden").val($("#_profilePrivacyAvatar").attr("data-value"));
                b.close();
                CW.showProgress(L.saving)
            });
            CW.view.onIframeReady(function() {
                $("#_profileAvatarFrame").load(function() {
                    CW.hideProgress();
                    var a = unescape_html($(this).contents().find("body").html());
                    a.length > 0 && (a = a.match(/\{.+\}/)[0], $.parseJSON(a).status.success ? CW.watch() : CW.alert(L.raise_error))
                })
            });
            var d = $("#_profileCoverUpload").cwToolTip();
            $("#_profileEditCoverControl").click(function() {
                d.open($(this))
            });
            $("#_profileCoverSubmit").click(function() {
                $("#_profileCoverForm").submit()
            });
            $("#_profileCoverCancel").click(function() {
                d.close()
            });
            $("#_profileCoverForm").submit(function() {
                $("#_profileCoverPrivacyHidden").val($("#_profilePrivacyCover").attr("data-value"));
                d.close();
                CW.showProgress(L.saving)
            });
            CW.view.onIframeReady(function() {
                $("#_profileCoverFrame").load(function() {
                    CW.hideProgress();
                    var a = unescape_html($(this).contents().find("body").html());
                    a.length > 0 && (a = a.match(/\{.+\}/)[0], $.parseJSON(a).status.success ? CW.watch() : CW.alert(L.raise_error))
                })
            });
            var e = [{
                value: "public",
                label: '<span class="icoFontPublic"></span> ' + L.profile_setting_privacy_public
            }, {
                value: "contact",
                label: '<span class="icoFontContact"></span> ' + L.profile_setting_privacy_contact
            }];
            $("#_profileEditContent").on("click",
                "._profilePrivacyBox",
                function() {
                    var b = $(this).attr("data-key");
                    $.cwDropDown.isInit(this) || $(this).cwDropDown({
                        offsetLeft: 2,
                        useHtmlLabel: !0,
                        list: e,
                        select: function(d) {
                            a.setPrivacySettingIcon(b, d);
                            this.close()
                        }
                    }).open()
                });
            $("#_profileAvatarUpload").on("click", "._profilePrivacyBox", function() {
                var d = $(this).attr("data-key");
                $.cwDropDown.isInit(this) || $(this).cwDropDown({
                    parentFloatBox: b.$el,
                    useHtmlLabel: !0,
                    offsetLeft: 2,
                    list: e,
                    select: function(b) {
                        a.setPrivacySettingIcon(d, b);
                        this.close()
                    }
                }).open()
            });
            $("#_profileCoverUpload").on("click",
                "._profilePrivacyBox",
                function() {
                    var b = $(this).attr("data-key");
                    $.cwDropDown.isInit(this) || $(this).cwDropDown({
                        parentFloatBox: d.$el,
                        offsetLeft: 2,
                        useHtmlLabel: !0,
                        list: e,
                        select: function(d) {
                            a.setPrivacySettingIcon(b, d);
                            this.close()
                        }
                    }).open()
                });
            CW.is_business && $("#_profileInputOrgName").click(function() {
                $("#_profileSelectOrgnameTypeIndividual").click()
            });
            $("#_profileInputChatWorkId").keyup(function() {
                a.checkCWID($(this).val())
            }).blur(function() {
                a.checkCWID($(this).val())
            })
        }
    };
    var i = "",
        h = null;
    a.checkCWID =
        function(b) {
            var d = trim(b);
            if (d != i) i = d, h && (clearTimeout(h), h = null), AC.getChatWorkId(AC.myid) == d ? ($("#_profileCWIDLoading").hide(), $("#_profileCWIDStatus").text(""), a.is_valid_cwid = !0) : d ? d.length > 50 ? ($("#_profileCWIDLoading").hide(), $("#_profileCWIDStatus").text(L.error_maxlength.replace("%%length%%", 50)).css("color", "red"), a.is_valid_cwid = !1) : d.match(/^[-_a-zA-Z0-9]+$/) ? ($("#_profileCWIDLoading").show(), $("#_profileCWIDStatus").text(""), h = setTimeout(function() {
                $("#_profileCWIDLoading").show();
                CW.get("gateway.php", {
                    cmd: "check_chatwork_id",
                    cwid: d
                }, function(b) {
                    $("#_profileCWIDLoading").hide();
                    b.used ? ($("#_profileCWIDStatus").text(L.error_already_used).css("color", "red"), a.is_valid_cwid = !1) : ($("#_profileCWIDStatus").text(L.available).css("color", "green"), a.is_valid_cwid = !0)
                })
            }, 1E3)) : ($("#_profileCWIDLoading").hide(), $("#_profileCWIDStatus").text(L.error_invalidchar).css("color", "red"), a.is_valid_cwid = !1) : ($("#_profileCWIDLoading").hide(), $("#_profileCWIDStatus").text(""))
        };
    a.deleteContact = function(a) {
        CW.view.confirmDelete(L.contact_confirm_delete.replace(/%%name%%/,
            AC.getName(a)), function() {
            CW.post("gateway.php", {
                cmd: "delete_contact",
                aid: a
            }, function() {
                CW.watch()
            })
        })
    };
    a.updateAvatar = function(a) {
        for (var b in a) $("._avatarAid" + a[b]).each(function() {
            this.src = CW.getAvatarPanel(a[b], {
                src: !0
            })
        })
    };
    a.updateCover = function(a) {
        for (var b in a) $("._coverAid" + a[b]).each(function() {
            this.src = CW.getCoverPanel(a[b], {
                src: !0
            })
        })
    };
    a.updateName = function(a) {
        for (var b in a) $("._nameAid" + a[b]).each(function() {
                $(this).text(AC.getName(a[b]))
            }), $(".cw_onm" + a[b]).each(function() {
                $(this).text(AC.getOrgName(a[b]))
            }),
            $(".cw_cwid" + a[b]).each(function() {
                $(this).text(AC.getChatWorkId(a[b]))
            })
    };
    a.showAddContactMessage = function(a) {
        var b = [],
            d;
        for (d in a) switch (a[d]) {
            case "request_contact":
                b.push(L.contact_myrequest);
                break;
            case "invite_contact":
                b.push(L.contact_invite)
        }
        b && CW.alert(b.join(L.word_separator) + L.contact_is_completed)
    };
    a.showChatWorkIdRequestDialog = function(b) {
        a.openProfileWindow(b.aid)
    };
    a.getNoRequestDat = function(b) {
        var d = {},
            e = {};
        RL.rooms[b] ? e[b] = RL.rooms[b] : e = RL.rooms;
        for (var f in e) {
            var b = RL.rooms[f],
                g;
            for (g in b.member_dat) a.model.myid != g && !a.model.isContact(g) && !a.model.myrequest_dat[g] && (d[g] = a.model.account_dat[g])
        }
        return d
    };
    a.buildMyStatus = function() {
        var b = CW.getAvatarPanel(a.model.myid, {
            size: "small",
            hovertip: !1,
            clicktip: !1
        });
        $("#_myStatusIcon").html(b);
        $("#_myStatusName").html(CW.getName(a.model.myid) + '<span class="openAction icoFontTriangleDown"></span>');
        CW.view.endInitLoad()
    };
    a.buildMyContact = function() {
        a.buildContactWindow()
    };
    a.resetSocialContactErrorCount = function() {};
    var j = null;
    a.openProfileTip =
        function(b, d) {
            j || (j = $("#_profileTip").cwToolTip({
                open: function() {
                    this.$el.html(a.getContactPanel(this.data.account_id))
                }
            }), j.$el.on("click", "._moveButton", function() {
                j.close()
            }));
            j.data.account_id = b;
            j.open(d)
        };
    var k = null;
    a.openProfileWindow = function(b) {
        k === null && (k = $("#_profileContent").cwDialog({
            width: 815,
            open: function(b) {
                a.assignDetailInfo(this.$el, b);
                this.setOption({
                    title: AC.getName(b)
                })
            },
            openCallback: function() {
                this.$el.scrollTop(0)
            }
        }), k.$el.on("click", "._moveButton", function() {
            k.close()
        }));
        k.open(b)
    };
    a.closeProfileWindow = function() {
        k.close()
    };
    a.openProfileEditWindow = function() {
        a.prepareEditProfile();
        var b = AC.myid;
        $("#_profileEditContent").cwDialog({
            title: AC.getName(b),
            width: 815,
            buttonLabels: [L.button_save_long, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(b) {
                switch (b) {
                    case 0:
                        var b = [],
                            d = trim($("#_profileInputName").val());
                        $("#_profileInputName").val(d);
                        d || b.push(L.profile_error_no_displayname);
                        d = trim($("#_profileInputChatWorkId").val());
                        $("#_profileInputChatWorkId").val(d);
                        d && (a.is_valid_cwid || b.push(L.profile_error_invalid_cwid));
                        if (b.length) CW.alert(b.join("\n"));
                        else {
                            var e = {
                                cmd: "send_profile_setting"
                            };
                            $("#_profileEditContent").find("[data-name]").each(function() {
                                var a = $(this),
                                    b = a.attr("data-value");
                                b == void 0 && (b = a.val());
                                $.cwCheckBox.isInit(this) ? (a = a.cwCheckBox(), a.isChecked() && (e[a.$el.attr("data-name")] = a.getVal())) : a.attr("type") == "radio" ? a[0].checked && (e[a.attr("data-name")] = b) : e[a.attr("data-name")] = b
                            });
                            if (e.allow_search == void 0) e.allow_search = "0";
                            CW.post("gateway.php",
                                e,
                                function(b) {
                                    var d = {
                                            name: "nm",
                                            orgname: "onm",
                                            department: "dp",
                                            title: "tt",
                                            cwid: "cwid",
                                            skype: "sp",
                                            twitter: "tw",
                                            facebook: "fb",
                                            address: "ad",
                                            email: "mail",
                                            introduction: "intro",
                                            tel_extension: "etel",
                                            tel_mobile: "mtel",
                                            tel_organization: "otel",
                                            url: "url"
                                        },
                                        e = {},
                                        f = "",
                                        g;
                                    for (g in d) b[g] && (e[d[g]] = b[g]), f = g + "_priv", b[f] && (e[d[g] + "_priv"] = b[f]);
                                    AC.setAccountDat(AC.myid, e);
                                    a.assignDetailInfo(k.$el, AC.myid);
                                    k.setOption({
                                        title: AC.getName(AC.myid)
                                    });
                                    b.allow_search != void 0 && (ST.data.allow_search = parseInt(b.allow_search,
                                        10));
                                    CW.watch()
                                },
                                function() {
                                    CW.alert(L.raise_error)
                                });
                            this.close()
                        }
                }
            },
            open: function() {
                a.closeProfileWindow();
                CW.is_business ? (CW.is_admin && $("#_profileCommonOrgNameLink").show(), $("#_profileEditOrgNameLoading").show(), CW.post("gateway.php", {
                    cmd: "get_common_organizatin_info"
                }, function(a) {
                    $("#_profileEditOrgNameLoading").hide();
                    a.onm !== "" ? ($("#_profileEditOrgName ._profileSelectOrgNameType").show(), $("#_profileSelectOrgnameTypeCommonLabel").text(a.onm)) : $("#_profileEditOrgName ._profileSelectOrgNameType").hide();
                    a.use_common ? ($("#_profileSelectOrgnameTypeCommon").prop("checked", !0), $("#_profileInputOrgName").val("")) : ($("#_profileSelectOrgnameTypeIndividual").prop("checked", !0), $("#_profileInputOrgName").val(AC.getOrgName(b)))
                })) : $("#_profileInputOrgName").val(AC.getOrgName(b));
                $("#_profileEditAvatar").html(CW.getAvatarPanel(b, {
                    size: "huge",
                    clicktip: !1,
                    hovertip: !1
                }));
                $("#_profileEditCover").html(CW.getCoverPanel(b));
                $("#_profileAvatarImage").html(CW.getAvatarPanel(b, {
                    size: "large",
                    clicktip: !1,
                    hovertip: !1
                }));
                $("#_profileCoverImage").html(CW.getCoverPanel(b));
                $("#_profileInputName").val(AC.getName(b));
                ST.data.allow_search == "1" ? $("#_profileAllowSearch").cwCheckBox().check() : $("#_profileAllowSearch").cwCheckBox().unCheck();
                $("#_profileInputChatWorkId").val(AC.getChatWorkId(b));
                $("#_profileInputIntroduction").val(AC.getIntroduction(b));
                $("#_profileInputFacebook").val(AC.getFacebook(b));
                $("#_profileInputTwitter").val(AC.getTwitter(b));
                $("#_profileInputSkype").val(AC.getSkype(b));
                $("#_profileInputDepartment").val(AC.getDepartment(b));
                $("#_profileInputTitle").val(AC.getTitle(b));
                $("#_profileInputAddress").val(AC.getAddress(b));
                $("#_profileInputUrl").val(AC.getUrl(b));
                $("#_profileInputEmail").val(AC.getEmail(b));
                $("#_profileInputOrgTel").val(AC.getOrgTel(b));
                $("#_profileInputExtensionTel").val(AC.getExtensionTel(b));
                $("#_profileInputtMobileTel").val(AC.getMobileTel(b));
                a.setPrivacySettingIcon("Avatar", AC.getAvatarPriv(AC.myid));
                a.setPrivacySettingIcon("Cover", AC.getCoverPriv(AC.myid));
                a.setPrivacySettingIcon("OrgName", AC.getOrgNamePriv(AC.myid));
                a.setPrivacySettingIcon("Department", AC.getDepartmentPriv(AC.myid));
                a.setPrivacySettingIcon("Title", AC.getTitlePriv(AC.myid));
                a.setPrivacySettingIcon("Url", AC.getUrlPriv(AC.myid));
                a.setPrivacySettingIcon("Address", AC.getAddressPriv(AC.myid));
                a.setPrivacySettingIcon("Introduction", AC.getIntroductionPriv(AC.myid));
                a.setPrivacySettingIcon("Skype", AC.getSkypePriv(AC.myid));
                a.setPrivacySettingIcon("Twitter", AC.getTwitterPriv(AC.myid));
                a.setPrivacySettingIcon("Facebook", AC.getFacebookPriv(AC.myid));
                a.setPrivacySettingIcon("Email",
                    AC.getEmailPriv(AC.myid));
                a.setPrivacySettingIcon("OrgTel", AC.getOrgTelPriv(AC.myid));
                a.setPrivacySettingIcon("ExtensionTel", AC.getExtensionTelPriv(AC.myid));
                a.setPrivacySettingIcon("MobileTel", AC.getMobileTelPriv(AC.myid));
                var d = $("#_profileEditContent").find("._profilePhotoEditBar");
                d.hide();
                setTimeout(function() {
                    d.fadeIn()
                });
                a.checkCWID(AC.getChatWorkId(b))
            },
            close: function() {
                a.openProfileWindow(AC.myid)
            }
        }).open()
    };
    a.setPrivacySettingIcon = function(a, b) {
        b && $("#_profilePrivacy" + a).removeClass().addClass("icoFont" +
            ucfirst(b)).attr("data-value", b);
        return this
    };
    var g = null,
        l = null,
        m = 0,
        n = 0,
        o = TM.contactwindow_pager_view_num,
        u = null,
        r = {};
    a.prepareContactWindow = function() {
        $("#_contactWindowTabMyContact");
        g = $("#_contactWindow").cwFloatWindow({
            title: L.menu_contact_admin,
            open: function() {
                a.selectDefaultTabInContactWindow()
            }
        });
        $("#_contactWindowTab").on("click", "li", function() {
            if (this.id === "_contactWindowTabContact" && a.reachedContactLimit()) return CW.view.showContactLimitErrorDialog(), !1;
            $C("#_contactWindowTab li").removeClass("floatTabSelect");
            $C("#_contactWindowSearch").focus();
            a.tab_type = $(this).addClass("floatTabSelect").attr("data-type");
            a.clearSearchContact();
            b.setVal("");
            $C("#_contactWindowBox").scrollTop(0)
        });
        var b = $("#_contactWindowSearch").cwSearchBox({
                update: function() {
                    a.tab_type == "addcontact" ? a.searchContact("word", this.getVal()) : a.buildContactWindow()
                }
            }),
            d = $("#_addContactByMailTip").cwToolTip({});
        $("#_addContactByMail").click(function() {
            d.open($(this))
        });
        $("#_addContactByMailCheckButton").cwButton({
            click: function() {
                if ($("#_addContactByMailAddress").val()) {
                    var b =
                        trim($C("#_addContactByMailAddress").val());
                    b && a.searchContact("mail", b)
                }
            }
        });
        var e = $("#_contactWindowCheckActionArea").find("._button").cwButton();
        $C("#_contactWindowList").on("click", "._contactList", function() {
            $C("#_contactWindowList").find("._contactList").removeClass("adminDetailSelected");
            var b = $(this);
            b.addClass("adminDetailSelected");
            a.buildContactDetail(b.attr("data-aid"))
        }).on("cwCheckBox_update", function(a, b, d) {
            b ? r[d] = b : r[d] && delete r[d];
            a = $C("#_contactWindowList").find("._contactList").length;
            (b = count(r)) ? (b == a ? l.check() : l.partialCheck(), e.enable()) : (l.unCheck(), e.disable())
        }).on("click", "._inviteContact", function() {
            var b = x.inviteMailList;
            b.length > 0 && (CW.showProgress(L.contact_doing_invite), CW.post("gateway.php", {
                cmd: "invite_contact",
                e: b,
                nm: AC.getName(AC.myid),
                av: CW.getAvatarPanel(AC.myid, {
                    src: !0
                })
            }, function() {
                CW.hideProgress();
                CW.alert(L.contact_done_invite);
                a.clearSearchContact();
                a.buildContactWindow()
            }, function(a) {
                CW.hideProgress();
                CW.alert(a)
            }))
        });
        l = $C("#_contactWindowCheckAll").cwCheckBox();
        contact_window_allcheck_button = $("#_contactWindowCheckAllButton").cwButton({
            click: function() {
                l.toggle()
            },
            disable: function() {
                l.disable()
            },
            enable: function() {
                l.enable()
            }
        });
        $C("#_contactWindowCheckAll").cwCheckBox({
            update: function(a, b, d) {
                d || (this.isChecked() ? $C("#_contactWindowList").find("._cwCBUnchecked").each(function() {
                    $(this).cwCheckBox().check()
                }) : $C("#_contactWindowList").find("._cwCBChecked").each(function() {
                    $(this).cwCheckBox().unCheck()
                }))
            }
        });
        $("#_contactDetailClose").click(function() {
            $C("#_contactWindowList").find("._contactList").removeClass("adminDetailSelected");
            $C("#_contactDetailArea").attr("data-aid", "").hide();
            $C("#_contactDetailBlankArea").show()
        });
        $("#_contactWindowCancel").cwButton({
            click: function() {
                var a = [],
                    b;
                for (b in r) a.push(b);
                a.length > 0 && (CW.showProgress(L.canceling), CW.post("gateway.php", {
                    cmd: "cancel_contact_request",
                    a: a
                }, function() {
                    CW.hideProgress()
                }, function(a) {
                    CW.hideProgress();
                    CW.alert(a)
                }))
            }
        });
        $("#_contactWindowDelete").cwButton({
            click: function() {
                var a = [],
                    b;
                for (b in r) a.push(b);
                CW.view.confirmDelete(L.contact_multi_delete_confirm.replace(/%%num%%/,
                    a.length), function() {
                    a.length > 0 && (CW.showProgress(L.deleting), CW.post("gateway.php", {
                        cmd: "delete_contact",
                        a: a
                    }, function() {
                        CW.hideProgress();
                        CW.watch()
                    }, function(a) {
                        CW.hideProgress();
                        CW.alert(a)
                    }))
                })
            }
        });
        $("#_contactWindowAccept").cwButton({
            click: function() {
                var a = [],
                    b;
                for (b in r) a.push(b);
                a.length > 0 && (CW.showProgress(L.accepting), CW.post("gateway.php", {
                    cmd: "accept_contact_request",
                    a: a
                }, function(a) {
                    if (a.error != void 0) {
                        var b = L.contact_error_cantadd,
                            d = L.contact_error_planlimit,
                            d = d.replace(/%%plan_name%%/,
                                a.error.plan_name),
                            d = d.replace(/%%limit_num%%/, a.error.limit_num);
                        CW.view.showLimitErrorDialog(b, d)
                    }
                    CW.hideProgress()
                }, function(a) {
                    CW.hideProgress();
                    CW.alert(a)
                }))
            }
        });
        $("#_contactWindowAdd").cwButton({
            click: function() {
                var b = [],
                    d;
                for (d in r) b.push(d);
                b.length > 0 && a.requestContact(b, this)
            }
        });
        var f = ["first", "prev", "next", "last"];
        u = $("#_contactWindowPager").cwButtonBar({
            update: function(b) {
                switch (f[b]) {
                    case "first":
                        n = 0;
                        break;
                    case "prev":
                        n--;
                        n < 0 && (n = 0);
                        break;
                    case "next":
                        n++;
                        n >= m && (n = m - 1);
                        break;
                    case "last":
                        n =
                            m - 1
                }
                a.buildContactWindow({
                    resetPager: !1
                });
                $C("#_contactWindowBox").scrollTop(0)
            }
        })
    };
    a.requestContact = function(b, d) {
        d || (d = {
            enable: function() {},
            disable: function() {}
        });
        var e = function() {
            d.disable();
            b.length > 1 && CW.showProgress(L.contact_multi_adding);
            CW.post("gateway.php", {
                cmd: "request_contact",
                a: b
            }, function(b) {
                if (b.error != void 0) {
                    var e = L.contact_error_cantadd,
                        f = L.contact_error_planlimit,
                        f = f.replace(/%%plan_name%%/, b.error.plan_name),
                        f = f.replace(/%%limit_num%%/, b.error.limit_num);
                    CW.view.showLimitErrorDialog(e,
                        f);
                    d.enable()
                } else {
                    for (e = 0; e < b.requested_list.length; e++) {
                        var g = b.requested_list[e];
                        a.model.myrequest_dat[g] = {
                            nm: AC.getName(g),
                            mg: f
                        }
                    }
                    CW.watch()
                }
                CW.hideProgress()
            }, function(a) {
                CW.alert(a);
                d.enable();
                CW.hideProgress()
            })
        };
        b.length > 1 ? CW.view.confirm(L.contact_multi_add_confirm.replace(/%%num%%/, b.length), e) : b.length == 1 && e()
    };
    a.openContactWindow = function() {
        g || a.prepareContactWindow();
        g.open();
        a.buildContactWindow();
        $C("#_contactWindowSearch").focus()
    };
    var v = null,
        w = null,
        A = {
            isSearched: !1,
            isLoading: !1,
            lastType: "",
            lastQuery: "",
            accountIdList: [],
            inviteMailList: []
        },
        x = $.extend({}, A);
    a.getSearchStat = function() {
        return searchResult
    };
    a.searchContact = function(b, d) {
        if (!(x.lastType == b && x.lastQuery == d)) {
            a.clearSearchContact();
            x.isLoading = !0;
            x.lastType = b;
            x.lastQuery = d;
            x.accountIdList = [];
            x.inviteMailList = [];
            switch (b) {
                case "word":
                    d ? w = setTimeout(function() {
                        w = null;
                        v = CW.post("r/gateway.php", {
                            cmd: "search_contact",
                            q: d
                        }, function(b) {
                            if (b.error != void 0) {
                                var d = L.contact_error_cantadd,
                                    e = L.contact_error_planlimit,
                                    e = e.replace(/%%plan_name%%/,
                                        b.error.plan_name),
                                    e = e.replace(/%%limit_num%%/, b.error.limit_num);
                                CW.view.showLimitErrorDialog(d, e)
                            } else {
                                for (d in b.account_dat) AC.myid != d && x.accountIdList.push(d), AC.isUnknown(d) && AC.setAccountDat(d, b.account_dat[d]);
                                if (b.error_dat && b.error_dat.noexist) {
                                    b = b.error_dat.noexist;
                                    d = 0;
                                    for (e = b.length; d < e; d++) x.inviteMailList.push(b[d])
                                }
                            }
                            x.isSearched = !0;
                            x.isLoading = !1;
                            a.buildContactWindow()
                        })
                    }, 1E3) : (x.isSearched = !1, x.isLoading = !1, a.buildContactWindow());
                    break;
                case "mail":
                    var e = d.split("\n");
                    v = CW.post("gateway.php", {
                        cmd: "check_address",
                        a: e
                    }, function(b) {
                        if (b.error != void 0) {
                            var d = L.contact_error_cantadd,
                                e = L.contact_error_planlimit,
                                e = e.replace(/%%plan_name%%/, b.error.plan_name),
                                e = e.replace(/%%limit_num%%/, b.error.limit_num);
                            CW.view.showLimitErrorDialog(d, e)
                        } else {
                            for (e in b.address_dat) {
                                var f = b.address_dat[e].aid;
                                x.accountIdList.push(f);
                                AC.isUnknown(f) && AC.setAccountDat(f, b.address_dat[e])
                            }
                            e = [];
                            if (b.error_dat != void 0) {
                                f = "";
                                for (d in b.error_dat) {
                                    var g = b.error_dat[d].length;
                                    if (d == "noexist")
                                        for (var h = 0; h < g; h++) x.inviteMailList.push(b.error_dat[d][h]);
                                    else {
                                        e = e.concat(b.error_dat[d]);
                                        f && (f += "\n\n");
                                        var i = 0;
                                        if (g > 3) var l = 3,
                                            i = g - 3;
                                        else l = g;
                                        g = "";
                                        for (h = 0; h < l; h++) g && (g += ","), g += b.error_dat[d][h];
                                        f += g;
                                        i > 0 && (f += L.contact_rest_number.replace(/%%rest_number%%/, i));
                                        d == "invalid" ? f += L.contact_error_is_not_mailaddress : d == "limited" ? f += L.contact_error_is_over_contactnum : d == "external" && (f += L.contact_error_is_disable_external)
                                    }
                                }
                                f && CW.alert(f)
                            }
                            x.isSearched = !0;
                            x.isLoading = !1;
                            a.buildContactWindow()
                        }
                    })
            }
            a.buildContactWindow()
        }
    };
    a.clearSearchContact = function() {
        v && (v.abort(),
            v = null);
        w && clearTimeout(w);
        l.unCheck(!0);
        r = {};
        x = $.extend({}, A)
    };
    a.selectDefaultTabInContactWindow = function() {
        var b = "_contactWindowTabContact";
        a.reachedContactLimit() && (b = "_contactWindowTabMyContact");
        $C("#" + b).click()
    };
    a.buildContactWindow = function(b) {
        $.extend({
            resetPager: !0
        }, b).resetPager && (n = 0);
        var d = count(a.model.request_dat);
        d > 0 ? $("#_myAllContactNum").text(d).show() : $("#_myAllContactNum").hide();
        if (g && g.isOpen()) {
            r = {};
            var e = a.getNoRequestDat(),
                f = x.accountIdList,
                h = x.inviteMailList,
                b = "",
                i = [],
                j =
                "",
                q = function(b, d) {
                    if (b == a.model.myid) return !1;
                    if (d.length > 0 && !a.model.isMatchedWithKeyList(d, b)) return !1;
                    return !0
                };
            contact_window_allcheck_button.disable();
            $C("#_contactWindowNavigation ._contactWindowNavigationItem").hide();
            switch (a.tab_type) {
                case "addcontact":
                    j = L.contact_search_introduction;
                    $C("#_addContactType").show();
                    $C("#_contactWindowAdd").show().cwButton().disable();
                    $C("#_contactWindowSearch").attr("placeholder", L.contact_search_placeholder);
                    for (var i = [], k = 0, q = f.length; k < q; k++) {
                        var v = f[k];
                        !AC.isContact(v) && !AC.request_dat[v] && !AC.myrequest_dat[v] && i.push(v)
                    }
                    f = i;
                    break;
                case "contact":
                    j = L.contact_search_not_found;
                    $C("#_contactWindowSearch").attr("placeholder", L.contact_search);
                    f = $C("#_contactWindowSearch").val().toLowerCase();
                    x.isSearched = !1;
                    if (f) i = CW.splitWithSpace(f), x.isSearched = !0;
                    for (var f = [], k = 0, w = a.model.contact_list.length; k < w; k++) v = a.model.contact_list[k], q(v, i) && f.push(v);
                    $C("#_contactWindowDelete").show().cwButton().disable();
                    break;
                case "myrequest":
                    $C("#_contactWindowSearch").attr("placeholder",
                        L.contact_search);
                    f = $C("#_contactWindowSearch").val().toLowerCase();
                    x.isSearched = !1;
                    if (f) i = CW.splitWithSpace(f), x.isSearched = !0;
                    f = [];
                    for (v in a.model.myrequest_dat) q(v, i) && f.push(v);
                    $C("#_contactWindowCancel").show().cwButton().disable();
                    break;
                case "request":
                    $C("#_contactWindowSearch").attr("placeholder", L.contact_search);
                    f = $C("#_contactWindowSearch").val().toLowerCase();
                    x.isSearched = !1;
                    if (f) i = CW.splitWithSpace(f), x.isSearched = !0;
                    f = [];
                    for (v in a.model.request_dat) q(v, i) && f.push(v);
                    $C("#_contactWindowAccept").show().cwButton().disable();
                    break;
                case "norequest":
                    $C("#_contactWindowSearch").attr("placeholder", L.contact_search);
                    f = $C("#_contactWindowSearch").val().toLowerCase();
                    x.isSearched = !1;
                    if (f) i = CW.splitWithSpace(f), x.isSearched = !0;
                    f = [];
                    e = a.getNoRequestDat();
                    for (v in e) q(v, i) && f.push(v);
                    b += '<div class="contactAddAllHint">' + L.contact_add_all_hint + "</div>";
                    $C("#_contactWindowAdd").show().cwButton().disable()
            }
            x.isLoading ? b += '<div class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" />' + L.loading + "</div>" :
                f.length == 0 && h.length == 0 && (b += x.isSearched ? '<div class="emptyAdminContent"><img src="./imagenew/common/empty/img_contact_empty.png" alt="" /><p>' + L.contact_error_search_user_not_found + "</p></div>" : '<div class="emptyAdminContent"><img src="./imagenew/common/empty/img_contact_empty.png" alt="" /><p>' + j + "</p></div>");
            f.sort(function(b, d) {
                return sort_for_string(a.model.getName(b), a.model.getName(d))
            });
            a.model.contact_list.length > 1 ? $C("#_contactWindowListNum").text("(" + number_format(a.model.contact_list.length -
                1) + ")") : $C("#_contactWindowListNum").text("");
            v = count(a.model.myrequest_dat);
            if (v > 0) $C("#_contactWindowTabMyRequest").show(), $C("#_contactWindowMyRequestNum").text("(" + number_format(v) + ")");
            else if ($C("#_contactWindowTabMyRequest").hide(), a.tab_type == "myrequest") {
                a.selectDefaultTabInContactWindow();
                return
            }
            if (d > 0) $C("#_contactWindowTabRequest").show(), $C("#_contactWindowRequestNum").html('<span class="contactRequestNum">' + number_format(d) + "</span>").show();
            else if ($C("#_contactWindowTabRequest").hide(),
                a.tab_type == "request") {
                a.selectDefaultTabInContactWindow();
                return
            }
            v = count(e);
            if (v > 0) $C("#_contactWindowTabNoRequest").show(), $C("#_contactWindowNoRequestNum").text("(" + number_format(v) + ")");
            else if ($C("#_contactWindowTabNoRequest").hide(), a.tab_type == "norequest") {
                a.selectDefaultTabInContactWindow();
                return
            }
            v = h.length;
            if (v > 0) {
                b += '<li class="inviteMailNotFound subContentShadow"><p class="alert alertWarning">' + L.contact_mail_not_found + "</p><ul>";
                for (k = 0; k < v; k++) b += "<li>" + escape_html(h[k]) + "</li>";
                b +=
                    '</ul><div class="btnInviteContentArea"><div class="_inviteContact button btnPrimary">' + L.contact_do_invite + "</div></div></li>"
            }
            h = [];
            k = f.length;
            m = parseInt(k / o, 10);
            k % o !== 0 && m++;
            if (k >= o) {
                d = n * o;
                v = d + o;
                v > k && (v = k);
                for (k = d; k < v; k++) h.push(f[k])
            } else h = f;
            d = h.length;
            d > 0 && contact_window_allcheck_button.enable();
            e = $C("#_contactDetailArea").attr("data-contact-id");
            j = !1;
            d && (all_contact_is_checked = !0);
            i = {
                profileLink: !1,
                shortButton: !1,
                footerButton: !0,
                showCover: !1,
                showMoveChat: !0,
                showLive: !0,
                showDeleteContact: !1,
                showCheckBox: !0,
                isChecked: !1
            };
            for (k = 0; k < d; k++) v = h[k], b += '<li class="_contactList subContentShadow" data-aid="' + v + '">' + a.getContactPanel(v, i) + "</li>", e == v && (j = !0);
            j || $C("#_contactDetailClose").click();
            l.unCheck(!0);
            $C("#_contactWindowList").html(b);
            f.length ? $C("#_contactWindowPagerIndex").text((n + 1).toString() + " / " + m) : $C("#_contactWindowPagerIndex").text("");
            u.enableButtonAll();
            n == 0 && u.disableButton(0).disableButton(1);
            m - n <= 1 && u.disableButton(2).disableButton(3)
        }
    };
    a.buildContactDetail = function(b) {
        AC.account_dat[b] &&
            ($C("#_contactDetailBlankArea").hide(), $C("#_contactDetailArea").show(), a.assignDetailInfo($C("#_contactDetailArea"), b))
    };
    var q = 0;
    a.assignDetailInfo = function(b, d) {
        if (q) return !1;
        if (!AC.hasDetailData(d)) {
            b.hide();
            var e = !1;
            d == AC.myid && (e = !0);
            q = d;
            AC.refreshAccountDetailData(d, e, function() {
                q = 0;
                a.assignDetailInfo(b, d)
            });
            return !1
        }
        b.find("._profileName").html(CW.getName(d));
        b.find("._profileAvatar").html(CW.getAvatarPanel(d, {
            size: "huge",
            clicktip: !1,
            hovertip: !1
        }));
        b.find("._profileCover").html(CW.getCoverPanel(d));
        b.find("._profileContactDetailCover").html(CW.getCoverPanel(d));
        b.find("._profileOrgName").html(CW.getOrgName(d));
        (e = CW.getChatWorkIdLink(d)) ? b.find("._profileChatWorkIdLink").html(L.profile_chatworkidtip + e).show(): b.find("._profileChatWorkIdLink").hide();
        (e = AC.getIntroduction(d)) ? b.find("._profileNameDescription").html("<pre>" + CW.renderMessage(e) + "</pre>").show(): b.find("._profileNameDescription").hide();
        b.find("._profileDepartment").text(AC.getDepartment(d));
        b.find("._profileTitle").text(AC.getTitle(d));
        b.find("._profileAddress").text(AC.getAddress(d));
        e = AC.getUrl(d);
        e.match(/^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/) ? (e = escape_html(e), b.find("._profileUrl").html('<a href="' + e + '" target="_blank">' + e + "</a>")) : b.find("._profileUrl").text(e);
        e = AC.getEmail(d);
        e.match(/^[A-Za-z0-9]+[\w-]+@[\w\.-]+\.\w{2,}$/) ? (e = escape_html(e), b.find("._profileEmail").html('<a href="mailto:' + e + '">' + e + "</a>")) : b.find("._profileEmail").text(e);
        b.find("._profileOrgTel").text(AC.getOrgTel(d));
        b.find("._profileExtensionTel").text(AC.getExtensionTel(d));
        b.find("._profileMobileTel").text(AC.getMobileTel(d));
        var e = "",
            f = escape_html(AC.getFacebook(d)),
            g = escape_html(AC.getTwitter(d)),
            h = AC.getSkype(d),
            i = escape_html(h);
        f && (e = '<li><span class="icoFontFacebook"></span><span class="icoTextHide">facebook</span><a href="https://www.facebook.com/' + f + '" target="_blank">' + f + "</a></li>");
        g && (e += '<li><span class="icoFontTwitter"></span><span class="icoTextHide">twitter</span><a href="http://twitter.com/' + g + '" target="_blank">' + g + "</a></li>");
        h && (e += '<li><span class="icoFontSkype"></span><span class="icoTextHide">skype</span><a href="skype:' +
            i + '?call">' + i + "</a></li>");
        b.find("._profileSNS").html(e);
        e = a.getContactButton(d, {
            shortButton: !1,
            showMoveChat: !0,
            showLive: !0,
            showDeleteContact: !1
        });
        d == AC.myid && (e = '<div class="_profileEdit button">' + L.profile_edit + "</div>" + e);
        b.find("._profileButton").html(e);
        b.show()
    };
    a.getContactPanel = function(b, d) {
        var e = $.extend({
                profileLink: !0,
                showButton: !0,
                footerButton: !0,
                showCover: !0,
                showLive: !0,
                showCheckBox: !1,
                isChecked: !1
            }, d),
            f = "",
            g = CW.getChatWorkIdLink(b);
        g && (f = '<dd id="profileTipChatWorkId">' + L.profile_chatworkidtip +
            "<span>" + g + "</span></dd>");
        g = "";
        AC.getRoomId(b) && e.showLive && (MOBILE === "ipad" ? g = '<div class="btnGroup"><div class="button btnDisable"><span class="icoFontVideoChat icoSizeLarge"></span><span class="icoTextHide">' + L.live_join + "</span></div></div>" : b != AC.myid && (g = '<div class="btnGroup"><div class="_joinLive button" data-aid="' + b + '"><span class="icoFontVideoChat icoSizeLarge"></span><span class="icoTextHide">' + L.live_join + "</span></div></div>"));
        if (e.showButton) {
            e.showLive = !1;
            var h = a.getContactButton(b,
                e)
        } else h = "";
        if (e.profileLink && !AC.isUndisclosed(b)) {
            h += '<div class="_profileTipButton _openProfile _moveButton button" data-aid="' + b + '">' + L.menu_profile_setting + "</div>";
            var i = '<span class="_profileTipButton _openProfile profileTipName anchorText" data-aid="' + b + '">' + CW.getName(b) + "</span>"
        } else i = e.showCheckBox ? '<span class="_profileTipCheckLabel">' + CW.getName(b) + "</span>" : CW.getName(b);
        var l = "";
        e.showCover && (l = CW.getCoverPanel(b));
        var n = "",
            m = "";
        e.showButton && h && (e.footerButton ? m = '<div class="tooltipFooter"><div class="btnGroup"><div class="_profileTipButton">' +
            h + "</div></div></div>" : n = '<div class="btnGroup">' + h + "</div>");
        h = "";
        e.showCheckBox && (h = $.cwCheckBox.create(e.isChecked, "", b, {
            "class": "_contactPanelCheck"
        }));
        return '<div class="_contactPanel" data-aid="' + b + '"><div class="profileImgToolTip">' + l + '<div class="profileTooltipAvater">' + CW.getAvatarPanel(b, {
                hovertip: !1,
                clicktip: !1,
                size: "large"
            }) + '</div></div><div class="speakerProfileTooltipContent clearfix">' + h + "<dl><dt>" + i + '</dt><dd id="_profileTipOrgName">' + CW.getOrgName(b) + "</dd>" + f + g + n + "</dl></div>" +
            m
    };
    a.getContactButton = function(a, b) {
        var d = $.extend({
                shortButton: !1,
                showMoveChat: !0,
                showLive: !0,
                showDeleteContact: !1
            }, b),
            e = "",
            f = AC.getRoomId(a);
        f ? (d.showLive && (MOBILE === "ipad" ? e += '<div class="button btnDisable"><span class="icoFontVideoChat"></span><span class="icoTextHide">' + L.live_join + "</span></div>" : a != AC.myid && (e += '<div class="_joinLive button" data-aid="' + a + '"><span class="icoFontVideoChat"></span><span class="icoTextHide">' + L.live_join + "</span></div>")), d.showMoveChat && (e += '<div class="_roomLink _moveButton button" data-rid="' +
                f + '">' + (a == AC.myid ? L.mychat : L.directchat) + "</div>"), a != AC.myid && d.showDeleteContact && (e += d.shortButton ? '<div class="_deleteContact _actionButton button"><span class="icoFontActionDelete"></span><span class="icoTextHide">' + L.button_delete + "</span></div>" : '<div class="_deleteContact _actionButton button">' + L.contact_delete + "</div>")) : AC.myrequest_dat[a] ? e = d.shortButton ? '<div class="_cancelMyRequest _actionButton button">' + L.button_cancel + "</div>" : '<div class="_cancelMyRequest _actionButton button">' +
            L.contact_request_cancel + "</div>" : AC.request_dat[a] ? e = d.shortButton ? '<div class="_acceptContactRequest _actionButton button btnPrimary" data-aid="' + a + '">' + L.button_accept + '</div><div class="_rejectContactRequest _actionButton button" data-aid="' + a + '">' + L.button_reject + "</div>" : '<div class="_acceptContactRequest _actionButton button btnPrimary" data-aid="' + a + '">' + L.button_accept_long + '</div><div class="_rejectContactRequest _actionButton button" data-aid="' + a + '">' + L.button_reject_long + "</div>" : !AC.isDeleted(a) &&
            !AC.isUndisclosed(a) && (e = d.shortButton ? '<div class="_requestContact _actionButton button btnPrimary" data-aid="' + a + '">' + L.button_add + "</div>" : '<div class="_requestContact _actionButton button btnPrimary" data-aid="' + a + '">' + L.contactpanel_add_contact + "</div>");
        return e
    };
    a.reachedContactLimit = function() {
        var b = CW.contact_limit_num;
        return b && a.model.contact_list.length - 1 >= b
    }
}

function SettingView(b) {
    var a = this;
    a.is_valid_cwid = !1;
    a.model = b;
    a.total_progress_per = 0;
    a.stepguide_progress = {};
    a.debug_view_profile_aid = 0;
    a.view_profile_aid = 0;
    b.sound_default = "Kalimba";
    a.supported_dateformat = {
        "default": ["m/d/Y", "d/m/Y", "Y/m/d", "m-d-Y", "d-m-Y", "Y-m-d", "m.d.Y", "d.m.Y", "Y.m.d", "m/d-Y"],
        ja: ["Y\u5e74m\u6708d\u65e5"],
        "zh-cn": ["Y\u5e74m\u6708d\u65e5"]
    };
    a.checkbox_dat = {
        _popupSound: "popup_sound",
        _notifierShow: "desktop_alert",
        _notifierMessage: "notifier_message",
        _notifierOnlyto: "notifier_onlyto",
        _faviconstat: "faviconstat",
        _showDelmessage: "show_delmessage",
        _showExternal: "show_external",
        _privateNickname: "private_nickname",
        _shortenUrl: "shorten_url"
    };
    a.selectbox_dat = {
        _notifierDuration: "notifier_duration",
        _soundVolume: "sound_volume",
        _soundType: "sound_type",
        _notifyTerm: "notify_term",
        _langType: null,
        _langDateformat: null
    };
    var e = [{
            name: "mallet",
            data: {
                is_multi: !0
            }
        }, {
            name: "ashvoice",
            data: {
                is_multi: !1
            }
        }, {
            name: "agogo",
            data: {
                is_multi: !0
            }
        }, {
            name: "chime",
            data: {
                is_multi: !0
            }
        }, {
            name: "cowbell",
            data: {
                is_multi: !0
            }
        }, {
            name: "cuica",
            data: {
                is_multi: !0
            }
        }, {
            name: "drip",
            data: {
                is_multi: !0
            }
        }, {
            name: "kiai",
            data: {
                is_multi: !0
            }
        }, {
            name: "marimba",
            data: {
                is_multi: !0
            }
        }, {
            name: "percussimba",
            data: {
                is_multi: !0
            }
        }, {
            name: "steampipe",
            data: {
                is_multi: !0
            }
        }, {
            name: "whistle",
            data: {
                is_multi: !0
            }
        }, {
            name: "8-bit",
            data: {
                is_multi: !0
            }
        }, {
            name: "Ac_Guitar02",
            data: {
                is_multi: !1
            }
        }, {
            name: "Brass",
            data: {
                is_multi: !1
            }
        }, {
            name: "Crisis01",
            data: {
                is_multi: !1
            }
        }, {
            name: "Crisis02",
            data: {
                is_multi: !1
            }
        }, {
            name: "Cymbal",
            data: {
                is_multi: !1
            }
        }, {
            name: "Dora",
            data: {
                is_multi: !1
            }
        }, {
            name: "Sitar",
            data: {
                is_multi: !1
            }
        }, {
            name: "Tambourine",
            data: {
                is_multi: !1
            }
        }, {
            name: "Conga_c",
            data: {
                is_multi: !1
            }
        }, {
            name: "EP_c",
            data: {
                is_multi: !1
            }
        }, {
            name: "EP_d",
            data: {
                is_multi: !1
            }
        }, {
            name: "Piano_c",
            data: {
                is_multi: !1
            }
        }, {
            name: "Piano_d",
            data: {
                is_multi: !1
            }
        }, {
            name: "Piano_e",
            data: {
                is_multi: !1
            }
        }, {
            name: "Kalimba_c",
            data: {
                is_multi: !1
            }
        }, {
            name: "Kalimba_d",
            data: {
                is_multi: !1
            }
        }, {
            name: "Ac_Guitar",
            data: {
                is_multi: !0
            }
        }, {
            name: "Conga02",
            data: {
                is_multi: !0
            }
        }, {
            name: "Conga",
            data: {
                is_multi: !0
            }
        }, {
            name: "Crap",
            data: {
                is_multi: !0
            }
        }, {
            name: "EP02",
            data: {
                is_multi: !0
            }
        }, {
            name: "EP",
            data: {
                is_multi: !0
            }
        }, {
            name: "GuitarCutting",
            data: {
                is_multi: !0
            }
        }, {
            name: "Kalimba",
            data: {
                is_multi: !0
            }
        }, {
            name: "Piano",
            data: {
                is_multi: !0
            }
        }, {
            name: "Shooting",
            data: {
                is_multi: !0
            }
        }, {
            name: "Snare",
            data: {
                is_multi: !0
            }
        }, {
            name: "SynthBell02",
            data: {
                is_multi: !0
            }
        }, {
            name: "SynthBell03",
            data: {
                is_multi: !0
            }
        }, {
            name: "SynthBell",
            data: {
                is_multi: !0
            }
        }],
        d, f, i;
    a.isMultiSound = function(a) {
        var b, d = e.length,
            f = !1;
        for (b = 0; b < d; b++) {
            var g = e[b];
            if (g.name === a) {
                f = g.data.is_multi;
                break
            }
        }
        return f
    };
    a.prepareSetting = function() {
        var b = $("#_chatSetting"),
            e = b.find(".floatHeaderTab").find("li");
        NotificationAPI ? (window.navigator.userAgent.toLowerCase().indexOf("chrome") === -1 && $("#_notifierDurationBox").hide(), $("#_notifierNotSupported").hide(), $("#_notifierSupported").show()) : ($("#_notifierNotSupported").show(), $("#_notifierSupported").hide());
        var f = function() {
            var b = $("#_langType").cwSelectBox().getVal(),
                e = $("#_langDateformat").cwSelectBox().getVal(),
                f = {
                    cmd: "send_setting"
                },
                g = {};
            CW.showProgress(L.saving);
            var h = a.checkbox_dat,
                i;
            for (i in h) {
                var l = h[i],
                    n = $("#" + i).cwCheckBox();
                g[l] = n.isChecked() ? "1" : "0"
            }
            h = a.selectbox_dat;
            for (i in h) l = h[i], n = $("#" + i), g[l] = n.cwSelectBox().getVal();
            typeof g.notify_term !== "undefined" && (g.ai_notify_term = g.notify_term);
            if (b != LANGUAGE || ST.data.dateformat != e) i = {}, i.lang = b, i.dateformat = e, f.language = i;
            f.data = g;
            CW.post("gateway.php", f, function(a) {
                a.setting_data && ST.updateSetting(a.setting_data);
                if (a.lang) {
                    var b = L.button_ok,
                        e = L.button_cancel;
                    L.button_ok = L["lang_" + a.lang + "_button_ok"];
                    L.button_cancel = L["lang_" + a.lang + "_button_cancel"];
                    CW.confirm(L["lang_" + a.lang + "_change_confirm"], function() {
                        document.location.href = "./"
                    });
                    L.button_ok = b;
                    L.button_cancel = e
                }
                CW.hideProgress();
                d.close();
                CW.watch()
            })
        };
        d = b.cwDialog({
            width: 700,
            height: 560,
            title: L.menu_personal_setting,
            open: function() {
                e.eq(0).click();
                a.is_valid_cwid = !0;
                var b = a.checkbox_dat,
                    f;
                for (f in b) {
                    var g = b[f],
                        h = $("#" + f);
                    a.model.data[g] == 1 ? h.cwCheckBox().check() : h.cwCheckBox().unCheck()
                }
                b = a.selectbox_dat;
                for (f in b) g = b[f], h = $("#" + f).cwSelectBox({
                        parentFloatBox: d
                    }), g !== null && typeof a.model.data[g] !==
                    "undefined" && (g = a.model.data[g], h.findItemByValue(g) && h.select(g));
                $("#_langType").cwSelectBox().select(LANGUAGE);
                $("#_langDateformat").cwSelectBox().select(ST.data.dateformat);
                $("#_soundVolume").cwSelectBox().select(ST.data.sound_volume);
                CW.is_business || (f = $("#_showExternal"), f.parent().find("label").css("color", "#888"), f.cwCheckBox().disable(), f = $("#_privateNickname"), f.parent().find("label").css("color", "#888"), f.cwCheckBox().disable())
            },
            buttonLabels: [L.button_save_long, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(a) {
                a === 0 && f()
            }
        });
        var g = d.$el.find("._cwSettingContents");
        e.click(function() {
            i && i.isActive() && i.close();
            var a = e.index(this),
                a = g.eq(a);
            e.removeClass("floatTabSelect");
            $(this).addClass("floatTabSelect");
            g.hide();
            a.show()
        });
        $("#_langType").cwSelectBox().setOption({
            update: function() {
                $("#_settingLanguage");
                var b = $("#_langDateformat");
                b.prop("name");
                var d;
                d = $("#_langType").cwSelectBox().getVal();
                var e = a.supported_dateformat,
                    e = (e[d] || []).concat(e["default"]),
                    f = [];
                d = 0;
                for (var g =
                        e.length; d < g; d++) f.push({
                    label: CW.getDate((new Date((new Date).getFullYear(), 11, 31)).getTime() / 1E3, e[d]),
                    value: e[d]
                });
                b.cwSelectBox().setList(f).select(f[0].value)
            }
        })
    };
    a.openSettingDialog = function() {
        d || a.prepareSetting();
        d.open()
    };
    a.prepare = function() {
        $("#_setting").click(function() {
            a.openSettingDialog()
        });
        $("#_soundPlay").click(function() {
            audioObjSupport ? CW.playSound($("#_soundType").cwSelectBox().getVal(), $("#_soundVolume").cwSelectBox().getVal()) : CW.alert(L.sound_no_support);
            return !1
        });
        var b = $("#_notifierShow").cwCheckBox();
        b.$el.click(function(d) {
            d.preventDefault();
            a.requestNotificationPermission(function(a) {
                a && b.toggle()
            });
            return !1
        });
        b.$el.next("label").click(function(a) {
            a.preventDefault();
            b.$el.click();
            return !1
        });
        var d = $("#_myStatusBox"),
            e = $("#_myStatusButton");
        e.hover(function() {
            e.hasClass("myStatusButtonSelected") || (e.addClass("myStatusButtonHover"), e.find(".icoSystem").addClass("icoFontTriangleDown"))
        }, function() {
            e.removeClass("myStatusButtonHover");
            e.find(".icoSystem").removeClass("icoFontTriangleDown")
        });
        CW.view.onEndInitLoad(function() {
            CW.plan ==
                "free" ? $("#_upgradePlan").show().click(function() {
                    CW.view.showServiceAdmin("upgrade")
                }) : $("#_upgradePlan").hide();
            CW.is_admin ? $("#_openAdminMenu").show() : ($("#_openAdminMenu").hide(), CW.is_admin_user && $C("#_userAdminMenu").show())
        });
        e.click(function() {
            if (!d.isVisible()) {
                e.addClass("myStatusButtonSelected");
                e.removeClass("myStatusButtonHover");
                var a = e.offset().left + e.outerWidth(),
                    b = e.outerWidth();
                if (b < TM.mymenu_min_width) b = TM.mymenu_min_width;
                d.width(b);
                b = d.outerWidth();
                d.css("left", a - b - 10 + "px");
                d.slideDown("fast",
                    function() {
                        $.cwFloatBox.open(d, function() {
                            d.slideUp("fast", function() {
                                e.removeClass("myStatusButtonSelected")
                            })
                        })
                    })
            }
        }).mousedown(function() {
            return !1
        });
        d.on("click", "li", function() {
            $.cwFloatBox.close(d)
        });
        (function() {
            var a = $("#_inputApiTokenPass"),
                b = $("#_inputApiToken"),
                d = $("#_settingApi"),
                e = $("#_settingApiAfter"),
                f = $("#_regenerateTokenBtn"),
                g, h = $("#_copyTokenBtn"),
                l = {
                    getApiToken: function(a) {
                        CW.post("gateway.php", {
                            cmd: "get_api_token",
                            password: a.password,
                            regenerate: a.regenerate ? 1 : 0
                        }, function(a) {
                            a.api_token &&
                                l.displayTokenPanel(a.api_token)
                        }, function(a) {
                            if (a && a[0]) return CW.alert(a[0]);
                            return CW.alert(L._chatwork_apitoken_invalid_password)
                        })
                    },
                    displayPasswordPanel: function() {
                        l.clear();
                        e.hide();
                        d.show()
                    },
                    displayTokenPanel: function(a) {
                        l.clear();
                        b.val(a);
                        h.attr("data-clipboard-text", a);
                        d.hide();
                        e.show()
                    },
                    clear: function() {
                        a.val("");
                        b.val("")
                    }
                };
            i = {
                init: function() {
                    d.find("._displayApiToken").click(function() {
                        g = a.val();
                        g.length === 0 ? CW.alert(L._chatwork_apitoken_empty_password) : l.getApiToken({
                            password: g
                        })
                    });
                    f.click(function() {
                        CW.confirm(L._chatwork_apitoken_confirm_regenerate,
                            function() {
                                l.getApiToken({
                                    password: g,
                                    regenerate: !0
                                })
                            })
                    });
                    var b = new ZeroClipboard(h[0]);
                    b.on("mouseover", function() {
                        h.addClass("buttonHover")
                    });
                    b.on("mouseout", function() {
                        h.removeClass("buttonHover")
                    });
                    b.on("mousedown", function() {
                        h.addClass("buttonActive")
                    });
                    b.on("mouseup", function() {
                        h.removeClass("buttonActive")
                    })
                },
                isActive: function() {
                    return d.is(":visible") || e.is(":visible")
                },
                close: function() {
                    l.displayPasswordPanel()
                }
            }
        })();
        i.init()
    };
    var h = !1,
        j = !0,
        k = function() {
            if (f) return !1;
            if (!h && !a.model.data.userguide_welcome) h = !0, setTimeout(function() {
                a.openWelcomeDialog()
            }, 500);
            else if (CW.switch_biwa) CW.switch_biwa = !1, CW.view.startTutorial()
        };
    a.openWelcomeDialog = function() {
        f || (f = $("#_userguideWelcomeDialog").cwDialog({
            title: L.welcome_title.replace("%%service_name%%", SERVICE_NAME),
            width: 820,
            close: function() {
                CW.view.startTutorial();
                CW.post("gateway.php", {
                    cmd: "send_chat_setting",
                    data: {
                        userguide_welcome: "1"
                    }
                })
            }
        }), $("#_userguideWelcomeOpen").click(function() {
            f.close()
        }));
        f.open()
    };
    a.refreshSoundStatus = function() {};
    a.updateSetting =
        function() {
            a.refreshNotificationStatus();
            $.cwDatePicker.setDefaultOption({
                dateFormat: ST.data.dateformat
            });
            j && ($("._datePicker").cwDatePicker(), RS.view.prepareTask());
            j = !1;
            ST.data.enter_action == "send" ? $C("#_sendEnterAction").cwCheckBox().check() : $C("#_sendEnterAction").cwCheckBox().unCheck();
            if (canPlayOgg || canPlayMp3) {
                var b = a.model.data.sound_type;
                $("#_audio_" + b).length || CW.view.embedAudio(b)
            }
            k()
        };
    var g;
    a.updateAnnounce = function() {
        $C("#_notificationArea");
        $C("#_notificationItemList");
        $C("#_notificationAnnounceLink");
        if (a.model.announce_dat.id) {
            var b = time(),
                d = a.model.announce_dat,
                e = parseInt(d.from, 10),
                d = parseInt(d.to, 10);
            if (e < b && b < d) {
                d = ST.announce_dat;
                g = CW.view.saveInformation(g, {
                    linktext: d.linktext,
                    subject: d.subject,
                    body: d.body,
                    buttonLabels: [L.announce_button_close],
                    buttonClick: function(b) {
                        if (b === 0) {
                            var d = this;
                            a.deleteAnnounce(g, function() {
                                a.model.closeAnnounce();
                                d.close()
                            })
                        }
                    }
                });
                CW.view.renderInformation();
                return
            }
        }
        g && a.deleteAnnounce(g)
    };
    a.deleteAnnounce = function(a, b) {
        a && (CW.view.deleteInformation(a, b), g = void 0)
    };
    a.toggleNotification = function(b) {
        NotificationAPI ? NotificationAPI.checkPermission() == 0 ? (ST.data.desktop_alert = a.model.data.desktop_alert == "0" ? "1" : "0", a.refreshNotificationStatus(!0)) : (b.preventDefault(), NotificationAPI.requestPermission(function(b) {
            ST.data.desktop_alert = b == 0 ? "1" : "0";
            a.refreshNotificationStatus(!0)
        })) : CW.alert(L.desktopalert_no_support)
    };
    a.requestNotificationPermission = function(a) {
        NotificationAPI ? NotificationAPI.requestPermission(function() {
            NotificationAPI.checkPermission() == 0 ? a(!0) :
                a(!1)
        }) : CW.alert(L.desktopalert_no_support)
    };
    a.refreshNotificationStatus = function(b) {
        var d = !1;
        b && CW.post("gateway.php", {
            cmd: "send_chat_setting",
            data: {
                desktop_alert: a.model.data.desktop_alert
            }
        });
        a.model.data.desktop_alert == "1" && NotificationAPI && NotificationAPI.checkPermission() == 0 && (d = !0);
        d ? ($("#cw_notification_icon").removeClass("ui_sp_icon_footer_notification_off").addClass("ui_sp_icon_footer_notification_on").css("visibility", "visible"), $("#cw_notification").prop("title", L.menu_desktopalert + "(" +
            L.menu_current + "ON)"), CW.enable_popup = !0) : ($("#cw_notification_icon").removeClass("ui_sp_icon_footer_notification_on").addClass("ui_sp_icon_footer_notification_off").css("visibility", "visible"), $("#cw_notification").prop("title", L.menu_desktopalert + "(" + L.menu_current + "OFF)"), CW.enable_popup = !1)
    };
    a.toggleSound = function() {
        audioObjSupport ? ST.data.popup_sound = a.model.data.popup_sound == "0" ? "1" : "0" : CW.alert(L.sound_no_support)
    }
}

function FileView(b) {
    var a = this;
    a.model = b;
    var e;
    a.prepare = function() {
        $("#_openFileWindow").click(function() {
            a.openFileWindow()
        });
        var b = !1;
        $("#_fileWindow,#_chatFileListTip").on("click", "._downloadFile", function() {
            var a = $(this).attr("data-file-id");
            (a = FL.file_id2file_dat[a]) && $("#_downloadFrame").attr("src", SERVER_PATH + "/gateway.php?cmd=download_file&bin=1&file_id=" + a.id);
            return !1
        }).on("click", "._editFile", function() {
            var b = $(this).attr("data-file-id"),
                d = FL.file_id2file_dat[b];
            if (d) {
                var e = $("#_editFileFile");
                e.val(d.fn);
                $("#_editFileDialog").cwDialog({
                    width: 480,
                    height: 150,
                    title: L.file_edit_title,
                    buttonLabels: [L.button_save_long, L.button_cancel],
                    buttonSubmit: 0,
                    buttonCancel: 1,
                    buttonClick: function(d) {
                        switch (d) {
                            case 0:
                                var d = [],
                                    f = e.val();
                                f || d.push(L.file_error_empty);
                                a.model.isExecutableExtension(f) && d.push(L.error_upload_executable);
                                a.model.containIllegalChar(f) && d.push(L.error_illegal_filename);
                                if (d.length) {
                                    CW.alert(d.join("\n"));
                                    break
                                }
                                a.model.editFile(b, f);
                                this.close()
                        }
                    },
                    close: function() {
                        e.val("")
                    }
                }).open()
            }
        }).on("click",
            "._moveFile",
            function() {
                var a = $(this).attr("data-file-id");
                (a = FL.file_id2file_dat[a]) && RL.selectRoom(a.rid, a.cid)
            }).on("click", "._deleteFile", function() {
            var d = $(this).attr("data-file-id"),
                e = FL.file_id2file_dat[d];
            e && CW.view.confirmDelete(L.file_confirm_delete.replace(/%%file_name%%/, e.fn), function() {
                b || (b = setTimeout(function() {
                    b = !1
                }, 5E3), a.model.deleteFile(d, function() {
                    b = clearTimeout(b);
                    w = {}
                }, function() {
                    b = clearTimeout(b);
                    CW.alert(L.file_delete_error_try_again)
                }))
            })
        });
        $("#_subContentFileOpenAll").click(function() {
            $C("#_subRoomFileList").find("li._fileList").each(function() {
                var a =
                    $(this);
                a.hasClass("_fileOpen") || a.click()
            })
        });
        $("#_subContentFileCloseAll").click(function() {
            $C("#_subRoomFileList").find("li._fileOpen").click()
        });
        $C("#_wrapper").on("click", "._filePreview", function() {
            var b = $(this).attr("data-file-id");
            a.openPreviewDialog(b)
        }).on("mouseenter", "._filePreview", function() {
            $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                message: L.file_preview_image_hint,
                delay: 0
            }).open()
        })
    };
    var d = null;
    a.prepareFileList = function() {
        d = $("#_chatFileListTip").cwListTip({
            direction: "bottom",
            showPosition: "right",
            noTriangle: !0,
            search: !0,
            placeHolder: L.file_search,
            useHtmlLabel: !0,
            multiSelect: !1,
            selectable: !1,
            fixHeight: !1,
            maxListHeight: 400,
            open: function(a, b) {
                this.data.room = RL.rooms[b]
            },
            close: function() {
                b.close()
            },
            list: function() {
                var a = this.data.room;
                if (!a) return [];
                var b = [],
                    a = a.filelist.getFileList(),
                    d = a.length;
                if (d > 0) {
                    FL.sortFileList(a);
                    for (var e = 0; e < d; e++) {
                        var f = a[e],
                            g = FL.file_id2file_dat[f];
                        g != void 0 && g.st != "deleted" && b.push({
                            keys: [g.fn],
                            value: f,
                            label: FL.view.getFilePanel(g, {
                                type: "filelist"
                            })
                        })
                    }
                }
                return b
            },
            select: function(a) {
                this.ul.find("li.adminDetailSelected").removeClass("adminDetailSelected");
                this.findItemByValue(a).addClass("adminDetailSelected");
                b.open(this.findItemByValue(a), a)
            }
        });
        d.ul.on("mouseenter", "li", function() {
            var a = $(this),
                e = d.getValueByItem(a);
            $.cwMessageTip.isInit(this) || a.cwMessageTip({
                message: function(a) {
                    a = d.getValueByItem(a);
                    return FL.file_id2file_dat[a].fn
                },
                delayQuickMode: !1,
                delay: 1E3
            }).open();
            d.ul.find("li.adminDetailSelected").removeClass("adminDetailSelected");
            a.addClass("adminDetailSelected");
            b.open(d.findItemByValue(e), e)
        }).on("click", "li", function() {
            $.cwFloatBox.skip(b.$el)
        });
        var b = $("#_chatFileDetailTip").cwToolTip({
            parentFloatBox: $("#_chatFileListTip"),
            direction: "left",
            showPosition: "top",
            open: function(b, d) {
                var e = FL.file_id2file_dat[d];
                e && a.assignDetailInfo($C("#_chatFileDetailTip"), e)
            }
        });
        $("#_fileDetailDownload").click(function() {
            var a = $C("#_chatFileDetailTip").attr("data-file-id");
            (a = FL.file_id2file_dat[a]) && $("#_downloadFrame").attr("src", SERVER_PATH + "/gateway.php?cmd=download_file&bin=1&file_id=" +
                a.id)
        });
        $("#_fileDetailMove").click(function() {
            var a = $C("#_chatFileDetailTip").attr("data-file-id");
            (a = FL.file_id2file_dat[a]) && RL.selectRoom(a.rid, a.cid)
        })
    };
    a.buildFileDetail = function(b) {
        if (b = FL.file_id2file_dat[b]) $C("#_fileDetailBlankArea").hide(), $C("#_fileDetailArea").show(), a.assignDetailInfo($C("#_fileDetailArea"), b)
    };
    var f = null,
        i = {};
    a.assignDetailInfo = function(b, d) {
        var e = SERVER_PATH + "/gateway.php?cmd=download_file&bin=1&file_id=" + d.id,
            g = get_file_extension(d.fn);
        FL.view.isImage(g) ? (e += "&preview=1",
            b.find("._fileDetailPreview").html('<a href="' + e + '" target="_blank"><img src="' + e + '"/></a>')) : FL.view.isText(g) ? (f && f.abort(), i[d.id] ? (b.find("._fileDetailPreview").html('<div class="_codePreview codePreview">' + i[d.id].data + "</div>").scrollTop(0), a.startPreviewCacheTimer(d.id)) : (f = $.ajax({
            type: "GET",
            url: e + "&preview=1",
            success: function(e) {
                i[d.id] = {
                    data: escape_html(e)
                };
                a.startPreviewCacheTimer(d.id);
                b.find("._fileDetailPreview").html('<div class="_codePreview codePreview">' + i[d.id].data + "</div>").scrollTop(0);
                f = null
            },
            error: function() {
                b.find("._fileDetailPreview").html(L.file_preview_image_cant_read)
            }
        }), b.find("._fileDetailPreview").html('<div class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" />' + L.file_loading + "</div>"))) : b.find("._fileDetailPreview").html(a.getFileTypeIcon(g));
        b.scrollTop(0);
        b.attr("data-file-id", d.id);
        b.find("._fileDetailName").text(d.fn).attr("data-file-id", d.id);
        b.find("._fileDetailSize").text(bytename(d.fz));
        b.find("._fileDetailUploadBy").html(CW.getAvatarPanel(d.aid, {
            size: "tiny"
        }) + " " + CW.getName(d.aid));
        b.find("._fileDetailUploadDate").html(CW.getDate(d.tm));
        b.find("._fileDetailChat").html(RL.rooms[d.rid].getIcon("html", "tiny") + CW.getRoomName(d.rid)).attr({
            "data-rid": d.rid,
            "data-mid": d.cid
        })
    };
    var h = {};
    a.startPreviewCacheTimer = function(a) {
        h[a] && clearTimeout(h[a]);
        h[a] = setTimeout(function() {
            i[a] && delete i[a];
            delete h[a]
        }, 3E5)
    };
    var j = null,
        k = null;
    a.prepareFileType = function() {
        j = {};
        k = {};
        var a = {
                spreadsheet: {
                    key: 1,
                    list: ["xls", "xlsx", "ods", "xlsm", "numbers", "xlsb", "xlt",
                        "et", "xltx", "gsheet"
                    ]
                },
                document: {
                    key: 2,
                    list: ["doc", "docx", "rtf", "pages", "xdw", "odt", "jtd", "epub", "tex", "dot", "dotx", "dotm", "docm", "gdoc", "one", "pub", "lhd", "jlb", "asta", "xps", "ps", "indd"]
                },
                presentation: {
                    key: 3,
                    list: ["pptx", "ppt", "key", "odp", "pptm", "ppsx", "potx", "pps", "pot", "gslides", "skitch"]
                },
                image: {
                    key: 4,
                    list: ["jpg", "png", "gif", "jpeg", "bmp", "tif", "eps", "ico", "tiff", "xcf", "cdr", "svg", "sai", "tga", "wmf", "emf", "dib", "pic", "snagproj", "cur", "xib"]
                },
                ai: {
                    key: 5,
                    list: ["ai"]
                },
                psd: {
                    key: 6,
                    list: ["psd", "abr"]
                },
                flash: {
                    key: 7,
                    list: ["swf", "fla", "flv", "fxp"]
                },
                pdf: {
                    key: 8,
                    list: ["pdf"]
                },
                movie: {
                    key: 9,
                    list: ["mp4", "wmv", "mov", "avi", "m4v", "3gp", "mts", "fbr", "mpg", "camrec", "ogg", "wlmp", "camproj", "m4p", "vob", "f4v"]
                },
                text: {
                    key: 10,
                    list: ["txt", "log", "strings", "text", "md", "license"]
                },
                audio: {
                    key: 11,
                    list: ["mp3", "wav", "m4a", "wma", "mid", "aiff", "m4r"]
                },
                font: {
                    key: 12,
                    list: ["ttf", "otf", "ttc"]
                },
                web: {
                    key: 13,
                    list: ["html", "css", "htm", "mht", "url", "webarchive", "torrent", "xhtml", "shtml", "less", "scss", "styl", "stylus"]
                },
                markup: {
                    key: 14,
                    list: ["xml",
                        "xsl", "wsdl", "kml", "kmz", "opml", "mxml"
                    ]
                },
                script: {
                    key: 15,
                    list: ["js", "m", "h", "json", "hsp", "rb", "sh", "c", "dll", "h", "cpp", "bat", "py", "cs", "cgi", "crx", "pl", "uws", "atn", "as", "jsx", "erb", "class", "scala", "jsee", "inc", "pm", "asp", "vb", "vbs", "module", "obj", "patch", "lua", "xcodeproj", "vcproj"]
                },
                php: {
                    key: 16,
                    list: ["php", "ctp", "twig", "phtml"]
                },
                java: {
                    key: 17,
                    list: ["java", "jar", "jsp", "war"]
                },
                csv: {
                    key: 18,
                    list: ["csv"]
                },
                data: {
                    key: 19,
                    list: ["dat", "sdf", "tsv", "mdb", "fp7", "db", "accdb", "mwb", "tbl", "sqlite", "sql", "idm", "bak",
                        "tab", "dump", "db9", "data", "dic", "cap", "backup", "fwa", "fwb", "kb4", "kb5", "kb6", "kb7", "kb11", "kb12", "enex"
                    ]
                },
                mindmap: {
                    key: 20,
                    list: ["mmap", "xmind", "mm", "xmmap", "mindnode", "mind"]
                },
                android: {
                    key: 21,
                    list: ["apk"]
                },
                iosapp: {
                    key: 22,
                    list: ["ipa"]
                },
                mail: {
                    key: 23,
                    list: ["eml", "msg", "vcf"]
                },
                setting: {
                    key: 24,
                    list: ["mobileprovision", "ini", "htaccess", "conf", "yml", "yaml", "reg", "properties", "plist", "config", "cfg", "cnf", "inf", "mobileconfig", "manifest", "emacs", "ste"]
                },
                security: {
                    key: 25,
                    list: ["pem", "p12", "ppk", "cer", "csr", "crt",
                        "certsigningrequest"
                    ]
                },
                "package": {
                    key: 26,
                    list: ["dmg", "air", "msi", "unitypackage", "mxp", "xpi", "iso", "pkg"]
                },
                drawing: {
                    key: 27,
                    list: ["vsd", "vdx", "jww", "dxf", "dwg", "atc", "vwx", "mpp", "dwt", "stl", "jwc"]
                },
                archive: {
                    key: 28,
                    list: ["zip", "lzh", "rar", "gz", "7z", "tgz", "tar", "cab", "sit", "egg", "alzip"]
                }
            },
            b;
        for (b in a) {
            var d = a[b],
                e = d.key,
                d = d.list;
            k[e] = b;
            for (var f = d.length; f--;) j[d[f]] = e
        }
    };
    a.openFileList = function(b) {
        d || a.prepareFileList();
        d.open($C("#_chatFileAll"), b)
    };
    var g = null;
    a.openPreviewDialog = function(b) {
        if (!a.model.file_id2file_dat[b]) return CW.alert(L.file_not_found), !1;
        g || (g = $("#_filePreviewDialog").cwDialog({
            autoOpen: !1,
            width: 700,
            height: 500,
            modal: !0,
            buttonLabels: [L.file_preview_download, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(a) {
                switch (a) {
                    case 0:
                        $("#_downloadFrame").attr("src", "gateway.php?cmd=download_file&bin=1&file_id=" + this.data.file_id)
                }
            },
            open: function(a) {
                var b = SERVER_PATH + "/gateway.php?cmd=download_file&bin=1&preview=1&file_id=" + a;
                this.data.file_id = a;
                this.$el.html('<div class="filePreviewDialogArea"><div id="_filePreviewLoading" class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" />' +
                    L.file_loading + '</div><div class="filePreviewImage"><img id="_filePreviewImage" style="visibility:hidden" src="' + b + '"/><div class="filePreviewBlank"><span class="icoFontLinkBlank"></span><span class="icoTextHide">' + L.file_preview_open_newwindow + "<span></div></div></div>");
                var d = $("#_filePreviewImage");
                d.load(function() {
                    $("#_filePreviewLoading").hide();
                    var a = d.width(),
                        e = d.height(),
                        f = a,
                        g = !1;
                    a > 1200 && (e *= 1200 / f, f = 1200, g = !0);
                    e > 600 && (f *= 600 / e, e = 600, g = !0);
                    a = {
                        visibility: "visible"
                    };
                    if (g) a.width = round(f), a.height =
                        round(e);
                    d.css(a);
                    d.click(function() {
                        window.open(b)
                    });
                    d.nextAll(".filePreviewBlank").click(function() {
                        window.open(b)
                    })
                })
            }
        }));
        g.setOption({
            title: a.model.file_id2file_dat[b].fn
        });
        g.open(b)
    };
    a.buildByFileId = function(b) {
        file_id_list = typeof b != "object" ? [b] : b;
        var e = b = !1,
            f;
        for (f in file_id_list) {
            var g = FL.file_id2file_dat[file_id_list[f]];
            RM && RM.id == g.rid && (b = !0);
            g.aid == AC.myid && (e = !0)
        }
        b && RM.filelist.build();
        e && (a.buildFileWindow(), d && d.isOpen() && d.build())
    };
    a.buildFileWindow = function(b) {
        if (l && l.isOpen()) {
            $.extend({
                    resetPager: !0
                },
                b).resetPager && (u = 0);
            if (!a.model.myfile_load_flag.loaded) return $("#_fileWindowList").html('<li class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" alt="Loading" />' + L.file_loading + "</li>"), FL.loadAllMyFile(), !1;
            n.disable();
            var b = a.model.getMyFileList(),
                d = [];
            if (m)
                for (var e = m.toLowerCase(), f = 0, g = b.length; f < g; f++) {
                    var h = b[f],
                        i = FL.file_id2file_dat[h];
                    i.fn && i.fn.toLowerCase().indexOf(e) != -1 && d.push(h)
                } else d = b;
            FL.sortFileList(d);
            b = [];
            i = d.length;
            o = parseInt(i / r, 10);
            i % r !==
                0 && o++;
            if (i >= r) {
                e = u * r;
                f = e + r;
                f > i && (f = i);
                for (i = e; i < f; i++) b.push(d[i])
            } else b = d;
            b.length > 0 && n.enable();
            d = $C("#_fileWindowCheckAll").cwCheckBox();
            f = $C("#_fileWindowDeleteButton").cwButton();
            (i = count(w)) ? (i == b.length ? d.check() : d.partialCheck(), f.enable()) : (d.unCheck(), f.disable());
            g = $C("#_fileDetailArea").attr("data-file-id");
            d = !1;
            h = "";
            f = 0;
            for (e = b.length; f < e; f++) i = FL.file_id2file_dat[b[f]], g == i.id && (d = !0), h += a.getFilePanel(i, {
                type: "filewindow"
            });
            h || (b = "", b = m ? L.file_search_not_found : L.file_nothing, h = '<li class="emptyAdminContent"><img src="./imagenew/common/empty/img_file_empty.png" alt="" /><p>' +
                b + "</p></li>");
            $C("#_fileWindowList").html(h);
            d || $C("#_fileDetailClose").click();
            e == 0 ? ($C("#_emptyFileContent").show(), $C("#_fileWindowPagerIndex").text("")) : ($C("#_emptyFileContent").hide(), $C("#_fileWindowPagerIndex").text((u + 1).toString() + " / " + o));
            v.enableButtonAll();
            u == 0 && v.disableButton(0).disableButton(1);
            o - u <= 1 && v.disableButton(2).disableButton(3);
            a.buildStorageInfo()
        }
    };
    a.isImage = function(a) {
        if (a == "gif" || a == "jpg" || a == "jpeg" || a == "png") return !0;
        return !1
    };
    a.isText = function(a) {
        switch (a) {
            case "txt":
            case "css":
            case "html":
            case "htm":
            case "shtml":
            case "asp":
            case "bashrc":
            case "c":
            case "cgi":
            case "cpp":
            case "dif":
            case "h":
            case "java":
            case "js":
            case "less":
            case "scss":
            case "styl":
            case "stylus":
            case "jsee":
            case "json":
            case "jsp":
            case "m":
            case "manifest":
            case "mobileprovision":
            case "plist":
            case "mxml":
            case "php":
            case "pl":
            case "pm":
            case "py":
            case "rb":
            case "tpl":
            case "vbs":
            case "csv":
            case "slk":
            case "sql":
            case "tsv":
            case "def":
            case "inf":
            case "ini":
            case "reg":
            case "log":
                return !0
        }
        return !1
    };
    var l = null,
        m = "",
        n = null,
        o = 0,
        u = 0,
        r = TM.taskwindow_pager_view_num,
        v = null,
        w = {};
    a.prepareFileWindow = function() {
        l = $("#_fileWindow").cwFloatWindow({
            title: L.menu_file
        });
        $("#_fileWindowSearch").cwSearchBox({
            update: function() {
                m = this.getVal();
                w = {};
                a.buildFileWindow()
            }
        });
        var b = $C("#_fileWindowDeleteButton");
        b.cwMessageTip({
            message: L.file_delete_hint,
            delay: TM.messagetip_delay
        });
        var d = !1,
            e = b.cwButton({
                click: function() {
                    var b = [],
                        e;
                    for (e in w) b.push(e);
                    CW.view.confirmDelete(L.file_multi_confirm_delete.replace(/%%num%%/,
                        b.length), function() {
                        CW.showProgress(L.deleting);
                        d || (d = setTimeout(function() {
                            d = !1
                        }, 5E3), FL.deleteFile(b, function() {
                            d = clearTimeout(d);
                            CW.hideProgress();
                            a.buildFileWindow();
                            w = {}
                        }, function() {
                            d = clearTimeout(d);
                            CW.hideProgress();
                            CW.alert(error_message);
                            a.buildFileWindow()
                        }))
                    })
                },
                disable: function() {
                    this.$el.cwMessageTip().disable()
                },
                enable: function() {
                    this.$el.cwMessageTip().enable()
                }
            });
        $("#_fileWindowList").on("click", "li", function() {
            $C("#_fileWindowList").find("li").removeClass("adminDetailSelected");
            var b =
                $(this);
            b.addClass("adminDetailSelected");
            b = b.attr("data-file-id");
            a.buildFileDetail(b)
        }).on("mouseenter", "._fileList", function() {
            $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                message: function(a) {
                    a = a.attr("data-file-id");
                    return FL.file_id2file_dat[a].fn
                },
                delayQuickMode: !1,
                delay: 1E3
            }).open()
        }).on("cwCheckBox_update", function(a, b, d) {
            b ? w[d] = b : w[d] && delete w[d];
            a = $C("#_fileWindowCheckAll").cwCheckBox();
            b = $C("#_fileWindowList").find("._fileList").length;
            (d = count(w)) ? (d == b ? a.check() : a.partialCheck(),
                e.enable()) : (a.unCheck(), e.disable())
        });
        $("#_fileDetailClose").click(function() {
            $C("#_fileWindowList").find("._fileList").removeClass("taskDetailSelected");
            $C("#_fileDetailArea").attr("data-file-id", "").hide();
            $C("#_fileDetailBlankArea").show()
        });
        $C("#_fileDetailTitle").click(function() {
            var a = $C("#_fileDetailArea").attr("data-file-id"),
                a = $C("#_fileWindowList").find("li._fileList[data-file-id=" + a + "]");
            $C("#_fileWindowBox").scrollTo(a, 600)
        });
        n = $("#_fileWindowCheckAllButton").cwButton({
            click: function() {
                $C("#_fileWindowCheckAll").cwCheckBox().toggle()
            },
            disable: function() {
                $C("#_fileWindowCheckAll").cwCheckBox().disable()
            },
            enable: function() {
                $C("#_fileWindowCheckAll").cwCheckBox().enable()
            }
        });
        $C("#_fileWindowCheckAll").cwCheckBox({
            update: function(a, b, d) {
                d || (this.isChecked() ? $C("#_fileWindowList").find("._cwCBUnchecked").each(function() {
                    $(this).cwCheckBox().check()
                }) : $C("#_fileWindowList").find("._cwCBChecked").each(function() {
                    $(this).cwCheckBox().unCheck()
                }))
            }
        });
        var f = ["first", "prev", "next", "last"];
        v = $("#_fileWindowPager").cwButtonBar({
            update: function(b) {
                switch (f[b]) {
                    case "first":
                        u =
                            0;
                        break;
                    case "prev":
                        u--;
                        u < 0 && (u = 0);
                        break;
                    case "next":
                        u++;
                        u >= o && (u = o - 1);
                        break;
                    case "last":
                        u = o - 1
                }
                w = {};
                a.buildFileWindow({
                    resetPager: !1
                });
                $C("#_fileWindowBox").scrollTop(0)
            }
        });
        $("#_storageAddButton").click(function() {
            l.close();
            CW.view.showOptionPlanPrice();
            return !1
        })
    };
    a.openFileWindow = function() {
        l || a.prepareFileWindow();
        l.open();
        a.buildFileWindow()
    };
    a.getFilePanel = function(b, d) {
        html = "";
        if (b === !1) html = '<div class="_delete">' + L.file_not_found + "</div>";
        else if (b.st != "deleted") {
            var e = get_file_extension(b.fn);
            if (d.type == "filewindow") {
                var f = !1;
                w[b.id] && (f = !0);
                html = '<li class="_fileList" data-file-id="' + b.id + '">' + $.cwCheckBox.create(f, "", b.id) + a.getFileTypeIcon(e) + '<p class="fileAllListName">' + escape_html(b.fn) + '</p><p class="fileAllListSize">' + bytename(b.fz) + '</p><div class="fileAllListButtonArea btnGroup"><div class="_downloadFile _showDescription button" data-file-id="' + b.id + '" aria-label="' + L.file_download_hint + '"><span class="icoFontActionDownload "></span></div><div class="_moveFile _showDescription button" data-file-id="' +
                    b.id + '" aria-label="' + L.jump_to_addpoint + '"><span class="icoFontActionMove "></span></div><div class="_editFile _showDescription button" data-file-id="' + b.id + '" aria-label="' + L.file_rename_hint + '"><span class="icoFontActionEdit"></span></div><div class="_deleteFile _showDescription button" data-file-id="' + b.id + '" aria-label="' + L.file_delete_hint + '"><span class="icoFontActionDelete"></span></div></div></li>'
            } else d.type == "filelist" && (e = get_file_extension(b.fn), f = b.aid == AC.myid ? '<div class="_editFile _showDescription button" data-file-id="' +
                b.id + '" aria-label="' + L.file_rename_hint + '"><span class="icoFontActionEdit"></span></div><div class="_deleteFile _showDescription button" data-file-id="' + b.id + '" aria-label="' + L.file_delete_hint + '"><span class="icoFontActionDelete"></span></div>' : "", html = '<div class="fileContent">' + a.getFileTypeIcon(e) + '<p class="_fileName fileName">' + escape_html(b.fn) + '</p><div class="fileBtnArea btnGroup"><div class="_downloadFile _showDescription button" data-file-id="' + b.id + '" aria-label="' + L.file_download_hint +
                '"><span class="icoFontActionDownload"></span></div><div class="_moveFile _showDescription button" data-file-id="' + b.id + '" aria-label="' + L.jump_to_addpoint + '"><span class="icoFontActionMove "></span></div>' + f + "</div></div>")
        }
        return html
    };
    a.getFileTypeIcon = function(b) {
        j == null && a.prepareFileType();
        return '<div class="fileIconArea ' + (j[b] != void 0 ? "ico35" + ucfirst(k[j[b]]) : "ico35UnknownFile") + '"></div>'
    };
    a.enableFileArea = function() {
        $C("#_file").show();
        $("#_chatFileAll").show()
    };
    a.disableFileArea = function() {
        $C("#_file").hide()
    };
    var A = {},
        x;
    a.last_storage = A;
    a.updateStorageInfo = function(b, d, f, g) {
        var h = Math.floor(b.total / d * 100);
        if (h >= 100) {
            if (g != void 0) var i = {
                linktext: L.storage_limit_warning_message,
                subject: L.storage_limit_warning_title,
                body: L.storage_limit_warning_body,
                linkClick: function(a) {
                    CW.view.showStorageCautionDialog({
                        title: a.subject,
                        body: a.body
                    })
                }
            };
            else var n = L.storage_limit_notice_footer,
                n = n.replace(/%%date%%/, CW.getDate(f, ST.data.dateformat)),
                i = {
                    linktext: L.storage_limit_notice_message,
                    subject: L.storage_limit_notice_title,
                    body: L.storage_limit_notice_body,
                    linkClick: function(a) {
                        CW.view.showStorageCautionDialog({
                            title: a.subject,
                            body: a.body,
                            footer: '<span class="textDanger">' + n + "</span>"
                        })
                    }
                };
            x = CW.view.saveInformation(x, i)
        } else h < 100 && e && (CW.view.deleteInformation(e), e = void 0);
        h >= 90 ? ($C("#_myFileNotice").show(), $C("#_storageTotalUsageRatioText").addClass("noticeStorage")) : ($C("#_myFileNotice").hide(), $C("#_storageTotalUsageRatioText").removeClass("noticeStorage"));
        if (d != void 0) A.storage = b, A.storage_limit = d, A.limit_time =
            f, A.is_limit = g, l && l.isOpen() && a.buildStorageInfo()
    };
    a.buildStorageInfo = function() {
        var a = A.storage,
            b = A.storage_limit,
            d = bytename(b, "B", 1),
            e = "";
        unim = ["", "K", "M", "G", "T", "P"];
        for (var f in unim) d.indexOf(unim[f]) != -1 && (e = unim[f]);
        $("#_storageTotalCapacity").text(d);
        d = "";
        a.total != void 0 && (d = bytename(a.total, "B", 2, e));
        $("#_storageTotalUsage").text(d);
        e = d = 0;
        f = "";
        a.file != void 0 && (e = Math.round(a.file / b * 100), d += e, f = bytename(a.file));
        $("#_storageUsageFileSize").text(f);
        f = 0;
        var g = "";
        a.chat != void 0 && (f = Math.round(a.chat /
            b * 100), d += f, g = bytename(a.chat));
        $("#_storageUsageMessageSize").text(g);
        var g = 0,
            h = "";
        a.other != void 0 && (g = Math.round(a.other / b * 100), d += g, h = bytename(a.other));
        $("#_storageUsageOtherSize").text(h);
        d > 100 && (f = Math.round(f / d * 100), e = Math.round(e / d * 100), g = Math.round(g / d * 100), d = f + e + g);
        h = parseInt(a.file, 10) + parseInt(a.chat, 10) + parseInt(a.other, 10);
        h = Math.floor(h / parseInt(b, 10) * 100);
        if (h >= 100 && d != 100 && h > d) switch (d = [f, e, g], ["chat", "file", "other"][d.indexOf(Math.max.apply(null, d))]) {
            case "chat":
                f++;
                break;
            case "file":
                e++;
                break;
            case "other":
                g++
        }
        $("#_storageUsageMessage").css("width", f + "%");
        $("#_storageUsageFile").css("width", e + "%");
        $("#_storageUsageOther").css("width", g + "%");
        e = "";
        a.total != void 0 && b != void 0 && (e = Math.floor(a.total / b * 100));
        $("#_storageTotalUsageRatio").text(e);
        CW.is_business && !CW.is_admin && $C("#_storageAddButton").hide();
        CW.is_business && CW.is_admin && $("#_storageUserAdminLink").show()
    };
    a.buildAllMyFile = function() {
        a.buildFileWindow()
    }
}

function TaskView(b) {
    var a = this;
    a.model = b;
    a.alltask_status = "open";
    a.alltask_type = "my";
    a.alltask_filter = "all";
    a.prepare = function() {
        $("#_openTaskWindow").click(function() {
            a.openTaskWindow()
        });
        var b = null,
            d = null;
        $C("#_wrapper").on("mouseenter", "._moveTask", function() {
            $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                message: L.jump_to_addpoint,
                delay: TM.messagetip_delay
            }).open()
        }).on("click", "._moveTask", function() {
            var b = $(this).closest("._taskList").attr("data-task-id"),
                b = a.model.task_id2task_dat[b];
            RL.selectRoom(b.rid, b.cid)
        }).on("mouseenter", "._editTask", function() {
            $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                message: L.task_edit_hint,
                delay: TM.messagetip_delay
            }).open()
        }).on("click", "._editTask", function() {
            var e = $(this).closest("._taskList").attr("data-task-id");
            $("#_taskEditIncharge");
            var f = $("#_taskEditContent"),
                g = $("#_taskEditLimit").cwDatePicker(),
                h = a.model.task_id2task_dat[e];
            if (h == void 0) return CW.alert(L.task_not_found), !1;
            b == null && (g.setOption({
                    dateLabel: $("#_taskEditLimitLabel")
                }),
                b = $C("#_taskEditList").cwListTip({
                    search: !0,
                    placeHolder: L.chatroom_search_member,
                    useHtmlLabel: !0,
                    multiSelect: !1,
                    select: function() {
                        this.close()
                    },
                    update: function() {
                        var a = this.getVal(),
                            a = '<div class="assignContent assignMember"><span class="_taskAssignMemberLabel assignContentText assignContentTextEdit" data-aid="' + a + '">' + CW.getName(a) + "</span></div>";
                        $C("#_taskEditIncharge").html(a)
                    }
                }), $C("#_taskEditIncharge").on("click", "._taskAssignMemberLabel", function() {
                    b.open($(this))
                }), d = $("#_taskEditDialog").cwDialog({
                    title: L.task_edit_title,
                    width: 480,
                    height: "auto",
                    buttonLabels: [L.button_save_long, L.button_cancel],
                    buttonSubmit: 0,
                    buttonCancel: 1,
                    buttonClick: function(a) {
                        switch (a) {
                            case 0:
                                var d = [];
                                (a = f.val()) || d.push(L.task_error_empty);
                                if (d.length) {
                                    CW.alert(d.join("\n"));
                                    break
                                }
                                d = g.getVal();
                                CS.editTask(this.data.task_id, b.getVal(), a, d);
                                this.close()
                        }
                    },
                    open: function(a) {
                        this.data.task_id = a
                    }
                }));
            b.setOption({
                list: RS.view.getTaskMemberList(h.rid)
            }).select(h.aid);
            f.val(h.tn);
            g.setVal(h.lt ? CW.getDate(h.lt, ST.data.dateformat) : "");
            d.open(e)
        }).on("mouseenter",
            "._deleteTask",
            function() {
                $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                    message: L.task_delete_hint,
                    delay: TM.messagetip_delay
                }).open()
            }).on("click", "._deleteTask", function() {
            var b = $(this).closest("._taskList").attr("data-task-id");
            CW.view.confirmDelete(L.task_confirm_delete, function() {
                a.model.deleteTask(b)
            })
        }).on("click", "._taskCheck", function() {
            if (!CW.isLogin()) return CW.alert(L.error_no_login_action), !1;
            var b = $(this),
                d = b.attr("data-task-status");
            a.submitTask(b.closest("._taskList"), d);
            return !1
        })
    };
    a.submitTask = function(b, d) {
        var e = b.attr("data-task-id"),
            f;
        switch (d) {
            case "open":
                f = 0;
                break;
            case "done":
                f = 1;
                break;
            default:
                return
        }
        b[0].tagName == "TR" ? (b.children().fadeOut(500), setTimeout(function() {
            a.model.checkTask(e, f)
        }, 500)) : b.removeClass("subContentShadow").fadeOut(500, function() {
            a.model.checkTask(e, f)
        })
    };
    var e = null,
        d = 0,
        f = 0,
        i = TM.taskwindow_pager_view_num,
        h = null;
    a.prepareTaskWindow = function() {
        $("#_taskWindowTabOpen").click(function() {
            if (a.alltask_status != "open") $("#_taskWindowTabDone").removeClass("floatTabSelect"),
                $(this).addClass("floatTabSelect"), a.alltask_status = "open", a.buildTaskWindow()
        });
        $("#_taskWindowTabDone").click(function() {
            if (a.alltask_status != "done") $("#_taskWindowTabOpen").removeClass("floatTabSelect"), $(this).addClass("floatTabSelect"), a.alltask_status = "done", a.buildTaskWindow()
        });
        $C("#_taskWindowList").on("click", "._taskList", function() {
            $C("#_taskWindowList").find("._taskList").removeClass("adminDetailSelected");
            var b = $(this);
            b.addClass("adminDetailSelected");
            a.buildTaskDetail(b.attr("data-task-id"))
        });
        $("#_taskDetailClose").click(function() {
            $C("#_taskWindowList").find("._taskList").removeClass("adminDetailSelected");
            $C("#_taskDetailArea").attr("data-task-id", "").hide();
            $C("#_taskDetailBlankArea").show()
        });
        var b = ["my", "assign"];
        $("#_taskWindowViewType").cwTabbedBar({
            descriptionDelay: 0,
            update: function(d) {
                a.alltask_type = b[d];
                a.buildTaskWindow()
            }
        });
        e = $("#_taskWindow").cwFloatWindow({
            title: L.menu_mytask
        });
        $C("#_taskDetailTitle").click(function() {
            var a = $C("#_taskDetailArea").attr("data-task-id"),
                a = $C("#_taskWindowList").find("li._taskList[data-task-id=" +
                    a + "]");
            $C("#_taskWindowBox").scrollTo(a, 600)
        });
        var g = ["all", "limitover", "today", "inweek", "nolimit"];
        $("#_taskWindowFilter").cwTabbedBar({
            update: function(b) {
                a.alltask_filter = g[b];
                f = d = 0;
                a.buildTaskWindow()
            }
        });
        var i = ["first", "prev", "next", "last"];
        h = $("#_taskWindowPager").cwButtonBar({
            update: function(b) {
                switch (i[b]) {
                    case "first":
                        f = 0;
                        break;
                    case "prev":
                        f--;
                        f < 0 && (f = 0);
                        break;
                    case "next":
                        f++;
                        f >= d && (f = d - 1);
                        break;
                    case "last":
                        f = d - 1
                }
                a.buildTaskWindow({
                    resetPager: !1
                });
                $C("#_taskWindowBox").scrollTop(0)
            }
        })
    };
    a.openTaskWindow =
        function() {
            e || a.prepareTaskWindow();
            e.open();
            a.buildTaskWindow()
        };
    a.enableTaskArea = function() {
        $C("#_subRoomTaskAddArea").show()
    };
    a.disableTaskArea = function() {
        $C("#_subRoomTaskAddArea").hide()
    };
    a.buildByTaskId = function(b, d) {
        task_id_list = typeof b != "object" ? [b] : b;
        d == void 0 && (d = !1);
        var e = !1,
            f = !1,
            g = {},
            h;
        for (h in task_id_list) {
            var i = TK.task_id2task_dat[task_id_list[h]];
            g[i.rid] = !0;
            RM && RM.id == i.rid && (e = !0);
            if (i.aid == AC.myid || i.bid == AC.myid) f = !0
        }
        if (d) {
            for (var j in g) RL.rooms[j].refreshTaskNum();
            RL.build()
        }
        e &&
            RM.tasklist.build();
        f && a.buildTaskWindow()
    };
    a.buildTaskWindow = function(b) {
        if (e && e.isOpen()) {
            $.extend({
                resetPager: !0
            }, b).resetPager && (f = 0);
            var b = a.alltask_status,
                g = a.alltask_type,
                n = b + g;
            $C("#_emptyTaskContent").hide();
            if (!a.model.mytask_load_flag.loaded[n]) return $C("#_taskWindowList").html('<li class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" />' + L.task_loading + "</li>"), a.model.mytask_load_flag.loading[n] || (a.model.mytask_load_flag.loading[n] = !0, CW.get("gateway.php", {
                cmd: "load_my_task",
                type: g,
                status: b
            }, function(b) {
                if (b.task_dat) {
                    for (var d in b.task_dat) a.model.setTask(b.task_dat[d]);
                    a.model.mytask_load_flag.loading[n] = !1;
                    a.model.mytask_load_flag.loaded[n] = time();
                    a.buildTaskWindow()
                }
            })), !1;
            var j = a.model.getMyTaskList(b, g);
            if (b == "open") {
                $C("#_taskWindowFilter").show();
                for (var k = [], r = time(), v = strtotime(CW.getDate(r, "Y-m-d 00:00:00")), w = v + 86400, A = v + 604800, x = j.length, q = 0, p = 0, t = 0, s = 0, b = x; b--;) {
                    var B = j[b],
                        g = TK.task_id2task_dat[j[b]];
                    g.lt != 0 && g.lt <= r && (q++, a.alltask_filter ==
                        "limitover" && k.push(B));
                    v < g.lt && w > g.lt && (p++, a.alltask_filter == "today" && k.push(B));
                    v < g.lt && A > g.lt && (t++, a.alltask_filter == "inweek" && k.push(B));
                    g.lt == 0 && (s++, a.alltask_filter == "nolimit" && k.push(B));
                    a.alltask_filter == "all" && k.push(B)
                }
                RL.mytask_total > 0 ? $C("#_taskWindowNumAll").text(x).show() : $C("#_taskWindowNumAll").hide();
                q > 0 ? $C("#_taskWindowNumLimitOver").text(q).show() : $C("#_taskWindowNumLimitOver").hide();
                p > 0 ? $C("#_taskWindowNumLimitToday").text(p).show() : $C("#_taskWindowNumLimitToday").hide();
                t >
                    0 ? $C("#_taskWindowNumLimitWeek").text(t).show() : $C("#_taskWindowNumLimitWeek").hide();
                s > 0 ? $C("#_taskWindowNumLimitNone").text(s).show() : $C("#_taskWindowNumLimitNone").hide()
            } else $C("#_taskWindowFilter").hide(), k = j;
            TK.sortTaskList(k);
            j = [];
            g = k.length;
            d = parseInt(g / i, 10);
            g % i !== 0 && d++;
            if (g >= i) {
                r = f * i;
                b = r + i;
                b > g && (b = g);
                for (g = r; g < b; g++) j.push(k[g])
            } else j = k;
            k = $C("#_taskDetailArea").attr("data-task-id");
            r = !1;
            v = "";
            w = j.length;
            for (b = 0; b < w; b++) g = TK.task_id2task_dat[j[b]], (A = RL.rooms[g.rid]) || (A = {
                getIcon: function() {
                    return ""
                },
                getName: function() {
                    return L.chatroom_error_not_found
                }
            }), k == g.id && (r = !0), v += a.getTaskPanel(g, {
                type: "taskwindow"
            });
            $C("#_taskWindowList").html(v);
            r || $C("#_taskDetailClose").click();
            w == 0 && $C("#_emptyTaskContent").show();
            w ? $C("#_taskWindowPagerIndex").text((f + 1).toString() + " / " + d) : $C("#_taskWindowPagerIndex").text("");
            h.enableButtonAll();
            f == 0 && h.disableButton(0).disableButton(1);
            d - f <= 1 && h.disableButton(2).disableButton(3);
            e.resize()
        }
    };
    a.buildTaskDetail = function(b, d) {
        var e = a.model.task_id2task_dat[b];
        if (e.st == a.alltask_status) {
            switch (a.alltask_type) {
                case "my":
                    if (e.aid != AC.myid) return;
                    break;
                case "assign":
                    if (e.bid != AC.myid) return
            }
            var f = $C("#_taskWindowList").find('[data-task-id="' + b + '"]').find("._taskNameContent").text();
            $C("#_taskDetailTitle").text(f);
            $C("#_taskDetailLimit").html(a.getTaskLimit(e, {
                withLabel: !1
            }));
            $C("#_taskDetailAssign").html(a.getTaskAssign(e, {
                withName: !0
            }));
            $C("#_taskDetailAssignBy").html(a.getTaskAssignBy(e, {
                withName: !0
            }));
            $C("#_taskDetailChatName").html(a.getTaskChatName(e, {
                withIcon: !0
            }));
            $C("#_taskDetailBlankArea").hide();
            var f = e.rid,
                e = e.cid,
                g = !1,
                h = "";
            if (RL.rooms[f]) {
                var i = RL.rooms[f],
                    j = !1,
                    k = !1;
                if (!d)
                    if (i.timeline)
                        if (i.timeline.chat_id2chat_dat[e]) {
                            for (var x = 0, f = i.timeline.chat_list.length; x < f; x++) {
                                var q = i.timeline.chat_list[x];
                                if (q.id == e) break
                            }
                            30 > x && i.timeline.has_old && (k = j = !0)
                        } else j = !0;
                else j = !0;
                if (j) d ? h = "<div>" + L.jump_to_addpoint_not_found + "</div>" : (h = '<div class="timeLineLoading"><img src="./imagenew/all/common/loader/img_loader_white.gif" />' + L.chat_loading +
                    "</div>", k ? i.timeline.loadOld(function() {
                        a.buildTaskDetail(b, !0)
                    }) : i.load({
                        jumpTo: e
                    }, function() {
                        i.timeline.loadOld(function() {
                            a.buildTaskDetail(b, !0)
                        })
                    }));
                else {
                    x = j = 0;
                    for (f = i.timeline.chat_list.length; x < f; x++)
                        if (q = i.timeline.chat_list[x], q.id == e) {
                            j = x;
                            break
                        }
                    if (j) {
                        x = 0;
                        j > 30 && (x = j - 30);
                        g = j + 30;
                        for (h = []; x <= g && x < f; x++) h.push(i.timeline.chat_list[x]);
                        h = i.timeline.view.getTimeLine(h, {
                            idPrefix: "taskWindow",
                            selectId: e
                        });
                        g = !0
                    }
                }
            } else h = "<div>" + L.jump_to_addpoint_not_found + "</div>";
            i.timeline.view.renderTimeLine($C("#_taskDetailTimeLine"),
                h);
            $C("#_taskDetailArea").attr("data-task-id", b).show();
            g && (e = $("#taskWindow_messageId" + e), e.length > 0 && $C("#_taskDetailTimeLine").scrollTo(e, 0))
        }
    };
    a.getTaskListRows = function() {};
    a.getTaskPanel = function(b, d) {
        var e = "";
        if (b.st != "deleted") {
            var f = "_task",
                g = "";
            a.isMyTask(b) && (f += " taskMine");
            b.st == "done" && (f += " taskComplete");
            if (d.type == "tasklist") {
                g = '<div class="_moveTask button"><span class="icoFontActionMove"></span><span class="icoTextHide">' + L.jump_to_addpoint + "</span></div>";
                if (b.aid == AC.myid || b.bid ==
                    AC.myid) g += '<div class="_editTask button"><span class="icoFontActionEdit"></span><span class="icoTextHide">' + L.task_edit_hint + '</span></div><div class="_deleteTask button"><span class="icoFontActionDelete"></span><span class="icoTextHide">' + L.task_delete_hint + "</span></div>";
                e = '<li class="_taskList subContentSection subContentShadow ' + f + '" data-task-id="' + b.id + '" data-type="list"><div id="_taskContent" class="subContentAreaInner"><div class="clearfix"><div class="completeCheckboxArea">' + a.getTaskButton(b) +
                    "</div>" + a.getTaskName(b) + '</div><div class="taskMetaArea">' + a.getTaskAssign(b) + a.getTaskLimit(b) + '</div></div><div class="btnGroup">' + g + "</div></li>"
            } else if (d.type == "preview") e = '<div class="deleteTask ' + f + '">' + a.getTaskName(b) + '<div class="deleteTaskMeta">' + a.getTaskAssign(b) + a.getTaskLimit(b) + "</div></div>";
            else if (d.type == "taskwindow") {
                g = '<div class="_moveTask button"><span class="icoFontActionMove"></span><span class="icoTextHide">' + L.jump_to_addpoint + "</span></div>";
                if (b.aid == AC.myid || b.bid ==
                    AC.myid) g += '<div class="_editTask button"><span class="icoFontActionEdit"></span><span class="icoTextHide">' + L.task_edit_hint + '</span></div><div class="_deleteTask button"><span class="icoFontActionDelete"></span><span class="icoTextHide">' + L.task_delete_hint + "</span></div>";
                e = '<li class="_taskList subContentSection subContentShadow" data-task-id="' + b.id + '"><div class="subContentAreaInner"><div class="clearfix"><div class="completeCheckboxArea">' + a.getTaskButton(b) + "</div>" + a.getTaskName(b) + '</div><div class="taskMetaArea">' +
                    a.getTaskAssign(b) + a.getTaskLimit(b) + '</div></div><div class="btnGroup">' + g + "</div></li>"
            } else d.type == "timeline" && (b.lt && (g = "<span>" + a.getTaskLimit(b, {
                icon: !0
            }) + "</span>"), e = "", b.st == "done" && !RM.timeline.view.task_showmore_flag[d.mid] && (f += " _taskCompleteHide", e += " _taskBody taskBodyHide"), e = '<div class="chatInfoTaskArea ' + f + '"><div class="chatInfoTaskMetaArea ' + f + '"><div>' + a.getTaskAssign(b) + g + '</div></div><div class="chatInfoTaskContentArea' + e + '">')
        } else e = '<div class="_delete chatInfoTaskArea">' +
            L.task_deleted + "</div>";
        return e
    };
    a.isMyTask = function(a) {
        if (a.aid.indexOf && a.aid.indexOf(",") != -1)
            for (var b in a.aid = a.aid.split(","), a.aid) {
                if (a.aid[b] == AC.myid) return !0
            } else if (a.aid == AC.myid) return !0;
        return !1
    };
    a.getTaskName = function(a) {
        return '<pre class="_taskName taskName"><div class="_taskNameContent">' + CW.renderMessage(a.tn) + "</div></pre>"
    };
    var j = {
        withIcon: !1
    };
    a.getTaskChatName = function(a, b) {
        b == void 0 && (b = j);
        var d = "";
        b.withIcon && (d = RL.rooms[a.rid].getIcon());
        return d + CW.getRoomName(a.rid)
    };
    var k = {
            withName: !1
        },
        g = TM.timeline_assign_member_show_max;
    a.getTaskAssign = function(a, b) {
        b == void 0 && (b = k);
        var d = "",
            e = [];
        if ($.isArray(a.aid)) {
            RM.sortMember(a.aid);
            for (var f = 0, h = a.aid.length; f < h; f++) {
                var i = a.aid[f];
                f < g ? d += CW.getAvatarPanel(i, {
                    size: "tiny"
                }) : e.push(i)
            }
        } else d += CW.getAvatarPanel(a.aid, {
            size: "tiny"
        });
        b.withName && (d += CW.getName(a.aid));
        e.length > 0 && (d += '<a class="_showMoreMemberTask showMoreMember" data-aid-list="' + a.aid.join(",") + '">' + L.chatroom_member_rest_number.replace(/%%rest_number%%/,
            e.length) + "</a>");
        return d
    };
    a.getTaskAssignBy = function(a, b) {
        b == void 0 && (b = k);
        var d = "";
        if (typeof a.bid == "object")
            for (var e in a.bid) d += CW.getAvatarPanel(a.bid[e], {
                size: "tiny"
            });
        else d += CW.getAvatarPanel(a.bid, {
            size: "tiny",
            clicktip: !1,
            hovertip: !1
        });
        b.withName && (d += CW.getName(a.bid));
        return d
    };
    a.getTaskLimit = function(a, b) {
        var d = time(),
            e = !1,
            f = "",
            g = "",
            b = $.extend(!0, {
                withLabel: !0
            }, b),
            f = '<div class="taskDateLimit">';
        if (a.lt && (b.withLabel && (f += L.task_limittip), g = CW.getDate(a.lt, ST.data.dateformat), a.st ==
                "open" && (a.lt <= d || g == CW.getDate(d, ST.data.dateformat)))) e = !0;
        return e ? f + '<time class="limitedOver">' + g + "</time></div>" : f + "<time>" + g + "</time></div>"
    };
    a.getTaskButton = function(a) {
        if (a.aid == AC.myid || a.bid == AC.myid) return a.st == "done" ? '<div class="_taskCheck button" data-task-id="' + a.id + '" data-task-status="open"><span class="_checkTaskLabel completeText">' + L.button_incomplete + "</span></div>" : '<div class="_taskCheck button btnPrimary" data-task-id="' + a.id + '" data-task-status="done"><span class="_checkTaskLabel completeText">' +
            L.button_complete + "</span></div>";
        return ""
    }
}

function RoomListView(b) {
    var a = this;
    a.model = b;
    a.last_sumnum_key = "";
    a.is_folded = !1;
    a.room_show_limit = 80;
    var e = null,
        d = null,
        f = null;
    a.prepare = function() {
        var b = $.cookie("ui_chatlist_width");
        b !== void 0 && a.resizeWidth(b);
        var h = 0;
        $.cwResize.setHandle($("#_subContentHandle"), {
            type: "col",
            start: function() {
                h = $C("#_sideContent").width()
            },
            move: function(b) {
                a.resizeWidth(h + b)
            }
        });
        $C("#_roomTitle").on("click", "._roomTitleText", function() {
            a.scrollToRoom(RM.id, 600)
        });
        $C("#_wrapper").on("click", "._pin", function() {
            var b =
                this.className.match(/_pinRid([0-9]+)/);
            if (!b) return !1;
            var b = b[1],
                d = $(this);
            d.hasClass("ico19PinOff") ? (d.removeClass("ico19PinOff"), d.addClass("ico19PinOn"), stick_on = 1) : (d.addClass("ico19PinOff"), d.removeClass("ico19PinOn"), stick_on = 0);
            a.model.rooms[b].sticky = stick_on;
            CW.post("gateway.php", {
                cmd: "stick_room",
                room_id: b,
                stick: stick_on
            }, function() {
                typeof end_callback == "function" && end_callback()
            });
            a.model.build();
            RM.build();
            return !1
        }).on("mouseover", "._pin", function() {
            var a = $(this);
            a.hasClass("ico19PinOn") ||
                a.addClass("ico19PinHover")
        }).on("mouseout", "._pin", function() {
            $(this).removeClass("ico19PinHover")
        });
        $("#_addButton").cwDropDown({
            showPosition: "left",
            list: [{
                value: "addchat",
                label: L.chatroom_create_title
            }, {
                value: "addcontact",
                label: L.contact_add
            }],
            select: function(a) {
                switch (a) {
                    case "addchat":
                        RD.view.openAddRoomDialog();
                        break;
                    case "addcontact":
                        AC.view.reachedContactLimit() ? CW.view.showContactLimitErrorDialog() : (AC.view.tab_type = "addcontact", AC.view.openContactWindow())
                }
            }
        });
        $("#_sideContentTitleText").click(function() {
            RL.selectCategory("all");
            g.deselectAll();
            RL.build()
        });
        $("#_sideChatMoveMyChat").click(function() {
            RL.selectRoom(AC.getRoomId(AC.myid))
        }).cwMessageTip({
            message: L.menu_mychat_hint,
            delay: TM.messagetip_delay
        });
        var g = $("#_chatFilterList").cwTabbedBar({
            toggleMode: !0,
            update: function(a, b) {
                if (b) switch (a) {
                    case 0:
                        $.cookie("ui_roomfilter", "0", {
                            expires: 3650
                        });
                        RL.setReadOnly(!0);
                        RL.setToOnly(!1);
                        RL.setTaskOnly(!1);
                        break;
                    case 1:
                        $.cookie("ui_roomfilter", "1", {
                            expires: 3650
                        });
                        RL.setReadOnly(!1);
                        RL.setToOnly(!0);
                        RL.setTaskOnly(!1);
                        break;
                    case 2:
                        $.cookie("ui_roomfilter",
                            "2", {
                                expires: 3650
                            }), RL.setReadOnly(!1), RL.setToOnly(!1), RL.setTaskOnly(!0), $C("#_chatTabTask").click()
                } else $.removeCookie("ui_roomfilter"), RL.setReadOnly(!1), RL.setToOnly(!1), RL.setTaskOnly(!1);
                RL.build()
            }
        });
        g.$el.show();
        e = $("#_chatUnreadStatus");
        d = $("#_chatToUnreadStatus");
        f = $("#_chatTaskStatus");
        $C("#_wrapper").on("click", "._roomLink", function() {
            var a = $(this),
                b = 0,
                d = 0;
            if (this.tagName.toLowerCase() == "a") {
                var e = a.prop("href").match(/#(?:!|%21)rid(\d+)(?:-(\d+))?$/);
                e && (b = e[1], e[2] && (d = e[2]))
            }
            b || ((e =
                a.attr("data-rid")) && (b = e), (a = a.attr("data-mid")) && (d = a));
            RL.selectRoom(b, d)
        });
        $C("#_wrapper").on("click", "a._groupchatLink", function() {
            var a = $(this).attr("data-linkcode");
            a && RD.view.joinGroupchat(a)
        });
        $C("#_roomListItems").on("mouseover", "._room", function() {
            $(this).children(".chatListUnread").addClass("chatListUnreadHover")
        }).on("mouseout", "._room", function() {
            $(this).children(".chatListUnread").removeClass("chatListUnreadHover")
        }).on("click", "#_roomMore", function() {
            a.room_show_limit += 80;
            a.model.build()
        });
        a.prepareCategory();
        $.cookie("ui_fold_roomlist") === "1" && a.toggleFold();
        $.cookie("ui_roomfilter") != void 0 && g.select($.cookie("ui_roomfilter"));
        CW.view.onPostLoad(function() {
            $.cookie("ui_category") != void 0 && a.model.selectCategory($.cookie("ui_category"))
        });
        (function() {
            var b = function() {
                    var a = parseInt(RL.getFocusedRoomId(), 10);
                    a && $.inArray(a.toString(), RL.filtered_room_list) == -1 && (a = 0);
                    return a
                },
                d = function(b) {
                    b == 0 ? a.model.focusRoom(a.model.filtered_room_list[0]) : (b = $.inArray(b.toString(), a.model.filtered_room_list),
                        b > 0 ? a.model.focusRoom(a.model.filtered_room_list[b - 1]) : a.model.focusRoom(a.model.filtered_room_list[0]))
                },
                e = function(b) {
                    if (b == 0) a.model.focusRoom(a.model.filtered_room_list[0]);
                    else {
                        var d = a.model.filtered_room_list.length,
                            b = $.inArray(b.toString(), a.model.filtered_room_list);
                        b + 1 == d ? a.model.focusRoom(a.model.filtered_room_list[b]) : a.model.focusRoom(a.model.filtered_room_list[b + 1])
                    }
                };
            CW.view.registerKeyboardShortcut(75, !1, !1, !1, !1, function() {
                d(b())
            }).registerKeyboardShortcut(38, !1, !1, !1, !1, function() {
                d(b())
            }).registerKeyboardShortcut(40, !1, !1, !1, !1, function() {
                e(b())
            }).registerKeyboardShortcut(74, !1, !1, !1, !1, function() {
                e(b())
            }).registerKeyboardShortcut(79, !1, !1, !1, !1, function() {
                a.model.selectRoom(b())
            }).registerKeyboardShortcut(13, !1, !1, !1, !1, function() {
                a.model.selectRoom(b())
            })
        })();
        $("#_roomRequestArea").click(function() {
            RM.view.showRequestDialog()
        })
    };
    a.prepareCategory = function() {
        var b = [],
            d = {},
            e = [],
            f = $("#_newcatRoomlist"),
            h = $("#_chatCategoryList").cwToolTip({
                fixHeight: !0
            });
        $("#_chatCategory").click(function() {
            h.open($(this))
        }).cwMessageTip({
            message: L.chat_category_select,
            delay: TM.messagetip_delay
        });
        $("#_chatCategoryList").on("click", "li._chatCategoryItem", function() {
            var b = $(this).attr("data-cat-id");
            a.model.selectCategory(b);
            h.close()
        }).on("mouseover", ".chatCategoryList li", function() {
            $(this).find("._categoryAction").show()
        }).on("mouseout", ".chatCategoryList li", function() {
            $(this).find("._categoryAction").hide()
        });
        $("#_categoryDisplayCancel").click(function() {
            a.model.selectCategory("all")
        });
        var i = $("#_newcatRoomfilter").cwSearchBox({
                placeholder: L.chat_search,
                update: function() {
                    var a =
                        RL.getSortedRoomList("name"),
                        h = 0,
                        i = "",
                        n = TASK_MAX_RESULTS;
                    b = this.getVal().toLowerCase();
                    e = [];
                    for (var m = 0, o = a.length; m < o; m++) {
                        var u = RL.rooms[a[m]],
                            t = u.getName();
                        if (!(b && t.toLowerCase().indexOf(b) === -1)) {
                            e.push(u.id);
                            if (e.length >= n) break;
                            t = $.cwCheckBox.create(!!d[u.id], "", u.id, {
                                id: "_newcatCheck" + u.id,
                                "class": "_newcatCheck"
                            });
                            i += '<tr class="_newcatRoom _cwSelectableRow"><td class="check">' + t + '</td><td class="_newcatRoom_name"><span class="ui_room_icon">' + u.getIcon() + "</span></td><td>" + CW.getRoomName(u.id) +
                                "</td></tr>"
                        }
                    }
                    i[h++] = "";
                    f.html(i)
                }
            }),
            o = $("#_chatCategoryAddContent").cwDialog({
                width: 650,
                open: function(b) {
                    if (this.data.cat_id = b) {
                        for (var e = a.model.category_dat[b], b = e.name, e = e.list, f = 0, g = e.length; f < g; f++) d[e[f]] = !0;
                        this.setOption({
                            title: L.chat_category_edit + ": " + escape_html(b),
                            buttonLabels: [L.button_save_long, L.button_cancel]
                        })
                    } else this.setOption({
                        title: L.chat_category_create,
                        buttonLabels: [L.button_create_long, L.button_cancel]
                    });
                    $("#_categoryName").val("");
                    $("#_newcatSelectNum").empty();
                    i.setVal("")
                },
                close: function() {
                    b = [];
                    d = {};
                    e = []
                },
                buttonLabels: [L.button_create_long, L.button_cancel],
                buttonSubmit: 0,
                buttonCancel: 1,
                buttonClick: function(b) {
                    if (b === 0) {
                        var b = [],
                            e = $("#_categoryName").val();
                        e || b.push(L.chat_category_error_no_name);
                        var f = [],
                            g;
                        for (g in d) d[g] && f.push(g);
                        f.length || b.push(L.chat_category_error_no_chats);
                        if (b.length) CW.alert(b.join("\n"));
                        else {
                            g = {
                                name: e,
                                r: f
                            };
                            this.data.cat_id ? (g.cmd = "edit_category", g.cat_id = this.data.cat_id) : g.cmd = "add_category";
                            var h = this;
                            CW.postSync("gateway.php", g, function(b) {
                                for (var d in b.cat_dat) a.model.category_dat[d] =
                                    b.cat_dat[d];
                                a.model.buildCategory();
                                a.model.selectCategory(d);
                                h.close()
                            })
                        }
                    }
                }
            });
        $("#_chatCategoryAdd").click(function() {
            o.open();
            h.close()
        });
        var u = function(a, b) {
            var e;
            e = $.isArray(a) ? a : [a];
            for (var f = 0, g = e.length; f < g; f++) {
                var h = e[f],
                    i = $("#_newcatCheck" + h);
                i.length && (i = i.cwCheckBox(), b ? i.check() : i.unCheck());
                d[h] = !!b
            }
            e = 0;
            for (f in d) d[f] && e++;
            e ? $("#_newcatSelectNum").html(e + L.multiselect_label) : $("#_newcatSelectNum").empty()
        };
        $("#_newcatRoomlist").on("cwCheckBox_update", function(a, b, d) {
            u(d, b);
            return !1
        });
        $("#_newcatCheckAll").cwCheckBox({
            update: function() {
                u(e, this.isChecked())
            }
        });
        $("#_chatCategoryList").on("click", "._categoryEdit", function() {
            var b = $(this).closest("li._chatCategoryItem").attr("data-cat-id"),
                d = a.model.category_dat[b].name;
            o.open(b);
            $("#_categoryName").val(d);
            u(a.model.category_dat[b].list, !0)
        }).on("click", "._categoryDelete", function() {
            var b = $(this).parents("li._chatCategoryItem"),
                d = b.data("cat-id"),
                b = b.find("._categoryName").text();
            CW.view.confirmDelete(L.chat_category_confirm_delete.replace(/%%category_name%%/,
                b), function() {
                CW.postSync("gateway.php", {
                    cmd: "delete_category",
                    cat_id: d
                }, function() {
                    a.model.category_dat[d] != void 0 && delete a.model.category_dat[d];
                    a.model.buildCategory()
                })
            })
        })
    };
    a.isFolded = function() {
        return a.is_folded
    };
    var i = !1;
    a.toggleFold = function() {
        if (!i) {
            var b = $("#_mainContent"),
                d = b.css("left"),
                e = $("#_mainContentExpandLeft");
            b.addClass("foldAnimLeft");
            i = !0;
            if (d == "0px") {
                a.is_folded = !1;
                b.css("left", $("#_sideContent").outerWidth() + "px");
                var f = e.find(".icoFontTriangleRight").addClass("rotate180");
                setTimeout(function() {
                    $.removeCookie("ui_fold_roomlist");
                    f.removeClass("rotate180 icoFontTriangleRight").addClass("icoFontTriangleLeft");
                    e.addClass("_showDescription");
                    b.removeClass("foldAnimLeft");
                    CW.view.resizeLayout()
                }, 300)
            } else a.is_folded = !0, b.css("left", "0px"), f = e.find(".icoFontTriangleLeft").addClass("rotate180"), setTimeout(function() {
                $.cookie("ui_fold_roomlist", "1", {
                    expires: 3650
                });
                f.removeClass("rotate180 icoFontTriangleLeft").addClass("icoFontTriangleRight");
                e.removeClass("_showDescription");
                b.removeClass("foldAnimLeft");
                CW.view.resizeLayout()
            }, 300);
            setTimeout(function() {
                i = !1
            }, 200)
        }
    };
    a.resizeWidth = function(b) {
        if (b < TM.chatlist_min_width) b = TM.chatlist_min_width;
        if (b > TM.chatlist_max_width) b = TM.chatlist_max_width;
        var d = $C("#_sideContent").width();
        if ($C("#_timeLine").width() < TM.timeline_min_width && d < b) return !1;
        $C("#_mainContent").css("left", b + "px");
        $C("#_sideContent").width(b);
        $.cookie("ui_chatlist_width", b, {
            expires: 3650
        });
        CW.view.resizeLayout();
        return a
    };
    a.deleteRoom = function() {
        RM || CS.initChatText()
    };
    a.scrollToRoom = function(a, b) {
        var d = $C("#_roomListArea"),
            e = d.find("[data-rid=" + a + "]");
        if (e.length > 0) {
            var f = parseInt(d.offset().top, 10),
                h = f + d.height(),
                i = parseInt(e.offset().top, 10),
                u = i + e.height();
            (i < f || u > h) && d.scrollTo(e, b)
        }
    };
    a.focusRoom = function(b) {
        a.clearFocusRoom();
        RM.id != b && ($C("#_roomListItems").find("[data-rid=" + b + "]").addClass("menuListTitleFocus"), a.scrollToRoom(b, 100))
    };
    a.clearFocusRoom = function() {
        $C("#_roomListItems").find(".menuListTitleFocus").removeClass("menuListTitleFocus")
    };
    a.selectRoom =
        function(b) {
            CW.view.closeFirstPage();
            $.cwFloatWindow.close();
            if (!(RM && RM.id == b)) {
                var d = $C("#_roomListItems");
                d.find("._roomSelected").removeClass("_roomSelected menuListTitleSelected");
                d.find("[data-rid=" + b + "]").addClass("_roomSelected menuListTitleSelected");
                $C("#_subContentArea").scrollTop(0);
                a.scrollToRoom(b, 600);
                a.updateTitle(b);
                RS.resetPromotionStatus()
            }
        };
    a.selectCategory = function() {
        a.model.build();
        var b = $("#_categoryDisplay");
        if (a.model.filter_category != "all") {
            var d = $C("#_chatCategoryList").find("[data-cat-id=" +
                a.model.filter_category + "]").find("span._categoryName").text();
            $("#_categoryDisplayTitle").text(d);
            b.isVisible() || ($.cookie("ui_category", a.model.filter_category, {
                expires: 3650
            }), b.show())
        } else b.isVisible() && ($.removeCookie("ui_category"), b.hide())
    };
    a.setReadOnly = function() {};
    a.setToOnly = function() {};
    a.setTaskOnly = function() {};
    a.build = function(b) {
        a.model.prepareRM();
        var d = "",
            e = b.length,
            f = e;
        if (e) {
            $C("#_chatListEmptyArea").hide();
            if (e > a.room_show_limit) f = a.room_show_limit;
            for (var h = 0; h < f; h++) b[h] !=
                void 0 && (d += a.getRoomItemPanel(b[h]));
            e > f && (d += '<div class="roomLimitOver"><div>' + L.chat_rest_roomtip + (e - a.room_show_limit) + '</div><div id="_roomMore" class="button">' + L.chat_show_more + "</div></div>");
            $C("#_roomListItems").html(d);
            b = RL.getFocusedRoomId();
            b > 0 && a.model.focusRoom(b)
        } else $C("#_roomListItems").quickEmpty(), $C("#_chatListEmptyArea ._chatListEmpty").hide(), a.model.filter_readonly ? $C("#_chatListUnreadEmpty").show() : a.model.filter_toonly ? $C("#_chatListToEmpty").show() : a.model.filter_taskonly &&
            $C("#_chatListTaskEmpty").show(), $C("#_chatListEmptyArea").show()
    };
    var h = {
        showOrg: !1,
        showPin: !0,
        showSelected: !0,
        showRequest: !0,
        noTrim: !1
    };
    a.getRoomItemPanel = function(b, d) {
        var e = a.model.rooms[b],
            f;
        if (d == void 0) f = h;
        else {
            f = {};
            for (var i in h) f[i] = h[i];
            for (i in d) f[i] = d[i]
        }
        var n = e.getUnreadNum(),
            o = 0;
        n > 0 && (o = e.getMentionNum());
        i = "_room";
        var u = "",
            r = "",
            v = "";
        f.showSelected && RM && RM.id == b && (i += " _roomSelected menuListTitleSelected");
        n > 0 && (i += " roomUnread", u = '<li role="listitem" class="_unreadBadge unread"><span class="icoFontActionUnread"></span>' +
            n + "</li>", o && (r = '<li class="_mentionLabel _unreadBadge mention"><span class="icoFontSideTo"></span>' + o + "</li>", i += " roomMentionUnread"));
        e.mytask_num > 0 && (v = '<li><span class="icoFontActionTask"></span>' + Math.min(e.mytask_num, TASK_MAX_RESULTS) + "</li>");
        n = "";
        f.showPin && (n = e.sticky ? '<div class="chatListPin"><span class="_pin _pinRid' + e.id + ' ico19PinOn"></span></div>' : '<div class="chatListPin chatListPinOff"><span class="_pin _pinRid' + e.id + ' ico19PinOff"></span></div>');
        o = "";
        f.showRequest && e["public"] &&
            e.member_request.length > 0 && (o = '<div class="alert alertWarning alertSmall"><span class="icoFontInfo marginRight"></span>' + L.chatroom_member_requests_notice.replace(/%%request_num%%/, e.member_request.length) + "</div>");
        var w = "";
        if (f.showOrg && e.type == "contact") {
            var A = e.getAccountId();
            (A = CW.getOrgTitle(A)) && (w = '<p class="chatListOrgName">' + A + "</p>")
        }
        var x = A = "";
        u || r || v ? (f.noTrim || (A = " autotrim"), x = '<ul class="incomplete">' + u + r + v + "</ul>") : f.noTrim || (A = " chatListTitleNoLabel");
        f = "";
        CW.is_business && ST.data.show_external &&
            (e.isInternal() || (f = '<div class="_externalMark roomOthers ico19Others"></div>'));
        return '<li role="listitem" aria-label="' + escape_html(e.getName()) + '" class="_roomLink ' + i + '" data-rid="' + e.id + '"><div class="roomIcon">' + e.getIcon("html", "medium") + '</div><div class="chatListMeta"><p class="chatListTitleArea' + A + '">' + CW.getRoomName(e.id) + "</p>" + w + x + "</div>" + f + n + o + "</li>"
    };
    a.updateRoomData = function() {};
    a.updateTitle = function(b) {
        if (MOBILE == "") {
            var d = "";
            if (a.model.unread_room_sum > 0) d = a.model.unread_room_sum,
                a.model.mention_room_sum > 0 && (d += "(" + a.model.mention_room_sum + ")"), d = "[" + d + "]";
            d += SERVICE_NAME;
            b && (d += " - " + RL.rooms[b].getName());
            document.title = d;
            ST.data.faviconstat ? (b = "", b = a.model.unread_room_sum == 0 ? "./image/favicon/favicon00.ico" : a.model.unread_room_sum < 10 ? "./image/favicon/favicon0" + a.model.unread_room_sum.toString() + ".ico" : "./image/favicon/favicon09+.ico", CW.view.changeFavicon(b)) : CW.view.changeFavicon("./image/favicon/favicon00.ico")
        }
    };
    a.updateSumNumbers = function() {
        var b = a.model.mytask_total +
            ":" + a.model.unread_room_sum + ":" + a.model.mention_room_sum + ":" + a.model.mytask_room_sum;
        if (a.last_sumnum_key != b) a.last_sumnum_key = b, a.model.mytask_total > 0 ? $C("#_myAllTaskNum").text(a.model.mytask_total).show() : $C("#_myAllTaskNum").hide(), a.model.unread_room_sum > 0 ? (b = a.model.unread_room_sum, b > 1E3 && (b = "999+"), e.html(b).show(), a.model.mention_room_sum > 0 ? (b = a.model.mention_room_sum, b > 1E3 && (b = "999+"), d.text(b).show()) : d.fadeOut()) : (e.fadeOut(), d.fadeOut()), a.model.mytask_room_sum > 0 ? f.text(a.model.mytask_room_sum).show() :
            f.fadeOut(), RM && a.updateTitle(RM.id)
    };
    a.buildCategory = function() {
        var b = "",
            d = a.model.getSortedCategoryList(),
            e;
        for (e in d) {
            var f = d[e];
            b += (f == a.model.filter_category ? '<li class="_chatCategoryItem listSelected" data-cat-id="' + f + '">' : '<li class="_chatCategoryItem" data-cat-id="' + f + '">') + '<span class="_categoryName categoryName autotrim">' + escape_html(a.model.category_dat[f].name) + '</span><div class="_categoryAction chatCategoryAction linkIconStatus"><span class="icoFontActionEdit _categoryEdit"></span><span class="icoTextHide">' +
                L.button_edit + '</span><span class="icoFontActionDelete _categoryDelete"></span><span class="icoTextHide">' + L.button_delete + "</span></li>"
        }
        $("#_chatCagegoryUserList").html(b)
    };
    a.updateUnreadNum = function(b) {
        a.buildRoomItem(b)
    };
    a.buildRoomItem = function(b) {
        $C("#_roomListItems").find("[data-rid=" + b + "]").replaceWith(a.getRoomItemPanel(b))
    };
    a.showJoinPublicChatDialog = function(a) {
        var b = escape_html(a.public_description).replace(/(https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}\[\]]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\{\}\[\]]+)/gi,
            '<a href="$1" target="_blank">$1</a>');
        $("#_joinpublicchatDescription").html(b);
        var d = function() {
            var b = parseInt(a.join_need_accept, 10) ? L.join_groupchat_btn_send_join_request_label : L.join_groupchat_btn_join_groupchat_label;
            $("#_joinpublicchatDialog").cwDialog({
                title: L.joinpublicchat_title,
                width: 640,
                height: "auto",
                autoOpen: !0,
                hide: "fade",
                buttonLabels: [b, L.button_cancel],
                buttonSubmit: 0,
                buttonCancel: 1,
                buttonClick: function(b) {
                    b === 0 && (RL.joinPublicChat(a.id), this.close())
                },
                open: function() {
                    $("#_joinpublicchatIcon").html('<img class="ui_avatar ui_chatworkid_avatar avatar" src="' +
                        a.icon + '" />');
                    $("#_joinpublicchatName").text(a.name);
                    a.join_need_accept == "1" ? $("#_joinpublicchatNeedAccept").show() : $("#_joinpublicchatNeedAccept").hide()
                }
            })
        };
        a.header ? ($("#_joinpublicchatHeader").remove(), $("#_joinpublicchatDialog").find("._overflow").prepend('<div id="_joinpublicchatHeader" class="joinpublicCover"></div>'), $("#_joinpublicchatHeader").html('<img id="_joinpublicchatHeaderImage" src="' + S3_PATH + "/header/" + a.header + '" />'), $("#_joinpublicchatHeaderImage").bind("load", function() {
                d()
            })) :
            ($("#_joinpublicchatHeader").remove(), d())
    };
    a.updateMasterData = function() {}
}

function RoomView(b) {
    this.model = b;
    this.dialog_resized = this.disabled_send = !1
}
(function() {
    var b = 0,
        a;
    RoomView.prototype = {
        getIcon: function(a, b) {
            var f = this.model.getAccountId();
            a == void 0 && (a = "html");
            var i = this.model.icon_preset ? S3_PATH + "/icon/ico_" + this.model.icon + ".png" : S3_PATH + "/icon/" + this.model.icon;
            switch (a) {
                case "html":
                    return f > 0 ? CW.getAvatarPanel(f, {
                        clicktip: !1,
                        hovertip: !1,
                        size: b
                    }) : '<img class="avatarGroup ' + CW.view.getAvatarClass(b) + '" src="' + i + '"/>';
                case "src":
                    return f > 0 ? CW.getAvatarPanel(f, {
                        src: !0
                    }) : i
            }
        },
        getViewStat: function() {
            var a = {},
                b = $C("#_chatSendArea").position().top;
            a.last_read_id = 0;
            a.noview_num = 0;
            for (var f = this.model.timeline.chat_list.length - 1; f >= 0; f--) {
                var i = $("#_messageId" + this.model.timeline.chat_list[f].id);
                if (i.length > 0 && b > i.position().top) {
                    a.last_read_id = this.model.timeline.chat_list[f].id;
                    break
                }
                a.noview_num++
            }
            return a
        },
        addSendingChat: function(a) {
            this.model.timeline.build({
                smoothScroll: !0,
                sendingId: a
            });
            return this
        },
        build: function(a) {
            var d = !1,
                a = $.extend({
                    messageHashUpdate: !0,
                    readLock: !1
                }, a),
                f = this.model;
            if (!RM || !b) RM = f, b = RM.id, CS.initChatText(), this.bindBeforeUnload();
            RM.id != f.id && (CW.read(0), RM.reading && $C("#_roomListItems").find("[data-rid=" + RM.id + "]").find("._unreadBadge").css("opacity", "0.5"), d = $C("#_chatText").val(), d == "" ? CS.deleteChatDraft(RM.id) : (CS.setChatDraft(RM.id, d, CS.chatedit_id), CS.view.setChatText("")), CS.clearChatEdit(), (d = $C("#_taskNameInput").val()) ? CS.setTaskDraft(RM.id, d, RS.view.getTaskAssignList(), $C("#_limitButton").cwDatePicker().getVal()) : CS.deleteTaskDraft(RM.id), RM = f, CS.initChatText(), $C("#_subRoomDescriptionWrapper").scrollTop(0), d = !0);
            var i = "!rid" + RM.id;
            a.messageHashUpdate && a.jumpTo && (i += "-" + a.jumpTo);
            $(window).unbind("hashchange", $.hashchangeHandler);
            document.location.hash = i;
            setTimeout(function() {
                $(window).bind("hashchange", $.hashchangeHandler)
            });
            var i = "",
                i = RL.rooms[RM.id].sticky ? '<span class="_pin _pinRid' + RM.id + ' ico19PinOn"></span>' : '<span class="_pin _pinRid' + RM.id + ' ico19PinOff"></span>',
                h = CW.getRoomName(f.id);
            $C("#_roomTitle").html('<span class="_roomTitleText autotrim">' + h + "</span>" + i);
            $C("#_subRoomName").html(h);
            $C("#_subRoomIcon").prop("src",
                this.model.getIcon("src"));
            this.model.type === "group" ? $C("#_subRoomIcon").addClass("avatarGroup") : $C("#_subRoomIcon").removeClass("avatarGroup");
            f.description == "" ? f.buildtime == 0 ? $C("#_subRoomDescription").html('<div class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" alt="Loading" />' + L.loading + "</div>") : $C("#_subRoomDescription").html('<span class="emptyContent">' + L.chatroom_desc_none + "</span>") : $C("#_subRoomDescription").html("<pre>" + CW.renderMessage(f.description) +
                "</pre>");
            RS.view.resizeRoomInfo();
            f.member_dat[AC.myid] ? this.buildMemberList() : this.model.refreshMember();
            i = null;
            if (a.jumpTo) i = a.jumpTo;
            else if (a.scrollTo) i = a.scrollTo;
            !i && d && (d = f.getUnreadNum(), i = f.timeline.chat_list[f.timeline.chat_list.length - d], i = d && i ? i.id : "End");
            this.disabled_send || (this.restoreChatDrat(CS.getChatDraft(RM.id)), this.restoreTaskDraft(CS.getTaskDraft(RM.id)));
            a.scrollTo = i;
            f.timeline.build(a);
            f.rswitch = !1;
            CW.is_business && ST.data.show_external && (f.isInternal() ? ($C("#_chatTextArea").removeClass("chatSendTextareaOther").data("external", !1), $C("#_externalInfo").hide()) : ($C("#_chatTextArea").addClass("chatSendTextareaOther").data("external", !0), $C("#_externalInfo").show()));
            CS.view.resizeChatArea(!0);
            f.filelist.build();
            f.tasklist.build();
            a.readLock === !1 && wfocus && f.getUnreadNum() > 0 && CW.read();
            f.buildtime = microtime(!0)
        },
        buildHome: function() {},
        buildMemberList: function() {
            $C("#_subRoomDescriptionArea").show();
            $C("#_roomRequestArea").hide();
            $C("#_subEditRoomInfo").hide();
            $C("#_subRoomProfileLinkArea").hide();
            $C("#_subRoomJoinLinkArea").hide();
            $C("#_subEditMember").hide();
            $C("#_groupCall").hide();
            $C("#_directCall").hide();
            $C("#_showOnlyAdmin").hide();
            $C("#_subRoomMemberArea").hide();
            $C("#_chatNavMember").hide();
            $C("#_chatSendTabTask").hide();
            $C("#_file").hide();
            RS.view.hideSetting();
            var a = function(a, b) {
                if (MOBILE !== "ipad") {
                    var d = $C("#_" + a).show();
                    return a === "groupCall" ? d : d.attr("data-aid", b)
                }
            };
            switch (this.model.type) {
                case "group":
                    RS.view.showSetting();
                    $C("#_chatNavMember").show();
                    this.model.allow_see_member || $C("#_showOnlyAdmin").show();
                    switch (this.model.member_dat[AC.myid]) {
                        case "admin":
                            CS.view.enableChatArea();
                            TK.view.enableTaskArea();
                            FL.view.enableFileArea();
                            this.disabled_send = !1;
                            $C("#_subEditRoomInfo").show();
                            $C("#_subRoomMemberArea").show();
                            $C("#_subEditMember").show();
                            a("groupCall");
                            if (this.model["public"]) a = this.model.member_request.length, a > 0 && $C("#_roomRequestArea").html('<span class="icoFontInfo marginRight"></span>' + L.chatroom_member_requests_notice.replace("%%request_num%%", a)).show();
                            break;
                        case "member":
                            this.model.allow_see_member &&
                                ($C("#_subRoomMemberArea").show(), a("groupCall"));
                            this.model.allow_send_message ? (CS.view.enableChatArea(), this.disabled_send = !1, this.model.allow_upload_file ? FL.view.enableFileArea() : FL.view.disableFileArea(), this.model.allow_add_task ? TK.view.enableTaskArea() : TK.view.disableTaskArea()) : (CS.view.disableChatArea(), this.disabled_send = !0);
                            break;
                        case "readonly":
                            this.model.allow_see_member && ($C("#_subRoomMemberArea").show(), a("groupCall")), TK.view.disableTaskArea(), CS.view.disableChatArea(), FL.view.disableFileArea(),
                                this.disabled_send = !0
                    }
                    if (a = this.model.getJoinLink()) $C("#_subRoomJoinLink").attr("href", a), $C("#_subRoomJoinLinkArea").show();
                    break;
                case "contact":
                    RS.view.showSetting();
                    $C("#_subEditRoomInfo").show();
                    $C("#_subRoomProfileLinkArea").show();
                    CS.view.enableChatArea();
                    TK.view.enableTaskArea();
                    FL.view.enableFileArea();
                    this.disabled_send = !1;
                    var b = 0,
                        f;
                    for (f in this.model.member_dat) AC.myid != f && (b = f);
                    b && $C("#_subRoomProfileLink").attr("data-aid", b);
                    a("directCall", b);
                    break;
                case "my":
                    $C("#_subEditRoomInfo").show(),
                        CS.view.enableChatArea(), TK.view.enableTaskArea(), FL.view.enableFileArea(), this.disabled_send = !1
            }
            RS.view.buildMember(this.model.id)
        },
        prepareRequestDialog: function() {
            var b = $("#_roomRequestList");
            a = $("#_roomRequestDialog").cwDialog({
                title: L.room_request_title,
                width: 600,
                buttonLabels: [L.button_cancel],
                buttonCancel: 0,
                open: function(a) {
                    var d = "";
                    b.empty();
                    this.data.room_id = a;
                    a = RL.rooms[a].member_request;
                    if (a.length > 0) {
                        for (var h = 0, j = a.length; h < j; h++) {
                            var k = a[h],
                                g = CW.getAvatarPanel(k.aid, {
                                    hovertip: !1,
                                    clicktip: !1,
                                    size: "medium"
                                }),
                                l = escape_html(k.nm);
                            d += '<tr class="_roomRequestRow"><td>' + g + ' </td><td class="name"><span class="autotrim">' + l + '</span></td><td><div class="_roomRequestAccept button btnPrimary">' + L.button_accept_long + "</div> ( " + L.role + ":" + $.cwSelectBox.create([{
                                    value: "admin",
                                    label: L.admin
                                }, {
                                    value: "member",
                                    label: L.member
                                }, {
                                    value: "readonly",
                                    label: L.readonly
                                }], "", "member", {
                                    "class": "_roomRoleSelect"
                                }) + ' )</td><td><div class="_roomRequestReject button buttonGray">' + L.button_reject_long + '</div></td><td style="display:none;"><input type="hidden" value="' +
                                k.aid + '" class="_roomRequestAid" /></td></tr>'
                        }
                        b.html(d)
                    }
                },
                postOpen: function() {
                    if (!this.dialog_resized) {
                        this.dialog_resized = !0;
                        var d = b.find("._roomRequestRow:last .selectboxContent"),
                            i = d.height();
                        i += parseInt(d.css("padding-top"), 10);
                        i += parseInt(d.css("padding-bottom"), 10);
                        i += parseInt(d.css("border-top-width"), 10);
                        i += parseInt(d.css("border-bottom-width"), 10);
                        var h = a.getMaxHeight(),
                            d = b.parents("#_roomRequestDialog"),
                            j = d.parent(".dialogContent"),
                            k = j.height();
                        k += parseInt(j.css("border-top-width"), 10);
                        k += parseInt(j.css("border-bottom-width"), 10);
                        h -= k;
                        h > i && (h = i);
                        var g = d.children(".roomRequest"),
                            l = g.height(),
                            l = parseInt(g.css("max-height"), 10) - l;
                        h > l && (h = l);
                        console.log(h);
                        j.height(k + h);
                        k = parseInt(j.css("margin-top"), 10);
                        j.css("margin-top", k - h / 2 + "px");
                        d.height(d.height() + h);
                        g.height(g.height() + h);
                        g.children("._overflow").css("padding-bottom", i + "px")
                    }
                }
            });
            var d = function(d, i) {
                var h = b.find("tr").eq(d),
                    j = h.find("._roomRoleSelect");
                h.find("button").button("disable");
                j.prop("disabled", !0);
                var k = h.find("._roomRequestAid").val(),
                    g = j.cwSelectBox().getVal(),
                    k = {
                        rid: a.data.room_id,
                        aid: k,
                        role: g
                    };
                k.cmd = i ? "accept_join_room" : "reject_join_room";
                CW.post("gateway.php", k, function(d) {
                    d.error ? (d.message != void 0 && CW.alert(d.message), h.find("button").button("enable"), j.prop("disabled", !1)) : (h.fadeOut(function() {
                        b.find("tr:visible").length || a.close()
                    }), CW.watch())
                })
            };
            b.on("click", "._roomRequestAccept", function() {
                var a = b.find("._roomRequestAccept").index(this);
                d(a, !0)
            }).on("click", "._roomRequestReject", function() {
                var a = b.find("._roomRequestReject").index(this);
                d(a, !1)
            })
        },
        showRequestDialog: function() {
            a || this.prepareRequestDialog();
            a.open(this.model.id)
        },
        bindBeforeUnload: function() {
            $(window).bind("beforeunload", function() {
                CW.view.setDrafts()
            })
        },
        restoreChatDrat: function(a) {
            a.text && (CS.view.setChatText(a.text), a.edit_id && CS.setChatEdit(a.edit_id, self.model))
        },
        restoreTaskDraft: function(a) {
            a.task_name && RS.view.setTask(a.task_name, a.assign_list, a.limit_date)
        }
    }
})();

function TimeLineView(b) {
    this.model = b;
    this.task_showmore_flag = {};
    this.start_index = 0;
    this.has_new = !1
}
(function() {
    var b = 0,
        a = 0,
        e = 0;
    TimeLineView.prototype = {
        read: function(a) {
            var b = this.model.room.getUnreadNum();
            if (b == 0) $C("#_timeLine").find("._unreadMark").fadeOut("slow", function() {
                $(this).remove()
            });
            else
                for (var e = this.model.chat_list.length - 1 - b, h = e; h > e - (a - b); h--) this.model.chat_list[h] != void 0 && $("#_messageId" + this.model.chat_list[h].id + " ._unreadMark").fadeOut("slow", function() {
                    $(this).remove()
                })
        },
        build: function(d) {
            var e = $C("#_timeLine"),
                i = $.extend({
                    smoothScroll: !1,
                    scrollTo: null,
                    everScroll: !1,
                    highlight: !1,
                    jumpToCallback: function() {},
                    sendingId: null
                }, d),
                d = i.scrollTo,
                h = $("#_messageIdEnd"),
                j = 0;
            if (h.length > 0) j = h.offset().top;
            var h = "",
                k = 0;
            k++;
            this.model.chat_list.length < this.model.room.chat_num ? (k++, h += '<div class="timeLineLoading"><img src="./imagenew/all/common/loader/img_loader_white.gif" />' + L.chat_loading + "</div>", this.model.has_old = this.model.room.buildtime ? !0 : !1) : this.model.has_old = !1;
            var k = this.model,
                g = [],
                l = null,
                m = 0,
                n = k.chat_list.length;
            if (a != k.room.id) this.start_index = 0;
            if (d && d != "End")
                for (var o =
                        0; o < n; o++)
                    if (m = k.chat_list[o], d == m.id) {
                        l = o;
                        this.start_index = l - 100;
                        break
                    }
            if (a == k.room.id)
                if (i.everScroll) {
                    var u = $C("#_timeLine").offset().top;
                    if (!l)
                        for (o = 0; o < n; o++) {
                            var m = k.chat_list[o],
                                r = $("#_messageId" + m.id);
                            if (r.length > 0 && u < r.offset().top) {
                                if (!k.has_new_message && !d) {
                                    if (!k.has_old && o == 0) return !1;
                                    d = m.id
                                }
                                l = o;
                                break
                            }
                        }
                    m = l - 100
                } else m = this.start_index;
            else m = l !== null ? l - 100 : n - 200;
            m < 0 && (m = 0);
            l = 0;
            for (o = m; o < n; o++)
                if (k.chat_list[o] && (g.push(k.chat_list[o]), l++), l >= 200) break;
            this.start_index = m;
            g.length > 100 &&
                g[g.length - 1].id != k.chat_list[n - 1].id ? (d == "End" && (d = !1), this.has_new = !0) : this.has_new = !1;
            n = k.sending_chat_list;
            if (n.length)
                for (o = 0; o < n.length; o++)(m = n[o]) && g.push(m);
            h += this.getTimeLine(g, {
                unreadFrom: this.model.chat_list.length - this.model.room.getUnreadNum(),
                readLock: k.room.read_lock,
                editId: CS.chatedit_id,
                selectId: b
            });
            h += '<div id="_messageIdEnd" class="actionBarSpacer"></div>';
            var v = 0;
            i.smoothScroll && (v = i.sendingId ? 70 : 200);
            g = !1;
            o = h;
            if (CW.last_timeline_buildkey != o) {
                this.renderTimeLine(e, h);
                if (a != k.room.id) a =
                    k.room.id, b = 0;
                k.has_new_message = !1;
                i.sendingId && $C("#_timeLine").find("._sendingMessage img:last").hide().fadeIn(3E3);
                CW.last_timeline_buildkey = o;
                d || j < $C("#_chatSendArea").offset().top + 50 && (d = "End");
                if ((this.model.room.rswitch || d) && d) {
                    var w = this,
                        A = $("#_messageId" + d);
                    A.length && (i.highlight && (b = d), g = !0, function() {
                        var a = !1,
                            b = function() {
                                a = !0
                            },
                            d = $C("#_timeLine");
                        d.one("scroll", b).scrollTo(A, v, function() {
                            i.highlight && w.highlight(A);
                            i.jumpToCallback()
                        });
                        setTimeout(function() {
                                a || (d.unbind("scroll", b), d.trigger("scroll"))
                            },
                            0)
                    }())
                }
                AC.hasUnknown() && AC.getUnknown(function(a) {
                    for (var b in a) $("._nameAid" + b).text(a[b].name)
                })
            } else d && (w = this, A = $("#_messageId" + d), A.length && (g = !0, $C("#_timeLine").scrollTo(A, v, function() {
                i.highlight && w.highlight(A);
                i.jumpToCallback()
            })));
            k.has_old && !g && setTimeout(function() {
                $C("#_timeLine").trigger("scroll")
            }, 100)
        },
        getTimeLine: function(a, f) {
            for (var i = $.extend({
                    unreadFrom: !1,
                    readLock: !1,
                    editId: !1,
                    selectId: !1,
                    idPrefix: ""
                }, f), h = "", j = "", k = 0, g = a.length; k < g; k++) {
                var l = {
                        idPrefix: i.idPrefix
                    },
                    m = a[k];
                if (ST.data.show_delmessage == 0 && m.msg == "[deleted]") h += '<div id="_messageId' + m.id + '"></div>';
                else {
                    var n = CW.getDate(m.tm, ST.data.dateformat);
                    if (j != n) j = n, e = 0, l.topView = !0, h += '<div class="dateHead"><div class="dateContent"><span class="icoFontClock"></span><span class="dateText">' + n + "</span></div></div>";
                    e == m.aid ? l.showSender = !1 : e = m.aid;
                    if (i.unreadFrom !== !1 && k >= i.unreadFrom) l.showUnreadMark = !0;
                    if (i.readLock) l.readLock = !0;
                    if (i.editId && i.editId == m.id) l.editView = !0;
                    if (!i.selectId) i.selectId = b;
                    if (i.selectId &&
                        i.selectId == m.id) l.selectView = !0;
                    h += this.getMessagePanel(m, l)
                }
            }
            return h
        },
        renderTimeLine: function(a, b) {
            a.html(b).find("._taskCompleteHide").each(function() {
                var a = $(this);
                a.find("._taskBody").height() >= 38 && a.append('<p class="_showMore showMore showMoreComplete">' + L.read_more + "</p>")
            })
        },
        getMessagePanel: function(a, b) {
            var e = this.model,
                h = $.extend({
                    showSender: !0,
                    topView: !1,
                    showUnreadMark: !1,
                    readLock: !1,
                    editView: !1,
                    selectView: !1,
                    idPrefix: ""
                }, b),
                j = "",
                k = "",
                g = "",
                l = "_message chatTimeLineMessage chatTimeLineMessageAnim clearfix",
                m = "";
            h.showSender && (j = '<div class="_speaker avatarSpeaker">' + CW.getAvatarPanel(a.aid, {
                size: "medium"
            }) + "</div>", k = CW.getName(a.aid), g = '<p class="chatNameOrgname">' + CW.getOrgName(a.aid) + "</p>", h.topView || (l += " chatTimeLineBorder"));
            var n = "";
            h.showUnreadMark && (n = a.sid ? '<span class="_sendingMessage"><img src="./imagenew/all/common/loader/img_loader_white.gif" ald="Loading"/></span>' : h.readLock ? '<span class="_unreadMark unreadTimeLine unreadTimeLineLock"></span>' : '<span class="_unreadMark unreadTimeLine"></span>');
            var o = "",
                u = L.chat_edited_log;
            a.aid == AC.myid && (l += " chatTimeLineMessageMine");
            var r = 0;
            a.msg == "[deleted]" ? (r = 1, o = '<div class="_delete messegeDelete">' + L.chat_deleted + "</div>") : a.msg == "[deleted_by_admin]" ? (r = 1, o = '<div class="_delete messegeDelete">' + L.chat_deleted_by_admin + "</div>") : o = CW.renderMessage(a.msg, {
                mid: a.id
            });
            r && (m += ' data-deleted="1"');
            var v = h.showSender ? CW.getDate(a.tm, ST.data.dateformat_short + " H:i") : CW.getDate(a.tm, "H:i");
            a.utm > 0 && (v += ' <span class="icoFontActionEdit icoSizeSmall"></span>');
            a.mn && (l += " chatTimeLineMessageMention");
            u = "";
            h.editView && (l += " chatTimeLineMessageEdit", u = '<div class="chatTimeLineMessageEditText">' + L.chat_editing_label_on_message + '<span class="_editCancel closeAction icoFontCancel massageEditCancel"></span></div>');
            var w = "";
            h.selectView && (l += " _messageSelected chatTimeLineMessageMove", w = '<span class="icoFontMessegeMoveArrow icoSizeLarge"></span><span class="icoTextHide">\u79fb\u52d5\u3057\u305f\u30c1\u30e3\u30c3\u30c8</span>');
            e = a.rid ? a.rid : e.room.id;
            r = ' data-deleted="' +
                r + '" data-tm="' + a.tm + '"';
            a.utm && (r += ' data-utm="' + a.utm + '"');
            return '<div id="' + h.idPrefix + "_messageId" + a.id + '" data-rid="' + e + '" data-mid="' + a.id + '" class="' + l + '"' + m + '><div class="_chatTimeLineMessageBox chatTimeLineMessageInner">' + j + '<div class="chatTimeLineMessageArea clearfix"><div class="chatTimeLineItemHeader autotrim"><p class="_speakerName chatName">' + k + "</p>" + g + "</div><pre>" + o + '</pre></div><div class="_timeStamp timeStamp"' + r + ">" + n + v + "</div>" + u + '</div><div class="_moveArrow chatTimeLineMoveArrow selected">' +
                w + "</div></div>"
        },
        highlight: function(a) {
            this.clearHighlightAll();
            a.addClass("chatTimeLineMessageMove _messageSelected").find("._moveArrow").html('<span class="icoFontMessegeMoveArrow icoSizeLarge"></span><span class="icoTextHide">\u79fb\u52d5\u3057\u305f\u30c1\u30e3\u30c3\u30c8</span>');
            return this
        },
        clearHighlight: function(a) {
            a.removeClass("chatTimeLineMessageMove _messageSelected").find("._moveArrow").quickEmpty();
            return this
        },
        clearHighlightAll: function() {
            $C("#_timeLine").find("._messageSelected").removeClass("chatTimeLineMessageMove _messageSelected").find("._moveArrow").quickEmpty();
            return this
        }
    }
})();

function FileListView(b) {
    this.model = b
}
FileListView.prototype = {
    build: function() {
        this.model.room.file_num ? $C("#_chatFileAll").cwButton().enable() : $C("#_chatFileAll").cwButton().disable()
    }
};

function TaskListView(b) {
    this.model = b;
    this.task_num = 0;
    this.view_limit = TASK_MAX_RESULTS
}
(function() {
    var b = null;
    TaskListView.prototype = {
        build: function() {
            if (this.model.room.id != RM.id) return !1;
            b === null && (b = $("#_subRoomMyTaskListShow").show().cwCheckBox({
                label: L.chatroom_tasklist_mytaskonly,
                update: function() {
                    RM && RM.tasklist.build()
                }
            }));
            var a = b.isChecked(),
                e = "",
                d, f = this.model.getTaskList("open"),
                i = f.length;
            this.task_num = 0;
            if (i > 0) {
                TK.sortTaskList(f);
                for (d = 0; d < i; d++) {
                    var h = TK.task_id2task_dat[f[d]];
                    if (!a || h.aid == AC.myid) this.task_num++, this.task_num <= this.view_limit && (e += TK.view.getTaskPanel(h, {
                        type: "tasklist"
                    }))
                }
                d = e
            }
            e == "" && !RS.show_promotion && (e = '<div class="emptyAdminContent"><img src="./imagenew/common/empty/img_task_empty.png"><p>' + L.task_nothing + "</p></div>", d = "empty");
            if (d != CW.last_tasklist_buildkey) CW.last_tasklist_buildkey = d, $C("#_subRoomTaskList").html(e);
            this.task_num > 0 ? (this.view_limit <= this.task_num ? $C("#_roomTaskNum").show().text(L.task_num.replace("%%num%%", number_format(this.view_limit))) : $C("#_roomTaskNum").show().text(" (" + number_format(this.task_num) + ")"), $C("#_roomTaskAll").show(),
                RS.hidePromotion()) : ($C("#_roomTaskNum").hide(), $C("#_roomTaskAll").hide(), RS.showPromotion())
        }
    }
})();

function RoomDialogView(b) {
    var a = this;
    a.model = b;
    a.checked_flag = {};
    a.contact_flag = {};
    a.member_flag = {};
    a.adding_member_list = {};
    a.is_valid_link_name = !0;
    a.is_folded = !1;
    a.is_business_plan = /^(kcw_)?business$/.test(SERVICE_PLAN);
    a.room_dat = null;
    var e, d, f;
    a.openInvitationLinkSetting = function(b) {
        e || a.prepareInvitationLinkSetting();
        e.open(b)
    };
    a.openRoomPermissionSetting = function(b) {
        d || a.prepareRoomPermissionSetting();
        d.open(b)
    };
    a.prepare = function() {
        a.prepareMember();
        CW.view.onIframeReady(function() {
            $("#_updateInvitationLinkSettingIframe, #_updateRoomPermissionSettingIframe").bind("load",
                function() {
                    CW.hideProgress();
                    var a = unescape_html($(this).contents().find("body").html());
                    if (a.length > 0) {
                        var a = a.match(/\{.+\}/)[0],
                            a = $.parseJSON(a),
                            b = a.result;
                        a.status.success ? b.header_error != void 0 ? CW.alert(L["error_upload_" + b.header_error]) : CW.watch() : CW.alert(L.raise_error)
                    }
                })
        });
        $("#_roomInfoHeaderDelete").click(function() {
            $(this).prop("checked") ? $("#_roomInfoHeader").prop("disabled", !0) : $("#_roomInfoHeader").prop("disabled", !1)
        })
    };
    a.link_code_checker = {
        last_checked_link_name: "",
        type_timer: null,
        validate: function(b, d) {
            var e = b.val();
            if (e != this.last_checked_link_name) {
                this.last_checked_link_name = e;
                if (this.type_timer) clearTimeout(this.type_timer), this.type_timer = null;
                var f = d.find(".js_invitationLinkBtnCopy"),
                    g = d.find(".js_invitationLinkBtnEdited"),
                    h = d.find(".js_invitationLinkDisplayInput"),
                    i = d.find(".js_invitationLinkCodeLoading"),
                    j = d.find(".js_invitationLinkCodeUsed");
                g.removeClass("btnPrimary").addClass("btnDisable");
                e ? e.length > 50 ? (i.hide(), j.text(L.error_maxlength.replace("%%length%%", 50)).css("color",
                    "red"), a.is_valid_link_name = !1) : e.match(/^[-_a-zA-Z0-9]+$/) ? (i.show(), j.text(""), this.type_timer = setTimeout(function() {
                    i.show();
                    CW.get("gateway.php", {
                        cmd: "check_chat_link_name",
                        link_name: e,
                        rid: RM.id
                    }, function(d) {
                        i.hide();
                        d.used ? (j.text(L.error_already_used).css("color", "red"), a.is_valid_link_name = !1) : (j.text(L.available).css("color", "green"), a.is_valid_link_name = !0, d = CHATWORK_MYPAGE_PATH + "/g/" + b.val(), f.attr("data-clipboard-text", d), h.val(d), g.removeClass("btnDisable").addClass("btnPrimary"))
                    });
                    this.type_timer =
                        void 0
                }, 1E3)) : (i.hide(), j.text(L.error_invalidchar).css("color", "red"), a.is_valid_link_name = !1) : (i.hide(), j.text(""), f.attr("data-clipboard-text", ""), a.is_valid_link_name = !1)
            }
        }
    };
    a.linkCodeEditor = function(a) {
        var b = a.find(".js_invitationLinkBtnCopy"),
            d = a.find(".js_invitationLinkBtnEdited"),
            e = a.find(".js_invitationLinkDisplay"),
            f = a.find(".js_invitationLinkDisplayInput"),
            g = a.find(".js_invitationLinkEditor"),
            h = a.find(".js_invitationLinkEditorInput"),
            i = a.find(".js_invitationLinkCodeLoading"),
            j = a.find(".js_invitationLinkCodeUsed");
        return {
            open: function() {
                var a = b.attr("data-clipboard-text");
                e.hide();
                g.show();
                i.hide();
                j.text("");
                b.attr("data-current", a)
            },
            cancel: function() {
                var d = b.attr("data-current"),
                    e = d.replace(/(^https.+\/g\/)(.+$)/, "$2");
                b.attr("data-clipboard-text", d).removeAttr("data-current");
                f.val(d);
                h.val(e);
                this.reset(a)
            },
            edit: function() {
                b.removeAttr("data-current");
                this.reset(a)
            },
            reset: function() {
                e.show();
                g.hide();
                i.hide();
                j.text("");
                b.text(L.invitation_link_code_copy);
                d.removeClass("btnDisable").addClass("btnPrimary")
            }
        }
    };
    a.prepareMember = function() {
        $("#_memberEditMemberBox").on("cwSelectBox_update", "._cwSL", function() {
            var b = $(this),
                d = b.attr("data-aid"),
                b = b.cwSelectBox();
            a.member_flag[d] = b.getVal()
        });
        $("#_subEditMember").click(function() {
            a.addRoomMember(RM.id)
        });
        $("#_memberEditMemberAdd").click(function() {
            l.close();
            a.addRoomMember(RM.id)
        });
        $("#_memberAdditionMemberEdit").click(function() {
            m.close();
            a.editRoomMember(RM.id)
        })
    };
    a.joinGroupchat = function(a) {
        CW.get("gateway.php", {
                cmd: "get_invitation_link_info",
                link_code: a
            },
            function(a) {
                if (a) {
                    if (a.link_status === "already_joined") return RL.selectRoom(a.link_info.room_id);
                    RL.showJoinPublicChatDialog(a.link_info.room_id)
                }
            },
            function(a, b) {
                var d;
                if (b.link_status === "not_found") d = L.join_groupchat_not_found;
                else if (b.link_status === "my_disable_external") d = L.join_groupchat_my_disable_external;
                else if (b.link_status === "other_disable_external") d = L.join_groupchat_other_disable_external;
                else return;
                return CW.alert(d)
            })
    };
    var i = !1;
    a.prepareRoomInfo = function() {
        if (!i) {
            i = !0;
            CW.view.onIframeReady(function() {
                $("#_roomInfoFrame").bind("load",
                    function() {
                        CW.hideProgress();
                        var a = unescape_html($(this).contents().find("body").html());
                        if (a.length > 0) {
                            var a = a.match(/\{.+\}/)[0],
                                b = $.parseJSON(a),
                                a = b.result;
                            if (b.status.success) {
                                a.message != void 0 && CW.alert(a.message);
                                if (a.add == void 0) {
                                    b = RL.rooms[a.id];
                                    a.name != void 0 && b.setName(a.name);
                                    if (a.description != void 0) b.description = a.description;
                                    if (a.member_dat != void 0) b.member_dat = a.member_dat;
                                    b.build()
                                } else if (a.error != void 0) {
                                    var b = L.chatroom_error_cant_add,
                                        d = L.chatroom_error_planlimit,
                                        d = d.replace(/%%plan_name%%/,
                                            a.error.plan_name),
                                        d = d.replace(/%%limit_num%%/, a.error.limit_num);
                                    CW.view.showLimitErrorDialog(b, d)
                                } else RL.lazy_select = a.room_id;
                                CW.watch()
                            } else b.status.message ? CW.alert(b.status.message) : CW.alert(L.raise_error)
                        }
                    })
            });
            var b;
            $("#_memberEditMemberFilter").cwSearchBox({
                update: function() {
                    clearTimeout(b);
                    b = setTimeout(function() {
                        a.buildMember(["member"], $("#_memberEditMemberBox"))
                    }, 200)
                }
            });
            $("#_memberEditMemberBox").on("click", "._memberDelete", function() {
                var b = $(this).attr("data-aid");
                a.deleteMember(b)
            });
            var d;
            $("#_memberAdditionContactFilter").cwSearchBox({
                update: function() {
                    clearTimeout(d);
                    d = setTimeout(function() {
                        a.buildMember(["contact"], $("#_memberAdditionMemberBox"))
                    }, 200)
                }
            });
            $("#_memberAdditionOrganizationFilter").on("change", "input", function() {
                a.buildMember(["contact"], $("#_memberAdditionMemberBox"))
            });
            $("#_memberAdditionSelectRole").on("cwSelectBox_update", "._cwSL", function() {
                a.common_role = $(this).cwSelectBox().getVal();
                a.changeCommonRole($("#_memberAdditionContactTableBox"))
            });
            var e;
            $("#_roomInfoContactFilter").cwSearchBox({
                update: function() {
                    clearTimeout(e);
                    e = setTimeout(function() {
                        a.buildMember(["contact"], $("#_roomInfoMemberBox"))
                    }, 200)
                }
            });
            $("#_roomInfoOrganizationFilter").on("change", "input", function() {
                a.buildMember(["contact"], $("#_roomInfoMemberBox"))
            });
            $("#_roomInfoSelectRole").on("cwSelectBox_update", "._cwSL", function() {
                a.common_role = $(this).cwSelectBox().getVal();
                a.changeCommonRole($("#_roomInfoContactTableBox"))
            })
        }
    };
    a.prepareInvitationLinkSetting = function() {
        function b(a) {
            var f = $(".invitationLinkAdvancedSettingMask");
            d.reset();
            if (a) {
                $("#_invitationLinkActive").show();
                $("#_invitationLinkDisabled").hide();
                $("#_invitationLinkSettingStatus").cwCheckBox().check();
                $("#_public").val("1");
                if (!f) return;
                $("#_invitationLinkAdvancedSetting").removeClass("isDisabled");
                f.remove()
            } else $("#_invitationLinkActive").hide(), $("#_invitationLinkDisabled").show(), $("#_invitationLinkSettingStatus").cwCheckBox().unCheck(), $("#_invitationLinkAdvancedSetting").append('<div class="invitationLinkAdvancedSettingMask"></div>').addClass("isDisabled"), $("#_public").val("0");
            e.open()
        }
        e = $("#_invitationLinkSettingDialog").cwDialog({
            title: L.invitation_link_setting_title,
            width: 750,
            autoOpen: !1,
            resizable: !1,
            modal: !0,
            hide: "fade",
            buttonLabels: [L.button_save, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(b) {
                if (!b) {
                    var b = this.data.room_id,
                        d = [];
                    a.is_valid_link_name || d.push(L.invitation_link_setting_error_invalid_link_name);
                    d.length ? CW.alert(d.join("\n")) : ($("#_invitationLinkSettingId").val(b), $("#_invitationLinkSettingForm").submit(), CW.showProgress(L.saving), this.close())
                }
            },
            open: function(d) {
                if (d) {
                    this.data.room_id = d;
                    d = RL.rooms[d];
                    a.is_valid_link_name = !0;
                    b(d["public"]);
                    d.join_need_accept ? $("#_invitationLinkJoinNeedAccept").cwCheckBox().check() : $("#_invitationLinkJoinNeedAccept").cwCheckBox().unCheck();
                    $("#_publicDescription").val(d.public_description);
                    $("#_invitationLinkSettingHeaderDelete").cwCheckBox().unCheck();
                    $("#_invitationLinkSettingHeader").prop("disabled", !1);
                    $("#_invitationLinkEditor").hide();
                    var e = CHATWORK_MYPAGE_PATH + "/g/",
                        f;
                    f = d.link_name ? d.link_name : d.id;
                    var g = e + f,
                        h = $("#_invitationLinkActive"),
                        i = h.find(".js_invitationLinkBtnCopy"),
                        j = h.find(".js_invitationLinkURL"),
                        m = h.find(".js_invitationLinkDisplayInput"),
                        h = h.find(".js_invitationLinkEditorInput");
                    j.text(e);
                    m.val(g);
                    h.val(f);
                    i.attr("data-clipboard-text", g).text(L.invitation_link_code_copy);
                    e = new ZeroClipboard(i[0]);
                    e.on("mouseover", function() {
                        i.addClass("buttonHover")
                    });
                    e.on("mouseout", function() {
                        i.removeClass("buttonHover")
                    });
                    e.on("mousedown", function() {
                        i.addClass("buttonActive").text(L.text_copied)
                    });
                    e.on("mouseup", function() {
                        i.removeClass("buttonActive")
                    });
                    d.header ? ($("#_invitationLinkSettingHeaderCurrent").html('<img src="' +
                        S3_PATH + "/header/" + d.header + '" width="30" height="30" style="border:1px solid #999"/>'), $("#_invitationLinkSettingHeaderDeleteBox").show()) : ($("#_invitationLinkSettingHeaderCurrent").empty(), $("#_invitationLinkSettingHeaderDeleteBox").hide());
                    $("#_invitationLinkSettingHeader").val("")
                }
            }
        });
        var d = a.linkCodeEditor($("#_invitationLinkActive"));
        d.reset();
        $("#_invitationLinkSettingStatus").cwCheckBox({
            update: function() {
                var a = this.isChecked() ? !0 : !1;
                b(a);
                e.open()
            }
        });
        $("#_invitationLinkActive").on("click",
            ".js_invitationLinkOpenEditor",
            function() {
                d.open();
                e.open()
            }).on("click", ".js_invitationLinkCloseEditor", function() {
            d.cancel();
            e.open()
        }).on("click", ".js_invitationLinkBtnEdited", function() {
            a.is_valid_link_name && (d.edit(), e.open())
        }).on("keyup blur", ".js_invitationLinkEditorInput", function() {
            var b = $(this);
            a.link_code_checker.validate(b, $("#_invitationLinkActive"))
        })
    };
    a.prepareRoomPermissionSetting = function() {
        d = $("#_roomPermissionsettingDialog").cwDialog({
            title: L.room_permission_setting_title,
            width: 750,
            autoOpen: !1,
            resizable: !1,
            modal: !0,
            hide: "fade",
            buttonLabels: [L.button_save_long, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(a) {
                if (!a) a = this.data.room_id, $("#_roomPermissionsettingId").val(a), $("#_roomPermissionsettingForm").submit(), CW.showProgress(L.saving), this.close()
            },
            open: function(b) {
                this.data.room_id = b;
                var d = {
                        _allowSeeMember: "allow_see_member",
                        _allowUploadFile: "allow_upload_file",
                        _allowAddTask: "allow_add_task",
                        _allowSendMessage: "allow_send_message"
                    },
                    b = RL.rooms[b];
                a.is_valid_link_name = !0;
                for (var e in d) b[d[e]] ? $("#" + e).cwCheckBox().check() : $("#" + e).cwCheckBox().unCheck()
            }
        })
    };
    a.checkSameMember = function(b) {
        $("#_roomInfoContact").find("._selectableContactRow").each(function() {
            var a = $(this).find("._cwCB"),
                d = a.cwCheckBox(),
                e = $(this).find("._cwSL").cwSelectBox(),
                a = a.find("input").val();
            b[a] && (d.check(), e.select(b[a]))
        });
        for (var d in b) d !== myid && AC.isContact(d) && (a.adding_member_list[d] = b[d], a.checked_flag[d] = !0)
    };
    var h = null;
    a.deleteMember = function(b) {
        $("#_memberRowAid" + b).remove();
        a.contact_flag[b] = !0;
        delete a.checked_flag[b];
        delete a.member_flag[b];
        h || (h = setTimeout(function() {
            a.buildMember(["member", "contact"], $("#_memberEditMemberBox"));
            h = null
        }, 100))
    };
    a.updateCheckBoxAll = function(a) {
        var b = a.find(".memberTable"),
            a = a.find(".memberTableCheckAll ._cwCB").cwCheckBox(),
            d = b.find("tr").length;
        (b = b.find("._cwCBChecked").length) ? b === d ? a.check() : b < d && a.partialCheck(): a.unCheck()
    };
    a.getCommonRole = function(a) {
        return a.find(".memberTableSelectRole ._cwSL").cwSelectBox().getVal()
    };
    a.changeCommonRole = function(b) {
        b.find("._memberTableContact").find("._cwSL").each(function() {
            var d =
                $(this),
                e = d.attr("data-aid"),
                d = d.cwSelectBox(),
                f = a.getCommonRole(b);
            f === "default" ? a.common_role = "member" : (a.adding_member_list[e] && (a.adding_member_list[e] = f), d.select(f, {
                silent: !0
            }))
        })
    };
    a.updateContactCheckBox = function(b, d) {
        var e = b.getVal();
        a.checked_flag[e] = !a.checked_flag[e];
        var f = d.find(".roleSelect [data-aid=" + e + "]"),
            g = f.cwSelectBox().getVal();
        a.checked_flag[e] ? ($(f).removeClass("isHide"), a.adding_member_list[e] = g) : ($(f).addClass("isHide"), delete a.adding_member_list[e])
    };
    a.checkAllContact = function(b,
        d, e) {
        d || (b.isChecked() ? e.find("._cwCBUnchecked").each(function() {
            var b = $(this).parents("._selectableContactRow").find("._cwSL").cwSelectBox();
            $(this).cwCheckBox().check();
            b.select(a.common_role)
        }) : e.find("._cwCBChecked").each(function() {
            $(this).cwCheckBox().unCheck()
        }))
    };
    a.buildMember = function(b, d) {
        var e = !1;
        d.find('.organizationFilter input[type="radio"]:checked').val() === "organized" && (e = !0);
        var f = AC.getGroupId(AC.myid),
            g = {
                admin: {
                    name: L.admin,
                    tooltip: L.chatroom_member_role_admin_desc
                },
                member: {
                    name: L.member,
                    tooltip: L.chatroom_member_role_member_desc
                },
                readonly: {
                    name: L.readonly,
                    tooltip: L.chatroom_member_role_readonly_desc
                }
            },
            h = 0,
            i = 0,
            j = {
                member: a.member_flag,
                contact: a.contact_flag
            },
            m = [],
            l = d.find("._searchBox").cwSearchBox().getVal();
        l && (m = CW.splitWithSpace(l), m = m.map(function(a) {
            return a.toLowerCase()
        }));
        for (l = 0; l < b.length; l++) {
            var k = b[l],
                s = [];
            if (Object.keys) s = Object.keys(j[k]);
            else
                for (var B in j[k]) s.push(B);
            Room.prototype.sortMember(s);
            var I = d.find("._memberTable" + ucfirst(k));
            I.quickEmpty();
            var z = "",
                E =
                s.length;
            200 < E && $("#_roomInfoShowLimitNum" + ucfirst(k)).text(L.chatroom_show_limit_member_num.replace("%%num%%", 200));
            for (var y = 0; y < E; y++) {
                var D = s[y];
                if (k == "member") {
                    if (!(m.length > 0) || AC.isMatchedWithKeyList(m, D)) {
                        h++;
                        if (h > 200) break;
                        z += '<tr id="_memberRowAid' + D + '" class="selectableRow"><td>' + CW.getAvatarPanel(D, {
                            size: "small",
                            hovertip: !1,
                            clicktip: !1
                        }) + '</td><td><p class="roomInfoContactListName autotrim">' + CW.getName(D) + '</p><p class="roomInfoContactListOrgName autotrim">' + CW.getOrgTitle(D) + "</p></td><td>";
                        z += $.cwSelectBox.create([{
                            label: g.admin.name,
                            value: "admin",
                            tooltip: g.admin.tooltip
                        }, {
                            label: g.member.name,
                            value: "member",
                            tooltip: g.member.tooltip
                        }, {
                            label: g.readonly.name,
                            value: "readonly",
                            tooltip: g.readonly.tooltip
                        }], "", a.member_flag[D], {
                            "class": "_memberEditRole",
                            "data-aid": D
                        });
                        z += '</td><td class="_memberDelete" data-aid="' + D + '"><span class="icoFontCancel verticalMiddle"></span><span class="icoTextHide">' + L.button_delete + "</span></td></tr>"
                    }
                } else if (!(e && AC.getGroupId(D) !== f) && (!(m.length > 0) || AC.isMatchedWithKeyList(m,
                        D))) {
                    i++;
                    if (i > 200) break;
                    var M = !!a.checked_flag[D],
                        G;
                    G = M ? "_memberTableIndividualRole" : "_memberTableIndividualRole isHide";
                    var H = a.common_role;
                    a.adding_member_list[D] && (H = a.adding_member_list[D]);
                    z += '<tr class="_cwTextUnselectable _selectableContactRow selectableRow"><td>' + $.cwCheckBox.create(M, !1, D) + "</td>";
                    z += "<td>" + CW.getAvatarPanel(D, {
                        size: "small",
                        hovertip: !1,
                        clicktip: !1
                    }) + "</td>";
                    z += '<td><p class="roomInfoContactListName autotrim">' + CW.getName(D) + '</p><p class="roomInfoContactListOrgName autotrim">' +
                        CW.getOrgTitle(D) + '</p></td><td class="roleSelect" data-aid="' + D + '">';
                    z += $.cwSelectBox.create([{
                        label: g.admin.name,
                        value: "admin",
                        tooltip: g.admin.tooltip
                    }, {
                        label: g.member.name,
                        value: "member",
                        tooltip: g.member.tooltip
                    }, {
                        label: g.readonly.name,
                        value: "readonly",
                        tooltip: g.readonly.tooltip
                    }], "", H, {
                        "class": G,
                        "data-aid": D
                    });
                    z += "</td></tr>"
                }
            }
            /\sMSIE\s*([89]|10)\./i.test(navigator.userAgent) ? I.html(z) : I.get(0).innerHTML = z;
            k === "contact" && a.updateCheckBoxAll(d)
        }
        $("._selectableContactRow").on("click", function() {
            var b =
                "#" + $(this).parents("._contactTableBox").attr("id");
            $(this).find("._cwCB").children().val();
            var d = $(this).find("._cwCB").cwCheckBox(),
                e = $(this).find("._cwSL");
            e.hasClass("isActive") || (a.getCommonRole($(b)) !== "default" && e.cwSelectBox().select(a.common_role), d.toggle())
        }).on("click", "._cwCB", function() {
            $(this).cwCheckBox().toggle()
        });
        $(".roleSelect").each(function() {
            var a = $(this).find("._cwSL");
            $(this).find("._cwSLBox, ._cwSLList").on({
                mouseenter: function() {
                    $(a).addClass("isActive")
                },
                mouseleave: function() {
                    $(a).removeClass("isActive")
                }
            })
        }).on("cwSelectBox_update",
            "._cwSL",
            function() {
                var b = $(this),
                    d = b.attr("data-aid"),
                    b = b.cwSelectBox().getVal();
                a.adding_member_list[d] = b
            });
        e = $("#_roomInfoContact ._cwCB");
        e.length && e.cwCheckBox({
            update: function() {
                a.updateContactCheckBox(this, $("#_roomInfoContact"));
                a.updateCheckBoxAll($("#_roomInfoMemberBox"))
            }
        });
        e = $("#_memberAdditionContact ._cwCB");
        e.length && e.cwCheckBox({
            update: function() {
                a.updateContactCheckBox(this, $("#_memberAdditionContact"));
                a.updateCheckBoxAll($("#_memberAdditionMemberBox"))
            }
        });
        $("#_roomInfoSelectAllContact").cwCheckBox({
            update: function(b,
                d, e) {
                a.checkAllContact(this, e, $("#_roomInfoContact"))
            }
        });
        $("#_roominfoSelectAllBtn").cwButton({
            click: function() {
                $("#_roomInfoSelectAllContact").cwCheckBox().toggle()
            }
        });
        $("#_memberAdditionSelectAllContact").cwCheckBox({
            update: function(b, d, e) {
                a.checkAllContact(this, e, $("#_memberAdditionContact"))
            }
        });
        $("#_memberAdditionSelectAllBtn").cwButton({
            click: function() {
                $("#_memberAdditionSelectAllContact").cwCheckBox().toggle()
            }
        })
    };
    a.embedMemberHidden = function() {
        var b = "";
        b += '<input type="hidden" name="__cwform_role[' +
            AC.myid + ']" value="admin" />';
        for (var d in a.adding_member_list) d && (b += '<input type="hidden" name="__cwform_role[' + d + ']" value="' + a.adding_member_list[d] + '" />');
        $("#_roomInfoMemberHidden").html(b)
    };
    a.buildChatInfo = function() {
        $("#_roomInfoEditRoomId").val(a.room_dat.id);
        $("#_roomInfoName").val(a.room_dat.name);
        $("#_roomInfoIcon").val("");
        $("#_roomInfoIconSelectedValue").val("");
        a.room_dat.icon_preset ? ($("#_roomInfoIconTypePreset").click(), $("#_roomInfoIconPreset").find("[data-pt=" + a.room_dat.icon +
            "]").click()) : ($("#_roomInfoIconTypeGroup").click(), $("#_roomInfoIconTypeUpload").click(), $("#_roomInfoIconSelected").prop("src", RL.rooms[a.room_dat.id].getIcon("src")));
        $("#_roomInfoIconSelected").show();
        $("#_roomInfoIconFileUpload").hide();
        $("#_roomInfoDescription").show().val(CS.convertToEdit(a.room_dat.description)).blur();
        $("#_roomInfoHeader").val("")
    };
    a.prepareRoomDat = function(b) {
        a.prepareRoomInfo();
        a.checked_flag = {};
        a.contact_flag = {};
        a.member_flag = {};
        a.adding_member_list = {};
        a.room_dat = {
            id: 0,
            icon: "group",
            icon_preset: !0,
            description: "",
            member_dat: {},
            "public": 0,
            link_name: "",
            join_need_accept: 0,
            public_description: "",
            header: "",
            allow_see_member: 1,
            allow_upload_file: 1,
            allow_add_task: 1,
            allow_send_message: 1
        };
        if (b) {
            b = RL.rooms[b];
            if (!b) return !1;
            for (var d in a.room_dat) a.room_dat[d] = b[d];
            a.room_dat.name = b.getName()
        } else a.room_dat.member_dat[AC.myid] = "admin";
        d = a.room_dat.member_dat;
        for (var e in d) a.member_flag[e] = d[e];
        for (var f in AC.contact_list) e = AC.contact_list[f], a.member_flag[e] == void 0 && (a.contact_flag[e] = !0, a.checked_flag[e] = !1);
        a.common_role = "member"
    };
    a.prepareRoomIconTooltip = function() {
        f || (f = $("#_roomIconSelector").cwToolTip({
            direction: "bottom"
        }), $("#_roomIconSelectorBtn").click(function() {
            f.open($(this))
        }), f.$el.on("click", "._iconType", function() {
            switch ($(this).val()) {
                case "preset":
                    $("#_roomInfoIconDefault").show();
                    $("#_roomInfoIconUpload").hide();
                    break;
                case "upload":
                    $("#_roomInfoIconUpload").show(), $("#_roomInfoIconDefault").hide()
            }
        }), $("#_roomInfoIconPreset").on("click", "li", function() {
            $("#_roomInfoIconSelected").show();
            $("#_roomInfoIconFileUpload").hide();
            $("#_roomInfoIconPreset").find("li.roomInfoIconActive").removeClass("roomInfoIconActive");
            var a = $(this),
                b = a.find("img");
            a.addClass("roomInfoIconActive");
            $("#_roomInfoIconSelected").prop("src", b.prop("src"));
            $("#_roomInfoIconSelectedValue").val(b.attr("data-pt"));
            f.close()
        }), $("#_roomInfoIcon").on("change", function() {
            f.close();
            $("#_roomInfoIconSelected").hide();
            $("#_roomInfoIconFileUpload").show();
            var a = this.value;
            $("#_roomInfoIconFileUpload").find("p").text(a.split("\\").pop())
        }))
    };
    var j = null;
    a.openAddRoomDialog = function() {
        function b(a) {
            function d(a, b) {
                var g = e(f);
                a-- ? CW.get("gateway.php", {
                    cmd: "check_chat_link_name",
                    link_name: g,
                    rid: RM.id
                }, function(e) {
                    e.used ? d(a, b) : b(g)
                }): b(g)
            }

            function e(a) {
                for (var b = "", d = g, f = 0; f < a; f++) b += d.charAt(Math.random() * d.length | 0);
                return b
            }
            var f = 14,
                g = "abcdefghijklmnopqrstuvwxyz0123456789";
            d(3, a)
        }
        j || (a.prepareRoomIconTooltip(), j = $("#_addRoom").cwDialog({
            parentFloatBox: f.$el,
            title: L.chatroom_create_title,
            width: 750,
            buttonLabels: [L.button_create, L.button_cancel],
            open: function(d) {
                d || (a.buildChatInfo(), $("#_roomInfoContactFilter").cwSearchBox().$el.val(""), $("[name=__roominfo_org_filter]").eq(0).prop("checked", !0), a.buildMember(["contact"], $("#_roomInfoMemberBox")), $("#_addRoomChatInfoArea").append($("#_roomInfoChatInfoBox").show()), $("#_addRoomMemberArea").append($("#_roomInfoMemberBox").show()), $("#_roomInfoSelectAllContact").cwCheckBox().unCheck(), $("#_roomInfoSelectRole").html($.cwSelectBox.create([{
                        label: L.common_role_select_list_default,
                        value: "default"
                    }, {
                        label: L.admin,
                        value: "admin",
                        tooltip: L.chatroom_member_role_admin_desc
                    }, {
                        label: L.member,
                        value: "member",
                        tooltip: L.chatroom_member_role_member_desc
                    }, {
                        label: L.readonly,
                        value: "readonly",
                        tooltip: L.chatroom_member_role_readonly_desc
                    }], "", "default", {
                        "class": "_showDescription",
                        "aria-label": L.common_role_select_list_default_tooltip
                    })), a.is_business_plan || $("#_roomInfoOrganizationFilter").hide(), $("#_addRoomInvitationLinkEditor").hide(), $("#_addRoomInvitationLinkSettingStatus").cwCheckBox().check(), $("#_addRoomInvitationLinkJoinNeedAccept").cwCheckBox().check(),
                    b(function(a) {
                        var b = $("#_addRoomInvitationLinkActive"),
                            d = b.find(".js_invitationLinkBtnCopy"),
                            e = b.find(".js_invitationLinkDisplayInput"),
                            f = b.find(".js_invitationLinkEditorInput"),
                            b = b.find(".js_invitationLinkURL"),
                            g = CHATWORK_MYPAGE_PATH + "/g/",
                            h = g + a;
                        e.val(h);
                        f.val(a);
                        b.text(g);
                        d.attr("data-clipboard-text", h).text(L.invitation_link_code_copy);
                        a = new ZeroClipboard(d[0]);
                        a.on("mouseover", function() {
                            d.addClass("buttonHover")
                        });
                        a.on("mouseout", function() {
                            d.removeClass("buttonHover")
                        });
                        a.on("mousedown", function() {
                            d.addClass("buttonActive").text(L.text_copied)
                        });
                        a.on("mouseup", function() {
                            d.removeClass("buttonActive")
                        })
                    }))
            },
            postOpen: function() {
                $("#_addRoom").scrollTop(0);
                $("#_roomInfoName").focus()
            },
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(b) {
                switch (b) {
                    case 0:
                        b = $("#_roomInfoName").val();
                        if (!b) {
                            for (var d in a.member_flag)
                                if (b && (b += ","), b += AC.getName(d), b.length > 100) {
                                    b += "...";
                                    break
                                }
                            $("#_roomInfoName").val(b)
                        }
                        for (d in a.adding_member_list) a.member_flag[d] = a.adding_member_list[d];
                        d = {};
                        d.member_dat = a.member_flag;
                        d = a.validateRoomInfo(d);
                        a.member_flag[AC.myid] ||
                            d.push(L.chatroom_error_noself);
                        if (d.length) return CW.alert(d.join("\n")), !1;
                        a.embedMemberHidden();
                        $("#_roomInfoForm").submit();
                        CW.showProgress(L.adding);
                        j.close()
                }
            }
        }));
        var d = a.linkCodeEditor($("#_addRoomInvitationLinkActive"));
        d.reset();
        a.prepareRoomDat();
        if (CW.group_limit_num) {
            var e = 0,
                g;
            for (g in RL.rooms) RL.rooms[g].type === "group" && e++;
            if (e >= CW.group_limit_num) {
                e = L.chatroom_error_cant_add;
                g = L.chatroom_error_planlimit;
                g = g.replace(/%%plan_name%%/, PLAN_NAME);
                g = g.replace(/%%limit_num%%/, CW.group_limit_num);
                CW.view.showLimitErrorDialog(e, g);
                return
            }
        }
        $("#_addRoomInvitationLinkSettingStatus").cwCheckBox({
            update: function() {
                var a = this.isChecked() ? !0 : !1;
                d.reset();
                a ? ($("#_addRoomInvitationLinkActive").show(), $("#_addRoomInvitationLinkDisabled").hide(), $("#_addRoomInvitationLinkSettingStatus").cwCheckBox().check(), $("#_roomInfoPublic").val("1")) : ($("#_addRoomInvitationLinkActive").hide(), $("#_addRoomInvitationLinkDisabled").show(), $("#_addRoomInvitationLinkSettingStatus").cwCheckBox().unCheck(), $("#_roomInfoPublic").val("0"));
                j.open("resize")
            }
        });
        $("#_addRoomInvitationLinkActive").on("click", ".js_invitationLinkOpenEditor", function() {
            d.open();
            j.open("resize")
        }).on("click", ".js_invitationLinkCloseEditor", function() {
            d.cancel();
            j.open("resize")
        }).on("click", ".js_invitationLinkBtnEdited", function() {
            a.is_valid_link_name && (d.edit(), j.open("resize"))
        }).on("keyup blur", ".js_invitationLinkEditorInput", function() {
            var b = $(this);
            a.link_code_checker.validate(b, $("#_addRoomInvitationLinkActive"))
        });
        j.open()
    };
    var k = null;
    a.editRoomDescription =
        function(b) {
            a.prepareRoomDat(b);
            k || (k = $("#_roomDescEditDialog").cwDialog({
                title: L.chatroom_edit_desc_title,
                width: 500,
                height: "auto",
                buttonLabels: [L.button_save_long, L.button_cancel],
                buttonSubmit: 0,
                buttonCancel: 1,
                buttonClick: function(b) {
                    var d = this;
                    switch (b) {
                        case 0:
                            var e = {};
                            e.desc = $("#_roomDescEditContent").val();
                            b = a.validateRoomInfo(e);
                            if (b.length > 0) return CW.alert(b.join("\n")), !1;
                            else CW.post("gateway.php", {
                                cmd: "update_room",
                                room_id: d.data.room_id,
                                description: e.desc
                            }, function() {
                                RL.rooms[d.data.room_id].description =
                                    e.desc;
                                CW.watch()
                            }), d.close()
                    }
                },
                open: function(a) {
                    this.data.room_id = a;
                    $("#_roomDescEditContent").val(CS.convertToEdit(RL.rooms[this.data.room_id].description)).focus()
                },
                postOpen: function() {
                    $("#_roomDescEditContent").focus()
                }
            }));
            k.open(b)
        };
    var g = null;
    a.editRoomInfo = function(b) {
        g || (a.prepareRoomIconTooltip(), g = $("#_roomInfoEditDialog").cwDialog({
            parentFloatBox: f.$el,
            title: L.chatroom_info_edit,
            width: 750,
            height: "auto",
            buttonLabels: [L.button_save_long, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(b) {
                switch (b) {
                    case 0:
                        if (b = {}, b.name = trim($("#_roomInfoName").val()), b.desc = $("#_roomInfoDescription").val(), $("#_roomInfoIconTypePreset")[0].checked ? (b.icon_type = "preset", b.preset = $("#_roomInfoIconSelectedValue").val()) : (b.icon_type = "upload", b.icon = $("#_roomInfoIcon").val()), b = a.validateRoomInfo(b), b.length > 0) return CW.alert(b.join("\n")), !1;
                        else $("#_roomInfoIcon").val() && CW.showProgress(L.saving), $("#_roomInfoEditForm").submit(), this.close()
                }
            },
            open: function(b) {
                this.data.room_id = b;
                a.prepareRoomDat(this.data.room_id);
                a.buildChatInfo();
                $("#_roomInfoEditContent").append($("#_roomInfoChatInfoBox").show())
            },
            postOpen: function() {
                $("#_roomInfoName").focus()
            }
        }));
        g.open(b)
    };
    var l = null;
    a.editRoomMember = function(b) {
        l || (l = $("#_roomMemberEditDialog").cwDialog({
            title: L.member_edit_dialog_title,
            width: 750,
            height: "auto",
            buttonLabels: [L.button_save, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(b) {
                switch (b) {
                    case 0:
                        if (b = {}, b.member_dat = a.member_flag, b = a.validateRoomInfo(b), b.length > 0) return CW.alert(b.join("\n")), !1;
                        else {
                            var d =
                                this.data.room_id;
                            CW.post("gateway.php", {
                                cmd: "update_room",
                                room_id: d,
                                role: a.member_flag
                            }, function(b) {
                                b.message ? CW.alert(b.message) : (RL.rooms[d].member_dat = a.member_flag, CW.watch())
                            });
                            this.close()
                        }
                }
            },
            open: function(b) {
                this.data.room_id = b;
                $("#_roomMemberEditDialog").append($("#_memberEditMemberBox").show());
                $("#_memberEditMemberTableBox").scrollTop(0);
                $("#_memberEditMemberFilter").cwSearchBox().$el.val("");
                a.prepareRoomDat(b);
                a.buildMember(["member"], $("#_memberEditMemberBox"))
            }
        }));
        l.open(b)
    };
    var m =
        null;
    a.addRoomMember = function(b) {
        function d(a) {
            e.reset();
            a ? ($("#_memberAdditionInvitationLinkActive").show(), $("#_memberAdditionInvitationLinkDisabled").hide(), $("#_memberAdditionInvitationLinkSettingStatus").cwCheckBox().check(), $("#_memberAdditionPublic").val("1")) : ($("#_memberAdditionInvitationLinkActive").hide(), $("#_memberAdditionInvitationLinkDisabled").show(), $("#_memberAdditionInvitationLinkSettingStatus").cwCheckBox().unCheck(), $("#_memberAdditionPublic").val("0"));
            m.open()
        }
        m || (m = $("#_roomMemberAdditionDialog").cwDialog({
            title: L.member_addition_dialog_title,
            width: 750,
            height: "auto",
            buttonLabels: [L.button_save, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(b) {
                var d = this.data.room_id;
                switch (b) {
                    case 0:
                        var b = {},
                            e = [],
                            f;
                        for (f in a.adding_member_list) a.member_flag[f] = a.adding_member_list[f];
                        var g = RL.rooms[d];
                        Object.keys(g.member_dat).map(function(b) {
                            b in a.member_flag || (a.member_flag[b] = g.member_dat[b])
                        });
                        b.member_dat = a.member_flag;
                        e = a.validateRoomInfo(b);
                        a.is_valid_link_name || e.push(L.invitation_link_setting_error_invalid_link_name);
                        if (e.length >
                            0) return CW.alert(e.join("\n")), !1;
                        else f = $("#_memberAdditionPublic").val(), b = $("#_memberAdditionInvitationLinkActive").find(".js_invitationLinkEditorInput").val(), e = $("#_memberAdditionInvitationLinkJoinNeedAccept").cwCheckBox().isChecked() ? 1 : 0, CW.showProgress(L.saving), CW.post("gateway.php", {
                                cmd: "update_room",
                                room_id: d,
                                "public": f,
                                link_code: b,
                                join_need_accept: e,
                                role: a.member_flag,
                                update_room_version: "2"
                            }, function(b) {
                                b.message ? CW.alert(b.message) : (RL.rooms[d].member_dat = a.member_flag, CW.watch())
                            }),
                            CW.hideProgress(), this.close()
                }
            },
            open: function(b) {
                if (b) {
                    this.data.room_id = b;
                    var e = RL.rooms[b];
                    a.is_valid_link_name = !0;
                    $("#_roomMemberAdditionDialog").append($("#_memberAdditionMemberBox").show());
                    $("#_memberAdditionContactFilter").cwSearchBox().$el.val("");
                    $("#_memberAdditionContactTableBox").scrollTop(0);
                    $("#_memberAdditionSelectAllContact").cwCheckBox().unCheck();
                    $("[name=__memberAddition_org_filter]").eq(0).prop("checked", !0);
                    $("#_memberAdditionSelectRole").html($.cwSelectBox.create([{
                        label: L.common_role_select_list_default,
                        value: "default"
                    }, {
                        label: L.admin,
                        value: "admin",
                        tooltip: L.chatroom_member_role_admin_desc
                    }, {
                        label: L.member,
                        value: "member",
                        tooltip: L.chatroom_member_role_member_desc
                    }, {
                        label: L.readonly,
                        value: "readonly",
                        tooltip: L.chatroom_member_role_readonly_desc
                    }], "", "default", {
                        "class": "_showDescription",
                        "aria-label": L.common_role_select_list_default_tooltip
                    }));
                    a.is_business_plan || $("#_memberAdditionOrganizationFilter").hide();
                    a.prepareRoomDat(b);
                    var f = $("#_memberAdditionInvitationLinkActive"),
                        g = f.find(".js_invitationLinkBtnCopy"),
                        b = f.find(".js_invitationLinkURL"),
                        h = f.find(".js_invitationLinkDisplayInput"),
                        f = f.find(".js_invitationLinkEditorInput"),
                        i = CHATWORK_MYPAGE_PATH + "/g/",
                        j;
                    j = e.link_name ? e.link_name : e.id;
                    var m = i + j;
                    b.text(i);
                    h.val(m);
                    f.val(j);
                    g.attr("data-clipboard-text", m).text(L.invitation_link_code_copy);
                    b = new ZeroClipboard(g[0]);
                    b.on("mouseover", function() {
                        g.addClass("buttonHover")
                    });
                    b.on("mouseout", function() {
                        g.removeClass("buttonHover")
                    });
                    b.on("mousedown", function() {
                        g.addClass("buttonActive").text(L.text_copied)
                    });
                    b.on("mouseup", function() {
                        g.removeClass("buttonActive")
                    });
                    d(e["public"]);
                    e.join_need_accept ? $("#_memberAdditionInvitationLinkJoinNeedAccept").cwCheckBox().check() : $("#_memberAdditionInvitationLinkJoinNeedAccept").cwCheckBox().unCheck();
                    a.room_dat["public"] ? ($("#_memberAdditionInvitationLinkSettingStatus").cwCheckBox().check(), $("#_memberAdditionInvitationLinkActive").show()) : ($("#_memberAdditionInvitationLinkSettingStatus").cwCheckBox().unCheck(), $("#_memberAdditionInvitationLinkActive").hide());
                    a.buildMember(["contact"], $("#_memberAdditionMemberBox"))
                }
            }
        }));
        var e = a.linkCodeEditor($("#_memberAdditionInvitationLinkActive"));
        e.reset();
        $("#_memberAdditionInvitationLinkSettingStatus").cwCheckBox({
            update: function() {
                var a = this.isChecked() ? !0 : !1;
                d(a)
            }
        });
        $("#_memberAdditionInvitationLinkActive").on("click", ".js_invitationLinkOpenEditor", function() {
            e.open();
            m.open()
        }).on("click", ".js_invitationLinkCloseEditor", function() {
            e.cancel();
            m.open()
        }).on("click", ".js_invitationLinkBtnEdited", function() {
            a.is_valid_link_name &&
                (e.edit(), m.open())
        }).on("keyup blur", ".js_invitationLinkEditorInput", function() {
            var b = $(this);
            a.link_code_checker.validate(b, $("#_memberAdditionInvitationLinkActive"))
        });
        m.open(b)
    };
    a.validateRoomInfo = function(b) {
        var d = [];
        b.name != void 0 && b.name == "" && d.push(L.chatroom_error_no_name);
        if (b.member_dat != void 0) {
            var b = !1,
                e;
            for (e in a.member_flag)
                if (a.member_flag[e] == "admin") {
                    b = !0;
                    break
                }
            b || d.push(L.chatroom_error_noadmin)
        }
        return d
    }
}

function RoomSubView(b) {
    var a = this;
    a.model = b;
    a.promotion_initialized = !1;
    a.prepare = function() {
        var b = $.cookie("ui_subcontent_width");
        b !== void 0 && a.resizeWidth(b);
        var d = 0;
        $.cwResize.setHandle($("#_subContentAreaHandle"), {
            type: "col",
            start: function() {
                d = $C("#_subContent").width()
            },
            move: function(b) {
                a.resizeWidth(d - b)
            }
        });
        var e = null;
        $C("#_subRoomDescriptionWrapper").on("mouseenter", function() {
            if ($(this).data("is_overflow") && $C("#_subContentArea").height() < $C("#_subContentAreaContent").height()) {
                if (e === null) {
                    $C("#_subContentArea").css({
                        overflow: "hidden",
                        width: "100%",
                        "padding-right": 0
                    });
                    var a = $("#_subRoomInfoTitle").width();
                    $C("#_subContentArea").css({
                        overflow: "auto"
                    });
                    e = a - $("#_subRoomInfoTitle").width()
                }
                $C("#_subContentArea").css({
                    overflow: "hidden",
                    width: ($C("#_subContentArea").width() - e).toString() + "px",
                    "padding-right": e + "px"
                })
            }
        }).on("mouseleave", function() {
            $(this).data("is_overflow") && $C("#_subContentArea").css({
                overflow: "auto",
                width: "100%",
                "padding-right": 0
            })
        });
        $("#_closeChatInfo").click(function() {
            var a = $("#_subRoomChatInfo");
            a.isVisible() ? a.stop().slideUp() :
                a.stop().slideDown()
        });
        $("#_groupCall").click(function() {
            a.openGroupCall(RM.id)
        });
        $C("#_chatFileAll").cwButton({
            size: "large",
            click: function() {
                FL.view.openFileList(RM.id)
            }
        });
        a.prepareNavigation();
        a.prepareMember();
        $("#_subEditRoomInfo").click(function() {
            RM.type == "group" ? RD.view.editRoomInfo(RM.id) : RD.view.editRoomDescription(RM.id)
        });
        var f = ["invitation_link_setting", "room_permission_setting", "same_member_addchat", "hr", "leave_room", "delete_contact", "delete_room"];
        $C("#_chatRoomSetting").cwButton({
            size: "large"
        }).$el.cwDropDown({
            list: function() {
                for (var a = [], b = {}, d = 0, e = f.length; d < e; d++) {
                    var g = f[d];
                    b[g] = !1
                }
                switch (RM.type) {
                    case "group":
                        b.leave_room = !0;
                        break;
                    case "contact":
                        b.delete_contact = !0
                }
                if (RM.type !== "contact") switch (RM.member_dat[AC.myid]) {
                    case "admin":
                        b.invitation_link_setting = !0, b.room_permission_setting = !0, b.same_member_addchat = !0, b.hr = !0, b.delete_room = !0
                }
                d = 0;
                for (e = f.length; d < e; d++)
                    if (g = f[d], b[g]) switch (g) {
                        case "invitation_link_setting":
                            a.push({
                                value: "invitation_link_setting",
                                label: L.chatroom_invitation_link_setting
                            });
                            break;
                        case "room_permission_setting":
                            a.push({
                                value: "room_permission_setting",
                                label: L.chatroom_room_permission_setting
                            });
                            break;
                        case "same_member_addchat":
                            a.push({
                                value: "same_member_addchat",
                                label: L.chatroom_createchat_same_members
                            });
                            break;
                        case "hr":
                            a.push("hr");
                            break;
                        case "leave_room":
                            a.push({
                                value: "leave_room",
                                label: L.chatroom_leave
                            });
                            break;
                        case "delete_contact":
                            a.push({
                                value: "delete_contact",
                                label: L.contact_delete
                            });
                            break;
                        case "delete_room":
                            a.push({
                                value: "delete_room",
                                label: L.chatroom_delete
                            })
                    }
                    return a
            },
            select: function(a) {
                if (!RM || !RM.id) CW.alert(L.error_no_select);
                else {
                    var b =
                        RM.id;
                    switch (a) {
                        case "invitation_link_setting":
                            RD.view.openInvitationLinkSetting(b);
                            break;
                        case "room_permission_setting":
                            RD.view.openRoomPermissionSetting(b);
                            break;
                        case "same_member_addchat":
                            for (var d = function() {
                                    RD.view.openAddRoomDialog();
                                    RD.view.checkSameMember(RM.member_dat)
                                }, a = RM.getSortedMemberList(), e = !1, f = 0; f < a.length; f++) AC.myid != a[f] && (AC.isContact(a[f]) || (e = !0));
                            e ? CW.confirm(L.chatroom_createchat_same_members_confirm, function() {
                                setTimeout(function() {
                                    d()
                                })
                            }) : d();
                            break;
                        case "delete_contact":
                            a =
                                RM.getAccountId();
                            AC.view.deleteContact(a);
                            break;
                        case "leave_room":
                            CW.confirm(L.chatroom_confirm_leave.replace(/%%room_name%%/, RM.getName()), function() {
                                CW.post("gateway.php", {
                                    cmd: "leave_room",
                                    room_id: b
                                }, function() {
                                    CW.watch()
                                })
                            });
                            break;
                        case "delete_room":
                            a = "", a += L._chatroom_confirm_delete_alert.replace(/%%room_name%%/, escape_html(RM.getName())) + "\n\n", a += L._chatroom_confirm_delete_content + "\n\n", a += "<ul>", a += '<li class="_cwSelectableRow"><label><input type="checkbox" class="_cwDGAgreeCheckbox" /> ' +
                                L._chatroom_confirm_delete_note_1 + "</label></li>", a += '<li class="_cwSelectableRow"><label><input type="checkbox" class="_cwDGAgreeCheckbox" /> ' + L._chatroom_confirm_delete_note_2 + "</label></li>", a += '<li class="_cwSelectableRow"><label><input type="checkbox" class="_cwDGAgreeCheckbox" /> ' + L._chatroom_confirm_delete_note_3 + "</label></li>", a += "</ul>", CW.view.confirmDelete(a, function() {
                                    CW.post("gateway.php", {
                                        cmd: "delete_room",
                                        room_id: b
                                    }, function() {
                                        CW.watch()
                                    })
                                }, null, !0, L._button_delete_with_agreement)
                    }
                }
            }
        });
        SERVICE_PLAN !== "free" && $.cookie("ui_fold_roomsub") === "1" && a.toggleFold();
        CW.view.registerKeyboardShortcut(71, !1, !1, !1, !1, function() {
            RD.view.openAddRoomDialog()
        }).registerKeyboardShortcut(84, !1, !1, !1, !1, function() {
            $C("#_taskNameInput").focus()
        })
    };
    a.hidePromotion = function() {
        $(".promotionArea").css({
            height: "0",
            display: "none"
        })
    };
    a.showPromotion = function() {
        $(".promotionArea").css({
            height: "",
            display: ""
        })
    };
    a.initializePromotion = function() {
        var b = $(".promotionArea .promotionContent div[id]").attr("id");
        b &&
            googletag.cmd.push(function() {
                a.promotion_initialized = !0;
                a.showPromotion();
                googletag.display(b)
            })
    };
    a.refreshPromotion = function() {
        googletag.cmd.push(function() {
            googletag.pubads().refresh()
        })
    };
    var e = "",
        d = null,
        f = null;
    a.prepareTask = function() {
        f = $C("#_taskNameInput").focus(function() {
            a.expandTaskArea(!0);
            a.openFold();
            $(".promotionArea").animate({
                height: 0
            }, function() {
                $(this).css("display", "none")
            })
        }).cwElasticTextArea({
            maxHeight: function() {
                var a = $C("#_taskCancelButton");
                return $C("body").height() - a.offset().top -
                    a.height()
            },
            minHeight: function() {
                var a = this.option.maxHeight();
                if (a >= TM.taskinput_init_height) return TM.taskinput_init_height;
                else if (a > TM.taskinput_min_height) return a;
                return TM.taskinput_min_height
            }
        });
        var b = null;
        d = $("#_taskAssignList").cwListTip({
            search: !0,
            multiSelect: !0,
            placeHolder: L.chatroom_search_member,
            useHtmlLabel: !0,
            list: function() {
                return a.getTaskMemberList(this.data.room_id)
            },
            open: function(a, b) {
                this.data.room_id = b
            },
            update: function() {
                b === null && (b = setTimeout(function() {
                    for (var a = d.getVal(),
                            e = "", h = a.length, i = 0; i < h; i++) {
                        var j = a[i];
                        e += '<div class="assignContent assignMember"><span class="_taskAssignMemberLabel assignContentText" data-aid="' + j + '">' + CW.getName(j) + '</span><span class="_taskAssignCancel assignContentCancel" data-aid="' + j + '"><span class="icoFontCancel"></span><span class="icoTextHide">' + L.button_delete + "</span></span></div>"
                    }
                    e ? ($C("#_assignBox").html(e), $C("#_inchargeEmpty").hide()) : ($C("#_assignBox").quickEmpty(), $C("#_inchargeEmpty").show());
                    f.resize();
                    b = null
                }, 100))
            }
        });
        $C("#_assignButton").click(function() {
            d.open($(this),
                RM.id)
        });
        $("#_assignBox").on("click", "._taskAssignCancel", function() {
            var a = $(this).attr("data-aid");
            d.select(a)
        }).on("mouseover", "._taskAssignMemberLabel", function() {
            var a = $(this),
                b = a.attr("data-aid");
            $.cwMessageTip.isInit(a[0]) || a.cwMessageTip({
                message: function() {
                    return AC.getName(b)
                },
                delay: TM.messagetip_delay
            }).open()
        }).on("click", "._taskAssignMemberLabel", function() {
            $C("#_assignButton").click();
            return !1
        });
        $C("#_inchargeEmpty").click(function() {
            $C("#_assignButton").click()
        });
        var h = $("#_taskAssignQuickList").cwToolTip({
            offsetTop: 7,
            open: function() {
                for (var a = RM.getSortedMemberList(), b = a.length, d = "", e = 0; e < b; e++)
                    if (d += CW.getAvatarPanel(a[e], {
                            size: "small",
                            clicktip: !1
                        }), e > 7) {
                        d += '<span class="_taskAssignMore taskAssignMore icoFontActionMore"></span>';
                        break
                    }
                $C("#_assignQuickBox").html(d)
            },
            close: function() {}
        });
        h.$el.on("click", "._avatar", function() {
            var a = $(this).attr("data-aid");
            d.select(a)
        }).on("click", "._taskAssignMore", function() {
            h.close();
            $C("#_assignButton").click()
        });
        $("#_taskQuickWrapper").on("mouseenter", function() {
            !h.isOpen() &&
                !d.isOpen() && h.open($C("#_taskAssignAddArea"))
        });
        $("#_taskLimitAddArea").on("mouseenter", function() {
            h.isOpen() && h.close()
        });
        $("#_chatContent,#_subRoomMemberArea,#_assignButton").on("mouseenter", function() {
            h.close()
        });
        $C("#_limitButton").cwDatePicker({
            dateLabel: $("#_limit"),
            update: function() {
                this.getVal() ? $C("#_limitEmpty").hide() : $C("#_limitEmpty").show()
            }
        });
        $C("#_limitEmpty").click(function() {
            $C("#_limitButton").click()
        });
        $("#_taskAddButton").click(function() {
            if (RM.id) {
                if (!RM.view.disabled_send) {
                    var b =
                        rtrim(f.getVal());
                    if (b.length != 0) {
                        room_id = RM.id;
                        var d = $C("#_limitButton").cwDatePicker(),
                            g = d.getVal(),
                            h = a.getTaskAssignList();
                        h.length ? (task_data = b + "|" + h.join(",") + "|" + g, e != task_data && (e = task_data, f.setVal(""), a.clearTaskAssign(), d.setVal(""), b = CS.convertToSend(b), a.model.addTask(room_id, b, g, h, function() {
                            a.initTaskArea();
                            latest_chat = e = ""
                        }, function(i) {
                            i ? CW.alert(i) : CW.alert(L.chatsend_error_send_task);
                            latest_chat = e = "";
                            RL.selectRoom(room_id);
                            f.setVal(b);
                            a.setTaskAssign(h);
                            d.setVal(g)
                        }))) : CW.alert(L.chatsend_error_no_incharge)
                    }
                }
            } else CW.alert(L.error_no_select)
        }).keydown(function(a) {
            a.keyCode !=
                9 && a.keyCode == 13 && $(this).click()
        });
        $("#_taskCancelButton").click(function() {
            a.initTaskArea()
        }).keydown(function(a) {
            a.keyCode != 9 && a.keyCode == 13 && $(this).click()
        })
    };
    a.initTaskArea = function() {
        $C("#_taskNameInput").cwElasticTextArea().setVal("").clearFocused();
        $C("#_taskAddArea").addClass("taskContentAreaClose");
        $C("#_taskAddMeta").hide();
        $C("#_limitButton").cwDatePicker().today();
        RM && count(RM.member_dat) == 1 && RM.member_dat[AC.myid] != void 0 ? RS.view.setTaskAssign([AC.myid]) : RS.view.clearTaskAssign();
        return this
    };
    a.prepareNavigation = function() {
        $("#_chatTabRoomInfo").click(function() {
            $("#_chatRoomDescriptionNav").find("li").removeClass("descriptionNavSelected");
            $("#_chatTabRoomInfo").addClass("descriptionNavSelected");
            $("#_subRoomInfoTabContent").show();
            $("#_subRoomTaskTabContent").hide()
        });
        $("#_chatTabTask").click(function() {
            $("#_chatRoomDescriptionNav").find("li").removeClass("descriptionNavSelected");
            $("#_chatTabTask").addClass("descriptionNavSelected");
            $("#_subRoomInfoTabContent").hide();
            $("#_subRoomTaskTabContent").show()
        });
        return this
    };
    a.prepareMember = function() {
        $C("#_subRoomMemberArea").on("click", "#_openMemberDetail", function() {
            a.openMemberDetailDialog(RM.id)
        });
        var b = "",
            d = $("#_showMoreMemberTip").cwListTip({
                search: !0,
                useHtmlLabel: !0,
                placeHolder: L.chatroom_search_member,
                multiSelect: !1,
                selectable: !1,
                list: function() {
                    if (!RM) return [];
                    var a = [],
                        d;
                    for (d in RM.member_dat) b == "nocontact" ? AC.isContact(d) || a.push(d) : RM.member_dat[d] == b && a.push(d);
                    RM.sortMember(a);
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) {
                        var h = a[f];
                        if (h != AC.myid) {
                            var i =
                                AC.getName(h);
                            d.push({
                                keys: AC.getSearchKeys(h),
                                value: h,
                                label: CW.getAvatarPanel(h, {
                                    clicktip: !1,
                                    size: "small"
                                }) + '<p class="autotrim">' + escape_html(i) + "</p>"
                            })
                        }
                    }
                    return d
                },
                select: function(a) {
                    AC.view.openProfileWindow(a);
                    this.close()
                }
            });
        $("#_memberDetailDialog").on("click", "._showMoreMember", function() {
            var a = $(this);
            b = a.attr("data-role");
            d.open(a)
        })
    };
    a.isFolded = function() {
        return a.is_folded
    };
    a.openFold = function() {
        a.isFolded() && a.toggleFold()
    };
    var i = !1;
    a.toggleFold = function() {
        if (!i) {
            var b = $("#_chatContent"),
                d = b.css("right"),
                e = $("#_mainContentExpandRight");
            b.addClass("foldAnimRight");
            i = !0;
            if (d == "0px") {
                a.is_folded = !1;
                b.css("right", $("#_subContent").outerWidth() + "px");
                var f = e.find(".icoFontTriangleLeft").addClass("rotate180");
                setTimeout(function() {
                    $.removeCookie("ui_fold_roomsub");
                    f.removeClass("rotate180 icoFontTriangleLeft").addClass("icoFontTriangleRight");
                    e.addClass("_showDescription");
                    b.removeClass("foldAnimRight");
                    CW.view.resizeLayout()
                }, 300)
            } else a.is_folded = !0, b.css("right", "0px"), f = e.find(".icoFontTriangleRight").addClass("rotate180"),
                setTimeout(function() {
                    $.cookie("ui_fold_roomsub", "1", {
                        expires: 3650
                    });
                    f.removeClass("rotate180 icoFontTriangleRight").addClass("icoFontTriangleLeft");
                    e.removeClass("_showDescription");
                    b.removeClass("foldAnimRight");
                    CW.view.resizeLayout()
                }, 300);
            setTimeout(function() {
                i = !1
            }, 200)
        }
    };
    a.resizeWidth = function(b) {
        if (b < TM.subcontent_min_width) b = TM.subcontent_min_width;
        var d = $C("#_subContent").width();
        if ($C("#_timeLine").width() < TM.timeline_min_width && d < b) return !1;
        $C("#_chatContent").css("right", b + "px");
        $C("#_subContent").width(b);
        $C("#_subContentArea").width(b);
        $.cookie("ui_subcontent_width", b, {
            expires: 3650
        });
        CW.view.resizeLayout();
        return a
    };
    var h = null;
    a.prepareGroupCall = function() {
        h = $("#_groupCallDialog").cwDialog({
            title: "ChatWork Live",
            width: "auto",
            height: "auto",
            open: function(a) {
                $("#_groupCallDialog .chatroomTitle").find(".avatarGroup").attr("src", RM.getIcon("src")).end().find(".chatroomTitleMeta").text(RM.getName({
                    nameonly: !0
                })).end();
                this.data.room_id = a;
                this.data.select_flag = {};
                $C("#_videoChatContactFilter").cwSearchBox().setVal("");
                var b = [],
                    a = RL.rooms[a],
                    d;
                for (d in a.member_dat) d != AC.myid && b.push(d);
                if (b.length > 0) {
                    a.sortMember(b);
                    $C("#_groupCallMember").quickEmpty();
                    for (var a = "", e = 0; e < b.length; e++) d = b[e], a += '<div class="_groupCallMember _cwSelectableRow groupCallMember" data-aid="' + d + '"><div class="groupCallAvatar">' + $.cwCheckBox.create(!1, "", d, {
                        "data-theme": "green"
                    }) + CW.getAvatarPanel(d, {
                        size: "medium",
                        clicktip: !1
                    }) + "</div><p>" + CW.getName(d) + "</p></div>";
                    $C("#_groupCallMember").html(a)
                } else $C("#_groupCallMember").html('<div class="groupcallNoMembers">' +
                    L.live_member_not_found + "</div>")
            },
            postOpen: function() {
                $C("#_videoChatContactFilter").focus()
            },
            buttonLabels: [L.live_video, L.live_voice, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 2,
            buttonClick: function(a) {
                switch (a) {
                    case 0:
                    case 1:
                        var b = [AC.myid],
                            d;
                        for (d in this.data.select_flag) b.push(d);
                        d = "";
                        a = CW.getLiveUrl(this.data.room_id, b, a == 0 ? "video" : "voice");
                        window.open(a, "cwlive", "menubar=0,toolbar=0,titlebar=0,status=0,scrollbars=0,resizable=1");
                        this.close()
                }
            }
        });
        $("#_groupCallCheckAll").click(function() {
            $C("#_groupCallMember").find("._cwCBUnchecked").each(function() {
                var a =
                    $(this);
                a.isVisible() && a.cwCheckBox().check()
            })
        });
        $("#_groupCallUnCheckAll").click(function() {
            $C("#_groupCallMember").find("._cwCBChecked").each(function() {
                var a = $(this);
                a.isVisible() && a.cwCheckBox().unCheck()
            })
        });
        $C("#_groupCallMember").on("cwCheckBox_update", function(a, b, d) {
            b ? h.data.select_flag[d] = b : h.data.select_flag[d] && delete h.data.select_flag[d]
        });
        $("#_videoChatContactFilter").cwSearchBox({
            update: function() {
                var a = h.data.select_flag,
                    b = [],
                    d = RL.rooms[h.data.room_id],
                    e = this.getVal(),
                    f = "",
                    i;
                for (i in d.member_dat)
                    if (i !=
                        AC.myid) {
                        var j = AC.account_dat[i].nm.toLowerCase();
                        e && j.indexOf(e.toLowerCase()) === -1 || b.push(i)
                    }
                $C("#_groupCallMember").quickEmpty();
                if (b.length === 0) f = '<div class="groupcallNoMembers">' + L.live_member_not_found + "</div>";
                else {
                    d.sortMember(b);
                    for (d = 0; d < b.length; d++) i = b[d], f += '<div class="_groupCallMember _cwSelectableRow groupCallMember" data-aid="' + i + '"><div class="groupCallAvatar">' + $.cwCheckBox.create(!!a[i], "", i, {
                            "data-theme": "green"
                        }) + CW.getAvatarPanel(i, {
                            size: "medium",
                            clicktip: !1
                        }) + "</div><p>" +
                        CW.getName(i) + "</p></div>"
                }
                $C("#_groupCallMember").html(f)
            }
        })
    };
    a.openGroupCall = function(b) {
        if (!RL.rooms[b]) return !1;
        h || a.prepareGroupCall();
        h.open(b)
    };
    a.openMemberDetailDialog = function(b) {
        var d = $("#_memberDetailDialog").cwDialog({
            title: L.chatroom_member_detail,
            width: 600,
            autoOpen: !0,
            buttonLabels: [L.button_close],
            buttonCancel: 0,
            buttonClick: function(a) {
                switch (a) {
                    case 0:
                        this.close()
                }
            },
            open: function() {
                a.buildMember(b);
                $("#_memberDetailContent").html(j)
            }
        });
        $("#_memberDetailEditMember").on("click", this,
            function() {
                d.close();
                RD.view.editRoomMember(RM.id)
            })
    };
    var j = "";
    a.buildMember = function(a) {
        var b = RL.rooms[a];
        if (!b) return this;
        for (var d = b.getSortedMemberList(), e = d.length, f = TM.member_preview_show_max, h = "", i = TM.member_detail_show_max, k = {
                admin: "",
                member: "",
                readonly: "",
                nocontact: "",
                requested: ""
            }, w = {
                admin: 0,
                member: 0,
                readonly: 0,
                nocontact: 0,
                requested: 0
            }, A = b.type, x = 0; x < e; x++) {
            var q = d[x],
                p = b.member_dat[q];
            w[p] < i && (k[p] += CW.getAvatarPanel(q, {
                size: "small"
            }));
            x < f && (h += '<li class="chatRoomMemberListItem" role="listitem" aria-label="' +
                escape_html(AC.getName(q)) + '">' + CW.getAvatarPanel(q) + "</li>");
            w[p]++;
            A == "group" && !AC.isContact(q) && (AC.myrequest_dat[q] ? (w.requested < i && (k.requested += CW.getAvatarPanel(q, {
                size: "small"
            })), w.requested++) : (w.nocontact < i && (k.nocontact += CW.getAvatarPanel(q, {
                size: "small"
            })), w.nocontact++))
        }
        e > f ? $("#_openMemberDetail").find(".chatRoomInfoBtnLabel").show().text(function() {
            var a = e - f,
                b = Math.min(a, 99);
            return b === a ? "+" + b : b + "+"
        }).end().find(".chatRoomInfoBtnIcon").hide().end() : $("#_openMemberDetail").find(".chatRoomInfoBtnLabel").hide().end().find(".chatRoomInfoBtnIcon").show().end();
        a = [{
            key: "admin",
            label: L.admin
        }, {
            key: "member",
            label: L.member
        }, {
            key: "readonly",
            label: L.readonly
        }, {
            key: "nocontact",
            label: L.chatroom_member_nocontact,
            boxClass: "noContact",
            after: '<div class="addAllContactBtnArea"><div id="_addNoContactMember" data-rid="' + a + '" class="button">' + L.chatroom_member_add_contact + "</div></div>"
        }, {
            key: "requested",
            label: L.contact_menu_myrequest,
            boxClass: "noContact"
        }];
        b = "";
        d = 0;
        for (x = a.length; d < x; d++)
            if (q = a[d], p = q.key, k[p]) {
                var t = "subContentMemberGroup";
                q.boxClass != void 0 && (t += " " +
                    q.boxClass);
                b += '<div class="' + t + '">';
                q.label && (b += '<div class="subContentGroupInner"><div class="memberListLabel">' + q.label + "\uff1a</div><div>" + k[p]);
                w[p] > i && (b += '<a class="_showMoreMember showMoreMember" data-role="' + p + '">' + L.chatroom_member_rest_number.replace(/%%rest_number%%/, number_format(w[p] - i)) + "</a>");
                q.label && (b += "</div></div>");
                q.after && (b += q.after);
                b += "</div>"
            }
        A === "contact" ? ($C("#_subRoomMemberNum").hide(), $C("#_subRoomMemberList").hide(), j = "") : ($C("#_subRoomMemberNum").show().text(" (" +
            number_format(e) + ")"), $C("#_subRoomMemberList").html(h).show(), j = b);
        RM.member_dat[AC.myid] === "admin" && (j += '<div><a id="_memberDetailEditMember">' + L.member_detail_edit_member_label + "</a></div>");
        return this
    };
    a.setTask = function(b, d, e, h, i) {
        b ? (a.expandTaskArea(!1), h ? f.setVal(f.getVal() + b) : f.setVal(b)) : f.setVal(b);
        i && f.focus();
        d && d.length > 0 && a.setTaskAssign(d);
        e && $C("#_limitButton").cwDatePicker().setVal(e);
        return this
    };
    a.expandTaskArea = function(a) {
        $C("#_taskAddArea").hasClass("taskContentAreaClose") &&
            ($C("#_taskAddArea").removeClass("taskContentAreaClose"), a ? $C("#_taskAddMeta").slideDown("fast") : $C("#_taskAddMeta").show());
        return this
    };
    a.getTaskAssignList = function() {
        return d.getVal()
    };
    a.setTaskAssign = function(a) {
        d.setVal(a);
        return this
    };
    a.clearTaskAssign = function() {
        d.clear();
        return this
    };
    a.getTaskMemberList = function(a) {
        for (var a = RL.rooms[a].getSortedMemberList(), b = a.length, d = [], e = 0; e < b; e++) {
            var f = a[e],
                h = AC.getName(f);
            d.push({
                keys: AC.getSearchKeys(f),
                value: f,
                label: CW.getAvatarPanel(f, {
                    clicktip: !1,
                    size: "small"
                }) + '<p class="autotrim">' + escape_html(h) + "</p>"
            })
        }
        return d
    };
    a.showSetting = function() {
        $C("#_chatRoomSetting").show()
    };
    a.hideSetting = function() {
        $C("#_chatRoomSetting").hide()
    };
    var k = 0;
    a.resizeRoomInfo = function(a) {
        a && (k = a);
        var a = $C("#_subRoomDescription").outerHeight(),
            b = $C("#_subRoomInfoTitle").outerHeight(),
            b = k - TM.tasklist_min_height - b;
        if (a < b) $C("#_subRoomDescriptionWrapper").removeClass("subRoomDescriptionOverflow").css({
            height: ""
        }).data("is_overflow", !1);
        else {
            a = b;
            b = Math.max(TM.description_max_height,
                b);
            a > b && (a = b);
            if (a < TM.description_min_height) a = TM.description_min_height;
            $C("#_subRoomDescriptionWrapper").addClass("subRoomDescriptionOverflow").css({
                height: a
            }).data("is_overflow", !0)
        }
    }
}

function ChatSendView(b) {
    var a = this;
    a.model = b;
    var e = 0,
        d = $C("#_chatText"),
        f = $("#_fileSendStatusArea"),
        i = $("#_fileStatus"),
        h = $("#_chatSendArea"),
        j = $("#_chatTextArea"),
        k, g, l, m, n;
    a.prepare = function() {
        a.prepareSendArea();
        a.prepareTo();
        a.prepareEmoticonImage();
        a.prepareSendFile();
        $("#_emoticon").click(function() {
            u || a.prepareEmoticon();
            u.open($(this))
        });
        $("#_mainContentExpandLeft").click(function() {
            RL.view.toggleFold()
        });
        SERVICE_PLAN === "free" ? ($("#_mainContentExpandRight").hide(), $(".chatSendAreaContent").css("margin-right",
            "4px")) : $("#_mainContentExpandRight").click(function() {
            RS.view.toggleFold()
        });
        CW.view.registerKeyboardShortcut(37, !0, !1, !1, !1, function() {
            RL.view.toggleFold()
        }).registerKeyboardShortcut(37, !1, !1, !1, !0, function() {
            RL.view.toggleFold()
        }).registerKeyboardShortcut(39, !0, !1, !1, !1, function() {
            RS.view.toggleFold()
        }).registerKeyboardShortcut(39, !1, !1, !1, !0, function() {
            RS.view.toggleFold()
        }).registerKeyboardShortcut(77, !1, !1, !1, !1, function() {
            d.focus()
        });
        $C("#_editCancel").click(function() {
            a.clearChatEdit();
            a.setChatText("");
            d.blur()
        });
        a.prepareTimeLine()
    };
    var o = null;
    a.prepareTimeLine = function() {
        var b = $("#_timeLine,#_messageSearchResult,#_taskDetailTimeLine,#_replyMessageTip"),
            e = $C("#_timeLine"),
            f = $("#_messageSearchResult"),
            g = {
                reply: function(b) {
                    var e = RM.timeline.chat_id2chat_dat[b];
                    if (e) {
                        d.focus();
                        var f = CW.is_business && ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(e.aid) : AC.getNickName(e.aid);
                        a.setChatText("[" + L.chatsend_reply + " aid=" + e.aid + " to=" + RM.id + "-" + b + "] " + f + "\n", !0)
                    }
                },
                edit: function(b) {
                    if (!RM.timeline.chat_id2chat_dat[b]) return CW.alert(L.chatsend_error_no_exist_for_edit), !1;
                    a.setChatEdit(b, RM);
                    b = d[0];
                    if (b.createTextRange) {
                        var e = b.createTextRange();
                        e.move("character", b.value.length);
                        e.select()
                    } else b.setSelectionRange && b.setSelectionRange(b.value.length, b.value.length)
                },
                task: function(a) {
                    var b = RM.timeline.chat_id2chat_dat[a];
                    b == void 0 && (b = SC.view.msg_dat[a]);
                    if (b) return b.rid != void 0 && RL.selectRoom(b.rid), RS.view.setTask("[" + L.chatsend_quote + " aid=" + b.aid + " time=" + b.tm + "]" + b.msg + "[/" + L.chatsend_quote + "]\n", null, null, !0, !0), $C("#_subContentArea").scrollTo($C("#_taskAddArea")), !1
                },
                unread: function(a) {
                    var b = RM;
                    CW.get("gateway.php", {
                        cmd: "read",
                        room_id: b.id,
                        last_chat_id: a,
                        unread: 1
                    }, function(a) {
                        if (b.id == RM.id) b.read_num = a.read_num, b.build({
                            readLock: !0
                        })
                    })
                },
                link: function(b) {
                    var e = this.findItemById(b).attr("data-rid");
                    RM.id != e && RL.selectRoom(e);
                    d.focus();
                    a.setChatText(CHATWORK_HOME + "/#!rid" + e + "-" + b, !0)
                },
                "delete": function(b) {
                    var d = 0,
                        e = !1;
                    if (match = RM.timeline.chat_id2chat_dat[b].msg.match(/^\[info\][\s\S]+\[download:([0-9]+)\][^\[]+\[\/download\]\[\/info\]$/)) {
                        if (d = match[1], !FL.file_id2file_dat[d] ||
                            FL.file_id2file_dat[d].st != "open") d = 0
                    } else(match = RM.timeline.chat_id2chat_dat[b].msg.match(/^\[info\].+\[task aid=[0-9,]+ st=open lt=[0-9]+\][\s\S]+\[\/task\]\[\/info\]$/)) && (e = !0);
                    if (d) {
                        var f = FL.file_id2file_dat[d];
                        $("#_plainDialogBody").html('<div class="deleteContent"><p class="deleteLabel">' + L.chatsend_delete_filetip + '</p><span class="deleteMeta">' + escape_html(f.fn) + "</span></div>");
                        var g = !1;
                        $("#_plainDialog").cwDialog({
                            title: L.chatsend_confirm_delete_with_file,
                            width: 500,
                            height: "auto",
                            buttonLabels: [L.button_cancel,
                                L.chatsend_button_delete_with_file, L.chatsend_button_delete_message_only
                            ],
                            buttonDelete: [1, 2],
                            buttonCancel: 0,
                            buttonClick: function(e) {
                                var f = this;
                                switch (e) {
                                    case 1:
                                        if (g) break;
                                        g = setTimeout(function() {
                                            g = !1
                                        }, 5E3);
                                        FL.deleteFile(d, function() {
                                            g = clearTimeout(g);
                                            a.model.deleteChat(b);
                                            f.close()
                                        }, function() {
                                            g = clearTimeout(g);
                                            CW.alert(L.file_delete_error_try_again)
                                        });
                                        break;
                                    case 2:
                                        a.model.deleteChat(b), f.close()
                                }
                            }
                        }).open()
                    } else if (e) {
                        var h = [];
                        for (f in TK.task_id2task_dat) e = TK.task_id2task_dat[f], e.st != "deleted" &&
                            e.cid && e.cid == b && h.push(f);
                        var i = h.length;
                        if (i > 0) {
                            for (var j = "", k = 0; k < i; k++) f = h[k], e = TK.task_id2task_dat[f], j += TK.view.getTaskPanel(e, {
                                type: "preview"
                            });
                            $("#_plainDialogBody").html('<div class="deleteContent"><p class="deleteLabel">' + L.chatsend_delete_tasktip + '</p><pre><div class="deleteMeta">' + j + "</div></pre></div>");
                            f = $("#_plainDialog");
                            f.cwDialog({
                                title: L.chatsend_confirm_delete_with_task,
                                width: 500,
                                buttonLabels: [L.button_cancel, L.chatsend_button_delete_with_task, L.chatsend_button_delete_message_only],
                                buttonDelete: [1, 2],
                                buttonCancel: 0,
                                buttonClick: function(d) {
                                    switch (d) {
                                        case 1:
                                            TK.deleteTask(h);
                                            a.model.deleteChat(b);
                                            this.close();
                                            break;
                                        case 2:
                                            a.model.deleteChat(b), this.close()
                                    }
                                }
                            }).open();
                            f.scrollTop(0)
                        } else CW.view.confirmDelete(L.chatsend_confirm_delete, function() {
                            a.model.deleteChat(b)
                        })
                    } else CW.view.confirmDelete(L.chatsend_confirm_delete, function() {
                        a.model.deleteChat(b)
                    })
                },
                copy: function(a) {
                    var b = RM.timeline.chat_id2chat_dat[a];
                    b && $("#_textCopyDialog").cwDialog({
                        width: "auto",
                        height: 280,
                        title: L.chat_action_copy_title,
                        autoOpen: !0,
                        modal: !0,
                        open: function() {
                            var a = $("#_textCopyDialogText");
                            a.val(b.msg);
                            if ($.cwUI.hasFlash) {
                                $("#_copyMessage").quickEmpty();
                                $("#_textCopyButton").show();
                                var d = $("#_copyToClipBoard");
                                d.attr("data-clipboard-text", b.msg);
                                var e = new ZeroClipboard(d[0]);
                                e.on("complete", function() {
                                    $("#_copyMessage").text(L.text_copied)
                                });
                                e.on("mouseover", function() {
                                    d.addClass("buttonHover")
                                });
                                e.on("mouseout", function() {
                                    d.removeClass("buttonHover")
                                });
                                e.on("mousedown", function() {
                                    d.addClass("buttonActive")
                                });
                                e.on("mouseup",
                                    function() {
                                        d.removeClass("buttonActive")
                                    })
                            }
                            setTimeout(function() {
                                a[0].select()
                            })
                        }
                    })
                },
                move: function(a) {
                    var b = this.findItemById(a).attr("data-rid");
                    b && a && RL.selectRoom(b, a)
                },
                quote: function(b) {
                    var e = RM.timeline.chat_id2chat_dat[b];
                    e == void 0 && (e = SC.view.msg_dat[b]);
                    e && (e.rid != void 0 && RL.selectRoom(e.rid), d.focus(), a.setChatText("[" + L.chatsend_quote + " aid=" + e.aid + " time=" + e.tm + "]" + e.msg + "[/" + L.chatsend_quote + "]\n", !0))
                }
            };
        o = e.cwActionBar({
            itemSelector: "._message",
            hoverSelector: "._chatTimeLineMessageBox",
            hoverClass: "chatTimeLineMessageHover",
            checkIgnoreItem: function(a) {
                if (a.attr("data-deleted") === "1") return !0
            },
            idKey: "data-mid",
            descriptionDelay: TM.messagetip_delay,
            open: function(b) {
                b = RM.timeline.chat_id2chat_dat[b];
                !b || b.id == a.model.chatedit_id ? (b = [], more_type_list = []) : b.aid != AC.myid ? (b = ["reply", "quote", "task", "link"], more_type_list = ["copy", "unread"]) : (b = ["quote", "task", "edit", "link"], more_type_list = ["copy", "unread", "delete"]);
                this.setActionList(b);
                this.setMoreActionList(more_type_list)
            }
        });
        for (var i = ["reply", "quote", "task", "edit", "link", "copy", "unread", "delete"], j = 0, k = i.length; j < k; j++) {
            var l = i[j],
                n = ucfirst(l);
            o.addAction(l, {
                label: L["chat_action_" + l],
                description: L["chat_action_" + l + "_desc"],
                iconClass: "icoFontAction" + n,
                click: function(a) {
                    return function() {
                        g[a].apply(this, arguments)
                    }
                }(l)
            })
        }
        for (var m = f.cwActionBar({
                    itemSelector: "._message",
                    hoverSelector: "._chatTimeLineMessageBox",
                    hoverClass: "chatTimeLineMessageHover",
                    idKey: "data-mid",
                    actionList: ["move", "quote", "task", "link"],
                    descriptionDelay: TM.messagetip_delay
                }),
                i = ["quote", "task", "move", "link"], j = 0, k = i.length; j < k; j++)(function() {
            var a = i[j],
                b = ucfirst(a);
            m.addAction(a, {
                label: L["chat_action_" + a],
                description: L["chat_action_" + a + "_desc"],
                iconClass: "icoFontAction" + b,
                click: function() {
                    g[a].apply(this, arguments);
                    SC.view.closeMessageSearchWindow()
                }
            })
        })();
        var q = null;
        b.on("mouseover", "._timeStamp", function() {
            var a = $(this),
                b = a.attr("data-tm"),
                d = a.attr("data-utm"),
                e = a.attr("data-deleted");
            $.cwMessageTip.isInit(a[0]) || a.cwMessageTip({
                useHtml: !0,
                message: function() {
                    var a =
                        L.chat_post_label + ": " + CW.getDate(b);
                    if (d) {
                        var f = L.chat_edit_label;
                        if (e === "1") f = L.chat_delete_label;
                        a += "<br />" + f + ": " + CW.getDate(d)
                    }
                    return a
                }
            }).open()
        }).on("click", "._showMore", function() {
            var a = $(this).closest("._task"),
                b = a.closest("._message"),
                d = b.attr("data-mid"),
                b = b.attr("data-rid");
            a.find("._taskBody").removeClass("taskBodyHide");
            a.find("._showMore").hide();
            RL.rooms[b].timeline.view.task_showmore_flag[d] = !0
        }).on("click", "._replyMessage", function() {
            var a = $(this);
            if (a.closest("#_replyMessageTip").length !==
                0) {
                var b = t.tipFrom,
                    d = b.attr("data-rid"),
                    e = b.attr("data-mid");
                RL.selectRoom(d, e, {
                    highlight: !1,
                    smoothScroll: !0,
                    messageHashUpdate: !1,
                    jumpToCallback: function() {
                        $("#_messageId" + e).find("._replyMessage[data-mid=" + a.attr("data-mid") + "]").click()
                    }
                });
                t.close();
                return !1
            }
            t.open(a)
        }).on("mouseup", "._message", function(b) {
            var d = $(this),
                e = trim(a.getTextSelection());
            if (e && (d = parseInt(d.attr("data-mid"), 10), d = RM.timeline.chat_id2chat_dat[d], d != void 0)) {
                u = "[" + L.chatsend_quote + " aid=" + d.aid + " time=" + d.tm + "]" + e + "[/" +
                    L.chatsend_quote + "]\n";
                var f = $C("#_quoteTip").cwToolTip();
                f.isOpen() ? ($.cwFloatBox.skip(), setTimeout(function() {
                    trim(a.getTextSelection()) || f.close()
                })) : f.open({
                    x: b.clientX,
                    y: b.clientY - 7
                })
            }
        }).on("click", "._moveArrow", function() {
            var a = $(this).closest("._message"),
                b = a.attr("data-rid");
            RL.rooms[b].timeline.view.clearHighlight(a)
        }).on("mouseup", "._speakerName", function() {
            $(this).closest("._message").find("._speaker ._avatarClickTip").triggerHandler("click");
            return !1
        }).on("click", "._showMoreMemberTask",
            function() {
                q || (q = $("#_showMoreAssignMemberTip").cwListTip({
                    search: !0,
                    useHtmlLabel: !0,
                    multiSelect: !1,
                    selectable: !1,
                    list: function() {
                        for (var a = this.data.link.attr("data-aid-list").split(","), b = [], d = a.length, e = 0; e < d; e++) {
                            var f = a[e],
                                g = AC.getName(f);
                            b.push({
                                keys: AC.getSearchKeys(f),
                                value: f,
                                label: CW.getAvatarPanel(f, {
                                    clicktip: !1,
                                    size: "small"
                                }) + '<p class="autotrim">' + escape_html(g) + "</p>"
                            })
                        }
                        return b
                    },
                    select: function(a) {
                        AC.view.openProfileWindow(a);
                        this.close()
                    }
                }));
                var a = $(this);
                q.data.link = a;
                q.open(a)
            });
        $C("#_wrapper").on("click", "._messageLink", function() {
            var a = $(this);
            t.open(a)
        });
        e.scroll(function() {
            RM.timeline && (e.scrollTop() < 10 && (RM.timeline.has_old ? RM.timeline.loadOld() : RM.timeline.build({
                everScroll: !0
            })), RM.timeline.view.has_new && $("#_messageIdEnd").offset().top < h.offset().top + 50 && RM.timeline.build({
                everScroll: !0
            }))
        }).on("click", "._editCancel", function() {
            $C("#_editCancel").click()
        }).on("mouseup", "._avatarHoverTip", function() {
            return !1
        }).on("mouseup", "._messageActionNav", function() {
            return !1
        });
        var J = 0,
            p = 0,
            r = function(a, b) {
                p = J = 0;
                var d = a.attr("data-mid"),
                    e = a.attr("data-rid"),
                    f = null;
                if (e = RL.rooms[e]) e.prepareBuild(), f = e.timeline.chat_id2chat_dat[d];
                $C("#_replyMessageButtonArea").hide();
                f ? (J = e.id, p = f.id, d = e.timeline.view.getMessagePanel(f, {
                        idPrefix: "replyTip"
                    }), $C("#_replyMessageTipContent").html(d), d = '<div class="tooltipFooter"><div class="_replyMoveButton _roomLink button" data-rid="' + J + '" data-mid="' + p + '">' + L.jump_to_message + "</div></div>", $C("#_replyMessageButtonArea").html(d).show()) : e ?
                    b ? $C("#_replyMessageTipContent").html(L.chat_error_not_found) : (e.load({
                        jumpTo: d,
                        autoBuild: !1
                    }, function() {
                        r(a, !0);
                        t.move(a)
                    }), $C("#_replyMessageTipContent").html('<div class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_white.gif" />' + L.chat_loading + "</div>")) : $C("#_replyMessageTipContent").html(L.chat_error_not_found)
            },
            t = $("#_replyMessageTip").cwToolTip({
                width: 400,
                open: function(a) {
                    r(a)
                },
                postOpen: function() {
                    $C("#_replyMessageTipContent").scrollTop(0)
                },
                close: function() {
                    p = J = 0
                }
            });
        t.$el.on("click", "._messageLink", function() {
            t.close();
            var a = $(this),
                b = t.tipFrom,
                d = b.attr("data-rid"),
                e = b.attr("data-mid");
            RL.selectRoom(d, e, {
                highlight: !1,
                smoothScroll: !0,
                messageHashUpdate: !1,
                jumpToCallback: function() {
                    $("#_messageId" + e).find("._messageLink[data-mid=" + a.attr("data-mid") + "]").click()
                }
            })
        }).on("click", "._replyMoveButton", function() {
            t.close()
        });
        var u = "";
        $("#_quotePartlyToMessage").click(function() {
            $C("#_quoteTip").cwToolTip().close();
            a.setChatText(u, !0);
            d.focus()
        });
        $("#_quotePartlyToTask").click(function() {
            $C("#_quoteTip").cwToolTip().close();
            RS.view.setTask(u, null, null, !0, !0)
        })
    };
    a.prepareSendArea = function() {
        var b = $("#_imageFileDrop").cwToolTip({
            open: function() {
                $("#_dragZone").show();
                setTimeout(function() {
                    $("#_imageDropFileNameInput").focus()
                })
            },
            close: function() {
                $("#_dragZone").hide()
            }
        });
        $("#_imageFileDrop").on("click", "#_imageFileDropClose", function() {
            b.close();
            $(this).removeData("send_file")
        }).on("click", "#_imageDropSendButton", function() {
            var d = $("#_imageDropFileNameInput").val(),
                e = $(this).data("send_file");
            e.name = d + "." + e.name.split(".").pop();
            a.sendFiles(RM.id, [e]);
            b.close();
            $(this).removeData("send_file")
        }).on("keypress", "#_imageDropFileNameInput", function(a) {
            a.keyCode === 13 && $("#_imageDropSendButton").click()
        });
        $("#_imageDropFileNameInput").on("change", this, function() {
            var a = $("#_imageDropSendButton").data("send_file");
            a.name = $(this).val() + "." + a.type.match(/(^image\/)(.+)/)[2]
        });
        $("#_sendEnterAction").cwCheckBox({
            update: function() {
                var a = !1;
                if (this.isChecked()) {
                    if (ST.data.enter_action == "br") a = !0, ST.data.enter_action = "send"
                } else if (ST.data.enter_action ==
                    "send") a = !0, ST.data.enter_action = "br";
                a && (ST.data.enter_action == "send" ? this.check() : this.unCheck(), d.triggerHandler("explain_update"), CW.post("gateway.php", {
                    cmd: "send_chat_setting",
                    data: {
                        enter_action: ST.data.enter_action
                    }
                }))
            }
        });
        $("#_sendEnterActionArea").click(function() {
            $("#_sendEnterAction").cwCheckBox().toggle();
            $(this).cwMessageTip().refresh();
            return !1
        }).cwMessageTip({
            closeOnClick: !1,
            message: function() {
                var a = L.chatsend_enter_action_explain + ": ";
                a += $("#_sendEnterAction").cwCheckBox().isChecked() ?
                    L.on : L.off;
                return a
            }
        });
        d.val("");
        a.model.chatedit_id = 0;
        $C("#_sendButton").click(function() {
            a.sendMessage()
        }).keydown(function(b) {
            if (b.keyCode != 9) return b.keyCode == 13 && a.sendMessage(), !1
        });
        d.change(function() {
            a.resizeChatArea()
        }).keydown(function(b) {
            a.chatTextKeyDown(b);
            a.resizeChatArea()
        }).keyup(function(b) {
            _is_msie && get_caret_position_ie(this);
            $.support.isWindowsFirefox || (a.chatTextKeyUp(b), a.resizeChatArea())
        }).focus(function() {
            a.expandChatArea(!0)
        }).blur(function() {
            a.expandChatArea(!1)
        }).bind("explain_update",
            function() {
                if (RM && RM.view.disabled_send) d.attr("placeholder", "");
                else {
                    var a = L.chatsend_chat_explain;
                    a += ST.data.enter_action == "send" ? L.chatsend_enter_action_explain_enter : L.chatsend_enter_action_explain_enter_send;
                    d.attr("placeholder", a)
                }
            }).blur();
        (function() {
            function a() {
                setTimeout(function() {
                    d.change()
                })
            }

            function e(a, b) {
                return a.filter(function(a) {
                    return a.toLowerCase() === b
                }).length
            }

            function f(a) {
                var b = Array.prototype.slice.call(a.types || []);
                if (!e(b, "text/plain") && e(b, "files") && (b = b.map(function(a,
                        b) {
                        return [a, b]
                    }).filter(function(a) {
                        return a[0].toLowerCase() === "files"
                    }).map(function(b) {
                        return a.items[b[1]]
                    }).pop()) && b.type.match(/^image\/(png|jpe?g|gif)$/i)) return b
            }
            var g = window.URL || window.webkitURL;
            d.on("paste", function(d) {
                if (!g || !g.createObjectURL) a();
                else if (d = d.originalEvent.clipboardData) {
                    var e = f(d);
                    if (e) {
                        var d = e.getAsFile(),
                            e = e.type.split("/").pop(),
                            h = g.createObjectURL(d);
                        $("#_imageDropZone").html('<img src="' + h + '">');
                        h = "screenshot_" + CW.getDate(time(), "Y_m_d");
                        $("#_imageDropFileNameInput").val(h);
                        d.name = h + "." + e;
                        $("#_imageDropSendButton").data("send_file", d);
                        b.open($("#_file"))
                    } else a()
                } else a()
            })
        })();
        _is_msie && d.click(function() {
            get_caret_position_ie(this)
        })
    };
    a.getTextSelection = function() {
        function a(b) {
            return $(b).contents().map(function() {
                if (this.nodeType === 3) return this.nodeValue;
                if (this.nodeType === 1 && this.nodeName.toLocaleLowerCase() === "img") return this.getAttribute("alt") || "";
                if (this.nodeType === 1 && this.nodeName.toLocaleLowerCase() === "a") return this.getAttribute("href") || "";
                return a(this)
            }).get()
        }
        try {
            var b = window.getSelection().getRangeAt(0).toString(),
                d = window.getSelection().getRangeAt(0).cloneContents(),
                b = a(d).join("")
        } catch (e) {
            b = ""
        }
        return b
    };
    a.getSendType = function() {
        return "chat"
    };
    a.prepareEmoticonImage = function() {
        for (var a = "", b = 0; b < CW.emoticon.length; b++) {
            var d = CW.emoticon[b];
            a += '<li><img src="image/emoticon/' + d.src + '" title="' + d.title + '" alt="' + d.key + '"/></li>'
        }
        $("#_emoticonGallery").html(a)
    };
    var u = null;
    a.prepareEmoticon = function() {
        var b = "",
            b = _is_mac ? L.chatsend_shift_and_command_hint :
            L.chatsend_shift_and_ctrl_hint;
        u = $("#_emoticonList").cwToolTip({
            open: function() {
                $C("#_emoticonDescription").text(b)
            }
        });
        $C("#_emoticonList").on("mouseenter", "li", function() {
            var a = $(this).find("img");
            $C("#_emoticonDescription").text(a.attr("title") + " " + a.attr("alt"))
        }).on("mouseleave", "li", function() {
            $C("#_emoticonDescription").text(b)
        }).on("click", "li", function() {
            CW.view.key.ctrl || CW.view.key.command ? (u.close(), a.sendMessage($(this).find("img").prop("alt"), !0)) : (d.focus(), a.setChatText($(this).find("img").prop("alt"), !0), CW.view.key.shift || u.close())
        })
    };
    a.prepareTo = function() {
        var b = $("#_toList").cwListTip({
            fixHeight: !0,
            search: !0,
            multiSelect: !1,
            selectOptionArea: '<span id="_toListSelectAll" class="linkStatus">' + L.selectall_full + "</span>",
            useHtmlLabel: !0,
            selectable: !1,
            placeHolder: L.chatroom_search_member,
            list: function() {
                if (!RM) return [];
                var a = RM.getSortedMemberList(),
                    b = [],
                    d = a.length;
                this.data.aid2name = {};
                for (var e = 0; e < d; e++) {
                    var f = a[e];
                    if (f != AC.myid) {
                        var g = CW.is_business && ST.data.private_nickname && !RM.isInternal() ?
                            AC.getDefaultNickName(f) : AC.getNickName(f);
                        this.data.aid2name[f] = g;
                        b.push({
                            keys: AC.getSearchKeys(f),
                            value: f,
                            label: CW.getAvatarPanel(f, {
                                clicktip: !1,
                                size: "small"
                            }) + '<p class="autotrim">' + escape_html(g) + "</p>"
                        })
                    }
                }
                return b
            },
            select: function(b) {
                a.setChatText("[To:" + b + "] " + this.data.aid2name[b] + "\n", !0);
                CW.view.key.shift || CW.view.key.ctrl ? this.searchbox.$el.focus() : (this.close(), d.focus())
            }
        });
        $("#_to").click(function() {
            b.open($(this))
        });
        $("#_toListSelectAll").click(function() {
            for (var e = b.getList(), f = "",
                    g = 0, h = e.length; g < h; g++) {
                var i = e[g].value;
                f += "[To:" + i + "] " + b.data.aid2name[i] + "\n"
            }
            a.setChatText(f, !0);
            b.close();
            d.focus()
        });
        b.ul.on("mouseenter", "li", function() {
            $C("#_nickNameSetting").hide();
            $C("#_toListHint").show()
        }).on("mouseleave", "li", function() {
            $C("#_nickNameSetting").show();
            $C("#_toListHint").hide()
        });
        $("#_nickNameSetting").click(function() {
            a.openSettingNickname(RM.id);
            $("#_toList").cwListTip().close()
        })
    };
    a.prepareSendFile = function() {
        var b = !1;
        if (_has_fileapi) {
            $("#_file").click(function() {
                $C("#_fileUploadTip").show();
                $C("#_fileInput").click()
            });
            var d = !1,
                f = !0,
                g = null,
                h = $("#_fileDrop").cwToolTip({
                    open: function() {
                        f = !1;
                        $C("#_dragZone").show();
                        $C("#_dropZone").css("background-color", "#fff")
                    },
                    close: function() {
                        $C("#_dragZone").hide();
                        f = !0
                    }
                });
            $(document.body).on("dragstart", function() {
                d = !0
            }).on("dragover", function(a) {
                a.stopPropagation();
                a.preventDefault();
                a.originalEvent.dataTransfer.dropEffect = "none"
            }).on("dragenter", function() {
                if (d) return !1;
                if (!$C("#_file").isVisible()) return !1;
                g || (g = setTimeout(function() {
                    f && h.open($("#_file"));
                    g = null
                }));
                return !1
            }).on("dragend", function() {
                d = !1
            });
            $C("#_dragZone").on("dragleave", function() {
                if (d) return !1;
                g || (body_enter = enter_count = 0, h.close());
                return !1
            }).on("drop", function(a) {
                a.stopPropagation();
                a.preventDefault();
                return !1
            });
            $C("#_dropZone").on("dragover", function() {
                if (d) return !1;
                $C("#_dropZone").css("background-color", "#E9F4F5");
                return !1
            }).on("dragleave", function() {
                if (d) return !1;
                $C("#_dropZone").css("background-color", "#fff");
                return !1
            }).on("dragover", function(a) {
                a.stopPropagation();
                a.preventDefault();
                a.originalEvent.dataTransfer.dropEffect = "copy"
            }).on("drop", function(b) {
                b.stopPropagation();
                b.preventDefault();
                if (d) return alert("dragging!"), !1;
                a.sendFiles(RM.id, b.originalEvent.dataTransfer.files);
                setTimeout(function() {
                    body_enter = enter_count = 0;
                    h.close();
                    f = !0
                });
                return !1
            })
        } else {
            var j = $("#_fileUploadTip").cwToolTip();
            $C("#_file").click(function() {
                j.open($(this))
            });
            CW.view.onIframeReady(function() {
                $("#_fileFrame").on("load", function() {
                    try {
                        var a = unescape_html($(this).contents().find("body").html());
                        if (a.length >
                            0) {
                            var a = a.match(/\{.+\}/)[0],
                                d = $.parseJSON(a);
                            d.result.is_storage_limit != void 0 ? CW.showStorageLimitDialog("file") : !d.status.success && d.status.message ? CW.alert(d.status.message) : d.status.success == !0 && (FL.updateStorageInfo(d.result.storage, d.result.storage_limit, d.result.limit_time, d.result.is_limit), CW.watch())
                        } else throw "error";
                    } catch (f) {
                        if (b)
                            if (e++, e > 1) a = L.upload_cancel_send_message.replace(/%%size%%/g, bytename(FL.storage.available)), d = "", CW.plan == "free" ? (a += L.storage_cancel_send_object_suffix_upgrade,
                                d = L.storage_cancel_upgrade_label) : CW.is_business && !CW.is_admin ? (a += L.storage_cancel_send_object_suffix_tell_admin, $("#cw_upload_error_button").hide()) : (a += L.storage_cancel_send_object_suffix_add_storage, d = L.storage_cancel_add_storage_label), $("#cw_upload_error_body").html(a), $("#cw_upload_error_link").val(d), $("#cw_upload_error_dialog").dialog("open");
                            else {
                                setTimeout(function() {
                                    $C("#_fileInput").trigger("change")
                                }, 1E3);
                                return
                            }
                    }
                    b && $(this).prop("src", "");
                    k()
                })
            })
        }
        $C("#_fileInput").change(function() {
            var d = [];
            if (_has_fileapi) d = this.files;
            else {
                if (b) return;
                d = [{
                    name: this.value.replace(/\\/g, "/").replace(/.*\//, ""),
                    size: 0
                }]
            }
            _has_fileapi || j.close();
            b = !0;
            a.sendFiles(RM.id, d)
        });
        var k = function() {
            _has_fileapi || (i.stop().fadeOut(function() {
                $C("#_file").stop().fadeIn()
            }), $C("#_fileHiddenForm")[0].reset());
            file_send_rid = e = 0;
            b = !1
        };
        $("#cw_upload_error_dialog").dialog({
            width: 600,
            height: "auto",
            title: L.storage_cancel_send_cancel.replace(/%%object%%/, L.file),
            autoOpen: !1,
            modal: !0,
            hide: "fade",
            resizable: !1,
            buttons: [DIALOG_CLOSE_BUTTON]
        });
        $("#cw_upload_error_link").click(function() {
            $("#cw_upload_error_dialog").dialog("close");
            CW.plan == "free" ? CW.view.showServiceAdmin("upgrade") : CW.view.showOptionPlanPrice()
        })
    };
    a.testShowSendFiles = function(a, b, d) {
        var a = {
                name: a,
                size: b
            },
            e = $('<li><p class="fileSendStatusMeta autotrim">' + escape_html(a.name) + " (" + bytename(a.size) + ')</p><div class="fileSendStatusBarArea"><div class="_fileSendStatusBarProgress fileSendStatusBar fileSendStatusBarProgress"></div></div><p class="_fileSendProgress fileSendProgress">0%</p><span class="_fileSendCancel icoFontCancel icFileSendCancel"></span><span class="icoTextHide">' +
                L.button_cancel + "</span></li>");
        f.append(e).show();
        e.find("._fileSendProgress").text(d + "%");
        e.find("._fileSendStatusBarProgress").css("width", d + "%");
        CS.view.resizeChatArea(!0);
        e.find("._fileSendCancel").click(function() {
            e.fadeOut("fast", function() {
                e.remove();
                CS.view.resizeChatArea(!0)
            })
        })
    };
    a.sendFiles = function(a, b) {
        for (var d = ["ade", "adp", "bat", "chm", "cmd", "com", "cpl", "exe", "hta", "ins", "isp", "jse", "lib", "mde", "msc", "msp", "mst", "pif", "scr", "sct", "shb", "sys", "vb", "vbe", "vbs", "vxd", "wsc", "wsf", "wsh"],
                e = 0; e < b.length; e++) {
            var g = b[e],
                h = "",
                j = g.name.match(/\.([^\.]+)$/);
            j && (h = j[1].toLowerCase());
            if (g.size >= 5368709120) {
                CW.alert(L.error_upload_over_max_filesize.replace(/%%max_size%%/g, bytename(5368709120)).replace(/%%size%%/g, bytename(g.size)));
                reset_send_file();
                return
            } else if (in_array(h, d)) {
                CW.alert(L.error_upload_executable);
                reset_send_file();
                return
            }
        }
        d = [];
        for (e = 0; e < b.length; e++) g = b[e], d.push({
            key: e,
            name: g.name,
            size: g.size
        });
        CW.post("gateway.php", {
                cmd: "get_s3_post_object",
                room_id: a,
                list: d,
                noredirect: _has_fileapi,
                region: "tokyo"
            }, function(a) {
                for (var d = 0, e = a.upload_info.length; d < e; d++) {
                    var g = a.upload_info[d];
                    if (_has_fileapi) {
                        var h = new FormData;
                        h.append("key", g.uri);
                        h.append("AWSAccessKeyId", g.accesskey);
                        h.append("acl", g.acl);
                        h.append("policy", g.policy);
                        h.append("signature", g.signature);
                        h.append("Content-Type", "application/octet-stream");
                        h.append("Content-Disposition", g.disposition);
                        h.append("x-amz-server-side-encryption", "AES256");
                        g.auth_token && h.append("x-amz-security-token", g.auth_token);
                        h.append("file", b[g.key]);
                        (function(a, b) {
                            var d = !1,
                                e = $.ajax({
                                    url: S3_PATH,
                                    type: "POST",
                                    data: h,
                                    processData: !1,
                                    contentType: !1,
                                    xhr: function() {
                                        var a = new window.XMLHttpRequest;
                                        a.upload.addEventListener("progress", function(a) {
                                            a.lengthComputable && (a = parseInt(a.loaded / a.total * 100, 10), g.find("._fileSendProgress").text(a + "%"), g.find("._fileSendStatusBarProgress").css("width", a + "%"))
                                        });
                                        return a
                                    },
                                    success: function() {
                                        g.find("._fileSendProgress").text("100%");
                                        g.find("._fileSendStatusBarProgress").css("width", "100%");
                                        CW.get(b.redirect, {}, function() {
                                            g.fadeOut("fast",
                                                function() {
                                                    g.remove();
                                                    CS.view.resizeChatArea(!0)
                                                })
                                        }, function() {
                                            CW.view.alert(L.error_upload + L._chatwork_path_help_file_upload_error, "", !0);
                                            g.remove();
                                            CS.view.resizeChatArea(!0)
                                        })
                                    },
                                    error: function() {
                                        d || CW.view.alert(L.error_upload + L._chatwork_path_help_file_upload_error, "", !0);
                                        g.remove();
                                        CS.view.resizeChatArea(!0)
                                    }
                                }),
                                g = $('<li><p class="fileSendStatusMeta autotrim">' + escape_html(a.name) + " (" + bytename(a.size) + ')</p><div class="fileSendStatusBarArea"><div class="_fileSendStatusBarProgress fileSendStatusBar fileSendStatusBarProgress"></div></div><p class="_fileSendProgress fileSendProgress">0%</p><span class="_fileSendCancel icoFontCancel icFileSendCancel"></span><span class="icoTextHide">' +
                                    L.button_cancel + "</span></li>");
                            f.append(g).show();
                            i.fadeIn();
                            g.slideDown("fast", function() {
                                CS.view.resizeChatArea(!0)
                            });
                            g.find("._fileSendCancel").click(function() {
                                d = !0;
                                e.abort()
                            })
                        })(b[g.key], g)
                    } else {
                        $C("#_file").stop().fadeOut(function() {
                            i.stop().fadeIn()
                        });
                        var j = '<input type="hidden" name="key" value="' + g.uri + '"/><input type="hidden" name="AWSAccessKeyId" value="' + g.accesskey + '"/><input type="hidden" name="acl" value="' + g.acl + '"/><input type="hidden" name="success_action_redirect" value="' + g.redirect +
                            '"/><input type="hidden" name="policy" value="' + g.policy + '"/><input type="hidden" name="signature" value="' + g.signature + '"/><input type="hidden" name="Content-Type" value="application/octet-stream"/><input type="hidden" name="Content-Disposition" value="' + escape_html(g.disposition) + '"/><input type="hidden" name="x-amz-server-side-encryption" value="AES256"/>';
                        g.auth_token && (j += '<input type="hidden" name="x-amz-security-token" value="' + g.auth_token + '"/>');
                        $("#_fileHiddenValue").html(j);
                        $("#_fileHiddenForm").submit()
                    }
                }
            },
            function(a) {
                in_array("is_storage_limit", a) ? CW.showStorageLimitDialog("file") : $.isArray(a) ? CW.alert(L.error_upload + " " + a.join("\n")) : CW.alert(L.error_upload)
            })
    };
    a.initChatText = function() {
        d.val("");
        a.expandChatArea(!1);
        CS.clearChatEdit();
        d.blur();
        RS.view.initTaskArea()
    };
    a.sendMessage = function(b, e) {
        if (RM.id) {
            if (!RM.view.disabled_send && (b == void 0 && (b = d.val()), b = rtrim(b), b.length != 0)) {
                room_id = RM.id;
                d.focus();
                if (!e) {
                    var f = a.model.chatedit_id;
                    a.clearChatEdit(f);
                    a.setChatText("");
                    CS.deleteChatDraft(RM.id)
                }
                var b =
                    CS.convertToSend(b),
                    g = RM,
                    h = 0;
                f || (h = g.addSendingChat(b));
                a.model.sendMessage(room_id, b, {
                    read: 1,
                    edit_id: f
                }, function() {
                    h && g.deleteSendingChat(h);
                    g.id == RM.id && !f && g.build();
                    $.support.isWindowsFirefox && $("#_chatText").val("")
                }, function(d) {
                    h && g.deleteSendingChat(h);
                    d ? CW.alert(d) : CW.alert(L.chatsend_error_send);
                    RL.selectRoom(g.id);
                    a.setChatText(b)
                })
            }
        } else CW.alert(L.error_no_select)
    };
    a.chatTextKeyDown = function(b) {
        k = typeof b.modifiers == "undefined" ? b.ctrlKey : b.modifiers & Event.CONTROL_MASK;
        g = typeof b.modifiers ==
            "undefined" ? b.shiftKey : b.modifiers & Event.SHIFT_MASK;
        l = typeof b.modifiers == "undefined" ? b.altKey : b.modifiers & Event.ALT_MASK;
        m = typeof b.modifiers == "undefined" ? b.metaKey : b.modifiers & Event.META_MASK;
        press_key = b.keyCode;
        if (press_key == 38) {
            var e = RM.timeline.getLastChatId();
            d.val() == "" && RM.timeline.chat_id2chat_dat[e].aid == AC.myid && a.setChatEdit(e, RM)
        } else press_key == 27 && a.clearChatEdit();
        $.support.isWindowsFirefox && a.chatTextKeyUp(b);
        if (ST.data.enter_action == "send") {
            if (press_key == 13)
                if (!g && !k && !l && !m) return b.preventDefault(), !1;
                else if (m) return a.chatTextKeyUp({
                keyCode: 13
            }), b.preventDefault(), !1
        } else if (press_key == 13 && (k || g || l || m)) return m && a.chatTextKeyUp({
            keyCode: 13
        }), b.preventDefault(), !1;
        RM && a.raiseRoomToTop(RM.id)
    };
    a.chatTextKeyUp = function(b) {
        up_key = b.keyCode;
        if (up_key == 13 && press_key == 13)
            if (ST.data.enter_action == "send") !g && !k && !l && !m ? a.sendMessage() : (k || l || m) && d.insertAtCaretForMessage("\n");
            else if (k || g || l || m) return a.sendMessage(), !1;
        (function() {
            if (!(up_key !== 13 || press_key !== 13)) {
                var a = d.val(),
                    b = d.prop("selectionStart"),
                    e = d.prop("selectionEnd");
                b === e && (e = a.substr(0, b), e = $.support.isWindowsFirefox ? e.replace(/(^|\n)```\r?\n([\s\S]+?)\r?\n```$/, "$1[code]\n$2\n[/code]") : e.replace(/(^|\n)```\r?\n([\s\S]+?)\r?\n```\n$/, "$1[code]\n$2\n[/code]\n"), a = a.substr(b), d.val(e + a), d.prop("selectionStart", e.length), d.prop("selectionEnd", e.length))
            }
        })();
        d.val() == "" && CS.clearChatEdit();
        press_key == 27 && up_key == 27 && d.blur()
    };
    var r = 0;
    a.expandChatArea = function(b) {
        RM && RM.id != r && (r = !RM.view.disabled_send && b ? RM.id : 0, a.resizeChatArea(!0))
    };
    var v = TM.timeline_min_height,
        w = TM.chattext_min_content_height,
        A = TM.chatSendArea_expandto_height_default,
        x = TM.chatSendArea_initial_height;
    $("#_chatSendToolbar").outerHeight();
    var b = d.height(),
        q = j.innerHeight() - b,
        p = $("#_roomTitle").outerHeight(!0);
    h.outerHeight(!0);
    h.height();
    d.innerWidth();
    d.width();
    var t = 0;
    a.resizeChatArea = function(a) {
        f.isVisible() && f.find("li").length == 0 && (f.hide(), i.fadeOut(), $C("#_fileInput").val(""));
        var b = h.height(),
            e = d.height(),
            g = j.scrollTop();
        d.height(0);
        var k = d[0].scrollHeight;
        k < w && (k = w);
        if (!a && t == k) d.height(e), g != 0 && j.scrollTop(g);
        else {
            var l = f.outerHeight(),
                n = $C("#_chatSendToolbar").outerHeight(),
                m = k + q + n + l,
                o = 0,
                o = r ? A + l : x + l;
            m < o && (m = o);
            o = $C("#_mainContent").height();
            o - m < v ? j.css({
                height: o - v - q - n - l,
                "overflow-y": "scroll"
            }) : j.css({
                height: "",
                "overflow-y": "hidden"
            });
            a || b != m ? (d.height(m - n - l - q), a = h.outerHeight(), a = o - p - a, b = $C("#_timeLine"), e = b.height(), l = b.scrollTop(), b.height(a), b.scrollTop(l + (e - a))) : d.height(e);
            t < k ? j.scrollTop(g + 30) : j.scrollTop(g);
            t = k
        }
    };
    a.disableChatArea = function() {
        $C("#_chatSendTool").hide();
        $C("#_sendEnterActionArea").hide();
        $C("#_editCancel").click();
        $C("#_sendButton").cwButton().disable();
        d.attr("placeholder", L.chatsend_not_allow_send_messages)
    };
    a.enableChatArea = function() {
        $C("#_chatSendTool").show();
        $C("#_sendEnterActionArea").show();
        $C("#_sendButton").cwButton().enable();
        d.trigger("explain_update")
    };
    a.setChatText = function(b, e) {
        a.expandChatArea(!0);
        RM && e && a.raiseRoomToTop(RM.id);
        b = CS.convertToEdit(b);
        e ? d.insertAtCaretForMessage(b) : d.val(b);
        a.resizeChatArea(!0);
        d.scrollTop(1E8);
        if (e) {
            h.height(h.height());
            var f = d.css("height");
            d.css("height", parseInt(f, 10) + 1);
            setTimeout(function() {
                d.css("height", f);
                h.css("height", "")
            }, 500)
        }
    };
    a.setChatEdit = function(b, e) {
        if (a.model.chatedit_id != b) {
            a.model.chatedit_id = b;
            a.setChatEditColor(b);
            if (!e) return !1;
            if (e.timeline.chat_id2chat_dat[b]) {
                var f = (CS.getChatDraft(e.id) || {}).text;
                a.setChatText(f || e.timeline.chat_id2chat_dat[b].msg)
            }
            d.focus()
        }
        RM.timeline.build()
    };
    a.setChatEditColor = function() {
        $C("#_editInfo").show();
        $C("#_externalInfo").hide();
        $C("#_sendButton").cwButton({
            text: L.button_save
        });
        j.addClass("chatSendTextareaEdit")
    };
    a.clearChatEdit = function(b) {
        if (a.model.chatedit_id) $C("#_editInfo").hide(), a.setChatText(""), j.data("external") === !0 && $C("#_externalInfo").show(), j.removeClass("chatSendTextareaEdit"), $C("#_sendButton").cwButton({
            text: L.button_send
        }), a.model.chatedit_id = 0, b || RM.timeline.build()
    };
    a.raiseRoomToTop = function(a) {
        d.val() == "" && (RL.setLastUpdateTime(a, time()), RL.build(), $C("#_roomListArea").scrollTop(0))
    };
    a.prepareSettingNickname = function() {
        n = $("#_nicknameDialog").cwDialog({
            title: L.nickname_title,
            width: 520,
            autoOpen: !1,
            hide: "fade",
            buttonLabels: [L.button_save_long, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(a) {
                if (a === 0) {
                    var b = !1,
                        d = {};
                    $("#_nicknameList").find("input").each(function() {
                        var a = $(this).val(),
                            e = this.id.substr(9);
                        AC.getNickName(e, !0) != a && (d[e] = a, b = !0)
                    });
                    b && CW.post("gateway.php", {
                        cmd: "send_nickname",
                        n: d
                    }, function(a) {
                        for (var b in a.nickname_dat) AC.setNickName(b, a.nickname_dat[b])
                    });
                    this.close()
                }
            },
            open: function(a) {
                var b = "",
                    d = 0,
                    e = [],
                    d = RL.rooms[a].member_dat,
                    f;
                for (f in d) f !=
                    AC.myid && e.push(f);
                e.sort(function(a, b) {
                    if (a == AC.myid) return -1;
                    if (b == AC.myid) return 1;
                    return AC.getMentionNum(b) - AC.getMentionNum(a)
                });
                d = 0;
                for (a = e.length; d < a; d++) f = e[d], b += "<tr><td>" + CW.getAvatarPanel(f, {
                    size: "medium",
                    clicktip: !1,
                    hovertip: !1
                }) + '</td><td class="name"><span class="autotrim">' + CW.getName(f) + '</span></td><td class="nickname"><input type="text" id="_nickname' + f + '" value="' + escape_html(AC.getNickName(f, !0)) + '"/></td></tr>';
                $("#_nicknameList").html(b).scrollTop(0)
            }
        })
    };
    a.openSettingNickname =
        function(b) {
            n || a.prepareSettingNickname();
            n.open(b)
        }
}

function SearchView(b) {
    var a = this;
    a.model = b;
    a.msg_dat = [];
    a.ms_result_timeline_list = [];
    a.ms_result_byroom_dat = {};
    a.ms_result_byroom_idx_list = [];
    a.ms_result_byuser_dat = {};
    a.ms_result_byuser_idx_list = [];
    a.ms_result_type = "timeline";
    a.ms_result_timeline_order = "new";
    a.ms_result_not_found = !1;
    a.search_type = "chat";
    a.prepare = function() {
        a.prepareGlobalSearch();
        $("#_messageSearch").click(function() {
            a.openMessageSearchWindow();
            a.executeSearchMessage($C("#_search").val());
            i || $C("#_messageSearchQuery").focus().caretPos("last")
        })
    };
    var e = 0;
    a.prepareGlobalSearch = function() {
        CW.view.registerKeyboardShortcut(70, !1, !1, !1, !1, function() {
            $C("#_search").focus()
        });
        var b = $("#_searchResult"),
            d = !1,
            f = $("#_search").cwSearchBox({
                update: function() {
                    i()
                }
            });
        $C("#_search").keydown(function(a) {
            var b = !0;
            switch (a.keyCode) {
                case 13:
                    b = !1;
                    e > 0 ? (a = $C("#_searchResultChatList").find("._room"), $(a[e - 1]).click()) : $C("#_messageSearch").click();
                    break;
                case 38:
                    a = $C("#_searchResultChatList").find("._room");
                    if (a.length == 0) e = 0;
                    else if (a.removeClass("searchResultChatListFocus"),
                        e--, e < 0 && (e = 0), e > 0) {
                        a = $(a[e - 1]);
                        a.addClass("searchResultChatListFocus");
                        var d = $("#_searchResultChatList").offset().top;
                        a.offset().top < d && $C("#_searchResultChatList").scrollTo(a)
                    }
                    break;
                case 40:
                    a = $C("#_searchResultChatList").find("._room");
                    d = a.length;
                    d == 0 ? e = 0 : (a.removeClass("searchResultChatListFocus"), e++, d < e && (e = d), a = $(a[e - 1]), a.addClass("searchResultChatListFocus"), d = $("#_messageSearch").offset().top, a.offset().top + a.height() > d && $C("#_searchResultChatList").scrollTo(a));
                    break;
                case 27:
                    e = 0, b = !1
            }
            b ?
                i() : ($(this).blur(), $.cwFloatBox.close())
        }).click(function() {
            $.cwFloatBox.skip(b)
        }).focus(function() {
            i()
        }).blur(function() {
            e = 0
        }).keyup(function(a) {
            a.keyCode === 13 && i(!0)
        });
        var h = "",
            i = function(i) {
                var m = f.getVal();
                m.length > 0 || i ? (h != m && a.buildResult(m), h = m, d || ($C("#_searchResultChatList").find("._room").removeClass("searchResultChatListFocus"), $.cwFloatBox.close(), $.cwFloatBox.open(b, function() {
                    d = !1;
                    e = 0
                }), d = !0, $C("#_searchResultChatList").scrollTop(0))) : $.cwFloatBox.close()
            };
        $C("#_searchResultChatList").on("click",
            "li._room",
            function() {
                $.cwFloatBox.close()
            })
    };
    var d = null,
        f = null,
        i = !1,
        h = null;
    a.prepareMessageSearch = function() {
        function b(a) {
            a.data("_searchMessage_doubleClick", setTimeout(function() {
                a.removeData("_searchMessage_doubleClick")
            }, 3E3))
        }

        function e(a) {
            a.removeData("_searchMessage_doubleClick")
        }
        h = $("#_messageSearchContent").cwFloatWindow({
            title: L.search_title,
            open: function() {
                $C("#_messageSearchExceptWord").val("");
                g.clear();
                $C("#_messageSearchTerm").cwSelectBox().select("all");
                $C("#_messageSearchDateFrom").val("");
                $C("#_messageSearchDateTo").val("");
                $C("#_messageSearchOptionArea").hide();
                $C("#_messageSearchOption ._iconRotate").removeClass("rotate180")
            }
        });
        $("#_messageSearchOption").click(function() {
            var a = $C("#_messageSearchOptionArea");
            a.isVisible() ? (a.slideUp("fast", function() {
                h.resize()
            }), $C("#_messageSearchOption ._iconRotate").removeClass("rotate180")) : (a.slideDown("fast", function() {
                h.resize()
            }), $C("#_messageSearchOption ._iconRotate").addClass("rotate180"))
        });
        var g = $("#_speakerTip").cwListTip({
            search: !0,
            multiSelect: !0,
            useHtmlLabel: !0,
            placeHolder: L.chatroom_search_member,
            list: function() {
                var a = [],
                    b = AC.getSortedMemberList();
                b.unshift(AC.myid);
                for (var d = b.length, e = 0; e < d; e++) {
                    var f = b[e],
                        g = AC.getName(f);
                    a.push({
                        keys: AC.getSearchKeys(f),
                        value: f,
                        label: CW.getAvatarPanel(f, {
                            clicktip: !1,
                            size: "small"
                        }) + '<p class="autotrim">' + escape_html(g) + "</p>"
                    })
                }
                return a
            },
            update: function() {
                for (var a = this.getVal(), b = "", d = a.length, e = 0; e < d; e++) {
                    var f = a[e];
                    b += '<span class="assignContent assignMember"><span class="_taskAssignMemberLabel assignContentText" data-aid="' +
                        f + '">' + CW.getName(f) + '</span><span class="_taskAssignCancel assignContentCancel" data-aid="' + f + '"><span class="icoFontCancel"></span><span class="icoTextHide">' + L.button_delete + "</span></span></span>"
                }
                $("#_messageSearchSpeakerBox").html(b)
            }
        });
        $("#_messageSearchSpeaker").click(function() {
            g.open($(this))
        });
        $("#_messageSearchSpeakerBox").on("click", "._taskAssignCancel", function() {
            var a = $(this).attr("data-aid");
            g.select(a)
        }).on("mouseover", "._taskAssignMemberLabel", function() {
            var a = $(this),
                b = a.attr("data-aid");
            $.cwMessageTip.isInit(a[0]) || a.cwMessageTip({
                message: function() {
                    return AC.getName(b)
                }
            }).open()
        }).on("click", "._taskAssignMemberLabel", function() {
            $("#_messageSearchSpeaker").click();
            return !1
        });
        var i = 0;
        $("#_messageSearchQuery").keydown(function(a) {
            i = a.keyCode
        }).keyup(function(a) {
            i == a.keyCode && a.keyCode == 13 && ($C("#_messageSearchSend").click(), $.cwFloatBox.close())
        });
        $C("#_messageSearchSend").click(function() {
            var d = $C("#_messageSearchQuery").cwSearchBox().getVal(),
                f = $(this);
            if (!f.data("_searchMessage_doubleClick")) {
                b(f);
                SC.cancelSearch();
                $C("#_messageSearchLoading").hide();
                $C("#_messageSearchResult").empty();
                var h = {};
                h.q = d;
                if ($("#_messageSearchOptionArea").isVisible())
                    if (h.exq = $C("#_messageSearchExceptWord").val(), h.aid = g.getVal(), h.term = $("#_messageSearchTerm").cwSelectBox().getVal(), h.term == "specify") {
                        var d = $C("#_messageSearchDateFrom").val(),
                            i = $C("#_messageSearchDateTo").val();
                        if (d != "") h.term_from = strtotime_format(d, ST.data.dateformat);
                        if (i != "") h.term_to = strtotime_format(i, ST.data.dateformat)
                    } else if (h.term !=
                    "all") d = strtotime_format(CW.getDate(time(), "Y-m-d"), "Y-m-d"), h.term_from = d - parseInt(h.term, 10) * 86400, h.term_to = d;
                $C("#_messageSearchResultHead").hide();
                $C("#_messageSearchLoading").show();
                SC.search(h, function(b) {
                    e(f);
                    a.msg_dat = b;
                    a.ms_result_timeline_list = [];
                    a.ms_result_byroom_dat = {};
                    a.ms_result_byroom_idx_list = [];
                    a.ms_result_byuser_dat = {};
                    a.ms_result_byuser_idx_list = [];
                    for (var d in a.msg_dat) a.ms_result_timeline_list.push(parseInt(a.msg_dat[d].id, 10));
                    a.ms_result_timeline_list.sort(function(a, b) {
                        return b -
                            a
                    });
                    d = 0;
                    for (b = a.ms_result_timeline_list.length; d < b; d++) {
                        var g = a.msg_dat[a.ms_result_timeline_list[d]];
                        a.ms_result_byroom_dat[g.rid] == void 0 && (a.ms_result_byroom_idx_list.push(g.rid), a.ms_result_byroom_dat[g.rid] = []);
                        a.ms_result_byroom_dat[g.rid].push(g.id);
                        a.ms_result_byuser_dat[g.aid] == void 0 && (a.ms_result_byuser_idx_list.push(g.aid), a.ms_result_byuser_dat[g.aid] = []);
                        a.ms_result_byuser_dat[g.aid].push(g.id)
                    }
                    a.ms_result_not_found = a.ms_result_timeline_list.length == 0 ? !0 : !1;
                    $C("#_messageSearchLoading").hide();
                    a.buildMSResult()
                }, function() {
                    e(f);
                    CW.alert(L.chat_server_error_try_again);
                    $C("#_messageSearchLoading").hide()
                })
            }
        });
        $C("#_messageSearchTerm").cwSelectBox({
            update: function() {
                this.getVal() == "specify" ? $C("#_messageSearchTerm_specify").show() : $C("#_messageSearchTerm_specify").hide()
            }
        });
        $C("#_messageSearchDateFrom").val("");
        $C("#_messageSearchDateTo").val("");
        $C("#_messageSearchResult").on("click", "._messageSearchChatGroup", function() {
            var a = $(this),
                b = a.attr("data-gid"),
                b = $("#_searchResultGroupId" + b),
                d =
                a.find("._messageSearchArrow");
            b.isVisible() ? (b.slideUp("normal"), a.removeClass("_messageSearchOpen"), d.removeClass("rotate180")) : (b.slideDown("normal"), a.addClass("_messageSearchOpen"), d.addClass("rotate180"))
        });
        f = $("#_messageSearchExpand").cwButtonBar({
            update: function(a) {
                switch (a) {
                    case 0:
                        $C("#_messageSearchResult").find("._messageSearchChatGroup").each(function() {
                            var a = $(this);
                            a.hasClass("_messageSearchOpen") || a.click()
                        });
                        break;
                    case 1:
                        $C("#_messageSearchResult").find("._messageSearchChatGroup").each(function() {
                            var a =
                                $(this);
                            a.hasClass("_messageSearchOpen") && a.click()
                        })
                }
            }
        });
        d = $("#_messageSearchGrouping").cwTabbedBar({
            update: function(b) {
                switch (b) {
                    case 0:
                        a.ms_result_type = "timeline";
                        break;
                    case 1:
                        a.ms_result_type = "byroom";
                        break;
                    case 2:
                        a.ms_result_type = "byuser"
                }
                a.buildMSResult()
            }
        })
    };
    a.openMessageSearchWindow = function() {
        h || a.prepareMessageSearch();
        h.open()
    };
    a.closeMessageSearchWindow = function() {
        h.isOpen() && h.close()
    };
    a.buildSpeaker = function() {};
    a.buildMSResult = function() {
        if (h.isOpen()) {
            var b = $C("#_messageSearchQuery").cwSearchBox().getVal();
            $C("#_messageSearchOverflow").hide();
            if (a.ms_result_timeline_list.length > 0) {
                var e = "",
                    g = 0,
                    i = 0,
                    m = [];
                d.enableButtonAll();
                switch (a.ms_result_type) {
                    case "byroom":
                        f.enableButtonAll();
                        for (var n = 0, g = a.ms_result_byroom_idx_list.length; n < g; n++)
                            for (var o = a.ms_result_byroom_idx_list[n], u = 0, r = a.ms_result_byroom_dat[o].length; u < r; u++) m.push(a.ms_result_byroom_dat[o][u]);
                        break;
                    case "byuser":
                        f.enableButtonAll();
                        n = 0;
                        for (g = a.ms_result_byuser_idx_list.length; n < g; n++) {
                            o = a.ms_result_byuser_idx_list[n];
                            u = 0;
                            for (r = a.ms_result_byuser_dat[o].length; u <
                                r; u++) m.push(a.ms_result_byuser_dat[o][u])
                        }
                        break;
                    default:
                        f.disableButtonAll(), m = a.ms_result_timeline_list
                }
                g = m.length;
                u = {
                    idPrefix: "_search"
                };
                for (n = 0; n < g; n++) {
                    r = a.msg_dat[m[n]];
                    switch (a.ms_result_type) {
                        case "byroom":
                            if (i != r.rid) i = r.rid, n > 0 && (e += "</div>"), e += '<div class="searchResultTitle _messageSearchChatGroup" data-gid="' + r.rid + '">' + RL.rooms[r.rid].getIcon() + " " + escape_html(RL.rooms[r.rid].getName()) + " <span>(" + number_format(a.ms_result_byroom_dat[r.rid].length) + L.search_result_unit + ')</span><span class="_messageSearchArrow transitionAll03sLinear icoFontTriangleDown"></span></div><div id="_searchResultGroupId' +
                                r.rid + '" style="display:none">';
                            break;
                        case "byuser":
                            if (i != r.aid) i = r.aid, n > 0 && (e += "</div>"), e += '<div class="searchResultTitle _messageSearchChatGroup" data-gid="' + r.aid + '">' + CW.getAvatarPanel(r.aid, {
                                clicktip: !1,
                                hovertip: !1,
                                size: "small"
                            }) + " " + CW.getName(r.aid) + " <span>(" + number_format(a.ms_result_byuser_dat[r.aid].length) + L.search_result_unit + ')</span><span class="_messageSearchArrow transitionAll03sLinear icoFontTriangleDown"></span></div><div id="_searchResultGroupId' + r.aid + '" style="display:none">'
                    }
                    u.topView =
                        n === 0 ? !0 : !1;
                    e += TimeLineView.prototype.getMessagePanel(r, u)
                }
                switch (a.ms_result_type) {
                    case "byroom":
                        g > 0 && (e += "</div>");
                        break;
                    case "byuser":
                        g > 0 && (e += "</div>")
                }
                $C("#_messageSearchResultHead").show();
                $C("#_messageSearchResultNum").text(number_format(m.length));
                m.length == SEARCH_MAX_RESULTS && $C("#_messageSearchOverflow").show();
                $C("#_messageSearchResult").html(e);
                b = b.replace(/\u3000|,|\u3001|\u30fb/g, " ").split(" ");
                for (n in b) e = b[n], e.charAt(0) == "+" && (e = e.substr(1)), e = trim(e), e.length > 0 && $("#_messageSearchResult pre").markText(e,
                    "searchEm")
            } else d.disableButtonAll(), f.disableButtonAll(), $C("#_messageSearchResultNum").text("0"), a.ms_result_not_found ? ($C("#_messageSearchResultHead").show(), $C("#_messageSearchResult").html('<div class="searchNotFound alert alertWarning">' + L.search_result_not_found.replace("%%keyword%%", escape_html(b)) + "</div>")) : ($C("#_messageSearchResultHead").show(), $C("#_messageSearchResult").quickEmpty());
            h.resize()
        }
    };
    a.room_show_limit = 50;
    a.buildResult = function(b) {
        if (b == void 0 || b == "") $C("#_searchResultChatList").quickEmpty(),
            $C("#_messageSearchHint").text(""), $C("#_messageSearchIcon").hide();
        else {
            $C("#_messageSearchHint").text(L.search_suggest.replace(/%%keyword%%/, b));
            $C("#_messageSearchIcon").show();
            var d = RL.getSortedRoomList(),
                e = "",
                f = null,
                h = d.length;
            if (h) {
                for (var i = [], i = CW.splitWithSpace(b.toLowerCase()), o = 0, u = 0; u < h; u++)
                    if (d[u] != void 0) {
                        var r = d[u],
                            f = RL.rooms[r];
                        if (!(a.search_type == "contact" && f.type != "contact")) {
                            if (f.type == "contact") {
                                if (!AC.isMatchedWithKeyList(i, f.getAccountId())) continue
                            } else if (!CW.isMatchedWithKeyList(i,
                                    f.getName())) continue;
                            e += RL.view.getRoomItemPanel(r, {
                                showOrg: !0,
                                showPin: !1,
                                showSelected: !1,
                                showRequest: !1,
                                noTrim: !0
                            });
                            o++;
                            if (o >= a.room_show_limit) break
                        }
                    }
                $C("#_searchResultChatList").html(e).find("p").markText(b, "searchEm")
            } else $C("#_searchResultChatList").quickEmpty()
        }
    };
    a.executeSearchMessage = function(a) {
        $C("#_messageSearchQuery").cwSearchBox().setVal(a);
        $C("#_messageSearchSend").click()
    }
}

function CheatSheetView() {
    var b = this,
        a = $("#_cheatSheetContent");
    b.is_mac_os = /\sMac\s/.test(navigator.userAgent);
    b.char_at_cmd = b.is_mac_os ? "\u2318" : "Ctrl";
    b.prepare = function() {
        $("#_closeCheatSheet").on("click", this, function() {
            b.close()
        });
        $("._cheatsheetKeyCommand").text(b.char_at_cmd);
        CW.view.registerKeyboardShortcut(191, !1, !0, !1, !1, function() {
            b.viewToggle()
        });
        $(document).on("keydown.cheatsheet", function(e) {
            e.keyCode === 27 && a.is(":visible") && b.close()
        })
    };
    b.open = function() {
        a.show()
    };
    b.close = function() {
        a.hide()
    };
    b.viewToggle = function() {
        a.toggle()
    }
}
(function(b) {
    function a(a) {
        return typeof a == "object" ? a : {
            top: a,
            left: a
        }
    }
    var e = b.scrollTo = function(a, e, i) {
        b(window).scrollTo(a, e, i)
    };
    e.defaults = {
        axis: "xy",
        duration: parseFloat(b.fn.jquery) >= 1.3 ? 0 : 1,
        limit: !0
    };
    e.window = function() {
        return b(window)._scrollable()
    };
    b.fn._scrollable = function() {
        return this.map(function() {
            if (this.nodeName && b.inArray(this.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) == -1) return this;
            var a = (this.contentWindow || this).document || this.ownerDocument || this;
            return /webkit/i.test(navigator.userAgent) ||
                a.compatMode == "BackCompat" ? a.body : a.documentElement
        })
    };
    b.fn.scrollTo = function(d, f, i) {
        typeof f == "object" && (i = f, f = 0);
        typeof i == "function" && (i = {
            onAfter: i
        });
        d == "max" && (d = 9E9);
        i = b.extend({}, e.defaults, i);
        f = f || i.duration;
        i.queue = i.queue && i.axis.length > 1;
        i.queue && (f /= 2);
        i.offset = a(i.offset);
        i.over = a(i.over);
        return this._scrollable().each(function() {
            function h(a) {
                k.animate(m, f, i.easing, a && function() {
                    a.call(this, d, i)
                })
            }
            if (d != null) {
                var j = this,
                    k = b(j),
                    g = d,
                    l, m = {},
                    n = k.is("html,body");
                switch (typeof g) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(g)) {
                            g =
                                a(g);
                            break
                        }
                        g = b(g, this);
                        if (!g.length) return;
                    case "object":
                        if (g.is || g.style) l = (g = b(g)).offset()
                }
                b.each(i.axis.split(""), function(a, b) {
                    var d = b == "x" ? "Left" : "Top",
                        f = d.toLowerCase(),
                        w = "scroll" + d,
                        A = j[w],
                        x = e.max(j, b);
                    l ? (m[w] = l[f] + (n ? 0 : A - k.offset()[f]), i.margin && (m[w] -= parseInt(g.css("margin" + d), 10) || 0, m[w] -= parseInt(g.css("border" + d + "Width"), 10) || 0), m[w] += i.offset[f] || 0, i.over[f] && (m[w] += g[b == "x" ? "width" : "height"]() * i.over[f])) : (d = g[f], m[w] = d.slice && d.slice(-1) == "%" ? parseFloat(d) / 100 * x : d);
                    i.limit && /^\d+$/.test(m[w]) &&
                        (m[w] = m[w] <= 0 ? 0 : Math.min(m[w], x));
                    !a && i.queue && (A != m[w] && h(i.onAfterFirst), delete m[w])
                });
                h(i.onAfter)
            }
        }).end()
    };
    e.max = function(a, e) {
        var i = e == "x" ? "Width" : "Height",
            h = "scroll" + i;
        if (!b(a).is("html,body")) return a[h] - b(a)[i.toLowerCase()]();
        var i = "client" + i,
            j = a.ownerDocument.documentElement,
            k = a.ownerDocument.body;
        return Math.max(j[h], k[h]) - Math.min(j[i], k[i])
    }
})(jQuery);
(function(b) {
    typeof define === "function" && define.amd ? define(["jquery"], b) : b(jQuery)
})(function(b) {
    function a(a) {
        return a
    }

    function e(a) {
        return decodeURIComponent(a.replace(f, " "))
    }

    function d(a) {
        a.indexOf('"') === 0 && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return i.json ? JSON.parse(a) : a
        } catch (b) {}
    }
    var f = /\+/g,
        i = b.cookie = function(f, j, k) {
            if (j !== void 0) {
                k = b.extend({}, i.defaults, k);
                if (typeof k.expires === "number") {
                    var g = k.expires,
                        l = k.expires = new Date;
                    l.setDate(l.getDate() + g)
                }
                j = i.json ?
                    JSON.stringify(j) : String(j);
                return document.cookie = [i.raw ? f : encodeURIComponent(f), "=", i.raw ? j : encodeURIComponent(j), k.expires ? "; expires=" + k.expires.toUTCString() : "", k.path ? "; path=" + k.path : "", k.domain ? "; domain=" + k.domain : "", k.secure ? "; secure" : ""].join("")
            }
            for (var j = i.raw ? a : e, k = document.cookie.split("; "), g = f ? void 0 : {}, l = 0, m = k.length; l < m; l++) {
                var n = k[l].split("="),
                    o = j(n.shift()),
                    n = j(n.join("="));
                if (f && f === o) {
                    g = d(n);
                    break
                }
                f || (g[o] = d(n))
            }
            return g
        };
    i.defaults = {};
    b.removeCookie = function(a, d) {
        if (b.cookie(a) !==
            void 0) return b.cookie(a, "", b.extend({}, d, {
            expires: -1
        })), !0;
        return !1
    }
});
(function(b) {
    var a = /["\\\x00-\x1f\x7f-\x9f]/g,
        e = {
            "\u0008": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\u000c": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
    b.toJSON = typeof JSON === "object" && JSON.stringify ? JSON.stringify : function(a) {
        if (a === null) return "null";
        var e = typeof a;
        if (e !== "undefined") {
            if (e === "number" || e === "boolean") return "" + a;
            if (e === "string") return b.quoteString(a);
            if (e === "object") {
                if (typeof a.toJSON === "function") return b.toJSON(a.toJSON());
                if (a.constructor === Date) {
                    var i = a.getUTCMonth() + 1,
                        h = a.getUTCDate(),
                        j = a.getUTCFullYear(),
                        e = a.getUTCHours(),
                        k = a.getUTCMinutes(),
                        g = a.getUTCSeconds(),
                        a = a.getUTCMilliseconds();
                    i < 10 && (i = "0" + i);
                    h < 10 && (h = "0" + h);
                    e < 10 && (e = "0" + e);
                    k < 10 && (k = "0" + k);
                    g < 10 && (g = "0" + g);
                    a < 100 && (a = "0" + a);
                    a < 10 && (a = "0" + a);
                    return '"' + j + "-" + i + "-" + h + "T" + e + ":" + k + ":" + g + "." + a + 'Z"'
                }
                if (a.constructor === Array) {
                    i = [];
                    for (h = 0; h < a.length; h++) i.push(b.toJSON(a[h]) || "null");
                    return "[" + i.join(",") + "]"
                }
                h = [];
                for (j in a) {
                    e = typeof j;
                    if (e === "number") i = '"' + j + '"';
                    else if (e === "string") i = b.quoteString(j);
                    else continue;
                    e = typeof a[j];
                    e === "function" || e ===
                        "undefined" || (e = b.toJSON(a[j]), h.push(i + ":" + e))
                }
                return "{" + h.join(",") + "}"
            }
        }
    };
    b.evalJSON = typeof JSON === "object" && JSON.parse ? JSON.parse : function(a) {
        return eval("(" + a + ")")
    };
    b.secureEvalJSON = typeof JSON === "object" && JSON.parse ? JSON.parse : function(a) {
        if (/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return eval("(" + a + ")");
        else throw new SyntaxError("Error parsing JSON, source is not valid.");
    };
    b.quoteString = function(b) {
        if (b.match(a)) return '"' + b.replace(a, function(a) {
            var b = e[a];
            if (typeof b === "string") return b;
            b = a.charCodeAt();
            return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
        }) + '"';
        return '"' + b + '"'
    }
})(jQuery);
(function(b) {
    function a() {}

    function e(a) {
        I = [a]
    }

    function d(a, b, d) {
        return a && a.apply(b.context || b, d)
    }

    function f(f) {
        function M(a) {
            S++ || (T(), Q && (s[K] = {
                s: [a]
            }), W && (a = W.apply(f, [a])), d(H, f, [a, A, f]), d(J, f, [f, A]))
        }

        function G(a) {
            S++ || (T(), Q && a != x && (s[K] = a), d(U, f, [f, a]), d(J, f, [f, a]))
        }
        var f = b.extend({}, z, f),
            H = f.success,
            U = f.error,
            J = f.complete,
            W = f.dataFilter,
            P = f.callbackParameter,
            X = f.callback,
            aa = f.cache,
            Q = f.pageCache,
            Y = f.charset,
            K = f.url,
            N = f.data,
            Z = f.timeout,
            R, S = 0,
            T = a,
            F, O, V;
        p && p(function(a) {
            a.done(H).fail(U);
            H =
                a.resolve;
            U = a.reject
        }).promise(f);
        f.abort = function() {
            !S++ && T()
        };
        if (d(f.beforeSend, f, [f]) === !1 || S) return f;
        K = K || j;
        N = N ? typeof N == "string" ? N : b.param(N, f.traditional) : j;
        K += N ? (/\?/.test(K) ? "&" : "?") + N : j;
        P && (K += (/\?/.test(K) ? "&" : "?") + encodeURIComponent(P) + "=?");
        !aa && !Q && (K += (/\?/.test(K) ? "&" : "?") + "_" + (new Date).getTime() + "=");
        K = K.replace(/=\?(&|$)/, "=" + X + "$1");
        if (Q && (R = s[K])) R.s ? M(R.s[0]) : G(R);
        else {
            q[X] = e;
            F = b(w)[0];
            F.id = l + B++;
            Y && (F[h] = Y);
            E && E.version() < 11.6 ? (O = b(w)[0]).text = "document.getElementById('" + F.id +
                "')." + n + "()" : F[i] = i;
            if (y) F.htmlFor = F.id, F.event = m;
            F[o] = F[n] = F[u] = function(a) {
                if (!F[r] || !/i/.test(F[r])) {
                    try {
                        F[m] && F[m]()
                    } catch (b) {}
                    a = I;
                    I = 0;
                    a ? M(a[0]) : G(k)
                }
            };
            F.src = K;
            T = function() {
                V && clearTimeout(V);
                F[u] = F[o] = F[n] = null;
                t[v](F);
                O && t[v](O)
            };
            t[g](F, P = t.firstChild);
            O && t[g](O, P);
            V = Z > 0 && setTimeout(function() {
                G(x)
            }, Z)
        }
        return f
    }
    var i = "async",
        h = "charset",
        j = "",
        k = "error",
        g = "insertBefore",
        l = "_jqjsp",
        m = "onclick",
        n = "on" + k,
        o = "onload",
        u = "onreadystatechange",
        r = "readyState",
        v = "removeChild",
        w = "<script>",
        A = "success",
        x =
        "timeout",
        q = window,
        p = b.Deferred,
        t = b("head")[0] || document.documentElement,
        s = {},
        B = 0,
        I, z = {
            callback: l,
            url: location.href
        },
        E = q.opera,
        y = !!b("<div>").html("<\!--[if IE]><i><![endif]--\>").find("i").length;
    f.setup = function(a) {
        b.extend(z, a)
    };
    b.jsonp = f
})(jQuery);
(function(b) {
    var a = function(b, d, f, i) {
        b = b.toLowerCase();
        f = f || document.body;
        i = i || {};
        if (typeof i.skipClassName == "string" || i.skipClassName instanceof String) i.skipClassName = [i.skipClassName];
        if (i.skipClassName instanceof Array) i.skipClassName = RegExp("\\b(" + i.skipClassName.join("|") + ")\\b");
        i.tag = i.tag || "span";
        for (f = f.firstChild; f; f = f.nextSibling)
            if (f.nodeType == 1)(!i.skipClassName || !i.skipClassName.test(f.className)) && a(b, d, f, i);
            else if (f.nodeType == 3)
            for (;;) {
                var h = f.nodeValue.toLowerCase().indexOf(b);
                if (h == -1) break;
                var j = f,
                    k = i.tag,
                    g = h;
                h += b.length;
                var l = document.createTextNode(j.nodeValue.substring(0, g));
                j.parentNode.insertBefore(l, j);
                k = document.createElement(k);
                k.appendChild(document.createTextNode(j.nodeValue.substring(g, h)));
                j.parentNode.insertBefore(k, j);
                j.nodeValue = j.nodeValue.substring(h);
                k.className = d
            }
    };
    b.fn.markText = function(b, d, f) {
        return this.each(function() {
            a(b, d, this, f)
        })
    }
})(jQuery);
window.Modernizr = function(b, a, e) {
    function d(a, b) {
        for (var d in a) {
            var f = a[d];
            if (!~("" + f).indexOf("-") && k[f] !== e) return b == "pfx" ? f : !0
        }
        return !1
    }

    function f(a, b, f) {
        var h = a.charAt(0).toUpperCase() + a.slice(1),
            i = (a + " " + g.join(h + " ") + h).split(" ");
        if (typeof b === "string" || typeof b === "undefined") return d(i, b);
        else {
            i = (a + " " + l.join(h + " ") + h).split(" ");
            a: {
                var a = i,
                    j;
                for (j in a)
                    if (h = b[a[j]], h !== e) {
                        if (f === !1) {
                            b = a[j];
                            break a
                        }
                        if (typeof h === "function") {
                            b = h.bind(f || b);
                            break a
                        }
                        b = h;
                        break a
                    }
                b = !1
            }
            return b
        }
    }
    var i = {},
        h = a.documentElement,
        j = a.createElement("modernizr"),
        k = j.style,
        b = " -webkit- -moz- -o- -ms- ".split(" "),
        g = "Webkit Moz O ms".split(" "),
        l = "webkit moz o ms".split(" "),
        m = {
            svg: "http://www.w3.org/2000/svg"
        },
        j = {},
        n = [],
        o = n.slice,
        u, r = function() {
            var b = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return function(d, f) {
                var f = f || a.createElement(b[d] || "div"),
                    d = "on" + d,
                    g = d in f;
                g || (f.setAttribute || (f = a.createElement("div")), f.setAttribute && f.removeAttribute && (f.setAttribute(d, ""), g = typeof f[d] ===
                    "function", typeof f[d] === "undefined" || (f[d] = e), f.removeAttribute(d)));
                return g
            }
        }(),
        v = {}.hasOwnProperty,
        w;
    w = typeof v !== "undefined" && typeof v.call !== "undefined" ? function(a, b) {
        return v.call(a, b)
    } : function(a, b) {
        return b in a && typeof a.constructor.prototype[b] === "undefined"
    };
    if (!Function.prototype.bind) Function.prototype.bind = function(a) {
        var b = this;
        if (typeof b != "function") throw new TypeError;
        var d = o.call(arguments, 1),
            e = function() {
                if (this instanceof e) {
                    var f = function() {};
                    f.prototype = b.prototype;
                    var f = new f,
                        g = b.apply(f, d.concat(o.call(arguments)));
                    if (Object(g) === g) return g;
                    return f
                } else return b.apply(a, d.concat(o.call(arguments)))
            };
        return e
    };
    j.svg = function() {
        return !!a.createElementNS && !!a.createElementNS(m.svg, "svg").createSVGRect
    };
    for (var A in j) w(j, A) && (u = A.toLowerCase(), i[u] = j[A](), n.push((i[u] ? "" : "no-") + u));
    i.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a) w(a, d) && i.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (i[a] !== e) return i;
            b = typeof b == "function" ? b() : b;
            typeof !0 !== "undefined" && (h.className +=
                " " + (b ? "" : "no-") + a);
            i[a] = b
        }
        return i
    };
    k.cssText = "";
    j = null;
    i._version = "2.6.2";
    i._prefixes = b;
    i._domPrefixes = l;
    i._cssomPrefixes = g;
    i.hasEvent = r;
    i.testProp = function(a) {
        return d([a])
    };
    i.testAllProps = f;
    i.testStyles = function(b, d, e, f) {
        var g, i, j = a.createElement("div"),
            k = a.body,
            l = k || a.createElement("body");
        if (parseInt(e, 10))
            for (; e--;) g = a.createElement("div"), g.id = f ? f[e] : "modernizr" + (e + 1), j.appendChild(g);
        e = ['&#173;<style id="smodernizr">', b, "</style>"].join("");
        j.id = "modernizr";
        (k ? j : l).innerHTML += e;
        l.appendChild(j);
        if (!k) l.style.background = "", l.style.overflow = "hidden", i = h.style.overflow, h.style.overflow = "hidden", h.appendChild(l);
        b = d(j, b);
        k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), h.style.overflow = i);
        return !!b
    };
    i.prefixed = function(a, b, d) {
        return b ? f(a, b, d) : f(a, "pfx")
    };
    h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + n.join(" "));
    return i
}(this, this.document);
(function(b, a, e) {
    function d(a) {
        return "[object Function]" == u.call(a)
    }

    function f(a) {
        return "string" == typeof a
    }

    function i() {}

    function h(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function j() {
        var a = r.shift();
        v = 1;
        a ? a.t ? n(function() {
            ("c" == a.t ? E.injectCss : E.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), j()) : v = 0
    }

    function k(b, d, e, f, g, i, k) {
        function l(a) {
            if (!p && h(m.readyState) && (s.r = p = 1, !v && j(), m.onload = m.onreadystatechange = null, a))
                for (var e in "img" != b && n(function() {
                        x.removeChild(m)
                    }, 50), B[d]) B[d].hasOwnProperty(e) &&
                    B[d][e].onload()
        }
        var k = k || E.errorTimeout,
            m = a.createElement(b),
            p = 0,
            q = 0,
            s = {
                t: e,
                s: d,
                e: g,
                a: i,
                x: k
            };
        1 === B[d] && (q = 1, B[d] = []);
        "object" == b ? m.data = d : (m.src = d, m.type = b);
        m.width = m.height = "0";
        m.onerror = m.onload = m.onreadystatechange = function() {
            l.call(this, q)
        };
        r.splice(f, 0, s);
        "img" != b && (q || 2 === B[d] ? (x.insertBefore(m, A ? null : o), n(l, k)) : B[d].push(m))
    }

    function g(a, b, d, e, g) {
        return v = 0, b = b || "j", f(a) ? k("c" == b ? p : q, a, b, this.i++, d, e, g) : (r.splice(this.i++, 0, a), 1 == r.length && j()), this
    }

    function l() {
        var a = E;
        return a.loader = {
            load: g,
            i: 0
        }, a
    }
    var m = a.documentElement,
        n = b.setTimeout,
        o = a.getElementsByTagName("script")[0],
        u = {}.toString,
        r = [],
        v = 0,
        w = "MozAppearance" in m.style,
        A = w && !!a.createRange().compareNode,
        x = A ? m : o.parentNode,
        m = b.opera && "[object Opera]" == u.call(b.opera),
        m = !!a.attachEvent && !m,
        q = w ? "object" : m ? "script" : "img",
        p = m ? "script" : q,
        t = Array.isArray || function(a) {
            return "[object Array]" == u.call(a)
        },
        s = [],
        B = {},
        I = {
            timeout: function(a, b) {
                return b.length && (a.timeout = b[0]), a
            }
        },
        z, E;
    E = function(a) {
        function b(a) {
            var a = a.split("!"),
                d = s.length,
                e =
                a.pop(),
                f = a.length,
                e = {
                    url: e,
                    origUrl: e,
                    prefixes: a
                },
                g, h, i;
            for (h = 0; h < f; h++) i = a[h].split("="), (g = I[i.shift()]) && (e = g(e, i));
            for (h = 0; h < d; h++) e = s[h](e);
            return e
        }

        function g(a, f, h, i, j) {
            var k = b(a),
                m = k.autoCallback;
            k.url.split(".").pop().split("?").shift();
            k.bypass || (f && (f = d(f) ? f : f[a] || f[i] || f[a.split("/").pop().split("?")[0]]), k.instead ? k.instead(a, f, h, i, j) : (B[k.url] ? k.noexec = !0 : B[k.url] = 1, h.load(k.url, k.forceCSS || !k.forceJS && "css" == k.url.split(".").pop().split("?").shift() ? "c" : e, k.noexec, k.attrs, k.timeout),
                (d(f) || d(m)) && h.load(function() {
                    l();
                    f && f(k.origUrl, j, i);
                    m && m(k.origUrl, j, i);
                    B[k.url] = 2
                })))
        }

        function h(a, b) {
            function e(a, h) {
                if (a)
                    if (f(a)) h || (l = function() {
                        var a = [].slice.call(arguments);
                        m.apply(this, a);
                        H()
                    }), g(a, l, b, 0, j);
                    else {
                        if (Object(a) === a)
                            for (J in n = function() {
                                    var b = 0,
                                        d;
                                    for (d in a) a.hasOwnProperty(d) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(J) && (!h && !--n && (d(l) ? l = function() {
                                var a = [].slice.call(arguments);
                                m.apply(this, a);
                                H()
                            } : l[J] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this,
                                        b);
                                    H()
                                }
                            }(m[J])), g(a[J], l, b, J, j))
                    } else !h && H()
            }
            var j = !!a.test,
                k = a.load || a.both,
                l = a.callback || i,
                m = l,
                H = a.complete || i,
                n, J;
            e(j ? a.yep : a.nope, !!k);
            k && e(k)
        }
        var j, k, m = this.yepnope.loader;
        if (f(a)) g(a, 0, m, 0);
        else if (t(a))
            for (j = 0; j < a.length; j++) k = a[j], f(k) ? g(k, 0, m, 0) : t(k) ? E(k) : Object(k) === k && h(k, m);
        else Object(a) === a && h(a, m)
    };
    E.addPrefix = function(a, b) {
        I[a] = b
    };
    E.addFilter = function(a) {
        s.push(a)
    };
    E.errorTimeout = 1E4;
    null == a.readyState && a.addEventListener && (a.readyState = "loading", a.addEventListener("DOMContentLoaded",
        z = function() {
            a.removeEventListener("DOMContentLoaded", z, 0);
            a.readyState = "complete"
        }, 0));
    b.yepnope = l();
    b.yepnope.executeStack = j;
    b.yepnope.injectJs = function(b, d, e, f, g, k) {
        var l = a.createElement("script"),
            m, p, f = f || E.errorTimeout;
        l.src = b;
        for (p in e) l.setAttribute(p, e[p]);
        d = k ? j : d || i;
        l.onreadystatechange = l.onload = function() {
            !m && h(l.readyState) && (m = 1, d(), l.onload = l.onreadystatechange = null)
        };
        n(function() {
            m || (m = 1, d(1))
        }, f);
        g ? l.onload() : o.parentNode.insertBefore(l, o)
    };
    b.yepnope.injectCss = function(b, d, e, f, g, h) {
        var f =
            a.createElement("link"),
            k, d = h ? j : d || i;
        f.href = b;
        f.rel = "stylesheet";
        f.type = "text/css";
        for (k in e) f.setAttribute(k, e[k]);
        g || (o.parentNode.insertBefore(f, o), n(d, 0))
    }
})(this, document);
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
(function(b) {
    function a(a) {
        return a.replace(/,/g, ".").replace(/[^0-9\.]/g, "")
    }
    var e, d = {
            bridge: null,
            version: "0.0.0",
            disabled: null,
            outdated: null,
            ready: null
        },
        f = {},
        i = 0,
        h = {},
        j = 0,
        k = {},
        g = null,
        l = null,
        m = function() {
            var a, b, d, e, f = "ZeroClipboard.swf";
            if (!document.currentScript || !(e = document.currentScript.src)) {
                var g = document.getElementsByTagName("script");
                if ("readyState" in g[0])
                    for (a = g.length; a--;) {
                        if (g[a].readyState === "interactive" && (e = g[a].src)) break
                    } else if (document.readyState === "loading") e = g[g.length - 1].src;
                    else {
                        for (a = g.length; a--;) {
                            d = g[a].src;
                            if (!d) {
                                b = null;
                                break
                            }
                            d = d.split("#")[0].split("?")[0];
                            d = d.slice(0, d.lastIndexOf("/") + 1);
                            if (b == null) b = d;
                            else if (b !== d) {
                                b = null;
                                break
                            }
                        }
                        b !== null && (e = b)
                    }
            }
            e && (e = e.split("#")[0].split("?")[0], f = e.slice(0, e.lastIndexOf("/") + 1) + f);
            return f
        }(),
        n = function() {
            var a = /\-([a-z])/g,
                b = function(a, b) {
                    return b.toUpperCase()
                };
            return function(d) {
                return d.replace(a, b)
            }
        }(),
        o = function(a) {
            if (!a) a = b.event;
            var d;
            if (this !== b) d = this;
            else if (a.target) d = a.target;
            else if (a.srcElement) d = a.srcElement;
            z.activate(d)
        },
        u = function(a, b) {
            if (!a || a.nodeType !== 1) return a;
            if (a.classList) return a.classList.contains(b) || a.classList.add(b), a;
            if (b && typeof b === "string") {
                var d = (b || "").split(/\s+/);
                if (a.nodeType === 1)
                    if (a.className) {
                        for (var e = " " + a.className + " ", f = a.className, g = 0, h = d.length; g < h; g++) e.indexOf(" " + d[g] + " ") < 0 && (f += " " + d[g]);
                        a.className = f.replace(/^\s+|\s+$/g, "")
                    } else a.className = b
            }
            return a
        },
        r = function(a, b) {
            if (!a || a.nodeType !== 1) return a;
            if (a.classList) return a.classList.contains(b) && a.classList.remove(b),
                a;
            if (b && typeof b === "string" || b === void 0) {
                var d = (b || "").split(/\s+/);
                if (a.nodeType === 1 && a.className)
                    if (b) {
                        for (var e = (" " + a.className + " ").replace(/[\n\t]/g, " "), f = 0, g = d.length; f < g; f++) e = e.replace(" " + d[f] + " ", " ");
                        a.className = e.replace(/^\s+|\s+$/g, "")
                    } else a.className = ""
            }
            return a
        },
        v = function(a, b, d) {
            if (typeof b.indexOf === "function") return b.indexOf(a, d);
            var e = b.length;
            for (typeof d === "undefined" ? d = 0 : d < 0 && (d = e + d); d < e; d++)
                if (b.hasOwnProperty(d) && b[d] === a) return d;
            return -1
        },
        w = function(a) {
            if (typeof a ===
                "string") throw new TypeError("ZeroClipboard doesn't accept query strings.");
            if (!a.length) return [a];
            return a
        },
        A = function(a, d, e, f) {
            f ? b.setTimeout(function() {
                a.apply(d, e)
            }, 0) : a.apply(d, e)
        },
        x = function(a) {
            var b, d;
            if (a)
                if (typeof a === "number" && a > 0) b = a;
                else if (typeof a === "string" && (d = parseInt(a, 10)) && !isNaN(d) && d > 0) b = d;
            if (!b)
                if (typeof y.zIndex === "number" && y.zIndex > 0) b = y.zIndex;
                else if (typeof y.zIndex === "string" && (d = parseInt(y.zIndex, 10)) && !isNaN(d) && d > 0) b = d;
            return b || 0
        },
        q = function(a, b) {
            if (a && b !== !1 && typeof console !==
                "undefined" && console && (console.warn || console.log)) {
                var d = "`" + a + "` is deprecated. See docs for more info:\n    https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md#deprecations";
                console.warn ? console.warn(d) : console.log(d)
            }
        },
        p = function() {
            var a, b, d, e, f, g = arguments[0] || {};
            a = 1;
            for (b = arguments.length; a < b; a++)
                if ((d = arguments[a]) != null)
                    for (e in d) d.hasOwnProperty(e) && (f = d[e], g !== f && f !== void 0 && (g[e] = f));
            return g
        },
        t = function(a) {
            if (a == null || a === "") return null;
            a = a.replace(/^\s+|\s+$/g,
                "");
            if (a === "") return null;
            var b = a.indexOf("//"),
                a = b === -1 ? a : a.slice(b + 2),
                d = a.indexOf("/");
            if ((a = d === -1 ? a : b === -1 || d === 0 ? null : a.slice(0, d)) && a.slice(-4).toLowerCase() === ".swf") return null;
            return a || null
        },
        s = function() {
            var a = function(a, b) {
                    var d, e, f;
                    if (a != null && b[0] !== "*" && (typeof a === "string" && (a = [a]), typeof a === "object" && "length" in a)) {
                        d = 0;
                        for (e = a.length; d < e; d++)
                            if (a.hasOwnProperty(d) && (f = t(a[d]))) {
                                if (f === "*") {
                                    b.length = 0;
                                    b.push("*");
                                    break
                                }
                                v(f, b) === -1 && b.push(f)
                            }
                    }
                },
                b = {
                    always: "always",
                    samedomain: "sameDomain",
                    never: "never"
                };
            return function(d, e) {
                var f, g = e.allowScriptAccess;
                if (typeof g === "string" && (f = g.toLowerCase()) && /^always|samedomain|never$/.test(f)) return b[f];
                f = t(e.moviePath);
                f === null && (f = d);
                g = [];
                a(e.trustedOrigins, g);
                a(e.trustedDomains, g);
                var h = g.length;
                if (h > 0) {
                    if (h === 1 && g[0] === "*") return "always";
                    if (v(d, g) !== -1) {
                        if (h === 1 && d === f) return "sameDomain";
                        return "always"
                    }
                }
                return "never"
            }
        }(),
        B = function(a) {
            if (a == null) return [];
            if (Object.keys) return Object.keys(a);
            var b = [],
                d;
            for (d in a) a.hasOwnProperty(d) && b.push(d);
            return b
        },
        I = function() {
            var a = !1;
            if (typeof d.disabled === "boolean") a = d.disabled === !1;
            else {
                if (typeof ActiveXObject === "function") try {
                    new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (a = !0)
                } catch (b) {}!a && navigator.mimeTypes["application/x-shockwave-flash"] && (a = !0)
            }
            return a
        },
        z = function(a, e) {
            if (!(this instanceof z)) return new z(a, e);
            this.id = "" + i++;
            h[this.id] = {
                instance: this,
                elements: [],
                handlers: {}
            };
            a && this.clip(a);
            typeof e !== "undefined" && (q("new ZeroClipboard(elements, options)", y.debug), z.config(e));
            this.options = z.config();
            if (typeof d.disabled !== "boolean") d.disabled = !I();
            if (d.disabled === !1 && d.outdated !== !0 && d.bridge === null) {
                d.outdated = !1;
                d.ready = !1;
                var f, j, k = document.getElementById("global-zeroclipboard-html-bridge");
                if (!k) {
                    f = z.config();
                    f.jsModuleId = typeof g === "string" && g || typeof l === "string" && l || null;
                    var k = s(b.location.host, y),
                        m, n, o, p = [],
                        r = [],
                        u = [];
                    f.trustedOrigins && (typeof f.trustedOrigins === "string" ? r.push(f.trustedOrigins) : typeof f.trustedOrigins === "object" && "length" in f.trustedOrigins && (r =
                        r.concat(f.trustedOrigins)));
                    f.trustedDomains && (typeof f.trustedDomains === "string" ? r.push(f.trustedDomains) : typeof f.trustedDomains === "object" && "length" in f.trustedDomains && (r = r.concat(f.trustedDomains)));
                    if (r.length) {
                        m = 0;
                        for (n = r.length; m < n; m++)
                            if (r.hasOwnProperty(m) && r[m] && typeof r[m] === "string" && (o = t(r[m]))) {
                                if (o === "*") {
                                    u = [o];
                                    break
                                }
                                u.push.apply(u, [o, "//" + o, b.location.protocol + "//" + o])
                            }
                    }
                    u.length && p.push("trustedOrigins=" + encodeURIComponent(u.join(",")));
                    typeof f.jsModuleId === "string" && f.jsModuleId &&
                        p.push("jsModuleId=" + encodeURIComponent(f.jsModuleId));
                    f = p.join("&");
                    m = y.moviePath + (y == null || y && y.cacheBust === !0 && y.useNoCache === !0 ? (y.moviePath.indexOf("?") === -1 ? "?" : "&") + "noCache=" + (new Date).getTime() : "");
                    f = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="' + m + '"/>         <param name="allowScriptAccess" value="' + k + '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="' +
                        f + '"/>         <embed src="' + m + '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="' + k + '"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="' + f + '"           scale="exactfit">         </embed>       </object>';
                    k = document.createElement("div");
                    k.id = "global-zeroclipboard-html-bridge";
                    k.setAttribute("class", "global-zeroclipboard-container");
                    k.style.position = "absolute";
                    k.style.left = "0px";
                    k.style.top = "-9999px";
                    k.style.width = "15px";
                    k.style.height = "15px";
                    k.style.zIndex = "" + x(y.zIndex);
                    document.body.appendChild(k);
                    k.innerHTML = f
                }
                if ((f = document["global-zeroclipboard-flash-bridge"]) && (j = f.length)) f = f[j - 1];
                d.bridge = f || k.children[0].lastElementChild
            }
        };
    z.prototype.setText = function(a) {
        if (a && a !== "") f["text/plain"] = a, d.ready ===
            !0 && d.bridge && typeof d.bridge.setText === "function" ? d.bridge.setText(a) : d.ready = !1;
        return this
    };
    z.prototype.setSize = function(a, b) {
        d.ready === !0 && d.bridge && typeof d.bridge.setSize === "function" ? d.bridge.setSize(a, b) : d.ready = !1;
        return this
    };
    var E = function(a) {
        d.ready === !0 && d.bridge && typeof d.bridge.setHandCursor === "function" ? d.bridge.setHandCursor(a) : d.ready = !1
    };
    z.prototype.destroy = function() {
        this.unclip();
        this.off();
        delete h[this.id]
    };
    z.version = "1.3.5";
    var y = {
        swfPath: m,
        trustedDomains: b.location.host ? [b.location.host] : [],
        cacheBust: !0,
        forceHandCursor: !1,
        zIndex: 999999999,
        debug: !0,
        title: null,
        autoActivate: !0
    };
    z.config = function(a) {
        typeof a === "object" && a !== null && p(y, a);
        if (typeof a === "string" && a) {
            if (y.hasOwnProperty(a)) return y[a]
        } else {
            var a = {},
                b;
            for (b in y) y.hasOwnProperty(b) && (a[b] = typeof y[b] === "object" && y[b] !== null ? "length" in y[b] ? y[b].slice(0) : p({}, y[b]) : y[b]);
            return a
        }
    };
    z.destroy = function() {
        z.deactivate();
        for (var a in h)
            if (h.hasOwnProperty(a) && h[a]) {
                var b = h[a].instance;
                b && typeof b.destroy === "function" && b.destroy()
            }
        if ((a =
                D(d.bridge)) && a.parentNode) a.parentNode.removeChild(a), d.ready = null, d.bridge = null
    };
    z.activate = function(a) {
        e && (r(e, y.hoverClass), r(e, y.activeClass));
        e = a;
        u(a, y.hoverClass);
        M();
        var f = y.title || a.getAttribute("title");
        if (f) {
            var g = D(d.bridge);
            g && g.setAttribute("title", f)
        }
        if (!(f = y.forceHandCursor === !0)) {
            a: {
                b.getComputedStyle ? f = b.getComputedStyle(a, null).getPropertyValue("cursor") : (f = n("cursor"), f = a.currentStyle ? a.currentStyle[f] : a.style[f]);
                if (!f || f === "auto")
                    if (a = a.tagName.toLowerCase(), a === "a") {
                        a = "pointer";
                        break a
                    }
                a = f
            }
            f = a === "pointer"
        }
        E(f)
    };
    z.deactivate = function() {
        var a = D(d.bridge);
        if (a) a.style.left = "0px", a.style.top = "-9999px", a.removeAttribute("title");
        e && (r(e, y.hoverClass), r(e, y.activeClass), e = null)
    };
    var D = function(a) {
            for (var b = /^OBJECT|EMBED$/, a = a && a.parentNode; a && b.test(a.nodeName) && a.parentNode;) a = a.parentNode;
            return a || null
        },
        M = function() {
            if (e) {
                var a = e,
                    f = {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0,
                        zIndex: x(y.zIndex) - 1
                    };
                if (a.getBoundingClientRect) {
                    var a = a.getBoundingClientRect(),
                        g, h;
                    if ("pageXOffset" in b && "pageYOffset" in
                        b) g = b.pageXOffset, h = b.pageYOffset;
                    else {
                        g = 1;
                        if (typeof document.body.getBoundingClientRect === "function") g = document.body.getBoundingClientRect(), g = g.right - g.left, h = document.body.offsetWidth, g = Math.round(g / h * 100) / 100;
                        h = g;
                        g = Math.round(document.documentElement.scrollLeft / h);
                        h = Math.round(document.documentElement.scrollTop / h)
                    }
                    var i = document.documentElement.clientTop || 0;
                    f.left = a.left + g - (document.documentElement.clientLeft || 0);
                    f.top = a.top + h - i;
                    f.width = "width" in a ? a.width : a.right - a.left;
                    f.height = "height" in a ?
                        a.height : a.bottom - a.top
                }
                if (a = D(d.bridge)) a.style.top = f.top + "px", a.style.left = f.left + "px", a.style.width = f.width + "px", a.style.height = f.height + "px", a.style.zIndex = f.zIndex + 1;
                d.ready === !0 && d.bridge && typeof d.bridge.setSize === "function" ? d.bridge.setSize(f.width, f.height) : d.ready = !1
            }
            return this
        };
    z.prototype.on = function(a, b) {
        var e, f, g, i = {},
            j = h[this.id] && h[this.id].handlers;
        if (typeof a === "string" && a) g = a.toLowerCase().split(/\s+/);
        else if (typeof a === "object" && a && typeof b === "undefined")
            for (e in a)
                if (a.hasOwnProperty(e) &&
                    typeof e === "string" && e && typeof a[e] === "function") this.on(e, a[e]);
        if (g && g.length) {
            e = 0;
            for (f = g.length; e < f; e++) a = g[e].replace(/^on/, ""), i[a] = !0, j[a] || (j[a] = []), j[a].push(b);
            i.noflash && d.disabled && G.call(this, "noflash", {});
            i.wrongflash && d.outdated && G.call(this, "wrongflash", {
                flashVersion: d.version
            });
            i.load && d.ready && G.call(this, "load", {
                flashVersion: d.version
            })
        }
        return this
    };
    z.prototype.off = function(a, b) {
        var d, e, f, g, i, j = h[this.id] && h[this.id].handlers;
        if (arguments.length === 0) g = B(j);
        else if (typeof a === "string" &&
            a) g = a.split(/\s+/);
        else if (typeof a === "object" && a && typeof b === "undefined")
            for (d in a) a.hasOwnProperty(d) && typeof d === "string" && d && typeof a[d] === "function" && this.off(d, a[d]);
        if (g && g.length) {
            d = 0;
            for (e = g.length; d < e; d++)
                if (a = g[d].toLowerCase().replace(/^on/, ""), (i = j[a]) && i.length)
                    if (b)
                        for (f = v(b, i); f !== -1;) i.splice(f, 1), f = v(b, i, f);
                    else j[a].length = 0
        }
        return this
    };
    z.prototype.handlers = function(a) {
        var b, d = null,
            e = h[this.id] && h[this.id].handlers;
        if (e) {
            if (typeof a === "string" && a) return e[a] ? e[a].slice(0) : null;
            d = {};
            for (b in e) e.hasOwnProperty(b) && e[b] && (d[b] = e[b].slice(0))
        }
        return d
    };
    z.prototype.clip = function(a) {
        for (var a = w(a), b = 0; b < a.length; b++)
            if (a.hasOwnProperty(b) && a[b] && a[b].nodeType === 1) {
                if (a[b].zcClippingId) v(this.id, k[a[b].zcClippingId]) === -1 && k[a[b].zcClippingId].push(this.id);
                else if (a[b].zcClippingId = "zcClippingId_" + j++, k[a[b].zcClippingId] = [this.id], y.autoActivate === !0) {
                    var d = a[b],
                        e = o;
                    d && d.nodeType === 1 && (d.addEventListener ? d.addEventListener("mouseover", e, !1) : d.attachEvent && d.attachEvent("onmouseover",
                        e))
                }
                d = h[this.id].elements;
                v(a[b], d) === -1 && d.push(a[b])
            }
        return this
    };
    z.prototype.unclip = function(a) {
        var b = h[this.id];
        if (b)
            for (var b = b.elements, d, a = typeof a === "undefined" ? b.slice(0) : w(a), e = a.length; e--;)
                if (a.hasOwnProperty(e) && a[e] && a[e].nodeType === 1) {
                    for (d = 0;
                        (d = v(a[e], b, d)) !== -1;) b.splice(d, 1);
                    var f = k[a[e].zcClippingId];
                    if (f) {
                        for (d = 0;
                            (d = v(this.id, f, d)) !== -1;) f.splice(d, 1);
                        f.length === 0 && (y.autoActivate === !0 && (d = a[e], f = o, d && d.nodeType === 1 && (d.removeEventListener ? d.removeEventListener("mouseover", f, !1) :
                            d.detachEvent && d.detachEvent("onmouseover", f))), delete a[e].zcClippingId)
                    }
                }
        return this
    };
    z.prototype.elements = function() {
        var a = h[this.id];
        return a && a.elements ? a.elements.slice(0) : []
    };
    y.hoverClass = "zeroclipboard-is-hover";
    y.activeClass = "zeroclipboard-is-active";
    y.trustedOrigins = null;
    y.allowScriptAccess = null;
    y.useNoCache = !0;
    y.moviePath = "ZeroClipboard.swf";
    z.detectFlashSupport = function() {
        q("ZeroClipboard.detectFlashSupport", y.debug);
        return I()
    };
    z.dispatch = function(a, b) {
        if (typeof a === "string" && a) {
            var d =
                a.toLowerCase().replace(/^on/, "");
            if (d) {
                var f;
                if (e && y.autoActivate === !0) {
                    var g, i, j, l;
                    f = [];
                    if (e && e.nodeType === 1 && (g = e.zcClippingId) && k.hasOwnProperty(g))
                        if ((g = k[g]) && g.length) {
                            i = 0;
                            for (j = g.length; i < j; i++)(l = h[g[i]].instance) && l instanceof z && f.push(l)
                        }
                } else {
                    j = [];
                    l = B(h);
                    f = 0;
                    for (g = l.length; f < g; f++)(i = h[l[f]].instance) && i instanceof z && j.push(i);
                    f = j
                }
                g = 0;
                for (i = f.length; g < i; g++) G.call(f[g], d, b)
            }
        }
    };
    z.prototype.setHandCursor = function(a) {
        q("ZeroClipboard.prototype.setHandCursor", y.debug);
        a = typeof a === "boolean" ?
            a : !!a;
        E(a);
        y.forceHandCursor = a;
        return this
    };
    z.prototype.reposition = function() {
        q("ZeroClipboard.prototype.reposition", y.debug);
        return M()
    };
    z.prototype.receiveEvent = function(a, b) {
        q("ZeroClipboard.prototype.receiveEvent", y.debug);
        if (typeof a === "string" && a) {
            var d = a.toLowerCase().replace(/^on/, "");
            d && G.call(this, d, b)
        }
    };
    z.prototype.setCurrent = function(a) {
        q("ZeroClipboard.prototype.setCurrent", y.debug);
        z.activate(a);
        return this
    };
    z.prototype.resetBridge = function() {
        q("ZeroClipboard.prototype.resetBridge",
            y.debug);
        z.deactivate();
        return this
    };
    z.prototype.setTitle = function(a) {
        q("ZeroClipboard.prototype.setTitle", y.debug);
        if (a = a || y.title || e && e.getAttribute("title")) {
            var b = D(d.bridge);
            b && b.setAttribute("title", a)
        }
        return this
    };
    z.setDefaults = function(a) {
        q("ZeroClipboard.setDefaults", y.debug);
        z.config(a)
    };
    z.prototype.addEventListener = function(a, b) {
        q("ZeroClipboard.prototype.addEventListener", y.debug);
        return this.on(a, b)
    };
    z.prototype.removeEventListener = function(a, b) {
        q("ZeroClipboard.prototype.removeEventListener",
            y.debug);
        return this.off(a, b)
    };
    z.prototype.ready = function() {
        q("ZeroClipboard.prototype.ready", y.debug);
        return d.ready === !0
    };
    var G = function(g, i) {
        var g = g.toLowerCase().replace(/^on/, ""),
            j = i && i.flashVersion && a(i.flashVersion) || null,
            k = e,
            l = !0;
        switch (g) {
            case "load":
                if (j) {
                    if (!(parseFloat(a(j)) >= 10)) {
                        G.call(this, "onWrongFlash", {
                            flashVersion: j
                        });
                        return
                    }
                    d.outdated = !1;
                    d.ready = !0;
                    d.version = j
                }
                break;
            case "wrongflash":
                if (j && !(parseFloat(a(j)) >= 10)) d.outdated = !0, d.ready = !1, d.version = j;
                break;
            case "mouseover":
                u(k,
                    y.hoverClass);
                break;
            case "mouseout":
                y.autoActivate === !0 && z.deactivate();
                break;
            case "mousedown":
                u(k, y.activeClass);
                break;
            case "mouseup":
                r(k, y.activeClass);
                break;
            case "datarequested":
                if (k) {
                    var m = k.getAttribute("data-clipboard-target");
                    (m = (m = !m ? null : document.getElementById(m)) ? m.value || m.textContent || m.innerText : k.getAttribute("data-clipboard-text")) && this.setText(m)
                }
                l = !1;
                break;
            case "complete":
                if (f)
                    for (var n in f) f.hasOwnProperty(n) && delete f[n];
                if (j = k) {
                    a: {
                        try {
                            m = document.activeElement;
                            break a
                        } catch (o) {}
                        m =
                        null
                    }
                    j = k !== m && k.focus
                }
                j && k.focus()
        }
        m = [this, i];
        if ((j = h[this.id] && h[this.id].handlers[g]) && j.length) {
            var p, q, s = k || this;
            n = 0;
            for (p = j.length; n < p; n++) {
                q = j[n];
                k = s;
                typeof q === "string" && typeof b[q] === "function" && (q = b[q]);
                if (typeof q === "object" && q && typeof q.handleEvent === "function") k = q, q = q.handleEvent;
                typeof q === "function" && A(q, k, m, l)
            }
        }
        return this
    };
    typeof define === "function" && define.amd ? define(["require", "exports", "module"], function(a, b, d) {
            g = d && d.id || null;
            return z
        }) : typeof module === "object" && module && typeof module.exports ===
        "object" && module.exports && typeof b.require === "function" ? (l = module.id || null, module.exports = z) : b.ZeroClipboard = z
})(function() {
    return this
}());
var C;
(function(b) {
    var a = 0;
    b(function() {
        b.cwUI.loading = '<img src="' + b.cwUI.imagePath + '/ajax-loader.gif" alt="Loading" />';
        b(document).on("click.ChatWorkUI", "._cwSelectableRow", function() {
            b(this).find("._cwCB").cwCheckBox().toggle();
            return !1
        })
    });
    var e = {},
        d = {},
        f = 0,
        i = {};
    b.cwUI = b.cwUI || {};
    b.cwUI.floatZIndex = 1E3;
    b.cwUI.imagePath = "./image";
    b.cwUI.loading = "";
    b.cwUI.hasFlash = !1;
    b.cwUI.escapeHTML = function(a) {
        if (!a || !a.replace) return a;
        a = a.replace(/&/g, "&amp;");
        a = a.replace(/"/g, "&quot;");
        a = a.replace(/'/g, "&#039;");
        a = a.replace(/</g, "&lt;");
        return a = a.replace(/>/g, "&gt;")
    };
    b.cwUI.formatNumber = function(a) {
        a = a.toString().split(".");
        a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return a.join(".")
    };
    b.cwUI.ucFirst = function(a) {
        a += "";
        return a.charAt(0).toUpperCase() + a.substr(1)
    };
    b.cwUI.setZIndex = function(a) {
        var b = a.data("cwui-float_id");
        b == void 0 && (b = f++, a.data("cwui-float_id", [b]));
        var d = this.floatZIndex,
            e;
        for (e in i) {
            var h = parseInt(i[e].css("z-index"), 10);
            d < h && (d = h)
        }
        d++;
        a.css("z-index", d);
        i[b] = a;
        return this
    };
    b.cwUI.unsetZIndex =
        function(a) {
            a = a.data("cwui-float_id");
            if (a != void 0) return delete i[a], this
        };
    b.cwUI.getUpperLayerObjects = function(a) {
        var a = parseInt(a.css("z-index"), 10),
            b = [],
            d;
        for (d in i) parseInt(i[d].css("z-index"), 10) > a && b.push(i[d]);
        return b
    };
    b.cwUI.addWidget = function(f, h, i, n) {
        b[f] = new k(f, h);
        if (n != void 0)
            for (var o in n) b[f][o] = n[o];
        e[f] = function() {
            this.widget_name = f
        };
        e[f].prototype = new j;
        for (o in i) e[f].prototype[o] = i[o];
        d[f] = function(a) {
            this.widget_name = f;
            this.widget_list = a
        };
        for (o in e[f].prototype)(function() {
            var a =
                o;
            d[f].prototype[a] = function() {
                for (var b = 0, d = this.widget_list.length; b < d; b++) {
                    var e = this.widget_list[b];
                    e[a].apply(e, arguments)
                }
                return this
            }
        })();
        var u = "cwui-" + f;
        b.fn[f] = function(h) {
            var i = this.length;
            if (i != 0 && !b.cwUI.isWidget(this[0])) {
                var j = null,
                    k = [];
                this.each(function() {
                    var d = b(this),
                        i = d[0];
                    j = b.data(i, u);
                    if (!j) {
                        if (b[f]._create) {
                            var l = b[f]._create(d);
                            l && (d = l, i = l[0])
                        }
                        j = new e[f];
                        j.widget_id = a++;
                        j._setUp(d);
                        h = b.extend({}, b[f].getDefaultOption(), h);
                        j._init && j._init(h);
                        b.data(i, u, j)
                    }
                    j.setOption(h);
                    k.push(j)
                });
                return i == 1 ? j : new d[f](k)
            }
        }
    };
    b.cwUI.isWidget = function(a) {
        if (a instanceof j) return !0;
        return !1
    };
    if (navigator.mimeTypes["application/x-shockwave-flash"] != void 0) b.cwUI.hasFlash = !0;
    else try {
        new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b.cwUI.hasFlash = !0
    } catch (h) {}
    var j = function() {};
    j.prototype = {
        $el: null,
        el: null,
        data: {},
        _setUp: function(a) {
            this.$el = a;
            this.el = a[9];
            this.is_open = this.open ? !1 : !0;
            this.init_option = !0;
            this.option = {};
            return this
        },
        isOpen: function() {
            return this.is_open
        },
        destroy: function() {
            b.data(this.$el[0],
                "cwui-" + this.widget_name, "")
        },
        setOption: function(a) {
            if (a == void 0) return this;
            for (var b in a) this.option[b] = a[b];
            this._setOption && this._setOption(a);
            this.init_option = !1;
            return this
        }
    };
    var k = function(a, b) {
        this.widget_name = a;
        this.default_option = b
    };
    k.prototype = {
        getWidget: function(a) {
            return b.data(a, "cwui-" + this.widget_name)
        },
        isInit: function(a) {
            return b.data(a, "cwui-" + this.widget_name) ? !0 : !1
        },
        getDefaultOption: function() {
            return this.default_option
        },
        setDefaultOption: function(a) {
            for (var b in a) this.default_option[b] =
                a[b];
            return this
        }
    };
    b.fn.extend({
        quickEmpty: function() {
            this.each(function() {
                for (var a = this.childNodes.length; a--;) this.removeChild(this.lastChild)
            });
            return this
        },
        getAttrs: function() {
            for (var a = this[0].attributes, b = {}, d = 0, e = a.length; d < e; d++) {
                var f = a.item(d);
                if (f.specified) b[f.name] = f.value
            }
            return b
        },
        isVisible: function() {
            return b.expr.filters.visible(this[0])
        },
        caretPos: function(a) {
            var b = this.get(0);
            if (a == null) {
                a = 0;
                if (document.selection) {
                    b.focus();
                    var d = document.selection.createRange();
                    d.moveStart("character", -b.value.length);
                    a = d.text.length
                } else if (b.selectionStart || b.selectionStart == "0") a = b.selectionStart;
                return a
            }
            a == "first" && (a = 0);
            if (a == "last") a = this.val().length;
            b.setSelectionRange ? (b.focus(), b.setSelectionRange(a, a)) : b.createTextRange && (d = b.createTextRange(), d.collapse(!0), d.moveEnd("character", a), d.moveStart("character", a), d.select());
            return this
        }
    })
})(jQuery);
(function(b) {
    var a = [],
        e = [],
        d = !1;
    b(function() {
        setTimeout(function() {
            b.cwFloatBox.setBodyEvent()
        })
    });
    b.cwFloatBox = {
        open: function(d, e, h) {
            var j = b.extend({
                noAnimation: !1
            }, h);
            b.data(d[0], "cwFloatBox") || (d.on("click.cwFloatBox", function() {
                b.cwFloatBox.skip(b(this));
                j.skip && b.cwFloatBox.skip(j.skip)
            }), b.data(d[0], "cwFloatBox", !0));
            a.push({
                obj: d,
                zindex: d.css("z-index"),
                callback: e,
                noanim: j.noAnimation
            });
            d.stop(!0, !0).show().css({
                opacity: 1
            });
            b.cwUI.setZIndex(d);
            return this
        },
        close: function(d, e) {
            var h = a.length,
                j = null,
                k = [],
                g = [];
            if (h > 0) {
                if (d) {
                    var l;
                    if (d instanceof jQuery) l = [d];
                    else if (b.isArray(d)) l = d;
                    else return;
                    for (h -= 1; h >= 0; h--) {
                        for (var m = !1, n = 0, o = l.length; n < o; n++)
                            if (l[n][0] == a[h].obj[0]) {
                                m = !0;
                                break
                            }
                        e ? m ? g.push(a[h]) : k.push(a[h]) : m ? k.push(a[h]) : g.push(a[h])
                    }
                } else k = a;
                h = 0;
                for (l = k.length; h < l; h++) j = k[h], typeof j.callback == "function" && j.callback(), j.noanim ? (j.obj.hide(), j.obj.css("z-index", j.zindex)) : j.obj.fadeOut("fast", function() {
                    j.obj.css("z-index", j.zindex)
                }), b.cwUI.unsetZIndex(j.obj), j.floatbox && j.floatbox.remove();
                a = g
            }
            var u = this;
            setTimeout(function() {
                u.clearSkip()
            });
            return this
        },
        closeUpperLayer: function(b) {
            for (var b = parseInt(b.css("z-index"), 10), d = [], e = 0, j = a.length; e < j; e++) {
                var k = a[e].obj;
                b < parseInt(k.css("z-index"), 10) && d.push(k)
            }
            d.length > 0 && this.close(d);
            return this
        },
        skip: function() {
            var a = arguments.length;
            if (a)
                for (var b = 0; b < a; b++) e.push(arguments[b]);
            else d = !0;
            return this
        },
        clearSkip: function() {
            d = !1;
            e = [];
            return this
        },
        setBodyEvent: function() {
            b(document.body).off("keydown.cwFloatBox").on("keydown.cwFloatBox",
                function(a) {
                    a.keyCode == 27 && b.cwFloatBox.close()
                }).off("click.cwFloatBox").on("click.cwFloatBox", function() {
                d ? setTimeout(function() {
                    b.cwFloatBox.clearSkip()
                }) : e.length > 0 ? b.cwFloatBox.close(e, !0) : b.cwFloatBox.close()
            });
            return this
        }
    }
})(jQuery, jQuery.cwUI.L);
(function(b) {
    var a = !1,
        e = null,
        d = 0,
        f = 0;
    b(function() {
        b(document.body).on("mousemove.cwResize", function(b) {
            a && e.move(b.clientX - d, b.clientY - f)
        }).on("mouseup.cwResize", function() {
            a && (b("#_cwRZBack").remove(), a = !1, b(document.body).removeClass("cwResizeHandleCol cwResizeHandleRow cwResizeHandle"), e.end())
        })
    });
    b.cwResize = {
        setHandle: function(i, h) {
            var j = b.extend({
                    type: "",
                    start: function() {},
                    end: function() {},
                    move: function() {}
                }, h),
                k = "";
            switch (j.type) {
                case "col":
                    k = "cwResizeHandleCol";
                    break;
                case "row":
                    k = "cwResizeHandleRow";
                    break;
                default:
                    k = "cwResizeHandle"
            }
            i.addClass(k).on("mousedown.cwResize", function(g) {
                a = !0;
                var h = b(document.body);
                h.append('<div id="_cwRZBack" class="stopActionOverlay"></div>');
                switch (j.type) {
                    case "col":
                        h.addClass("cwResizeHandleCol");
                        break;
                    case "row":
                        h.addClass("cwResizeHandleRow");
                        break;
                    default:
                        h.addClass("cwResizeHandle")
                }
                d = g.clientX;
                f = g.clientY;
                e = j;
                e.start();
                return !1
            });
            return this
        }
    }
})(jQuery, jQuery.cwUI.L);
(function(b, a) {
    b.cwValidate = {
        File: {
            hasError: function(e, d) {
                var f = 0,
                    i = "",
                    h = "";
                e.files ? (f = e.files[0], i = f.name, f = f.size) : i = e.value.replace(/\\/g, "/").replace(/.*\//, "");
                (i = i.match(/\.([^\.]+)$/)) && (h = i[1].toLowerCase());
                i = [];
                d.maxsize && f >= d.maxsize && i.push(a.error_upload_over_max_filesize.replace(/%%max_size%%/g, bytename(d.maxsize)).replace(/%%size%%/g, bytename(f)));
                d.onlyimage && (in_array(h, ["jpg", "png", "gif", "jpeg"]) || i.push(a.error_upload_image));
                return i.length ? (b(e).val(""), i) : !1
            }
        }
    }
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.cwUI.addWidget("cwActionBar", {
        itemSelector: "",
        hoverSelector: "",
        hoverClass: "",
        idKey: "",
        checkIgnoreItem: null,
        stopBubbling: !1,
        actionList: [],
        moreActionList: [],
        descriptionDelay: 500
    }, {
        _init: function() {
            var a = this;
            this.latest_showed_jqObj = {};
            this.action_item = {};
            this.is_suspend = this.is_hold = this.is_more_prepared = !1;
            this.$el.on("click.cwActionBar", "._cwABAction", function() {
                var e = b(this),
                    d = e.attr("data-cwui-ab-type"),
                    f = e.attr("data-cwui-ab-id"),
                    d = a.action_item[d];
                typeof d.click == "function" && d.click.apply(a, [f, e]);
                if (a.option.stopBubbling) return !1
            }).on("mouseenter.cwActionBarDescription", "._cwABAction", function() {
                var e = b(this),
                    d = e.attr("data-cwui-ab-type");
                e.attr("data-cwui-ab-id");
                e = a.action_item[d];
                e.description && (b.cwMessageTip.isInit(this) || b(this).cwMessageTip({
                    message: e.description,
                    delay: a.option.descriptionDelay
                }).open())
            })
        },
        _setOption: function(a) {
            var e = this;
            if (a.itemSelector != void 0) this.$el.off("mouseenter.cwActionBar").on("mouseenter.cwActionBar", a.itemSelector, function() {
                var a = b(this),
                    f = !1;
                typeof e.option.checkIgnoreItem === "function" && (f = e.option.checkIgnoreItem(a));
                f || e.open(b(this))
            }).off("mouseleave.cwActionBar").on("mouseleave.cwActionBar", a.itemSelector, function() {
                e.close()
            })
        },
        _prepareMore: function() {
            if (!this.is_more_prepared) {
                var a = this,
                    e = this.$el,
                    d = b('<div style="display:none"><ul class="_cwABMoreListBox"></ul></div>');
                b(document.body).append(d);
                d.on("click.cwActionBar", "._cwABAction", function() {
                    var d = b(this),
                        e = d.attr("data-cwui-ab-type"),
                        i = d.attr("data-cwui-ab-id"),
                        e = a.action_item[e];
                    typeof e.click == "function" && e.click.apply(a, [i, d]);
                    f.close();
                    if (a.option.stopBubbling) return !1
                }).on("mouseenter.cwActionBar", "._cwABAction", function() {
                    var d = b(this),
                        e = d.attr("data-cwui-ab-type");
                    d.attr("data-cwui-ab-id");
                    d = a.action_item[e];
                    d.description && (b.cwMessageTip.isInit(this) || b(this).cwMessageTip({
                        message: d.description,
                        delay: a.option.descriptionDelay
                    }).open())
                });
                var f = null,
                    i = null;
                e.on("click.cwActionBar", "._cwABMoreTip", function() {
                    i = b(this);
                    f || (f = d.cwToolTip({
                        open: function() {
                            a.is_hold = !0;
                            for (var b = i.attr("data-cwui-ab-id"), e = "", f = 0, g = a.option.moreActionList.length; f < g; f++) {
                                var l = a.option.moreActionList[f],
                                    m = a.action_item[l];
                                e += '<li class="_cwABAction chatActionMore" data-cwui-ab-id="' + b + '" data-cwui-ab-type="' + l + '"><span class="' + m.iconClass + '"></span><span class="chatActiontext">' + m.label + "</li>"
                            }
                            d.find("._cwABMoreListBox").html(e)
                        },
                        close: function() {
                            a.is_hold = !1
                        }
                    }));
                    f.open(b(this))
                });
                this.is_more_prepared = !0
            }
        },
        open: function(a) {
            if (this.is_suspend) return this;
            this.is_open = !0;
            a[0] !=
                void 0 && typeof this.option.open == "function" && this.option.open.apply(this, [a.attr(this.option.idKey)]);
            if (this.latest_showed_jqObj[0] != void 0 && this.latest_showed_jqObj[0] != a[0]) {
                var e = this.latest_showed_jqObj.find("._cwABShowArea");
                e.length > 0 && (e.hide(), b.cwMessageTip.close(), this.option.hoverClass && (e = this.option.hoverSelector ? this.latest_showed_jqObj.find(this.option.hoverSelector) : this.latest_showed_jqObj, e.removeClass(this.option.hoverClass)));
                this.latest_showed_jqObj = {}
            }
            if (a[0] != void 0 && this.latest_showed_jqObj[0] !=
                a[0]) {
                var d = this.option.actionList.length,
                    f = this.option.moreActionList.length,
                    e = a.find("._cwABShowArea");
                if (e.length == 0)
                    if (d || f) e = b('<div class="_cwABShowArea actionArea"></div>'), a.append(e);
                    else return !1;
                if (!b.data(e[0], "_cwABNavInit")) {
                    for (var d = '<ul role="toolbar" class="_messageActionNav cwTextUnselectable actionNav">', f = this.option.idKey ? a.attr(this.option.idKey) : "", i = 0, h = this.option.actionList.length; i < h; i++) {
                        var j = this.option.actionList[i],
                            k = this.action_item[j];
                        k != void 0 && (d += '<li role="button" class="_cwABAction linkStatus" data-cwui-ab-id="' +
                            f + '" data-cwui-ab-type="' + j + '"><span class="' + k.iconClass + '""></span><span class="_showAreaText showAreatext">' + k.label + "</span></li>")
                    }
                    this.option.moreActionList.length > 0 && (this._prepareMore(), d += '<li role="button" class="_cwABMoreTip linkStatus" data-cwui-ab-id="' + f + '"><span class="icoFontActionMore"></span><span class="_showAreaText showAreatext"></span></li>');
                    d += "</ul>";
                    e.html(d);
                    b.data(e[0], "_cwABNavInit", !0)
                }
                e.show();
                this.option.hoverClass && (e = this.option.hoverSelector ? a.find(this.option.hoverSelector) :
                    a, e.addClass(this.option.hoverClass));
                this.latest_showed_jqObj = a
            }
            return this
        },
        close: function() {
            this.is_open = !1;
            typeof this.option.close == "function" && this.option.close.apply(this);
            this.is_hold || this.open({});
            return this
        },
        hold: function(a) {
            this.is_hold = a;
            return this
        },
        addAction: function(a, b) {
            this.action_item[a] = b;
            return this
        },
        setActionList: function(a) {
            this.option.actionList = a;
            return this
        },
        setMoreActionList: function(a) {
            this.option.moreActionList = a;
            return this
        },
        findItemById: function(a) {
            return this.$el.find("[" +
                this.option.idKey + "=" + a + "]")
        },
        suspend: function() {
            this.close();
            this.is_suspend = !0;
            return this
        },
        resume: function() {
            this.is_suspend = !1;
            return this
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b(function() {
        b(document.body).on("click.cwButton", "._cwBN", function() {
            var a = b(this).cwButton();
            a.option.toggleMode ? a.toggle() : a.select()
        }).on("keydown.cwButton", "._cwBN", function(a) {
            a.keyCode == 32 && b(this).click()
        })
    });
    b.cwUI.addWidget("cwButton", {
        descriptionDelay: 500,
        toggleMode: !1
    }, {
        _init: function() {
            var a = this.$el;
            this.is_selected = !1;
            a.addClass("_cwBN button").attr({
                role: "button"
            });
            this.is_primary = a.hasClass("btnPrimary");
            this.is_success = a.hasClass("btnSuccess");
            this.is_warning = a.hasClass("btnWarning");
            this.is_danger = a.hasClass("btnDanger");
            a.hasClass("btnDisable") && this.disable()
        },
        _setOption: function(a) {
            a.description != void 0 && (b.cwMessageTip.isInit(this.$el[0]) || this.$el.cwMessageTip({
                delay: this.option.descriptionDelay,
                message: a.description
            }));
            if (a.type != void 0) switch (a.type) {
                case "primary":
                    this.$el.addClass("btnPrimary").removeClass("btnSuccess btnWarning btnDanger");
                    this.is_primary = !0;
                    break;
                case "success":
                    this.$el.addClass("btnSuccess").removeClass("btnPrimary btnWarning btnDanger");
                    this.is_success = !0;
                    break;
                case "warning":
                    this.$el.addClass("btnWarning").removeClass("btnSuccess btnPrimary btnDanger");
                    this.is_warning = !0;
                    break;
                case "danger":
                    this.$el.addClass("btnDanger").removeClass("btnSuccess btnWarning btnPrimary"), this.is_danger = !0
            }
            a.text != void 0 && this.$el.text(a.text);
            if (a.size != void 0) switch (a.size) {
                case "large":
                    this.$el.addClass("btnLarge")
            }
        },
        select: function() {
            if (this.is_disabled) return this;
            this.option.click && this.option.click.apply(this);
            if (!this.is_selected) {
                var a;
                this.option.update &&
                    (a = this.option.update.apply(this, [!0]));
                if (a !== !1 && this.option.toggleMode) this.$el.addClass("_cwBNSelected selected").attr("aria-pressed", "true"), this.is_selected = !0
            }
            return this
        },
        deSelect: function() {
            if (this.is_disabled) return this;
            if (this.is_selected) {
                var a;
                this.option.update && (a = this.option.update.apply(this, [idx, !1]));
                if (a !== !1) this.$el.removeClass("_cwBNSelected selected").attr("aria-pressed", "false"), this.is_selected = !1
            }
            return this
        },
        toggle: function() {
            this.isSelect() ? this.deSelect() : this.select();
            return this
        },
        isSelect: function() {
            return this.is_selected
        },
        disable: function() {
            this.$el.addClass("btnDisable").attr("aria-disabled", "true");
            this.is_primary && this.$el.removeClass("btnPrimary");
            this.is_success && this.$el.removeClass("btnSuccess");
            this.is_warning && this.$el.removeClass("btnWarning");
            this.is_danger && this.$el.removeClass("btnDanger");
            this.is_disabled = !0;
            this.option.disable && this.option.disable.apply(this);
            return this
        },
        enable: function() {
            this.$el.removeClass("btnDisable").attr("aria-disabled",
                "false");
            this.is_primary && this.$el.addClass("btnPrimary");
            this.is_success && this.$el.addClass("btnSuccess");
            this.is_warning && this.$el.addClass("btnWarning");
            this.is_danger && this.$el.addClass("btnDanger");
            this.is_disabled = !1;
            this.option.enable && this.option.enable.apply(this);
            return this
        }
    }, {
        create: function(a, b, d) {
            d == void 0 && (d = {});
            var f = "<div",
                i = "btn";
            b && (i += " btn" + ucfirst(b));
            for (var h in d) switch (h) {
                case "class":
                    i += " " + d[h];
                    break;
                default:
                    f += " " + h + '="' + d[h] + '"'
            }
            f += ' role="button" class="' + i + '">' + a +
                "</div>";
            return f
        }
    })
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.cwUI.addWidget("cwButtonBar", {
        descriptionDelay: 500,
        toggleMode: !1
    }, {
        _init: function(a) {
            var e = this,
                d = this.$el;
            this.selected_dat = {};
            this.disabled_dat = {};
            d.addClass("_cwBB").attr("role", "menu");
            d.on("click.cwButtonBar", "._cwBBButton", function() {
                e.option.toggleMode ? e.toggle(b(this).attr("data-cwui-bb-idx")) : e.select(b(this).attr("data-cwui-bb-idx"))
            }).on("keydown.cwButtonBar", "._cwBBButton", function(a) {
                a.keyCode == 32 && b(this).click()
            });
            this.length = 0;
            var f = b.data(d[0], "_cwBBSelectDat"),
                i;
            for (i in f) this.selected_dat[i] = !1, this.length++;
            b.data(d[0], "_cwBBSelectDat", null);
            a.descriptionList = b.data(d[0], "_cwBBDescriptionList");
            b.data(d[0], "_cwBBDescriptionList", null);
            for (i in f) f[i] && this.select(i), this.disabled_dat[i] = !1
        },
        _setOption: function(a) {
            var e = this;
            a.descriptionList != void 0 && this.$el.find("._cwBBButton").each(function() {
                var a = b(this),
                    f = a.attr("data-cwui-bb-idx");
                e.option.descriptionList[f] && !b.cwMessageTip.isInit(this) && (a.attr("aria-label", e.option.descriptionList[f]), a.cwMessageTip({
                    delay: e.option.descriptionDelay,
                    message: e.option.descriptionList[f]
                }))
            })
        },
        select: function(a) {
            a = parseInt(a, 10);
            if (!this.selected_dat[a] && !this.disabled_dat[a]) {
                var b;
                this.option.update && (b = this.option.update.apply(this, [a, !0]));
                b !== !1 && this.option.toggleMode && (this.findButtonByIndex(a).addClass("_cwBBSelected selected").attr("aria-checked", "true"), this.selected_dat[a] = !0)
            }
            return this
        },
        deSelect: function(a) {
            a = parseInt(a, 10);
            if (this.selected_dat[a] && !this.disabled_dat[a]) {
                var b;
                this.option.update && (b = this.option.update.apply(this, [a, !1]));
                b !== !1 && (this.findButtonByIndex(a).removeClass("_cwBBSelected selected").attr("aria-checked", "false"), this.selected_dat[a] = !1)
            }
            return this
        },
        toggle: function(a) {
            this.isSelect(a) ? this.deSelect(a) : this.select(a);
            return this
        },
        selectAll: function() {
            for (var a in this.selected_dat) this.select(a);
            return this
        },
        deSelectAll: function() {
            for (var a in this.selected_dat) this.deSelect(a);
            return this
        },
        isSelect: function(a) {
            return this.selected_dat[a]
        },
        getSelectedIndex: function() {
            var a = [],
                b;
            for (b in this.selected_dat) this.selected_dat[b] &&
                a.push(this.selected_dat[b]);
            return a
        },
        findButtonByIndex: function(a) {
            return this.$el.find("._cwBBButton[data-cwui-bb-idx=" + a + "]")
        },
        hideButton: function(a) {
            this.findButtonByIndex(a).hide();
            return this
        },
        showButton: function(a) {
            this.findButtonByIndex(a).show();
            return this
        },
        hideButtonAll: function() {
            this.$el.find("._cwBBButton").hide();
            return this
        },
        showButtonAll: function() {
            this.$el.find("._cwBBButton").show();
            return this
        },
        disableButton: function(a) {
            this.findButtonByIndex(a).addClass("btnDisable").attr("aria-disabled",
                "true");
            this.disabled_dat[a] = !0;
            return this
        },
        enableButton: function(a) {
            this.findButtonByIndex(a).removeClass("btnDisable").attr("aria-disabled", "false");
            this.disabled_dat[a] = !1;
            return this
        },
        disableButtonAll: function() {
            this.$el.find("._cwBBButton").addClass("btnDisable").attr("aria-disabled", "true");
            for (var a in this.selected_dat) this.disabled_dat[a] = !0;
            return this
        },
        enableButtonAll: function() {
            this.$el.find("._cwBBButton").removeClass("btnDisable").attr("aria-disabled", "false");
            for (var a in this.selected_dat) this.disabled_dat[a] = !1;
            return this
        }
    }, {
        _create: function(a) {
            var e = a[0],
                d = {};
            if (a.hasClass("_cwBB")) return !1;
            else if (e.tagName.toLowerCase() == "ul") {
                var f = [],
                    i = [],
                    h = 0;
                a.find("li").each(function() {
                    var a = b(this);
                    f.push(a.html());
                    d[h] = a.hasClass("._cwBBSelected") ? !0 : !1;
                    i.push(a.attr("aria-label"));
                    h++
                });
                e = a.getAttrs();
                e = b(b.cwButtonBar.create(f, e));
                a.before(e);
                a.remove();
                b.data(e[0], "_cwBBSelectDat", d);
                b.data(e[0], "_cwBBDescriptionList", i);
                return e
            }
        },
        create: function(a, b) {
            b == void 0 && (b = {});
            var d = "<ul",
                f = "cwTextUnselectable btnNavList",
                i;
            for (i in b) switch (i) {
                case "class":
                    f += " " + b[i];
                    break;
                default:
                    d += " " + i + '="' + b[i] + '"'
            }
            d += ' class="' + f + '">';
            f = a.length;
            for (i = 0; i < f; i++) d += '<li role="menuitemradio" class="_cwBBButton button" data-cwui-bb-idx="' + i + '">' + a[i] + "</li>";
            d += "</ul>";
            return d
        }
    })
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b(function() {
        b(document.body).on("click.cwCheckBox", "._cwCB", function() {
            b(this).cwCheckBox().toggle();
            return !1
        }).on("keydown.cwCheckBox", "._cwCB", function(a) {
            a.keyCode == 32 && b(this).click()
        }).on("click.cwCheckBox", "._cwCBLabel", function() {
            b("#" + b(this).prop("for")).cwCheckBox().toggle();
            return !1
        })
    });
    b.cwUI.addWidget("cwCheckBox", {
        theme: ""
    }, {
        _init: function(a) {
            this.labelObj = null;
            var b = this.$el.attr("data-label");
            if (b) a.label = b, this.$el.attr("data-label", "");
            if (b = this.$el.attr("data-theme")) a.theme =
                b
        },
        _setOption: function(a) {
            if (a.label) {
                var e = b.cwUI.escapeHTML(a.label);
                if (this.labelObj === null) {
                    if (a = this.$el.prop("id")) this.labelObj = b('<label class="_cwCBLabel cwTextUnselectable linkStatus" for="' + a + '">' + e + "</label>"), this.$el.after(this.labelObj)
                } else this.labelObj.text(a.label);
                this.$el.attr("aria-label", e)
            }
        },
        check: function(a) {
            if (!a && this.is_disabled) return this;
            var a = this.$el,
                e = a.find("input");
            a.hasClass("_cwCBChecked") || (a.addClass("_cwCBChecked " + b.cwCheckBox._getClass("active", this.option.theme)).removeClass("_cwCBUnchecked _cwCBPartialChecked " +
                b.cwCheckBox._getClass("mixed", this.option.theme) + " " + b.cwCheckBox._getClass("", this.option.theme)).attr("aria-checked", "true"), e && e.attr({
                name: e.attr("data-cwui-cb-name")
            }), a = [!0, this.getVal(), !1], this.$el.trigger("cwCheckBox_update", a), typeof this.option.update == "function" && this.option.update.apply(this, a));
            return this
        },
        partialCheck: function(a) {
            if (!a && this.is_disabled) return this;
            var a = this.$el,
                e = a.find("input");
            a.hasClass("_cwCBPartialChecked") || (a.addClass("_cwCBPartialChecked " + b.cwCheckBox._getClass("mixed",
                this.option.theme)), a.removeClass("_cwCBChecked _cwCBUnchecked " + b.cwCheckBox._getClass("active", this.option.theme) + " " + b.cwCheckBox._getClass("", this.option.theme)).attr("aria-checked", "mixed"), e && e.removeAttr("name"), a = [!1, this.getVal(), !0], this.$el.trigger("cwCheckBox_update", a), typeof this.option.update == "function" && this.option.update.apply(this, a));
            return this
        },
        unCheck: function(a) {
            if (!a && this.is_disabled) return this;
            var a = this.$el,
                e = a.find("input");
            a.hasClass("_cwCBUnchecked") || (a.addClass("_cwCBUnchecked " +
                b.cwCheckBox._getClass("", this.option.theme)), a.removeClass("_cwCBChecked _cwCBPartialChecked " + b.cwCheckBox._getClass("active", this.option.theme) + " " + b.cwCheckBox._getClass("mixed", this.option.theme)).attr("aria-checked", "false"), e && e.removeAttr("name"), a = [!1, this.getVal(), !1], this.$el.trigger("cwCheckBox_update", a), typeof this.option.update == "function" && this.option.update.apply(this, a));
            return this
        },
        toggle: function() {
            if (this.is_disabled) return this;
            this.$el.hasClass("_cwCBChecked") ? this.unCheck() :
                this.check();
            return this
        },
        isChecked: function() {
            return this.$el.hasClass("_cwCBChecked")
        },
        getVal: function() {
            return this.$el.find("input").val()
        },
        isDisabled: function() {
            return this.is_disabled
        },
        disable: function() {
            this.is_disabled = !0;
            this.option.disable && this.option.disable.apply(this);
            return this
        },
        enable: function() {
            this.is_disabled = !1;
            this.option.enable && this.option.enable.apply(this);
            return this
        }
    }, {
        _create: function(a) {
            var e = a[0];
            if (e.type == "checkbox") {
                var d = a.getAttrs(),
                    e = b(b.cwCheckBox.create(e.checked,
                        e.name, e.value, d));
                a.before(e);
                a.remove();
                return e
            } else return a.hasClass("_cwCB") ? a : !1
        },
        create: function(a, e, d, f) {
            a == void 0 && (a = !1);
            e || (e = "");
            d == void 0 && (d = "on");
            f == void 0 && (f = {});
            var i = "";
            f["data-theme"] != void 0 && (i = f["data-theme"]);
            var h = '<span role="checkbox"',
                j = "_cwCB";
            a ? (j += " _cwCBChecked " + b.cwCheckBox._getClass("active", i), h += ' aria-checked="true"') : (j += " _cwCBUnchecked " + b.cwCheckBox._getClass("", i), h += ' aria-checked="false"');
            for (var k in f) switch (k) {
                case "class":
                    j += " " + f[k];
                    break;
                default:
                    h +=
                        " " + k + '="' + f[k] + '"'
            }
            f = '<input type="hidden"';
            e && (f += ' data-cwui-cb-name="' + e + '"', a && (f += ' name="' + e + '"'));
            d && (f += ' value="' + b.cwUI.escapeHTML(d) + '"');
            f += " />";
            return h + ' class="' + j + '">' + f + "</span>"
        },
        _getClass: function(a, e) {
            var d = "";
            a && (d = b.cwUI.ucFirst(a));
            var f = "";
            e && (f = b.cwUI.ucFirst(e));
            return "ico15Checkbox" + d + f
        }
    })
})(jQuery, jQuery.cwUI.L);
(function(b, a) {
    var e = a.cwDatePicker,
        d = {
            "m/d/Y": {
                compact: "m/d",
                regex: /([0-9]+)\/([0-9]+)\/([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 1,
                    d: 2
                },
                regexcompact: /([0-9]+)\/([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "d/m/Y": {
                compact: "d/m",
                regex: /([0-9]+)\/([0-9]+)\/([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 2,
                    d: 1
                },
                regexcompact: /([0-9]+)\/([0-9]+)/,
                regexcompactHint: {
                    m: 2,
                    d: 1
                }
            },
            "Y/m/d": {
                compact: "m/d",
                regex: /([0-9]+)\/([0-9]+)\/([0-9]+)/,
                regexHint: {
                    Y: 1,
                    m: 2,
                    d: 3
                },
                regexcompact: /([0-9]+)\/([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "m-d-Y": {
                compact: "m-d",
                regex: /([0-9]+)-([0-9]+)-([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 1,
                    d: 2
                },
                regexcompact: /([0-9]+)-([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "d-m-Y": {
                compact: "d-m",
                regex: /([0-9]+)-([0-9]+)-([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 2,
                    d: 1
                },
                regexcompact: /([0-9]+)-([0-9]+)/,
                regexcompactHint: {
                    m: 2,
                    d: 1
                }
            },
            "Y-m-d": {
                compact: "m-d",
                regex: /([0-9]+)-([0-9]+)-([0-9]+)/,
                regexHint: {
                    Y: 1,
                    m: 2,
                    d: 3
                },
                regexcompact: /([0-9]+)-([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "m.d.Y": {
                compact: "m.d",
                regex: /([0-9]+)\.([0-9]+)\.([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 1,
                    d: 2
                },
                regexcompact: /([0-9]+)\.([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "d.m.Y": {
                compact: "d.m",
                regex: /([0-9]+)\.([0-9]+)\.([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 2,
                    d: 1
                },
                regexcompact: /([0-9]+)\.([0-9]+)/,
                regexcompactHint: {
                    m: 2,
                    d: 1
                }
            },
            "Y.m.d": {
                compact: "m.d",
                regex: /([0-9]+)\.([0-9]+)\.([0-9]+)/,
                regexHint: {
                    Y: 1,
                    m: 2,
                    d: 3
                },
                regexcompact: /([0-9]+)\.([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "m/d-Y": {
                compact: "m/d",
                regex: /([0-9]+)\/([0-9]+)\-([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 1,
                    d: 2
                },
                regexcompact: /([0-9]+)\-([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "Y\u5e74m\u6708d\u65e5": {
                compact: "m\u6708d\u65e5",
                regex: /([0-9]+)\u5e74([0-9]+)\u6708([0-9]+)\u65e5/,
                regexHint: {
                    Y: 1,
                    m: 2,
                    d: 3
                },
                regexcompact: /([0-9]+)\/([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            }
        },
        f = null,
        i = null;
    b(function() {
        i = b('<div id="_datePicker" class="datePicker" style="display:none"><div class="tooltipHeader datePickerHeaderControl linkIconStatus"><span id="_datePickerPrev" role="button" aria-label="' + a.pager_prev + '" class="icoFontTriangleLeft"></span><span class="_datePickerYM"></span><span id="_datePickerNext" role="button" aria-label="' + a.pager_next + '" class="icoFontTriangleRight"></span></div><table><thead><tr><th>' +
            e.dayNamesMin[0] + "</th><th>" + e.dayNamesMin[1] + "</th><th>" + e.dayNamesMin[2] + "</th><th>" + e.dayNamesMin[3] + "</th><th>" + e.dayNamesMin[4] + "</th><th>" + e.dayNamesMin[5] + "</th><th>" + e.dayNamesMin[6] + '</th></tr></thead><tbody class="_datePickerDay" style="padding:5px;text-align:right"></tbody></table><div class="tooltipFooter btnGroup"><div id="_datePickerToday" role="button" class="button btnPrimary">' + e.currentText + '</div> <div id="_datePickerClose" role="button" class="button">' + a.button_close + "</div></div>");
        b(document.body).append(i);
        i.on("click.cwDatePicker", "td", function() {
            var a = b(this).attr("data-cwui-dp-date").match(/([0-9]+)-([0-9]+)-([0-9]+)/);
            f.select(a[1], a[2], a[3])
        });
        b("#_datePickerClose").on("click.cwDatePicker", function() {
            f.close()
        });
        b("#_datePickerToday").on("click.cwDatePicker", function() {
            f.today()
        });
        b("#_datePickerNext").on("click.cwDatePicker", function() {
            f.nextMonth()
        });
        b("#_datePickerPrev").on("click.cwDatePicker", function() {
            f.prevMonth()
        })
    });
    b.cwUI.addWidget("cwDatePicker", {
        dateLabel: null,
        dateFormat: "Y/m/d",
        compactLabel: !0
    }, {
        _init: function() {
            var a = this;
            this.tooltip = i.cwToolTip();
            this.$el.on("click.cwDatePicker", function() {
                a.open()
            });
            this._syncDate()
        },
        _syncDate: function() {
            var a = new Date;
            this.now_year = a.getFullYear();
            this.now_month = a.getMonth() + 1;
            this.now_day = a.getDate()
        },
        _setOption: function(a) {
            var e = this;
            a.open != void 0 && this.tooltip.setOption({
                open: function() {
                    typeof e.option.open == "function" && e.option.open.apply(e)
                }
            });
            a.close != void 0 && this.tooltip.setOption({
                close: function() {
                    typeof e.option.close ==
                        "function" && e.option.close.apply(e)
                }
            });
            if (a.dateFormat != void 0) {
                var f = d[a.dateFormat];
                if (f) this.dateFormatInfo = f
            }
            if (a.dateLabel != void 0) a.dateLabel.on("click.cwDatePicker", "._cwDPCancel", function() {
                e.setVal("");
                return !1
            }).on("click.cwDatePicker", "._cwDPDateLabel", function() {
                e.open(b(this))
            })
        },
        open: function(a) {
            this.loadValue();
            f = this;
            if (a == void 0) a = this.$el;
            this._build(this.year, this.month, this.day);
            this.tooltip.open(a);
            return this
        },
        close: function() {
            this.tooltip.close();
            return this
        },
        isOpen: function() {
            return this.tooltip.isOpen()
        },
        getVal: function() {
            if (this.option.dateLabel) {
                var a = this.option.dateLabel.attr("data-value");
                if (!a) return "";
                return a
            } else return this.$el.val()
        },
        setVal: function(d) {
            this.option.dateLabel ? d == "" ? (this.option.dateLabel.quickEmpty(), this.option.dateLabel.attr("data-value", "")) : (this.option.dateLabel.attr("data-value", d), this.loadValue(), this.option.dateLabel.html('<div class="_cwDPDateLabel assignContent assignLimit"><span class="assignContentText">' + (this.option.compactLabel && this.year == this.now_year ? b.cwUI.escapeHTML(this.dateFormatInfo.compact.replace("m",
                this.month).replace("d", this.day)) : b.cwUI.escapeHTML(d)) + '</span><span class="_cwDPCancel assignContentCancel"><span class="icoFontCancel"></span><span class="icoTextHide">' + a.button_delete + "</span></span></div>")) : this.$el.val(d);
            typeof this.option.update == "function" && this.option.update.apply(this);
            return this
        },
        select: function(a, b, d) {
            this.setVal(this.option.dateFormat.replace("Y", a).replace("m", b).replace("d", d));
            this.close();
            return this
        },
        today: function() {
            this._syncDate();
            this.select(this.now_year,
                this.now_month, this.now_day);
            return this
        },
        loadValue: function() {
            var a = this.getVal();
            this.val_day = this.val_month = this.val_year = 0;
            if (a.length > 0 && (a = a.match(this.dateFormatInfo.regex))) this.val_year = parseInt(a[this.dateFormatInfo.regexHint.Y], 10), this.val_month = parseInt(a[this.dateFormatInfo.regexHint.m], 10), this.val_day = parseInt(a[this.dateFormatInfo.regexHint.d], 10), this.year = this.val_year, this.month = this.val_month, this.day = this.val_day;
            if (!this.val_year) this.year = this.now_year, this.month = this.now_month;
            return this
        },
        nextMonth: function() {
            this.month++;
            this._build();
            return this
        },
        prevMonth: function() {
            this.month--;
            this._build();
            return this
        },
        _build: function() {
            var a = new Date(this.year, this.month - 1, 1);
            this.year = a.getFullYear();
            this.month = a.getMonth() + 1;
            var a = this.year,
                b = this.month,
                d = new Date(a, b, 0),
                f = (new Date(a, b - 1, 1)).getDay();
            d.getDay();
            var d = d.getDate(),
                l = a,
                m = b,
                n = 1,
                o = "",
                u = !1;
            this._syncDate();
            for (var r = 1; r <= 6; r++) {
                o += "<tr>";
                for (var v = 0; v < 7; v++) {
                    r == 1 ? v < f ? (n = new Date(a, b - 1, v - f + 1), l = n.getFullYear(), m = n.getMonth() +
                        1, n = n.getDate()) : v == f ? (l = a, m = b, n = 1, u = !0) : n++ : n >= d ? (u = !1, m = new Date(a, b, 1), l = m.getFullYear(), m = m.getMonth() + 1, n = 1) : n++;
                    var w = "";
                    u ? l == this.now_year && m == this.now_month && n == this.now_day && (w = "datePickerToday") : w = "datePickerOtherMonth";
                    l == this.val_year && m == this.val_month && n == this.val_day && (w.length > 0 && (w += " "), w += "datePickerSelected");
                    o += '<td data-cwui-dp-date="' + l + "-" + m + "-" + n + '" class="' + w + '">' + n + "</td>"
                }
                o += "</tr>"
            }
            YMLabel = e.showMonthAfterYear ? a + e.yearSuffix + e.yearMonthSeparator + e.monthNames[b - 1] : e.monthNames[b -
                1] + e.yearMonthSeparator + a + e.yearSuffix;
            i.find("._datePickerYM").text(YMLabel);
            i.find("._datePickerDay").html(o);
            return this
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b, a) {
    var e = [],
        d = b(document.body);
    b(function() {
        d.on("keydown.cwDialog", function(a) {
            a.keyCode == 27 && e.length > 0 && (a = e[e.length - 1], a.option.closeOnEscape && a.close())
        })
    });
    b.cwUI.addWidget("cwDialog", {
        title: "",
        width: 300,
        height: "auto",
        windowMargin: 7,
        autoOpen: !1,
        closeOnEscape: !0
    }, {
        agree_checkboxes: [],
        checked_agree_checkboxes_count: 0,
        _init: function() {
            var d = this;
            this.wrapper = this.$el.wrap('<div class="_cwDGBase dialogBase" style="display:none"><div class="_cwDGWrapper dialogContent"></div></div>').parent();
            this.backbox = this.wrapper.parent();
            this.wrapper.prepend('<h1 class="contentHl dialogContentH1 autotrim"></h1><div class="_cwDGTitleButton windowButton linkIconStatus"><span role="button" aria-label="' + a.button_close + '" class="_cwDGButton icoFontCancel icoSizeLarge"></span></div><div style="display:none" class="_cwDGFooter dialogContentFooter"></div>');
            this.title = this.wrapper.find("h1");
            this.footer = this.wrapper.find("._cwDGFooter");
            this.$el.addClass("_cwDG").attr("role", "dialog").show();
            this.content =
                this.$el.find("._cwDGContent").addClass("dialogContentArea");
            this.agree_checkboxes = this.wrapper.find("._cwDGAgreeCheckbox");
            this.agree_checkboxes.size() > 0 && (this.agree_checkboxes.each(function() {
                b(this).prop("checked") && (d.checked_agree_checkboxes_count += 1)
            }), this.agree_checkboxes.cwCheckBox({
                update: function() {
                    this.isChecked() ? d.checked_agree_checkboxes_count += 1 : d.checked_agree_checkboxes_count -= 1;
                    d._changeButtonStatus()
                }
            }));
            this.wrapper.on("click.cwDialog", "._cwDGButton", function() {
                var a = b(this).attr("data-idx"),
                    a = a == void 0 ? null : parseInt(a, 10);
                d.buttonClick(a);
                return !1
            })
        },
        _setOption: function(a) {
            if (a.title != void 0)
                if (a.title) {
                    this.wrapper.find("._cwDGTitleButton").show();
                    var d = b.cwUI.escapeHTML(a.title);
                    this.title.html(d).show();
                    this.$el.attr("aria-label", d)
                } else this.wrapper.find("._cwDGTitleButton").hide(), this.title.quickEmpty().hide(), this.$el.attr("aria-label", "");
            if (this.option.buttonLabels != void 0 && (a.buttonLabels != void 0 || a.buttonSubmit != void 0 || a.buttonDelete != void 0 || a.buttonCancel != void 0)) {
                for (var d =
                        "", e = ["buttonSubmit", "buttonDelete", "buttonCancel"], j = {}, k = e.length; k--;) {
                    var g = e[k],
                        l = this.option[g];
                    if (l != void 0)
                        if (typeof l == "object" && l.length)
                            for (var m = l.length; m--;) j[l[m]] = g;
                        else j[l] = g
                }
                e = this.option.buttonLabels.length;
                for (k = 0; k < e; k++) {
                    g = "buttonGray";
                    l = "";
                    switch (j[k]) {
                        case "buttonSubmit":
                            g = "btnPrimary";
                            break;
                        case "buttonDelete":
                            g = "btnDanger";
                            break;
                        case "buttonCancel":
                            l += " _cwDGButtonCancel"
                    }
                    m = b.cwUI.escapeHTML(this.option.buttonLabels[k]);
                    d += '<div role="button" aria-label="' + m + '" class="_cwDGButton' +
                        l + " button " + g + '" data-idx="' + k + '">' + m + "</div>"
                }
                d ? this.wrapper.find("._cwDGFooter").html(d).show() : this.wrapper.find("._cwDGFooter").quickEmpty().hide()
            }
            this._changeButtonStatus();
            a.autoOpen != void 0 && a.autoOpen && this.open()
        },
        open: function() {
            var a = this;
            this.is_open = !0;
            var d = this.$el;
            typeof a.option.open == "function" && a.option.open.apply(a, arguments);
            e.push(this);
            b.cwUI.setZIndex(this.backbox);
            this.backbox.fadeIn("fast");
            var h = arguments;
            this.backbox.fadeIn("fast", function() {
                a.option.openCallback && a.option.openCallback.apply(a,
                    h)
            });
            if (this.option.width == "auto") {
                d.css("display", "inline-block");
                var j = this.wrapper.outerWidth() - this.wrapper.width(),
                    j = d.outerWidth() + j;
                d.css("display", "block");
                this.wrapper.width(j)
            } else this.wrapper.width(this.option.width);
            j = this.wrapper.width();
            this.option.maxWidth && this.option.maxWidth < j && this.wrapper.width(this.option.maxWidth);
            this.option.minWidth && this.option.minWidth > j && this.wrapper.width(this.option.minWidth);
            switch (this.option.height) {
                case "auto":
                case "full":
                    var k = 0;
                    this.option.title &&
                        (k = this.title.outerHeight());
                    var g = 0;
                    this.option.buttonLabels && (g = this.footer.outerHeight());
                    j = a.getMaxHeight();
                    k = this.option.height == "auto" ? d.innerHeight() + k + g : j;
                    g = 0;
                    k > j && (d = this.option.contentScrollSelector ? d.find(this.option.contentScrollSelector) : d, d.height(d.height() - (k - j)), d.css({
                        overflow: "auto"
                    }), k = j);
                    this.wrapper.height(k);
                    break;
                default:
                    this.wrapper.height(this.option.height)
            }
            d = this.wrapper.height();
            this.option.maxHeight && this.option.maxHeight < d && this.wrapper.height(this.option.maxHeight);
            this.option.minHeight && this.option.minHeight > d && this.wrapper.height(this.option.minHeight);
            d = this.backbox.height();
            k = this.wrapper.outerHeight();
            this.wrapper.css("margin-top", parseInt(d / 2 - k / 2, 10) + "px");
            typeof a.option.postOpen == "function" && a.option.postOpen.apply(a, arguments);
            return this
        },
        close: function() {
            if (this.is_open) return this.is_open = !1, typeof this.option.close == "function" && this.option.close.apply(this, arguments), b.cwFloatBox.closeUpperLayer(this.backbox), b.cwUI.unsetZIndex(this.backbox), this.backbox.fadeOut("fast",
                function() {}), e.pop(), b("#_cwDGBase").fadeOut("fast"), this
        },
        buttonClick: function(a) {
            if (a === null) this.close();
            else {
                var b = this.wrapper.find("[data-idx=" + a + "]");
                b.length > 0 && (typeof this.option.buttonClick == "function" && this.option.buttonClick.apply(this, [a]), b.hasClass("_cwDGButtonCancel") && this.close())
            }
            return this
        },
        isAgreed: function() {
            var a = this.agree_checkboxes.size();
            if (a === 0) return !0;
            if (a === this.checked_agree_checkboxes_count) return !0;
            return !1
        },
        _changeButtonStatus: function() {
            var a = this.wrapper.find("._cwDGButton").not(".buttonGray");
            this.isAgreed() ? a.removeClass("btnDisable") : a.addClass("btnDisable")
        },
        getMaxHeight: function() {
            return b(window).height() - this.option.windowMargin * 2
        }
    }, {
        isShown: function() {
            if (e.length > 0) return !0;
            return !1
        },
        close: function() {
            if (e.length > 0)
                for (var a = dialog_stask.length; a--;) e[a].close()
        }
    })
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.cwUI.addWidget("cwDropDown", {
        showPosition: "right",
        useHtmlLabel: !1,
        list: []
    }, {
        _init: function() {
            var a = this;
            a.tip_body = b('<div style="display:none"></div>');
            a.tip_body.on("click.cwDropDown", "li._cwDDList", function() {
                a.select(b(this).attr("data-cwui-dd-value"))
            });
            b(document.body).append(a.tip_body);
            this.tooltip = a.tip_body.cwToolTip({
                direction: "bottom",
                noTriangle: !0
            });
            this.$el.on("click.cwDropDown", function() {
                a.open(a.$el)
            });
            this.latest_list = ""
        },
        _setOption: function(a) {
            var b = this;
            a.open !=
                void 0 && this.tooltip.setOption({
                    open: function() {
                        typeof b.option.open == "function" && b.option.open.apply(b, arguments)
                    }
                });
            a.close != void 0 && this.tooltip.setOption({
                close: function() {
                    typeof b.option.close == "function" && b.option.close.apply(b, arguments)
                }
            });
            var d = ["offsetTop", "offsetLeft", "showPosition", "theme", "useFloatBox", "parentFloatBox"],
                f = !1,
                i = {},
                h;
            for (h in d) {
                var j = d[h];
                a[j] != void 0 && (f = !0, i[j] = a[j])
            }
            f && this.tooltip.setOption(i)
        },
        open: function() {
            var a = this._getList(),
                e = '<ul role="menu" class="_cwDDListBody cwNoWrap ddListBody">';
            if (b.isArray(a))
                for (var d = 0, f = a.length; d < f; d++)
                    if (a[d] == "hr") e += '</ul><div class="line"></div><ul role="menu" class="_cwDDListBody ddListBody cwNoWrap">';
                    else {
                        var i = this.option.useHtmlLabel ? a[d].label : b.cwUI.escapeHTML(a[d].label);
                        e += '<li role="menuitem" class="_cwDDList" data-cwui-dd-value="' + b.cwUI.escapeHTML(a[d].value) + '">' + i + "</li>"
                    }
            e += "</ul>";
            if (this.latest_list != e) this.tip_body.html(e), this.latest_list = e;
            this.tooltip.open(this.$el);
            return this
        },
        close: function() {
            this.tooltip.close();
            return this
        },
        isOpen: function() {
            return this.tooltip.isOpen()
        },
        select: function(a) {
            typeof this.option.select == "function" && this.option.select.apply(this, [a]);
            this.tooltip.close();
            return this
        },
        _getList: function() {
            return typeof this.option.list == "function" ? this.option.list() : this.option.list
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.cwUI.addWidget("cwElasticTextArea", {
        minHeight: 50,
        maxHeight: !1,
        lineHeight: "auto"
    }, {
        _init: function() {
            var a = this,
                b = this.$el;
            a.is_focused = !1;
            b.on("keydown.cwElasticTextArea", function() {
                a.resize();
                typeof a.option.update == "function" && a.option.update.apply(a)
            }).on("keyup.cwElasticTextArea", function() {
                a.resize();
                typeof a.option.update == "function" && a.option.update.apply(a)
            }).on("focus.cwElasticTextArea", function() {
                a.is_focused = !0;
                a.resize()
            })
        },
        _setOption: function(a) {
            var b = this.$el;
            if (a.lineHeight !==
                void 0 && a.lineHeight === "auto") this.line_height_auto = parseFloat(b.css("line-height"))
        },
        getVal: function() {
            return this.$el.val()
        },
        setVal: function(a) {
            this.$el.val(a);
            this.resize();
            return this
        },
        focus: function() {
            this.$el.focus().caretPos("last");
            return this
        },
        clearFocused: function() {
            this.is_focused = !1;
            this.resize();
            return this
        },
        resize: function() {
            var a = this.$el;
            if (a.val() === "" && !this.is_focused) a.css({
                "overflow-y": "hidden",
                height: ""
            });
            else {
                a.height();
                var b = a.scrollTop();
                a.height(0);
                var d;
                d = this.option.lineHeight ===
                    "auto" ? this.line_height_auto : parseInt(this.option.lineHeight, 10);
                d = a[0].scrollHeight + d;
                var f;
                f = typeof this.option.minHeight === "function" ? this.option.minHeight.apply(this) : this.option.minHeight;
                d < f && (d = f);
                var i = !1;
                if (this.option.maxHeight) {
                    var h;
                    h = typeof this.option.maxHeight === "function" ? this.option.maxHeight.apply(this) : this.option.maxHeight;
                    f > h && (h = f);
                    d > h && (d = h, i = !0)
                }
                a.height(d);
                i ? a.css("overflow-y", "auto").scrollTop(b) : a.css("overflow-y", "hidden");
                return this
            }
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b, a) {
    var e = {};
    b(function() {
        b(document.body).on("click.cwFloatWindow", "._cwFWButton", function() {
            var a = b(this),
                e = a.closest("._cwFWInner")[0],
                e = b.cwFloatWindow.getWidget(e),
                a = parseInt(a.attr("data-cwui-fw-idx"), 10);
            e.buttonClick(a)
        }).on("keydown.cwFloatWindow", function(a) {
            a.keyCode == 27 && b.cwFloatWindow.close()
        })
    });
    b.cwUI.addWidget("cwFloatWindow", {
        title: "",
        wrapperSelector: "body",
        width: 780,
        allowOverlay: !1,
        noAnimation: !1
    }, {
        _init: function() {
            var b = this.$el;
            b.wrap('<div class="floatWindow"></div>');
            b.attr("role", "dialog");
            this.finner = b.addClass("_cwFWInner floatWindowInner");
            this.fwindow = b.parent().hide();
            this.fcontent = b.find("._cwFWContent").addClass("floatWindowContent");
            this.finner.prepend('<h1 class="contentHl floatContentH1"></h1><div class="windowButton linkIconStatus"><span class="_cwFWButton icoFontCancel icoSizeLarge" data-cwui-fw-idx="-1"></span><span class="icoTextHide">' + a.button_close + "</span></div>");
            this.finner.append('<div style="display:none" class="_cwFWButtonFooter floatWindowFooter"></div>');
            e[this.widget_id] = this
        },
        _setOption: function(a) {
            if (a.title != void 0) {
                var e = b.cwUI.escapeHTML(a.title);
                this.finner.find("h1").html('<span class="autotrim">' + e + "</span>");
                this.$el.attr("aria-label", e)
            }
            a.htmlTitle != void 0 && this.$el.attr("aria-label", this.finner.find("h1").html('<span class="autotrim">' + a.htmlTitle + "</span>").text());
            if (this.option.buttonLabels != void 0 && (a.buttonLabels != void 0 || a.buttonSubmit != void 0 || a.buttonCancel)) {
                for (var a = "", e = this.option.buttonLabels.length, i = 0; i < e; i++) {
                    var h = "buttonGray",
                        j = "";
                    this.option.buttonSubmit != void 0 && this.option.buttonSubmit == i ? h = "btnPrimary" : this.option.buttonCancel != void 0 && this.option.buttonCancel == i && (j += " _cwFWButtonCancel");
                    var k = b.cwUI.escapeHTML(this.option.buttonLabels[i]);
                    a += '<div role="button" aria-label="' + k + '" class="_cwFWButton' + j + " button " + h + '" data-cwui-fw-idx="' + i + '">' + k + "</div>"
                }
                a ? this.finner.find("._cwFWButtonFooter").html(a).show() : this.finner.find("._cwFWButtonFooter").quickEmpty().hide()
            }
        },
        open: function() {
            var a = this,
                f = this.$el,
                i = this.option;
            typeof a.option.open == "function" && a.option.open.apply(a, arguments);
            if (this.is_open) f.scrollTop(0);
            else {
                var h = [];
                if (!i.allowOverlay)
                    for (var j in e) e[j].isOpen() && h.push(j);
                i = function() {
                    for (var b = h.length; b--;) e[h[b]].close();
                    a.resize();
                    a.fcontent.scrollTop(0)
                };
                a.resize();
                f.show();
                this.option.noAnimation ? (a.fwindow.show(), i()) : a.fwindow.fadeIn("fast", i);
                b.cwUI.setZIndex(a.fwindow)
            }
            this.is_open = !0;
            typeof a.option.postOpen == "function" && a.option.postOpen.apply(a, arguments);
            return this
        },
        close: function() {
            var a =
                this,
                e = function() {
                    typeof a.option.close == "function" && a.option.close.apply(a, arguments)
                };
            b.cwFloatBox.closeUpperLayer(a.fwindow);
            b.cwUI.unsetZIndex(a.fwindow);
            this.option.noAnimation ? (a.fwindow.hide(), e()) : a.fwindow.fadeOut("fast", e);
            this.is_open = !1;
            return this
        },
        buttonClick: function(a) {
            if (a == -1) this.close(), typeof this.option.cancel == "function" && this.option.cancel.apply(this);
            else {
                var b = this.finner.find("[data-cwui-fw-idx=" + a + "]");
                b.length > 0 && (typeof this.option.buttonClick == "function" && this.option.buttonClick.apply(this, [a]), b.hasClass("_cwFWButtonCancel") && (this.close(), typeof this.option.cancel == "function" && this.option.cancel.apply(this)))
            }
            return this
        },
        resize: function() {
            var a = this.$el,
                e = b(window).innerWidth(),
                e = parseInt((e - this.option.width) / 2, 10);
            a.css({
                left: e,
                right: e
            });
            b(this.option.wrapperSelector);
            a = b(this.option.wrapperSelector).height();
            this.fcontent.height(a);
            var e = this.finner.find("h1").outerHeight(),
                i = this.finner.find("._cwFWHeader").length > 0 ? this.finner.find("._cwFWHeader").outerHeight() : 0,
                h = this.finner.find("._cwFWFooter"),
                h = h.length > 0 && h.isVisible() ? h.outerHeight() : 0,
                j = this.finner.find("._cwFWButtonFooter"),
                k = j.isVisible() ? j.outerHeight() : 0,
                j = this.fcontent,
                g = j.innerHeight() - j.height(),
                a = a - e - i - h - k - g;
            j.height(a);
            typeof this.option.resize == "function" && this.option.resize.apply(this, [a]);
            return this
        }
    }, {
        isShown: function() {
            for (var a in e)
                if (e[a].isOpen()) return !0;
            return !1
        },
        resize: function() {
            for (var a in e) {
                var b = e[a];
                b.isOpen() && b.resize()
            }
            return this
        },
        close: function() {
            for (var a in e) {
                var b = e[a];
                b.isOpen() && b.close()
            }
            return this
        }
    })
})(jQuery,
    jQuery.cwUI.L);
(function(b, a) {
    b.cwUI.addWidget("cwListTip", {
        search: !0,
        useHtmlLabel: !1,
        multiSelect: !1,
        selectable: !0,
        fixHeight: !0,
        maxListHeight: 160,
        limit: 200
    }, {
        ul: null,
        tooltip: null,
        searchbox: null,
        search_focus_idx: 0,
        _init: function() {
            var a = this,
                d = this.$el;
            d.prepend('<div class="_cwLTSearchArea toolTipSearchArea"><div class="_cwLTSearchBoxArea"></div><div class="_cwLTCheckHandle tooltipCheckHandle" style="display:none"></div><div class="_cwLTSelectOptionArea tooltipCheckHandle" style="display:none"></div></div><ul class="_cwLTList cwTextUnselectable toolTipSelectList tooltipList toolTipListHeight"></ul>');
            this.ul =
                d.find("ul._cwLTList");
            this.ul.attr("role", "list");
            d.addClass("toolTipListWidth");
            this.ul.on("click.cwListTip", "li", function() {
                var d = b(this);
                a.select(d.attr("data-cwui-lt-value"), d)
            });
            this.tooltip = d.cwToolTip({
                open: function() {
                    typeof a.option.open == "function" && a.option.open.apply(a, arguments);
                    a.searchbox && a.searchbox.setVal("");
                    a.build()
                }
            });
            this.searchbox = null;
            this.select_list = [];
            this.select_dat = {}
        },
        _setOption: function(e) {
            var d = this,
                f = this.$el;
            e.maxListHeight && this.ul.css("max-height", e.maxListHeight);
            e.fixHeight != void 0 && (e.fixHeight ? this.ul.css("height", e.maxListHeight) : this.ul.css("height", !1));
            e.close != void 0 && this.tooltip.setOption({
                close: function() {
                    typeof d.option.close == "function" && d.option.close.apply(d, arguments)
                }
            });
            if (e.search != void 0)
                if (e.search) {
                    d.search_focus_idx = 0;
                    var i = {
                        update: function() {
                            d.search_focus_idx = 0;
                            d.build()
                        }
                    };
                    i.placeHolder = e.placeHolder ? e.placeHolder : a.button_search;
                    this.searchbox = f.find("._cwLTSearchBoxArea").html('<input class="inputMedium" type="text" />').find("input").cwSearchBox(i);
                    var h = function() {
                            var a = d.ul.find("li");
                            if (a.length == 0) d.search_focus_idx = 0;
                            else {
                                a.removeClass("toolTipListHover");
                                d.search_focus_idx--;
                                if (d.search_focus_idx < 0) d.search_focus_idx = 0;
                                if (d.search_focus_idx > 0) {
                                    a = b(a[d.search_focus_idx - 1]);
                                    a.addClass("toolTipListHover");
                                    var e = d.ul.offset().top;
                                    a.offset().top < e && d.ul.scrollTo(a)
                                }
                            }
                        },
                        j = function() {
                            var a = d.ul.find("li");
                            if (a.length == 0) d.search_focus_idx = 0;
                            else {
                                a.removeClass("toolTipListHover");
                                d.search_focus_idx++;
                                if (a.length < d.search_focus_idx) d.search_focus_idx =
                                    a.length;
                                a = b(a[d.search_focus_idx - 1]);
                                a.addClass("toolTipListHover");
                                var e = d.ul.offset().top + d.ul.height();
                                a.offset().top + a.height() > e && d.ul.scrollTo(a)
                            }
                        };
                    this.searchbox.$el.keydown(function(a) {
                        switch (a.keyCode) {
                            case 13:
                                if (d.search_focus_idx > 0) {
                                    var e = d.ul.find("li");
                                    setTimeout(function() {
                                        b(e[d.search_focus_idx - 1]).click()
                                    }, 200)
                                }
                                break;
                            case 38:
                                h();
                                break;
                            case 40:
                                j()
                        }
                    })
                } else this.searchbox && this.searchbox.quickEmpty();
            else e.placeHolder != void 0 && this.searchbox && this.searchbox.setOption({
                placeHolder: e.placeHolder
            });
            if (e.multiSelect != void 0) {
                var i = f.find("._cwLTCheckHandle"),
                    k = this.ul;
                e.multiSelect ? (k.addClass("toolTipSelectList"), i.html('<span class="_cwLTCheckAll linkStatus">' + a.checkall + '</span> / <span class="_cwLTUnCheckAll linkStatus">' + a.uncheckall + "</span>"), i.find("._cwLTCheckAll").on("click.cwListTip", function() {
                        k.find("li").each(function() {
                            var a = b(this);
                            a.hasClass("listSelected") || a.click()
                        })
                    }), i.find("._cwLTUnCheckAll").on("click.cwListTip", function() {
                        k.find("li.listSelected").click()
                    }), i.show()) :
                    (i.quickEmpty(), i.hide())
            }
            if (e.selectOptionArea != void 0) f = f.find("._cwLTSelectOptionArea"), k = this.ul, e.selectOptionArea ? (f.html(e.selectOptionArea), f.show()) : (f.quickEmpty(), f.hide());
            e.selectable != void 0 && (e.selectable ? this.ul.addClass("toolTipSelectList") : this.ul.removeClass("toolTipSelectList"));
            var f = ["offsetTop", "offsetLeft", "showPosition", "direction", "noAnimation", "noTriangle", "useFloatBox", "parentFloatBox", "theme"],
                g;
            for (g in f)
                if (i = f[g], e[i] != void 0) {
                    var l = {};
                    l[i] = e[i];
                    this.tooltip.setOption(l)
                }
        },
        open: function() {
            this.tooltip.open.apply(this.tooltip, arguments);
            this.ul.scrollTop(0);
            this.searchbox && this.searchbox.$el.focus();
            return this
        },
        move: function() {
            this.tooltip.move(this.$el);
            return this
        },
        close: function() {
            if (this.searchbox) this.searchbox.$el.blur(), this.search_focus_idx = 0;
            this.tooltip.close.apply(this.tooltip, arguments);
            return this
        },
        isOpen: function() {
            return this.tooltip.isOpen()
        },
        getVal: function() {
            for (var a = [], b = this.select_list.length, f = 0; f < b; f++) a.push(this.select_list[f]);
            return this.option.multiSelect ?
                a : a[0]
        },
        setVal: function(a) {
            this.clear();
            for (var b = a.length, f = 0; f < b; f++) this.select(a[f]);
            return this
        },
        select: function(a, b) {
            !this.option.multiSelect && this.option.selectable && (this.clear(), b = null);
            this.option.selectable && (b || (b = this.findItemByValue(a)), this.select_dat[a] ? (b.length > 0 && b.removeClass("listSelected"), this.select_list.splice(array_search(a, this.select_list), 1), delete this.select_dat[a]) : (b.length > 0 && b.addClass("listSelected"), this.select_list.push(a), this.select_dat[a] = !0), typeof this.option.update ==
                "function" && this.option.update.apply(this));
            typeof this.option.select == "function" && this.option.select.apply(this, [a]);
            return this
        },
        clear: function() {
            this.select_list = [];
            this.select_dat = {};
            typeof this.option.update == "function" && this.option.update.apply(this);
            this.build();
            return this
        },
        getList: function() {
            var a = typeof this.option.list == "function" ? this.option.list.apply(this) : this.option.list,
                b = [],
                f = [];
            this.searchbox && (f = this.searchbox.getVal().toLowerCase().replace(/^\s+|\s+$/g, "").split(/\s+/));
            for (var i =
                    a.length, h = 0; h < i; h++) {
                var j = "",
                    k = a[h],
                    j = k.keys != void 0 ? k.keys.join(" ") : k.label,
                    j = j.toLowerCase();
                (function() {
                    for (var a = 0; a < f.length; a++)
                        if (j.indexOf(f[a]) === -1) return;
                    b.push(k)
                })()
            }
            return b
        },
        findItemByValue: function(a) {
            return this.ul.find("li[data-cwui-lt-value=" + a + "]")
        },
        getValueByItem: function(a) {
            if (a instanceof jQuery) return a.attr("data-cwui-lt-value")
        },
        build: function() {
            if (this.option.list == void 0 || !this.isOpen()) return !1;
            var e = "",
                d = this.getList();
            if (b.isArray(d)) {
                for (var f = 0, i = d.length, h = 0; h <
                    i; h++) {
                    var j = d[h];
                    f++;
                    if (!(f > this.option.limit)) {
                        var k = b.cwUI.escapeHTML(j.value),
                            g = this.option.useHtmlLabel ? j.label : b.cwUI.escapeHTML(j.label);
                        e += this.option.selectable ? this.select_dat[j.value] != void 0 ? '<li class="_cwSelectableRow listSelected" role="listitem" data-cwui-lt-idx="' + h + '" data-cwui-lt-value="' + k + '">' + b.cwCheckBox.create(!0, "", h, {
                            "data-theme": "green"
                        }) + g + "</li>" : '<li class="_cwSelectableRow" role="listitem" data-cwui-lt-idx="' + h + '" data-cwui-lt-value="' + k + '">' + b.cwCheckBox.create(!1,
                            "", h, {
                                "data-theme": "green"
                            }) + g + "</li>" : '<li role="listitem" data-cwui-lt-idx="' + h + '" data-cwui-lt-value="' + k + '">' + g + "</li>"
                    }
                }
                f > this.option.limit && (e += '<div style="text-align:center;font-size:12px;color:#666">' + a.cwui_listip_list_overflow.replace(/%%num%%/, b.cwUI.formatNumber(f - this.option.limit)) + " " + a.cwui_listip_list_overflow_max.replace(/%%num%%/, b.cwUI.formatNumber(this.option.limit)) + "</div>");
                this.ul.html(e);
                return this
            }
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b) {
    var a = null,
        e = b('<div style="display:none"><p class="_cwMTMessage cwNoWrap"></p></div>');
    b(function() {
        b(document.body).append(e)
    });
    var d = "",
        f = null,
        i = !1,
        h = null,
        j = !1,
        k = null;
    b.cwUI.addWidget("cwMessageTip", {
        theme: "black",
        delay: 0,
        useHtml: !1,
        delayQuickMode: !0,
        closeOnClick: !0
    }, {
        _init: function() {
            var a = this,
                b = this.$el;
            this.is_disabled = !1;
            this.tooltip = e.cwToolTip({
                noAnimation: !0
            });
            b.on("mouseenter.cwMessageTip", function() {
                a.open()
            });
            b.on("mouseleave.cwMessageTip", function() {
                a.close()
            })
        },
        _setOption: function(a) {
            var b =
                this,
                d = this.$el;
            a.open != void 0 && this.tooltip.setOption({
                open: function() {
                    typeof b.option.open == "function" && b.option.open.apply(b)
                }
            });
            a.close != void 0 && this.tooltip.setOption({
                close: function() {
                    typeof b.option.close == "function" && b.option.close.apply(b)
                }
            });
            if (a.closeOnClick != void 0)
                if (a.closeOnClick) d.on("click.cwMessageTip", function() {
                    b.close()
                });
                else d.off("click.cwMessageTip");
            var d = ["offsetTop", "offsetLeft", "showPosition", "direction", "noTriangle", "theme"],
                e;
            for (e in d) {
                var f = d[e];
                if (a[f] != void 0) {
                    var h = {};
                    h[f] = a[f];
                    this.tooltip.setOption(h)
                }
            }
        },
        open: function() {
            var b = this;
            if (b.is_disabled) return b;
            a = b;
            i = !0;
            h = b;
            f && (clearTimeout(f), f = null);
            var e = b.option.delayQuickMode && j ? 0 : h.option.delay,
                m = function() {
                    i ? (b.refresh(h.$el), d && (h.tooltip.open(h.$el), j = !0)) : (b.tooltip.close(), h._closeTip());
                    f = null
                };
            e ? f = setTimeout(m, e) : m();
            k && (clearTimeout(k), k = null);
            return b
        },
        close: function() {
            if (this.is_disabled) return this;
            a = null;
            i = !1;
            h = this;
            this._closeTip();
            return this
        },
        isOpen: function() {
            return this.tooltip.isOpen()
        },
        refresh: function(a) {
            a = this.getMessage(a);
            d != a && (this.option.useHtml ? e.find("._cwMTMessage").html(a) : e.find("._cwMTMessage").text(a), d = a);
            return this
        },
        _closeTip: function() {
            k && clearTimeout(k);
            this.tooltip.close();
            k = setTimeout(function() {
                j = !1
            }, 300);
            return this
        },
        getMessage: function(a) {
            return typeof this.option.message != "function" ? this.option.message : this.option.message.apply(this, [a])
        },
        disable: function() {
            this.is_disabled = !0;
            return this
        },
        enable: function() {
            this.is_disabled = !1;
            return this
        }
    }, {
        isShown: function() {
            return a !=
                null
        },
        close: function() {
            a && a.close();
            return this
        }
    })
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.fn.cwPlaceHolder = function() {
        b.browser.msie && (b("input[placeholder]").each(function() {
            var a = b(this);
            a.addClass("_placeHolder");
            a.blur()
        }), b(document).on("foucs.cwPlaceHolder", "._placeHolder", function() {
            var a = b(this);
            a.hasClass("_placeHolderBlank") && (a.val(""), a.removeClass("_placeHolderBlank"))
        }).on("blur.cwPlaceHolder", "_placeHolder", function() {
            var a = b(this);
            a.val() == "" && (a.val(a.prop("placeholder")), a.addClass("_placeHolderBlank"))
        }))
    }
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.cwUI.addWidget("cwScrollTable", {}, {
        _init: function() {
            var a = this.$el;
            this.id = a[0].id;
            a.addClass("basicTableHeader");
            this.header_row = a.find("thead th");
            this.column_num = this.header_row.length;
            this.column_padding = [];
            this.column_width = [];
            for (var e = this.id + "_cwST_body", d = '<div style="overflow-y:auto"><table id="' + e + '" class="basicTable"><thead><tr class="basicTableHiddenRow">', f = 0; f < this.column_num; f++) {
                d += "<th></th>";
                var i = b(this.header_row[f]);
                this.column_padding[f] = i.outerWidth() - i.width()
            }
            d +=
                "</tr></thead><tbody></tbody></table>";
            this.body_box = b(d);
            a.after(this.body_box);
            this.body_table = b("#" + e);
            this.body_table.find("tbody").replaceWith(a.find("tbody"));
            this.body_table_head = this.body_table.find("thead th");
            this.body_table_body = this.body_table.find("tbody")
        },
        _setOption: function() {},
        addRow: function(a, e) {
            e == void 0 && (e = {});
            var d = b("<tr></tr>");
            e.tr != void 0 && d.attr(e.tr);
            for (var f = 0; f < this.column_num; f++) {
                var i = b('<td><div class="autotrim" style="width:' + this.column_width[f] + 'px;">' + a[f] +
                    "</div></td>");
                e.td != void 0 && e.td[f] != void 0 && i.attr(e.td[f]);
                d.append(i)
            }
            this.body_table_body.append(d);
            return this
        },
        addMergedRow: function(a, e) {
            e == void 0 && (e = {});
            var d = b("<tr></tr>"),
                f = b('<td colspan="' + this.column_num + '">' + a + "</td>");
            e.tr != void 0 && d.attr(e.tr);
            e.td != void 0 && f.attr(e.td);
            d.append(f);
            this.body_table_body.append(d);
            return this
        },
        empty: function() {
            this.body_table_body.quickEmpty();
            return this
        },
        resize: function(a) {
            typeof this.option.preResize == "function" && this.option.preResize.apply(this);
            var e = this.$el.width(),
                d = this.option.columnWidth,
                f, i, h, j = 0,
                k = [];
            for (h = 0; h < this.column_num; h++) {
                var g = d[h];
                g != "auto" ? (j += g, h != this.column_num - 1 && (f = b(this.body_table_head[h]), i = this.column_padding[h], this.column_width[h] = g - i, f.width(this.column_width[h]))) : k.push(h)
            }
            d = k.length;
            if (d > 0) {
                e = parseInt((e - j) / d, 10);
                for (h = 0; h < d; h++) f = b(this.body_table_head[k[h]]), i = this.column_padding[h], this.column_width[h] = e - i, f.width(this.column_width[h])
            }
            for (h = 0; h < this.column_num - 1; h++) b(this.header_row[h]).width(b(this.body_table_head[h]).width());
            this.body_box.height(a - this.$el.height());
            typeof this.option.postResize == "function" && this.option.postResize.apply(this);
            return this
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b, a) {
    var e = {
        placeHolder: a.button_search
    };
    b(function() {
        var a = null;
        b(document.body).on("keydown.cwSearchBox", "._cwSB", function(b) {
            a = b.keyCode
        }).on("keyup.cwSearchBox", "._cwSB", function(e) {
            var i = b(this);
            i.val().length > 0 ? i.parent().find("._cwSBCancel").show() : i.parent().find("._cwSBCancel").hide();
            i = i.cwSearchBox();
            switch (e.keyCode) {
                case 37:
                case 38:
                case 39:
                case 40:
                case 16:
                case 17:
                case 18:
                    break;
                case 13:
                    if (a == 13) break;
                default:
                    typeof i.option.update == "function" && i.option.update.apply(i)
            }
        }).on("click.cwSearchBox",
            "._cwSBCancel",
            function() {
                var a = b(this);
                a.hide();
                a = a.parent().find("._cwSB");
                a.val("").blur();
                a = a.cwSearchBox();
                typeof a.option.clear == "function" && a.option.clear.apply(a);
                typeof a.option.update == "function" && a.option.update.apply(a)
            })
    });
    b.cwUI.addWidget("cwSearchBox", e, {
        _init: function(a) {
            var e = this.$el;
            this.is_disabled = !1;
            e.addClass("_cwSB searchBox").attr("role", "search");
            var i = e.attr("placeholder");
            if (i) a.placeHolder = i;
            e.wrap('<div class="search"></div>').on("focus.cwSearchBox", function() {
                b(this).parent().addClass("focus")
            }).on("blur.cwSearchBox",
                function() {
                    b(this).parent().removeClass("focus")
                });
            e.parent().prepend('<span class="icoFontSearch icSearch"></span><span class="_cwSBCancel icoFontCancel icSearchCancel icoSizeLarge" style="display:none"></span>')
        },
        _setOption: function(a) {
            var b = this.$el;
            a.placeHolder && b.attr("placeholder", a.placeHolder)
        },
        getVal: function() {
            return this.$el.val()
        },
        setVal: function(a) {
            this.$el.val(a).keyup();
            return this
        },
        disable: function() {
            this.is_disabled = !0;
            this.$el.prop("disabled", !0);
            this.option.disable && this.option.disable.apply(this);
            return this
        },
        enable: function() {
            this.is_disabled = !1;
            this.$el.prop("disabled", !1);
            this.option.enable && this.option.enable.apply(this);
            return this
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b(function() {
        b(document.body).on("click.cwSelectBox", "._cwSLBox", function() {
            var a = b(this).closest("._cwSL").cwSelectBox();
            b.cwFloatBox.skip(a.ul);
            a.toggle()
        })
    });
    b.cwUI.addWidget("cwSelectBox", {
        width: "auto",
        height: "auto",
        parentFloatBox: null
    }, {
        _init: function() {
            var a = this,
                e = this.$el;
            this.input = e.find("input._cwSLInput");
            this.ul = e.find("ul._cwSLList");
            this.box = e.find("._cwSLBox");
            this.ul.on("click.cwSelectBox", "li", function() {
                var d = b(this),
                    e = d.attr("data-cwui-sb-value");
                a.select(e, {
                    item: d
                })
            })
        },
        _setOption: function(a) {
            var b = this.$el;
            a.width != void 0 && (a.width == "auto" ? b.css({
                width: !1
            }) : this.box.width(a.width));
            a.maxWidth != void 0 && (a.maxWidth ? this.box.css("max-width", a.maxWidth).addClass("autotrim") : this.box.css("max-width", "").removeClass("autotrim"))
        },
        open: function() {
            var a = this;
            if (!this.is_open) {
                this.is_open = !0;
                this.ul.find("li.selectboxSelected").removeClass("selectboxSelected");
                var e = this.findSelectedItem();
                e.addClass("selectboxSelected");
                b.cwFloatBox.open(this.ul, function() {
                    a.close()
                }, {
                    noAnimation: !0,
                    skip: a.option.parentFloatBox
                });
                this.ul.scrollTop(this.ul.scrollTop() + e.position().top);
                this.ul_width = this.ul.width();
                e = this.box.innerWidth();
                this.ul_width < e && this.ul.width(e)
            }
            return this
        },
        close: function() {
            if (!this.is_open) return this;
            this.is_open = !1;
            b.cwFloatBox.close(this.ul);
            return this
        },
        toggle: function() {
            this.isOpen() ? this.close() : this.open();
            return this
        },
        select: function(a, b) {
            var b = b || {},
                d = !1,
                f = b.item;
            f == void 0 && (f = this.findItemByValue(a));
            f || (f = this.ul.find("li:first"));
            b.silent &&
                (d = !0);
            this.$el.find("._cwSLSelectedLabel").html(f.html());
            this.input.val(a);
            d || (this.$el.trigger("cwSelectBox_update", [a]), typeof this.option.update == "function" && this.option.update.apply(this, [a]));
            this.close();
            return this
        },
        selectByIndex: function(a, e) {
            var d = this.findItemByIndex(a);
            this.select(d.attr("data-cwui-sb-value"), b.extend({
                item: d
            }, e))
        },
        findSelectedItem: function() {
            return this.findItemByValue(this.getVal())
        },
        findItemByIndex: function(a) {
            var e = this.ul.find("li");
            return e[a] ? b(e[a]) : null
        },
        findItemByValue: function(a) {
            var e =
                null;
            this.ul.find("li").each(function() {
                var d = b(this);
                if (d.attr("data-cwui-sb-value") == a) return e = d, !1
            });
            return e
        },
        getVal: function() {
            return this.input.val()
        },
        setList: function(a, e) {
            if (!b.isArray(a)) return this;
            this.ul.html(b.cwSelectBox.createOptionList(a, e));
            typeof e === "undefined" && this.selectByIndex(0, {
                silent: !0
            });
            this._init();
            return this
        },
        appendList: function(a) {
            if (!b.isArray(a)) return this;
            var e = [];
            this.$el.find("li").each(function() {
                var a = b(this),
                    f = a.prop("data-cwui-sb-value"),
                    a = a.text();
                e.push({
                    label: a,
                    value: f
                })
            });
            this.setList(e.concat(a));
            return this
        }
    }, {
        _create: function(a) {
            var e = a[0];
            if (e.type == "select-one") {
                var d = [];
                a.find("option").each(function() {
                    var a = b(this);
                    d.push({
                        value: a.val(),
                        label: a.text()
                    })
                });
                var f = a.getAttrs(),
                    e = b(b.cwSelectBox.create(d, e.name, a.val(), f));
                a.before(e);
                a.remove();
                return e
            } else return a.hasClass("_cwSL") ? a : !1
        },
        create: function(a, e, d, f) {
            e || (e = "");
            f == void 0 && (f = {});
            d == void 0 && (d = "");
            var i = "<div",
                h = "_cwSL selectbox cwTextUnselectable",
                j;
            for (j in f) switch (j) {
                case "class":
                    h +=
                        " " + f[j];
                    break;
                default:
                    i += " " + j + '="' + f[j] + '"'
            }
            f = '<ul role="list" class="_cwSLList selectboxContent cwNoWrap cwTextUnselectable" style="display:none">' + this.createOptionList(a) + "</ul>";
            j = "";
            for (var k = 0; k < a.length; k++) {
                var g = a[k];
                if (g.value == d) {
                    j = g.label;
                    break
                }
            }
            a = '<div class="_cwSLBox selectboxDefault"><span class="_cwSLSelectedLabel cwNoWrap">' + b.cwUI.escapeHTML(j) + '</span><span class="icoFontTriangleDown"></span></div>';
            j = '<input class="_cwSLInput" type="hidden"';
            e && (j += ' name="' + e + '"');
            j += ' value="' +
                b.cwUI.escapeHTML(d) + '"/>';
            return i + ' class="' + h + '">' + a + f + j + "</div>"
        },
        createOptionList: function(a, e) {
            for (var d = "", f = 0; f < a.length; f++) {
                var i = a[f];
                if (i.value == e) selected_label = i.label;
                d += i.tooltip ? '<li role="listitem" class="_showDescription" aria-label="' + i.tooltip + '" ' : '<li role="listitem" ';
                d += 'data-cwui-sb-value="' + b.cwUI.escapeHTML(i.value) + '">' + b.cwUI.escapeHTML(i.label) + "</li>"
            }
            return d
        }
    })
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.cwUI.addWidget("cwTabbedBar", {
        toggleMode: !1,
        descriptionDelay: 500
    }, {
        _init: function() {
            this.selected_idx = null
        },
        _setOption: function(a) {
            if (this.init_option) {
                this.bbar = this.$el.cwButtonBar({
                    toggleMode: !0,
                    descriptionList: a.descriptiopnList,
                    descriptionDelay: a.descriptionDelay,
                    update: function(a, f) {
                        if (b.selected_idx == a) {
                            if (!f)
                                if (b.option.toggleMode) b.selected_idx = null, b.option.update && b.option.update.apply(b, [a, !1]);
                                else return !1
                        } else if (f) {
                            var i = b.selected_idx;
                            b.selected_idx = a;
                            this.deSelect(i);
                            b.option.update && b.option.update.apply(b, [a, !0])
                        }
                    }
                });
                this.$el = this.bbar.$el;
                var b = this;
                setTimeout(function() {
                    a.selected ? b.select(a.selected) : a.toggleMode || b.select(0)
                })
            }
        },
        select: function(a) {
            a = parseInt(a, 10);
            this.selected_idx != a && this.bbar.select(a);
            return this
        },
        deselectAll: function() {
            this.bbar.deSelectAll();
            return this
        },
        getSelectedIndex: function() {
            return this.selected_idx
        },
        disableButton: function(a) {
            this.bbar.disableButton(a);
            return this
        },
        enableButton: function(a) {
            this.bbar.enableButton(a);
            return this
        },
        disableButtonAll: function() {
            this.bbar.disableButtonAll();
            return this
        },
        enableButtonAll: function() {
            this.bbar.enableButtonAll();
            return this
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b) {
    var a = {};
    b.cwUI.addWidget("cwToolTip", {
        offsetLeft: 0,
        offsetTop: 0,
        windowMargin: 7,
        triangleMargin: 10,
        useFloatBox: !0,
        showPosition: "center",
        direction: "vertical",
        theme: "white",
        noAnimation: !1,
        noTriangle: !1,
        parentFloatBox: null
    }, {
        _init: function() {
            this.$el.attr("role", "tooltip");
            this.triangle = "";
            this.tipFrom = null
        },
        _setOption: function(a) {
            var d = this.$el;
            a.theme != void 0 && (this.init_option || d.removeClass("toolTipWhite toolTipBlack"), a = b.cwUI.ucFirst(a.theme.toLowerCase()), d.addClass("toolTip toolTip" +
                a + " mainContetTooltip"))
        },
        open: function(e) {
            if (e && !b.cwUI.isWidget(e[0])) {
                var d = this,
                    f = d.$el;
                if (d.is_open) {
                    if (e[0] == d.tipFrom[0]) {
                        d.close();
                        return
                    }
                    typeof d.option.open == "function" && d.option.open.apply(d, arguments)
                } else d.is_open = !0, typeof d.option.open == "function" && d.option.open.apply(d, arguments), d.option.useFloatBox ? b.cwFloatBox.open(f, function() {
                    d.close()
                }, {
                    noAnimation: d.option.noAnimation,
                    skip: d.option.parentFloatBox
                }) : (b.cwUI.setZIndex(f), f.show()), a[d.widget_id] = d;
                d.option.useFloatBox && (b.cwFloatBox.skip(f),
                    setTimeout(function() {
                        b.cwFloatBox.clearSkip()
                    }));
                d.move(e);
                typeof d.option.postOpen == "function" && d.option.postOpen.apply(d, arguments);
                return d
            }
        },
        move: function(a) {
            var d = this.$el,
                f = this.option.offsetTop ? this.option.offsetTop : 0,
                i = this.option.offsetLeft ? this.option.offsetLeft : 0;
            if (a instanceof jQuery) {
                if (!a.isVisible()) {
                    this.close();
                    return
                }
            } else a = {
                x: parseInt(a.x, 10),
                y: parseInt(a.y, 10),
                offset: function() {
                    return {
                        top: a.y,
                        left: a.x
                    }
                },
                outerHeight: function() {
                    return 1
                },
                outerWidth: function() {
                    return 1
                }
            };
            this.tipFrom =
                a;
            var h = b(document.body),
                j = h.width(),
                k = h.height(),
                g = a.offset(),
                h = d.outerWidth(),
                l = d.outerHeight(),
                m = parseInt(l / 2, 10),
                n = "",
                n = this.option.direction == "vertical" ? g.top - l < 0 ? "bottom" : "top" : this.option.direction == "horizontal" ? g.left > parseInt(j / 2, 10) ? "left" : "right" : this.option.direction,
                o = b.cwUI.ucFirst(this.option.theme.toLowerCase());
            switch (n) {
                case "top":
                    o = "toolTipTriangle" + o + "Bottom";
                    break;
                case "bottom":
                    o = "toolTipTriangle" + o + "Top";
                    break;
                case "left":
                    o = "toolTipTriangle" + o + "Right";
                    break;
                case "right":
                    o = "toolTipTriangle" +
                        o + "Left";
                    break;
                default:
                    return !1
            }
            d.find("._cwTTTriangle").remove();
            if (!this.option.noTriangle) d.prepend('<div class="_cwTTTriangle toolTipTriangle ' + o + '"></div>'), this.triangle = n;
            if (this.option.noTriangle) var o = null,
                u = 0,
                r = 0;
            else o = d.find("._cwTTTriangle"), u = o.outerHeight(), r = o.outerWidth();
            var v = a.outerWidth(),
                w = parseInt(v / 2, 10),
                A = a.outerHeight(),
                x = parseInt(A / 2, 10);
            switch (n) {
                case "top":
                    var q = g.top - l - u + f;
                    break;
                case "bottom":
                    q = g.top + A + u + f;
                    break;
                case "left":
                    var p = g.left - h - r + i;
                    break;
                case "right":
                    p = g.left +
                        v + r + i
            }
            switch (n) {
                case "top":
                case "bottom":
                    switch (this.option.showPosition) {
                        case "left":
                            p = this.option.noTriangle ? g.left + i : g.left - parseInt(h / 2, 10) + i;
                            break;
                        case "right":
                            p = this.option.noTriangle ? g.left - h + v + i : g.left - parseInt(h / 2, 10) + v + i;
                            break;
                        default:
                            p = g.left - parseInt(h / 2, 10) + w + i
                    }
                    break;
                case "left":
                case "right":
                    switch (this.option.showPosition) {
                        case "top":
                            q = g.top + f;
                            break;
                        case "bottom":
                            q = g.top + A - l + f;
                            break;
                        default:
                            q = g.top + x - m + f
                    }
            }
            p + h > j && (p = j - this.option.windowMargin - h);
            if (p < this.option.windowMargin) p = this.option.windowMargin;
            q + l > k && (q = k - this.option.windowMargin - l);
            if (q < this.option.windowMargin) q = this.option.windowMargin;
            if (o) switch (j = parseInt(u / 2, 10), k = parseInt(r / 2, 10), n) {
                case "top":
                case "bottom":
                    switch (this.option.showPosition) {
                        case "left":
                            f = g.left - p - k + i;
                            if (f < this.option.triangleMargin) f = this.option.triangleMargin;
                            break;
                        case "right":
                            f = g.left - p + v - k + i;
                            i = h - r - this.option.triangleMargin;
                            f > i && (tip_p_left = i);
                            break;
                        default:
                            f = g.left - p + w - k + i
                    }
                    o.css("left", f);
                    break;
                case "left":
                case "right":
                    switch (this.option.showPosition) {
                        case "top":
                            f =
                                g.top - q + this.option.triangleMargin + f;
                            break;
                        case "bottom":
                            f = g.top - q + l - u - this.option.triangleMargin + f;
                            break;
                        default:
                            f = g.top - q + m - j + f
                    }
                    o.css("top", f)
            }
            d.css({
                top: q,
                left: p
            });
            return this
        },
        close: function() {
            if (!this.is_open) return this;
            this.is_open = !1;
            typeof this.option.close == "function" && this.option.close.apply(this, arguments);
            this.option.useFloatBox ? b.cwFloatBox.close(this.$el) : (b.cwUI.unsetZIndex(this.$el), this.option.noAnimation ? this.$el.hide() : this.$el.fadeOut("fast"));
            delete a[this.widget_id];
            return this
        }
    }, {
        close: function() {
            for (var b in a) a[b].close();
            return this
        }
    })
})(jQuery, jQuery.cwUI.L);
var _is_oldmsie = typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined",
    _is_msie = document.uniqueID,
    _is_mac = navigator.appVersion.indexOf("Mac") != -1,
    _has_fileapi = window.FormData ? !0 : !1,
    _has_sandbox = "sandbox" in document.createElement("iframe"),
    NotificationAPI = null,
    _is_modern_ie = !!(_is_msie && typeof(history || {}).pushState === "function");
jQuery.support.isWindowsFirefox = function() {
    return /windows.+\sfirefox\//.test(navigator.userAgent.toLowerCase()) ? !0 : !1
}();
window.webkitNotifications ? NotificationAPI = {
    createNotification: function(b, a, e) {
        return webkitNotifications.createNotification(b, a, e)
    },
    checkPermission: function() {
        return webkitNotifications.checkPermission()
    },
    requestPermission: function(b) {
        webkitNotifications.requestPermission(function() {
            b(NotificationAPI.checkPermission())
        })
    }
} : window.Notification && (NotificationAPI = {
    createNotification: function(b, a, e) {
        var d = new Notification(a, {
            icon: b,
            body: e
        });
        d.show = function() {};
        d.cancel = function() {
            d.close()
        };
        return d
    },
    checkPermission: function() {
        switch (Notification.permission) {
            case "granted":
                return 0;
            case "default":
                return 1;
            case "denied":
                return 2
        }
    },
    requestPermission: function(b) {
        Notification.requestPermission(function() {
            b(NotificationAPI.checkPermission())
        })
    }
});
$.fn.extend({
    insertAtCaret: function(b) {
        var a = this.get(0),
            e = a.value,
            d = a.selectionStart,
            f = d + b.length + 0;
        a.value = e.substr(0, d) + b + e.substr(d);
        a.setSelectionRange(f, f)
    },
    input: function(b) {
        this.click().focus().val(b);
        return this
    },
    expandCopyUrl: function(b) {
        function a(a, b) {
            var e = a.map(function(a) {
                var b = a.getAttribute("href"),
                    d = a.textContent;
                a.textContent = b;
                return [a, d]
            });
            return d(function() {
                e.forEach(function(a) {
                    a[0].textContent = a[1]
                });
                b()
            })
        }

        function e(a) {
            if (!(a.commonAncestorContainer !== a.startContainer || a.commonAncestorContainer !==
                    a.endContainer))
                if (!(a.startOffset || a.commonAncestorContainer.length !== a.endOffset))
                    if (a = a.commonAncestorContainer, a = a.nodeType === 3 ? a.parentNode : a, a.tagName.toLowerCase() === "a" && a.classList && a.classList.contains(b.targetClass)) return a
        }
        $.extend({
            targetClass: ""
        }, b);
        var d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        if (d && window.getSelection) {
            var f;
            $(this).on("copy", function(d) {
                if (ST.data.shorten_url && (d = (d.target.tagName ||
                        "").toLowerCase()) && !(d === "textarea" || d === "input") && !f) {
                    var d = window.getSelection().getRangeAt(0),
                        h = d.commonAncestorContainer;
                    if (h.childElementCount) d = h.getElementsByClassName(b.targetClass), d.length && (f = a(Array.prototype.slice.call(d), function() {
                        f = void 0
                    }));
                    else {
                        var j = e(d);
                        j && (f = a([j], function() {
                            var a = document.createRange();
                            a.selectNode(j);
                            window.getSelection().addRange(a);
                            f = void 0
                        }), d = document.createRange(), d.selectNode(j), window.getSelection().addRange(d))
                    }
                }
            })
        }
    }
});
var get_caret_position_ie = function() {};
_is_msie && !_is_modern_ie ? function() {
    var b = 0;
    $.fn.extend({
        insertAtCaretForMessage: function(a) {
            var e = this.get(0);
            e.focus();
            var d = e.value,
                f = b,
                i = f + a.length,
                h = d.substr(0, f);
            e.value = h + a + d.substr(f);
            b += a.length;
            a = (a = h.match(/\n/g)) ? a.length : 0;
            e = e.createTextRange();
            e.collapse(!0);
            e.moveEnd("character", i - a);
            e.moveStart("character", i - a);
            e.select()
        }
    });
    get_caret_position_ie = function(a) {
        var e = a.ownerDocument;
        if (a.tagName.toLowerCase() == "textarea") {
            var e = e.selection.createRange(),
                d = e.duplicate();
            d.moveToElementText(a);
            d.setEndPoint("StartToEnd", e);
            d.setEndPoint("StartToStart", e);
            b = a.value.length - d.text.length
        } else a = e.selection.createRange(), e = a.duplicate(), result.start = 0 - e.moveStart("character", -1E5), result.end = result.start + a.text.length, result.caret = result.end, b = result.caret
    }
}() : $.fn.insertAtCaretForMessage = $.fn.insertAtCaret;

function mlength(b) {
    for (var a = 0, e = 0; e < b.length; e++) b.charCodeAt(e) > 255 && a++, a++;
    return a
}

function get_file_extension(b) {
    var b = b.split("."),
        a = "";
    b.length > 1 && (a = b[b.length - 1].toLowerCase());
    return a
}
var $C = null;
(function() {
    var b = {},
        a = {};
    $C = function(e) {
        b[e] == void 0 && (a[e] == void 0 ? b[e] = $(e) : (b[e] = a[e](), delete a[e]));
        return b[e]
    };
    $C.register = function(b, d) {
        a[b] = d;
        return this
    }
})();
var THEME = {
    blue: {
        chatlist_min_width: 190,
        chatlist_max_width: 300,
        timeline_min_width: 350,
        subcontent_min_width: 300,
        actionbar_height: 22,
        textarea_line_height: 22,
        chatSendArea_initial_height: 100,
        chatSendArea_expandto_height_default: 160,
        chattext_min_content_height: 50,
        timeline_min_height: 300,
        timeline_assign_member_show_max: 5,
        taskinput_init_height: 100,
        taskinput_min_height: 50,
        tasklist_min_height: 390,
        description_max_height: 300,
        description_min_height: 50,
        mymenu_min_width: 140,
        member_preview_show_max: 5,
        member_detail_show_max: 34,
        dialog_header_height: 40,
        dialog_footer_height: 40,
        preview_dialog_height_padding: 20,
        preview_dialog_width_padding: 20,
        taskwindow_pager_view_num: 50,
        filewindow_pager_view_num: 50,
        contactwindow_pager_view_num: 50,
        extermal_marktip_offset_left: 3,
        expose_zindex: 500,
        messagetip_delay: 500
    }
};

function Analytics() {
    var b = this,
        a = !1,
        e = [],
        d = GA_PROFILE_ID,
        f = null,
        i = {
            plan: "dimension1",
            device: "dimension2",
            lang: "dimension3",
            fbconnect: "dimension4",
            gnum: "dimension5",
            cnum: "dimension6",
            useday: "dimension7",
            usestorage: "dimension8",
            tnum: "dimension9",
            pnum: "dimension10",
            dhash: "dimension11"
        };
    b.start = function(h) {
        if (!a) {
            a = !0;
            f = h;
            (function(a, b, d, e, f, h, i) {
                a.GoogleAnalyticsObject = f;
                a[f] = a[f] || function() {
                    (a[f].q = a[f].q || []).push(arguments)
                };
                a[f].l = 1 * new Date;
                h = b.createElement(d);
                i = b.getElementsByTagName(d)[0];
                h.async = 1;
                h.src = e;
                i.parentNode.insertBefore(h, i)
            })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
            ga("create", d, "auto");
            ga("require", "displayfeatures");
            b.trackPageView();
            for (var h = 0, i = e.length; h < i; h++) e[h]();
            e = [];
            return b
        }
    };
    b.trackPageView = function() {
        if (!a) return e.push(function() {
            b.trackPageView()
        }), !1;
        for (var d in i) i.hasOwnProperty(d) && typeof f[d] !== "undefined" && ga("set", i[d], f[d]);
        ga("send", "pageview", {
            title: ""
        })
    };
    b.trackEvent = function(d, f, i, g) {
        if (!a) return e.push(function() {
            b.trackEvent(d,
                f, i, g)
        }), !1;
        ga("send", "event", {
            eventCategory: d,
            eventAction: f,
            eventLabel: i,
            eventValue: g,
            title: ""
        });
        return b
    };
    b.trackException = function(d) {
        if (!a) return e.push(function() {
            b.trackException(d)
        }), !1;
        ga("send", "exception", {
            exDescription: d.name,
            exFatal: !0,
            exMessage: d.message
        })
    }
}

function Request() {
    var b = this;
    b.use_local_comet = !1;
    b.ajax = function(a) {
        if (a.type == "POST") a.data = {
            pdata: $.toJSON(a.data)
        };
        return $.ajax(a)
    };
    b.checkOnline = function(a, b) {
        typeof a != "function" && (a = function() {});
        typeof b != "function" && (b = function() {});
        $.ajax({
            type: "GET",
            dataType: "json",
            async: !0,
            url: SERVER_PATH + "/gateway.php?cmd=check_online&myid=" + AC.myid + "&_v=" + CW.version + "&_av=" + CW.api_version + "&_t=" + ACCESS_TOKEN + "&ln=" + LANGUAGE,
            success: function(d) {
                if (d && d.status.success == !0) a();
                else {
                    var e = "";
                    if (d && d.status) e =
                        d.status.message;
                    b(e)
                }
            },
            error: function() {
                b("TIMEOUT")
            }
        })
    };
    var a = typeof sessionStorage === "undefined" ? new Storage : sessionStorage,
        e = 3E3,
        d = 7;
    b.comet = function(f) {
        if (b.use_local_comet) CW.get("gateway.php", {
            cmd: "local_comet",
            last_id: CW.last_id,
            "new": 1
        }, function(a) {
            e = 1E3;
            a.updated && CW.watch();
            b.comet()
        }, function() {
            e *= 1.2;
            setTimeout(function() {
                b.comet()
            }, e)
        });
        else {
            for (; $("#wcs-iframe").length;) $("#wcs-iframe").remove();
            if (f) h(f);
            else {
                var f = AC.myid,
                    i = a.getItem("session.account_id");
                i ? f != i && (k(), a.setItem("session.account_id",
                    f)) : (a.getItem("session.account_id") && k(), a.setItem("session.account_id", f));
                (f = a.getItem("channel_token_key")) ? h(f): CW.post("gateway.php", {
                    cmd: "get_comet_token_key"
                }, function(b) {
                    e = 3E3;
                    d = 7;
                    h(b.token_key, !0);
                    a.setItem("channel_token_key", b.token_key)
                }, function() {
                    if (d < 0) return !1;
                    setTimeout(function() {
                        b.comet()
                    }, e);
                    e *= 2;
                    d--
                })
            }
        }
    };
    var f = 3E3,
        i = 7,
        h = function(d, e) {
            var h = a.getItem("channel_token");
            h ? j(h) : $.jsonp({
                url: COMET_SERVER_PATH + "/token?callback=?",
                data: {
                    myid: AC.myid,
                    key: d
                },
                success: function(b) {
                    b.status &&
                        b.status.success && (a.setItem("channel_token", b.result.token), j(b.result.token), f = 3E3, i = 7, e != !0 && CW.post("gateway.php", {
                            cmd: "update_comet_token_key",
                            token_key: d
                        }))
                },
                error: function() {
                    if (i < 0) return !1;
                    setTimeout(function() {
                        b.comet(d, e)
                    }, f);
                    f *= 2;
                    i--
                }
            })
        },
        j = function(a) {
            var a = (new goog.appengine.Channel(a)).open(),
                d = function() {
                    k();
                    b.comet()
                };
            a.onopen = function() {
                setTimeout(d, 54E5)
            };
            a.onerror = d;
            a.onmessage = function(a) {
                switch (a.data) {
                    case "watch":
                        CW.watch();
                        break;
                    case "reconnect":
                        k(), b.comet()
                }
            }
        },
        k = function() {
            a.removeItem("channel_token");
            a.removeItem("channel_token_key")
        }
}

function Storage() {
    var b = this;
    b.values = {};
    b.setItem = function(a, e) {
        b.values[a] = e;
        return this
    };
    b.getItem = function(a) {
        return b.values[a]
    };
    b.removeItem = function(a) {
        b.values[a] != void 0 && delete b.values[a];
        return this
    }
}
var PLATFORM = "web",
    CW = new ChatWork(client_ver),
    AC = new Account(myid),
    FL = new File,
    TK = new Task,
    RL = new RoomList,
    RD = new RoomDialog,
    RS = new RoomSub,
    ST = new Setting,
    CS = new ChatSend,
    SC = new Search,
    AL = new Analytics,
    RM = null,
    TM = THEME.blue,
    CHEATSHEET = new CheatSheet,
    gears = window.google && google.gears,
    wfocus = !0,
    tlscroll = !1,
    press_key = 0,
    up_key = 0,
    scroll_cancel = null,
    is_local_env = !1,
    outerLayout, menuLayout, middleLayout, subLayout, innerLayout, audioObjSupport, basicAudioSupport, canPlayOgg, canPlayMp3;
try {
    var audio = new Audio("");
    audioObjSupport = !!audio.canPlayType;
    basicAudioSupport = !(audioObjSupport || !audio.play)
} catch (e$$69) {
    basicAudioSupport = audioObjSupport = !1
}
audioObjSupport && (canPlayOgg = "no" != audio.canPlayType("audio/ogg") && "" != audio.canPlayType("audio/ogg"), canPlayMp3 = "no" != audio.canPlayType("audio/mpeg") && "" != audio.canPlayType("audio/mpeg"));
$.fn.dialog = function() {
    return this
};
$.fn.tabs = function() {
    return this
};
$.fn.button = function() {
    return this
};
$.fn.draggable = function() {
    return this
};
$.fn.resizable = function() {
    return this
};
$.fn.effect = function() {
    return this
};
$.hashchangeHandler = function() {
    var b = location.hash.match(/#!rid(\d+)$/);
    b && RL.selectRoom(b.pop())
};
ZeroClipboard.config({
    moviePath: "./javascript/ZeroClipboard.swf?v=" + ZeroClipboard.version,
    cacheBust: !1
});
var DIALOG_CANCEL_BUTTON = null,
    DIALOG_CLOSE_BUTTON = null;
$(function() {
    $C.register("document", function() {
        return $(document)
    }).register("body", function() {
        return $(document.body)
    }).register("#cw_send_area .cw_buttons", function() {
        return $C("#cw_send_area").find(".cw_buttons")
    }).register("#cw_room_setting_box .admin", function() {
        return $C("#cw_room_setting_box").find(".admin")
    }).register("#cw_room_setting_box .group", function() {
        return $C("#cw_room_setting_box").find(".group")
    }).register("#cw_room_setting_box .contact", function() {
        return $C("#cw_room_setting_box").find(".contact")
    }).register("#cw_room_setting_box .my",
        function() {
            return $C("#cw_room_setting_box").find(".my")
        }).register("#cw_room_setting_box li", function() {
        return $C("#cw_room_setting_box").find("li")
    });
    $.cwFloatWindow.setDefaultOption({
        wrapperSelector: "#_mainContent"
    });
    $.cwActionBar.setDefaultOption({
        descriptionDelay: TM.messagetip_delay
    });
    $.cwButton.setDefaultOption({
        descriptionDelay: TM.messagetip_delay
    });
    $.cwButtonBar.setDefaultOption({
        descriptionDelay: TM.messagetip_delay
    });
    var b = function() {
        $(this).dialog("close")
    };
    DIALOG_CANCEL_BUTTON = {
        text: L.button_cancel,
        click: b
    };
    DIALOG_CLOSE_BUTTON = {
        text: L.button_close,
        click: b
    };
    CW.prepare();
    CW.view.onPostLoad(function() {
        var a = {
            plan: CW.plan || "",
            device: PLATFORM,
            lang: LANGUAGE,
            gnum: RL.getGroupChatNum(),
            cnum: AC.getContactNum(),
            useday: Math.floor((new Date - new Date(REG_TIME * 1E3)) / 864E5),
            pnum: RL.getStickyRoomNum(),
            dhash: DHASH
        };
        AL.start(a);
        window.addEventListener("error", function(a) {
            AL.trackException({
                name: a.name,
                message: a.message
            })
        }, !1);
        setInterval(function() {
            AL.trackEvent("session", "update", "", 0)
        }, 3E5)
    });
    AC.prepare();
    FL.prepare();
    TK.prepare();
    RL.prepare();
    RD.prepare();
    RS.prepare();
    ST.prepare();
    CS.prepare();
    SC.prepare();
    CHEATSHEET.prepare();
    CW.buildLayout();
    if (is_local_env) CW.request.use_local_comet = !0;
    CW.watch();
    $.ajaxSetup({
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        cache: !1
    });
    $C("document").bind("ajaxSend", function(a, b) {
        $(window).bind("beforeunload", function() {
            b.abort()
        })
    });
    window.onerror = function(a) {
        a.toString().indexOf("Internal error") != -1 && (alert("\u5185\u90e8\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002ChatWork\u3092\u30ea\u30ed\u30fc\u30c9\u3057\u307e\u3059"),
            document.location.reload())
    };
    var b = function() {
            wfocus = !0;
            CW.read();
            CW.watch()
        },
        a = function() {
            wfocus = !1;
            CW.cancelRead()
        };
    _is_msie ? ($C("document").bind("focusin", b), $C("document").bind("focusout", a), $C("#cw_send_file_mask").css("opacity", 1)) : (window.addEventListener("focus", b, !1), window.addEventListener("blur", a, !1));
    $("label").mousedown(function() {
        return !1
    });
    $("._searchBox").cwSearchBox();
    $("._checkBox").cwCheckBox();
    $("._button").cwButton();
    b = ["./image/sp_icon.png"];
    if (b.length > 0)
        for (var a = new Image,
                e = 0; e < b.length; e++) a.src = b[e];
    CW.view.onEndInitLoad(function() {
        CW.checkNotificationPermission()
    });
    $(window).bind("hashchange", $.hashchangeHandler);
    $("body").expandCopyUrl({
        targetClass: "ui_sp_favicon_parent"
    })
});