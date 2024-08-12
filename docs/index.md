---
layout: home

hero:
  name: MCJPG集体宣传组织
  tagline: 一个致力于Minecraft服务器宣传和技术交流社区的新兴组织</br>无论你是玩家还是服主，这里都是优秀的交流/宣发社区
  image:
    src: /logo.png
    alt: MCJPG组织
  actions:
    - theme: brand
      text: 加入社区群组
      link: https://qm.qq.com/q/C9K1fV3pSM
    # - theme: alt
      # text: View on GitHub
      # link: https://github.com/vuejs/vitepress

features:
  - icon:
      src: /server_icons/MC生电服.jpg
    title: MC生电服
    details: 多版本支持 原生1.20.4 游戏内语音聊天 随意喷涂 趣味的生电 便捷的菜单操作 不限制传送 独家优化的整合包 无需正版
    link: https://qm.qq.com/q/QhfzwbV82Y
    linkText: 加入我们!
  - icon:
      src: /server_icons/MCODW.png
    title: MCODW 服务器
    details: 版本：JAVA互通 | 1.20.1</br>leaves生电+粘液
    link: https://mcyouxi.asia/
    linkText: 实现共产，奔赴未来！
  - icon:
      src: /server_icons/HappyDog.jpg
    title: HappyDog
    details: 版本：JAVA互通 | 1.8.X-1.20.x跨版本</br>HappyDog新服开荒！1.8.X-1.20.x多版本支持！且支持基岩版玩家进入服务器！无正版无白名单，快来一键进服玩耍！快来和小伙伴占山为王吧！
    link: http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=XMDbSMq5gMVGTESYHiBOQB80SoYJA7U4&authKey=qRhuSkFIxpfQc9CYs4MnfidRNI2cOcrT1HqoJbVV7%2BujhsywsYPx8Kv0NzuCitxd&noverify=0&group_code=192088919
    linkText: 加入HappyDog！
  - icon:
      src: /server_icons/MCIC.jpg
    title: MCIC
    details: 版本：JAVA | 1.16.x-1.20.2</br>*Unknown**无线电静默*成分复杂的服务器
    link: https://qm.qq.com/q/6DsL9DkN3O
    linkText: 加入MCIC!
  
  - icon:
      src: /server_icons/桦字云动.jpg
    title: 桦字云动--现实主义基岩版特色生存
    details: 版本：基岩版1.20~1.21.2 | 在游戏中，我们引入了更接近现实生活的合成配方和系统。所有的道具和物品都需要更复杂的材料和工艺，增加了游戏的深度和挑战性。
    link: http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=-zK1L63kZnjdFeZU2u7kBOGMhQgK7yfX&authKey=rMQ92V8gLBzHBPCAl%2FqILp58qZhdsL5mrHfyjMK%2Foc1EzVjWI8u8W1EfQPUpISzC&noverify=0&group_code=975992476
    linkText: 开始你的世界，创造你的可能，加入我们！
  - icon:
      src: /server_icons/mcdogserver.jpg
    title: mcdogserver
    details: 版本：Java版1.21 兼容1.9~1.21 无需正版 玩家间互相传送 生电
    link: https://qm.qq.com/q/QePrFp3jeU
    linkText: 加入mcdogserver
  - icon:
      src: /server_icons/EternalStar.png
    title: EternalStar (永恒星)
    details: 版本：JAVA互通 | 1.20.4跨版本</br>群组服（纯净生存 + 小游戏 + 容易爆炸的RPG）</br>EternalStar旨在给玩家更好的游戏体验，即使我们曾经遇到过无数困难，但我们没有就此离去，在开始时我们甚至无法保证服务器正常连接，但现在我们已经拥有了强大的网络供应和顶流的服务器</br>EternalStar欢迎您！</br>愿美丽的繁星永远照耀着你
    link: https://eternalstarmc.com:442/
    linkText: 愿美丽的繁星永远照耀着你
  - icon:
      src: /server_icons/stoneworld.jpg
    title: 石头世界
    details: 版本：基岩版1.21.1~1.21.3</br>石头世界，你的下一个我的世界基岩版服务器
    link: http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=4AwZYTg4m8nsjyO2loDkUTx2Ph59VwVS&authKey=paun0bpKfXRJ7TWef%2FFLzV5tmx%2BaR%2BN3869Um2SOeYS8o%2FyuxqAzMdGIDruC76iA&noverify=0&group_code=744454929
    linkText: 加入QQ群
  ---
<script>
export default {
  mounted() {
    this.shuffleElements();
    // 如果确实需要在挂载后调用 reload() 方法，确保该方法已经定义
    // this.reload();
  },
  methods: {
    shuffleElements() {
      const elements = Array.from(document.querySelectorAll('div.VPFeatures .container .items .item'));
      const parent = document.querySelector('div.VPFeatures .container .items');

      for (let i = elements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
      }

      // 清空父元素并将重新排序后的元素添加到父元素中
      parent.innerHTML = '';
      elements.forEach(element => {
        parent.appendChild(element);
      });
    }
  }
}
</script>
