<H1>24.11.06~24.11.14</H1>
<p>👼🏻멤버 구성👼🏻</p>
<li>팀장 😎  : 최혜진 - 과제 목표 명확화와 목표 달성, 업무 분장, 팀원들의 사기 북돋음, Github 준비, 프로젝트 셋업, Vercel 배포</li>
<li>팀원1😱 : 최혜진 - 기본 컴포넌트 구성, 포켓몬 삭제 기능 구현, 뒤로가기 버튼 클릭 시 이전 페이지로 이동 구현, 최종 스타일링 마무리 </li>
<li>팀원2😛 : 최혜진 - 데이터 가져오기, 리스트 형태로 구현, 중복 선택&6개 이상 선택 시 알림 기능 구현 </li>
<li>팀원3🤓 : 최혜진 - css 담당, 로드맵 파악, 선택 갯수 제한 구현, context api 관리, 분위기메이커 담당</li>
<li>팀원4🫡 : 최혜진 - 포켓몬 선택 기능 구현, 디테일 페이지 생성, 최종 확인 및 코드 정리</li>

---

<p>⚙️개발 가이드</p>
<li>Vite 이용하여 리액트 프로젝트 셋업</li>
<li>스타일링은 styled-component 방식만 사용</li>
<li>props-drilling, context 브랜치 이용</li>
<li>Vercel 이용하여 배포</li>

---

<h2>📌주요 구현사항</h2>
<p>🐥프로젝트 셋업, 컴포넌트 구성</p>
<li>Vite 사용하여 리액트 프로젝트 설정</li>
<li>react-router-dom 설치하여 페이지 추가</li>
<li>기본 컴포넌트 구성 후 스타일링 추가</li>
<br> 
<br>
<p>🐥포켓몬 리스트와 선택 기능 구현</p>
<li>데이터 props로 내리고 형태 구현</li>
<li>포켓몬 선택 기능 구현</li>
<li>선택한 포켓몬 Dashboard에 추가 구현</li>
<li>추가시 최대 6개의 포켓몬만 선택할 수 있도록 제한</li>
<br> 
<br>
<p>🐥포켓몬 삭제 및 알림 기능 추가</p>
<li>함수사용하여 선택된 포켓몬 해제 기능 추가</li>
<li>중복 선택 또는 6개 이상 선택 시 알림 기능 추가</li>
<br> 
<br>
<p>🐥포켓몬 디테일 페이지 구현</p>
<li>path params로 전달한 id로 상세 정보 표시</li>
<li>뒤로 가기 버튼 추가</li>
<li>이전 페이지 이동 시, 이전에 선택한 포켓몬 상태 유지되도록 구현..하려했으나 실패함...</li>
<br> 
<br>
<p>🐥Context API로 리팩터링 및 최종 스타일링</p>
<li>Context API로 함수 관리, 전역 상태 관리 구현</li>
<li>최종 스타일링</li>
<li>최종 확인 및 불필요한 코드, 중복코드 정리</li>

---

<h2>📌각 파일 내용 정리</h2>
<p>🐤Home.jsx</p>
<li>애플리케이션 시작 화면 구성</li>
<li>사용자가 포켓몬 도감 페이지로 이동할 수 있도록 함</li>
<br>
<br>
<p>🐤Dex.jsx</p>
<li>포켓몬 관련 정보를 사용자에게 제공</li>
<li>[Dashboard.jsx] : 기존 몬스터볼과 추가된 포켓몬의 데이터 표시</li>
<li>[AddPokemon.jsx] : 추가된 포켓몬의 카드 내용</li>
<li>[PokemonList.jsx] : 포켓몬 데이터를 사용하여 포켓몬 리스트를 구성</li>
<li>[PokemonCard.jsx] : 포켓몬 리스트 안의 포켓몬 카드 하나를 구성</li>
<li>[PokemonDetail.jsx] : 포켓몬 카드 하나 클릭시 포켓몬에 관한 내용을 구성</li>
<br>
<br>
<p>🐤PokeContext.jsx</p>
<li>포켓몬 데이터를 관리하기 위한 컨텍스트를 제공하는 역할</li>
<li>포켓몬을 추가하거나 제거하는 기능을 제공</li>
<li>다른 컴포넌트들이 쉽게 포켓몬 데이터를 공유하고 사용할 수 있도록 함</li>
<br>
<br>
<p>🐤Footer</p>
<li>저작권 정보 표시</li>

---
### [🔍배포용링크](https://olympick-medal-tracker.vercel.app)
![스크린샷 2024-11-12 오후 2 49 18](https://github.com/user-attachments/assets/d03779d4-9d57-46b6-8638-9e0a73af2402)
![스크린샷 2024-11-12 오후 2 49 31](https://github.com/user-attachments/assets/7016ab56-29c7-4f06-9fdf-19173675c185)
![스크린샷 2024-11-12 오후 2 50 27](https://github.com/user-attachments/assets/7a438a28-e44b-4ed5-a323-d3151745cc1f)
![스크린샷 2024-11-12 오후 2 50 47](https://github.com/user-attachments/assets/b23a3290-23b5-42e4-a387-24080276cfad)