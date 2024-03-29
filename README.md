# Rules

## Commit convention

**Feat**: 단순 마크업을 제외한 유저 인터페이스 구현이나, 다른 기능 추가

**Style**: 웹사이트 단순 마크업

**Chore**: 파일이름변경, 패키지 추가

**Refactor**: 리팩토링

**Fix**: 버그 고치는 경우

## Issue handling

각자 맡은 부분에 대한 이슈를 등록하고, 커밋할 때 이슈 고유번호를 등록한다.

예)

```
Style: About페이지 Header 디자인 완성 #2
```

## PR

각자가 작업하는 feature 브랜치에서 매일마다 작업이 끝나면 dev 브랜치에 PR을 날린다.

PR 날리고 카톡방에 날렸다고 공지 뒤
본인을 제외한 다른 사람이 확인하고 머지하기


## 스타일 가이드 

- 섹션 단위로 컴포넌트를 분리해주세요.
- 폰트 사이즈는 rem을 사용해주세요. 10px = 1rem 입니다.
- 모바일 디자인은 일단 지금 생각하지 말고, 대신 **반응형을 고려하면서** 디자인해주세요.
