// components/Tabs/Tabs.js
Component({

  lifetimes: {
    attached: function() {
      this.getLeftTabData();
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    leftTabData:[],
    isActive:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取侧边导航栏数据
    getLeftTabData() {
      var _this = this
      wx.request({
        url: 'https://www.uinav.com/api/public/v1/categories',
        method: "GET",
        success: function (res) {
          console.log(res);
          if (res.data.meta.status == 200) {
            _this.setData({
              leftTabData: res.data.message
            })
          }
        }
      })
    },

    // 点击tab切换选中状态
    setItemTap(e) {
      var {index} = e.target.dataset
      this.setData({isActive:index})
    }
  }
})
