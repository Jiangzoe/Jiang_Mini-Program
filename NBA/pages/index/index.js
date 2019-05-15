//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    date: [{
        id: 'd22',
        time: '05月15号'
      },
      {
        id: 'd23',
        time: '05月13号'
      },
      {
        id: 'd24',
        time: '05月24号'
      },
      {
        id: 'd25',
        time: '06月07号'
      }
    ],
    result: [{
        id: 'd22',
        leftteam: "https://mat1.gtimg.com/sports/nba/logo/new/22.png",
        leftgrade: 119,
        leftname: '开拓者',
        rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
        rightgrade: 120,
        rightname: '勇士',
      },
      {
        id: 'd23',
        leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/20.png",
        leftgrade: 90,
        leftname: '76人',
        rightteam: "https://img1.gtimg.com/sports/pics/hv1/133/21/2268/147482188.png",
        rightgrade: 92,
        rightname: '猛龙',
      },
      {
        id: 'd24',
        leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
        leftgrade: 118,
        leftname: '勇士',
        rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/10.png",
        rightgrade: 113,
        rightname: '火箭',
      },
      {
        id: 'd25',
        leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
        leftgrade: 95,
        leftname: '勇士',
        rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/15.png",
        rightgrade: 89,
        rightname: '雄鹿',
      }
    ],
    current: 0,
  },
  turnLeft() {
    let {
      current
    } = this.data;
    if (current <= 0) return;
    current--;
    this.setData({
      current
    })
    this.handleAgendaDate()
  },
  turnRight() {
    let {
      current,
      date,

    } = this.data;
    if (current >= date.length - 1) return;
    current++;
    this.setData({
      current,
    })
    this.handleAgendaDate()
  },
  handleAgendaDate(){
    let {current,date,result} = this.data;
    let {id} = date[current];
    // 数组 api
    const agenda = result.find(item => id === item.id);
    if(agenda){
      this.setData({
        agenda
      })
    }
  },
  onLoad(){
    this.handleAgendaDate()
  }
})
