# 멤버십 프로젝트 - 웹할일관리 저장소

## 배포

### [로그인](http://106.10.34.142:3000/signin)
- 계정
  - ID : admin / PW : admin

### [관리자](http://106.10.34.142:3000/admin)

## DB

### DB tables description

![DB_tables](https://user-images.githubusercontent.com/47619140/65963651-306a2200-e496-11e9-9d7e-a834c1f61d13.jpeg)

### DB EER

![DB_EER](https://user-images.githubusercontent.com/47619140/65963472-c3568c80-e495-11e9-99f2-8eee70e03572.png)

### 보드 ,리스트, 카드 데이터 객체화 시나리오

1. BOARD 다 가져오기 -> 하나씩 순회
2. 1번에서 가져온 `BOARD_ID = LIST_BELONG_BOARD`인 LIST_ID 다 가져오기
3. 2번에서 가져온 `LIST_ID = TODO_BELONG_LIST`인 TODO_ID 다 가져오기
4. 1, 2, 3번에서 가져온 데이터 BOARD 기준으로 객체로 묶기

- 보드 데이터 객체 구조
```javascript
const boards = [
    board {
        name : "board_name",
        lists : [
            list {
                name : "list_name",
                cards : [
                    card {
                        name : "card_name",
                        
                    }
                ]
            },
            ...
        ]
    },
    ...
]
```
