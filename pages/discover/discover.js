// pages/discover/discover.js
import NumberAnimate from "../../utils/NumberAnimate";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number_list:[
      {id:0,user:"T"},
      {id:0,user:"T"},
      {id:0,user:"T"},
    ],
    addcar_page:false
  },
  dis_click:function(){
    this.setData({
      addcar_page: true
    })
  },
exit:function(){
  this.setData({
    addcar_page: false
  })
},
  animate:function(){
    this.setData({
      num1: ''
    });

    let num1 = 1686;
    let n1 = new NumberAnimate({
      from: num1,
      speed: 1000,
      refreshTime: 100,
      decimals: 0,
      onUpdate: () => {
        this.setData({
          num1: n1.tempValue
        });
      },
    });
  },

  golocaton:function(e){
    var url = e.currentTarget.dataset.url
    console.log(1);

   wx.navigateTo({
     url: url,
     success: function(res) {},
     fail: function(res) {},
     complete: function(res) {},
   })
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
    this.animate();
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