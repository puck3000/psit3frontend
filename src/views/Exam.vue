<template>
  <main>
    <h1>Dynamic rendering of Exam {{this.$route.params.id}}</h1>
    <ul>
      <li v-for="question in exam.questions" :key="question.id">
        <router-link :to="{ path: '/Exam/'+ exam.id + '/question/' + question.id}">
          Frage Nr.{{question.id}}:
          <br>
          {{question.title}}
          <br>Status:
          <span v-if="question.replied">beantworted</span>
          <span v-else>offen</span>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
// import { match } from "minimatch";

export default {
  data: function() {
    return {
      exam: {
        id: this.$route.params.id,
        title: "Exam Title",
        questions: [
          {
            id: 1,
            title: "Das ist eine Frage",
            replied: false
          },
          {
            id: 2,
            title: "Das ist eine andere Frage",
            replied: false
          },
          {
            id: 3,
            title: "Das ist eine gute Frage",
            replied: false
          }
        ]
      }
    };
  }
};
</script>

<style>
ul {
  /* padding: 0; */
}

li a {
  display: block;
  text-align: left;
  padding-bottom: 2rem;
}
</style>