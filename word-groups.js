// 성격과 결합에 따라 함께 익히는 단어·표현. 항목은 여러 묶음에 다시 나올 수 있습니다.
const wordGroups = [
  {
    "id": "wg01",
    "cat": "명사의 성격",
    "title": "불가산명사 · 정보·도움·일",
    "lead": "기본 의미에서는 a/an과 복수 -s를 직접 붙이지 않습니다. 수량을 말하려면 알맞은 단위나 가산명사로 바꿉니다.",
    "items": [
      {
        "term": "information",
        "meaning": "정보",
        "usages": [
          "some useful information"
        ],
        "cat": "명사의 성격",
        "note": "한 가지 정보는 a piece of information"
      },
      {
        "term": "advice",
        "meaning": "조언",
        "usages": [
          "a piece of advice"
        ],
        "cat": "명사의 성격",
        "note": "조언 두 가지는 two pieces of advice"
      },
      {
        "term": "assistance",
        "meaning": "도움·지원",
        "usages": [
          "need some assistance"
        ],
        "cat": "명사의 성격",
        "note": "help도 도움이라는 기본 의미에서 불가산"
      },
      {
        "term": "access",
        "meaning": "접근·이용 권한",
        "usages": [
          "have access to the gym"
        ],
        "cat": "명사의 성격",
        "note": "access to + 장소·정보"
      },
      {
        "term": "funding",
        "meaning": "자금 지원",
        "usages": [
          "need more funding"
        ],
        "cat": "명사의 성격",
        "note": "more funding, an amount of funding"
      },
      {
        "term": "research",
        "meaning": "연구·조사",
        "usages": [
          "do some research"
        ],
        "cat": "명사의 성격",
        "note": "연구 한 건은 a research study"
      },
      {
        "term": "news",
        "meaning": "소식",
        "usages": [
          "The news is good."
        ],
        "cat": "명사의 성격",
        "note": "-s로 끝나도 단수 동사"
      },
      {
        "term": "homework",
        "meaning": "숙제",
        "usages": [
          "a lot of homework"
        ],
        "cat": "명사의 성격",
        "note": "숙제 두 개는 two assignments"
      },
      {
        "term": "work",
        "meaning": "일·업무",
        "usages": [
          "have some work to do"
        ],
        "cat": "명사의 성격",
        "note": "업무 세 가지는 three tasks"
      },
      {
        "term": "progress",
        "meaning": "진전",
        "usages": [
          "make progress"
        ],
        "cat": "명사의 성격",
        "note": "an progress, progresses로 세지 않음"
      }
    ]
  },
  {
    "id": "wg02",
    "cat": "명사의 성격",
    "title": "불가산명사 · 물건·양·재료",
    "lead": "한국어로 개수를 셀 수 있어도 영어의 묶음 명사는 불가산일 수 있습니다. 실제 개체를 나타내는 bag, chair, machine과 구분하세요.",
    "items": [
      {
        "term": "furniture",
        "meaning": "가구",
        "usages": [
          "two pieces of furniture"
        ],
        "cat": "명사의 성격",
        "note": "furniture is, chairs are"
      },
      {
        "term": "equipment",
        "meaning": "장비",
        "usages": [
          "a piece of equipment"
        ],
        "cat": "명사의 성격",
        "note": "equipments 대신 machines/tools로 구체화"
      },
      {
        "term": "luggage / baggage",
        "meaning": "짐·수하물",
        "usages": [
          "My luggage is heavy."
        ],
        "cat": "명사의 성격",
        "note": "두 가방은 two bags"
      },
      {
        "term": "stationery",
        "meaning": "문구류",
        "usages": [
          "buy some stationery"
        ],
        "cat": "명사의 성격",
        "note": "stationary는 움직이지 않는다는 형용사"
      },
      {
        "term": "merchandise",
        "meaning": "판매 상품",
        "usages": [
          "sell sports merchandise"
        ],
        "cat": "명사의 성격",
        "note": "셀 때는 items/products"
      },
      {
        "term": "produce",
        "meaning": "농산물",
        "usages": [
          "buy fresh produce"
        ],
        "cat": "명사의 성격",
        "note": "여기서는 생산하다라는 동사가 아닌 명사"
      },
      {
        "term": "money",
        "meaning": "돈",
        "usages": [
          "save some money"
        ],
        "cat": "명사의 성격",
        "note": "ten dollars처럼 화폐 단위로 셈"
      },
      {
        "term": "traffic",
        "meaning": "교통량",
        "usages": [
          "heavy traffic"
        ],
        "cat": "명사의 성격",
        "note": "차 개수는 many cars"
      },
      {
        "term": "bread",
        "meaning": "빵",
        "usages": [
          "two slices of bread"
        ],
        "cat": "명사의 성격",
        "note": "한 덩이는 a loaf of bread"
      },
      {
        "term": "rice",
        "meaning": "쌀·밥",
        "usages": [
          "a bowl of rice"
        ],
        "cat": "명사의 성격",
        "note": "쌀 한 톨은 a grain of rice"
      },
      {
        "term": "water",
        "meaning": "물",
        "usages": [
          "two bottles of water"
        ],
        "cat": "명사의 성격",
        "note": "water 자체와 bottles의 수를 구분"
      },
      {
        "term": "weather",
        "meaning": "날씨",
        "usages": [
          "nice weather"
        ],
        "cat": "명사의 성격",
        "note": "a nice day와 구분"
      }
    ]
  },
  {
    "id": "wg03",
    "cat": "명사의 성격",
    "title": "불가산명사 ↔ 셀 수 있는 대체어",
    "lead": "완전히 같은 뜻이라고 보지 말고, 전체·양을 말할지 구체적인 개체를 셀지 선택하세요.",
    "items": [
      {
        "term": "furniture ↔ chairs / tables",
        "meaning": "가구 전체 ↔ 의자·탁자",
        "usages": [
          "some furniture / two chairs"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "luggage ↔ bags / suitcases",
        "meaning": "짐 전체 ↔ 가방·여행 가방",
        "usages": [
          "much luggage / three suitcases"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "equipment ↔ machines / tools",
        "meaning": "장비 전체 ↔ 기계·도구",
        "usages": [
          "new equipment / two machines"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "information ↔ facts / details",
        "meaning": "정보 ↔ 사실·세부 사항",
        "usages": [
          "useful information / three details"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "advice ↔ suggestions / tips",
        "meaning": "조언 ↔ 제안·팁",
        "usages": [
          "good advice / a useful tip"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "work ↔ tasks / jobs",
        "meaning": "일의 양 ↔ 과제·일자리",
        "usages": [
          "a lot of work / several tasks"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "homework ↔ assignments",
        "meaning": "숙제 ↔ 개별 과제",
        "usages": [
          "some homework / two assignments"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "research ↔ studies",
        "meaning": "연구 활동 ↔ 개별 연구",
        "usages": [
          "some research / three studies"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "music ↔ songs / tracks",
        "meaning": "음악 ↔ 노래·곡",
        "usages": [
          "listen to music / play two songs"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "money ↔ dollars / coins",
        "meaning": "돈 ↔ 달러·동전",
        "usages": [
          "save money / ten dollars"
        ],
        "cat": "명사의 성격"
      }
    ]
  },
  {
    "id": "wg04",
    "cat": "명사의 성격",
    "title": "뜻에 따라 가산·불가산이 바뀌는 명사",
    "lead": "아래 왼쪽 의미는 불가산, 오른쪽 의미는 가산입니다. 같은 철자라도 지금 말하는 뜻이 중요합니다.",
    "items": [
      {
        "term": "coffee",
        "meaning": "음료 자체 ↔ 주문한 한 잔",
        "usages": [
          "I like coffee. / Two coffees, please."
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "chicken",
        "meaning": "닭고기 ↔ 닭 한 마리",
        "usages": [
          "eat chicken / keep three chickens"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "paper",
        "meaning": "종이라는 재료 ↔ 논문 한 편",
        "usages": [
          "some paper / a research paper"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "glass",
        "meaning": "유리라는 재료 ↔ 유리잔",
        "usages": [
          "made of glass / two glasses"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "room",
        "meaning": "여유 공간 ↔ 방",
        "usages": [
          "not much room / two rooms"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "time",
        "meaning": "시간의 양 ↔ 횟수",
        "usages": [
          "more time / three times"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "experience",
        "meaning": "쌓인 경험 ↔ 구체적인 경험",
        "usages": [
          "teaching experience / an amazing experience"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "hair",
        "meaning": "머리카락 전체 ↔ 한 올",
        "usages": [
          "long hair / a hair in my soup"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "light",
        "meaning": "빛 ↔ 전등",
        "usages": [
          "natural light / turn on a light"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "business",
        "meaning": "사업 활동 ↔ 개별 업체",
        "usages": [
          "do business / run a small business"
        ],
        "cat": "명사의 성격"
      }
    ]
  },
  {
    "id": "wg05",
    "cat": "명사의 성격",
    "title": "사람명사 ↔ 활동·결과 명사",
    "lead": "사람을 말하는지 그 활동·결과를 말하는지 나누어 익히세요. 대응하는 명사도 문맥에 따라 다른 뜻이 있습니다.",
    "items": [
      {
        "term": "applicant ↔ application",
        "meaning": "지원자 ↔ 지원·신청서",
        "usages": [
          "an applicant / fill out an application"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "assistant ↔ assistance",
        "meaning": "조수 ↔ 도움·지원",
        "usages": [
          "an assistant / ask for assistance"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "participant ↔ participation",
        "meaning": "참가자 ↔ 참여",
        "usages": [
          "ten participants / active participation"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "manager ↔ management",
        "meaning": "관리자 ↔ 관리·경영",
        "usages": [
          "a store manager / time management"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "investor ↔ investment",
        "meaning": "투자자 ↔ 투자·투자금",
        "usages": [
          "an investor / make an investment"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "founder ↔ foundation",
        "meaning": "설립자 ↔ 설립·재단",
        "usages": [
          "the founder / the foundation of the company"
        ],
        "cat": "명사의 성격",
        "note": "foundation은 기초·재단이라는 뜻도 있음"
      },
      {
        "term": "architect ↔ architecture",
        "meaning": "건축가 ↔ 건축·건축학",
        "usages": [
          "an architect / modern architecture"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "candidate ↔ candidacy",
        "meaning": "후보자 ↔ 후보 자격·출마",
        "usages": [
          "a candidate / announce a candidacy"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "correspondent ↔ correspondence",
        "meaning": "특파원·통신원 ↔ 서신 왕래",
        "usages": [
          "a foreign correspondent / business correspondence"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "supplier ↔ supply",
        "meaning": "공급업자 ↔ 공급·공급량",
        "usages": [
          "a local supplier / the water supply"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "manufacturer ↔ manufacturing",
        "meaning": "제조업체·제조자 ↔ 제조업·제조",
        "usages": [
          "a car manufacturer / car manufacturing"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "employer ↔ employment",
        "meaning": "고용주 ↔ 고용·취업",
        "usages": [
          "a new employer / full-time employment"
        ],
        "cat": "명사의 성격"
      }
    ]
  },
  {
    "id": "wg06",
    "cat": "명사의 성격",
    "title": "사람명사 ↔ 사물·결과·분야 명사",
    "lead": "사람을 나타내는 -er/-or/-ist와 활동·사물을 함께 보세요. 접미사만 보고 모든 단어를 기계적으로 만들지는 마세요.",
    "items": [
      {
        "term": "teacher ↔ teaching",
        "meaning": "교사 ↔ 가르치는 활동",
        "usages": [
          "a teacher / teaching experience"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "writer ↔ writing",
        "meaning": "작가 ↔ 글쓰기·글",
        "usages": [
          "a writer / creative writing"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "driver ↔ driving",
        "meaning": "운전자 ↔ 운전",
        "usages": [
          "a careful driver / driving lessons"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "designer ↔ design",
        "meaning": "디자이너 ↔ 디자인",
        "usages": [
          "a designer / a simple design"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "photographer ↔ photography",
        "meaning": "사진가 ↔ 사진 촬영·사진술",
        "usages": [
          "a photographer / an interest in photography"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "musician ↔ music",
        "meaning": "음악가 ↔ 음악",
        "usages": [
          "a musician / live music"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "scientist ↔ science",
        "meaning": "과학자 ↔ 과학",
        "usages": [
          "a scientist / study science"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "artist ↔ art",
        "meaning": "예술가 ↔ 예술",
        "usages": [
          "an artist / modern art"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "editor ↔ editing",
        "meaning": "편집자 ↔ 편집",
        "usages": [
          "an editor / video editing"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "translator ↔ translation",
        "meaning": "번역가 ↔ 번역·번역문",
        "usages": [
          "a translator / a translation of the book"
        ],
        "cat": "명사의 성격"
      }
    ]
  },
  {
    "id": "wg07",
    "cat": "명사의 성격",
    "title": "복수로 쓰는 명사와 pair of",
    "lead": "clothes, scissors 등은 불가산명사와 별개입니다. 명사 자체는 복수 동사, a pair of가 주어이면 단수 동사를 씁니다.",
    "items": [
      {
        "term": "clothes",
        "meaning": "옷",
        "usages": [
          "My clothes are wet."
        ],
        "cat": "명사의 성격",
        "note": "옷 한 벌·한 점은 an item of clothing"
      },
      {
        "term": "clothing",
        "meaning": "의류 전체",
        "usages": [
          "warm clothing"
        ],
        "cat": "명사의 성격",
        "note": "clothing은 불가산, clothes는 복수"
      },
      {
        "term": "scissors",
        "meaning": "가위",
        "usages": [
          "a pair of scissors"
        ],
        "cat": "명사의 성격",
        "note": "The scissors are sharp. / This pair is sharp."
      },
      {
        "term": "trousers",
        "meaning": "바지",
        "usages": [
          "a pair of trousers"
        ],
        "cat": "명사의 성격",
        "note": "trousers는 주로 영국식"
      },
      {
        "term": "pants",
        "meaning": "바지",
        "usages": [
          "a pair of pants"
        ],
        "cat": "명사의 성격",
        "note": "미국식에서 바지, 영국식에서는 속옷이라는 뜻도 있음"
      },
      {
        "term": "jeans",
        "meaning": "청바지",
        "usages": [
          "two pairs of jeans"
        ],
        "cat": "명사의 성격",
        "note": "two jeans보다 two pairs of jeans"
      },
      {
        "term": "shorts",
        "meaning": "반바지",
        "usages": [
          "a pair of shorts"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "glasses",
        "meaning": "안경",
        "usages": [
          "wear glasses"
        ],
        "cat": "명사의 성격",
        "note": "유리잔 두 개라는 뜻과 문맥으로 구분"
      },
      {
        "term": "sunglasses",
        "meaning": "선글라스",
        "usages": [
          "a pair of sunglasses"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "belongings",
        "meaning": "소지품",
        "usages": [
          "keep your belongings safe"
        ],
        "cat": "명사의 성격",
        "note": "belongings are"
      }
    ]
  },
  {
    "id": "wg08",
    "cat": "명사의 성격",
    "title": "불규칙 복수와 형태가 같은 복수",
    "lead": "숫자와 함께 소리 내어 읽으세요. sheep, deer 같은 단어는 철자가 같아도 개수에 따라 동사가 달라집니다.",
    "items": [
      {
        "term": "person → people",
        "meaning": "사람 → 사람들",
        "usages": [
          "one person / three people"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "child → children",
        "meaning": "아이 → 아이들",
        "usages": [
          "one child / two children"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "man → men",
        "meaning": "남자 → 남자들",
        "usages": [
          "one man / two men"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "woman → women",
        "meaning": "여자 → 여자들",
        "usages": [
          "one woman / two women"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "foot → feet",
        "meaning": "발 → 발들",
        "usages": [
          "one foot / two feet"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "tooth → teeth",
        "meaning": "치아 → 치아들",
        "usages": [
          "one tooth / two teeth"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "mouse → mice",
        "meaning": "생쥐 → 생쥐들",
        "usages": [
          "one mouse / two mice"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "sheep → sheep",
        "meaning": "양 → 양들",
        "usages": [
          "One sheep is here. / Two sheep are here."
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "deer → deer",
        "meaning": "사슴 → 사슴들",
        "usages": [
          "one deer / several deer"
        ],
        "cat": "명사의 성격"
      },
      {
        "term": "fish → fish",
        "meaning": "물고기 → 물고기들",
        "usages": [
          "catch three fish"
        ],
        "cat": "명사의 성격",
        "note": "여러 종류를 말할 때 fishes도 쓰지만 기본 복수는 fish"
      }
    ]
  },
  {
    "id": "wg09",
    "cat": "단어 가족",
    "title": "동사 → 명사 · 일·공부",
    "lead": "활동을 말하는 동사와 그 결과·과정을 말하는 명사를 함께 익히세요.",
    "items": [
      {
        "term": "decide → decision",
        "meaning": "결정하다 → 결정",
        "usages": [
          "decide to leave / make a decision"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "prepare → preparation",
        "meaning": "준비하다 → 준비",
        "usages": [
          "prepare for a test / careful preparation"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "explain → explanation",
        "meaning": "설명하다 → 설명",
        "usages": [
          "explain the problem / a clear explanation"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "discuss → discussion",
        "meaning": "논의하다 → 논의",
        "usages": [
          "discuss a plan / have a discussion"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "improve → improvement",
        "meaning": "개선하다 → 개선",
        "usages": [
          "improve my English / a big improvement"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "develop → development",
        "meaning": "개발·발전시키다 → 개발·발전",
        "usages": [
          "develop a habit / personal development"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "achieve → achievement",
        "meaning": "이루다 → 성취",
        "usages": [
          "achieve a goal / a major achievement"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "choose → choice",
        "meaning": "선택하다 → 선택",
        "usages": [
          "choose a topic / make a choice"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "solve → solution",
        "meaning": "해결하다 → 해결책",
        "usages": [
          "solve a problem / find a solution"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "organize → organization",
        "meaning": "정리·조직하다 → 조직·정리",
        "usages": [
          "organize an event / a local organization"
        ],
        "cat": "단어 가족"
      }
    ]
  },
  {
    "id": "wg10",
    "cat": "단어 가족",
    "title": "동사 → 명사 · 여행·일상",
    "lead": "품사를 바꾸어 같은 경험을 여러 문장으로 말해 보세요.",
    "items": [
      {
        "term": "arrive → arrival",
        "meaning": "도착하다 → 도착",
        "usages": [
          "arrive at the hotel / on arrival"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "depart → departure",
        "meaning": "출발하다 → 출발",
        "usages": [
          "depart from Seoul / the departure time"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "reserve → reservation",
        "meaning": "예약하다 → 예약",
        "usages": [
          "reserve a table / make a reservation"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "invite → invitation",
        "meaning": "초대하다 → 초대·초대장",
        "usages": [
          "invite a friend / accept an invitation"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "celebrate → celebration",
        "meaning": "축하하다 → 축하 행사",
        "usages": [
          "celebrate a birthday / a family celebration"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "relax → relaxation",
        "meaning": "쉬다 → 휴식",
        "usages": [
          "relax at home / time for relaxation"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "entertain → entertainment",
        "meaning": "즐겁게 하다 → 오락",
        "usages": [
          "entertain guests / live entertainment"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "move → movement",
        "meaning": "움직이다 → 움직임",
        "usages": [
          "move slowly / body movement"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "pay → payment",
        "meaning": "지불하다 → 지불",
        "usages": [
          "pay by card / make a payment"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "deliver → delivery",
        "meaning": "배달하다 → 배달",
        "usages": [
          "deliver a package / free delivery"
        ],
        "cat": "단어 가족"
      }
    ]
  },
  {
    "id": "wg11",
    "cat": "단어 가족",
    "title": "형용사 → 명사 · 상태와 평가",
    "lead": "형용사는 사람·사물을 설명하고, 명사는 그 성질 자체를 말합니다.",
    "items": [
      {
        "term": "happy → happiness",
        "meaning": "행복한 → 행복",
        "usages": [
          "feel happy / bring happiness"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "sad → sadness",
        "meaning": "슬픈 → 슬픔",
        "usages": [
          "feel sad / a feeling of sadness"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "safe → safety",
        "meaning": "안전한 → 안전",
        "usages": [
          "a safe place / road safety"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "healthy → health",
        "meaning": "건강한 → 건강",
        "usages": [
          "stay healthy / good health"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "comfortable → comfort",
        "meaning": "편안한 → 편안함",
        "usages": [
          "a comfortable chair / travel in comfort"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "convenient → convenience",
        "meaning": "편리한 → 편리함",
        "usages": [
          "a convenient location / for convenience"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "different → difference",
        "meaning": "다른 → 차이",
        "usages": [
          "a different idea / a big difference"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "difficult → difficulty",
        "meaning": "어려운 → 어려움",
        "usages": [
          "a difficult task / have difficulty sleeping"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "important → importance",
        "meaning": "중요한 → 중요성",
        "usages": [
          "an important rule / the importance of practice"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "popular → popularity",
        "meaning": "인기 있는 → 인기",
        "usages": [
          "a popular café / gain popularity"
        ],
        "cat": "단어 가족"
      }
    ]
  },
  {
    "id": "wg12",
    "cat": "단어 가족",
    "title": "형용사 → 명사 · 사람과 능력",
    "lead": "사람의 성격·능력을 말할 때 바로 쓰는 가족입니다.",
    "items": [
      {
        "term": "confident → confidence",
        "meaning": "자신감 있는 → 자신감",
        "usages": [
          "feel confident / build confidence"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "patient → patience",
        "meaning": "참을성 있는 → 인내심",
        "usages": [
          "be patient / lose patience"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "honest → honesty",
        "meaning": "정직한 → 정직",
        "usages": [
          "an honest person / value honesty"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "kind → kindness",
        "meaning": "친절한 → 친절",
        "usages": [
          "a kind neighbor / show kindness"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "creative → creativity",
        "meaning": "창의적인 → 창의성",
        "usages": [
          "a creative idea / encourage creativity"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "responsible → responsibility",
        "meaning": "책임감 있는 → 책임",
        "usages": [
          "be responsible for / take responsibility"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "independent → independence",
        "meaning": "독립적인 → 독립",
        "usages": [
          "become independent / gain independence"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "able → ability",
        "meaning": "할 수 있는 → 능력",
        "usages": [
          "be able to swim / the ability to learn"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "curious → curiosity",
        "meaning": "호기심 있는 → 호기심",
        "usages": [
          "be curious about / out of curiosity"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "generous → generosity",
        "meaning": "너그러운 → 너그러움",
        "usages": [
          "a generous friend / appreciate generosity"
        ],
        "cat": "단어 가족"
      }
    ]
  },
  {
    "id": "wg13",
    "cat": "단어 가족",
    "title": "동사·명사·형용사 · 기본 가족",
    "lead": "각 단어가 문장 어디에 들어가는지까지 함께 기억하세요.",
    "items": [
      {
        "term": "succeed → success → successful",
        "meaning": "성공하다 → 성공 → 성공적인",
        "usages": [
          "succeed in business / a success / a successful trip"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "differ → difference → different",
        "meaning": "다르다 → 차이 → 다른",
        "usages": [
          "differ from mine / a difference / a different plan"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "act → action → active",
        "meaning": "행동하다 → 행동 → 활동적인",
        "usages": [
          "act quickly / take action / stay active"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "create → creation → creative",
        "meaning": "만들다 → 창작물·창조 → 창의적인",
        "usages": [
          "create a story / a creation / a creative person"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "attract → attraction → attractive",
        "meaning": "끌다 → 명소·매력 → 매력적인",
        "usages": [
          "attract visitors / a tourist attraction / an attractive offer"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "compete → competition → competitive",
        "meaning": "경쟁하다 → 경쟁 → 경쟁력 있는",
        "usages": [
          "compete with others / a competition / a competitive price"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "communicate → communication → communicative",
        "meaning": "소통하다 → 소통 → 의사소통을 잘하는",
        "usages": [
          "communicate clearly / good communication / a communicative person"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "educate → education → educational",
        "meaning": "교육하다 → 교육 → 교육적인",
        "usages": [
          "educate children / education / an educational show"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "protect → protection → protective",
        "meaning": "보호하다 → 보호 → 보호하는",
        "usages": [
          "protect my skin / sun protection / protective clothing"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "support → support → supportive",
        "meaning": "지지하다 → 지원·지지 → 지지하는",
        "usages": [
          "support a friend / emotional support / a supportive family"
        ],
        "cat": "단어 가족"
      }
    ]
  },
  {
    "id": "wg14",
    "cat": "단어 가족",
    "title": "형용사 → 부사 · 말하는 방식",
    "lead": "형용사는 명사·상태, 부사는 행동의 방식 등을 설명합니다. 모든 부사가 -ly인 것은 아닙니다.",
    "items": [
      {
        "term": "careful → carefully",
        "meaning": "조심스러운 → 조심스럽게",
        "usages": [
          "a careful driver / drive carefully"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "slow → slowly",
        "meaning": "느린 → 천천히",
        "usages": [
          "a slow train / walk slowly"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "quick → quickly",
        "meaning": "빠른 → 빠르게",
        "usages": [
          "a quick meal / finish quickly"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "clear → clearly",
        "meaning": "명확한 → 명확하게",
        "usages": [
          "a clear explanation / explain clearly"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "quiet → quietly",
        "meaning": "조용한 → 조용히",
        "usages": [
          "a quiet room / speak quietly"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "easy → easily",
        "meaning": "쉬운 → 쉽게",
        "usages": [
          "an easy question / learn easily"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "comfortable → comfortably",
        "meaning": "편안한 → 편안하게",
        "usages": [
          "a comfortable seat / sit comfortably"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "polite → politely",
        "meaning": "공손한 → 공손하게",
        "usages": [
          "a polite request / ask politely"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "good → well",
        "meaning": "좋은 → 잘",
        "usages": [
          "a good singer / sing well"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "fast → fast",
        "meaning": "빠른 → 빠르게",
        "usages": [
          "a fast car / drive fast"
        ],
        "cat": "단어 가족",
        "note": "fastly라고 하지 않음"
      },
      {
        "term": "hard → hard",
        "meaning": "힘든·단단한 → 열심히·세게",
        "usages": [
          "hard work / work hard"
        ],
        "cat": "단어 가족",
        "note": "hardly는 거의 ~않다"
      },
      {
        "term": "late → late",
        "meaning": "늦은 → 늦게",
        "usages": [
          "a late flight / arrive late"
        ],
        "cat": "단어 가족",
        "note": "lately는 최근에"
      }
    ]
  },
  {
    "id": "wg15",
    "cat": "단어 가족",
    "title": "반대말 만드는 접두사",
    "lead": "un-, in-, im-, ir-, dis-를 아무 단어에나 붙이지 말고 실제 짝으로 외우세요.",
    "items": [
      {
        "term": "happy ↔ unhappy",
        "meaning": "행복한 ↔ 행복하지 않은",
        "usages": [
          "feel unhappy"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "comfortable ↔ uncomfortable",
        "meaning": "편안한 ↔ 불편한",
        "usages": [
          "an uncomfortable chair"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "usual ↔ unusual",
        "meaning": "평소의 ↔ 특이한",
        "usages": [
          "an unusual experience"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "fair ↔ unfair",
        "meaning": "공정한 ↔ 불공정한",
        "usages": [
          "an unfair rule"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "possible ↔ impossible",
        "meaning": "가능한 ↔ 불가능한",
        "usages": [
          "an impossible task"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "patient ↔ impatient",
        "meaning": "참을성 있는 ↔ 조급한",
        "usages": [
          "become impatient"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "polite ↔ impolite",
        "meaning": "공손한 ↔ 무례한",
        "usages": [
          "an impolite comment"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "regular ↔ irregular",
        "meaning": "규칙적인 ↔ 불규칙한",
        "usages": [
          "an irregular schedule"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "responsible ↔ irresponsible",
        "meaning": "책임감 있는 ↔ 무책임한",
        "usages": [
          "irresponsible behavior"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "agree ↔ disagree",
        "meaning": "동의하다 ↔ 동의하지 않다",
        "usages": [
          "disagree with an opinion"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "appear ↔ disappear",
        "meaning": "나타나다 ↔ 사라지다",
        "usages": [
          "disappear suddenly"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "honest ↔ dishonest",
        "meaning": "정직한 ↔ 부정직한",
        "usages": [
          "a dishonest person"
        ],
        "cat": "단어 가족"
      }
    ]
  },
  {
    "id": "wg16",
    "cat": "단어 가족",
    "title": "비슷한 접미사로 묶는 기본 형용사",
    "lead": "접미사는 뜻을 짐작하는 단서입니다. 아래 실제 단어와 표현을 묶어 외우세요.",
    "items": [
      {
        "term": "useful / helpful",
        "meaning": "유용한 / 도움이 되는",
        "usages": [
          "useful information / helpful advice"
        ],
        "cat": "단어 가족",
        "note": "-ful은 성질을 가진다는 뜻의 단서"
      },
      {
        "term": "careful / thoughtful",
        "meaning": "조심스러운 / 사려 깊은",
        "usages": [
          "a careful driver / a thoughtful gift"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "beautiful / peaceful",
        "meaning": "아름다운 / 평화로운",
        "usages": [
          "a beautiful view / a peaceful place"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "careless / thoughtless",
        "meaning": "부주의한 / 사려 깊지 못한",
        "usages": [
          "a careless mistake / a thoughtless comment"
        ],
        "cat": "단어 가족",
        "note": "-less는 부족·없음의 단서"
      },
      {
        "term": "hopeless / useless",
        "meaning": "가망 없는 / 쓸모없는",
        "usages": [
          "a hopeless situation / a useless tool"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "comfortable / affordable",
        "meaning": "편안한 / 가격이 부담 없는",
        "usages": [
          "a comfortable room / affordable housing"
        ],
        "cat": "단어 가족",
        "note": "-able이라고 뜻을 기계적으로 같게 해석하지 않음"
      },
      {
        "term": "reliable / available",
        "meaning": "믿을 만한 / 이용 가능한",
        "usages": [
          "a reliable friend / available seats"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "dangerous / famous",
        "meaning": "위험한 / 유명한",
        "usages": [
          "a dangerous road / a famous actor"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "curious / nervous",
        "meaning": "호기심 있는 / 긴장한",
        "usages": [
          "a curious child / feel nervous"
        ],
        "cat": "단어 가족"
      },
      {
        "term": "creative / effective",
        "meaning": "창의적인 / 효과적인",
        "usages": [
          "a creative idea / an effective method"
        ],
        "cat": "단어 가족"
      }
    ]
  },
  {
    "id": "wg17",
    "cat": "동사의 결합",
    "title": "동사 + to부정사",
    "lead": "동사 뒤에 또 다른 행동을 붙일 때 기본적으로 to + 동사원형을 쓰는 묶음입니다.",
    "items": [
      {
        "term": "want to",
        "meaning": "~하고 싶다",
        "usages": [
          "I want to travel more."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "hope to",
        "meaning": "~하기를 바라다",
        "usages": [
          "I hope to visit Canada."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "plan to",
        "meaning": "~할 계획이다",
        "usages": [
          "I plan to study tonight."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "decide to",
        "meaning": "~하기로 결정하다",
        "usages": [
          "I decided to take a break."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "agree to",
        "meaning": "~하기로 동의하다",
        "usages": [
          "We agreed to meet at six."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "promise to",
        "meaning": "~하겠다고 약속하다",
        "usages": [
          "I promised to call her."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "offer to",
        "meaning": "~하겠다고 제안하다",
        "usages": [
          "He offered to help me."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "refuse to",
        "meaning": "~하기를 거절하다",
        "usages": [
          "She refused to give up."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "manage to",
        "meaning": "어렵게 ~해내다",
        "usages": [
          "I managed to catch the train."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "learn to",
        "meaning": "~하는 법을 배우다",
        "usages": [
          "I learned to cook."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "afford to",
        "meaning": "~할 여유가 있다",
        "usages": [
          "I can’t afford to buy a car."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "seem to",
        "meaning": "~인 것 같다",
        "usages": [
          "He seems to enjoy his job."
        ],
        "cat": "동사의 결합"
      }
    ]
  },
  {
    "id": "wg18",
    "cat": "동사의 결합",
    "title": "동사 + 동명사(-ing)",
    "lead": "여기서는 뒤 행동에 -ing를 붙입니다. enjoy to do처럼 to부정사로 바꾸지 마세요.",
    "items": [
      {
        "term": "enjoy -ing",
        "meaning": "~하는 것을 즐기다",
        "usages": [
          "I enjoy walking in the park."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "avoid -ing",
        "meaning": "~하는 것을 피하다",
        "usages": [
          "I avoid driving at night."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "finish -ing",
        "meaning": "~하는 것을 끝내다",
        "usages": [
          "I finished cleaning my room."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "keep -ing",
        "meaning": "계속 ~하다",
        "usages": [
          "I kept practicing."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "consider -ing",
        "meaning": "~하는 것을 고려하다",
        "usages": [
          "I’m considering moving."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "suggest -ing",
        "meaning": "~하는 것을 제안하다",
        "usages": [
          "She suggested taking a taxi."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "recommend -ing",
        "meaning": "~하는 것을 추천하다",
        "usages": [
          "I recommend visiting the museum."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "mind -ing",
        "meaning": "~하는 것을 꺼리다",
        "usages": [
          "Do you mind waiting?"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "practice -ing",
        "meaning": "~하는 것을 연습하다",
        "usages": [
          "I practice speaking every day."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "give up -ing",
        "meaning": "~하는 것을 그만두다",
        "usages": [
          "I gave up smoking."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "put off -ing",
        "meaning": "~하는 것을 미루다",
        "usages": [
          "I put off making a decision."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "miss -ing",
        "meaning": "~하던 것을 그리워하다",
        "usages": [
          "I miss living near the beach."
        ],
        "cat": "동사의 결합"
      }
    ]
  },
  {
    "id": "wg19",
    "cat": "동사의 결합",
    "title": "to와 -ing · 뜻이 달라지는 동사",
    "lead": "뒤 형태가 바뀌면 시간이 달라지거나 행동의 목적이 달라집니다. 짝으로 문장을 외우세요.",
    "items": [
      {
        "term": "remember to do ↔ remember doing",
        "meaning": "할 일을 기억하다 ↔ 한 일을 기억하다",
        "usages": [
          "Remember to lock the door. / I remember locking it."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "forget to do ↔ forget doing",
        "meaning": "할 일을 잊다 ↔ 했던 일을 기억하지 못하다",
        "usages": [
          "I forgot to call. / I’ll never forget meeting her."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "stop to do ↔ stop doing",
        "meaning": "다른 일을 멈추고 ~하다 ↔ ~하는 일을 중단하다",
        "usages": [
          "We stopped to rest. / I stopped running."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "try to do ↔ try doing",
        "meaning": "하려고 애쓰다 ↔ 시험 삼아 해보다",
        "usages": [
          "I tried to open it. / Try restarting your phone."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "regret to say ↔ regret doing",
        "meaning": "유감스럽게 말하다 ↔ 한 일을 후회하다",
        "usages": [
          "I regret to say this. / I regret buying it."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "go on to do ↔ go on doing",
        "meaning": "다음 다른 일을 하다 ↔ 같은 일을 계속하다",
        "usages": [
          "He went on to explain the rules. / He went on talking."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "mean to do ↔ mean doing",
        "meaning": "~할 의도이다 ↔ ~하는 것을 수반하다",
        "usages": [
          "I meant to call. / This job means working late."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "need to do ↔ need doing",
        "meaning": "주어가 ~해야 한다 ↔ 주어가 ~될 필요가 있다",
        "usages": [
          "I need to clean it. / It needs cleaning."
        ],
        "cat": "동사의 결합",
        "note": "need doing은 수동 의미"
      }
    ]
  },
  {
    "id": "wg20",
    "cat": "동사의 결합",
    "title": "사람 + to부정사를 받는 동사",
    "lead": "want/ask/tell + 사람 + to do처럼 누가 행동할지를 가운데 넣습니다.",
    "items": [
      {
        "term": "want someone to",
        "meaning": "누가 ~하기를 원하다",
        "usages": [
          "I want you to join us."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "ask someone to",
        "meaning": "누군가에게 ~해 달라고 하다",
        "usages": [
          "I asked him to help."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "tell someone to",
        "meaning": "누군가에게 ~하라고 말하다",
        "usages": [
          "She told me to wait."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "invite someone to",
        "meaning": "누군가를 ~하도록 초대하다",
        "usages": [
          "I invited her to have dinner."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "encourage someone to",
        "meaning": "누군가가 ~하도록 격려하다",
        "usages": [
          "He encouraged me to try."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "allow someone to",
        "meaning": "누군가가 ~하도록 허락하다",
        "usages": [
          "They allowed us to enter."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "expect someone to",
        "meaning": "누군가가 ~할 것으로 기대하다",
        "usages": [
          "I expect him to arrive soon."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "remind someone to",
        "meaning": "누군가에게 할 일을 상기시키다",
        "usages": [
          "Remind me to call her."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "advise someone to",
        "meaning": "누군가에게 ~하라고 조언하다",
        "usages": [
          "She advised me to rest."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "persuade someone to",
        "meaning": "누군가를 설득해 ~하게 하다",
        "usages": [
          "I persuaded him to come."
        ],
        "cat": "동사의 결합"
      }
    ]
  },
  {
    "id": "wg21",
    "cat": "동사의 결합",
    "title": "동사 + 목적어 + 원형·-ing·형용사",
    "lead": "동사마다 뒤 구조가 다릅니다. make/let은 원형, help는 원형 또는 to부정사, 감각동사는 원형·-ing를 비교하세요.",
    "items": [
      {
        "term": "make someone do",
        "meaning": "누군가가 ~하게 만들다",
        "usages": [
          "The joke made me laugh."
        ],
        "cat": "동사의 결합",
        "note": "make me to laugh가 아님"
      },
      {
        "term": "let someone do",
        "meaning": "누군가가 ~하도록 허락하다",
        "usages": [
          "Let me explain."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "help someone (to) do",
        "meaning": "누군가가 ~하도록 돕다",
        "usages": [
          "She helped me (to) cook."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "have someone do",
        "meaning": "누군가에게 일을 맡기다",
        "usages": [
          "I had a technician check it."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "get someone to do",
        "meaning": "누군가가 ~하도록 하다",
        "usages": [
          "I got him to help."
        ],
        "cat": "동사의 결합",
        "note": "get은 이 구조에서 to가 필요"
      },
      {
        "term": "see someone do",
        "meaning": "누군가의 행동 전체를 보다",
        "usages": [
          "I saw him cross the street."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "see someone doing",
        "meaning": "누군가가 하는 중인 것을 보다",
        "usages": [
          "I saw him crossing the street."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "hear someone doing",
        "meaning": "누군가가 하는 중인 소리를 듣다",
        "usages": [
          "I heard her singing."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "keep something adjective",
        "meaning": "대상을 어떤 상태로 유지하다",
        "usages": [
          "Keep the room clean."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "find something adjective",
        "meaning": "대상을 어떤 상태라고 느끼다",
        "usages": [
          "I found the movie interesting."
        ],
        "cat": "동사의 결합"
      }
    ]
  },
  {
    "id": "wg22",
    "cat": "동사의 결합",
    "title": "분리 가능한 구동사 · 대명사는 가운데",
    "lead": "명사 목적어는 turn on the light / turn the light on 둘 다 가능합니다. 목적격 대명사는 turn it on처럼 가운데 둡니다.",
    "items": [
      {
        "term": "turn on",
        "meaning": "켜다",
        "usages": [
          "turn on the light / turn it on"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "turn off",
        "meaning": "끄다",
        "usages": [
          "turn off the TV / turn it off"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "pick up",
        "meaning": "집어 들다·데리러 가다",
        "usages": [
          "pick up the bags / pick them up"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "put off",
        "meaning": "미루다",
        "usages": [
          "put off the meeting / put it off"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "take off",
        "meaning": "벗다",
        "usages": [
          "take off your shoes / take them off"
        ],
        "cat": "동사의 결합",
        "note": "비행기가 이륙하다는 목적어 없는 다른 용법"
      },
      {
        "term": "put on",
        "meaning": "입다·착용하다",
        "usages": [
          "put on your jacket / put it on"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "throw away",
        "meaning": "버리다",
        "usages": [
          "throw away the box / throw it away"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "write down",
        "meaning": "적다",
        "usages": [
          "write down the address / write it down"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "look up",
        "meaning": "찾아보다",
        "usages": [
          "look up the word / look it up"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "bring back",
        "meaning": "돌려주다·가져오다",
        "usages": [
          "bring back the book / bring it back"
        ],
        "cat": "동사의 결합"
      }
    ]
  },
  {
    "id": "wg23",
    "cat": "동사의 결합",
    "title": "분리하지 않는 동사·전치사 묶음",
    "lead": "이 뜻에서는 전치사 뒤에 명사·대명사를 둡니다. look after her를 look her after로 바꾸지 않습니다.",
    "items": [
      {
        "term": "look for",
        "meaning": "찾다",
        "usages": [
          "I’m looking for my keys."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "look after",
        "meaning": "돌보다",
        "usages": [
          "I look after my nephew."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "listen to",
        "meaning": "듣다",
        "usages": [
          "I listen to music."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "depend on",
        "meaning": "~에 달려 있다·의지하다",
        "usages": [
          "It depends on the weather."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "belong to",
        "meaning": "~의 소유이다",
        "usages": [
          "This bag belongs to me."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "run into",
        "meaning": "우연히 만나다",
        "usages": [
          "I ran into an old friend."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "deal with",
        "meaning": "처리하다",
        "usages": [
          "I dealt with the problem."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "get over",
        "meaning": "회복하다·극복하다",
        "usages": [
          "I got over my cold."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "look forward to",
        "meaning": "~을 기대하다",
        "usages": [
          "I look forward to seeing you."
        ],
        "cat": "동사의 결합",
        "note": "여기서 to는 전치사라 뒤에 -ing"
      },
      {
        "term": "get along with",
        "meaning": "~와 잘 지내다",
        "usages": [
          "I get along with my coworkers."
        ],
        "cat": "동사의 결합"
      }
    ]
  },
  {
    "id": "wg24",
    "cat": "동사의 결합",
    "title": "전치사가 필요한 동사 ↔ 바로 목적어를 받는 동사",
    "lead": "도착·논의·연락을 말할 때 목적어 앞 전치사 여부를 함께 외우세요.",
    "items": [
      {
        "term": "arrive at ↔ reach",
        "meaning": "작은 장소에 도착하다 ↔ 장소에 이르다",
        "usages": [
          "arrive at the hotel / reach the hotel"
        ],
        "cat": "동사의 결합",
        "note": "arrive in + 도시·나라"
      },
      {
        "term": "talk about ↔ discuss",
        "meaning": "~에 대해 이야기하다 ↔ ~을 논의하다",
        "usages": [
          "talk about the plan / discuss the plan"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "listen to ↔ hear",
        "meaning": "귀 기울여 듣다 ↔ 소리가 들리다",
        "usages": [
          "listen to music / hear a sound"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "look at ↔ see",
        "meaning": "시선을 두다 ↔ 보이다·보다",
        "usages": [
          "look at the picture / see the picture"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "wait for ↔ expect",
        "meaning": "기다리다 ↔ 예상하다",
        "usages": [
          "wait for a bus / expect a delay"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "reply to ↔ answer",
        "meaning": "~에 답하다 ↔ ~을 대답하다",
        "usages": [
          "reply to an email / answer a question"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "search for ↔ search",
        "meaning": "대상을 찾다 ↔ 장소를 수색하다",
        "usages": [
          "search for my keys / search my bag"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "participate in ↔ attend",
        "meaning": "~에 참여하다 ↔ ~에 참석하다",
        "usages": [
          "participate in a workshop / attend a meeting"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "apologize for ↔ regret",
        "meaning": "~에 사과하다 ↔ ~을 후회하다",
        "usages": [
          "apologize for the mistake / regret the mistake"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "enter ↔ go into",
        "meaning": "들어가다 ↔ 안으로 가다",
        "usages": [
          "enter the room / go into the room"
        ],
        "cat": "동사의 결합",
        "note": "enter into는 계약·논의 등에 쓰는 별도 용법"
      }
    ]
  },
  {
    "id": "wg25",
    "cat": "동사의 결합",
    "title": "자주 쓰는 동사 + 명사 · make / do",
    "lead": "한국어의 “하다”를 그대로 한 동사로 옮기지 말고 자연스러운 결합으로 외우세요.",
    "items": [
      {
        "term": "make a decision",
        "meaning": "결정하다",
        "usages": [
          "I made a decision yesterday."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "make a mistake",
        "meaning": "실수하다",
        "usages": [
          "I made a small mistake."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "make a reservation",
        "meaning": "예약하다",
        "usages": [
          "I made a dinner reservation."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "make progress",
        "meaning": "진전을 이루다",
        "usages": [
          "I’m making progress in English."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "make an effort",
        "meaning": "노력하다",
        "usages": [
          "I made an effort to arrive early."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "make a difference",
        "meaning": "차이를 만들다·도움이 되다",
        "usages": [
          "Small changes make a difference."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "do homework",
        "meaning": "숙제하다",
        "usages": [
          "I did my homework after dinner."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "do housework",
        "meaning": "집안일하다",
        "usages": [
          "I do housework on Sundays."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "do research",
        "meaning": "조사·연구하다",
        "usages": [
          "I did some research online."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "do the dishes",
        "meaning": "설거지하다",
        "usages": [
          "I did the dishes after dinner."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "do exercise",
        "meaning": "운동하다",
        "usages": [
          "I do some exercise every morning."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "do someone a favor",
        "meaning": "누군가의 부탁을 들어주다",
        "usages": [
          "Could you do me a favor?"
        ],
        "cat": "동사의 결합"
      }
    ]
  },
  {
    "id": "wg26",
    "cat": "동사의 결합",
    "title": "자주 쓰는 동사 + 명사 · have / take / get / go",
    "lead": "뜻이 넓은 기본 동사는 함께 쓰는 명사까지 통째로 익히면 말하기가 편해집니다.",
    "items": [
      {
        "term": "have breakfast",
        "meaning": "아침을 먹다",
        "usages": [
          "I have breakfast at seven."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "have a conversation",
        "meaning": "대화하다",
        "usages": [
          "We had a long conversation."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "have a good time",
        "meaning": "즐거운 시간을 보내다",
        "usages": [
          "We had a good time at the beach."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "take a break",
        "meaning": "쉬다",
        "usages": [
          "I took a short break."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "take a shower",
        "meaning": "샤워하다",
        "usages": [
          "I take a shower every morning."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "take a picture",
        "meaning": "사진 찍다",
        "usages": [
          "Could you take a picture of us?"
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "take a bus",
        "meaning": "버스를 타다",
        "usages": [
          "I usually take a bus to work."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "get ready",
        "meaning": "준비하다",
        "usages": [
          "I got ready for the trip."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "get lost",
        "meaning": "길을 잃다",
        "usages": [
          "I got lost in the city."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "get better",
        "meaning": "나아지다",
        "usages": [
          "My English is getting better."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "go shopping",
        "meaning": "쇼핑하러 가다",
        "usages": [
          "I went shopping with my sister."
        ],
        "cat": "동사의 결합"
      },
      {
        "term": "go for a walk",
        "meaning": "산책하러 가다",
        "usages": [
          "I go for a walk after dinner."
        ],
        "cat": "동사의 결합"
      }
    ]
  },
  {
    "id": "wg27",
    "cat": "전치사 조합",
    "title": "동사 + to",
    "lead": "to 뒤에는 대상·방향이 옵니다. look forward to의 to는 전치사이고, want to의 to는 부정사 표시입니다.",
    "items": [
      {
        "term": "listen to",
        "meaning": "~을 듣다",
        "usages": [
          "listen to a podcast"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "talk to",
        "meaning": "~에게 이야기하다",
        "usages": [
          "talk to a friend"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "speak to",
        "meaning": "~에게 말하다",
        "usages": [
          "speak to the manager"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "belong to",
        "meaning": "~의 소유이다",
        "usages": [
          "belong to my brother"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "reply to",
        "meaning": "~에 답하다",
        "usages": [
          "reply to an email"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "apologize to",
        "meaning": "~에게 사과하다",
        "usages": [
          "apologize to my neighbor"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "explain something to someone",
        "meaning": "누군가에게 무언가를 설명하다",
        "usages": [
          "explain the rules to me"
        ],
        "cat": "전치사 조합",
        "note": "explain me the rules가 기본 구조가 아님"
      },
      {
        "term": "introduce someone to someone",
        "meaning": "누군가를 다른 사람에게 소개하다",
        "usages": [
          "introduce my friend to my family"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "refer to",
        "meaning": "~을 가리키다·참조하다",
        "usages": [
          "refer to the guide"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "adjust to",
        "meaning": "~에 적응하다",
        "usages": [
          "adjust to a new schedule"
        ],
        "cat": "전치사 조합"
      }
    ]
  },
  {
    "id": "wg28",
    "cat": "전치사 조합",
    "title": "동사 + for",
    "lead": "기다리는 대상·목적·감사의 이유 등을 for와 묶어 기억하세요.",
    "items": [
      {
        "term": "wait for",
        "meaning": "~을 기다리다",
        "usages": [
          "wait for the train"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "look for",
        "meaning": "~을 찾다",
        "usages": [
          "look for a quiet café"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "ask for",
        "meaning": "~을 요청하다",
        "usages": [
          "ask for help"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "apply for",
        "meaning": "~에 지원·신청하다",
        "usages": [
          "apply for a job"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "pay for",
        "meaning": "~의 값을 지불하다",
        "usages": [
          "pay for dinner"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "prepare for",
        "meaning": "~을 준비하다",
        "usages": [
          "prepare for an interview"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "apologize for",
        "meaning": "~에 대해 사과하다",
        "usages": [
          "apologize for being late"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "thank someone for",
        "meaning": "누군가에게 ~에 감사하다",
        "usages": [
          "thank her for helping me"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "leave for",
        "meaning": "~을 향해 떠나다",
        "usages": [
          "leave for Busan"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "care for",
        "meaning": "~을 돌보다",
        "usages": [
          "care for an elderly relative"
        ],
        "cat": "전치사 조합",
        "note": "care about은 관심·중요하게 여김"
      }
    ]
  },
  {
    "id": "wg29",
    "cat": "전치사 조합",
    "title": "동사 + on / at",
    "lead": "대상에 집중하거나, 한 지점을 보거나, 어떤 것에 의존하는 결합입니다.",
    "items": [
      {
        "term": "depend on",
        "meaning": "~에 달려 있다·의지하다",
        "usages": [
          "depend on the weather"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "rely on",
        "meaning": "~을 믿고 의지하다",
        "usages": [
          "rely on my friends"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "focus on",
        "meaning": "~에 집중하다",
        "usages": [
          "focus on speaking"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "concentrate on",
        "meaning": "~에 집중하다",
        "usages": [
          "concentrate on my work"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "work on",
        "meaning": "~을 개선·작업하다",
        "usages": [
          "work on my pronunciation"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "spend money on",
        "meaning": "~에 돈을 쓰다",
        "usages": [
          "spend money on books"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "insist on",
        "meaning": "~을 고집하다",
        "usages": [
          "insist on paying"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "look at",
        "meaning": "~을 보다",
        "usages": [
          "look at the menu"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "laugh at",
        "meaning": "~을 보고 웃다",
        "usages": [
          "laugh at a joke"
        ],
        "cat": "전치사 조합",
        "note": "사람을 목적어로 쓰면 비웃다는 뜻이 될 수 있음"
      },
      {
        "term": "arrive at",
        "meaning": "작은 장소·지점에 도착하다",
        "usages": [
          "arrive at the station"
        ],
        "cat": "전치사 조합",
        "note": "도시·국가는 arrive in"
      }
    ]
  },
  {
    "id": "wg30",
    "cat": "전치사 조합",
    "title": "동사 + with / of / about",
    "lead": "사람·주제와 연결하는 전치사까지 소리 내어 말해 보세요.",
    "items": [
      {
        "term": "agree with",
        "meaning": "~에 동의하다",
        "usages": [
          "agree with your opinion"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "deal with",
        "meaning": "~을 처리하다",
        "usages": [
          "deal with a complaint"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "share something with",
        "meaning": "~와 나누다",
        "usages": [
          "share a room with my brother"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "provide someone with",
        "meaning": "누군가에게 ~을 제공하다",
        "usages": [
          "provide guests with towels"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "help someone with",
        "meaning": "누군가의 ~을 돕다",
        "usages": [
          "help me with my homework"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "think of",
        "meaning": "~을 떠올리다",
        "usages": [
          "think of a good idea"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "remind someone of",
        "meaning": "누군가에게 ~을 떠올리게 하다",
        "usages": [
          "remind me of my hometown"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "dream of",
        "meaning": "~을 꿈꾸다",
        "usages": [
          "dream of traveling abroad"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "talk about",
        "meaning": "~에 대해 말하다",
        "usages": [
          "talk about my weekend"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "complain about",
        "meaning": "~에 대해 불평하다",
        "usages": [
          "complain about the noise"
        ],
        "cat": "전치사 조합"
      }
    ]
  },
  {
    "id": "wg31",
    "cat": "전치사 조합",
    "title": "형용사 + of",
    "lead": "감정·확신·관심 상태를 of와 묶습니다.",
    "items": [
      {
        "term": "afraid of",
        "meaning": "~을 두려워하는",
        "usages": [
          "I’m afraid of heights."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "scared of",
        "meaning": "~을 무서워하는",
        "usages": [
          "I’m scared of spiders."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "proud of",
        "meaning": "~을 자랑스러워하는",
        "usages": [
          "I’m proud of my progress."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "tired of",
        "meaning": "~에 싫증 난",
        "usages": [
          "I’m tired of waiting."
        ],
        "cat": "전치사 조합",
        "note": "tired from은 원인으로 피곤해진 상태"
      },
      {
        "term": "full of",
        "meaning": "~로 가득한",
        "usages": [
          "The room is full of people."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "aware of",
        "meaning": "~을 알고 있는",
        "usages": [
          "I’m aware of the problem."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "capable of",
        "meaning": "~할 수 있는",
        "usages": [
          "She is capable of solving it."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "fond of",
        "meaning": "~을 좋아하는",
        "usages": [
          "I’m fond of old movies."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "sure of",
        "meaning": "~을 확신하는",
        "usages": [
          "I’m sure of the result."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "short of",
        "meaning": "~이 부족한",
        "usages": [
          "We’re short of time."
        ],
        "cat": "전치사 조합"
      }
    ]
  },
  {
    "id": "wg32",
    "cat": "전치사 조합",
    "title": "형용사 + about / with",
    "lead": "같은 형용사도 이유·대상이 달라지면 전치사가 달라질 수 있습니다.",
    "items": [
      {
        "term": "worried about",
        "meaning": "~을 걱정하는",
        "usages": [
          "I’m worried about the weather."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "excited about",
        "meaning": "~에 신난",
        "usages": [
          "I’m excited about the trip."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "nervous about",
        "meaning": "~을 긴장·걱정하는",
        "usages": [
          "I’m nervous about the test."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "curious about",
        "meaning": "~을 궁금해하는",
        "usages": [
          "I’m curious about local food."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "upset about",
        "meaning": "~ 때문에 속상한",
        "usages": [
          "I’m upset about the delay."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "angry about",
        "meaning": "~ 때문에 화난",
        "usages": [
          "I’m angry about the mistake."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "happy with",
        "meaning": "~에 만족하는",
        "usages": [
          "I’m happy with my new phone."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "satisfied with",
        "meaning": "~에 만족하는",
        "usages": [
          "I’m satisfied with the service."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "familiar with",
        "meaning": "~을 잘 아는",
        "usages": [
          "I’m familiar with this area."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "busy with",
        "meaning": "~으로 바쁜",
        "usages": [
          "I’m busy with work."
        ],
        "cat": "전치사 조합"
      }
    ]
  },
  {
    "id": "wg33",
    "cat": "전치사 조합",
    "title": "형용사 + to / for",
    "lead": "to는 대상·관계, for는 이유·역할과 자주 연결됩니다. 고정 결합으로 익히세요.",
    "items": [
      {
        "term": "similar to",
        "meaning": "~와 비슷한",
        "usages": [
          "It’s similar to my old phone."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "different from",
        "meaning": "~와 다른",
        "usages": [
          "It’s different from what I expected."
        ],
        "cat": "전치사 조합",
        "note": "different to/than도 지역·구조에 따라 쓰지만 기본은 from"
      },
      {
        "term": "close to",
        "meaning": "~에 가까운",
        "usages": [
          "My house is close to the station."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "kind to",
        "meaning": "~에게 친절한",
        "usages": [
          "She is kind to everyone."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "used to",
        "meaning": "~에 익숙한",
        "usages": [
          "I’m used to waking up early."
        ],
        "cat": "전치사 조합",
        "note": "be used to 뒤 명사·-ing"
      },
      {
        "term": "ready for",
        "meaning": "~할 준비가 된",
        "usages": [
          "I’m ready for the interview."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "famous for",
        "meaning": "~로 유명한",
        "usages": [
          "The city is famous for its food."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "responsible for",
        "meaning": "~에 책임이 있는",
        "usages": [
          "I’m responsible for the schedule."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "good for",
        "meaning": "~에 좋은",
        "usages": [
          "Walking is good for your health."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "grateful for",
        "meaning": "~에 감사하는",
        "usages": [
          "I’m grateful for your help."
        ],
        "cat": "전치사 조합"
      }
    ]
  },
  {
    "id": "wg34",
    "cat": "전치사 조합",
    "title": "형용사 + at / in / from",
    "lead": "잘하는 분야, 관심 분야, 변화의 출발점 등을 함께 기억하세요.",
    "items": [
      {
        "term": "good at",
        "meaning": "~을 잘하는",
        "usages": [
          "I’m good at cooking."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "bad at",
        "meaning": "~을 잘 못하는",
        "usages": [
          "I’m bad at remembering names."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "skilled at",
        "meaning": "~에 능숙한",
        "usages": [
          "She is skilled at solving problems."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "surprised at",
        "meaning": "~에 놀란",
        "usages": [
          "I was surprised at the price."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "amazed at",
        "meaning": "~에 몹시 놀란",
        "usages": [
          "I was amazed at the view."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "interested in",
        "meaning": "~에 관심 있는",
        "usages": [
          "I’m interested in photography."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "involved in",
        "meaning": "~에 관여하는",
        "usages": [
          "I’m involved in a local project."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "successful in",
        "meaning": "~에서 성공적인",
        "usages": [
          "She was successful in finding a job."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "absent from",
        "meaning": "~에 결석한·없는",
        "usages": [
          "He was absent from class."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "free from",
        "meaning": "~에서 벗어난",
        "usages": [
          "The room is free from smoke."
        ],
        "cat": "전치사 조합"
      }
    ]
  },
  {
    "id": "wg35",
    "cat": "전치사 조합",
    "title": "명사 + 전치사",
    "lead": "명사까지 바꾸면 전치사도 함께 확인합니다: interested in → an interest in.",
    "items": [
      {
        "term": "an interest in",
        "meaning": "~에 대한 관심",
        "usages": [
          "an interest in art"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "a reason for",
        "meaning": "~의 이유",
        "usages": [
          "a reason for the delay"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "a solution to",
        "meaning": "~의 해결책",
        "usages": [
          "a solution to the problem"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "an answer to",
        "meaning": "~의 답",
        "usages": [
          "an answer to the question"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "an invitation to",
        "meaning": "~으로의 초대",
        "usages": [
          "an invitation to a party"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "access to",
        "meaning": "~에 대한 접근·이용 권한",
        "usages": [
          "access to the internet"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "the difference between",
        "meaning": "~사이의 차이",
        "usages": [
          "the difference between these two plans"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "experience in",
        "meaning": "~분야의 경험",
        "usages": [
          "experience in customer service"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "a need for",
        "meaning": "~의 필요",
        "usages": [
          "a need for more space"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "a relationship with",
        "meaning": "~와의 관계",
        "usages": [
          "a good relationship with my neighbors"
        ],
        "cat": "전치사 조합"
      }
    ]
  },
  {
    "id": "wg36",
    "cat": "전치사 조합",
    "title": "시간·장소 전치사 · 대비해서 기억하기",
    "lead": "단어 하나보다 전체 표현을 외우세요. 세부 문법은 13번 전치사 강의에서 확인할 수 있습니다.",
    "items": [
      {
        "term": "at seven / on Monday / in July",
        "meaning": "시각 / 요일 / 월",
        "usages": [
          "at seven on Monday in July"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "in the morning / at night",
        "meaning": "아침에 / 밤에",
        "usages": [
          "I study in the morning and work at night."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "on time / in time",
        "meaning": "정시에 / 늦기 전에",
        "usages": [
          "The train was on time. / We arrived in time for dinner."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "for two years / since 2024",
        "meaning": "2년 동안 / 2024년부터",
        "usages": [
          "I’ve lived here for two years, since 2024."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "by Friday / until Friday",
        "meaning": "금요일까지 완료 / 금요일까지 계속",
        "usages": [
          "Finish it by Friday. / Stay here until Friday."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "at home / at work",
        "meaning": "집에서 / 직장에서",
        "usages": [
          "I’m at home, not at work."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "in a car / on a bus",
        "meaning": "승용차 안 / 버스 안",
        "usages": [
          "I was in a car. / I was on a bus."
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "at the station / in Seoul",
        "meaning": "역에서 / 서울에서",
        "usages": [
          "meet at the station / live in Seoul"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "on the table / in the bag",
        "meaning": "탁자 위 / 가방 안",
        "usages": [
          "on the table / in my bag"
        ],
        "cat": "전치사 조합"
      },
      {
        "term": "between two places / among friends",
        "meaning": "두 장소 사이 / 친구들 속",
        "usages": [
          "between the café and the bank / among friends"
        ],
        "cat": "전치사 조합",
        "note": "between은 여러 대상의 개별 관계에도 가능"
      }
    ]
  },
  {
    "id": "wg37",
    "cat": "헷갈리는 단어",
    "title": "듣기·보기·말하기 동사",
    "lead": "비슷한 번역이 나와도 목적어와 행동 방식이 다릅니다.",
    "items": [
      {
        "term": "hear ↔ listen to",
        "meaning": "소리가 들리다 ↔ 귀 기울여 듣다",
        "usages": [
          "I heard a noise. / I listened to music."
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "see ↔ look at",
        "meaning": "보이다·보다 ↔ 시선을 두다",
        "usages": [
          "I saw a bird. / I looked at the sky."
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "see ↔ watch",
        "meaning": "보다 ↔ 움직임을 지켜보다",
        "usages": [
          "see a mountain / watch a movie"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "say ↔ tell",
        "meaning": "말을 말하다 ↔ 사람에게 전달하다",
        "usages": [
          "say hello / tell me a story"
        ],
        "cat": "헷갈리는 단어",
        "note": "tell + 사람, say something to 사람"
      },
      {
        "term": "speak ↔ talk",
        "meaning": "말하다 ↔ 대화하다",
        "usages": [
          "speak English / talk with a friend"
        ],
        "cat": "헷갈리는 단어",
        "note": "두 단어가 겹치는 용법도 많음"
      },
      {
        "term": "ask ↔ ask for",
        "meaning": "질문하다 ↔ 요청하다",
        "usages": [
          "ask a question / ask for help"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "answer ↔ reply",
        "meaning": "대답하다 ↔ 답신하다",
        "usages": [
          "answer the question / reply to the email"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "explain ↔ describe",
        "meaning": "이유·과정을 설명하다 ↔ 모습·특징을 묘사하다",
        "usages": [
          "explain the rules / describe my room"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "mention ↔ discuss",
        "meaning": "간단히 언급하다 ↔ 자세히 논의하다",
        "usages": [
          "mention the issue / discuss the issue"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "shout ↔ whisper",
        "meaning": "외치다 ↔ 속삭이다",
        "usages": [
          "shout for help / whisper quietly"
        ],
        "cat": "헷갈리는 단어"
      }
    ]
  },
  {
    "id": "wg38",
    "cat": "헷갈리는 단어",
    "title": "이동·빌리기·돈 관련 동사",
    "lead": "행동의 방향과 누가 주고받는지를 함께 기억하세요.",
    "items": [
      {
        "term": "bring ↔ take",
        "meaning": "기준 지점으로 가져오다 ↔ 다른 곳으로 가져가다",
        "usages": [
          "Bring it here. / Take it home."
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "come ↔ go",
        "meaning": "기준 지점으로 오다 ↔ 다른 곳으로 가다",
        "usages": [
          "Come here. / Go there."
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "borrow ↔ lend",
        "meaning": "빌리다 ↔ 빌려주다",
        "usages": [
          "borrow a book from her / lend a book to her"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "rent ↔ lend",
        "meaning": "돈을 내고 빌리다 ↔ 빌려주다",
        "usages": [
          "rent a car / lend me your car"
        ],
        "cat": "헷갈리는 단어",
        "note": "rent out은 세를 주다"
      },
      {
        "term": "buy ↔ sell",
        "meaning": "사다 ↔ 팔다",
        "usages": [
          "buy a ticket / sell a bike"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "pay ↔ spend",
        "meaning": "값을 지불하다 ↔ 돈·시간을 쓰다",
        "usages": [
          "pay for lunch / spend money on lunch"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "cost ↔ spend",
        "meaning": "물건에 비용이 들다 ↔ 사람이 돈을 쓰다",
        "usages": [
          "It cost $20. / I spent $20 on it."
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "earn ↔ win",
        "meaning": "일해서 벌다 ↔ 경쟁·추첨에서 얻다",
        "usages": [
          "earn money / win a prize"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "save ↔ waste",
        "meaning": "아끼다·저축하다 ↔ 낭비하다",
        "usages": [
          "save time / waste money"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "arrive ↔ leave",
        "meaning": "도착하다 ↔ 떠나다",
        "usages": [
          "arrive at the hotel / leave the hotel"
        ],
        "cat": "헷갈리는 단어"
      }
    ]
  },
  {
    "id": "wg39",
    "cat": "헷갈리는 단어",
    "title": "일·학습·발견 동사",
    "lead": "서로 완전히 바꿔 쓸 수 없는 단어를 대비해서 익힙니다.",
    "items": [
      {
        "term": "learn ↔ study",
        "meaning": "배우고 익히다 ↔ 공부하다",
        "usages": [
          "learn to drive / study English"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "teach ↔ learn",
        "meaning": "가르치다 ↔ 배우다",
        "usages": [
          "teach someone English / learn English"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "know ↔ find out",
        "meaning": "이미 알다 ↔ 알아내다",
        "usages": [
          "I know the answer. / I found out the reason."
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "look for ↔ find",
        "meaning": "찾는 중이다 ↔ 찾아내다",
        "usages": [
          "I looked for my keys and found them."
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "remember ↔ remind",
        "meaning": "스스로 기억하다 ↔ 상기시키다",
        "usages": [
          "I remember it. / Remind me to call."
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "job ↔ work",
        "meaning": "개별 일자리·일 ↔ 일·업무의 양",
        "usages": [
          "a new job / a lot of work"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "win ↔ beat",
        "meaning": "경기·상을 이기거나 얻다 ↔ 상대를 이기다",
        "usages": [
          "win the game / beat the other team"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "raise ↔ rise",
        "meaning": "대상을 올리다 ↔ 스스로 오르다",
        "usages": [
          "raise the price / prices rise"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "lay ↔ lie",
        "meaning": "대상을 눕혀 놓다 ↔ 스스로 눕다",
        "usages": [
          "lay the book down / lie on the bed"
        ],
        "cat": "헷갈리는 단어",
        "note": "과거형 laid / lay를 구분"
      },
      {
        "term": "lose ↔ miss",
        "meaning": "잃다·패하다 ↔ 놓치다·그리워하다",
        "usages": [
          "lose my keys / miss the bus"
        ],
        "cat": "헷갈리는 단어"
      }
    ]
  },
  {
    "id": "wg40",
    "cat": "헷갈리는 단어",
    "title": "닮은 철자·발음 · 기본",
    "lead": "철자 하나와 품사를 같이 확인하세요.",
    "items": [
      {
        "term": "advice ↔ advise",
        "meaning": "조언(명사) ↔ 조언하다(동사)",
        "usages": [
          "give advice / advise me to rest"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "practice ↔ practical",
        "meaning": "연습(명사·동사) ↔ 실용적인",
        "usages": [
          "speaking practice / a practical idea"
        ],
        "cat": "헷갈리는 단어",
        "note": "practice가 동사인 것은 미국식, 영국식 동사는 practise"
      },
      {
        "term": "stationery ↔ stationary",
        "meaning": "문구류 ↔ 움직이지 않는",
        "usages": [
          "buy stationery / a stationary bike"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "personal ↔ personnel",
        "meaning": "개인적인 ↔ 직원들·인사",
        "usages": [
          "personal information / personnel department"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "quiet ↔ quite",
        "meaning": "조용한 ↔ 꽤",
        "usages": [
          "a quiet room / quite nice"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "loose ↔ lose",
        "meaning": "느슨한 ↔ 잃다",
        "usages": [
          "a loose shirt / lose my wallet"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "desert ↔ dessert",
        "meaning": "사막 ↔ 후식",
        "usages": [
          "a hot desert / have dessert"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "principal ↔ principle",
        "meaning": "교장·주요한 ↔ 원칙",
        "usages": [
          "the school principal / a basic principle"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "accept ↔ except",
        "meaning": "받아들이다 ↔ ~을 제외하고",
        "usages": [
          "accept an offer / everyone except me"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "affect ↔ effect",
        "meaning": "영향을 주다 ↔ 영향·효과",
        "usages": [
          "affect my mood / have an effect on me"
        ],
        "cat": "헷갈리는 단어",
        "note": "effect가 동사인 별도 용법도 있지만 기본 대비"
      }
    ]
  },
  {
    "id": "wg41",
    "cat": "헷갈리는 단어",
    "title": "닮은 철자·발음 · 생활",
    "lead": "아래 짝을 실제 문장 속에서 구분해 보세요.",
    "items": [
      {
        "term": "later ↔ latter",
        "meaning": "나중에 ↔ 둘 중 후자",
        "usages": [
          "see you later / the latter option"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "weather ↔ whether",
        "meaning": "날씨 ↔ ~인지 여부",
        "usages": [
          "nice weather / whether it rains"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "beside ↔ besides",
        "meaning": "~옆에 ↔ ~외에도",
        "usages": [
          "sit beside me / besides English"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "besides ↔ except",
        "meaning": "~도 추가로 ↔ ~만 제외하고",
        "usages": [
          "Besides tea, we have coffee. / Everyone came except Tom."
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "close ↔ closed",
        "meaning": "가까운·닫다 ↔ 닫힌",
        "usages": [
          "close to home / The shop is closed."
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "economic ↔ economical",
        "meaning": "경제의 ↔ 경제적·절약되는",
        "usages": [
          "economic growth / an economical car"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "sensible ↔ sensitive",
        "meaning": "분별 있는 ↔ 민감한",
        "usages": [
          "a sensible choice / sensitive skin"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "historic ↔ historical",
        "meaning": "역사적으로 중요한 ↔ 역사와 관련된",
        "usages": [
          "a historic event / a historical novel"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "valuable ↔ invaluable",
        "meaning": "가치 있는 ↔ 매우 귀중한",
        "usages": [
          "valuable information / invaluable advice"
        ],
        "cat": "헷갈리는 단어",
        "note": "invaluable은 가치 없다는 뜻이 아님"
      },
      {
        "term": "fun ↔ funny",
        "meaning": "재미·즐거운 ↔ 우스운",
        "usages": [
          "The trip was fun. / The joke was funny."
        ],
        "cat": "헷갈리는 단어"
      }
    ]
  },
  {
    "id": "wg42",
    "cat": "헷갈리는 단어",
    "title": "비슷한 형용사 · 사람이 느끼는 상태",
    "lead": "문맥이 겹칠 수 있지만 기본 차이를 구분하면 설명이 정확해집니다.",
    "items": [
      {
        "term": "alone ↔ lonely",
        "meaning": "혼자 있는 ↔ 외로운",
        "usages": [
          "I was alone, but I wasn’t lonely."
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "tired ↔ sleepy",
        "meaning": "피곤한 ↔ 졸린",
        "usages": [
          "tired after work / sleepy before bed"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "afraid ↔ nervous",
        "meaning": "두려운 ↔ 긴장한",
        "usages": [
          "afraid of dogs / nervous about a test"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "angry ↔ upset",
        "meaning": "화난 ↔ 속상한·마음이 불편한",
        "usages": [
          "angry about the mistake / upset about the news"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "jealous ↔ envious",
        "meaning": "잃을까 질투하는 ↔ 남의 것을 부러워하는",
        "usages": [
          "jealous of his attention to others / envious of her success"
        ],
        "cat": "헷갈리는 단어",
        "note": "회화에서는 의미가 겹치기도 함"
      },
      {
        "term": "embarrassed ↔ ashamed",
        "meaning": "당황·민망한 ↔ 잘못을 부끄러워하는",
        "usages": [
          "embarrassed by a mistake / ashamed of lying"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "confident ↔ certain",
        "meaning": "자신감 있는 ↔ 확신하는",
        "usages": [
          "confident about speaking / certain of the answer"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "calm ↔ relaxed",
        "meaning": "침착한 ↔ 긴장이 풀린",
        "usages": [
          "stay calm in an emergency / feel relaxed at home"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "interested ↔ curious",
        "meaning": "관심이 있는 ↔ 알고 싶은",
        "usages": [
          "interested in music / curious about the result"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "comfortable ↔ convenient",
        "meaning": "편안한 ↔ 이용하기 편리한",
        "usages": [
          "a comfortable chair / a convenient location"
        ],
        "cat": "헷갈리는 단어"
      }
    ]
  },
  {
    "id": "wg43",
    "cat": "헷갈리는 단어",
    "title": "비슷한 형용사 · 장소·물건",
    "lead": "같은 “크다·작다·좋다”로 번역해도 어떤 대상을 꾸미는지 다릅니다.",
    "items": [
      {
        "term": "big ↔ large",
        "meaning": "큰 ↔ 크기가 큰",
        "usages": [
          "a big problem / a large room"
        ],
        "cat": "헷갈리는 단어",
        "note": "크기에서는 둘 다 가능, 결합은 다를 수 있음"
      },
      {
        "term": "high ↔ tall",
        "meaning": "수준·위치가 높은 ↔ 세로로 긴",
        "usages": [
          "a high price / a tall building"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "low ↔ short",
        "meaning": "수준·위치가 낮은 ↔ 길이·키가 짧은",
        "usages": [
          "a low price / a short person"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "small ↔ little",
        "meaning": "크기가 작은 ↔ 작은·어린·정감의",
        "usages": [
          "a small room / a little child"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "cheap ↔ inexpensive",
        "meaning": "싼·품질이 낮은 ↔ 가격이 비싸지 않은",
        "usages": [
          "a cheap-looking bag / an inexpensive meal"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "expensive ↔ valuable",
        "meaning": "가격이 비싼 ↔ 가치가 있는",
        "usages": [
          "an expensive watch / valuable advice"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "old ↔ antique",
        "meaning": "오래된 ↔ 골동품의",
        "usages": [
          "an old phone / an antique chair"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "clean ↔ clear",
        "meaning": "깨끗한 ↔ 맑은·명확한",
        "usages": [
          "a clean room / clear water"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "empty ↔ vacant",
        "meaning": "비어 있는 ↔ 비어 있어 이용 가능한",
        "usages": [
          "an empty bottle / a vacant room"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "crowded ↔ busy",
        "meaning": "사람이 붐비는 ↔ 바쁜·활기 있는",
        "usages": [
          "a crowded bus / a busy street"
        ],
        "cat": "헷갈리는 단어"
      }
    ]
  },
  {
    "id": "wg44",
    "cat": "헷갈리는 단어",
    "title": "수량·시간 표현 · 의미 차이",
    "lead": "작은 형태 차이가 말하려는 뜻을 바꿉니다.",
    "items": [
      {
        "term": "a few ↔ few",
        "meaning": "몇 개는 있는 ↔ 거의 없는",
        "usages": [
          "a few friends / few friends"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "a little ↔ little",
        "meaning": "조금은 있는 ↔ 거의 없는",
        "usages": [
          "a little time / little time"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "some ↔ any",
        "meaning": "몇몇·약간 ↔ 어떤 것이든·부정문의 조금도",
        "usages": [
          "some water / don’t have any water"
        ],
        "cat": "헷갈리는 단어",
        "note": "제안·요청 질문에는 some도 가능"
      },
      {
        "term": "many ↔ much",
        "meaning": "셀 수 있는 수가 많은 ↔ 셀 수 없는 양이 많은",
        "usages": [
          "many bags / much luggage"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "each ↔ every",
        "meaning": "각각을 강조 ↔ 전체의 모든 하나",
        "usages": [
          "each student / every student"
        ],
        "cat": "헷갈리는 단어",
        "note": "뒤 단수 명사·단수 동사"
      },
      {
        "term": "another ↔ other",
        "meaning": "또 다른 하나 ↔ 다른",
        "usages": [
          "another cup / other cups"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "the other ↔ others",
        "meaning": "둘 중 나머지 하나·특정 나머지 ↔ 다른 것들",
        "usages": [
          "one hand and the other / help others"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "already ↔ yet",
        "meaning": "이미 ↔ 아직·벌써",
        "usages": [
          "already finished / haven’t finished yet"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "still ↔ anymore",
        "meaning": "여전히 ↔ 이제 더는(부정문)",
        "usages": [
          "still live here / don’t live here anymore"
        ],
        "cat": "헷갈리는 단어"
      },
      {
        "term": "sometime ↔ sometimes",
        "meaning": "언젠가 ↔ 가끔",
        "usages": [
          "meet sometime next week / sometimes walk to work"
        ],
        "cat": "헷갈리는 단어"
      }
    ]
  },
  {
    "id": "wg45",
    "cat": "뜻의 관계",
    "title": "반의어 · 기분과 성격",
    "lead": "반대말을 짝지어 사람과 기분의 변화를 설명하세요.",
    "items": [
      {
        "term": "happy ↔ sad",
        "meaning": "행복한 ↔ 슬픈",
        "usages": [
          "feel happy / feel sad"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "calm ↔ anxious",
        "meaning": "침착한 ↔ 불안한",
        "usages": [
          "stay calm / feel anxious"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "confident ↔ insecure",
        "meaning": "자신감 있는 ↔ 자신이 없는",
        "usages": [
          "feel confident / feel insecure"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "patient ↔ impatient",
        "meaning": "참을성 있는 ↔ 조급한",
        "usages": [
          "a patient teacher / an impatient customer"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "polite ↔ rude",
        "meaning": "공손한 ↔ 무례한",
        "usages": [
          "a polite request / a rude comment"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "generous ↔ selfish",
        "meaning": "너그러운 ↔ 이기적인",
        "usages": [
          "a generous person / selfish behavior"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "honest ↔ dishonest",
        "meaning": "정직한 ↔ 부정직한",
        "usages": [
          "an honest answer / a dishonest excuse"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "optimistic ↔ pessimistic",
        "meaning": "낙관적인 ↔ 비관적인",
        "usages": [
          "optimistic about the future / pessimistic about it"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "friendly ↔ unfriendly",
        "meaning": "친근한 ↔ 불친절한",
        "usages": [
          "friendly staff / an unfriendly neighbor"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "outgoing ↔ shy",
        "meaning": "사교적인 ↔ 수줍은",
        "usages": [
          "an outgoing person / a shy child"
        ],
        "cat": "뜻의 관계"
      }
    ]
  },
  {
    "id": "wg46",
    "cat": "뜻의 관계",
    "title": "반의어 · 장소·품질·상태",
    "lead": "내 집·동네·여행지를 비교할 때 쓰기 좋은 묶음입니다.",
    "items": [
      {
        "term": "clean ↔ dirty",
        "meaning": "깨끗한 ↔ 더러운",
        "usages": [
          "a clean kitchen / dirty dishes"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "quiet ↔ noisy",
        "meaning": "조용한 ↔ 시끄러운",
        "usages": [
          "a quiet café / a noisy street"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "safe ↔ dangerous",
        "meaning": "안전한 ↔ 위험한",
        "usages": [
          "a safe area / a dangerous road"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "modern ↔ traditional",
        "meaning": "현대적인 ↔ 전통적인",
        "usages": [
          "a modern building / a traditional house"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "spacious ↔ cramped",
        "meaning": "널찍한 ↔ 비좁은",
        "usages": [
          "a spacious room / a cramped apartment"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "bright ↔ dark",
        "meaning": "밝은 ↔ 어두운",
        "usages": [
          "a bright room / a dark hallway"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "convenient ↔ inconvenient",
        "meaning": "편리한 ↔ 불편한",
        "usages": [
          "convenient transport / an inconvenient location"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "comfortable ↔ uncomfortable",
        "meaning": "편안한 ↔ 불편한",
        "usages": [
          "a comfortable sofa / uncomfortable shoes"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "fresh ↔ stale",
        "meaning": "신선한 ↔ 오래되어 신선하지 않은",
        "usages": [
          "fresh bread / stale bread"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "available ↔ unavailable",
        "meaning": "이용 가능한 ↔ 이용 불가능한",
        "usages": [
          "available seats / unavailable rooms"
        ],
        "cat": "뜻의 관계"
      }
    ]
  },
  {
    "id": "wg47",
    "cat": "뜻의 관계",
    "title": "반의어 · 행동과 변화",
    "lead": "과거·현재를 대비하거나 변화의 방향을 말할 수 있습니다.",
    "items": [
      {
        "term": "increase ↔ decrease",
        "meaning": "증가하다 ↔ 감소하다",
        "usages": [
          "prices increased / traffic decreased"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "improve ↔ worsen",
        "meaning": "나아지다 ↔ 악화되다",
        "usages": [
          "my English improved / the weather worsened"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "include ↔ exclude",
        "meaning": "포함하다 ↔ 제외하다",
        "usages": [
          "include breakfast / exclude extra fees"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "accept ↔ reject",
        "meaning": "받아들이다 ↔ 거절하다",
        "usages": [
          "accept an offer / reject a proposal"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "remember ↔ forget",
        "meaning": "기억하다 ↔ 잊다",
        "usages": [
          "remember a name / forget a password"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "save ↔ waste",
        "meaning": "아끼다 ↔ 낭비하다",
        "usages": [
          "save energy / waste time"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "connect ↔ disconnect",
        "meaning": "연결하다 ↔ 연결을 끊다",
        "usages": [
          "connect to Wi-Fi / disconnect the cable"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "start ↔ finish",
        "meaning": "시작하다 ↔ 마치다",
        "usages": [
          "start a project / finish a task"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "enter ↔ leave",
        "meaning": "들어가다 ↔ 떠나다",
        "usages": [
          "enter the room / leave the building"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "allow ↔ forbid",
        "meaning": "허락하다 ↔ 금지하다",
        "usages": [
          "allow visitors / forbid smoking"
        ],
        "cat": "뜻의 관계"
      }
    ]
  },
  {
    "id": "wg48",
    "cat": "뜻의 관계",
    "title": "비슷한 뜻 · 좋다·나쁘다의 구체화",
    "lead": "완전한 동의어가 아닙니다. 무엇이 좋은지 구체적인 기준으로 바꾸어 말하세요.",
    "items": [
      {
        "term": "good → useful",
        "meaning": "좋은 → 쓸모가 있는",
        "usages": [
          "a useful app"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "good → enjoyable",
        "meaning": "좋은 → 즐길 만한",
        "usages": [
          "an enjoyable trip"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "good → impressive",
        "meaning": "좋은 → 인상적인",
        "usages": [
          "an impressive performance"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "good → reliable",
        "meaning": "좋은 → 믿을 만한",
        "usages": [
          "a reliable friend"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "good → efficient",
        "meaning": "좋은 → 효율적인",
        "usages": [
          "an efficient system"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "bad → inconvenient",
        "meaning": "나쁜 → 이용하기 불편한",
        "usages": [
          "an inconvenient schedule"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "bad → disappointing",
        "meaning": "나쁜 → 실망스러운",
        "usages": [
          "a disappointing meal"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "bad → unpleasant",
        "meaning": "나쁜 → 불쾌한",
        "usages": [
          "an unpleasant smell"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "bad → unreliable",
        "meaning": "나쁜 → 믿기 어려운",
        "usages": [
          "an unreliable service"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "bad → exhausting",
        "meaning": "나쁜 → 몹시 지치게 하는",
        "usages": [
          "an exhausting day"
        ],
        "cat": "뜻의 관계"
      }
    ]
  },
  {
    "id": "wg49",
    "cat": "뜻의 관계",
    "title": "비슷한 뜻 · 크기·속도·변화",
    "lead": "같은 대상을 꾸밀 수 있는지 확인하세요. 아래 표현은 바꿔 말하기의 출발점입니다.",
    "items": [
      {
        "term": "very big → huge",
        "meaning": "아주 큰 → 거대한",
        "usages": [
          "a huge building"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "very small → tiny",
        "meaning": "아주 작은 → 조그마한",
        "usages": [
          "a tiny kitchen"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "very tired → exhausted",
        "meaning": "아주 피곤한 → 녹초가 된",
        "usages": [
          "I felt exhausted."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "very hungry → starving",
        "meaning": "아주 배고픈 → 몹시 배고픈",
        "usages": [
          "I’m starving."
        ],
        "cat": "뜻의 관계",
        "note": "회화의 과장 표현"
      },
      {
        "term": "very cold → freezing",
        "meaning": "아주 추운 → 몹시 추운",
        "usages": [
          "It was freezing outside."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "very hot → boiling",
        "meaning": "아주 더운 → 몹시 더운",
        "usages": [
          "It was boiling hot."
        ],
        "cat": "뜻의 관계",
        "note": "회화의 과장 표현"
      },
      {
        "term": "very surprised → amazed",
        "meaning": "아주 놀란 → 몹시 놀란",
        "usages": [
          "I was amazed by the view."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "very scared → terrified",
        "meaning": "아주 무서운 → 몹시 겁먹은",
        "usages": [
          "I was terrified."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "very happy → delighted",
        "meaning": "아주 기쁜 → 매우 기쁜",
        "usages": [
          "I was delighted to hear that."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "very angry → furious",
        "meaning": "아주 화난 → 격노한",
        "usages": [
          "He was furious about the delay."
        ],
        "cat": "뜻의 관계"
      }
    ]
  },
  {
    "id": "wg50",
    "cat": "뜻의 관계",
    "title": "정도·빈도 · 강도를 조절하는 말",
    "lead": "기분과 습관을 너무 단정하지 않고 강도를 조절해 설명하세요.",
    "items": [
      {
        "term": "slightly",
        "meaning": "약간",
        "usages": [
          "slightly different"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "a bit / a little",
        "meaning": "조금",
        "usages": [
          "a bit tired / a little nervous"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "fairly",
        "meaning": "꽤·어느 정도",
        "usages": [
          "fairly easy"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "quite",
        "meaning": "꽤·상당히",
        "usages": [
          "quite busy"
        ],
        "cat": "뜻의 관계",
        "note": "형용사 종류·문맥·지역에 따라 강도가 달라짐"
      },
      {
        "term": "really",
        "meaning": "정말·매우",
        "usages": [
          "really helpful"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "extremely",
        "meaning": "극도로",
        "usages": [
          "extremely crowded"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "almost",
        "meaning": "거의",
        "usages": [
          "almost finished"
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "always",
        "meaning": "항상",
        "usages": [
          "I always have breakfast."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "usually",
        "meaning": "보통",
        "usages": [
          "I usually walk to work."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "often",
        "meaning": "자주",
        "usages": [
          "I often eat out."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "sometimes",
        "meaning": "가끔",
        "usages": [
          "I sometimes cook."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "rarely / hardly ever",
        "meaning": "드물게·거의 안",
        "usages": [
          "I rarely watch TV."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "never",
        "meaning": "전혀·한 번도 안",
        "usages": [
          "I never smoke."
        ],
        "cat": "뜻의 관계"
      }
    ]
  },
  {
    "id": "wg51",
    "cat": "뜻의 관계",
    "title": "명사 + 동사 · 일어나는 일",
    "lead": "주어를 바꾸면 동사도 자연스럽게 달라집니다. 상황 묘사에 자주 쓰는 결합입니다.",
    "items": [
      {
        "term": "an alarm goes off",
        "meaning": "알람이 울리다",
        "usages": [
          "My alarm didn’t go off."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "a phone rings",
        "meaning": "전화벨이 울리다",
        "usages": [
          "My phone rang during dinner."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "a battery runs out",
        "meaning": "배터리가 다 되다",
        "usages": [
          "My phone’s battery ran out."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "a car breaks down",
        "meaning": "차가 고장 나다",
        "usages": [
          "Our car broke down."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "a train arrives",
        "meaning": "기차가 도착하다",
        "usages": [
          "The train arrived late."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "a meeting takes place",
        "meaning": "회의가 열리다",
        "usages": [
          "The meeting took place online."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "a problem comes up",
        "meaning": "문제가 생기다",
        "usages": [
          "A problem came up at work."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "prices go up",
        "meaning": "가격이 오르다",
        "usages": [
          "Prices went up last year."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "the weather clears up",
        "meaning": "날씨가 개다",
        "usages": [
          "The weather cleared up."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "a dream comes true",
        "meaning": "꿈이 이루어지다",
        "usages": [
          "My dream finally came true."
        ],
        "cat": "뜻의 관계"
      }
    ]
  },
  {
    "id": "wg52",
    "cat": "뜻의 관계",
    "title": "형용사 + 명사 · 자연스러운 조합",
    "lead": "직역보다 영어에서 자주 붙는 조합을 통째로 외우세요.",
    "items": [
      {
        "term": "heavy traffic",
        "meaning": "교통량이 많음·교통 정체",
        "usages": [
          "There was heavy traffic."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "heavy rain",
        "meaning": "폭우",
        "usages": [
          "We had heavy rain."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "strong wind",
        "meaning": "강풍",
        "usages": [
          "There was a strong wind."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "strong coffee",
        "meaning": "진한 커피",
        "usages": [
          "I like strong coffee."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "close friend",
        "meaning": "친한 친구",
        "usages": [
          "She is a close friend."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "deep sleep",
        "meaning": "깊은 잠",
        "usages": [
          "I fell into a deep sleep."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "free time",
        "meaning": "여가 시간",
        "usages": [
          "I read in my free time."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "fresh air",
        "meaning": "신선한 공기",
        "usages": [
          "I went outside for some fresh air."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "public transport",
        "meaning": "대중교통",
        "usages": [
          "I usually use public transport."
        ],
        "cat": "뜻의 관계"
      },
      {
        "term": "local food",
        "meaning": "현지 음식",
        "usages": [
          "I tried some local food."
        ],
        "cat": "뜻의 관계"
      }
    ]
  },
  {
    "id": "wg53",
    "cat": "형태와 불규칙",
    "title": "불규칙 동사 · 원형·과거·분사가 같은 것",
    "lead": "과거 경험과 현재완료에서 형태가 그대로인 동사입니다. read는 철자는 같고 발음은 달라집니다.",
    "items": [
      {
        "term": "cut → cut → cut",
        "meaning": "자르다",
        "usages": [
          "I cut vegetables yesterday."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "put → put → put",
        "meaning": "놓다",
        "usages": [
          "I put my bag on the chair."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "let → let → let",
        "meaning": "허락하다",
        "usages": [
          "She let me use her phone."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "hit → hit → hit",
        "meaning": "치다·부딪치다",
        "usages": [
          "The ball hit the window."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "hurt → hurt → hurt",
        "meaning": "다치게 하다·아프다",
        "usages": [
          "I hurt my knee."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "set → set → set",
        "meaning": "설정·놓다",
        "usages": [
          "I set an alarm."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "cost → cost → cost",
        "meaning": "비용이 들다",
        "usages": [
          "The ticket cost $20."
        ],
        "cat": "형태와 불규칙",
        "note": "비용 산정하다라는 별도 의미에는 costed가 쓰이기도 함"
      },
      {
        "term": "shut → shut → shut",
        "meaning": "닫다",
        "usages": [
          "I shut the door."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "spread → spread → spread",
        "meaning": "퍼지다·펼치다",
        "usages": [
          "The news spread quickly."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "read → read → read",
        "meaning": "읽다",
        "usages": [
          "I read a book yesterday."
        ],
        "cat": "형태와 불규칙",
        "note": "원형 /riːd/, 과거·분사 /red/"
      }
    ]
  },
  {
    "id": "wg54",
    "cat": "형태와 불규칙",
    "title": "불규칙 동사 · 과거와 분사가 같은 것 1",
    "lead": "have + 과거분사에서도 같은 형태를 씁니다.",
    "items": [
      {
        "term": "buy → bought → bought",
        "meaning": "사다",
        "usages": [
          "I bought a new phone."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "bring → brought → brought",
        "meaning": "가져오다",
        "usages": [
          "I brought some snacks."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "think → thought → thought",
        "meaning": "생각하다",
        "usages": [
          "I thought it was easy."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "catch → caught → caught",
        "meaning": "잡다·교통편을 타다",
        "usages": [
          "I caught the last bus."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "teach → taught → taught",
        "meaning": "가르치다",
        "usages": [
          "She taught me to cook."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "feel → felt → felt",
        "meaning": "느끼다",
        "usages": [
          "I felt nervous."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "keep → kept → kept",
        "meaning": "유지하다",
        "usages": [
          "I kept practicing."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "leave → left → left",
        "meaning": "떠나다·남기다",
        "usages": [
          "I left home early."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "sleep → slept → slept",
        "meaning": "자다",
        "usages": [
          "I slept well."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "meet → met → met",
        "meaning": "만나다",
        "usages": [
          "I met an old friend."
        ],
        "cat": "형태와 불규칙"
      }
    ]
  },
  {
    "id": "wg55",
    "cat": "형태와 불규칙",
    "title": "불규칙 동사 · 과거와 분사가 같은 것 2",
    "lead": "OPIc 과거 경험에 자주 쓰는 기본 동사입니다.",
    "items": [
      {
        "term": "make → made → made",
        "meaning": "만들다",
        "usages": [
          "I made dinner."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "have → had → had",
        "meaning": "가지다·먹다",
        "usages": [
          "I had a great time."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "find → found → found",
        "meaning": "찾아내다",
        "usages": [
          "I found a nice café."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "hear → heard → heard",
        "meaning": "듣다",
        "usages": [
          "I heard a strange noise."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "say → said → said",
        "meaning": "말하다",
        "usages": [
          "She said hello."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "tell → told → told",
        "meaning": "말해주다",
        "usages": [
          "He told me a story."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "sell → sold → sold",
        "meaning": "팔다",
        "usages": [
          "I sold my old bike."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "send → sent → sent",
        "meaning": "보내다",
        "usages": [
          "I sent an email."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "spend → spent → spent",
        "meaning": "쓰다·보내다",
        "usages": [
          "I spent the day at home."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "lose → lost → lost",
        "meaning": "잃다",
        "usages": [
          "I lost my wallet."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "build → built → built",
        "meaning": "짓다",
        "usages": [
          "They built a new station."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "pay → paid → paid",
        "meaning": "지불하다",
        "usages": [
          "I paid by card."
        ],
        "cat": "형태와 불규칙"
      }
    ]
  },
  {
    "id": "wg56",
    "cat": "형태와 불규칙",
    "title": "불규칙 동사 · 과거와 분사가 다른 것",
    "lead": "I went와 I have gone을 구분하려고 세 형태를 함께 외우세요.",
    "items": [
      {
        "term": "go → went → gone",
        "meaning": "가다",
        "usages": [
          "I went there. / She has gone home."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "come → came → come",
        "meaning": "오다",
        "usages": [
          "He came early. / He has come back."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "see → saw → seen",
        "meaning": "보다",
        "usages": [
          "I saw it. / I’ve seen it before."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "take → took → taken",
        "meaning": "가져가다·타다",
        "usages": [
          "I took a bus. / I’ve taken that bus."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "give → gave → given",
        "meaning": "주다",
        "usages": [
          "She gave me advice. / She has given me advice."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "eat → ate → eaten",
        "meaning": "먹다",
        "usages": [
          "I ate lunch. / I’ve eaten already."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "drink → drank → drunk",
        "meaning": "마시다",
        "usages": [
          "I drank coffee. / I’ve drunk enough water."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "write → wrote → written",
        "meaning": "쓰다",
        "usages": [
          "I wrote a note. / I’ve written it down."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "speak → spoke → spoken",
        "meaning": "말하다",
        "usages": [
          "I spoke to her. / I’ve spoken to her."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "choose → chose → chosen",
        "meaning": "선택하다",
        "usages": [
          "I chose this one. / I’ve chosen a topic."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "drive → drove → driven",
        "meaning": "운전하다",
        "usages": [
          "I drove home. / I’ve driven there before."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "break → broke → broken",
        "meaning": "깨다·고장 나다",
        "usages": [
          "It broke. / It has broken down."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "begin → began → begun",
        "meaning": "시작하다",
        "usages": [
          "It began yesterday. / It has begun."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "forget → forgot → forgotten",
        "meaning": "잊다",
        "usages": [
          "I forgot it. / I’ve forgotten the name."
        ],
        "cat": "형태와 불규칙"
      }
    ]
  },
  {
    "id": "wg57",
    "cat": "형태와 불규칙",
    "title": "감정 형용사 · -ed ↔ -ing",
    "lead": "-ed는 감정을 느끼는 상태, -ing는 그 감정을 일으키는 성질입니다. 사람도 상황을 지루하게 만들면 boring이라고 할 수 있습니다.",
    "items": [
      {
        "term": "interested ↔ interesting",
        "meaning": "흥미를 느끼는 ↔ 흥미를 끄는",
        "usages": [
          "I was interested. / The story was interesting."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "bored ↔ boring",
        "meaning": "지루함을 느끼는 ↔ 지루하게 하는",
        "usages": [
          "I was bored. / The lecture was boring."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "excited ↔ exciting",
        "meaning": "신난 ↔ 신나게 하는",
        "usages": [
          "I was excited. / The trip was exciting."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "tired ↔ tiring",
        "meaning": "피곤한 ↔ 피곤하게 하는",
        "usages": [
          "I was tired. / The work was tiring."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "relaxed ↔ relaxing",
        "meaning": "긴장이 풀린 ↔ 긴장을 풀어주는",
        "usages": [
          "I felt relaxed. / The music was relaxing."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "surprised ↔ surprising",
        "meaning": "놀란 ↔ 놀라게 하는",
        "usages": [
          "I was surprised. / The result was surprising."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "disappointed ↔ disappointing",
        "meaning": "실망한 ↔ 실망스러운",
        "usages": [
          "I was disappointed. / The meal was disappointing."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "confused ↔ confusing",
        "meaning": "혼란스러운 상태의 ↔ 헷갈리게 하는",
        "usages": [
          "I was confused. / The instructions were confusing."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "frightened ↔ frightening",
        "meaning": "겁먹은 ↔ 무서운",
        "usages": [
          "I was frightened. / The noise was frightening."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "embarrassed ↔ embarrassing",
        "meaning": "민망한 ↔ 민망하게 만드는",
        "usages": [
          "I was embarrassed. / It was embarrassing."
        ],
        "cat": "형태와 불규칙"
      }
    ]
  },
  {
    "id": "wg58",
    "cat": "형태와 불규칙",
    "title": "비교급·최상급 · 기본과 예외",
    "lead": "두 대상을 비교하는 표현까지 함께 외우세요. 모든 형용사에 -er를 붙이지 않습니다.",
    "items": [
      {
        "term": "good → better → best",
        "meaning": "좋은 → 더 좋은 → 가장 좋은",
        "usages": [
          "This one is better."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "bad → worse → worst",
        "meaning": "나쁜 → 더 나쁜 → 가장 나쁜",
        "usages": [
          "The weather got worse."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "far → farther/further → farthest/furthest",
        "meaning": "먼 → 더 먼 → 가장 먼",
        "usages": [
          "It’s farther away."
        ],
        "cat": "형태와 불규칙",
        "note": "물리적 거리는 둘 다 가능, further는 추가적인 뜻도 있음"
      },
      {
        "term": "little → less → least",
        "meaning": "양이 적은 → 더 적은 → 가장 적은",
        "usages": [
          "I have less time."
        ],
        "cat": "형태와 불규칙",
        "note": "작은 크기의 little과 구분"
      },
      {
        "term": "many/much → more → most",
        "meaning": "많은 → 더 많은 → 가장 많은",
        "usages": [
          "more people / more time"
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "big → bigger → biggest",
        "meaning": "큰 → 더 큰 → 가장 큰",
        "usages": [
          "a bigger room"
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "easy → easier → easiest",
        "meaning": "쉬운 → 더 쉬운 → 가장 쉬운",
        "usages": [
          "an easier question"
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "busy → busier → busiest",
        "meaning": "바쁜 → 더 바쁜 → 가장 바쁜",
        "usages": [
          "Monday is busier."
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "comfortable → more comfortable → most comfortable",
        "meaning": "편안한 → 더 편안한 → 가장 편안한",
        "usages": [
          "a more comfortable chair"
        ],
        "cat": "형태와 불규칙"
      },
      {
        "term": "interesting → more interesting → most interesting",
        "meaning": "흥미로운 → 더 흥미로운 → 가장 흥미로운",
        "usages": [
          "a more interesting movie"
        ],
        "cat": "형태와 불규칙"
      }
    ]
  },
  {
    "id": "wg59",
    "cat": "말하기 표현",
    "title": "경험을 시간 순서로 이어가는 표현",
    "lead": "외운 단어를 이야기로 만들 때 쓰세요. 먼저·중간·결과를 연결합니다.",
    "items": [
      {
        "term": "at first",
        "meaning": "처음에는",
        "usages": [
          "At first, I was nervous."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "first of all",
        "meaning": "우선",
        "usages": [
          "First of all, I checked the address."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "then",
        "meaning": "그러고 나서",
        "usages": [
          "Then, we took a taxi."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "after that",
        "meaning": "그 후에",
        "usages": [
          "After that, we had dinner."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "meanwhile",
        "meaning": "그동안·한편",
        "usages": [
          "Meanwhile, my friend booked a hotel."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "while I was -ing",
        "meaning": "내가 ~하는 동안",
        "usages": [
          "While I was waiting, it started to rain."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "a few minutes later",
        "meaning": "몇 분 후에",
        "usages": [
          "A few minutes later, the bus arrived."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "eventually",
        "meaning": "결국·마침내",
        "usages": [
          "Eventually, we found the place."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "in the end",
        "meaning": "결국에는",
        "usages": [
          "In the end, everything worked out."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "since then",
        "meaning": "그때 이후로",
        "usages": [
          "Since then, I’ve checked the weather before trips."
        ],
        "cat": "말하기 표현"
      }
    ]
  },
  {
    "id": "wg60",
    "cat": "말하기 표현",
    "title": "이유·결과·대조를 말하는 표현",
    "lead": "길게 말하려면 이유와 결과를 붙이세요. because 뒤 문장, because of 뒤 명사·-ing를 구분합니다.",
    "items": [
      {
        "term": "because",
        "meaning": "~이기 때문에",
        "usages": [
          "I stayed home because it was raining."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "because of",
        "meaning": "~때문에",
        "usages": [
          "We were late because of the traffic."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "so",
        "meaning": "그래서",
        "usages": [
          "I was tired, so I went home."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "that’s why",
        "meaning": "그래서 ~한 것이다",
        "usages": [
          "That’s why I like this place."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "as a result",
        "meaning": "그 결과",
        "usages": [
          "As a result, we missed the train."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "but",
        "meaning": "하지만",
        "usages": [
          "It was small, but it was comfortable."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "although",
        "meaning": "~이지만",
        "usages": [
          "Although it rained, we had fun."
        ],
        "cat": "말하기 표현",
        "note": "although와 but을 한 절 연결에 겹치지 않음"
      },
      {
        "term": "however",
        "meaning": "그러나",
        "usages": [
          "It was expensive. However, it was worth it."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "on the other hand",
        "meaning": "반면에",
        "usages": [
          "On the other hand, the location was great."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "instead of",
        "meaning": "~대신에",
        "usages": [
          "We walked instead of taking a bus."
        ],
        "cat": "말하기 표현"
      }
    ]
  },
  {
    "id": "wg61",
    "cat": "말하기 표현",
    "title": "의견·선호를 구체화하는 표현",
    "lead": "짧은 의견 다음에 이유와 실제 예를 덧붙이세요.",
    "items": [
      {
        "term": "I think",
        "meaning": "나는 ~라고 생각한다",
        "usages": [
          "I think this area is convenient."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "in my opinion",
        "meaning": "내 생각에는",
        "usages": [
          "In my opinion, the service was excellent."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "personally",
        "meaning": "개인적으로",
        "usages": [
          "Personally, I prefer quiet places."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "I prefer A to B",
        "meaning": "B보다 A를 더 좋아한다",
        "usages": [
          "I prefer tea to coffee."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "I’d rather do",
        "meaning": "차라리 ~하겠다",
        "usages": [
          "I’d rather stay home."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "what I like most is",
        "meaning": "내가 가장 좋아하는 것은",
        "usages": [
          "What I like most is the view."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "one reason is that",
        "meaning": "한 가지 이유는 ~라는 것이다",
        "usages": [
          "One reason is that it’s close to home."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "for example",
        "meaning": "예를 들면",
        "usages": [
          "For example, I can walk to the station."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "especially",
        "meaning": "특히",
        "usages": [
          "I like outdoor activities, especially hiking."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "it depends on",
        "meaning": "~에 따라 다르다",
        "usages": [
          "It depends on the weather."
        ],
        "cat": "말하기 표현"
      }
    ]
  },
  {
    "id": "wg62",
    "cat": "말하기 표현",
    "title": "문제·해결·결과를 이야기하는 표현",
    "lead": "돌발 상황에 쓸 수 있는 묶음입니다. 문제 하나와 해결 행동을 이어 말하세요.",
    "items": [
      {
        "term": "run out of",
        "meaning": "~이 다 떨어지다",
        "usages": [
          "We ran out of water."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "break down",
        "meaning": "고장 나다",
        "usages": [
          "Our car broke down."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "get stuck",
        "meaning": "꼼짝 못 하게 되다",
        "usages": [
          "We got stuck in traffic."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "get lost",
        "meaning": "길을 잃다",
        "usages": [
          "I got lost near the station."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "miss the bus",
        "meaning": "버스를 놓치다",
        "usages": [
          "I missed the last bus."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "ask for help",
        "meaning": "도움을 요청하다",
        "usages": [
          "I asked a local person for help."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "figure out",
        "meaning": "알아내다·이해하다",
        "usages": [
          "I figured out what was wrong."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "come up with a solution",
        "meaning": "해결책을 생각해내다",
        "usages": [
          "We came up with a solution."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "work out",
        "meaning": "잘 해결되다",
        "usages": [
          "Everything worked out in the end."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "learn a lesson",
        "meaning": "교훈을 얻다",
        "usages": [
          "I learned a lesson from that experience."
        ],
        "cat": "말하기 표현"
      }
    ]
  },
  {
    "id": "wg63",
    "cat": "말하기 표현",
    "title": "묘사·감정·회상에 쓰는 표현",
    "lead": "대상을 설명하고 그때의 느낌을 붙이는 표현입니다.",
    "items": [
      {
        "term": "look like",
        "meaning": "~처럼 보이다",
        "usages": [
          "It looks like a small garden."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "feel like",
        "meaning": "~같은 느낌이다",
        "usages": [
          "It felt like home."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "remind me of",
        "meaning": "~을 떠올리게 하다",
        "usages": [
          "The place reminded me of my hometown."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "be located in",
        "meaning": "~에 위치하다",
        "usages": [
          "The café is located in a quiet neighborhood."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "be surrounded by",
        "meaning": "~로 둘러싸여 있다",
        "usages": [
          "It’s surrounded by trees."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "be known for",
        "meaning": "~로 알려져 있다",
        "usages": [
          "The town is known for its seafood."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "have a great view of",
        "meaning": "~의 경치가 좋다",
        "usages": [
          "The room had a great view of the sea."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "feel relieved",
        "meaning": "안도하다",
        "usages": [
          "I felt relieved when I found my wallet."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "be worth -ing",
        "meaning": "~할 가치가 있다",
        "usages": [
          "The museum is worth visiting."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "be looking forward to -ing",
        "meaning": "~하기를 기대하고 있다",
        "usages": [
          "I’m looking forward to going back."
        ],
        "cat": "말하기 표현"
      }
    ]
  },
  {
    "id": "wg64",
    "cat": "말하기 표현",
    "title": "요청·제안·확인에 쓰는 표현",
    "lead": "역할극에서 바로 꺼내 쓸 수 있는 정중한 문장 틀입니다.",
    "items": [
      {
        "term": "Could you please ...?",
        "meaning": "~해 주실 수 있나요?",
        "usages": [
          "Could you please check my reservation?"
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "Could I ...?",
        "meaning": "제가 ~해도 될까요?",
        "usages": [
          "Could I change the time?"
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "I’d like to ...",
        "meaning": "~하고 싶습니다",
        "usages": [
          "I’d like to book a room."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "Would you mind -ing?",
        "meaning": "~해 주시겠어요?",
        "usages": [
          "Would you mind opening the window?"
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "Is it possible to ...?",
        "meaning": "~하는 것이 가능한가요?",
        "usages": [
          "Is it possible to get a refund?"
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "Do you happen to know ...?",
        "meaning": "혹시 ~을 아시나요?",
        "usages": [
          "Do you happen to know when it opens?"
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "Why don’t we ...?",
        "meaning": "우리 ~하는 게 어때요?",
        "usages": [
          "Why don’t we meet at six?"
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "How about -ing?",
        "meaning": "~하는 게 어때요?",
        "usages": [
          "How about taking a taxi?"
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "Let me check ...",
        "meaning": "제가 ~을 확인해 볼게요",
        "usages": [
          "Let me check the schedule."
        ],
        "cat": "말하기 표현"
      },
      {
        "term": "Just to confirm, ...",
        "meaning": "확인차 말씀드리면",
        "usages": [
          "Just to confirm, the meeting is at three, right?"
        ],
        "cat": "말하기 표현"
      }
    ]
  }
];
