"use strict";
/* global console, require */

var ONE_DAY = 86400000;
var ONE_SEC = 3410;

var request = require("request");
var randomWord = require("random-word");
var Plant = require('plant.js');

function do_search (agent) { return function () {
  var term   = randomWord() + " " + randomWord() + " " + randomWord();
  var url    = "https://www.bing.com/search?q=" + term + "&qs=n&form=NWRFSH&pq=" + term + "&sc=8-4&sp=-1&sk=";
  var cookie = "SCRHDN=ASD=0&DURL=#; MUID=0E4DC56BF41C6680267CC29BF01C6558; SRCHD=AF=ML11Z9; SRCHUID=V=2&GUID=92CD2B99A35B4B828C5CFA1BCD2F594E; SRCHUSR=DOB=20151120; _SS=SID=108351F4C95867AA02575991C84F66DC&HV=1448036737&R=47; _EDGE_S=SID=108351F4C95867AA02575991C84F66DC; MUIDB=0E4DC56BF41C6680267CC29BF01C6558; _RwBf=s=10&o=0&A=053375D501408D402C5521EDFFFFFFFF; WLS=C=a1510f2ec33726a1&N=Kevin&TS=63583633314; _HOP=; _U=1wSlkjuJlOPksr-jIN4fH2rBQh-6-bUNL8sHEe780cDWhPNYCGEvBJ60pUXFu6MJNa8Dy5J31QV0GFLOmMupQ9oLnCxfkaQTjDaJyis-zKD6LEnM2pIR7PCviGhPmay2g; _US=1AW6vS4Hr0wwc8biM0k0njHlGQG8DHHfFKpIDChb3fuZg; ANON=A=053375D501408D402C5521EDFFFFFFFF&E=11a9&W=1; KievRPSAuth=FABSARRaTOJILtFsMkpLVWSG6AN6C%2fsvRwNmAAAEgAAACHOK6gM+GHgWEAFH7iNudlYTLoAjI+JmkA5Tde5WV6mlUC5i%2fLKnaqRV0m3m9Sn2vL2cAJy5UjrCPimgm2o8gYglTPfgZZnOaf96+VsAMKmLu7gY6qoq0+7HEOSFPv3n3MXYkvbor+iiLEm8Mi5eI3XibZP1UkMA9D9anvfrdhLkbYb%2fyKr0yJLlWboJs64zsGOjT%2fT0NQhc1T9Ento5d6%2fswqRx3oaF3IjcrXLYgas%2fwEIhi2kb+yaKdLUHmPuaJJ6+gF28KH5qjsx5b2lrvacQh0jkpta52BdgqJjklR5R47Lbe7j0nFicI%2fyT6himepoKz9J%2fH6TEMp1cPJzxIx1dXAeoUofFelhFfcZ2HERLZ02GcTL3BT6dfBQApmGHQuUP7+V82Bqn%2fbf1Fz4oKuE%3d; KievRPSSecAuth=FABSARRaTOJILtFsMkpLVWSG6AN6C%2fsvRwNmAAAEgAAACHrlEbIz%2fNwNEAGbVwzbH6e9l8WegU3HfgnC3L9qWLL+lYiFZ0+WW%2fMjt+vbWNj1OwFjeSNeOmfvsLPAlEuxgB3yd9S%2f2sfem3Xjs+a9+hUBvszEuBNIb5FQQ85mXwBP+B+bX12Cbiqb3VqPNSjtRNzgwmNK9F57%2ftctt2kubzJ7CJ65vV+1r%2fGMq%2fQiN7QKqtjQpkldxkkVJS+6LCq6e9FplnOVEvdvlLKbrg7qNYcYh5cMw%2f21acDlh6l06vCCA83qoPv1x9tGToQZ6kizUC2IvQBD2KfM440O14rrioZZgWggSAdMB+JxhuD38YN+b7+uBM8tbD1sqiGrMHUKYPbhFcJNz9SsvPW4kq5QujPHzeZSr%2f3x+aC6RRQAf%2fU3cNVn3HN%2f+bPFDpIzabCzD6Q%3d; NAP=V=1.9&E=114f&C=-cKIjBqWNuwhKrHnUrTEjscLQtFyETg786oKl-0QBgz-bfpl6sHwAw&W=1; PPLState=1; SCRHDN=ASD=0&DURL=#";
  var user_agent = (agent === "mobile") ?
    "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3" :
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1";

  request.get({
    uri: url,
    headers: {
      "Cookie" : cookie,
      "User-Agent" : user_agent
    }
  }, function (err) {
    if (err) return console.error(err);
    console.log(agent, new Date());
  });
};}

function do_app_search () {
  var term   = randomWord() + " " + randomWord() + " " + randomWord();
  var unxtm  = (new Date()) / 1000;
  var url = 'https://c.bingapis.com/api/custom/opal/search?q='+
            term +'&unixTime=' + unxtm + '&color=05847C&location=lat:42.4388183479026;long:-76.4886477029561;re:65.0';

  request.get({
    uri : url,
    headers: {
      'X-Search-ClientId': '51D9591287424CC79CE294E664B99E37',
      'Accept-Language': 'en-us',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4',
      'X-BM-Client': 'Opal/6.0.3.0',
      'X-Search-UILang': 'en-us',
      'X-Search-Market': 'en-us',
      'Accept': 'application/json',
      'Connection': 'keep-alive',
      'Proxy-Connection': 'keep-alive',
      'X-MSEdge-TrafficTier': 'premium',
      'Accept-Encoding': 'gzip',
    }
  }, function (err) {
    if (err) return console.error(err);
    console.log("ios", new Date());
  });
}

/**
 * Clicks reward links
 */
function do_rewards_click (cb) {

  var headers = {
    "Cookie" : "SCRHDN=ASD=0&DURL=#; MUID=0E4DC56BF41C6680267CC29BF01C6558; SRCHD=AF=ML11Z9; SRCHUID=V=2&GUID=92CD2B99A35B4B828C5CFA1BCD2F594E; SRCHUSR=DOB=20151120; _SS=SID=108351F4C95867AA02575991C84F66DC&HV=1448036737&R=47; _EDGE_S=SID=108351F4C95867AA02575991C84F66DC; MUIDB=0E4DC56BF41C6680267CC29BF01C6558; _RwBf=s=10&o=0&A=053375D501408D402C5521EDFFFFFFFF; WLS=C=a1510f2ec33726a1&N=Kevin&TS=63583633314; _HOP=; _U=1wSlkjuJlOPksr-jIN4fH2rBQh-6-bUNL8sHEe780cDWhPNYCGEvBJ60pUXFu6MJNa8Dy5J31QV0GFLOmMupQ9oLnCxfkaQTjDaJyis-zKD6LEnM2pIR7PCviGhPmay2g; _US=1AW6vS4Hr0wwc8biM0k0njHlGQG8DHHfFKpIDChb3fuZg; ANON=A=053375D501408D402C5521EDFFFFFFFF&E=11a9&W=1; KievRPSAuth=FABSARRaTOJILtFsMkpLVWSG6AN6C%2fsvRwNmAAAEgAAACHOK6gM+GHgWEAFH7iNudlYTLoAjI+JmkA5Tde5WV6mlUC5i%2fLKnaqRV0m3m9Sn2vL2cAJy5UjrCPimgm2o8gYglTPfgZZnOaf96+VsAMKmLu7gY6qoq0+7HEOSFPv3n3MXYkvbor+iiLEm8Mi5eI3XibZP1UkMA9D9anvfrdhLkbYb%2fyKr0yJLlWboJs64zsGOjT%2fT0NQhc1T9Ento5d6%2fswqRx3oaF3IjcrXLYgas%2fwEIhi2kb+yaKdLUHmPuaJJ6+gF28KH5qjsx5b2lrvacQh0jkpta52BdgqJjklR5R47Lbe7j0nFicI%2fyT6himepoKz9J%2fH6TEMp1cPJzxIx1dXAeoUofFelhFfcZ2HERLZ02GcTL3BT6dfBQApmGHQuUP7+V82Bqn%2fbf1Fz4oKuE%3d; KievRPSSecAuth=FABSARRaTOJILtFsMkpLVWSG6AN6C%2fsvRwNmAAAEgAAACHrlEbIz%2fNwNEAGbVwzbH6e9l8WegU3HfgnC3L9qWLL+lYiFZ0+WW%2fMjt+vbWNj1OwFjeSNeOmfvsLPAlEuxgB3yd9S%2f2sfem3Xjs+a9+hUBvszEuBNIb5FQQ85mXwBP+B+bX12Cbiqb3VqPNSjtRNzgwmNK9F57%2ftctt2kubzJ7CJ65vV+1r%2fGMq%2fQiN7QKqtjQpkldxkkVJS+6LCq6e9FplnOVEvdvlLKbrg7qNYcYh5cMw%2f21acDlh6l06vCCA83qoPv1x9tGToQZ6kizUC2IvQBD2KfM440O14rrioZZgWggSAdMB+JxhuD38YN+b7+uBM8tbD1sqiGrMHUKYPbhFcJNz9SsvPW4kq5QujPHzeZSr%2f3x+aC6RRQAf%2fU3cNVn3HN%2f+bPFDpIzabCzD6Q%3d; NAP=V=1.9&E=114f&C=-cKIjBqWNuwhKrHnUrTEjscLQtFyETg786oKl-0QBgz-bfpl6sHwAw&W=1; PPLState=1; SCRHDN=ASD=0&DURL=#",
    "User-Agent" : "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1"
  };

  var get_url = function (url) {
    request.get({
      uri: 'https://www.bing.com' + url,
      headers: headers
    }, function (err) {
      if (err) return console.error(err);
      console.log('LINK', headers["User-Agent"], new Date());
    });
  };

  var browser = new Plant({ headers: headers });
  browser.get('https://www.bing.com/rewards/dashboard')
  .then(function($) {
    
    var links = [];
    $('.tileset:nth-child(1) .title').each(function() {
      if ($(this).text() === 'Coffee break quiz') return;
      links.push($(this).parent().parent().attr('href'));
    });

    var i = 0;
    setTimeout(function next_reward () {
      get_url(links[i]);
      if (++i === links.length) return cb();
      else setTimeout(next_reward, ONE_SEC + 12);
    }, ONE_SEC + 12);

  })
  .catch(console.trace);
}




function brust(times, timeout, callback, done) {
  var cb = function () {
    if (times-- < 1) return done ? done() : void 0;
    callback();
    setTimeout(cb, timeout);
  };
  cb();
}


var do_searches = function () {
  brust(30, ONE_SEC, do_search("desktop"), function () {
    brust(20, ONE_SEC, do_search("mobile"), function () {
      brust(20, ONE_SEC, do_app_search, function () {
        do_rewards_click(function () {
          console.log("done for the day!");
          setTimeout(do_searches, ONE_DAY);
        });
      });
    });
  });
};

do_searches();

