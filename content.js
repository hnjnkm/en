// 문법 33개 강의. 단어는 중복 표제어를 제외한 핵심 단어·표현.
const grammar = [
  {
    "id": "g01",
    "cat": "문장 기초",
    "title": "01 · 주어·동사·목적어·보어와 문장 순서",
    "lead": "영어는 단어를 아는 것보다 “누가 + 어떤 상태인지 / 무엇을 하는지”를 먼저 정하는 것이 중요합니다.",
    "concepts": [
      {
        "title": "품사: 단어의 종류부터",
        "text": "명사는 사람·장소·물건·개념의 이름(friend, park, music), 대명사는 명사를 대신하는 말(I, it), 동사는 행동·상태(live, be), 형용사는 명사의 성질(quiet), 부사는 행동·정도의 설명(slowly, very)입니다. 전치사는 명사와의 관계(in, at), 접속사는 말과 절의 연결(and, because), 감탄사는 반응(oh)을 나타냅니다. 품사는 단어의 종류, 주어·목적어는 문장 안에서 맡은 역할이라 서로 다른 분류입니다."
      },
      {
        "title": "주어와 동사부터 찾기",
        "text": "주어(S)는 문장에서 상태나 행동을 설명하는 대상입니다. 동사(V)는 행동 또는 상태를 나타냅니다. I live in Seoul에서 I가 주어, live가 동사입니다. 한국어에서는 “집에 있어요”처럼 주어를 생략하지만 영어의 평서문에는 보통 I, it 등의 주어가 필요합니다."
      },
      {
        "title": "구와 절: 단어 묶음과 작은 문장",
        "text": "구는 여러 단어가 한 덩어리로 역할을 하는 표현입니다: at home은 장소를 나타내는 전치사구입니다. 절은 주어와 동사가 있는 단위입니다: I got home, when I got home. when I got home은 주어·동사가 있어도 “집에 왔을 때”라는 덧붙임이라 보통 혼자 문장을 끝내지 못합니다. I cooked dinner when I got home처럼 주절을 연결해야 내용이 완성됩니다."
      },
      {
        "title": "목적어와 보어는 역할이 다릅니다",
        "text": "목적어(O)는 동사의 대상입니다. I like coffee에서 coffee는 좋아하는 대상입니다. 보어(C)는 주어나 목적어가 무엇인지, 어떤 상태인지 설명합니다. I am tired에서 tired는 I의 상태입니다. be, seem, become 같은 동사 뒤에는 주어를 설명하는 보어가 자주 옵니다."
      },
      {
        "title": "5형식은 암기보다 동사의 쓰임을 보기",
        "text": "기본 구조는 S+V, S+V+C, S+V+O, S+V+간접목적어+직접목적어, S+V+O+C로 정리할 수 있습니다. 같은 동사도 의미와 용법에 따라 구조가 바뀝니다. 우선 필요한 자리를 채운 다음 시간·장소·이유를 덧붙이세요. 수식어가 길어져도 중심 구조는 그대로입니다."
      }
    ],
    "forms": [
      {
        "label": "1형식",
        "pattern": "I work.",
        "note": "주어 + 동사. I work at a café에서 at a café는 장소를 더하는 수식어입니다."
      },
      {
        "label": "2형식",
        "pattern": "I feel tired.",
        "note": "주어 + 동사 + 주격보어. tired는 I의 상태를 설명합니다."
      },
      {
        "label": "3형식",
        "pattern": "I like movies.",
        "note": "주어 + 동사 + 목적어. movies는 좋아하는 대상입니다."
      },
      {
        "label": "4형식",
        "pattern": "She gave me a gift.",
        "note": "me는 받는 사람, a gift는 주는 물건입니다. She gave a gift to me로도 말할 수 있습니다. 모든 전달 동사가 이 어순을 쓰지는 않습니다. explain은 explain the problem to me처럼 익히세요."
      },
      {
        "label": "5형식",
        "pattern": "The music makes me happy.",
        "note": "me가 목적어, happy가 me의 상태를 설명하는 목적격보어입니다."
      }
    ],
    "examples": [
      {
        "en": "I watch movies at home on weekends.",
        "ko": "주말에는 집에서 영화를 봐요.",
        "analysis": "I(주어) + watch(동사) + movies(목적어). at home과 on weekends는 없어도 문장의 중심은 성립합니다."
      },
      {
        "en": "The café looks cozy.",
        "ko": "그 카페는 아늑해 보여요.",
        "analysis": "looks는 여기서 “보다”가 아니라 “~해 보이다”입니다. cozy는 café를 설명하므로 형용사를 씁니다."
      },
      {
        "en": "My friend sent me a message.",
        "ko": "친구가 저에게 메시지를 보냈어요.",
        "analysis": "sent 뒤에 받는 사람 me와 전달한 것 a message가 옵니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I coffee like.",
        "right": "I like coffee.",
        "why": "목적어 coffee는 일반적으로 동사 like 뒤에 둡니다."
      },
      {
        "wrong": "My room very quiet.",
        "right": "My room is very quiet.",
        "why": "quiet는 형용사입니다. 주어와 상태를 연결하는 동사 is가 필요합니다."
      }
    ],
    "exercises": [
      {
        "q": "“저는 음악을 좋아해요”를 바르게 말하면?",
        "options": [
          "I music like.",
          "I like music.",
          "I am like music."
        ],
        "answer": "I like music.",
        "explanation": "I가 주어, like가 일반동사, music이 목적어입니다. 현재형 일반동사 앞에 am을 추가하지 않습니다."
      },
      {
        "q": "The trip made me happy에서 happy는 무엇을 설명하나요?",
        "options": [
          "여행을 한 시점",
          "made의 횟수",
          "목적어 me의 상태"
        ],
        "answer": "목적어 me의 상태",
        "explanation": "make + 목적어 + 형용사 구조입니다. happy는 목적격보어로 “나를 행복하게 만들었다”는 뜻을 완성합니다."
      }
    ],
    "spoken": {
      "prompt": "내 취미를 한 문장으로 말한 뒤 장소와 시간을 덧붙이세요.",
      "sample": "I watch movies. I usually watch movies at home on weekends.",
      "note": "I + 동사 + 대상부터 만들고, 어디서·언제를 붙이세요."
    }
  },
  {
    "id": "g02",
    "cat": "문장 기초",
    "title": "02 · be동사: 정체·상태·위치",
    "lead": "be동사는 행동을 나타내는 말이 아니라 주어와 정체·상태·위치를 연결하는 동사입니다.",
    "concepts": [
      {
        "title": "뒤에 무엇이 오는지 보기",
        "text": "I am a student에서는 명사 a student가 정체를, I am tired에서는 형용사 tired가 상태를 설명합니다. I am at home에서는 전치사구 at home이 위치를 나타냅니다. 한국어의 “~이다 / ~하다 / ~에 있다”를 모두 be로 연결할 수 있지만, “달리다·살다” 같은 일반동사를 대신하지는 않습니다."
      },
      {
        "title": "주어와 시간에 맞춰 형태 바꾸기",
        "text": "현재는 I am, he/she/it is, you/we/they are입니다. 과거는 I/he/she/it was, you/we/they were입니다. you는 한 사람에게 말해도 are/were를 씁니다. 말할 때 I’m, she’s, they’re 같은 축약형이 자연스럽습니다."
      },
      {
        "title": "부정과 질문은 be 자체로 만들기",
        "text": "부정은 be 뒤에 not을 붙입니다. 질문은 be를 주어 앞으로 옮깁니다. be가 본동사인 문장에는 do/does/did를 추가하지 않습니다. Are you tired?에 Yes, I am / No, I’m not처럼 짧게 답할 수 있습니다."
      }
    ],
    "forms": [
      {
        "label": "현재 긍정",
        "pattern": "I am / She is / They are + 보어",
        "note": "I’m busy. She’s a teacher. They’re at home."
      },
      {
        "label": "과거 긍정",
        "pattern": "I was / They were + 보어",
        "note": "I was tired yesterday."
      },
      {
        "label": "부정",
        "pattern": "주어 + be + not + 보어",
        "note": "He isn’t busy. They weren’t there."
      },
      {
        "label": "질문",
        "pattern": "Be + 주어 + 보어?",
        "note": "Is it expensive? Were you at home?"
      }
    ],
    "examples": [
      {
        "en": "My apartment is small, but it is comfortable.",
        "ko": "아파트는 작지만 편안해요.",
        "analysis": "is 뒤에 small/comfortable이라는 형용사가 와서 apartment의 상태를 설명합니다."
      },
      {
        "en": "Were you busy yesterday? — Yes, I was.",
        "ko": "어제 바빴나요? — 네, 바빴어요.",
        "analysis": "과거 질문이므로 were를 앞으로 옮기고, I로 답할 때는 was로 바꿉니다."
      },
      {
        "en": "There are two cafés near my house.",
        "ko": "집 근처에 카페 두 곳이 있어요.",
        "analysis": "존재를 소개하는 there are 구조입니다. 위치를 말하는 The cafés are nearby와 구별하세요."
      }
    ],
    "mistakes": [
      {
        "wrong": "I am live in Seoul.",
        "right": "I live in Seoul.",
        "why": "live는 일반동사입니다. 현재형 live 앞에 am을 붙이지 않습니다. 진행형이라면 I am living처럼 -ing가 필요합니다."
      },
      {
        "wrong": "Do you are tired?",
        "right": "Are you tired?",
        "why": "be동사 질문은 be만 앞으로 보냅니다."
      }
    ],
    "exercises": [
      {
        "q": "“그들은 어제 집에 있었어요”의 알맞은 형태는?",
        "options": [
          "They was at home yesterday.",
          "They were at home yesterday.",
          "They are at home yesterday."
        ],
        "answer": "They were at home yesterday.",
        "explanation": "과거이고 주어가 they이므로 were를 사용합니다."
      },
      {
        "q": "“지금 피곤해요?”를 바르게 물으면?",
        "options": [
          "Do you tired?",
          "Are you tired?",
          "Do you are tired?"
        ],
        "answer": "Are you tired?",
        "explanation": "tired는 상태를 나타내는 형용사이므로 be동사 are로 질문합니다."
      }
    ],
    "spoken": {
      "prompt": "내 집의 상태 두 가지와 어제 내 상태를 말하세요.",
      "sample": "My home is quiet and cozy. I was tired yesterday, so I stayed home.",
      "note": "현재 상태에는 is, 어제 상태에는 was를 쓰세요."
    }
  },
  {
    "id": "g33",
    "cat": "문장 기초",
    "title": "03 · 자동사·타동사: 목적어가 필요한가?",
    "lead": "자동사·타동사의 차이는 “스스로 하는 행동인가”가 아니라 “그 용법에서 동사가 직접 목적어를 취하는가”입니다. 영어의 동사 구조를 기준으로 판단하세요.",
    "concepts": [
      {
        "title": "자동사와 타동사의 정확한 기준",
        "text": "자동사는 동사의 직접 목적어 없이 쓰이는 동사입니다: The baby sleeps. 타동사는 동사의 직접 목적어를 취하는 동사입니다: I enjoy movies. movies는 즐기는 대상이라 enjoy의 목적어입니다. “자동사=혼자 하는 행동, 타동사=남에게 하는 행동”이라는 뜻은 아닙니다. I enjoy music처럼 혼자 하는 활동도 타동사 구조이고, We talked처럼 여러 사람이 함께 하는 활동도 자동사 구조일 수 있습니다."
      },
      {
        "title": "목적어와 장소·시간 설명을 구별하기",
        "text": "I arrived at the station에서 arrived 뒤의 at the station은 장소를 나타내는 전치사구입니다. station은 전치사 at의 목적어이지 arrive의 직접 목적어가 아닙니다. I slept for eight hours의 for eight hours도 기간을 더하는 표현입니다. I slept eight hours처럼 전치사 없이 명사구로 기간을 나타낼 수도 있으므로, 동사 뒤에 명사가 있다고 모두 직접 목적어인 것은 아닙니다. 그 말이 동작의 대상인지, 장소·시간을 덧붙이는지 확인하세요."
      },
      {
        "title": "자동사라도 보어가 필요할 수 있습니다",
        "text": "The baby sleeps는 주어+동사로 완성되는 1형식입니다. My sister became a teacher는 주어+동사+보어인 2형식입니다. become은 직접 목적어 대신 주어의 정체를 설명하는 보어가 필요합니다. a teacher는 my sister가 무엇이 됐는지 설명합니다. 따라서 “자동사는 뒤에 아무 말도 필요 없다”라고 외우면 안 됩니다. be, become, seem, look, feel 등의 연결동사는 뜻에 맞는 주격보어와 함께 자주 씁니다."
      },
      {
        "title": "목적어와 보어는 명사 모양이어도 다릅니다",
        "text": "My sister met a teacher에서 teacher는 만난 대상이므로 목적어입니다. My sister became a teacher에서는 sister 자신이 teacher가 됐으므로 보어입니다. 명사가 왔는지 형용사가 왔는지만 보지 말고 그 말의 역할을 보세요. The news made me happy에서는 me가 직접 목적어이고 happy는 me의 상태를 설명하는 목적격보어입니다. 타동사 구조에도 보어가 함께 올 수 있습니다."
      },
      {
        "title": "전치사가 필요한 동사와 바로 연결하는 동사",
        "text": "기본 표현은 listen to music, wait for a friend, arrive at the station, live in Seoul입니다. 반면 visit Seoul, reach the station, discuss the problem, enter the room은 목적어를 직접 붙입니다. 비슷한 한국어 번역이라도 영어의 구조는 다릅니다. “무엇을/누구를”로 번역되는지에만 의존하지 말고 동사와 뒤 표현을 함께 익히세요. go home의 home은 방향을 나타내는 부사라 to가 없는 것이며 go의 직접 목적어가 아닙니다."
      },
      {
        "title": "같은 동사도 용법에 따라 둘 다 가능합니다",
        "text": "The door opened는 문이 열린 자동사 용법, I opened the door는 문을 연 타동사 용법입니다. I eat at home은 먹는 장소를 말하는 자동사 용법, I eat breakfast at home은 breakfast라는 직접 목적어가 있는 타동사 용법입니다. 동사마다 항상 한 종류로 고정되는 것은 아닙니다. 문장에서 어떤 뜻·구조로 쓰이는지 보세요. 사전에서는 [I]/intransitive가 자동사, [T]/transitive가 타동사 용법을 표시합니다."
      },
      {
        "title": "목적어가 꼭 물건 이름일 필요는 없습니다",
        "text": "I enjoy cooking의 cooking은 동명사 목적어, I want to leave의 to leave는 부정사 목적어, I know that he is busy의 that he is busy는 내용 전체가 목적어 역할을 하는 명사절입니다. 목적어는 “사람·물건 명사 하나”로 제한되지 않습니다. 어떤 형태를 받을 수 있는지는 동사별로 다르므로 enjoy + -ing, want + to부정사처럼 함께 익히세요."
      },
      {
        "title": "수동태와 연결해서 확인하기",
        "text": "I opened the door에서 목적어 the door를 주어로 옮기면 The door was opened가 됩니다. 목적어 없는 The accident happened를 The accident was happened로 바꾸지는 않습니다. 기본 수동태는 목적어를 취하는 구조에서 출발합니다. 다만 목적어가 있다고 모든 수동 표현이 자연스러운 것은 아니며, 전치사 동사구가 수동으로 쓰이는 경우도 있어 수동 가능 여부만으로 모든 용법을 판정하지 마세요."
      }
    ],
    "forms": [
      {
        "label": "자동사·1형식",
        "pattern": "주어 + 동사 (+ 수식어)",
        "note": "The baby sleeps. / The baby sleeps at night. at night는 시간 설명입니다."
      },
      {
        "label": "자동사·2형식",
        "pattern": "주어 + 연결동사 + 주격보어",
        "note": "My sister became a teacher. teacher는 sister의 정체입니다."
      },
      {
        "label": "타동사·3형식",
        "pattern": "주어 + 동사 + 직접 목적어",
        "note": "I visited a museum. museum은 방문한 대상입니다."
      },
      {
        "label": "타동사·4형식",
        "pattern": "주어 + 동사 + 간접 목적어 + 직접 목적어",
        "note": "She gave me a ticket. me는 받는 사람, a ticket은 주는 대상입니다."
      },
      {
        "label": "타동사·5형식",
        "pattern": "주어 + 동사 + 목적어 + 목적격보어",
        "note": "The movie made me happy. happy는 me의 상태를 설명합니다."
      },
      {
        "label": "자동사+전치사",
        "pattern": "동사 + 전치사 + 전치사의 목적어",
        "note": "listen to music / wait for a friend. music과 friend는 전치사의 목적어입니다."
      },
      {
        "label": "두 용법",
        "pattern": "The door opened. / I opened the door.",
        "note": "첫 문장은 직접 목적어가 없고, 두 번째 문장은 the door가 직접 목적어입니다."
      }
    ],
    "examples": [
      {
        "en": "I arrived at the station at eight.",
        "ko": "8시에 역에 도착했어요.",
        "analysis": "I가 주어, arrived가 자동사입니다. at the station은 장소, at eight는 시간입니다. station을 arrive에 바로 붙이지 않고 전치사 at으로 연결합니다."
      },
      {
        "en": "I visited a museum with a friend.",
        "ko": "친구와 박물관을 방문했어요.",
        "analysis": "visited는 타동사이며 a museum이 직접 목적어입니다. with a friend는 함께한 사람을 더하는 수식어입니다. visit 뒤에 to를 넣지 않습니다."
      },
      {
        "en": "The café became crowded after lunch.",
        "ko": "점심 후에 카페가 붐비게 됐어요.",
        "analysis": "became은 연결동사로 쓰이고 crowded는 café의 상태를 설명하는 주격보어입니다. 목적어가 없어도 보어가 필요한 2형식 문장입니다."
      },
      {
        "en": "The door opened. I opened the window, too.",
        "ko": "문이 열렸어요. 저는 창문도 열었어요.",
        "analysis": "첫 opened는 자동사 용법, 두 번째 opened는 window를 직접 목적어로 취한 타동사 용법입니다. 같은 동사라도 구조가 달라집니다."
      },
      {
        "en": "I listen to music when I work out.",
        "ko": "운동할 때 음악을 들어요.",
        "analysis": "listen은 이 구조에서 자동사이며 to music을 붙입니다. music은 전치사 to의 목적어입니다. 한국어로 “음악을 듣다”라고 해도 영어에서는 to를 유지합니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I arrived the airport.",
        "right": "I arrived at the airport.",
        "why": "arrive는 이 의미에서 직접 목적어를 취하지 않아 장소를 at으로 연결합니다. 비슷한 뜻의 reach를 쓰면 I reached the airport처럼 바로 목적어를 붙입니다."
      },
      {
        "wrong": "We discussed about the problem.",
        "right": "We discussed the problem.",
        "why": "discuss는 논의하는 대상을 직접 목적어로 취합니다. 같은 뜻을 talk로 말하면 We talked about the problem처럼 about이 필요합니다."
      },
      {
        "wrong": "I listened music.",
        "right": "I listened to music.",
        "why": "listen은 듣는 대상을 전치사 to와 연결하는 것이 기본입니다. heard music은 hear가 직접 목적어를 취하는 다른 구조이며, 듣다라는 번역만으로 어순을 정하면 안 됩니다."
      }
    ],
    "exercises": [
      {
        "q": "“공항에 도착했어요”의 올바른 구조는?",
        "options": [
          "I arrived the airport.",
          "I arrived at the airport.",
          "I arrived to the airport."
        ],
        "answer": "I arrived at the airport.",
        "explanation": "arrive는 이 의미에서 자동사입니다. 공항이라는 지점은 at the airport라는 전치사구로 연결합니다. to가 아닌 at을 쓰며, 도시·나라에는 보통 arrive in을 씁니다."
      },
      {
        "q": "My sister became a teacher에서 a teacher의 역할은?",
        "options": [
          "became의 직접 목적어",
          "sister의 정체를 설명하는 주격보어",
          "시간을 설명하는 수식어"
        ],
        "answer": "sister의 정체를 설명하는 주격보어",
        "explanation": "sister 자신이 teacher가 된 것이므로 a teacher는 주격보어입니다. become은 이 구조에서 직접 목적어를 취하지 않는 연결동사입니다. “동사 뒤 명사=항상 목적어”는 아닙니다."
      },
      {
        "q": "“그 문제를 논의했어요”의 올바른 문장은?",
        "options": [
          "We discussed about the problem.",
          "We discussed the problem.",
          "We discussed to the problem."
        ],
        "answer": "We discussed the problem.",
        "explanation": "discuss는 타동사로 the problem을 직접 목적어로 받습니다. about을 쓰고 싶으면 We talked about the problem처럼 동사도 talk로 바꿔야 합니다."
      },
      {
        "q": "The door opened. / I opened the door.에서 open의 용법은?",
        "options": [
          "두 문장 모두 직접 목적어가 있다",
          "첫 문장은 자동사, 두 번째는 타동사 용법",
          "첫 문장은 타동사, 두 번째는 자동사 용법"
        ],
        "answer": "첫 문장은 자동사, 두 번째는 타동사 용법",
        "explanation": "첫 문장은 door가 주어이며 직접 목적어가 없습니다. 두 번째는 I가 주어이고 the door가 직접 목적어입니다. 같은 동사가 두 용법으로 쓰일 수 있습니다."
      }
    ],
    "spoken": {
      "prompt": "집을 나서서 목적지에 도착한 일과, 그곳에서 방문하거나 한 일을 말하세요. 동사 뒤가 직접 목적어인지 전치사구인지 찾아보세요.",
      "sample": "I left home at nine and arrived at the station at nine thirty. Later, I visited a museum. While I was waiting for my friend, I listened to music.",
      "note": "arrived at the station, waiting for my friend, listened to music은 전치사를 유지합니다. visited a museum은 타동사 뒤에 직접 목적어를 붙인 구조입니다. left home의 leave도 문맥에 따라 여러 용법이 있습니다."
    }
  },
  {
    "id": "g03",
    "cat": "문장 기초",
    "title": "04 · 일반동사와 주어·동사의 수 일치",
    "lead": "일반동사는 like, live, work, go처럼 행동·습관·상태를 나타내며, 현재형에서는 주어에 따라 모양이 달라집니다.",
    "concepts": [
      {
        "title": "3인칭 단수 현재형만 -s",
        "text": "나(I)와 우리(we)는 1인칭, 듣는 상대(you)는 2인칭, 그 밖의 사람·사물은 3인칭입니다. I/you/we/they에는 동사원형을 쓰고, he/she/it 또는 단수 명사에는 보통 -s를 붙입니다. my friend는 한 명이면 he/she처럼 취급합니다. my friends는 복수이므로 원형입니다. 이 규칙은 일반동사의 현재형 긍정문에 적용됩니다."
      },
      {
        "title": "철자 변화와 불규칙 형태",
        "text": "대부분 work → works, -s/-sh/-ch/-x/-o 등으로 끝나면 watch → watches, go → goes가 됩니다. 자음+y는 study → studies, 모음+y는 play → plays입니다. have는 has가 됩니다. 외우기 전에 지금 말하는 주어가 한 명인지 먼저 보세요."
      },
      {
        "title": "원형이 필요한 자리에서는 -s를 붙이지 않기",
        "text": "does/doesn’t 또는 can/will 같은 조동사 뒤에는 원형을 씁니다. She likes coffee지만 Does she like coffee?입니다. 동사마다 -s를 붙이는 것이 아니라, 시제·수 일치를 담당하는 자리가 바뀌는 것입니다."
      },
      {
        "title": "동사원형·과거형·과거분사는 다릅니다",
        "text": "동사원형은 사전에 나오는 기본형입니다: go, eat, work. 과거형은 끝난 일을 말하는 went, ate, worked이고, 과거분사는 have 뒤나 수동태에서 쓰는 gone, eaten, worked입니다. -ing형은 going, eating, working입니다. work처럼 과거형과 분사가 같을 수도 있지만 go처럼 다를 수도 있습니다. 현재의 -s형도 원형과 구별하세요: work → works. 뒤 시제 강의에서 각 형태를 언제 쓰는지 설명합니다."
      }
    ],
    "forms": [
      {
        "label": "I / you / we / they",
        "pattern": "주어 + 동사원형",
        "note": "I work. My friends work."
      },
      {
        "label": "he / she / it / 단수 명사",
        "pattern": "주어 + 동사-s/-es",
        "note": "My sister works. He studies."
      },
      {
        "label": "have의 현재형",
        "pattern": "I have / She has",
        "note": "My apartment has two bedrooms."
      },
      {
        "label": "조동사 뒤",
        "pattern": "does / can / will + 동사원형",
        "note": "She doesn’t work. She can drive."
      }
    ],
    "examples": [
      {
        "en": "My brother works from home, but I work at an office.",
        "ko": "남동생은 재택근무를 하지만 저는 사무실에서 일해요.",
        "analysis": "brother는 3인칭 단수라 works, I는 work입니다."
      },
      {
        "en": "The restaurant closes at nine.",
        "ko": "그 식당은 9시에 문을 닫아요.",
        "analysis": "restaurant는 단수 명사입니다. 사람뿐 아니라 사물도 3인칭 단수 규칙을 따릅니다."
      },
      {
        "en": "She goes to the gym twice a week.",
        "ko": "그녀는 일주일에 두 번 헬스장에 가요.",
        "analysis": "go의 3인칭 단수형은 goes입니다. twice a week는 빈도를 설명합니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "My friend like movies.",
        "right": "My friend likes movies.",
        "why": "단수 주어 my friend에 맞춰 현재 동사에 -s를 붙입니다."
      },
      {
        "wrong": "She can drives.",
        "right": "She can drive.",
        "why": "조동사 can 뒤에는 주어와 관계없이 원형 drive를 씁니다."
      }
    ],
    "exercises": [
      {
        "q": "“우리 동네에는 큰 공원이 있어요”에서 동사를 고르면?",
        "options": [
          "My neighborhood have a large park.",
          "My neighborhood has a large park.",
          "My neighborhood haves a large park."
        ],
        "answer": "My neighborhood has a large park.",
        "explanation": "neighborhood는 단수이고 have의 3인칭 단수형은 has입니다."
      },
      {
        "q": "“친구들은 근처에 살아요”의 올바른 문장은?",
        "options": [
          "My friends lives nearby.",
          "My friends live nearby.",
          "My friends is live nearby."
        ],
        "answer": "My friends live nearby.",
        "explanation": "friends는 복수 주어이므로 원형 live를 씁니다."
      }
    ],
    "spoken": {
      "prompt": "나와 가족 한 명의 습관을 비교해 말하세요.",
      "sample": "I drink tea in the morning. My sister drinks coffee.",
      "note": "주어를 I에서 my sister로 바꿀 때 동사의 -s도 바꿔 보세요."
    }
  },
  {
    "id": "g04",
    "cat": "문장 기초",
    "title": "05 · 부정문과 do·does·did의 역할",
    "lead": "일반동사 문장을 부정하거나 질문할 때 do는 문장의 모양을 바꾸는 보조 역할을 합니다.",
    "concepts": [
      {
        "title": "세 종류의 부정문을 구별하기",
        "text": "be동사는 be + not, 일반동사는 do/does/did + not + 원형, 조동사는 can/will/should + not + 원형입니다. I’m not tired, I don’t work, I can’t drive는 구조가 서로 다릅니다. 동사를 먼저 분류하면 not을 어디에 넣을지 결정할 수 있습니다."
      },
      {
        "title": "do가 시제와 수 일치를 맡습니다",
        "text": "현재 I/you/we/they는 don’t, he/she/it은 doesn’t, 과거는 주어와 관계없이 didn’t입니다. doesn’t에 현재·3인칭 단수 정보가, didn’t에 과거 정보가 이미 있으므로 뒤의 동사는 원형입니다. didn’t went처럼 과거를 두 번 표시하지 않습니다."
      },
      {
        "title": "not의 범위와 빈도 표현",
        "text": "I don’t always cook는 “항상 요리하는 것은 아니다”입니다. I never cook는 “전혀 요리하지 않는다”로 더 강합니다. 표준 영어에서는 I don’t never cook처럼 don’t와 never를 함께 써서 단순 부정을 만들지 않습니다."
      },
      {
        "title": "do가 항상 보조동사는 아닙니다",
        "text": "I do the dishes에서 do는 “하다”라는 본동사이고 the dishes가 목적어입니다. Do you do the dishes?에서는 앞 do가 질문을 만드는 보조동사, 뒤 do가 실제 행동입니다. She doesn’t do the dishes도 보조동사 doesn’t와 본동사 do가 함께 있습니다. 같은 단어가 두 번 나온다고 잘못된 문장은 아닙니다. 앞에 나온 보조동사가 시제·수 일치를 맡는지 확인하세요."
      }
    ],
    "forms": [
      {
        "label": "be 부정",
        "pattern": "주어 + be + not",
        "note": "I’m not busy. It wasn’t cheap."
      },
      {
        "label": "일반동사 현재 부정",
        "pattern": "주어 + don’t / doesn’t + 원형",
        "note": "I don’t smoke. He doesn’t smoke."
      },
      {
        "label": "일반동사 과거 부정",
        "pattern": "주어 + didn’t + 원형",
        "note": "I didn’t buy anything."
      },
      {
        "label": "조동사 부정",
        "pattern": "주어 + 조동사 + not + 원형",
        "note": "I can’t swim. We won’t go."
      }
    ],
    "examples": [
      {
        "en": "I don’t eat out very often.",
        "ko": "외식을 그렇게 자주 하지는 않아요.",
        "analysis": "don’t + eat으로 현재 습관을 부정합니다. very often을 붙여 “전혀 안 한다”와 구분합니다."
      },
      {
        "en": "The café wasn’t open, so we didn’t go in.",
        "ko": "카페가 열려 있지 않아서 들어가지 않았어요.",
        "analysis": "상태 open은 wasn’t, 행동 go는 didn’t go로 부정합니다."
      },
      {
        "en": "She doesn’t have a car.",
        "ko": "그녀는 차가 없어요.",
        "analysis": "긍정문은 She has a car. 부정문에서 doesn’t가 수 일치를 맡으므로 has가 have로 돌아갑니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I not like it.",
        "right": "I don’t like it.",
        "why": "일반동사 like의 현재 부정문에는 don’t가 필요합니다."
      },
      {
        "wrong": "I didn’t went there.",
        "right": "I didn’t go there.",
        "why": "과거는 didn’t가 표시하므로 go는 원형입니다."
      }
    ],
    "exercises": [
      {
        "q": "“어제 그 영화를 보지 않았어요”의 올바른 문장은?",
        "options": [
          "I didn’t saw the movie yesterday.",
          "I didn’t see the movie yesterday.",
          "I don’t saw the movie yesterday."
        ],
        "answer": "I didn’t see the movie yesterday.",
        "explanation": "과거 부정은 didn’t + 원형 see입니다. saw는 과거 긍정문에서 씁니다."
      },
      {
        "q": "“그녀는 항상 집에 있는 것은 아니에요”에 맞는 문장은?",
        "options": [
          "She isn’t always at home.",
          "She is never at home.",
          "She doesn’t at home."
        ],
        "answer": "She isn’t always at home.",
        "explanation": "isn’t always는 부분 부정입니다. never는 “전혀 없다”라는 더 강한 의미이고, at home은 be동사와 연결합니다."
      }
    ],
    "spoken": {
      "prompt": "하지 않는 습관과 어제 하지 않은 일을 하나씩 말하세요.",
      "sample": "I don’t drink coffee at night. I didn’t work out yesterday.",
      "note": "현재 습관은 don’t, 어제의 일은 didn’t로 구별하세요."
    }
  },
  {
    "id": "g05",
    "cat": "문장 기초",
    "title": "06 · 의문문: yes/no 질문과 의문사 질문",
    "lead": "질문은 무조건 문장 앞에 do를 붙이는 것이 아닙니다. be·조동사·일반동사에 따라 첫 단어가 달라집니다.",
    "concepts": [
      {
        "title": "yes/no 질문의 순서",
        "text": "be문장은 be + 주어, 조동사 문장은 조동사 + 주어 + 원형, 일반동사는 do/does/did + 주어 + 원형입니다. 평서문 You live nearby를 Do you live nearby?로 바꿉니다. 질문의 나머지 부분은 대체로 그대로 둡니다."
      },
      {
        "title": "의문사는 무엇을 묻는지 정합니다",
        "text": "what은 무엇, where는 장소, when은 시점, why는 이유, how는 방법·상태를 묻습니다. 의문사 + 의문문 순서가 기본입니다. How often은 빈도, How long은 기간, How much는 가격·양, How many는 셀 수 있는 수량입니다."
      },
      {
        "title": "의문사가 주어인 질문은 예외",
        "text": "Who called you?에서는 who 자체가 주어입니다. 주어를 묻는 질문에는 보통 do/did를 넣지 않습니다. Who did you call?은 주어 you가 따로 있으며, 전화를 건 대상(목적어)을 묻습니다. 질문에서 빠진 자리가 주어인지 먼저 확인하세요."
      }
    ],
    "forms": [
      {
        "label": "be 질문",
        "pattern": "Be + 주어 + 보어?",
        "note": "Are you ready? Where is the café?"
      },
      {
        "label": "일반동사 질문",
        "pattern": "Do/Does/Did + 주어 + 원형?",
        "note": "Did you enjoy the trip?"
      },
      {
        "label": "조동사 질문",
        "pattern": "Can/Will/Could + 주어 + 원형?",
        "note": "Could you help me?"
      },
      {
        "label": "의문사 질문",
        "pattern": "의문사 + 조동사/be + 주어 …?",
        "note": "How often do you work out?"
      },
      {
        "label": "주어를 묻는 질문",
        "pattern": "Who/What + 동사 …?",
        "note": "Who lives here? What happened?"
      }
    ],
    "examples": [
      {
        "en": "What time does the tour start?",
        "ko": "투어는 몇 시에 시작하나요?",
        "analysis": "what time은 시작 시간을, does는 현재·단수 정보를 나타냅니다. start는 원형입니다."
      },
      {
        "en": "How long did you stay there?",
        "ko": "그곳에 얼마나 머물렀나요?",
        "analysis": "기간을 묻는 how long 뒤에 did + you + stay가 옵니다."
      },
      {
        "en": "Who invited you? — My friend did.",
        "ko": "누가 초대했나요? — 친구가요.",
        "analysis": "who가 주어이므로 Who did invite you?라는 기본형을 쓰지 않습니다. 강조하는 특수한 경우는 별개입니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "Where you live?",
        "right": "Where do you live?",
        "why": "일반동사 live로 질문하므로 do가 필요합니다."
      },
      {
        "wrong": "What time does it starts?",
        "right": "What time does it start?",
        "why": "does 뒤에는 원형 start를 씁니다."
      }
    ],
    "exercises": [
      {
        "q": "“누가 그 창문을 깼나요?”처럼 주어를 물으면?",
        "options": [
          "Who broke the window?",
          "Who did broke the window?",
          "Who the window broke?"
        ],
        "answer": "Who broke the window?",
        "explanation": "who가 주어이므로 기본 의문문에서 did를 추가하지 않습니다."
      },
      {
        "q": "“일주일에 몇 번 운동하나요?”에 맞는 질문은?",
        "options": [
          "How long do you work out?",
          "How often do you work out?",
          "How many do you work out?"
        ],
        "answer": "How often do you work out?",
        "explanation": "빈도는 how often으로 묻습니다. how long은 한 번 또는 전체의 기간을 묻습니다."
      }
    ],
    "spoken": {
      "prompt": "호텔에 전화한다고 생각하고 가격·위치·예약 가능 여부를 질문하세요.",
      "sample": "How much is a room per night? Where is the hotel? Do you have any rooms available for Friday?",
      "note": "질문의 의미를 정한 뒤 be 또는 do 구조를 고르세요."
    }
  },
  {
    "id": "g06",
    "cat": "문장 기초",
    "title": "07 · 대명사: I·me·my·mine과 재귀대명사",
    "lead": "같은 “나”라도 문장에서 맡는 역할에 따라 I, me, my, mine으로 달라집니다.",
    "concepts": [
      {
        "title": "주어와 목적어 자리",
        "text": "주어 자리에는 I/you/he/she/it/we/they, 동사나 전치사의 목적어 자리에는 me/you/him/her/it/us/them을 씁니다. She invited me에서 she는 초대한 사람, me는 초대받은 대상입니다. with I가 아니라 with me처럼 전치사 뒤에도 목적격이 필요합니다."
      },
      {
        "title": "명사 앞과 명사 없이 쓰는 소유",
        "text": "my/your/his/her/its/our/their는 명사 앞에서 “누구의”를 표시합니다. mine/yours/his/hers/ours/theirs는 명사 없이 “누구의 것”을 뜻합니다. It’s my bag = The bag is mine. 소유 한정사와 a/the를 겹쳐 my a bag처럼 쓰지 않습니다."
      },
      {
        "title": "재귀와 지시 표현",
        "text": "myself/yourself/himself/herself/itself/ourselves/themselves는 행동의 주어와 대상이 같을 때 씁니다. I hurt myself는 내가 나를 다치게 했다는 뜻입니다. by myself는 “혼자”입니다. this/that은 단수, these/those는 복수이며 가까움·멀어짐을 구분합니다."
      }
    ],
    "forms": [
      {
        "label": "주격 → 목적격",
        "pattern": "I → me / he → him / she → her / we → us / they → them",
        "note": "You and I went. She called you and me."
      },
      {
        "label": "소유 한정사 → 소유대명사",
        "pattern": "my → mine / your → yours / her → hers / their → theirs",
        "note": "This is my room. This room is mine."
      },
      {
        "label": "재귀",
        "pattern": "주어와 같은 대상: myself / yourself …",
        "note": "I cooked dinner by myself."
      },
      {
        "label": "지시",
        "pattern": "this / that + 단수 · these / those + 복수",
        "note": "This café is nice. These cafés are nice."
      }
    ],
    "examples": [
      {
        "en": "My friend invited me to her house.",
        "ko": "친구가 저를 자기 집에 초대했어요.",
        "analysis": "my는 friend를 꾸미고, me는 invited의 목적어, her는 house를 꾸밉니다."
      },
      {
        "en": "I went there with them.",
        "ko": "그들과 함께 그곳에 갔어요.",
        "analysis": "with는 전치사이므로 뒤에 목적격 them을 씁니다."
      },
      {
        "en": "I made the cake myself.",
        "ko": "케이크는 제가 직접 만들었어요.",
        "analysis": "myself는 “직접”이라는 강조입니다. by myself라고 하면 보통 도움 없이 혼자 했다는 뜻입니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "This is mine room.",
        "right": "This is my room.",
        "why": "명사 room 앞에서는 my를 사용합니다. mine은 명사 없이 씁니다."
      },
      {
        "wrong": "She came with I.",
        "right": "She came with me.",
        "why": "전치사 with 뒤에는 목적격 me가 필요합니다."
      }
    ],
    "exercises": [
      {
        "q": "“이 가방은 제 것이에요”의 올바른 문장은?",
        "options": [
          "This bag is my.",
          "This bag is mine.",
          "This bag is me."
        ],
        "answer": "This bag is mine.",
        "explanation": "명사 없이 “내 것”을 나타내므로 소유대명사 mine입니다."
      },
      {
        "q": "“그녀가 우리를 초대했어요”를 바르게 말하면?",
        "options": [
          "She invited we.",
          "She invited our.",
          "She invited us."
        ],
        "answer": "She invited us.",
        "explanation": "동사 invited의 목적어 자리에는 목적격 us가 옵니다."
      }
    ],
    "spoken": {
      "prompt": "친구와 함께한 일을 말하고 내 물건 하나를 소개하세요.",
      "sample": "I went shopping with her. She liked my jacket, but this bag is hers.",
      "note": "with 뒤 her, 명사 앞 my, 명사 없이 hers를 구분하세요."
    }
  },
  {
    "id": "g07",
    "cat": "명사와 수식",
    "title": "08 · 가산명사·불가산명사: 관사·복수·수량",
    "lead": "가산명사는 하나씩 세는 대상, 불가산명사는 양이나 묶음으로 보는 대상입니다. 이 구분이 a/an, 복수형, 수량 표현, 동사의 단수·복수를 결정합니다. 한국어로 셀 수 있다는 느낌보다 영어에서 그 뜻을 어떻게 쓰는지 확인하세요.",
    "concepts": [
      {
        "title": "1. 가산명사: 한 개와 여러 개를 구분합니다",
        "text": "book, chair, idea, trip, job은 각각 하나를 구분할 수 있습니다. 한 개는 a book, 여러 개는 two books입니다. 보통의 문장에서 단수 가산명사를 혼자 쓰지 않고 a/an, the, my, this 같은 한정사를 붙입니다: I bought a chair. / My chair is comfortable. 일반적인 종류를 말할 때는 복수형을 써서 I like books.라고 할 수 있습니다."
      },
      {
        "title": "2. 불가산명사: 영어에서 개수보다 양·전체로 다룹니다",
        "text": "water, information, advice, furniture, luggage는 기본 의미에서 불가산명사입니다. 물을 밀리리터로 재거나 가구를 실제로 셀 수 있어도, 영어의 water와 furniture 자체에 숫자를 바로 붙이는 것은 다른 문제입니다. 기본적으로 a/an이나 복수 -s를 붙이지 않고 단수 동사와 씁니다: The furniture is old. 가구 한 점은 a piece of furniture, 의자 한 개는 a chair라고 합니다."
      },
      {
        "title": "3. a/an과 the는 역할이 다릅니다",
        "text": "a/an은 불특정한 단수 가산명사에 씁니다. a chair는 가능하지만 a chairs, an information은 기본 용법에서 틀립니다. the는 서로 어떤 대상인지 알 수 있을 때 쓰므로 단수·복수·불가산 모두 가능합니다: the chair / the chairs / the water in this bottle. 불가산명사 앞에 the를 붙인다고 가산명사로 바뀌지는 않습니다. 일반적인 물을 말하면 Water is important., 이 병의 물을 말하면 The water in this bottle is cold.입니다."
      },
      {
        "title": "4. 수량 표현도 명사 종류에 맞춥니다",
        "text": "복수 가산명사에는 many, a few, few: many chairs / a few ideas. 불가산명사에는 much, a little, little: much luggage / a little time. some, any, a lot of는 복수 가산명사와 불가산명사 모두에 쓸 수 있습니다: some books / some water. 긍정문에서 “물이 많다”는 There is a lot of water.가 회화에서 자연스럽습니다. 질문은 How many bags? / How much luggage?처럼 나눕니다. 자세한 뉘앙스는 10번 수량 표현 강의에서 이어집니다."
      },
      {
        "title": "5. 불가산명사는 단위나 가산명사로 세세요",
        "text": "a piece of advice, two pieces of furniture, three bottles of water처럼 단위를 붙이면 그 단위가 단수·복수를 결정합니다. A piece of advice is helpful. / Two pieces of advice are helpful.에서 advice는 그대로이고 piece만 바뀝니다. 모든 불가산명사에 piece를 붙이는 것은 아닙니다. water는 a glass/bottle of water, bread는 a slice/loaf of bread가 자연스럽습니다. 돈은 ten dollars, 일은 two jobs/tasks, 숙제는 two assignments처럼 구체적인 가산명사로 바꿀 수도 있습니다."
      },
      {
        "title": "6. 한 명사가 뜻에 따라 가산·불가산이 됩니다",
        "text": "명사 전체에 영원히 한 가지 분류가 붙는다고 외우지 마세요. coffee는 음료 자체이면 불가산이지만 주문의 two coffees는 두 잔입니다. paper는 재료인 종이이면 불가산, 논문 한 편이면 a paper입니다. experience는 쌓인 경험이면 불가산, 구체적인 경험 한 번이면 an experience입니다. 아래 비교표에서 두 용법을 함께 확인하세요. 다만 이런 전환을 information이나 advice에 임의로 적용해 informations, advices라고 하지는 않습니다."
      },
      {
        "title": "7. -s가 있다고 모두 복수인 것은 아닙니다",
        "text": "news는 -s로 끝나도 “소식”을 뜻하는 불가산명사이며 The news is good.라고 합니다. 반대로 people은 “사람들”이라는 뜻에서 복수 가산명사라 Three people are waiting.입니다. clothes는 불가산명사가 아니라 복수로 쓰는 명사입니다: My clothes are wet. scissors도 보통 복수로 쓰며 한 자루는 a pair of scissors라고 합니다. Sheep처럼 단수·복수가 같은 명사도 있으므로 철자만으로 판단하지 마세요."
      },
      {
        "title": "8. 가산명사의 복수형 만드는 법",
        "text": "보통 -s를 붙입니다: book → books. -s, -sh, -ch, -x 등으로 끝나면 보통 -es: bus → buses, watch → watches, box → boxes. 자음+y는 y를 i로 바꾸고 -es: city → cities. 모음+y는 그대로 -s: boy → boys. 일부 -f/-fe는 -ves: leaf → leaves, knife → knives. roof → roofs 같은 예외도 있습니다. child → children, person → people, man → men, woman → women, foot → feet, tooth → teeth는 따로 익히세요."
      },
      {
        "title": "9. 문장을 만들 때 확인하는 순서",
        "text": "① 지금 쓰는 뜻이 가산인지 불가산인지 확인합니다. ② 가산이면 한 개인지 여러 개인지 정합니다. ③ 서로 특정할 수 있는 대상이면 the, 불특정한 하나이면 a/an, 일반적인 복수·불가산이면 보통 무관사를 씁니다. ④ 수량 표현과 동사를 맞춥니다. 사전의 [C]는 countable, [U]는 uncountable입니다. [C, U]라면 내가 쓰려는 뜻의 예문을 확인하세요. 직업·장소의 관용 표현 같은 별도 규칙은 다음 관사 강의에서 다룹니다."
      }
    ],
    "forms": [
      {
        "label": "가산 단수",
        "pattern": "a/an/the/my/this … + 단수 명사 + 단수 동사",
        "note": "A chair is next to my desk. / My room has a window."
      },
      {
        "label": "가산 복수",
        "pattern": "숫자 / many / a few + 복수 명사 + 복수 동사",
        "note": "Two chairs are next to my desk. / There are a few cafés nearby."
      },
      {
        "label": "불가산",
        "pattern": "some / much / a little + 불가산명사 + 단수 동사",
        "note": "There is some water. / I don’t have much luggage."
      },
      {
        "label": "일반적인 대상",
        "pattern": "무관사 복수 가산명사 / 무관사 불가산명사",
        "note": "Books are useful. / Information is useful."
      },
      {
        "label": "특정한 대상",
        "pattern": "the + 단수 / 복수 / 불가산명사",
        "note": "The chair is old. / The chairs are old. / The furniture is old."
      },
      {
        "label": "하나의 단위",
        "pattern": "a/an + 단위 명사 + of + 불가산명사",
        "note": "A bottle of water is on the table."
      },
      {
        "label": "여러 단위",
        "pattern": "숫자 + 복수 단위 명사 + of + 불가산명사",
        "note": "Two bottles of water are on the table. water에 -s를 붙이지 않습니다."
      },
      {
        "label": "개수 / 양 질문",
        "pattern": "How many + 복수 가산명사? / How much + 불가산명사?",
        "note": "How many bags do you have? / How much luggage do you have?"
      }
    ],
    "referenceTables": [
      {
        "title": "관사와 명사 비교",
        "headers": [
          "관사",
          "가산 단수",
          "가산 복수",
          "불가산"
        ],
        "rows": [
          [
            "a/an",
            "○ a chair",
            "× a chairs",
            "× a water\n(물 자체)"
          ],
          [
            "the",
            "○ the chair",
            "○ the chairs",
            "○ the water"
          ],
          [
            "관사 없음",
            "보통 × chair\n(단독 사용)",
            "○ chairs\n(일반적인 의자)",
            "○ water\n(일반적인 물)"
          ]
        ],
        "note": "○는 붙일 수 있다는 뜻입니다. the가 항상 필요하다는 뜻은 아닙니다. 듣는 사람이 대상을 특정할 수 있어야 the를 씁니다. 주문 상황의 a water는 “물 한 잔/한 병”이라는 가산 용법으로 쓰이기도 합니다."
      },
      {
        "title": "주요 불가산명사 · 정보와 도움",
        "headers": [
          "명사 · 뜻",
          "수량 표현과 바로 말할 문장"
        ],
        "rows": [
          [
            "information · 정보",
            "some information / a piece of information\nI found some useful information online.\n온라인에서 유용한 정보를 찾았어요."
          ],
          [
            "advice · 조언",
            "some advice / two pieces of advice\nMy friend gave me some good advice.\n친구가 좋은 조언을 해줬어요."
          ],
          [
            "assistance · 도움·지원",
            "some assistance / a lot of assistance\nI needed some assistance with my luggage.\n짐을 옮기는 데 도움이 좀 필요했어요."
          ],
          [
            "access · 접근·이용 권한",
            "access to + 장소·정보\nGuests have access to the gym.\n투숙객은 헬스장을 이용할 수 있어요."
          ],
          [
            "funding · 자금 지원",
            "some funding / an amount of funding\nThe project needs more funding.\n그 프로젝트에는 자금 지원이 더 필요해요."
          ],
          [
            "research · 연구",
            "some research / a research study\nI did some research before my trip.\n여행 전에 조사를 좀 했어요."
          ],
          [
            "news · 소식",
            "some news / a piece of news\nThe news is encouraging.\n그 소식은 희망적이에요."
          ]
        ],
        "note": "information → facts/details, advice → suggestions/tips처럼 비슷한 뜻의 가산명사로 바꿔 개수를 말할 수도 있습니다. research 자체는 기본적으로 불가산이지만 study는 가산입니다."
      },
      {
        "title": "주요 불가산명사 · 집·여행·물건",
        "headers": [
          "명사 · 뜻",
          "수량 표현과 바로 말할 문장"
        ],
        "rows": [
          [
            "furniture · 가구",
            "some furniture / three pieces of furniture\nThere isn’t much furniture in my room.\n제 방에는 가구가 많지 않아요."
          ],
          [
            "equipment · 장비",
            "some equipment / a piece of equipment\nThe gym has a lot of exercise equipment.\n그 헬스장에는 운동 장비가 많아요."
          ],
          [
            "luggage / baggage · 짐·수하물",
            "some luggage / two pieces of luggage\nMy luggage is quite heavy.\n제 짐은 꽤 무거워요."
          ],
          [
            "stationery · 문구류",
            "some stationery / stationery items\nI bought some stationery for school.\n학교에서 쓸 문구류를 좀 샀어요."
          ],
          [
            "merchandise · 판매 상품",
            "some merchandise / merchandise items\nThe store sells sports merchandise.\n그 가게는 스포츠 상품을 팔아요."
          ],
          [
            "produce · 농산물",
            "fresh produce / some produce\nI buy fresh produce at the market.\n저는 시장에서 신선한 농산물을 사요."
          ],
          [
            "homework · 숙제",
            "some homework / two assignments\nI have a lot of homework tonight.\n오늘 밤에 해야 할 숙제가 많아요."
          ],
          [
            "traffic · 교통량",
            "heavy traffic / a lot of traffic\nThere was heavy traffic on the way home.\n집에 오는 길에 차가 많이 막혔어요."
          ]
        ],
        "note": "가구는 chairs/tables, 장비는 machines/tools, 짐은 bags/suitcases로 구체화하면 셀 수 있습니다. produce는 여기서 명사 “농산물”이며 동사 “생산하다”와 구분합니다. stationery(문구류)와 stationary(움직이지 않는)는 철자와 뜻이 다릅니다."
      },
      {
        "title": "주요 불가산명사 · 일상과 음식",
        "headers": [
          "명사 · 뜻",
          "수량 표현과 바로 말할 문장"
        ],
        "rows": [
          [
            "water · 물",
            "a glass of water / two bottles of water\nCould I have a glass of water?\n물 한 잔 주실 수 있을까요?"
          ],
          [
            "coffee · 커피",
            "some coffee / a cup of coffee\nI drink a cup of coffee every morning.\n매일 아침 커피 한 잔을 마셔요."
          ],
          [
            "money · 돈",
            "some money / ten dollars\nI’m saving some money for a trip.\n여행을 위해 돈을 좀 모으고 있어요."
          ],
          [
            "time · 시간",
            "some time / two hours\nI don’t have much free time these days.\n요즘은 여유 시간이 많지 않아요."
          ],
          [
            "work · 일·업무",
            "some work / two tasks / a job\nI have a lot of work to do today.\n오늘 해야 할 일이 많아요."
          ],
          [
            "experience · 쌓인 경험",
            "some experience / years of experience\nI have some experience working with customers.\n고객을 응대한 경험이 좀 있어요."
          ],
          [
            "music · 음악",
            "some music / two songs\nI listen to music on my way to work.\n출근길에 음악을 들어요."
          ],
          [
            "weather · 날씨",
            "good weather / nice weather\nThe weather was perfect for a picnic.\n소풍 가기에 딱 좋은 날씨였어요."
          ],
          [
            "bread / rice · 빵·쌀·밥",
            "a slice of bread / a bowl of rice\nI had two slices of bread for breakfast.\n아침으로 빵 두 조각을 먹었어요."
          ]
        ],
        "note": "이 표는 기본 의미 기준입니다. 음식의 종류·주문 단위 등에서는 일부 명사가 가산 용법으로 바뀔 수 있습니다. 기본 회화에서는 위 단위 표현을 쓰면 뜻을 분명하게 전달할 수 있습니다."
      },
      {
        "title": "뜻이 달라지면 가산성도 달라집니다",
        "headers": [
          "명사",
          "불가산 의미 ↔ 가산 의미"
        ],
        "rows": [
          [
            "coffee",
            "음료 자체: I like coffee.\n주문한 잔: We ordered two coffees."
          ],
          [
            "chicken",
            "닭고기: I had chicken for dinner.\n닭 한 마리: They keep three chickens."
          ],
          [
            "paper",
            "재료인 종이: I need some paper.\n논문 한 편: I read a paper about sleep."
          ],
          [
            "glass",
            "재료인 유리: This table is made of glass.\n유리잔: I bought two glasses."
          ],
          [
            "room",
            "여유 공간: There isn’t much room in my bag.\n방: My apartment has two rooms."
          ],
          [
            "time",
            "시간의 양: I need more time.\n횟수: I’ve been there three times."
          ],
          [
            "experience",
            "쌓인 경험: I have some teaching experience.\n구체적인 경험: That trip was an amazing experience."
          ],
          [
            "hair",
            "머리카락 전체: Her hair is long.\n한 올: I found a hair in my soup."
          ]
        ],
        "note": "a good experience는 “하나의 좋은 경험”이고 good experience는 “쌓인 좋은 경험”입니다. 복수 experiences는 서로 구분되는 경험들을 뜻합니다. 뜻이 달라지므로 관사만 기계적으로 붙이지 마세요."
      }
    ],
    "examples": [
      {
        "en": "There are three chairs, but there isn’t much space.",
        "ko": "의자는 세 개 있지만 공간은 많지 않아요.",
        "analysis": "three가 개수를 세므로 chair → chairs, 동사는 are입니다. space는 여기서 공간의 양을 뜻하는 불가산명사여서 much와 단수 isn’t를 씁니다."
      },
      {
        "en": "My luggage is heavy, but my two bags are easy to carry.",
        "ko": "제 짐은 무겁지만 두 가방은 들기 편해요.",
        "analysis": "luggage는 짐 전체를 말하므로 is, two bags는 두 개의 가방을 세므로 are입니다. 한국어로 모두 “짐”이라고 생각해도 영어의 명사 종류는 다릅니다."
      },
      {
        "en": "She gave me two pieces of useful advice.",
        "ko": "그녀가 유용한 조언 두 가지를 해줬어요.",
        "analysis": "two가 세는 것은 advice가 아니라 pieces입니다. 복수형은 pieces에만 붙입니다. useful이 있어도 advice의 가산성이 바뀌지 않습니다."
      },
      {
        "en": "The information you sent me is really helpful.",
        "ko": "보내주신 정보가 정말 도움이 돼요.",
        "analysis": "you sent me가 “보내준 그 정보”를 특정하므로 the가 가능합니다. the를 썼어도 information은 불가산이어서 is를 씁니다."
      },
      {
        "en": "I bought two pieces of furniture. They are both secondhand.",
        "ko": "가구 두 점을 샀어요. 둘 다 중고예요.",
        "analysis": "두 개의 pieces를 가리키므로 다음 문장에서 They are라고 합니다. furniture 자체를 주어로 말하면 The furniture is secondhand.입니다."
      },
      {
        "en": "We ordered two coffees because we didn’t have much time.",
        "ko": "시간이 별로 없어서 커피 두 잔을 주문했어요.",
        "analysis": "주문한 두 잔을 세는 coffees는 가산 용법입니다. time은 시간의 양이므로 불가산입니다. 세 번을 뜻할 때는 three times처럼 가산 용법을 씁니다."
      },
      {
        "en": "I have some travel experience, but that was a completely new experience for me.",
        "ko": "여행 경험이 좀 있지만 그건 제게 완전히 새로운 경험이었어요.",
        "analysis": "첫 experience는 쌓인 경험의 양이어서 some을 씁니다. 두 번째는 구체적인 하나의 경험이므로 a new experience입니다. a/an은 바로 다음 소리를 따라 선택하므로 a completely new experience가 됩니다."
      },
      {
        "en": "The news is good: there won’t be much traffic tomorrow.",
        "ko": "좋은 소식이에요. 내일은 차가 많이 막히지 않을 거래요.",
        "analysis": "news는 -s로 끝나도 단수 동사 is를 씁니다. traffic은 차의 개수가 아니라 교통량이므로 much traffic입니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I bought chair.",
        "right": "I bought a chair.",
        "why": "보통의 단수 가산명사에는 한정사가 필요합니다. 특정 의자면 the chair, 내 의자면 my chair처럼 문맥에 맞게 선택하세요."
      },
      {
        "wrong": "The informations are helpful.",
        "right": "The information is helpful.",
        "why": "정보를 뜻하는 information은 불가산명사입니다. -s를 붙이지 않고 단수 동사 is를 씁니다. 개수를 세고 싶으면 two pieces of information 또는 two useful facts라고 합니다."
      },
      {
        "wrong": "She gave me an advice.",
        "right": "She gave me some advice. / She gave me a piece of advice.",
        "why": "조언을 뜻하는 advice에 a/an을 직접 붙이지 않습니다. “하나”를 강조하려면 piece라는 가산 단위를 붙이세요."
      },
      {
        "wrong": "I don’t have many luggage.",
        "right": "I don’t have much luggage. / I don’t have many bags.",
        "why": "luggage는 양을 말하므로 much, bags는 복수 개수를 말하므로 many입니다."
      },
      {
        "wrong": "Two pieces of furniture is enough.",
        "right": "Two pieces of furniture are enough.",
        "why": "주어의 핵심은 복수인 pieces입니다. of 뒤의 furniture만 보고 is를 고르면 안 됩니다."
      },
      {
        "wrong": "The news are good.",
        "right": "The news is good.",
        "why": "news의 끝 -s는 일반적인 복수형 표시가 아닙니다. 소식을 뜻하는 불가산명사로 단수 동사와 연결합니다."
      },
      {
        "wrong": "I have two homeworks and three works to finish. (숙제 두 개와 업무 세 가지)",
        "right": "I have two assignments and three tasks to finish.",
        "why": "숙제 homework와 업무 work는 이 뜻에서 불가산명사입니다. 각각 assignment와 task로 구체화하면 개수를 셀 수 있습니다. works가 미술·문학 “작품들”이라는 뜻으로 쓰이는 경우와 구분하세요."
      }
    ],
    "exercises": [
      {
        "q": "“유용한 조언을 좀 받았어요”의 기본 표현은?",
        "options": [
          "I got some useful advice.",
          "I got an useful advice.",
          "I got useful advices."
        ],
        "answer": "I got some useful advice.",
        "explanation": "advice는 기본 의미에서 불가산명사입니다. some advice라고 하고, 조언 하나를 세려면 a piece of advice라고 말합니다. 또한 useful은 /j/ 소리로 시작해 단수 가산명사 앞이라도 an useful이 되지 않습니다."
      },
      {
        "q": "“사람들이 친절해요”의 올바른 문장은?",
        "options": [
          "The people is friendly.",
          "The people are friendly.",
          "The people am friendly."
        ],
        "answer": "The people are friendly.",
        "explanation": "사람들을 뜻하는 people은 복수 가산명사이므로 are를 씁니다. -s가 없다는 이유로 단수라고 판단하지 마세요."
      },
      {
        "q": "이 병에 든 특정한 물을 가리킬 때 올바른 문장은?",
        "options": [
          "The water in this bottle is cold.",
          "A water in this bottle are cold.",
          "The waters in this bottle are cold."
        ],
        "answer": "The water in this bottle is cold.",
        "explanation": "불가산명사도 특정할 수 있으면 the를 씁니다. 이 문장은 물 자체를 말하므로 water에 -s를 붙이지 않고 단수 동사 is를 씁니다."
      },
      {
        "q": "“가구 두 점이면 충분해요”의 올바른 문장은?",
        "options": [
          "Two pieces of furniture are enough.",
          "Two furnitures are enough.",
          "Two pieces of furniture is enough."
        ],
        "answer": "Two pieces of furniture are enough.",
        "explanation": "furniture는 불가산명사라 pieces로 셉니다. 주어의 핵심은 복수 pieces이므로 동사는 are입니다."
      },
      {
        "q": "“그 소식은 좋네요”의 올바른 문장은?",
        "options": [
          "The news are good.",
          "The news is good.",
          "The new is good."
        ],
        "answer": "The news is good.",
        "explanation": "news는 -s로 끝나는 불가산명사입니다. news 형태를 유지하고 단수 동사 is와 연결합니다."
      },
      {
        "q": "“마쳐야 할 업무가 많아요”의 자연스러운 표현은?",
        "options": [
          "I have many work to finish.",
          "I have a lot of work to finish.",
          "I have a work to finish."
        ],
        "answer": "I have a lot of work to finish.",
        "explanation": "업무의 양을 뜻하는 work는 불가산명사여서 many나 a를 직접 붙이지 않습니다. 개수를 세려면 many tasks 또는 several jobs처럼 구체화하세요."
      },
      {
        "q": "카페 주문에서 We ordered two coffees.는 어떤 뜻인가요?",
        "options": [
          "커피 두 잔을 주문했다.",
          "불가산명사라 어떤 상황에서도 틀린 문장이다.",
          "커피 원두 두 알을 주문했다."
        ],
        "answer": "커피 두 잔을 주문했다.",
        "explanation": "주문 상황에서는 coffee가 한 잔을 뜻하는 가산 용법으로 쓰입니다. 음료 자체에 대한 선호는 I like coffee.처럼 불가산 용법입니다."
      },
      {
        "q": "“그 여행은 놀라운 경험이었어요”의 올바른 문장은?",
        "options": [
          "That trip was an amazing experience.",
          "That trip was many amazing experience.",
          "That trip were an amazing experience."
        ],
        "answer": "That trip was an amazing experience.",
        "explanation": "구체적인 하나의 경험은 가산명사 an experience입니다. 형용사 amazing의 첫소리가 모음이므로 an을 씁니다. 쌓인 경험은 some experience처럼 불가산으로 씁니다."
      },
      {
        "q": "“장비가 비싸요”의 기본 표현은?",
        "options": [
          "The equipments are expensive.",
          "The equipment is expensive.",
          "An equipment are expensive."
        ],
        "answer": "The equipment is expensive.",
        "explanation": "equipment는 장비를 뜻하는 불가산명사입니다. 복수 -s와 a/an을 직접 붙이지 않고 단수 동사 is와 씁니다."
      },
      {
        "q": "“차가 많이 막히지는 않았어요”의 올바른 문장은?",
        "options": [
          "There wasn’t much traffic.",
          "There weren’t many traffic.",
          "There wasn’t a few traffic."
        ],
        "answer": "There wasn’t much traffic.",
        "explanation": "traffic은 교통량이라는 불가산명사이므로 much와 단수 wasn’t를 씁니다. 차의 개수를 말하면 many cars처럼 가산명사를 쓰세요."
      },
      {
        "q": "“도시 세 곳을 방문했어요”의 올바른 문장은?",
        "options": [
          "I visited three city.",
          "I visited three citys.",
          "I visited three cities."
        ],
        "answer": "I visited three cities.",
        "explanation": "city는 가산명사라 three 뒤에서 복수형입니다. 자음+y로 끝나므로 y를 i로 바꾸고 -es를 붙여 cities가 됩니다."
      },
      {
        "q": "“종이가 좀 필요해요”에서 재료인 종이를 뜻하는 문장은?",
        "options": [
          "I need some paper.",
          "I need a paper. (종이라는 재료 자체)",
          "I need many paper."
        ],
        "answer": "I need some paper.",
        "explanation": "재료인 종이를 뜻하면 paper는 불가산명사입니다. 한 장은 a sheet of paper라고 합니다. a paper는 문맥에 따라 논문 한 편이나 신문 한 부 등을 뜻할 수 있습니다."
      }
    ],
    "spoken": {
      "prompt": "내 방이나 여행 준비를 설명하세요. ① 개수를 셀 수 있는 물건 두 가지 ② 가구·짐·공간의 양 ③ 누군가에게 받은 조언을 넣어 4~5문장으로 말해 보세요.",
      "sample": "There are two chairs and a small desk in my room. I don’t have much furniture, so there’s plenty of space. Before my last trip, I packed two bags, but my luggage was too heavy. My friend gave me a useful piece of advice: pack only what you really need. That made the trip much easier.",
      "note": "two chairs와 two bags는 복수 가산명사, a desk는 단수 가산명사입니다. furniture, space, luggage는 불가산명사입니다. advice 하나를 말하려고 piece를 붙였습니다. 물건 설명에서 구체적인 경험과 결과로 이어가면 발화를 늘릴 수 있습니다."
    }
  },
  {
    "id": "g08",
    "cat": "명사와 수식",
    "title": "09 · a·an·the와 관사 없이 쓰는 경우",
    "lead": "관사는 단순히 “하나”를 붙이는 장식이 아니라, 듣는 사람이 그 대상을 특정할 수 있는지 알려줍니다.",
    "concepts": [
      {
        "title": "a/an: 여러 개 중 하나를 소개",
        "text": "처음 꺼내는 불특정한 단수 가산명사에 a/an을 씁니다. I saw a dog는 “개 한 마리를 봤다”이며 어떤 개인지 아직 정해지지 않았습니다. a/an의 선택은 철자가 아니라 바로 뒤 말의 첫소리 기준입니다. a university는 /y/ 소리, an hour는 h가 소리 나지 않기 때문입니다."
      },
      {
        "title": "the: 어떤 것인지 특정 가능",
        "text": "앞서 소개했거나, 상황상 서로 알고 있거나, 뒤의 설명으로 특정되는 대상에 씁니다. I saw a dog. The dog was cute에서 같은 개를 다시 말합니다. the book on my desk는 책상 위의 그 책을 특정합니다. the는 복수·불가산명사에도 쓸 수 있습니다: the people we met, the water in this bottle."
      },
      {
        "title": "일반적인 복수·불가산에는 보통 무관사",
        "text": "I like movies / I like music은 영화·음악 전체에 대한 선호입니다. I like the movies you recommended는 추천받은 특정 영화들입니다. 고유명사는 보통 관사를 생략하지만 the United States 같은 관용 예외가 있습니다. at home, go to work 같은 표현은 묶음으로 익히세요."
      },
      {
        "title": "직업과 소유 한정사",
        "text": "직업을 나타내는 단수 가산명사에는 I’m a teacher처럼 a/an을 씁니다. my/this/that 등이 이미 명사를 한정하면 a/the와 겹치지 않습니다: my house, this book. 형용사가 명사 앞에 있으면 a nice hotel처럼 형용사 소리를 보고 a/an을 선택합니다."
      }
    ],
    "forms": [
      {
        "label": "새로운 불특정 하나",
        "pattern": "a/an + 단수 가산명사",
        "note": "a café / an old café"
      },
      {
        "label": "특정 대상",
        "pattern": "the + 단수/복수/불가산명사",
        "note": "the café near my house / the coffee I ordered"
      },
      {
        "label": "일반적 선호",
        "pattern": "복수 명사 또는 불가산명사",
        "note": "I like cafés. I like coffee."
      },
      {
        "label": "직업",
        "pattern": "be + a/an + 직업 명사",
        "note": "My sister is an engineer."
      }
    ],
    "examples": [
      {
        "en": "I found a small café. The café had great coffee.",
        "ko": "작은 카페를 찾았어요. 그 카페의 커피가 훌륭했어요.",
        "analysis": "처음에는 a café로 소개하고, 같은 대상을 다시 말할 때 the café라고 합니다. coffee는 음료의 일반적 질을 말하므로 무관사입니다."
      },
      {
        "en": "I stayed at a hotel near the station.",
        "ko": "역 근처의 한 호텔에 묵었어요.",
        "analysis": "hotel은 처음 소개한 하나, station은 대화에서 특정되는 역입니다. 문맥 없이 모든 station 앞에 항상 the를 쓰는 규칙은 아닙니다."
      },
      {
        "en": "I’m an office worker, and my brother is a student.",
        "ko": "저는 회사원이고 남동생은 학생이에요.",
        "analysis": "office는 모음 소리로 시작하여 an, student는 자음 소리로 시작하여 a를 씁니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I am teacher.",
        "right": "I am a teacher.",
        "why": "직업 teacher는 단수 가산명사여서 관사가 필요합니다."
      },
      {
        "wrong": "I like the music. (음악 전반에 대한 선호)",
        "right": "I like music.",
        "why": "음악 일반에 대한 선호는 무관사 music. 특정 음악을 가리키는 문맥에서는 the music도 가능합니다."
      }
    ],
    "exercises": [
      {
        "q": "hour 앞의 관사를 고르면?",
        "options": [
          "a hour",
          "an hour",
          "둘 다 첫소리와 관계없이 같다"
        ],
        "answer": "an hour",
        "explanation": "hour의 h는 발음되지 않아서 모음 소리로 시작하므로 an을 씁니다."
      },
      {
        "q": "음악 전체를 좋아한다고 처음 말할 때 자연스러운 표현은?",
        "options": [
          "I like music.",
          "I like a music.",
          "I like musics."
        ],
        "answer": "I like music.",
        "explanation": "음악 전반을 뜻하는 music은 불가산명사이며 여기서는 무관사입니다."
      }
    ],
    "spoken": {
      "prompt": "새로운 장소를 소개하고 같은 장소를 다시 설명하세요.",
      "sample": "There’s a bookstore near my house. The bookstore is small, but it has a cozy reading area.",
      "note": "처음 a bookstore, 다음 the bookstore로 대상을 이어가세요."
    }
  },
  {
    "id": "g09",
    "cat": "명사와 수식",
    "title": "10 · some·any·many·much와 수량 표현",
    "lead": "수량 표현은 명사가 셀 수 있는지, 양이 충분한지에 따라 선택합니다.",
    "concepts": [
      {
        "title": "many와 much, a lot of",
        "text": "many는 복수 가산명사, much는 불가산명사와 씁니다. many people / much time입니다. 긍정문에서는 much보다 a lot of가 회화에서 자주 쓰입니다. a lot of는 두 종류 모두 가능합니다: a lot of friends / a lot of money."
      },
      {
        "title": "some과 any의 기본·예외",
        "text": "some은 긍정문, any는 부정·질문에서 자주 씁니다. I have some time / I don’t have any time / Do you have any time? 하지만 상대가 수락하기를 기대하는 제안·요청에는 Would you like some coffee? / Could I have some water?처럼 some을 쓸 수 있습니다. 긍정문의 any는 “어떤 것이든”이라는 뜻도 있습니다."
      },
      {
        "title": "a few/a little과 few/little",
        "text": "a few는 셀 수 있는 것 몇 개, a little은 셀 수 없는 것 조금입니다. 둘 다 어느 정도 있다는 뜻입니다. a 없이 few/little은 매우 적어서 부족하다는 뉘앙스가 강합니다. I have a few friends는 친구가 몇 명 있다, I have few friends는 친구가 거의 없다입니다."
      },
      {
        "title": "each/every와 all/both",
        "text": "each/every 뒤에는 보통 단수 명사·단수 동사: Every room has a window. all/both 뒤에는 복수 대상을 나타낼 수 있습니다: Both rooms have windows. every days가 아니라 every day라는 형태를 익히세요."
      }
    ],
    "forms": [
      {
        "label": "가산 복수",
        "pattern": "many / a few / few + 복수 명사",
        "note": "many restaurants / a few people"
      },
      {
        "label": "불가산",
        "pattern": "much / a little / little + 명사",
        "note": "much luggage / a little time"
      },
      {
        "label": "둘 다 가능",
        "pattern": "some / any / a lot of + 명사",
        "note": "some chairs / some water"
      },
      {
        "label": "하나씩",
        "pattern": "each/every + 단수 명사 + 단수 동사",
        "note": "Every café has Wi-Fi."
      }
    ],
    "examples": [
      {
        "en": "I have a few close friends, and we meet every month.",
        "ko": "친한 친구가 몇 명 있고 매달 만나요.",
        "analysis": "friends는 복수 가산명사여서 a few, every 뒤 month는 단수입니다."
      },
      {
        "en": "We had little time, so we took a taxi.",
        "ko": "시간이 거의 없어서 택시를 탔어요.",
        "analysis": "little time은 시간이 부족하다는 뉘앙스입니다. a little time이면 조금은 있다는 쪽에 초점이 갑니다."
      },
      {
        "en": "Could I have some water?",
        "ko": "물 좀 주실 수 있을까요?",
        "analysis": "질문 형태여도 정중한 요청이므로 some이 자연스럽습니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I have many time.",
        "right": "I have a lot of time.",
        "why": "time은 여기서 불가산명사이므로 many를 쓰지 않습니다."
      },
      {
        "wrong": "Every rooms are clean.",
        "right": "Every room is clean.",
        "why": "every 뒤에는 단수 명사 room, 동사는 is를 씁니다."
      }
    ],
    "exercises": [
      {
        "q": "“짐이 많지 않아요”의 올바른 문장은?",
        "options": [
          "I don’t have many luggage.",
          "I don’t have much luggage.",
          "I don’t have a few luggage."
        ],
        "answer": "I don’t have much luggage.",
        "explanation": "luggage는 불가산명사이므로 much와 연결합니다."
      },
      {
        "q": "“친구가 몇 명은 있어요”에 맞는 표현은?",
        "options": [
          "I have a few friends.",
          "I have a little friends.",
          "I have few friend."
        ],
        "answer": "I have a few friends.",
        "explanation": "friends는 복수 가산명사이고 어느 정도 있다는 뜻이므로 a few입니다."
      }
    ],
    "spoken": {
      "prompt": "내 동네에 많은 것과 거의 없는 것을 말하세요.",
      "sample": "There are a lot of cafés in my neighborhood, but there isn’t much parking space.",
      "note": "cafés와 space의 명사 종류를 확인하세요."
    }
  },
  {
    "id": "g10",
    "cat": "명사와 수식",
    "title": "11 · 형용사·부사와 감정 표현",
    "lead": "형용사는 “어떤 사람·사물인가”, 부사는 “어떻게·얼마나·얼마나 자주인가”를 설명합니다.",
    "concepts": [
      {
        "title": "형용사가 오는 자리",
        "text": "명사 앞: a quiet room. be/feel/look/seem 같은 연결동사 뒤: The room is quiet / I feel tired. 연결동사 뒤에서 주어의 상태를 말할 때는 부사가 아니라 형용사를 씁니다. feel good과 feel well은 의미에 따라 다를 수 있지만 feel happily를 기본 감정 표현으로 쓰지는 않습니다."
      },
      {
        "title": "부사는 동사·형용사·다른 부사를 꾸밉니다",
        "text": "She speaks slowly는 말하는 방식을, really nice는 nice의 정도를 설명합니다. 많은 부사가 -ly로 끝나지만 fast/hard/late는 형태가 같고, good → well은 불규칙입니다. hard는 열심히, hardly는 거의 ~않다로 뜻이 다르므로 형태만 보고 바꾸지 마세요."
      },
      {
        "title": "빈도부사의 위치",
        "text": "usually/often/always/never는 일반동사 앞, be동사 뒤가 기본 위치입니다: I usually walk / I am usually busy. 보조동사가 있으면 첫 보조동사 뒤가 흔합니다: I have never been there. sometimes는 문장 맨 앞이나 뒤에도 자연스럽게 옵니다."
      },
      {
        "title": "-ed와 -ing 감정 형용사",
        "text": "bored/interested/excited는 느끼는 대상의 상태, boring/interesting/exciting은 그런 느낌을 일으키는 성질을 말합니다. I’m bored는 내가 지루하다, I’m boring은 내가 남에게 지루함을 주는 사람이라는 뜻입니다. 사람도 exciting할 수 있으므로 단순히 “사람=-ed, 사물=-ing”로 외우지 마세요."
      }
    ],
    "forms": [
      {
        "label": "명사 수식",
        "pattern": "형용사 + 명사",
        "note": "a comfortable room"
      },
      {
        "label": "상태 설명",
        "pattern": "주어 + be/feel/look + 형용사",
        "note": "I felt nervous. The café looked nice."
      },
      {
        "label": "행동 수식",
        "pattern": "동사 + 부사",
        "note": "He drives carefully."
      },
      {
        "label": "감정의 방향",
        "pattern": "I’m interested / It’s interesting",
        "note": "interested in + 관심 대상"
      }
    ],
    "examples": [
      {
        "en": "The movie was boring, so I felt bored.",
        "ko": "영화가 지루해서 저는 지루함을 느꼈어요.",
        "analysis": "boring은 영화의 성질, bored는 내가 느낀 상태입니다."
      },
      {
        "en": "I usually walk to work, but I’m often tired afterward.",
        "ko": "보통 걸어서 출근하지만 그 후에는 자주 피곤해요.",
        "analysis": "usually는 walk 앞, often은 am 뒤에 위치합니다."
      },
      {
        "en": "She speaks English well.",
        "ko": "그녀는 영어를 잘해요.",
        "analysis": "speaks라는 동작을 꾸미므로 형용사 good이 아닌 부사 well을 씁니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I am interesting in music.",
        "right": "I am interested in music.",
        "why": "관심을 느끼는 내 상태는 interested, 전치사는 in입니다."
      },
      {
        "wrong": "He drives careful.",
        "right": "He drives carefully.",
        "why": "운전하는 방식을 설명하므로 부사 carefully를 사용합니다."
      }
    ],
    "exercises": [
      {
        "q": "“여행이 신났고, 나도 신이 났어요”의 올바른 문장은?",
        "options": [
          "The trip was excited, and I was exciting.",
          "The trip was exciting, and I was excited.",
          "The trip was exciting, and I was excite."
        ],
        "answer": "The trip was exciting, and I was excited.",
        "explanation": "여행은 신나는 성질이 있어 exciting, 내가 느끼는 상태는 excited입니다."
      },
      {
        "q": "“보통 바빠요”의 기본 어순은?",
        "options": [
          "I usually am busy. (강조 없는 기본 위치)",
          "I am usually busy.",
          "I am busy usually never."
        ],
        "answer": "I am usually busy.",
        "explanation": "빈도부사 usually의 기본 위치는 be동사 뒤입니다. 특별한 강조에서는 다른 위치도 가능하지만 기본형을 먼저 익히세요."
      }
    ],
    "spoken": {
      "prompt": "좋아하는 영화의 성질과 내가 느낀 감정을 따로 설명하세요.",
      "sample": "The story was interesting, and I was excited about the ending.",
      "note": "interesting/exciting과 interested/excited의 방향을 구분하세요."
    }
  },
  {
    "id": "g11",
    "cat": "명사와 수식",
    "title": "12 · 비교급·최상급과 as … as",
    "lead": "두 대상을 비교하면 비교급, 같은 범위에서 가장 두드러지면 최상급을 씁니다.",
    "concepts": [
      {
        "title": "비교급 만들기",
        "text": "짧은 형용사는 보통 -er: small → smaller, nice → nicer. 끝이 자음+y이면 easy → easier, 일부 짧은 단어는 big → bigger처럼 마지막 자음을 겹칩니다. 긴 형용사는 more comfortable처럼 more를 앞에 둡니다. 2음절 형용사는 단어별 차이가 있으므로 모르는 형태는 사전으로 확인하세요."
      },
      {
        "title": "불규칙과 비교 대상",
        "text": "good/well → better → best, bad → worse → worst입니다. A is cheaper than B에서 than 뒤에 비교 대상을 붙입니다. 비교급은 much/a lot/a little로 정도를 더할 수 있습니다. very cheaper가 아니라 much cheaper, more cheaper가 아니라 cheaper입니다."
      },
      {
        "title": "최상급의 범위",
        "text": "the cheapest restaurant in my neighborhood처럼 “어디에서 가장”인지를 붙이면 정확합니다. one of the best cafés는 최고의 카페 중 하나이고, one of 뒤의 명사는 복수입니다. 소유 한정사가 있으면 my best friend처럼 the를 겹치지 않습니다."
      },
      {
        "title": "동등 비교",
        "text": "as + 형용사/부사 원급 + as는 “~만큼”입니다. not as expensive as는 “~만큼 비싸지는 않은”입니다. more를 끼우지 않습니다. 회화에서는 A is better than B라고 짧게 비교한 뒤 because로 이유를 붙이면 답변이 자연스럽게 길어집니다."
      }
    ],
    "forms": [
      {
        "label": "차이",
        "pattern": "A + be + 비교급 + than B",
        "note": "This café is quieter than that one."
      },
      {
        "label": "차이의 정도",
        "pattern": "much/a lot/a little + 비교급",
        "note": "It’s much more convenient."
      },
      {
        "label": "가장",
        "pattern": "the + 최상급 + 범위",
        "note": "the best restaurant in town"
      },
      {
        "label": "비슷함",
        "pattern": "as + 원급 + as",
        "note": "It’s as comfortable as my old room."
      }
    ],
    "examples": [
      {
        "en": "Taking the subway is cheaper than driving.",
        "ko": "지하철을 타는 게 운전보다 저렴해요.",
        "analysis": "Taking the subway가 주어, cheaper가 비교급, driving이 비교 대상입니다."
      },
      {
        "en": "It’s one of the most popular parks in Seoul.",
        "ko": "서울에서 가장 인기 있는 공원 중 하나예요.",
        "analysis": "one of 뒤에는 복수 parks를 씁니다. most popular는 최상급입니다."
      },
      {
        "en": "My new apartment isn’t as spacious as my old one.",
        "ko": "새 아파트는 예전 집만큼 넓지는 않아요.",
        "analysis": "not as + 원급 spacious + as입니다. one은 apartment의 반복을 피합니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "It is more cheaper.",
        "right": "It is cheaper.",
        "why": "-er와 more로 비교급을 중복 표시하지 않습니다."
      },
      {
        "wrong": "It is one of the best café.",
        "right": "It is one of the best cafés.",
        "why": "여러 카페 중 하나를 뜻하므로 cafés는 복수입니다."
      }
    ],
    "exercises": [
      {
        "q": "“훨씬 더 편리해요”의 올바른 문장은?",
        "options": [
          "It’s very more convenient.",
          "It’s much more convenient.",
          "It’s more convenienter."
        ],
        "answer": "It’s much more convenient.",
        "explanation": "긴 형용사 convenient는 more로 비교급을 만들고, 비교급의 정도는 much로 강조합니다."
      },
      {
        "q": "“예전 집만큼 크지는 않아요”에 맞는 문장은?",
        "options": [
          "It isn’t as big as my old place.",
          "It isn’t as bigger as my old place.",
          "It isn’t as more big as my old place."
        ],
        "answer": "It isn’t as big as my old place.",
        "explanation": "as … as 안에는 비교급이 아니라 원급 big이 들어갑니다."
      }
    ],
    "spoken": {
      "prompt": "현재와 과거의 동네를 비교하고 이유를 붙이세요.",
      "sample": "My current neighborhood is quieter than my old one. It’s also much more convenient because the station is nearby.",
      "note": "비교급 + than 뒤에 비교 대상을 분명히 넣으세요."
    }
  },
  {
    "id": "g12",
    "cat": "명사와 수식",
    "title": "13 · 전치사: 시간·위치·이동",
    "lead": "전치사는 뒤의 명사·대명사와 한 덩어리가 되어 시간, 장소, 방향 등의 관계를 나타냅니다.",
    "concepts": [
      {
        "title": "시간의 at/on/in",
        "text": "at은 시각이나 특정 시점: at seven, at noon, at night. on은 요일·날짜: on Monday, on July 3. in은 월·연도·계절·하루의 큰 시간대: in July, in 2025, in summer, in the morning. on Monday morning처럼 날짜·요일로 좁혀지면 on을 씁니다."
      },
      {
        "title": "위치와 방향은 다릅니다",
        "text": "in은 내부·영역, on은 표면, at은 활동 지점에 초점이 있습니다. at the station은 역이라는 지점, in the station은 역 건물 내부를 강조합니다. to는 도착 방향, into는 안으로 들어감, from은 출발점입니다. go to the gym과 be at the gym을 구분하세요."
      },
      {
        "title": "기간·기한·순서",
        "text": "for two hours는 길이, since Monday는 시작점, during the movie는 어떤 사건이 진행되는 동안입니다. by Friday는 금요일까지 완료, until Friday는 금요일까지 계속입니다. I’ll finish it by Friday와 I’ll stay until Friday는 시간 관계가 다릅니다."
      },
      {
        "title": "무전치사와 동사 조합",
        "text": "this/next/last/every로 시작하는 시간 표현에는 보통 전치사를 넣지 않습니다: next week, last night, every day. go home은 to 없이 씁니다. listen to music, wait for a bus처럼 특정 동사가 요구하는 전치사는 표현째 익혀야 합니다. 전치사 뒤 동사를 넣을 때는 보통 -ing형입니다."
      }
    ],
    "forms": [
      {
        "label": "시간",
        "pattern": "at 7 / on Friday / in May",
        "note": "I’ll see you on Friday at seven."
      },
      {
        "label": "위치",
        "pattern": "at a point / in an area / on a surface",
        "note": "at home / in Seoul / on the table"
      },
      {
        "label": "이동",
        "pattern": "to / into / from + 장소",
        "note": "go to work / walk into the room"
      },
      {
        "label": "기한과 지속",
        "pattern": "by = 완료 기한 / until = 지속의 끝",
        "note": "finish by six / stay until six"
      }
    ],
    "examples": [
      {
        "en": "I went to the gym on Monday morning.",
        "ko": "월요일 아침에 헬스장에 갔어요.",
        "analysis": "to는 이동 목적지, on은 요일로 특정한 아침을 나타냅니다."
      },
      {
        "en": "I stayed at the café for two hours.",
        "ko": "카페에 두 시간 동안 있었어요.",
        "analysis": "at은 머문 지점, for는 기간의 길이입니다."
      },
      {
        "en": "I’ll be home by six, and I’ll stay there until nine.",
        "ko": "6시까지 집에 도착해서 9시까지 있을게요.",
        "analysis": "by six는 도착 기한, until nine은 머무는 상태가 계속되는 끝입니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I went to home last night.",
        "right": "I went home last night.",
        "why": "go home에서 home은 방향을 나타내는 부사로 쓰여 to를 넣지 않습니다."
      },
      {
        "wrong": "I’ll meet you in next week.",
        "right": "I’ll meet you next week.",
        "why": "next week 앞에는 기본적으로 전치사를 붙이지 않습니다."
      }
    ],
    "exercises": [
      {
        "q": "“금요일 아침에 만나요”의 올바른 표현은?",
        "options": [
          "Let’s meet in Friday morning.",
          "Let’s meet on Friday morning.",
          "Let’s meet at Friday morning."
        ],
        "answer": "Let’s meet on Friday morning.",
        "explanation": "요일과 함께 특정한 아침을 말하면 on을 사용합니다."
      },
      {
        "q": "“금요일까지 제출을 완료할게요”에는?",
        "options": [
          "I’ll submit it until Friday.",
          "I’ll submit it by Friday.",
          "I’ll submit it during Friday."
        ],
        "answer": "I’ll submit it by Friday.",
        "explanation": "완료해야 할 기한은 by입니다. until은 계속되는 동작·상태의 끝을 나타냅니다."
      }
    ],
    "spoken": {
      "prompt": "일정 하나를 시각·요일·장소를 넣어 말하세요.",
      "sample": "I usually meet my friends at a café on Saturdays. We stay there for about two hours.",
      "note": "at/on/for의 관계를 각각 설명할 수 있는지 확인하세요."
    }
  },
  {
    "id": "g13",
    "cat": "시제",
    "title": "14 · 현재형: 습관·사실·상태",
    "lead": "현재형은 “지금 눈앞에서 하는 행동”만을 뜻하지 않습니다. 반복하는 일, 일반적 사실, 현재 유지되는 상태가 중심입니다.",
    "concepts": [
      {
        "title": "반복과 일반적 사실",
        "text": "I work out twice a week는 반복 습관, Water boils at 100°C는 일반적 사실입니다. I live in Seoul처럼 일정 기간 유지되는 상태도 현재형으로 말합니다. 지금 진행 중인 일시적 동작은 보통 I’m cooking처럼 진행형으로 구분합니다."
      },
      {
        "title": "상태동사에 주의",
        "text": "know, like, want, need, believe 등은 기본 의미에서 진행형보다 현재형을 씁니다. I know the answer, I like jazz가 기본입니다. 일부 동사는 뜻이 바뀌면 진행형이 가능합니다: I think it’s nice는 의견, I’m thinking about it은 고민하는 과정입니다."
      },
      {
        "title": "빈도와 일정",
        "text": "usually/often/sometimes로 빈도를 말하거나 every morning/twice a week를 뒤에 붙입니다. 시간표·정해진 공식 일정도 현재형으로 말할 수 있습니다: The train leaves at eight. 단순히 미래의 모든 계획을 현재형으로 말하는 것은 아니며, 개인 계획에는 진행형이나 going to도 자주 씁니다."
      }
    ],
    "forms": [
      {
        "label": "습관",
        "pattern": "주어 + 현재형 + 빈도 표현",
        "note": "I walk every evening."
      },
      {
        "label": "상태",
        "pattern": "주어 + 상태동사 현재형",
        "note": "I like music. I need a break."
      },
      {
        "label": "공식 일정",
        "pattern": "주어 + 현재형 + 미래 시점",
        "note": "The museum opens at nine tomorrow."
      },
      {
        "label": "현재와 진행 대비",
        "pattern": "I cook / I’m cooking",
        "note": "평소 요리한다 / 지금 요리하는 중이다"
      }
    ],
    "examples": [
      {
        "en": "I usually cook at home, but I’m eating out today.",
        "ko": "보통 집에서 요리하지만 오늘은 외식하고 있어요.",
        "analysis": "usually cook는 습관, am eating out은 오늘의 일시적 상황입니다."
      },
      {
        "en": "My parents live nearby, so I visit them often.",
        "ko": "부모님이 근처에 사셔서 자주 방문해요.",
        "analysis": "live는 유지되는 상태, visit은 반복 행동입니다."
      },
      {
        "en": "I think the neighborhood is safe.",
        "ko": "동네가 안전하다고 생각해요.",
        "analysis": "think는 여기서 의견을 말하는 상태동사입니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I am knowing the answer.",
        "right": "I know the answer.",
        "why": "“알다”의 기본 의미는 상태동사여서 현재형 know를 씁니다."
      },
      {
        "wrong": "I go to gym yesterday.",
        "right": "I went to the gym yesterday.",
        "why": "yesterday로 끝난 과거를 특정했으므로 현재형 대신 과거형이 필요합니다."
      }
    ],
    "exercises": [
      {
        "q": "“평소 일주일에 두 번 수영해요”에 맞는 문장은?",
        "options": [
          "I swim twice a week.",
          "I swimming twice a week.",
          "I am swim twice a week."
        ],
        "answer": "I swim twice a week.",
        "explanation": "반복 습관은 현재형으로 말합니다. 진행형을 만들려면 be + -ing가 필요합니다."
      },
      {
        "q": "“저는 그 노래를 알아요”의 기본 표현은?",
        "options": [
          "I know that song.",
          "I am knowing that song.",
          "I am know that song."
        ],
        "answer": "I know that song.",
        "explanation": "know는 여기서 상태를 나타내므로 단순현재가 기본입니다."
      }
    ],
    "spoken": {
      "prompt": "평소 주말에 하는 일 세 가지를 빈도와 함께 말하세요.",
      "sample": "I usually sleep in on Saturdays. I sometimes meet my friends. I take a walk every Sunday.",
      "note": "평소 습관으로 시작하고, 특정 주말 이야기는 과거형으로 따로 전환하세요."
    }
  },
  {
    "id": "g14",
    "cat": "시제",
    "title": "15 · 과거형: 끝난 사건과 경험의 순서",
    "lead": "과거형은 현재 이전의 특정 시간에 끝난 행동이나 상태를 이야기합니다.",
    "concepts": [
      {
        "title": "규칙형과 불규칙형",
        "text": "일반동사는 보통 -ed: work → worked, -e는 -d: live → lived, 자음+y는 study → studied입니다. go → went, see → saw, eat → ate, buy → bought, take → took, have → had 같은 불규칙형은 자주 쓰는 것부터 익히세요. 주어가 he/she여도 일반동사 과거형에는 -s를 추가하지 않습니다."
      },
      {
        "title": "동작과 상태의 과거",
        "text": "I visited a park는 행동, I was tired는 상태입니다. be 과거는 was/were, 일반동사의 부정·질문은 didn’t/did + 원형입니다. 과거형 발화가 어려우면 Last weekend를 먼저 말한 뒤 went, had, saw 같은 핵심 동사로 사건을 이어가세요."
      },
      {
        "title": "과거 이야기를 시간 순서로",
        "text": "First, then, after that, finally를 이용하면 과거형만으로도 여러 사건의 순서를 설명할 수 있습니다. 모든 과거 사건을 과거완료로 만들 필요는 없습니다. 기억에 남는 경험은 배경 → 사건 → 결과·느낌 순서로 말하면 듣기 쉽습니다."
      },
      {
        "title": "-ed의 발음",
        "text": "/t/는 worked·watched, /d/는 played·lived, /ɪd/는 wanted·needed처럼 앞소리에 따라 달라집니다. 특히 t/d 소리 뒤에는 한 음절이 추가됩니다. 철자뿐 아니라 예문을 읽을 때 동사의 끝소리도 확인하세요."
      }
    ],
    "forms": [
      {
        "label": "긍정",
        "pattern": "주어 + 과거동사",
        "note": "I went. She worked."
      },
      {
        "label": "부정",
        "pattern": "주어 + didn’t + 원형",
        "note": "I didn’t go. She didn’t work."
      },
      {
        "label": "질문",
        "pattern": "Did + 주어 + 원형?",
        "note": "Did you enjoy it?"
      },
      {
        "label": "be 과거",
        "pattern": "was/were + 보어",
        "note": "It was great. We were happy."
      }
    ],
    "examples": [
      {
        "en": "Last weekend, I went to a park and took some photos.",
        "ko": "지난 주말에 공원에 가서 사진을 찍었어요.",
        "analysis": "went와 took 모두 끝난 행동의 과거형입니다. and로 두 행동을 연결합니다."
      },
      {
        "en": "The weather was nice, but the park was crowded.",
        "ko": "날씨는 좋았지만 공원은 붐볐어요.",
        "analysis": "nice/crowded는 상태를 설명하므로 was 뒤에 붙입니다."
      },
      {
        "en": "Did you like the movie? — Yes, I did.",
        "ko": "영화가 좋았나요? — 네, 좋았어요.",
        "analysis": "질문의 did가 과거를 표시하므로 like는 원형입니다. 짧은 답에도 did를 사용합니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "She wented there.",
        "right": "She went there.",
        "why": "go의 과거형은 went입니다. 불규칙 과거형에 -ed를 다시 붙이지 않습니다."
      },
      {
        "wrong": "Did you saw it?",
        "right": "Did you see it?",
        "why": "did 뒤에는 원형 see입니다."
      }
    ],
    "exercises": [
      {
        "q": "buy의 과거형을 사용한 올바른 문장은?",
        "options": [
          "I buyed a ticket yesterday.",
          "I bought a ticket yesterday.",
          "I buying a ticket yesterday."
        ],
        "answer": "I bought a ticket yesterday.",
        "explanation": "buy의 불규칙 과거형은 bought입니다. 규칙동사처럼 -ed를 붙여 buyed로 만들지 않으며, buying만으로는 과거 문장의 동사가 되지 않습니다."
      },
      {
        "q": "“어제 바쁘지 않았어요”의 올바른 문장은?",
        "options": [
          "I didn’t busy yesterday.",
          "I wasn’t busy yesterday.",
          "I don’t was busy yesterday."
        ],
        "answer": "I wasn’t busy yesterday.",
        "explanation": "busy는 형용사이므로 be동사 was의 부정형 wasn’t를 씁니다."
      }
    ],
    "spoken": {
      "prompt": "지난 주말의 일을 시간 순서로 세 문장 말하세요.",
      "sample": "First, I met a friend. Then, we had lunch at a small restaurant. After that, we walked around the neighborhood.",
      "note": "각 문장의 핵심 동사가 과거형인지 확인하세요."
    }
  },
  {
    "id": "g15",
    "cat": "시제",
    "title": "16 · 현재진행·과거진행: 그 순간 하고 있던 일",
    "lead": "진행형은 특정 시점을 기준으로 진행 중인 동작이나 일시적인 상황을 보여줍니다.",
    "concepts": [
      {
        "title": "be + -ing가 한 동사 묶음",
        "text": "현재는 am/is/are + -ing, 과거는 was/were + -ing입니다. I cooking도, I am cook도 진행형이 아닙니다. 질문은 be를 앞으로: Are you cooking? 부정은 be 뒤 not: I’m not cooking. -ing만 과거로 바꾸지 않습니다."
      },
      {
        "title": "언제 진행 중인가",
        "text": "I’m studying now는 지금, I’m staying with a friend this week는 이번 주의 일시적 상황입니다. I was studying at eight last night는 어제 8시에 진행 중이던 일입니다. 과거진행은 이야기의 배경, 단순과거는 그때 일어난 사건으로 함께 자주 쓰입니다."
      },
      {
        "title": "when과 while로 배경 연결",
        "text": "I was cooking when the phone rang는 요리 중에 전화가 울린 사건을 말합니다. While I was cooking, my friend was setting the table은 두 동작이 동시에 진행됐다는 뜻입니다. when=항상 과거, while=항상 진행이라는 고정 규칙은 아니고 사건의 관계가 핵심입니다."
      },
      {
        "title": "-ing 철자와 상태동사",
        "text": "make → making, lie → lying, run → running처럼 변합니다. know/need/like 같은 상태동사는 기본 의미에서 보통 진행형으로 쓰지 않습니다. have lunch는 행동이므로 I’m having lunch가 가능하지만 소유 have는 I have a car가 기본입니다."
      }
    ],
    "forms": [
      {
        "label": "현재진행",
        "pattern": "am/is/are + 동사-ing",
        "note": "I’m working right now."
      },
      {
        "label": "과거진행",
        "pattern": "was/were + 동사-ing",
        "note": "I was working when you called."
      },
      {
        "label": "부정·질문",
        "pattern": "be not + -ing / Be + 주어 + -ing?",
        "note": "I wasn’t sleeping. Were you sleeping?"
      },
      {
        "label": "배경 + 사건",
        "pattern": "과거진행 + when + 과거",
        "note": "I was walking when it started raining."
      }
    ],
    "examples": [
      {
        "en": "I was taking a shower when my friend called.",
        "ko": "친구가 전화했을 때 샤워 중이었어요.",
        "analysis": "was taking은 진행 중인 배경, called는 그 사이에 일어난 사건입니다."
      },
      {
        "en": "I’m staying at a hotel this week.",
        "ko": "이번 주에는 호텔에 머물고 있어요.",
        "analysis": "말하는 순간만이 아니라 이번 주의 일시적 생활도 현재진행형으로 나타낼 수 있습니다."
      },
      {
        "en": "While we were waiting, we talked about the trip.",
        "ko": "기다리는 동안 여행에 대해 이야기했어요.",
        "analysis": "were waiting은 계속되던 배경, talked는 그동안 한 일을 말합니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I was cook when he called.",
        "right": "I was cooking when he called.",
        "why": "과거진행은 was + -ing입니다. 원형 cook로는 성립하지 않습니다."
      },
      {
        "wrong": "I am having a car. (소유)",
        "right": "I have a car.",
        "why": "차를 소유한다는 상태의 have는 현재형이 기본입니다."
      }
    ],
    "exercises": [
      {
        "q": "“전화가 왔을 때 자고 있었어요”에 맞는 문장은?",
        "options": [
          "I slepting when the phone rang.",
          "I was sleeping when the phone rang.",
          "I was sleep when the phone rang."
        ],
        "answer": "I was sleeping when the phone rang.",
        "explanation": "과거 특정 순간에 진행 중이던 행동은 was + sleeping입니다."
      },
      {
        "q": "“지금 점심을 먹고 있어요”의 올바른 문장은?",
        "options": [
          "I’m having lunch now.",
          "I’m have lunch now.",
          "I having lunch now."
        ],
        "answer": "I’m having lunch now.",
        "explanation": "have lunch는 식사하는 행동입니다. 진행형은 am + having으로 만듭니다."
      }
    ],
    "spoken": {
      "prompt": "예상치 못한 일이 생겼을 때 무엇을 하고 있었는지 말하세요.",
      "sample": "I was walking home when it suddenly started raining. I was wearing a light jacket, so I got cold.",
      "note": "진행형으로 장면을 만들고 단순과거로 사건을 넣으세요."
    }
  },
  {
    "id": "g16",
    "cat": "시제",
    "title": "17 · 미래: will·be going to·현재진행",
    "lead": "미래를 말하는 표현들은 서로 겹치지만, 결정 시점·근거·약속 여부에 따라 초점이 달라집니다.",
    "concepts": [
      {
        "title": "will: 결정·약속·예측",
        "text": "말하는 순간의 결정: I’ll take a taxi. 약속: I’ll call you later. 예측·의견: I think it will rain. will 뒤에는 원형을 쓰고, 부정은 won’t입니다. he/she여도 will goes가 아니라 will go입니다."
      },
      {
        "title": "be going to: 의도와 현재 근거",
        "text": "미리 생각한 계획: I’m going to visit my parents. 눈앞의 근거에 기반한 예측: Look at those clouds. It’s going to rain. be를 빼면 안 됩니다. 이미 정한 계획에도 will을 쓰는 경우가 있으므로 “계획에는 will이 절대 불가”라는 규칙은 아닙니다."
      },
      {
        "title": "현재진행: 확정된 개인 일정",
        "text": "I’m meeting a friend tomorrow는 날짜·상대 등 준비가 된 일정입니다. 일반적으로 시간 표현이나 문맥이 있어야 미래 의미가 분명해집니다. 공식 시간표는 The train leaves at eight처럼 현재형으로 말할 수 있습니다."
      },
      {
        "title": "시간·조건절의 미래",
        "text": "미래라도 when/if가 이끄는 시간·조건절에는 보통 현재형을 씁니다: I’ll call you when I arrive. 다만 간접질문 I don’t know when he will arrive에서는 when이 도착 시점을 묻는 명사절이어서 will이 가능합니다."
      }
    ],
    "forms": [
      {
        "label": "will",
        "pattern": "will + 원형 / won’t + 원형",
        "note": "I’ll help you. I won’t be late."
      },
      {
        "label": "going to",
        "pattern": "am/is/are going to + 원형",
        "note": "We’re going to travel next month."
      },
      {
        "label": "약속·확정 일정",
        "pattern": "am/is/are + -ing + 미래 시점",
        "note": "I’m meeting her on Friday."
      },
      {
        "label": "미래 시간절",
        "pattern": "will … + when + 현재형",
        "note": "I’ll text you when I get home."
      }
    ],
    "examples": [
      {
        "en": "I’m going to start exercising regularly next month.",
        "ko": "다음 달부터 규칙적으로 운동하려고 해요.",
        "analysis": "going to는 이미 생각한 의도를 설명합니다."
      },
      {
        "en": "The bus is late. I’ll take a taxi instead.",
        "ko": "버스가 늦네요. 대신 택시를 탈게요.",
        "analysis": "지금 상황을 보고 내리는 결정이라 will이 자연스럽습니다."
      },
      {
        "en": "I’m having dinner with my parents tomorrow.",
        "ko": "내일 부모님과 저녁을 먹기로 했어요.",
        "analysis": "현재진행형이지만 tomorrow 때문에 예정된 미래 일정이라는 뜻입니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I going to study tonight.",
        "right": "I’m going to study tonight.",
        "why": "going to 앞에 주어에 맞는 be동사가 필요합니다."
      },
      {
        "wrong": "I’ll call you when I will arrive.",
        "right": "I’ll call you when I arrive.",
        "why": "미래를 나타내는 시간절 when I arrive에는 보통 현재형을 씁니다."
      }
    ],
    "exercises": [
      {
        "q": "“미리 계획한 주말 여행”의 올바른 문장은?",
        "options": [
          "I going to travel this weekend.",
          "I’m going to travel this weekend.",
          "I’m going travel this weekend."
        ],
        "answer": "I’m going to travel this weekend.",
        "explanation": "계획 표현은 be going to + 원형입니다. be와 to를 모두 유지해야 합니다."
      },
      {
        "q": "“집에 도착하면 전화할게요”의 기본 표현은?",
        "options": [
          "I’ll call you when I get home.",
          "I’ll call you when I will get home.",
          "I’ll call you when I getting home."
        ],
        "answer": "I’ll call you when I get home.",
        "explanation": "시간절 when에서는 미래 의미여도 현재형 get을 사용합니다."
      }
    ],
    "spoken": {
      "prompt": "다음 주의 계획과 확정된 약속을 각각 말하세요.",
      "sample": "I’m going to spend more time studying next week. I’m meeting my friend on Saturday.",
      "note": "계획의 의도와 상대가 있는 약속의 초점을 구분하세요."
    }
  },
  {
    "id": "g17",
    "cat": "시제",
    "title": "18 · 현재완료: 과거를 현재와 연결하기",
    "lead": "현재완료는 have/has + 과거분사입니다. 과거에 시작되거나 일어난 일을 현재의 경험·결과·기간과 연결합니다.",
    "concepts": [
      {
        "title": "과거분사는 과거형과 다를 수 있습니다",
        "text": "work–worked–worked는 과거형과 분사가 같지만 go–went–gone, see–saw–seen, eat–ate–eaten, take–took–taken처럼 다르기도 합니다. I have saw가 아니라 I have seen입니다. have/has는 주어에 맞추지만 분사는 바뀌지 않습니다."
      },
      {
        "title": "경험과 결과",
        "text": "I’ve been to Japan은 지금까지 일본에 가 본 경험입니다. I’ve lost my keys는 과거에 잃어버렸고 현재 문제가 있다는 결과에 초점을 둡니다. have been to는 다녀온 경험, have gone to는 가서 현재 그곳에 있거나 돌아오지 않은 상황을 나타내는 기본 구별을 익히세요."
      },
      {
        "title": "완료와 계속",
        "text": "I’ve just finished dinner는 방금 끝난 결과, I’ve lived here for three years는 과거부터 현재까지 이어지는 상태입니다. ever/never는 경험, already/yet/just는 완료를 나타내는 문맥에서 자주 쓰이지만 단어만 보고 시제를 결정하지는 마세요."
      },
      {
        "title": "끝난 시간을 지정하면 과거형",
        "text": "I visited Japan last year처럼 끝난 특정 시점 last year/yesterday와 함께 사건을 말할 때는 과거형이 기본입니다. 현재완료는 언제 일어났는지보다 현재까지의 관련성이 중심입니다. today처럼 아직 끝나지 않은 기간에서는 현재완료와 과거형 모두 문맥에 따라 가능할 수 있습니다."
      }
    ],
    "forms": [
      {
        "label": "긍정",
        "pattern": "주어 + have/has + 과거분사",
        "note": "I’ve seen it. She’s seen it."
      },
      {
        "label": "부정",
        "pattern": "주어 + haven’t/hasn’t + 과거분사",
        "note": "I haven’t tried it yet."
      },
      {
        "label": "질문",
        "pattern": "Have/Has + 주어 + 과거분사?",
        "note": "Have you ever been there?"
      },
      {
        "label": "과거와 대비",
        "pattern": "I’ve been there / I went there last year",
        "note": "경험 전체 / 끝난 특정 사건"
      }
    ],
    "examples": [
      {
        "en": "I’ve never tried surfing, but I’d like to.",
        "ko": "서핑을 해본 적은 없지만 해보고 싶어요.",
        "analysis": "have + tried로 지금까지의 경험을 말하고 never로 한 번도 없음을 나타냅니다."
      },
      {
        "en": "I’ve lost my wallet, so I can’t pay right now.",
        "ko": "지갑을 잃어버려서 지금 결제할 수 없어요.",
        "analysis": "lost의 과거 사건이 현재의 결제 문제로 이어져 현재완료가 자연스럽습니다."
      },
      {
        "en": "I’ve been to Busan twice. I went there last summer.",
        "ko": "부산에 두 번 가봤어요. 지난여름에도 갔어요.",
        "analysis": "첫 문장은 누적 경험, 두 번째는 last summer로 특정한 과거 사건입니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I have went there.",
        "right": "I have been there.",
        "why": "경험을 말할 때는 have been to를 사용합니다. go의 과거분사는 gone이며 have went는 잘못된 형태입니다."
      },
      {
        "wrong": "I have visited it yesterday.",
        "right": "I visited it yesterday.",
        "why": "끝난 특정 시점 yesterday의 사건은 과거형으로 말합니다."
      }
    ],
    "exercises": [
      {
        "q": "see의 현재완료 형태는?",
        "options": [
          "I have saw the movie.",
          "I have seen the movie.",
          "I have see the movie."
        ],
        "answer": "I have seen the movie.",
        "explanation": "have 뒤에는 과거분사 seen입니다. saw는 단순과거형입니다."
      },
      {
        "q": "“지난해 그 호텔에 묵었어요”를 바르게 말하면?",
        "options": [
          "I have stayed at that hotel last year.",
          "I stayed at that hotel last year.",
          "I stay at that hotel last year."
        ],
        "answer": "I stayed at that hotel last year.",
        "explanation": "last year라는 끝난 과거 시점을 지정하므로 단순과거를 씁니다."
      }
    ],
    "spoken": {
      "prompt": "가본 곳을 경험으로 소개한 뒤 구체적인 방문 이야기를 이어가세요.",
      "sample": "I’ve been to Jeju Island twice. The last time I went there, I stayed near the beach and tried local food.",
      "note": "경험은 현재완료, 구체적인 그때의 이야기는 과거형으로 전환하세요."
    }
  },
  {
    "id": "g18",
    "cat": "시제",
    "title": "19 · for·since와 현재완료진행",
    "lead": "과거부터 지금까지 계속되는 상태·활동을 말할 때, 기간의 길이와 시작점을 구분해야 합니다.",
    "concepts": [
      {
        "title": "for는 길이, since는 시작점",
        "text": "for two years / for a week는 얼마나 오래인지, since 2023 / since Monday / since I moved here는 언제부터인지입니다. since two years가 아니라 for two years입니다. since 뒤에 절을 붙일 때 시작 사건은 보통 과거형입니다: since I moved here."
      },
      {
        "title": "현재완료로 유지되는 상태",
        "text": "I’ve known her for ten years는 10년 전부터 현재까지 아는 상태입니다. 현재까지 이어진다는 뜻으로 I know her for ten years라고 말하지 않습니다. live/work 같은 동사는 현재완료와 현재완료진행 모두 자연스러운 경우가 많습니다."
      },
      {
        "title": "현재완료진행은 활동·지속에 초점",
        "text": "have/has been + -ing입니다. I’ve been studying for two hours는 지금까지 공부하는 활동을 계속해 왔다는 뜻입니다. I’ve studied three chapters는 완료한 양에 초점이 있습니다. 방금 끝났지만 현재 흔적이 남은 활동도 가능합니다: I’ve been running, so I’m out of breath."
      },
      {
        "title": "상태동사는 기본적으로 단순완료",
        "text": "know/own 등은 지속이라도 I’ve known / I’ve owned가 기본입니다. 모든 “~해 오고 있다”를 완료진행으로 바꾸지 마세요. have been 뒤에 장소·형용사가 오면 단순완료의 be, -ing 동사가 오면 완료진행입니다: I’ve been busy / I’ve been working."
      }
    ],
    "forms": [
      {
        "label": "기간",
        "pattern": "현재완료(진행) + for + 길이",
        "note": "I’ve worked here for three years."
      },
      {
        "label": "시작점",
        "pattern": "현재완료(진행) + since + 시점/시작절",
        "note": "I’ve lived here since 2022."
      },
      {
        "label": "현재완료진행",
        "pattern": "have/has been + -ing",
        "note": "I’ve been learning English."
      },
      {
        "label": "양과 과정",
        "pattern": "have read three books / have been reading",
        "note": "완료한 양 / 지속된 활동"
      }
    ],
    "examples": [
      {
        "en": "I’ve been learning English for six months.",
        "ko": "6개월 동안 영어를 공부해 오고 있어요.",
        "analysis": "have been learning은 지금까지의 지속적인 학습 활동, for six months는 길이입니다."
      },
      {
        "en": "I’ve known my best friend since high school.",
        "ko": "고등학교 때부터 가장 친한 친구를 알고 지냈어요.",
        "analysis": "know는 상태동사이므로 have known을 쓰고, since 뒤에 시작 시점이 옵니다."
      },
      {
        "en": "I’ve lived here for three years, and I still love the neighborhood.",
        "ko": "여기서 3년째 살고 있고 지금도 동네가 좋아요.",
        "analysis": "현재까지 이어지는 거주 상태를 현재완료로 나타냅니다. have been living도 가능합니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I’ve lived here since three years.",
        "right": "I’ve lived here for three years.",
        "why": "three years는 길이이므로 for입니다. since three years ago는 시작점을 나타내므로 가능합니다."
      },
      {
        "wrong": "I’ve been knowing her for years.",
        "right": "I’ve known her for years.",
        "why": "기본 의미의 know는 진행형보다 단순완료를 씁니다."
      }
    ],
    "exercises": [
      {
        "q": "“2022년부터 여기서 일해 왔어요”의 올바른 문장은?",
        "options": [
          "I’ve worked here for 2022.",
          "I’ve worked here since 2022.",
          "I’ve worked here during 2022 until now."
        ],
        "answer": "I’ve worked here since 2022.",
        "explanation": "2022는 시작점이므로 since를 사용합니다."
      },
      {
        "q": "“지난 두 시간 동안 계속 기다리고 있어요”에 맞는 형태는?",
        "options": [
          "I have been wait for two hours.",
          "I have been waiting for two hours.",
          "I am been waiting for two hours."
        ],
        "answer": "I have been waiting for two hours.",
        "explanation": "현재완료진행은 have + been + waiting입니다."
      }
    ],
    "spoken": {
      "prompt": "내 거주 기간과 최근 계속 연습하고 있는 활동을 말하세요.",
      "sample": "I’ve lived in Seoul for five years. Recently, I’ve been practicing speaking English every day.",
      "note": "상태는 have lived, 활동의 지속은 have been practicing으로 연습하세요."
    }
  },
  {
    "id": "g19",
    "cat": "시제",
    "title": "20 · 과거완료: 과거 사건보다 더 이전의 일",
    "lead": "과거완료는 “그 과거 시점에 이미”라는 관계를 나타냅니다. 오래된 일이기 때문에 쓰는 시제는 아닙니다.",
    "concepts": [
      {
        "title": "두 과거 사건의 앞뒤",
        "text": "had + 과거분사입니다. When I arrived, the movie had already started는 도착했을 때 영화가 이미 시작해 있었다는 뜻입니다. 기준 과거는 arrived, 그보다 먼저 일어난 일은 had started입니다. 주어와 관계없이 had를 씁니다."
      },
      {
        "title": "단순과거만으로 충분한 경우",
        "text": "I bought a ticket and entered the theater처럼 시간 순서대로 말하면 과거형만으로 충분합니다. before/after 등으로 순서가 분명하면 과거완료가 필수가 아닌 경우도 많습니다. 과거완료는 사건의 선후나 그때까지의 완료를 강조하려고 씁니다."
      },
      {
        "title": "과거완료진행은 과거까지의 지속",
        "text": "had been + -ing입니다. We had been waiting for an hour when the bus arrived는 버스가 도착한 과거 시점까지 한 시간 동안 기다리고 있었다는 뜻입니다. 현재완료진행과 달리 기준점이 현재가 아닙니다."
      }
    ],
    "forms": [
      {
        "label": "앞선 완료",
        "pattern": "had + 과거분사",
        "note": "The train had already left."
      },
      {
        "label": "부정·질문",
        "pattern": "hadn’t + 분사 / Had + 주어 + 분사?",
        "note": "I hadn’t booked a room. Had you eaten?"
      },
      {
        "label": "과거까지의 지속",
        "pattern": "had been + -ing",
        "note": "I had been waiting for an hour."
      },
      {
        "label": "기준점 표시",
        "pattern": "과거형 + 과거완료",
        "note": "I realized that I had lost my key."
      }
    ],
    "examples": [
      {
        "en": "When we arrived, the restaurant had already closed.",
        "ko": "도착했을 때 식당은 이미 문을 닫은 뒤였어요.",
        "analysis": "도착 arrived보다 폐점 had closed가 먼저입니다."
      },
      {
        "en": "I was tired because I hadn’t slept well the night before.",
        "ko": "전날 밤 잘 못 자서 피곤했어요.",
        "analysis": "피곤했던 과거 시점보다 잠을 못 잔 일이 이전이라 hadn’t slept를 씁니다."
      },
      {
        "en": "I had been waiting for thirty minutes when my friend finally arrived.",
        "ko": "친구가 마침내 도착했을 때 30분 동안 기다리고 있었어요.",
        "analysis": "기다림의 지속이 친구가 도착한 과거 시점까지 이어졌습니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "Yesterday, I had went to a café. (이 한 사건만 소개)",
        "right": "Yesterday, I went to a café.",
        "why": "단일 과거 사건은 단순과거로 충분하고, go의 분사는 gone이지 went가 아닙니다."
      },
      {
        "wrong": "The train had leave before I arrived.",
        "right": "The train had left before I arrived.",
        "why": "had 뒤에는 과거분사 left가 필요합니다."
      }
    ],
    "exercises": [
      {
        "q": "“도착했을 때 버스가 이미 떠난 뒤였어요”에 맞는 문장은?",
        "options": [
          "When I arrived, the bus had already left.",
          "When I arrived, the bus has already leave.",
          "When I arrived, the bus had already leave."
        ],
        "answer": "When I arrived, the bus had already left.",
        "explanation": "도착이라는 과거보다 먼저 떠났으므로 had + left입니다."
      },
      {
        "q": "“지난 일요일에 영화를 봤어요”만 말할 때 기본 시제는?",
        "options": [
          "I watched a movie last Sunday.",
          "I had watch a movie last Sunday.",
          "I have watched a movie last Sunday."
        ],
        "answer": "I watched a movie last Sunday.",
        "explanation": "끝난 과거의 단일 사건이므로 단순과거면 충분합니다."
      }
    ],
    "spoken": {
      "prompt": "늦어서 놓친 일을 과거완료로 설명하세요.",
      "sample": "I got to the station late. The train had already left, so I had to wait for the next one.",
      "note": "got이라는 기준 과거보다 앞선 left를 had left로 표현하세요."
    }
  },
  {
    "id": "g20",
    "cat": "동사 확장",
    "title": "21 · 조동사: 가능·허락·의무·조언·추측",
    "lead": "조동사는 행동 자체보다 “할 수 있는가, 해야 하는가, 그럴 가능성이 있는가”를 덧붙입니다.",
    "concepts": [
      {
        "title": "조동사 뒤에는 원형",
        "text": "can/could/may/might/must/should/will/would 뒤에는 원형이 옵니다. he/she여도 can drives가 아니라 can drive. be동사가 필요하면 원형 be를 씁니다: It might be expensive. 질문은 조동사를 앞으로, 부정은 조동사 뒤에 not을 붙입니다."
      },
      {
        "title": "가능·허락·추측",
        "text": "can은 능력과 가능: I can swim. Can I …?는 허락 요청입니다. could는 과거의 일반 능력 또는 정중한 요청: I could swim when I was young / Could you help me? may/might는 가능성: It might rain. must는 의무 외에 강한 추측도 됩니다: You must be tired."
      },
      {
        "title": "의무와 조언",
        "text": "must/have to는 해야 함, should는 권장·조언입니다. have to는 일반동사처럼 변합니다: she has to, didn’t have to, Do you have to? 현재 조동사 must의 과거 의무는 보통 had to로 표현합니다. ought to도 조언이지만 기본 회화에서는 should부터 익히세요."
      },
      {
        "title": "금지와 불필요는 다릅니다",
        "text": "mustn’t는 해서는 안 된다, don’t have to는 할 필요가 없다는 뜻입니다. You mustn’t park here는 금지, You don’t have to drive는 운전 안 해도 된다는 선택입니다. 이 차이를 놓치면 의도가 반대로 전달될 수 있습니다."
      }
    ],
    "forms": [
      {
        "label": "능력",
        "pattern": "can/could + 원형",
        "note": "I can cook. I could run fast as a child."
      },
      {
        "label": "가능성",
        "pattern": "may/might + 원형",
        "note": "It might be crowded."
      },
      {
        "label": "의무·조언",
        "pattern": "must / have to / should + 원형",
        "note": "I have to work. You should rest."
      },
      {
        "label": "금지·불필요",
        "pattern": "mustn’t / don’t have to + 원형",
        "note": "금지 / 안 해도 됨"
      }
    ],
    "examples": [
      {
        "en": "You should book in advance because it gets crowded.",
        "ko": "붐비니까 미리 예약하는 게 좋아요.",
        "analysis": "should는 강제 의무가 아니라 조언입니다."
      },
      {
        "en": "I had to cancel the trip because I was sick.",
        "ko": "아파서 여행을 취소해야 했어요.",
        "analysis": "과거 의무를 had to로 표현합니다. cancel은 to 뒤 원형입니다."
      },
      {
        "en": "You don’t have to pay in advance.",
        "ko": "미리 결제하지 않아도 돼요.",
        "analysis": "결제 금지가 아니라 미리 결제할 의무가 없다는 뜻입니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "She can to drive.",
        "right": "She can drive.",
        "why": "can 뒤에는 to 없이 원형을 씁니다."
      },
      {
        "wrong": "You mustn’t come. (안 와도 된다는 의도)",
        "right": "You don’t have to come.",
        "why": "mustn’t는 오면 안 된다는 금지입니다. 불필요는 don’t have to입니다."
      }
    ],
    "exercises": [
      {
        "q": "“예약할 필요는 없어요”에 맞는 문장은?",
        "options": [
          "You mustn’t make a reservation.",
          "You don’t have to make a reservation.",
          "You should to make a reservation."
        ],
        "answer": "You don’t have to make a reservation.",
        "explanation": "don’t have to는 불필요, mustn’t는 금지입니다."
      },
      {
        "q": "“비가 올지도 몰라요”의 올바른 형태는?",
        "options": [
          "It might rains.",
          "It might rain.",
          "It might to rain."
        ],
        "answer": "It might rain.",
        "explanation": "조동사 might 뒤에는 주어와 관계없이 동사원형입니다."
      }
    ],
    "spoken": {
      "prompt": "친구에게 여행 조언과 주의 사항을 말하세요.",
      "sample": "You should bring a jacket. It might be cold at night. You don’t have to rent a car because the buses are convenient.",
      "note": "조언·가능성·불필요의 의미를 구분하세요."
    }
  },
  {
    "id": "g21",
    "cat": "동사 확장",
    "title": "22 · would·could와 정중한 요청",
    "lead": "would와 could는 과거만 나타내지 않습니다. 부탁·선호·가정에서도 자주 사용합니다.",
    "concepts": [
      {
        "title": "Could you …?와 Would you …?",
        "text": "Could you help me?는 도와줄 수 있는지 정중하게 묻고, Would you help me?는 해줄 의향을 묻습니다. 둘 다 실제 요청으로 자연스럽습니다. Can you …?도 일상에서 흔하며, 조동사가 바뀐다고 언제나 같은 정도의 공손함이 보장되는 것은 아닙니다. 문맥과 말투도 중요합니다."
      },
      {
        "title": "would like와 would rather",
        "text": "I’d like a room은 방을 원한다는 정중한 표현, I’d like to change the date는 날짜를 바꾸고 싶다는 뜻입니다. would like 뒤 명사 또는 to부정사가 옵니다. would rather 뒤에는 to 없이 원형: I’d rather stay home. I’d는 I would 또는 I had의 축약이므로 뒤 형태로 구별합니다."
      },
      {
        "title": "가정과 과거의 반복",
        "text": "I’d travel more if I had more time은 가정 속 결과입니다. When I was young, we would go camping every summer는 과거의 반복 행동입니다. 과거 상태는 used to가 일반적입니다: I used to live there. would live로 과거 거주 상태만 전달하려고 하면 문맥에 따라 다른 의미가 될 수 있습니다."
      },
      {
        "title": "간접 요청과 실제 과거 구별",
        "text": "Could I get a refund?에서 could는 지금의 정중한 요청입니다. I couldn’t find my bag yesterday에서 couldn’t는 실제 과거의 실패입니다. could가 보이면 무조건 한국어 과거형으로 번역하지 마세요."
      }
    ],
    "forms": [
      {
        "label": "정중한 부탁",
        "pattern": "Could/Would you + 원형?",
        "note": "Could you check my reservation?"
      },
      {
        "label": "정중한 희망",
        "pattern": "would like + 명사 / to + 원형",
        "note": "I’d like a refund. I’d like to cancel."
      },
      {
        "label": "선호",
        "pattern": "would rather + 원형",
        "note": "I’d rather stay home."
      },
      {
        "label": "가정 결과",
        "pattern": "would + 원형",
        "note": "I would travel more if I had time."
      }
    ],
    "examples": [
      {
        "en": "Could you tell me the total price?",
        "ko": "총금액을 알려주실 수 있나요?",
        "analysis": "could는 과거 능력이 아니라 지금 정중하게 부탁하는 기능입니다."
      },
      {
        "en": "I’d like to change my reservation to Friday.",
        "ko": "예약을 금요일로 바꾸고 싶어요.",
        "analysis": "would like to + 원형 change. to Friday는 변경 후 날짜입니다."
      },
      {
        "en": "I’d rather take the bus than drive.",
        "ko": "운전하는 것보다 버스를 타고 싶어요.",
        "analysis": "rather 뒤 take와 than 뒤 drive 모두 원형으로 연결합니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I would like change the date.",
        "right": "I would like to change the date.",
        "why": "would like 뒤 행동은 to부정사로 연결합니다."
      },
      {
        "wrong": "I’d rather to stay home.",
        "right": "I’d rather stay home.",
        "why": "would rather 뒤에는 to 없이 동사원형입니다."
      }
    ],
    "exercises": [
      {
        "q": "“예약을 취소하고 싶어요”의 정중한 형태는?",
        "options": [
          "I’d like cancel my reservation.",
          "I’d like to cancel my reservation.",
          "I’d rather to cancel my reservation."
        ],
        "answer": "I’d like to cancel my reservation.",
        "explanation": "would like 뒤 동작은 to + 원형으로 표현합니다."
      },
      {
        "q": "“차라리 집에 있고 싶어요”의 올바른 문장은?",
        "options": [
          "I’d rather stay home.",
          "I’d rather to stay home.",
          "I’d rather staying home."
        ],
        "answer": "I’d rather stay home.",
        "explanation": "would rather의 뒤에는 동사원형 stay가 옵니다."
      }
    ],
    "spoken": {
      "prompt": "잘못된 예약을 바꾸려는 요청을 세 문장으로 말하세요.",
      "sample": "I’d like to change my reservation. Could you move it to Friday? If that’s not possible, I’d like a refund.",
      "note": "희망은 I’d like, 부탁은 Could you로 분리해 말하세요."
    }
  },
  {
    "id": "g22",
    "cat": "동사 확장",
    "title": "23 · to부정사·동명사와 동사 연결",
    "lead": "동작 두 개를 연결할 때 두 번째 동사를 무조건 원형으로 놓을 수는 없습니다. 앞의 동사와 역할에 맞는 형태가 필요합니다.",
    "concepts": [
      {
        "title": "to부정사의 역할",
        "text": "to + 원형은 want to go처럼 동사의 뒤에 오거나, I went there to relax처럼 목적을 나타냅니다. To learn English takes time처럼 주어도 가능하지만 회화에서는 Learning English takes time이나 It takes time to learn English가 자주 쓰입니다. 목적을 나타내는 to는 “~하려고”로 해석해 보세요."
      },
      {
        "title": "동명사는 동작을 명사처럼",
        "text": "-ing가 주어·목적어·전치사 뒤에 오면 동명사입니다: Swimming is fun / I enjoy swimming / I’m good at swimming. be + -ing의 진행형과 모양은 같지만 역할이 다릅니다. I’m swimming에서는 동사, I enjoy swimming에서는 enjoy의 목적어입니다."
      },
      {
        "title": "앞 동사에 따라 선택",
        "text": "want/plan/decide/hope는 보통 to부정사, enjoy/avoid/finish/mind는 -ing와 연결합니다. like/love/start는 두 형태가 가능한 경우가 많습니다. stop smoking은 흡연을 그만둠, stop to smoke는 담배를 피우려고 하던 일을 잠시 멈춤처럼 뜻이 달라지는 동사도 있습니다."
      },
      {
        "title": "전치사의 to를 구별",
        "text": "look forward to, be used to의 to는 전치사라 뒤에 명사 또는 -ing가 옵니다: I look forward to seeing you. want to의 to는 부정사 표시라 뒤에 원형입니다. “to 뒤는 항상 원형”이라고 외우면 이 표현에서 틀리게 됩니다."
      }
    ],
    "forms": [
      {
        "label": "to와 연결",
        "pattern": "want/plan/decide/hope + to + 원형",
        "note": "I decided to stay."
      },
      {
        "label": "-ing와 연결",
        "pattern": "enjoy/finish/avoid/mind + -ing",
        "note": "I enjoy cooking."
      },
      {
        "label": "전치사 뒤",
        "pattern": "전치사 + 명사/-ing",
        "note": "after eating / good at cooking"
      },
      {
        "label": "목적",
        "pattern": "주절 + to + 원형",
        "note": "I went to the park to relax."
      }
    ],
    "examples": [
      {
        "en": "I enjoy cooking, but I don’t like washing the dishes.",
        "ko": "요리는 즐기지만 설거지는 좋아하지 않아요.",
        "analysis": "enjoy 뒤 cooking은 필수 -ing 용법입니다. like 뒤는 washing 또는 to wash가 가능한 경우입니다."
      },
      {
        "en": "I went to the café to meet a friend.",
        "ko": "친구를 만나려고 카페에 갔어요.",
        "analysis": "to the café는 장소 전치사구, to meet는 목적을 나타내는 부정사입니다."
      },
      {
        "en": "I’m looking forward to seeing you.",
        "ko": "당신을 만나기를 기대하고 있어요.",
        "analysis": "look forward to의 to가 전치사이므로 see가 seeing으로 옵니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I enjoy to walk.",
        "right": "I enjoy walking.",
        "why": "enjoy는 목적어로 동명사 walking을 취합니다."
      },
      {
        "wrong": "I’m good at cook.",
        "right": "I’m good at cooking.",
        "why": "전치사 at 뒤에 동작을 넣으면 명사 역할의 -ing를 씁니다."
      }
    ],
    "exercises": [
      {
        "q": "“연습을 끝냈어요”의 올바른 문장은?",
        "options": [
          "I finished practicing.",
          "I finished to practice.",
          "I finished practice to."
        ],
        "answer": "I finished practicing.",
        "explanation": "finish 뒤에는 동명사 practicing이 옵니다."
      },
      {
        "q": "“당신을 만나기를 기대해요”의 올바른 표현은?",
        "options": [
          "I look forward to see you.",
          "I look forward to seeing you.",
          "I look forward see you."
        ],
        "answer": "I look forward to seeing you.",
        "explanation": "look forward to의 to는 전치사라 뒤에는 seeing을 사용합니다."
      }
    ],
    "spoken": {
      "prompt": "취미를 즐기는 이유와 새로 해보려는 일을 말하세요.",
      "sample": "I enjoy taking photos because it helps me relax. I want to try hiking to spend more time outdoors.",
      "note": "enjoy + -ing, want + to, 목적의 to를 따로 찾아보세요."
    }
  },
  {
    "id": "g23",
    "cat": "동사 확장",
    "title": "24 · used to·be used to·get used to",
    "lead": "철자가 비슷하지만 “예전 습관”, “익숙한 상태”, “익숙해지는 과정”은 서로 다른 구조입니다.",
    "concepts": [
      {
        "title": "used to + 원형: 예전에는",
        "text": "지금은 달라진 과거 습관이나 상태입니다. I used to drive to work는 예전에는 차로 출근했다는 뜻입니다. I used to live in Busan처럼 상태도 가능합니다. 과거 한 번의 사건은 I went there yesterday처럼 과거형으로 말하고 used to로 바꾸지 않습니다."
      },
      {
        "title": "부정·질문에는 use to",
        "text": "표준 학습 형태는 didn’t use to + 원형, Did you use to + 원형?입니다. did가 과거를 표시해서 used가 use로 돌아갑니다. 발음상 used to와 use to가 매우 비슷하므로 글로도 확인하세요."
      },
      {
        "title": "be used to + 명사/-ing: 익숙하다",
        "text": "I’m used to the noise / I’m used to getting up early에서 to는 전치사입니다. 과거에 익숙했다면 I was used to …처럼 be의 시제를 바꿉니다. get used to는 익숙해지는 변화: I’m getting used to my new job."
      },
      {
        "title": "사용되다와의 모양 구별",
        "text": "This room is used to store equipment는 “방이 장비 보관에 사용된다”라는 수동태 used + 목적 to부정사입니다. I’m used to waking up early의 익숙함과 뜻이 다릅니다. 뒤에 원형인지 -ing인지, 주어가 무엇인지 함께 보세요."
      }
    ],
    "forms": [
      {
        "label": "예전 습관·상태",
        "pattern": "used to + 동사원형",
        "note": "I used to live alone."
      },
      {
        "label": "과거 습관 부정",
        "pattern": "didn’t use to + 원형",
        "note": "I didn’t use to cook."
      },
      {
        "label": "익숙한 상태",
        "pattern": "be used to + 명사/-ing",
        "note": "I’m used to the weather."
      },
      {
        "label": "익숙해지는 변화",
        "pattern": "get used to + 명사/-ing",
        "note": "I’m getting used to commuting."
      }
    ],
    "examples": [
      {
        "en": "I used to eat out a lot, but now I cook at home.",
        "ko": "예전에는 외식을 많이 했지만 지금은 집에서 요리해요.",
        "analysis": "used to + eat으로 과거 반복 습관과 현재의 변화를 연결합니다."
      },
      {
        "en": "I’m used to taking the subway during rush hour.",
        "ko": "출퇴근 시간에 지하철을 타는 데 익숙해요.",
        "analysis": "be used to 뒤에 동명사 taking이 오며 현재 익숙한 상태입니다."
      },
      {
        "en": "It took me a month to get used to my new neighborhood.",
        "ko": "새 동네에 익숙해지는 데 한 달 걸렸어요.",
        "analysis": "get used to는 변화 과정, 뒤에는 명사 neighborhood입니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "I used to getting up early. (예전 습관)",
        "right": "I used to get up early.",
        "why": "과거 습관의 used to 뒤에는 원형 get입니다."
      },
      {
        "wrong": "I’m used to get up early. (익숙함)",
        "right": "I’m used to getting up early.",
        "why": "익숙함의 be used to 뒤에는 -ing 또는 명사입니다."
      }
    ],
    "exercises": [
      {
        "q": "“예전에는 운전했지만 지금은 안 해요”에 맞는 문장은?",
        "options": [
          "I used to drive, but I don’t anymore.",
          "I am used to driving, but I don’t anymore.",
          "I used to driving, but I don’t anymore."
        ],
        "answer": "I used to drive, but I don’t anymore.",
        "explanation": "used to + 원형은 과거 습관입니다. be used to는 익숙한 상태라는 다른 의미입니다."
      },
      {
        "q": "“일찍 일어나는 데 익숙해요”의 올바른 표현은?",
        "options": [
          "I’m used to get up early.",
          "I’m used to getting up early.",
          "I used to get up early."
        ],
        "answer": "I’m used to getting up early.",
        "explanation": "현재의 익숙함은 be used to + 동명사입니다. to가 전치사이므로 getting을 씁니다. used to get은 “예전에는 일찍 일어났다”라는 과거 습관입니다."
      }
    ],
    "spoken": {
      "prompt": "예전 생활과 현재 변화, 새로 익숙해진 것을 말하세요.",
      "sample": "I used to drive everywhere. Now I take the subway, and I’m used to commuting by train.",
      "note": "예전 습관과 현재 익숙함을 한 답변 안에서 구별하세요."
    }
  },
  {
    "id": "g24",
    "cat": "동사 확장",
    "title": "25 · 수동태: 행동을 받은 대상이 주어일 때",
    "lead": "누가 했는지보다 “무엇이 어떻게 되었는지”가 중요한 상황에서는 수동태가 유용합니다.",
    "concepts": [
      {
        "title": "목적어를 주어 자리로",
        "text": "능동 My friend canceled the reservation에서 reservation은 취소된 대상입니다. 수동 The reservation was canceled는 그 대상을 주어로 세웁니다. 기본 형태는 be + 과거분사이며, 행위자는 필요한 경우 by …로 붙입니다. 행위자가 불명확하거나 중요하지 않으면 생략합니다."
      },
      {
        "title": "be가 시제를, 분사가 행동을 담당",
        "text": "현재 is cleaned, 과거 was cleaned, 미래 will be cleaned, 현재완료 has been cleaned입니다. 과거분사 cleaned는 유지하고 be 쪽으로 시간 정보를 표현합니다. 진행 중인 수동은 is being repaired처럼 be + being + 분사입니다."
      },
      {
        "title": "모든 동사를 수동으로 만들 수 없습니다",
        "text": "수동태는 기본적으로 목적어를 취하는 동사와 연결됩니다. happen/arrive 같은 자동사는 It happened / He arrived처럼 능동 형태를 씁니다. was happened는 만들지 않습니다. 일부 be + 분사는 상태 형용사와 가까운 뜻도 있습니다: The door is closed."
      },
      {
        "title": "롤플레이에 쓰기",
        "text": "My flight was canceled, My phone was stolen처럼 문제 발생을 설명할 수 있습니다. 문제를 말한 뒤 Could you …?로 해결을 부탁하세요. 수동태를 무리하게 늘리기보다, 초점을 대상에 두고 싶을 때 골라 쓰면 됩니다."
      }
    ],
    "forms": [
      {
        "label": "현재·과거",
        "pattern": "am/is/are 또는 was/were + 과거분사",
        "note": "The rooms are cleaned every day."
      },
      {
        "label": "미래",
        "pattern": "will be + 과거분사",
        "note": "It will be delivered tomorrow."
      },
      {
        "label": "현재완료",
        "pattern": "have/has been + 과거분사",
        "note": "My reservation has been confirmed."
      },
      {
        "label": "진행수동",
        "pattern": "be being + 과거분사",
        "note": "The road is being repaired."
      }
    ],
    "examples": [
      {
        "en": "My flight was canceled because of bad weather.",
        "ko": "악천후 때문에 항공편이 취소됐어요.",
        "analysis": "항공편이 취소를 한 것이 아니라 취소된 대상이므로 was canceled입니다."
      },
      {
        "en": "The room is cleaned every morning.",
        "ko": "방은 매일 아침 청소돼요.",
        "analysis": "반복되는 현재 수동입니다. 청소하는 직원보다 room의 관리 상태가 중심입니다."
      },
      {
        "en": "My bag has been stolen.",
        "ko": "가방을 도난당했어요.",
        "analysis": "have/has + been + 분사로 현재완료 수동을 만들고 현재의 문제를 강조합니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "My flight canceled. (항공편이 취소되었다는 의도)",
        "right": "My flight was canceled.",
        "why": "canceled만 쓰면 항공편이 취소 행동의 주체처럼 읽히거나 불완전해집니다. 수동을 나타내는 was가 필요합니다."
      },
      {
        "wrong": "The accident was happened yesterday.",
        "right": "The accident happened yesterday.",
        "why": "happen은 목적어를 취하지 않는 자동사라 기본적으로 수동태를 만들지 않습니다."
      }
    ],
    "exercises": [
      {
        "q": "“객실은 매일 청소돼요”의 올바른 문장은?",
        "options": [
          "The room is clean every day. (청소된다는 동작)",
          "The room is cleaned every day.",
          "The room is cleaning every day."
        ],
        "answer": "The room is cleaned every day.",
        "explanation": "청소받는 동작은 is + 과거분사 cleaned입니다. is clean은 깨끗한 상태를 뜻합니다."
      },
      {
        "q": "“내일 배송될 거예요”의 수동형은?",
        "options": [
          "It will delivered tomorrow.",
          "It will be delivered tomorrow.",
          "It will be deliver tomorrow."
        ],
        "answer": "It will be delivered tomorrow.",
        "explanation": "미래 수동은 will + be + 과거분사 delivered입니다."
      }
    ],
    "spoken": {
      "prompt": "여행 중 문제가 생긴 상황을 설명하고 도움을 요청하세요.",
      "sample": "My flight was canceled this morning. Could you put me on another flight?",
      "note": "문제는 수동으로, 해결 요청은 능동으로 자연스럽게 이어가세요."
    }
  },
  {
    "id": "g25",
    "cat": "동사 확장",
    "title": "26 · there is·가주어 it와 존재·상황 설명",
    "lead": "“무엇이 있다”와 “그것이 어디 있다”는 영어에서 서로 다른 문장으로 자주 말합니다.",
    "concepts": [
      {
        "title": "there is/are: 존재를 새로 소개",
        "text": "There is a park near my house는 공원의 존재를 소개합니다. There are two parks에서는 뒤 명사가 복수라 are입니다. there는 이 문장에서 “그곳”이라는 장소어가 아니라 존재 구문의 형식적 요소입니다. 과거 there was/were, 미래 there will be로 바꿀 수 있습니다."
      },
      {
        "title": "위치를 말할 때는 대상을 주어로",
        "text": "The park is near my house는 이미 알고 있는 공원의 위치를 말합니다. I have a car는 소유, There is a car outside는 존재를 말합니다. “있다”라는 한국어만 보고 have/there is/be를 똑같이 바꾸지 마세요."
      },
      {
        "title": "날씨·시간·거리의 it",
        "text": "It is raining / It is seven o’clock / It is far from here의 it은 구체적인 사물을 대신하는 말이 아니라 문법상 주어를 채웁니다. 영어의 평서문에서는 보통 주어가 필요하므로 Is raining처럼 생략하지 않습니다."
      },
      {
        "title": "긴 주어를 뒤로 보내는 it",
        "text": "It is difficult to explain은 “설명하는 것이 어렵다”입니다. to explain을 뒤로 보내고 앞에 형식상 it을 놓습니다. It takes me thirty minutes to get to work는 출근하는 데 시간이 든다는 구조입니다. it이 항상 특정 사물이라는 뜻은 아닙니다."
      }
    ],
    "forms": [
      {
        "label": "존재",
        "pattern": "There is + 단수/불가산 · There are + 복수",
        "note": "There’s a café. There’s some water."
      },
      {
        "label": "존재 부정·질문",
        "pattern": "There isn’t/aren’t … / Is/Are there …?",
        "note": "Are there any shops nearby?"
      },
      {
        "label": "상황",
        "pattern": "It + be + 날씨/시간/거리 표현",
        "note": "It’s cold. It’s late."
      },
      {
        "label": "평가·소요 시간",
        "pattern": "It’s + 형용사 + to … / It takes … to …",
        "note": "It’s easy to get there."
      }
    ],
    "examples": [
      {
        "en": "There are several cafés near my apartment.",
        "ko": "아파트 근처에 카페가 여러 곳 있어요.",
        "analysis": "복수 cafés를 새로 소개하므로 there are입니다. 회화에서 there’s + 복수도 들리지만 기본 형태는 are로 익히세요."
      },
      {
        "en": "It takes me twenty minutes to walk to work.",
        "ko": "걸어서 출근하는 데 20분 걸려요.",
        "analysis": "it은 형식 주어, me는 시간이 드는 사람, to walk to work는 실제 활동입니다."
      },
      {
        "en": "It’s hard to find a parking space here.",
        "ko": "여기서는 주차 공간을 찾기 어려워요.",
        "analysis": "평가 hard의 대상은 뒤의 to find … 전체입니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "There have two cafés.",
        "right": "There are two cafés.",
        "why": "존재 소개는 there are입니다. have는 소유하는 주어가 필요합니다."
      },
      {
        "wrong": "Is cold today.",
        "right": "It is cold today.",
        "why": "날씨를 말하는 문장에도 형식 주어 it이 필요합니다."
      }
    ],
    "exercises": [
      {
        "q": "“근처에 식당이 있나요?”의 올바른 질문은?",
        "options": [
          "Is there a restaurant nearby?",
          "Does there a restaurant nearby?",
          "Has there a restaurant nearby?"
        ],
        "answer": "Is there a restaurant nearby?",
        "explanation": "존재 구문의 be동사 is를 앞으로 보내 질문을 만듭니다."
      },
      {
        "q": "“거기 가는 데 한 시간 걸려요”에 맞는 문장은?",
        "options": [
          "It takes an hour to get there.",
          "There takes an hour to get there.",
          "It takes an hour get there."
        ],
        "answer": "It takes an hour to get there.",
        "explanation": "소요 시간 구문은 It takes + 기간 + to부정사입니다."
      }
    ],
    "spoken": {
      "prompt": "동네 시설과 그곳까지 걸리는 시간을 설명하세요.",
      "sample": "There’s a park near my house. It takes about ten minutes to walk there, and it’s easy to find.",
      "note": "존재를 소개한 뒤 시간·접근성을 it 구문으로 붙이세요."
    }
  },
  {
    "id": "g26",
    "cat": "문장 연결",
    "title": "27 · and·but·because·so·although",
    "lead": "짧은 문장을 길게 만들려면 두 내용의 관계를 먼저 정하세요: 추가, 대조, 이유, 결과 중 무엇인가요?",
    "concepts": [
      {
        "title": "대등하게 연결하기",
        "text": "and는 추가, but은 대조, or는 선택, so는 결과입니다. I was tired, so I went home처럼 완전한 두 절을 연결할 수 있습니다. 같은 주어의 동작이면 I went home and took a shower처럼 두 번째 주어를 생략해 동사끼리 연결할 수 있습니다."
      },
      {
        "title": "because와 although는 종속절",
        "text": "because 뒤에는 이유, although/though 뒤에는 반대되는 조건이 옵니다. 이 절만으로는 보통 완전한 평서문이 아닙니다. Because I was tired, I went home처럼 주절이 필요합니다. 질문 Why …?에 Because …로 짧게 답하는 회화의 생략은 가능하지만, 긴 답변에서는 결과까지 붙여 보세요."
      },
      {
        "title": "because와 because of",
        "text": "because 뒤에는 주어+동사가 있는 절: because it rained. because of 뒤에는 명사 또는 명사 역할의 표현: because of the rain. due to도 기본적으로 명사구와 연결합니다. 단어를 바꾸는 것이 아니라 뒤 구조도 바꿔야 합니다."
      },
      {
        "title": "접속사를 겹치지 않기",
        "text": "표준 학습 문장에서는 Because …, so …를 한 구조에 함께 쓰지 않습니다. Although …, but …도 겹치지 않습니다. Because I was tired, I went home 또는 I was tired, so I went home 중 하나를 고릅니다. and는 앞뒤를 비슷한 형태로 연결하면 명확합니다: I enjoy cooking and taking photos."
      }
    ],
    "forms": [
      {
        "label": "추가·대조·결과",
        "pattern": "절 + and/but/so + 절",
        "note": "It was small, but it was cozy."
      },
      {
        "label": "이유",
        "pattern": "주절 + because + 절",
        "note": "I stayed home because I was sick."
      },
      {
        "label": "양보",
        "pattern": "Although + 절, 주절",
        "note": "Although it rained, we went out."
      },
      {
        "label": "명사로 된 이유",
        "pattern": "because of + 명사구",
        "note": "The flight was canceled because of the rain."
      }
    ],
    "examples": [
      {
        "en": "I like the café because it’s quiet and the coffee is good.",
        "ko": "조용하고 커피가 맛있어서 그 카페를 좋아해요.",
        "analysis": "because가 이유를 이끌고, 두 이유 it’s quiet와 the coffee is good을 and로 연결합니다."
      },
      {
        "en": "Although the hotel was expensive, it was worth it.",
        "ko": "호텔이 비쌌지만 그만한 가치가 있었어요.",
        "analysis": "although절이 예상과 반대되는 조건을 제시하고, 뒤 주절이 핵심 판단입니다."
      },
      {
        "en": "It started raining, so we went inside.",
        "ko": "비가 오기 시작해서 안으로 들어갔어요.",
        "analysis": "앞은 원인 상황, so 뒤는 결과입니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "Because I was tired, so I went home.",
        "right": "Because I was tired, I went home.",
        "why": "because로 이미 이유·주절 관계를 만들었으므로 같은 구조에 so를 다시 넣지 않습니다."
      },
      {
        "wrong": "I stayed home because of I was sick.",
        "right": "I stayed home because I was sick.",
        "why": "I was sick는 절이라 because와 연결합니다. because of 뒤에는 my illness 같은 명사구가 옵니다."
      }
    ],
    "exercises": [
      {
        "q": "“비 때문에 취소됐어요”의 올바른 표현은?",
        "options": [
          "It was canceled because of the rain.",
          "It was canceled because the rain.",
          "It was canceled because of it rained."
        ],
        "answer": "It was canceled because of the rain.",
        "explanation": "the rain은 명사구라 because of와 연결합니다. 절 it rained를 쓰면 because입니다."
      },
      {
        "q": "표준 문장에서 중복 없이 대조를 말한 것은?",
        "options": [
          "Although it was expensive, but I bought it.",
          "Although it was expensive, I bought it.",
          "Although it expensive, I bought it."
        ],
        "answer": "Although it was expensive, I bought it.",
        "explanation": "although절과 주절을 연결할 때 같은 관계의 but을 중복하지 않습니다."
      }
    ],
    "spoken": {
      "prompt": "좋아하는 장소의 이유와 단점을 함께 말하세요.",
      "sample": "I like this park because it’s peaceful. Although it’s a little far from home, I go there often.",
      "note": "이유와 대조를 각각 한 가지씩 넣되 접속사를 억지로 겹치지 마세요."
    }
  },
  {
    "id": "g27",
    "cat": "문장 연결",
    "title": "28 · when·while·before·after·until",
    "lead": "시간을 나타내는 절은 “언제, 동안, 이전, 이후, 언제까지” 사건이 이어지는지 설명합니다.",
    "concepts": [
      {
        "title": "접속사 뒤에는 주어+동사",
        "text": "When I got home, I cooked dinner에서 when I got home은 시점을 나타내는 절입니다. before dinner는 전치사+명사, before I had dinner는 접속사+절입니다. before eating dinner처럼 동명사를 연결하는 형태도 가능합니다."
      },
      {
        "title": "when과 while의 초점",
        "text": "when은 특정 시점이나 상황, while은 일정 시간의 동시 진행에 자주 쓰입니다. While I was waiting, I checked my phone. when절은 단순과거와 진행형 모두 가능합니다. while도 상태·대조를 나타내는 용법이 있으므로 특정 시제만 요구한다고 외우지 않습니다."
      },
      {
        "title": "until과 as soon as",
        "text": "until은 상태·행동이 어떤 시점까지 지속됨, not … until은 그 시점이 돼서야 일어남을 나타냅니다. I didn’t leave until six는 6시가 되어서야 떠났다는 뜻입니다. as soon as는 ~하자마자: I called her as soon as I arrived."
      },
      {
        "title": "미래 시간절에는 현재형",
        "text": "I’ll call you after I finish work처럼 after/when/before/until/as soon as의 미래 시간절에는 보통 현재형을 씁니다. 주절은 will을 쓸 수 있습니다. 완료를 강조하면 after I’ve finished work처럼 현재완료도 가능합니다."
      }
    ],
    "forms": [
      {
        "label": "시간절 먼저",
        "pattern": "When/After/Before + 절, 주절",
        "note": "After I got home, I made dinner."
      },
      {
        "label": "시간절 나중",
        "pattern": "주절 + when/after/before + 절",
        "note": "I made dinner after I got home."
      },
      {
        "label": "동시 진행",
        "pattern": "While + 절, 주절",
        "note": "While I was cooking, he set the table."
      },
      {
        "label": "미래 관계",
        "pattern": "will … + when/after + 현재형",
        "note": "I’ll leave when it stops raining."
      }
    ],
    "examples": [
      {
        "en": "Before I go to bed, I usually read for a while.",
        "ko": "자기 전에 보통 잠깐 책을 읽어요.",
        "analysis": "before가 반복 습관의 시간절을 이끌고 현재형 go/read가 옵니다."
      },
      {
        "en": "I didn’t realize the mistake until I got home.",
        "ko": "집에 와서야 그 실수를 알아챘어요.",
        "analysis": "not … until은 집에 오기 전에는 알아채지 못했다는 뜻입니다."
      },
      {
        "en": "I’ll message you as soon as I arrive.",
        "ko": "도착하자마자 메시지를 보낼게요.",
        "analysis": "미래 시점의 시간절이어도 arrive는 현재형입니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "After I will finish work, I’ll call you.",
        "right": "After I finish work, I’ll call you.",
        "why": "미래의 after 시간절은 기본적으로 현재형입니다."
      },
      {
        "wrong": "While I waiting, I checked my phone.",
        "right": "While I was waiting, I checked my phone.",
        "why": "진행형에서 be동사 was를 빼지 않습니다."
      }
    ],
    "exercises": [
      {
        "q": "“일을 마치면 전화할게요”의 기본 문장은?",
        "options": [
          "I’ll call you after I finish work.",
          "I’ll call you after I will finish work.",
          "I’ll call you after I finished work tomorrow."
        ],
        "answer": "I’ll call you after I finish work.",
        "explanation": "미래를 나타내는 after 시간절에는 현재형 finish를 씁니다."
      },
      {
        "q": "“6시가 되어서야 떠났어요”에 맞는 문장은?",
        "options": [
          "I didn’t leave until six.",
          "I didn’t leave by six.",
          "I left for six."
        ],
        "answer": "I didn’t leave until six.",
        "explanation": "not … until은 해당 시점 이전에는 행동이 일어나지 않았다는 뜻입니다."
      }
    ],
    "spoken": {
      "prompt": "평일 일과를 before/after/when으로 설명하세요.",
      "sample": "After I finish work, I usually go for a walk. When I get home, I make dinner. Before I go to bed, I listen to music.",
      "note": "시간절과 주절을 모두 완성한 뒤 사건 순서를 점검하세요."
    }
  },
  {
    "id": "g28",
    "cat": "문장 연결",
    "title": "29 · 명사절·간접질문: 문장 속에 문장 넣기",
    "lead": "생각·정보·질문 내용을 한 문장의 목적어로 넣을 수 있습니다. 안쪽 문장은 평서문 순서가 기본입니다.",
    "concepts": [
      {
        "title": "that절로 생각을 연결",
        "text": "I think that it’s a good idea에서 that it’s a good idea 전체가 think의 내용입니다. 회화에서는 that을 자주 생략합니다: I think it’s a good idea. that절에는 주어와 동사가 필요하므로 I think good idea만으로 만들지 않습니다."
      },
      {
        "title": "의문사 명사절의 순서",
        "text": "Where is the station?은 직접질문, Could you tell me where the station is?는 간접질문입니다. 안쪽은 의문사 + 주어 + 동사라 is를 앞으로 옮기지 않습니다. What time does it start?를 넣으면 what time it starts가 되어 does는 사라지고 starts가 현재·단수를 표시합니다."
      },
      {
        "title": "yes/no 내용을 넣기",
        "text": "Is a room available?처럼 의문사가 없는 질문을 넣으면 if/whether를 씁니다: Could you tell me if a room is available? 여기서 if는 조건 “만약”이 아니라 “~인지”라는 뜻입니다. I don’t know whether it will rain도 미래에 비가 올지 모른다는 내용이므로 will이 가능합니다."
      },
      {
        "title": "바깥 문장이 질문인지 보기",
        "text": "Could you tell me …?는 바깥이 질문이어서 물음표가 필요합니다. I don’t know where it is.는 평서문이므로 마침표입니다. 의문사가 있다는 이유만으로 문장 전체가 질문이 되는 것은 아닙니다."
      }
    ],
    "forms": [
      {
        "label": "생각·말의 내용",
        "pattern": "think/say/know + (that) + 주어 + 동사",
        "note": "I think the café is nice."
      },
      {
        "label": "정보 질문",
        "pattern": "의문사 + 주어 + 동사",
        "note": "Do you know where she lives?"
      },
      {
        "label": "yes/no 내용",
        "pattern": "if/whether + 주어 + 동사",
        "note": "I wonder if it’s open."
      },
      {
        "label": "정중한 바깥 질문",
        "pattern": "Could you tell me + 간접질문?",
        "note": "Could you tell me when it opens?"
      }
    ],
    "examples": [
      {
        "en": "Could you tell me where the entrance is?",
        "ko": "입구가 어디인지 알려주실 수 있나요?",
        "analysis": "안쪽은 where + the entrance + is입니다. where is the entrance 순서가 아닙니다."
      },
      {
        "en": "I don’t know what time the store closes.",
        "ko": "가게가 몇 시에 닫는지 모르겠어요.",
        "analysis": "안쪽에는 does 없이 store + closes를 씁니다. 전체는 평서문입니다."
      },
      {
        "en": "Could you check whether my reservation is confirmed?",
        "ko": "예약이 확정됐는지 확인해 주실 수 있나요?",
        "analysis": "whether가 확정 여부를 나타내는 명사절을 이끕니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "Could you tell me where is it?",
        "right": "Could you tell me where it is?",
        "why": "간접질문의 안쪽은 주어+동사 순서입니다."
      },
      {
        "wrong": "Do you know what time does it start?",
        "right": "Do you know what time it starts?",
        "why": "does를 없애고 it starts로 평서문 순서·수 일치를 유지합니다."
      }
    ],
    "exercises": [
      {
        "q": "“역이 어디인지 아세요?”의 올바른 문장은?",
        "options": [
          "Do you know where is the station?",
          "Do you know where the station is?",
          "Do you know where the station?"
        ],
        "answer": "Do you know where the station is?",
        "explanation": "명사절 내부는 where + 주어 the station + 동사 is 순서입니다."
      },
      {
        "q": "“이용 가능한 방이 있는지 확인해 주세요”의 올바른 문장은?",
        "options": [
          "Could you check if a room is available?",
          "Could you check if is a room available?",
          "Could you check a room available if?"
        ],
        "answer": "Could you check if a room is available?",
        "explanation": "yes/no 내용을 넣는 if 뒤에는 평서문 순서 a room is available을 씁니다."
      }
    ],
    "spoken": {
      "prompt": "직접 질문을 정중한 간접질문으로 바꿔 세 번 말하세요.",
      "sample": "Where is the café? → Could you tell me where the café is? What time does it open? → Do you know what time it opens?",
      "note": "안쪽의 be/do 질문 순서를 평서문 순서로 되돌리세요."
    }
  },
  {
    "id": "g29",
    "cat": "문장 연결",
    "title": "30 · 관계절: 사람·장소·물건을 더 설명하기",
    "lead": "관계절은 앞의 명사를 설명하는 작은 문장입니다. “어떤 사람·장소·물건인지”를 더 구체적으로 말합니다.",
    "concepts": [
      {
        "title": "사람은 who, 사물은 which/that",
        "text": "a friend who lives nearby에서 who lives nearby가 friend를 설명합니다. a café that I like에서 that I like는 café를 설명합니다. 필수적으로 대상을 한정하는 관계절에서 that은 사람·사물 모두에 쓸 수 있습니다. 관계절을 만들 때 두 문장에 반복되는 대상을 찾아보세요."
      },
      {
        "title": "주격과 목적격 구별",
        "text": "The friend who called me에서 who는 called의 주어라 생략하지 않습니다. The friend (who/that) I called에서 I가 주어, who/that은 called의 목적어라 제한적 관계절에서는 생략할 수 있습니다. I called him의 him을 관계사로 바꾼 것이므로 뒤에 him을 다시 남기지 않습니다."
      },
      {
        "title": "장소 where와 시간 when",
        "text": "a café where I study는 “그곳에서” 공부한다는 뜻이고, a café that I like는 “그 카페를” 좋아한다는 뜻입니다. where는 장소 명사라고 무조건 쓰는 말이 아니라 안쪽 절에서 장소 부사 역할을 합니다. the day when we met처럼 시점을 설명할 수도 있습니다."
      },
      {
        "title": "쉼표가 있는 덧붙임",
        "text": "My sister, who lives in Busan, …는 이미 특정된 sister에 추가 정보를 넣습니다. 이 비제한적 관계절에서는 보통 that을 쓰거나 관계사를 생략하지 않습니다. 기본 말하기에서는 쉼표 없는 “어떤 대상인지 좁히는” 관계절부터 연습하세요."
      }
    ],
    "forms": [
      {
        "label": "명사 + 주격 관계절",
        "pattern": "사람 who / 사물 which/that + 동사",
        "note": "a friend who likes music"
      },
      {
        "label": "명사 + 목적격 관계절",
        "pattern": "관계사 + 주어 + 동사",
        "note": "a movie (that) I watched"
      },
      {
        "label": "장소 관계절",
        "pattern": "장소 + where + 주어 + 동사",
        "note": "a park where I exercise"
      },
      {
        "label": "소유",
        "pattern": "명사 + whose + 명사 + 동사",
        "note": "a friend whose hobby is photography"
      }
    ],
    "examples": [
      {
        "en": "I have a friend who works at a hotel.",
        "ko": "호텔에서 일하는 친구가 있어요.",
        "analysis": "who가 works의 주어이고 friend를 설명합니다. friend가 단수여서 works입니다."
      },
      {
        "en": "This is the café that I told you about.",
        "ko": "여기가 제가 이야기했던 카페예요.",
        "analysis": "that은 about의 대상입니다. 제한적 목적격 관계사라 This is the café I told you about도 가능합니다."
      },
      {
        "en": "It’s a quiet place where I can relax.",
        "ko": "제가 쉴 수 있는 조용한 장소예요.",
        "analysis": "where는 그 장소에서라는 부사 역할입니다. I can relax에는 별도 목적어가 필요하지 않습니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "The friend who he lives nearby is kind.",
        "right": "The friend who lives nearby is kind.",
        "why": "who가 이미 주어이므로 he를 중복하지 않습니다."
      },
      {
        "wrong": "This is the movie that I watched it.",
        "right": "This is the movie that I watched.",
        "why": "that이 watched의 목적어 자리이므로 it을 중복하지 않습니다."
      }
    ],
    "exercises": [
      {
        "q": "“제가 좋아하는 카페”를 바르게 표현하면?",
        "options": [
          "a café that I like it",
          "a café that I like",
          "a café where I like"
        ],
        "answer": "a café that I like",
        "explanation": "like의 목적어인 café를 that으로 연결했으므로 it을 추가하지 않습니다. where만으로는 like의 목적어를 채우지 못합니다."
      },
      {
        "q": "“제가 운동하는 공원”을 바르게 표현하면?",
        "options": [
          "a park where I exercise",
          "a park who I exercise",
          "a park which I exercise it"
        ],
        "answer": "a park where I exercise",
        "explanation": "exercise는 이 문장에서 자동사입니다. 장소 “그곳에서”를 나타내는 where가 자연스럽습니다."
      }
    ],
    "spoken": {
      "prompt": "좋아하는 장소와 함께 가는 사람을 관계절로 설명하세요.",
      "sample": "There’s a park where I go jogging. I usually go with a friend who lives nearby.",
      "note": "장소에서 하는 활동은 where, 사람의 특징은 who로 연결해 보세요."
    }
  },
  {
    "id": "g30",
    "cat": "문장 연결",
    "title": "31 · 조건문: 실제 가능성과 가정",
    "lead": "if절은 조건, 주절은 그 조건의 결과를 말합니다. 현재 가능한 조건인지 사실과 다른 상상인지 구분하세요.",
    "concepts": [
      {
        "title": "일반적인 조건과 실제 미래",
        "text": "If I stay up late, I feel tired는 반복적으로 성립하는 관계라 양쪽 현재형입니다. If it rains tomorrow, I’ll stay home은 실제 가능한 미래 조건입니다. 미래 조건의 if절에서는 보통 현재형, 결과에는 will/can/may 등 상황에 맞는 표현을 씁니다."
      },
      {
        "title": "현재·미래의 가정",
        "text": "If I had more time, I would travel more는 시간이 충분하지 않지만 상상해 보는 상황입니다. if절의 과거형 had는 반드시 과거 시간을 뜻하지 않고 현실과 거리를 둡니다. be는 격식 있는 가정에서 If I were …를 씁니다. 실제 회화에서는 was도 들립니다."
      },
      {
        "title": "과거의 반대 가정",
        "text": "If I had booked earlier, I would have saved money는 예약을 일찍 하지 않았던 과거를 바꾸어 상상합니다. if + had + 분사, would have + 분사 형태입니다. 기본 미래 조건을 먼저 익힌 뒤, 후회·놓친 기회를 말할 때 이 구조를 더하세요."
      },
      {
        "title": "unless와 if의 다른 의미",
        "text": "unless는 기본적으로 if … not에 가까운 “~하지 않는 한”입니다. unless it rains는 비가 오지 않는 한이라는 조건입니다. I don’t know if it will rain의 if는 “~인지”라는 간접질문이므로, 미래 조건절에서 will을 피하는 규칙이 그대로 적용되지 않습니다."
      }
    ],
    "forms": [
      {
        "label": "반복적 사실",
        "pattern": "If + 현재, 현재",
        "note": "If I skip breakfast, I get hungry."
      },
      {
        "label": "가능한 미래",
        "pattern": "If + 현재, will/can … + 원형",
        "note": "If it rains, I’ll stay home."
      },
      {
        "label": "현재의 상상",
        "pattern": "If + 과거, would/could + 원형",
        "note": "If I had time, I’d travel."
      },
      {
        "label": "과거의 상상",
        "pattern": "If + had + 분사, would have + 분사",
        "note": "If I had left earlier, I would have arrived on time."
      }
    ],
    "examples": [
      {
        "en": "If the room isn’t available, could you suggest another hotel?",
        "ko": "그 방이 없으면 다른 호텔을 추천해 주실 수 있나요?",
        "analysis": "실제 가능한 조건을 현재형 isn’t로 말하고 결과를 부탁의 could you로 연결합니다."
      },
      {
        "en": "If I had a bigger kitchen, I would cook more often.",
        "ko": "주방이 더 컸다면 더 자주 요리할 텐데요.",
        "analysis": "현재 현실과 다른 상상이므로 had / would cook입니다."
      },
      {
        "en": "If I had checked the address, I wouldn’t have gotten lost.",
        "ko": "주소를 확인했더라면 길을 잃지 않았을 거예요.",
        "analysis": "확인하지 않았고 길을 잃은 과거를 반대로 가정합니다. gotten은 get의 미국식 과거분사입니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "If it will rain tomorrow, I’ll stay home.",
        "right": "If it rains tomorrow, I’ll stay home.",
        "why": "기본 미래 조건의 if절에는 현재형을 씁니다. 의지 등 특수한 will 용법은 별개입니다."
      },
      {
        "wrong": "If I had more money, I will buy a car. (현실과 다른 가정)",
        "right": "If I had more money, I would buy a car.",
        "why": "현재의 반대 가정으로 had를 사용하면 결과도 would로 연결합니다."
      }
    ],
    "exercises": [
      {
        "q": "“내일 비가 오면 집에 있을게요”의 기본 표현은?",
        "options": [
          "If it rains tomorrow, I’ll stay home.",
          "If it will rain tomorrow, I’ll stay home.",
          "If it rain tomorrow, I’ll stay home."
        ],
        "answer": "If it rains tomorrow, I’ll stay home.",
        "explanation": "미래 조건절에는 현재형 rains, 결과절에는 will을 씁니다."
      },
      {
        "q": "“시간이 더 있다면 여행을 더 할 텐데”라는 현재 가정은?",
        "options": [
          "If I had more time, I would travel more.",
          "If I have more time, I traveled more.",
          "If I had more time, I would traveled more."
        ],
        "answer": "If I had more time, I would travel more.",
        "explanation": "if절 과거형 had는 현재의 상상이고 would 뒤에는 원형 travel이 옵니다."
      }
    ],
    "spoken": {
      "prompt": "여행 계획이 어긋났을 때의 대안과 여유가 있다면 하고 싶은 일을 말하세요.",
      "sample": "If the weather is bad, I’ll visit a museum instead. If I had more vacation time, I would stay for another week.",
      "note": "가능한 계획과 현실과 다른 상상을 시제로 구별하세요."
    }
  },
  {
    "id": "g31",
    "cat": "문장 연결",
    "title": "32 · 명령·제안: 원형·let’s·why don’t we",
    "lead": "상대에게 행동을 요청하거나 함께할 일을 제안할 때는 평서문과 다른 시작 형태를 씁니다.",
    "concepts": [
      {
        "title": "명령문에는 주어 you를 보통 생략",
        "text": "동사원형으로 시작합니다: Turn left / Please wait here. 부정은 Don’t + 원형: Don’t worry. be동사도 원형으로: Be careful / Don’t be late. please를 붙여도 상황에 따라 직접적인 명령으로 들릴 수 있으므로 서비스 롤플레이의 부탁은 Could you …?도 함께 익히세요."
      },
      {
        "title": "함께하는 제안",
        "text": "Let’s + 원형은 “우리 ~하자”입니다. 부정 제안은 Let’s not + 원형. Let’s는 let us의 축약이지만 일반적인 제안에서는 관용 표현처럼 익히면 됩니다. Let’s going이나 Let’s to go로 바꾸지 않습니다."
      },
      {
        "title": "다른 제안 표현",
        "text": "Why don’t we + 원형?는 실제로 이유를 캐묻기보다 제안으로 쓰입니다. How about + 명사/-ing?는 선택지를 제시합니다. Shall we …?도 가능합니다. 상대에게만 제안하면 Why don’t you …?가 되며 문맥에 따라 조언·지적처럼 들릴 수 있습니다."
      }
    ],
    "forms": [
      {
        "label": "명령·안내",
        "pattern": "(Please) + 원형",
        "note": "Please take a seat."
      },
      {
        "label": "부정 명령",
        "pattern": "Don’t + 원형",
        "note": "Don’t forget your passport."
      },
      {
        "label": "함께 제안",
        "pattern": "Let’s (not) + 원형",
        "note": "Let’s take a break."
      },
      {
        "label": "의문형 제안",
        "pattern": "Why don’t we + 원형? / How about + -ing?",
        "note": "How about taking the bus?"
      }
    ],
    "examples": [
      {
        "en": "Go straight and turn left at the corner.",
        "ko": "직진한 뒤 모퉁이에서 왼쪽으로 도세요.",
        "analysis": "길 안내 명령문입니다. go와 turn 모두 원형이며 you는 생략됐습니다."
      },
      {
        "en": "Let’s not drive today. How about taking the subway?",
        "ko": "오늘은 운전하지 말자. 지하철을 타는 건 어때?",
        "analysis": "Let’s not 뒤 drive는 원형, 전치사 about 뒤 taking은 -ing입니다."
      },
      {
        "en": "Why don’t we meet at the station?",
        "ko": "역에서 만나는 게 어때요?",
        "analysis": "why don’t we는 이 문맥에서 제안의 기능을 합니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "Let’s to go outside.",
        "right": "Let’s go outside.",
        "why": "Let’s 뒤에는 to 없이 원형입니다."
      },
      {
        "wrong": "How about go hiking?",
        "right": "How about going hiking?",
        "why": "전치사 about 뒤에는 명사나 동명사 -ing가 옵니다."
      }
    ],
    "exercises": [
      {
        "q": "“조심하세요”의 올바른 명령문은?",
        "options": [
          "Are careful.",
          "Be careful.",
          "Is careful."
        ],
        "answer": "Be careful.",
        "explanation": "명령문은 주어 you를 보통 생략하고 동사원형으로 시작합니다. 따라서 are/is가 아닌 be를 쓰고, 뒤의 형용사 careful로 요청하는 상태를 나타냅니다."
      },
      {
        "q": "“산책하는 건 어때요?”의 올바른 제안은?",
        "options": [
          "How about taking a walk?",
          "How about to take a walk?",
          "How about take a walk?"
        ],
        "answer": "How about taking a walk?",
        "explanation": "How about 뒤에는 동명사 taking 또는 명사 표현이 옵니다."
      }
    ],
    "spoken": {
      "prompt": "친구에게 휴일 활동을 두 가지 제안하세요.",
      "sample": "Let’s go for a walk first. After that, how about getting coffee at the café near the station?",
      "note": "Let’s + 원형과 How about + -ing를 각각 말해 보세요."
    }
  },
  {
    "id": "g32",
    "cat": "문장 연결",
    "title": "33 · 구동사와 동사·전치사 조합",
    "lead": "동사 뒤의 짧은 단어 하나가 뜻과 어순을 바꿀 수 있습니다. 단어가 아니라 쓰임이 있는 덩어리로 익히세요.",
    "concepts": [
      {
        "title": "동사 + 소사로 새로운 의미",
        "text": "turn on은 켜다, put off는 미루다, find out은 알아내다, work out은 운동하다·해결되다 등입니다. 소사 on/off/out을 사전 뜻 그대로 조합하면 실제 의미를 놓칠 수 있습니다. 같은 구동사가 여러 뜻을 갖기도 하므로 예문과 상황을 함께 익히세요."
      },
      {
        "title": "분리 가능한 구동사",
        "text": "turn on the light 또는 turn the light on처럼 명사 목적어 위치를 바꿀 수 있습니다. the light는 명사 light를 중심으로 한 명사구입니다. 반면 it(그것), them(그것들)은 이미 말한 명사를 대신하는 대명사이며, 여기서는 목적격입니다. 분리 가능한 구동사의 목적어가 me/you/him/her/it/us/them이면 반드시 동사와 소사 사이에 둡니다: turn it on, put it off, pick them up. 불을 켠다는 뜻으로 turn on it을 쓰지 않습니다. 이 규칙을 분리 불가능한 look after her에 적용하지는 않습니다."
      },
      {
        "title": "분리하지 않는 동사·전치사 조합",
        "text": "look after my sister, listen to music처럼 목적어를 뒤에 둡니다. look my sister after로 바꾸지 않습니다. look forward to처럼 세 단어인 표현도 있습니다. 모든 “동사+짧은 단어”가 분리 가능한 것은 아니므로, 새 표현은 사전의 목적어 위치도 확인하세요."
      },
      {
        "title": "목적어가 없는 표현",
        "text": "wake up, show up, get up은 목적어 없이도 쓸 수 있습니다. I woke up at seven. 반대로 wake someone up은 누군가를 깨우다는 다른 구조입니다. 내 일과나 문제 상황에서 자주 쓰는 표현을 우선 익히면 말하기에 바로 활용할 수 있습니다."
      }
    ],
    "forms": [
      {
        "label": "분리 가능 + 명사",
        "pattern": "turn on the light / turn the light on",
        "note": "put off the trip / put the trip off"
      },
      {
        "label": "분리 가능 + 대명사",
        "pattern": "동사 + it/them + 소사",
        "note": "turn it on / pick them up"
      },
      {
        "label": "분리 불가",
        "pattern": "look after / listen to + 목적어",
        "note": "look after her / listen to it"
      },
      {
        "label": "목적어 없이",
        "pattern": "wake up / get up / show up",
        "note": "I woke up early."
      }
    ],
    "examples": [
      {
        "en": "The music was too loud, so I turned it down.",
        "ko": "음악이 너무 커서 볼륨을 줄였어요.",
        "analysis": "turn down은 볼륨을 낮추다입니다. 대명사 it은 turn과 down 사이에 놓습니다."
      },
      {
        "en": "We had to put off the trip because of the weather.",
        "ko": "날씨 때문에 여행을 미뤄야 했어요.",
        "analysis": "put off는 미루다. 목적어 trip이 명사라 put the trip off도 가능합니다."
      },
      {
        "en": "I looked after my sister while my parents were away.",
        "ko": "부모님이 안 계시는 동안 여동생을 돌봤어요.",
        "analysis": "look after는 돌보다라는 뜻이며 목적어를 사이에 끼우지 않습니다."
      }
    ],
    "mistakes": [
      {
        "wrong": "Please turn on it. (불을 켜달라는 의미)",
        "right": "Please turn it on.",
        "why": "분리 가능한 turn on에서 대명사 목적어는 가운데에 놓습니다."
      },
      {
        "wrong": "I listened music.",
        "right": "I listened to music.",
        "why": "listen은 대상을 연결할 때 전치사 to가 필요합니다."
      }
    ],
    "exercises": [
      {
        "q": "“그걸 꺼주세요”의 올바른 문장은?",
        "options": [
          "Please turn off it.",
          "Please turn it off.",
          "Please turn it offed."
        ],
        "answer": "Please turn it off.",
        "explanation": "turn off는 분리 가능한 구동사이고 대명사 it은 동사와 소사 사이에 둡니다."
      },
      {
        "q": "“동생을 돌봤어요”의 올바른 형태는?",
        "options": [
          "I looked my sister after.",
          "I looked after my sister.",
          "I looked after to my sister."
        ],
        "answer": "I looked after my sister.",
        "explanation": "look after는 분리하지 않고 목적어를 표현 뒤에 둡니다."
      }
    ],
    "spoken": {
      "prompt": "일상에서 겪은 문제를 구동사 두 개로 설명하세요.",
      "sample": "My alarm didn’t go off, so I woke up late. I had to put off my morning workout.",
      "note": "go off는 알람이 울리다, wake up은 잠에서 깨다, put off는 미루다입니다."
    }
  }
];
const vocabulary = [
  {
    "cat": "시간·빈도",
    "term": "usually",
    "meaning": "보통",
    "example": "I usually get up at seven.",
    "ko": "보통 7시에 일어나요.",
    "usages": [
      "usually walk to work"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "rarely",
    "meaning": "거의 ~하지 않는",
    "example": "I rarely eat out on weekdays.",
    "ko": "평일에는 외식을 거의 안 해요.",
    "usages": [
      "rarely drive"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "spend time",
    "meaning": "시간을 보내다",
    "example": "I spend time with my family.",
    "ko": "가족과 시간을 보내요."
  },
  {
    "cat": "일상·집안일",
    "term": "relax",
    "meaning": "쉬다, 긴장을 풀다",
    "example": "I listen to music to relax.",
    "ko": "쉬려고 음악을 들어요."
  },
  {
    "cat": "일상·집안일",
    "term": "routine",
    "meaning": "일상, 반복하는 습관; 일과, 반복 습관",
    "example": "My morning routine is simple.",
    "ko": "아침 일과는 단순해요.",
    "usages": [
      "a daily routine"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "get ready",
    "meaning": "준비하다",
    "example": "I get ready for work at eight.",
    "ko": "8시에 출근 준비를 해요."
  },
  {
    "cat": "교통·이동",
    "term": "commute",
    "meaning": "통근하다",
    "example": "I commute by subway.",
    "ko": "지하철로 통근해요.",
    "usages": [
      "commute to work"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "take a break",
    "meaning": "잠깐 쉬다",
    "example": "I take a break after lunch.",
    "ko": "점심 후에 잠깐 쉬어요."
  },
  {
    "cat": "동네·도시",
    "term": "neighborhood",
    "meaning": "동네",
    "example": "My neighborhood is quiet.",
    "ko": "우리 동네는 조용해요.",
    "usages": [
      "a quiet neighborhood"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "nearby",
    "meaning": "근처에, 근처의",
    "example": "There’s a park nearby.",
    "ko": "근처에 공원이 있어요.",
    "usages": [
      "a nearby café"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "convenient",
    "meaning": "편리한",
    "example": "The location is convenient.",
    "ko": "위치가 편리해요.",
    "usages": [
      "a convenient location"
    ]
  },
  {
    "cat": "집·공간",
    "term": "cozy",
    "meaning": "아늑한",
    "example": "My room is small but cozy.",
    "ko": "방은 작지만 아늑해요."
  },
  {
    "cat": "집·공간",
    "term": "spacious",
    "meaning": "넓은",
    "example": "The living room is spacious.",
    "ko": "거실은 넓어요."
  },
  {
    "cat": "상태·크기·비교",
    "term": "crowded",
    "meaning": "붐비는",
    "example": "The street gets crowded at night.",
    "ko": "밤에는 거리가 붐벼요.",
    "usages": [
      "a crowded train"
    ]
  },
  {
    "cat": "집·공간",
    "term": "within walking distance",
    "meaning": "걸어서 갈 수 있는 거리의",
    "example": "The café is within walking distance.",
    "ko": "카페는 걸어서 갈 수 있어요."
  },
  {
    "cat": "기본 동사·행동",
    "term": "move",
    "meaning": "이동하다, 이사하다",
    "example": "I moved here last year.",
    "ko": "작년에 여기로 이사했어요.",
    "usages": [
      "move to a new apartment"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "go for a walk",
    "meaning": "산책하러 가다",
    "example": "I go for a walk after dinner.",
    "ko": "저녁 후에 산책하러 가요."
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "work out",
    "meaning": "운동하다; 해결되다",
    "example": "I work out twice a week.",
    "ko": "일주일에 두 번 운동해요.",
    "usages": [
      "work out at the gym"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "be into",
    "meaning": "~에 관심이 많다",
    "example": "I’m into movies these days.",
    "ko": "요즘 영화에 관심이 많아요."
  },
  {
    "cat": "생각·선택",
    "term": "prefer",
    "meaning": "더 좋아하다",
    "example": "I prefer comedies to action movies.",
    "ko": "액션보다 코미디 영화를 좋아해요.",
    "usages": [
      "prefer tea to coffee"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "recommend",
    "meaning": "추천하다",
    "example": "I’d recommend this movie.",
    "ko": "이 영화를 추천하고 싶어요."
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "catch up with",
    "meaning": "밀린 근황을 나누다",
    "example": "I caught up with a friend over coffee.",
    "ko": "친구와 커피를 마시며 근황을 나눴어요.",
    "usages": [
      "catch up with an old friend"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "try out",
    "meaning": "시험 삼아 해보다",
    "example": "I want to try out a new hobby.",
    "ko": "새 취미를 해보고 싶어요.",
    "usages": [
      "try out a new hobby"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "be worth it",
    "meaning": "그만한 가치가 있다",
    "example": "The ticket was expensive, but it was worth it.",
    "ko": "표는 비쌌지만 그만한 가치가 있었어요."
  },
  {
    "cat": "여행·숙박",
    "term": "reservation",
    "meaning": "예약",
    "example": "I’d like to make a reservation.",
    "ko": "예약하고 싶어요.",
    "usages": [
      "confirm a reservation"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "book",
    "meaning": "예약하다; 책",
    "example": "I booked a room online.",
    "ko": "온라인으로 방을 예약했어요.",
    "usages": [
      "book a hotel"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "cancel",
    "meaning": "취소하다",
    "example": "I need to cancel my reservation.",
    "ko": "예약을 취소해야 해요.",
    "usages": [
      "cancel a reservation"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "reschedule",
    "meaning": "일정을 변경하다",
    "example": "Could we reschedule the tour?",
    "ko": "투어 일정을 바꿀 수 있을까요?",
    "usages": [
      "reschedule a meeting"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "available",
    "meaning": "이용 가능한",
    "example": "Is a room available for tonight?",
    "ko": "오늘 밤 이용 가능한 방이 있나요?",
    "usages": [
      "an available room"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "delay",
    "meaning": "지연시키다; 지연",
    "example": "My flight was delayed.",
    "ko": "항공편이 지연됐어요.",
    "usages": [
      "a two-hour delay"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "get lost",
    "meaning": "길을 잃다",
    "example": "I got lost on my way to the hotel.",
    "ko": "호텔에 가다가 길을 잃었어요."
  },
  {
    "cat": "여행·숙박",
    "term": "get around",
    "meaning": "돌아다니다, 이동하다",
    "example": "It’s easy to get around by bus.",
    "ko": "버스로 이동하기 쉬워요."
  },
  {
    "cat": "외식·카페",
    "term": "order",
    "meaning": "주문하다",
    "example": "I ordered a sandwich.",
    "ko": "샌드위치를 주문했어요.",
    "usages": [
      "place an order"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "takeout",
    "meaning": "포장 음식",
    "example": "I picked up some takeout.",
    "ko": "포장 음식을 사 왔어요.",
    "usages": [
      "order takeout"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "portion",
    "meaning": "음식의 1인분, 양",
    "example": "The portions are generous.",
    "ko": "음식 양이 푸짐해요.",
    "usages": [
      "a large portion"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "affordable",
    "meaning": "가격이 부담스럽지 않은",
    "example": "The food is affordable.",
    "ko": "음식 가격이 부담스럽지 않아요.",
    "usages": [
      "affordable housing"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "refund",
    "meaning": "환불",
    "example": "Could I get a refund?",
    "ko": "환불받을 수 있을까요?",
    "usages": [
      "request a refund"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "exchange",
    "meaning": "교환하다",
    "example": "I’d like to exchange this shirt.",
    "ko": "이 셔츠를 교환하고 싶어요.",
    "usages": [
      "exchange a shirt"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "fit",
    "meaning": "크기가 맞다",
    "example": "These shoes don’t fit me.",
    "ko": "이 신발은 크기가 안 맞아요."
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "run out of",
    "meaning": "~이 다 떨어지다",
    "example": "We ran out of milk.",
    "ko": "우유가 다 떨어졌어요.",
    "usages": [
      "run out of milk"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "memorable",
    "meaning": "기억에 남는",
    "example": "It was a memorable trip.",
    "ko": "기억에 남는 여행이었어요.",
    "usages": [
      "a memorable experience"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "excited",
    "meaning": "신이 난",
    "example": "I was excited about the trip.",
    "ko": "여행이 기대돼서 신이 났어요.",
    "usages": [
      "excited about a trip"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "frustrated",
    "meaning": "답답한, 좌절한",
    "example": "I felt frustrated by the delay.",
    "ko": "지연 때문에 답답했어요.",
    "usages": [
      "frustrated with the delay"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "relieved",
    "meaning": "안도한",
    "example": "I was relieved when I found my bag.",
    "ko": "가방을 찾았을 때 안도했어요.",
    "usages": [
      "feel relieved"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "disappointed",
    "meaning": "실망한",
    "example": "I was disappointed with the service.",
    "ko": "서비스에 실망했어요.",
    "usages": [
      "disappointed with the service"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "embarrassed",
    "meaning": "당황한, 창피한; 창피한, 당황한",
    "example": "I was embarrassed when I forgot his name.",
    "ko": "이름을 잊어서 당황했어요.",
    "usages": [
      "feel embarrassed"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "unexpected",
    "meaning": "예상치 못한",
    "example": "An unexpected problem came up.",
    "ko": "예상치 못한 문제가 생겼어요.",
    "usages": [
      "an unexpected delay"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "turn out",
    "meaning": "결과적으로 ~이 되다",
    "example": "The trip turned out to be great.",
    "ko": "여행은 결과적으로 정말 좋았어요."
  },
  {
    "cat": "문제·변화",
    "term": "issue",
    "meaning": "문제, 쟁점",
    "example": "There’s an issue with my room.",
    "ko": "방에 문제가 있어요.",
    "usages": [
      "an issue with the booking"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "broken",
    "meaning": "고장 난, 부서진",
    "example": "The air conditioner is broken.",
    "ko": "에어컨이 고장 났어요.",
    "usages": [
      "a broken screen"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "fix",
    "meaning": "고치다",
    "example": "Could someone fix it?",
    "ko": "누가 고쳐주실 수 있나요?",
    "usages": [
      "fix a problem"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "replace",
    "meaning": "교체하다",
    "example": "Could you replace the towels?",
    "ko": "수건을 교체해 주실 수 있나요?",
    "usages": [
      "replace the battery"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "by mistake",
    "meaning": "실수로",
    "example": "I booked the wrong date by mistake.",
    "ko": "실수로 날짜를 잘못 예약했어요."
  },
  {
    "cat": "이유·의견·연결",
    "term": "instead",
    "meaning": "대신",
    "example": "Could I get another room instead?",
    "ko": "대신 다른 방을 받을 수 있나요?",
    "usages": [
      "take the bus instead"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "figure out",
    "meaning": "알아내다, 해결 방법을 찾다",
    "example": "We figured out what went wrong.",
    "ko": "무엇이 잘못됐는지 알아냈어요.",
    "usages": [
      "figure out a problem"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "make sure",
    "meaning": "확인하다, 확실히 하다",
    "example": "I’ll make sure I have the right address.",
    "ko": "주소가 맞는지 확인할게요."
  },
  {
    "cat": "이유·의견·연결",
    "term": "actually",
    "meaning": "사실은",
    "example": "Actually, I prefer staying home.",
    "ko": "사실 집에 있는 걸 더 좋아해요.",
    "usages": [
      "actually, I prefer tea"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "for example",
    "meaning": "예를 들어",
    "example": "For example, I often go hiking.",
    "ko": "예를 들어 등산을 자주 해요."
  },
  {
    "cat": "이유·의견·연결",
    "term": "especially",
    "meaning": "특히",
    "example": "I love music, especially jazz.",
    "ko": "음악, 특히 재즈를 좋아해요.",
    "usages": [
      "especially in winter"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "compared to",
    "meaning": "~와 비교하면",
    "example": "Compared to my old place, it’s quieter.",
    "ko": "예전 집에 비해 더 조용해요."
  },
  {
    "cat": "이유·의견·연결",
    "term": "at first",
    "meaning": "처음에는",
    "example": "At first, I was nervous.",
    "ko": "처음에는 긴장했어요."
  },
  {
    "cat": "이유·의견·연결",
    "term": "eventually",
    "meaning": "결국, 마침내",
    "example": "Eventually, we found the hotel.",
    "ko": "마침내 호텔을 찾았어요."
  },
  {
    "cat": "이유·의견·연결",
    "term": "on top of that",
    "meaning": "게다가",
    "example": "On top of that, it started raining.",
    "ko": "게다가 비가 오기 시작했어요."
  },
  {
    "cat": "이유·의견·연결",
    "term": "that’s why",
    "meaning": "그래서 ~하다",
    "example": "That’s why I go there often.",
    "ko": "그래서 그곳에 자주 가요."
  },
  {
    "cat": "사람·가족",
    "term": "person",
    "meaning": "사람",
    "usages": [
      "a kind person"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "people",
    "meaning": "사람들",
    "usages": [
      "meet new people"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "man",
    "meaning": "남자",
    "usages": [
      "a young man"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "woman",
    "meaning": "여자",
    "usages": [
      "a young woman"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "child",
    "meaning": "아이",
    "usages": [
      "an only child"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "adult",
    "meaning": "성인",
    "usages": [
      "an adult ticket"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "baby",
    "meaning": "아기",
    "usages": [
      "a newborn baby"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "teenager",
    "meaning": "십 대 청소년",
    "usages": [
      "as a teenager"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "parent",
    "meaning": "부모",
    "usages": [
      "a single parent"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "mother",
    "meaning": "어머니",
    "usages": [
      "my mother’s birthday"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "father",
    "meaning": "아버지",
    "usages": [
      "my father’s advice"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "son",
    "meaning": "아들",
    "usages": [
      "their eldest son"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "daughter",
    "meaning": "딸",
    "usages": [
      "their youngest daughter"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "brother",
    "meaning": "형제",
    "usages": [
      "my older brother"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "sister",
    "meaning": "자매",
    "usages": [
      "my younger sister"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "husband",
    "meaning": "남편",
    "usages": [
      "her husband’s job"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "wife",
    "meaning": "아내",
    "usages": [
      "his wife’s hobby"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "couple",
    "meaning": "커플, 부부",
    "usages": [
      "a married couple"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "family",
    "meaning": "가족",
    "usages": [
      "spend time with family"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "relative",
    "meaning": "친척",
    "usages": [
      "visit relatives"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "cousin",
    "meaning": "사촌",
    "usages": [
      "my favorite cousin"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "aunt",
    "meaning": "이모·고모·숙모 등",
    "usages": [
      "visit my aunt"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "uncle",
    "meaning": "삼촌·외삼촌·고모부 등",
    "usages": [
      "stay with my uncle"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "grandmother",
    "meaning": "할머니",
    "usages": [
      "my grandmother’s house"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "grandfather",
    "meaning": "할아버지",
    "usages": [
      "call my grandfather"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "grandparent",
    "meaning": "조부모",
    "usages": [
      "visit my grandparents"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "grandchild",
    "meaning": "손주",
    "usages": [
      "play with a grandchild"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "friend",
    "meaning": "친구",
    "usages": [
      "a close friend"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "neighbor",
    "meaning": "이웃",
    "usages": [
      "talk to a neighbor"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "roommate",
    "meaning": "룸메이트",
    "usages": [
      "share a room with a roommate"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "classmate",
    "meaning": "급우",
    "usages": [
      "an old classmate"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "colleague",
    "meaning": "동료",
    "usages": [
      "have lunch with colleagues",
      "work with a colleague"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "coworker",
    "meaning": "직장 동료",
    "usages": [
      "help a coworker"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "partner",
    "meaning": "동반자, 파트너",
    "usages": [
      "a business partner"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "guest",
    "meaning": "손님",
    "usages": [
      "welcome a guest"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "host",
    "meaning": "주최자, 진행자",
    "usages": [
      "thank the host"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "visitor",
    "meaning": "방문객",
    "usages": [
      "a first-time visitor"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "stranger",
    "meaning": "모르는 사람",
    "usages": [
      "ask a stranger for directions"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "resident",
    "meaning": "거주자",
    "usages": [
      "local residents"
    ]
  },
  {
    "cat": "사람·가족",
    "term": "member",
    "meaning": "구성원, 회원",
    "usages": [
      "a family member"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "relationship",
    "meaning": "관계",
    "usages": [
      "build a relationship"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "friendship",
    "meaning": "우정",
    "usages": [
      "a lasting friendship"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "conversation",
    "meaning": "대화",
    "usages": [
      "start a conversation"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "chat",
    "meaning": "가볍게 이야기하다",
    "usages": [
      "chat with a friend"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "discussion",
    "meaning": "논의",
    "usages": [
      "have a discussion"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "argument",
    "meaning": "논쟁, 말다툼",
    "usages": [
      "have an argument"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "contact",
    "meaning": "연락하다; 연락",
    "usages": [
      "keep in contact"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "introduce",
    "meaning": "소개하다",
    "usages": [
      "introduce myself"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "invite",
    "meaning": "초대하다",
    "usages": [
      "invite friends over"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "invitation",
    "meaning": "초대",
    "usages": [
      "accept an invitation"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "visit",
    "meaning": "방문하다",
    "usages": [
      "visit my parents"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "welcome",
    "meaning": "환영하다",
    "usages": [
      "welcome visitors"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "greet",
    "meaning": "인사하다",
    "usages": [
      "greet a customer"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "meet",
    "meaning": "만나다",
    "usages": [
      "meet a friend"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "join",
    "meaning": "참여하다",
    "usages": [
      "join a club"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "share",
    "meaning": "공유하다",
    "usages": [
      "share an experience"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "support",
    "meaning": "지지하다, 돕다",
    "usages": [
      "support each other"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "trust",
    "meaning": "믿다",
    "usages": [
      "trust my friend"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "respect",
    "meaning": "존중하다",
    "usages": [
      "respect other opinions"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "promise",
    "meaning": "약속하다",
    "usages": [
      "promise to call"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "apologize",
    "meaning": "사과하다",
    "usages": [
      "apologize for being late"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "thank",
    "meaning": "감사하다",
    "usages": [
      "thank someone for their help"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "forgive",
    "meaning": "용서하다",
    "usages": [
      "forgive a mistake"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "agree",
    "meaning": "동의하다",
    "usages": [
      "agree with an opinion"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "disagree",
    "meaning": "동의하지 않다",
    "usages": [
      "disagree politely"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "interrupt",
    "meaning": "말을 끊다",
    "usages": [
      "interrupt a conversation"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "communicate",
    "meaning": "소통하다",
    "usages": [
      "communicate clearly"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "listen",
    "meaning": "듣다",
    "usages": [
      "listen to a friend"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "speak",
    "meaning": "말하다",
    "usages": [
      "speak in public"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "talk",
    "meaning": "이야기하다",
    "usages": [
      "talk about a trip"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "say",
    "meaning": "말하다",
    "usages": [
      "say hello"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "tell",
    "meaning": "말해주다",
    "usages": [
      "tell a story"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "ask",
    "meaning": "묻다, 요청하다",
    "usages": [
      "ask a question"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "answer",
    "meaning": "대답하다",
    "usages": [
      "answer the phone"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "reply",
    "meaning": "답하다",
    "usages": [
      "reply to a message"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "explain",
    "meaning": "설명하다",
    "usages": [
      "explain the situation"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "suggest",
    "meaning": "제안하다",
    "usages": [
      "suggest a restaurant"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "advice",
    "meaning": "조언",
    "usages": [
      "ask for advice"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "compliment",
    "meaning": "칭찬",
    "usages": [
      "give someone a compliment"
    ]
  },
  {
    "cat": "관계·대화",
    "term": "favor",
    "meaning": "부탁, 호의",
    "usages": [
      "ask a favor"
    ]
  },
  {
    "cat": "집·공간",
    "term": "home",
    "meaning": "집, 가정",
    "usages": [
      "stay at home"
    ]
  },
  {
    "cat": "집·공간",
    "term": "house",
    "meaning": "주택, 집",
    "usages": [
      "a two-story house"
    ]
  },
  {
    "cat": "집·공간",
    "term": "apartment",
    "meaning": "아파트",
    "usages": [
      "rent an apartment"
    ]
  },
  {
    "cat": "집·공간",
    "term": "building",
    "meaning": "건물",
    "usages": [
      "an old building"
    ]
  },
  {
    "cat": "집·공간",
    "term": "room",
    "meaning": "방",
    "usages": [
      "a spare room"
    ]
  },
  {
    "cat": "집·공간",
    "term": "bedroom",
    "meaning": "침실",
    "usages": [
      "a spacious bedroom"
    ]
  },
  {
    "cat": "집·공간",
    "term": "bathroom",
    "meaning": "욕실",
    "usages": [
      "a private bathroom"
    ]
  },
  {
    "cat": "집·공간",
    "term": "kitchen",
    "meaning": "부엌",
    "usages": [
      "a modern kitchen"
    ]
  },
  {
    "cat": "집·공간",
    "term": "living room",
    "meaning": "거실",
    "usages": [
      "sit in the living room"
    ]
  },
  {
    "cat": "집·공간",
    "term": "dining room",
    "meaning": "식당, 식사 공간",
    "usages": [
      "a separate dining room"
    ]
  },
  {
    "cat": "집·공간",
    "term": "balcony",
    "meaning": "발코니",
    "usages": [
      "a small balcony"
    ]
  },
  {
    "cat": "집·공간",
    "term": "hallway",
    "meaning": "복도",
    "usages": [
      "a long hallway"
    ]
  },
  {
    "cat": "집·공간",
    "term": "entrance",
    "meaning": "입구",
    "usages": [
      "the main entrance"
    ]
  },
  {
    "cat": "집·공간",
    "term": "exit",
    "meaning": "출구",
    "usages": [
      "an emergency exit"
    ]
  },
  {
    "cat": "집·공간",
    "term": "door",
    "meaning": "문",
    "usages": [
      "close the door"
    ]
  },
  {
    "cat": "집·공간",
    "term": "window",
    "meaning": "창문",
    "usages": [
      "open the window"
    ]
  },
  {
    "cat": "집·공간",
    "term": "wall",
    "meaning": "벽",
    "usages": [
      "hang a picture on the wall"
    ]
  },
  {
    "cat": "집·공간",
    "term": "floor",
    "meaning": "바닥; 층",
    "usages": [
      "a wooden floor"
    ]
  },
  {
    "cat": "집·공간",
    "term": "ceiling",
    "meaning": "천장",
    "usages": [
      "a high ceiling"
    ]
  },
  {
    "cat": "집·공간",
    "term": "roof",
    "meaning": "지붕",
    "usages": [
      "repair the roof"
    ]
  },
  {
    "cat": "집·공간",
    "term": "stairs",
    "meaning": "계단",
    "usages": [
      "take the stairs"
    ]
  },
  {
    "cat": "집·공간",
    "term": "elevator",
    "meaning": "엘리베이터",
    "usages": [
      "use the elevator"
    ]
  },
  {
    "cat": "집·공간",
    "term": "furniture",
    "meaning": "가구",
    "usages": [
      "buy new furniture"
    ]
  },
  {
    "cat": "집·공간",
    "term": "sofa",
    "meaning": "소파",
    "usages": [
      "sit on the sofa"
    ]
  },
  {
    "cat": "집·공간",
    "term": "chair",
    "meaning": "의자",
    "usages": [
      "a comfortable chair"
    ]
  },
  {
    "cat": "집·공간",
    "term": "table",
    "meaning": "테이블",
    "usages": [
      "set the table"
    ]
  },
  {
    "cat": "집·공간",
    "term": "desk",
    "meaning": "책상",
    "usages": [
      "work at my desk"
    ]
  },
  {
    "cat": "집·공간",
    "term": "bed",
    "meaning": "침대",
    "usages": [
      "make the bed"
    ]
  },
  {
    "cat": "집·공간",
    "term": "mattress",
    "meaning": "매트리스",
    "usages": [
      "a soft mattress"
    ]
  },
  {
    "cat": "집·공간",
    "term": "pillow",
    "meaning": "베개",
    "usages": [
      "a firm pillow"
    ]
  },
  {
    "cat": "집·공간",
    "term": "blanket",
    "meaning": "담요",
    "usages": [
      "a warm blanket"
    ]
  },
  {
    "cat": "집·공간",
    "term": "closet",
    "meaning": "옷장",
    "usages": [
      "a walk-in closet"
    ]
  },
  {
    "cat": "집·공간",
    "term": "shelf",
    "meaning": "선반",
    "usages": [
      "put books on a shelf"
    ]
  },
  {
    "cat": "집·공간",
    "term": "drawer",
    "meaning": "서랍",
    "usages": [
      "a desk drawer"
    ]
  },
  {
    "cat": "집·공간",
    "term": "lamp",
    "meaning": "램프",
    "usages": [
      "a reading lamp"
    ]
  },
  {
    "cat": "집·공간",
    "term": "light",
    "meaning": "불, 조명; 가벼운",
    "usages": [
      "turn on the light",
      "a light bag"
    ]
  },
  {
    "cat": "집·공간",
    "term": "curtain",
    "meaning": "커튼",
    "usages": [
      "draw the curtains"
    ]
  },
  {
    "cat": "집·공간",
    "term": "carpet",
    "meaning": "카펫",
    "usages": [
      "a thick carpet"
    ]
  },
  {
    "cat": "집·공간",
    "term": "mirror",
    "meaning": "거울",
    "usages": [
      "look in the mirror"
    ]
  },
  {
    "cat": "집·공간",
    "term": "key",
    "meaning": "열쇠",
    "usages": [
      "lose my keys"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "wake",
    "meaning": "깨다, 깨우다",
    "usages": [
      "wake up early"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "sleep",
    "meaning": "자다",
    "usages": [
      "sleep well"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "rest",
    "meaning": "쉬다",
    "usages": [
      "get some rest"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "wash",
    "meaning": "씻다",
    "usages": [
      "wash my hands"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "brush",
    "meaning": "솔질하다",
    "usages": [
      "brush my teeth"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "shower",
    "meaning": "샤워하다; 샤워",
    "usages": [
      "take a shower"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "bath",
    "meaning": "목욕",
    "usages": [
      "take a bath"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "clean",
    "meaning": "청소하다; 깨끗한",
    "usages": [
      "clean the kitchen",
      "a clean bathroom"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "tidy",
    "meaning": "정리하다; 깔끔한",
    "usages": [
      "tidy my room"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "sweep",
    "meaning": "쓸다",
    "usages": [
      "sweep the floor"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "mop",
    "meaning": "대걸레질하다",
    "usages": [
      "mop the floor"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "vacuum",
    "meaning": "진공청소기로 청소하다",
    "usages": [
      "vacuum the carpet"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "laundry",
    "meaning": "세탁물, 빨래",
    "usages": [
      "do the laundry"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "chore",
    "meaning": "집안일",
    "usages": [
      "do household chores"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "iron",
    "meaning": "다림질하다",
    "usages": [
      "iron a shirt"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "fold",
    "meaning": "접다",
    "usages": [
      "fold the clothes"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "hang",
    "meaning": "걸다",
    "usages": [
      "hang up a coat"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "dry",
    "meaning": "말리다; 마른",
    "usages": [
      "dry the dishes",
      "dry weather"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "wipe",
    "meaning": "닦다",
    "usages": [
      "wipe the table"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "scrub",
    "meaning": "문질러 닦다",
    "usages": [
      "scrub the sink"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "trash",
    "meaning": "쓰레기",
    "usages": [
      "take out the trash"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "garbage",
    "meaning": "쓰레기",
    "usages": [
      "throw away garbage"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "recycle",
    "meaning": "재활용하다",
    "usages": [
      "recycle plastic bottles"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "recycling",
    "meaning": "재활용",
    "usages": [
      "sort the recycling"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "sort",
    "meaning": "분류하다",
    "usages": [
      "sort the laundry"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "organize",
    "meaning": "정돈하다, 조직하다",
    "usages": [
      "organize my closet"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "arrange",
    "meaning": "배치하다, 마련하다",
    "usages": [
      "arrange the furniture"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "water",
    "meaning": "물; 물을 주다",
    "usages": [
      "water the plants"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "plant",
    "meaning": "식물",
    "usages": [
      "a houseplant"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "pet",
    "meaning": "반려동물",
    "usages": [
      "feed a pet"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "feed",
    "meaning": "먹이를 주다",
    "usages": [
      "feed the dog"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "walk",
    "meaning": "걷다; 산책시키다",
    "usages": [
      "walk the dog"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "habit",
    "meaning": "습관",
    "usages": [
      "develop a good habit"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "schedule",
    "meaning": "일정",
    "usages": [
      "a busy schedule"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "alarm",
    "meaning": "알람, 경보",
    "usages": [
      "set an alarm"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "prepare",
    "meaning": "준비하다",
    "usages": [
      "prepare for work"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "pack",
    "meaning": "짐을 싸다",
    "usages": [
      "pack a bag"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "unpack",
    "meaning": "짐을 풀다",
    "usages": [
      "unpack a suitcase"
    ]
  },
  {
    "cat": "일상·집안일",
    "term": "errand",
    "meaning": "심부름, 볼일",
    "usages": [
      "run errands"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "city",
    "meaning": "도시",
    "usages": [
      "a large city"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "town",
    "meaning": "소도시",
    "usages": [
      "a small town"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "village",
    "meaning": "마을",
    "usages": [
      "a fishing village"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "countryside",
    "meaning": "시골",
    "usages": [
      "live in the countryside"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "suburb",
    "meaning": "교외",
    "usages": [
      "move to the suburbs"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "downtown",
    "meaning": "도심",
    "usages": [
      "go downtown"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "street",
    "meaning": "거리",
    "usages": [
      "a busy street"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "road",
    "meaning": "도로",
    "usages": [
      "a main road"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "avenue",
    "meaning": "큰 거리, 대로",
    "usages": [
      "a tree-lined avenue"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "corner",
    "meaning": "모퉁이",
    "usages": [
      "turn at the corner"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "block",
    "meaning": "도시의 한 구획",
    "usages": [
      "two blocks away"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "sidewalk",
    "meaning": "인도",
    "usages": [
      "walk on the sidewalk"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "crosswalk",
    "meaning": "횡단보도",
    "usages": [
      "use the crosswalk"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "intersection",
    "meaning": "교차로",
    "usages": [
      "a busy intersection"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "park",
    "meaning": "주차하다; 공원",
    "usages": [
      "a neighborhood park",
      "park the car"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "playground",
    "meaning": "놀이터",
    "usages": [
      "take children to the playground"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "square",
    "meaning": "광장",
    "usages": [
      "the town square"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "library",
    "meaning": "도서관",
    "usages": [
      "borrow books from the library"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "museum",
    "meaning": "박물관",
    "usages": [
      "visit a history museum"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "gallery",
    "meaning": "미술관, 전시장",
    "usages": [
      "an art gallery"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "theater",
    "meaning": "극장",
    "usages": [
      "a local theater"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "stadium",
    "meaning": "경기장",
    "usages": [
      "a soccer stadium"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "market",
    "meaning": "시장",
    "usages": [
      "a traditional market"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "supermarket",
    "meaning": "슈퍼마켓",
    "usages": [
      "shop at a supermarket"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "mall",
    "meaning": "쇼핑몰",
    "usages": [
      "a shopping mall"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "bank",
    "meaning": "은행",
    "usages": [
      "go to the bank"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "post office",
    "meaning": "우체국",
    "usages": [
      "send a parcel at the post office"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "police station",
    "meaning": "경찰서",
    "usages": [
      "report it at the police station"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "hospital",
    "meaning": "병원",
    "usages": [
      "a nearby hospital"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "clinic",
    "meaning": "의원, 클리닉",
    "usages": [
      "a dental clinic"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "pharmacy",
    "meaning": "약국",
    "usages": [
      "find a pharmacy"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "school",
    "meaning": "학교",
    "usages": [
      "a local school"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "community",
    "meaning": "지역사회, 공동체",
    "usages": [
      "a friendly community"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "facility",
    "meaning": "시설",
    "usages": [
      "sports facilities"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "location",
    "meaning": "위치",
    "usages": [
      "a central location"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "area",
    "meaning": "지역, 구역",
    "usages": [
      "a residential area"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "district",
    "meaning": "구역, 지역",
    "usages": [
      "a shopping district"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "landmark",
    "meaning": "대표적 명소",
    "usages": [
      "a famous landmark"
    ]
  },
  {
    "cat": "동네·도시",
    "term": "surroundings",
    "meaning": "주변 환경",
    "usages": [
      "peaceful surroundings"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "food",
    "meaning": "음식",
    "usages": [
      "try local food"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "meal",
    "meaning": "식사",
    "usages": [
      "a homemade meal"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "breakfast",
    "meaning": "아침 식사",
    "usages": [
      "have breakfast"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "lunch",
    "meaning": "점심 식사",
    "usages": [
      "eat lunch"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "dinner",
    "meaning": "저녁 식사",
    "usages": [
      "cook dinner"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "snack",
    "meaning": "간식",
    "usages": [
      "a light snack"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "rice",
    "meaning": "쌀, 밥",
    "usages": [
      "a bowl of rice"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "bread",
    "meaning": "빵",
    "usages": [
      "fresh bread"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "noodle",
    "meaning": "면",
    "usages": [
      "a noodle dish"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "pasta",
    "meaning": "파스타",
    "usages": [
      "a plate of pasta"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "cereal",
    "meaning": "시리얼",
    "usages": [
      "a bowl of cereal"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "flour",
    "meaning": "밀가루",
    "usages": [
      "a bag of flour"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "meat",
    "meaning": "고기",
    "usages": [
      "grilled meat"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "beef",
    "meaning": "소고기",
    "usages": [
      "roast beef"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "pork",
    "meaning": "돼지고기",
    "usages": [
      "cooked pork"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "chicken",
    "meaning": "닭; 닭고기",
    "usages": [
      "fried chicken"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "fish",
    "meaning": "물고기; 생선",
    "usages": [
      "fresh fish"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "seafood",
    "meaning": "해산물",
    "usages": [
      "a seafood restaurant"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "egg",
    "meaning": "달걀",
    "usages": [
      "a boiled egg"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "milk",
    "meaning": "우유",
    "usages": [
      "a glass of milk"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "cheese",
    "meaning": "치즈",
    "usages": [
      "a slice of cheese"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "butter",
    "meaning": "버터",
    "usages": [
      "spread butter on bread"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "yogurt",
    "meaning": "요거트",
    "usages": [
      "plain yogurt"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "fruit",
    "meaning": "과일",
    "usages": [
      "fresh fruit"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "vegetable",
    "meaning": "채소",
    "usages": [
      "green vegetables"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "apple",
    "meaning": "사과",
    "usages": [
      "an apple a day"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "banana",
    "meaning": "바나나",
    "usages": [
      "a ripe banana"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "orange",
    "meaning": "오렌지",
    "usages": [
      "orange juice"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "lemon",
    "meaning": "레몬",
    "usages": [
      "a slice of lemon"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "berry",
    "meaning": "베리류 열매",
    "usages": [
      "fresh berries"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "grape",
    "meaning": "포도",
    "usages": [
      "a bunch of grapes"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "peach",
    "meaning": "복숭아",
    "usages": [
      "a juicy peach"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "potato",
    "meaning": "감자",
    "usages": [
      "baked potatoes"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "tomato",
    "meaning": "토마토",
    "usages": [
      "a tomato salad"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "onion",
    "meaning": "양파",
    "usages": [
      "chop an onion"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "carrot",
    "meaning": "당근",
    "usages": [
      "raw carrots"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "cucumber",
    "meaning": "오이",
    "usages": [
      "sliced cucumber"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "lettuce",
    "meaning": "상추·양상추",
    "usages": [
      "fresh lettuce"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "garlic",
    "meaning": "마늘",
    "usages": [
      "a clove of garlic"
    ]
  },
  {
    "cat": "음식·재료",
    "term": "mushroom",
    "meaning": "버섯",
    "usages": [
      "mushroom soup"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "cook",
    "meaning": "요리하다",
    "usages": [
      "cook a meal"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "bake",
    "meaning": "오븐에 굽다",
    "usages": [
      "bake a cake"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "boil",
    "meaning": "끓이다",
    "usages": [
      "boil water"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "fry",
    "meaning": "기름에 튀기거나 부치다",
    "usages": [
      "fry an egg"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "grill",
    "meaning": "석쇠에 굽다",
    "usages": [
      "grill vegetables"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "roast",
    "meaning": "오븐 등에 구워 익히다",
    "usages": [
      "roast chicken"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "steam",
    "meaning": "찌다",
    "usages": [
      "steam vegetables"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "heat",
    "meaning": "데우다; 열",
    "usages": [
      "heat up food"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "mix",
    "meaning": "섞다",
    "usages": [
      "mix the ingredients"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "stir",
    "meaning": "젓다",
    "usages": [
      "stir the soup"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "chop",
    "meaning": "잘게 썰다",
    "usages": [
      "chop vegetables"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "slice",
    "meaning": "얇게 썰다; 조각",
    "usages": [
      "slice bread"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "peel",
    "meaning": "껍질을 벗기다",
    "usages": [
      "peel a potato"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "pour",
    "meaning": "붓다",
    "usages": [
      "pour a drink"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "add",
    "meaning": "더하다",
    "usages": [
      "add some salt"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "serve",
    "meaning": "음식을 내다, 제공하다",
    "usages": [
      "serve dinner"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "recipe",
    "meaning": "조리법",
    "usages": [
      "follow a recipe"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "ingredient",
    "meaning": "재료",
    "usages": [
      "fresh ingredients"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "flavor",
    "meaning": "맛, 풍미",
    "usages": [
      "a rich flavor"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "taste",
    "meaning": "맛; 맛보다",
    "usages": [
      "taste the sauce"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "delicious",
    "meaning": "맛있는",
    "usages": [
      "a delicious meal"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "tasty",
    "meaning": "맛좋은",
    "usages": [
      "a tasty snack"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "sweet",
    "meaning": "단",
    "usages": [
      "a sweet dessert"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "salty",
    "meaning": "짠",
    "usages": [
      "salty food"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "sour",
    "meaning": "신",
    "usages": [
      "a sour taste"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "bitter",
    "meaning": "쓴",
    "usages": [
      "bitter coffee"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "spicy",
    "meaning": "매운",
    "usages": [
      "spicy noodles"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "mild",
    "meaning": "순한, 자극적이지 않은",
    "usages": [
      "a mild sauce"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "fresh",
    "meaning": "신선한",
    "usages": [
      "fresh ingredients"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "raw",
    "meaning": "날것의",
    "usages": [
      "raw fish"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "cooked",
    "meaning": "익힌",
    "usages": [
      "cooked vegetables"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "crispy",
    "meaning": "바삭한",
    "usages": [
      "crispy chicken"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "crunchy",
    "meaning": "아삭한, 오독오독한",
    "usages": [
      "crunchy carrots"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "soft",
    "meaning": "부드러운",
    "usages": [
      "soft bread"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "tender",
    "meaning": "연한, 부드러운",
    "usages": [
      "tender meat"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "juicy",
    "meaning": "즙이 많은",
    "usages": [
      "a juicy steak"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "greasy",
    "meaning": "기름진",
    "usages": [
      "greasy food"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "bland",
    "meaning": "싱거운, 맛이 밋밋한",
    "usages": [
      "bland soup"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "season",
    "meaning": "계절; 양념하다",
    "usages": [
      "season with salt",
      "the rainy season"
    ]
  },
  {
    "cat": "요리·맛",
    "term": "sauce",
    "meaning": "소스",
    "usages": [
      "a tomato sauce"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "restaurant",
    "meaning": "식당",
    "usages": [
      "a popular restaurant"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "café",
    "meaning": "카페",
    "usages": [
      "a cozy café"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "coffee",
    "meaning": "커피",
    "usages": [
      "a cup of coffee"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "tea",
    "meaning": "차",
    "usages": [
      "a pot of tea"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "juice",
    "meaning": "주스",
    "usages": [
      "fresh orange juice"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "soda",
    "meaning": "탄산음료",
    "usages": [
      "a can of soda"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "drink",
    "meaning": "음료; 마시다",
    "usages": [
      "order a drink"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "beverage",
    "meaning": "음료",
    "usages": [
      "hot beverages"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "menu",
    "meaning": "메뉴",
    "usages": [
      "look at the menu"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "waiter",
    "meaning": "남성 종업원",
    "usages": [
      "ask the waiter"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "waitress",
    "meaning": "여성 종업원",
    "usages": [
      "ask the waitress"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "server",
    "meaning": "음식점 종업원",
    "usages": [
      "thank the server"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "customer",
    "meaning": "고객",
    "usages": [
      "a regular customer"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "bill",
    "meaning": "계산서",
    "usages": [
      "ask for the bill"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "check",
    "meaning": "확인하다; 계산서",
    "usages": [
      "pay the check"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "tip",
    "meaning": "팁, 조언",
    "usages": [
      "leave a tip"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "appetizer",
    "meaning": "전채 요리",
    "usages": [
      "order an appetizer"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "main course",
    "meaning": "주요리",
    "usages": [
      "choose a main course"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "dessert",
    "meaning": "디저트",
    "usages": [
      "have dessert"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "salad",
    "meaning": "샐러드",
    "usages": [
      "a fresh salad"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "soup",
    "meaning": "수프",
    "usages": [
      "a bowl of soup"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "sandwich",
    "meaning": "샌드위치",
    "usages": [
      "a cheese sandwich"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "burger",
    "meaning": "버거",
    "usages": [
      "a veggie burger"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "pizza",
    "meaning": "피자",
    "usages": [
      "a slice of pizza"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "steak",
    "meaning": "스테이크",
    "usages": [
      "a grilled steak"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "cake",
    "meaning": "케이크",
    "usages": [
      "a birthday cake"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "cookie",
    "meaning": "쿠키",
    "usages": [
      "a chocolate cookie"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "pastry",
    "meaning": "페이스트리",
    "usages": [
      "fresh pastries"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "buffet",
    "meaning": "뷔페",
    "usages": [
      "a breakfast buffet"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "dine",
    "meaning": "식사하다",
    "usages": [
      "dine with friends"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "delivery",
    "meaning": "배달",
    "usages": [
      "free delivery"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "refill",
    "meaning": "리필",
    "usages": [
      "a free refill"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "special",
    "meaning": "특별한; 특별 메뉴",
    "usages": [
      "today’s special"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "vegan",
    "meaning": "비건의, 비건",
    "usages": [
      "a vegan option"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "vegetarian",
    "meaning": "채식의, 채식주의자",
    "usages": [
      "a vegetarian meal"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "allergy",
    "meaning": "알레르기",
    "usages": [
      "a food allergy"
    ]
  },
  {
    "cat": "외식·카페",
    "term": "appetite",
    "meaning": "식욕",
    "usages": [
      "have a good appetite"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "shop",
    "meaning": "가게; 쇼핑하다",
    "usages": [
      "shop for clothes"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "store",
    "meaning": "상점",
    "usages": [
      "a department store"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "purchase",
    "meaning": "구매하다; 구매",
    "usages": [
      "make a purchase"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "buy",
    "meaning": "사다",
    "usages": [
      "buy groceries"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "sell",
    "meaning": "팔다",
    "usages": [
      "sell used books"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "pay",
    "meaning": "지불하다",
    "usages": [
      "pay by card"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "spend",
    "meaning": "쓰다, 소비하다",
    "usages": [
      "spend money wisely"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "cost",
    "meaning": "비용이 들다; 비용",
    "usages": [
      "the total cost"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "price",
    "meaning": "가격",
    "usages": [
      "compare prices"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "budget",
    "meaning": "예산",
    "usages": [
      "stick to a budget"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "money",
    "meaning": "돈",
    "usages": [
      "save money"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "cash",
    "meaning": "현금",
    "usages": [
      "pay in cash"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "coin",
    "meaning": "동전",
    "usages": [
      "a small coin"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "change",
    "meaning": "잔돈; 변화",
    "usages": [
      "keep the change"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "wallet",
    "meaning": "지갑",
    "usages": [
      "carry a wallet"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "card",
    "meaning": "카드",
    "usages": [
      "use a credit card"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "receipt",
    "meaning": "영수증",
    "usages": [
      "keep the receipt"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "discount",
    "meaning": "할인",
    "usages": [
      "get a discount"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "sale",
    "meaning": "할인 판매; 판매",
    "usages": [
      "on sale"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "bargain",
    "meaning": "저렴하게 산 물건",
    "usages": [
      "find a bargain"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "deal",
    "meaning": "거래; 좋은 조건",
    "usages": [
      "a good deal"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "cheap",
    "meaning": "싼",
    "usages": [
      "a cheap ticket"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "expensive",
    "meaning": "비싼",
    "usages": [
      "an expensive coat"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "valuable",
    "meaning": "가치 있는",
    "usages": [
      "a valuable item"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "worth",
    "meaning": "~의 가치가 있는",
    "usages": [
      "worth the price"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "return",
    "meaning": "반품하다; 돌아오다",
    "usages": [
      "return a damaged item"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "size",
    "meaning": "크기, 치수",
    "usages": [
      "the right size"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "brand",
    "meaning": "브랜드",
    "usages": [
      "a local brand"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "quality",
    "meaning": "품질",
    "usages": [
      "good quality"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "product",
    "meaning": "제품",
    "usages": [
      "a new product"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "item",
    "meaning": "물건, 품목",
    "usages": [
      "a useful item"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "stock",
    "meaning": "재고",
    "usages": [
      "in stock"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "payment",
    "meaning": "결제, 지불",
    "usages": [
      "make a payment"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "fee",
    "meaning": "수수료, 요금",
    "usages": [
      "an entrance fee"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "charge",
    "meaning": "청구하다; 요금",
    "usages": [
      "an extra charge"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "account",
    "meaning": "계좌, 계정",
    "usages": [
      "a bank account"
    ]
  },
  {
    "cat": "쇼핑·돈",
    "term": "coupon",
    "meaning": "쿠폰",
    "usages": [
      "use a coupon"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "clothes",
    "meaning": "옷",
    "usages": [
      "casual clothes"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "clothing",
    "meaning": "의류",
    "usages": [
      "winter clothing"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "shirt",
    "meaning": "셔츠",
    "usages": [
      "a cotton shirt"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "T-shirt",
    "meaning": "티셔츠",
    "usages": [
      "a plain T-shirt"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "blouse",
    "meaning": "블라우스",
    "usages": [
      "a silk blouse"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "sweater",
    "meaning": "스웨터",
    "usages": [
      "a warm sweater"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "hoodie",
    "meaning": "후드티",
    "usages": [
      "wear a hoodie"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "jacket",
    "meaning": "재킷",
    "usages": [
      "a light jacket"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "coat",
    "meaning": "코트",
    "usages": [
      "a winter coat"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "pants",
    "meaning": "바지",
    "usages": [
      "a pair of pants"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "jeans",
    "meaning": "청바지",
    "usages": [
      "blue jeans"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "shorts",
    "meaning": "반바지",
    "usages": [
      "wear shorts"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "skirt",
    "meaning": "치마",
    "usages": [
      "a long skirt"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "dress",
    "meaning": "원피스; 옷을 입다",
    "usages": [
      "a summer dress"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "suit",
    "meaning": "정장",
    "usages": [
      "a business suit"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "uniform",
    "meaning": "제복, 유니폼",
    "usages": [
      "a school uniform"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "sock",
    "meaning": "양말",
    "usages": [
      "a pair of socks"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "shoe",
    "meaning": "신발",
    "usages": [
      "comfortable shoes"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "sneaker",
    "meaning": "운동화",
    "usages": [
      "running sneakers"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "boot",
    "meaning": "부츠",
    "usages": [
      "winter boots"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "sandal",
    "meaning": "샌들",
    "usages": [
      "a pair of sandals"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "slipper",
    "meaning": "실내화, 슬리퍼",
    "usages": [
      "wear slippers"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "hat",
    "meaning": "모자",
    "usages": [
      "a sun hat"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "cap",
    "meaning": "챙이 있는 모자",
    "usages": [
      "a baseball cap"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "scarf",
    "meaning": "목도리",
    "usages": [
      "a wool scarf"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "glove",
    "meaning": "장갑",
    "usages": [
      "warm gloves"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "belt",
    "meaning": "벨트",
    "usages": [
      "a leather belt"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "tie",
    "meaning": "넥타이; 묶다",
    "usages": [
      "wear a tie"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "bag",
    "meaning": "가방",
    "usages": [
      "a shoulder bag"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "backpack",
    "meaning": "배낭",
    "usages": [
      "pack a backpack"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "purse",
    "meaning": "핸드백, 작은 돈지갑",
    "usages": [
      "a small purse"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "umbrella",
    "meaning": "우산",
    "usages": [
      "bring an umbrella"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "glasses",
    "meaning": "안경",
    "usages": [
      "wear glasses"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "sunglasses",
    "meaning": "선글라스",
    "usages": [
      "put on sunglasses"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "watch",
    "meaning": "손목시계; 보다",
    "usages": [
      "wear a watch"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "ring",
    "meaning": "반지",
    "usages": [
      "a wedding ring"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "necklace",
    "meaning": "목걸이",
    "usages": [
      "a silver necklace"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "earring",
    "meaning": "귀걸이",
    "usages": [
      "a pair of earrings"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "outfit",
    "meaning": "한 벌의 옷차림",
    "usages": [
      "a casual outfit"
    ]
  },
  {
    "cat": "옷·소지품",
    "term": "fabric",
    "meaning": "옷감, 천",
    "usages": [
      "a soft fabric"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "transportation",
    "meaning": "교통, 이동 수단",
    "usages": [
      "public transportation"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "traffic",
    "meaning": "교통량, 차량 흐름",
    "usages": [
      "heavy traffic"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "vehicle",
    "meaning": "차량",
    "usages": [
      "an electric vehicle"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "car",
    "meaning": "자동차",
    "usages": [
      "rent a car"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "bus",
    "meaning": "버스",
    "usages": [
      "catch a bus"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "train",
    "meaning": "기차",
    "usages": [
      "take a train"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "subway",
    "meaning": "지하철",
    "usages": [
      "a subway station"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "taxi",
    "meaning": "택시",
    "usages": [
      "take a taxi"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "bicycle",
    "meaning": "자전거",
    "usages": [
      "ride a bicycle"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "motorcycle",
    "meaning": "오토바이",
    "usages": [
      "ride a motorcycle"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "truck",
    "meaning": "트럭",
    "usages": [
      "a delivery truck"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "plane",
    "meaning": "비행기",
    "usages": [
      "board a plane"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "boat",
    "meaning": "보트, 배",
    "usages": [
      "a fishing boat"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "ship",
    "meaning": "큰 배",
    "usages": [
      "a cruise ship"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "ferry",
    "meaning": "연락선, 페리",
    "usages": [
      "take a ferry"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "station",
    "meaning": "역",
    "usages": [
      "the nearest station"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "stop",
    "meaning": "정류장; 멈추다",
    "usages": [
      "a bus stop"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "platform",
    "meaning": "승강장",
    "usages": [
      "wait on the platform"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "ticket",
    "meaning": "표",
    "usages": [
      "a round-trip ticket"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "fare",
    "meaning": "교통 요금",
    "usages": [
      "the bus fare"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "route",
    "meaning": "경로",
    "usages": [
      "the fastest route"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "transfer",
    "meaning": "환승하다",
    "usages": [
      "transfer to another line"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "passenger",
    "meaning": "승객",
    "usages": [
      "a train passenger"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "driver",
    "meaning": "운전자",
    "usages": [
      "a careful driver"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "pedestrian",
    "meaning": "보행자",
    "usages": [
      "a pedestrian crossing"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "ride",
    "meaning": "타다; 타기",
    "usages": [
      "ride a bike"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "drive",
    "meaning": "운전하다",
    "usages": [
      "drive to work"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "parking",
    "meaning": "주차",
    "usages": [
      "a parking space"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "license",
    "meaning": "면허, 허가증",
    "usages": [
      "a driver’s license"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "seat",
    "meaning": "좌석",
    "usages": [
      "a window seat"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "seat belt",
    "meaning": "안전벨트",
    "usages": [
      "wear a seat belt"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "fuel",
    "meaning": "연료",
    "usages": [
      "save fuel"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "gas",
    "meaning": "휘발유, 가스",
    "usages": [
      "a gas station"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "highway",
    "meaning": "고속도로",
    "usages": [
      "drive on the highway"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "bridge",
    "meaning": "다리",
    "usages": [
      "cross a bridge"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "tunnel",
    "meaning": "터널",
    "usages": [
      "go through a tunnel"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "speed",
    "meaning": "속도",
    "usages": [
      "reduce speed"
    ]
  },
  {
    "cat": "교통·이동",
    "term": "distance",
    "meaning": "거리",
    "usages": [
      "a short distance"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "travel",
    "meaning": "여행하다",
    "usages": [
      "travel abroad"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "trip",
    "meaning": "여행",
    "usages": [
      "a weekend trip"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "journey",
    "meaning": "여정",
    "usages": [
      "a long journey"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "vacation",
    "meaning": "휴가",
    "usages": [
      "take a vacation"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "holiday",
    "meaning": "휴일, 휴가",
    "usages": [
      "a national holiday"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "tour",
    "meaning": "투어",
    "usages": [
      "a guided tour"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "tourist",
    "meaning": "관광객",
    "usages": [
      "a popular tourist spot"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "destination",
    "meaning": "목적지",
    "usages": [
      "a holiday destination"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "itinerary",
    "meaning": "여행 일정",
    "usages": [
      "plan an itinerary"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "passport",
    "meaning": "여권",
    "usages": [
      "renew a passport"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "visa",
    "meaning": "비자",
    "usages": [
      "apply for a visa"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "airport",
    "meaning": "공항",
    "usages": [
      "arrive at the airport"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "flight",
    "meaning": "항공편",
    "usages": [
      "a direct flight"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "airline",
    "meaning": "항공사",
    "usages": [
      "a budget airline"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "boarding pass",
    "meaning": "탑승권",
    "usages": [
      "show a boarding pass"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "gate",
    "meaning": "탑승구, 출입구",
    "usages": [
      "the departure gate"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "departure",
    "meaning": "출발",
    "usages": [
      "the departure time"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "arrival",
    "meaning": "도착",
    "usages": [
      "the arrival time"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "luggage",
    "meaning": "여행 짐",
    "usages": [
      "carry heavy luggage"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "suitcase",
    "meaning": "여행 가방",
    "usages": [
      "pack a suitcase"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "baggage",
    "meaning": "수하물",
    "usages": [
      "checked baggage"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "accommodation",
    "meaning": "숙박 시설",
    "usages": [
      "book accommodation"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "hotel",
    "meaning": "호텔",
    "usages": [
      "a beachfront hotel"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "hostel",
    "meaning": "호스텔",
    "usages": [
      "stay at a hostel"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "resort",
    "meaning": "리조트",
    "usages": [
      "a ski resort"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "check-in",
    "meaning": "체크인",
    "usages": [
      "early check-in"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "check-out",
    "meaning": "체크아웃",
    "usages": [
      "late check-out"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "reception",
    "meaning": "접수처, 프런트",
    "usages": [
      "ask at reception"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "receptionist",
    "meaning": "접수 직원",
    "usages": [
      "speak to the receptionist"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "amenity",
    "meaning": "편의 시설",
    "usages": [
      "hotel amenities"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "souvenir",
    "meaning": "기념품",
    "usages": [
      "buy a souvenir"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "guide",
    "meaning": "안내자; 안내하다",
    "usages": [
      "a tour guide"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "map",
    "meaning": "지도",
    "usages": [
      "read a map"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "sightseeing",
    "meaning": "관광",
    "usages": [
      "go sightseeing"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "abroad",
    "meaning": "해외에, 해외로",
    "usages": [
      "study abroad"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "local",
    "meaning": "현지의, 지역의",
    "usages": [
      "local culture"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "foreign",
    "meaning": "외국의",
    "usages": [
      "a foreign country"
    ]
  },
  {
    "cat": "여행·숙박",
    "term": "international",
    "meaning": "국제적인",
    "usages": [
      "an international flight"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "nature",
    "meaning": "자연",
    "usages": [
      "enjoy nature"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "weather",
    "meaning": "날씨",
    "usages": [
      "check the weather"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "climate",
    "meaning": "기후",
    "usages": [
      "a warm climate"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "spring",
    "meaning": "봄",
    "usages": [
      "in spring"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "summer",
    "meaning": "여름",
    "usages": [
      "a hot summer"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "autumn",
    "meaning": "가을",
    "usages": [
      "autumn leaves"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "winter",
    "meaning": "겨울",
    "usages": [
      "a cold winter"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "sun",
    "meaning": "태양",
    "usages": [
      "watch the sun rise"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "sunshine",
    "meaning": "햇빛",
    "usages": [
      "enjoy the sunshine"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "rain",
    "meaning": "비; 비가 오다",
    "usages": [
      "heavy rain"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "snow",
    "meaning": "눈; 눈이 오다",
    "usages": [
      "fresh snow"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "wind",
    "meaning": "바람",
    "usages": [
      "a strong wind"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "cloud",
    "meaning": "구름",
    "usages": [
      "dark clouds"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "storm",
    "meaning": "폭풍",
    "usages": [
      "a sudden storm"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "thunder",
    "meaning": "천둥",
    "usages": [
      "hear thunder"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "lightning",
    "meaning": "번개",
    "usages": [
      "a flash of lightning"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "fog",
    "meaning": "안개",
    "usages": [
      "thick fog"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "temperature",
    "meaning": "온도",
    "usages": [
      "a high temperature"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "forecast",
    "meaning": "예보",
    "usages": [
      "the weather forecast"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "sunny",
    "meaning": "화창한",
    "usages": [
      "a sunny day"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "rainy",
    "meaning": "비 오는",
    "usages": [
      "a rainy afternoon"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "snowy",
    "meaning": "눈 오는",
    "usages": [
      "a snowy winter"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "windy",
    "meaning": "바람이 부는",
    "usages": [
      "a windy day"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "cloudy",
    "meaning": "흐린",
    "usages": [
      "a cloudy sky"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "humid",
    "meaning": "습한",
    "usages": [
      "hot and humid weather"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "freezing",
    "meaning": "몹시 추운",
    "usages": [
      "freezing temperatures"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "mountain",
    "meaning": "산",
    "usages": [
      "climb a mountain"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "hill",
    "meaning": "언덕",
    "usages": [
      "a gentle hill"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "forest",
    "meaning": "숲",
    "usages": [
      "a dense forest"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "river",
    "meaning": "강",
    "usages": [
      "walk along the river"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "lake",
    "meaning": "호수",
    "usages": [
      "a peaceful lake"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "sea",
    "meaning": "바다",
    "usages": [
      "swim in the sea"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "ocean",
    "meaning": "대양, 바다",
    "usages": [
      "the Pacific Ocean"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "beach",
    "meaning": "해변",
    "usages": [
      "a sandy beach"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "island",
    "meaning": "섬",
    "usages": [
      "a small island"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "valley",
    "meaning": "계곡",
    "usages": [
      "a beautiful valley"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "waterfall",
    "meaning": "폭포",
    "usages": [
      "a famous waterfall"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "view",
    "meaning": "경치; 견해",
    "usages": [
      "a beautiful view"
    ]
  },
  {
    "cat": "자연·날씨",
    "term": "scenery",
    "meaning": "풍경",
    "usages": [
      "enjoy the scenery"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "hobby",
    "meaning": "취미",
    "usages": [
      "take up a hobby"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "interest",
    "meaning": "관심, 흥미",
    "usages": [
      "a personal interest"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "activity",
    "meaning": "활동",
    "usages": [
      "an outdoor activity"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "exercise",
    "meaning": "운동; 운동하다",
    "usages": [
      "get regular exercise"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "workout",
    "meaning": "운동 시간, 운동",
    "usages": [
      "a morning workout"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "sport",
    "meaning": "스포츠",
    "usages": [
      "play a sport"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "game",
    "meaning": "게임, 경기",
    "usages": [
      "watch a game"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "team",
    "meaning": "팀",
    "usages": [
      "join a team"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "player",
    "meaning": "선수, 참가자",
    "usages": [
      "a team player"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "coach",
    "meaning": "코치",
    "usages": [
      "a fitness coach"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "practice",
    "meaning": "연습하다; 연습",
    "usages": [
      "practice every day"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "training",
    "meaning": "훈련",
    "usages": [
      "strength training"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "fitness",
    "meaning": "체력, 건강",
    "usages": [
      "improve my fitness"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "gym",
    "meaning": "헬스장, 체육관",
    "usages": [
      "go to the gym"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "pool",
    "meaning": "수영장",
    "usages": [
      "an indoor pool"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "swim",
    "meaning": "수영하다",
    "usages": [
      "swim in the pool"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "run",
    "meaning": "달리다",
    "usages": [
      "run every morning"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "jog",
    "meaning": "조깅하다",
    "usages": [
      "jog in the park"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "hike",
    "meaning": "하이킹하다",
    "usages": [
      "hike in the mountains"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "climb",
    "meaning": "오르다",
    "usages": [
      "climb a hill"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "cycle",
    "meaning": "자전거를 타다",
    "usages": [
      "cycle to work"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "stretch",
    "meaning": "스트레칭하다",
    "usages": [
      "stretch after exercising"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "lift",
    "meaning": "들어 올리다",
    "usages": [
      "lift weights"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "weight",
    "meaning": "무게, 체중",
    "usages": [
      "lift a heavy weight"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "balance",
    "meaning": "균형",
    "usages": [
      "keep my balance"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "strength",
    "meaning": "힘, 강점",
    "usages": [
      "build strength"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "energy",
    "meaning": "에너지, 기력",
    "usages": [
      "have more energy"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "stamina",
    "meaning": "지구력",
    "usages": [
      "improve my stamina"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "soccer",
    "meaning": "축구",
    "usages": [
      "play soccer"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "basketball",
    "meaning": "농구",
    "usages": [
      "a basketball game"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "baseball",
    "meaning": "야구",
    "usages": [
      "watch baseball"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "tennis",
    "meaning": "테니스",
    "usages": [
      "play tennis"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "badminton",
    "meaning": "배드민턴",
    "usages": [
      "play badminton"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "golf",
    "meaning": "골프",
    "usages": [
      "a golf course"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "yoga",
    "meaning": "요가",
    "usages": [
      "do yoga"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "dance",
    "meaning": "춤추다; 춤",
    "usages": [
      "take a dance class"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "camping",
    "meaning": "캠핑",
    "usages": [
      "go camping"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "fishing",
    "meaning": "낚시",
    "usages": [
      "go fishing"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "gardening",
    "meaning": "정원 가꾸기",
    "usages": [
      "enjoy gardening"
    ]
  },
  {
    "cat": "취미·운동",
    "term": "photography",
    "meaning": "사진 촬영",
    "usages": [
      "learn photography"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "music",
    "meaning": "음악",
    "usages": [
      "listen to music"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "song",
    "meaning": "노래",
    "usages": [
      "a favorite song"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "singer",
    "meaning": "가수",
    "usages": [
      "a popular singer"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "band",
    "meaning": "밴드",
    "usages": [
      "a live band"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "concert",
    "meaning": "콘서트",
    "usages": [
      "attend a concert"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "festival",
    "meaning": "축제",
    "usages": [
      "a music festival"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "performance",
    "meaning": "공연, 수행",
    "usages": [
      "a live performance"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "stage",
    "meaning": "무대; 단계",
    "usages": [
      "perform on stage"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "audience",
    "meaning": "관객",
    "usages": [
      "a large audience"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "instrument",
    "meaning": "악기, 도구",
    "usages": [
      "play an instrument"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "piano",
    "meaning": "피아노",
    "usages": [
      "play the piano"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "guitar",
    "meaning": "기타",
    "usages": [
      "an acoustic guitar"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "drum",
    "meaning": "드럼, 북",
    "usages": [
      "play the drums"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "melody",
    "meaning": "멜로디",
    "usages": [
      "a catchy melody"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "rhythm",
    "meaning": "리듬",
    "usages": [
      "a steady rhythm"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "lyrics",
    "meaning": "노래 가사",
    "usages": [
      "remember the lyrics"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "album",
    "meaning": "앨범",
    "usages": [
      "a new album"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "playlist",
    "meaning": "재생 목록",
    "usages": [
      "make a playlist"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "movie",
    "meaning": "영화",
    "usages": [
      "watch a movie"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "film",
    "meaning": "영화",
    "usages": [
      "a short film"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "actor",
    "meaning": "배우",
    "usages": [
      "a leading actor"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "actress",
    "meaning": "여성 배우",
    "usages": [
      "a famous actress"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "director",
    "meaning": "감독",
    "usages": [
      "a film director"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "character",
    "meaning": "등장인물; 성격",
    "usages": [
      "the main character"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "scene",
    "meaning": "장면",
    "usages": [
      "a memorable scene"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "plot",
    "meaning": "줄거리",
    "usages": [
      "an interesting plot"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "story",
    "meaning": "이야기",
    "usages": [
      "tell a story"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "ending",
    "meaning": "결말",
    "usages": [
      "a surprising ending"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "comedy",
    "meaning": "코미디",
    "usages": [
      "a romantic comedy"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "drama",
    "meaning": "드라마",
    "usages": [
      "a family drama"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "thriller",
    "meaning": "스릴러",
    "usages": [
      "an exciting thriller"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "documentary",
    "meaning": "다큐멘터리",
    "usages": [
      "a nature documentary"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "animation",
    "meaning": "애니메이션",
    "usages": [
      "computer animation"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "art",
    "meaning": "예술",
    "usages": [
      "modern art"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "artist",
    "meaning": "예술가",
    "usages": [
      "a local artist"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "painting",
    "meaning": "그림, 회화",
    "usages": [
      "a beautiful painting"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "exhibition",
    "meaning": "전시회",
    "usages": [
      "visit an exhibition"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "culture",
    "meaning": "문화",
    "usages": [
      "experience a new culture"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "tradition",
    "meaning": "전통",
    "usages": [
      "a family tradition"
    ]
  },
  {
    "cat": "음악·영화·문화",
    "term": "custom",
    "meaning": "관습",
    "usages": [
      "a local custom"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "body",
    "meaning": "몸",
    "usages": [
      "take care of my body"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "head",
    "meaning": "머리",
    "usages": [
      "shake my head"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "face",
    "meaning": "얼굴",
    "usages": [
      "wash my face"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "eye",
    "meaning": "눈",
    "usages": [
      "close my eyes"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "ear",
    "meaning": "귀",
    "usages": [
      "cover my ears"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "nose",
    "meaning": "코",
    "usages": [
      "a runny nose"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "mouth",
    "meaning": "입",
    "usages": [
      "open my mouth"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "tooth",
    "meaning": "이",
    "usages": [
      "brush my teeth"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "neck",
    "meaning": "목",
    "usages": [
      "a stiff neck"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "shoulder",
    "meaning": "어깨",
    "usages": [
      "shoulder pain"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "arm",
    "meaning": "팔",
    "usages": [
      "stretch my arms"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "hand",
    "meaning": "손",
    "usages": [
      "wash my hands"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "finger",
    "meaning": "손가락",
    "usages": [
      "hurt a finger"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "back",
    "meaning": "등; 뒤",
    "usages": [
      "back pain"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "leg",
    "meaning": "다리",
    "usages": [
      "stretch my legs"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "knee",
    "meaning": "무릎",
    "usages": [
      "bend my knees"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "foot",
    "meaning": "발",
    "usages": [
      "rest my feet"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "stomach",
    "meaning": "위, 배",
    "usages": [
      "a stomach ache"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "heart",
    "meaning": "심장; 마음",
    "usages": [
      "a healthy heart"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "skin",
    "meaning": "피부",
    "usages": [
      "dry skin"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "health",
    "meaning": "건강",
    "usages": [
      "good health"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "healthy",
    "meaning": "건강한",
    "usages": [
      "a healthy lifestyle"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "illness",
    "meaning": "질병",
    "usages": [
      "recover from an illness"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "sick",
    "meaning": "아픈",
    "usages": [
      "feel sick"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "pain",
    "meaning": "통증",
    "usages": [
      "feel pain"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "ache",
    "meaning": "지속적인 아픔",
    "usages": [
      "a dull ache"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "fever",
    "meaning": "열",
    "usages": [
      "have a fever"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "cough",
    "meaning": "기침; 기침하다",
    "usages": [
      "a bad cough"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "cold",
    "meaning": "감기; 추운",
    "usages": [
      "catch a cold",
      "cold air"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "headache",
    "meaning": "두통",
    "usages": [
      "have a headache"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "symptom",
    "meaning": "증상",
    "usages": [
      "describe the symptoms"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "medicine",
    "meaning": "약",
    "usages": [
      "take medicine"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "pill",
    "meaning": "알약",
    "usages": [
      "take a pill"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "treatment",
    "meaning": "치료",
    "usages": [
      "medical treatment"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "doctor",
    "meaning": "의사",
    "usages": [
      "see a doctor"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "nurse",
    "meaning": "간호사",
    "usages": [
      "talk to a nurse"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "dentist",
    "meaning": "치과 의사",
    "usages": [
      "visit the dentist"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "appointment",
    "meaning": "예약, 약속",
    "usages": [
      "make an appointment"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "recover",
    "meaning": "회복하다",
    "usages": [
      "recover from a cold"
    ]
  },
  {
    "cat": "몸·건강",
    "term": "diet",
    "meaning": "식습관, 식단",
    "usages": [
      "a balanced diet"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "study",
    "meaning": "공부하다",
    "usages": [
      "study English"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "learn",
    "meaning": "배우다",
    "usages": [
      "learn a new skill"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "teach",
    "meaning": "가르치다",
    "usages": [
      "teach children"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "student",
    "meaning": "학생",
    "usages": [
      "a university student"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "teacher",
    "meaning": "선생님",
    "usages": [
      "an English teacher"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "class",
    "meaning": "수업",
    "usages": [
      "take a class"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "lesson",
    "meaning": "수업, 강의",
    "usages": [
      "a grammar lesson"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "course",
    "meaning": "강좌, 과정",
    "usages": [
      "an online course"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "lecture",
    "meaning": "강의",
    "usages": [
      "attend a lecture"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "subject",
    "meaning": "과목, 주제",
    "usages": [
      "a favorite subject"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "homework",
    "meaning": "숙제",
    "usages": [
      "do homework"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "assignment",
    "meaning": "과제",
    "usages": [
      "finish an assignment"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "exam",
    "meaning": "시험",
    "usages": [
      "take an exam"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "test",
    "meaning": "시험; 시험하다",
    "usages": [
      "a speaking test"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "quiz",
    "meaning": "퀴즈",
    "usages": [
      "take a quiz"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "score",
    "meaning": "점수",
    "usages": [
      "a high score"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "grade",
    "meaning": "성적; 학년",
    "usages": [
      "get a good grade"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "pass",
    "meaning": "통과하다",
    "usages": [
      "pass an exam"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "fail",
    "meaning": "실패하다, 불합격하다",
    "usages": [
      "fail a test"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "review",
    "meaning": "복습하다; 후기",
    "usages": [
      "review vocabulary"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "revise",
    "meaning": "수정하다, 복습하다",
    "usages": [
      "revise an essay"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "memorize",
    "meaning": "암기하다",
    "usages": [
      "memorize useful phrases"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "understand",
    "meaning": "이해하다",
    "usages": [
      "understand the rule"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "knowledge",
    "meaning": "지식",
    "usages": [
      "gain knowledge"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "skill",
    "meaning": "기술, 능력",
    "usages": [
      "develop a skill"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "ability",
    "meaning": "능력",
    "usages": [
      "speaking ability"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "language",
    "meaning": "언어",
    "usages": [
      "learn a language"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "word",
    "meaning": "단어",
    "usages": [
      "a useful word"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "vocabulary",
    "meaning": "어휘",
    "usages": [
      "expand my vocabulary"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "grammar",
    "meaning": "문법",
    "usages": [
      "study basic grammar"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "sentence",
    "meaning": "문장",
    "usages": [
      "make a sentence"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "phrase",
    "meaning": "구, 표현",
    "usages": [
      "a common phrase"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "pronunciation",
    "meaning": "발음",
    "usages": [
      "practice pronunciation"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "accent",
    "meaning": "억양, 발음상의 특징",
    "usages": [
      "a regional accent"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "meaning",
    "meaning": "뜻",
    "usages": [
      "check the meaning"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "example",
    "meaning": "예시",
    "usages": [
      "give an example"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "question",
    "meaning": "질문",
    "usages": [
      "ask a question"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "notebook",
    "meaning": "공책",
    "usages": [
      "write in a notebook"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "dictionary",
    "meaning": "사전",
    "usages": [
      "look up a word in a dictionary"
    ]
  },
  {
    "cat": "공부·언어",
    "term": "education",
    "meaning": "교육",
    "usages": [
      "higher education"
    ]
  },
  {
    "cat": "일·업무",
    "term": "work",
    "meaning": "일; 일하다",
    "usages": [
      "work from home"
    ]
  },
  {
    "cat": "일·업무",
    "term": "job",
    "meaning": "직업, 일자리",
    "usages": [
      "find a job"
    ]
  },
  {
    "cat": "일·업무",
    "term": "career",
    "meaning": "경력, 직업 생활",
    "usages": [
      "start a career"
    ]
  },
  {
    "cat": "일·업무",
    "term": "office",
    "meaning": "사무실",
    "usages": [
      "work at an office"
    ]
  },
  {
    "cat": "일·업무",
    "term": "company",
    "meaning": "회사",
    "usages": [
      "a small company"
    ]
  },
  {
    "cat": "일·업무",
    "term": "business",
    "meaning": "사업",
    "usages": [
      "run a business"
    ]
  },
  {
    "cat": "일·업무",
    "term": "employee",
    "meaning": "직원",
    "usages": [
      "a full-time employee"
    ]
  },
  {
    "cat": "일·업무",
    "term": "employer",
    "meaning": "고용주",
    "usages": [
      "a previous employer"
    ]
  },
  {
    "cat": "일·업무",
    "term": "manager",
    "meaning": "관리자",
    "usages": [
      "a project manager"
    ]
  },
  {
    "cat": "일·업무",
    "term": "boss",
    "meaning": "상사",
    "usages": [
      "talk to my boss"
    ]
  },
  {
    "cat": "일·업무",
    "term": "staff",
    "meaning": "직원들",
    "usages": [
      "friendly staff"
    ]
  },
  {
    "cat": "일·업무",
    "term": "meeting",
    "meaning": "회의, 만남",
    "usages": [
      "attend a meeting"
    ]
  },
  {
    "cat": "일·업무",
    "term": "project",
    "meaning": "프로젝트",
    "usages": [
      "work on a project"
    ]
  },
  {
    "cat": "일·업무",
    "term": "task",
    "meaning": "작업, 과업",
    "usages": [
      "complete a task"
    ]
  },
  {
    "cat": "일·업무",
    "term": "deadline",
    "meaning": "마감",
    "usages": [
      "meet a deadline"
    ]
  },
  {
    "cat": "일·업무",
    "term": "report",
    "meaning": "보고서; 보고하다",
    "usages": [
      "write a report"
    ]
  },
  {
    "cat": "일·업무",
    "term": "presentation",
    "meaning": "발표",
    "usages": [
      "give a presentation"
    ]
  },
  {
    "cat": "일·업무",
    "term": "email",
    "meaning": "이메일",
    "usages": [
      "send an email"
    ]
  },
  {
    "cat": "일·업무",
    "term": "message",
    "meaning": "메시지",
    "usages": [
      "leave a message"
    ]
  },
  {
    "cat": "일·업무",
    "term": "call",
    "meaning": "전화; 전화하다",
    "usages": [
      "make a call"
    ]
  },
  {
    "cat": "일·업무",
    "term": "interview",
    "meaning": "면접",
    "usages": [
      "prepare for an interview"
    ]
  },
  {
    "cat": "일·업무",
    "term": "application",
    "meaning": "지원, 신청",
    "usages": [
      "submit an application"
    ]
  },
  {
    "cat": "일·업무",
    "term": "resume",
    "meaning": "이력서",
    "usages": [
      "update my resume"
    ]
  },
  {
    "cat": "일·업무",
    "term": "salary",
    "meaning": "급여",
    "usages": [
      "a monthly salary"
    ]
  },
  {
    "cat": "일·업무",
    "term": "wage",
    "meaning": "임금",
    "usages": [
      "an hourly wage"
    ]
  },
  {
    "cat": "일·업무",
    "term": "income",
    "meaning": "소득",
    "usages": [
      "a steady income"
    ]
  },
  {
    "cat": "일·업무",
    "term": "promotion",
    "meaning": "승진, 판촉",
    "usages": [
      "get a promotion"
    ]
  },
  {
    "cat": "일·업무",
    "term": "position",
    "meaning": "직위, 위치",
    "usages": [
      "apply for a position"
    ]
  },
  {
    "cat": "일·업무",
    "term": "experience",
    "meaning": "경험",
    "usages": [
      "work experience"
    ]
  },
  {
    "cat": "일·업무",
    "term": "responsibility",
    "meaning": "책임",
    "usages": [
      "take responsibility"
    ]
  },
  {
    "cat": "일·업무",
    "term": "professional",
    "meaning": "전문적인; 전문가",
    "usages": [
      "professional advice"
    ]
  },
  {
    "cat": "일·업무",
    "term": "part-time",
    "meaning": "시간제의",
    "usages": [
      "a part-time job"
    ]
  },
  {
    "cat": "일·업무",
    "term": "full-time",
    "meaning": "상근의, 전일제의",
    "usages": [
      "a full-time job"
    ]
  },
  {
    "cat": "일·업무",
    "term": "remote",
    "meaning": "원격의, 외딴",
    "usages": [
      "remote work"
    ]
  },
  {
    "cat": "일·업무",
    "term": "shift",
    "meaning": "교대 근무; 변화",
    "usages": [
      "a night shift"
    ]
  },
  {
    "cat": "일·업무",
    "term": "teamwork",
    "meaning": "팀워크",
    "usages": [
      "good teamwork"
    ]
  },
  {
    "cat": "일·업무",
    "term": "feedback",
    "meaning": "의견, 피드백",
    "usages": [
      "receive feedback"
    ]
  },
  {
    "cat": "일·업무",
    "term": "progress",
    "meaning": "진전",
    "usages": [
      "make progress"
    ]
  },
  {
    "cat": "일·업무",
    "term": "achievement",
    "meaning": "성취",
    "usages": [
      "a personal achievement"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "technology",
    "meaning": "기술",
    "usages": [
      "modern technology"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "computer",
    "meaning": "컴퓨터",
    "usages": [
      "use a computer"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "laptop",
    "meaning": "노트북",
    "usages": [
      "a lightweight laptop"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "tablet",
    "meaning": "태블릿",
    "usages": [
      "a tablet computer"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "phone",
    "meaning": "전화기",
    "usages": [
      "charge my phone"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "smartphone",
    "meaning": "스마트폰",
    "usages": [
      "a new smartphone"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "screen",
    "meaning": "화면",
    "usages": [
      "a large screen"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "keyboard",
    "meaning": "키보드",
    "usages": [
      "a wireless keyboard"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "mouse",
    "meaning": "컴퓨터 마우스; 쥐",
    "usages": [
      "a computer mouse"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "printer",
    "meaning": "프린터",
    "usages": [
      "use a printer"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "camera",
    "meaning": "카메라",
    "usages": [
      "a digital camera"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "speaker",
    "meaning": "스피커; 발언자",
    "usages": [
      "a portable speaker"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "headphone",
    "meaning": "헤드폰",
    "usages": [
      "a pair of headphones"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "charger",
    "meaning": "충전기",
    "usages": [
      "a phone charger"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "battery",
    "meaning": "배터리",
    "usages": [
      "a low battery"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "cable",
    "meaning": "케이블",
    "usages": [
      "a charging cable"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "internet",
    "meaning": "인터넷",
    "usages": [
      "access the internet"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "website",
    "meaning": "웹사이트",
    "usages": [
      "visit a website"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "browser",
    "meaning": "브라우저",
    "usages": [
      "open a browser"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "app",
    "meaning": "앱",
    "usages": [
      "download an app"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "software",
    "meaning": "소프트웨어",
    "usages": [
      "install software"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "hardware",
    "meaning": "하드웨어",
    "usages": [
      "computer hardware"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "file",
    "meaning": "파일",
    "usages": [
      "save a file"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "folder",
    "meaning": "폴더",
    "usages": [
      "create a folder"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "password",
    "meaning": "비밀번호",
    "usages": [
      "reset a password"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "username",
    "meaning": "사용자 이름",
    "usages": [
      "choose a username"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "network",
    "meaning": "네트워크",
    "usages": [
      "a wireless network"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "connection",
    "meaning": "연결",
    "usages": [
      "a stable connection"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "signal",
    "meaning": "신호",
    "usages": [
      "a weak signal"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "online",
    "meaning": "온라인의, 온라인으로",
    "usages": [
      "shop online"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "offline",
    "meaning": "오프라인의, 접속하지 않은",
    "usages": [
      "use it offline"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "download",
    "meaning": "다운로드하다",
    "usages": [
      "download a file"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "upload",
    "meaning": "업로드하다",
    "usages": [
      "upload a photo"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "install",
    "meaning": "설치하다",
    "usages": [
      "install an app"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "update",
    "meaning": "업데이트하다; 최신 정보",
    "usages": [
      "update software"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "search",
    "meaning": "검색하다",
    "usages": [
      "search for information"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "click",
    "meaning": "클릭하다",
    "usages": [
      "click a link"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "link",
    "meaning": "링크, 연결",
    "usages": [
      "share a link"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "post",
    "meaning": "게시하다; 게시물",
    "usages": [
      "post a photo"
    ]
  },
  {
    "cat": "기술·미디어",
    "term": "notification",
    "meaning": "알림",
    "usages": [
      "turn off notifications"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "happy",
    "meaning": "행복한",
    "usages": [
      "feel happy"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "sad",
    "meaning": "슬픈",
    "usages": [
      "a sad story"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "angry",
    "meaning": "화난",
    "usages": [
      "get angry"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "upset",
    "meaning": "속상한, 화가 난",
    "usages": [
      "feel upset"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "worried",
    "meaning": "걱정하는",
    "usages": [
      "worried about an exam"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "anxious",
    "meaning": "불안한",
    "usages": [
      "feel anxious"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "nervous",
    "meaning": "긴장한",
    "usages": [
      "nervous before a test"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "bored",
    "meaning": "지루함을 느끼는",
    "usages": [
      "feel bored"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "interested",
    "meaning": "관심이 있는",
    "usages": [
      "interested in art"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "surprised",
    "meaning": "놀란",
    "usages": [
      "surprised by the news"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "shocked",
    "meaning": "충격을 받은",
    "usages": [
      "feel shocked"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "proud",
    "meaning": "자랑스러운",
    "usages": [
      "proud of my progress"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "lonely",
    "meaning": "외로운",
    "usages": [
      "feel lonely"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "homesick",
    "meaning": "향수병이 있는",
    "usages": [
      "feel homesick"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "hopeful",
    "meaning": "희망을 품은",
    "usages": [
      "hopeful about the future"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "confident",
    "meaning": "자신감 있는",
    "usages": [
      "a confident speaker"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "shy",
    "meaning": "수줍은",
    "usages": [
      "a shy child"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "friendly",
    "meaning": "친근한, 친절한",
    "usages": [
      "a friendly neighbor"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "kind",
    "meaning": "친절한",
    "usages": [
      "a kind person"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "patient",
    "meaning": "참을성 있는",
    "usages": [
      "a patient teacher"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "honest",
    "meaning": "정직한",
    "usages": [
      "an honest answer"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "polite",
    "meaning": "예의 바른",
    "usages": [
      "a polite request"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "rude",
    "meaning": "무례한",
    "usages": [
      "a rude comment"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "generous",
    "meaning": "너그러운",
    "usages": [
      "a generous friend"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "selfish",
    "meaning": "이기적인",
    "usages": [
      "selfish behavior"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "reliable",
    "meaning": "믿을 수 있는",
    "usages": [
      "a reliable friend"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "creative",
    "meaning": "창의적인",
    "usages": [
      "a creative idea"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "curious",
    "meaning": "호기심 많은",
    "usages": [
      "curious about other cultures"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "calm",
    "meaning": "차분한",
    "usages": [
      "stay calm"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "cheerful",
    "meaning": "쾌활한",
    "usages": [
      "a cheerful person"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "serious",
    "meaning": "진지한, 심각한",
    "usages": [
      "a serious discussion"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "sensitive",
    "meaning": "민감한",
    "usages": [
      "sensitive to noise"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "stubborn",
    "meaning": "고집 센",
    "usages": [
      "a stubborn person"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "outgoing",
    "meaning": "사교적인",
    "usages": [
      "an outgoing personality"
    ]
  },
  {
    "cat": "감정·성격",
    "term": "thoughtful",
    "meaning": "사려 깊은",
    "usages": [
      "a thoughtful gift"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "good",
    "meaning": "좋은",
    "usages": [
      "a good idea"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "bad",
    "meaning": "나쁜",
    "usages": [
      "a bad experience"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "great",
    "meaning": "훌륭한",
    "usages": [
      "a great time"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "excellent",
    "meaning": "매우 뛰어난",
    "usages": [
      "excellent service"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "wonderful",
    "meaning": "정말 좋은",
    "usages": [
      "a wonderful trip"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "amazing",
    "meaning": "놀라운, 아주 멋진",
    "usages": [
      "an amazing view"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "awful",
    "meaning": "끔찍한",
    "usages": [
      "an awful experience"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "terrible",
    "meaning": "몹시 나쁜",
    "usages": [
      "terrible weather"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "nice",
    "meaning": "좋은, 멋진",
    "usages": [
      "a nice place"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "pleasant",
    "meaning": "기분 좋은",
    "usages": [
      "a pleasant afternoon"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "comfortable",
    "meaning": "편안한",
    "usages": [
      "a comfortable seat"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "uncomfortable",
    "meaning": "불편한",
    "usages": [
      "an uncomfortable chair"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "inconvenient",
    "meaning": "불편한, 번거로운",
    "usages": [
      "an inconvenient time"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "useful",
    "meaning": "유용한",
    "usages": [
      "a useful tip"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "useless",
    "meaning": "쓸모없는",
    "usages": [
      "useless information"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "important",
    "meaning": "중요한",
    "usages": [
      "an important decision"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "necessary",
    "meaning": "필요한",
    "usages": [
      "necessary equipment"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "essential",
    "meaning": "필수적인",
    "usages": [
      "an essential skill"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "optional",
    "meaning": "선택적인",
    "usages": [
      "an optional activity"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "popular",
    "meaning": "인기 있는",
    "usages": [
      "a popular café"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "famous",
    "meaning": "유명한",
    "usages": [
      "a famous singer"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "ordinary",
    "meaning": "평범한",
    "usages": [
      "an ordinary day"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "unusual",
    "meaning": "특이한",
    "usages": [
      "an unusual experience"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "unique",
    "meaning": "독특한",
    "usages": [
      "a unique design"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "common",
    "meaning": "흔한",
    "usages": [
      "a common problem"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "rare",
    "meaning": "드문",
    "usages": [
      "a rare opportunity"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "interesting",
    "meaning": "흥미로운",
    "usages": [
      "an interesting story"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "boring",
    "meaning": "지루하게 하는",
    "usages": [
      "a boring movie"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "exciting",
    "meaning": "신나게 하는",
    "usages": [
      "an exciting game"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "relaxing",
    "meaning": "편안하게 해주는",
    "usages": [
      "a relaxing holiday"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "stressful",
    "meaning": "스트레스를 주는",
    "usages": [
      "a stressful job"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "impressive",
    "meaning": "인상적인",
    "usages": [
      "an impressive performance"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "beautiful",
    "meaning": "아름다운",
    "usages": [
      "a beautiful garden"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "ugly",
    "meaning": "못생긴, 보기 싫은",
    "usages": [
      "an ugly building"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "attractive",
    "meaning": "매력적인",
    "usages": [
      "an attractive design"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "perfect",
    "meaning": "완벽한",
    "usages": [
      "a perfect day"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "ideal",
    "meaning": "이상적인",
    "usages": [
      "an ideal location"
    ]
  },
  {
    "cat": "묘사·평가",
    "term": "practical",
    "meaning": "실용적인",
    "usages": [
      "practical advice"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "time",
    "meaning": "시간",
    "usages": [
      "save time"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "day",
    "meaning": "날, 하루",
    "usages": [
      "a busy day"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "week",
    "meaning": "주",
    "usages": [
      "next week"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "month",
    "meaning": "달, 월",
    "usages": [
      "once a month"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "year",
    "meaning": "해, 년",
    "usages": [
      "last year"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "hour",
    "meaning": "시간 단위",
    "usages": [
      "for an hour"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "minute",
    "meaning": "분",
    "usages": [
      "a few minutes"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "second",
    "meaning": "초; 두 번째의",
    "usages": [
      "wait a second"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "morning",
    "meaning": "아침",
    "usages": [
      "in the morning"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "afternoon",
    "meaning": "오후",
    "usages": [
      "in the afternoon"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "evening",
    "meaning": "저녁",
    "usages": [
      "in the evening"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "night",
    "meaning": "밤",
    "usages": [
      "at night"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "noon",
    "meaning": "정오",
    "usages": [
      "at noon"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "midnight",
    "meaning": "자정",
    "usages": [
      "after midnight"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "today",
    "meaning": "오늘",
    "usages": [
      "later today"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "yesterday",
    "meaning": "어제",
    "usages": [
      "yesterday morning"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "tomorrow",
    "meaning": "내일",
    "usages": [
      "tomorrow evening"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "weekend",
    "meaning": "주말",
    "usages": [
      "on weekends"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "weekday",
    "meaning": "평일",
    "usages": [
      "on weekdays"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "early",
    "meaning": "일찍; 이른",
    "usages": [
      "arrive early"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "late",
    "meaning": "늦게; 늦은",
    "usages": [
      "run late"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "soon",
    "meaning": "곧",
    "usages": [
      "see you soon"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "now",
    "meaning": "지금",
    "usages": [
      "right now"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "then",
    "meaning": "그때; 그러고 나서",
    "usages": [
      "back then"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "later",
    "meaning": "나중에",
    "usages": [
      "talk later"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "recently",
    "meaning": "최근에",
    "usages": [
      "move recently"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "lately",
    "meaning": "최근 들어",
    "usages": [
      "feel busy lately"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "currently",
    "meaning": "현재",
    "usages": [
      "currently available"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "already",
    "meaning": "이미",
    "usages": [
      "already finished"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "yet",
    "meaning": "아직; 벌써",
    "usages": [
      "not yet"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "still",
    "meaning": "여전히",
    "usages": [
      "still waiting"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "always",
    "meaning": "항상",
    "usages": [
      "always on time"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "often",
    "meaning": "자주",
    "usages": [
      "visit often"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "sometimes",
    "meaning": "때때로",
    "usages": [
      "sometimes eat out"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "occasionally",
    "meaning": "가끔",
    "usages": [
      "occasionally travel"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "seldom",
    "meaning": "좀처럼 ~하지 않는",
    "usages": [
      "seldom complain"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "never",
    "meaning": "전혀 ~하지 않는",
    "usages": [
      "never give up"
    ]
  },
  {
    "cat": "시간·빈도",
    "term": "frequently",
    "meaning": "빈번하게",
    "usages": [
      "frequently asked questions"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "place",
    "meaning": "장소",
    "usages": [
      "a quiet place"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "space",
    "meaning": "공간",
    "usages": [
      "enough space"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "side",
    "meaning": "옆, 측면",
    "usages": [
      "on the left side"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "center",
    "meaning": "중심",
    "usages": [
      "the city center"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "front",
    "meaning": "앞",
    "usages": [
      "in front of the building"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "middle",
    "meaning": "가운데",
    "usages": [
      "in the middle"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "end",
    "meaning": "끝",
    "usages": [
      "at the end"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "left",
    "meaning": "왼쪽",
    "usages": [
      "turn left"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "right",
    "meaning": "오른쪽; 맞는",
    "usages": [
      "turn right"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "north",
    "meaning": "북쪽",
    "usages": [
      "head north"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "south",
    "meaning": "남쪽",
    "usages": [
      "in the south"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "east",
    "meaning": "동쪽",
    "usages": [
      "the east coast"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "west",
    "meaning": "서쪽",
    "usages": [
      "the west side"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "inside",
    "meaning": "안에, 내부",
    "usages": [
      "stay inside"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "outside",
    "meaning": "밖에, 외부",
    "usages": [
      "go outside"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "upstairs",
    "meaning": "위층에",
    "usages": [
      "go upstairs"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "downstairs",
    "meaning": "아래층에",
    "usages": [
      "wait downstairs"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "near",
    "meaning": "가까이",
    "usages": [
      "near the station"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "far",
    "meaning": "멀리",
    "usages": [
      "far from home"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "opposite",
    "meaning": "맞은편의; 반대의",
    "usages": [
      "opposite the bank"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "between",
    "meaning": "사이에",
    "usages": [
      "between two buildings"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "among",
    "meaning": "여럿 사이에",
    "usages": [
      "among friends"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "behind",
    "meaning": "뒤에",
    "usages": [
      "behind the hotel"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "beside",
    "meaning": "옆에",
    "usages": [
      "beside the river"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "above",
    "meaning": "위에",
    "usages": [
      "above the clouds"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "below",
    "meaning": "아래에",
    "usages": [
      "below zero"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "around",
    "meaning": "주변에",
    "usages": [
      "around the corner"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "through",
    "meaning": "통과하여",
    "usages": [
      "through the tunnel"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "across",
    "meaning": "건너서",
    "usages": [
      "across the street"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "along",
    "meaning": "~을 따라서",
    "usages": [
      "along the beach"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "toward",
    "meaning": "~쪽으로",
    "usages": [
      "toward the entrance"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "amount",
    "meaning": "양",
    "usages": [
      "a small amount"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "number",
    "meaning": "수, 번호",
    "usages": [
      "a large number of people"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "quantity",
    "meaning": "수량",
    "usages": [
      "a limited quantity"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "plenty",
    "meaning": "충분한 양",
    "usages": [
      "plenty of time"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "enough",
    "meaning": "충분한",
    "usages": [
      "enough money"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "several",
    "meaning": "몇몇의",
    "usages": [
      "several people"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "extra",
    "meaning": "추가의",
    "usages": [
      "an extra towel"
    ]
  },
  {
    "cat": "위치·방향·수량",
    "term": "whole",
    "meaning": "전체의",
    "usages": [
      "the whole day"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "be",
    "meaning": "~이다, 있다",
    "usages": [
      "be at home"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "have",
    "meaning": "가지다",
    "usages": [
      "have a question"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "do",
    "meaning": "하다",
    "usages": [
      "do my homework"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "make",
    "meaning": "만들다",
    "usages": [
      "make dinner"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "get",
    "meaning": "얻다, 받다",
    "usages": [
      "get a message"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "give",
    "meaning": "주다",
    "usages": [
      "give advice"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "take",
    "meaning": "가져가다, 취하다",
    "usages": [
      "take a break"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "bring",
    "meaning": "가져오다",
    "usages": [
      "bring a jacket"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "come",
    "meaning": "오다",
    "usages": [
      "come home"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "go",
    "meaning": "가다",
    "usages": [
      "go to work"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "leave",
    "meaning": "떠나다, 남기다",
    "usages": [
      "leave early"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "arrive",
    "meaning": "도착하다",
    "usages": [
      "arrive on time"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "stay",
    "meaning": "머무르다",
    "usages": [
      "stay for a week"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "sit",
    "meaning": "앉다",
    "usages": [
      "sit down"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "stand",
    "meaning": "서다",
    "usages": [
      "stand in line"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "lie",
    "meaning": "눕다; 거짓말하다",
    "usages": [
      "lie on the sofa"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "open",
    "meaning": "열다",
    "usages": [
      "open the door"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "close",
    "meaning": "닫다",
    "usages": [
      "close a window"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "start",
    "meaning": "시작하다",
    "usages": [
      "start a conversation"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "begin",
    "meaning": "시작하다",
    "usages": [
      "begin a lesson"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "finish",
    "meaning": "끝내다",
    "usages": [
      "finish work"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "continue",
    "meaning": "계속하다",
    "usages": [
      "continue studying"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "keep",
    "meaning": "유지하다, 보관하다",
    "usages": [
      "keep a promise"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "hold",
    "meaning": "잡다, 들다",
    "usages": [
      "hold a bag"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "put",
    "meaning": "놓다",
    "usages": [
      "put it on the table"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "pick",
    "meaning": "고르다, 집다",
    "usages": [
      "pick a color"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "drop",
    "meaning": "떨어뜨리다",
    "usages": [
      "drop my phone"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "carry",
    "meaning": "나르다, 휴대하다",
    "usages": [
      "carry a backpack"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "pull",
    "meaning": "당기다",
    "usages": [
      "pull the door"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "push",
    "meaning": "밀다",
    "usages": [
      "push a button"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "throw",
    "meaning": "던지다",
    "usages": [
      "throw a ball"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "catch",
    "meaning": "잡다",
    "usages": [
      "catch the bus"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "hit",
    "meaning": "치다",
    "usages": [
      "hit a ball"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "kick",
    "meaning": "발로 차다",
    "usages": [
      "kick a ball"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "cut",
    "meaning": "자르다",
    "usages": [
      "cut the paper"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "break",
    "meaning": "부수다, 고장내다",
    "usages": [
      "break a glass"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "build",
    "meaning": "짓다",
    "usages": [
      "build a house"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "create",
    "meaning": "창조하다, 만들다",
    "usages": [
      "create a playlist"
    ]
  },
  {
    "cat": "기본 동사·행동",
    "term": "use",
    "meaning": "사용하다",
    "usages": [
      "use a computer"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "think",
    "meaning": "생각하다",
    "usages": [
      "think about the problem"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "know",
    "meaning": "알다",
    "usages": [
      "know the answer"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "remember",
    "meaning": "기억하다",
    "usages": [
      "remember a name"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "forget",
    "meaning": "잊다",
    "usages": [
      "forget an appointment"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "notice",
    "meaning": "공지; 알아차리다",
    "usages": [
      "notice a change",
      "a written notice"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "realize",
    "meaning": "깨닫다",
    "usages": [
      "realize my mistake"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "recognize",
    "meaning": "알아보다",
    "usages": [
      "recognize a friend"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "believe",
    "meaning": "믿다",
    "usages": [
      "believe in myself"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "feel",
    "meaning": "느끼다",
    "usages": [
      "feel comfortable"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "hope",
    "meaning": "바라다",
    "usages": [
      "hope to visit"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "wish",
    "meaning": "바라다",
    "usages": [
      "wish for good weather"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "want",
    "meaning": "원하다",
    "usages": [
      "want to learn"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "need",
    "meaning": "필요하다",
    "usages": [
      "need more time"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "like",
    "meaning": "좋아하다",
    "usages": [
      "like cooking"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "love",
    "meaning": "사랑하다, 매우 좋아하다",
    "usages": [
      "love music"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "hate",
    "meaning": "몹시 싫어하다",
    "usages": [
      "hate waiting"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "choose",
    "meaning": "고르다",
    "usages": [
      "choose a destination"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "decide",
    "meaning": "결정하다",
    "usages": [
      "decide to go"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "consider",
    "meaning": "고려하다",
    "usages": [
      "consider other options"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "expect",
    "meaning": "기대하다, 예상하다",
    "usages": [
      "expect a delay"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "imagine",
    "meaning": "상상하다",
    "usages": [
      "imagine living abroad"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "wonder",
    "meaning": "궁금해하다",
    "usages": [
      "wonder why"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "suppose",
    "meaning": "추정하다",
    "usages": [
      "suppose it’s true"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "mean",
    "meaning": "의미하다",
    "usages": [
      "mean a lot to me"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "seem",
    "meaning": "~처럼 보이다",
    "usages": [
      "seem friendly"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "appear",
    "meaning": "나타나다, ~처럼 보이다",
    "usages": [
      "appear tired"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "look",
    "meaning": "보다, ~처럼 보이다",
    "usages": [
      "look happy"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "sound",
    "meaning": "들리다, ~하게 느껴지다",
    "usages": [
      "sound interesting"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "smell",
    "meaning": "냄새가 나다, 맡다",
    "usages": [
      "smell fresh"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "hear",
    "meaning": "들리다, 듣다",
    "usages": [
      "hear a noise"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "see",
    "meaning": "보다",
    "usages": [
      "see a movie"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "find",
    "meaning": "찾다, 발견하다",
    "usages": [
      "find my keys"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "discover",
    "meaning": "발견하다",
    "usages": [
      "discover a new café"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "compare",
    "meaning": "비교하다",
    "usages": [
      "compare prices"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "judge",
    "meaning": "판단하다",
    "usages": [
      "judge the quality"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "accept",
    "meaning": "받아들이다",
    "usages": [
      "accept an invitation"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "refuse",
    "meaning": "거절하다",
    "usages": [
      "refuse an offer"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "avoid",
    "meaning": "피하다",
    "usages": [
      "avoid crowds"
    ]
  },
  {
    "cat": "생각·선택",
    "term": "allow",
    "meaning": "허락하다",
    "usages": [
      "allow pets"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "problem",
    "meaning": "문제",
    "usages": [
      "solve a problem"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "trouble",
    "meaning": "곤란, 문제",
    "usages": [
      "have trouble sleeping"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "mistake",
    "meaning": "실수",
    "usages": [
      "make a mistake"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "error",
    "meaning": "오류",
    "usages": [
      "an error message"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "accident",
    "meaning": "사고",
    "usages": [
      "a traffic accident"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "emergency",
    "meaning": "비상사태",
    "usages": [
      "in an emergency"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "damage",
    "meaning": "손상; 손상시키다",
    "usages": [
      "water damage"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "lost",
    "meaning": "잃어버린, 길을 잃은",
    "usages": [
      "a lost bag"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "missing",
    "meaning": "없어진, 빠진",
    "usages": [
      "a missing item"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "wrong",
    "meaning": "잘못된",
    "usages": [
      "the wrong address"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "repair",
    "meaning": "수리하다",
    "usages": [
      "repair a bike"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "solve",
    "meaning": "해결하다",
    "usages": [
      "solve an issue"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "solution",
    "meaning": "해결책",
    "usages": [
      "find a solution"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "alternative",
    "meaning": "대안",
    "usages": [
      "suggest an alternative"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "option",
    "meaning": "선택지",
    "usages": [
      "consider an option"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "improve",
    "meaning": "개선하다",
    "usages": [
      "improve my English"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "increase",
    "meaning": "증가하다, 늘리다",
    "usages": [
      "increase the price"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "decrease",
    "meaning": "감소하다, 줄이다",
    "usages": [
      "decrease the cost"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "reduce",
    "meaning": "줄이다",
    "usages": [
      "reduce stress"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "save",
    "meaning": "아끼다, 구하다",
    "usages": [
      "save money"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "waste",
    "meaning": "낭비하다",
    "usages": [
      "waste time"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "lose",
    "meaning": "잃다",
    "usages": [
      "lose my wallet"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "miss",
    "meaning": "놓치다, 그리워하다",
    "usages": [
      "miss the train"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "happen",
    "meaning": "일어나다",
    "usages": [
      "happen unexpectedly"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "occur",
    "meaning": "발생하다",
    "usages": [
      "an error can occur"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "cause",
    "meaning": "원인; 야기하다",
    "usages": [
      "cause a delay"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "result",
    "meaning": "결과",
    "usages": [
      "a good result"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "effect",
    "meaning": "영향, 효과",
    "usages": [
      "a positive effect"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "risk",
    "meaning": "위험",
    "usages": [
      "take a risk"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "safe",
    "meaning": "안전한",
    "usages": [
      "a safe area"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "dangerous",
    "meaning": "위험한",
    "usages": [
      "a dangerous road"
    ]
  },
  {
    "cat": "문제·변화",
    "term": "prevent",
    "meaning": "예방하다",
    "usages": [
      "prevent accidents"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "big",
    "meaning": "큰",
    "usages": [
      "a big room"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "small",
    "meaning": "작은",
    "usages": [
      "a small bag"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "large",
    "meaning": "큰, 넓은",
    "usages": [
      "a large park"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "tiny",
    "meaning": "아주 작은",
    "usages": [
      "a tiny apartment"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "huge",
    "meaning": "거대한",
    "usages": [
      "a huge building"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "tall",
    "meaning": "키가 큰, 높은",
    "usages": [
      "a tall building"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "short",
    "meaning": "짧은, 키가 작은",
    "usages": [
      "a short walk"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "long",
    "meaning": "긴",
    "usages": [
      "a long trip"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "wide",
    "meaning": "넓은",
    "usages": [
      "a wide road"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "narrow",
    "meaning": "좁은",
    "usages": [
      "a narrow street"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "thick",
    "meaning": "두꺼운",
    "usages": [
      "a thick blanket"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "thin",
    "meaning": "얇은",
    "usages": [
      "a thin jacket"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "heavy",
    "meaning": "무거운",
    "usages": [
      "a heavy suitcase"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "lightweight",
    "meaning": "가벼운",
    "usages": [
      "a lightweight laptop"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "full",
    "meaning": "가득 찬",
    "usages": [
      "a full bus"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "empty",
    "meaning": "빈",
    "usages": [
      "an empty room"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "dirty",
    "meaning": "더러운",
    "usages": [
      "dirty dishes"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "wet",
    "meaning": "젖은",
    "usages": [
      "wet clothes"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "hot",
    "meaning": "뜨거운, 더운",
    "usages": [
      "hot soup"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "warm",
    "meaning": "따뜻한",
    "usages": [
      "warm weather"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "cool",
    "meaning": "시원한",
    "usages": [
      "a cool evening"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "bright",
    "meaning": "밝은",
    "usages": [
      "a bright room"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "dark",
    "meaning": "어두운",
    "usages": [
      "a dark hallway"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "quiet",
    "meaning": "조용한",
    "usages": [
      "a quiet neighborhood"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "noisy",
    "meaning": "시끄러운",
    "usages": [
      "a noisy street"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "loud",
    "meaning": "소리가 큰",
    "usages": [
      "loud music"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "busy",
    "meaning": "바쁜",
    "usages": [
      "a busy day"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "free",
    "meaning": "무료의; 자유로운",
    "usages": [
      "free admission"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "new",
    "meaning": "새로운",
    "usages": [
      "a new phone"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "old",
    "meaning": "오래된, 나이 든",
    "usages": [
      "an old house"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "modern",
    "meaning": "현대적인",
    "usages": [
      "a modern building"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "traditional",
    "meaning": "전통적인",
    "usages": [
      "a traditional market"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "similar",
    "meaning": "비슷한",
    "usages": [
      "similar interests"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "different",
    "meaning": "다른",
    "usages": [
      "a different experience"
    ]
  },
  {
    "cat": "상태·크기·비교",
    "term": "same",
    "meaning": "같은",
    "usages": [
      "the same address"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "reason",
    "meaning": "이유",
    "usages": [
      "the main reason"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "opinion",
    "meaning": "의견",
    "usages": [
      "in my opinion"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "idea",
    "meaning": "생각, 아이디어",
    "usages": [
      "a good idea"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "point",
    "meaning": "요점",
    "usages": [
      "the main point"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "fact",
    "meaning": "사실",
    "usages": [
      "an interesting fact"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "truth",
    "meaning": "진실",
    "usages": [
      "tell the truth"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "purpose",
    "meaning": "목적",
    "usages": [
      "the purpose of the trip"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "goal",
    "meaning": "목표",
    "usages": [
      "reach a goal"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "benefit",
    "meaning": "이점",
    "usages": [
      "a health benefit"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "advantage",
    "meaning": "장점",
    "usages": [
      "a major advantage"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "disadvantage",
    "meaning": "단점",
    "usages": [
      "a possible disadvantage"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "choice",
    "meaning": "선택",
    "usages": [
      "make a choice"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "difference",
    "meaning": "차이",
    "usages": [
      "a big difference"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "similarity",
    "meaning": "유사점",
    "usages": [
      "notice a similarity"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "comparison",
    "meaning": "비교",
    "usages": [
      "make a comparison"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "because",
    "meaning": "~이기 때문에",
    "usages": [
      "because it’s convenient"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "although",
    "meaning": "비록 ~이지만",
    "usages": [
      "although it was expensive"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "though",
    "meaning": "~이지만",
    "usages": [
      "though I was tired"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "however",
    "meaning": "그러나",
    "usages": [
      "however, the room was small"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "therefore",
    "meaning": "그러므로",
    "usages": [
      "therefore, we stayed home"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "otherwise",
    "meaning": "그렇지 않으면",
    "usages": [
      "otherwise, we’ll be late"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "besides",
    "meaning": "게다가",
    "usages": [
      "besides, it’s cheaper"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "also",
    "meaning": "또한",
    "usages": [
      "also enjoy hiking"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "either",
    "meaning": "둘 중 하나; 부정문의 ~도",
    "usages": [
      "I don’t drive either"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "neither",
    "meaning": "둘 다 아닌",
    "usages": [
      "neither option"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "both",
    "meaning": "둘 다",
    "usages": [
      "both restaurants"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "whether",
    "meaning": "~인지",
    "usages": [
      "whether it’s available"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "unless",
    "meaning": "~하지 않는 한",
    "usages": [
      "unless it rains"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "while",
    "meaning": "~하는 동안",
    "usages": [
      "while I was waiting"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "since",
    "meaning": "~부터; ~이므로",
    "usages": [
      "since last year"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "until",
    "meaning": "~까지 계속",
    "usages": [
      "until midnight"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "before",
    "meaning": "~전에",
    "usages": [
      "before dinner"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "after",
    "meaning": "~후에",
    "usages": [
      "after work"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "despite",
    "meaning": "~에도 불구하고",
    "usages": [
      "despite the rain"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "basically",
    "meaning": "기본적으로",
    "usages": [
      "basically the same"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "perhaps",
    "meaning": "아마",
    "usages": [
      "perhaps next time"
    ]
  },
  {
    "cat": "이유·의견·연결",
    "term": "probably",
    "meaning": "아마도",
    "usages": [
      "probably tomorrow"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "plan",
    "meaning": "계획; 계획하다",
    "usages": [
      "make a plan"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "planning",
    "meaning": "계획 수립",
    "usages": [
      "careful planning"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "arrangement",
    "meaning": "준비, 합의",
    "usages": [
      "travel arrangements"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "organizer",
    "meaning": "주최자",
    "usages": [
      "the event organizer"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "event",
    "meaning": "행사, 사건",
    "usages": [
      "a local event"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "occasion",
    "meaning": "때, 특별한 행사",
    "usages": [
      "a special occasion"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "opportunity",
    "meaning": "기회",
    "usages": [
      "a great opportunity"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "possibility",
    "meaning": "가능성",
    "usages": [
      "a real possibility"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "request",
    "meaning": "요청",
    "usages": [
      "make a request"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "requirement",
    "meaning": "요구 사항",
    "usages": [
      "meet a requirement"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "service",
    "meaning": "서비스",
    "usages": [
      "good customer service"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "assistance",
    "meaning": "도움",
    "usages": [
      "ask for assistance"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "help",
    "meaning": "돕다; 도움",
    "usages": [
      "ask for help"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "information",
    "meaning": "정보",
    "usages": [
      "useful information"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "detail",
    "meaning": "세부 사항",
    "usages": [
      "check the details"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "instruction",
    "meaning": "지시, 사용법",
    "usages": [
      "follow the instructions"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "direction",
    "meaning": "방향; 길 안내",
    "usages": [
      "ask for directions"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "confirmation",
    "meaning": "확인, 확정",
    "usages": [
      "a booking confirmation"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "permission",
    "meaning": "허락",
    "usages": [
      "ask for permission"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "access",
    "meaning": "접근, 이용",
    "usages": [
      "internet access"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "availability",
    "meaning": "이용 가능 여부",
    "usages": [
      "check availability"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "policy",
    "meaning": "규정, 정책",
    "usages": [
      "a refund policy"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "rule",
    "meaning": "규칙",
    "usages": [
      "follow the rules"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "condition",
    "meaning": "조건; 상태",
    "usages": [
      "in good condition"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "limit",
    "meaning": "한도, 제한",
    "usages": [
      "a time limit"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "restriction",
    "meaning": "제한",
    "usages": [
      "travel restrictions"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "warning",
    "meaning": "경고",
    "usages": [
      "a weather warning"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "complaint",
    "meaning": "불만, 항의",
    "usages": [
      "make a complaint"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "inquiry",
    "meaning": "문의",
    "usages": [
      "a booking inquiry"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "equipment",
    "meaning": "장비",
    "usages": [
      "sports equipment"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "tool",
    "meaning": "도구",
    "usages": [
      "a useful tool"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "supply",
    "meaning": "공급; 용품",
    "usages": [
      "office supplies"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "material",
    "meaning": "재료",
    "usages": [
      "building materials"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "resource",
    "meaning": "자원",
    "usages": [
      "learning resources"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "provide",
    "meaning": "제공하다",
    "usages": [
      "provide information"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "offer",
    "meaning": "제안하다, 제공하다",
    "usages": [
      "offer help"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "require",
    "meaning": "요구하다",
    "usages": [
      "require a reservation"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "include",
    "meaning": "포함하다",
    "usages": [
      "include breakfast"
    ]
  },
  {
    "cat": "계획·서비스",
    "term": "exclude",
    "meaning": "제외하다",
    "usages": [
      "exclude delivery costs"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "turn on",
    "meaning": "켜다",
    "usages": [
      "turn on the light"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "turn off",
    "meaning": "끄다",
    "usages": [
      "turn off the TV"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "turn down",
    "meaning": "소리를 줄이다; 거절하다",
    "usages": [
      "turn down the volume"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "turn up",
    "meaning": "소리를 높이다; 나타나다",
    "usages": [
      "turn up the volume"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "put on",
    "meaning": "입다, 착용하다",
    "usages": [
      "put on a jacket"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "take off",
    "meaning": "벗다; 이륙하다",
    "usages": [
      "take off my shoes"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "pick up",
    "meaning": "데리러 가다; 집어 들다",
    "usages": [
      "pick up a friend"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "drop off",
    "meaning": "내려주다, 맡기다",
    "usages": [
      "drop off a package"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "put off",
    "meaning": "미루다",
    "usages": [
      "put off a meeting"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "set up",
    "meaning": "설치하다, 준비하다",
    "usages": [
      "set up a computer"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "look for",
    "meaning": "찾다",
    "usages": [
      "look for my keys"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "look after",
    "meaning": "돌보다",
    "usages": [
      "look after a pet"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "look up",
    "meaning": "찾아보다",
    "usages": [
      "look up a word"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "look forward to",
    "meaning": "기대하다",
    "usages": [
      "look forward to the trip"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "find out",
    "meaning": "알아내다",
    "usages": [
      "find out the price"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "hang out",
    "meaning": "함께 시간을 보내다",
    "usages": [
      "hang out with friends"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "get along with",
    "meaning": "~와 잘 지내다",
    "usages": [
      "get along with coworkers"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "give up",
    "meaning": "포기하다",
    "usages": [
      "give up smoking"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "calm down",
    "meaning": "진정하다",
    "usages": [
      "calm down after an argument"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "show up",
    "meaning": "나타나다",
    "usages": [
      "show up on time"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "grow up",
    "meaning": "자라다",
    "usages": [
      "grow up in a small town"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "wake up",
    "meaning": "잠에서 깨다",
    "usages": [
      "wake up early"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "get up",
    "meaning": "일어나다",
    "usages": [
      "get up at seven"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "come back",
    "meaning": "돌아오다",
    "usages": [
      "come back home"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "go back",
    "meaning": "다시 돌아가다",
    "usages": [
      "go back to work"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "try on",
    "meaning": "입어보다",
    "usages": [
      "try on a coat"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "fill out",
    "meaning": "작성하다",
    "usages": [
      "fill out a form"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "check in",
    "meaning": "체크인하다",
    "usages": [
      "check in at the hotel"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "check out",
    "meaning": "체크아웃하다; 살펴보다",
    "usages": [
      "check out of the hotel"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "get over",
    "meaning": "회복하다, 극복하다",
    "usages": [
      "get over a cold"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "break down",
    "meaning": "고장 나다",
    "usages": [
      "the car might break down"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "go off",
    "meaning": "알람이 울리다",
    "usages": [
      "the alarm didn’t go off"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "carry on",
    "meaning": "계속하다",
    "usages": [
      "carry on with my work"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "bring up",
    "meaning": "화제를 꺼내다",
    "usages": [
      "bring up a topic"
    ]
  },
  {
    "cat": "자주 쓰는 구동사·표현",
    "term": "end up",
    "meaning": "결국 ~하게 되다",
    "usages": [
      "end up taking a taxi"
    ]
  }
];
