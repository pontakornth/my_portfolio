<template>
  <div>
    <box>
      <h3 class="title is-3">
        ผลงาน
      </h3>
    </box>
    <div class="columns">
      <project-card class="is-12-mobile is-narrow-desktop" title="โปรแกรมสุ่มอาหารกลางวันอย่างง่าย" link="#">
        เป็นโปรแกรมที่ให้เลือกประเภทอาหารกลางวันแล้วสุ่มออกมา 1 ชนิด
      </project-card>
      <project-card class="is-12-mobile is-narrow-desktop" title="เว็บกลุ่มการศึกษาเพื่อความเป็นไท (ร่วมพัฒนา)" link="https://elsiam.org">
        เว็บกลุ่มการศึกษาเพื่อความเป็นไทที่ผมเข้าร่วม และได้ร่วมกันพัฒนาขึ้นมาครับ
      </project-card>
    </div>
    <div class="separate">
      <box>
        <h3 class="title is-3">
          กิจกรรม
        </h3>
      </box>
    </div>
  </div>
</template>
<script>
import ProjectCard from '@/components/ProjectCard'
import Box from '@/components/Box'
export default {
  components: { Box, ProjectCard }
}
</script>

<style>
</style>
