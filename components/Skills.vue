<template>
  <div class="section">
    <box>
      <h2 class="title is-narrow-desktop">
        ความสามารถ
      </h2>
    </box>
    <div class="container has-text-centered">
      <div class="columns is-centered">
        <div class="column is-6">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>เครื่องมือที่ใช้</th>
                <th>ระดับความสามารถ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(skill, index) in programmingSkills" :key="index">
                <td>{{ skill.name }}</td>
                <td><Stars :amount="skill.level" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="column is-6">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>ภาษา</th>
                <th>ระดับความสามารถ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(skill, index) in languageSkills" :key="index">
                <td>{{ skill.name }}</td>
                <td><Stars :amount="skill.level" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from '@/components/Stars'
import Box from '@/components/Box'
export default {
  components: { Box, Stars },
  data() {
    return {
      programmingSkills: [
        {
          name: 'React',
          level: 2
        },
        {
          name: 'Vue/Nuxt',
          level: 3
        },
        {
          name: 'HTML/CSS',
          level: 4
        },
        {
          name: 'Javascript',
          level: 3
        },
        {
          name: 'Python',
          level: 3
        }
      ],
      languageSkills: [
        {
          name: 'ภาษาไทย',
          level: 5
        },
        {
          name: 'ภาษาอังกฤษ',
          level: 3
        },
        {
          name: 'ภาษาสเปน',
          level: 2
        }
      ]
    }
  }
}
</script>

<style>
.is-2-line {
  min-height: 2em;
}
</style>
