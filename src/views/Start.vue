<template>
  <main>
    <h1>Welcome to Vivi(?)</h1>
    <h2>Pick an exam:</h2>
    <ul>
      <li v-for="exam in exams" :key="exam.id">
        <router-link :to="{ path: '/Exam/'+ exam.id}">Exam {{exam.id}}: {{exam.title}}</router-link>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      exams: [
        {
          id: 1,
          title: "SWEN1 SEP 2019"
        },
        {
          id: 2,
          title: "COM COM Just for fun 2019"
        },
        {
          id: 3,
          title: "WING SEP 2019"
        }
      ]
    };
  }
};
</script>

<style>
li {
  text-align: left;
}
</style>
