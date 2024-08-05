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
