# goorm-study
## 1. Youtube 클론 코딩
### 담당

 ・홈 화면 : 김민지, 박윤주
 
 ・영상 화면 : 옥동은, 이민영, 장한별

### 아래 링크 참조
Ode studio Seoul - | playlist | 평일 오후, 여유로운 부암동 산책 (https://youtu.be/hWTiBSusqIA?si=FccNcVoQg7tby8o3)

soft hour - 열악한 환경은 변명이 되지 않는다. (https://youtu.be/jVBPhhoxIu8?si=AP3FI32zJ9dwL1ZA)

35playlisyt - 연휴 마지막 날에 듣는 R&B 플레이리스트 (https://youtu.be/Rk19R0gX7nw?si=Rcdbxs9t0X2e9jei) : 외부 영상 퍼가기 금지됨

재즈기자 Jazz Editor - [Playlist] 영화 '그린 북' 너머의 음악 | 돈 셜리의 실제 연주 (https://youtu.be/lKAu3YX_MPg?si=cekQzjF1TRT41uGM) : 외부 영상 퍼가기 금지됨

yara - my ‘Fantastic Mr Fox’ (playlist) + timestamps (https://youtu.be/_GciEX5cSM4?si=qR8SY_sNshicQbzO) : 외부 영상 퍼가기 금지됨

서울시국악관현악단 - [playlist] 국락 갈래말래갈래말래 (https://youtu.be/6W-rUjWZGaA?si=YHW6nMrzowMKf0Ch)

Slom - 슬롬서울도심1시간걷기플레이리스트 (https://youtu.be/GM_KR2Wc5jA?si=sDvOVtx1EH8djje3) : 외부 영상 퍼가기 금지됨

room waves - I can fly. (https://youtu.be/PZGeUmIwa4c?si=x_Xt8sg0tvmwW8y6)

hostless - 사랑에 시차가 있다니 | playlist (https://youtu.be/J8AryR14q5o?si=RsoWC5bpxyI7fZSQ)

zah house mix - Minimal House Vinyl mix in a tiny apartment in Japan Vol.5 - by Itou (https://youtu.be/AK3lsBwcFSI?si=U0f1YvlWiukjwjn1)



### 코드 취합 결과

・비디오 영상의 경우, 개인 소장 영상은 video 태그로 수정 가능하나 youtube 영상은 iframe 태그로만 수정 가능하기 때문에, 결국 비디오 태그 관련으로는 적용 불가

・현재 기본적인 모바일, 태블릿, PC 화면에 대해서는 반응형 수정이 되었으나, 실제 원본에 비해 반응형이 완벽하게 구현되지는 못함. 차후 심화 과정 진행할 때 수정 필요

・실시간 기능 구현 시, 본 화면안을 리액트 라이브러리 등으로 재구성할지 여부 논의 필요