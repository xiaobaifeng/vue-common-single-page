/**
 * {
 *    name: String,
 *    appImg: String
 *    describe: String
 *    functionIntroduction: String,
 *    steps: [{
 *      appImg: String
 *      describe: String
 *      functionIntroduction: String,
 *    }]
 * }
 */
var appNav = [
  {
    "name": "登录、注册",
    "children": [
      {
        "name": "登录-no-steps",
        "appImg": "app-back-icon--hover.png",
        "describe": "这是登录页面",
        "functionIntroduction": "记住密码..."
      },
      {
        "name": "登录-has-steps",
        "steps": [
          {
            "appImg": "erweima-horn.png",
            "describe": "describe: steps1",
            "functionIntroduction": "functionIntroduction: steps1"
          },
          {
            "appImg": "guide__horn.png",
            "describe": "describe: steps2",
            "functionIntroduction": "functionIntroduction: steps2"
          }
        ]
      },
      {
        "name": "注册",
        "children": [
          {
            "name": "注册-no-steps",
            "appImg": "app-back-icon.png",
            "describe": "注册1",
            "functionIntroduction": "记住密码..."
          },
          {
            "name": "注册-has-steps",
            "steps": [
              {
                "appImg": "erweima-horn.png",
                "describe": "describe: steps1",
                "functionIntroduction": "functionIntroduction: steps1"
              },
              {
                "appImg": "guide__horn.png",
                "describe": "describe: steps2",
                "functionIntroduction": "functionIntroduction: steps2"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "app-back",
    "steps": [
      {
        "appImg": "app-back-icon.png",
        "describe": "describe: steps1",
        "functionIntroduction": "functionIntroduction: steps1"
      },
      {
        "appImg": "app-back-icon--hover.png",
        "describe": "describe: steps2",
        "functionIntroduction": "functionIntroduction: steps2"
      }
    ]
  },
  {
    "name": "任务功能2",
    "appImg": "guide__horn.png",
    "describe": "这是登录页面",
    "functionIntroduction": "任务功能2..."
  }
]
window.appNav = appNav