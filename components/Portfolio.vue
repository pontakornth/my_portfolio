<template>
  <div class="section">
    <box>
      <h3 class="title is-3">
        ผลงาน
      </h3>
    </box>
    <div class="columns">
      <project-card class="is-12-mobile is-6-desktop" title="โปรแกรมสุ่มอาหารกลางวันอย่างง่าย" link="#">
        เป็นโปรแกรมที่ให้เลือกประเภทอาหารกลางวันแล้วสุ่มออกมา 1 ชนิด
      </project-card>
      <project-card class="is-12-mobile is-6-desktop" title="เว็บกลุ่มการศึกษาเพื่อความเป็นไท (ร่วมพัฒนา)" link="https://elsiam.org">
        เว็บกลุ่มการศึกษาเพื่อความเป็นไทที่ผมเข้าร่วม และได้ร่วมกันพัฒนาขึ้นมาครับ
      </project-card>
    </div>
    <div class="separate">
      <box>
        <h3 class="title is-3">
          กิจกรรม
        </h3>
      </box>
      <div class="columns is-multiline">
        <card class="is-12-mobile is-6-desktop" title="โครงการนักเรียนแลกเปลี่ยน AFS">
          <figure class="image is-3x4">
            <img src="~assets/AFS.jpg" alt="AFS Photo">
          </figure>
        </card>
        <card class="is-12-mobile is-6-desktop" title="ค่าย SIIT Open House">
          <figure class="image is-3x4">
            <img src="~assets/SIIT_MOST.jpg" alt="SIIT Photo">
          </figure>
        </card>
        <card class="is-12-mobile is-6-desktop" title="ค่ายติว ToBeIT62 ที่สถาบันเทคโนโลยีพระจอมเกล้าคุณทหารลาดกระบัง">
          <figure class="image is-3x4">
            <img src="~assets/tobeit.jpg" alt="Tobeit 62 photo">
          </figure>
        </card>
        <card class="is-12-mobile is-6-desktop" title="กิจกรรมสภาจำลองร่วมกับคณะรัฐศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย">
          <figure class="image is-3x4">
            <img src="~assets/govsim.jpg" alt="government simulation photo">
          </figure>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectCard from '@/components/ProjectCard'
import Card from '@/components/Card'
import Box from '@/components/Box'
export default {
  components: { Box, ProjectCard, Card }
}
</script>

<style>
</style>
