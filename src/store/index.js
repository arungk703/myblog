import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: [
      {
        id: 1,
        name: "Goa Blog",
        topic: "Goa Trip",
        date: "10/02/2022",
        image:
          "http://media.vogue.in/wp-content/uploads/2017/03/Vogue-guide-to-Goa.jpg",
        story:
          "The Goa blog is where we share our love for this beautiful region with articles on things to do, the latest news about The Goa Experience, our top 10’s and much, much more.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at consectetur lorem. In fermentum posuere urna nec tincidunt. Ornare aenean euismod elementum nisi quis eleifend. Nunc sed blandit libero volutpat sed cras ornare arcu. Arcu bibendum at varius vel. Justo donec enim diam vulputate ut pharetra sit. Tellus id interdum velit laoreet. Enim ut tellus elementum sagittis vitae et. Malesuada pellentesque elit eget gravida. Libero id faucibus nisl tincidunt eget nullam. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Tellus rutrum tellus pellentesque eu. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Diam sollicitudin tempor id eu nisl nunc mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tincidunt vitae semper quis lectus. Donec massa sapien faucibus et molestie. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Fusce id velit ut tortor pretium. Aliquet bibendum enim facilisis gravida neque convallis. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nulla porttitor massa id neque aliquam vestibulum. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Maecenas pharetra convallis posuere morbi. Pellentesque nec nam aliquam sem et tortor consequat id porta. Erat nam at lectus urna duis convallis. Sociis natoque penatibus et magnis dis. Ultricies leo integer malesuada nunc vel risus. Ullamcorper eget nulla facilisi etiam dignissim diam quis."
      },
      {
        id: 2,
        name: "Food Blog",
        topic: "Eating Food",
        date: "25/01/2022",
        image:
          "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
        story:
          "Or Hami Sharafi, one of the most dedicated Persian food ambassadors, who shares his first-hand knowledge of his family-operated restaurant and courses in cooking and hospitality in his blog “from the inside”. ",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at consectetur lorem. In fermentum posuere urna nec tincidunt. Ornare aenean euismod elementum nisi quis eleifend. Nunc sed blandit libero volutpat sed cras ornare arcu. Arcu bibendum at varius vel. Justo donec enim diam vulputate ut pharetra sit. Tellus id interdum velit laoreet. Enim ut tellus elementum sagittis vitae et. Malesuada pellentesque elit eget gravida. Libero id faucibus nisl tincidunt eget nullam. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Tellus rutrum tellus pellentesque eu. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Diam sollicitudin tempor id eu nisl nunc mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tincidunt vitae semper quis lectus. Donec massa sapien faucibus et molestie. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Fusce id velit ut tortor pretium. Aliquet bibendum enim facilisis gravida neque convallis. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nulla porttitor massa id neque aliquam vestibulum. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Maecenas pharetra convallis posuere morbi. Pellentesque nec nam aliquam sem et tortor consequat id porta. Erat nam at lectus urna duis convallis. Sociis natoque penatibus et magnis dis. Ultricies leo integer malesuada nunc vel risus. Ullamcorper eget nulla facilisi etiam dignissim diam quis."

      },
      {
        id: 3,
        name: "Summer Blog",
        topic: "Summer vacation",
        date: "05/12/2021",
        image:
          "https://www.lifewire.com/thmb/khpiw5lZDkk7ZxYXVqpfTLkRPyc=/6000x4000/filters:no_upscale():max_bytes(150000):strip_icc()/summerbeach-5b4650c946e0fb005bfb3207.jpg",
        story:
          "Summer has to be one of our favourite times of year. The sun’s out for a start, everyone’s in shorts and dresses, everyone’s happy. Yep, summer really is the time of year for us.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at consectetur lorem. In fermentum posuere urna nec tincidunt. Ornare aenean euismod elementum nisi quis eleifend. Nunc sed blandit libero volutpat sed cras ornare arcu. Arcu bibendum at varius vel. Justo donec enim diam vulputate ut pharetra sit. Tellus id interdum velit laoreet. Enim ut tellus elementum sagittis vitae et. Malesuada pellentesque elit eget gravida. Libero id faucibus nisl tincidunt eget nullam. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Tellus rutrum tellus pellentesque eu. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Diam sollicitudin tempor id eu nisl nunc mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tincidunt vitae semper quis lectus. Donec massa sapien faucibus et molestie. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Fusce id velit ut tortor pretium. Aliquet bibendum enim facilisis gravida neque convallis. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nulla porttitor massa id neque aliquam vestibulum. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Maecenas pharetra convallis posuere morbi. Pellentesque nec nam aliquam sem et tortor consequat id porta. Erat nam at lectus urna duis convallis. Sociis natoque penatibus et magnis dis. Ultricies leo integer malesuada nunc vel risus. Ullamcorper eget nulla facilisi etiam dignissim diam quis."

      },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
