// camera.js
Page({
  onReady() {

  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
        wx.previewImage({
          urls: [this.data.src],
        })
        // console.log('开始保存')
        wx.setStorage({
          key: 'key1',
          data: this.data.src,
          success: function (res) {
            // console.log(res)
          }
        })
        wx.getStorage({
          key: 'key1',
          success: function (res) {
            console.log(res.data)
          }
        })
      
      }
    })
  },
  // error(e) {
  //   console.log(e.detail)
  // },





  })