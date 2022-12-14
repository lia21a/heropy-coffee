

// youtube iframe api 비동기로 로드
// api를 사용하지 않고 iframe 태그만 써서 영상 삽입이 가능하지만 태그 속성만으로 커스텀하기에 한계가 있음
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    // height: '360',
    // width: '640',
    videoId: 'gQL8ZINhkmM',  //최초 재생할 유튜브 영상 id
    playerVars: {  // 자세한 옵션은 플레이어 매개변수 메뉴 확인
      autoplay: false,  // 자동 재생 유무
      loop: true,  // 반복 재생 유무(아래 플레이리스트 옵션 필수)
      playlist: 'gQL8ZINhkmM'  // 반복 재생할 유튜브 영상 id 목록
    },
    events: {
      // 영상이 준비되었을 때
      onReady: function(events) {
        event.target.mute();  // 음소거 상태
      }
    }
  });
}

// 유튜브 주소 https://youtu.be/gQL8ZINhkmM 에서 gQL8ZINhkmM 만 바꿔주기





