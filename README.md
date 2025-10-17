# 2025 찬양예배 웹사이트

마하나임과 트리니티 중창단의 2025 찬양예배를 안내하는 원페이지 웹사이트입니다.

## 예배 정보

- **일시**: 2025년 11월 16일 (주일)
- **장소**: 전주온누리교회
- **지휘**: 김효성
- **반주**: 유주이

## 주요 기능

### 🎵 배경음악
- 찬양예배에 어울리는 피아노 연주곡 (Pixabay 무료 음원)
- 우측 하단 버튼으로 재생/정지 제어
- 자동 반복 재생

### ✨ 애니메이션 효과
- 스크롤 시 페이드인 애니메이션 (AOS)
- 호버 효과 (이미지 확대, 카드 이동)
- Parallax 배경 효과
- Floating & Pulse 애니메이션

### 📱 반응형 디자인
- 데스크톱, 태블릿, 모바일 최적화
- iOS 및 Android 호환성 완벽 지원
- 터치 인터랙션 최적화

## 웹사이트 구성

1. **히어로 섹션**: 전체 화면 배경 이미지와 예배 정보
2. **초대 섹션**: 따뜻한 초대 메시지와 시편 말씀
3. **환영 섹션**: 중창단 소개 및 스태프 정보
4. **프로그램 섹션**: 상세한 예배 순서 (5개 파트)
5. **함께 찬양해요**: 마무리 메시지
6. **푸터**: 예배 정보 요약

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **JavaScript**: 인터랙션 및 동적 기능
- **AOS Library**: 스크롤 애니메이션
- **Google Fonts**: Noto Serif KR, Noto Sans KR

## 모바일 최적화

### iOS (아이폰)
- 오디오 재생 iOS 정책 대응
- Safari 렌더링 최적화
- 터치 인터랙션 최적화
- 웹앱 모드 지원

### Android
- Chrome 브라우저 최적화
- 터치 피드백 제거
- 주소창 테마 색상 설정

## 파일 구조

```
worship-website/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # JavaScript 파일
├── images/             # 이미지 폴더
│   ├── pasted_file_bU7D37_image.png   # 마하나임 중창단
│   ├── pasted_file_DzOkSp_image.png   # 찬양율동 김미원
│   ├── pasted_file_JoPxjk_image.png   # 트리니티 중창단
│   └── pasted_file_91b555_image.png   # 히어로 배경
└── README.md           # 프로젝트 설명
```

## 로컬 실행 방법

### 방법 1: 파이썬 서버
```bash
cd worship-website
python3 -m http.server 8080
```
브라우저에서 `http://localhost:8080` 접속

### 방법 2: 직접 열기
`index.html` 파일을 브라우저로 드래그 앤 드롭

## 배포 방법

### GitHub Pages
1. GitHub 저장소 설정 → Pages
2. Source를 `main` 브랜치로 설정
3. 자동으로 URL 생성

### Netlify
1. Netlify에 로그인
2. "New site from Git" 선택
3. 저장소 연결 후 배포

### Vercel
1. Vercel에 로그인
2. "Import Project" 선택
3. 저장소 연결 후 배포

## 브라우저 호환성

- Chrome, Edge, Safari, Firefox 최신 버전 지원
- 모바일 브라우저 최적화
- IE11 이하는 일부 기능 제한 가능

## 라이선스

이 프로젝트는 전주온누리교회 마하나임 & 트리니티 중창단을 위해 제작되었습니다.

## 배경음악 출처

Christian Instrumental Piano Worship - Calm Emotional Soaking Prayer  
출처: Pixabay (JesseQuinnMedia)  
라이선스: 무료 사용 가능

## 제작 정보

**제작일**: 2025년 10월 13일  
**제작**: Manus AI

