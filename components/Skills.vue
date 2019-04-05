<template>
  <div class="section">
    <box>
      <h2 class="title is-narrow-desktop">
        Skill
      </h2>
    </box>
    <div class="container has-text-centered">
      <div class="columns is-centered">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Library/Framework</th>
              <th>ระดับความสามารถ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(skill, index) in skills" :key="index">
              <td>{{ skill.name }}</td>
              <td><Stars :amount="skill.level" /></td>
            </tr>
          </tbody>
        </table>
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
      skills: [
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
