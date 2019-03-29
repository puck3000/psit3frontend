<template>
  <main>
    <form @submit.prevent="handleSubmit">
      <fieldset>
        <legend>Frage Nr.{{question.id}}: {{question.title}}</legend>
        <p>{{question.text}}</p>
        <div v-for="answer in question.answers" :key="answer.id">
          <input type="checkbox" :id="'answer' + answer.id" name="answer">
          <label :for="'answer' + answer.id">{{answer.reply}}</label>
        </div>
        <input type="submit" value="Antwort(en) speichern">
      </fieldset>
    </form>
    <ExamNav/>
  </main>
</template>

<script>
import ExamNav from "@/components/ExamNav.vue";

export default {
  data() {
    return {
      question: {
        id: this.$route.params.id,
        title: "Titel der Frage",
        text: "Das ist die eigentliche Fragestellung",
        answers: [
          {
            id: 1,
            reply: "Das ist eine Antwortmöglichkeit",
            response: false
          },
          {
            id: 2,
            reply: "Das ist eine andere Antwortmöglichkeit",
            response: false
          },
          {
            id: 3,
            reply: "Das ist eine gute Antwortmöglichkeit",
            response: false
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log("Submitted");
      this.$router.push("/Exam/1");
    }
  },
  components: {
    ExamNav
  }
};
</script>

<style>
input[type="submit"] {
  display: block;
  margin: 1rem auto;
}
</style>
