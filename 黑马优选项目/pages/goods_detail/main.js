// pages/goods_detail/main.js
Page({

  // 获取商品详情数据
  getGoodsParticulars(options) {
    var _this = this
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/goods/detail?goods_id=' + options.goods_id,
      method: "GET",
      success: function (res) {
        console.log(res.data);
        if (res.data.meta.status == 200) {
          _this.setData({
            goodsParticularsData: res.data.message
          })
        }
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    goodsParticularsData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGoodsParticulars(options)
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