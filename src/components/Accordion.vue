<script setup lang="ts">
import { ref } from "vue";

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

defineProps<{
  i: {
    question: string;
    answer: string;
  };
}>();

const QA = ref("isClosed");
const isOpen = ref(false);
const toggleAnswer = () => {
  if (QA.value == "isClosed") {
    isOpen.value = true;
    QA.value = "isOpen";
  } else {
    isOpen.value = false;
    QA.value = "isClosed";
  }
};

</script>

<template>
  <div @click="toggleAnswer()" :class="QA">
    <h5 class="question">{{ i.question }}</h5>
    <div v-if="QA == 'isOpen'" class="answer">
      <div class="line"></div>
      <p>{{ i.answer }}</p>
    </div>
  </div>
</template>

<style scoped>
.isClosed,
.isOpen {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-align: center;
  width: 40rem;
  padding: 15px;
  transition: 0.4s;
  padding-top: 15px;
  justify-content: baseline;
}

.isClosed {
  height: 50px;
}
.isOpen {
  height: 190px;
}

.question {
  font-size: 0.9rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 10px;
  padding: 0;
}

.answer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--ivory);
  text-align: left;
  overflow: scroll;
}

.answer p {
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  width: 80%;
}
.line {
  border: 1px solid var(--dark-grey);
  margin: 20px auto;
  width: 90%;
}

@media only screen and (max-width: 850px) {
  .isClosed,
  .isOpen {
    width: 90%;
    margin: 10px auto;
  }

  .isClosed {
  height: 95px;
}
.isOpen {
  height: 290px;
}
.answer p {
  width: 100%;
}
}
</style>
