// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    service:[
      { id: 0, title: "挪车通知服务的流程是什么？", cont:"将自主打印的二维码或VIP专属挪车二维码固定在汽车挡风玻璃上确保车外可以扫描二维码。有人需要通知你挪车时，只需要用微信扫一下二维码即可一键通知，作为车主的你会收到电话或短信提醒挪车"},
      { id: 2, title: "挪车通知服务的流程是什么？", cont: "将自主打印的二维码或VIP专属挪车二维码固定在汽车挡风玻璃上确保车外可以扫描二维码。有人需要通知你挪车时，只需要用微信扫一下二维码即可一键通知，作为车主的你会收到电话或短信提醒挪车" },
      { id: 3, title: "挪车通知服务的流程是什么？", cont: "将自主打印的二维码或VIP专属挪车二维码固定在汽车挡风玻璃上确保车外可以扫描二维码。有人需要通知你挪车时，只需要用微信扫一下二维码即可一键通知，作为车主的你会收到电话或短信提醒挪车" },
    ],
    clickId:-1,
  },

  clickitem:function(e){
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


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})