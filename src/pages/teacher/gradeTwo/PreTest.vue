<template>
  <q-page class="bg-blue-3">
    <div class="p-5">
      <div class="p-2 bg-white">
        <div class=" border border-lime-500 flex flex-col items-center justify-center p-5 gap-20 h-screen">
          <div class="p-2 bg-white shadow-2xl" v-if="step === 1">
            <div class=" border border-lime-500 flex flex-col items-center p-5 gap-10">
                <div>
                  <h4 class="text-bold px-5 py-2 font-serif text-center">PRE TEST</h4><hr class="border border-lime-500">
                </div>
                <div class="flex flex-col justify-center items-center gap-5">
                  <q-btn label="Shuffle Question" class="bg-blue-3" :icon-right="isShuffled? 'fa-regular fa-circle-check' : 'shuffle'" flat @click="shuffle"/>
                  <q-btn label="Start" class="bg-blue-3" flat size="lg" @click="step = 2"/>
                  <span class="text-lg"><b>Direction: </b>Answer the following question and choose the correct answer for each mathematical problems.</span>
                </div>
            </div>
          </div>
          <div class="p-2 bg-white shadow-2xl" v-else-if="step === 2">
            <div class=" border border-lime-500 flex flex-col items-center p-5 gap-10">
                <div>
                  <h4 class="text-bold px-5 py-2 font-serif">Enter your name: </h4><hr class="border border-lime-500">
                </div>
                <div class="flex flex-col justify-center items-center gap-5 w-full">
                  <q-input placeholder="Please enter your name" outlined class="w-full" v-model="name"/>
                  <q-btn label="Proceed"  @click="step = 3"/>
                </div>
            </div>
          </div>
          <div class="p-2 bg-white shadow-2xl" v-else-if="step === 3">
            <div class=" border border-lime-500 flex flex-col items-center p-5 gap-10" v-if="questionAndAnswer.length > index">
                <div>
                  <h4 class="text-bold px-5 py-2 font-serif">{{  questionAndAnswer[index].question }}</h4><hr class="border border-lime-500">
                </div>
                <div class="flex flex-col justify-center items-center gap-5 w-full">
                  <div v-for="choice in questionAndAnswer[index].choices" :key="choice">
                    <q-btn :label="choice" class="w-full" @click="checkAnswer(choice)"/>
                  </div>
                </div>
            </div>
            <div v-else>
              <div class=" border border-lime-500 flex flex-col items-center p-5 gap-10">
                  <div>
                    <span class="text-bold py-2 font-serif md:text-h3 text-h6">CONGRATULATION</span><br>
                    <span class="pb-3 text-xl">Name: {{ name }}</span><hr class="border border-lime-500">
                  </div>
                  <div class="flex flex-col justify-center items-center gap-5 w-full">
                    <h4>Your score: {{ correctAnswer }}</h4>
                  </div>
              </div>
              <div class="flex justify-center p-2">
                <RouterLink to="/grade-two/home" class="bg-blue-3 rounded py-2 px-5 text-md" >Exit</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const isShuffled = ref(false)

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]] // Swap elements
  }

}

const step = ref(1)
const index = ref(0)
const name = ref('')

const questionAndAnswer = [
  {
    question: 'What is the sum of 2 + 9?',
    answer: 11,
    choices: [10, 12, 11, 13],
  },
  {
    question: 'What is the difference of 9 - 6?',
    answer: 3,
    choices: [2, 4, 3, 5],
  },
]

questionAndAnswer.forEach((qa) => {
  shuffleArray(qa.choices)
})

const shuffle = () => {
  isShuffled.value = true
  shuffleArray(questionAndAnswer)
}


const correctAnswer = ref(0)
const checkAnswer = (answer) => {
  if (answer === questionAndAnswer[index.value].answer) {
    correctAnswer.value += 1
  }
  index.value += 1
}
</script>

