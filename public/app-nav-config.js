/**
 * {
 *    name: String,
 *    appImgs: String | [String]
 *    describe: String
 *    functionIntroduction: String
 * }
 */
var appNav = [
  {
    "name": "登录、注册",
    "children": [
      {
        "name": "登录",
        "appImgs": "app-back-icon--hover",
        "describe": "这是登录页面",
        "functionIntroduction": "记住密码..."
      },
      {
        "name": "注册",
        "children": [
          {
            "name": "注册1",
            "appImgs": "注册1-img",
            "describe": "注册1",
            "functionIntroduction": "记住密码..."
          },
          {
            "name": "注册2",
            "appImgs": "注册2-img",
            "describe": "注册2",
            "functionIntroduction": "注册成功后..."
          }
        ]
      }
    ]
  },
  {
    "name": "app-back-icon",
    "appImgs": ["app-back-icon.png", "app-back-icon--hover.png"],
    "describe": "这是登录页面",
    "functionIntroduction": "任务功能1..."
  },
  {
    "name": "任务功能2",
    "appImgs": "app-back-icon.png",
    "describe": "这是登录页面",
    "functionIntroduction": "任务功能2..."
  }
]
window.appNav = appNav