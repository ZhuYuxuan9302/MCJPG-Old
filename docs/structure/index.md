---
layout: page
title: MCJPG
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
const Server = [
    {
    avatar: '/teammate/2/SuiFeng.jpg',
    name: '随风潜入夜',
    title: '技术支持',
    desc: '为MCJPG的网站编写，服务器插件维护做出了巨大贡献 | MC生电服腐竹',
  },
  {
    avatar: '/teammate/2/白千琴.jpg',
    name: '白千琴',
    title: '会长',
    desc: '在MSCPO第二次公开选举中票数第一，OURCRAFT（予巧）团队代表，同时也是OURCRAFT服务器腐竹、OURCRAFT委员会总执事',
  },
  {
    avatar: '/teammate/2/Ленинград.jpg',
    name: 'Ленинград',
    title: '网站作者',
    desc: '为MCJPG网站提供了源码级的技术支持',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>组织架构</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="Server" />

</VPTeamPage>
