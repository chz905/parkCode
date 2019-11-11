Page({

  /**
   * 页面的初始数据
   */
  data: {
    memberList: [
      {
      iamges: "/assets/logo_aiqiyi2x.png",
      cont: "爱奇艺影视会员",
      discount: "7.5折",
      hiddena: true,
      id: "0",
      invalidActivty: [{
        price: "2.98元11111",
        oldPrice: "3元",
        validType: "周卡",
        validTime: '7天有效'
      },
      ]
    },
    {
      iamges: "/assets/logo_tengxun2x.png",
      cont: "腾讯视频会员",
      discount: "7折",
      hiddena: true,
      id: "1",
      invalidActivty: [{
        price: "2.98元22222",
        oldPrice: "3元",
        validType: "周卡",
        validTime: '7天有效'
      },
      {
        price: "18.98元22222",
        oldPrice: "25元",
        validType: "月卡",
        validTime: '30天有效'
      },
      ]
    },
    {
      iamges: "/assets/logo_youku2x.png",
      cont: "优酷视频黄金会员",
      discount: "8折",
      hiddena: true,
      id: "2",
      invalidActivty: [{
        price: "2.98元33333",
        oldPrice: "3元",
        validType: "周卡",
        validTime: '7天有效'
      },
      {
        price: "18.98元33333",
        oldPrice: "25元",
        validType: "月卡",
        validTime: '30天有效'
      },
      ]
    },
    {
      iamges: "/assets/logo_sohu2x.png",
      cont: "搜狐视频黄金会员",
      discount: "8折",
      hiddena: true,
      id: "3",
      invalidActivty: [{
        price: "2.98元44444",
        oldPrice: "3元",
        validType: "周卡",
        validTime: '7天有效'
      },
      {
        price: "18.98元44444",
        oldPrice: "25元",
        validType: "月卡",
        validTime: '30天有效'
      },
      ]
    },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickitem(e) {
    const idx = e.currentTarget.dataset.index
    if (idx == this.data.clickId) {
      this.setData({
        clickId: -1
      })
    } else {
      this.setData({
        clickId: idx
      })
    }
  },

  clickSubItem(e) {
    console.log(e)
  }
})